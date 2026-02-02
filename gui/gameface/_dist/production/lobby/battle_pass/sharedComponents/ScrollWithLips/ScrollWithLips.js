(() => {
    'use strict';
    var __webpack_modules__ = {
            6724: () => {
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                ('undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent));
            },
            2773: (e, t, n) => {
                n.d(t, { $Q: () => w });
                var r = n(6483),
                    o = n.n(r),
                    a = n(7515),
                    s = n(1856),
                    i = n(3138),
                    c = n(3815),
                    l = n(560),
                    u = n(7727),
                    d = n(7363),
                    _ = n.n(d),
                    f = n(6358),
                    v = n(372);
                const m = 'disable',
                    p = { pending: !1, offset: 0 },
                    g = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    h = () => {},
                    E = (e, t) => Math.max(20, e.offsetWidth * t),
                    w = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = g, onDrag: r = h }) => {
                        const w = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            y = (0, d.useRef)(null),
                            S = (0, d.useRef)(null),
                            P = (0, d.useRef)(null),
                            O = e.stepTimeout || 100,
                            R = (0, d.useState)(p),
                            T = R[0],
                            C = R[1],
                            M = (0, d.useCallback)(
                                (e) => {
                                    (C(e),
                                        P.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: P.current }));
                                },
                                [r],
                            ),
                            k = () => {
                                const t = S.current,
                                    n = P.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / o),
                                    c = (0, a.u)(0, 1, s / (o - r)),
                                    l = (t.offsetWidth - E(t, i)) * c;
                                ((n.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (b.current && y.current && S.current && P.current) {
                                            if (0 === e)
                                                return (b.current.classList.add(m), void y.current.classList.remove(m));
                                            if (
                                                ((t = S.current),
                                                (n = P.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (b.current.classList.remove(m), void y.current.classList.add(m));
                                            var t, n;
                                            (b.current.classList.remove(m), y.current.classList.remove(m));
                                        }
                                    })(l));
                            },
                            N = (0, c.z)(() => {
                                ((() => {
                                    const t = P.current,
                                        n = S.current,
                                        r = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && r && n)) return;
                                    const a = Math.min(1, r / o);
                                    ((t.style.width = `${E(n, a)}px`),
                                        (t.style.display = 'flex'),
                                        w.current &&
                                            (1 !== a
                                                ? w.current.classList.add(v.Z.base__active)
                                                : w.current.classList.remove(v.Z.base__active)));
                                })(),
                                    k());
                            });
                        ((0, d.useEffect)(() => (0, s.v)(N)),
                            (0, d.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const t = () => {
                                            k();
                                        };
                                        let n = h;
                                        const r = () => {
                                            (n(), (n = (0, s.v)(N)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', N),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (n(),
                                                    e.events.off('recalculateContent', N),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!T.pending) return;
                                const t = i.O.client.events.mouse.move(([t, n]) => {
                                        var o;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const i = S.current,
                                            c = P.current;
                                        if (!i || !c) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - T.offset - i.getBoundingClientRect().x,
                                            u = (l / i.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: c, thumbOffset: l, contentOffset: u }));
                                    }),
                                    n = i.O.client.events.mouse.up(() => {
                                        (t(), M(p));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, T.offset, T.pending, r, M]));
                        const L = (0, l.B)((t) => e.applyStepTo(t), O, [e]),
                            x = L[0],
                            B = L[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const A = (e) => {
                            e.target.classList.contains(m) || (0, u.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: o()(v.Z.base, t.base), ref: w, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: o()(v.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(m) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), x(f.Nm.Next));
                                },
                                onMouseUp: B,
                                ref: b,
                                onMouseEnter: A,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: o()(v.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = P.current;
                                        if (r && 0 === t.button)
                                            if (((0, u.G)('play'), t.target === r))
                                                M({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = P.current,
                                                        o = e.contentRef.current;
                                                    if (!r || !o) return;
                                                    const a = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? f.Nm.Prev : f.Nm.Next);
                                            }
                                    },
                                    ref: S,
                                    onMouseEnter: A,
                                },
                                _().createElement('div', { ref: P, className: o()(v.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: o()(v.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: o()(v.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(m) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), x(f.Nm.Prev));
                                },
                                onMouseUp: B,
                                ref: y,
                                onMouseEnter: A,
                            }),
                        );
                    });
            },
            2840: (e, t, n) => {
                n.d(t, { K: () => u });
                var r = n(6483),
                    o = n.n(r),
                    a = n(7363),
                    s = n.n(a),
                    i = n(2773),
                    c = n(7950),
                    l = n(4682);
                const u = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: r,
                    areaClassName: u,
                    classNames: d,
                    scrollClassName: _,
                    getStepByRailClick: f,
                    onDrag: v,
                }) => {
                    const m = (0, a.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: o()(l.Z.base, e.base) });
                        }, [r]),
                        p = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: o()(l.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: o()(l.Z.defaultScrollArea, u) },
                            s().createElement(c.Area, { className: _, api: p, classNames: d }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: f, api: t, onDrag: v, classNames: m }),
                    );
                };
            },
            7950: (e, t, n) => {
                (n.r(t),
                    n.d(t, {
                        Area: () => _,
                        Bar: () => c.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    }));
                var r = n(6483),
                    o = n.n(r),
                    a = n(1856),
                    s = n(7363),
                    i = n.n(s),
                    c = n(2773),
                    l = n(2840),
                    u = n(4682),
                    d = n(6358);
                const _ = ({ api: e, className: t, classNames: n, children: r }) => (
                    (0, s.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: o()(u.Z.base, t) },
                        i().createElement(
                            'div',
                            {
                                className: o()(u.Z.wrapper, null == n ? void 0 : n.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: o()(u.Z.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                r,
                            ),
                        ),
                    )
                );
                ((_.Bar = c.$Q), (_.Default = l.K));
            },
            6358: (e, t, n) => {
                n.d(t, { Nm: () => o.Nm, T5: () => s, he: () => o.he });
                var r = n(3138),
                    o = n(7308);
                const a = {
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
                        getDirection: (e) => (e.deltaY > 1 ? o.Nm.Next : o.Nm.Prev),
                        forceTriggerMouseMove: r.O.view.forceTriggerMouseMove,
                    },
                    s = (0, o.EO)(a);
            },
            6225: (e, t, n) => {
                n.d(t, { $Q: () => b });
                var r = n(6483),
                    o = n.n(r),
                    a = n(7515),
                    s = n(1856),
                    i = n(3138),
                    c = n(3815),
                    l = n(560),
                    u = n(7727),
                    d = n(7363),
                    _ = n.n(d),
                    f = n(7701),
                    v = n(9168);
                const m = 'disable',
                    p = () => {},
                    g = { pending: !1, offset: 0 },
                    h = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    E = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    w = (e, t) => Math.max(20, e.offsetHeight * t),
                    b = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = h, onDrag: r = p }) => {
                        const b = (0, d.useRef)(null),
                            y = (0, d.useRef)(null),
                            S = (0, d.useRef)(null),
                            P = (0, d.useRef)(null),
                            O = (0, d.useRef)(null),
                            R = e.stepTimeout || 100,
                            T = (0, d.useState)(g),
                            C = T[0],
                            M = T[1],
                            k = (0, d.useCallback)(
                                (e) => {
                                    (M(e),
                                        O.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: O.current }));
                                },
                                [r],
                            ),
                            N = (0, c.z)(() => {
                                const t = O.current,
                                    n = P.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && o && t && n)) return;
                                const a = Math.min(1, r / o);
                                return (
                                    (t.style.height = `${w(n, a)}px`),
                                    (t.style.display = 'flex'),
                                    b.current &&
                                        (1 !== a
                                            ? b.current.classList.add(v.Z.base__active)
                                            : b.current.classList.remove(v.Z.base__active)),
                                    a
                                );
                            }),
                            L = (0, c.z)(() => {
                                const t = P.current,
                                    n = O.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / o),
                                    c = (0, a.u)(0, 1, s / (o - r)),
                                    l = (t.offsetHeight - w(t, i)) * c;
                                ((n.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (y.current && S.current && P.current && O.current) {
                                            if (0 === Math.round(e))
                                                return (y.current.classList.add(m), void S.current.classList.remove(m));
                                            if (
                                                ((t = P.current),
                                                (n = O.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (y.current.classList.remove(m), void S.current.classList.add(m));
                                            var t, n;
                                            (y.current.classList.remove(m), S.current.classList.remove(m));
                                        }
                                    })(l));
                            }),
                            x = (0, c.z)(() => {
                                E(e, () => {
                                    (N(), L());
                                });
                            });
                        ((0, d.useEffect)(() => (0, s.v)(x)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    E(e, () => {
                                        L();
                                    });
                                };
                                let n = p;
                                const r = () => {
                                    (n(), (n = (0, s.v)(x)));
                                };
                                return (
                                    e.events.on('recalculateContent', x),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', x),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!C.pending) return;
                                const t = i.O.client.events.mouse.up(() => {
                                        k(g);
                                    }),
                                    n = i.O.client.events.mouse.move(([t]) => {
                                        E(e, (n) => {
                                            const o = P.current,
                                                a = O.current,
                                                s = e.getContainerSize();
                                            if (!o || !a || !s) return;
                                            const i = t.screenY - C.offset - o.getBoundingClientRect().y,
                                                c = (i / o.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, c),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: c }));
                                        });
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, C.offset, C.pending, r, k]));
                        const B = (0, l.B)((t) => e.applyStepTo(t), R, [e]),
                            A = B[0],
                            D = B[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const z = (e) => {
                            e.target.classList.contains(m) || (0, u.G)('highlight');
                        };
                        return _().createElement(
                            'div',
                            { className: o()(v.Z.base, t.base), ref: b, onWheel: e.handleMouseWheel },
                            _().createElement('div', {
                                className: o()(v.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(m) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), A(f.Nm.Next));
                                },
                                ref: y,
                                onMouseEnter: z,
                            }),
                            _().createElement(
                                'div',
                                {
                                    className: o()(v.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const r = O.current;
                                        if (r && 0 === t.button)
                                            if (((0, u.G)('play'), t.target === r))
                                                k({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    O.current &&
                                                        E(e, (r) => {
                                                            if (!r) return;
                                                            const o = n(e),
                                                                a = e.clampPosition(r, r.scrollTop + o * t);
                                                            e.applyScroll(a);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? f.Nm.Prev : f.Nm.Next);
                                            }
                                    },
                                    ref: P,
                                    onMouseEnter: z,
                                },
                                _().createElement('div', { ref: O, className: o()(v.Z.thumb, t.thumb) }),
                                _().createElement('div', { className: o()(v.Z.rail, t.rail) }),
                            ),
                            _().createElement('div', {
                                className: o()(v.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(m) ||
                                        0 !== e.button ||
                                        ((0, u.G)('play'), A(f.Nm.Prev));
                                },
                                onMouseUp: D,
                                ref: S,
                                onMouseEnter: z,
                            }),
                        );
                    });
            },
            1158: (e, t, n) => {
                n.d(t, { K: () => u });
                var r = n(6483),
                    o = n.n(r),
                    a = n(7363),
                    s = n.n(a),
                    i = n(6225),
                    c = n(9605),
                    l = n(5636);
                const u = ({
                    children: e,
                    api: t,
                    className: n,
                    barClassNames: r,
                    areaClassName: u,
                    scrollClassName: d,
                    scrollClassNames: _,
                    getStepByRailClick: f,
                    onDrag: v,
                }) => {
                    const m = (0, a.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: o()(l.Z.base, e.base) });
                        }, [r]),
                        p = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return s().createElement(
                        'div',
                        { className: o()(l.Z.defaultScroll, n), onWheel: t.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: o()(l.Z.area, u) },
                            s().createElement(c.Area, { className: d, classNames: _, api: p }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: f, api: t, onDrag: v, classNames: m }),
                    );
                };
            },
            9605: (e, t, n) => {
                (n.r(t),
                    n.d(t, { Area: () => _, Bar: () => c.$Q, Default: () => l.K, useVerticalScrollApi: () => u.c4 }));
                var r = n(6483),
                    o = n.n(r),
                    a = n(1856),
                    s = n(7363),
                    i = n.n(s),
                    c = n(6225),
                    l = n(1158),
                    u = n(7701),
                    d = n(5636);
                const _ = ({ className: e, classNames: t, children: n, api: r }) => (
                    (0, s.useEffect)(() => (0, a.v)(r.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: o()(d.Z.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(d.Z.content, null == t ? void 0 : t.content), ref: r.contentRef },
                            n,
                        ),
                    )
                );
                _.Default = l.K;
            },
            7701: (e, t, n) => {
                n.d(t, { Nm: () => r.Nm, c4: () => a });
                var r = n(7308);
                const o = {
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                    },
                    a = (0, r.EO)(o);
            },
            7308: (e, t, n) => {
                n.d(t, { EO: () => f, Nm: () => d, he: () => _ });
                var r = n(7515),
                    o = n(1856),
                    a = n(4532),
                    s = n(9653),
                    i = n(3815),
                    c = n(4489),
                    l = n(7363),
                    u = n(7030);
                let d;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(d || (d = {}));
                const _ = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    f = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: d,
                        getWrapperSize: f,
                        forceTriggerMouseMove: v,
                    }) => {
                        const m = (e, n) => {
                            const o = t(e),
                                a = o[0],
                                s = o[1];
                            return s <= a ? 0 : (0, r.u)(a, s, n);
                        };
                        return (r = {}) => {
                            const p = r.settings,
                                g = void 0 === p ? _ : p,
                                h = (0, l.useRef)(null),
                                E = (0, l.useRef)(null),
                                w = (0, l.useRef)(!1),
                                b = (0, s.q)(),
                                y = (0, c.f)(
                                    () => {
                                        v && v();
                                    },
                                    [],
                                    150,
                                ),
                                S = (0, u.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = h.current;
                                        t && (n(t, e), b.trigger('change', e), v && w.current && y());
                                    },
                                    onRest: (e) => b.trigger('rest', e),
                                    onStart: (e) => b.trigger('start', e),
                                    onPause: (e) => b.trigger('pause', e),
                                })),
                                P = S[0],
                                O = S[1],
                                R = (0, l.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const o = P.scrollPosition.get(),
                                            a = (null != (r = P.scrollPosition.goal) ? r : 0) - o;
                                        return m(e, t * n + a + o);
                                    },
                                    [P.scrollPosition],
                                ),
                                T = (0, l.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = h.current;
                                        r &&
                                            O.start({
                                                scrollPosition: m(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: g.animationConfig,
                                                from: { scrollPosition: m(r, P.scrollPosition.get()) },
                                            });
                                    },
                                    [O, g.animationConfig, P.scrollPosition],
                                ),
                                C = (0, l.useCallback)(
                                    (e) => {
                                        const t = h.current,
                                            n = E.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return f(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, g.step),
                                            o = R(t, e, r);
                                        T(o);
                                    },
                                    [T, R, g.step],
                                ),
                                M = (0, l.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(d(e)),
                                            h.current && b.trigger('mouseWheel', e, P.scrollPosition, t(h.current)));
                                    },
                                    [P.scrollPosition, C, b],
                                ),
                                k = (0, a.M)(
                                    () =>
                                        (0, o.v)(() => {
                                            const e = h.current;
                                            e &&
                                                (T(m(e, P.scrollPosition.goal), { immediate: !0 }),
                                                b.trigger('resizeHandled'));
                                        }),
                                    [T, P.scrollPosition.goal],
                                ),
                                N = (0, i.z)(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const t = m(e, P.scrollPosition.goal);
                                    (t !== P.scrollPosition.goal && T(t, { immediate: !0 }),
                                        b.trigger('recalculateContent'));
                                });
                            ((0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', k),
                                    () => {
                                        window.removeEventListener('resize', k);
                                    }
                                ),
                                [k],
                            ),
                                (0, l.useEffect)(() => {
                                    const e = h.current;
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
                                }, [h]));
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (E.current ? f(E.current) : void 0),
                                    getContainerSize: () => (h.current ? e(h.current) : void 0),
                                    getBounds: () =>
                                        h.current
                                            ? t(h.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: g.step.clampedArrowStepTimeout,
                                    clampPosition: m,
                                    handleMouseWheel: M,
                                    applyScroll: T,
                                    applyStepTo: C,
                                    contentRef: h,
                                    wrapperRef: E,
                                    scrollPosition: O,
                                    animationScroll: P,
                                    recalculateContent: N,
                                    events: { on: b.on, off: b.off },
                                }),
                                [P.scrollPosition, T, C, b.off, b.on, N, M, O, g.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, n) => {
                n(7950);
                n(9605);
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
                    n.d(t, { mouse: () => u, off: () => c, on: () => i, onResize: () => a, onScaleUpdated: () => s }));
                var r = n(2472),
                    o = n(1176);
                const a = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    c = (e, t) => engine.off(e, t),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
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
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const a = `mouse${t}`,
                                        s = l[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        r(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(a, i),
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
                    return Object.assign({}, a, {
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
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    }));
                var r = n(527),
                    o = n(2493);
                function a(e = 'px') {
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
                    a = n(514);
                const s = { view: n(7641), client: r, sound: a.ZP, intl: o.N };
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
                    a = Object.keys(o).reduce((e, t) => ((e[t] = () => (0, r.playSound)(o[t])), e), {}),
                    s = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
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
                        addPreloadTexture: () => c,
                        arabic2roman: () => T,
                        children: () => o,
                        displayStatus: () => a.W,
                        displayStatusIs: () => M,
                        enableFullScreenModeSupported: () => L,
                        events: () => s.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => P,
                        freezeTextureBeforeResize: () => p,
                        getBrowserTexturePath: () => u,
                        getDisplayStatus: () => O,
                        getExternalPaddingsRem: () => C,
                        getFontNames: () => R,
                        getScale: () => g,
                        getSize: () => f,
                        getViewGlobalPosition: () => m,
                        initExternalPaddings: () => x,
                        isEventHandled: () => S,
                        isFocused: () => b,
                        pxToRem: () => h,
                        remToPx: () => E,
                        resize: () => v,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => w,
                        setEventHandled: () => y,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => N,
                    }));
                var r = n(9690),
                    o = n(3722),
                    a = n(6112),
                    s = n(6538),
                    i = n(8566);
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function u(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function p() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function w(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function y() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function P() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const R = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    T = r.cg;
                function C() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const M = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    k = {
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
                function L() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function x(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            r = t.right,
                            o = t.bottom,
                            a = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${o}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const r = ['args'];
                const o = 2,
                    a = 16,
                    s = 32,
                    i = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((o = a),
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
                    l = {
                        close(e) {
                            c('popover' === e ? o : s);
                        },
                        minimize() {
                            c(i);
                        },
                        move(e) {
                            c(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4532: (e, t, n) => {
                n.d(t, { M: () => o });
                var r = n(7363);
                const o = (e, t = []) => {
                    const n = (0, r.useRef)(),
                        o = (0, r.useCallback)((...t) => {
                            (n.current && n.current(), (n.current = e(...t)));
                        }, t);
                    return (
                        (0, r.useEffect)(
                            () => () => {
                                n.current && n.current();
                            },
                            [o],
                        ),
                        o
                    );
                };
            },
            9653: (e, t, n) => {
                n.d(t, { q: () => s });
                var r = n(7363);
                function o(e, t) {
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
                const s = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        n = (e, n) => {
                            t(e).set(n, n);
                        },
                        a = (e, n) => {
                            t(e).delete(n);
                        },
                        s = (e, ...n) => {
                            for (var r, a = o(t(e).values()); !(r = a()).done; ) {
                                (0, r.value)(...n);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: n, off: a, trigger: s }), []);
                };
            },
            3815: (e, t, n) => {
                n.d(t, { z: () => a });
                var r = n(7363);
                const o = [];
                function a(e) {
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
                        a = (0, r.useCallback)(() => {
                            (window.clearInterval(o.current), (o.current = 0));
                        }, n || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, r.useCallback)((n) => {
                            (0 !== o.current && a(), (o.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, s),
                        a,
                    ];
                }
            },
            4489: (e, t, n) => {
                n.d(t, { f: () => a });
                var r = n(5139),
                    o = n(7363);
                function a(e, t, n) {
                    const a = (0, o.useMemo)(() => (0, r.Z)(n, e), t);
                    return ((0, o.useEffect)(() => a.cancel, [a]), a);
                }
            },
            5521: (e, t, n) => {
                let r, o;
                (n.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(o || (o = {})));
            },
            9690: (e, t, n) => {
                n.d(t, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    o = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
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
                        a = !1,
                        s = 0;
                    function i() {
                        o && clearTimeout(o);
                    }
                    function c(...c) {
                        const l = this,
                            u = Date.now() - s;
                        function d() {
                            ((s = Date.now()), n.apply(l, c));
                        }
                        a ||
                            (r && !o && d(),
                            i(),
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
                        (c.cancel = function () {
                            (i(), (a = !0));
                        }),
                        c
                    );
                }
                n.d(t, { Z: () => r });
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(3138);
                class o {
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
                        return (window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, t, n = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, n, o);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                o.__instance = void 0;
                const a = o;
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
            9916: (e, t, n) => {
                n.d(t, { ry: () => g });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, t) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: t }));
                    }
                    unregister(e, t) {
                        const n = e,
                            r = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                r.__instance = void 0;
                const o = r;
                var a = n(1358);
                var s = n(8613);
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(5521),
                    f = n(3138);
                const v = ['args'];
                function m(e, t, n, r, o, a, s) {
                    try {
                        var i = e[a](s),
                            c = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(c) : Promise.resolve(c).then(r, o);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (r, o) {
                                        var a = e.apply(t, n);
                                        function s(e) {
                                            m(a, r, o, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            m(a, r, o, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                                    return o;
                                })(t, v);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    E = () => h(i.CLOSE),
                    w = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var b = n(7572);
                const y = o.instance,
                    S = {
                        DataTracker: a.Z,
                        ViewModel: b.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => h(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => h(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            h(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), a) => {
                            const s = f.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                u = c.y,
                                d = c.width,
                                _ = c.height,
                                v = {
                                    x: f.O.view.pxToRem(l) + s.x,
                                    y: f.O.view.pxToRem(u) + s.y,
                                    width: f.O.view.pxToRem(d),
                                    height: f.O.view.pxToRem(_),
                                };
                            h(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: p(v),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, E);
                        },
                        handleViewEvent: h,
                        onBindingsReady: g,
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
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const o = Object.prototype.toString.call(t[r]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < o.length; t++) n[r].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => o });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            1307: (e, t, n) => {
                (n(6483), n(794), n(9605), n(7363), n(6724), n(9916));
                let r;
                !(function (e) {
                    ((e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End'));
                })(r || (r = {}));
            },
            372: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalBar_base_49',
                    base__active: 'HorizontalBar_base__active_5e',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    base: 'VerticalBar_base_f3',
                    base__active: 'VerticalBar_base__active_72',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, n) => {
                n.d(t, { Z: () => r });
                const r = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
            },
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](n, n.exports, __webpack_require__), n.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var o = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], a = !0, s = 0; s < t.length; s++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), r < o && (o = r));
                    if (a) {
                        deferred.splice(c--, 1);
                        var i = n();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > r; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, r];
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
        (__webpack_require__.j = 2670),
        (() => {
            var e = { 2670: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [a, s, i] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(n); c < a.length; c++)
                        ((o = a[c]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0));
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(1307));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
