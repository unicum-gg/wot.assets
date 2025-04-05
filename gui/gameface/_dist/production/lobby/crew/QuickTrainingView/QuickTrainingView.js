(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    o = u(7363),
                    i = u.n(o),
                    s = u(6880),
                    l = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: c,
                    mixClass: d,
                    soundHover: _,
                    soundClick: m,
                    onMouseEnter: E,
                    onMouseMove: g,
                    onMouseDown: A,
                    onMouseUp: p,
                    onMouseLeave: b,
                    onClick: C,
                }) => {
                    const h = (0, o.useRef)(null),
                        F = (0, o.useState)(u),
                        f = F[0],
                        v = F[1],
                        D = (0, o.useState)(!1),
                        B = D[0],
                        y = D[1];
                    return (
                        (0, o.useEffect)(() => {
                            function e(e) {
                                f && null !== h.current && !h.current.contains(e.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, o.useEffect)(() => {
                            v(u);
                        }, [u]),
                        i().createElement(
                            'div',
                            {
                                ref: h,
                                className: a()(
                                    s.Z.base,
                                    s.Z[`base__${n}`],
                                    c && s.Z.base__disabled,
                                    t && s.Z[`base__${t}`],
                                    f && s.Z.base__focus,
                                    B && s.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== _ && (0, r.G)(_), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    g && g(e);
                                },
                                onMouseUp: function (e) {
                                    c || (p && p(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, r.G)(m),
                                        A && A(e),
                                        u && (c || (h.current && (h.current.focus(), v(!0)))),
                                        y(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (b && b(e), y(!1));
                                },
                                onClick: function (e) {
                                    c || (C && C(e));
                                },
                            },
                            n !== l.L.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: s.Z.back }),
                                    i().createElement('span', { className: s.Z.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: a()(s.Z.state, s.Z.state__default) },
                                i().createElement('span', { className: s.Z.stateDisabled }),
                                i().createElement('span', { className: s.Z.stateHighlightHover }),
                                i().createElement('span', { className: s.Z.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: s.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { L: () => n, q: () => a }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(n || (n = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(a || (a = {}));
            },
            2686: (e, t, u) => {
                'use strict';
                u.d(t, { At: () => s });
                var n = u(7363),
                    a = u.n(n),
                    r = u(3458);
                u(2902);
                const o = [
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
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            s = e.getImageSource,
                            _ = e.frameCount,
                            m = e.onAnimate,
                            E = e.frameTime,
                            g = void 0 === E ? r.O.FRAME_TIME : E,
                            A = e.initialFrameIndex,
                            p = void 0 === A ? r.O.INITIAL_FRAME_INDEX : A,
                            b = e.lastFrameIndex,
                            C = void 0 === b ? _ - 1 : b,
                            h = e.loop,
                            F = void 0 === h ? r.O.LOOP : h,
                            f = e.state,
                            v = void 0 === f ? r.O.STATE : f,
                            D = e.onAnimationDone,
                            B = e.onAnimationComplete,
                            y = e.poster,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, o);
                        const w = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = w.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (v) {
                                    case 'play':
                                        return (function () {
                                            const e = d(p, C, s),
                                                t = l(p, C),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == m || m(a, r),
                                                          u(r),
                                                          a === C &&
                                                              (null == B || B(),
                                                              F || (null == D || D(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, g);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === p && y ? { path: y, x: 0, y: 0 } : s(p),
                                                t = new Image();
                                            t.src = e.path;
                                            const n = () => u(c(e, t));
                                            return (
                                                t.addEventListener('load', n), () => t.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [g, s, p, C, F, m, B, D, y, v]),
                            a().createElement('canvas', i({}, k, { width: t, height: u, ref: w }))
                        );
                    }),
                    l = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return (u += 1), u > t && (u = e), n;
                        };
                    },
                    c = (e, t) => Object.assign({}, e, { img: t }),
                    d = (e, t, u) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) n.set(r, c(e, t));
                            else {
                                const t = new Image();
                                (a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, c(e, t));
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
                        const a = n % u,
                            r = (a % t.columns) * e.width,
                            o = Math.trunc(a / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: o };
                    };
                }
                function a(e) {
                    return (t) => `${e}${t}`;
                }
                u.d(t, { V: () => a, q: () => n });
            },
            2902: (e, t, u) => {
                'use strict';
                u(7363), u(3458);
            },
            9987: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    o = u.n(r),
                    i = u(8055);
                const s = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
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
                const c = (e) => {
                    let t = e.size,
                        u = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        _ = e.className,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, s);
                    const E = n ? null : u,
                        g = 'string' == typeof E;
                    if ((E && !g && E < 0) || 0 === E) return null;
                    const A = E && !g && E > d,
                        p = a()(
                            i.Z.base,
                            i.Z[`base__${t}`],
                            r && i.Z.base__animated,
                            c && i.Z.base__hidden,
                            !E && i.Z.base__pattern,
                            n && i.Z.base__empty,
                            _,
                        );
                    return o().createElement(
                        'div',
                        l({ className: p }, m),
                        o().createElement('div', { className: i.Z.bg }),
                        o().createElement('div', { className: i.Z.pattern }),
                        o().createElement(
                            'div',
                            { className: a()(i.Z.value, g && i.Z.value__text) },
                            A ? d : E,
                            A && o().createElement('span', { className: i.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => d });
                var n = u(3138),
                    a = u(7363),
                    r = u(1043),
                    o = u(5262);
                const i = n.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    c = Object.assign({ width: s, height: l }, (0, o.T)(s, l, r.j)),
                    d = (0, a.createContext)(c);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => c });
                var n = u(3138),
                    a = u(6536),
                    r = u(7363),
                    o = u.n(r),
                    i = u(3495),
                    s = u(1043),
                    l = u(5262);
                const c = ({ children: e }) => {
                    const t = (0, r.useContext)(i.Y),
                        u = (0, r.useState)(t),
                        c = u[0],
                        d = u[1],
                        _ = (0, r.useCallback)((e, t) => {
                            const u = n.O.view.pxToRem(e),
                                a = n.O.view.pxToRem(t);
                            d(Object.assign({ width: u, height: a }, (0, l.T)(u, a, s.j)));
                        }, []),
                        m = (0, r.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (0, a.Z)(() => {
                        n.O.client.events.on('clientResized', _), n.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', _),
                                    n.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [_, m],
                        );
                    const E = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return o().createElement(i.Y.Provider, { value: E }, e);
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u(7382),
                    r = u(3495);
                const o = ['children'];
                const i = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, o);
                    const i = (0, n.useContext)(r.Y),
                        s = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        d = i.small,
                        _ = i.extraSmall,
                        m = i.extraLargeWidth,
                        E = i.largeWidth,
                        g = i.mediumWidth,
                        A = i.smallWidth,
                        p = i.extraSmallWidth,
                        b = i.extraLargeHeight,
                        C = i.largeHeight,
                        h = i.mediumHeight,
                        F = i.smallHeight,
                        f = i.extraSmallHeight,
                        v = { extraLarge: b, large: C, medium: h, small: F, extraSmall: f };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && s) return t;
                        if (u.large && l) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && _) return t;
                    } else {
                        if (u.extraLargeWidth && m) return (0, a.H)(t, u, v);
                        if (u.largeWidth && E) return (0, a.H)(t, u, v);
                        if (u.mediumWidth && g) return (0, a.H)(t, u, v);
                        if (u.smallWidth && A) return (0, a.H)(t, u, v);
                        if (u.extraSmallWidth && p) return (0, a.H)(t, u, v);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && b) return t;
                            if (u.largeHeight && C) return t;
                            if (u.mediumHeight && h) return t;
                            if (u.smallHeight && F) return t;
                            if (u.extraSmallHeight && f) return t;
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
                (0, n.memo)(i);
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
                u.d(t, { YN: () => a.Y, ZN: () => n.Z });
                u(6010);
                var n = u(1039),
                    a = u(3495);
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
                function a(e, t, u) {
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
                        a = (function (e, t) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: n === u.extraLarge.weight,
                        largeWidth: n === u.large.weight,
                        mediumWidth: n === u.medium.weight,
                        smallWidth: n === u.small.weight,
                        extraSmallWidth: n === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
                    };
                }
                u.d(t, { T: () => a }),
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
            1037: (e, t, u) => {
                'use strict';
                u.d(t, { IC: () => n });
                var n,
                    a = u(6483),
                    r = u.n(a),
                    o = u(6373),
                    i = u(3138),
                    s = u(2039),
                    l = u(5099),
                    c = u(7727),
                    d = u(9916),
                    _ = u(7363),
                    m = u.n(_),
                    E = u(4769),
                    g = u(8475);
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(n || (n = {}));
                const A = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: u, customStyles: n = {} }, a) => {
                        const p = (0, _.useRef)(null),
                            b = (0, _.useRef)(null),
                            C = (0, _.useRef)(null),
                            h = (0, _.useState)(window.decorator && window.decorator.directionType),
                            F = h[0],
                            f = h[1],
                            v = (0, _.useCallback)(() => {
                                c.$.playClick(), i.O.view.sendEvent.close();
                            }, []),
                            D = (0, _.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            B = r()(E.Z.arrow, E.Z[`arrow${A[F]}`]);
                        (0, s.b)(
                            () => (
                                i.O.client.events.mouse.enableOutside(),
                                i.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (u ? u() : i.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const y = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === p.current || t === C.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = i.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            u =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !u) return;
                                    }
                                    u ? u() : i.O.view.sendEvent.close('popover');
                                },
                                [p, C, u],
                            ),
                            k = (0, g.w)(),
                            w = (0, _.useCallback)(() => {
                                const e = b.current;
                                if (e)
                                    return (
                                        i.O.view.freezeTextureBeforeResize(),
                                        k.run(() => {
                                            const t = e.scrollWidth,
                                                u = e.scrollHeight;
                                            i.O.view.resize(t, u), f(window.decorator.directionType);
                                        })
                                    );
                            }, [k]);
                        return (
                            (0, _.useImperativeHandle)(a, () => ({ updateSize: w })),
                            (0, s.b)(() => {
                                i.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', y, { capture: !0 });
                                const e = (0, l.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => w()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', y);
                                    }
                                );
                            }, [w, y, t]),
                            m().createElement(
                                'div',
                                { className: E.Z.base, ref: b },
                                m().createElement(
                                    'div',
                                    { className: E.Z.decorator },
                                    m().createElement(
                                        'div',
                                        { className: E.Z.content, ref: p },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            m().createElement(
                                                o.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                m().createElement('div', {
                                                    className: E.Z.closeBtn,
                                                    onClick: v,
                                                    onMouseEnter: D,
                                                    ref: C,
                                                }),
                                            ),
                                    ),
                                    m().createElement('div', { className: B, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => l });
                var n = u(1037),
                    a = u(9916),
                    r = u(7363),
                    o = u.n(r);
                const i = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
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
                const l = (e) => {
                    let t = e.contentId,
                        u = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        d = e.targetId,
                        _ = e.args,
                        m = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        A = void 0 === g || g,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, i);
                    const b = (0, r.useRef)(null),
                        C = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            b.current && (0, a.P3)(t, c, b.current, u, d, _);
                        }, [t, c, _, u, d]);
                    return o().createElement(
                        'div',
                        s(
                            {
                                ref: b,
                                onMouseDown:
                                    ((h = E.props.onClick),
                                    (e) => {
                                        A && (C(), m && m(e), h && h(e));
                                    }),
                            },
                            p,
                        ),
                        E,
                    );
                    var h;
                };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => s });
                var n = u(7363),
                    a = u.n(n),
                    r = u(2056);
                const o = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, o);
                    return a().createElement(
                        r.u,
                        i(
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
                    a = u.n(n),
                    r = u(7078),
                    o = u(6373),
                    i = u(2056);
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
                const l = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(o.i, t, n);
                    const l = t.contentId;
                    return l ? a().createElement(i.u, s({}, t, { contentId: l }), n) : a().createElement(r.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => l });
                var n = u(2056),
                    a = u(7363),
                    r = u.n(a);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let t = e.children,
                            u = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, o);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, _, { body: u, header: l, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, l, c, _]);
                        return r().createElement(
                            n.u,
                            i(
                                {
                                    contentId:
                                        ((g = null == _ ? void 0 : _.hasHtmlContent),
                                        g ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                m,
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
                    a = u(9916),
                    r = u(7363);
                const o = [
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
                                    type: a.B0.TOOLTIP,
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
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            E = void 0 !== m && m,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            p = e.decoratorId,
                            b = void 0 === p ? 0 : p,
                            C = e.isEnabled,
                            h = void 0 === C || C,
                            F = e.targetId,
                            f = void 0 === F ? 0 : F,
                            v = e.onShow,
                            D = e.onHide,
                            B = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, o);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, r.useMemo)(() => f || (0, n.F)().resId, [f]),
                            w = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (s(u, b, { isMouseEvent: !0, on: !0, arguments: i(a) }, k),
                                    v && v(),
                                    (y.current.isVisible = !0));
                            }, [u, b, a, k, v]),
                            S = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        s(u, b, { on: !1 }, k),
                                        y.current.isVisible && D && D(),
                                        (y.current.isVisible = !1);
                                }
                            }, [u, b, k, D]),
                            L = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && S();
                            }, [h, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return h
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                      l && l(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === A && S(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === A && S(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      B,
                                  ),
                              )
                            : t;
                        var x;
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
            8246: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => i });
                var n = u(3138);
                function a(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return r(e, t);
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: t = 0, getRoot: u = o, context: r = 'model' } = {}) {
                    const i = new Map();
                    function s(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, u) => {
                            u.forEach((t) => {
                                const u = i.get(t);
                                void 0 !== u && u(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = u(t),
                            a = r.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const u = e[t];
                                  return 'function' == typeof u ? u.bind(e) : u;
                              }, a);
                    };
                    return {
                        subscribe: (u, a) => {
                            const o = 'string' == typeof a ? `${r}.${a}` : r,
                                s = n.O.view.addModelObserver(o, t, !0);
                            return i.set(s, u), e && u(l(a)), s;
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
                            for (var e, u = a(i.keys()); !(e = u()).done; ) {
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
                    a = u(9174),
                    r = u(7363),
                    o = u.n(r),
                    i = u(8246);
                const s = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: d }) {
                            const _ = (0, r.useRef)([]),
                                m = (u, r, o) => {
                                    var s;
                                    const l = i.U(r),
                                        c =
                                            'real' === u
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == o ? void 0 : o.getter) ? s : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        o = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        o = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = d(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            o = Object.entries(r),
                                                            i = o.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        o.forEach(([t, u]) => {
                                                                            i[u].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: m };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && o ? o.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(s),
                                A = g[0],
                                p = g[1],
                                b = (0, r.useState)(() => m(s, l, d)),
                                C = b[0],
                                h = b[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? h(m(A, l, d)) : (E.current = !0);
                                }, [d, A, l]),
                                (0, r.useEffect)(() => {
                                    p(s);
                                }, [s]),
                                (0, r.useEffect)(
                                    () => () => {
                                        C.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [C],
                                ),
                                o().createElement(u.Provider, { value: C }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
                    ];
                };
            },
            7044: (e, t, u) => {
                'use strict';
                u(3649), u(9916);
                var n = u(8613);
                Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime;
            },
            527: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, { mouse: () => c, off: () => s, on: () => i, onResize: () => r, onScaleUpdated: () => o });
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (e, t) => engine.on(e, t),
                    s = (e, t) => engine.off(e, t),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        o = l[t]((e) => u([e, 'outside']));
                                    function i(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
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
            5959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = u(527),
                    a = u(2493);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((u) => {
                        console.error(`setRTPC('${e}', '${t}'): `, u);
                    });
                }
                u.d(t, { E: () => a, G: () => n });
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
                u.d(t, { O: () => r });
                var n = u(5959),
                    a = u(514);
                const r = { view: u(7641), client: n, sound: a.ZP };
            },
            514: (e, t, u) => {
                'use strict';
                u.d(t, { ZP: () => i, hY: () => o });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    o = Object.assign({}, r, { sound: n.playSound }),
                    i = { play: o, setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var n = u(2472);
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
            7641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        arabic2roman: () => k,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => o.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => B,
                        getFontNames: () => y,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => v,
                        isFocused: () => F,
                        pxToRem: () => b,
                        remToPx: () => C,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => L,
                    });
                var n = u(9690),
                    a = u(3722),
                    r = u(6112),
                    o = u(6538),
                    i = u(8566);
                function s(e) {
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
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: C(t.x), y: C(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function b(e) {
                    return viewEnv.pxToRem(e);
                }
                function C(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    k = n.cg,
                    w = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    S = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    i = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, u) => {
                'use strict';
                u.d(t, { jv: () => a, yR: () => n });
                function n(e) {
                    return e;
                }
                function a() {
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
                        a = '';
                    var r;
                    t &&
                        ((a = (null == (r = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== u &&
                            window.subViews[u] &&
                            (n = window.subViews[u].id));
                    return { callerUrl: a, caller: u, stack: t, resId: n };
                };
            },
            2344: (e, t, u) => {
                'use strict';
                u.d(t, { D9: () => a });
                u(3469), u(2133);
                var n = u(2790);
                u(579), u(5360), u(9056);
                const a = n.Z;
            },
            6536: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(7363);
                const a = (e) => {
                    const t = (0, n.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, u) => {
                'use strict';
                u(7044), u(7363);
            },
            2133: (e, t, u) => {
                'use strict';
                u(7363);
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => s, GS: () => l, cJ: () => o, fd: () => i });
                var n = u(7363),
                    a = u(7739),
                    r = u(1043);
                let o, i, s;
                !(function (e) {
                    (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                })(o || (o = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge');
                    })(s || (s = {}));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        u = e.height,
                        r = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return o.ExtraLarge;
                                case e.large:
                                    return o.Large;
                                case e.medium:
                                    return o.Medium;
                                case e.small:
                                    return o.Small;
                                case e.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
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
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
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
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
                };
            },
            5360: (e, t, u) => {
                'use strict';
                u(6536);
                var n = u(9916);
                u(7363);
                n.Sw.instance;
                let a;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(a || (a = {}));
            },
            9056: (e, t, u) => {
                'use strict';
                var n = u(9916);
                u(7363);
                n.Sw.instance;
            },
            2039: (e, t, u) => {
                'use strict';
                u.d(t, { b: () => a, k: () => r });
                var n = u(7363);
                const a = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    r = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
            },
            2790: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => a });
                var n = u(7363);
                const a = (e, t) => {
                    const u = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (t && !t(e)) || (u.current = e);
                        }, [t, e]),
                        u.current
                    );
                };
            },
            3112: (e, t, u) => {
                'use strict';
                u.d(t, { V: () => r });
                var n = u(7363),
                    a = u(3138);
                const r = () => {
                    const e = (0, n.useState)(a.O.view.getScale()),
                        t = e[0],
                        u = e[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = () => {
                                u(a.O.view.getScale());
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
                u(3138), u(7363);
            },
            8475: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => r });
                var n = u(7363),
                    a = u(2039);
                function r() {
                    const e = (0, n.useRef)(0);
                    return (
                        (0, a.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
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
            5521: (e, t, u) => {
                'use strict';
                let n, a;
                u.d(t, { n: () => n }),
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
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { U2: () => n, UI: () => r, dF: () => i, lN: () => o, sE: () => s });
                function a(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, n) => t(null == e ? void 0 : e.value, u, n));
                }
                function o(e) {
                    if (0 !== e.length) return n(e, e.length - 1);
                }
                function i(e, t) {
                    for (let u = e.length - 1; u >= 0; u--) {
                        const n = a(e[u]);
                        if (t(n, u, e)) return n;
                    }
                }
                function s(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const n = a(e[u]);
                        if (t(n, u, e)) return n;
                    }
                }
            },
            5099: (e, t, u) => {
                'use strict';
                u.d(t, { B: () => n });
                const n = (e) => {
                    let t = !1;
                    return {
                        promise: new Promise((u, n) => {
                            e.then((e) => !t && u(e)).catch((e) => !t && n(e));
                        }),
                        cancel() {
                            t = !0;
                        },
                    };
                };
            },
            4385: (e, t, u) => {
                'use strict';
                u.d(t, { K: () => n });
                const n = (e, t) => {
                    const u = [];
                    for (let n = 0; n < e; n++) u.push(t(n));
                    return u;
                };
            },
            3368: () => {
                !(function () {
                    let e,
                        t,
                        u,
                        n,
                        a,
                        r,
                        o,
                        i = -1;
                    document.addEventListener('mousedown', (u) => {
                        document.getSelection().empty(),
                            u.target.select &&
                                -1 === i &&
                                ((e = u.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (u) => {
                            if ((-1 === i && u.target.select && u.target === e && (i = e.selectionStart), i > -1)) {
                                const n = Math.min(Math.max(u.x, t.left), t.right),
                                    a = Math.min(Math.max(u.y, t.top), t.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, n, a, n, a, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r);
                                const o = e.selectionEnd;
                                o > i ? e.setSelectionRange(i, o, 'forward') : e.setSelectionRange(o, i, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (i = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (u = e.target),
                                (n = e.target.value),
                                (a = u.selectionStart),
                                (r = -1 !== n.lastIndexOf(' ', a) ? n.lastIndexOf(' ', a) + 1 : 0),
                                (o = -1 !== n.indexOf(' ', a) ? n.indexOf(' ', a) : n.length),
                                u.setSelectionRange(r, o, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (t) => {
                            document.getSelection().empty(),
                                0 !== t.button ||
                                    t.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(t.x, t.y));
                        }),
                            document.addEventListener('mousemove', (t) => {
                                if (0 === t.button && !t.target.select && e) {
                                    const u = document.caretPositionFromPoint(t.x, t.y);
                                    if (!u.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, u.offsetNode, u.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) (t += n[u]), (e -= a[u]);
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, t, u) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                u.d(t, { $: () => a, G: () => n });
                const a = {
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
                    BN: () => i,
                    Eg: () => c,
                    Uw: () => p,
                    WU: () => r,
                    dL: () => b,
                    e: () => s,
                    uF: () => o,
                    v2: () => a,
                    z4: () => l,
                });
                var n = u(1281);
                let a;
                function r(e, t) {
                    return e.replace(/\{\w+\}/g, (e) => String(t[e.slice(1, -1)]));
                }
                function o(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    c = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    d = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    _ = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    m = (e, t, u = a.left) => e.split(t).reduce(u === a.left ? d : _, []),
                    E = (() => {
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
                        return (t) =>
                            t
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    g = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (e, t = a.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (g.includes(u)) return E(e);
                        if ('ja' === u) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => l(e));
                        }
                        return ((e, t = a.left) => {
                            let u = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = l(e);
                            return m(r, /( )/, t).forEach((e) => (u = u.concat(m(e, n, a.left)))), u;
                        })(e, t);
                    },
                    p = (e, t, u) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (u && e in u ? u[e] : A(e, t))),
                    b = (e) => r(R.strings.common.percentValue(), { value: e });
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
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
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
            9916: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Sw: () => r.Z,
                    B3: () => s,
                    Z5: () => o.Z5,
                    B0: () => i,
                    c9: () => C,
                    wU: () => v,
                    ry: () => p,
                    Eu: () => b,
                    SW: () => F,
                    P3: () => f,
                });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                var r = u(1358);
                var o = u(8613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = u(5521),
                    m = u(3138);
                const E = ['args'];
                function g(e, t, u, n, a, r, o) {
                    try {
                        var i = e[r](o),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(t, u);
                                        function o(e) {
                                            g(r, n, a, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            g(r, n, a, o, i, 'throw', e);
                                        }
                                        o(void 0);
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
                    C = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    h = () => C(i.CLOSE),
                    F = () => C(i.POP_OVER, { on: !1 }),
                    f = (e, t, u, n, a = R.invalid('resId'), r) => {
                        const o = m.O.view.getViewGlobalPosition(),
                            s = u.getBoundingClientRect(),
                            l = s.x,
                            c = s.y,
                            d = s.width,
                            _ = s.height,
                            E = {
                                x: m.O.view.pxToRem(l) + o.x,
                                y: m.O.view.pxToRem(c) + o.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(_),
                            };
                        C(i.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: A(E),
                            on: !0,
                            args: r,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                    D = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var B = u(7572);
                const y = a.instance,
                    k = {
                        DataTracker: r.Z,
                        ViewModel: B.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => C(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: F,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            C(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: f,
                        addEscapeListener: (e) => {
                            const t = (t) => D(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            D(e, h);
                        },
                        handleViewEvent: C,
                        onBindingsReady: p,
                        onLayoutReady: b,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: v,
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < a.length; t++) u[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = k;
            },
            8613: (e, t, u) => {
                'use strict';
                u.d(t, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    },
                    r = {
                        getRegionalDateTime: (e, t, u = !0) => regionalDateTime.getRegionalDateTime(e, t, u),
                        getFormattedDateTime: (e, t, u = !0) => regionalDateTime.getFormattedDateTime(e, t, u),
                    };
            },
            1504: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => s });
                var n = u(7739),
                    a = u(7363),
                    r = u.n(a),
                    o = u(2849);
                const i = ['children'];
                const s = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, i);
                    return r().createElement(n.ZN, null, r().createElement(o.l, u, t));
                };
            },
            2849: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => g });
                var n = u(6483),
                    a = u.n(n),
                    r = u(926),
                    o = u.n(r),
                    i = u(7363),
                    s = u.n(i),
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
                const _ = {
                        [l.fd.ExtraSmall]: '',
                        [l.fd.Small]: o().SMALL_WIDTH,
                        [l.fd.Medium]: `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH}`,
                        [l.fd.Large]: `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH} ${o().LARGE_WIDTH}`,
                        [l.fd.ExtraLarge]:
                            `${o().SMALL_WIDTH} ${o().MEDIUM_WIDTH} ${o().LARGE_WIDTH} ${o().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
                        [l.Aq.ExtraSmall]: '',
                        [l.Aq.Small]: o().SMALL_HEIGHT,
                        [l.Aq.Medium]: `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT}`,
                        [l.Aq.Large]: `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT} ${o().LARGE_HEIGHT}`,
                        [l.Aq.ExtraLarge]:
                            `${o().SMALL_HEIGHT} ${o().MEDIUM_HEIGHT} ${o().LARGE_HEIGHT} ${o().EXTRA_LARGE_HEIGHT}`,
                    },
                    E = {
                        [l.cJ.ExtraSmall]: '',
                        [l.cJ.Small]: o().SMALL,
                        [l.cJ.Medium]: `${o().SMALL} ${o().MEDIUM}`,
                        [l.cJ.Large]: `${o().SMALL} ${o().MEDIUM} ${o().LARGE}`,
                        [l.cJ.ExtraLarge]: `${o().SMALL} ${o().MEDIUM} ${o().LARGE} ${o().EXTRA_LARGE}`,
                    },
                    g = (e) => {
                        let t = e.children,
                            u = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, c);
                        const r = (0, l.GS)(),
                            o = r.mediaWidth,
                            i = r.mediaHeight,
                            g = r.mediaSize;
                        return s().createElement('div', d({ className: a()(u, _[o], m[i], E[g]) }, n), t);
                    };
            },
            4029: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => n.z });
                var n = u(1504);
            },
            2582: (e, t, u) => {
                'use strict';
                u.d(t, { yZ: () => i });
                var n = u(7363),
                    a = u.n(n);
                const r = [
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
                let i;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(i || (i = {}));
                const s = (e, t, u) => {
                    const n = new Image();
                    (n.src = u(t)), e.push(n);
                };
                (0, n.memo)((e) => {
                    let t = e.width,
                        u = e.height,
                        l = e.getSrcByFrame,
                        c = e.frameCount,
                        d = e.onAnimate,
                        _ = void 0 === d ? () => {} : d,
                        m = e.frameTime,
                        E = void 0 === m ? 33 : m,
                        g = e.initialFrameIndex,
                        A = void 0 === g ? 0 : g,
                        p = e.loop,
                        b = void 0 === p || p,
                        C = e.state,
                        h = void 0 === C ? i.Play : C,
                        F = e.onAnimationComplete,
                        f = void 0 === F ? () => {} : F,
                        v = e.revers,
                        D = void 0 !== v && v,
                        B = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, r);
                    const y = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            const e = y.current;
                            if (!e) return;
                            const n = c - 1,
                                a = e.getContext('2d'),
                                r = (n) => {
                                    a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, u);
                                };
                            if ('stop' === h) {
                                const e = l(0),
                                    t = new Image();
                                t.src = e;
                                const u = () => r(t);
                                return t.addEventListener('load', u), () => t.removeEventListener('load', u);
                            }
                            const o = ((e, t, u) => {
                                    const n = [];
                                    if (u) for (let u = e; u >= 0; u--) s(n, u, t);
                                    else for (let u = 0; u < e; u++) s(n, u, t);
                                    return n;
                                })(c, l, D),
                                i = ((e, t = 0) => {
                                    let u = t;
                                    return () => {
                                        const t = u;
                                        return (u += 1), u > e && (u = 0), t;
                                    };
                                })(n, A),
                                d = setInterval(() => {
                                    const e = i(),
                                        t = o[e];
                                    r(o[e]), _(e, t), e === n && (f(), b || clearInterval(d));
                                }, E);
                            return () => clearInterval(d);
                        }, [c, E, l, u, A, b, _, f, h, t, D]),
                        a().createElement('canvas', o({}, B, { width: t, height: u, ref: y }))
                    );
                });
            },
            7213: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => ze,
                        Bar: () => He,
                        DefaultScroll: () => je,
                        Direction: () => ve,
                        defaultSettings: () => De,
                        useHorizontalScrollApi: () => ye,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => ot, Bar: () => nt, Default: () => rt, useVerticalScrollApi: () => $e });
                var r = u(4029),
                    o = u(7363),
                    i = u.n(o),
                    s = u(1533),
                    l = u.n(s),
                    c = u(3403),
                    d = u(6483),
                    _ = u.n(d);
                const m = (e) => {
                    let t,
                        u = null;
                    return (
                        (u = requestAnimationFrame(() => {
                            u = requestAnimationFrame(() => {
                                (u = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                        }
                    );
                };
                var E = u(7030),
                    g = u(7160);
                let A;
                !(function (e) {
                    (e.Info = 'info'), (e.Error = 'error');
                })(A || (A = {}));
                var p = u(3415),
                    b = u(8045);
                const C = {
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
                var h = u(3649);
                let F, f, v;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(F || (F = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(f || (f = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(v || (v = {}));
                const D = { [v.NBSP]: F.NoBreakSymbol, [v.ZWNBSP]: F.NoBreakSymbol, [v.NEW_LINE]: F.LineBreak },
                    B = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    y = {
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
                    k = 'renderers_noBreakWrapper_10',
                    w = 'renderers_lineBreak_b5',
                    S = 'renderers_newLine_bd',
                    L = 'renderers_word_f3',
                    x = (e) => ({ color: `#${e}` }),
                    T = ({ elementList: e, textBlock: t, key: u }) => {
                        const n = t.colorTag;
                        return n
                            ? y[n]
                                ? i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: _()(L, y[n]) },
                                      e,
                                  )
                                : i().createElement(
                                      'span',
                                      { key: u, 'data-block-type': t.blockType, className: L, style: x(n) },
                                      e,
                                  )
                            : i().createElement('span', { key: u, 'data-block-type': t.blockType, className: L }, e);
                    },
                    N = {
                        [F.Word]: T,
                        [F.NoBreakSymbol]: T,
                        [F.Binding]: ({ elementList: e, textBlock: t, key: u }) =>
                            i().createElement(
                                'span',
                                { key: u, 'data-block-type': t.blockType },
                                e.map((e) => i().createElement(i().Fragment, { key: u }, e)),
                            ),
                        [F.LineBreak]: ({ key: e }) =>
                            i().createElement('span', { key: e, 'data-block-type': F.LineBreak, className: w }),
                        [F.NewLine]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': F.NewLine, className: S }, e),
                        [F.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            i().createElement('span', { key: t, 'data-block-type': F.NoBreakWrapper, className: k }, e),
                    },
                    I = (e, t, u) => {
                        const n = [];
                        return (
                            e.childList.forEach((a, r) => {
                                const o = `${u}_${r}`;
                                if (((e) => void 0 !== e.childList)(a)) {
                                    const e = a,
                                        t = e.blockType,
                                        u = I(e, N[t], o);
                                    n.push(...u);
                                } else n.push(t({ elementList: [a], textBlock: e, key: o }));
                            }),
                            n
                        );
                    },
                    O = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, u) => {
                                t.push(
                                    ...((e, t) => {
                                        const u = [],
                                            n = e.blockType,
                                            a = N[n],
                                            r = I(e, a, t);
                                        return (
                                            n === F.NoBreakWrapper
                                                ? u.push(a({ elementList: r, textBlock: e, key: `${t}` }))
                                                : u.push(...r),
                                            u
                                        );
                                    })(e, u),
                                );
                            }),
                            t
                        );
                    },
                    M = (e, t, u, n) => {
                        let a = t.exec(e),
                            r = 0;
                        for (; a; ) r !== a.index && u(e.slice(r, a.index)), n(a), (r = t.lastIndex), (a = t.exec(e));
                        r !== e.length && u(e.slice(r));
                    },
                    P = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    H = (e) => {
                        const t = [];
                        return (
                            M(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var u;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((u = e), u.match(P) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    W = B
                        ? (e) => {
                              const t = [];
                              return (
                                  M(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...H(e[0]));
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const u = /[\s\u002d]/g;
                              let n = u.exec(e);
                              if (!n) return [e];
                              const a = [];
                              let r = 0;
                              for (; n; ) {
                                  const o = t.justifyContent === f.FlexEnd ? n.index : u.lastIndex;
                                  a.push(e.slice(r, o)), (r = o), (n = u.exec(e));
                              }
                              return r !== e.length && a.push(e.slice(r)), a;
                          },
                    j = (e, t = '', u) => {
                        const n = [];
                        return (
                            M(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    n.push({ blockType: F.Word, colorTag: t, childList: W(e, u) });
                                },
                                (e) => {
                                    const u = e[0],
                                        a = D[u.charAt(0)];
                                    a === F.LineBreak
                                        ? n.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: F.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let u = 0; u < e.length - 1; u++)
                                                      t.push({
                                                          blockType: F.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(u),
                                          )
                                        : n.push({ blockType: a, colorTag: t, childList: [u] });
                                },
                            ),
                            n
                        );
                    },
                    z = (e, t, u = '', n) => {
                        const a = [];
                        return (
                            M(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    a.push(...j(e, u, n));
                                },
                                (e) => {
                                    const r = e[1],
                                        o = void 0 === t[r] ? e[0] : t[r];
                                    'string' == typeof o || 'number' == typeof o
                                        ? a.push(...j(String(o), u, n))
                                        : a.push({ blockType: F.Binding, colorTag: u, childList: [o] });
                                },
                            ),
                            a
                        );
                    },
                    $ = (e, t) => {
                        if (!e) return [t];
                        const u = [],
                            n = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === F.NoBreakWrapper) e.childList.push(n), u.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && u.push(e),
                                u.push({ blockType: F.NoBreakWrapper, colorTag: '', childList: [t, n] });
                        }
                        return t.childList.length > 0 && u.push(t), u;
                    },
                    G = (e, t = {}, u) => {
                        if (!e) return [];
                        const n = ((e) => {
                            const t = [];
                            let u = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === F.NoBreakSymbol
                                        ? ((u = !0), t.push(...$(t.pop(), e)))
                                        : (u ? t.push(...$(t.pop(), e)) : t.push(e), (u = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, u) => {
                                const n = [];
                                return (
                                    M(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            n.push(...z(e, t, '', u));
                                        },
                                        (e) => {
                                            n.push(...z(e[2] + e[3], t, e[1], u));
                                        },
                                    ),
                                    n
                                );
                            })((0, h.Eg)((0, h.z4)(e)), t, u),
                        );
                        return O(n);
                    },
                    U = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    Z = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    V = (e, t, u) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const n = Z(e, t),
                            a = e.textContent.length,
                            r = e.offsetWidth / a,
                            o = Math.ceil(n / r);
                        if (n > 0) {
                            const n = Math.floor((t - e.offsetLeft) / r);
                            return n >= u ? [!0, u + o] : [!1, n];
                        }
                        const i = Math.max(u + o, 0);
                        return a < i ? [!1, 0] : [!0, i];
                    },
                    X = (e, t, u, n, a, r) => {
                        let o = -1,
                            s = null;
                        for (let l = u; l >= 0; l--) {
                            const u = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === F.LineBreak || c === F.NewLine || c === F.Binding) continue;
                            const d = u.textContent || '';
                            if (!(u.childElementCount > 1)) {
                                const e = V(u, n, a),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (a -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + r,
                                    E = t[l];
                                (s = i().cloneElement(E, E.props, m)), (o = l);
                                break;
                            }
                            {
                                const e = u.children,
                                    c = t[l],
                                    _ = c.props.children,
                                    m = X(e, _, e.length - 1, n, a, r),
                                    E = m[0],
                                    g = m[1];
                                if (!(E < 0)) {
                                    const e = _.slice(0, E);
                                    (s = i().cloneElement(c, c.props, e, g)), (o = l);
                                    break;
                                }
                                a -= d.length;
                            }
                        }
                        return [o, s];
                    },
                    q = (e, t, u, n = '...') => {
                        const a = [...t],
                            r = e.current;
                        if (!r) return [a, !1];
                        const o = u.height,
                            i = u.width,
                            s = r.lastElementChild;
                        if (!U(s, o) && Z(s, i) <= 0) return [a, !1];
                        const l = r.children,
                            c = ((e, t) => {
                                let u = 0,
                                    n = e.length - 1;
                                for (; n - u >= 0; ) {
                                    const a = u + Math.ceil(0.5 * (n - u));
                                    U(e[a], t) ? (n = a - 1) : (u = a + 1);
                                }
                                return u - 1;
                            })(l, o);
                        if (c < 0) return [a, !1];
                        const d = X(l, a, c, i, n.length, n),
                            _ = d[0],
                            m = d[1];
                        return m && (a.splice(_, 1, m), a.splice(_ + 1)), [a, !0];
                    },
                    Y = i().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: u,
                            binding: n,
                            isTooltipEnable: a = !1,
                            isTruncationAvailable: r = !1,
                            customTooltipArgs: s,
                            targetId: l,
                            justifyContent: c = f.FlexStart,
                            alignContent: d = f.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const E = (0, o.useRef)(null),
                                g = (0, o.useRef)({ height: 0, width: 0 }),
                                A = (0, o.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                h = A[0],
                                F = A[1],
                                v = (0, o.useMemo)(() => G(e, n, { justifyContent: c }), [n, c, e]),
                                D = (0, o.useMemo)(() => {
                                    if (
                                        a &&
                                        h.isTruncated &&
                                        (!n || !Object.values(n).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, s, {
                                                stringifyKwargs: n ? JSON.stringify(n) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [n, a, l, e, s, h.isTruncated]),
                                B = (0, o.useCallback)(
                                    (e) => {
                                        (g.current.width = e.contentRect.width),
                                            (g.current.height = e.contentRect.height);
                                        const t = q(E, v, g.current, m),
                                            n = t[0],
                                            a = t[1];
                                        F({ elementList: n, isTruncated: a, isTruncateFinished: !0 }), u && u(a);
                                    },
                                    [u, m, v],
                                ),
                                y = (0, o.useMemo)(() => ({ justifyContent: c, alignContent: d }), [d, c]);
                            return (
                                ((e, t, u = !0) => {
                                    const n = (0, o.useCallback)(
                                        (e) => {
                                            const u = e[0];
                                            t && t(u);
                                        },
                                        [t],
                                    );
                                    (0, o.useEffect)(() => {
                                        if (!e.current || !u) return;
                                        const t = new b.Z((e) => n(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [n, u, e]);
                                })(E, B, r),
                                i().createElement(
                                    'div',
                                    {
                                        className: _()(
                                            C.base,
                                            t,
                                            C.base__zeroPadding,
                                            r && C.base__isTruncationAvailable,
                                        ),
                                        style: y,
                                    },
                                    i().createElement('div', { className: C.unTruncated, ref: E }, v),
                                    i().createElement(
                                        p.l,
                                        {
                                            tooltipArgs: D,
                                            className: _()(
                                                C.tooltip,
                                                C[`tooltip__justify-${c}`],
                                                C[`tooltip__align-${d}`],
                                            ),
                                        },
                                        i().createElement(
                                            'div',
                                            {
                                                className: _()(
                                                    C.truncated,
                                                    !h.isTruncateFinished && r && C.truncated__hide,
                                                ),
                                                style: y,
                                            },
                                            h.isTruncateFinished && r ? h.elementList : v,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    K = {
                        base: 'Tip_base_be',
                        base__info: 'Tip_base__info_8e',
                        base__error: 'Tip_base__error_6a',
                        closeBtn: 'Tip_closeBtn_1a',
                    },
                    Q = (0, o.forwardRef)(({ id: e, text: t, onClose: u, className: n, type: a = A.Info }, r) =>
                        i().createElement(
                            'div',
                            { ref: r },
                            i().createElement(
                                'div',
                                { className: _()(K.base, K[`base__${a}`], n) },
                                i().createElement(Y, { text: t }),
                                a === A.Info &&
                                    i().createElement('div', { className: K.closeBtn, onClick: () => u && u(e) }),
                            ),
                        ),
                    ),
                    J = (0, o.memo)(Q),
                    ee = 'TipList_base_4a',
                    te = 'TipList_base__smallerSpace_ee',
                    ue = 'TipList_tip_f5';
                function ne() {
                    return (
                        (ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        ne.apply(this, arguments)
                    );
                }
                function ae(e, t, u, n, a, r, o) {
                    try {
                        var i = e[r](o),
                            s = i.value;
                    } catch (e) {
                        return void u(e);
                    }
                    i.done ? t(s) : Promise.resolve(s).then(n, a);
                }
                const re = ({ tips: e, onTipClose: t }) => {
                    const u = e.length >= 3,
                        n = new WeakMap(),
                        a = (0, E.useSpringRef)(),
                        r = (0, E.useTransition)(e, {
                            ref: a,
                            from: { opacity: 0, height: 0, marginBottom: 8 },
                            keys: (e) => e.id,
                            enter: (e) =>
                                (function () {
                                    var t,
                                        u =
                                            ((t = function* (t) {
                                                return yield t([
                                                    { opacity: 1, height: n.get(e).scrollHeight, marginBottom: 8 },
                                                ]);
                                            }),
                                            function () {
                                                var e = this,
                                                    u = arguments;
                                                return new Promise(function (n, a) {
                                                    var r = t.apply(e, u);
                                                    function o(e) {
                                                        ae(r, n, a, o, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        ae(r, n, a, o, i, 'throw', e);
                                                    }
                                                    o(void 0);
                                                });
                                            });
                                    return function (e) {
                                        return u.apply(this, arguments);
                                    };
                                })(),
                            onRest: (e, t) => t.set({ height: 'auto', marginBottom: 0 }),
                            leave: { opacity: 0, height: 0, marginBottom: 0 },
                            config: { duration: 150, easing: g.to },
                        });
                    return (
                        (0, o.useEffect)(() => {
                            const e = () => {
                                a.update((e, t) => {
                                    t.set({ height: 'auto', marginBottom: 0 });
                                });
                            };
                            return (
                                m(() => {
                                    a.start();
                                }),
                                window.addEventListener('resize', e),
                                () => window.removeEventListener('resize', e)
                            );
                        }),
                        i().createElement(
                            'div',
                            { className: _()(ee, u && te) },
                            r((e, a) =>
                                i().createElement(
                                    E.animated.div,
                                    { style: e },
                                    i().createElement(
                                        J,
                                        ne({ ref: (e) => e && n.set(a, e) }, a, {
                                            className: _()(u && ue),
                                            onClose: t,
                                        }),
                                    ),
                                ),
                            ),
                        )
                    );
                };
                var oe = u(8706),
                    ie = u(3215),
                    se = u(4598),
                    le = u(9480),
                    ce = u(3946);
                const de = (0, ie.q3)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'nationName',
                                        'vehicleName',
                                        'tankmanName',
                                        'backButtonLabel',
                                        'isWholeCrewHasPerkLimit',
                                        'isAnyTankmanHasPerkLimit',
                                        'isCurrentTankmanHasPerkLimit',
                                        'isCurrentTankmanHasLowEfficiency',
                                    ]),
                                    {
                                        tips: e.array('tips.items'),
                                        books: e.array('books.items'),
                                        freeXp: e.object('freeXp'),
                                        booksComponent: e.object('books'),
                                        learningResults: e.object('learningResults'),
                                        mentoringLicense: e.object('mentoringLicense'),
                                    },
                                ),
                                u = (0, ce.Om)(() => le.UI(t.tips.get(), (e) => Object.assign({}, e)), {
                                    equals: se.jv,
                                }),
                                n = (0, ce.Om)(() => le.UI(t.books.get(), (e) => Object.assign({}, e)), {
                                    equals: se.jv,
                                }),
                                a = (0, ce.Om)(() => t.learningResults.get().personalXpAmount > 0),
                                r = (0, ce.Om)(() => t.learningResults.get().crewXpAmount > 0);
                            return Object.assign({}, t, {
                                computes: { getTips: u, getBooks: n, hasFreeXpSelected: a, hasSelectedBooks: r },
                            });
                        },
                        ({ externalModel: e }) => ({
                            back: e.createCallbackNoArgs('onBack'),
                            onAbout: e.createCallbackNoArgs('onAbout'),
                            onClose: e.createCallbackNoArgs('onClose'),
                            onCardMouseLeave: e.createCallbackNoArgs('mouseLeave'),
                            onFreeXpMouseEnter: e.createCallbackNoArgs('freeXp.mouseEnter'),
                            onFreeXpManualInput: e.createCallback((e) => ({ value: e }), 'freeXp.manualInput'),
                            onFreeXpSelected: e.createCallback((e) => ({ isSelected: e }), 'freeXp.select'),
                            onFreeXpUpdated: e.createCallback(
                                (e, t) => ({ actionType: e, action: t }),
                                'freeXp.update',
                            ),
                            onBookMouseEnter: e.createCallback((e) => ({ intCD: e }), 'books.mouseEnter'),
                            onBookSelected: e.createCallback((e, t) => ({ intCD: e, count: t }), 'books.select'),
                            onBuyBook: e.createCallback((e) => ({ bookId: e }), 'books.buy'),
                            onPostProgressionClick: e.createCallbackNoArgs('books.openPostProgression'),
                            onLearn: e.createCallbackNoArgs('learningResults.learn'),
                            onCancel: e.createCallbackNoArgs('learningResults.cancel'),
                            onMentoringEntryClick: e.createCallbackNoArgs('mentoringLicense.openMentoring'),
                        }),
                    ),
                    _e = de[0],
                    me = de[1],
                    Ee = (e, t, u) => (u < e ? e : u > t ? t : u);
                var ge = u(3138);
                const Ae = [];
                function pe(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, t.current)(...e), Ae)
                    );
                }
                function be(e, t, u = []) {
                    const n = (0, o.useRef)(0),
                        a = (0, o.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, o.useEffect)(() => a, [a]);
                    const r = (null != u ? u : []).concat([t]);
                    return [
                        (0, o.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, r),
                        a,
                    ];
                }
                var Ce = u(7727);
                function he(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Fe(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Fe(e, t);
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
                function Fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                function fe(e, t, u) {
                    const n = (0, o.useMemo)(
                        () =>
                            (function (e, t, u, n) {
                                let a,
                                    r = !1,
                                    o = 0;
                                function i() {
                                    a && clearTimeout(a);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function d() {
                                        (o = Date.now()), u.apply(l, s);
                                    }
                                    r ||
                                        (n && !a && d(),
                                        i(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (a = setTimeout(
                                                  n
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                    (s.cancel = function () {
                                        i(), (r = !0);
                                    }),
                                    s
                                );
                            })(u, e),
                        t,
                    );
                    return (0, o.useEffect)(() => n.cancel, [n]), n;
                }
                let ve;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(ve || (ve = {}));
                const De = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Be = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: a,
                        forceTriggerMouseMove: r,
                    }) => {
                        const i = (e, u) => {
                            const n = t(e),
                                a = n[0],
                                r = n[1];
                            return r <= a ? 0 : Ee(a, r, u);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? De : l,
                                d = (0, o.useRef)(null),
                                _ = (0, o.useRef)(null),
                                g = (0, o.useRef)(!1),
                                A = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        a = (e, ...u) => {
                                            for (var n, a = he(t(e).values()); !(n = a()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, o.useMemo)(() => ({ on: u, off: n, trigger: a }), []);
                                })(),
                                p = fe(
                                    () => {
                                        r && r();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, E.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), A.trigger('change', e), r && g.current && p());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                C = b[0],
                                h = b[1],
                                F = (0, o.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const a = C.scrollPosition.get(),
                                            r = (null != (n = C.scrollPosition.goal) ? n : 0) - a;
                                        return i(e, t * u + r + a);
                                    },
                                    [C.scrollPosition],
                                ),
                                f = (0, o.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            h.start({
                                                scrollPosition: i(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(n, C.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, C.scrollPosition],
                                ),
                                v = (0, o.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = _.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            r = F(t, e, n);
                                        f(r);
                                    },
                                    [f, F, c.step],
                                ),
                                D = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && v(n(e)),
                                            d.current && A.trigger('mouseWheel', e, C.scrollPosition, t(d.current));
                                    },
                                    [C.scrollPosition, v, A],
                                ),
                                B = ((e, t = []) => {
                                    const u = (0, o.useRef)(),
                                        n = (0, o.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        m(() => {
                                            const e = d.current;
                                            e &&
                                                (f(i(e, C.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [f, C.scrollPosition.goal],
                                ),
                                y = pe(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = i(e, C.scrollPosition.goal);
                                    t !== C.scrollPosition.goal && f(t, { immediate: !0 }),
                                        A.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', B),
                                    () => {
                                        window.removeEventListener('resize', B);
                                    }
                                ),
                                [B],
                            ),
                                (0, o.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !r) return;
                                    const t = () => {
                                            g.current = !0;
                                        },
                                        u = () => {
                                            g.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', t),
                                        e.addEventListener('mouseleave', u),
                                        () => {
                                            e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', u);
                                        }
                                    );
                                }, [d]);
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? a(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: D,
                                    applyScroll: f,
                                    applyStepTo: v,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: h,
                                    animationScroll: C,
                                    recalculateContent: y,
                                    events: { on: A.on, off: A.off },
                                }),
                                [C.scrollPosition, f, v, A.off, A.on, y, D, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ye = Be({
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
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ve.Next : ve.Prev),
                        forceTriggerMouseMove: ge.O.view.forceTriggerMouseMove,
                    }),
                    ke = 'HorizontalBar_base_49',
                    we = 'HorizontalBar_base__nonActive_82',
                    Se = 'HorizontalBar_leftButton_5f',
                    Le = 'HorizontalBar_rightButton_03',
                    xe = 'HorizontalBar_track_0d',
                    Te = 'HorizontalBar_thumb_fd',
                    Ne = 'HorizontalBar_rail_32',
                    Ie = 'disable',
                    Oe = { pending: !1, offset: 0 },
                    Re = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Me = () => {},
                    Pe = (e, t) => Math.max(20, e.offsetWidth * t),
                    He = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Re, onDrag: n = Me }) => {
                        const a = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            E = (0, o.useState)(Oe),
                            g = E[0],
                            A = E[1],
                            p = (0, o.useCallback)(
                                (e) => {
                                    A(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            b = () => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    d = Ee(0, 1, o / (a - n)),
                                    _ = (t.offsetWidth - Pe(t, i)) * d;
                                (u.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (r.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return r.current.classList.add(Ie), void s.current.classList.remove(Ie);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return r.current.classList.remove(Ie), void s.current.classList.add(Ie);
                                            var t, u;
                                            r.current.classList.remove(Ie), s.current.classList.remove(Ie);
                                        }
                                    })(_);
                            },
                            C = pe(() => {
                                (() => {
                                    const t = c.current,
                                        u = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && n && u)) return;
                                    const o = Math.min(1, n / r);
                                    (t.style.width = `${Pe(u, o)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === o ? a.current.classList.add(we) : a.current.classList.remove(we));
                                })(),
                                    b();
                            });
                        (0, o.useEffect)(() => m(C)),
                            (0, o.useEffect)(
                                () =>
                                    m(() => {
                                        const t = () => {
                                            b();
                                        };
                                        let u = Me;
                                        const n = () => {
                                            u(), (u = m(C));
                                        };
                                        return (
                                            e.events.on('recalculateContent', C),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', C),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!g.pending) return;
                                const t = ge.O.client.events.mouse.move(([t, u]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!r || !o) return;
                                        const i = l.current,
                                            s = c.current;
                                        if (!i || !s) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const d = t.clientX - g.offset - i.getBoundingClientRect().x,
                                            _ = (d / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: d, contentOffset: _ });
                                    }),
                                    u = ge.O.client.events.mouse.up(() => {
                                        t(), p(Oe);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, g.offset, g.pending, n, p]);
                        const h = be((t) => e.applyStepTo(t), d, [e]),
                            F = h[0],
                            f = h[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Ie) || (0, Ce.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: _()(ke, t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: _()(Se, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ie) ||
                                        0 !== e.button ||
                                        ((0, Ce.G)('play'), F(ve.Next));
                                },
                                onMouseUp: f,
                                ref: r,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: _()(xe, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if (((0, Ce.G)('play'), t.target === n))
                                                p({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = c.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? ve.Prev : ve.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: c, className: _()(Te, t.thumb) }),
                                i().createElement('div', { className: _()(Ne, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: _()(Le, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ie) ||
                                        0 !== e.button ||
                                        ((0, Ce.G)('play'), F(ve.Prev));
                                },
                                onMouseUp: f,
                                ref: s,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    We = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    je = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        classNames: r,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: _()(We.base, e.base) });
                            }, [n]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: _()(We.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: _()(We.defaultScrollArea, a) },
                                i().createElement(ze, { className: s, api: m, classNames: r }, e),
                            ),
                            i().createElement(He, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    ze = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, o.useEffect)(() => m(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: _()(We.base, t) },
                            i().createElement(
                                'div',
                                {
                                    className: _()(We.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: _()(We.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (ze.Bar = He), (ze.Default = je);
                const $e = Be({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ve.Next : ve.Prev),
                    }),
                    Ge = 'VerticalBar_base_f3',
                    Ue = 'VerticalBar_base__nonActive_42',
                    Ze = 'VerticalBar_topButton_d7',
                    Ve = 'VerticalBar_bottomButton_06',
                    Xe = 'VerticalBar_track_df',
                    qe = 'VerticalBar_thumb_32',
                    Ye = 'VerticalBar_rail_43',
                    Ke = 'disable',
                    Qe = () => {},
                    Je = { pending: !1, offset: 0 },
                    et = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    tt = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ut = (e, t) => Math.max(20, e.offsetHeight * t),
                    nt = (0, o.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = et, onDrag: n = Qe }) => {
                        const a = (0, o.useRef)(null),
                            r = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            E = (0, o.useState)(Je),
                            g = E[0],
                            A = E[1],
                            p = (0, o.useCallback)(
                                (e) => {
                                    A(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            b = pe(() => {
                                const t = c.current,
                                    u = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && t && u)) return;
                                const o = Math.min(1, n / r);
                                return (
                                    (t.style.height = `${ut(u, o)}px`),
                                    (t.style.display = 'flex'),
                                    a.current &&
                                        (1 === o ? a.current.classList.add(Ue) : a.current.classList.remove(Ue)),
                                    o
                                );
                            }),
                            C = pe(() => {
                                const t = l.current,
                                    u = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && t && u && a)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    d = Ee(0, 1, o / (a - n)),
                                    _ = (t.offsetHeight - ut(t, i)) * d;
                                (u.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (r.current && s.current && l.current && c.current) {
                                            if (0 === Math.round(e))
                                                return r.current.classList.add(Ke), void s.current.classList.remove(Ke);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return r.current.classList.remove(Ke), void s.current.classList.add(Ke);
                                            var t, u;
                                            r.current.classList.remove(Ke), s.current.classList.remove(Ke);
                                        }
                                    })(_);
                            }),
                            h = pe(() => {
                                tt(e, () => {
                                    b(), C();
                                });
                            });
                        (0, o.useEffect)(() => m(h)),
                            (0, o.useEffect)(() => {
                                const t = () => {
                                    tt(e, () => {
                                        C();
                                    });
                                };
                                let u = Qe;
                                const n = () => {
                                    u(), (u = m(h));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!g.pending) return;
                                const t = ge.O.client.events.mouse.up(() => {
                                        p(Je);
                                    }),
                                    u = ge.O.client.events.mouse.move(([t]) => {
                                        tt(e, (u) => {
                                            const a = l.current,
                                                r = c.current,
                                                o = e.getContainerSize();
                                            if (!a || !r || !o) return;
                                            const i = t.screenY - g.offset - a.getBoundingClientRect().y,
                                                s = (i / a.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: s });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, g.offset, g.pending, n, p]);
                        const F = be((t) => e.applyStepTo(t), d, [e]),
                            f = F[0],
                            v = F[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ke) || (0, Ce.G)('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: _()(Ge, t.base), ref: a, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: _()(Ze, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ke) ||
                                        0 !== e.button ||
                                        ((0, Ce.G)('play'), f(ve.Next));
                                },
                                ref: r,
                                onMouseEnter: D,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: _()(Xe, t.track),
                                    onMouseDown: (t) => {
                                        const n = c.current;
                                        if (n && 0 === t.button)
                                            if (((0, Ce.G)('play'), t.target === n))
                                                p({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        tt(e, (n) => {
                                                            if (!n) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? ve.Prev : ve.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: D,
                                },
                                i().createElement('div', { ref: c, className: _()(qe, t.thumb) }),
                                i().createElement('div', { className: _()(Ye, t.rail) }),
                            ),
                            i().createElement('div', {
                                className: _()(Ve, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ke) ||
                                        0 !== e.button ||
                                        ((0, Ce.G)('play'), f(ve.Prev));
                                },
                                onMouseUp: v,
                                ref: s,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    at = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    rt = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: a,
                        scrollClassName: r,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: _()(at.base, e.base) });
                            }, [n]),
                            m = (0, o.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return i().createElement(
                            'div',
                            { className: _()(at.defaultScroll, u), onWheel: t.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: _()(at.area, a) },
                                i().createElement(ot, { className: r, classNames: s, api: m }, e),
                            ),
                            i().createElement(nt, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    ot = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, o.useEffect)(() => m(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: _()(at.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: _()(at.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                ot.Default = rt;
                const it = { Vertical: a, Horizontal: n };
                var st = u(5521),
                    lt = u(9916);
                const ct = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function dt(e = st.n.NONE, t = ct, u = !1, n = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== st.n.NONE)
                            return (
                                window.addEventListener('keydown', a, u),
                                () => {
                                    window.removeEventListener('keydown', a, u);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (!n && ge.O.view.isEventHandled()) return;
                                ge.O.view.setEventHandled(), t(a), u && a.stopPropagation();
                            }
                        }
                    }, [t, e, u, n]);
                }
                var _t = u(5415);
                const mt = {
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
                    Et = [
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
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                class At extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, Ce.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, Ce.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            u = e.onClick,
                            n = e.goto,
                            a = e.side,
                            r = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, Et)),
                            E = _()(mt.base, mt[`base__${r}`], mt[`base__${a}`], null == o ? void 0 : o.base),
                            g = _()(mt.icon, mt[`icon__${r}`], mt[`icon__${a}`], null == o ? void 0 : o.icon),
                            A = _()(mt.glow, null == o ? void 0 : o.glow),
                            p = _()(mt.caption, mt[`caption__${r}`], null == o ? void 0 : o.caption),
                            b = _()(mt.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            gt(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                m,
                            ),
                            'info' !== r && i().createElement('div', { className: mt.shine }),
                            i().createElement('div', { className: g }, i().createElement('div', { className: A })),
                            i().createElement('div', { className: p }, t),
                            n && i().createElement('div', { className: b }, n),
                        );
                    }
                }
                At.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const pt = ({ onClick: e }) =>
                        i().createElement(At, {
                            onClick: e,
                            caption: R.strings.crew.common.navigation.aboutCrew(),
                            type: 'info',
                        }),
                    bt = 'common_close_0e',
                    Ct = ({ onClick: e, label: t = R.strings.menu.viewHeader.closeBtn.label() }) =>
                        i().createElement(At, {
                            onClick: e,
                            classNames: { base: bt },
                            caption: t,
                            type: 'close',
                            side: 'right',
                        }),
                    ht = 'TopButtons_base_ef',
                    Ft = 'TopButtons_leftButtons_9e',
                    ft = 'TopButtons_rightButtons_33',
                    vt = i().memo(function ({
                        backButtonLabel: e,
                        closeButtonLabel: t = R.strings.menu.viewHeader.closeBtn.label(),
                        onBackClick: u,
                        onAboutClick: n,
                        onCloseClick: a,
                        className: r,
                        classNames: o,
                    }) {
                        return i().createElement(
                            'div',
                            { className: _()(ht, r) },
                            e &&
                                u &&
                                i().createElement(
                                    'div',
                                    { className: _()(Ft, null == o ? void 0 : o.leftButtons) },
                                    i().createElement(At, { onClick: u, caption: e, type: 'back' }),
                                ),
                            i().createElement(
                                'div',
                                { className: _()(ft, null == o ? void 0 : o.rightButtons) },
                                n && i().createElement(pt, { onClick: n }),
                                a && i().createElement(Ct, { onClick: a, label: t }),
                            ),
                        );
                    });
                var Dt = u(2056),
                    Bt = u(514);
                const yt = {
                    base: 'MentoringLicenseEntry_base_37',
                    base__default: 'MentoringLicenseEntry_base__default_ef',
                    base__disabled: 'MentoringLicenseEntry_base__disabled_65',
                    content: 'MentoringLicenseEntry_content_3d',
                    icon: 'MentoringLicenseEntry_icon_74',
                    title: 'MentoringLicenseEntry_title_0b',
                    storage: 'MentoringLicenseEntry_storage_8b',
                    storageIcon: 'MentoringLicenseEntry_storageIcon_89',
                    storagerAmount: 'MentoringLicenseEntry_storagerAmount_9a',
                };
                var kt;
                !(function (e) {
                    (e.Default = 'default'), (e.Disabled = 'disabled');
                })(kt || (kt = {}));
                const wt = (0, c.Pi)(() => {
                    const e = me(),
                        t = e.model,
                        u = e.controls,
                        n = t.mentoringLicense.get();
                    return i().createElement(
                        Dt.u,
                        {
                            contentId: R.views.lobby.crew.tooltips.MentoringLicenseTooltip('resId'),
                            args: { componentKey: n.componentKey },
                        },
                        i().createElement(
                            'div',
                            {
                                onMouseEnter: () => n.isEnabled && Bt.hY.highlight(),
                                onClick: () => {
                                    n.isEnabled && (Bt.hY.click(), u.onMentoringEntryClick());
                                },
                                className: _()(yt.base, yt[`base__${n.isEnabled ? kt.Default : kt.Disabled}`]),
                                id: n.isEnabled ? 'crew_books_mentoring_license_btn' : void 0,
                            },
                            i().createElement(
                                'div',
                                { className: yt.content },
                                i().createElement('div', { className: yt.icon }),
                                i().createElement(
                                    'div',
                                    { className: yt.title },
                                    R.strings.crew_books.page.mentoringLicense.title(),
                                ),
                                i().createElement(
                                    'div',
                                    { className: yt.storage },
                                    i().createElement('div', { className: yt.storageIcon }),
                                    i().createElement('div', { className: yt.storagerAmount }, n.amount),
                                ),
                            ),
                        ),
                    );
                });
                class St extends i().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = lt.B3.GOLD;
                        else e = lt.B3.INTEGRAL;
                        const t = lt.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                St.defaultProps = { format: 'integral' };
                const Lt = {
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
                let xt, Tt, Nt;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(xt || (xt = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Tt || (Tt = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(Nt || (Nt = {}));
                const It = (0, o.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: u,
                            type: n,
                            value: a,
                            discountValue: r,
                            showPlus: o,
                            isEnough: s = !0,
                            stockBackgroundName: l = Nt.Red,
                            className: c,
                            classNames: d,
                        }) =>
                            i().createElement(
                                'span',
                                { className: _()(Lt.base, Lt[`base__${u}`], c) },
                                i().createElement(
                                    'span',
                                    {
                                        className: _()(
                                            Lt.value,
                                            Lt[`value__${n}`],
                                            !s && Lt.value__notEnough,
                                            null == d ? void 0 : d.value,
                                        ),
                                    },
                                    o && a > 0 && '+',
                                    i().createElement(St, { value: a, format: n === Tt.gold ? 'gold' : 'integral' }),
                                ),
                                i().createElement('span', {
                                    className: _()(Lt.icon, Lt[`icon__${n}-${u}`], null == d ? void 0 : d.icon),
                                }),
                                e &&
                                    i().createElement(
                                        'span',
                                        {
                                            className: _()(
                                                Lt.stock,
                                                r && Lt.stock__indent,
                                                t && Lt.stock__interactive,
                                                null == d ? void 0 : d.stock,
                                            ),
                                        },
                                        i().createElement('span', {
                                            className: Lt.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(r) && r,
                                    ),
                            ),
                    ),
                    Ot = R.strings.tooltips.quickTraining.unavailable;
                var Rt = u(8018);
                const Mt = {
                        base: 'BaseCard_base_79',
                        base__default: 'BaseCard_base__default_7d',
                        base__selected: 'BaseCard_base__selected_a3',
                        icon: 'BaseCard_icon_0c',
                        description: 'BaseCard_description_79',
                        additionalDescription: 'BaseCard_additionalDescription_2e',
                        base__disabled: 'BaseCard_base__disabled_3c',
                        activeLayer: 'BaseCard_activeLayer_2a',
                        activeLayer__visible: 'BaseCard_activeLayer__visible_50',
                        iconContainer: 'BaseCard_iconContainer_76',
                        title: 'BaseCard_title_79',
                        bottomContainer: 'BaseCard_bottomContainer_4f',
                        bottomGlow: 'BaseCard_bottomGlow_ed',
                        bottomOption: 'BaseCard_bottomOption_61',
                        bottomOption__fullWidth: 'BaseCard_bottomOption__fullWidth_20',
                        errorIcon: 'BaseCard_errorIcon_07',
                    },
                    Pt = (0, Rt.Ds)();
                let Ht;
                !(function (e) {
                    (e.Default = 'default'), (e.Disabled = 'disabled'), (e.Selected = 'selected');
                })(Ht || (Ht = {}));
                let Wt = !1;
                const jt = (0, o.memo)(
                        ({
                            icon: e,
                            title: t,
                            description: u,
                            additionalDescription: n,
                            headerContent: a,
                            bottomContent: r,
                            cardState: o,
                            hasError: s = !1,
                            hoverSound: l = '',
                            withFullWidthOption: c = !1,
                            onCardMouseEnter: d,
                            onCardSelect: m,
                        }) => {
                            const E = me().controls,
                                g = o === Ht.Disabled,
                                A = o === Ht.Selected;
                            return i().createElement(
                                'div',
                                {
                                    className: _()(Mt.base, Mt[`base__${o}`]),
                                    onMouseEnter: () => {
                                        g ||
                                            A ||
                                            (l ? Bt.hY.sound(l) : Bt.hY.highlight(),
                                            Bt.hY.sound(Rt.gO.SHOP_INFO),
                                            Pt(() => {
                                                (Wt = !0), d();
                                            }, 300));
                                    },
                                    onMouseLeave: () => {
                                        g ||
                                            A ||
                                            Pt(() => {
                                                Wt && (E.onCardMouseLeave(), (Wt = !1));
                                            }, 100);
                                    },
                                    onClick: () => {
                                        g || (Pt.cancel(), Bt.hY.click(), (Wt = !1), m());
                                    },
                                },
                                i().createElement(
                                    'div',
                                    { className: _()(Mt.activeLayer, A && Mt.activeLayer__visible) },
                                    i().createElement(
                                        'div',
                                        {
                                            className: _()(Mt.bottomOption, c && Mt.bottomOption__fullWidth),
                                            onClick: (e) => e.stopPropagation(),
                                        },
                                        r,
                                    ),
                                ),
                                a,
                                i().createElement(
                                    'div',
                                    { className: Mt.iconContainer },
                                    i().createElement('div', {
                                        className: Mt.icon,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.crewBooks.books.s180x135.$dyn(e)})`,
                                        },
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Mt.description },
                                    i().createElement('div', { className: Mt.title }, t),
                                    u,
                                    i().createElement('div', { className: Mt.additionalDescription }, n),
                                ),
                                (A || s) &&
                                    i().createElement(
                                        'div',
                                        { className: Mt.bottomContainer },
                                        i().createElement('div', { className: Mt.bottomGlow }),
                                        !A && s && i().createElement('div', { className: Mt.errorIcon }),
                                    ),
                            );
                        },
                    ),
                    zt = 'BookCard_vehicleName_e6',
                    $t = 'CardBottomContent_base_eb',
                    Gt = 'CardBottomContent_optionCounterBtn_48',
                    Ut = 'CardBottomContent_optionCounterValue_41',
                    Zt = 'CardBottomContent_optionCounterBtn__plus_47',
                    Vt = 'CardBottomContent_optionCounterBtn__plusDisabled_ad',
                    Xt = 'CardBottomContent_optionCounterBtn__minus_0f',
                    qt = (e, t, u) =>
                        t
                            ? {
                                  contentId: R.views.lobby.crew.tooltips.CrewBookMouseTooltip('resId'),
                                  args: { componentKey: e },
                              }
                            : { isEnabled: !u, body: R.strings.tooltips.quickTraining.xpEnoughforPostProgression() },
                    Yt = ({
                        componentKey: e,
                        selectedCount: t,
                        canAddBook: u,
                        canAddMoreBooks: n,
                        isPersonalBook: a,
                        handleBookSubtract: r,
                        handleBookAdded: o,
                    }) =>
                        i().createElement(
                            p.l,
                            { tooltipArgs: qt(e, n, a) },
                            i().createElement(
                                'div',
                                { className: $t },
                                i().createElement('div', { className: _()(Gt, Xt), onClick: r }),
                                i().createElement('div', { className: Ut }, t),
                                i().createElement('div', { className: _()(Gt, u ? Zt : Vt), onClick: o }),
                            ),
                        );
                var Kt = u(3457),
                    Qt = u(9987),
                    Jt = u(6373);
                const eu = 'CardHeaderContent_btnSection_4e',
                    tu = 'CardHeaderContent_btnSection__withBuyBtn_1e',
                    uu = 'CardHeaderContent_btnBuyHover_8b',
                    nu = 'CardHeaderContent_btnBuyHover__hover_4f',
                    au = 'CardHeaderContent_btnBuy_bb',
                    ru = 'CardHeaderContent_postProgressionBtn_9f',
                    ou = 'CardHeaderContent_postProgression_bd',
                    iu = 'CardHeaderContent_postProgressionCounter_b3',
                    su = 'CardHeaderContent_booksCounter_6c',
                    lu = 'CardHeaderContent_booksCounterIcon_1b',
                    cu = 'CardHeaderContent_booksCounterValue_49',
                    du = ({
                        amount: e,
                        postProgressionCount: t,
                        withBuyBtn: u,
                        withPostProgressionBtn: n,
                        onBuyClick: a,
                        onPostProgressionClick: r,
                    }) => {
                        const s = (0, _t.GS)().mediaSize,
                            l = (0, o.useState)(!1),
                            c = l[0],
                            d = l[1],
                            m = () => d(!c);
                        return i().createElement(
                            i().Fragment,
                            null,
                            (u || n) &&
                                i().createElement(
                                    'div',
                                    { className: _()(eu, u && tu) },
                                    u &&
                                        i().createElement(
                                            i().Fragment,
                                            null,
                                            i().createElement('div', { className: _()(uu, c && nu) }),
                                            i().createElement(
                                                Jt.i,
                                                { body: R.strings.crew_books.tooltip.buyManual() },
                                                i().createElement(
                                                    Kt.u5,
                                                    {
                                                        size: s === _t.cJ.Large ? Kt.qE.small : Kt.qE.extraSmall,
                                                        mixClass: au,
                                                        onClick: a,
                                                        onMouseEnter: m,
                                                        onMouseLeave: m,
                                                    },
                                                    R.strings.crew_books.buttons.buy(),
                                                ),
                                            ),
                                        ),
                                    n &&
                                        i().createElement(
                                            Jt.i,
                                            { body: R.strings.crew_books.tooltip.postProgression() },
                                            i().createElement(
                                                'div',
                                                {
                                                    id: s >= _t.cJ.Small ? 'crew_books_post_progression_btn' : void 0,
                                                    className: ou,
                                                },
                                                i().createElement(
                                                    Kt.u5,
                                                    {
                                                        size: s === _t.cJ.Large ? Kt.qE.small : Kt.qE.extraSmall,
                                                        mixClass: ru,
                                                        onClick: r,
                                                        onMouseEnter: m,
                                                        onMouseLeave: m,
                                                    },
                                                    t > 0
                                                        ? R.strings.crew_books.buttons.postProgression.claim()
                                                        : R.strings.crew_books.buttons.postProgression.howTo(),
                                                ),
                                                i().createElement(Qt.A, { size: 'small', value: t, className: iu }),
                                            ),
                                        ),
                                ),
                            i().createElement(
                                'div',
                                { className: su },
                                i().createElement('div', { className: lu }),
                                i().createElement('div', { className: cu }, e),
                            ),
                        );
                    },
                    _u = (0, o.memo)(
                        ({
                            intCD: e,
                            icon: t,
                            title: u,
                            nation: n,
                            mainText: a,
                            additionalText: r,
                            vehicleName: o,
                            bookAddedXp: s,
                            availableCount: l,
                            selectedCount: c,
                            postProgressionClaimCount: d,
                            hasError: _,
                            hasPotentialLoss: m,
                            canBuyBook: E,
                            isDisabled: g,
                            isPersonal: A,
                            isPostProgressionShown: b,
                            isWholeCrewHasPerkLimit: C,
                            isCurrentTankmanMaxTrained: h,
                            canAddMoreBooks: F,
                            componentKey: f,
                        }) => {
                            var v;
                            const D = me().controls,
                                B = 0 === l,
                                y = F && c < l,
                                k = ((e, t, u) => (e || t ? Ht.Disabled : u > 0 ? Ht.Selected : Ht.Default))(g, B, c),
                                w = c > 0,
                                S = null == (v = R.strings.menu.nations.$dyn(n)) ? void 0 : v.toString(),
                                L = m && k === Ht.Default,
                                x = A
                                    ? ((e, t) =>
                                          t
                                              ? { body: R.strings.crew_books.tooltip.outOfStock() }
                                              : { isEnabled: e, header: Ot.header.book(), body: Ot.body.perkLimit() })(
                                          h,
                                          B,
                                      )
                                    : ((e, t, u, n, a) =>
                                          t
                                              ? { header: Ot.header.allTrained(), body: Ot.body.allFullyTrained() }
                                              : u
                                                ? {
                                                      contentId:
                                                          R.views.lobby.crew.tooltips.QuickTrainingLostXpTooltip(
                                                              'resId',
                                                          ),
                                                      args: { componentKey: e },
                                                  }
                                                : {
                                                      isEnabled: n,
                                                      body: a
                                                          ? R.strings.crew_books.tooltip.outOfStockCanBuy()
                                                          : R.strings.crew_books.tooltip.outOfStock(),
                                                  })(f, C, L, B, E),
                                T = () => {
                                    y && (Bt.hY.click(), D.onBookSelected(e, c + 1));
                                },
                                N = () => {
                                    Bt.hY.click(), D.onBookSelected(e, c - 1);
                                };
                            return i().createElement(
                                p.l,
                                { tooltipArgs: x },
                                i().createElement(
                                    'div',
                                    {
                                        onWheel: (e) => {
                                            w &&
                                                (e.stopPropagation(),
                                                e.deltaY < 0 && c > 1 ? N() : e.deltaY > 0 && T());
                                        },
                                    },
                                    i().createElement(jt, {
                                        icon: t,
                                        hasError: _,
                                        cardState: k,
                                        title: i().createElement(Y, { text: u, binding: { nation: S } }),
                                        description: i().createElement(Y, {
                                            text: a,
                                            binding: {
                                                xp: i().createElement(It, { type: Tt.xp, size: xt.small, value: s }),
                                            },
                                        }),
                                        additionalDescription: i().createElement(Y, {
                                            text: r,
                                            binding: {
                                                nation: S,
                                                vehicleName: i().createElement('div', { className: zt }, o),
                                            },
                                        }),
                                        headerContent: i().createElement(du, {
                                            amount: l,
                                            postProgressionCount: d,
                                            withBuyBtn: E,
                                            withPostProgressionBtn: b,
                                            onBuyClick: (t) => {
                                                t.stopPropagation(), D.onBuyBook(e);
                                            },
                                            onPostProgressionClick: (e) => {
                                                e.stopPropagation(), D.onPostProgressionClick();
                                            },
                                        }),
                                        bottomContent: i().createElement(Yt, {
                                            componentKey: f,
                                            selectedCount: c,
                                            canAddBook: y,
                                            canAddMoreBooks: F,
                                            isPersonalBook: A,
                                            handleBookAdded: T,
                                            handleBookSubtract: N,
                                        }),
                                        onCardMouseEnter: () => D.onBookMouseEnter(e),
                                        onCardSelect: () => {
                                            const t = w ? 0 : 1;
                                            D.onBookSelected(e, t);
                                        },
                                    }),
                                ),
                            );
                        },
                    );
                u(3368);
                const mu = ['value', 'className', 'autoFocus', 'onKeyDown'];
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                let gu = !0;
                const Au = (0, o.memo)(function (e) {
                        let t,
                            u = e.value,
                            n = e.className,
                            a = e.autoFocus,
                            r = e.onKeyDown,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, mu);
                        return i().createElement(
                            'input',
                            Eu(
                                {
                                    type: 'text',
                                    ref: (e) => {
                                        e &&
                                            ((t = e),
                                            a && e.focus(),
                                            gu && e.setSelectionRange(e.value.length, e.value.length));
                                    },
                                    className: n,
                                    value: u,
                                    onKeyDown: (e) => {
                                        const u = e.currentTarget,
                                            n = u.value.length,
                                            o = u.selectionStart || 0;
                                        (gu = o === n && e.which !== st.n.DELETE),
                                            (e.which !== st.n.DELETE && e.which !== st.n.BACKSPACE) ||
                                                1 !== n ||
                                                setTimeout(() => {
                                                    u.setSelectionRange(n, n);
                                                }),
                                            e.which === st.n.ESCAPE && t && a && t.blur(),
                                            null == r || r(e);
                                    },
                                },
                                o,
                            ),
                        );
                    }),
                    pu = 'ExperienceStepper_base_ba',
                    bu = 'ExperienceStepper_base__focused_f9',
                    Cu = 'ExperienceStepper_currency_62',
                    hu = 'ExperienceStepper_inputWrapper_4b',
                    Fu = 'ExperienceStepper_input_3b',
                    fu = 'ExperienceStepper_currencyIcon_e8',
                    vu = 'ExperienceStepper_controls_15',
                    Du = 'ExperienceStepper_btn_00',
                    Bu = 'ExperienceStepper_btnIncrement_fe',
                    yu = 'ExperienceStepper_btnIncrement__disabled_b8',
                    ku = 'ExperienceStepper_btnDecrement_fb',
                    wu = 'ExperienceStepper_btnDecrement__disabled_3e',
                    Su = 'percent',
                    Lu = 'add',
                    xu = 'subtract',
                    Tu = 'perk',
                    Nu = /\d+/,
                    Iu = () => Bt.hY.highlight(),
                    Ou = (0, o.memo)(({ componentKey: e, value: t, maxValue: u, isActive: n }) => {
                        const a = me().controls,
                            r = t < u,
                            s = t > 1,
                            l = (0, o.useRef)(null);
                        return i().createElement(
                            Dt.u,
                            {
                                contentId: R.views.lobby.crew.tooltips.ExperienceStepperTooltip('resId'),
                                args: { componentKey: e },
                            },
                            i().createElement(
                                'div',
                                { ref: l, className: pu },
                                i().createElement(
                                    'div',
                                    { className: Cu },
                                    i().createElement(
                                        'div',
                                        { className: hu },
                                        i().createElement(Au, {
                                            value: t,
                                            autoFocus: n,
                                            className: Fu,
                                            onBlur: () => {
                                                var e;
                                                return null == (e = l.current) ? void 0 : e.classList.remove(bu);
                                            },
                                            onFocus: () => {
                                                var e;
                                                return n && (null == (e = l.current) ? void 0 : e.classList.add(bu));
                                            },
                                            onKeyDown: (e) => {
                                                let t, u;
                                                (t =
                                                    e.ctrlKey || e.which === st.n.PAGE_UP || e.which === st.n.PAGE_DOWN
                                                        ? Tu
                                                        : Su),
                                                    (e.which !== st.n.ARROW_UP && e.which !== st.n.PAGE_UP) || !r
                                                        ? (e.which !== st.n.ARROW_DOWN && e.which !== st.n.PAGE_DOWN) ||
                                                          !s ||
                                                          (u = xu)
                                                        : (u = Lu),
                                                    t && u && a.onFreeXpUpdated(t, u);
                                            },
                                            onChange: (e) => {
                                                var t;
                                                let n = Number(
                                                    null == (t = Nu.exec(e.currentTarget.value)) ? void 0 : t[0],
                                                );
                                                Number.isInteger(n)
                                                    ? (n > u ? (n = u) : n < 1 && (n = 1), a.onFreeXpManualInput(n))
                                                    : a.onFreeXpManualInput(1);
                                            },
                                        }),
                                    ),
                                    i().createElement('div', { className: fu }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: vu },
                                    i().createElement('div', {
                                        className: _()(Du, Bu, !r && yu),
                                        onMouseEnter: Iu,
                                        onClick: (e) =>
                                            r &&
                                            (({ ctrlKey: e }) => {
                                                Bt.hY.click(), a.onFreeXpUpdated(e ? Tu : Su, Lu);
                                            })(e),
                                    }),
                                    i().createElement('div', {
                                        className: _()(Du, ku, !s && wu),
                                        onMouseEnter: Iu,
                                        onClick: (e) =>
                                            s &&
                                            (({ ctrlKey: e }) => {
                                                Bt.hY.click(), a.onFreeXpUpdated(e ? Tu : Su, xu);
                                            })(e),
                                    }),
                                ),
                            ),
                        );
                    }),
                    Ru = 'FreeXpCard_discount_48',
                    Mu = 'FreeXpCard_discountValue_ca',
                    Pu = 'FreeXpCard_bottomStepper_4a',
                    Hu = (0, c.Pi)(() => {
                        const e = me(),
                            t = e.model,
                            u = e.controls,
                            n = t.freeXp.get(),
                            a = n.discountSize > 1,
                            r =
                                ((o = n.isDisabled),
                                (s = n.currentXpValue),
                                o ? Ht.Disabled : s > 0 ? Ht.Selected : Ht.Default);
                        var o, s;
                        const l = r === Ht.Selected,
                            c = t.isCurrentTankmanHasPerkLimit.get(),
                            d = t.isCurrentTankmanHasLowEfficiency.get();
                        return i().createElement(
                            Jt.i,
                            {
                                isEnabled: c || d,
                                header: R.strings.tooltips.quickTraining.unavailable.header.freeXp(),
                                body:
                                    ((_ = c), (m = d), _ ? Ot.body.perkLimit() : m ? Ot.body.lowEfficiency() : void 0),
                            },
                            i().createElement(
                                'div',
                                {
                                    onWheel: (e) => {
                                        l &&
                                            (e.stopPropagation(),
                                            e.deltaY > 0 && n.currentXpValue < n.maxXpValue
                                                ? u.onFreeXpUpdated(Su, Lu)
                                                : e.deltaY < 0 && n.currentXpValue > 1 && u.onFreeXpUpdated(Su, xu));
                                    },
                                },
                                i().createElement(jt, {
                                    withFullWidthOption: !0,
                                    icon: 'freeXp',
                                    hasError: n.hasError,
                                    cardState: r,
                                    title: R.strings.crew_books.card.freeExp.title(),
                                    description: R.strings.crew_books.card.freeExp.mainText(),
                                    additionalDescription: i().createElement(
                                        Dt.u,
                                        {
                                            contentId:
                                                R.views.lobby.crew.tooltips.QuickTrainingDiscountTooltip('resId'),
                                            isEnabled: a,
                                            args: { componentKey: n.componentKey },
                                        },
                                        i().createElement(
                                            'div',
                                            null,
                                            i().createElement(Y, {
                                                text: R.strings.crew_books.card.freeExp.additionalText(),
                                                binding: {
                                                    freeXp: i().createElement(It, {
                                                        type: Tt.freeXP,
                                                        size: xt.small,
                                                        value: 1,
                                                    }),
                                                    xp: i().createElement(It, {
                                                        type: Tt.xp,
                                                        size: xt.small,
                                                        value: n.exchangeRate,
                                                        isDiscount: a,
                                                    }),
                                                },
                                            }),
                                        ),
                                    ),
                                    headerContent: a
                                        ? i().createElement(
                                              'div',
                                              { className: Ru },
                                              i().createElement(Y, {
                                                  text: R.strings.crew_books.card.freeExp.discountValue(),
                                                  binding: { discount: n.discountSize },
                                                  classMix: Mu,
                                              }),
                                          )
                                        : null,
                                    bottomContent: i().createElement(
                                        'div',
                                        { className: Pu },
                                        i().createElement(Ou, {
                                            componentKey: n.componentKey,
                                            value: n.currentXpValue,
                                            maxValue: n.maxXpValue,
                                            isActive: l,
                                        }),
                                    ),
                                    onCardMouseEnter: u.onFreeXpMouseEnter,
                                    onCardSelect: () => u.onFreeXpSelected(!l),
                                    hoverSound: Rt.gO.CREW_FREEXP_HIGHLIGHT,
                                }),
                            ),
                        );
                        var _, m;
                    }),
                    Wu = 'FormatText_base_d0',
                    ju = ({
                        binding: e,
                        text: t = '',
                        classMix: u,
                        alignment: n = h.v2.left,
                        formatWithBrackets: a,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const r = a && e ? (0, h.WU)(t, e) : t;
                        return i().createElement(
                            o.Fragment,
                            null,
                            r.split('\n').map((t, a) =>
                                i().createElement(
                                    'div',
                                    { className: _()(Wu, u), key: `${t}-${a}` },
                                    (0, h.Uw)(t, n, e).map((e, t) =>
                                        i().createElement(o.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    zu = 'SectionFooter_base_82',
                    $u = 'SectionFooter_base__visible_e5',
                    Gu = 'SectionFooter_labelContainer_68',
                    Uu = 'SectionFooter_confirmLabel_53',
                    Zu = 'SectionFooter_confirmLabelMemberName_23',
                    Vu = 'SectionFooter_confirmBtn_5d',
                    Xu = (0, c.Pi)(() => {
                        const e = (0, _t.GS)().mediaSize,
                            t = me(),
                            u = t.model,
                            n = t.controls,
                            a = u.learningResults.get(),
                            r = u.computes.hasSelectedBooks(),
                            o = u.computes.hasFreeXpSelected(),
                            s = e < _t.cJ.Medium ? xt.small : xt.big;
                        return i().createElement(
                            'div',
                            { className: _()(zu, (r || o) && $u) },
                            i().createElement(
                                'div',
                                { className: Gu },
                                r &&
                                    i().createElement(ju, {
                                        classMix: Uu,
                                        text:
                                            ((l = u.isAnyTankmanHasPerkLimit.get()),
                                            (c = o),
                                            (d = e),
                                            l
                                                ? R.strings.crew_books.confirm.postProgressionLabel()
                                                : d >= _t.cJ.Small && c
                                                  ? R.strings.crew_books.confirm.crewLabelSeparated()
                                                  : R.strings.crew_books.confirm.crewLabel()),
                                        binding: {
                                            xpValue: i().createElement(It, {
                                                type: Tt.xp,
                                                size: s,
                                                value: a.crewXpAmount,
                                                isEnough: !0,
                                            }),
                                        },
                                    }),
                                o &&
                                    i().createElement(ju, {
                                        classMix: Uu,
                                        text: r
                                            ? R.strings.crew_books.confirm.personalExtraLabel()
                                            : R.strings.crew_books.confirm.personalLabel(),
                                        binding: {
                                            memberName: i().createElement(
                                                'div',
                                                { className: Zu },
                                                u.tankmanName.get(),
                                            ),
                                            xpValue: i().createElement(It, {
                                                type: Tt.xp,
                                                size: s,
                                                value: a.personalXpAmount,
                                                isEnough: !0,
                                            }),
                                        },
                                    }),
                            ),
                            i().createElement(
                                Kt.u5,
                                { size: Kt.qE.medium, mixClass: Vu, onClick: n.onLearn },
                                R.strings.crew_books.buttons.learn(),
                            ),
                            i().createElement(
                                Kt.u5,
                                { type: Kt.L$.secondary, size: Kt.qE.medium, mixClass: Vu, onClick: n.onCancel },
                                R.strings.crew_books.buttons.cancel(),
                            ),
                        );
                        var l, c, d;
                    }),
                    qu = 'CrewBooksSection_base_33',
                    Yu = 'CrewBooksSection_base__centered_be',
                    Ku = 'CrewBooksSection_topButtons_2a',
                    Qu = 'CrewBooksSection_mainContentWrapper_2a',
                    Ju = 'CrewBooksSection_mainContent_91',
                    en = 'CrewBooksSection_header_07',
                    tn = 'CrewBooksSection_title_fe',
                    un = 'CrewBooksSection_divider_f1',
                    nn = 'CrewBooksSection_divider__bottom_d6',
                    an = 'CrewBooksSection_cards_7f',
                    rn = 'CrewBooksSection_cardsScrollContent_8f',
                    on = 'CrewBooksSection_cardsScrollBar_c4';
                function sn() {
                    return (
                        (sn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        sn.apply(this, arguments)
                    );
                }
                const ln = (0, c.Pi)(() => {
                        const e = (0, _t.GS)().remScreenWidth,
                            t = $e(),
                            u = me(),
                            n = u.model,
                            a = u.controls,
                            r = n.nationName.get(),
                            o = n.vehicleName.get(),
                            s = n.booksComponent.get().componentKey,
                            l = n.isWholeCrewHasPerkLimit.get(),
                            c = n.isCurrentTankmanHasPerkLimit.get();
                        var d;
                        return (
                            (d = () => {
                                n.computes.hasSelectedBooks() || n.computes.hasFreeXpSelected()
                                    ? a.onCancel()
                                    : a.onClose();
                            }),
                            dt(st.n.ESCAPE, d),
                            i().createElement(
                                'div',
                                { className: _()(qu, e >= 2100 && Yu) },
                                i().createElement(vt, {
                                    onAboutClick: a.onAbout,
                                    onCloseClick: a.onClose,
                                    onBackClick: a.back,
                                    backButtonLabel: n.backButtonLabel.get(),
                                    className: Ku,
                                }),
                                i().createElement(
                                    'div',
                                    { className: Qu },
                                    i().createElement(
                                        'div',
                                        { className: Ju },
                                        i().createElement(
                                            'div',
                                            { className: en },
                                            i().createElement(
                                                'div',
                                                { className: tn },
                                                R.strings.crew_books.page.title(),
                                            ),
                                            n.mentoringLicense.get().isVisible && i().createElement(wt, null),
                                        ),
                                        i().createElement('div', { className: un }),
                                        i().createElement(
                                            it.Vertical.Area.Default,
                                            { api: t, barClassNames: { base: on }, scrollClassNames: { content: rn } },
                                            i().createElement(
                                                'div',
                                                { className: an },
                                                i().createElement(Hu, null),
                                                n.computes
                                                    .getBooks()
                                                    .map((e, t) =>
                                                        i().createElement(
                                                            _u,
                                                            sn(
                                                                {
                                                                    key: t,
                                                                    nation: r,
                                                                    vehicleName: o,
                                                                    componentKey: s,
                                                                    isWholeCrewHasPerkLimit: l,
                                                                    isCurrentTankmanMaxTrained: c,
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    ),
                                            ),
                                        ),
                                        i().createElement('div', { className: _()(un, nn) }),
                                        i().createElement(Xu, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    cn = 'QuickTrainingViewApp_base_b9',
                    dn = 'QuickTrainingViewApp_flagWrapper_b7',
                    _n = 'QuickTrainingViewApp_flag_54',
                    mn = 'QuickTrainingViewApp_leftPanelSection_7e',
                    En = (0, c.Pi)(() => {
                        const e = me().model;
                        return i().createElement(
                            'div',
                            { className: cn },
                            i().createElement(
                                'div',
                                { className: dn },
                                i().createElement('div', {
                                    className: _n,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.crew.flags.${e.nationName.get()})`,
                                    },
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: mn },
                                i().createElement(oe.O, null),
                                i().createElement(re, { tips: e.computes.getTips() }),
                            ),
                            i().createElement(ln, null),
                        );
                    });
                engine.whenReady.then(() => {
                    l().render(
                        i().createElement(_e, null, i().createElement(r.z, null, i().createElement(En, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2857: (e, t, u) => {
                'use strict';
                u.d(t, { L: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6373),
                    o = u(7363),
                    i = u.n(o),
                    s = u(8699);
                const l = (0, o.memo)(({ classMix: e, targetId: t }) =>
                    i().createElement(
                        r.i,
                        {
                            header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                            body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            targetId: t,
                        },
                        i().createElement(
                            'div',
                            { className: a()(s.Z.base, e) },
                            i().createElement('div', { className: s.Z.icon }),
                        ),
                    ),
                );
            },
            5563: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => E, r: () => m });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7078),
                    o = u(2603),
                    i = u(771),
                    s = u(3649),
                    l = u(9916),
                    c = u(7363),
                    d = u.n(c),
                    _ = u(130);
                let m;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
                })(m || (m = {}));
                const E = (0, c.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = i.y$,
                        className: u,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: c = m.Normal,
                    }) => {
                        const E = e === i.sU,
                            g = E ? { tooltipId: o.M4 } : { tooltipId: o.Br, skillEfficiency: e, tankmanID: t };
                        return d().createElement(
                            r.t,
                            { targetId: n, args: g, isEnabled: t !== i.y$ },
                            d().createElement(
                                'div',
                                { className: a()(_.Z.base, _.Z[`base__${c}`], E && _.Z.base__untrained, u) },
                                E
                                    ? d().createElement('div', { className: _.Z.icon })
                                    : d().createElement(
                                          'div',
                                          { className: a()(_.Z.percent, e === i.yb && _.Z.percent__full) },
                                          (0, s.dL)(l.Z5.getNumberFormat(100 * e, l.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
            },
            2768: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => s, y: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    o = u.n(r),
                    i = u(4458);
                let s;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(s || (s = {}));
                const l = o().memo(function ({ iconName: e, size: t = s.c24x24, className: u }) {
                    var n;
                    const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                    return o().createElement('div', {
                        style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                        className: a()(i.Z.base, i.Z[`base__${t}`], u),
                    });
                });
            },
            8617: (e, t, u) => {
                'use strict';
                u.d(t, { n: () => b });
                var n = u(6483),
                    a = u.n(n),
                    r = u(771),
                    o = u(9480),
                    i = u(7363),
                    s = u.n(i),
                    l = u(5563),
                    c = u(8018),
                    d = u(5108),
                    _ = u(4091),
                    m = u(552),
                    E = u(8326),
                    g = u(5855),
                    A = u(3591);
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const b = ({
                    data: e,
                    dataToCompare: t,
                    classes: u,
                    tankmanID: n = r.y$,
                    size: i = g.Ow.c24x24,
                    collapseType: b = g.t6.None,
                    isSkillTooltipEnabled: C = !1,
                    isAcceleratedTrainingVisible: h = !1,
                    isNewSkillAnimated: F = !1,
                    isEfficiencyVisible: f = !1,
                    isBonusSkillsVisible: v = !0,
                    tooltipsTargetId: D = R.invalid('resId'),
                    tooltipArgs: B,
                    blinkStyle: y,
                    children: k,
                }) => {
                    const w = e.majorSkills,
                        S = e.bonusSkills,
                        L = e.skillsEfficiency,
                        x = (null == t ? void 0 : t.skillsEfficiency) || L,
                        T = (0, c.Y4)(L),
                        N = void 0 !== t && t.skillsEfficiency !== L,
                        I = T !== c.H$.Normal || f || N,
                        O = null == t ? void 0 : t.majorSkills,
                        M = null == t ? void 0 : t.bonusSkills,
                        P = M || S,
                        H = o.lN(P),
                        W = v && P.length > 0,
                        j = F || void 0 !== t,
                        z = (null == O ? void 0 : O.length) === r.GT,
                        $ = (0, A.Ld)(b, P.length, I, T !== c.H$.Low && void 0 !== H && H.level < r.I),
                        G = {
                            size: i,
                            efficiencyState: T,
                            tooltipData: { targetId: D, isEnabled: C, tankmanID: n, args: B },
                        };
                    return s().createElement(
                        'div',
                        { className: a()(E.Z.base, E.Z[`base__${i}`], null == u ? void 0 : u.base) },
                        I &&
                            s().createElement(
                                d.r,
                                { blinkStyle: y, isEnabled: N && j },
                                s().createElement(l.A, {
                                    efficiencyValue: x,
                                    tankmanID: n,
                                    className: E.Z.efficiency,
                                    size: (0, A.h7)(i, W),
                                    targetId: D,
                                }),
                            ),
                        k,
                        s().createElement(
                            'div',
                            { className: E.Z.rows },
                            j
                                ? s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(
                                          _.s,
                                          p(
                                              {
                                                  skills: w,
                                                  possibleSkills: O,
                                                  blinkStyle: y,
                                                  isAcceleratedTrainingVisible: h,
                                                  isNewSkillAnimated: F,
                                                  isSkillsEfficiencyLearning: N,
                                              },
                                              G,
                                          ),
                                      ),
                                      W &&
                                          s().createElement(
                                              _.s,
                                              p(
                                                  {
                                                      skills: S,
                                                      skillType: g.W.Bonus,
                                                      possibleSkills: M,
                                                      className: E.Z.bonusRow,
                                                      collapseLayout: $,
                                                      blinkStyle: y,
                                                      isNewSkillAnimated: F,
                                                      isAllMajorSkillsLearned: z,
                                                  },
                                                  G,
                                              ),
                                          ),
                                  )
                                : s().createElement(
                                      s().Fragment,
                                      null,
                                      s().createElement(m.X, p({ skills: w, isAcceleratedTrainingVisible: h }, G)),
                                      W &&
                                          s().createElement(
                                              m.X,
                                              p(
                                                  {
                                                      skills: S,
                                                      skillType: g.W.Bonus,
                                                      className: E.Z.bonusRow,
                                                      collapseLayout: $,
                                                  },
                                                  G,
                                              ),
                                          ),
                                  ),
                        ),
                    );
                };
            },
            6177: (e, t, u) => {
                'use strict';
                u.d(t, { I: () => p });
                var n = u(6483),
                    a = u.n(n),
                    r = u(2686),
                    o = u(126),
                    i = u(6373),
                    s = u(3138),
                    l = u(3112),
                    c = u(7363),
                    d = u.n(c),
                    _ = u(7030),
                    m = u(2582),
                    E = u(7160),
                    g = u(5855),
                    A = u(1890);
                const p = d().memo(function ({ type: e, index: t, totalAmount: u, className: n, size: p }) {
                    const b = (0, c.useState)(m.yZ.Stop),
                        C = b[0],
                        h = b[1],
                        F = (0, l.V)(),
                        f =
                            p === g.Ow.c44x44
                                ? ((e) => ({
                                      width: 96,
                                      height: 96,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 2, columns: 21 },
                                      getChunkPath: (0, o.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                      ),
                                  }))(e)
                                : ((e) => ({
                                      width: 64,
                                      height: 64,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 1, columns: 24 },
                                      getChunkPath: (0, o.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                      ),
                                  }))(e),
                        v = (0, o.q)(f),
                        D = p === g.Ow.c44x44 ? 60 : 36,
                        B = (0, _.useSpring)(
                            () => ({
                                from: { x: 0 },
                                to: { x: s.O.view.remToPx(D) },
                                config: { duration: 300, easing: E.qb },
                                delay: 600 - 100 * t,
                            }),
                            [t, D, F],
                        )[0];
                    return (
                        (0, c.useEffect)(() => {
                            const e = setTimeout(() => h(m.yZ.Play), 100 * (u - 1) - 100 * t);
                            return () => clearTimeout(e);
                        }, [t, u]),
                        d().createElement(
                            i.i,
                            { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                            d().createElement(
                                _.animated.div,
                                { style: B, className: a()(A.Z.base, A.Z[`base__${p}`], n) },
                                d().createElement(
                                    'div',
                                    { className: A.Z.icon },
                                    d().createElement(r.At, {
                                        width: f.width,
                                        height: f.height,
                                        frameCount: f.frameCount,
                                        getImageSource: v,
                                        loop: !1,
                                        state: C,
                                        style: { transform: `scale(${F})` },
                                    }),
                                ),
                            ),
                        )
                    );
                });
            },
            9152: (e, t, u) => {
                'use strict';
                u.d(t, { E: () => c });
                var n = u(2686),
                    a = u(126),
                    r = u(7363),
                    o = u.n(r),
                    i = u(2582),
                    s = u(6253),
                    l = u(5147);
                const c = ({ type: e, state: t }) => {
                    const u = ((e, t) => ({
                            width: 24,
                            height: 24,
                            frameCount: 42,
                            chunk: { count: 1, columns: 42, rows: 1 },
                            getChunkPath: (0, a.V)(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                        }))(e, t),
                        c = (0, a.q)(u),
                        d = (0, r.useState)(i.yZ.Stop),
                        _ = d[0],
                        m = d[1];
                    return (
                        (0, r.useEffect)(() => {
                            const e = () => {
                                m(i.yZ.Play);
                            };
                            return (0, l.L)(e), () => (0, l.r)(e);
                        }, []),
                        o().createElement(n.At, {
                            width: u.width,
                            height: u.height,
                            frameCount: u.frameCount,
                            getImageSource: c,
                            loop: !1,
                            state: _,
                            onAnimationDone: () => {
                                m(i.yZ.Stop);
                            },
                            className: s.Z.base,
                        })
                    );
                };
            },
            5147: (e, t, u) => {
                'use strict';
                function n(e, t) {
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
                u.d(t, { L: () => s, r: () => l });
                const r = new Map();
                let o = null;
                const i = () => {
                        r.size
                            ? o ||
                              (o = window.setInterval(() => {
                                  for (var e, t = n(r.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : o && (clearInterval(o), (o = null));
                    },
                    s = (e) => {
                        r.set(e, e), i();
                    },
                    l = (e) => {
                        r.delete(e), i();
                    };
            },
            3413: (e, t, u) => {
                'use strict';
                u.d(t, { L: () => s, r: () => i });
                var n = u(7363),
                    a = u.n(n),
                    r = u(8147),
                    o = u(9108);
                let i;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(i || (i = {}));
                const s = a().memo(function ({
                    size: e,
                    skillsSignature: t,
                    animationType: u,
                    className: n,
                    children: s,
                }) {
                    return u === i.Scale
                        ? a().createElement(o.Y, { isEnabled: !0, className: n }, s)
                        : u === i.FadeIn
                          ? a().createElement(r.U, { size: e, key: t, className: n }, s)
                          : a().createElement('div', { className: n }, s);
                });
            },
            5108: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => o });
                var n = u(7363),
                    a = u.n(n),
                    r = u(7030);
                const o = a().memo(function ({ blinkStyle: e, isEnabled: t, children: u }) {
                    return a().createElement(r.animated.div, { style: t && e ? e : void 0 }, u);
                });
            },
            8147: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => l });
                var n = u(3112),
                    a = u(7363),
                    r = u.n(a),
                    o = u(7030),
                    i = u(7160),
                    s = u(5855);
                const l = ({ size: e, children: t, className: u }) => {
                    const a = (0, n.V)(),
                        l = e === s.Ow.c44x44 ? 48 : 26,
                        c = (0, o.useSpring)({
                            from: { opacity: 0, marginRight: -l * a },
                            to: [{ marginRight: 0 }, { opacity: 1 }],
                            config: { duration: 400, easing: i.Fs },
                            delay: 800,
                        });
                    return r().createElement(o.animated.div, { style: c, className: u }, t);
                };
            },
            7765: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3138),
                    o = u(3649),
                    i = u(7363),
                    s = u.n(i),
                    l = u(7030),
                    c = u(7160),
                    d = u(8110);
                const _ = s().memo(function ({ size: e, level: t, withSlideOut: u = !0 }) {
                    const n = (0, l.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        i = (0, l.useSpring)(() => ({
                            from: { x: r.O.view.remToPx(-5), opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            config: { duration: 300, easing: c.qb },
                            delay: 700,
                        }))[0],
                        _ = (0, l.useSpring)(
                            () => ({
                                from: { opacity: 0 },
                                to: [{ opacity: 1 }, { opacity: 0 }],
                                config: { duration: 150, easing: c.qb },
                            }),
                            [t],
                        )[0];
                    return s().createElement(
                        'div',
                        { className: a()(d.Z.base, d.Z[`base__${e}`]) },
                        s().createElement(
                            l.animated.div,
                            { style: u ? i : void 0, className: a()(d.Z.level, d.Z.level__skillLost) },
                            n.val.to((e) => (0, o.dL)(Math.floor(e))),
                        ),
                        s().createElement(
                            l.animated.div,
                            { style: u ? Object.assign({}, i, _) : _, className: a()(d.Z.level, d.Z.level__skillBlur) },
                            n.val.to((e) => (0, o.dL)(Math.floor(e))),
                        ),
                    );
                });
            },
            9108: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => i });
                var n = u(7363),
                    a = u.n(n),
                    r = u(7030),
                    o = u(7160);
                const i = a().memo(function ({ isEnabled: e, className: t, children: u }) {
                    const i = (0, r.useSpring)(() => ({ from: { scale: 1 } })),
                        s = i[0],
                        l = i[1];
                    return (
                        (0, n.useEffect)(() => {
                            e &&
                                l.start({
                                    from: { scale: 1 },
                                    to: [{ scale: 1.2 }, { scale: 1 }],
                                    delay: 200,
                                    config: { duration: 400, easing: o.Fs },
                                });
                        }, [e, l]),
                        a().createElement(r.animated.div, { style: e ? s : void 0, className: t }, u)
                    );
                });
            },
            4055: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => l });
                var n = u(3112),
                    a = u(7363),
                    r = u.n(a),
                    o = u(7030),
                    i = u(7160),
                    s = u(5855);
                const l = r().memo(function ({ size: e, className: t, children: u }) {
                    const a = e === s.Ow.c44x44 ? 48 : 26,
                        l = (0, n.V)(),
                        c = (0, o.useSpring)(
                            () => ({
                                from: { opacity: 1, marginRight: 0 },
                                to: [{ opacity: 0 }, { marginRight: -a * l }],
                                config: { duration: 400, easing: i.Fs },
                            }),
                            [l, a],
                        )[0];
                    return r().createElement(o.animated.div, { style: c, className: t }, u);
                });
            },
            4091: (e, t, u) => {
                'use strict';
                u.d(t, { s: () => C });
                var n = u(6483),
                    a = u.n(n),
                    r = u(2344),
                    o = u(9480),
                    i = u(4385),
                    s = u(3649),
                    l = u(7363),
                    c = u.n(l),
                    d = u(2857),
                    _ = u(8018),
                    m = u(5855),
                    E = u(3591),
                    g = u(6177),
                    A = u(7713),
                    p = u(9772),
                    b = u(4722);
                const C = ({
                    skills: e,
                    skillType: t = m.W.Major,
                    possibleSkills: u,
                    isAcceleratedTrainingVisible: n = !1,
                    collapseLayout: l = m.hj.None,
                    efficiencyState: C,
                    size: h,
                    tooltipData: F,
                    blinkStyle: f,
                    isSkillsEfficiencyLearning: v = !1,
                    isAllMajorSkillsLearned: D = !1,
                    isNewSkillAnimated: B = !1,
                    className: y,
                }) => {
                    const k = void 0 === u ? e : u,
                        w = (0, r.D9)(e),
                        S = (0, r.D9)(k),
                        L = w && o.lN(w),
                        x = o.lN(e),
                        T = (0, E.dv)(k),
                        N = o.lN(k),
                        I = u ? e.length - u.length : 0,
                        O = C !== _.H$.Low || v || (N && x && N.level !== x.level),
                        R = (0, E.Nn)(k);
                    return c().createElement(
                        'div',
                        { className: a()(b.Z.base, b.Z[`base__${h}`], b.Z[`base__collapse${(0, s.e)(l)}`], y) },
                        (0, E.oo)(e, w, k, S, (e, u, n) => {
                            const r = (0, E.mg)(e);
                            return c().createElement(A.k, {
                                key: n,
                                index: n,
                                skill: e,
                                skillState: r,
                                skillType: t,
                                previousSkill: S && o.U2(S, n),
                                skillAnimationType: u,
                                size: h,
                                skillsSignature: R,
                                efficiencyState: C,
                                tooltipData: F,
                                blinkStyle: f,
                                isNewSkillAnimated: B,
                                className: a()(
                                    b.Z.skill,
                                    b.Z[`skill__state${(0, s.e)(r)}`],
                                    e === N && b.Z.skill__last,
                                    e === T && b.Z.skill__lastLearnedSkill,
                                ),
                            });
                        }),
                        O &&
                            c().createElement(p.H, {
                                skillsAmountDiff: I,
                                size: h,
                                wasLearned: L && x && L.level !== x.level,
                                skillType: t,
                                isAllMajorSkillsLearned: D,
                                skill: x,
                                possibleSkill: N,
                                blinkStyle: f,
                                className: b.Z.level,
                            }),
                        n &&
                            c().createElement(d.L, {
                                classMix: b.Z.acceleratedTrainingIcon,
                                targetId: null == F ? void 0 : F.targetId,
                            }),
                        I > 0 &&
                            (0, i.K)(I, (e) =>
                                c().createElement(g.I, {
                                    key: e,
                                    index: e,
                                    totalAmount: I,
                                    type: t,
                                    className: b.Z.lostSkill,
                                    size: h,
                                }),
                            ),
                    );
                };
            },
            552: (e, t, u) => {
                'use strict';
                u.d(t, { X: () => C });
                var n = u(6483),
                    a = u.n(n),
                    r = u(771),
                    o = u(9480),
                    i = u(3649),
                    s = u(7363),
                    l = u.n(s),
                    c = u(2857),
                    d = u(8018),
                    _ = u(5855),
                    m = u(3591),
                    E = u(1606),
                    g = u(9561),
                    A = u(2202),
                    p = u(4722);
                function b() {
                    return (
                        (b =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        b.apply(this, arguments)
                    );
                }
                const C = ({
                    skills: e,
                    collapseLayout: t = _.hj.None,
                    skillType: u = _.W.Major,
                    efficiencyState: n,
                    size: s,
                    tooltipData: C,
                    className: h,
                    isAcceleratedTrainingVisible: F,
                }) => {
                    const f = o.lN(e),
                        v = (0, m.dv)(e),
                        D = n !== d.H$.Low && (null == f ? void 0 : f.level) !== r.I;
                    return l().createElement(
                        'div',
                        { className: a()(p.Z.base, p.Z[`base__${s}`], p.Z[`base__collapse${(0, i.e)(t)}`], h) },
                        o.UI(e, (e, t) => {
                            const r = (0, m.mg)(e);
                            return l().createElement(
                                A.O,
                                {
                                    key: t,
                                    skillIndex: t,
                                    name: e.name,
                                    roleName: e.roleName,
                                    customName: e.customName,
                                    level: e.level,
                                    tooltipData: C,
                                    skillType: u,
                                    className: a()(
                                        p.Z.skill,
                                        p.Z[`skill__state${(0, i.e)(r)}`],
                                        e === f && p.Z.skill__last,
                                        e === v && p.Z.skill__lastLearnedSkill,
                                    ),
                                },
                                l().createElement(E.U, b({ size: s, type: u, efficiencyState: n, skillState: r }, e)),
                            );
                        }),
                        D && f && l().createElement(g.T, { skillLevel: f.level, className: p.Z.level }),
                        F &&
                            l().createElement(c.L, {
                                classMix: p.Z.acceleratedTrainingIcon,
                                targetId: null == C ? void 0 : C.targetId,
                            }),
                    );
                };
            },
            9772: (e, t, u) => {
                'use strict';
                u.d(t, { H: () => d });
                var n = u(771),
                    a = u(7363),
                    r = u.n(a),
                    o = u(5855),
                    i = u(5108),
                    s = u(7765),
                    l = u(9108),
                    c = u(9561);
                const d = ({
                    skillsAmountDiff: e,
                    size: t,
                    skillType: u,
                    wasLearned: a,
                    isAllMajorSkillsLearned: d,
                    skill: _,
                    possibleSkill: m,
                    blinkStyle: E,
                    className: g,
                }) => {
                    const A = m || _,
                        p = void 0 !== _ && void 0 !== m ? m.level - _.level : 0,
                        b = e > 0,
                        C = e < 0 || p > 0;
                    return !A ||
                        (A.level === n.I && 0 === p) ||
                        ((null == m ? void 0 : m.level) === n.I && u === o.W.Bonus && p > 0 && !d)
                        ? null
                        : b || (p < 0 && 0 === e)
                          ? r().createElement(s.G, { size: t, level: A.level, withSlideOut: b })
                          : r().createElement(
                                l.Y,
                                { isEnabled: Boolean(a) },
                                r().createElement(
                                    i.r,
                                    { blinkStyle: E, isEnabled: C },
                                    r().createElement(c.T, { skillLevel: A.level, isHighlighted: C, className: g }),
                                ),
                            );
                };
            },
            9561: (e, t, u) => {
                'use strict';
                u.d(t, { T: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3649),
                    o = u(7363),
                    i = u.n(o),
                    s = u(3591),
                    l = u(872);
                const c = ({ skillLevel: e, isHighlighted: t = !1, className: u }) =>
                    i().createElement(
                        'div',
                        { className: a()(l.Z.base, t && l.Z.base__highlighted, u) },
                        (0, r.dL)(e > 0 && e < 0.01 ? 0.01 : (0, s.iv)(e)),
                    );
            },
            2202: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => s });
                var n = u(3415),
                    a = u(7363),
                    r = u.n(a),
                    o = u(3591);
                const i = ['className', 'children'];
                const s = (e) => {
                    let t = e.className,
                        u = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, i);
                    return r().createElement(n.l, { tooltipArgs: (0, o.iR)(a), className: t }, u);
                };
            },
            7713: (e, t, u) => {
                'use strict';
                u.d(t, { k: () => g });
                var n = u(771),
                    a = u(7363),
                    r = u.n(a),
                    o = u(5855),
                    i = u(9152),
                    s = u(3413),
                    l = u(5108),
                    c = u(4055),
                    d = u(2202),
                    _ = u(1606);
                function m() {
                    return (
                        (m =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        m.apply(this, arguments)
                    );
                }
                const E = (e, t) => (e ? s.r.Scale : t ? s.r.FadeIn : s.r.None),
                    g = ({
                        index: e,
                        skill: t,
                        previousSkill: u,
                        skillState: a,
                        skillType: g,
                        size: A,
                        efficiencyState: p,
                        tooltipData: b,
                        skillsSignature: C,
                        blinkStyle: h,
                        isNewSkillAnimated: F = !1,
                        skillAnimationType: f = o.Qm.None,
                        className: v,
                    }) => {
                        const D = f === o.Qm.Blink || f === o.Qm.SlideOutAndBlink,
                            B = f === o.Qm.SlideOutAndBlink || f === o.Qm.SlideOut,
                            y = f === o.Qm.FadeIn,
                            k = {
                                skillIndex: e,
                                name: t.name,
                                roleName: t.roleName,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: b,
                                skillType: g,
                            };
                        return F && t.name === n.jw && A === o.Ow.c24x24
                            ? r().createElement(
                                  d.O,
                                  m({}, k, { className: v }),
                                  r().createElement(i.E, { type: g, state: a }),
                              )
                            : r().createElement(
                                  r().Fragment,
                                  null,
                                  u &&
                                      B &&
                                      r().createElement(
                                          c.w,
                                          { size: A, className: v, key: u.name },
                                          r().createElement(
                                              l.r,
                                              { blinkStyle: h, isEnabled: D },
                                              r().createElement(
                                                  _.U,
                                                  m({ size: A, type: g, efficiencyState: p, skillState: a }, u),
                                              ),
                                          ),
                                      ),
                                  r().createElement(
                                      s.L,
                                      {
                                          size: A,
                                          skillsSignature: C,
                                          className: v,
                                          animationType: E(f === o.Qm.ScaleUp, y),
                                      },
                                      r().createElement(
                                          d.O,
                                          k,
                                          r().createElement(
                                              l.r,
                                              { blinkStyle: h, isEnabled: D },
                                              r().createElement(
                                                  _.U,
                                                  m({ size: A, type: g, efficiencyState: p, skillState: a }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    };
            },
            1606: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => A });
                var n = u(6483),
                    a = u.n(n),
                    r = u(4150),
                    o = u(771),
                    i = u(3649),
                    s = u(7363),
                    l = u.n(s),
                    c = u(2768),
                    d = u(8018),
                    _ = u(5855),
                    m = u(3591),
                    E = u(699);
                const g = { [_.Ow.c24x24]: c.F.c22x22, [_.Ow.c44x44]: c.F.c52x52 },
                    A = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        type: n,
                        iconName: s,
                        name: A,
                        skillState: p,
                        battleBooster: b,
                        className: C,
                    }) => {
                        const h = b !== r.S.None,
                            F = (0, m.Ot)(A, p, h, t, u),
                            f = (!h && u === d.H$.Untrained) || t,
                            v = s === o.jw;
                        return l().createElement(
                            'div',
                            {
                                className: a()(
                                    E.Z.base,
                                    E.Z[`base__type${(0, i.e)(n)}`],
                                    E.Z[`base__state${(0, i.e)(p)}`],
                                    E.Z[`base__border${(0, i.e)(F)}`],
                                    E.Z[`base__${e}`],
                                    f && E.Z.base__disabled,
                                    C,
                                ),
                            },
                            l().createElement('div', {
                                className: E.Z.background,
                                style:
                                    n === _.W.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${F}')`,
                                          }
                                        : void 0,
                            }),
                            v && p === _.Lm.Learned && l().createElement('div', { className: E.Z.newSkillHighLight }),
                            l().createElement(c.y, { iconName: s, size: g[e], className: E.Z.icon }),
                            f && l().createElement('div', { className: E.Z.disabledOverlay }),
                        );
                    };
            },
            5855: (e, t, u) => {
                'use strict';
                let n, a, r, o, i, s, l;
                u.d(t, { Lm: () => l, Ow: () => i, Qm: () => a, W: () => s, hj: () => r, t6: () => n, u0: () => o }),
                    (function (e) {
                        (e.None = 'none'),
                            (e.Default = 'default'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap');
                    })(n || (n = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(a || (a = {})),
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
                    })(r || (r = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(o || (o = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(i || (i = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(s || (s = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(l || (l = {}));
            },
            3591: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Ld: () => g,
                    Nn: () => l,
                    Ot: () => _,
                    dv: () => d,
                    h7: () => E,
                    iR: () => m,
                    iv: () => C,
                    mg: () => c,
                    oo: () => b,
                });
                var n = u(2603),
                    a = u(771),
                    r = u(9480),
                    o = u(5563),
                    i = u(8018),
                    s = u(5855);
                const l = (e) => r.UI(e, (e) => e.name).join(),
                    c = (e) => (e.level < a.I ? s.Lm.Learning : s.Lm.Learned),
                    d = (e) => r.dF(e, (e) => e.level === a.I),
                    _ = (e, t, u, n, r = i.H$.Normal) =>
                        e === a.jw
                            ? s.u0.LightYellow
                            : r === i.H$.Untrained || n
                              ? t === s.Lm.Learning
                                  ? s.u0.Yellow
                                  : s.u0.Grey
                              : r === i.H$.Low
                                ? u
                                    ? s.u0.Grey
                                    : s.u0.Red
                                : t === s.Lm.Learning
                                  ? s.u0.Yellow
                                  : s.u0.Grey,
                    m = ({
                        name: e,
                        roleName: t,
                        level: u,
                        customName: r,
                        skillType: o,
                        skillIndex: i,
                        tooltipData: l,
                    }) => {
                        const c = { targetId: l.targetId, isEnabled: l.isEnabled };
                        return e === a.jw
                            ? o === s.W.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: l.tankmanID, skillIndex: i }, l.args),
                                      },
                                      c,
                                  )
                                : Object.assign(
                                      {
                                          header: R.strings.crew.matrix.skillTooltip.bonus.available.header(),
                                          body: R.strings.crew.matrix.skillTooltip.bonus.available.text(),
                                      },
                                      c,
                                  )
                            : Object.assign(
                                  {
                                      contentId:
                                          R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                              'resId',
                                          ),
                                      args: Object.assign(
                                          {
                                              tooltipId: n.HZ,
                                              tankmanID: l.tankmanID,
                                              skillName: e,
                                              roleName: t,
                                              isBonus: o === s.W.Bonus,
                                              level: u,
                                              customName: r,
                                              skillIndex: i,
                                          },
                                          l.args,
                                      ),
                                  },
                                  c,
                              );
                    },
                    E = (e, t) => (e === s.Ow.c44x44 ? o.r.Large : t ? o.r.Big : o.r.Normal),
                    g = (e, t, u, n) => {
                        if (t !== a.vA) return s.hj.None;
                        switch (e) {
                            case s.t6.Default:
                                if (u && n) return s.hj.NoMargins;
                                break;
                            case s.t6.Overlap:
                                if (u) return n ? s.hj.Overlap : s.hj.ReducedMargins;
                                if (n) return s.hj.OnlyLearningOverlap;
                                break;
                            case s.t6.ExtraOverlap:
                                return u && n
                                    ? s.hj.ExtraOverlapWithLevelAndEfficiency
                                    : u
                                      ? s.hj.ExtraOverlapWithEfficiency
                                      : n
                                        ? s.hj.ExtraOverlapWithLevel
                                        : s.hj.ExtraOverlap;
                        }
                        return s.hj.None;
                    },
                    A = (e, t) => {
                        const u = r.U2(e, t);
                        return null == u ? void 0 : u.name;
                    },
                    p = (e, t) => {
                        const u = r.U2(e, t);
                        return null == u ? void 0 : u.level;
                    },
                    b = (e, t, u, n, o) => {
                        if (!n || !t) return r.UI(u, (e, t) => o(e, s.Qm.None, t));
                        const i = new Map(r.UI(t, ({ name: e, level: t }) => [e, t])),
                            l = new Map(r.UI(e, ({ name: e, level: t }) => [e, t]));
                        let c = !1;
                        return r.UI(u, (r, d) => {
                            const _ = r.name,
                                m = r.level,
                                E = _ === a.jw,
                                g = A(e, d),
                                b = E ? p(e, d) : l.get(_),
                                C = E ? p(t, d) : i.get(_),
                                h = A(u, d - 1),
                                F = A(n, d),
                                f = A(n, d + 1);
                            let v = s.Qm.None;
                            return (
                                c || _ !== f || h === F || E || g !== a.jw
                                    ? E && d === u.length - 1 && c
                                        ? (v = s.Qm.FadeIn)
                                        : (!E && !l.has(_)) || (void 0 === g && E) || (b !== m && m === a.I)
                                          ? (v = s.Qm.Blink)
                                          : C !== b && (v = s.Qm.ScaleUp)
                                    : ((c = !0), (v = l.has(_) ? s.Qm.SlideOut : s.Qm.SlideOutAndBlink)),
                                o(r, v, d)
                            );
                        });
                    },
                    C = (e, t = 2) => {
                        const u = Math.pow(10, t);
                        return e % 1 > 0 ? Math.round(e * u) / u : e;
                    };
            },
            7077: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => c, U: () => l });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3649),
                    o = u(7363),
                    i = u.n(o),
                    s = u(3938);
                let l;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(l || (l = {}));
                const c = (0, o.memo)(function ({ name: e, size: t = l.c100x60, classMix: u, isSkin: n = !1 }) {
                    let o = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                    n && (o = o.$dyn('crewSkins'));
                    const c = o.$dyn((0, r.BN)(e));
                    return (
                        c ||
                            console.error(
                                `Can't find ${(0, r.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${n ? '.crewSkins' : ''}`,
                            ),
                        i().createElement('div', {
                            style: { backgroundImage: `url(${c})` },
                            className: a()(s.Z.base, s.Z[`base__${t}`], u),
                        })
                    );
                });
            },
            9631: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => m });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3457),
                    o = u(2106),
                    i = u(9987),
                    s = u(7363),
                    l = u.n(s),
                    c = u(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
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
                const m = l().memo(function (e) {
                    let t = e.isActive,
                        u = e.counter,
                        n = e.className,
                        s = e.children,
                        m = e.type,
                        E = void 0 === m ? o.L.secondary : m,
                        g = e.size,
                        A = void 0 === g ? o.q.small : g,
                        p = e.hasIndicator,
                        b = void 0 === p || p,
                        C = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, d);
                    return l().createElement(
                        'div',
                        { className: a()(c.Z.base, n, t && c.Z.base__active) },
                        l().createElement(r.u5, _({ type: E, size: A, mixClass: c.Z.button }, C), s),
                        l().createElement('div', { className: c.Z.overlay }),
                        b && l().createElement('div', { className: c.Z.indicator }),
                        Boolean(u) &&
                            l().createElement(
                                'div',
                                { className: c.Z.counter },
                                l().createElement(i.A, { value: u, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, u) => {
                'use strict';
                u.d(t, { BH: () => o, Fs: () => i, ei: () => n, qb: () => a, to: () => r });
                const n = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    a = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    r = (e) => (e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2),
                    o = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    i = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { Ds: () => l, Gc: () => o, H$: () => i, Y4: () => s, gO: () => r, wP: () => a });
                var n = u(771);
                u(3649);
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
                const o = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
                let i;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(i || (i = {}));
                const s = (e) => (e === n.sU ? i.Untrained : e < n.yb ? i.Low : i.Normal),
                    l = function () {
                        let e, t;
                        const u = function (u, n) {
                            e && clearTimeout(e),
                                (t = u),
                                (e = setTimeout(function () {
                                    t.call(this), clearTimeout(e);
                                }, n));
                        };
                        return (
                            (u.cancel = function () {
                                e && clearTimeout(e);
                            }),
                            u
                        );
                    };
            },
            8706: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => Ht });
                var n = u(4029),
                    a = u(7363),
                    r = u.n(a);
                let o;
                !(function (e) {
                    (e[(e.Default = 0)] = 'Default'), (e[(e.Compact = 1)] = 'Compact');
                })(o || (o = {}));
                var i = u(5415),
                    s = u(3403),
                    l = u(3215),
                    c = u(4598),
                    d = u(9480),
                    _ = u(3946);
                const m = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    E = (0, l.q3)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'selectedSlotIdx',
                                        'isDisabled',
                                        'hasDog',
                                        'vehicleName',
                                        'vehicleType',
                                        'currentLayoutID',
                                        'previousLayoutID',
                                        'isCrewLocked',
                                        'nation',
                                        'slotSizeMode',
                                    ]),
                                    {
                                        slots: e.array('slots', []),
                                        buttonsBar: e.object('buttonsBar'),
                                        crewOperations: e.object('buttonsBar.crewOperations'),
                                        crewBooks: e.object('buttonsBar.crewBooks'),
                                        acceleratedTraining: e.object('buttonsBar.acceleratedTraining'),
                                        wotPlus: e.object('buttonsBar.wotPlus'),
                                    },
                                ),
                                u = (0, _.Om)(
                                    () =>
                                        d.UI(t.slots.get(), (e) =>
                                            Object.assign({}, e, {
                                                roles: d.UI(e.roles, c.yR),
                                                tankman: Object.assign({}, e.tankman, {
                                                    roles: d.UI(e.tankman.roles, c.yR),
                                                    skills: {
                                                        skillsEfficiency: e.tankman.skills.skillsEfficiency,
                                                        majorSkills: d.UI(e.tankman.skills.majorSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                        bonusSkills: d.UI(e.tankman.skills.bonusSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                    },
                                                    possibleSkills: {
                                                        skillsEfficiency: e.tankman.possibleSkills.skillsEfficiency,
                                                        majorSkills: d.UI(e.tankman.possibleSkills.majorSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                        bonusSkills: d.UI(e.tankman.possibleSkills.bonusSkills, (e) =>
                                                            Object.assign({}, e),
                                                        ),
                                                    },
                                                }),
                                            }),
                                        ),
                                    { equals: c.jv },
                                ),
                                n = (0, _.Om)(() => Boolean(d.sE(u(), (e) => -1 === e.tankman.tankmanID))),
                                a = (0, _.Om)(() => 1 === t.slots.get().length),
                                r = (0, _.Om)((e) => t.selectedSlotIdx.get() === e),
                                o = (0, _.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                i = (0, _.Om)((e) => {
                                    var t;
                                    return null == (t = d.U2(u(), e)) ? void 0 : t.tankman;
                                }),
                                s = (0, _.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (u = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: m.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isCurrentLayoutSkillsTraining:
                                                e === R.views.lobby.crew.SkillsTrainingView('resId'),
                                            isCurrentLayoutMentorAssigment:
                                                e === R.views.lobby.crew.MentorAssigmentView('resId'),
                                            isPreviousLayoutHangar: u === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: m.includes(u),
                                            isPreviousLayoutQuickTraining:
                                                u === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                u === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: u === R.views.lobby.crew.BarracksView('resId'),
                                            isPreviousLayoutMentorAssigment:
                                                u === R.views.lobby.crew.MentorAssigmentView('resId'),
                                        }
                                    );
                                    var e, u;
                                }),
                                l = (0, _.Om)(() => {
                                    const e = s();
                                    return !(
                                        a() ||
                                        e.isCurrentLayoutHangar ||
                                        e.isCurrentLayoutQuickTraining ||
                                        e.isCurrentLayoutSkillsTraining ||
                                        e.isCurrentLayoutMentorAssigment
                                    );
                                }),
                                E = (0, _.Om)(() => !a() && t.buttonsBar.get().isVisible);
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: u,
                                    isSlotSelected: r,
                                    isAnySlotSelected: o,
                                    getSlotTankman: i,
                                    isAnyEmptySlots: n,
                                    isTankmanMode: a,
                                    isChangeCrewButtonVisible: l,
                                    isButtonBarVisible: E,
                                    getLayoutInfo: s,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onSlotClick: e.createCallback((e, t) => ({ slotIdx: e, tankmanID: t }), 'onSlotClick'),
                            onChangeCrewClick: e.createCallback(
                                (e, t) => ({ slotIdx: e, tankmanID: t }),
                                'onChangeCrewClick',
                            ),
                            onCrewBooksClick: e.createCallbackNoArgs('buttonsBar.onCrewBooksClick'),
                            onAcceleratedTrainingClick: e.createCallbackNoArgs('buttonsBar.onAcceleratedTrainingClick'),
                            onWotPlusClick: e.createCallbackNoArgs('buttonsBar.onWotPlusClick'),
                            onDogClick: e.createCallbackNoArgs('onDogClick'),
                            onDogMoreInfoClick: e.createCallbackNoArgs('onDogMoreInfoClick'),
                        }),
                    ),
                    g = E[0],
                    A = E[1];
                var p = u(6483),
                    b = u.n(p),
                    C = u(6373),
                    h = u(2056);
                let F;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(F || (F = {}));
                const f = 'ButtonsBar_base_9c',
                    v = 'ButtonsBar_button_d1',
                    D = 'ButtonsBar_button__crewOperaions_70',
                    B = 'ButtonsBar_button__crewBooks_b4',
                    y = 'ButtonsBar_button__toggle_64';
                var k = u(3457),
                    w = u(9987),
                    S = u(3649);
                const L = 'CrewBookButton_base_da',
                    x = 'CrewBookButton_button_ee',
                    T = 'CrewBookButton_icon_11',
                    N = 'CrewBookButton_discount_6b',
                    I = 'CrewBookButton_counter_5d',
                    O = (0, s.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = A(),
                            n = u.model,
                            a = u.controls,
                            o = n.crewBooks.get(),
                            i = a.onCrewBooksClick,
                            s = o.isDisabled || t;
                        return r().createElement(
                            C.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, S.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: o.totalAmount,
                                }),
                            },
                            r().createElement(
                                'div',
                                { id: 'crew_book_button', className: b()(L, e) },
                                r().createElement(
                                    k.u5,
                                    { type: k.L$.primary, mixClass: x, disabled: s, onClick: i },
                                    r().createElement('div', { className: T }),
                                ),
                                !s &&
                                    '0' !== o.newAmount &&
                                    r().createElement(
                                        'div',
                                        { className: I },
                                        r().createElement(w.A, { value: o.newAmount }),
                                    ),
                                !s && o.hasDiscount && r().createElement('div', { className: N }),
                            ),
                        );
                    });
                var M = u(3616);
                const P = ['children'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const W = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, P);
                        return r().createElement(
                            M.Z,
                            H(
                                {
                                    decoratorId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                    contentId:
                                        R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent(
                                            'resId',
                                        ),
                                },
                                u,
                            ),
                            t,
                        );
                    },
                    j = 'CrewOperationsButton_base_e3',
                    z = 'CrewOperationsButton_button_8e',
                    $ = 'CrewOperationsButton_icon_0c',
                    G = 'CrewOperationsButton_autoReturnIcon_f0',
                    U = (0, s.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = A().model.crewOperations.get();
                        return r().createElement(
                            'div',
                            { id: 'crew_operations_button', className: b()(j, e) },
                            r().createElement(
                                W,
                                { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), isEnabled: !t },
                                r().createElement(
                                    C.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(
                                            k.u5,
                                            { type: k.L$.primary, mixClass: z, disabled: t },
                                            r().createElement('div', { className: $ }),
                                        ),
                                        u.isAutoReturnOn && r().createElement('div', { className: G }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Z = u(9631);
                const V = 'CrewToggleButton_base_03',
                    X = 'CrewToggleButton_button_89',
                    q = 'CrewToggleButton_iconContainer_f9',
                    Y = 'CrewToggleButton_icon_a7';
                let K;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(K || (K = {}));
                const Q = (0, a.memo)(({ type: e, state: t, isDisabled: u, onClick: n, classMix: o }) => {
                        const i = (0, a.useMemo)(() => {
                            const u = t === F.Disabled ? F.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${u})`,
                            };
                        }, [e, t]);
                        return r().createElement(
                            'div',
                            { className: b()(V, o) },
                            r().createElement(
                                Z.C,
                                {
                                    type: k.L$.primary,
                                    isActive: t === F.On,
                                    disabled: u || t === F.Disabled,
                                    className: X,
                                    onClick: n,
                                },
                                r().createElement(
                                    'div',
                                    { className: q },
                                    r().createElement('div', { className: Y, style: i }),
                                ),
                            ),
                        );
                    }),
                    J = {
                        [F.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [F.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [F.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [F.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    ee = (0, s.Pi)(({ isWidgetDisabled: e }) => {
                        const t = A(),
                            u = t.model,
                            n = t.controls,
                            a = u.acceleratedTraining.get(),
                            o = u.wotPlus.get(),
                            i = n.onAcceleratedTrainingClick,
                            s = n.onWotPlusClick,
                            l = J[a.state];
                        return r().createElement(
                            'div',
                            { className: f },
                            r().createElement(U, { classMix: b()(v, D), isWidgetDisabled: e }),
                            r().createElement(O, { classMix: b()(v, B), isWidgetDisabled: e }),
                            a.state !== F.Hidden &&
                                r().createElement(
                                    C.i,
                                    { header: l.header(), body: l.body() },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(Q, {
                                            type: K.AcceleratedTraining,
                                            state: a.state,
                                            isDisabled: e || a.isDisabled,
                                            onClick: i,
                                            classMix: b()(v, y),
                                        }),
                                    ),
                                ),
                            o.state !== F.Hidden &&
                                r().createElement(
                                    h.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(Q, {
                                            type: K.WotPlus,
                                            state: o.state,
                                            isDisabled: e || o.isDisabled,
                                            onClick: s,
                                            classMix: b()(v, y),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    te = 'CrewWidgetApp_base_cc',
                    ue = 'CrewWidgetApp_buttonsBar_e5',
                    ne = 'CrewWidgetApp_slotsList_ee';
                var ae = u(7727),
                    re = u(7030),
                    oe = u(7160),
                    ie = u(8018),
                    se = u(7077);
                const le = 'WidgetTankmanIcon_icon_0f',
                    ce = 'WidgetTankmanIcon_icon__small_24',
                    de = 'WidgetTankmanIcon_icon__cropped_bd',
                    _e = ({ name: e, isSkin: t = !1, isCropped: u = !1, slotSize: n, className: a }) => {
                        const o = (0, i.GS)().mediaSize,
                            s = 'small' === n || o < i.cJ.Large;
                        return r().createElement(se.G, {
                            name: e,
                            size: s && u ? se.U.c100x60 : se.U.c158x118,
                            isSkin: t,
                            classMix: b()(le, s && u && ce, !s && u && de, a),
                        });
                    },
                    me = {
                        base: 'Layer_base_ff',
                        base__visible: 'Layer_base__visible_fb',
                        content: 'Layer_content_f3',
                        content__hoverGlow: 'Layer_content__hoverGlow_9a',
                        content__selectedGlow: 'Layer_content__selectedGlow_10',
                        content__hoverGlowHigh: 'Layer_content__hoverGlowHigh_8d',
                        content__selectedGlowHigh: 'Layer_content__selectedGlowHigh_9d',
                        content__disabledLayer: 'Layer_content__disabledLayer_04',
                        content__disabledLayerHigh: 'Layer_content__disabledLayerHigh_cd',
                        content__selectedTankmanHighlight: 'Layer_content__selectedTankmanHighlight_58',
                        content__selectedTankmanHighlight2: 'Layer_content__selectedTankmanHighlight2_9b',
                        content__untrainedTankmanHighlight: 'Layer_content__untrainedTankmanHighlight_3a',
                        content__selectedTankmanHighlightHigh: 'Layer_content__selectedTankmanHighlightHigh_bb',
                        content__selectedTankmanHighlightHigh2: 'Layer_content__selectedTankmanHighlightHigh2_20',
                        content__untrainedTankmanHighlightHigh: 'Layer_content__untrainedTankmanHighlightHigh_1a',
                        content__tankmanSlotHover: 'Layer_content__tankmanSlotHover_a9',
                        content__tankmanSlotHoverHigh: 'Layer_content__tankmanSlotHoverHigh_85',
                        base__big: 'Layer_base__big_78',
                    };
                let Ee;
                !(function (e) {
                    (e.HoverGlow = 'hoverGlow'),
                        (e.SelectedGlow = 'selectedGlow'),
                        (e.Disabled = 'disabledLayer'),
                        (e.SelectedHighlight = 'selectedTankmanHighlight'),
                        (e.SelectedHighlight2 = 'selectedTankmanHighlight2'),
                        (e.TankmanSlotHover = 'tankmanSlotHover'),
                        (e.UntrainedTankmanHighlight = 'untrainedTankmanHighlight');
                })(Ee || (Ee = {}));
                const ge = ({ type: e, slotSize: t, isHigh: u, className: n, isVisible: a = !0 }) => {
                        const o = u ? e + 'High' : e;
                        return r().createElement(
                            'div',
                            { className: b()(me.base, me[`base__${t}`], a && me.base__visible, n) },
                            r().createElement('div', {
                                className: b()(me.content, me[`content__${o}`]),
                                style: { backgroundImage: `url(R.images.gui.maps.icons.crewWidget.slot.${t}.${o})` },
                            }),
                        );
                    },
                    Ae = {
                        base: 'BaseSlot_base_97',
                        base__hovered: 'BaseSlot_base__hovered_61',
                        base__inactive: 'BaseSlot_base__inactive_7e',
                        content: 'BaseSlot_content_93',
                        content__high: 'BaseSlot_content__high_81',
                        base__big: 'BaseSlot_base__big_8d',
                        delimiter: 'BaseSlot_delimiter_f8',
                        layer: 'BaseSlot_layer_cb',
                    },
                    pe = ({
                        isHigh: e,
                        slotSize: t,
                        onClick: u,
                        children: n,
                        isSelected: o = !1,
                        isDisabled: i,
                        isEnabledForMouse: s,
                        isEmpty: l = !1,
                        layoutInfo: c,
                    }) => {
                        const d = (0, a.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            E = _ && (!o || (!l && c.isCurrentLayoutMemberChange)),
                            g = E && !l && !c.isCurrentLayoutHangar;
                        return r().createElement(
                            'div',
                            {
                                className: b()(
                                    Ae.base,
                                    Ae[`base__${t}`],
                                    (_ || o) && !c.isCurrentLayoutHangar && Ae.base__hovered,
                                    !s && Ae.base__inactive,
                                ),
                                onClick: u,
                                onMouseEnter: () => {
                                    s && (ae.$.playHighlight(), m(!0));
                                },
                                onMouseLeave: () => {
                                    m(!1);
                                },
                            },
                            r().createElement(
                                'div',
                                { className: b()(Ae.content, e && Ae.content__high) },
                                !c.isCurrentLayoutMemberChange &&
                                    r().createElement(ge, {
                                        type: Ee.SelectedGlow,
                                        slotSize: t,
                                        isHigh: e,
                                        isVisible: o,
                                        className: Ae.layer,
                                    }),
                                r().createElement(ge, {
                                    type: Ee.HoverGlow,
                                    slotSize: t,
                                    isHigh: e,
                                    isVisible: g,
                                    className: Ae.layer,
                                }),
                                r().createElement(ge, {
                                    type: Ee.TankmanSlotHover,
                                    slotSize: t,
                                    isHigh: e,
                                    isVisible: E,
                                    className: Ae.layer,
                                }),
                                i &&
                                    r().createElement(ge, {
                                        type: Ee.Disabled,
                                        slotSize: t,
                                        isHigh: e,
                                        isVisible: !0,
                                        className: Ae.layer,
                                    }),
                                n,
                                r().createElement('div', { className: Ae.delimiter }),
                            ),
                        );
                    },
                    be = ({
                        startState: e,
                        endState: t,
                        layoutInfo: u,
                        isPaused: n = !1,
                        children: o,
                        className: i,
                        isTankmanMode: s,
                    }) => {
                        const l = (0, re.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: oe.qb }, pause: n }),
                                [n],
                            )[0],
                            c = (0, a.useMemo)(
                                () =>
                                    u.isCurrentLayoutHangar ||
                                    u.isCurrentLayoutQuickTraining ||
                                    u.isCurrentLayoutMentorAssigment ||
                                    u.isCurrentLayoutSkillsTraining ||
                                    s
                                        ? e
                                        : (!u.isPreviousLayoutHangar && !u.isPreviousLayoutBarrack) || n
                                          ? t
                                          : l,
                                [u, n, l, e, t, s],
                            );
                        return r().createElement(re.animated.div, { className: i, style: c }, o);
                    },
                    Ce = 'DogSlot_base_8f',
                    he = 'DogSlot_icon_ba',
                    Fe = 'DogSlot_container_63',
                    fe = 'DogSlot_roleAndName_c9',
                    ve = 'DogSlot_role_5c',
                    De = 'DogSlot_name_9c',
                    Be = 'DogSlot_btnDetails_b7',
                    ye = { transform: 'translateX(0rem)' },
                    ke = (0, s.Pi)(({ isDisabled: e, layoutInfo: t, slotSize: u }) => {
                        const n = A(),
                            o = n.model,
                            i = n.controls,
                            s = o.nation.get(),
                            l = i.onDogMoreInfoClick,
                            c = (0, a.useCallback)(() => {
                                !e && (0, ae.G)(ie.gO.RUDY);
                            }, [e]),
                            d = (0, a.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && l();
                                },
                                [l, e],
                            ),
                            _ = (0, re.useSpring)(
                                () => ({
                                    from: ye,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: oe.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(s);
                        return r().createElement(
                            C.i,
                            { header: m.header(), body: m.body() },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    pe,
                                    {
                                        onClick: c,
                                        isDisabled: e,
                                        isEnabledForMouse: !1,
                                        layoutInfo: t,
                                        isHigh: !1,
                                        slotSize: u,
                                    },
                                    r().createElement(
                                        be,
                                        {
                                            startState: ye,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            className: Ce,
                                            isTankmanMode: !1,
                                        },
                                        r().createElement(
                                            re.animated.div,
                                            { style: _ },
                                            r().createElement(_e, {
                                                name: 'ussr_dog_1',
                                                isCropped: !0,
                                                className: he,
                                                slotSize: u,
                                            }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: Fe },
                                            r().createElement(
                                                'div',
                                                { className: fe },
                                                r().createElement('div', { className: ve }),
                                                r().createElement(
                                                    'div',
                                                    { className: De },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(s).name(),
                                                ),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: Be },
                                                r().createElement(
                                                    k.u5,
                                                    { onClick: d },
                                                    R.strings.crew_widget.btnDetails(),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    });
                let we;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(we || (we = {}));
                var Se = u(9916);
                const Le = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: o = !0,
                        onMouseDown: i,
                    }) => {
                        const s = (0, a.useCallback)(() => {
                                (0, Se.c9)(Se.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    ae.$.playYes();
                            }, [r, t, u, n]),
                            l = (0, a.useCallback)(() => {
                                (0, Se.c9)(Se.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, n]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    i && i(e), ((e) => e.button === we.RIGHT)(e) && s();
                                },
                                [i, s],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    xe = ['children'];
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                const Ne = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, xe);
                        return r().createElement(
                            Le,
                            Te({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Ie = 'ChangeCrewButton_base_0f',
                    Oe = 'ChangeCrewButton_base__inactive_77',
                    Re = 'ChangeCrewButton_normalState_07',
                    Me = 'ChangeCrewButton_normalState__hide_db',
                    Pe = 'ChangeCrewButton_hoverState_68',
                    He = 'ChangeCrewButton_hoverState__show_89',
                    We = ({ isSelected: e, isLocked: t, mainRole: u, isFemale: n }) => {
                        const o = (0, a.useState)(!1),
                            i = o[0],
                            s = o[1],
                            l = (0, a.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, S.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, ie.Gc)(u, n, ie.wP.Objective),
                                              }),
                                          ],
                                [t, n, u],
                            ),
                            c = l[0],
                            d = l[1];
                        return r().createElement(
                            C.i,
                            {
                                header: c,
                                body: d,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: b()(Ie, (t || e) && Oe),
                                    onMouseEnter: () => {
                                        t || e || (ae.$.playHighlight(), s(!0));
                                    },
                                    onMouseLeave: () => {
                                        s(!1);
                                    },
                                },
                                r().createElement('div', { className: b()(Re, i && Me) }),
                                r().createElement('div', { className: b()(Pe, (e || i) && He) }),
                            ),
                        );
                    },
                    je = 'CrewSlot_base_ac',
                    ze = 'CrewSlot_changeCrew_02',
                    $e = 'CrewSlot_content_5b',
                    Ge = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ue = 'CrewSlot_layer_49';
                var Ze = u(7078),
                    Ve = u(2603),
                    Xe = u(771);
                const qe = 'SpecializationAndName_base_ef',
                    Ye = 'SpecializationAndName_roleWrapper_87',
                    Ke = 'SpecializationAndName_role_55',
                    Qe = 'SpecializationAndName_role__withGap_35',
                    Je = 'SpecializationAndName_name_aa',
                    et = 'SpecializationAndName_name__highlighted_1b',
                    tt = ({ roles: e, tankmanID: t = Xe.y$, slotIdx: u, name: n, hasPostProgression: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: qe },
                            r().createElement(
                                Ze.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ve.rs, slotIdx: u, tankmanID: t },
                                },
                                r().createElement(
                                    'div',
                                    { className: Ye },
                                    d.UI(e, (e, t) =>
                                        r().createElement('div', {
                                            key: `role__${e}`,
                                            className: b()(Ke, t > 0 && Qe),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: b()(Je, a && et) }, n),
                        ),
                    ut = {
                        base: 'EmptySlotContent_base_77',
                        content: 'EmptySlotContent_content_54',
                        content__high: 'EmptySlotContent_content__high_fa',
                        base__big: 'EmptySlotContent_base__big_96',
                        tankmanIcon: 'EmptySlotContent_tankmanIcon_07',
                        icon: 'EmptySlotContent_icon_a8',
                        iconContainer: 'EmptySlotContent_iconContainer_25',
                        specialization: 'EmptySlotContent_specialization_1f',
                        specialization__disabled: 'EmptySlotContent_specialization__disabled_3d',
                        vehicle: 'EmptySlotContent_vehicle_55',
                    },
                    nt = { transform: 'translateX(0rem)', opacity: 1 },
                    at = { transform: 'translateX(-70rem)', opacity: 0 },
                    rt = (0, a.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: u,
                            vehicleType: n,
                            isDisabled: o,
                            isSelected: i,
                            slotIdx: s,
                            blinkStyle: l,
                            qtTankmanIconStyle: c,
                            isHigh: _,
                            slotSize: m,
                        }) => {
                            const E = (0, re.useSpring)(
                                    () => ({
                                        from: nt,
                                        to: at,
                                        config: { duration: 200, easing: oe.ei },
                                        immediate: !0,
                                        pause: i,
                                    }),
                                    [i],
                                ),
                                g = E[0],
                                A = E[1],
                                p = (0, a.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || A.start({ reset: !0, reverse: !0 });
                                }, [A, t]),
                                C = d.U2(e, 0) || '',
                                h = R.strings.crew_widget.vehicleWithName.$dyn((0, S.BN)(n)),
                                F = (0, S.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(C),
                                });
                            return r().createElement(
                                'div',
                                { className: b()(ut.base, ut[`base__${m}`]), onMouseEnter: p, onMouseLeave: p },
                                r().createElement(
                                    'div',
                                    { className: b()(ut.content, _ && ut.content__high) },
                                    r().createElement(
                                        'div',
                                        { className: ut.tankmanIcon },
                                        r().createElement(
                                            re.animated.div,
                                            { className: ut.iconContainer, style: c },
                                            r().createElement(_e, {
                                                name: 'empty',
                                                className: ut.icon,
                                                isCropped: !_,
                                                slotSize: m,
                                            }),
                                            r().createElement(
                                                re.animated.div,
                                                { className: ut.iconContainer, style: o ? void 0 : l },
                                                r().createElement(_e, {
                                                    name: 'emptyRed',
                                                    className: ut.icon,
                                                    isCropped: !_,
                                                    slotSize: m,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: b()(ut.specialization, o && ut.specialization__disabled) },
                                        r().createElement(tt, { slotIdx: s, roles: e, name: F }),
                                    ),
                                    r().createElement(
                                        re.animated.div,
                                        { className: ut.vehicle, style: i ? void 0 : g },
                                        (0, S.uF)(h, { name: u }),
                                    ),
                                ),
                            );
                        },
                    );
                var ot = u(8617),
                    it = u(5855);
                const st = {
                        base: 'TankmanInfo_base_69',
                        base__disabled: 'TankmanInfo_base__disabled_36',
                        tankmanTooltipHoverArea: 'TankmanInfo_tankmanTooltipHoverArea_9b',
                        specialization: 'TankmanInfo_specialization_77',
                        specialization__withBonusSkills: 'TankmanInfo_specialization__withBonusSkills_b1',
                        base__big: 'TankmanInfo_base__big_e5',
                        skillsContainer: 'TankmanInfo_skillsContainer_17',
                        skillsContainer__withBonusSkills: 'TankmanInfo_skillsContainer__withBonusSkills_83',
                    },
                    lt = (e, t) => (e ? it.t6.None : 'small' === t ? it.t6.ExtraOverlap : it.t6.Overlap),
                    ct = ({ slotIdx: e, tankman: t, isDisabled: u, layoutInfo: n, blinkStyle: a, slotSize: o }) => {
                        const i = t.skills.bonusSkills.length > 0;
                        return r().createElement(
                            'div',
                            { className: b()(st.base, u && st.base__disabled, st[`base__${o}`]) },
                            r().createElement(
                                Ze.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ve.v$, tankmanID: t.tankmanID },
                                },
                                r().createElement('div', { className: st.tankmanTooltipHoverArea }),
                            ),
                            r().createElement(
                                'div',
                                { className: b()(st.specialization, i && st.specialization__withBonusSkills) },
                                r().createElement(tt, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                    hasPostProgression: t.hasPostProgression,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: b()(st.skillsContainer, i && st.skillsContainer__withBonusSkills) },
                                r().createElement(ot.n, {
                                    tankmanID: t.tankmanID,
                                    size: it.Ow.c24x24,
                                    data: t.skills,
                                    dataToCompare:
                                        n.isCurrentLayoutQuickTraining ||
                                        n.isCurrentLayoutSkillsTraining ||
                                        n.isCurrentLayoutMentorAssigment
                                            ? t.possibleSkills
                                            : void 0,
                                    tooltipsTargetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isSkillTooltipEnabled: !0,
                                    blinkStyle: a,
                                    isNewSkillAnimated: n.isCurrentLayoutHangar,
                                    isAcceleratedTrainingVisible:
                                        !n.isCurrentLayoutQuickTraining && -1 !== t.tankmanID && t.isLessMastered,
                                    collapseType: lt(n.isCurrentLayoutHangar, o),
                                }),
                            ),
                        );
                    },
                    dt = 'QuickTrainingTankmanSlotContent_base_8d',
                    _t = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    mt = 'QuickTrainingTankmanSlotContent_iconContainer_f1',
                    Et = 'QuickTrainingTankmanSlotContent_icon_7c',
                    gt = 'QuickTrainingTankmanSlotContent_layer_10',
                    At = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    pt = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    bt = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Ct = { opacity: 0 },
                    ht = [{ opacity: 1 }, { opacity: 0 }],
                    Ft = (0, a.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: u,
                            qtTankmanIconStyle: n,
                            layoutInfo: o,
                            isDisabled: i,
                            slotSize: s,
                        }) => {
                            const l = (0, a.useRef)(t.lastSkillLevelFull),
                                c = (0, a.useRef)(t.skills.majorSkills.length),
                                d = (0, re.useSpring)(() => ({ from: At })),
                                _ = d[0],
                                m = d[1],
                                E = (0, re.useSpring)(() => ({ from: Ct })),
                                g = E[0],
                                A = E[1],
                                p = (0, a.useRef)(!1);
                            return (
                                (0, a.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? p.current ||
                                          (m.start({
                                              from: At,
                                              to: pt,
                                              reverse: false,
                                              config: { duration: 300, easing: oe.BH },
                                          }),
                                          (p.current = !0))
                                        : p.current
                                          ? (t.skills.majorSkills.length > c.current || t.lastSkillLevelFull > l.current
                                                ? (m.start({
                                                      from: pt,
                                                      to: bt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: oe.BH },
                                                  }),
                                                  (l.current = t.lastSkillLevelFull),
                                                  (c.current = t.skills.majorSkills.length),
                                                  A.start({
                                                      from: Ct,
                                                      to: ht,
                                                      delay: 200,
                                                      config: { duration: 500, easing: oe.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (p.current = !1))
                                          : ((l.current = t.lastSkillLevelFull),
                                            (c.current = t.skills.majorSkills.length));
                                }, [m, A, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.majorSkills.length]),
                                r().createElement(
                                    'div',
                                    { className: dt },
                                    r().createElement(
                                        re.animated.div,
                                        { style: g },
                                        r().createElement(ge, {
                                            type: Ee.SelectedHighlight,
                                            slotSize: s,
                                            isHigh: t.skills.bonusSkills.length > 1,
                                            className: gt,
                                        }),
                                    ),
                                    r().createElement(
                                        re.animated.div,
                                        { className: mt, style: n },
                                        r().createElement(_e, {
                                            name: t.icon,
                                            isSkin: t.isInSkin,
                                            isCropped: 0 === t.skills.bonusSkills.length,
                                            slotSize: s,
                                            className: Et,
                                        }),
                                    ),
                                    r().createElement(re.animated.div, { className: _t, style: _ }),
                                    r().createElement(ct, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: o,
                                        blinkStyle: u,
                                        isDisabled: i,
                                        slotSize: s,
                                    }),
                                )
                            );
                        },
                        (e, t) => {
                            const u = e.tankman,
                                n = t.tankman;
                            return (
                                u.hasPossibleProgress === n.hasPossibleProgress &&
                                ((e, t) => {
                                    if (e.length !== t.length) return !1;
                                    const u = e.length;
                                    for (let r = 0; r < u; r++) {
                                        var n, a;
                                        if (
                                            (null == (n = d.U2(e, r)) ? void 0 : n.name) !==
                                            (null == (a = d.U2(t, r)) ? void 0 : a.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(u.skills.majorSkills, n.skills.majorSkills) &&
                                u.lastSkillLevelFull === n.lastSkillLevelFull &&
                                u.possibleSkillsAmount === n.possibleSkillsAmount &&
                                u.lastPossibleSkillLevel === n.lastPossibleSkillLevel &&
                                u.skillsEfficiency === n.skillsEfficiency &&
                                u.possibleSkillsEfficiency === n.possibleSkillsEfficiency
                            );
                        },
                    ),
                    ft = 'TankmanSlotContent_base_00',
                    vt = 'TankmanSlotContent_icon_ef',
                    Dt = (0, a.memo)(
                        ({ slotIdx: e, tankman: t, layoutInfo: u, isDisabled: n, blinkStyle: a, slotSize: o }) =>
                            r().createElement(
                                'div',
                                { className: ft },
                                r().createElement(_e, {
                                    name: t.icon,
                                    isCropped: 0 === t.skills.bonusSkills.length,
                                    isSkin: t.isInSkin,
                                    slotSize: o,
                                    className: vt,
                                }),
                                r().createElement(ct, {
                                    slotIdx: e,
                                    tankman: t,
                                    layoutInfo: u,
                                    isDisabled: n,
                                    blinkStyle: a,
                                    slotSize: o,
                                }),
                            ),
                    ),
                    Bt = (0, a.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: u,
                            layoutInfo: n,
                            vehicleName: a,
                            vehicleType: o,
                            isDisabled: i,
                            isSelected: s,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                            slotSize: _,
                            isHigh: m,
                        }) =>
                            -1 === u.tankmanID
                                ? r().createElement(rt, {
                                      roles: t,
                                      layoutInfo: n,
                                      vehicleName: a,
                                      vehicleType: o,
                                      isDisabled: i,
                                      isSelected: s,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                      isHigh: m,
                                      slotSize: _,
                                  })
                                : n.isCurrentLayoutQuickTraining || n.isCurrentLayoutMentorAssigment
                                  ? r().createElement(Ft, {
                                        slotIdx: e,
                                        tankman: u,
                                        blinkStyle: l,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: n,
                                        isDisabled: i,
                                        slotSize: _,
                                    })
                                  : r().createElement(Dt, {
                                        slotIdx: e,
                                        tankman: u,
                                        layoutInfo: n,
                                        isDisabled: i,
                                        blinkStyle: l,
                                        slotSize: _,
                                    }),
                    ),
                    yt = { transform: 'translateX(0rem)' },
                    kt = { transform: 'translateX(41rem)' },
                    wt = { opacity: 0 },
                    St = { opacity: 1 },
                    Lt = (0, s.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: u,
                            layoutInfo: n,
                            isSelected: o,
                            isDisabled: i,
                            blinkSlotStyle: s,
                            blinkTankmanStyle: l,
                            qtTankmanIconStyle: c,
                            slotSize: _,
                            shouldShowAssistHint: m,
                        }) => {
                            const E = A(),
                                g = E.model,
                                p = E.controls,
                                C = p.onSlotClick,
                                h = p.onChangeCrewClick,
                                F = g.computes.isChangeCrewButtonVisible(),
                                f = g.computes.isTankmanMode(),
                                v = g.isCrewLocked.get(),
                                D = g.vehicleName.get(),
                                B = g.vehicleType.get(),
                                y = -1 === u.tankmanID ? t.length > 1 : u.skills.bonusSkills.length > 0,
                                k = !i && u.isInteractive && (!o || n.isCurrentLayoutMemberChange),
                                w = (0, a.useCallback)(() => {
                                    k && !f && ((0, ae.G)(R.sounds.yes1()), C(e, u.tankmanID));
                                }, [e, u, C, f, k]),
                                S = (0, a.useCallback)(
                                    (t) => {
                                        t.stopPropagation(),
                                            v ||
                                                (o && n.isCurrentLayoutMemberChange) ||
                                                ((0, ae.G)(R.sounds.yes1()), h(e, u.tankmanID));
                                    },
                                    [e, u, h, v, o, n.isCurrentLayoutMemberChange],
                                ),
                                L = (0, a.useMemo)(() => ({ tankmanID: u.tankmanID, slotIdx: e }), [u, e]);
                            return r().createElement(
                                Ne,
                                {
                                    args: L,
                                    isEnabled:
                                        !i && !n.isCurrentLayoutSkillsTraining && !n.isCurrentLayoutMentorAssigment,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        pe,
                                        {
                                            isHigh: y,
                                            onClick: w,
                                            isSelected: o,
                                            isDisabled: i,
                                            isEmpty: -1 === u.tankmanID,
                                            layoutInfo: n,
                                            isEnabledForMouse: k,
                                            slotSize: _,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: je, id: m ? 'crew_assist_hint_widget_candidate' : void 0 },
                                            u.hasWarning &&
                                                r().createElement(ge, {
                                                    type: Ee.UntrainedTankmanHighlight,
                                                    slotSize: _,
                                                    isHigh: y,
                                                    className: Ue,
                                                }),
                                            o &&
                                                r().createElement(ge, {
                                                    type: f ? Ee.SelectedHighlight2 : Ee.SelectedHighlight,
                                                    slotSize: _,
                                                    isHigh: y,
                                                    className: Ue,
                                                }),
                                            r().createElement(
                                                be,
                                                {
                                                    startState: yt,
                                                    endState: kt,
                                                    layoutInfo: n,
                                                    isPaused: !F,
                                                    className: b()($e, F && Ge),
                                                    isTankmanMode: f,
                                                },
                                                r().createElement(Bt, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: u,
                                                    layoutInfo: n,
                                                    isDisabled: i,
                                                    vehicleName: D,
                                                    vehicleType: B,
                                                    blinkSlotStyle: s,
                                                    blinkTankmanStyle: l,
                                                    qtTankmanIconStyle: c,
                                                    isSelected: o,
                                                    slotSize: _,
                                                    isHigh: y,
                                                }),
                                            ),
                                            F &&
                                                r().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    r().createElement(
                                                        be,
                                                        {
                                                            startState: wt,
                                                            endState: St,
                                                            layoutInfo: n,
                                                            className: ze,
                                                            isTankmanMode: f,
                                                        },
                                                        r().createElement(We, {
                                                            isSelected: n.isCurrentLayoutMemberChange && o,
                                                            isLocked: v,
                                                            mainRole: d.U2(t, 0) || '',
                                                            isFemale: -1 !== u.tankmanID && u.isFemale,
                                                        }),
                                                    ),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    xt = 'SlotsList_base_5f',
                    Tt = 'SlotsList_base__hangar_8b';
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                const It = { transform: new re.SpringValue('translateX(0rem)') },
                    Ot = { transform: new re.SpringValue('translateX(15rem)') },
                    Rt = (0, s.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: u, slotSize: n }) => {
                        const o = A().model,
                            i = o.computes.isAnyEmptySlots(),
                            s = (0, re.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: oe.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            l = s[0],
                            c = s[1];
                        (0, a.useEffect)(() => {
                            i ? c.resume() : c.pause();
                        }, [c, i]);
                        const d = (0, re.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: oe.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            _ = d[0],
                            m = d[1];
                        (0, a.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ||
                            e.isCurrentLayoutSkillsTraining ||
                            e.isCurrentLayoutMentorAssigment
                                ? m.resume()
                                : m.pause();
                        }, [m, e]);
                        const E = (0, re.useSpring)(() => ({
                                from: It,
                                to: Ot,
                                delay: 200,
                                config: { duration: 300, easing: oe.ei },
                            }))[0],
                            g = (0, a.useMemo)(
                                () =>
                                    e.isCurrentLayoutQuickTraining || e.isCurrentLayoutMentorAssigment
                                        ? e.isPreviousLayoutQuickTraining || e.isPreviousLayoutMentorAssigment
                                            ? Ot
                                            : E
                                        : It,
                                [e, E],
                            ),
                            p = o.computes.getSlots().findIndex((e) => e.tankman.wotPlusAssistHintCandidate);
                        return r().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: b()(xt, e.isCurrentLayoutHangar && Tt, u) },
                            o.computes
                                .getSlots()
                                .map((u, a) =>
                                    r().createElement(
                                        Lt,
                                        Nt({}, u, {
                                            layoutInfo: e,
                                            key: `slot_${a}_${u.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (o.computes.isSlotSelected(u.slotIdx) || o.computes.isTankmanMode()),
                                            isDisabled: t,
                                            blinkSlotStyle: _,
                                            blinkTankmanStyle: l,
                                            qtTankmanIconStyle: g,
                                            slotSize: n,
                                            shouldShowAssistHint: p === a,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Mt = (0, s.Pi)(() => {
                        const e = A().model,
                            t = e.isDisabled.get(),
                            u = e.hasDog.get(),
                            n = e.computes.getLayoutInfo(),
                            a = (0, i.GS)().mediaSize,
                            s = ((e, t) =>
                                e === o.Compact
                                    ? t < i.cJ.ExtraLarge
                                        ? 'small'
                                        : 'big'
                                    : t < i.cJ.Large
                                      ? 'small'
                                      : 'big')(e.slotSizeMode.get(), a);
                        return r().createElement(
                            'div',
                            { className: te },
                            e.computes.isButtonBarVisible() &&
                                r().createElement(
                                    'div',
                                    { className: ue },
                                    r().createElement(ee, { isWidgetDisabled: t }),
                                ),
                            r().createElement(Rt, { layoutInfo: n, isWidgetDisabled: t, className: ne, slotSize: s }),
                            u && r().createElement(ke, { layoutInfo: n, isDisabled: t, slotSize: s }),
                        );
                    }),
                    Pt = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    Ht = (0, a.memo)(() =>
                        r().createElement(
                            n.z,
                            null,
                            r().createElement(g, { options: Pt }, r().createElement(Mt, null)),
                        ),
                    );
            },
            4150: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { S: () => n }),
                    (function (e) {
                        (e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved');
                    })(n || (n = {}));
            },
            2603: (e, t, u) => {
                'use strict';
                u.d(t, { Br: () => r, HZ: () => n, M4: () => o, rs: () => i, v$: () => a });
                const n = 'crewPerkGf',
                    a = 'tankman',
                    r = 'skillsEfficiency',
                    o = 'crewSkillUntrained',
                    i = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, u) => {
                'use strict';
                u.d(t, { GT: () => s, I: () => r, jw: () => o, sU: () => n, vA: () => i, y$: () => l, yb: () => a });
                const n = -1,
                    a = 1,
                    r = 100,
                    o = 'new_skill',
                    i = 9,
                    s = 6,
                    l = -1;
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
            8055: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            4769: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            8699: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'AcceleratedTrainingIcon_base_4f', icon: 'AcceleratedTrainingIcon_icon_45' };
            },
            130: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
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
            8326: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'Skills_base_ec',
                    efficiency: 'Skills_efficiency_d0',
                    base__c_44x44: 'Skills_base__c_44x44_c0',
                    rows: 'Skills_rows_e8',
                    bonusRow: 'Skills_bonusRow_4a',
                };
            },
            1890: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'AnimatedLostSkill_base_55',
                    base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                    base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                    icon: 'AnimatedLostSkill_icon_d4',
                };
            },
            6253: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'AnimatedNewSkill_base_0f' };
            },
            8110: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
                    base: 'LostLevelAnimation_base_f6',
                    level: 'LostLevelAnimation_level_f0',
                    level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                    level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                    base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                    base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                };
            },
            4722: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
                };
            },
            872: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = { base: 'SkillLevel_base_d2', base__highlighted: 'SkillLevel_base__highlighted_e3' };
            },
            699: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
            4723: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => n });
                const n = {
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
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, n] = deferred[s], r = !0, o = 0; o < t.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = u();
                        void 0 !== i && (e = i);
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
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 2037),
        (() => {
            var e = { 2037: 0, 8003: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, o, i] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(7213));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
