(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => c.L, qE: () => c.q, u5: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(1641),
                    i = u(7727),
                    s = u(7363),
                    o = u.n(s),
                    l = u(6880),
                    c = u(2106);
                const d = ({
                    children: e,
                    size: t,
                    disabled: u,
                    mixClass: n,
                    onMouseEnter: d,
                    onMouseMove: m,
                    onMouseDown: E,
                    onMouseUp: _,
                    onMouseLeave: g,
                    onClick: A,
                    isFocused: F = !1,
                    type: p = c.L.primary,
                    soundHover: f = 'highlight',
                    soundClick: D = 'play',
                }) => {
                    const h = (0, s.useRef)(null),
                        C = (0, s.useState)(F),
                        B = C[0],
                        b = C[1],
                        v = (0, s.useState)(!1),
                        w = v[0],
                        y = v[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                B && null !== h.current && !h.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, s.useEffect)(() => {
                            b(F);
                        }, [F]),
                        o().createElement(
                            'div',
                            {
                                ref: h,
                                className: r()(
                                    l.Z.base,
                                    l.Z[`base__${p}`],
                                    u && l.Z.base__disabled,
                                    t && l.Z[`base__${t}`],
                                    B && l.Z.base__focus,
                                    w && l.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== f && (0, i.G)(f), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    m && m(e);
                                },
                                onMouseUp: function (e) {
                                    u || (_ && _(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    if (u) return;
                                    const t = e.button === a.t.LEFT;
                                    (null !== D && t && (0, i.G)(D),
                                        E && E(e),
                                        F && (u || (h.current && (h.current.focus(), b(!0)))),
                                        t && y(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (g && g(e), y(!1));
                                },
                                onClick: function (e) {
                                    u || (A && A(e));
                                },
                            },
                            p !== c.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: l.Z.back }),
                                    o().createElement('span', { className: l.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(l.Z.state, l.Z.state__default) },
                                o().createElement('span', { className: l.Z.stateDisabled }),
                                o().createElement('span', { className: l.Z.stateHighlightHover }),
                                o().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: l.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2106: (e, t, u) => {
                'use strict';
                let n, r;
                (u.d(t, { L: () => n, q: () => r }),
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
                    })(r || (r = {})));
            },
            2686: (e, t, u) => {
                'use strict';
                u.d(t, { At: () => o });
                var n = u(7363),
                    r = u.n(n),
                    a = u(3458);
                u(2902);
                const i = [
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
                const o = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            o = e.getImageSource,
                            m = e.frameCount,
                            E = e.onAnimate,
                            _ = e.frameTime,
                            g = void 0 === _ ? a.O.FRAME_TIME : _,
                            A = e.initialFrameIndex,
                            F = void 0 === A ? a.O.INITIAL_FRAME_INDEX : A,
                            p = e.lastFrameIndex,
                            f = void 0 === p ? m - 1 : p,
                            D = e.loop,
                            h = void 0 === D ? a.O.LOOP : D,
                            C = e.state,
                            B = void 0 === C ? a.O.STATE : C,
                            b = e.onAnimationDone,
                            v = e.onAnimationComplete,
                            w = e.poster,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, i);
                        const S = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = S.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (B) {
                                    case 'play':
                                        return (function () {
                                            const e = d(F, f, o),
                                                t = l(F, f),
                                                n = window.setInterval(() => {
                                                    const r = t(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == E || E(r, a),
                                                          u(a),
                                                          r === f &&
                                                              (null == v || v(),
                                                              h || (null == b || b(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, g);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === F && w ? { path: w, x: 0, y: 0 } : o(F),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(c(e, t));
                                            return (
                                                t.addEventListener('load', n),
                                                () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [g, o, F, f, h, E, v, b, w, B]),
                            r().createElement('canvas', s({}, y, { width: t, height: u, ref: S }))
                        );
                    }),
                    l = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return ((u += 1), u > t && (u = e), n);
                        };
                    },
                    c = (e, t) => Object.assign({}, e, { img: t }),
                    d = (e, t, u) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= t; a++) {
                            const e = u(a),
                                t = r[e.path];
                            if (t) n.set(a, c(e, t));
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
                                    n.set(a, c(e, t)));
                            }
                        }
                        return n;
                    };
            },
            3458: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => n });
                const n = { FRAME_TIME: 33, INITIAL_FRAME_INDEX: 0, LOOP: !0, STATE: 'play' };
            },
            126: (e, t, u) => {
                'use strict';
                function n(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (n) => {
                        const r = n % u,
                            a = (r % t.columns) * e.width,
                            i = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: a, y: i };
                    };
                }
                function r(e) {
                    return (t) => `${e}${t}`;
                }
                u.d(t, { V: () => r, q: () => n });
            },
            2902: (e, t, u) => {
                'use strict';
                (u(7363), u(3458));
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Q: () => s, Y: () => l });
                var n = u(3138),
                    r = u(7363),
                    a = u(1043),
                    i = u(5262);
                function s(e = n.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign({ width: t, height: u }, (0, i.T)(t, u, a.j));
                }
                const o = s(),
                    l = (0, r.createContext)(o);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => s });
                var n = u(3138),
                    r = u(7363),
                    a = u.n(r),
                    i = u(3495);
                const s = ({ children: e }) => {
                    const t = (0, r.useState)(i.Q),
                        u = t[0],
                        s = t[1],
                        o = (0, r.useState)(!1),
                        l = o[0],
                        c = o[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                s((e) => {
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
                        a().createElement(i.Y.Provider, { value: u }, l && e)
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
                    const s = (0, n.useContext)(a.Y),
                        o = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        d = s.small,
                        m = s.extraSmall,
                        E = s.extraLargeWidth,
                        _ = s.largeWidth,
                        g = s.mediumWidth,
                        A = s.smallWidth,
                        F = s.extraSmallWidth,
                        p = s.extraLargeHeight,
                        f = s.largeHeight,
                        D = s.mediumHeight,
                        h = s.smallHeight,
                        C = s.extraSmallHeight,
                        B = { extraLarge: p, large: f, medium: D, small: h, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && E) return (0, r.H)(t, u, B);
                        if (u.largeWidth && _) return (0, r.H)(t, u, B);
                        if (u.mediumWidth && g) return (0, r.H)(t, u, B);
                        if (u.smallWidth && A) return (0, r.H)(t, u, B);
                        if (u.extraSmallWidth && F) return (0, r.H)(t, u, B);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && f) return t;
                            if (u.mediumHeight && D) return t;
                            if (u.smallHeight && h) return t;
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
                (u.d(t, { T: () => r }),
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
            2773: (e, t, u) => {
                'use strict';
                u.d(t, { $Q: () => D });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7515),
                    i = u(1856),
                    s = u(3138),
                    o = u(3815),
                    l = u(560),
                    c = u(7727),
                    d = u(7363),
                    m = u.n(d),
                    E = u(6358),
                    _ = u(372);
                const g = 'disable',
                    A = { pending: !1, offset: 0 },
                    F = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    p = () => {},
                    f = (e, t) => Math.max(20, e.offsetWidth * t),
                    D = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = F, onDrag: n = p }) => {
                        const D = (0, d.useRef)(null),
                            h = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            v = e.stepTimeout || 100,
                            w = (0, d.useState)(A),
                            y = w[0],
                            S = w[1],
                            k = (0, d.useCallback)(
                                (e) => {
                                    (S(e),
                                        b.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current }));
                                },
                                [n],
                            ),
                            x = () => {
                                const t = B.current,
                                    u = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = (0, a.u)(0, 1, i / (r - n)),
                                    l = (t.offsetWidth - f(t, s)) * o;
                                ((u.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (h.current && C.current && B.current && b.current) {
                                            if (0 === e)
                                                return (h.current.classList.add(g), void C.current.classList.remove(g));
                                            if (
                                                ((t = B.current),
                                                (u = b.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return (h.current.classList.remove(g), void C.current.classList.add(g));
                                            var t, u;
                                            (h.current.classList.remove(g), C.current.classList.remove(g));
                                        }
                                    })(l));
                            },
                            T = (0, o.z)(() => {
                                ((() => {
                                    const t = b.current,
                                        u = B.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const a = Math.min(1, n / r);
                                    ((t.style.width = `${f(u, a)}px`),
                                        (t.style.display = 'flex'),
                                        D.current &&
                                            (1 !== a
                                                ? D.current.classList.add(_.Z.base__active)
                                                : D.current.classList.remove(_.Z.base__active)));
                                })(),
                                    x());
                            });
                        ((0, d.useEffect)(() => (0, i.v)(T)),
                            (0, d.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const t = () => {
                                            x();
                                        };
                                        let u = p;
                                        const n = () => {
                                            (u(), (u = (0, i.v)(T)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', T),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (u(),
                                                    e.events.off('recalculateContent', T),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const t = s.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const s = B.current,
                                            o = b.current;
                                        if (!s || !o) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - y.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c }));
                                    }),
                                    u = s.O.client.events.mouse.up(() => {
                                        (t(), k(A));
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, y.offset, y.pending, n, k]));
                        const R = (0, l.B)((t) => e.applyStepTo(t), v, [e]),
                            N = R[0],
                            I = R[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', I, !0),
                                () => document.removeEventListener('mouseup', I, !0)
                            ),
                            [I],
                        );
                        const L = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(_.Z.base, t.base), ref: D, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(_.Z.leftButton, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(E.Nm.Next));
                                },
                                onMouseUp: I,
                                ref: h,
                                onMouseEnter: L,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = b.current;
                                        if (n && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === n))
                                                k({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = b.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? E.Nm.Prev : E.Nm.Next);
                                            }
                                    },
                                    ref: B,
                                    onMouseEnter: L,
                                },
                                m().createElement('div', { ref: b, className: r()(_.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: r()(_.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(_.Z.rightButton, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(E.Nm.Prev));
                                },
                                onMouseUp: I,
                                ref: C,
                                onMouseEnter: L,
                            }),
                        );
                    });
            },
            2840: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7363),
                    i = u.n(a),
                    s = u(2773),
                    o = u(7950),
                    l = u(4682);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: m,
                    getStepByRailClick: E,
                    onDrag: _,
                }) => {
                    const g = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        A = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.defaultScrollArea, c) },
                            i().createElement(o.Area, { className: m, api: A, classNames: d }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: E, api: t, onDrag: _, classNames: g }),
                    );
                };
            },
            7950: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, {
                        Area: () => m,
                        Bar: () => o.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    }));
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    i = u(7363),
                    s = u.n(i),
                    o = u(2773),
                    l = u(2840),
                    c = u(4682),
                    d = u(6358);
                const m = ({ api: e, className: t, classNames: u, children: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(c.Z.base, t) },
                        s().createElement(
                            'div',
                            {
                                className: r()(c.Z.wrapper, null == u ? void 0 : u.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            s().createElement(
                                'div',
                                { className: r()(c.Z.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                ((m.Bar = o.$Q), (m.Default = l.K));
            },
            6358: (e, t, u) => {
                'use strict';
                u.d(t, { Nm: () => r.Nm, T5: () => i, he: () => r.he });
                var n = u(3138),
                    r = u(7308);
                const a = {
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
                        getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                        forceTriggerMouseMove: n.O.view.forceTriggerMouseMove,
                    },
                    i = (0, r.EO)(a);
            },
            6225: (e, t, u) => {
                'use strict';
                u.d(t, { $Q: () => h });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7515),
                    i = u(1856),
                    s = u(3138),
                    o = u(3815),
                    l = u(560),
                    c = u(7727),
                    d = u(7363),
                    m = u.n(d),
                    E = u(7701),
                    _ = u(9168);
                const g = 'disable',
                    A = () => {},
                    F = { pending: !1, offset: 0 },
                    p = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    f = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    D = (e, t) => Math.max(20, e.offsetHeight * t),
                    h = (0, d.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = p, onDrag: n = A }) => {
                        const h = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(F),
                            S = y[0],
                            k = y[1],
                            x = (0, d.useCallback)(
                                (e) => {
                                    (k(e),
                                        v.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current }));
                                },
                                [n],
                            ),
                            T = (0, o.z)(() => {
                                const t = v.current,
                                    u = b.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const a = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${D(u, a)}px`),
                                    (t.style.display = 'flex'),
                                    h.current &&
                                        (1 !== a
                                            ? h.current.classList.add(_.Z.base__active)
                                            : h.current.classList.remove(_.Z.base__active)),
                                    a
                                );
                            }),
                            R = (0, o.z)(() => {
                                const t = b.current,
                                    u = v.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = (0, a.u)(0, 1, i / (r - n)),
                                    l = (t.offsetHeight - D(t, s)) * o;
                                ((u.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (C.current && B.current && b.current && v.current) {
                                            if (0 === Math.round(e))
                                                return (C.current.classList.add(g), void B.current.classList.remove(g));
                                            if (
                                                ((t = b.current),
                                                (u = v.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return (C.current.classList.remove(g), void B.current.classList.add(g));
                                            var t, u;
                                            (C.current.classList.remove(g), B.current.classList.remove(g));
                                        }
                                    })(l));
                            }),
                            N = (0, o.z)(() => {
                                f(e, () => {
                                    (T(), R());
                                });
                            });
                        ((0, d.useEffect)(() => (0, i.v)(N)),
                            (0, d.useEffect)(() => {
                                const t = () => {
                                    f(e, () => {
                                        R();
                                    });
                                };
                                let u = A;
                                const n = () => {
                                    (u(), (u = (0, i.v)(N)));
                                };
                                return (
                                    e.events.on('recalculateContent', N),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (u(),
                                            e.events.off('recalculateContent', N),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!S.pending) return;
                                const t = s.O.client.events.mouse.up(() => {
                                        x(F);
                                    }),
                                    u = s.O.client.events.mouse.move(([t]) => {
                                        f(e, (u) => {
                                            const r = b.current,
                                                a = v.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = t.screenY - S.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o }));
                                        });
                                    });
                                return () => {
                                    (t(), u());
                                };
                            }, [e, S.offset, S.pending, n, x]));
                        const I = (0, l.B)((t) => e.applyStepTo(t), w, [e]),
                            L = I[0],
                            P = I[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', P, !0),
                                () => document.removeEventListener('mouseup', P, !0)
                            ),
                            [P],
                        );
                        const O = (e) => {
                            e.target.classList.contains(g) || (0, c.G)('highlight');
                        };
                        return m().createElement(
                            'div',
                            { className: r()(_.Z.base, t.base), ref: h, onWheel: e.handleMouseWheel },
                            m().createElement('div', {
                                className: r()(_.Z.topButton, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(E.Nm.Next));
                                },
                                ref: C,
                                onMouseEnter: O,
                            }),
                            m().createElement(
                                'div',
                                {
                                    className: r()(_.Z.track, t.track),
                                    onMouseDown: (t) => {
                                        const n = v.current;
                                        if (n && 0 === t.button)
                                            if (((0, c.G)('play'), t.target === n))
                                                x({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    v.current &&
                                                        f(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(a);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? E.Nm.Prev : E.Nm.Next);
                                            }
                                    },
                                    ref: b,
                                    onMouseEnter: O,
                                },
                                m().createElement('div', { ref: v, className: r()(_.Z.thumb, t.thumb) }),
                                m().createElement('div', { className: r()(_.Z.rail, t.rail) }),
                            ),
                            m().createElement('div', {
                                className: r()(_.Z.bottomButton, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(g) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), L(E.Nm.Prev));
                                },
                                onMouseUp: P,
                                ref: B,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            1158: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7363),
                    i = u.n(a),
                    s = u(6225),
                    o = u(9605),
                    l = u(5636);
                const c = ({
                    children: e,
                    api: t,
                    className: u,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: m,
                    getStepByRailClick: E,
                    onDrag: _,
                }) => {
                    const g = (0, a.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: r()(l.Z.base, e.base) });
                        }, [n]),
                        A = (0, a.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: r()(l.Z.defaultScroll, u), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: r()(l.Z.area, c) },
                            i().createElement(o.Area, { className: d, classNames: m, api: A }, e),
                        ),
                        i().createElement(s.$Q, { getStepByRailClick: E, api: t, onDrag: _, classNames: g }),
                    );
                };
            },
            9605: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { Area: () => m, Bar: () => o.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var n = u(6483),
                    r = u.n(n),
                    a = u(1856),
                    i = u(7363),
                    s = u.n(i),
                    o = u(6225),
                    l = u(1158),
                    c = u(7701),
                    d = u(5636);
                const m = ({ className: e, classNames: t, children: u, api: n }) => (
                    (0, i.useEffect)(() => (0, a.v)(n.recalculateContent)),
                    s().createElement(
                        'div',
                        { className: r()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: r()(d.Z.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            u,
                        ),
                    )
                );
                m.Default = l.K;
            },
            7701: (e, t, u) => {
                'use strict';
                u.d(t, { Nm: () => n.Nm, c4: () => a });
                var n = u(7308);
                const r = {
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    },
                    a = (0, n.EO)(r);
            },
            7308: (e, t, u) => {
                'use strict';
                u.d(t, { EO: () => E, Nm: () => d, he: () => m });
                var n = u(7515),
                    r = u(1856),
                    a = u(4532),
                    i = u(9653),
                    s = u(3815),
                    o = u(4489),
                    l = u(7363),
                    c = u(7030);
                let d;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(d || (d = {}));
                const m = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    E = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: d,
                        getWrapperSize: E,
                        forceTriggerMouseMove: _,
                    }) => {
                        const g = (e, u) => {
                            const r = t(e),
                                a = r[0],
                                i = r[1];
                            return i <= a ? 0 : (0, n.u)(a, i, u);
                        };
                        return (n = {}) => {
                            const A = n.settings,
                                F = void 0 === A ? m : A,
                                p = (0, l.useRef)(null),
                                f = (0, l.useRef)(null),
                                D = (0, l.useRef)(!1),
                                h = (0, i.q)(),
                                C = (0, o.f)(
                                    () => {
                                        _ && _();
                                    },
                                    [],
                                    150,
                                ),
                                B = (0, c.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = p.current;
                                        t && (u(t, e), h.trigger('change', e), _ && D.current && C());
                                    },
                                    onRest: (e) => h.trigger('rest', e),
                                    onStart: (e) => h.trigger('start', e),
                                    onPause: (e) => h.trigger('pause', e),
                                })),
                                b = B[0],
                                v = B[1],
                                w = (0, l.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = b.scrollPosition.get(),
                                            a = (null != (n = b.scrollPosition.goal) ? n : 0) - r;
                                        return g(e, t * u + a + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                y = (0, l.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = p.current;
                                        n &&
                                            v.start({
                                                scrollPosition: g(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: F.animationConfig,
                                                from: { scrollPosition: g(n, b.scrollPosition.get()) },
                                            });
                                    },
                                    [v, F.animationConfig, b.scrollPosition],
                                ),
                                S = (0, l.useCallback)(
                                    (e) => {
                                        const t = p.current,
                                            u = f.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return E(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, F.step),
                                            r = w(t, e, n);
                                        y(r);
                                    },
                                    [y, w, F.step],
                                ),
                                k = (0, l.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && S(d(e)),
                                            p.current && h.trigger('mouseWheel', e, b.scrollPosition, t(p.current)));
                                    },
                                    [b.scrollPosition, S, h],
                                ),
                                x = (0, a.M)(
                                    () =>
                                        (0, r.v)(() => {
                                            const e = p.current;
                                            e &&
                                                (y(g(e, b.scrollPosition.goal), { immediate: !0 }),
                                                h.trigger('resizeHandled'));
                                        }),
                                    [y, b.scrollPosition.goal],
                                ),
                                T = (0, s.z)(() => {
                                    const e = p.current;
                                    if (!e) return;
                                    const t = g(e, b.scrollPosition.goal);
                                    (t !== b.scrollPosition.goal && y(t, { immediate: !0 }),
                                        h.trigger('recalculateContent'));
                                });
                            ((0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', x),
                                    () => {
                                        window.removeEventListener('resize', x);
                                    }
                                ),
                                [x],
                            ),
                                (0, l.useEffect)(() => {
                                    const e = p.current;
                                    if (!e || !_) return;
                                    const t = () => {
                                            D.current = !0;
                                        },
                                        u = () => {
                                            D.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', u),
                                        () => {
                                            (e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', u));
                                        }
                                    );
                                }, [p]));
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (f.current ? E(f.current) : void 0),
                                    getContainerSize: () => (p.current ? e(p.current) : void 0),
                                    getBounds: () =>
                                        p.current
                                            ? t(p.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: F.step.clampedArrowStepTimeout,
                                    clampPosition: g,
                                    handleMouseWheel: k,
                                    applyScroll: y,
                                    applyStepTo: S,
                                    contentRef: p,
                                    wrapperRef: f,
                                    scrollPosition: v,
                                    animationScroll: b,
                                    recalculateContent: T,
                                    events: { on: h.on, off: h.off },
                                }),
                                [b.scrollPosition, y, S, h.off, h.on, T, k, v, F.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            794: (e, t, u) => {
                'use strict';
                u.d(t, { X: () => r });
                var n = u(7950);
                const r = { Vertical: u(9605), Horizontal: n };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => o });
                var n = u(7363),
                    r = u.n(n),
                    a = u(2056);
                const i = ['children'];
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
                const o = (e) => {
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
                        s(
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
                u.d(t, { l: () => l });
                var n = u(7363),
                    r = u.n(n),
                    a = u(7078),
                    i = u(6373),
                    s = u(2056);
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = r().createElement('div', { className: u }, e);
                    if (t.header || t.body) return r().createElement(i.i, t, n);
                    const l = t.contentId;
                    return l ? r().createElement(s.u, o({}, t, { contentId: l }), n) : r().createElement(a.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    r = u(7363),
                    a = u.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, i);
                        const _ = (0, r.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, m]);
                        return a().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                E,
                            ),
                            t,
                        );
                        var g;
                    };
            },
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => l });
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
                function s(e) {
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
                const o = (e, t, u = {}, n = 0) => {
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
                    l = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            E = e.ignoreShowDelay,
                            _ = void 0 !== E && E,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            F = e.decoratorId,
                            p = void 0 === F ? 0 : F,
                            f = e.isEnabled,
                            D = void 0 === f || f,
                            h = e.targetId,
                            C = void 0 === h ? 0 : h,
                            B = e.onShow,
                            b = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, i);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => C || (0, n.F)().resId, [C]),
                            S = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(u, p, { isMouseEvent: !0, on: !0, arguments: s(r) }, y),
                                    B && B(),
                                    (w.current.isVisible = !0));
                            }, [u, p, r, y, B]),
                            k = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(u, p, { on: !1 }, y),
                                        w.current.isVisible && b && b(),
                                        (w.current.isVisible = !1));
                                }
                            }, [u, p, y, b]),
                            x = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && k();
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
                                !1 === D && k();
                            }, [D, k]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ));
                        return D
                            ? (0, a.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(S, _ ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (k(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === A && k(), null == m || m(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === A && k(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : t;
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
            7515: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => n });
                const n = (e, t, u) => (u < e ? e : u > t ? t : u);
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
            122: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => n });
                const n = (e, t) => {
                    let u;
                    const n = setTimeout(() => {
                        u = e();
                    }, t);
                    return () => {
                        ('function' == typeof u && u(), clearTimeout(n));
                    };
                };
            },
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => s });
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
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = i, context: a = 'model' } = {}) {
                    const s = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = s.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
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
                                o = n.O.view.addModelObserver(i, t, !0);
                            return (s.set(o, u), e && u(l(r)), o);
                        },
                        readByPath: l,
                        createCallback: (e, t) => {
                            const u = l(t);
                            return (...t) => {
                                u(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = l(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, u = r(s.keys()); !(e = u()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q3: () => o });
                var n = u(4598),
                    r = u(9174),
                    a = u(7363),
                    i = u.n(a),
                    s = u(8246);
                const o = () => (e, t) => {
                    const u = (0, a.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const m = (0, a.useRef)([]),
                                E = (u, a, i) => {
                                    var o;
                                    const l = s.U(a),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        E = (e) => m.current.push(e),
                                        _ = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = d(e),
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
                                                    const a = null != t ? t : d(e),
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
                                                    const a = null != t ? t : d(e),
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
                                                    const n = d(t);
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
                                                            s = i.reduce(
                                                                (e, [t, u]) => ((e[u] = r.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([t, u]) => {
                                                                            s[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: E,
                                        }),
                                        g = { mode: u, model: _, externalModel: c, cleanup: E };
                                    return {
                                        model: _,
                                        controls: 'mocks' === u && i ? i.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                _ = (0, a.useRef)(!1),
                                g = (0, a.useState)(o),
                                A = g[0],
                                F = g[1],
                                p = (0, a.useState)(() => E(o, l, d)),
                                f = p[0],
                                D = p[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? D(E(A, l, d)) : (_.current = !0);
                                }, [d, A, l]),
                                (0, a.useEffect)(() => {
                                    F(o);
                                }, [o]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (f.externalModel.dispose(), m.current.forEach((e) => e()));
                                    },
                                    [f],
                                ),
                                i().createElement(u.Provider, { value: f }, c)
                            );
                        },
                        () => (0, a.useContext)(u),
                    ];
                };
            },
            7044: (e, t, u) => {
                'use strict';
                u.d(t, { f8: () => l, s_: () => a, wB: () => c, yR: () => i });
                var n = u(3649),
                    r = (u(9916), u(8613));
                const a = 1e3,
                    i = 60,
                    s = 60 * i,
                    o = 24 * s;
                (Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime);
                function l(e = 0) {
                    let t = e;
                    const u = Math.trunc(t / o);
                    t -= u * o;
                    const n = Math.trunc(t / s);
                    t -= n * s;
                    const r = Math.trunc(t / i);
                    return ((t -= r * i), { days: u, hours: n, minutes: r, seconds: t });
                }
                const c = (e, t = !0) =>
                    e.days > 7 && t
                        ? (0, n.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, n.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, n.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, n.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, n.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, n.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            527: (e, t, u) => {
                'use strict';
                (u.r(t),
                    u.d(t, { mouse: () => c, off: () => o, on: () => s, onResize: () => a, onScaleUpdated: () => i }));
                var n = u(2472),
                    r = u(1176);
                const a = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
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
                                        i = l[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                        graphicsQuality: () => s,
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
                const s = {
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
                u.d(t, { ZP: () => s, hY: () => i });
                var n = u(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, n.playSound)(r[t])), e), {}),
                    i = Object.assign({}, a, { sound: n.playSound }),
                    s = { play: i, setRTPC: n.setRTPC };
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
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => y,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => k,
                        enableFullScreenModeSupported: () => R,
                        events: () => i.U,
                        extraSize: () => x,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => v,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => w,
                        getScale: () => F,
                        getSize: () => E,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => N,
                        isEventHandled: () => B,
                        isFocused: () => h,
                        pxToRem: () => p,
                        remToPx: () => f,
                        resize: () => _,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => T,
                    }));
                var n = u(9690),
                    r = u(3722),
                    a = u(6112),
                    i = u(6538),
                    s = u(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function d(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function m(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function B() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = n.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const k = Object.keys(a.W).reduce(
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function R() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function N(e) {
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
                u.d(t, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    i = 32,
                    s = 64,
                    o = (e, t) => {
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
                    l = {
                        close(e) {
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                function n() {}
                u.d(t, { ZT: () => n, jv: () => r });
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
            2344: (e, t, u) => {
                'use strict';
                u.d(t, { au: () => r });
                var n = u(3469);
                (u(2133), u(2790), u(579), u(5360), u(9056));
                const r = n.Z;
            },
            6536: (e, t, u) => {
                'use strict';
                u(7363);
            },
            4532: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => r });
                var n = u(7363);
                const r = (e, t = []) => {
                    const u = (0, n.useRef)(),
                        r = (0, n.useCallback)((...t) => {
                            (u.current && u.current(), (u.current = e(...t)));
                        }, t);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                u.current && u.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            3469: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => i });
                var n = u(7044),
                    r = u(7363);
                const a = () => {},
                    i = (e = 0, t, u = 0, i = a) => {
                        const s = (0, r.useState)(e),
                            o = s[0],
                            l = s[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const r = Date.now(),
                                        a = t || (e > 2 * n.yR ? n.yR : 1),
                                        s = setInterval(() => {
                                            const t = e - Math.floor((Date.now() - r) / n.s_);
                                            null !== u && t <= u ? (l(u), i && i(), clearInterval(s)) : l(t);
                                        }, a * n.s_);
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, t, u, i]),
                            o
                        );
                    };
            },
            2133: (e, t, u) => {
                'use strict';
                u(7363);
            },
            9653: (e, t, u) => {
                'use strict';
                u.d(t, { q: () => i });
                var n = u(7363);
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
                const i = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                        u = (e, u) => {
                            t(e).set(u, u);
                        },
                        a = (e, u) => {
                            t(e).delete(u);
                        },
                        i = (e, ...u) => {
                            for (var n, a = r(t(e).values()); !(n = a()).done; ) {
                                (0, n.value)(...u);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: u, off: a, trigger: i }), []);
                };
            },
            3815: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => a });
                var n = u(7363);
                const r = [];
                function a(e) {
                    const t = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, t.current)(...e), r)
                    );
                }
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => o, GS: () => l, cJ: () => i, fd: () => s });
                var n = u(7363),
                    r = u(7739),
                    a = u(1043);
                let i, s, o;
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
                    })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
                const l = () => {
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
                        l = ((e) => {
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
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5360: (e, t, u) => {
                'use strict';
                u(6536);
                var n = u(9916);
                u(7363);
                n.Sw.instance;
                let r;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(r || (r = {}));
            },
            9056: (e, t, u) => {
                'use strict';
                var n = u(9916);
                u(7363);
                n.Sw.instance;
            },
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => r });
                var n = u(7363);
                const r = (e) => {
                    (0, n.useEffect)(e, []);
                };
            },
            2790: (e, t, u) => {
                'use strict';
                u(7363);
            },
            560: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => r });
                var n = u(7363);
                function r(e, t, u = []) {
                    const r = (0, n.useRef)(0),
                        a = (0, n.useCallback)(() => {
                            (window.clearInterval(r.current), (r.current = 0));
                        }, u || []);
                    (0, n.useEffect)(() => a, [a]);
                    const i = (null != u ? u : []).concat([t]);
                    return [
                        (0, n.useCallback)((u) => {
                            (0 !== r.current && a(), (r.current = window.setInterval(() => e(u, !0), t)), e(u, !1));
                        }, i),
                        a,
                    ];
                }
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
            3112: (e, t, u) => {
                'use strict';
                u.d(t, { V: () => a });
                var n = u(7363),
                    r = u(3138);
                const a = () => {
                    const e = (0, n.useState)(r.O.view.getScale()),
                        t = e[0],
                        u = e[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = () => {
                                u(r.O.view.getScale());
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
            579: (e, t, u) => {
                'use strict';
                (u(3138), u(7363));
            },
            4489: (e, t, u) => {
                'use strict';
                u.d(t, { f: () => a });
                var n = u(5139),
                    r = u(7363);
                function a(e, t, u) {
                    const a = (0, r.useMemo)(() => (0, n.Z)(u, e), t);
                    return ((0, r.useEffect)(() => a.cancel, [a]), a);
                }
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
                u.d(t, { UI: () => n });
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
            },
            1612: (e, t, u) => {
                'use strict';
                u.d(t, { h: () => r });
                var n = u(9174);
                function r(e) {
                    const t = {};
                    for (const u in e)
                        if (Object.prototype.hasOwnProperty.call(e, u)) {
                            const r = e[u];
                            t[u] = (0, n.aD)(r);
                        }
                    return t;
                }
            },
            1641: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { t: () => n }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(n || (n = {})));
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { HG: () => s, cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let t = '';
                    for (let u = r.length - 1; u >= 0; u--) for (; e >= r[u]; ) ((t += n[u]), (e -= r[u]));
                    return t;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    s = (e) => (i ? `${e}` : a(e));
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { G: () => n });
            },
            3649: (e, t, u) => {
                'use strict';
                u.d(t, { BN: () => i, Eg: () => o, Uw: () => g, WU: () => a, dL: () => A, v2: () => r, z4: () => s });
                var n = u(1281);
                let r;
                function a(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(r || (r = {}));
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    l = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    c = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    d = (e, t, u = r.left) => e.split(t).reduce(u === r.left ? l : c, []),
                    m = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, t = r.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(u)) return m(e);
                        if ('ja' === u) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, t = r.left) => {
                            let u = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = s(e);
                            return (d(a, /( )/, t).forEach((e) => (u = u.concat(d(e, n, r.left)))), u);
                        })(e, t);
                    },
                    g = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : _(e, t))),
                    A = (e) => a(R.strings.common.percentValue(), { value: e });
            },
            5139: (e, t, u) => {
                'use strict';
                function n(e, t, u, n) {
                    let r,
                        a = !1,
                        i = 0;
                    function s() {
                        r && clearTimeout(r);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            ((i = Date.now()), u.apply(l, o));
                        }
                        a ||
                            (n && !r && d(),
                            s(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== t &&
                                  (r = setTimeout(
                                      n
                                          ? function () {
                                                r = void 0;
                                            }
                                          : d,
                                      void 0 === n ? e - c : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                        (o.cancel = function () {
                            (s(), (a = !0));
                        }),
                        o
                    );
                }
                u.d(t, { Z: () => n });
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
                u.d(t, { Sw: () => a.Z, B3: () => o, Z5: () => i.Z5, B0: () => s, ry: () => F });
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
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    E = u(3138);
                const _ = ['args'];
                function g(e, t, u, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(o) : Promise.resolve(o).then(n, r);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
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
                                            g(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
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
                                })(t, _);
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
                    f = () => p(s.CLOSE),
                    D = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var h = u(7572);
                const C = r.instance,
                    B = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, n, r = R.invalid('resId'), a) => {
                            const i = E.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                m = o.height,
                                _ = {
                                    x: E.O.view.pxToRem(l) + i.x,
                                    y: E.O.view.pxToRem(c) + i.y,
                                    width: E.O.view.pxToRem(d),
                                    height: E.O.view.pxToRem(m),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: A(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, f);
                        },
                        handleViewEvent: p,
                        onBindingsReady: F,
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
                        ClickOutsideManager: C,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = B;
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
            1504: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => o });
                var n = u(7739),
                    r = u(7363),
                    a = u.n(r),
                    i = u(2849);
                const s = ['children'];
                const o = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, s);
                    return a().createElement(n.ZN, null, a().createElement(i.l, u, t));
                };
            },
            2849: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => g });
                var n = u(6483),
                    r = u.n(n),
                    a = u(926),
                    i = u.n(a),
                    s = u(7363),
                    o = u.n(s),
                    l = u(5415);
                const c = ['children', 'className'];
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
                        [l.fd.ExtraSmall]: '',
                        [l.fd.Small]: i().SMALL_WIDTH,
                        [l.fd.Medium]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH}`,
                        [l.fd.Large]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH}`,
                        [l.fd.ExtraLarge]:
                            `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH} ${i().EXTRA_LARGE_WIDTH}`,
                    },
                    E = {
                        [l.Aq.ExtraSmall]: '',
                        [l.Aq.Small]: i().SMALL_HEIGHT,
                        [l.Aq.Medium]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT}`,
                        [l.Aq.Large]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT}`,
                        [l.Aq.ExtraLarge]:
                            `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT} ${i().EXTRA_LARGE_HEIGHT}`,
                    },
                    _ = {
                        [l.cJ.ExtraSmall]: '',
                        [l.cJ.Small]: i().SMALL,
                        [l.cJ.Medium]: `${i().SMALL} ${i().MEDIUM}`,
                        [l.cJ.Large]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE}`,
                        [l.cJ.ExtraLarge]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE} ${i().EXTRA_LARGE}`,
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
                            })(e, c);
                        const a = (0, l.GS)(),
                            i = a.mediaWidth,
                            s = a.mediaHeight,
                            g = a.mediaSize;
                        return o().createElement('div', d({ className: r()(u, m[i], E[s], _[g]) }, n), t);
                    };
            },
            4029: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => n.z });
                var n = u(1504);
            },
            3618: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => E });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3415),
                    i = u(4419),
                    s = u(7363),
                    o = u.n(s),
                    l = u(8055),
                    c = u(3310),
                    d = u(131),
                    m = u(9053);
                const E = o().memo(
                    ({
                        text: e,
                        classMix: t,
                        onSizeChanged: u,
                        binding: n,
                        isTooltipEnable: E = !1,
                        isTruncationAvailable: _ = !1,
                        customTooltipArgs: g,
                        targetId: A,
                        justifyContent: F = m.v2.FlexStart,
                        alignContent: p = m.v2.FlexStart,
                        truncateIdentify: f = m.YA,
                    }) => {
                        const D = (0, s.useRef)(null),
                            h = (0, s.useRef)({ height: 0, width: 0 }),
                            C = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                            B = C[0],
                            b = C[1],
                            v = (0, s.useMemo)(() => (0, c.s)(e, n, { justifyContent: F }), [n, F, e]),
                            w = (0, s.useMemo)(() => {
                                if (E && B.isTruncated && (!n || !Object.values(n).find((e) => 'object' == typeof e)))
                                    return {
                                        args: Object.assign({ text: e }, g, {
                                            stringifyKwargs: n ? JSON.stringify(n) : '',
                                        }),
                                        contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                        targetId: A,
                                    };
                            }, [n, E, A, e, g, B.isTruncated]),
                            y = (0, s.useCallback)(
                                (e) => {
                                    ((h.current.width = e.contentRect.width),
                                        (h.current.height = e.contentRect.height));
                                    const t = (0, d.T)(D, v, h.current, f),
                                        n = t[0],
                                        r = t[1];
                                    (b({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), u && u(r));
                                },
                                [u, f, v],
                            ),
                            S = (0, s.useMemo)(() => ({ justifyContent: F, alignContent: p }), [p, F]);
                        return (
                            (0, i.y)(D, y, _),
                            o().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        t,
                                        l.Z.base__zeroPadding,
                                        _ && l.Z.base__isTruncationAvailable,
                                    ),
                                    style: S,
                                },
                                o().createElement('div', { className: l.Z.unTruncated, ref: D }, v),
                                o().createElement(
                                    a.l,
                                    {
                                        tooltipArgs: w,
                                        className: r()(
                                            l.Z.tooltip,
                                            l.Z[`tooltip__justify-${F}`],
                                            l.Z[`tooltip__align-${p}`],
                                        ),
                                    },
                                    o().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                l.Z.truncated,
                                                !B.isTruncateFinished && _ && l.Z.truncated__hide,
                                            ),
                                            style: S,
                                        },
                                        B.isTruncateFinished && _ ? B.elementList : v,
                                    ),
                                ),
                            )
                        );
                    },
                );
            },
            3310: (e, t, u) => {
                'use strict';
                u.d(t, { s: () => E });
                var n = u(3649),
                    r = u(6799),
                    a = u(6960),
                    i = u(9053);
                const s = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    o = (e) => {
                        const t = [];
                        return (
                            (0, a.Z)(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    R.strings.settings.LANGUAGE_CODE().toLowerCase() === i.Co
                                        ? t.push(...((u = e), u.match(s) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    l = i.u6
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
                                          t.push(...o(e[0]));
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
                                  const s = t.justifyContent === i.v2.FlexEnd ? n.index : u.lastIndex;
                                  (r.push(e.slice(a, s)), (a = s), (n = u.exec(e)));
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
                                    n.push({ blockType: i.kH.Word, colorTag: t, childList: l(e, u) });
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
                    d = (e, t, u = '', n) => {
                        const r = [],
                            s = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            (0, a.Z)(
                                s,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...c(e, u, n));
                                },
                                (e) => {
                                    const a = e[1],
                                        s = void 0 === t[a] ? e[0] : t[a];
                                    'string' == typeof s || 'number' == typeof s
                                        ? r.push(...c(String(s), u, n))
                                        : r.push({ blockType: i.kH.Binding, colorTag: u, childList: [s] });
                                },
                            ),
                            r
                        );
                    },
                    m = (e, t) => {
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
                    E = (e, t = {}, u) => {
                        if (!e) return [];
                        const s = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === i.kH.NoBreakSymbol
                                        ? ((u = !0), t.push(...m(t.pop(), e)))
                                        : (u ? t.push(...m(t.pop(), e)) : t.push(e), (u = !1));
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
                                            n.push(...d(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...d(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })((0, n.Eg)((0, n.z4)(e)), t, u),
                        );
                        return (0, r.w)(s);
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
                            e.childList.forEach((s, o) => {
                                const l = `${u}_${o}`;
                                if ((0, r.dz)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        u = n.IY[t],
                                        r = a(e, u, l);
                                    i.push(...r);
                                } else i.push(t({ elementList: [s], textBlock: e, key: l }));
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
                                            s = n.IY[i],
                                            o = a(e, s, t);
                                        return (
                                            i === r.kH.NoBreakWrapper
                                                ? u.push(s({ elementList: o, textBlock: e, key: `${t}` }))
                                                : u.push(...o),
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
                    s = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    o = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = s(e, t),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            i = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / a);
                            return n >= u ? [!0, u + i] : [!1, n];
                        }
                        const o = Math.max(u + i, 0);
                        return r < o ? [!1, 0] : [!0, o];
                    },
                    l = (e, t, u, n, i, s) => {
                        let c = -1,
                            d = null;
                        for (let m = u; m >= 0; m--) {
                            const u = e[m],
                                E = Number(e[m].getAttribute(a.bF));
                            if (E === a.kH.LineBreak || E === a.kH.NewLine || E === a.kH.Binding) continue;
                            const _ = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = o(u, n, i),
                                    a = e[0],
                                    l = e[1];
                                if (!a) {
                                    l > 0 && (i -= l);
                                    continue;
                                }
                                const E = _.slice(0, _.length - l) + s,
                                    g = t[m];
                                ((d = r().cloneElement(g, g.props, E)), (c = m));
                                break;
                            }
                            {
                                const e = u.children,
                                    a = t[m],
                                    o = a.props.children,
                                    E = l(e, o, e.length - 1, n, i, s),
                                    g = E[0],
                                    A = E[1];
                                if (!(g < 0)) {
                                    const e = o.slice(0, g);
                                    ((d = r().cloneElement(a, a.props, e, A)), (c = m));
                                    break;
                                }
                                i -= _.length;
                            }
                        }
                        return [c, d];
                    },
                    c = (e, t, u, n = a.YA) => {
                        const r = [...t],
                            o = e.current;
                        if (!o) return [r, !1];
                        const c = u.height,
                            d = u.width,
                            m = o.lastElementChild;
                        if (!i(m, c) && s(m, d) <= 0) return [r, !1];
                        const E = o.children,
                            _ = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const r = u + Math.ceil(0.5 * (n - u));
                                    i(e[r], t) ? (n = r - 1) : (u = r + 1);
                                }
                                return u - 1;
                            })(E, c);
                        if (_ < 0) return [r, !1];
                        const g = l(E, r, _, d, n.length, n),
                            A = g[0],
                            F = g[1];
                        return (F && (r.splice(A, 1, F), r.splice(A + 1)), [r, !0]);
                    };
            },
            9053: (e, t, u) => {
                'use strict';
                let n, r, a;
                (u.d(t, {
                    Co: () => c,
                    YA: () => s,
                    aF: () => l,
                    bF: () => o,
                    dz: () => i,
                    kH: () => n,
                    u6: () => d,
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
                    s = '...',
                    o = 'data-block-type',
                    l = { [a.NBSP]: n.NoBreakSymbol, [a.ZWNBSP]: n.NoBreakSymbol, [a.NEW_LINE]: n.LineBreak },
                    c = 'th',
                    d = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', c].includes(R.strings.settings.LANGUAGE_CODE().toLowerCase());
            },
            597: (e, t, u) => {
                'use strict';
                u.d(t, { IY: () => m });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7363),
                    i = u.n(a),
                    s = u(9053),
                    o = u(9627),
                    l = u(7629);
                const c = (e) => ({ color: `#${e}` }),
                    d = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? o.Z[n]
                                ? i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: r()(l.Z.word, o.Z[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: l.Z.word, style: c(n) },
                                      e,
                                  )
                            : i().createElement(
                                  'span',
                                  { key: u, 'data-block-type': t.blockType, className: l.Z.word },
                                  e,
                              );
                    },
                    m = {
                        [s.kH.Word]: d,
                        [s.kH.NoBreakSymbol]: d,
                        [s.kH.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: u }, e)),
                            ),
                        [s.kH.LineBreak]: ({ key: e }) =>
                            i().createElement('span', {
                                key: e,
                                'data-block-type': s.kH.LineBreak,
                                className: l.Z.lineBreak,
                            }),
                        [s.kH.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': s.kH.NewLine, className: l.Z.newLine },
                                e,
                            ),
                        [s.kH.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement(
                                'span',
                                { key: t, 'data-block-type': s.kH.NoBreakWrapper, className: l.Z.noBreakWrapper },
                                e,
                            ),
                    };
            },
            8032: (e, t, u) => {
                'use strict';
                u.d(t, { f: () => n });
                const n = (e, t) => e.split(',').includes(t);
            },
            5640: (e, t, u) => {
                'use strict';
                u.d(t, { $: () => o, U: () => c });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7363),
                    i = u.n(a),
                    s = u(8236);
                let o;
                !(function (e) {
                    ((e.c1080x454 = 'c_1080x454'), (e.c240x118 = 'c_240x118'), (e.c155x31 = 'c_155x31'));
                })(o || (o = {}));
                const l = {
                        [o.c1080x454]: R.images.gui.maps.icons.crew.flags,
                        [o.c240x118]: R.images.gui.maps.icons.tankmen.card.nations,
                        [o.c155x31]: R.images.gui.maps.icons.nations.c_155x31,
                    },
                    c = i().memo(({ nation: e, size: t = o.c1080x454, className: u }) =>
                        i().createElement('div', {
                            className: r()(s.Z.base, s.Z[`base__${t}`], u),
                            style: { backgroundImage: `url('${l[t].$dyn(e)}')` },
                        }),
                    );
            },
            1530: (e, t, u) => {
                'use strict';
                u.d(t, { M: () => c, S: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3649),
                    i = u(7363),
                    s = u.n(i),
                    o = u(8386);
                let l;
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
                })(l || (l = {}));
                const c = s().memo(function ({ role: e, size: t = l.c30x30, className: u }) {
                    const n = (0, i.useMemo)(() => {
                        try {
                            var u;
                            const n =
                                null == (u = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                    ? void 0
                                    : u.$dyn((0, a.BN)(e));
                            if (!n) throw Error;
                            return { backgroundImage: `url(${n})` };
                        } catch (t) {
                            console.error('Cant find resource in RoleIcon: ', e);
                        }
                    }, [e, t]);
                    return s().createElement('div', { style: n, className: r()(o.Z.base, o.Z[`base__${t}`], u) });
                });
            },
            9216: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => d });
                var n = u(6483),
                    r = u.n(n),
                    a = u(794),
                    i = u(7701),
                    s = u(7363),
                    o = u.n(s),
                    l = u(7734);
                let c;
                !(function (e) {
                    ((e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom'));
                })(c || (c = {}));
                const d = ({ children: e, className: t, classNames: u }) => {
                    const n = (0, s.useState)(c.None),
                        d = n[0],
                        m = n[1],
                        E = d === c.Both,
                        _ = (0, i.c4)();
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                const e = _.getBounds()[1],
                                    t = _.animationScroll.scrollPosition.get();
                                0 === e
                                    ? m(c.None)
                                    : t > 1 && t < e - 21
                                      ? m(c.Both)
                                      : t <= 1
                                        ? m(c.Bottom)
                                        : t >= e - 21 && m(c.Top);
                            };
                            return (
                                _.events.on('change', e),
                                _.events.on('resizeHandled', e),
                                _.events.on('recalculateContent', e),
                                () => {
                                    (_.events.off('change', e),
                                        _.events.off('resizeHandled', e),
                                        _.events.off('recalculateContent', e));
                                }
                            );
                        }, [_]),
                        o().createElement(
                            'div',
                            { className: r()(l.Z.base, t) },
                            o().createElement(
                                a.X.Vertical.Default,
                                {
                                    api: _,
                                    barClassNames: { base: r()(l.Z.bar, null == u ? void 0 : u.bar) },
                                    scrollClassNames: { content: r()(l.Z.content, null == u ? void 0 : u.content) },
                                },
                                e,
                            ),
                            (d === c.Top || E) &&
                                o().createElement(
                                    'div',
                                    { className: r()(l.Z.fadeContainerTop, null == u ? void 0 : u.lips) },
                                    o().createElement('div', { className: l.Z.fade }),
                                ),
                            (d === c.Bottom || E) &&
                                o().createElement(
                                    'div',
                                    { className: r()(l.Z.fadeContainerBottom, null == u ? void 0 : u.lips) },
                                    o().createElement('div', { className: l.Z.fade }),
                                ),
                        )
                    );
                };
            },
            2768: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => o, y: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(7363),
                    i = u.n(a),
                    s = u(4458);
                let o;
                !(function (e) {
                    ((e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs'));
                })(o || (o = {}));
                const l = i().memo(function ({ iconName: e, size: t = o.c24x24, className: u }) {
                    var n;
                    const a = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                    return i().createElement('div', {
                        style: null !== a ? { backgroundImage: `url(${a})` } : void 0,
                        className: r()(s.Z.base, s.Z[`base__${t}`], u),
                    });
                });
            },
            7077: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => c, U: () => l });
                var n = u(6483),
                    r = u.n(n),
                    a = u(3649),
                    i = u(7363),
                    s = u.n(i),
                    o = u(3938);
                let l;
                !(function (e) {
                    ((e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256'));
                })(l || (l = {}));
                const c = (0, i.memo)(function ({ name: e, size: t = l.c100x60, classMix: u, isSkin: n = !1 }) {
                    let i = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                    n && (i = i.$dyn('crewSkins'));
                    const c = i.$dyn((0, a.BN)(e));
                    return (
                        c ||
                            console.error(
                                `Can't find ${(0, a.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${n ? '.crewSkins' : ''}`,
                            ),
                        s().createElement('div', {
                            style: { backgroundImage: `url(${c})` },
                            className: r()(o.Z.base, o.Z[`base__${t}`], u),
                        })
                    );
                });
            },
            7160: (e, t, u) => {
                'use strict';
                u.d(t, { to: () => n });
                const n = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2);
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { Gc: () => a, gO: () => r });
                (u(771), u(3649));
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let n;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(n || (n = {}));
                (R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body());
                let r;
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
                })(r || (r = {}));
                const a = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
                let i;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(i || (i = {}));
            },
            4591: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    r = u.n(n),
                    a = u(5415),
                    i = u(3403),
                    s = u(6035),
                    o = u(771),
                    l = u(3215),
                    c = u(4598),
                    d = u(9480),
                    m = u(1612),
                    E = u(9174),
                    _ = u(3946);
                const g = (0, l.q3)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'tankmanId',
                                        'skillsEfficiency',
                                        'isTankmanInVehicle',
                                        'hasPostProgression',
                                        'isPostProgressionAnimated',
                                    ]),
                                    {
                                        isTTCVisible: E.LO.box(!1),
                                        skillsMatrix: Object.assign(
                                            {},
                                            e.primitives(
                                                [
                                                    'componentKey',
                                                    'isResetDisable',
                                                    'hasResetDiscount',
                                                    'isResetFree',
                                                    'hasIncreaseDiscount',
                                                    'resetGracePeriodLeft',
                                                ],
                                                'skills',
                                            ),
                                            {
                                                main: Object.assign(
                                                    {},
                                                    e.primitives(
                                                        ['role', 'directiveId', 'directiveName', 'selectedSkillsCount'],
                                                        'skills.mainSkills',
                                                    ),
                                                    { skills: e.array('skills.mainSkills.skills') },
                                                ),
                                                bonus: e.array('skills.bonusSkills'),
                                            },
                                        ),
                                        postProgression: Object.assign(
                                            {},
                                            e.primitives(
                                                [
                                                    'componentKey',
                                                    'icon',
                                                    'progressCurrent',
                                                    'progressMax',
                                                    'hasWarning',
                                                ],
                                                'postProgression',
                                            ),
                                        ),
                                    },
                                ),
                                u = (e) => d.UI(e, (e) => Object.assign({}, e)),
                                n = (0, _.Om)(
                                    () => ({
                                        role: t.skillsMatrix.main.role.get(),
                                        selectedSkillsCount: t.skillsMatrix.main.selectedSkillsCount.get(),
                                        directiveId: t.skillsMatrix.main.directiveId.get(),
                                        directiveName: t.skillsMatrix.main.directiveName.get(),
                                        skills: u(t.skillsMatrix.main.skills.get()),
                                    }),
                                    { equals: c.jv },
                                ),
                                r = (0, _.Om)(
                                    () =>
                                        d.UI(t.skillsMatrix.bonus.get(), (e) =>
                                            Object.assign({}, e, {
                                                directiveId: e.directiveId,
                                                directiveName: e.directiveName,
                                                skills: u(e.skills),
                                            }),
                                        ),
                                    { equals: c.jv },
                                ),
                                a = (0, _.Om)(() => t.isTankmanInVehicle.get() && t.isTTCVisible.get()),
                                i = (0, _.Om)(() => t.skillsEfficiency.get() === o.sU, !0),
                                s = (0, _.Om)(() => t.skillsEfficiency.get() < o.yb);
                            return Object.assign({}, t, {
                                computes: {
                                    isUntrained: i,
                                    isTTCVisible: a,
                                    mainSkills: n,
                                    bonusSkills: r,
                                    isLowPerksEfficiency: s,
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) =>
                            Object.assign(
                                {
                                    reset: e.createCallbackNoArgs('skills.onReset'),
                                    increase: e.createCallbackNoArgs('skills.onIncrease'),
                                    setAnimationInProgress: e.createCallback(
                                        (e) => ({ isEnabled: e }),
                                        'skills.onSetAnimationInProgress',
                                    ),
                                    clickSkill: e.createCallback((e) => ({ role: e }), 'skills.onSkillClick'),
                                    openPostProgression: e.createCallbackNoArgs('postProgression.onWidgetClick'),
                                },
                                (0, m.h)({ setTTCVisible: (e) => t.isTTCVisible.set(e) }),
                            ),
                    ),
                    A = g[0],
                    F = g[1];
                var p = u(6483),
                    f = u.n(p);
                const D = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let h, C;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
                })(h || (h = {})),
                    (function (e) {
                        ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                    })(C || (C = {})));
                const B = ({ size: e = h.Default }) => {
                        const t = f()(D.background, D[`background__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    b = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    v = ({ size: e }) => {
                        const t = f()(b.base, b[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    w = {
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
                    y = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: n, isComplete: a, withoutBounce: i }) => {
                            const s = f()(
                                    w.base,
                                    w[`base__${e}`],
                                    u && w.base__disabled,
                                    a && w.base__finished,
                                    i && w.base__withoutBounce,
                                ),
                                o = !u && !a;
                            return r().createElement(
                                'div',
                                { className: s, style: n, ref: t },
                                r().createElement('div', { className: w.pattern }),
                                r().createElement('div', { className: w.gradient }),
                                o && r().createElement(v, { size: e }),
                            );
                        },
                    );
                var S = u(122);
                let k, x;
                (!(function (e) {
                    ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
                })(k || (k = {})),
                    (function (e) {
                        ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                    })(x || (x = {})));
                const T = 'ProgressBarDeltaGrow_base_7e',
                    N = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    I = 'ProgressBarDeltaGrow_glow_68',
                    L = (e) => (e ? { left: 0 } : { right: 0 }),
                    P = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    O = (e) => ({ transitionDuration: `${e}ms` }),
                    M = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = s < a,
                                m = (0, n.useState)(k.Idle),
                                E = m[0],
                                _ = m[1],
                                g = E === k.End,
                                A = E === k.Idle,
                                F = E === k.Grow,
                                p = E === k.Shrink,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        (_(e), l && l(e));
                                    },
                                    [l],
                                ),
                                h = (0, n.useCallback)(
                                    (e, t) =>
                                        (0, S.F)(() => {
                                            D(e);
                                        }, t),
                                    [D],
                                );
                            (0, n.useEffect)(() => {
                                if (!u)
                                    return A
                                        ? h(k.Grow, t)
                                        : F
                                          ? h(k.Shrink, e)
                                          : p
                                            ? h(k.End, e)
                                            : void (g && o && o());
                            }, [h, u, g, F, A, p, o, t, e]);
                            const C = (0, n.useMemo)(() => Object.assign({ width: '100%' }, O(e), L(d)), [d, e]),
                                B = (0, n.useMemo)(() => Object.assign({ width: '0%' }, O(e), L(d)), [d, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, P(d, a), O(e)), [a, d, e]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, P(d, a), O(e)),
                                    [a, d, s, e],
                                );
                            if (g) return null;
                            const y = f()(T, c, d && 0 === s && N);
                            return r().createElement(
                                'div',
                                { style: A ? b : w, className: y },
                                r().createElement(
                                    'div',
                                    { style: p ? B : C, className: I },
                                    r().createElement(v, { size: i }),
                                ),
                            );
                        },
                    ),
                    W = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < u,
                                m = (0, n.useState)(!1),
                                E = m[0],
                                _ = m[1],
                                g = (0, n.useCallback)(
                                    (e) => {
                                        (e === k.Shrink && _(!0), c && c(e));
                                    },
                                    [c],
                                ),
                                A = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                F = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(y, {
                                    size: t,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: E ? F : A,
                                }),
                                u >= 0 &&
                                    r().createElement(M, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    H = 'ProgressBarDeltaSimple_base_6c',
                    z = 'ProgressBarDeltaSimple_delta_99',
                    $ = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: a,
                            size: i,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = s < a,
                                d = (0, n.useState)(x.Idle),
                                m = d[0],
                                E = d[1],
                                _ = m === x.In,
                                g = m === x.End,
                                A = m === x.Idle,
                                F = (0, n.useCallback)(
                                    (e) => {
                                        (E(e), l && l(e));
                                    },
                                    [l],
                                );
                            ((0, n.useEffect)(() => {
                                if (A && !u) {
                                    const e = t;
                                    return (0, S.F)(() => {
                                        F(x.In);
                                    }, e);
                                }
                            }, [F, u, A, t]),
                                (0, n.useEffect)(() => {
                                    if (_) {
                                        const u = e + t;
                                        return (0, S.F)(() => {
                                            (o && o(), F(x.End));
                                        }, u);
                                    }
                                }, [F, _, o, t, e]));
                            const p = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${c ? s : a}%` }),
                                    [a, c, s],
                                );
                            return g
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: H, style: D },
                                      r().createElement(
                                          'div',
                                          { style: A ? p : f, className: z },
                                          r().createElement(v, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    V = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: a,
                            disabled: i,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(y, {
                                    size: t,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: d,
                                }),
                                u >= 0 &&
                                    r().createElement($, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    j = ['onComplete', 'onEndAnimation'];
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const U = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, j);
                        const i = (0, n.useState)(!1),
                            s = i[0],
                            o = i[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                (e !== s && o(e), e && t && t(), u && u());
                            }, [s, t, u, a.to]);
                        switch (a.animationSettings.type) {
                            case C.Simple:
                                return r().createElement(V, G({}, a, { onEndAnimation: l, isComplete: s }));
                            case C.Growing:
                                return r().createElement(W, G({}, a, { onEndAnimation: l, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Z = ({ size: e, value: t, lineRef: u, disabled: a, onComplete: i }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                o && i && i();
                            }, [o, i]),
                            r().createElement(y, { size: e, disabled: a, baseStyles: s, isComplete: o, lineRef: u })
                        );
                    },
                    K = ['onEndAnimation'];
                function q() {
                    return (
                        (q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        q.apply(this, arguments)
                    );
                }
                const Y = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, K);
                    const a = (0, n.useRef)({}),
                        i = (0, n.useCallback)(() => {
                            ((a.current.from = void 0), t && t());
                        }, [t]),
                        s = 'number' == typeof a.current.from ? a.current.from : u.from;
                    return (
                        (a.current.from = s),
                        r().createElement(
                            U,
                            q({}, u, {
                                onEndAnimation: i,
                                key: `${s}-${u.to}-${null == u ? void 0 : u.additionalKey}`,
                                from: s,
                            }),
                        )
                    );
                });
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const J = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: n,
                            deltaFrom: a,
                            additionalKey: i,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (a === t)
                                return r().createElement(Z, {
                                    key: `${a}-${t}-${i}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: n,
                                    onComplete: c,
                                });
                            const d = {
                                from: a,
                                to: t,
                                size: e,
                                additionalKey: i,
                                lineRef: u,
                                disabled: n,
                                animationSettings: s,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: l,
                            };
                            return s.withStack
                                ? r().createElement(Y, d)
                                : r().createElement(U, X({ key: `${a}-${t}-${i}` }, d));
                        },
                    ),
                    Q = (e) => {
                        var t, u, n, r, a, i, s, o, l, c, d, m, E, _, g, A, F, p, f, D;
                        return {
                            '--progress-base': `url(${e.bgImageBase})`,
                            '--progress-bg-height': null != (t = null == (u = e.bg) ? void 0 : u.height) ? t : '12rem',
                            '--progress-bg-height-small':
                                null != (n = null == (r = e.bg) ? void 0 : r.heightSmall) ? n : '2rem',
                            '--progress-line-base': e.line.bgColorBase,
                            '--progress-line-disabled': e.line.bgColorDisabled,
                            '--progress-line-finished': e.line.bgColorFinished,
                            '--progress-line-filter': null != (a = e.line.filter) ? a : 'none',
                            '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                            '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                            '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                            '--progress-pattern-size': null != (i = e.pattern.size) ? i : '3rem 10rem',
                            '--progress-pattern-border-size': null != (s = e.pattern.borderSize) ? s : '1rem',
                            '--progress-pattern-gradient':
                                null != (o = e.pattern.gradient)
                                    ? o
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                            '--progress-pattern-gradient-finished':
                                null != (l = e.pattern.gradientFinished)
                                    ? l
                                    : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                            '--progress-pattern-gradient-mixBlendMode':
                                null != (c = e.pattern.mixBlendMode) ? c : 'overlay',
                            '--progress-glow': `url('${e.glow}')`,
                            '--progress-glow-width':
                                null != (d = null == (m = e.glowSettings) ? void 0 : m.width) ? d : '60rem',
                            '--progress-glow-height':
                                null != (E = null == (_ = e.glowSettings) ? void 0 : _.height) ? E : '100rem',
                            '--progress-glow-small-width':
                                null != (g = null == (A = e.glowSettings) ? void 0 : A.smallWidth) ? g : '44rem',
                            '--progress-glow-small-height':
                                null != (F = null == (p = e.glowSettings) ? void 0 : p.smallHeight) ? F : '43rem',
                            '--progress-glow-mixBlendMode':
                                null != (f = null == (D = e.glowSettings) ? void 0 : D.mixBlendMode) ? f : 'lighten',
                            '--progress-glow-small': `url('${e.glowSmall}')`,
                            '--progress-delta-color': e.delta.color,
                            '--progress-delta-shadow': e.delta.shadow,
                        };
                    },
                    ee = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_bg_base',
                        bg: { height: '22rem', heightSmall: '4rem' },
                        glowSettings: {
                            width: '34rem',
                            height: '54rem',
                            mixBlendMode: 'normal',
                            smallWidth: '34rem',
                            smallHeight: '36rem',
                        },
                        line: {
                            bgColorBase: 'rgba(191, 232, 255, 0.6)',
                            bgColorDisabled: 'transparent',
                            bgColorFinished: 'rgba(191, 232, 255, 0.6)',
                            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.08)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.16)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.24))',
                        },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                            bgImageDisabled:
                                'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                            size: '4rem 22rem',
                            borderSize: '0',
                            gradient: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                            gradientFinished: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                            mixBlendMode: 'normal',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow_small',
                        delta: {
                            color: '#fff',
                            shadow: ' 0 0 4px 1px rgba(120, 180, 255, 0.4), 0 0 9px 1px rgba(100, 160, 255, 0.4), 0 0 12px 2px rgba(80, 140, 255, 0.4), 0 0 12px 4px rgba(60, 120, 255, 0.4)',
                        },
                    };
                Object.assign({}, ee, {
                    bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                    line: Object.assign({}, ee.line, {
                        bgColorBase: '#83C6A5',
                        bgColorFinished: 'rgba(10, 230, 72, 0.6)',
                    }),
                    pattern: Object.assign({}, ee.pattern, {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                        bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                    }),
                });
                var te = u(7515);
                const ue = (e, t, u) => {
                    if ('number' == typeof u) {
                        return ((0, te.u)(0, t, u) / t) * 100;
                    }
                    return e;
                };
                const ne = {
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
                    re = {
                        freezed: !1,
                        withStack: !1,
                        type: C.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ae = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ne,
                            size: u = h.Default,
                            animationSettings: a = re,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            value: o,
                            deltaFrom: l,
                            additionalKey: c,
                            lineRef: d,
                            onChangeAnimationState: m,
                            onEndAnimation: E,
                            onComplete: _,
                            className: g,
                        }) => {
                            const A = (function (e, t, u) {
                                return (0, n.useMemo)(() => {
                                    const n = ((0, te.u)(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: ue(n, t, u) };
                                }, [u, t, e]);
                            })(o, e, l);
                            return r().createElement(
                                'div',
                                { className: f()(D.base, g, D[`base__${u}`]), style: Q(t) },
                                !s && r().createElement(B, { size: u }),
                                r().createElement(J, {
                                    size: u,
                                    lineRef: d,
                                    disabled: i,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    additionalKey: c,
                                    animationSettings: a,
                                    onEndAnimation: E,
                                    onChangeAnimationState: m,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                var ie = u(2056),
                    se = u(3138),
                    oe = u(9916),
                    le = u(7030),
                    ce = u(3649);
                const de = 'FormatText_base_d0',
                    me = ({
                        binding: e,
                        text: t = '',
                        classMix: u,
                        alignment: a = ce.v2.left,
                        formatWithBrackets: i,
                    }) => {
                        if (null === t) return (console.error("FormatText was supplied with 'null'"), null);
                        const s = i && e ? (0, ce.WU)(t, e) : t;
                        return r().createElement(
                            n.Fragment,
                            null,
                            s.split('\n').map((t, i) =>
                                r().createElement(
                                    'div',
                                    { className: f()(de, u), key: `${t}-${i}` },
                                    (0, ce.Uw)(t, a, e).map((e, t) =>
                                        r().createElement(n.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ee = {
                        blackReal: 'FormatTextWithColorTags_blackReal_3c',
                        whiteReal: 'FormatTextWithColorTags_whiteReal_8a',
                        white: 'FormatTextWithColorTags_white_16',
                        whiteOrange: 'FormatTextWithColorTags_whiteOrange_18',
                        whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_10',
                        par: 'FormatTextWithColorTags_par_ca',
                        parSecondary: 'FormatTextWithColorTags_parSecondary_8d',
                        parTertiary: 'FormatTextWithColorTags_parTertiary_a3',
                        red: 'FormatTextWithColorTags_red_60',
                        redDark: 'FormatTextWithColorTags_redDark_03',
                        yellow: 'FormatTextWithColorTags_yellow_ad',
                        orange: 'FormatTextWithColorTags_orange_e4',
                        cream: 'FormatTextWithColorTags_cream_cd',
                        brown: 'FormatTextWithColorTags_brown_c8',
                        greenBright: 'FormatTextWithColorTags_greenBright_f0',
                        green: 'FormatTextWithColorTags_green_c5',
                        greenDark: 'FormatTextWithColorTags_greenDark_af',
                        blueBooster: 'FormatTextWithColorTags_blueBooster_ac',
                        blueTeamkiller: 'FormatTextWithColorTags_blueTeamkiller_6f',
                        cred: 'FormatTextWithColorTags_cred_4e',
                        gold: 'FormatTextWithColorTags_gold_90',
                        bond: 'FormatTextWithColorTags_bond_71',
                        prom: 'FormatTextWithColorTags_prom_dd',
                        parNoWidth: 'FormatTextWithColorTags_parNoWidth_5a',
                    },
                    _e = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    ge = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Ae = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Fe = (0, n.memo)(({ text: e, binding: t, classMix: u }) => {
                        const a = (0, n.useCallback)((e) => ({ color: `#${e}` }), []),
                            i = (0, n.useMemo)(() => t || {}, [t]);
                        let s = _e.exec(e),
                            o = e,
                            l = 0;
                        for (; s; ) {
                            const u = s[0],
                                n = ge.exec(u),
                                c = Ae.exec(u),
                                d = s[1];
                            if (n && c) {
                                const e = n[0],
                                    s = e + l++ + e;
                                ((o = o.replace(u, `%(${s})`)),
                                    (i[s] = Ee[e]
                                        ? r().createElement(
                                              'span',
                                              { className: Ee[e] },
                                              r().createElement(me, { text: d, binding: t }),
                                          )
                                        : r().createElement(
                                              'span',
                                              { style: a(e) },
                                              r().createElement(me, { text: d, binding: t }),
                                          )));
                            }
                            s = _e.exec(e);
                        }
                        return r().createElement(me, { text: o, classMix: u, binding: i });
                    });
                var pe = u(7160),
                    fe = u(8018);
                const De = 'PostProgressionWidget_base_6f',
                    he = 'PostProgressionWidget_animationGlow_13',
                    Ce = 'PostProgressionWidget_animationReflectionWrapper_cd',
                    Be = 'PostProgressionWidget_animationReflection_05',
                    be = 'PostProgressionWidget_progress_64',
                    ve = 'PostProgressionWidget_label_80',
                    we = 'PostProgressionWidget_xpIcon_ab',
                    ye = 'PostProgressionWidget_progressBar_f6',
                    Se = 'PostProgressionWidget_icon_34',
                    ke = 'PostProgressionWidget_warning_6d',
                    xe = 'PostProgressionWidget_warningGlow_d3',
                    Te = 'PostProgressionWidget_warningIcon_b5',
                    Re = 1800,
                    Ne = (0, i.Pi)(function () {
                        const e = F(),
                            t = e.model,
                            u = t.postProgression,
                            a = t.isPostProgressionAnimated,
                            i = e.controls,
                            s = a.get(),
                            o = u.progressCurrent.get(),
                            l = u.progressMax.get(),
                            c = (0, n.useState)(o),
                            d = c[0],
                            m = c[1],
                            E = (0, n.useCallback)(() => m(o), [o]),
                            _ = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 0, x: se.O.view.remToPx(60) },
                                    to: [
                                        {
                                            opacity: 0.9,
                                            x: se.O.view.remToPx(-10),
                                            delay: Re,
                                            config: { duration: 500 },
                                        },
                                        { opacity: 1, x: 0, config: { duration: 250 } },
                                    ],
                                    config: { easing: pe.to },
                                }),
                                [],
                            )[0],
                            g = (0, le.useSpring)({
                                from: { opacity: 0 },
                                to: [
                                    { opacity: 0.8, delay: Re, config: { duration: 500 } },
                                    { opacity: 0, config: { duration: 2e3 } },
                                ],
                                config: { easing: pe.to },
                            }),
                            A = (0, le.useSpring)({
                                from: { x: 0 },
                                to: [{ x: se.O.view.remToPx(600) }],
                                delay: 2700,
                                config: { easing: pe.to, duration: 1700 },
                            });
                        return (
                            (0, n.useEffect)(() => {
                                if (s) return (0, S.F)(() => se.O.sound.play.sound(fe.gO.CREW_POSTPROG_WIDGET), Re);
                            }, [s]),
                            r().createElement(
                                ie.u,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.PostProgressionTooltip('resId'),
                                    args: { componentKey: u.componentKey.get() },
                                },
                                r().createElement(
                                    le.animated.div,
                                    {
                                        style: s ? _ : void 0,
                                        className: De,
                                        onMouseEnter: () => {
                                            se.O.sound.play.highlight();
                                        },
                                        onClick: () => {
                                            (se.O.sound.play.click(), i.openPostProgression());
                                        },
                                    },
                                    s &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement(le.animated.div, { style: g, className: he }),
                                            r().createElement(
                                                'div',
                                                { className: Ce },
                                                r().createElement(le.animated.div, { style: A, className: Be }),
                                            ),
                                        ),
                                    r().createElement(
                                        'div',
                                        { className: be },
                                        r().createElement(Fe, {
                                            text: R.strings.crew.postProgression.progress(),
                                            binding: {
                                                currentValue: oe.Z5.getNumberFormat(o, oe.B3.INTEGRAL),
                                                maxValue: oe.Z5.getNumberFormat(l, oe.B3.INTEGRAL),
                                                icon: r().createElement('div', { className: we }),
                                            },
                                            classMix: ve,
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: ye },
                                            r().createElement(ae, {
                                                value: o,
                                                deltaFrom: d,
                                                maxValue: l,
                                                onEndAnimation: E,
                                                size: h.Small,
                                            }),
                                        ),
                                    ),
                                    r().createElement('div', {
                                        className: Se,
                                        style: { backgroundImage: `url(${u.icon.get()})` },
                                    }),
                                    u.hasWarning.get() &&
                                        r().createElement(
                                            'div',
                                            { className: ke },
                                            r().createElement('div', { className: xe }),
                                            r().createElement('div', { className: Te }),
                                        ),
                                ),
                            )
                        );
                    });
                let Ie;
                !(function (e) {
                    ((e.None = 'none'), (e.Unlocked = 'unlocked'), (e.Selected = 'selected'));
                })(Ie || (Ie = {}));
                var Le = u(9216),
                    Pe = u(2106),
                    Oe = u(7044),
                    Me = u(2344),
                    We = u(3112);
                const He = 'Countdown_base_fe',
                    ze = 'Countdown_icon_8b',
                    $e = 'Countdown_description_8d';
                let Ve, je;
                (!(function (e) {
                    ((e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none'));
                })(Ve || (Ve = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(je || (je = {})));
                const Ge = (e) => e.toString().padStart(2, '0'),
                    Ue = R.images.gui.maps.icons.components.countdown,
                    Ze = (e, t) => {
                        const u = 2 === t ? Ue.big : Ue;
                        switch (e) {
                            case Ve.Timer:
                                return u.clock();
                            case Ve.Countdown:
                                return u.hourglass();
                            case Ve.Cooldown:
                                return u.lock();
                        }
                    },
                    Ke = (0, n.memo)(
                        ({
                            duration: e,
                            icon: t = Ve.Timer,
                            style: u = je.Description,
                            onTimeReached: n,
                            refreshRate: a,
                            className: i = '',
                            classNames: s = {},
                        }) => {
                            const o = null != a ? a : u !== je.Description ? 1 : void 0,
                                l = (0, Me.au)(e, o),
                                c = (0, We.V)();
                            n && n[l] && n[l]();
                            const d = ((e, t) => {
                                switch (t) {
                                    case je.Description:
                                        return (0, Oe.wB)(e);
                                    case je.Short:
                                        return `${Ge(e.minutes)}:${Ge(e.seconds)}`;
                                    case je.Long:
                                        return `${Ge(e.hours)}:${Ge(e.minutes)}:${Ge(e.seconds)}`;
                                    case je.Extended:
                                        return `${(0, ce.WU)(R.strings.common.duration.days(), { days: e.days })} | ${Ge(e.hours)}:${Ge(e.minutes)}:${Ge(e.seconds)}`;
                                }
                            })((0, Oe.f8)(l), u);
                            return r().createElement(
                                'div',
                                { className: f()(He, i) },
                                t !== Ve.None &&
                                    r().createElement('div', {
                                        className: f()(ze, s.icon),
                                        style: { backgroundImage: `url('${Ze(t, c)}')` },
                                    }),
                                r().createElement('div', { className: f()($e, s.text) }, d),
                            );
                        },
                    );
                var qe = u(6373),
                    Ye = u(3457);
                const Xe = 'ButtonWithDiscountIndicator_base_6c',
                    Je = 'ButtonWithDiscountIndicator_discountIndicator_a5',
                    Qe = 'ButtonWithDiscountIndicator_discountIndicator__small_d6',
                    et = ['hasDiscount', 'className', 'children', 'wrapperId', 'isSmall'];
                const tt = r().memo(function (e) {
                        let t = e.hasDiscount,
                            u = e.className,
                            n = e.children,
                            a = e.wrapperId,
                            i = e.isSmall,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, et);
                        return r().createElement(
                            'div',
                            { id: a, className: f()(Xe, u) },
                            r().createElement(Ye.u5, s, n),
                            t && r().createElement('div', { className: f()(Je, i && Qe) }),
                        );
                    }),
                    ut = 'ButtonsSection_base_9a',
                    nt = 'ButtonsSection_base__withBonusRoles_e6',
                    rt = 'ButtonsSection_increaseBtnContainer_6b',
                    at = 'ButtonsSection_resetBtnContainer_6f',
                    it = 'ButtonsSection_increaseButton_6b',
                    st = 'ButtonsSection_resetButton_f2',
                    ot = 'ButtonsSection_increaseButton__accented_a2',
                    lt = 'ButtonsSection_resetButton__accented_57',
                    ct = 'ButtonsSection_resetButton__disabled_da',
                    dt = 'ButtonsSection_countdown_df',
                    mt = 'ButtonsSection_countdownIcon_ff',
                    Et = 'ButtonsSection_countdownText_a0',
                    _t = (e) => Math.floor(Date.now() / Oe.s_ + e),
                    gt = (0, n.memo)(
                        ({
                            mediaSize: e,
                            bonusSkillsCount: t,
                            resetGracePeriodLeft: u,
                            isResetDisable: i,
                            hasResetDiscount: s,
                            isResetFree: o,
                            hasIncreaseDiscount: l,
                            hasPostProgression: c,
                            allSkillsLearned: d,
                            onIncreaseClick: m,
                            onResetClick: E,
                        }) => {
                            const _ = e <= a.cJ.Small,
                                g = (e < a.cJ.Large && t >= 2) || (e >= a.cJ.Large && t >= 3),
                                A = (e <= a.cJ.Small && t >= 1) || (e === a.cJ.Medium && t >= 2),
                                F = i
                                    ? R.strings.crew.matrix.resetTooltip.disable
                                    : R.strings.crew.matrix.resetTooltip.enable,
                                p = c
                                    ? R.strings.crew.matrix.increaseTooltip.disable
                                    : R.strings.crew.matrix.increaseTooltip.enable,
                                D = (0, n.useRef)(_t(u)),
                                h = (0, n.useState)(u),
                                C = h[0],
                                B = h[1];
                            return (
                                (0, n.useEffect)(() => {
                                    D.current = _t(u);
                                }, [u]),
                                (0, n.useEffect)(() => {
                                    B(D.current - Math.floor(Date.now() / Oe.s_));
                                }, [u, D]),
                                r().createElement(
                                    'div',
                                    { className: f()(ut, g && nt) },
                                    r().createElement(
                                        qe.i,
                                        { header: p.header(), body: p.body() },
                                        r().createElement(
                                            'div',
                                            { className: rt },
                                            r().createElement(
                                                tt,
                                                {
                                                    type: Pe.L.ghost,
                                                    isSmall: _,
                                                    disabled: c,
                                                    hasDiscount: l,
                                                    mixClass: f()(it, !(d || s) && ot),
                                                    onClick: m,
                                                },
                                                R.strings.crew.matrix.increaseButton(),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: at },
                                        r().createElement(
                                            qe.i,
                                            { header: F.header(), body: F.body(), ignoreMouseClick: i },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    tt,
                                                    {
                                                        type: Pe.L.ghost,
                                                        isSmall: _,
                                                        disabled: i,
                                                        hasDiscount: s,
                                                        wrapperId: i ? void 0 : 'matrix_drop_skills_btn',
                                                        mixClass: f()(st, s && lt, i && ct),
                                                        onClick: E,
                                                    },
                                                    o
                                                        ? R.strings.crew.matrix.freeResetButton()
                                                        : R.strings.crew.matrix.resetButton(),
                                                ),
                                            ),
                                        ),
                                        !(A || i) &&
                                            C > 0 &&
                                            r().createElement(Ke, {
                                                className: dt,
                                                classNames: { icon: mt, text: Et },
                                                duration: C,
                                            }),
                                    ),
                                )
                            );
                        },
                    );
                var At = u(7078),
                    Ft = u(2603);
                let pt;
                !(function (e) {
                    ((e[(e.None = 0)] = 'None'),
                        (e[(e.Started = 1)] = 'Started'),
                        (e[(e.DisplayActualState = 2)] = 'DisplayActualState'),
                        (e[(e.Finished = 3)] = 'Finished'));
                })(pt || (pt = {}));
                const ft = 1300,
                    Dt = {
                        [Ie.Unlocked]: {
                            [pt.Started]: [0, 0],
                            [pt.DisplayActualState]: [700, 700],
                            [pt.Finished]: [600, 1900],
                        },
                        [Ie.Selected]: {
                            [pt.Started]: [0, 0],
                            [pt.DisplayActualState]: [1e3, 1e3],
                            [pt.Finished]: [700, 700],
                        },
                    },
                    ht = {
                        [Ie.Unlocked]: { isLocked: !0, iconName: '' },
                        [Ie.Selected]: { isLocked: !1, iconName: '' },
                    },
                    Ct = (e, t, u) => {
                        var n;
                        const r = null == (n = Dt[e]) ? void 0 : n[t];
                        return u ? (null == r ? void 0 : r[1]) : null == r ? void 0 : r[0];
                    },
                    Bt = (e, t) => (e === Ie.Unlocked ? (t ? 2600 : ft) : t ? 400 : 200),
                    bt = (e, t, u, n, r) => {
                        let a = 0;
                        const i = e.length - 1;
                        return e.map((e, s) => {
                            let o;
                            return (
                                e.animationType !== Ie.None &&
                                    ((o = ((e, t, u, n, r) => {
                                        let a = 300;
                                        const i = Bt(e, u);
                                        return (
                                            e === Ie.Selected ? (a += 100 * n) : u && r && r % 2 == 1 && (a += ft),
                                            t * i + a
                                        );
                                    })(e.animationType, a, t, u, n)),
                                    a++),
                                r(e, s, o, i !== s)
                            );
                        });
                    },
                    vt = (e, t, u, n, r, a, i, s) => {
                        return r
                            ? {
                                  targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                  args: {
                                      componentKey: e,
                                      tooltipId: Ft.HZ,
                                      skillName: t,
                                      roleName: u,
                                      isBonus: a,
                                      level: s,
                                      skillIndex: n,
                                  },
                              }
                            : a
                              ? i
                                  ? {
                                        header: R.strings.crew.matrix.skillTooltip.bonus.unavailable.header(),
                                        body:
                                            null ==
                                            (o = R.strings.crew.matrix.skillTooltip.bonus.unavailable.text.$dyn(
                                                `c_${n + 1}`,
                                            ))
                                                ? void 0
                                                : o.toString(),
                                    }
                                  : {
                                        header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                        body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                    }
                              : {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                    args: { skillIndex: n, componentKey: e },
                                };
                        var o;
                    };
                var wt = u(3618),
                    yt = u(9053),
                    St = u(1530);
                const kt = 'QualificationIcon_base_54',
                    xt = 'QualificationIcon_base__main_a0',
                    Tt = 'QualificationIcon_icon_10',
                    Rt = 'QualificationIcon_counters_3a',
                    Nt = 'QualificationIcon_current_cd',
                    It = (0, n.memo)(
                        ({
                            role: e,
                            componentKey: t,
                            totalPerksCount: u,
                            currentPerksCount: n,
                            qualificationIndex: i,
                            isBonusQualification: s,
                        }) => {
                            const o = (0, a.GS)().mediaSize;
                            return r().createElement(
                                ie.u,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.QualificationTooltip('resId'),
                                    args: { role: e, componentKey: t, isBonusQualification: s, index: i },
                                },
                                r().createElement(
                                    'div',
                                    { className: f()(kt, !s && xt) },
                                    r().createElement(St.M, {
                                        role: e,
                                        size: o === a.cJ.ExtraLarge ? St.S.c40x40 : St.S.c30x30,
                                        className: Tt,
                                    }),
                                    r().createElement(wt.w, {
                                        classMix: Rt,
                                        text: R.strings.crew.matrix.skills.counters(),
                                        justifyContent: yt.v2.Center,
                                        binding: {
                                            currentCount: r().createElement('div', { className: Nt }, n),
                                            totalCount: u,
                                        },
                                    }),
                                ),
                            );
                        },
                    );
                var Lt = u(3415),
                    Pt = u(4150);
                const Ot = 'AvailableSkill_base_70',
                    Mt = () => r().createElement('div', { className: Ot }),
                    Wt = 'Animations_base_45',
                    Ht = 'Animations_childrenWrapper_01',
                    zt = 'Animations_unlockAnimationWrapper_e5',
                    $t = 'Animations_glow_89',
                    Vt = 'Animations_base__bonus_34',
                    jt = ({ children: e, isAnimationStarted: t, isBonus: u, animationDelay: n }) => {
                        const a = (0, le.useSpring)(
                                () => ({
                                    from: { y: se.O.view.remToPx(-10), opacity: 0 },
                                    to: [{ y: 0, opacity: 1, config: { duration: 250 }, delay: 550 + n }],
                                }),
                                [n],
                            )[0],
                            i = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 0.8, config: { duration: 500 }, delay: 200 + n },
                                        { opacity: 0, config: { duration: 300 } },
                                    ],
                                }),
                                [n],
                            )[0],
                            s = (0, le.useSpring)(
                                () => ({
                                    from: { scale: 1, opacity: 1 },
                                    to: [{ scale: 2.2, opacity: 0, config: { duration: 900 }, delay: n }],
                                }),
                                [n],
                            )[0];
                        return r().createElement(
                            'div',
                            { className: f()(Wt, u && Vt) },
                            t &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(le.animated.div, { style: a, className: Ht }, e),
                                    r().createElement(le.animated.div, { style: i, className: $t }),
                                ),
                            r().createElement(le.animated.div, { style: s }, r().createElement(Mt, null)),
                        );
                    };
                var Gt = u(2686),
                    Ut = u(126);
                const Zt = 'EmptySkill_base_38',
                    Kt = () => r().createElement('div', { className: Zt });
                var qt;
                !(function (e) {
                    ((e.Play = 'play'), (e.Stop = 'stop'));
                })(qt || (qt = {}));
                const Yt = ({ animationDelay: e, isAnimationStarted: t, isBonus: u }) => {
                        const i = (0, n.useState)(null),
                            s = i[0],
                            o = i[1],
                            l = (0, We.V)(),
                            c = (0, a.GS)().mediaSize >= a.cJ.ExtraLarge,
                            d = (0, n.useMemo)(
                                () =>
                                    ((e) => ({
                                        width: 72,
                                        height: 72,
                                        frameCount: 39,
                                        chunk: { count: 1, columns: 28, rows: 2 },
                                        getChunkPath: (0, Ut.V)(
                                            `R.images.gui.maps.icons.sequence.unlock.${e ? 'big' : 'small'}_`,
                                        ),
                                    }))(c),
                                [c],
                            ),
                            m = (0, n.useMemo)(() => (0, Ut.q)(d), [d]),
                            E = (0, n.useCallback)(() => o(qt.Stop), []),
                            _ = (0, le.useSpring)(
                                () => ({
                                    from: { scale: 2, opacity: 0 },
                                    to: [
                                        { scale: 2.2, opacity: 0.3, config: { duration: 150 }, delay: 1e3 + e },
                                        { scale: 1, opacity: 1, config: { duration: 500 } },
                                    ],
                                }),
                                [e],
                            )[0],
                            g = (0, le.useSpring)(
                                () => ({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 1, config: { duration: 150 }, delay: 1e3 + e },
                                        { opacity: 0, config: { duration: 500 } },
                                    ],
                                }),
                                [e],
                            )[0];
                        return (
                            (0, n.useEffect)(() => (0, S.F)(() => o(qt.Play), e), [e]),
                            r().createElement(
                                'div',
                                { className: f()(Wt, u && Vt) },
                                !s && r().createElement('div', { className: Ht }, r().createElement(Kt, null)),
                                s === qt.Play &&
                                    r().createElement(
                                        'div',
                                        { className: zt },
                                        r().createElement(Gt.At, {
                                            width: d.width,
                                            height: d.height,
                                            frameCount: d.frameCount,
                                            getImageSource: m,
                                            loop: !1,
                                            state: s,
                                            onAnimationDone: E,
                                            style: { transform: `scale(${l})` },
                                        }),
                                    ),
                                t &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement(le.animated.div, { style: g, className: $t }),
                                        r().createElement(le.animated.div, { style: _ }, r().createElement(Mt, null)),
                                    ),
                            )
                        );
                    },
                    Xt = ['children', 'animationType'];
                const Jt = (e) => {
                    let t = e.children,
                        u = e.animationType,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                            return r;
                        })(e, Xt);
                    return u === Ie.Selected
                        ? r().createElement(jt, n, t)
                        : u === Ie.Unlocked
                          ? r().createElement(Yt, n)
                          : t;
                };
                var Qt = u(2768);
                const eu = 'SelectedSkill_base_53',
                    tu = 'SelectedSkill_base__main_dc',
                    uu = 'SelectedSkill_name_79',
                    nu = 'SelectedSkill_name__progress_64',
                    ru = ({ icon: e, name: t, isInProgress: u, mediaSize: n, isBonus: i }) =>
                        r().createElement(
                            'div',
                            { className: f()(eu, !i && tu) },
                            r().createElement(Qt.y, {
                                size: n >= a.cJ.ExtraLarge ? Qt.F.c80x80 : Qt.F.c52x52,
                                iconName: e,
                            }),
                            !i && n >= a.cJ.Medium && r().createElement('div', { className: f()(uu, u && nu) }, t),
                        ),
                    au = 'SkillContent_base_7b',
                    iu = 'SkillContent_base__disabled_34',
                    su = (0, n.memo)(
                        ({
                            name: e,
                            icon: t,
                            mediaSize: u,
                            isBonus: n,
                            isLocked: a,
                            isDisabled: i,
                            isInProgress: s,
                        }) => {
                            let o;
                            return (
                                (o = t
                                    ? r().createElement(ru, {
                                          name: e,
                                          mediaSize: u,
                                          isBonus: n,
                                          icon: t,
                                          isInProgress: s,
                                      })
                                    : a
                                      ? r().createElement(Kt, null)
                                      : r().createElement(Mt, null)),
                                r().createElement('div', { className: f()(au, i && iu) }, o)
                            );
                        },
                    ),
                    ou = 'Skill_base_8e',
                    lu = 'Skill_base__bonus_8a',
                    cu = 'Skill_bonusBorder_4e',
                    du = 'Skill_base__withAnimation_38',
                    mu = 'Skill_base__progress_1f',
                    Eu = 'Skill_base__selected_d2',
                    _u = 'Skill_base__disabled_9d',
                    gu = 'Skill_base__enabled_fd',
                    Au = 'Skill_base__full_33',
                    Fu = 'Skill_base__inefficient_2d',
                    pu = 'Skill_bonusBorder__progress_12',
                    fu = 'Skill_bonusBorder__inefficient_27',
                    Du = 'Skill_progressLayer_5b',
                    hu = 'Skill_progressLayer__inefficient_dd',
                    Cu = 'Skill_progressLayer__disabled_0a',
                    Bu = 'Skill_progressLayer__full_5a',
                    bu = 'Skill_disabledLayer_76',
                    vu = 'Skill_topContent_d1',
                    wu = 'Skill_levelLabel_07',
                    yu = 'Skill_levelLabel__full_58',
                    Su = 'Skill_levelLabel__inefficient_58',
                    ku = 'Skill_zeroIcon_2a',
                    xu = 'Skill_zeroIcon__disabled_68',
                    Tu = 'Skill_directiveIcon_4f',
                    Ru = 'Skill_directiveIcon__progress_f6',
                    Nu = (0, n.memo)(
                        ({
                            role: e,
                            roleName: t,
                            skillIndex: u,
                            mediaSize: a,
                            componentKey: i,
                            name: s,
                            userName: l,
                            iconName: c,
                            level: d,
                            isZero: m,
                            isLocked: E,
                            isDisabled: _,
                            isIrrelevant: g,
                            isUntrained: A,
                            isLowEfficiency: F,
                            battleBooster: p,
                            isBonusSkill: D = !1,
                            animationType: h,
                            animationDelay: C = 0,
                            onSkillClick: B,
                        }) => {
                            const b = p !== Pt.S.None,
                                v = p === Pt.S.Improved,
                                w = ht[h],
                                y = (0, n.useState)(pt.None),
                                k = y[0],
                                x = y[1],
                                T = k < pt.DisplayActualState,
                                R = w && T ? w : { isLocked: E, iconName: c },
                                N = Boolean(R.iconName),
                                I = d === o.I,
                                L = g || ((_ || A) && !(R.isLocked || b)),
                                P = !(L || b) && F && N,
                                O = !(R.isLocked || (I && N)),
                                M = k === pt.Finished ? Ie.None : h;
                            (0, n.useEffect)(() => {
                                const e = ((e, t, u) => {
                                    if (t === pt.Finished) return;
                                    let n = t + 1,
                                        r = Ct(e, n, u);
                                    for (; n < pt.Finished && void 0 === r; ) (n++, (r = Ct(e, n, u)));
                                    return void 0 !== r ? { nextStage: n, delay: r } : void 0;
                                })(h, k, D);
                                if (e) {
                                    const t = (k === pt.None ? C : 0) + e.delay,
                                        u = () => {
                                            (D || h !== Ie.Unlocked
                                                ? h === Ie.Selected &&
                                                  e.nextStage === pt.Started &&
                                                  (0, S.F)(
                                                      () => se.O.sound.play.sound(fe.gO.CREW_SETTING_UP_MAJOR_PERK),
                                                      300,
                                                  )
                                                : (e.nextStage === pt.Started &&
                                                      se.O.sound.play.sound(fe.gO.CREW_UNLOCK_MAJOR_PERK_START),
                                                  e.nextStage === pt.Finished &&
                                                      se.O.sound.play.sound(fe.gO.CREW_UNLOCK_MAJOR_PERK_STOP)),
                                                x(e.nextStage));
                                        };
                                    if (t > 0) return (0, S.F)(u, t);
                                    u();
                                }
                            }, [h, k, C, D]);
                            const W = (0, le.useSpring)(() => {
                                    const e = {
                                        from: { opacity: 0, x: se.O.view.remToPx(-10) },
                                        to: { opacity: 1, x: 0 },
                                    };
                                    return h !== Ie.None && I
                                        ? h === Ie.Selected
                                            ? {
                                                  from: { opacity: 1 },
                                                  to: { opacity: 0 },
                                                  config: { duration: 250 },
                                                  delay: 800 + C,
                                              }
                                            : Object.assign({}, e, { config: { duration: 200 }, delay: 1300 + C })
                                        : Object.assign({}, e, { immediate: !0 });
                                }, [h])[0],
                                H = (0, le.useSpring)(() => {
                                    const e = { from: { val: 0 }, to: { val: d } };
                                    return h !== Ie.Unlocked
                                        ? Object.assign({}, e, { immediate: !0 })
                                        : Object.assign({}, e, {
                                              config: { duration: ((t = d), (u = D), t / (u ? 0.05 : 0.15)) },
                                              delay: 900 + C,
                                          });
                                    var t, u;
                                }, [d, h, C])[0];
                            return r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    Lt.l,
                                    { tooltipArgs: vt(i, s, t, u, Boolean(c), D, E, d) },
                                    r().createElement(
                                        'div',
                                        {
                                            className: f()(
                                                ou,
                                                M !== Ie.None && du,
                                                D && lu,
                                                !(R.isLocked || L) && gu,
                                                L && _u,
                                                O && mu,
                                                (I || m) && Au,
                                                N && Eu,
                                                P && Fu,
                                            ),
                                            onClick: () => {
                                                E || (se.O.sound.play.click(), B(e));
                                            },
                                            onMouseEnter: () => !L && se.O.sound.play.highlight(),
                                        },
                                        D && r().createElement('div', { className: f()(cu, O && pu, P && fu) }),
                                        L && r().createElement('div', { className: bu }),
                                        O &&
                                            r().createElement(le.animated.div, {
                                                style: { width: m ? '100%' : H.val.to((e) => `${e}%`) },
                                                className: f()(Du, (I || m) && Bu, L && Cu, P && hu),
                                            }),
                                        r().createElement(
                                            Jt,
                                            {
                                                animationType: M,
                                                animationDelay: C,
                                                isAnimationStarted: k > pt.None,
                                                isBonus: D,
                                            },
                                            r().createElement(su, {
                                                name: l,
                                                icon: c,
                                                mediaSize: a,
                                                isBonus: D,
                                                isLocked: E,
                                                isDisabled: L,
                                                isInProgress: O,
                                            }),
                                        ),
                                        (O || m) &&
                                            r().createElement(
                                                'div',
                                                { className: vu },
                                                m
                                                    ? r().createElement('div', { className: f()(ku, L && xu) })
                                                    : r().createElement(
                                                          le.animated.div,
                                                          { style: W, className: f()(wu, I && yu, P && Su) },
                                                          (0, ce.dL)(d),
                                                      ),
                                            ),
                                        !(g || _) && b && r().createElement('div', { className: f()(Tu, !v && Ru) }),
                                    ),
                                ),
                            );
                        },
                    ),
                    Iu = 'SkillsGroup_base_1e',
                    Lu = 'SkillsGroup_base__main_7d',
                    Pu = 'SkillsGroup_base__untrained_b4',
                    Ou = 'SkillsGroup_base__bonus_9f',
                    Mu = 'SkillsGroup_skillsRow_02',
                    Wu = 'SkillsGroup_untrainedLayer_fb',
                    Hu = 'SkillsGroup_connectorLine_4b',
                    zu = 'SkillsGroup_connectorLine__long_92',
                    $u = 'SkillsGroup_directive_7c',
                    Vu = (0, n.memo)(
                        ({
                            role: e,
                            directiveId: t,
                            directiveName: u,
                            componentKey: n,
                            mediaSize: a,
                            selectedSkillsCount: i,
                            skills: s,
                            isUntrained: o,
                            isLowEfficiency: l,
                            qualificationIndex: c = 0,
                            isBonusQualification: d = !1,
                            tankmanId: m,
                            selectedMajorSkillsAmount: E,
                            onSkillClick: _,
                        }) => {
                            const g = !d && o;
                            return r().createElement(
                                'div',
                                { className: f()(Iu, d ? Ou : Lu, g && Pu) },
                                g && r().createElement('div', { className: Wu }),
                                r().createElement(It, {
                                    role: e,
                                    componentKey: n,
                                    totalPerksCount: s.length,
                                    currentPerksCount: i,
                                    qualificationIndex: c,
                                    isBonusQualification: d,
                                }),
                                r().createElement(
                                    'div',
                                    { className: Mu },
                                    bt(s, d, c, E, (t, u, i, s) =>
                                        r().createElement(
                                            r().Fragment,
                                            { key: u },
                                            r().createElement(Nu, {
                                                role: e,
                                                roleName: t.roleName,
                                                skillIndex: u,
                                                mediaSize: a,
                                                componentKey: n,
                                                isBonusSkill: d,
                                                isUntrained: o,
                                                isLowEfficiency: l,
                                                name: t.name,
                                                iconName: t.iconName,
                                                userName: t.userName,
                                                level: t.level,
                                                isZero: t.isZero,
                                                isLocked: t.isLocked,
                                                isDisabled: t.isDisabled,
                                                isIrrelevant: t.isIrrelevant,
                                                battleBooster: t.battleBooster,
                                                animationType: t.animationType,
                                                onSkillClick: _,
                                                animationDelay: i,
                                                key: `${m}-${t.animationType}`,
                                            }),
                                            s && r().createElement('div', { className: f()(Hu, d && zu) }),
                                        ),
                                    ),
                                    0 !== t &&
                                        '' !== u &&
                                        r().createElement(
                                            At.t,
                                            {
                                                targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                                args: { tooltipId: Ft.OU, intCD: t, componentKey: n },
                                            },
                                            r().createElement('div', {
                                                className: $u,
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.icons.quests.bonuses.big.$dyn(u)})`,
                                                },
                                            }),
                                        ),
                                ),
                            );
                        },
                    ),
                    ju = 'SkillsGroupTitle_base_e4',
                    Gu = 'SkillsGroupTitle_base__withBonus_b1',
                    Uu = 'SkillsGroupTitle_titleText_06',
                    Zu = 'SkillsGroupTitle_titleText__untrained_a7',
                    Ku = 'SkillsGroupTitle_infoIcon_b4',
                    qu = (0, n.memo)(({ title: e, componentKey: t, isUntrained: u, isBonusQualifications: n = !1 }) =>
                        r().createElement(
                            'div',
                            { className: f()(ju, n && Gu) },
                            r().createElement('div', { className: f()(Uu, u && Zu) }, e),
                            n &&
                                r().createElement(
                                    ie.u,
                                    {
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        contentId: R.views.lobby.crew.tooltips.BonusPerksTooltip('resId'),
                                        args: { componentKey: t },
                                    },
                                    r().createElement('div', { className: Ku }),
                                ),
                        ),
                    ),
                    Yu = 'SkillsMatrix_base_2a',
                    Xu = 'SkillsMatrix_scrollableSection_24',
                    Ju = 'SkillsMatrix_bonusScrollBar_b7',
                    Qu = 'SkillsMatrix_bonusScrollContent_06',
                    en = (0, i.Pi)(() => {
                        const e = (0, a.GS)().mediaSize,
                            t = F(),
                            u = t.model,
                            i = t.controls,
                            s = u.tankmanId.get(),
                            l = u.skillsMatrix.componentKey.get(),
                            c = u.computes.mainSkills(),
                            d = u.computes.bonusSkills(),
                            m = u.computes.isUntrained(),
                            E = u.computes.isLowPerksEfficiency(),
                            _ = c.skills.reduce((e, t) => (t.level === o.I ? ++e : e), 0),
                            g = c.skills.findIndex((e) => e.animationType !== Ie.None),
                            A =
                                ((p = [c.skills, ...d.map((e) => e.skills)]),
                                (f = g),
                                Math.max(
                                    ...p.map((e, t) => {
                                        const u = t > 0;
                                        return Math.max(
                                            ...bt(e, u, t, f, (e, t, n) =>
                                                void 0 === n ? 0 : n + Bt(e.animationType, u),
                                            ),
                                        );
                                    }),
                                ));
                        var p, f;
                        (0, n.useEffect)(() => {
                            if (A > 0) {
                                i.setAnimationInProgress(!0);
                                const e = (0, S.F)(() => i.setAnimationInProgress(!1), A);
                                return () => {
                                    (i.setAnimationInProgress(!1), e());
                                };
                            }
                        }, [A, s, i]);
                        const D = (0, n.useCallback)((e) => i.clickSkill(e), [i]);
                        return r().createElement(
                            'div',
                            { className: Yu },
                            r().createElement(qu, {
                                title: m
                                    ? R.strings.crew.matrix.skills.main.disabled()
                                    : R.strings.crew.matrix.skills.main.enabled(),
                                componentKey: l,
                                isUntrained: m,
                            }),
                            r().createElement(Vu, {
                                mediaSize: e,
                                componentKey: l,
                                isUntrained: m,
                                isLowEfficiency: E,
                                role: c.role,
                                directiveId: c.directiveId,
                                directiveName: c.directiveName,
                                selectedSkillsCount: c.selectedSkillsCount,
                                skills: c.skills,
                                onSkillClick: D,
                                tankmanId: s,
                            }),
                            u.isTankmanInVehicle.get() &&
                                d.length > 0 &&
                                r().createElement(
                                    Le.z,
                                    { className: Xu, classNames: { bar: Ju, content: Qu } },
                                    r().createElement(qu, {
                                        isBonusQualifications: !0,
                                        title: R.strings.crew.matrix.skills.bonus(),
                                        componentKey: l,
                                        isUntrained: m,
                                    }),
                                    d.map((t, u) =>
                                        r().createElement(Vu, {
                                            isBonusQualification: !0,
                                            key: `${t.role}-${u}`,
                                            mediaSize: e,
                                            componentKey: l,
                                            isUntrained: m,
                                            isLowEfficiency: E,
                                            qualificationIndex: u + 1,
                                            role: t.role,
                                            directiveId: t.directiveId,
                                            directiveName: t.directiveName,
                                            selectedSkillsCount: t.selectedSkillsCount,
                                            skills: t.skills,
                                            onSkillClick: D,
                                            selectedMajorSkillsAmount: g,
                                            tankmanId: s,
                                        }),
                                    ),
                                ),
                            r().createElement(gt, {
                                mediaSize: e,
                                bonusSkillsCount: d.length,
                                hasPostProgression: u.hasPostProgression.get(),
                                resetGracePeriodLeft: u.skillsMatrix.resetGracePeriodLeft.get(),
                                isResetDisable: u.skillsMatrix.isResetDisable.get(),
                                hasResetDiscount: u.skillsMatrix.hasResetDiscount.get(),
                                isResetFree: u.skillsMatrix.isResetFree.get(),
                                hasIncreaseDiscount: u.skillsMatrix.hasIncreaseDiscount.get(),
                                onIncreaseClick: i.increase,
                                onResetClick: i.reset,
                                allSkillsLearned: _ === c.skills.length,
                            }),
                        );
                    }),
                    tn = 'PersonalFileViewApp_base_23',
                    un = 'PersonalFileViewApp_content_ad',
                    nn = (0, i.Pi)(({ setTTCVisibility: e }) => {
                        const t = (0, a.GS)().mediaSize,
                            u = F(),
                            i = u.model,
                            o = u.controls,
                            l = i.computes.isTTCVisible();
                        (0, n.useEffect)(() => {
                            (o.setTTCVisible(t >= a.cJ.Small), e && e(l));
                        }, [o, l, t, e]);
                        const c = i.tankmanId.get();
                        return (
                            (0, n.useEffect)(() => {
                                window.tutorialApi.updateComponents();
                            }, [c]),
                            r().createElement(
                                'div',
                                { className: tn },
                                r().createElement(
                                    'div',
                                    { className: un },
                                    r().createElement(s.J, {
                                        rootId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    }),
                                    i.hasPostProgression.get() && r().createElement(Ne, null),
                                    r().createElement(en, null),
                                ),
                            )
                        );
                    }),
                    rn = R.views.lobby.crew.personal_case.PersonalFileView('resId');
                r().memo(({ setTTCVisibility: e }) =>
                    r().createElement(A, { options: { rootId: rn } }, r().createElement(nn, { setTTCVisibility: e })),
                );
            },
            6035: (e, t, u) => {
                'use strict';
                u.d(t, { J: () => ft });
                var n = u(4029),
                    r = u(7363),
                    a = u.n(r),
                    i = u(6483),
                    s = u.n(i),
                    o = u(3403),
                    l = u(3618),
                    c = u(7515),
                    d = u(1856),
                    m = u(3138),
                    E = u(6112),
                    _ = u(4598);
                var g = u(2039);
                const A = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function F() {
                    return (
                        (F =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        F.apply(this, arguments)
                    );
                }
                const p = (0, r.forwardRef)(function (e, t) {
                        let u = e.src,
                            n = e.className,
                            i = e.autoplay,
                            s = void 0 !== i && i,
                            o = e.style,
                            l = e.loop,
                            p = void 0 !== l && l,
                            f = e.isPrebufferKeyframes,
                            D = e.keyframesNameConfig,
                            h = e.onClick,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) ((u = a[n]), t.indexOf(u) >= 0 || (r[u] = e[u]));
                                return r;
                            })(e, A);
                        const B = t,
                            b = (0, r.useRef)(null);
                        return (
                            (0, g.b)(() =>
                                m.O.view.events.onDisplayChanged((e, t) => {
                                    var u, n;
                                    t === E.W.hidden && (null == (u = b.current) || u.pause());
                                    t === E.W.shown && (null == (n = b.current) || n.play());
                                }),
                            ),
                            (0, r.useEffect)(
                                () =>
                                    (0, d.v)(() => {
                                        const e = b.current;
                                        if (!B || !e || !f)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [f, B],
                            ),
                            (0, r.useEffect)(() => {
                                if (B && b.current) {
                                    const e = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: _.ZT,
                                        },
                                        t = () => {
                                            let t = 0;
                                            const u = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function u() {
                                                            (e(), (t = requestAnimationFrame(u)));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (b.current) {
                                                        const u = b.current,
                                                            n = u.currentTime,
                                                            r = u.duration;
                                                        if (
                                                            (t !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: r }),
                                                                ),
                                                                (t = n)),
                                                            b.current.paused || !B || !f)
                                                        )
                                                            return;
                                                        const a = b.current.cohGetKeyframeTimestamps();
                                                        a.forEach((t, u) => {
                                                            n > a[u] - 0.02 &&
                                                                n < a[u] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != D ? D : {})[u];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${D ? n : `Point_${u}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = u[0],
                                                r = u[1];
                                            return (n(), r);
                                        };
                                    e.changeTimeLoop = t();
                                    const u = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const u = e.changeTimeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const u = e.changeKeyframeHandlers,
                                                    n = u.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : u.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.currentTime;
                                        },
                                        a = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.duration;
                                        },
                                        i = (e) => {
                                            b.current && (b.current.currentTime = (0, c.u)(0, b.current.duration, e));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.play();
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = b.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            (o(), i(0));
                                        },
                                        d = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = b.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        m = (e) => {
                                            (i(e), s());
                                        },
                                        E = (e) => {
                                            (i(e), o());
                                        },
                                        g = () => {
                                            ((e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop());
                                        },
                                        A = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = b.current) || u.addEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = b.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        F = (e, t) => {
                                            var u;
                                            return (
                                                null == (u = b.current) || u.removeEventListener(e, t),
                                                () => {
                                                    var u;
                                                    return null == (u = b.current)
                                                        ? void 0
                                                        : u.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (B.current = {
                                            on: A,
                                            off: F,
                                            play: s,
                                            pause: o,
                                            stop: l,
                                            cleanup: g,
                                            getCurrentTime: r,
                                            getDuration: a,
                                            getCachedKeyframes: d,
                                            goToAndPlay: m,
                                            goToAndStop: E,
                                            setCurrentTime: i,
                                            domRef: b.current,
                                            onChangeTime: u,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            (g(), (B.current = null));
                                        }
                                    );
                                }
                            }, [D, B, f]),
                            (0, r.useEffect)(() => {
                                b.current && s && b.current.play();
                            }, [s, p]),
                            (0, r.useEffect)(() => {
                                if (b.current)
                                    return () => {
                                        b.current && b.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                F({ src: u, className: n, style: o, loop: p, ref: b, onClick: h }, C),
                            )
                        );
                    }),
                    f = (0, r.memo)(p);
                var D = u(122),
                    h = u(514),
                    C = u(7641),
                    B = u(3649),
                    b = u(7030),
                    v = u(7160),
                    w = u(7077),
                    y = u(8018);
                const S = 'TankmanFolder_base_00',
                    k = 'TankmanFolder_folder_f5',
                    x = 'TankmanFolder_folder__postProgression_07',
                    T = 'TankmanFolder_photoFrame_ae',
                    N = 'TankmanFolder_base__big_60',
                    I = 'TankmanFolder_veteranBlick_14',
                    L = 'TankmanFolder_veteranFrame_9c',
                    P = 'TankmanFolder_icon_74',
                    O = 'TankmanFolder_innerShadow_44',
                    M = R.images.gui.maps.icons.tankmen.icons.c_204x256,
                    W = (0, C.remToPx)(50),
                    H = a().memo(function ({
                        name: e,
                        isSkin: t = !1,
                        hasPostProgression: u = !1,
                        isPostProgressionAnimated: n = !1,
                        className: i,
                    }) {
                        const o = (0, r.useState)(u && !n),
                            l = o[0],
                            c = o[1],
                            d = (0, r.useMemo)(() => {
                                const u = (0, B.BN)(String(e));
                                return null !== (t ? M.$dyn('crewSkins') : M).$dyn(u) ? w.U.c204x256 : w.U.c158x118;
                            }, [e, t]),
                            m = d === w.U.c204x256,
                            E = (0, b.useSpring)({
                                from: { opacity: 1, y: 0 },
                                to: { opacity: 0, y: W },
                                config: { duration: 700, easing: v.to },
                                delay: 300,
                            }),
                            _ = (0, b.useSpring)({
                                from: { opacity: 0, y: W },
                                to: { opacity: 1, y: 0 },
                                config: { duration: 700, easing: v.to },
                                delay: 1100,
                            });
                        return (
                            (0, r.useEffect)(() => {
                                if (n) {
                                    const e = (0, D.F)(() => h.hY.sound(y.gO.CREW_PROFILE_UPGRADE), 300),
                                        t = (0, D.F)(() => c(!0), 1400);
                                    return () => {
                                        (e(), t());
                                    };
                                }
                            }, [n]),
                            a().createElement(
                                'div',
                                { className: s()(S, m && N, i) },
                                n && a().createElement(b.animated.div, { style: E, className: k }),
                                a().createElement(b.animated.div, { style: n ? _ : void 0, className: s()(k, u && x) }),
                                l &&
                                    a().createElement(f, {
                                        src: R.videos.crew.profile.veteran_blick(),
                                        className: I,
                                        loop: !0,
                                        autoplay: !0,
                                    }),
                                a().createElement(
                                    'div',
                                    { className: T },
                                    a().createElement(w.G, { name: e, size: d, isSkin: t, classMix: P }),
                                    m && a().createElement('div', { className: O }),
                                ),
                                l &&
                                    a().createElement(f, {
                                        src: m
                                            ? R.videos.crew.profile.veteran_frame_big()
                                            : R.videos.crew.profile.veteran_frame_small(),
                                        className: L,
                                        loop: !0,
                                        autoplay: !0,
                                    }),
                            )
                        );
                    });
                var z = u(5716),
                    $ = u(771),
                    V = u(3215),
                    j = u(3946),
                    G = u(8032);
                const U = (0, V.q3)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'invId',
                                        'iconName',
                                        'fullName',
                                        'description',
                                        'role',
                                        'skillsEfficiency',
                                        'isInSkin',
                                        'isFemale',
                                        'isCrewLocked',
                                        'isPostProgressionAnimated',
                                        'hasPostProgression',
                                        'hasUniqueSound',
                                        'hasRetrainDiscount',
                                        'isWotPlusNativeVehicle',
                                        'componentKey',
                                    ]),
                                    {
                                        currentVehicle: e.object('currentVehicle'),
                                        nativeVehicle: e.object('nativeVehicle'),
                                    },
                                ),
                                u = (0, j.Om)(() => t.skillsEfficiency.get() === $.sU, !0),
                                n = (0, j.Om)(() => t.skillsEfficiency.get() < $.yb),
                                r = (0, j.Om)(() => {
                                    const e = t.currentVehicle.get(),
                                        u = t.nativeVehicle.get();
                                    if (void 0 === e && void 0 === u)
                                        return { isWrongVehicleType: !0, isWrongVehicle: !0 };
                                    const n = Boolean(e.name);
                                    return {
                                        isWrongVehicleType: n && e.type !== u.type && !(0, G.f)(e.tags, z.Yl),
                                        isWrongVehicle: n && e.name !== u.name && !e.isPremium,
                                    };
                                }),
                                a = (0, j.Om)(() =>
                                    t.hasRetrainDiscount.get()
                                        ? {
                                              args: { tooltipId: 'actionPrice', componentKey: t.componentKey.get() },
                                              targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          }
                                        : {
                                              contentId:
                                                  R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                                      'resId',
                                                  ),
                                              decoratorId:
                                                  R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                              targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                              args: { componentKey: t.componentKey.get() },
                                              body: u()
                                                  ? R.strings.tooltips.buttons.retrain.body()
                                                  : R.strings.tooltips.buttons.increase.body(),
                                          },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    isUntrained: u,
                                    isLowPerksEfficiency: n,
                                    vehicleValidator: r,
                                    discountTooltipArgs: a,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            playUniqueVoice: e.createCallbackNoArgs('onPlayUniqueVoice'),
                            changeVehicle: e.createCallbackNoArgs('onChangeVehicle'),
                            retrain: e.createCallbackNoArgs('onRetrain'),
                        }),
                    ),
                    Z = U[0],
                    K = U[1];
                var q = u(3457),
                    Y = u(3415),
                    X = u(5415),
                    J = u(7078),
                    Q = u(2603),
                    ee = u(9916);
                const te = 'RetrainAndEfficiency_base_71',
                    ue = 'RetrainAndEfficiency_canNotRetrainIcon_82',
                    ne = 'RetrainAndEfficiency_retrainWarningLabel_af',
                    re = 'RetrainAndEfficiency_skillsEfficiencyLabel_45',
                    ae = 'RetrainAndEfficiency_skillsEfficiencyLabel__red_e9',
                    ie = 'RetrainAndEfficiency_skillsEfficiencyRateContainer_5c',
                    se = 'RetrainAndEfficiency_skillsEfficiencyNumber_9a',
                    oe = 'RetrainAndEfficiency_skillsEfficiencyNumber__red_a1',
                    le = 'RetrainAndEfficiency_skillsEfficiencyInfoIcon_76',
                    ce = a().memo(
                        ({
                            tankmanID: e,
                            efficiencyValue: t,
                            componentKey: u,
                            isWrongVehicle: n,
                            isPenaltyActive: r,
                            isWrongVehicleType: i,
                        }) =>
                            n || i
                                ? a().createElement(
                                      J.t,
                                      {
                                          targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          args: { componentKey: u, tooltipId: Q.M4 },
                                      },
                                      a().createElement(
                                          'div',
                                          { className: te },
                                          a().createElement('div', { className: ue }),
                                          a().createElement(
                                              'div',
                                              { className: ne },
                                              R.strings.crew.personalFile.isUntrained(),
                                          ),
                                      ),
                                  )
                                : a().createElement(
                                      J.t,
                                      {
                                          targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                          args: { tankmanID: e, componentKey: u, tooltipId: Q.Br },
                                      },
                                      a().createElement(
                                          'div',
                                          { className: te },
                                          a().createElement(
                                              'div',
                                              { className: s()(re, r && ae) },
                                              R.strings.crew.personalFile.skillsEfficiency(),
                                          ),
                                          a().createElement(
                                              'div',
                                              { className: ie },
                                              a().createElement(
                                                  'div',
                                                  { className: s()(se, r && oe) },
                                                  (0, B.dL)(ee.Z5.getNumberFormat(t * $.I, ee.B3.INTEGRAL)),
                                              ),
                                              !r && a().createElement('div', { className: le }),
                                          ),
                                      ),
                                  ),
                    ),
                    de = 'CurrentVehicleTrain_base_22',
                    me = 'CurrentVehicleTrain_currentVehicle_9d',
                    Ee = 'CurrentVehicleTrain_currentVehicleName_19',
                    _e = 'CurrentVehicleTrain_currentVehicleName__isPremium_86',
                    ge = 'CurrentVehicleTrain_retrainContainer_6a',
                    Ae = 'CurrentVehicleTrain_retrainBtnContainer_00',
                    Fe = 'CurrentVehicleTrain_retrainBtn_3e',
                    pe = 'CurrentVehicleTrain_discountContainer_24',
                    fe = 'CurrentVehicleTrain_discountText_45',
                    De = 'CurrentVehicleTrain_retrainDiscountIcon_91',
                    he = 'CurrentVehicleTrain_penaltyDiscountIcon_33',
                    Ce = ({
                        tankmanId: e,
                        skillsEfficiency: t,
                        componentKey: u,
                        isUntrained: n,
                        isLowPerksEfficiency: r,
                        isWrongVehicle: i,
                        isWrongVehicleType: o,
                        hasRetrainDiscount: c,
                        currentVehicle: d,
                        tooltipArgs: m,
                        onRetrainClick: E,
                    }) => {
                        const _ = (0, X.GS)().mediaSize;
                        return a().createElement(
                            'div',
                            { className: de },
                            a().createElement(
                                'div',
                                { className: me },
                                a().createElement(l.w, {
                                    text: d.name
                                        ? R.strings.crew.personalFile.inVehicle()
                                        : R.strings.crew.common.inBarracks(),
                                    binding: {
                                        vehicle: a().createElement(
                                            'div',
                                            { className: s()(Ee, d.isPremium && _e) },
                                            d.name,
                                        ),
                                    },
                                }),
                            ),
                            a().createElement(ce, {
                                isWrongVehicle: i,
                                isPenaltyActive: r,
                                isWrongVehicleType: o,
                                tankmanID: e,
                                efficiencyValue: t,
                                componentKey: u,
                            }),
                            r &&
                                a().createElement(
                                    Y.l,
                                    { tooltipArgs: m },
                                    a().createElement(
                                        'div',
                                        { className: ge },
                                        a().createElement(
                                            'div',
                                            { className: Ae },
                                            a().createElement(
                                                q.u5,
                                                { onClick: E, type: q.L$.secondary, mixClass: Fe },
                                                n
                                                    ? R.strings.crew.personalFile.retrain()
                                                    : R.strings.crew.personalFile.increase(),
                                            ),
                                        ),
                                        c && a().createElement('div', { className: he }),
                                    ),
                                ),
                            c &&
                                !r &&
                                a().createElement(
                                    Y.l,
                                    { tooltipArgs: m },
                                    a().createElement(
                                        'div',
                                        { className: pe },
                                        a().createElement(
                                            'div',
                                            { className: fe },
                                            _ < X.cJ.Large
                                                ? R.strings.crew.personalFile.discount.short()
                                                : R.strings.crew.personalFile.discount.full(),
                                        ),
                                        a().createElement('div', { className: De }),
                                    ),
                                ),
                        );
                    };
                var Be = u(6373);
                const be = 'Name_base_2d',
                    ve = 'Name_labelWrapper_a0',
                    we = 'Name_labelHiglight_7d',
                    ye = 'Name_voiceButton_00',
                    Se = 'Name_soundIcon_2a',
                    ke = 'Name_animationGlow_08',
                    xe = (0, r.memo)(
                        ({
                            fullName: e,
                            hasUniqueSound: t,
                            hasPostProgression: u,
                            isPostProgressionAnimated: n,
                            onVoiceBtnClick: r,
                        }) => {
                            const i = (0, b.useSpring)({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 0.5, config: { duration: 600 } },
                                        { opacity: 0, config: { duration: 300 } },
                                    ],
                                    delay: 1100,
                                    config: { easing: v.to },
                                }),
                                s = (0, b.useSpring)({
                                    from: { opacity: 0 },
                                    to: [
                                        { opacity: 1, config: { duration: 600 } },
                                        { opacity: 0.8, config: { duration: 300 } },
                                    ],
                                    delay: 1100,
                                    config: { easing: v.to },
                                });
                            return a().createElement(
                                'div',
                                { className: be },
                                a().createElement(
                                    'div',
                                    { className: ve },
                                    u && a().createElement(b.animated.div, { style: n ? s : void 0, className: we }, e),
                                    a().createElement('div', null, e),
                                    n && a().createElement(b.animated.div, { style: i, className: ke }),
                                    t &&
                                        a().createElement(
                                            Be.i,
                                            {
                                                header: R.strings.crew.personalFile.voiceTooltip.header(),
                                                body: R.strings.crew.personalFile.voiceTooltip.body(),
                                            },
                                            a().createElement(
                                                q.u5,
                                                { size: q.qE.extraSmall, type: q.L$.ghost, mixClass: ye, onClick: r },
                                                a().createElement('div', { className: Se }),
                                            ),
                                        ),
                                ),
                            );
                        },
                    );
                var Te = u(1530);
                const Re = 'Role_base_e0',
                    Ne = 'Role_role_2a',
                    Ie = 'Role_roleName_79',
                    Le = 'Role_commanderFeature_e2',
                    Pe = 'Role_sense_21',
                    Oe = 'Role_commanderBonus_99',
                    Me = 'commander',
                    We = (0, r.memo)(({ role: e, componentKey: t, isFemale: u }) => {
                        const n = (0, X.GS)().mediaSize;
                        return a().createElement(
                            'div',
                            { className: Re },
                            a().createElement(
                                J.t,
                                {
                                    args: { componentKey: t, tooltipId: Q.v$ },
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                },
                                a().createElement(
                                    'div',
                                    { className: Ne },
                                    a().createElement(Te.M, {
                                        role: e,
                                        size: n === X.cJ.ExtraLarge ? Te.S.c30x30 : Te.S.c18x18,
                                    }),
                                    a().createElement('div', { className: Ie }, (0, y.Gc)(e, u)),
                                ),
                            ),
                            e === Me &&
                                a().createElement(
                                    'div',
                                    { className: Le },
                                    a().createElement(
                                        J.t,
                                        {
                                            args: {
                                                componentKey: t,
                                                skillName: 'commander_sixthSense',
                                                roleName: Me,
                                                tooltipId: Q.HZ,
                                                level: 100,
                                            },
                                            targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        },
                                        a().createElement('div', { className: Pe }),
                                    ),
                                    a().createElement(
                                        J.t,
                                        {
                                            args: { componentKey: t, tooltipId: Q.uN },
                                            targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        },
                                        a().createElement('div', { className: Oe }),
                                    ),
                                ),
                        );
                    });
                var He = u(2056),
                    ze = u(9690),
                    $e = u(9053),
                    Ve = u(5640);
                const je = {
                    base: 'VehicleTypeIcon_base_80',
                    base__big: 'VehicleTypeIcon_base__big_01',
                    base__c_44x44: 'VehicleTypeIcon_base__c_44x44_80',
                    base__c_48x48_specSlot: 'VehicleTypeIcon_base__c_48x48_specSlot_c4',
                    base__c_60x54: 'VehicleTypeIcon_base__c_60x54_08',
                };
                let Ge;
                !(function (e) {
                    ((e.c83x74 = 'big'),
                        (e.c60x54 = 'c_60x54'),
                        (e.c44x44 = 'c_44x44'),
                        (e.c48x48_specSlot = 'c_48x48_specSlot'));
                })(Ge || (Ge = {}));
                const Ue = a().memo(function ({ vehicleType: e, isElite: t, className: u, iconSize: n = Ge.c44x44 }) {
                        const r = `${(0, B.BN)(e)}${t ? '_elite' : ''}`,
                            i = R.images.gui.maps.icons.vehicleTypes.$dyn(n);
                        return a().createElement('div', {
                            className: s()(je.base, je[`base__${n}`], u),
                            style: { backgroundImage: `url(${null == i ? void 0 : i.$dyn(r)})` },
                        });
                    }),
                    Ze = 'SpecializationSlots_base_1a',
                    Ke = 'SpecializationSlots_frame_85',
                    qe = 'SpecializationSlots_frameChange_c6',
                    Ye = 'SpecializationSlots_darkFrame_34',
                    Xe = 'SpecializationSlots_shadow_4a',
                    Je = 'SpecializationSlots_arrows_6e',
                    Qe = 'SpecializationSlots_info_7c',
                    et = 'SpecializationSlots_arrowsIcon_fc',
                    tt = 'SpecializationSlots_changeVehicle_58',
                    ut = 'SpecializationSlots_tier_68',
                    nt = 'SpecializationSlots_vehicle_b6',
                    rt = 'SpecializationSlots_vehicleTypeIcon_77',
                    at = 'SpecializationSlots_flag_84',
                    it = 'SpecializationSlots_vehicleIcon_ec',
                    st = 'SpecializationSlots_premVehicle_c3',
                    ot = 'SpecializationSlots_premVehicleTypeIcon_c9',
                    lt = 'SpecializationSlots_wotPlusBg_ce',
                    ct = (e, t, u, n) =>
                        e
                            ? {
                                  contentId: R.views.lobby.crew.tooltips.SpecializationWotPlusTooltip('resId'),
                                  targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                  args: { componentKey: n },
                              }
                            : {
                                  header: t
                                      ? R.strings.crew.personalFile.crewLockedTooltip.header()
                                      : R.strings.crew.personalFile.vehicleTooltip.header(),
                                  body: t ? R.strings.crew.personalFile.crewLockedTooltip.body() : u,
                                  ignoreMouseClick: t,
                              },
                    dt = (0, o.Pi)(({ componentKey: e }) => {
                        const t = K(),
                            u = t.model,
                            n = t.controls,
                            r = u.isCrewLocked.get(),
                            i = u.isWotPlusNativeVehicle.get(),
                            o = u.nativeVehicle.get();
                        return a().createElement(
                            'div',
                            { className: Ze },
                            a().createElement(
                                Y.l,
                                { tooltipArgs: ct(i, r, o.name, e) },
                                a().createElement(
                                    'div',
                                    {
                                        id: 'retraining_btn',
                                        onMouseEnter: () => !r && h.hY.highlight(),
                                        onClick: () => {
                                            r || (h.hY.click(), n.changeVehicle());
                                        },
                                        className: s()(r ? Ke : qe),
                                    },
                                    a().createElement('div', { className: Ye }),
                                    a().createElement(Ve.U, { size: Ve.$.c155x31, nation: o.nation, className: at }),
                                    i && a().createElement('div', { className: lt }),
                                    a().createElement('div', {
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.vehicle.small.$dyn((0, B.BN)(`${o.nation}-${o.techName}`))})`,
                                        },
                                        className: it,
                                    }),
                                    a().createElement(
                                        'div',
                                        { className: Qe },
                                        a().createElement('div', { className: ut }, (0, ze.HG)(o.tier)),
                                        a().createElement(Ue, {
                                            isElite: o.isPremium,
                                            vehicleType: o.type,
                                            className: rt,
                                            iconSize: o.isPremium ? Ge.c44x44 : Ge.c48x48_specSlot,
                                        }),
                                        a().createElement('div', { className: nt }, o.name),
                                    ),
                                    a().createElement('div', { className: Xe }),
                                    a().createElement(
                                        'div',
                                        { className: Je },
                                        a().createElement('div', { className: et }),
                                        a().createElement(
                                            'div',
                                            { className: tt },
                                            R.strings.crew.personalFile.changeVehicle(),
                                        ),
                                    ),
                                ),
                            ),
                            a().createElement(
                                He.u,
                                {
                                    targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                    contentId: R.views.lobby.crew.tooltips.PremiumVehicleTooltip('resId'),
                                    args: { componentKey: e },
                                },
                                a().createElement(
                                    'div',
                                    { className: Ke },
                                    a().createElement(Ve.U, { size: Ve.$.c155x31, nation: o.nation, className: at }),
                                    a().createElement(
                                        'div',
                                        { className: Qe },
                                        a().createElement(l.w, {
                                            alignContent: $e.v2.Center,
                                            justifyContent: $e.v2.Center,
                                            classMix: st,
                                            text: R.strings.crew.personalFile.premiumVehicle(),
                                            binding: {
                                                icon: a().createElement(Ue, {
                                                    isElite: !0,
                                                    vehicleType: o.type,
                                                    className: ot,
                                                }),
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    mt = 'TankmanInfoApp_base_bc',
                    Et = 'TankmanInfoApp_tankmanFolder_6d',
                    _t = 'TankmanInfoApp_descriptionBlock_00',
                    gt = 'TankmanInfoApp_description_3c',
                    At = 'TankmanInfoApp_specializationLabel_a3',
                    Ft = 'TankmanInfoApp_specializationLabel__withDescription_2e',
                    pt = (0, o.Pi)(() => {
                        const e = K(),
                            t = e.model,
                            u = e.controls,
                            n = t.invId.get(),
                            r = t.description.get(),
                            i = t.componentKey.get(),
                            o = t.hasPostProgression.get(),
                            c = t.isPostProgressionAnimated.get(),
                            d = t.computes.vehicleValidator(),
                            m = d.isWrongVehicle,
                            E = d.isWrongVehicleType,
                            _ = Boolean(r);
                        return a().createElement(
                            'div',
                            { className: mt },
                            a().createElement(H, {
                                key: `${[n, o, c].join()}`,
                                name: t.iconName.get(),
                                isSkin: t.isInSkin.get(),
                                hasPostProgression: o,
                                isPostProgressionAnimated: c,
                                className: Et,
                            }),
                            a().createElement(
                                'div',
                                { className: _t },
                                a().createElement(We, {
                                    role: t.role.get(),
                                    componentKey: i,
                                    isFemale: t.isFemale.get(),
                                }),
                                a().createElement(xe, {
                                    key: n,
                                    fullName: t.fullName.get(),
                                    hasUniqueSound: t.hasUniqueSound.get(),
                                    hasPostProgression: o,
                                    isPostProgressionAnimated: c,
                                    onVoiceBtnClick: u.playUniqueVoice,
                                }),
                                _ &&
                                    a().createElement(l.w, {
                                        isTooltipEnable: !0,
                                        isTruncationAvailable: !0,
                                        text: r,
                                        customTooltipArgs: { componentKey: i },
                                        targetId: R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                                        classMix: gt,
                                    }),
                                a().createElement(
                                    'div',
                                    { className: s()(At, _ && Ft) },
                                    R.strings.crew.personalFile.specialization(),
                                ),
                                a().createElement(dt, { componentKey: i }),
                                a().createElement(Ce, {
                                    tankmanId: n,
                                    skillsEfficiency: t.skillsEfficiency.get(),
                                    componentKey: i,
                                    isUntrained: t.computes.isUntrained(),
                                    isLowPerksEfficiency: t.computes.isLowPerksEfficiency(),
                                    isWrongVehicle: m,
                                    isWrongVehicleType: E,
                                    hasRetrainDiscount: t.hasRetrainDiscount.get(),
                                    currentVehicle: t.currentVehicle.get(),
                                    tooltipArgs: t.computes.discountTooltipArgs(),
                                    onRetrainClick: u.retrain,
                                }),
                            ),
                        );
                    }),
                    ft = (0, r.memo)(({ rootId: e }) =>
                        a().createElement(
                            n.z,
                            null,
                            a().createElement(
                                Z,
                                { options: { rootId: e, context: 'model.tankmanInfo' } },
                                a().createElement(pt, null),
                            ),
                        ),
                    );
            },
            5716: (e, t, u) => {
                'use strict';
                u.d(t, { Yl: () => n });
                const n = 'wotPlus';
            },
            4150: (e, t, u) => {
                'use strict';
                let n;
                (u.d(t, { S: () => n }),
                    (function (e) {
                        ((e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved'));
                    })(n || (n = {})));
            },
            2603: (e, t, u) => {
                'use strict';
                u.d(t, { Br: () => s, HZ: () => n, M4: () => o, OU: () => a, uN: () => r, v$: () => i });
                const n = 'crewPerkGf',
                    r = 'commanderBonus',
                    a = 'directive',
                    i = 'tankman',
                    s = 'skillsEfficiency',
                    o = 'crewSkillUntrained';
            },
            771: (e, t, u) => {
                'use strict';
                u.d(t, { I: () => a, sU: () => n, yb: () => r });
                const n = -1,
                    r = 1,
                    a = 100;
                let i;
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
                })(i || (i = {}));
            },
            6880: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
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
            372: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalBar_base_49',
                    base__active: 'HorizontalBar_base__active_5e',
                    leftButton: 'HorizontalBar_leftButton_5f',
                    rightButton: 'HorizontalBar_rightButton_03',
                    track: 'HorizontalBar_track_0d',
                    thumb: 'HorizontalBar_thumb_fd',
                    rail: 'HorizontalBar_rail_32',
                };
            },
            4682: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                };
            },
            9168: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'VerticalBar_base_f3',
                    base__active: 'VerticalBar_base__active_72',
                    topButton: 'VerticalBar_topButton_d7',
                    bottomButton: 'VerticalBar_bottomButton_06',
                    track: 'VerticalBar_track_df',
                    thumb: 'VerticalBar_thumb_32',
                    rail: 'VerticalBar_rail_43',
                };
            },
            5636: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                };
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
            8236: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'FlagIcon_base_25',
                    base__c_1080x454: 'FlagIcon_base__c_1080x454_6c',
                    base__c_240x118: 'FlagIcon_base__c_240x118_92',
                    base__c_155x31: 'FlagIcon_base__c_155x31_41',
                };
            },
            8386: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            },
            7734: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'ScrollWithLips_base_a2',
                    bar: 'ScrollWithLips_bar_67',
                    content: 'ScrollWithLips_content_6d',
                    fadeContainerTop: 'ScrollWithLips_fadeContainerTop_6d',
                    fadeContainerBottom: 'ScrollWithLips_fadeContainerBottom_43',
                    fade: 'ScrollWithLips_fade_5e',
                };
            },
            4458: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'SkillIcon_base_43',
                    base__c_22x22: 'SkillIcon_base__c_22x22_14',
                    base__medium: 'SkillIcon_base__medium_d0',
                    base__c_36x36_flat: 'SkillIcon_base__c_36x36_flat_7e',
                    base__big: 'SkillIcon_base__big_ae',
                    base__c_80x80: 'SkillIcon_base__c_80x80_79',
                    base__c_120x90: 'SkillIcon_base__c_120x90_8c',
                    base__dialogs: 'SkillIcon_base__dialogs_e5',
                };
            },
            3938: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, u, n] = deferred[o], a = !0, i = 0; i < t.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, u, n];
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
        (__webpack_require__.j = 8640),
        (() => {
            var e = { 8640: 0, 2695: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [a, i, s] = u,
                        o = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); o < a.length; o++)
                        ((r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(4591));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
