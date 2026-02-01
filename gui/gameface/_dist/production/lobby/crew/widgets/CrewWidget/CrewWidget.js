(() => {
    var __webpack_modules__ = {
            3457: (e, t, u) => {
                'use strict';
                u.d(t, { L$: () => o.L, u5: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7727),
                    i = u(7363),
                    s = u.n(i),
                    l = u(6880),
                    o = u(2106);
                const c = ({
                    children: e,
                    size: t,
                    disabled: u,
                    mixClass: n,
                    onMouseEnter: c,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: _,
                    onMouseLeave: E,
                    onClick: g,
                    isFocused: A = !1,
                    type: b = o.L.primary,
                    soundHover: h = 'highlight',
                    soundClick: v = 'play',
                }) => {
                    const F = (0, i.useRef)(null),
                        p = (0, i.useState)(A),
                        C = p[0],
                        D = p[1],
                        w = (0, i.useState)(!1),
                        f = w[0],
                        B = w[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                C && null !== F.current && !F.current.contains(e.target) && D(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, i.useEffect)(() => {
                            D(A);
                        }, [A]),
                        s().createElement(
                            'div',
                            {
                                ref: F,
                                className: a()(
                                    l.Z.base,
                                    l.Z[`base__${b}`],
                                    u && l.Z.base__disabled,
                                    t && l.Z[`base__${t}`],
                                    C && l.Z.base__focus,
                                    f && l.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    u || (null !== h && (0, r.G)(h), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    u || (_ && _(e), B(!1));
                                },
                                onMouseDown: function (e) {
                                    u ||
                                        (null !== v && (0, r.G)(v),
                                        m && m(e),
                                        A && (u || (F.current && (F.current.focus(), D(!0)))),
                                        B(!0));
                                },
                                onMouseLeave: function (e) {
                                    u || (E && E(e), B(!1));
                                },
                                onClick: function (e) {
                                    u || (g && g(e));
                                },
                            },
                            b !== o.L.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: l.Z.back }),
                                    s().createElement('span', { className: l.Z.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: a()(l.Z.state, l.Z.state__default) },
                                s().createElement('span', { className: l.Z.stateDisabled }),
                                s().createElement('span', { className: l.Z.stateHighlightHover }),
                                s().createElement('span', { className: l.Z.stateHighlightActive }),
                            ),
                            s().createElement(
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
                let n, a;
                (u.d(t, { L: () => n, q: () => a }),
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
                    })(a || (a = {})));
            },
            2686: (e, t, u) => {
                'use strict';
                u.d(t, { At: () => l });
                var n = u(7363),
                    a = u.n(n),
                    r = u(3458);
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
                const l = (0, n.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            l = e.getImageSource,
                            m = e.frameCount,
                            _ = e.onAnimate,
                            E = e.frameTime,
                            g = void 0 === E ? r.O.FRAME_TIME : E,
                            A = e.initialFrameIndex,
                            b = void 0 === A ? r.O.INITIAL_FRAME_INDEX : A,
                            h = e.lastFrameIndex,
                            v = void 0 === h ? m - 1 : h,
                            F = e.loop,
                            p = void 0 === F ? r.O.LOOP : F,
                            C = e.state,
                            D = void 0 === C ? r.O.STATE : C,
                            w = e.onAnimationDone,
                            f = e.onAnimationComplete,
                            B = e.poster,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, i);
                        const k = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = k.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y));
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = d(b, v, l),
                                                t = o(b, v),
                                                n = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == _ || _(a, r),
                                                          u(r),
                                                          a === v &&
                                                              (null == f || f(),
                                                              p || (null == w || w(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, g);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === b && B ? { path: B, x: 0, y: 0 } : l(b),
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
                            }, [g, l, b, v, p, _, f, w, B, D]),
                            a().createElement('canvas', s({}, y, { width: t, height: u, ref: k }))
                        );
                    }),
                    o = (e, t) => {
                        let u = e;
                        return () => {
                            const n = u;
                            return ((u += 1), u > t && (u = e), n);
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
                                ((a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, c(e, t)));
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
                            i = Math.trunc(a / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / u)), x: r, y: i };
                    };
                }
                function a(e) {
                    return (t) => `${e}${t}`;
                }
                u.d(t, { V: () => a, q: () => n });
            },
            2902: (e, t, u) => {
                'use strict';
                (u(7363), u(3458));
            },
            9987: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => c });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    i = u.n(r),
                    s = u(9734);
                const l = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
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
                const c = (e) => {
                    let t = e.value,
                        u = e.isEmpty,
                        n = e.className,
                        r = e.size,
                        c = void 0 === r ? 'normal' : r,
                        d = e.fadeInAnimation,
                        m = void 0 !== d && d,
                        _ = e.hide,
                        E = void 0 !== _ && _,
                        g = e.maximumNumber,
                        A = void 0 === g ? 99 : g,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, l);
                    const h = u ? null : t,
                        v = 'string' == typeof h;
                    if ((h && !v && h < 0) || 0 === h) return null;
                    const F = h && !v && h > A,
                        p = a()(
                            s.Z.base,
                            s.Z[`base__${c}`],
                            m && s.Z.base__animated,
                            E && s.Z.base__hidden,
                            !h && s.Z.base__pattern,
                            u && s.Z.base__empty,
                            n,
                        );
                    return i().createElement(
                        'div',
                        o({ className: p }, b),
                        i().createElement('div', { className: s.Z.bg }),
                        i().createElement('div', { className: s.Z.pattern }),
                        i().createElement(
                            'div',
                            { className: a()(s.Z.value, v && s.Z.value__text) },
                            F ? A : h,
                            F && i().createElement('span', { className: s.Z.plus }, '+'),
                        ),
                    );
                };
            },
            3495: (e, t, u) => {
                'use strict';
                u.d(t, { Q: () => s, Y: () => o });
                var n = u(3138),
                    a = u(7363),
                    r = u(1043),
                    i = u(5262);
                function s(e = n.O.client.getSize('rem')) {
                    const t = e.width,
                        u = e.height;
                    return Object.assign({ width: t, height: u }, (0, i.T)(t, u, r.j));
                }
                const l = s(),
                    o = (0, a.createContext)(l);
            },
            1039: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => s });
                var n = u(3138),
                    a = u(7363),
                    r = u.n(a),
                    i = u(3495);
                const s = ({ children: e }) => {
                    const t = (0, a.useState)(i.Q),
                        u = t[0],
                        s = t[1],
                        l = (0, a.useState)(!1),
                        o = l[0],
                        c = l[1];
                    return (
                        (0, a.useLayoutEffect)(() => {
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
                        r().createElement(i.Y.Provider, { value: u }, o && e)
                    );
                };
            },
            6010: (e, t, u) => {
                'use strict';
                var n = u(7363),
                    a = u(7382),
                    r = u(3495);
                const i = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, i);
                    const s = (0, n.useContext)(r.Y),
                        l = s.extraLarge,
                        o = s.large,
                        c = s.medium,
                        d = s.small,
                        m = s.extraSmall,
                        _ = s.extraLargeWidth,
                        E = s.largeWidth,
                        g = s.mediumWidth,
                        A = s.smallWidth,
                        b = s.extraSmallWidth,
                        h = s.extraLargeHeight,
                        v = s.largeHeight,
                        F = s.mediumHeight,
                        p = s.smallHeight,
                        C = s.extraSmallHeight,
                        D = { extraLarge: h, large: v, medium: F, small: p, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && l) return t;
                        if (u.large && o) return t;
                        if (u.medium && c) return t;
                        if (u.small && d) return t;
                        if (u.extraSmall && m) return t;
                    } else {
                        if (u.extraLargeWidth && _) return (0, a.H)(t, u, D);
                        if (u.largeWidth && E) return (0, a.H)(t, u, D);
                        if (u.mediumWidth && g) return (0, a.H)(t, u, D);
                        if (u.smallWidth && A) return (0, a.H)(t, u, D);
                        if (u.extraSmallWidth && b) return (0, a.H)(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && h) return t;
                            if (u.largeHeight && v) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && p) return t;
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
                (u.d(t, { T: () => a }),
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
            1037: (e, t, u) => {
                'use strict';
                u.d(t, { IC: () => n });
                var n,
                    a = u(6483),
                    r = u.n(a),
                    i = u(6373),
                    s = u(3138),
                    l = u(2039),
                    o = u(5099),
                    c = u(7727),
                    d = u(9916),
                    m = u(7363),
                    _ = u.n(m),
                    E = u(4769),
                    g = u(8475);
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(n || (n = {}));
                const A = ['__left', '__right', '__top', '__bottom'];
                (0, m.forwardRef)(
                    (
                        {
                            children: e,
                            disableAutoSizeUpdate: t,
                            onOutsideClick: u,
                            className: n,
                            customStyles: a = {},
                        },
                        b,
                    ) => {
                        const h = (0, m.useRef)(null),
                            v = (0, m.useRef)(null),
                            F = (0, m.useRef)(null),
                            p = (0, m.useState)(window.decorator && window.decorator.directionType),
                            C = p[0],
                            D = p[1],
                            w = (0, m.useCallback)(() => {
                                (c.$.playClick(), s.O.view.sendEvent.close());
                            }, []),
                            f = (0, m.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            B = r()(E.Z.arrow, E.Z[`arrow${A[C]}`]);
                        (0, l.b)(
                            () => (
                                s.O.client.events.mouse.enableOutside(),
                                s.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (u ? u() : s.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const y = (0, m.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === h.current || t === F.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = s.O.client.getMouseGlobalPosition(),
                                            t = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            u =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (t && !u) return;
                                    }
                                    u ? u() : s.O.view.sendEvent.close('popover');
                                },
                                [h, F, u],
                            ),
                            k = (0, m.useCallback)(() => {
                                D(window.decorator.directionType);
                            }, []),
                            S = (0, g.w)(),
                            L = (0, m.useCallback)(() => {
                                const e = v.current;
                                if (e)
                                    return (
                                        s.O.view.freezeTextureBeforeResize(),
                                        S.run(() => {
                                            const t = e.scrollWidth,
                                                u = e.scrollHeight;
                                            (s.O.view.resize(t, u), k());
                                        })
                                    );
                            }, [S, k]);
                        return (
                            (0, m.useImperativeHandle)(
                                b,
                                () => ({ updateSize: L, updateDirection: k, elementRef: v }),
                                [L, k],
                            ),
                            (0, l.b)(() => {
                                s.O.view.setInputPaddingsRem(58);
                            }),
                            (0, m.useEffect)(() => {
                                document.addEventListener('mousedown', y, { capture: !0 });
                                const e = (0, o.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => L()),
                                    () => {
                                        (e.cancel(), document.removeEventListener('mousedown', y));
                                    }
                                );
                            }, [L, y, t]),
                            _().createElement(
                                'div',
                                { className: r()(E.Z.base, n), ref: v },
                                _().createElement(
                                    'div',
                                    { className: E.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: E.Z.content, ref: h },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                i.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: E.Z.closeBtn,
                                                    onClick: w,
                                                    onMouseEnter: f,
                                                    ref: F,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: B, style: a.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                var n = u(1037),
                    a = u(9916),
                    r = u(7363),
                    i = u.n(r);
                const s = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
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
                const o = (e) => {
                    let t = e.contentId,
                        u = e.decoratorId,
                        o = e.direction,
                        c = void 0 === o ? n.IC.Top : o,
                        d = e.targetId,
                        m = e.args,
                        _ = e.onClick,
                        E = e.children,
                        g = e.isEnabled,
                        A = void 0 === g || g,
                        b = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, s);
                    const h = (0, r.useRef)(null),
                        v = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            h.current && (0, a.P3)(t, c, h.current, u, d, m);
                        }, [t, c, m, u, d]);
                    return i().createElement(
                        'div',
                        l(
                            {
                                ref: h,
                                onMouseDown:
                                    ((F = E.props.onClick),
                                    (e) => {
                                        A && (v(), _ && _(e), F && F(e));
                                    }),
                            },
                            b,
                        ),
                        E,
                    );
                    var F;
                };
            },
            7078: (e, t, u) => {
                'use strict';
                u.d(t, { t: () => l });
                var n = u(7363),
                    a = u.n(n),
                    r = u(2056);
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
                const l = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
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
                    a = u.n(n),
                    r = u(7078),
                    i = u(6373),
                    s = u(2056);
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
                const o = ({ children: e, tooltipArgs: t, className: u }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: u }, e);
                    if (t.header || t.body) return a().createElement(i.i, t, n);
                    const o = t.contentId;
                    return o ? a().createElement(s.u, l({}, t, { contentId: o }), n) : a().createElement(r.t, t, n);
                };
            },
            6373: (e, t, u) => {
                'use strict';
                u.d(t, { i: () => o });
                var n = u(2056),
                    a = u(7363),
                    r = u.n(a);
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
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    o = (e) => {
                        let t = e.children,
                            u = e.body,
                            o = e.header,
                            c = e.note,
                            d = e.alert,
                            m = e.args,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, i);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, m, { body: u, header: o, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, u, o, c, m]);
                        return r().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((g = null == m ? void 0 : m.hasHtmlContent),
                                        g ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
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
            2056: (e, t, u) => {
                'use strict';
                u.d(t, { u: () => o });
                var n = u(7902),
                    a = u(9916),
                    r = u(7363);
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
                const l = (e, t, u = {}, n = 0) => {
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
                    o = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            o = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onClick,
                            _ = e.ignoreShowDelay,
                            E = void 0 !== _ && _,
                            g = e.ignoreMouseClick,
                            A = void 0 !== g && g,
                            b = e.decoratorId,
                            h = void 0 === b ? 0 : b,
                            v = e.isEnabled,
                            F = void 0 === v || v,
                            p = e.targetId,
                            C = void 0 === p ? 0 : p,
                            D = e.onShow,
                            w = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, i);
                        const B = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => C || (0, n.F)().resId, [C]),
                            k = (0, r.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (l(u, h, { isMouseEvent: !0, on: !0, arguments: s(a) }, y),
                                    D && D(),
                                    (B.current.isVisible = !0));
                            }, [u, h, a, y, D]),
                            S = (0, r.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        l(u, h, { on: !1 }, y),
                                        B.current.isVisible && w && w(),
                                        (B.current.isVisible = !1));
                                }
                            }, [u, h, y, w]),
                            L = (0, r.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(B.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === F && S();
                            }, [F, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        (window.removeEventListener('mouseleave', S), S());
                                    }
                                ),
                                [S],
                            ));
                        return F
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((I = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(B.current.timeoutId),
                                                      (B.current.timeoutId = window.setTimeout(k, E ? 100 : 400)),
                                                      o && o(e),
                                                      I && I(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (S(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === A && S(), null == m || m(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === A && S(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var I;
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
                u.d(t, { U: () => s });
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
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: u = i, context: r = 'model' } = {}) {
                    const s = new Map();
                    function l(e, t = 0) {
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
                    const o = (e) => {
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
                            const i = 'string' == typeof a ? `${r}.${a}` : r,
                                l = n.O.view.addModelObserver(i, t, !0);
                            return (s.set(l, u), e && u(o(a)), l);
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
                            for (var e, u = a(s.keys()); !(e = u()).done; ) {
                                l(e.value, t);
                            }
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, u) => {
                'use strict';
                u.d(t, { q3: () => l });
                var n = u(4598),
                    a = u(9174),
                    r = u(7363),
                    i = u.n(r),
                    s = u(8246);
                const l = () => (e, t) => {
                    const u = (0, r.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: o, children: c, mocks: d }) {
                            const m = (0, r.useRef)([]),
                                _ = (u, r, i) => {
                                    var l;
                                    const o = s.U(r),
                                        c =
                                            'real' === u
                                                ? o
                                                : Object.assign({}, o, {
                                                      readByPath:
                                                          null != (l = null == i ? void 0 : i.getter) ? l : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === u ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        _ = (e) => m.current.push(e),
                                        E = e({
                                            mode: u,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = d(e),
                                                        r = a.LO.box(t, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const r = null != t ? t : d(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === u &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
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
                                                            i = Object.entries(r),
                                                            s = i.reduce(
                                                                (e, [t, u]) => ((e[u] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
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
                                            cleanup: _,
                                        }),
                                        g = { mode: u, model: E, externalModel: c, cleanup: _ };
                                    return {
                                        model: E,
                                        controls: 'mocks' === u && i ? i.controls(g) : t(g),
                                        externalModel: c,
                                        mode: u,
                                    };
                                },
                                E = (0, r.useRef)(!1),
                                g = (0, r.useState)(l),
                                A = g[0],
                                b = g[1],
                                h = (0, r.useState)(() => _(l, o, d)),
                                v = h[0],
                                F = h[1];
                            return (
                                (0, r.useEffect)(() => {
                                    E.current ? F(_(A, o, d)) : (E.current = !0);
                                }, [d, A, o]),
                                (0, r.useEffect)(() => {
                                    b(l);
                                }, [l]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (v.externalModel.dispose(), m.current.forEach((e) => e()));
                                    },
                                    [v],
                                ),
                                i().createElement(u.Provider, { value: v }, c)
                            );
                        },
                        () => (0, r.useContext)(u),
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
                    u.d(t, { mouse: () => c, off: () => l, on: () => s, onResize: () => r, onScaleUpdated: () => i }));
                var n = u(2472),
                    a = u(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
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
                                        i = o[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
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
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            ((e.enabled = !1), n());
                        },
                        enable() {
                            ((e.enabled = !0), n());
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
                (u.r(t),
                    u.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = u(527),
                    a = u(2493);
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
                u.d(t, { O: () => i });
                var n = u(5959),
                    a = u(7698),
                    r = u(514);
                const i = { view: u(7641), client: n, sound: r.ZP, intl: a.N };
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
                u.d(t, { ZP: () => i });
                var n = u(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, u) => {
                'use strict';
                function n(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${n(e, t, u)})`;
                }
                (u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => n }));
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
                (u.r(t),
                    u.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        arabic2roman: () => y,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => T,
                        events: () => i.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getExternalPaddingsRem: () => k,
                        getFontNames: () => B,
                        getScale: () => b,
                        getSize: () => _,
                        getViewGlobalPosition: () => g,
                        initExternalPaddings: () => x,
                        isEventHandled: () => D,
                        isFocused: () => p,
                        pxToRem: () => h,
                        remToPx: () => v,
                        resize: () => E,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => m,
                        whenTutorialReady: () => I,
                    }));
                var n = u(9690),
                    a = u(3722),
                    r = u(6112),
                    i = u(6538),
                    s = u(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
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
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function b() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const B = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = n.cg;
                function k() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    L = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    I = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function T() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function x(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            u = t.top,
                            n = t.right,
                            a = t.bottom,
                            r = t.left;
                        (e.style.setProperty('--external-padding-top', `${u}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => o });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    l = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                    return a;
                                })(t, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
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
                (u(3469), u(2133));
                var n = u(2790);
                (u(579), u(5360), u(9056));
                const a = n.Z;
            },
            6536: (e, t, u) => {
                'use strict';
                u(7363);
            },
            3469: (e, t, u) => {
                'use strict';
                (u(7044), u(7363));
            },
            2133: (e, t, u) => {
                'use strict';
                u(7363);
            },
            5415: (e, t, u) => {
                'use strict';
                u.d(t, { Aq: () => l, GS: () => o, cJ: () => i, fd: () => s });
                var n = u(7363),
                    a = u(7739),
                    r = u(1043);
                let i, s, l;
                (!(function (e) {
                    ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = r.j.small.width)] = 'Small'),
                        (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                        (e[(e.Large = r.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'));
                    })(l || (l = {})));
                const o = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        u = e.height,
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
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
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
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
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
                                    return (console.error('Unreachable media context resolution'), l.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: r, mediaWidth: o, mediaHeight: c, remScreenWidth: t, remScreenHeight: u };
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
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
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
                (u(3138), u(7363));
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
            5521: (e, t, u) => {
                'use strict';
                let n, a;
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
                    })(a || (a = {})));
            },
            9480: (e, t, u) => {
                'use strict';
                function n(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                u.d(t, { U2: () => n, UI: () => r, dF: () => s, lN: () => i, sE: () => l });
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
                function i(e) {
                    if (0 !== e.length) return n(e, e.length - 1);
                }
                function s(e, t) {
                    for (let u = e.length - 1; u >= 0; u--) {
                        const n = a(e[u]);
                        if (t(n, u, e)) return n;
                    }
                }
                function l(e, t) {
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
            9690: (e, t, u) => {
                'use strict';
                u.d(t, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let t = '';
                    for (let u = a.length - 1; u >= 0; u--) for (; e >= a[u]; ) ((t += n[u]), (e -= a[u]));
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
                u.d(t, { BN: () => r, dL: () => s, e: () => i, uF: () => a });
                u(1281);
                let n;
                function a(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const u = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(u, -u)]);
                    });
                }
                function r(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(n || (n = {}));
                (() => {
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
                })();
                const s = (e) => {
                    return (
                        (t = R.strings.common.percentValue()),
                        (u = { value: e }),
                        t.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]))
                    );
                    var t, u;
                };
            },
            1358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var n = u(3138);
                class a {
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
                        return (window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
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
                    Sw: () => r.Z,
                    B3: () => l,
                    Z5: () => i.Z5,
                    B0: () => s,
                    c9: () => v,
                    wU: () => D,
                    ry: () => b,
                    Eu: () => h,
                    SW: () => p,
                    P3: () => C,
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
                const a = n;
                var r = u(1358);
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(5521),
                    _ = u(3138);
                const E = ['args'];
                function g(e, t, u, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            l = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                        function i(e) {
                                            g(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
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
                    F = () => v(s.CLOSE),
                    p = () => v(s.POP_OVER, { on: !1 }),
                    C = (e, t, u, n, a = R.invalid('resId'), r) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            l = u.getBoundingClientRect(),
                            o = l.x,
                            c = l.y,
                            d = l.width,
                            m = l.height,
                            E = {
                                x: _.O.view.pxToRem(o) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(m),
                            };
                        v(s.POP_OVER, {
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
                    D = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    w = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var f = u(7572);
                const B = a.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: o,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: C,
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, F);
                        },
                        handleViewEvent: v,
                        onBindingsReady: b,
                        onLayoutReady: h,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: D,
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
                        ClickOutsideManager: B,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = y;
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
                u.d(t, { z: () => l });
                var n = u(7739),
                    a = u(7363),
                    r = u.n(a),
                    i = u(2849);
                const s = ['children'];
                const l = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, s);
                    return r().createElement(n.ZN, null, r().createElement(i.l, u, t));
                };
            },
            2849: (e, t, u) => {
                'use strict';
                u.d(t, { l: () => g });
                var n = u(6483),
                    a = u.n(n),
                    r = u(926),
                    i = u.n(r),
                    s = u(7363),
                    l = u.n(s),
                    o = u(5415);
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
                        [o.fd.ExtraSmall]: '',
                        [o.fd.Small]: i().SMALL_WIDTH,
                        [o.fd.Medium]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH}`,
                        [o.fd.Large]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH}`,
                        [o.fd.ExtraLarge]:
                            `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH} ${i().EXTRA_LARGE_WIDTH}`,
                    },
                    _ = {
                        [o.Aq.ExtraSmall]: '',
                        [o.Aq.Small]: i().SMALL_HEIGHT,
                        [o.Aq.Medium]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT}`,
                        [o.Aq.Large]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT}`,
                        [o.Aq.ExtraLarge]:
                            `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT} ${i().EXTRA_LARGE_HEIGHT}`,
                    },
                    E = {
                        [o.cJ.ExtraSmall]: '',
                        [o.cJ.Small]: i().SMALL,
                        [o.cJ.Medium]: `${i().SMALL} ${i().MEDIUM}`,
                        [o.cJ.Large]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE}`,
                        [o.cJ.ExtraLarge]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE} ${i().EXTRA_LARGE}`,
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
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, c);
                        const r = (0, o.GS)(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            g = r.mediaSize;
                        return l().createElement('div', d({ className: a()(u, m[i], _[s], E[g]) }, n), t);
                    };
            },
            4029: (e, t, u) => {
                'use strict';
                u.d(t, { z: () => n.z });
                var n = u(1504);
            },
            2582: (e, t, u) => {
                'use strict';
                u.d(t, { yZ: () => s });
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
                let s;
                !(function (e) {
                    ((e.Play = 'play'), (e.Stop = 'stop'));
                })(s || (s = {}));
                const l = (e, t, u) => {
                    const n = new Image();
                    ((n.src = u(t)), e.push(n));
                };
                (0, n.memo)((e) => {
                    let t = e.width,
                        u = e.height,
                        o = e.getSrcByFrame,
                        c = e.frameCount,
                        d = e.onAnimate,
                        m = void 0 === d ? () => {} : d,
                        _ = e.frameTime,
                        E = void 0 === _ ? 33 : _,
                        g = e.initialFrameIndex,
                        A = void 0 === g ? 0 : g,
                        b = e.loop,
                        h = void 0 === b || b,
                        v = e.state,
                        F = void 0 === v ? s.Play : v,
                        p = e.onAnimationComplete,
                        C = void 0 === p ? () => {} : p,
                        D = e.revers,
                        w = void 0 !== D && D,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, r);
                    const B = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            const e = B.current;
                            if (!e) return;
                            const n = c - 1,
                                a = e.getContext('2d'),
                                r = (n) => {
                                    (a.clearRect(0, 0, e.width, e.height), a.drawImage(n, 0, 0, t, u));
                                };
                            if ('stop' === F) {
                                const e = o(0),
                                    t = new Image();
                                t.src = e;
                                const u = () => r(t);
                                return (t.addEventListener('load', u), () => t.removeEventListener('load', u));
                            }
                            const i = ((e, t, u) => {
                                    const n = [];
                                    if (u) for (let u = e; u >= 0; u--) l(n, u, t);
                                    else for (let u = 0; u < e; u++) l(n, u, t);
                                    return n;
                                })(c, o, w),
                                s = ((e, t = 0) => {
                                    let u = t;
                                    return () => {
                                        const t = u;
                                        return ((u += 1), u > e && (u = 0), t);
                                    };
                                })(n, A),
                                d = setInterval(() => {
                                    const e = s(),
                                        t = i[e];
                                    (r(i[e]), m(e, t), e === n && (C(), h || clearInterval(d)));
                                }, E);
                            return () => clearInterval(d);
                        }, [c, E, o, u, A, h, m, C, F, t, w]),
                        a().createElement('canvas', i({}, f, { width: t, height: u, ref: B }))
                    );
                });
            },
            2857: (e, t, u) => {
                'use strict';
                u.d(t, { L: () => o });
                var n = u(6483),
                    a = u.n(n),
                    r = u(6373),
                    i = u(7363),
                    s = u.n(i),
                    l = u(8699);
                const o = (0, i.memo)(({ classMix: e, targetId: t }) =>
                    s().createElement(
                        r.i,
                        {
                            header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                            body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            targetId: t,
                        },
                        s().createElement(
                            'div',
                            { className: a()(l.Z.base, e) },
                            s().createElement('div', { className: l.Z.icon }),
                        ),
                    ),
                );
            },
            5563: (e, t, u) => {
                'use strict';
                u.d(t, { A: () => E, r: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7078),
                    i = u(2603),
                    s = u(771),
                    l = u(3649),
                    o = u(9916),
                    c = u(7363),
                    d = u.n(c),
                    m = u(130);
                let _;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large'));
                })(_ || (_ = {}));
                const E = (0, c.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = s.y$,
                        className: u,
                        targetId: n = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: c = _.Normal,
                    }) => {
                        const E = e === s.sU,
                            g = E ? { tooltipId: i.M4 } : { tooltipId: i.Br, skillEfficiency: e, tankmanID: t };
                        return d().createElement(
                            r.t,
                            { targetId: n, args: g, isEnabled: t !== s.y$ },
                            d().createElement(
                                'div',
                                { className: a()(m.Z.base, m.Z[`base__${c}`], E && m.Z.base__untrained, u) },
                                E
                                    ? d().createElement('div', { className: m.Z.icon })
                                    : d().createElement(
                                          'div',
                                          { className: a()(m.Z.percent, e === s.yb && m.Z.percent__full) },
                                          (0, l.dL)(o.Z5.getNumberFormat(100 * e, o.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
            },
            2768: (e, t, u) => {
                'use strict';
                u.d(t, { F: () => l, y: () => o });
                var n = u(6483),
                    a = u.n(n),
                    r = u(7363),
                    i = u.n(r),
                    s = u(4458);
                let l;
                !(function (e) {
                    ((e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs'));
                })(l || (l = {}));
                const o = i().memo(function ({ iconName: e, size: t = l.c24x24, className: u }) {
                    var n;
                    const r = null == (n = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : n.$dyn(e);
                    return i().createElement('div', {
                        style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                        className: a()(s.Z.base, s.Z[`base__${t}`], u),
                    });
                });
            },
            8617: (e, t, u) => {
                'use strict';
                u.d(t, { n: () => h });
                var n = u(6483),
                    a = u.n(n),
                    r = u(771),
                    i = u(9480),
                    s = u(7363),
                    l = u.n(s),
                    o = u(5563),
                    c = u(8018),
                    d = u(5108),
                    m = u(4091),
                    _ = u(552),
                    E = u(8326),
                    g = u(5855),
                    A = u(3591);
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
                const h = ({
                    data: e,
                    dataToCompare: t,
                    classes: u,
                    tankmanID: n = r.y$,
                    size: s = g.Ow.c24x24,
                    collapseType: h = g.t6.None,
                    isSkillTooltipEnabled: v = !1,
                    isAcceleratedTrainingVisible: F = !1,
                    isNewSkillAnimated: p = !1,
                    isEfficiencyVisible: C = !1,
                    isBonusSkillsVisible: D = !0,
                    tooltipsTargetId: w = R.invalid('resId'),
                    tooltipArgs: f,
                    blinkStyle: B,
                    children: y,
                }) => {
                    const k = e.majorSkills,
                        S = e.bonusSkills,
                        L = e.skillsEfficiency,
                        I = (null == t ? void 0 : t.skillsEfficiency) || L,
                        T = (0, c.Y4)(L),
                        x = void 0 !== t && t.skillsEfficiency !== L,
                        O = T !== c.H$.Normal || C || x,
                        N = null == t ? void 0 : t.majorSkills,
                        M = null == t ? void 0 : t.bonusSkills,
                        H = M || S,
                        P = i.lN(H),
                        j = D && H.length > 0,
                        W = p || void 0 !== t,
                        Z = (null == N ? void 0 : N.length) === r.GT,
                        z = (0, A.Ld)(h, H.length, O, T !== c.H$.Low && void 0 !== P && P.level < r.I),
                        U = {
                            size: s,
                            efficiencyState: T,
                            tooltipData: { targetId: w, isEnabled: v, tankmanID: n, args: f },
                        };
                    return l().createElement(
                        'div',
                        { className: a()(E.Z.base, E.Z[`base__${s}`], null == u ? void 0 : u.base) },
                        O &&
                            l().createElement(
                                d.r,
                                { blinkStyle: B, isEnabled: x && W },
                                l().createElement(o.A, {
                                    efficiencyValue: I,
                                    tankmanID: n,
                                    className: E.Z.efficiency,
                                    size: (0, A.h7)(s, j),
                                    targetId: w,
                                }),
                            ),
                        y,
                        l().createElement(
                            'div',
                            { className: E.Z.rows },
                            W
                                ? l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(
                                          m.s,
                                          b(
                                              {
                                                  skills: k,
                                                  possibleSkills: N,
                                                  blinkStyle: B,
                                                  isAcceleratedTrainingVisible: F,
                                                  isNewSkillAnimated: p,
                                                  isSkillsEfficiencyLearning: x,
                                              },
                                              U,
                                          ),
                                      ),
                                      j &&
                                          l().createElement(
                                              m.s,
                                              b(
                                                  {
                                                      skills: S,
                                                      skillType: g.W.Bonus,
                                                      possibleSkills: M,
                                                      className: E.Z.bonusRow,
                                                      collapseLayout: z,
                                                      blinkStyle: B,
                                                      isNewSkillAnimated: p,
                                                      isAllMajorSkillsLearned: Z,
                                                  },
                                                  U,
                                              ),
                                          ),
                                  )
                                : l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(_.X, b({ skills: k, isAcceleratedTrainingVisible: F }, U)),
                                      j &&
                                          l().createElement(
                                              _.X,
                                              b(
                                                  {
                                                      skills: S,
                                                      skillType: g.W.Bonus,
                                                      className: E.Z.bonusRow,
                                                      collapseLayout: z,
                                                  },
                                                  U,
                                              ),
                                          ),
                                  ),
                        ),
                    );
                };
            },
            6177: (e, t, u) => {
                'use strict';
                u.d(t, { I: () => b });
                var n = u(6483),
                    a = u.n(n),
                    r = u(2686),
                    i = u(126),
                    s = u(6373),
                    l = u(3138),
                    o = u(3112),
                    c = u(7363),
                    d = u.n(c),
                    m = u(7030),
                    _ = u(2582),
                    E = u(7160),
                    g = u(5855),
                    A = u(1890);
                const b = d().memo(function ({ type: e, index: t, totalAmount: u, className: n, size: b }) {
                    const h = (0, c.useState)(_.yZ.Stop),
                        v = h[0],
                        F = h[1],
                        p = (0, o.V)(),
                        C =
                            b === g.Ow.c44x44
                                ? ((e) => ({
                                      width: 96,
                                      height: 96,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 2, columns: 21 },
                                      getChunkPath: (0, i.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                      ),
                                  }))(e)
                                : ((e) => ({
                                      width: 64,
                                      height: 64,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 1, columns: 24 },
                                      getChunkPath: (0, i.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                      ),
                                  }))(e),
                        D = (0, i.q)(C),
                        w = b === g.Ow.c44x44 ? 60 : 36,
                        f = (0, m.useSpring)(
                            () => ({
                                from: { x: 0 },
                                to: { x: l.O.view.remToPx(w) },
                                config: { duration: 300, easing: E.qb },
                                delay: 600 - 100 * t,
                            }),
                            [t, w, p],
                        )[0];
                    return (
                        (0, c.useEffect)(() => {
                            const e = setTimeout(() => F(_.yZ.Play), 100 * (u - 1) - 100 * t);
                            return () => clearTimeout(e);
                        }, [t, u]),
                        d().createElement(
                            s.i,
                            { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                            d().createElement(
                                m.animated.div,
                                { style: f, className: a()(A.Z.base, A.Z[`base__${b}`], n) },
                                d().createElement(
                                    'div',
                                    { className: A.Z.icon },
                                    d().createElement(r.At, {
                                        width: C.width,
                                        height: C.height,
                                        frameCount: C.frameCount,
                                        getImageSource: D,
                                        loop: !1,
                                        state: v,
                                        style: { transform: `scale(${p})` },
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
                    i = u.n(r),
                    s = u(2582),
                    l = u(6253),
                    o = u(5147);
                const c = ({ type: e, state: t }) => {
                    const u = ((e, t) => ({
                            width: 24,
                            height: 24,
                            frameCount: 42,
                            chunk: { count: 1, columns: 42, rows: 1 },
                            getChunkPath: (0, a.V)(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                        }))(e, t),
                        c = (0, a.q)(u),
                        d = (0, r.useState)(s.yZ.Stop),
                        m = d[0],
                        _ = d[1];
                    return (
                        (0, r.useEffect)(() => {
                            const e = () => {
                                _(s.yZ.Play);
                            };
                            return ((0, o.L)(e), () => (0, o.r)(e));
                        }, []),
                        i().createElement(n.At, {
                            width: u.width,
                            height: u.height,
                            frameCount: u.frameCount,
                            getImageSource: c,
                            loop: !1,
                            state: m,
                            onAnimationDone: () => {
                                _(s.yZ.Stop);
                            },
                            className: l.Z.base,
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
                u.d(t, { L: () => l, r: () => o });
                const r = new Map();
                let i = null;
                const s = () => {
                        r.size
                            ? i ||
                              (i = window.setInterval(() => {
                                  for (var e, t = n(r.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : i && (clearInterval(i), (i = null));
                    },
                    l = (e) => {
                        (r.set(e, e), s());
                    },
                    o = (e) => {
                        (r.delete(e), s());
                    };
            },
            3413: (e, t, u) => {
                'use strict';
                u.d(t, { L: () => l, r: () => s });
                var n = u(7363),
                    a = u.n(n),
                    r = u(8147),
                    i = u(9108);
                let s;
                !(function (e) {
                    ((e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale'));
                })(s || (s = {}));
                const l = a().memo(function ({
                    size: e,
                    skillsSignature: t,
                    animationType: u,
                    className: n,
                    children: l,
                }) {
                    return u === s.Scale
                        ? a().createElement(i.Y, { isEnabled: !0, className: n }, l)
                        : u === s.FadeIn
                          ? a().createElement(r.U, { size: e, key: t, className: n }, l)
                          : a().createElement('div', { className: n }, l);
                });
            },
            5108: (e, t, u) => {
                'use strict';
                u.d(t, { r: () => i });
                var n = u(7363),
                    a = u.n(n),
                    r = u(7030);
                const i = a().memo(function ({ blinkStyle: e, isEnabled: t, children: u }) {
                    return a().createElement(r.animated.div, { style: t && e ? e : void 0 }, u);
                });
            },
            8147: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => o });
                var n = u(3112),
                    a = u(7363),
                    r = u.n(a),
                    i = u(7030),
                    s = u(7160),
                    l = u(5855);
                const o = ({ size: e, children: t, className: u }) => {
                    const a = (0, n.V)(),
                        o = e === l.Ow.c44x44 ? 48 : 26,
                        c = (0, i.useSpring)({
                            from: { opacity: 0, marginRight: -o * a },
                            to: [{ marginRight: 0 }, { opacity: 1 }],
                            config: { duration: 400, easing: s.Fs },
                            delay: 800,
                        });
                    return r().createElement(i.animated.div, { style: c, className: u }, t);
                };
            },
            7765: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => m });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3138),
                    i = u(3649),
                    s = u(7363),
                    l = u.n(s),
                    o = u(7030),
                    c = u(7160),
                    d = u(8110);
                const m = l().memo(function ({ size: e, level: t, withSlideOut: u = !0 }) {
                    const n = (0, o.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        s = (0, o.useSpring)(() => ({
                            from: { x: r.O.view.remToPx(-5), opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            config: { duration: 300, easing: c.qb },
                            delay: 700,
                        }))[0],
                        m = (0, o.useSpring)(
                            () => ({
                                from: { opacity: 0 },
                                to: [{ opacity: 1 }, { opacity: 0 }],
                                config: { duration: 150, easing: c.qb },
                            }),
                            [t],
                        )[0];
                    return l().createElement(
                        'div',
                        { className: a()(d.Z.base, d.Z[`base__${e}`]) },
                        l().createElement(
                            o.animated.div,
                            { style: u ? s : void 0, className: a()(d.Z.level, d.Z.level__skillLost) },
                            n.val.to((e) => (0, i.dL)(Math.floor(e))),
                        ),
                        l().createElement(
                            o.animated.div,
                            { style: u ? Object.assign({}, s, m) : m, className: a()(d.Z.level, d.Z.level__skillBlur) },
                            n.val.to((e) => (0, i.dL)(Math.floor(e))),
                        ),
                    );
                });
            },
            9108: (e, t, u) => {
                'use strict';
                u.d(t, { Y: () => s });
                var n = u(7363),
                    a = u.n(n),
                    r = u(7030),
                    i = u(7160);
                const s = a().memo(function ({ isEnabled: e, className: t, children: u }) {
                    const s = (0, r.useSpring)(() => ({ from: { scale: 1 } })),
                        l = s[0],
                        o = s[1];
                    return (
                        (0, n.useEffect)(() => {
                            e &&
                                o.start({
                                    from: { scale: 1 },
                                    to: [{ scale: 1.2 }, { scale: 1 }],
                                    delay: 200,
                                    config: { duration: 400, easing: i.Fs },
                                });
                        }, [e, o]),
                        a().createElement(r.animated.div, { style: e ? l : void 0, className: t }, u)
                    );
                });
            },
            4055: (e, t, u) => {
                'use strict';
                u.d(t, { w: () => o });
                var n = u(3112),
                    a = u(7363),
                    r = u.n(a),
                    i = u(7030),
                    s = u(7160),
                    l = u(5855);
                const o = r().memo(function ({ size: e, className: t, children: u }) {
                    const a = e === l.Ow.c44x44 ? 48 : 26,
                        o = (0, n.V)(),
                        c = (0, i.useSpring)(
                            () => ({
                                from: { opacity: 1, marginRight: 0 },
                                to: [{ opacity: 0 }, { marginRight: -a * o }],
                                config: { duration: 400, easing: s.Fs },
                            }),
                            [o, a],
                        )[0];
                    return r().createElement(i.animated.div, { style: c, className: t }, u);
                });
            },
            4091: (e, t, u) => {
                'use strict';
                u.d(t, { s: () => v });
                var n = u(6483),
                    a = u.n(n),
                    r = u(2344),
                    i = u(9480),
                    s = u(4385),
                    l = u(3649),
                    o = u(7363),
                    c = u.n(o),
                    d = u(2857),
                    m = u(8018),
                    _ = u(5855),
                    E = u(3591),
                    g = u(6177),
                    A = u(7713),
                    b = u(9772),
                    h = u(4722);
                const v = ({
                    skills: e,
                    skillType: t = _.W.Major,
                    possibleSkills: u,
                    isAcceleratedTrainingVisible: n = !1,
                    collapseLayout: o = _.hj.None,
                    efficiencyState: v,
                    size: F,
                    tooltipData: p,
                    blinkStyle: C,
                    isSkillsEfficiencyLearning: D = !1,
                    isAllMajorSkillsLearned: w = !1,
                    isNewSkillAnimated: f = !1,
                    className: B,
                }) => {
                    const y = void 0 === u ? e : u,
                        k = (0, r.D9)(e),
                        S = (0, r.D9)(y),
                        L = k && i.lN(k),
                        I = i.lN(e),
                        T = (0, E.dv)(y),
                        x = i.lN(y),
                        O = u ? e.length - u.length : 0,
                        R = v !== m.H$.Low || D || (x && I && x.level !== I.level),
                        N = (0, E.Nn)(y);
                    return c().createElement(
                        'div',
                        { className: a()(h.Z.base, h.Z[`base__${F}`], h.Z[`base__collapse${(0, l.e)(o)}`], B) },
                        (0, E.oo)(e, k, y, S, (e, u, n) => {
                            const r = (0, E.mg)(e);
                            return c().createElement(A.k, {
                                key: n,
                                index: n,
                                skill: e,
                                skillState: r,
                                skillType: t,
                                previousSkill: S && i.U2(S, n),
                                skillAnimationType: u,
                                size: F,
                                skillsSignature: N,
                                efficiencyState: v,
                                tooltipData: p,
                                blinkStyle: C,
                                isNewSkillAnimated: f,
                                className: a()(
                                    h.Z.skill,
                                    h.Z[`skill__state${(0, l.e)(r)}`],
                                    e === x && h.Z.skill__last,
                                    e === T && h.Z.skill__lastLearnedSkill,
                                ),
                            });
                        }),
                        R &&
                            c().createElement(b.H, {
                                skillsAmountDiff: O,
                                size: F,
                                wasLearned: L && I && L.level !== I.level,
                                skillType: t,
                                isAllMajorSkillsLearned: w,
                                skill: I,
                                possibleSkill: x,
                                blinkStyle: C,
                                className: h.Z.level,
                            }),
                        n &&
                            c().createElement(d.L, {
                                classMix: h.Z.acceleratedTrainingIcon,
                                targetId: null == p ? void 0 : p.targetId,
                            }),
                        O > 0 &&
                            (0, s.K)(O, (e) =>
                                c().createElement(g.I, {
                                    key: e,
                                    index: e,
                                    totalAmount: O,
                                    type: t,
                                    className: h.Z.lostSkill,
                                    size: F,
                                }),
                            ),
                    );
                };
            },
            552: (e, t, u) => {
                'use strict';
                u.d(t, { X: () => v });
                var n = u(6483),
                    a = u.n(n),
                    r = u(771),
                    i = u(9480),
                    s = u(3649),
                    l = u(7363),
                    o = u.n(l),
                    c = u(2857),
                    d = u(8018),
                    m = u(5855),
                    _ = u(3591),
                    E = u(1606),
                    g = u(9561),
                    A = u(2202),
                    b = u(4722);
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const v = ({
                    skills: e,
                    collapseLayout: t = m.hj.None,
                    skillType: u = m.W.Major,
                    efficiencyState: n,
                    size: l,
                    tooltipData: v,
                    className: F,
                    isAcceleratedTrainingVisible: p,
                }) => {
                    const C = i.lN(e),
                        D = (0, _.dv)(e),
                        w = n !== d.H$.Low && (null == C ? void 0 : C.level) !== r.I;
                    return o().createElement(
                        'div',
                        { className: a()(b.Z.base, b.Z[`base__${l}`], b.Z[`base__collapse${(0, s.e)(t)}`], F) },
                        i.UI(e, (e, t) => {
                            const r = (0, _.mg)(e);
                            return o().createElement(
                                A.O,
                                {
                                    key: t,
                                    skillIndex: t,
                                    name: e.name,
                                    roleName: e.roleName,
                                    customName: e.customName,
                                    level: e.level,
                                    tooltipData: v,
                                    skillType: u,
                                    className: a()(
                                        b.Z.skill,
                                        b.Z[`skill__state${(0, s.e)(r)}`],
                                        e === C && b.Z.skill__last,
                                        e === D && b.Z.skill__lastLearnedSkill,
                                    ),
                                },
                                o().createElement(E.U, h({ size: l, type: u, efficiencyState: n, skillState: r }, e)),
                            );
                        }),
                        w && C && o().createElement(g.T, { skillLevel: C.level, className: b.Z.level }),
                        p &&
                            o().createElement(c.L, {
                                classMix: b.Z.acceleratedTrainingIcon,
                                targetId: null == v ? void 0 : v.targetId,
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
                    i = u(5855),
                    s = u(5108),
                    l = u(7765),
                    o = u(9108),
                    c = u(9561);
                const d = ({
                    skillsAmountDiff: e,
                    size: t,
                    skillType: u,
                    wasLearned: a,
                    isAllMajorSkillsLearned: d,
                    skill: m,
                    possibleSkill: _,
                    blinkStyle: E,
                    className: g,
                }) => {
                    const A = _ || m,
                        b = void 0 !== m && void 0 !== _ ? _.level - m.level : 0,
                        h = e > 0,
                        v = e < 0 || b > 0;
                    return !A ||
                        (A.level === n.I && 0 === b) ||
                        ((null == _ ? void 0 : _.level) === n.I && u === i.W.Bonus && b > 0 && !d)
                        ? null
                        : h || (b < 0 && 0 === e)
                          ? r().createElement(l.G, { size: t, level: A.level, withSlideOut: h })
                          : r().createElement(
                                o.Y,
                                { isEnabled: Boolean(a) },
                                r().createElement(
                                    s.r,
                                    { blinkStyle: E, isEnabled: v },
                                    r().createElement(c.T, { skillLevel: A.level, isHighlighted: v, className: g }),
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
                    i = u(7363),
                    s = u.n(i),
                    l = u(3591),
                    o = u(872);
                const c = ({ skillLevel: e, isHighlighted: t = !1, className: u }) =>
                    s().createElement(
                        'div',
                        { className: a()(o.Z.base, t && o.Z.base__highlighted, u) },
                        (0, r.dL)(e > 0 && e < 0.01 ? 0.01 : (0, l.iv)(e)),
                    );
            },
            2202: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => l });
                var n = u(3415),
                    a = u(7363),
                    r = u.n(a),
                    i = u(3591);
                const s = ['className', 'children'];
                const l = (e) => {
                    let t = e.className,
                        u = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, s);
                    return r().createElement(n.l, { tooltipArgs: (0, i.iR)(a), className: t }, u);
                };
            },
            7713: (e, t, u) => {
                'use strict';
                u.d(t, { k: () => g });
                var n = u(771),
                    a = u(7363),
                    r = u.n(a),
                    i = u(5855),
                    s = u(9152),
                    l = u(3413),
                    o = u(5108),
                    c = u(4055),
                    d = u(2202),
                    m = u(1606);
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
                const E = (e, t) => (e ? l.r.Scale : t ? l.r.FadeIn : l.r.None),
                    g = ({
                        index: e,
                        skill: t,
                        previousSkill: u,
                        skillState: a,
                        skillType: g,
                        size: A,
                        efficiencyState: b,
                        tooltipData: h,
                        skillsSignature: v,
                        blinkStyle: F,
                        isNewSkillAnimated: p = !1,
                        skillAnimationType: C = i.Qm.None,
                        className: D,
                    }) => {
                        const w = C === i.Qm.Blink || C === i.Qm.SlideOutAndBlink,
                            f = C === i.Qm.SlideOutAndBlink || C === i.Qm.SlideOut,
                            B = C === i.Qm.FadeIn,
                            y = {
                                skillIndex: e,
                                name: t.name,
                                roleName: t.roleName,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: h,
                                skillType: g,
                            };
                        return p && t.name === n.jw && A === i.Ow.c24x24
                            ? r().createElement(
                                  d.O,
                                  _({}, y, { className: D }),
                                  r().createElement(s.E, { type: g, state: a }),
                              )
                            : r().createElement(
                                  r().Fragment,
                                  null,
                                  u &&
                                      f &&
                                      r().createElement(
                                          c.w,
                                          { size: A, className: D, key: u.name },
                                          r().createElement(
                                              o.r,
                                              { blinkStyle: F, isEnabled: w },
                                              r().createElement(
                                                  m.U,
                                                  _({ size: A, type: g, efficiencyState: b, skillState: a }, u),
                                              ),
                                          ),
                                      ),
                                  r().createElement(
                                      l.L,
                                      {
                                          size: A,
                                          skillsSignature: v,
                                          className: D,
                                          animationType: E(C === i.Qm.ScaleUp, B),
                                      },
                                      r().createElement(
                                          d.O,
                                          y,
                                          r().createElement(
                                              o.r,
                                              { blinkStyle: F, isEnabled: w },
                                              r().createElement(
                                                  m.U,
                                                  _({ size: A, type: g, efficiencyState: b, skillState: a }, t),
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
                    i = u(771),
                    s = u(3649),
                    l = u(7363),
                    o = u.n(l),
                    c = u(2768),
                    d = u(8018),
                    m = u(5855),
                    _ = u(3591),
                    E = u(699);
                const g = { [m.Ow.c24x24]: c.F.c22x22, [m.Ow.c44x44]: c.F.c52x52 },
                    A = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: u,
                        type: n,
                        iconName: l,
                        name: A,
                        skillState: b,
                        battleBooster: h,
                        className: v,
                    }) => {
                        const F = h !== r.S.None,
                            p = (0, _.Ot)(A, b, F, t, u),
                            C = (!F && u === d.H$.Untrained) || t,
                            D = l === i.jw;
                        return o().createElement(
                            'div',
                            {
                                className: a()(
                                    E.Z.base,
                                    E.Z[`base__type${(0, s.e)(n)}`],
                                    E.Z[`base__state${(0, s.e)(b)}`],
                                    E.Z[`base__border${(0, s.e)(p)}`],
                                    E.Z[`base__${e}`],
                                    C && E.Z.base__disabled,
                                    v,
                                ),
                            },
                            o().createElement('div', {
                                className: E.Z.background,
                                style:
                                    n === m.W.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${p}')`,
                                          }
                                        : void 0,
                            }),
                            D && b === m.Lm.Learned && o().createElement('div', { className: E.Z.newSkillHighLight }),
                            o().createElement(c.y, { iconName: l, size: g[e], className: E.Z.icon }),
                            C && o().createElement('div', { className: E.Z.disabledOverlay }),
                        );
                    };
            },
            5855: (e, t, u) => {
                'use strict';
                let n, a, r, i, s, l, o;
                (u.d(t, { Lm: () => o, Ow: () => s, Qm: () => a, W: () => l, hj: () => r, t6: () => n, u0: () => i }),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.Default = 'default'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp'));
                    })(a || (a = {})),
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
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.Major = 'major'), (e.Bonus = 'bonus'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e.Learned = 'learned'), (e.Learning = 'learning'));
                    })(o || (o = {})));
            },
            3591: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Ld: () => g,
                    Nn: () => o,
                    Ot: () => m,
                    dv: () => d,
                    h7: () => E,
                    iR: () => _,
                    iv: () => v,
                    mg: () => c,
                    oo: () => h,
                });
                var n = u(2603),
                    a = u(771),
                    r = u(9480),
                    i = u(5563),
                    s = u(8018),
                    l = u(5855);
                const o = (e) => r.UI(e, (e) => e.name).join(),
                    c = (e) => (e.level < a.I ? l.Lm.Learning : l.Lm.Learned),
                    d = (e) => r.dF(e, (e) => e.level === a.I),
                    m = (e, t, u, n, r = s.H$.Normal) =>
                        e === a.jw
                            ? l.u0.LightYellow
                            : r === s.H$.Untrained || n
                              ? t === l.Lm.Learning
                                  ? l.u0.Yellow
                                  : l.u0.Grey
                              : r === s.H$.Low
                                ? u
                                    ? l.u0.Grey
                                    : l.u0.Red
                                : t === l.Lm.Learning
                                  ? l.u0.Yellow
                                  : l.u0.Grey,
                    _ = ({
                        name: e,
                        roleName: t,
                        level: u,
                        customName: r,
                        skillType: i,
                        skillIndex: s,
                        tooltipData: o,
                    }) => {
                        const c = { targetId: o.targetId, isEnabled: o.isEnabled };
                        return e === a.jw
                            ? i === l.W.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: o.tankmanID, skillIndex: s }, o.args),
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
                                              tankmanID: o.tankmanID,
                                              skillName: e,
                                              roleName: t,
                                              isBonus: i === l.W.Bonus,
                                              level: u,
                                              customName: r,
                                              skillIndex: s,
                                          },
                                          o.args,
                                      ),
                                  },
                                  c,
                              );
                    },
                    E = (e, t) => (e === l.Ow.c44x44 ? i.r.Large : t ? i.r.Big : i.r.Normal),
                    g = (e, t, u, n) => {
                        if (t !== a.vA) return l.hj.None;
                        switch (e) {
                            case l.t6.Default:
                                if (u && n) return l.hj.NoMargins;
                                break;
                            case l.t6.Overlap:
                                if (u) return n ? l.hj.Overlap : l.hj.ReducedMargins;
                                if (n) return l.hj.OnlyLearningOverlap;
                                break;
                            case l.t6.ExtraOverlap:
                                return u && n
                                    ? l.hj.ExtraOverlapWithLevelAndEfficiency
                                    : u
                                      ? l.hj.ExtraOverlapWithEfficiency
                                      : n
                                        ? l.hj.ExtraOverlapWithLevel
                                        : l.hj.ExtraOverlap;
                        }
                        return l.hj.None;
                    },
                    A = (e, t) => {
                        const u = r.U2(e, t);
                        return null == u ? void 0 : u.name;
                    },
                    b = (e, t) => {
                        const u = r.U2(e, t);
                        return null == u ? void 0 : u.level;
                    },
                    h = (e, t, u, n, i) => {
                        if (!n || !t) return r.UI(u, (e, t) => i(e, l.Qm.None, t));
                        const s = new Map(r.UI(t, ({ name: e, level: t }) => [e, t])),
                            o = new Map(r.UI(e, ({ name: e, level: t }) => [e, t]));
                        let c = !1;
                        return r.UI(u, (r, d) => {
                            const m = r.name,
                                _ = r.level,
                                E = m === a.jw,
                                g = A(e, d),
                                h = E ? b(e, d) : o.get(m),
                                v = E ? b(t, d) : s.get(m),
                                F = A(u, d - 1),
                                p = A(n, d),
                                C = A(n, d + 1);
                            let D = l.Qm.None;
                            return (
                                c || m !== C || F === p || E || g !== a.jw
                                    ? E && d === u.length - 1 && c
                                        ? (D = l.Qm.FadeIn)
                                        : (!E && !o.has(m)) || (void 0 === g && E) || (h !== _ && _ === a.I)
                                          ? (D = l.Qm.Blink)
                                          : v !== h && (D = l.Qm.ScaleUp)
                                    : ((c = !0), (D = o.has(m) ? l.Qm.SlideOut : l.Qm.SlideOutAndBlink)),
                                i(r, D, d)
                            );
                        });
                    },
                    v = (e, t = 2) => {
                        const u = Math.pow(10, t);
                        return e % 1 > 0 ? Math.round(e * u) / u : e;
                    };
            },
            7077: (e, t, u) => {
                'use strict';
                u.d(t, { G: () => c, U: () => o });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3649),
                    i = u(7363),
                    s = u.n(i),
                    l = u(3938);
                let o;
                !(function (e) {
                    ((e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256'));
                })(o || (o = {}));
                const c = (0, i.memo)(function ({ name: e, size: t = o.c100x60, classMix: u, isSkin: n = !1 }) {
                    let i = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                    n && (i = i.$dyn('crewSkins'));
                    const c = i.$dyn((0, r.BN)(e));
                    return (
                        c ||
                            console.error(
                                `Can't find ${(0, r.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${n ? '.crewSkins' : ''}`,
                            ),
                        s().createElement('div', {
                            style: { backgroundImage: `url(${c})` },
                            className: a()(l.Z.base, l.Z[`base__${t}`], u),
                        })
                    );
                });
            },
            9631: (e, t, u) => {
                'use strict';
                u.d(t, { C: () => _ });
                var n = u(6483),
                    a = u.n(n),
                    r = u(3457),
                    i = u(2106),
                    s = u(9987),
                    l = u(7363),
                    o = u.n(l),
                    c = u(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
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
                const _ = o().memo(function (e) {
                    let t = e.isActive,
                        u = e.counter,
                        n = e.className,
                        l = e.children,
                        _ = e.type,
                        E = void 0 === _ ? i.L.secondary : _,
                        g = e.size,
                        A = void 0 === g ? i.q.small : g,
                        b = e.hasIndicator,
                        h = void 0 === b || b,
                        v = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, d);
                    return o().createElement(
                        'div',
                        { className: a()(c.Z.base, n, t && c.Z.base__active) },
                        o().createElement(r.u5, m({ type: E, size: A, mixClass: c.Z.button }, v), l),
                        o().createElement('div', { className: c.Z.overlay }),
                        h && o().createElement('div', { className: c.Z.indicator }),
                        Boolean(u) &&
                            o().createElement(
                                'div',
                                { className: c.Z.counter },
                                o().createElement(s.A, { value: u, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, u) => {
                'use strict';
                u.d(t, { BH: () => r, Fs: () => i, ei: () => n, qb: () => a });
                const n = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    a = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    r = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    i = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, u) => {
                'use strict';
                u.d(t, { Gc: () => i, H$: () => s, Y4: () => l, gO: () => r, wP: () => a });
                var n = u(771);
                u(3649);
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let a;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(a || (a = {}));
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
                const i = (e, t = !1, u = null) => {
                    const n = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (u ? n.$dyn(`${u}Case`) : n).$dyn(e);
                };
                let s;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(s || (s = {}));
                const l = (e) => (e === n.sU ? s.Untrained : e < n.yb ? s.Low : s.Normal);
            },
            8706: (e, t, u) => {
                'use strict';
                var n = u(4029),
                    a = u(7363),
                    r = u.n(a);
                let i;
                !(function (e) {
                    ((e[(e.Default = 0)] = 'Default'), (e[(e.Compact = 1)] = 'Compact'));
                })(i || (i = {}));
                var s = u(5415),
                    l = u(3403),
                    o = u(3215),
                    c = u(4598),
                    d = u(9480),
                    m = u(3946);
                const _ = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    E = (0, o.q3)()(
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
                                u = (0, m.Om)(
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
                                n = (0, m.Om)(() => Boolean(d.sE(u(), (e) => -1 === e.tankman.tankmanID))),
                                a = (0, m.Om)(() => 1 === t.slots.get().length),
                                r = (0, m.Om)((e) => t.selectedSlotIdx.get() === e),
                                i = (0, m.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                s = (0, m.Om)((e) => {
                                    var t;
                                    return null == (t = d.U2(u(), e)) ? void 0 : t.tankman;
                                }),
                                l = (0, m.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (u = t.previousLayoutID.get()),
                                        {
                                            isCurrentLayoutHangar: e === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isCurrentLayoutTankmanContainer: _.includes(e),
                                            isCurrentLayoutQuickTraining:
                                                e === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isCurrentLayoutMemberChange:
                                                e === R.views.lobby.crew.MemberChangeView('resId'),
                                            isCurrentLayoutSkillsTraining:
                                                e === R.views.lobby.crew.SkillsTrainingView('resId'),
                                            isCurrentLayoutMentorAssigment:
                                                e === R.views.lobby.crew.MentorAssigmentView('resId'),
                                            isPreviousLayoutHangar: u === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: _.includes(u),
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
                                o = (0, m.Om)(() => {
                                    const e = l();
                                    return !(
                                        a() ||
                                        e.isCurrentLayoutHangar ||
                                        e.isCurrentLayoutQuickTraining ||
                                        e.isCurrentLayoutSkillsTraining ||
                                        e.isCurrentLayoutMentorAssigment
                                    );
                                }),
                                E = (0, m.Om)(() => !a() && t.buttonsBar.get().isVisible);
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: u,
                                    isSlotSelected: r,
                                    isAnySlotSelected: i,
                                    getSlotTankman: s,
                                    isAnyEmptySlots: n,
                                    isTankmanMode: a,
                                    isChangeCrewButtonVisible: o,
                                    isButtonBarVisible: E,
                                    getLayoutInfo: l,
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
                var b = u(6483),
                    h = u.n(b),
                    v = u(6373),
                    F = u(2056);
                let p;
                !(function (e) {
                    ((e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden'));
                })(p || (p = {}));
                const C = 'ButtonsBar_base_9c',
                    D = 'ButtonsBar_button_d1',
                    w = 'ButtonsBar_button__crewOperaions_70',
                    f = 'ButtonsBar_button__crewBooks_b4',
                    B = 'ButtonsBar_button__toggle_64';
                var y = u(3457),
                    k = u(9987),
                    S = u(3649);
                const L = 'CrewBookButton_base_da',
                    I = 'CrewBookButton_button_ee',
                    T = 'CrewBookButton_icon_11',
                    x = 'CrewBookButton_discount_6b',
                    O = 'CrewBookButton_counter_5d',
                    N = (0, l.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = A(),
                            n = u.model,
                            a = u.controls,
                            i = n.crewBooks.get(),
                            s = a.onCrewBooksClick,
                            l = i.isDisabled || t;
                        return r().createElement(
                            v.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, S.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: i.totalAmount,
                                }),
                            },
                            r().createElement(
                                'div',
                                { id: 'crew_book_button', className: h()(L, e) },
                                r().createElement(
                                    y.u5,
                                    { type: y.L$.primary, mixClass: I, disabled: l, onClick: s },
                                    r().createElement('div', { className: T }),
                                ),
                                !l &&
                                    '0' !== i.newAmount &&
                                    r().createElement(
                                        'div',
                                        { className: O },
                                        r().createElement(k.A, { value: i.newAmount }),
                                    ),
                                !l && i.hasDiscount && r().createElement('div', { className: x }),
                            ),
                        );
                    });
                var M = u(3616);
                const H = ['children'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const j = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                            return a;
                        })(e, H);
                    return r().createElement(
                        M.Z,
                        P(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            u,
                        ),
                        t,
                    );
                };
                var W = u(1037);
                const Z = 'CrewOperationsButton_base_e3',
                    z = 'CrewOperationsButton_button_8e',
                    U = 'CrewOperationsButton_icon_0c',
                    $ = 'CrewOperationsButton_autoReturnIcon_f0',
                    G = (0, l.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const u = A().model.crewOperations.get();
                        return r().createElement(
                            'div',
                            { id: 'crew_operations_button', className: h()(Z, e) },
                            r().createElement(
                                j,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    direction: W.IC.Right,
                                },
                                r().createElement(
                                    v.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(
                                            y.u5,
                                            { type: y.L$.primary, mixClass: z, disabled: t },
                                            r().createElement('div', { className: U }),
                                        ),
                                        u.isAutoReturnOn && r().createElement('div', { className: $ }),
                                    ),
                                ),
                            ),
                        );
                    });
                var V = u(9631);
                const q = 'CrewToggleButton_base_03',
                    Y = 'CrewToggleButton_button_89',
                    Q = 'CrewToggleButton_iconContainer_f9',
                    K = 'CrewToggleButton_icon_a7';
                let X;
                !(function (e) {
                    ((e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus'));
                })(X || (X = {}));
                const J = (0, a.memo)(({ type: e, state: t, isDisabled: u, onClick: n, classMix: i }) => {
                        const s = (0, a.useMemo)(() => {
                            const u = t === p.Disabled ? p.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${u})`,
                            };
                        }, [e, t]);
                        return r().createElement(
                            'div',
                            { className: h()(q, i) },
                            r().createElement(
                                V.C,
                                {
                                    type: y.L$.primary,
                                    isActive: t === p.On,
                                    disabled: u || t === p.Disabled,
                                    className: Y,
                                    onClick: n,
                                },
                                r().createElement(
                                    'div',
                                    { className: Q },
                                    r().createElement('div', { className: K, style: s }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        [p.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [p.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [p.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [p.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    te = (0, l.Pi)(({ isWidgetDisabled: e }) => {
                        const t = A(),
                            u = t.model,
                            n = t.controls,
                            a = u.acceleratedTraining.get(),
                            i = u.wotPlus.get(),
                            s = n.onAcceleratedTrainingClick,
                            l = n.onWotPlusClick,
                            o = ee[a.state];
                        return r().createElement(
                            'div',
                            { className: C },
                            r().createElement(G, { classMix: h()(D, w), isWidgetDisabled: e }),
                            r().createElement(N, { classMix: h()(D, f), isWidgetDisabled: e }),
                            a.state !== p.Hidden &&
                                r().createElement(
                                    v.i,
                                    { header: o.header(), body: o.body() },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(J, {
                                            type: X.AcceleratedTraining,
                                            state: a.state,
                                            isDisabled: e || a.isDisabled,
                                            onClick: s,
                                            classMix: h()(D, B),
                                        }),
                                    ),
                                ),
                            i.state !== p.Hidden &&
                                r().createElement(
                                    F.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    r().createElement(
                                        'div',
                                        null,
                                        r().createElement(J, {
                                            type: X.WotPlus,
                                            state: i.state,
                                            isDisabled: e || i.isDisabled,
                                            onClick: l,
                                            classMix: h()(D, B),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    ue = 'CrewWidgetApp_base_cc',
                    ne = 'CrewWidgetApp_buttonsBar_e5',
                    ae = 'CrewWidgetApp_slotsList_ee';
                var re = u(7727),
                    ie = u(7030),
                    se = u(7160),
                    le = u(8018),
                    oe = u(7077);
                const ce = 'WidgetTankmanIcon_icon_0f',
                    de = 'WidgetTankmanIcon_icon__small_24',
                    me = 'WidgetTankmanIcon_icon__cropped_bd',
                    _e = ({ name: e, isSkin: t = !1, isCropped: u = !1, slotSize: n, className: a }) => {
                        const i = (0, s.GS)().mediaSize,
                            l = 'small' === n || i < s.cJ.Large;
                        return r().createElement(oe.G, {
                            name: e,
                            size: l && u ? oe.U.c100x60 : oe.U.c158x118,
                            isSkin: t,
                            classMix: h()(ce, l && u && de, !l && u && me, a),
                        });
                    },
                    Ee = {
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
                let ge;
                !(function (e) {
                    ((e.HoverGlow = 'hoverGlow'),
                        (e.SelectedGlow = 'selectedGlow'),
                        (e.Disabled = 'disabledLayer'),
                        (e.SelectedHighlight = 'selectedTankmanHighlight'),
                        (e.SelectedHighlight2 = 'selectedTankmanHighlight2'),
                        (e.TankmanSlotHover = 'tankmanSlotHover'),
                        (e.UntrainedTankmanHighlight = 'untrainedTankmanHighlight'));
                })(ge || (ge = {}));
                const Ae = ({ type: e, slotSize: t, isHigh: u, className: n, isVisible: a = !0 }) => {
                        const i = u ? e + 'High' : e;
                        return r().createElement(
                            'div',
                            { className: h()(Ee.base, Ee[`base__${t}`], a && Ee.base__visible, n) },
                            r().createElement('div', {
                                className: h()(Ee.content, Ee[`content__${i}`]),
                                style: { backgroundImage: `url(R.images.gui.maps.icons.crewWidget.slot.${t}.${i})` },
                            }),
                        );
                    },
                    be = {
                        base: 'BaseSlot_base_97',
                        base__hovered: 'BaseSlot_base__hovered_61',
                        base__inactive: 'BaseSlot_base__inactive_7e',
                        content: 'BaseSlot_content_93',
                        content__high: 'BaseSlot_content__high_81',
                        base__big: 'BaseSlot_base__big_8d',
                        delimiter: 'BaseSlot_delimiter_f8',
                        layer: 'BaseSlot_layer_cb',
                    },
                    he = ({
                        isHigh: e,
                        slotSize: t,
                        onClick: u,
                        children: n,
                        isSelected: i = !1,
                        isDisabled: s,
                        isEnabledForMouse: l,
                        isEmpty: o = !1,
                        layoutInfo: c,
                    }) => {
                        const d = (0, a.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            E = m && (!i || (!o && c.isCurrentLayoutMemberChange)),
                            g = E && !o && !c.isCurrentLayoutHangar;
                        return r().createElement(
                            'div',
                            {
                                className: h()(
                                    be.base,
                                    be[`base__${t}`],
                                    (m || i) && !c.isCurrentLayoutHangar && be.base__hovered,
                                    !l && be.base__inactive,
                                ),
                                onClick: u,
                                onMouseEnter: () => {
                                    l && (re.$.playHighlight(), _(!0));
                                },
                                onMouseLeave: () => {
                                    _(!1);
                                },
                            },
                            r().createElement(
                                'div',
                                { className: h()(be.content, e && be.content__high) },
                                !c.isCurrentLayoutMemberChange &&
                                    r().createElement(Ae, {
                                        type: ge.SelectedGlow,
                                        slotSize: t,
                                        isHigh: e,
                                        isVisible: i,
                                        className: be.layer,
                                    }),
                                r().createElement(Ae, {
                                    type: ge.HoverGlow,
                                    slotSize: t,
                                    isHigh: e,
                                    isVisible: g,
                                    className: be.layer,
                                }),
                                r().createElement(Ae, {
                                    type: ge.TankmanSlotHover,
                                    slotSize: t,
                                    isHigh: e,
                                    isVisible: E,
                                    className: be.layer,
                                }),
                                s &&
                                    r().createElement(Ae, {
                                        type: ge.Disabled,
                                        slotSize: t,
                                        isHigh: e,
                                        isVisible: !0,
                                        className: be.layer,
                                    }),
                                n,
                                r().createElement('div', { className: be.delimiter }),
                            ),
                        );
                    },
                    ve = ({
                        startState: e,
                        endState: t,
                        layoutInfo: u,
                        isPaused: n = !1,
                        children: i,
                        className: s,
                        isTankmanMode: l,
                    }) => {
                        const o = (0, ie.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: se.qb }, pause: n }),
                                [n],
                            )[0],
                            c = (0, a.useMemo)(
                                () =>
                                    u.isCurrentLayoutHangar ||
                                    u.isCurrentLayoutQuickTraining ||
                                    u.isCurrentLayoutMentorAssigment ||
                                    u.isCurrentLayoutSkillsTraining ||
                                    l
                                        ? e
                                        : (!u.isPreviousLayoutHangar && !u.isPreviousLayoutBarrack) || n
                                          ? t
                                          : o,
                                [u, n, o, e, t, l],
                            );
                        return r().createElement(ie.animated.div, { className: s, style: c }, i);
                    },
                    Fe = 'DogSlot_base_8f',
                    pe = 'DogSlot_icon_ba',
                    Ce = 'DogSlot_container_63',
                    De = 'DogSlot_roleAndName_c9',
                    we = 'DogSlot_role_5c',
                    fe = 'DogSlot_name_9c',
                    Be = 'DogSlot_btnDetails_b7',
                    ye = { transform: 'translateX(0rem)' },
                    ke = (0, l.Pi)(({ isDisabled: e, layoutInfo: t, slotSize: u }) => {
                        const n = A(),
                            i = n.model,
                            s = n.controls,
                            l = i.nation.get(),
                            o = s.onDogMoreInfoClick,
                            c = (0, a.useCallback)(() => {
                                !e && (0, re.G)(le.gO.RUDY);
                            }, [e]),
                            d = (0, a.useCallback)(
                                (t) => {
                                    (t.stopPropagation(), !e && o());
                                },
                                [o, e],
                            ),
                            m = (0, ie.useSpring)(
                                () => ({
                                    from: ye,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: se.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            _ = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(l);
                        return r().createElement(
                            v.i,
                            { header: _.header(), body: _.body() },
                            r().createElement(
                                'div',
                                null,
                                r().createElement(
                                    he,
                                    {
                                        onClick: c,
                                        isDisabled: e,
                                        isEnabledForMouse: !1,
                                        layoutInfo: t,
                                        isHigh: !1,
                                        slotSize: u,
                                    },
                                    r().createElement(
                                        ve,
                                        {
                                            startState: ye,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            className: Fe,
                                            isTankmanMode: !1,
                                        },
                                        r().createElement(
                                            ie.animated.div,
                                            { style: m },
                                            r().createElement(_e, {
                                                name: 'ussr_dog_1',
                                                isCropped: !0,
                                                className: pe,
                                                slotSize: u,
                                            }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: Ce },
                                            r().createElement(
                                                'div',
                                                { className: De },
                                                r().createElement('div', { className: we }),
                                                r().createElement(
                                                    'div',
                                                    { className: fe },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(l).name(),
                                                ),
                                            ),
                                            r().createElement(
                                                'div',
                                                { className: Be },
                                                r().createElement(
                                                    y.u5,
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
                let Se;
                !(function (e) {
                    ((e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'));
                })(Se || (Se = {}));
                var Le = u(9916);
                const Ie = ({
                        children: e,
                        contentID: t,
                        decoratorID: u = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: i = !0,
                        onMouseDown: s,
                    }) => {
                        const l = (0, a.useCallback)(() => {
                                ((0, Le.c9)(Le.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    re.$.playYes());
                            }, [r, t, u, n]),
                            o = (0, a.useCallback)(() => {
                                (0, Le.c9)(Le.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: u,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, u, n]),
                            c = (0, a.useCallback)(
                                (e) => {
                                    (s && s(e), ((e) => e.button === Se.RIGHT)(e) && l());
                                },
                                [s, l],
                            );
                        return (
                            (0, a.useEffect)(() => {
                                !1 === i && o();
                            }, [i, o]),
                            i ? (0, a.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Te = ['children'];
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const Oe = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) ((u = r[n]), t.indexOf(u) >= 0 || (a[u] = e[u]));
                                return a;
                            })(e, Te);
                        return r().createElement(
                            Ie,
                            xe({}, u, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Re = 'ChangeCrewButton_base_0f',
                    Ne = 'ChangeCrewButton_base__inactive_77',
                    Me = 'ChangeCrewButton_normalState_07',
                    He = 'ChangeCrewButton_normalState__hide_db',
                    Pe = 'ChangeCrewButton_hoverState_68',
                    je = 'ChangeCrewButton_hoverState__show_89',
                    We = ({ isSelected: e, isLocked: t, mainRole: u, isFemale: n }) => {
                        const i = (0, a.useState)(!1),
                            s = i[0],
                            l = i[1],
                            o = (0, a.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, S.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, le.Gc)(u, n, le.wP.Objective),
                                              }),
                                          ],
                                [t, n, u],
                            ),
                            c = o[0],
                            d = o[1];
                        return r().createElement(
                            v.i,
                            {
                                header: c,
                                body: d,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            r().createElement(
                                'div',
                                {
                                    className: h()(Re, (t || e) && Ne),
                                    onMouseEnter: () => {
                                        t || e || (re.$.playHighlight(), l(!0));
                                    },
                                    onMouseLeave: () => {
                                        l(!1);
                                    },
                                },
                                r().createElement('div', { className: h()(Me, s && He) }),
                                r().createElement('div', { className: h()(Pe, (e || s) && je) }),
                            ),
                        );
                    },
                    Ze = 'CrewSlot_base_ac',
                    ze = 'CrewSlot_changeCrew_02',
                    Ue = 'CrewSlot_content_5b',
                    $e = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ge = 'CrewSlot_layer_49';
                var Ve = u(7078),
                    qe = u(2603),
                    Ye = u(771);
                const Qe = 'SpecializationAndName_base_ef',
                    Ke = 'SpecializationAndName_roleWrapper_87',
                    Xe = 'SpecializationAndName_role_55',
                    Je = 'SpecializationAndName_role__withGap_35',
                    et = 'SpecializationAndName_name_aa',
                    tt = 'SpecializationAndName_name__highlighted_1b',
                    ut = ({ roles: e, tankmanID: t = Ye.y$, slotIdx: u, name: n, hasPostProgression: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: Qe },
                            r().createElement(
                                Ve.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: qe.rs, slotIdx: u, tankmanID: t },
                                },
                                r().createElement(
                                    'div',
                                    { className: Ke },
                                    d.UI(e, (e, t) =>
                                        r().createElement('div', {
                                            key: `role__${e}`,
                                            className: h()(Xe, t > 0 && Je),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: h()(et, a && tt) }, n),
                        ),
                    nt = {
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
                    at = { transform: 'translateX(0rem)', opacity: 1 },
                    rt = { transform: 'translateX(-70rem)', opacity: 0 },
                    it = (0, a.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: u,
                            vehicleType: n,
                            isDisabled: i,
                            isSelected: s,
                            slotIdx: l,
                            blinkStyle: o,
                            qtTankmanIconStyle: c,
                            isHigh: m,
                            slotSize: _,
                        }) => {
                            const E = (0, ie.useSpring)(
                                    () => ({
                                        from: at,
                                        to: rt,
                                        config: { duration: 200, easing: se.ei },
                                        immediate: !0,
                                        pause: s,
                                    }),
                                    [s],
                                ),
                                g = E[0],
                                A = E[1],
                                b = (0, a.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || A.start({ reset: !0, reverse: !0 });
                                }, [A, t]),
                                v = d.U2(e, 0) || '',
                                F = R.strings.crew_widget.vehicleWithName.$dyn((0, S.BN)(n)),
                                p = (0, S.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(v),
                                });
                            return r().createElement(
                                'div',
                                { className: h()(nt.base, nt[`base__${_}`]), onMouseEnter: b, onMouseLeave: b },
                                r().createElement(
                                    'div',
                                    { className: h()(nt.content, m && nt.content__high) },
                                    r().createElement(
                                        'div',
                                        { className: nt.tankmanIcon },
                                        r().createElement(
                                            ie.animated.div,
                                            { className: nt.iconContainer, style: c },
                                            r().createElement(_e, {
                                                name: 'empty',
                                                className: nt.icon,
                                                isCropped: !m,
                                                slotSize: _,
                                            }),
                                            r().createElement(
                                                ie.animated.div,
                                                { className: nt.iconContainer, style: i ? void 0 : o },
                                                r().createElement(_e, {
                                                    name: 'emptyRed',
                                                    className: nt.icon,
                                                    isCropped: !m,
                                                    slotSize: _,
                                                }),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: h()(nt.specialization, i && nt.specialization__disabled) },
                                        r().createElement(ut, { slotIdx: l, roles: e, name: p }),
                                    ),
                                    r().createElement(
                                        ie.animated.div,
                                        { className: nt.vehicle, style: s ? void 0 : g },
                                        (0, S.uF)(F, { name: u }),
                                    ),
                                ),
                            );
                        },
                    );
                var st = u(8617),
                    lt = u(5855);
                const ot = {
                        base: 'TankmanInfo_base_69',
                        base__disabled: 'TankmanInfo_base__disabled_36',
                        tankmanTooltipHoverArea: 'TankmanInfo_tankmanTooltipHoverArea_9b',
                        specialization: 'TankmanInfo_specialization_77',
                        specialization__withBonusSkills: 'TankmanInfo_specialization__withBonusSkills_b1',
                        base__big: 'TankmanInfo_base__big_e5',
                        skillsContainer: 'TankmanInfo_skillsContainer_17',
                        skillsContainer__withBonusSkills: 'TankmanInfo_skillsContainer__withBonusSkills_83',
                    },
                    ct = (e, t) => (e ? lt.t6.None : 'small' === t ? lt.t6.ExtraOverlap : lt.t6.Overlap),
                    dt = ({ slotIdx: e, tankman: t, isDisabled: u, layoutInfo: n, blinkStyle: a, slotSize: i }) => {
                        const s = t.skills.bonusSkills.length > 0;
                        return r().createElement(
                            'div',
                            { className: h()(ot.base, u && ot.base__disabled, ot[`base__${i}`]) },
                            r().createElement(
                                Ve.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: qe.v$, tankmanID: t.tankmanID },
                                },
                                r().createElement('div', { className: ot.tankmanTooltipHoverArea }),
                            ),
                            r().createElement(
                                'div',
                                { className: h()(ot.specialization, s && ot.specialization__withBonusSkills) },
                                r().createElement(ut, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                    hasPostProgression: t.hasPostProgression,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: h()(ot.skillsContainer, s && ot.skillsContainer__withBonusSkills) },
                                r().createElement(st.n, {
                                    tankmanID: t.tankmanID,
                                    size: lt.Ow.c24x24,
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
                                    collapseType: ct(n.isCurrentLayoutHangar, i),
                                }),
                            ),
                        );
                    },
                    mt = 'QuickTrainingTankmanSlotContent_base_8d',
                    _t = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    Et = 'QuickTrainingTankmanSlotContent_iconContainer_f1',
                    gt = 'QuickTrainingTankmanSlotContent_icon_7c',
                    At = 'QuickTrainingTankmanSlotContent_layer_10',
                    bt = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    ht = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    vt = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    Ft = { opacity: 0 },
                    pt = [{ opacity: 1 }, { opacity: 0 }],
                    Ct = (0, a.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: u,
                            qtTankmanIconStyle: n,
                            layoutInfo: i,
                            isDisabled: s,
                            slotSize: l,
                        }) => {
                            const o = (0, a.useRef)(t.lastSkillLevelFull),
                                c = (0, a.useRef)(t.skills.majorSkills.length),
                                d = (0, ie.useSpring)(() => ({ from: bt })),
                                m = d[0],
                                _ = d[1],
                                E = (0, ie.useSpring)(() => ({ from: Ft })),
                                g = E[0],
                                A = E[1],
                                b = (0, a.useRef)(!1);
                            return (
                                (0, a.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? b.current ||
                                          (_.start({
                                              from: bt,
                                              to: ht,
                                              reverse: false,
                                              config: { duration: 300, easing: se.BH },
                                          }),
                                          (b.current = !0))
                                        : b.current
                                          ? (t.skills.majorSkills.length > c.current || t.lastSkillLevelFull > o.current
                                                ? (_.start({
                                                      from: ht,
                                                      to: vt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: se.BH },
                                                  }),
                                                  (o.current = t.lastSkillLevelFull),
                                                  (c.current = t.skills.majorSkills.length),
                                                  A.start({
                                                      from: Ft,
                                                      to: pt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: se.BH },
                                                  }))
                                                : _.start({ reset: !0, reverse: !0 }),
                                            (b.current = !1))
                                          : ((o.current = t.lastSkillLevelFull),
                                            (c.current = t.skills.majorSkills.length));
                                }, [_, A, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.majorSkills.length]),
                                r().createElement(
                                    'div',
                                    { className: mt },
                                    r().createElement(
                                        ie.animated.div,
                                        { style: g },
                                        r().createElement(Ae, {
                                            type: ge.SelectedHighlight,
                                            slotSize: l,
                                            isHigh: t.skills.bonusSkills.length > 1,
                                            className: At,
                                        }),
                                    ),
                                    r().createElement(
                                        ie.animated.div,
                                        { className: Et, style: n },
                                        r().createElement(_e, {
                                            name: t.icon,
                                            isSkin: t.isInSkin,
                                            isCropped: 0 === t.skills.bonusSkills.length,
                                            slotSize: l,
                                            className: gt,
                                        }),
                                    ),
                                    r().createElement(ie.animated.div, { className: _t, style: m }),
                                    r().createElement(dt, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: i,
                                        blinkStyle: u,
                                        isDisabled: s,
                                        slotSize: l,
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
                    Dt = 'TankmanSlotContent_base_00',
                    wt = 'TankmanSlotContent_icon_ef',
                    ft = (0, a.memo)(
                        ({ slotIdx: e, tankman: t, layoutInfo: u, isDisabled: n, blinkStyle: a, slotSize: i }) =>
                            r().createElement(
                                'div',
                                { className: Dt },
                                r().createElement(_e, {
                                    name: t.icon,
                                    isCropped: 0 === t.skills.bonusSkills.length,
                                    isSkin: t.isInSkin,
                                    slotSize: i,
                                    className: wt,
                                }),
                                r().createElement(dt, {
                                    slotIdx: e,
                                    tankman: t,
                                    layoutInfo: u,
                                    isDisabled: n,
                                    blinkStyle: a,
                                    slotSize: i,
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
                            vehicleType: i,
                            isDisabled: s,
                            isSelected: l,
                            blinkSlotStyle: o,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                            slotSize: m,
                            isHigh: _,
                        }) =>
                            -1 === u.tankmanID
                                ? r().createElement(it, {
                                      roles: t,
                                      layoutInfo: n,
                                      vehicleName: a,
                                      vehicleType: i,
                                      isDisabled: s,
                                      isSelected: l,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                      isHigh: _,
                                      slotSize: m,
                                  })
                                : n.isCurrentLayoutQuickTraining || n.isCurrentLayoutMentorAssigment
                                  ? r().createElement(Ct, {
                                        slotIdx: e,
                                        tankman: u,
                                        blinkStyle: o,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: n,
                                        isDisabled: s,
                                        slotSize: m,
                                    })
                                  : r().createElement(ft, {
                                        slotIdx: e,
                                        tankman: u,
                                        layoutInfo: n,
                                        isDisabled: s,
                                        blinkStyle: o,
                                        slotSize: m,
                                    }),
                    ),
                    yt = { transform: 'translateX(0rem)' },
                    kt = { transform: 'translateX(41rem)' },
                    St = { opacity: 0 },
                    Lt = { opacity: 1 },
                    It = (0, l.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: u,
                            layoutInfo: n,
                            isSelected: i,
                            isDisabled: s,
                            blinkSlotStyle: l,
                            blinkTankmanStyle: o,
                            qtTankmanIconStyle: c,
                            slotSize: m,
                        }) => {
                            const _ = A(),
                                E = _.model,
                                g = _.controls,
                                b = g.onSlotClick,
                                v = g.onChangeCrewClick,
                                F = E.computes.isChangeCrewButtonVisible(),
                                p = E.computes.isTankmanMode(),
                                C = E.isCrewLocked.get(),
                                D = E.vehicleName.get(),
                                w = E.vehicleType.get(),
                                f = -1 === u.tankmanID ? t.length > 1 : u.skills.bonusSkills.length > 0,
                                B = !s && u.isInteractive && (!i || n.isCurrentLayoutMemberChange),
                                y = (0, a.useCallback)(() => {
                                    B && !p && ((0, re.G)(R.sounds.yes1()), b(e, u.tankmanID));
                                }, [e, u, b, p, B]),
                                k = (0, a.useCallback)(
                                    (t) => {
                                        (t.stopPropagation(),
                                            C ||
                                                (i && n.isCurrentLayoutMemberChange) ||
                                                ((0, re.G)(R.sounds.yes1()), v(e, u.tankmanID)));
                                    },
                                    [e, u, v, C, i, n.isCurrentLayoutMemberChange],
                                ),
                                S = (0, a.useMemo)(() => ({ tankmanID: u.tankmanID, slotIdx: e }), [u, e]);
                            return r().createElement(
                                Oe,
                                {
                                    args: S,
                                    isEnabled:
                                        !s && !n.isCurrentLayoutSkillsTraining && !n.isCurrentLayoutMentorAssigment,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                },
                                r().createElement(
                                    'div',
                                    null,
                                    r().createElement(
                                        he,
                                        {
                                            isHigh: f,
                                            onClick: y,
                                            isSelected: i,
                                            isDisabled: s,
                                            isEmpty: -1 === u.tankmanID,
                                            layoutInfo: n,
                                            isEnabledForMouse: B,
                                            slotSize: m,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Ze },
                                            u.hasWarning &&
                                                r().createElement(Ae, {
                                                    type: ge.UntrainedTankmanHighlight,
                                                    slotSize: m,
                                                    isHigh: f,
                                                    className: Ge,
                                                }),
                                            i &&
                                                r().createElement(Ae, {
                                                    type: p ? ge.SelectedHighlight2 : ge.SelectedHighlight,
                                                    slotSize: m,
                                                    isHigh: f,
                                                    className: Ge,
                                                }),
                                            r().createElement(
                                                ve,
                                                {
                                                    startState: yt,
                                                    endState: kt,
                                                    layoutInfo: n,
                                                    isPaused: !F,
                                                    className: h()(Ue, F && $e),
                                                    isTankmanMode: p,
                                                },
                                                r().createElement(Bt, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: u,
                                                    layoutInfo: n,
                                                    isDisabled: s,
                                                    vehicleName: D,
                                                    vehicleType: w,
                                                    blinkSlotStyle: l,
                                                    blinkTankmanStyle: o,
                                                    qtTankmanIconStyle: c,
                                                    isSelected: i,
                                                    slotSize: m,
                                                    isHigh: f,
                                                }),
                                            ),
                                            F &&
                                                r().createElement(
                                                    'div',
                                                    { onClick: k },
                                                    r().createElement(
                                                        ve,
                                                        {
                                                            startState: St,
                                                            endState: Lt,
                                                            layoutInfo: n,
                                                            className: ze,
                                                            isTankmanMode: p,
                                                        },
                                                        r().createElement(We, {
                                                            isSelected: n.isCurrentLayoutMemberChange && i,
                                                            isLocked: C,
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
                    Tt = 'SlotsList_base_5f',
                    xt = 'SlotsList_base__hangar_8b';
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const Rt = { transform: new ie.SpringValue('translateX(0rem)') },
                    Nt = { transform: new ie.SpringValue('translateX(15rem)') },
                    Mt = (0, l.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: u, slotSize: n }) => {
                        const i = A().model,
                            s = i.computes.isAnyEmptySlots(),
                            l = (0, ie.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: se.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            o = l[0],
                            c = l[1];
                        (0, a.useEffect)(() => {
                            s ? c.resume() : c.pause();
                        }, [c, s]);
                        const d = (0, ie.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: se.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            m = d[0],
                            _ = d[1];
                        (0, a.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ||
                            e.isCurrentLayoutSkillsTraining ||
                            e.isCurrentLayoutMentorAssigment
                                ? _.resume()
                                : _.pause();
                        }, [_, e]);
                        const E = (0, ie.useSpring)(() => ({
                                from: Rt,
                                to: Nt,
                                delay: 200,
                                config: { duration: 300, easing: se.ei },
                            }))[0],
                            g = (0, a.useMemo)(
                                () =>
                                    e.isCurrentLayoutQuickTraining || e.isCurrentLayoutMentorAssigment
                                        ? e.isPreviousLayoutQuickTraining || e.isPreviousLayoutMentorAssigment
                                            ? Nt
                                            : E
                                        : Rt,
                                [e, E],
                            );
                        return r().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: h()(Tt, e.isCurrentLayoutHangar && xt, u) },
                            i.computes
                                .getSlots()
                                .map((u, a) =>
                                    r().createElement(
                                        It,
                                        Ot({}, u, {
                                            layoutInfo: e,
                                            key: `slot_${a}_${u.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (i.computes.isSlotSelected(u.slotIdx) || i.computes.isTankmanMode()),
                                            isDisabled: t,
                                            blinkSlotStyle: m,
                                            blinkTankmanStyle: o,
                                            qtTankmanIconStyle: g,
                                            slotSize: n,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Ht = (0, l.Pi)(() => {
                        const e = A().model,
                            t = e.isDisabled.get(),
                            u = e.hasDog.get(),
                            n = e.computes.getLayoutInfo(),
                            a = (0, s.GS)().mediaSize,
                            l = ((e, t) =>
                                e === i.Compact
                                    ? t < s.cJ.ExtraLarge
                                        ? 'small'
                                        : 'big'
                                    : t < s.cJ.Large
                                      ? 'small'
                                      : 'big')(e.slotSizeMode.get(), a);
                        return r().createElement(
                            'div',
                            { className: ue },
                            e.computes.isButtonBarVisible() &&
                                r().createElement(
                                    'div',
                                    { className: ne },
                                    r().createElement(te, { isWidgetDisabled: t }),
                                ),
                            r().createElement(Mt, { layoutInfo: n, isWidgetDisabled: t, className: ae, slotSize: l }),
                            u && r().createElement(ke, { layoutInfo: n, isDisabled: t, slotSize: l }),
                        );
                    }),
                    Pt = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') };
                (0, a.memo)(() =>
                    r().createElement(n.z, null, r().createElement(g, { options: Pt }, r().createElement(Ht, null))),
                );
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
                u.d(t, { Br: () => r, HZ: () => n, M4: () => i, rs: () => s, v$: () => a });
                const n = 'crewPerkGf',
                    a = 'tankman',
                    r = 'skillsEfficiency',
                    i = 'crewSkillUntrained',
                    s = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, u) => {
                'use strict';
                u.d(t, { GT: () => l, I: () => r, jw: () => i, sU: () => n, vA: () => s, y$: () => o, yb: () => a });
                const n = -1,
                    a = 1,
                    r = 100,
                    i = 'new_skill',
                    s = 9,
                    l = 6,
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
            9734: (e, t, u) => {
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
        return (__webpack_modules__[e](u, u.exports, __webpack_require__), u.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, n] = deferred[l], r = !0, i = 0; i < t.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, n];
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
        (__webpack_require__.j = 8003),
        (() => {
            var e = { 8003: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        a,
                        [r, i, s] = u,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var o = s(__webpack_require__);
                    }
                    for (t && t(u); l < r.length; l++)
                        ((a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(o);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(8706));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
