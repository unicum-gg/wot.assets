(() => {
    'use strict';
    var e,
        t = {
            9911: (e, t, n) => {
                n.d(t, { $Q: () => C });
                var r = n(6483),
                    o = n.n(r),
                    i = n(7515),
                    s = n(1856),
                    a = n(3138),
                    l = n(3815),
                    c = n(560),
                    u = n(7727),
                    d = n(7363),
                    f = n.n(d),
                    v = n(6358);
                const m = 'HorizontalBar_base_49',
                    g = 'HorizontalBar_base__active_5e',
                    p = 'HorizontalBar_leftButton_5f',
                    E = 'HorizontalBar_rightButton_03',
                    h = 'HorizontalBar_track_0d',
                    w = 'HorizontalBar_thumb_fd',
                    y = 'HorizontalBar_rail_32',
                    b = 'disable',
                    S = { pending: !1, offset: 0 },
                    P = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    R = () => {},
                    x = (e, t) => Math.max(20, e.offsetWidth * t),
                    C = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = P, onDrag: r = R }) => {
                        const C = (0, d.useRef)(null),
                            z = (0, d.useRef)(null),
                            T = (0, d.useRef)(null),
                            M = (0, d.useRef)(null),
                            O = (0, d.useRef)(null),
                            N = e.stepTimeout || 100,
                            _ = (0, d.useState)(S),
                            L = _[0],
                            B = _[1],
                            W = (0, d.useCallback)(
                                (e) => {
                                    (B(e),
                                        O.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: O.current }));
                                },
                                [r],
                            ),
                            k = () => {
                                const t = M.current,
                                    n = O.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / o),
                                    l = (0, i.u)(0, 1, s / (o - r)),
                                    c = (t.offsetWidth - x(t, a)) * l;
                                ((n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (z.current && T.current && M.current && O.current) {
                                            if (0 === e)
                                                return (z.current.classList.add(b), void T.current.classList.remove(b));
                                            if (
                                                ((t = M.current),
                                                (n = O.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (z.current.classList.remove(b), void T.current.classList.add(b));
                                            var t, n;
                                            (z.current.classList.remove(b), T.current.classList.remove(b));
                                        }
                                    })(c));
                            },
                            A = (0, l.z)(() => {
                                ((() => {
                                    const t = O.current,
                                        n = M.current,
                                        r = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && r && n)) return;
                                    const i = Math.min(1, r / o);
                                    ((t.style.width = `${x(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        C.current &&
                                            (1 !== i ? C.current.classList.add(g) : C.current.classList.remove(g)));
                                })(),
                                    k());
                            });
                        ((0, d.useEffect)(() => (0, s.v)(A)),
                            (0, d.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const t = () => {
                                            k();
                                        };
                                        let n = R;
                                        const r = () => {
                                            (n(), (n = (0, s.v)(A)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', A),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', A),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!L.pending) return;
                                const t = a.O.client.events.mouse.move(([t, n]) => {
                                        var o;
                                        const i = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!i || !s) return;
                                        const a = M.current,
                                            l = O.current;
                                        if (!a || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - L.offset - a.getBoundingClientRect().x,
                                            u = (c / a.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(i, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: u }));
                                    }),
                                    n = a.O.client.events.mouse.up(() => {
                                        (t(), W(S));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, L.offset, L.pending, r, W]));
                        const j = (0, c.B)((t) => e.applyStepTo(t), N, [e]),
                            D = j[0],
                            G = j[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', G, !0),
                                () => document.removeEventListener('mouseup', G, !0)
                            ),
                            [G],
                        );
                        const H = (e) => {
                            e.target.classList.contains(b) || (0, u.G)('highlight');
                        };
                        return f().createElement(
                            'div',
                            { className: o()(m, t.base), ref: C, onWheel: e.handleMouseWheel },
                            f().createElement('div', {
                                className: o()(p, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(b) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), D(v.Nm.Next));
                                },
                                onMouseUp: G,
                                ref: z,
                                onMouseEnter: H,
                            }),
                            f().createElement(
                                'div',
                                {
                                    className: o()(h, t.track),
                                    onMouseDown: (t) => {
                                        const r = O.current;
                                        if (r && 0 === t.button)
                                            if (((0, u.G)('play'), t.target === r))
                                                W({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = O.current,
                                                        o = e.contentRef.current;
                                                    if (!r || !o) return;
                                                    const i = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? v.Nm.Prev : v.Nm.Next);
                                            }
                                    },
                                    ref: M,
                                    onMouseEnter: H,
                                },
                                f().createElement('div', { ref: O, className: o()(w, t.thumb) }),
                                f().createElement('div', { className: o()(y, t.rail) }),
                            ),
                            f().createElement('div', {
                                className: o()(E, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(b) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), D(v.Nm.Prev));
                                },
                                onMouseUp: G,
                                ref: T,
                                onMouseEnter: H,
                            }),
                        );
                    });
            },
            2840: (e, t, n) => {
                n.d(t, { K: () => u });
                var r = n(6483),
                    o = n.n(r),
                    i = n(7363),
                    s = n.n(i),
                    a = n(9911),
                    l = n(7950),
                    c = n(4682);
                const u = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: r,
                    areaClassName: u,
                    classNames: d,
                    scrollClassName: f,
                    getStepByRailClick: v,
                    onDrag: m,
                }) => {
                    const g = (0, i.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: o()(c.Z.base, e.base) });
                        }, [r]),
                        p = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: o()(c.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: o()(c.Z.defaultScrollArea, u) },
                            s().createElement(l.Area, { className: f, api: p, classNames: d }, e),
                        ),
                        s().createElement(a.$Q, { getStepByRailClick: v, api: t, onDrag: m, classNames: g }),
                    );
                };
            },
            7950: (e, t, n) => {
                n.d(t, { Area: () => d });
                var r = n(6483),
                    o = n.n(r),
                    i = n(1856),
                    s = n(7363),
                    a = n.n(s),
                    l = n(9911),
                    c = n(2840),
                    u = n(4682);
                n(6358);
                const d = ({ api: e, className: t, classNames: n, children: r }) => (
                    (0, s.useEffect)(() => (0, i.v)(e.recalculateContent)),
                    a().createElement(
                        'div',
                        { className: o()(u.Z.base, t) },
                        a().createElement(
                            'div',
                            {
                                className: o()(u.Z.wrapper, null == n ? void 0 : n.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            a().createElement(
                                'div',
                                { className: o()(u.Z.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                r,
                            ),
                        ),
                    )
                );
                ((d.Bar = l.$Q), (d.Default = c.K));
            },
            6358: (e, t, n) => {
                n.d(t, { Nm: () => o.Nm });
                var r = n(3138),
                    o = n(7341);
                const i = {
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
                        e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? o.Nm.Next : o.Nm.Prev),
                    forceTriggerMouseMove: r.O.view.forceTriggerMouseMove,
                };
                (0, o.EO)(i);
            },
            7341: (e, t, n) => {
                n.d(t, { Nm: () => d, EO: () => v });
                var r = n(7515),
                    o = n(1856),
                    i = n(7363);
                function s(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                var l = n(3815),
                    c = n(5139);
                var u = n(7030);
                let d;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(d || (d = {}));
                const f = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    v = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: d,
                        forceTriggerMouseMove: v,
                    }) => {
                        const m = (e, n) => {
                            const o = t(e),
                                i = o[0],
                                s = o[1];
                            return s <= i ? 0 : (0, r.u)(i, s, n);
                        };
                        return (r = {}) => {
                            const g = r.settings,
                                p = void 0 === g ? f : g,
                                E = (0, i.useRef)(null),
                                h = (0, i.useRef)(null),
                                w = (0, i.useRef)(!1),
                                y = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        r = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        o = (e, ...n) => {
                                            for (var r, o = s(t(e).values()); !(r = o()).done; ) (0, r.value)(...n);
                                        };
                                    return (0, i.useMemo)(() => ({ on: n, off: r, trigger: o }), []);
                                })(),
                                b = (function (e, t, n) {
                                    const r = (0, i.useMemo)(() => (0, c.Z)(n, e), t);
                                    return ((0, i.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        v && v();
                                    },
                                    [],
                                    150,
                                ),
                                S = (0, u.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = E.current;
                                        t && (n(t, e), y.trigger('change', e), v && w.current && b());
                                    },
                                    onRest: (e) => y.trigger('rest', e),
                                    onStart: (e) => y.trigger('start', e),
                                    onPause: (e) => y.trigger('pause', e),
                                })),
                                P = S[0],
                                R = S[1],
                                x = (0, i.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const o = P.scrollPosition.get(),
                                            i = (null != (r = P.scrollPosition.goal) ? r : 0) - o;
                                        return m(e, t * n + i + o);
                                    },
                                    [P.scrollPosition],
                                ),
                                C = (0, i.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            R.start({
                                                scrollPosition: m(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: p.animationConfig,
                                                from: { scrollPosition: m(r, P.scrollPosition.get()) },
                                            });
                                    },
                                    [R, p.animationConfig, P.scrollPosition],
                                ),
                                z = (0, i.useCallback)(
                                    (e) => {
                                        const t = E.current,
                                            n = h.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return d(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, p.step),
                                            o = x(t, e, r);
                                        C(o);
                                    },
                                    [C, x, p.step],
                                ),
                                T = (0, i.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && z(a(e)),
                                            E.current && y.trigger('mouseWheel', e, P.scrollPosition, t(E.current)));
                                    },
                                    [P.scrollPosition, z, y],
                                ),
                                M = ((e, t = []) => {
                                    const n = (0, i.useRef)(),
                                        r = (0, i.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        (0, o.v)(() => {
                                            const e = E.current;
                                            e &&
                                                (C(m(e, P.scrollPosition.goal), { immediate: !0 }),
                                                y.trigger('resizeHandled'));
                                        }),
                                    [C, P.scrollPosition.goal],
                                ),
                                O = (0, l.z)(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const t = m(e, P.scrollPosition.goal);
                                    (t !== P.scrollPosition.goal && C(t, { immediate: !0 }),
                                        y.trigger('recalculateContent'));
                                });
                            ((0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', M),
                                    () => {
                                        window.removeEventListener('resize', M);
                                    }
                                ),
                                [M],
                            ),
                                (0, i.useEffect)(() => {
                                    const e = E.current;
                                    if (!e || !v) return;
                                    const t = () => {
                                            w.current = !0;
                                        },
                                        n = () => {
                                            w.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', n),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', n));
                                        }
                                    );
                                }, [E]));
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (h.current ? d(h.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? t(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: p.step.clampedArrowStepTimeout,
                                    clampPosition: m,
                                    handleMouseWheel: T,
                                    applyScroll: C,
                                    applyStepTo: z,
                                    contentRef: E,
                                    wrapperRef: h,
                                    scrollPosition: R,
                                    animationScroll: P,
                                    recalculateContent: O,
                                    events: { on: y.on, off: y.off },
                                }),
                                [P.scrollPosition, C, z, y.off, y.on, O, T, R, p.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            7515: (e, t, n) => {
                n.d(t, { u: () => r });
                const r = (e, t, n) => (n < e ? e : n > t ? t : n);
            },
            1856: (e, t, n) => {
                n.d(t, { v: () => r });
                const r = (e) => {
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
                };
            },
            527: (e, t, n) => {
                (n.r(t),
                    n.d(t, { mouse: () => u, off: () => l, on: () => a, onResize: () => i, onScaleUpdated: () => s }));
                var r = n(2472),
                    o = n(1176);
                const i = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
                    a = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, o.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, o.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        s = c[t]((e) => n([e, 'outside']));
                                    function a(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, a),
                                        r(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(i, a),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => s,
                        getSize: () => i,
                        graphicsQuality: () => a,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    }));
                var r = n(527),
                    o = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2493: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function o(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => o, G: () => r });
            },
            2472: (e, t, n) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => s });
                var r = n(5959),
                    o = n(7698),
                    i = n(514);
                const s = { view: n(7641), client: r, sound: i.ZP, intl: o.N };
            },
            7698: (e, t, n) => {
                n.d(t, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            514: (e, t, n) => {
                n.d(t, { ZP: () => s });
                var r = n(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(o).reduce((e, t) => ((e[t] = () => (0, r.playSound)(o[t])), e), {}),
                    s = { play: Object.assign({}, i, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                (n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => r }));
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => o });
                var r = n(2472);
                const o = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        arabic2roman: () => z,
                        children: () => o,
                        displayStatus: () => i.W,
                        displayStatusIs: () => M,
                        enableFullScreenModeSupported: () => _,
                        events: () => s.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => R,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => x,
                        getExternalPaddingsRem: () => T,
                        getFontNames: () => C,
                        getScale: () => E,
                        getSize: () => v,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => L,
                        isEventHandled: () => P,
                        isFocused: () => b,
                        pxToRem: () => h,
                        remToPx: () => w,
                        resize: () => m,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => y,
                        setEventHandled: () => S,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => f,
                        whenTutorialReady: () => N,
                    }));
                var r = n(9690),
                    o = n(3722),
                    i = n(6112),
                    s = n(6538),
                    a = n(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function f(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function y(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function S() {
                    return viewEnv.setEventHandled();
                }
                function P() {
                    return viewEnv.isEventHandled();
                }
                function R() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const C = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    z = r.cg;
                function T() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const M = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    O = {
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
                function _() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function L(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            o = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${o}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => c });
                const r = ['args'];
                const o = 2,
                    i = 16,
                    s = 32,
                    a = 64,
                    l = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((o = i),
                                              Object.entries(o).map(([e, t]) => {
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
                        var o;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? o : s);
                        },
                        minimize() {
                            l(a);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            3815: (e, t, n) => {
                n.d(t, { z: () => i });
                var r = n(7363);
                const o = [];
                function i(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), o)
                    );
                }
            },
            560: (e, t, n) => {
                n.d(t, { B: () => o });
                var r = n(7363);
                function o(e, t, n = []) {
                    const o = (0, r.useRef)(0),
                        i = (0, r.useCallback)(() => window.clearInterval(o.current), n || []);
                    (0, r.useEffect)(() => i, [i]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, r.useCallback)((n) => {
                            ((o.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, s),
                        i,
                    ];
                }
            },
            9690: (e, t, n) => {
                n.d(t, { cg: () => i });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = o.length - 1; n >= 0; n--) for (; e >= o[n]; ) ((t += r[n]), (e -= o[n]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                n.d(t, { G: () => r });
            },
            5139: (e, t, n) => {
                function r(e, t, n, r) {
                    let o,
                        i = !1,
                        s = 0;
                    function a() {
                        o && clearTimeout(o);
                    }
                    function l(...l) {
                        const c = this,
                            u = Date.now() - s;
                        function d() {
                            ((s = Date.now()), n.apply(c, l));
                        }
                        i ||
                            (r && !o && d(),
                            a(),
                            void 0 === r && u > e
                                ? d()
                                : !0 !== t &&
                                  (o = setTimeout(
                                      r
                                          ? function () {
                                                o = void 0;
                                            }
                                          : d,
                                      void 0 === r ? e - u : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                        (l.cancel = function () {
                            (a(), (i = !0));
                        }),
                        l
                    );
                }
                n.d(t, { Z: () => r });
            },
            7712: (e, t, n) => {
                (n(6483), n(7363), n(9911), n(2840), n(4682), n(6358));
            },
            4682: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            7363: (e) => {
                e.exports = React;
            },
            1533: (e) => {
                e.exports = ReactDOM;
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var i = (n[e] = { exports: {} });
        return (t[e](i, i.exports, r), i.exports);
    }
    ((r.m = t),
        (e = []),
        (r.O = (t, n, o, i) => {
            if (!n) {
                var s = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    for (var [n, o, i] = e[u], a = !0, l = 0; l < n.length; l++)
                        (!1 & i || s >= i) && Object.keys(r.O).every((e) => r.O[e](n[l]))
                            ? n.splice(l--, 1)
                            : ((a = !1), i < s && (s = i));
                    if (a) {
                        e.splice(u--, 1);
                        var c = o();
                        void 0 !== c && (t = c);
                    }
                }
                return t;
            }
            i = i || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
            e[u] = [n, o, i];
        }),
        (r.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (r.d(t, { a: t }), t);
        }),
        (r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (r.j = 679),
        (() => {
            var e = { 679: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        i,
                        [s, a, l] = n,
                        c = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (o in a) r.o(a, o) && (r.m[o] = a[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(n); c < s.length; c++) ((i = s[c]), r.o(e, i) && e[i] && e[i][0](), (e[i] = 0));
                    return r.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var o = r.O(void 0, [851], () => r(7712));
    o = r.O(o);
})();
