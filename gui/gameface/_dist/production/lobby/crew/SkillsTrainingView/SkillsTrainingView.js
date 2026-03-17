(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => c.L, qE: () => c.q, u5: () => d });
                var a = n(6483),
                    r = n.n(a),
                    i = n(1641),
                    s = n(7727),
                    l = n(7363),
                    o = n.n(l),
                    u = n(6880),
                    c = n(2106);
                const d = ({
                    children: e,
                    size: t,
                    disabled: n,
                    mixClass: a,
                    onMouseEnter: d,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: g,
                    onMouseLeave: E,
                    onClick: b,
                    isFocused: p = !1,
                    type: f = c.L.primary,
                    soundHover: v = 'highlight',
                    soundClick: h = 'play',
                }) => {
                    const A = (0, l.useRef)(null),
                        w = (0, l.useState)(p),
                        C = w[0],
                        k = w[1],
                        y = (0, l.useState)(!1),
                        D = y[0],
                        F = y[1];
                    return (
                        (0, l.useEffect)(() => {
                            function e(e) {
                                C && null !== A.current && !A.current.contains(e.target) && k(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [C]),
                        (0, l.useEffect)(() => {
                            k(p);
                        }, [p]),
                        o().createElement(
                            'div',
                            {
                                ref: A,
                                className: r()(
                                    u.Z.base,
                                    u.Z[`base__${f}`],
                                    n && u.Z.base__disabled,
                                    t && u.Z[`base__${t}`],
                                    C && u.Z.base__focus,
                                    D && u.Z.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    n || (null !== v && (0, s.G)(v), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    n || (g && g(e), F(!1));
                                },
                                onMouseDown: function (e) {
                                    if (n) return;
                                    const t = e.button === i.t.LEFT;
                                    (null !== h && t && (0, s.G)(h),
                                        m && m(e),
                                        p && (n || (A.current && (A.current.focus(), k(!0)))),
                                        t && F(!0));
                                },
                                onMouseLeave: function (e) {
                                    n || (E && E(e), F(!1));
                                },
                                onClick: function (e) {
                                    n || (b && b(e));
                                },
                            },
                            f !== c.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: u.Z.back }),
                                    o().createElement('span', { className: u.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: r()(u.Z.state, u.Z.state__default) },
                                o().createElement('span', { className: u.Z.stateDisabled }),
                                o().createElement('span', { className: u.Z.stateHighlightHover }),
                                o().createElement('span', { className: u.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: u.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
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
            2686: (e, t, n) => {
                'use strict';
                n.d(t, { At: () => o });
                var a = n(7363),
                    r = n.n(a),
                    i = n(3458);
                n(2902);
                const s = [
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
                const o = (0, a.memo)(function (e) {
                        let t = e.width,
                            n = e.height,
                            o = e.getImageSource,
                            _ = e.frameCount,
                            m = e.onAnimate,
                            g = e.frameTime,
                            E = void 0 === g ? i.O.FRAME_TIME : g,
                            b = e.initialFrameIndex,
                            p = void 0 === b ? i.O.INITIAL_FRAME_INDEX : b,
                            f = e.lastFrameIndex,
                            v = void 0 === f ? _ - 1 : f,
                            h = e.loop,
                            A = void 0 === h ? i.O.LOOP : h,
                            w = e.state,
                            C = void 0 === w ? i.O.STATE : w,
                            k = e.onAnimationDone,
                            y = e.onAnimationComplete,
                            D = e.poster,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, s);
                        const S = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = S.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        (t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y));
                                    };
                                switch (C) {
                                    case 'play':
                                        return (function () {
                                            const e = d(p, v, o),
                                                t = u(p, v),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        i = e.get(r);
                                                    i
                                                        ? (null == m || m(r, i),
                                                          n(i),
                                                          r === v &&
                                                              (null == y || y(),
                                                              A || (null == k || k(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, E);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === p && D ? { path: D, x: 0, y: 0 } : o(p),
                                                t = new Image();
                                            t.src = e.path;
                                            const a = () => n(c(e, t));
                                            return (
                                                t.addEventListener('load', a),
                                                () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [E, o, p, v, A, m, y, k, D, C]),
                            r().createElement('canvas', l({}, F, { width: t, height: n, ref: S }))
                        );
                    }),
                    u = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return ((n += 1), n > t && (n = e), a);
                        };
                    },
                    c = (e, t) => Object.assign({}, e, { img: t }),
                    d = (e, t, n) => {
                        const a = new Map(),
                            r = {};
                        for (let i = e; i <= t; i++) {
                            const e = n(i),
                                t = r[e.path];
                            if (t) a.set(i, c(e, t));
                            else {
                                const t = new Image();
                                ((r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(i, c(e, t)));
                            }
                        }
                        return a;
                    };
            },
            3458: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => a });
                const a = { FRAME_TIME: 33, INITIAL_FRAME_INDEX: 0, LOOP: !0, STATE: 'play' };
            },
            126: (e, t, n) => {
                'use strict';
                function a(e) {
                    const t = e.chunk,
                        n = t.rows * t.columns;
                    return (a) => {
                        const r = a % n,
                            i = (r % t.columns) * e.width,
                            s = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / n)), x: i, y: s };
                    };
                }
                function r(e) {
                    return (t) => `${e}${t}`;
                }
                n.d(t, { V: () => r, q: () => a });
            },
            2902: (e, t, n) => {
                'use strict';
                (n(7363), n(3458));
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    r = n.n(a),
                    i = n(7363),
                    s = n.n(i),
                    l = n(9734);
                const o = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function u() {
                    return (
                        (u =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        u.apply(this, arguments)
                    );
                }
                const c = (e) => {
                    let t = e.value,
                        n = e.isEmpty,
                        a = void 0 !== n && n,
                        i = e.className,
                        c = e.size,
                        d = void 0 === c ? 'normal' : c,
                        _ = e.fadeInAnimation,
                        m = void 0 !== _ && _,
                        g = e.hide,
                        E = void 0 !== g && g,
                        b = e.maximumNumber,
                        p = void 0 === b ? 99 : b,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, o);
                    const v = a ? null : t,
                        h = 'string' == typeof v;
                    if ((v && !h && v < 0) || 0 === v) return null;
                    const A = v && !h && v > p,
                        w = r()(
                            l.Z.base,
                            l.Z[`base__${d}`],
                            m && l.Z.base__animated,
                            E && l.Z.base__hidden,
                            !v && l.Z.base__pattern,
                            a && l.Z.base__empty,
                            i,
                        );
                    return s().createElement(
                        'div',
                        u({ className: w }, f),
                        s().createElement('div', { className: l.Z.bg }),
                        s().createElement('div', { className: l.Z.pattern }),
                        s().createElement(
                            'div',
                            { className: r()(l.Z.value, h && l.Z.value__text) },
                            A ? p : v,
                            A && s().createElement('span', { className: l.Z.plus }, '+'),
                        ),
                    );
                };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Q: () => l, Y: () => u });
                var a = n(3138),
                    r = n(7363),
                    i = n(1043),
                    s = n(5262);
                function l(e = a.O.client.getSize('rem')) {
                    const t = e.width,
                        n = e.height;
                    return Object.assign({ width: t, height: n }, (0, s.T)(t, n, i.j));
                }
                const o = l(),
                    u = (0, r.createContext)(o);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => l });
                var a = n(3138),
                    r = n(7363),
                    i = n.n(r),
                    s = n(3495);
                const l = ({ children: e }) => {
                    const t = (0, r.useState)(s.Q),
                        n = t[0],
                        l = t[1],
                        o = (0, r.useState)(!1),
                        u = o[0],
                        c = o[1];
                    return (
                        (0, r.useLayoutEffect)(() => {
                            function e() {
                                l((e) => {
                                    const t = a.O.client.getSize('rem');
                                    return e.width === t.width && e.height === t.height ? e : (0, s.Q)(t);
                                });
                            }
                            return (
                                e(),
                                c(!0),
                                a.O.client.events.on('clientResized', e),
                                a.O.client.events.on('self.onScaleUpdated', e),
                                () => {
                                    (a.O.client.events.off('clientResized', e),
                                        a.O.client.events.off('self.onScaleUpdated', e));
                                }
                            );
                        }, []),
                        i().createElement(s.Y.Provider, { value: n }, u && e)
                    );
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(7363),
                    r = n(7382),
                    i = n(3495);
                const s = ['children'];
                (0, a.memo)((e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, s);
                    const l = (0, a.useContext)(i.Y),
                        o = l.extraLarge,
                        u = l.large,
                        c = l.medium,
                        d = l.small,
                        _ = l.extraSmall,
                        m = l.extraLargeWidth,
                        g = l.largeWidth,
                        E = l.mediumWidth,
                        b = l.smallWidth,
                        p = l.extraSmallWidth,
                        f = l.extraLargeHeight,
                        v = l.largeHeight,
                        h = l.mediumHeight,
                        A = l.smallHeight,
                        w = l.extraSmallHeight,
                        C = { extraLarge: f, large: v, medium: h, small: A, extraSmall: w };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && o) return t;
                        if (n.large && u) return t;
                        if (n.medium && c) return t;
                        if (n.small && d) return t;
                        if (n.extraSmall && _) return t;
                    } else {
                        if (n.extraLargeWidth && m) return (0, r.H)(t, n, C);
                        if (n.largeWidth && g) return (0, r.H)(t, n, C);
                        if (n.mediumWidth && E) return (0, r.H)(t, n, C);
                        if (n.smallWidth && b) return (0, r.H)(t, n, C);
                        if (n.extraSmallWidth && p) return (0, r.H)(t, n, C);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && f) return t;
                            if (n.largeHeight && v) return t;
                            if (n.mediumHeight && h) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && w) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => a });
                const a = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, n) => {
                'use strict';
                n.d(t, { YN: () => r.Y, ZN: () => a.Z });
                n(6010);
                var a = n(1039),
                    r = n(3495);
            },
            1043: (e, t, n) => {
                'use strict';
                n.d(t, { j: () => a });
                const a = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, n) => {
                'use strict';
                var a;
                function r(e, t, n) {
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
                        i = Math.min(a, r);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
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
                }
                (n.d(t, { T: () => r }),
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
                    })(a || (a = {})));
            },
            1037: (e, t, n) => {
                'use strict';
                n.d(t, { IC: () => a });
                var a,
                    r = n(6483),
                    i = n.n(r),
                    s = n(6373),
                    l = n(3138),
                    o = n(2039),
                    u = n(5099),
                    c = n(7727),
                    d = n(9916),
                    _ = n(7363),
                    m = n.n(_),
                    g = n(4769),
                    E = n(8475);
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(a || (a = {}));
                const b = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    (
                        {
                            children: e,
                            disableAutoSizeUpdate: t,
                            onOutsideClick: n,
                            className: a,
                            customStyles: r = {},
                        },
                        p,
                    ) => {
                        const f = (0, _.useRef)(null),
                            v = (0, _.useRef)(null),
                            h = (0, _.useRef)(null),
                            A = (0, _.useState)(window.decorator && window.decorator.directionType),
                            w = A[0],
                            C = A[1],
                            k = (0, _.useCallback)(() => {
                                (c.$.playClick(), l.O.view.sendEvent.close());
                            }, []),
                            y = (0, _.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            D = i()(g.Z.arrow, g.Z[`arrow${b[w]}`]);
                        (0, o.b)(
                            () => (
                                l.O.client.events.mouse.enableOutside(),
                                l.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : l.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const F = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === f.current || t === h.current) return;
                                        t = t.parentNode;
                                    } while (t);
                                    const a = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = l.O.client.getMouseGlobalPosition(),
                                            t = ![a.boundX, a.boundY, a.boundWidth, a.boundHeight].includes(void 0),
                                            n =
                                                e.x < a.boundX ||
                                                e.x > a.boundX + a.boundWidth ||
                                                e.y > a.boundY + a.boundHeight ||
                                                e.y < a.boundY;
                                        if (t && !n) return;
                                    }
                                    n ? n() : l.O.view.sendEvent.close('popover');
                                },
                                [f, h, n],
                            ),
                            S = (0, _.useCallback)(() => {
                                C(window.decorator.directionType);
                            }, []),
                            B = (0, E.w)(),
                            L = (0, _.useCallback)(() => {
                                const e = v.current;
                                if (e)
                                    return (
                                        l.O.view.freezeTextureBeforeResize(),
                                        B.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            (l.O.view.resize(t, n), S());
                                        })
                                    );
                            }, [B, S]);
                        return (
                            (0, _.useImperativeHandle)(
                                p,
                                () => ({ updateSize: L, updateDirection: S, elementRef: v }),
                                [L, S],
                            ),
                            (0, o.b)(() => {
                                l.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', F, { capture: !0 });
                                const e = (0, u.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => L()),
                                    () => {
                                        (e.cancel(), document.removeEventListener('mousedown', F));
                                    }
                                );
                            }, [L, F, t]),
                            m().createElement(
                                'div',
                                { className: i()(g.Z.base, a), ref: v },
                                m().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    m().createElement(
                                        'div',
                                        { className: g.Z.content, ref: f },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            m().createElement(
                                                s.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                m().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: k,
                                                    onMouseEnter: y,
                                                    ref: h,
                                                }),
                                            ),
                                    ),
                                    m().createElement('div', { className: D, style: r.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => u });
                var a = n(1037),
                    r = n(9916),
                    i = n(7363),
                    s = n.n(i);
                const l = [
                    'contentId',
                    'decoratorId',
                    'direction',
                    'targetId',
                    'args',
                    'onClick',
                    'children',
                    'isEnabled',
                ];
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
                const u = (e) => {
                    let t = e.contentId,
                        n = e.decoratorId,
                        u = e.direction,
                        c = void 0 === u ? a.IC.Top : u,
                        d = e.targetId,
                        _ = e.args,
                        m = e.onClick,
                        g = e.children,
                        E = e.isEnabled,
                        b = void 0 === E || E,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, l);
                    const f = (0, i.useRef)(null),
                        v = (0, i.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            f.current && (0, r.P3)(t, c, f.current, n, d, _);
                        }, [t, c, _, n, d]);
                    return s().createElement(
                        'div',
                        o(
                            {
                                ref: f,
                                onMouseDown:
                                    ((h = g.props.onClick),
                                    (e) => {
                                        b && (v(), m && m(e), h && h(e));
                                    }),
                            },
                            p,
                        ),
                        g,
                    );
                    var h;
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => o });
                var a = n(7363),
                    r = n.n(a),
                    i = n(2056);
                const s = ['children'];
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
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, s);
                    return r().createElement(
                        i.u,
                        l(
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
                n.d(t, { l: () => u });
                var a = n(7363),
                    r = n.n(a),
                    i = n(7078),
                    s = n(6373),
                    l = n(2056);
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
                const u = ({ children: e, tooltipArgs: t, className: n }) => {
                    if (!t) return e;
                    const a = r().createElement('div', { className: n }, e);
                    if (t.header || t.body) return r().createElement(s.i, t, a);
                    const u = t.contentId;
                    return u ? r().createElement(l.u, o({}, t, { contentId: u }), a) : r().createElement(i.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => u });
                var a = n(2056),
                    r = n(7363),
                    i = n.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    u = (e) => {
                        let t = e.children,
                            n = e.body,
                            u = e.header,
                            c = e.note,
                            d = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, s);
                        const g = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: n, header: u, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, u, c, _]);
                        return i().createElement(
                            a.u,
                            l(
                                {
                                    contentId:
                                        ((E = null == _ ? void 0 : _.hasHtmlContent),
                                        E ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: g,
                                },
                                m,
                            ),
                            t,
                        );
                        var E;
                    };
            },
            2056: (e, t, n) => {
                'use strict';
                n.d(t, { u: () => u });
                var a = n(7902),
                    r = n(9916),
                    i = n(7363);
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
                function l(e) {
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
                const o = (e, t, n = {}, a = 0) => {
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
                    u = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            u = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            g = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            b = void 0 !== E && E,
                            p = e.decoratorId,
                            f = void 0 === p ? 0 : p,
                            v = e.isEnabled,
                            h = void 0 === v || v,
                            A = e.targetId,
                            w = void 0 === A ? 0 : A,
                            C = e.onShow,
                            k = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, s);
                        const D = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, i.useMemo)(() => w || (0, a.F)().resId, [w]),
                            S = (0, i.useCallback)(() => {
                                (D.current.isVisible && D.current.timeoutId) ||
                                    (o(n, f, { isMouseEvent: !0, on: !0, arguments: l(r) }, F),
                                    C && C(),
                                    (D.current.isVisible = !0));
                            }, [n, f, r, F, C]),
                            B = (0, i.useCallback)(() => {
                                if (D.current.isVisible || D.current.timeoutId) {
                                    const e = D.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (D.current.timeoutId = 0)),
                                        o(n, f, { on: !1 }, F),
                                        D.current.isVisible && k && k(),
                                        (D.current.isVisible = !1));
                                }
                            }, [n, f, F, k]),
                            L = (0, i.useCallback)((e) => {
                                D.current.isVisible &&
                                    ((D.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (D.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(D.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        ((0, i.useEffect)(() => {
                            const e = D.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === h && B();
                            }, [h, B]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        (window.removeEventListener('mouseleave', B), B());
                                    }
                                ),
                                [B],
                            ));
                        return h
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(D.current.timeoutId),
                                                      (D.current.timeoutId = window.setTimeout(S, g ? 100 : 400)),
                                                      u && u(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              (B(), null == c || c(t), null == e || e(t));
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              (!1 === b && B(), null == _ || _(t), null == e || e(t));
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              (!1 === b && B(), null == d || d(t), null == e || e(t));
                                          })(t.props.onMouseDown),
                                      },
                                      y,
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
                n.d(t, { U: () => l });
                var a = n(3138);
                function r(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
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
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function l({ initializer: e = !0, rootId: t = 0, getRoot: n = s, context: i = 'model' } = {}) {
                    const l = new Map();
                    function o(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? l.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, n) => {
                            n.forEach((t) => {
                                const n = l.get(t);
                                void 0 !== n && n(e);
                            });
                        });
                    });
                    const u = (e) => {
                        const a = n(t),
                            r = i.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const s = 'string' == typeof r ? `${i}.${r}` : i,
                                o = a.O.view.addModelObserver(s, t, !0);
                            return (l.set(o, n), e && n(u(r)), o);
                        },
                        readByPath: u,
                        createCallback: (e, t) => {
                            const n = u(t);
                            return (...t) => {
                                n(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = u(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (var e, n = r(l.keys()); !(e = n()).done; ) {
                                o(e.value, t);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, t, n) => {
                'use strict';
                n.d(t, { q3: () => o });
                var a = n(4598),
                    r = n(9174),
                    i = n(7363),
                    s = n.n(i),
                    l = n(8246);
                const o = () => (e, t) => {
                    const n = (0, i.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: u, children: c, mocks: d }) {
                            const _ = (0, i.useRef)([]),
                                m = (n, i, s) => {
                                    var o;
                                    const u = l.U(i),
                                        c =
                                            'real' === n
                                                ? u
                                                : Object.assign({}, u, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        g = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = d(e),
                                                        i = r.LO.box(t, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const i = null != t ? t : d(e),
                                                        s = r.LO.box(i, { equals: a.jv });
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
                                                    const i = null != t ? t : d(e),
                                                        s = r.LO.box(i, { equals: a.jv });
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
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            i[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                    {
                                                        const i = e,
                                                            s = Object.entries(i),
                                                            l = s.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        s.forEach(([t, n]) => {
                                                                            l[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            l
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        E = { mode: n, model: g, externalModel: c, cleanup: m };
                                    return {
                                        model: g,
                                        controls: 'mocks' === n && s ? s.controls(E) : t(E),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                g = (0, i.useRef)(!1),
                                E = (0, i.useState)(o),
                                b = E[0],
                                p = E[1],
                                f = (0, i.useState)(() => m(o, u, d)),
                                v = f[0],
                                h = f[1];
                            return (
                                (0, i.useEffect)(() => {
                                    g.current ? h(m(b, u, d)) : (g.current = !0);
                                }, [d, b, u]),
                                (0, i.useEffect)(() => {
                                    p(o);
                                }, [o]),
                                (0, i.useEffect)(
                                    () => () => {
                                        (v.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [v],
                                ),
                                s().createElement(n.Provider, { value: v }, c)
                            );
                        },
                        () => (0, i.useContext)(n),
                    ];
                };
            },
            7044: (e, t, n) => {
                'use strict';
                (n(3649), n(9916));
                var a = n(8613);
                (Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime);
            },
            527: (e, t, n) => {
                'use strict';
                (n.r(t),
                    n.d(t, { mouse: () => c, off: () => o, on: () => l, onResize: () => i, onScaleUpdated: () => s }));
                var a = n(2472),
                    r = n(1176);
                const i = (0, a.E)('clientResized'),
                    s = (0, a.E)('self.onScaleUpdated'),
                    l = (e, t) => engine.on(e, t),
                    o = (e, t) => engine.off(e, t),
                    u = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') };
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
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const i = `mouse${t}`,
                                        s = u[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, l),
                                        a(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(i, l),
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
                    return Object.assign({}, i, {
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
                        getSize: () => i,
                        graphicsQuality: () => l,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var a = n(527),
                    r = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const l = {
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
                    i = n(514);
                const s = { view: n(7641), client: a, sound: i.ZP, intl: r.N };
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
                n.d(t, { ZP: () => s });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    s = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
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
                        addPreloadTexture: () => o,
                        arabic2roman: () => F,
                        children: () => r,
                        displayStatus: () => i.W,
                        displayStatusIs: () => B,
                        enableFullScreenModeSupported: () => x,
                        events: () => s.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => k,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => y,
                        getExternalPaddingsRem: () => S,
                        getFontNames: () => D,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        initExternalPaddings: () => I,
                        isEventHandled: () => C,
                        isFocused: () => A,
                        pxToRem: () => f,
                        remToPx: () => v,
                        resize: () => g,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => N,
                    }));
                var a = n(9690),
                    r = n(3722),
                    i = n(6112),
                    s = n(6538),
                    l = n(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function g(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function f(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function w() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function k() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const D = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    F = a.cg;
                function S() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const B = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
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
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function x() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function I(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            n = t.top,
                            a = t.right,
                            r = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${n}rem`),
                            e.style.setProperty('--external-padding-right', `${a}rem`),
                            e.style.setProperty('--external-padding-bottom', `${r}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => u });
                const a = ['args'];
                const r = 2,
                    i = 16,
                    s = 32,
                    l = 64,
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((r = i),
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
                    u = {
                        close(e) {
                            o('popover' === e ? r : s);
                        },
                        minimize() {
                            o(l);
                        },
                        move(e) {
                            o(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, t, n) => {
                'use strict';
                n.d(t, { jv: () => r, yR: () => a });
                function a(e) {
                    return e;
                }
                function r() {
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
                    var i;
                    t &&
                        ((r = (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) || ''),
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
                n.d(t, { D9: () => r });
                (n(3469), n(2133));
                var a = n(2790);
                (n(579), n(5360), n(9056));
                const r = a.Z;
            },
            6536: (e, t, n) => {
                'use strict';
                n(7363);
            },
            3469: (e, t, n) => {
                'use strict';
                (n(7044), n(7363));
            },
            2133: (e, t, n) => {
                'use strict';
                n(7363);
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => o, GS: () => u, cJ: () => s, fd: () => l });
                var a = n(7363),
                    r = n(7739),
                    i = n(1043);
                let s, l, o;
                (!(function (e) {
                    ((e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.j.small.width)] = 'Small'),
                        (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                        (e[(e.Large = i.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge'));
                })(s || (s = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.width)] = 'Small'),
                            (e[(e.Medium = i.j.medium.width)] = 'Medium'),
                            (e[(e.Large = i.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.width)] = 'ExtraLarge'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge'));
                    })(o || (o = {})));
                const u = () => {
                    const e = (0, a.useContext)(r.YN),
                        t = e.width,
                        n = e.height,
                        i = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return s.ExtraLarge;
                                case e.large:
                                    return s.Large;
                                case e.medium:
                                    return s.Medium;
                                case e.small:
                                    return s.Small;
                                case e.extraSmall:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(e),
                        u = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return l.ExtraLarge;
                                case e.largeWidth:
                                    return l.Large;
                                case e.mediumWidth:
                                    return l.Medium;
                                case e.smallWidth:
                                    return l.Small;
                                case e.extraSmallWidth:
                                    return l.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), l.ExtraSmall);
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
                    return { mediaSize: i, mediaWidth: u, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
                };
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
                n.d(t, { b: () => r, k: () => i });
                var a = n(7363);
                const r = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    i = (e) => {
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
                n.d(t, { V: () => i });
                var a = n(7363),
                    r = n(3138);
                const i = () => {
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
                n.d(t, { w: () => i });
                var a = n(7363),
                    r = n(2039);
                function i() {
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
                n.d(t, { U2: () => a, UI: () => i, dF: () => l, lN: () => s, sE: () => o });
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function i(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function s(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function l(e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        const a = r(e[n]);
                        if (t(a, n, e)) return a;
                    }
                }
                function o(e, t) {
                    for (let n = 0; n < e.length; n++) {
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
            4385: (e, t, n) => {
                'use strict';
                n.d(t, { K: () => a });
                const a = (e, t) => {
                    const n = [];
                    for (let a = 0; a < e; a++) n.push(t(a));
                    return n;
                };
            },
            1641: (e, t, n) => {
                'use strict';
                let a;
                (n.d(t, { t: () => a }),
                    (function (e) {
                        ((e[(e.LEFT = 0)] = 'LEFT'),
                            (e[(e.WHEEL = 1)] = 'WHEEL'),
                            (e[(e.RIGHT = 2)] = 'RIGHT'),
                            (e[(e.FOURTH = 3)] = 'FOURTH'),
                            (e[(e.FIFTH = 4)] = 'FIFTH'));
                    })(a || (a = {})));
            },
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => l, cg: () => i });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) ((t += a[n]), (e -= r[n]));
                    return t;
                }
                const s = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    l = (e) => (s ? `${e}` : i(e));
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
                n.d(t, { BN: () => i, Eg: () => o, dL: () => u, e: () => s, uF: () => r, z4: () => l });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function i(e) {
                    return e.replace(/-/g, '_');
                }
                function s(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(a || (a = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    u =
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
                        (e) => {
                            return (
                                (t = R.strings.common.percentValue()),
                                (n = { value: e }),
                                t.replace(/\{\w+\}/g, (e) => String(n[e.slice(1, -1)]))
                            );
                            var t, n;
                        });
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
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
                        const i = a.O.view.addModelObserver(e, n, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                const i = r;
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
                    c1: () => D,
                    Sw: () => i.Z,
                    B3: () => o,
                    Gr: () => u,
                    Z5: () => s.Z5,
                    B0: () => l,
                    c9: () => v,
                    wU: () => C,
                    ry: () => p,
                    Eu: () => f,
                    SW: () => A,
                    P3: () => w,
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
                var i = n(1358);
                var s = n(8613);
                let l;
                !(function (e) {
                    ((e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'));
                })(l || (l = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(5521),
                    m = n(3138);
                const g = ['args'];
                function E(e, t, n, a, r, i, s) {
                    try {
                        var l = e[i](s),
                            o = l.value;
                    } catch (e) {
                        return void n(e);
                    }
                    l.done ? t(o) : Promise.resolve(o).then(a, r);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (a, r) {
                                        var i = e.apply(t, n);
                                        function s(e) {
                                            E(i, a, r, s, l, 'next', e);
                                        }
                                        function l(e) {
                                            E(i, a, r, s, l, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    h = () => v(l.CLOSE),
                    A = () => v(l.POP_OVER, { on: !1 }),
                    w = (e, t, n, a, r = R.invalid('resId'), i) => {
                        const s = m.O.view.getViewGlobalPosition(),
                            o = n.getBoundingClientRect(),
                            u = o.x,
                            c = o.y,
                            d = o.width,
                            _ = o.height,
                            g = {
                                x: m.O.view.pxToRem(u) + s.x,
                                y: m.O.view.pxToRem(c) + s.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(_),
                            };
                        v(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: b(g),
                            on: !0,
                            args: i,
                        });
                    },
                    C = () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                    k = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var y = n(7572);
                const D = r.instance,
                    F = {
                        DataTracker: i.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: u,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => v(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: w,
                        addEscapeListener: (e) => {
                            const t = (t) => k(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            k(e, h);
                        },
                        handleViewEvent: v,
                        onBindingsReady: p,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
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
                        ClickOutsideManager: D,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => i, Z5: () => a, cy: () => r });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t, n = 2) => systemLocale.getRealFormat(e, t, n),
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
                    i = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            1504: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => o });
                var a = n(7739),
                    r = n(7363),
                    i = n.n(r),
                    s = n(2849);
                const l = ['children'];
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, l);
                    return i().createElement(a.ZN, null, i().createElement(s.l, n, t));
                };
            },
            2849: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => E });
                var a = n(6483),
                    r = n.n(a),
                    i = n(926),
                    s = n.n(i),
                    l = n(7363),
                    o = n.n(l),
                    u = n(5415);
                const c = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const _ = {
                        [u.fd.ExtraSmall]: '',
                        [u.fd.Small]: s().SMALL_WIDTH,
                        [u.fd.Medium]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH}`,
                        [u.fd.Large]: `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH}`,
                        [u.fd.ExtraLarge]:
                            `${s().SMALL_WIDTH} ${s().MEDIUM_WIDTH} ${s().LARGE_WIDTH} ${s().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
                        [u.Aq.ExtraSmall]: '',
                        [u.Aq.Small]: s().SMALL_HEIGHT,
                        [u.Aq.Medium]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT}`,
                        [u.Aq.Large]: `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT}`,
                        [u.Aq.ExtraLarge]:
                            `${s().SMALL_HEIGHT} ${s().MEDIUM_HEIGHT} ${s().LARGE_HEIGHT} ${s().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [u.cJ.ExtraSmall]: '',
                        [u.cJ.Small]: s().SMALL,
                        [u.cJ.Medium]: `${s().SMALL} ${s().MEDIUM}`,
                        [u.cJ.Large]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE}`,
                        [u.cJ.ExtraLarge]: `${s().SMALL} ${s().MEDIUM} ${s().LARGE} ${s().EXTRA_LARGE}`,
                    },
                    E = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, c);
                        const i = (0, u.GS)(),
                            s = i.mediaWidth,
                            l = i.mediaHeight,
                            E = i.mediaSize;
                        return o().createElement('div', d({ className: r()(n, _[s], m[l], g[E]) }, a), t);
                    };
            },
            4029: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => a.z });
                var a = n(1504);
            },
            2582: (e, t, n) => {
                'use strict';
                n.d(t, { yZ: () => l });
                var a = n(7363),
                    r = n.n(a);
                const i = [
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
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                let l;
                !(function (e) {
                    ((e.Play = 'play'), (e.Stop = 'stop'));
                })(l || (l = {}));
                const o = (e, t, n) => {
                    const a = new Image();
                    ((a.src = n(t)), e.push(a));
                };
                (0, a.memo)((e) => {
                    let t = e.width,
                        n = e.height,
                        u = e.getSrcByFrame,
                        c = e.frameCount,
                        d = e.onAnimate,
                        _ = void 0 === d ? () => {} : d,
                        m = e.frameTime,
                        g = void 0 === m ? 33 : m,
                        E = e.initialFrameIndex,
                        b = void 0 === E ? 0 : E,
                        p = e.loop,
                        f = void 0 === p || p,
                        v = e.state,
                        h = void 0 === v ? l.Play : v,
                        A = e.onAnimationComplete,
                        w = void 0 === A ? () => {} : A,
                        C = e.revers,
                        k = void 0 !== C && C,
                        y = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, i);
                    const D = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            const e = D.current;
                            if (!e) return;
                            const a = c - 1,
                                r = e.getContext('2d'),
                                i = (a) => {
                                    (r.clearRect(0, 0, e.width, e.height), r.drawImage(a, 0, 0, t, n));
                                };
                            if ('stop' === h) {
                                const e = u(0),
                                    t = new Image();
                                t.src = e;
                                const n = () => i(t);
                                return (t.addEventListener('load', n), () => t.removeEventListener('load', n));
                            }
                            const s = ((e, t, n) => {
                                    const a = [];
                                    if (n) for (let n = e; n >= 0; n--) o(a, n, t);
                                    else for (let n = 0; n < e; n++) o(a, n, t);
                                    return a;
                                })(c, u, k),
                                l = ((e, t = 0) => {
                                    let n = t;
                                    return () => {
                                        const t = n;
                                        return ((n += 1), n > e && (n = 0), t);
                                    };
                                })(a, b),
                                d = setInterval(() => {
                                    const e = l(),
                                        t = s[e];
                                    (i(s[e]), _(e, t), e === a && (w(), f || clearInterval(d)));
                                }, g);
                            return () => clearInterval(d);
                        }, [c, g, u, n, b, f, _, w, h, t, k]),
                        r().createElement('canvas', s({}, y, { width: t, height: n, ref: D }))
                    );
                });
            },
            1427: (e, t, n) => {
                'use strict';
                var a = {};
                (n.r(a),
                    n.d(a, {
                        Area: () => oe,
                        Bar: () => ie,
                        DefaultScroll: () => le,
                        Direction: () => $,
                        defaultSettings: () => G,
                        useHorizontalScrollApi: () => V,
                    }));
                var r = {};
                (n.r(r), n.d(r, { Area: () => De, Bar: () => Ce, Default: () => ye, useVerticalScrollApi: () => ue }));
                var i = n(4029),
                    s = n(7363),
                    l = n.n(s),
                    o = n(1533),
                    u = n.n(o),
                    c = n(6483),
                    d = n.n(c),
                    _ = n(3138);
                const m = {
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
                    g = [
                        'caption',
                        'onClick',
                        'goto',
                        'classNames',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'side',
                        'type',
                        'soundHover',
                        'soundClick',
                    ];
                function E() {
                    return (
                        (E =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        E.apply(this, arguments)
                    );
                }
                const b = (e) => {
                    let t = e.caption,
                        n = e.onClick,
                        a = e.goto,
                        r = e.classNames,
                        i = e.onMouseEnter,
                        o = e.onMouseLeave,
                        u = e.onMouseDown,
                        c = e.onMouseUp,
                        b = e.side,
                        p = void 0 === b ? 'left' : b,
                        f = e.type,
                        v = void 0 === f ? 'back' : f,
                        h = e.soundHover,
                        A = void 0 === h ? 'highlight' : h,
                        w = e.soundClick,
                        C = void 0 === w ? 'play' : w,
                        k = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, g);
                    const y = (0, s.useCallback)(
                            (e) => {
                                (null == i || i(e), _.O.sound.play.sound(A));
                            },
                            [i, A],
                        ),
                        D = (0, s.useCallback)(
                            (e) => {
                                null == o || o(e);
                            },
                            [o],
                        ),
                        F = (0, s.useCallback)(
                            (e) => {
                                (null == u || u(e), _.O.sound.play.sound(C));
                            },
                            [u, C],
                        ),
                        S = (0, s.useCallback)(
                            (e) => {
                                null == c || c(e);
                            },
                            [c],
                        );
                    return l().createElement(
                        'div',
                        E(
                            {
                                className: d()(m.base, m[`base__${v}`], m[`base__${p}`], null == r ? void 0 : r.base),
                                onMouseEnter: y,
                                onMouseLeave: D,
                                onMouseDown: F,
                                onMouseUp: S,
                                onClick: n,
                            },
                            k,
                        ),
                        'info' !== v && l().createElement('div', { className: m.shine }),
                        l().createElement(
                            'div',
                            { className: d()(m.icon, m[`icon__${v}`], m[`icon__${p}`], null == r ? void 0 : r.icon) },
                            l().createElement('div', { className: d()(m.glow, null == r ? void 0 : r.glow) }),
                        ),
                        l().createElement(
                            'div',
                            { className: d()(m.caption, m[`caption__${v}`], null == r ? void 0 : r.caption) },
                            t,
                        ),
                        a && l().createElement('div', { className: d()(m.goto, null == r ? void 0 : r.goto) }, a),
                    );
                };
                var p = n(5521),
                    f = n(9916);
                const v = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function h(e = p.n.NONE, t = v, n = !1, a = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== p.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && _.O.view.isEventHandled()) return;
                                (_.O.view.setEventHandled(), t(r), n && r.stopPropagation());
                            }
                        }
                    }, [t, e, n, a]);
                }
                var A = n(5415),
                    w = n(3403),
                    C = n(603),
                    k = n(3215);
                let y, D, F, S;
                (!(function (e) {
                    ((e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded'));
                })(y || (y = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed'));
                    })(D || (D = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed'));
                    })(F || (F = {})),
                    (function (e) {
                        ((e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded'));
                    })(S || (S = {})));
                (y.Initialization, D.Initialization);
                const B = (0, k.q3)()(
                        ({ observableModel: e }) => {
                            const t = { groups: e.array('groups', []) };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    L = B[0],
                    N = B[1],
                    x = (e) => {
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
                    I = (e, t, n) => (n < e ? e : n > t ? t : n),
                    T = [];
                function O(e) {
                    const t = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, t.current)(...e), T)
                    );
                }
                function M(e, t, n = []) {
                    const a = (0, s.useRef)(0),
                        r = (0, s.useCallback)(() => {
                            (window.clearInterval(a.current), (a.current = 0));
                        }, n || []);
                    (0, s.useEffect)(() => r, [r]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, s.useCallback)((n) => {
                            (0 !== a.current && r(), (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1));
                        }, i),
                        r,
                    ];
                }
                var P = n(7727);
                function H(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return W(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(e, t);
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
                function W(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function j(e, t, n) {
                    const a = (0, s.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let r,
                                    i = !1,
                                    s = 0;
                                function l() {
                                    r && clearTimeout(r);
                                }
                                function o(...o) {
                                    const u = this,
                                        c = Date.now() - s;
                                    function d() {
                                        ((s = Date.now()), n.apply(u, o));
                                    }
                                    i ||
                                        (a && !r && d(),
                                        l(),
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
                                    (o.cancel = function () {
                                        (l(), (i = !0));
                                    }),
                                    o
                                );
                            })(n, e),
                        t,
                    );
                    return ((0, s.useEffect)(() => a.cancel, [a]), a);
                }
                var z = n(7030);
                let $;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })($ || ($ = {}));
                const G = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    U = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        forceTriggerMouseMove: i,
                    }) => {
                        const l = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                i = a[1];
                            return i <= r ? 0 : I(r, i, n);
                        };
                        return (o = {}) => {
                            const u = o.settings,
                                c = void 0 === u ? G : u,
                                d = (0, s.useRef)(null),
                                _ = (0, s.useRef)(null),
                                m = (0, s.useRef)(!1),
                                g = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (var a, r = H(t(e).values()); !(a = r()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, s.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                E = j(
                                    () => {
                                        i && i();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, z.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), g.trigger('change', e), i && m.current && E());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                p = b[0],
                                f = b[1],
                                v = (0, s.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = p.scrollPosition.get(),
                                            i = (null != (a = p.scrollPosition.goal) ? a : 0) - r;
                                        return l(e, t * n + i + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                h = (0, s.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            f.start({
                                                scrollPosition: l(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: l(a, p.scrollPosition.get()) },
                                            });
                                    },
                                    [f, c.animationConfig, p.scrollPosition],
                                ),
                                A = (0, s.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = _.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, c.step),
                                            i = v(t, e, a);
                                        h(i);
                                    },
                                    [h, v, c.step],
                                ),
                                w = (0, s.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && A(a(e)),
                                            d.current && g.trigger('mouseWheel', e, p.scrollPosition, t(d.current)));
                                    },
                                    [p.scrollPosition, A, g],
                                ),
                                C = ((e, t = []) => {
                                    const n = (0, s.useRef)(),
                                        a = (0, s.useCallback)((...t) => {
                                            (n.current && n.current(), (n.current = e(...t)));
                                        }, t);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        x(() => {
                                            const e = d.current;
                                            e &&
                                                (h(l(e, p.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [h, p.scrollPosition.goal],
                                ),
                                k = O(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = l(e, p.scrollPosition.goal);
                                    (t !== p.scrollPosition.goal && h(t, { immediate: !0 }),
                                        g.trigger('recalculateContent'));
                                });
                            ((0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            ),
                                (0, s.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !i) return;
                                    const t = () => {
                                            m.current = !0;
                                        },
                                        n = () => {
                                            m.current = !1;
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
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: l,
                                    handleMouseWheel: w,
                                    applyScroll: h,
                                    applyStepTo: A,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: f,
                                    animationScroll: p,
                                    recalculateContent: k,
                                    events: { on: g.on, off: g.off },
                                }),
                                [p.scrollPosition, h, A, g.off, g.on, k, w, f, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    V = U({
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
                        getDirection: (e) => (e.deltaY > 1 ? $.Next : $.Prev),
                        forceTriggerMouseMove: _.O.view.forceTriggerMouseMove,
                    }),
                    Z = 'HorizontalBar_base_49',
                    q = 'HorizontalBar_base__active_5e',
                    Y = 'HorizontalBar_leftButton_5f',
                    K = 'HorizontalBar_rightButton_03',
                    Q = 'HorizontalBar_track_0d',
                    X = 'HorizontalBar_thumb_fd',
                    J = 'HorizontalBar_rail_32',
                    ee = 'disable',
                    te = { pending: !1, offset: 0 },
                    ne = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ae = () => {},
                    re = (e, t) => Math.max(20, e.offsetWidth * t),
                    ie = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ne, onDrag: a = ae }) => {
                        const r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, s.useState)(te),
                            E = g[0],
                            b = g[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    (b(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            f = () => {
                                const t = u.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, a / r),
                                    d = I(0, 1, s / (r - a)),
                                    _ = (t.offsetWidth - re(t, l)) * d;
                                ((n.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && o.current && u.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(ee),
                                                    void o.current.classList.remove(ee)
                                                );
                                            if (
                                                ((t = u.current),
                                                (n = c.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(ee),
                                                    void o.current.classList.add(ee)
                                                );
                                            var t, n;
                                            (i.current.classList.remove(ee), o.current.classList.remove(ee));
                                        }
                                    })(_));
                            },
                            v = O(() => {
                                ((() => {
                                    const t = c.current,
                                        n = u.current,
                                        a = e.getWrapperSize(),
                                        i = e.getContainerSize();
                                    if (!(i && t && a && n)) return;
                                    const s = Math.min(1, a / i);
                                    ((t.style.width = `${re(n, s)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 !== s ? r.current.classList.add(q) : r.current.classList.remove(q)));
                                })(),
                                    f());
                            });
                        ((0, s.useEffect)(() => x(v)),
                            (0, s.useEffect)(
                                () =>
                                    x(() => {
                                        const t = () => {
                                            f();
                                        };
                                        let n = ae;
                                        const a = () => {
                                            (n(), (n = x(v)));
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
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = _.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const i = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!i || !s) return;
                                        const l = u.current,
                                            o = c.current;
                                        if (!l || !o) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const d = t.clientX - E.offset - l.getBoundingClientRect().x,
                                            _ = (d / l.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(i, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: d, contentOffset: _ }));
                                    }),
                                    n = _.O.client.events.mouse.up(() => {
                                        (t(), p(te));
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, E.offset, E.pending, a, p]));
                        const h = M((t) => e.applyStepTo(t), m, [e]),
                            A = h[0],
                            w = h[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', w, !0),
                                () => document.removeEventListener('mouseup', w, !0)
                            ),
                            [w],
                        );
                        const C = (e) => {
                            e.target.classList.contains(ee) || (0, P.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: d()(Z, t.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: d()(Y, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ee) || 0 !== e.button || ((0, P.G)('play'), A($.Next));
                                },
                                onMouseUp: w,
                                ref: i,
                                onMouseEnter: C,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: d()(Q, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, P.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = c.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const i = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? $.Prev : $.Next);
                                            }
                                    },
                                    ref: u,
                                    onMouseEnter: C,
                                },
                                l().createElement('div', { ref: c, className: d()(X, t.thumb) }),
                                l().createElement('div', { className: d()(J, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: d()(K, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ee) || 0 !== e.button || ((0, P.G)('play'), A($.Prev));
                                },
                                onMouseUp: w,
                                ref: o,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    se = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    le = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: u,
                        onDrag: c,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: d()(se.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: d()(se.defaultScroll, n), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: d()(se.defaultScrollArea, r) },
                                l().createElement(oe, { className: o, api: m, classNames: i }, e),
                            ),
                            l().createElement(ie, { getStepByRailClick: u, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    oe = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, s.useEffect)(() => x(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: d()(se.base, t) },
                            l().createElement(
                                'div',
                                {
                                    className: d()(se.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: d()(se.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                ((oe.Bar = ie), (oe.Default = le));
                const ue = U({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? $.Next : $.Prev),
                    }),
                    ce = 'VerticalBar_base_f3',
                    de = 'VerticalBar_base__active_72',
                    _e = 'VerticalBar_topButton_d7',
                    me = 'VerticalBar_bottomButton_06',
                    ge = 'VerticalBar_track_df',
                    Ee = 'VerticalBar_thumb_32',
                    be = 'VerticalBar_rail_43',
                    pe = 'disable',
                    fe = () => {},
                    ve = { pending: !1, offset: 0 },
                    he = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ae = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    we = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ce = (0, s.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = he, onDrag: a = fe }) => {
                        const r = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            o = (0, s.useRef)(null),
                            u = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, s.useState)(ve),
                            E = g[0],
                            b = g[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    (b(e),
                                        c.current &&
                                            a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [a],
                            ),
                            f = O(() => {
                                const t = c.current,
                                    n = u.current,
                                    a = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(a && i && t && n)) return;
                                const s = Math.min(1, a / i);
                                return (
                                    (t.style.height = `${we(n, s)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 !== s ? r.current.classList.add(de) : r.current.classList.remove(de)),
                                    s
                                );
                            }),
                            v = O(() => {
                                const t = u.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, a / r),
                                    d = I(0, 1, s / (r - a)),
                                    _ = (t.offsetHeight - we(t, l)) * d;
                                ((n.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && o.current && u.current && c.current) {
                                            if (0 === Math.round(e))
                                                return (
                                                    i.current.classList.add(pe),
                                                    void o.current.classList.remove(pe)
                                                );
                                            if (
                                                ((t = u.current),
                                                (n = c.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(pe),
                                                    void o.current.classList.add(pe)
                                                );
                                            var t, n;
                                            (i.current.classList.remove(pe), o.current.classList.remove(pe));
                                        }
                                    })(_));
                            }),
                            h = O(() => {
                                Ae(e, () => {
                                    (f(), v());
                                });
                            });
                        ((0, s.useEffect)(() => x(h)),
                            (0, s.useEffect)(() => {
                                const t = () => {
                                    Ae(e, () => {
                                        v();
                                    });
                                };
                                let n = fe;
                                const a = () => {
                                    (n(), (n = x(h)));
                                };
                                return (
                                    e.events.on('recalculateContent', h),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        (n(),
                                            e.events.off('recalculateContent', h),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a));
                                    }
                                );
                            }, [e]),
                            (0, s.useEffect)(() => {
                                if (!E.pending) return;
                                const t = _.O.client.events.mouse.up(() => {
                                        p(ve);
                                    }),
                                    n = _.O.client.events.mouse.move(([t]) => {
                                        Ae(e, (n) => {
                                            const r = u.current,
                                                i = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !i || !s) return;
                                            const l = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                o = (l / r.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: o }));
                                        });
                                    });
                                return () => {
                                    (t(), n());
                                };
                            }, [e, E.offset, E.pending, a, p]));
                        const A = M((t) => e.applyStepTo(t), m, [e]),
                            w = A[0],
                            C = A[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const k = (e) => {
                            e.target.classList.contains(pe) || (0, P.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: d()(ce, t.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: d()(_e, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pe) || 0 !== e.button || ((0, P.G)('play'), w($.Next));
                                },
                                ref: i,
                                onMouseEnter: k,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: d()(ge, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, P.G)('play'), t.target === a))
                                                p({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        Ae(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                i = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(i);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? $.Prev : $.Next);
                                            }
                                    },
                                    ref: u,
                                    onMouseEnter: k,
                                },
                                l().createElement('div', { ref: c, className: d()(Ee, t.thumb) }),
                                l().createElement('div', { className: d()(be, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: d()(me, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pe) || 0 !== e.button || ((0, P.G)('play'), w($.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: k,
                            }),
                        );
                    }),
                    ke = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ye = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: u,
                        onDrag: c,
                    }) => {
                        const _ = (0, s.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: d()(ke.base, e.base) });
                            }, [a]),
                            m = (0, s.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: d()(ke.defaultScroll, n), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: d()(ke.area, r) },
                                l().createElement(De, { className: i, classNames: o, api: m }, e),
                            ),
                            l().createElement(Ce, { getStepByRailClick: u, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    De = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, s.useEffect)(() => x(a.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: d()(ke.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: d()(ke.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                De.Default = ye;
                const Fe = { Vertical: r, Horizontal: a };
                var Se = n(9480),
                    Be = n(7078),
                    Le = n(3415),
                    Ne = n(8045);
                const xe = {
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
                var Ie = n(3649);
                let Te, Oe, Re;
                (!(function (e) {
                    ((e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding'));
                })(Te || (Te = {})),
                    (function (e) {
                        ((e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end'));
                    })(Oe || (Oe = {})),
                    (function (e) {
                        ((e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n'));
                    })(Re || (Re = {})));
                const Me = { [Re.NBSP]: Te.NoBreakSymbol, [Re.ZWNBSP]: Te.NoBreakSymbol, [Re.NEW_LINE]: Te.LineBreak },
                    Pe = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    He = {
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
                    We = 'renderers_noBreakWrapper_10',
                    je = 'renderers_lineBreak_b5',
                    ze = 'renderers_newLine_bd',
                    $e = 'renderers_word_f3',
                    Ge = (e) => ({ color: `#${e}` }),
                    Ue = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? He[a]
                                ? l().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: d()($e, He[a]) },
                                      e,
                                  )
                                : l().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: $e, style: Ge(a) },
                                      e,
                                  )
                            : l().createElement('span', { key: n, 'data-block-type': t.blockType, className: $e }, e);
                    },
                    Ve = {
                        [Te.Word]: Ue,
                        [Te.NoBreakSymbol]: Ue,
                        [Te.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            l().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => l().createElement(l().Fragment, { key: n }, e)),
                            ),
                        [Te.LineBreak]: ({ key: e }) =>
                            l().createElement('span', { key: e, 'data-block-type': Te.LineBreak, className: je }),
                        [Te.NewLine]: ({ elementList: e, key: t }) =>
                            l().createElement('span', { key: t, 'data-block-type': Te.NewLine, className: ze }, e),
                        [Te.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            l().createElement(
                                'span',
                                { key: t, 'data-block-type': Te.NoBreakWrapper, className: We },
                                e,
                            ),
                    },
                    Ze = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, i) => {
                                const s = `${n}_${i}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = Ze(e, Ve[t], s);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: s }));
                            }),
                            a
                        );
                    },
                    qe = (e) => {
                        const t = [];
                        return (
                            e.forEach((e, n) => {
                                t.push(
                                    ...((e, t) => {
                                        const n = [],
                                            a = e.blockType,
                                            r = Ve[a],
                                            i = Ze(e, r, t);
                                        return (
                                            a === Te.NoBreakWrapper
                                                ? n.push(r({ elementList: i, textBlock: e, key: `${t}` }))
                                                : n.push(...i),
                                            n
                                        );
                                    })(e, n),
                                );
                            }),
                            t
                        );
                    },
                    Ye = (e, t, n, a) => {
                        let r = t.exec(e),
                            i = 0;
                        for (; r; ) (i !== r.index && n(e.slice(i, r.index)), a(r), (i = t.lastIndex), (r = t.exec(e)));
                        i !== e.length && n(e.slice(i));
                    },
                    Ke = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Qe = (e) => {
                        const t = [];
                        return (
                            Ye(
                                e,
                                /\S\s+/g,
                                (e) => {
                                    var n;
                                    'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                        ? t.push(...((n = e), n.match(Ke) || []))
                                        : t.push(...e.split(''));
                                },
                                (e) => {
                                    t.push(e[0]);
                                },
                            ),
                            t
                        );
                    },
                    Xe = Pe
                        ? (e) => {
                              const t = [];
                              return (
                                  Ye(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(...Qe(e[0]));
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
                              let i = 0;
                              for (; a; ) {
                                  const s = t.justifyContent === Oe.FlexEnd ? a.index : n.lastIndex;
                                  (r.push(e.slice(i, s)), (i = s), (a = n.exec(e)));
                              }
                              return (i !== e.length && r.push(e.slice(i)), r);
                          },
                    Je = (e, t = '', n) => {
                        const a = [];
                        return (
                            Ye(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: Te.Word, colorTag: t, childList: Xe(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = Me[n.charAt(0)];
                                    r === Te.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Te.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Te.NewLine,
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
                    et = (e, t, n = '', a) => {
                        const r = [],
                            i = e.replace(/(.)(、|。|ー)/g, '$1\ufeff$2');
                        return (
                            Ye(
                                i,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...Je(e, n, a));
                                },
                                (e) => {
                                    const i = e[1],
                                        s = void 0 === t[i] ? e[0] : t[i];
                                    'string' == typeof s || 'number' == typeof s
                                        ? r.push(...Je(String(s), n, a))
                                        : r.push({ blockType: Te.Binding, colorTag: n, childList: [s] });
                                },
                            ),
                            r
                        );
                    },
                    tt = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Te.NoBreakWrapper) (e.childList.push(a), n.push(e));
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            (e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Te.NoBreakWrapper, colorTag: '', childList: [t, a] }));
                        }
                        return (t.childList.length > 0 && n.push(t), n);
                    },
                    nt = (e, t = {}, n) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Te.NoBreakSymbol
                                        ? ((n = !0), t.push(...tt(t.pop(), e)))
                                        : (n ? t.push(...tt(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    Ye(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...et(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...et(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })((0, Ie.Eg)((0, Ie.z4)(e)), t, n),
                        );
                        return qe(a);
                    },
                    at = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    rt = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    it = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = rt(e, t),
                            r = e.textContent.length,
                            i = e.offsetWidth / r,
                            s = Math.ceil(a / i);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / i);
                            return a >= n ? [!0, n + s] : [!1, a];
                        }
                        const l = Math.max(n + s, 0);
                        return r < l ? [!1, 0] : [!0, l];
                    },
                    st = (e, t, n, a, r, i) => {
                        let s = -1,
                            o = null;
                        for (let u = n; u >= 0; u--) {
                            const n = e[u],
                                c = Number(e[u].getAttribute('data-block-type'));
                            if (c === Te.LineBreak || c === Te.NewLine || c === Te.Binding) continue;
                            const d = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = it(n, a, r),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (r -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + i,
                                    g = t[u];
                                ((o = l().cloneElement(g, g.props, m)), (s = u));
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[u],
                                    _ = c.props.children,
                                    m = st(e, _, e.length - 1, a, r, i),
                                    g = m[0],
                                    E = m[1];
                                if (!(g < 0)) {
                                    const e = _.slice(0, g);
                                    ((o = l().cloneElement(c, c.props, e, E)), (s = u));
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [s, o];
                    },
                    lt = (e, t, n, a = '...') => {
                        const r = [...t],
                            i = e.current;
                        if (!i) return [r, !1];
                        const s = n.height,
                            l = n.width,
                            o = i.lastElementChild;
                        if (!at(o, s) && rt(o, l) <= 0) return [r, !1];
                        const u = i.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    at(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(u, s);
                        if (c < 0) return [r, !1];
                        const d = st(u, r, c, l, a.length, a),
                            _ = d[0],
                            m = d[1];
                        return (m && (r.splice(_, 1, m), r.splice(_ + 1)), [r, !0]);
                    },
                    ot = l().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: i = !1,
                            customTooltipArgs: o,
                            targetId: u,
                            justifyContent: c = Oe.FlexStart,
                            alignContent: _ = Oe.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const g = (0, s.useRef)(null),
                                E = (0, s.useRef)({ height: 0, width: 0 }),
                                b = (0, s.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                p = b[0],
                                f = b[1],
                                v = (0, s.useMemo)(() => nt(e, a, { justifyContent: c }), [a, c, e]),
                                h = (0, s.useMemo)(() => {
                                    if (
                                        r &&
                                        p.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, o, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: u,
                                        };
                                }, [a, r, u, e, o, p.isTruncated]),
                                A = (0, s.useCallback)(
                                    (e) => {
                                        ((E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height));
                                        const t = lt(g, v, E.current, m),
                                            a = t[0],
                                            r = t[1];
                                        (f({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r));
                                    },
                                    [n, m, v],
                                ),
                                w = (0, s.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, s.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, s.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new Ne.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(g, A, i),
                                l().createElement(
                                    'div',
                                    {
                                        className: d()(
                                            xe.base,
                                            t,
                                            xe.base__zeroPadding,
                                            i && xe.base__isTruncationAvailable,
                                        ),
                                        style: w,
                                    },
                                    l().createElement('div', { className: xe.unTruncated, ref: g }, v),
                                    l().createElement(
                                        Le.l,
                                        {
                                            tooltipArgs: h,
                                            className: d()(
                                                xe.tooltip,
                                                xe[`tooltip__justify-${c}`],
                                                xe[`tooltip__align-${_}`],
                                            ),
                                        },
                                        l().createElement(
                                            'div',
                                            {
                                                className: d()(
                                                    xe.truncated,
                                                    !p.isTruncateFinished && i && xe.truncated__hide,
                                                ),
                                                style: w,
                                            },
                                            p.isTruncateFinished && i ? p.elementList : v,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let ut;
                !(function (e) {
                    ((e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed'));
                })(ut || (ut = {}));
                const ct = {
                        base: 'BuffIcon_base_c8',
                        base__increase: 'BuffIcon_base__increase_60',
                        base__decrease: 'BuffIcon_base__decrease_31',
                        base__mixed: 'BuffIcon_base__mixed_23',
                    },
                    dt = l().memo(function ({ buffIconType: e, className: t }) {
                        return e === ut.none
                            ? null
                            : l().createElement('div', { className: d()(ct.base, ct[`base__${ut[e]}`], t) });
                    }),
                    _t = 'Delta_base_3e',
                    mt = 'Delta_base__positive_82',
                    gt = 'Delta_base__negative_86',
                    Et = l().memo(function ({ isPositive: e, width: t, shift: n, isUseAnim: a }) {
                        const r = (0, z.useSpring)({
                                from: { left: 0, width: 0 },
                                left: e ? 0 : t,
                                width: e ? 0 : Math.abs(t),
                                config: { duration: kt },
                                delay: e ? 0 : kt,
                                immediate: !a,
                            }),
                            i = (0, z.useSpring)({
                                from: { left: 2, width: 0 },
                                left: 2 + n,
                                width: e ? t : 0,
                                config: { duration: kt },
                                delay: e || 0 === t ? kt : 0,
                                immediate: !a,
                            });
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(z.animated.div, { className: d()(_t, gt), style: r }),
                            l().createElement(z.animated.div, { className: d()(_t, mt), style: i }),
                        );
                    }),
                    bt = 'Indicator_base_b9',
                    pt = 'Indicator_progress_ce',
                    ft = 'Indicator_progressMarker_b4',
                    vt = 'Indicator_indicator_bc',
                    ht = 'Indicator_indicator__start_80',
                    At = 'Indicator_indicator__end_3b',
                    wt = 'Indicator_marker_f7',
                    Ct = 'Indicator_valueLine_1d',
                    kt = 300,
                    yt = l().memo(function ({
                        minValue: e,
                        maxValue: t,
                        value: n,
                        markerValue: a,
                        delta: r,
                        isUseAnim: i,
                    }) {
                        const s = a === e ? 2 : (a / t) * 254,
                            o = (n / t) * 254,
                            u = (r / t) * 254,
                            c = r > 0,
                            _ = { config: { duration: kt }, immediate: !i },
                            m = (0, z.useSpring)(Object.assign({ from: { left: 2 }, to: { left: s }, delay: kt }, _)),
                            g = (0, z.useSpring)(Object.assign({ from: { width: e }, to: { width: o }, delay: kt }, _));
                        return l().createElement(
                            'div',
                            { className: bt },
                            l().createElement(
                                'div',
                                { className: pt },
                                l().createElement('div', { className: d()(vt, ht) }),
                                l().createElement(z.animated.div, { className: Ct, style: g }),
                                l().createElement(
                                    'div',
                                    { className: ft },
                                    l().createElement(
                                        z.animated.div,
                                        { className: wt, style: m },
                                        l().createElement(Et, {
                                            isPositive: c,
                                            width: u,
                                            shift: o - u - s,
                                            isUseAnim: i,
                                        }),
                                    ),
                                ),
                                l().createElement('div', { className: d()(vt, At) }),
                            ),
                        );
                    });
                let Dt;
                !(function (e) {
                    ((e.None = 'none'),
                        (e.Increase = 'increase'),
                        (e.Decrease = 'decrease'),
                        (e.Situational = 'situational'));
                })(Dt || (Dt = {}));
                var Ft = n(7160);
                const St = {
                        base: 'Param_base_51',
                        valueWrapper: 'Param_valueWrapper_85',
                        value: 'Param_value_51',
                        icon: 'Param_icon_37',
                        name: 'Param_name_82',
                        highlight: 'Param_highlight_81',
                        highlight__increase: 'Param_highlight__increase_35',
                        highlight__decrease: 'Param_highlight__decrease_ec',
                        highlight__situational: 'Param_highlight__situational_db',
                    },
                    Bt = l().memo(function ({
                        id: e,
                        value: t,
                        tooltipID: n,
                        isEnabled: a,
                        highlightType: r,
                        name: i,
                    }) {
                        const o = (0, z.useSpring)(() => ({ from: { opacity: 0 } })),
                            u = o[0],
                            c = o[1],
                            _ = r !== Dt.None;
                        return (
                            (0, s.useEffect)(() => {
                                _ &&
                                    c.start({
                                        from: { opacity: 0 },
                                        to: [{ opacity: 1 }, { opacity: 0 }],
                                        delay: 100,
                                        config: { duration: 300, easing: Ft.Fs },
                                    });
                            }, [t, c, _]),
                            l().createElement(
                                Be.t,
                                {
                                    args: { tooltipId: n, paramId: e },
                                    targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                    isEnabled: a,
                                },
                                l().createElement(
                                    'div',
                                    { className: St.base },
                                    l().createElement(
                                        'div',
                                        { className: St.valueWrapper },
                                        l().createElement(ot, {
                                            justifyContent: Oe.FlexEnd,
                                            classMix: St.value,
                                            text: t,
                                        }),
                                    ),
                                    l().createElement('div', {
                                        className: St.icon,
                                        style: {
                                            backgroundImage: `url('R.images.gui.maps.icons.vehParams.small.${e}')`,
                                        },
                                    }),
                                    l().createElement(
                                        'div',
                                        { className: St.name },
                                        i || R.strings.menu.tank_params.$dyn(e),
                                    ),
                                    _ &&
                                        l().createElement(z.animated.div, {
                                            className: d()(St.highlight, St[`highlight__${r}`]),
                                            style: u,
                                        }),
                                ),
                            )
                        );
                    }),
                    Lt = 'Group_base_66',
                    Nt = 'Group_group_07',
                    xt = 'Group_hoverBg_97',
                    It = 'Group_hoverBg__scrollable_2a',
                    Tt = 'Group_groupHeader_f5',
                    Ot = 'Group_name_21',
                    Rt = 'Group_arrow_96',
                    Mt = 'Group_arrow__opened_47',
                    Pt = 'Group_params_88',
                    Ht = 'Group_params__opened_9a',
                    Wt = 'Group_separator_b5',
                    jt = 'Group_right_13',
                    zt = 'Group_situational_55',
                    $t = 'Group_buff_fa',
                    Gt = 'Group_value_00',
                    Ut = 'Group_value__additional_81';
                function Vt() {
                    return (
                        (Vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Vt.apply(this, arguments)
                    );
                }
                const Zt = (0, w.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: n,
                            extraParams: a,
                            tooltipID: r,
                            indicator: i,
                            value: s,
                            additionalValue: o,
                            buffIconType: u,
                            isEnabled: c,
                            isScrollable: _,
                            isSituational: m,
                        }) => {
                            const g = N().controls,
                                E = a && a.length > 0;
                            return l().createElement(
                                'div',
                                { className: Lt },
                                l().createElement(
                                    Be.t,
                                    {
                                        args: { tooltipId: r, paramId: e },
                                        targetId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        isEnabled: c,
                                    },
                                    l().createElement(
                                        'div',
                                        {
                                            className: Nt,
                                            onClick: () => g.onGroupClick(e),
                                            onMouseEnter: P.$.playHighlight,
                                        },
                                        l().createElement('div', { className: d()(xt, _ && It) }),
                                        l().createElement(
                                            'div',
                                            { className: Tt },
                                            l().createElement('div', { className: d()(Rt, t && Mt) }),
                                            l().createElement(
                                                'div',
                                                { className: Ot },
                                                R.strings.menu.tank_params.$dyn(e),
                                            ),
                                            l().createElement(
                                                'div',
                                                { className: jt },
                                                m && l().createElement('div', { className: zt }),
                                                l().createElement(dt, { buffIconType: u, className: $t }),
                                                o && l().createElement(ot, { classMix: d()(Gt, Ut), text: o }),
                                                l().createElement(ot, { classMix: Gt, text: s }),
                                            ),
                                        ),
                                        l().createElement(yt, i),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    { className: d()(Pt, t && Ht) },
                                    Se.UI(n, (e) => l().createElement(Bt, Vt({ key: e.id }, e))),
                                    E && l().createElement('div', { className: Wt }),
                                    Se.UI(a, (e) => l().createElement(Bt, Vt({ key: e.id }, e))),
                                ),
                            );
                        },
                    ),
                    qt = {
                        base: 'VehicleParams_base_3b',
                        base__bg: 'VehicleParams_base__bg_c4',
                        scroll: 'VehicleParams_scroll_59',
                        content: 'VehicleParams_content_09',
                        barBase: 'VehicleParams_barBase_6f',
                    };
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
                    );
                }
                const Kt = {
                        settings: {
                            step: { type: 'fixed', value: 48, clampedArrowStepTimeout: 0 },
                            animationConfig: { tension: 0, friction: 0 },
                        },
                    },
                    Qt = (0, w.Pi)(({ showBackground: e = !0, className: t }) => {
                        const n = N().model,
                            a = (0, s.useState)(!1),
                            r = a[0],
                            i = a[1],
                            o = n.groups.get(),
                            u = ue(Kt);
                        return (
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    const e = u.getContainerSize(),
                                        t = u.getWrapperSize();
                                    e && t && i(e > t);
                                };
                                return (
                                    u.events.on('recalculateContent', e),
                                    () => {
                                        u.events.off('recalculateContent', e);
                                    }
                                );
                            }, [u]),
                            l().createElement(
                                'div',
                                { className: d()(qt.base, e && qt.base__bg, t) },
                                l().createElement(
                                    Fe.Vertical.Area.Default,
                                    {
                                        api: u,
                                        barClassNames: { base: qt.barBase },
                                        scrollClassName: qt.scroll,
                                        scrollClassNames: { content: qt.content },
                                    },
                                    l().createElement(
                                        'div',
                                        { className: qt.groups },
                                        Se.UI(o, (e) =>
                                            l().createElement(Zt, Yt({ key: e.id }, e, { isScrollable: r })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Xt = (0, s.memo)(function (e) {
                        const t = (0, s.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return l().createElement(L, { options: t }, l().createElement(Qt, e));
                    });
                var Jt = n(9690);
                const en = (e, t) => e.split(',').includes(t),
                    tn = {
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
                let nn, an;
                (!(function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big'));
                })(nn || (nn = {})),
                    (function (e) {
                        ((e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange'));
                    })(an || (an = {})));
                const rn = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: r,
                        tags: i = '',
                        size: s = nn.extraSmall,
                        type: o = an.colored,
                        className: u,
                        classNames: c,
                        isShortName: _ = !1,
                    }) => {
                        const m = `${(0, Ie.BN)(a)}${e ? '_elite' : ''}`,
                            g = R.images.gui.maps.icons.vehicleTypes.big.$dyn(m);
                        return l().createElement(
                            'div',
                            {
                                className: d()(
                                    tn.base,
                                    tn[`base__size${(0, Ie.e)(s)}`],
                                    tn[`base__type${(0, Ie.e)(o)}`],
                                    u,
                                ),
                            },
                            l().createElement(
                                'div',
                                { className: d()(tn.level, null == c ? void 0 : c.level) },
                                (0, Jt.HG)(r),
                            ),
                            l().createElement('div', {
                                className: d()(
                                    tn.type,
                                    e && tn[`type__elite${(0, Ie.e)(s)}`],
                                    tn[`type__${s}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: a ? { backgroundImage: `url(${g})` } : void 0,
                            }),
                            en(i, 'premiumIGR') && l().createElement('div', { className: tn.premiumIGR }),
                            l().createElement(
                                'div',
                                { className: d()(tn.name, null == c ? void 0 : c.name) },
                                _ ? n : t,
                            ),
                        );
                    },
                    sn = 'VehicleParamsDecorator_base_32',
                    ln = 'VehicleParamsDecorator_vehicleInfo_02',
                    on = 'VehicleParamsDecorator_tankName_ac',
                    un = 'VehicleParamsDecorator_tankLvl_26',
                    cn = 'VehicleParamsDecorator_type_e7',
                    dn = 'VehicleParamsDecorator_tip_6c',
                    _n = ['className', 'classNames', 'children', 'isPerkTipShown', 'tipText'];
                function mn() {
                    return (
                        (mn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        mn.apply(this, arguments)
                    );
                }
                const gn = (e) => {
                    let t = e.className,
                        n = e.classNames,
                        a = e.children,
                        r = e.isPerkTipShown,
                        i = e.tipText,
                        s = void 0 === i ? R.strings.crew.vehicleParamsDecorator.perkTip() : i,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, _n);
                    return l().createElement(
                        'div',
                        { className: d()(sn, t) },
                        l().createElement(
                            rn,
                            mn(
                                {
                                    className: d()(ln, null == n ? void 0 : n.vehicleInfo),
                                    classNames: { name: on, level: un, typeIcon: cn },
                                },
                                o,
                                { isShortName: !0 },
                            ),
                        ),
                        a,
                        r && l().createElement('div', { className: d()(dn, null == n ? void 0 : n.tip) }, s),
                    );
                };
                var En = n(4598),
                    bn = n(9174),
                    pn = n(3946);
                const fn = [
                        R.strings.crew_perks.sorting.fallback(),
                        R.strings.crew_perks.sorting.common(),
                        R.strings.crew_perks.sorting.legendary(),
                    ],
                    vn = (0, k.q3)()(
                        ({ observableModel: e }) => {
                            const t = Object.assign(
                                    {},
                                    e.primitives([
                                        'isFemale',
                                        'isMajorQualification',
                                        'role',
                                        'currentSkillsAmount',
                                        'totalSkillsAmount',
                                        'availableSkillsAmount',
                                        'areAllSkillsLearned',
                                        'skillsEfficiency',
                                        'isAnySkillSelected',
                                        'isTankmanInVehicle',
                                        'showSortingSelectionWarning',
                                    ]),
                                    {
                                        isFirstRender: bn.LO.box(!0),
                                        vehicleInfo: e.object('vehicleInfo'),
                                        skillsList: Object.assign({}, e.primitives(['componentKey'], 'skillsList'), {
                                            irrelevantSkillsList: e.array('skillsList.irrelevantSkillsList'),
                                            commonSkillsList: e.array('skillsList.commonSkillsList'),
                                            regularSkillsList: e.array('skillsList.regularSkillsList'),
                                        }),
                                    },
                                ),
                                n = e.array('sortingDropDownItems'),
                                a = (0, pn.Om)(
                                    (t) => {
                                        const n = Se.UI(e.array('skillsList.irrelevantSkillsList').get(), (e) =>
                                                Object.assign({}, e, {
                                                    popularityList: Se.UI(e.popularityList, En.yR),
                                                }),
                                            ),
                                            a = Se.UI(e.array('skillsList.commonSkillsList').get(), (e) =>
                                                Object.assign({}, e, {
                                                    popularityList: Se.UI(e.popularityList, En.yR),
                                                }),
                                            ),
                                            r = Se.UI(e.array('skillsList.regularSkillsList').get(), (e) =>
                                                Object.assign({}, e, {
                                                    popularityList: Se.UI(e.popularityList, En.yR),
                                                }),
                                            );
                                        if (t <= A.fd.Medium) return [[...n, ...a, ...r]];
                                        const i = [];
                                        return (
                                            n.length > 0 && i.push(n),
                                            a.length > 0 && i.push(a),
                                            r.length > 0 && i.push(r),
                                            i
                                        );
                                    },
                                    { equals: En.jv },
                                ),
                                r = (0, pn.Om)(() => Se.UI(n.get(), (e) => Object.assign({}, e))),
                                i = (0, pn.Om)(() =>
                                    r().map((e) => ({ id: e.mType, label: fn[e.mType], isDisabled: !e.isEnabled })),
                                ),
                                s = (0, pn.Om)(() => {
                                    const e = r().find((e) => e.isSelected);
                                    return null == e ? void 0 : e.mType;
                                }),
                                l = (0, pn.Om)(() => r().every((e) => !e.isEnabled)),
                                o = (0, pn.Om)(() => r().find((e) => !e.isEnabled));
                            return Object.assign({}, t, {
                                computes: {
                                    getSortingOptions: r,
                                    getSortingDropDownItems: i,
                                    getCurrentSorting: s,
                                    getDisabledSorting: l,
                                    getAllBlocks: a,
                                    getFirstDisabledSortingOption: o,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            clickOnSkill: e.createCallback((e) => ({ id: e }), 'skillsList.onSkillClick'),
                            hoverSkill: e.createCallback((e) => ({ id: e }), 'skillsList.onSkillHover'),
                            outSkill: e.createCallback((e) => ({ id: e }), 'skillsList.onSkillOut'),
                            train: e.createCallbackNoArgs('skillsList.onTrain'),
                            cancel: e.createCallbackNoArgs('skillsList.onCancel'),
                            close: e.createCallbackNoArgs('onClose'),
                            onSortingSelectionChange: e.createCallback((e) => e || {}, 'onSortingSelectionChange'),
                        }),
                    ),
                    hn = vn[0],
                    An = vn[1];
                var wn = n(3457);
                const Cn = 'Footer_base_8f',
                    kn = 'Footer_bonusDescription_89',
                    yn = 'Footer_bonusDescriptionIcon_c6',
                    Dn = 'Footer_bonusDescriptionText_ae',
                    Fn = 'Footer_buttonsContainer_fb',
                    Sn = 'Footer_buttonsContainer__visible_f1',
                    Bn = 'Footer_btn_bb',
                    Ln = (0, w.Pi)(({ className: e }) => {
                        const t = An(),
                            n = t.model,
                            a = t.controls;
                        return l().createElement(
                            'div',
                            { className: d()(Cn, e) },
                            !n.isMajorQualification.get() &&
                                l().createElement(
                                    'div',
                                    { className: kn },
                                    l().createElement('div', { className: yn }),
                                    l().createElement(
                                        'div',
                                        { className: Dn },
                                        R.strings.crew.skillsTraining.bonusQualification.description(),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { className: d()(Fn, n.isAnySkillSelected.get() && Sn) },
                                l().createElement(
                                    wn.u5,
                                    { size: wn.qE.small, mixClass: Bn, onClick: a.train },
                                    R.strings.crew.skillsTraining.btnTrain.label(),
                                ),
                                l().createElement(
                                    wn.u5,
                                    { type: wn.L$.secondary, size: wn.qE.small, mixClass: Bn, onClick: a.cancel },
                                    R.strings.crew.skillsTraining.btnCancel.label(),
                                ),
                            ),
                        );
                    });
                let Nn, xn;
                (!(function (e) {
                    ((e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected'));
                })(Nn || (Nn = {})),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium'));
                    })(xn || (xn = {})));
                var In = n(6373);
                const Tn = 'TextOverflow_base_3b',
                    On = ['content', 'classMix', 'className'];
                function Rn() {
                    return (
                        (Rn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Rn.apply(this, arguments)
                    );
                }
                const Mn = (e) => {
                        let t = e.content,
                            n = e.classMix,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, On);
                        const i = (0, s.useRef)(null),
                            o = (0, s.useState)(!0),
                            u = o[0],
                            c = o[1];
                        return (
                            (0, s.useEffect)(() =>
                                x(() => {
                                    const e = i.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            l().createElement(
                                In.i,
                                { isEnabled: u, body: t },
                                l().createElement('div', Rn({}, r, { ref: i, className: d()(Tn, a, n) }), t),
                            )
                        );
                    },
                    Pn = {
                        base: 'DropDownControl_base_46',
                        base__extraSmall: 'DropDownControl_base__extraSmall_a3',
                        base__small: 'DropDownControl_base__small_22',
                        base__medium: 'DropDownControl_base__medium_09',
                        base__disabled: 'DropDownControl_base__disabled_37',
                        base__focused: 'DropDownControl_base__focused_63',
                        base__selected: 'DropDownControl_base__selected_46',
                        stateHighlight: 'DropDownControl_stateHighlight_16',
                        base__over: 'DropDownControl_base__over_e7',
                        base__down: 'DropDownControl_base__down_1c',
                        base__open: 'DropDownControl_base__open_e3',
                        label: 'DropDownControl_label_12',
                        label__extraSmall: 'DropDownControl_label__extraSmall_3d',
                        label__small: 'DropDownControl_label__small_e7',
                        label__medium: 'DropDownControl_label__medium_0b',
                        label__placeholder: 'DropDownControl_label__placeholder_98',
                        button: 'DropDownControl_button_cb',
                        button__extraSmall: 'DropDownControl_button__extraSmall_d2',
                        button__small: 'DropDownControl_button__small_b5',
                        button__medium: 'DropDownControl_button__medium_14',
                        gradient: 'DropDownControl_gradient_b5',
                        disabled: 'DropDownControl_disabled_4e',
                        arrow: 'DropDownControl_arrow_de',
                        arrow__extraSmall: 'DropDownControl_arrow__extraSmall_eb',
                        arrow__small: 'DropDownControl_arrow__small_77',
                        arrow__medium: 'DropDownControl_arrow__medium_3d',
                        alert: 'DropDownControl_alert_75',
                        blink: 'DropDownControl_blink_68',
                    };
                let Hn;
                !(function (e) {
                    ((e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down'));
                })(Hn || (Hn = {}));
                const Wn = (0, s.memo)(
                    ({
                        parentId: e,
                        variant: t = Nn.Basic,
                        size: n = xn.Medium,
                        isOpen: a,
                        placeholder: r = R.strings.common.dropdown.placeholder.select(),
                        label: i = '',
                        classMix: o,
                        onClick: u,
                        soundHover: c,
                        soundClick: _,
                        customControl: m,
                    }) => {
                        const g = (0, s.useState)(Hn.Out),
                            E = g[0],
                            b = g[1],
                            p = (0, s.useState)(!1),
                            f = p[0],
                            v = p[1],
                            h = t === Nn.Disabled,
                            A = h || t === Nn.Basic,
                            w = (0, s.useCallback)(() => {
                                h || (b(Hn.Over), c && (0, P.G)(c));
                            }, [h, c]),
                            C = (0, s.useCallback)(() => b(Hn.Out), []);
                        return (
                            (0, s.useEffect)(() => {
                                A || v(!1);
                            }, [t, A]),
                            (0, s.useEffect)(() => {
                                h && C();
                            }, [h, C]),
                            l().createElement(
                                'div',
                                {
                                    id: e ? `${e}_control` : void 0,
                                    className: d()(
                                        Pn.base,
                                        a && Pn.base__open,
                                        Pn[`base__${E}`],
                                        (A || !f) && Pn[`base__${t}`],
                                        o,
                                    ),
                                    onMouseEnter: w,
                                    onMouseUp: () => {
                                        (!h && b(Hn.Over), !A && v(!0));
                                    },
                                    onMouseDown: () => {
                                        h || (b(Hn.Down), _ && (0, P.G)(_));
                                    },
                                    onMouseLeave: C,
                                    onClick: u,
                                },
                                l().createElement('div', { className: Pn.stateHighlight }),
                                !f && t === Nn.Alert && l().createElement('div', { className: Pn.alert }),
                                l().createElement(
                                    'div',
                                    { className: d()(Pn.label, Pn[`label__${n}`], !i && Pn.label__placeholder) },
                                    m || l().createElement(Mn, { content: i || r }),
                                ),
                                l().createElement(
                                    'div',
                                    { className: d()(Pn.button, Pn[`button__${n}`]) },
                                    l().createElement('div', { className: d()(Pn.arrow, Pn[`arrow__${n}`]) }),
                                    l().createElement('div', { className: Pn.gradient }),
                                    h && l().createElement('div', { className: Pn.disabled }),
                                ),
                            )
                        );
                    },
                );
                var jn = n(2344);
                const zn = 'VerticalAutoScroll_base_db',
                    $n = { base: 'VerticalAutoScroll_barBase_93' },
                    Gn = { content: 'VerticalAutoScroll_content_47' },
                    Un = ({
                        children: e,
                        isEnabled: t = !0,
                        selectedItemId: n,
                        scrollAreaKey: a = 'scrollArea',
                        withCompleteTrigger: r = !1,
                        containerClasses: i,
                    }) => {
                        const o = (0, s.useState)(!1),
                            u = o[0],
                            c = o[1],
                            _ = (0, s.useState)(!1),
                            m = _[0],
                            g = _[1],
                            E = (0, s.useRef)(null),
                            b = (0, s.useRef)(null),
                            p = ue(),
                            f = O(() => {
                                c(!0);
                            }),
                            v = (0, s.useCallback)(() => {
                                c(!1);
                            }, []),
                            h = (0, s.useCallback)(() => {
                                const e = b.current,
                                    t = E.current;
                                if (e && p && t) {
                                    const n = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    (r && p.events.on('rest', f), p.applyScroll(n));
                                }
                            }, [f, p, r]);
                        ((0, s.useEffect)(
                            () => () => {
                                p.events.off('rest', f);
                            },
                            [f, p.events, r],
                        ),
                            (0, s.useEffect)(() => {
                                if (t && null !== n) return x(h);
                            }, [a, h, n, t]),
                            (0, s.useEffect)(() => {
                                const e = () => {
                                    const e = p.getContainerSize(),
                                        t = p.getWrapperSize();
                                    e && t && g(e > t);
                                };
                                return (
                                    p.events.on('recalculateContent', e),
                                    () => {
                                        p.events.off('recalculateContent', e);
                                    }
                                );
                            }, [m, p]));
                        const A = {
                                scrollContainerRef: E,
                                selectedItemRef: b,
                                selectedItemId: n,
                                isScrollComplete: u,
                                scrollbarActive: m,
                                onScrollAnimationComplete: v,
                            },
                            w = (0, s.cloneElement)(e, A);
                        return l().createElement(
                            'div',
                            { className: d()(zn, i), ref: E },
                            l().createElement(Fe.Vertical.Area, { api: p, key: a, classNames: Gn }, w),
                            l().createElement(Fe.Vertical.Bar, { api: p, classNames: $n }),
                        );
                    },
                    Vn = {
                        base: 'DropDownItem_base_5e',
                        base__extraSmall: 'DropDownItem_base__extraSmall_5a',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    Zn = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const qn = (0, s.memo)((e) => {
                        let t = e.size,
                            n = e.classMix,
                            a = e.onClick,
                            r = e.itemRenderer,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, Zn);
                        const o = i.id,
                            u = i.isSelected,
                            c = i.isDisabled,
                            _ = i.label,
                            m = i.soundHover,
                            g = i.soundClick,
                            E = (0, s.useCallback)(
                                (e) => {
                                    c || (a && a(e, o));
                                },
                                [o, c, a],
                            ),
                            b = (0, s.useCallback)(() => {
                                c || (m && (0, P.G)(m));
                            }, [c, m]),
                            p = (0, s.useCallback)(() => {
                                c || (g && (0, P.G)(g));
                            }, [c, g]),
                            f = d()(Vn.base, t && Vn[`base__${t}`], u && Vn.base__selected, c && Vn.base__disabled, n);
                        return l().createElement(
                            'div',
                            { className: f, onMouseEnter: b, onMouseDown: p, onClick: E },
                            r ? r(i) : _,
                        );
                    }),
                    Yn = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function Kn() {
                    return (
                        (Kn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Kn.apply(this, arguments)
                    );
                }
                const Qn = ({
                        size: e,
                        items: t,
                        selectedIds: n,
                        selectedItemId: a,
                        selectedItemRef: r,
                        onClick: i,
                        parentId: s,
                        soundHover: o,
                        soundClick: u,
                        itemClassMix: c,
                        itemRenderer: _,
                        scrollbarActive: m,
                    }) =>
                        l().createElement(
                            'div',
                            { className: d()(Yn.base, m && Yn.base__withScroll) },
                            t.map((t) => {
                                const d = `${s}_${t.id}`;
                                return l().createElement(
                                    'div',
                                    { id: s ? d : void 0, key: d, ref: t.id === a ? r : null },
                                    l().createElement(
                                        qn,
                                        Kn({ size: e, soundHover: o, soundClick: u, classMix: c, itemRenderer: _ }, t, {
                                            onClick: i,
                                            isSelected: n.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Xn = {
                        base: 'DropDownList_base_62',
                        base__extraSmall: 'DropDownList_base__extraSmall_60',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    Jn = ({
                        parentId: e,
                        size: t = xn.Medium,
                        items: n,
                        selectedIds: a,
                        isOpen: r,
                        autoScroll: i,
                        classMix: o,
                        itemClassMix: u,
                        itemRenderer: c,
                        onClick: _,
                        soundHover: m,
                        soundClick: g,
                    }) => {
                        const E = (0, s.useState)(null),
                            b = E[0],
                            p = E[1],
                            f = (0, jn.D9)(r);
                        (0, s.useEffect)(() => {
                            if (r && !f) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const n = e.find((e) => t.includes(e.id));
                                    return n ? n.id : null;
                                })(n, a);
                                null !== e && p(e);
                            }
                            r || p(null);
                        }, [r, n, a, f]);
                        const v = e ? `${e}_list` : void 0;
                        return l().createElement(
                            'div',
                            { id: v, className: d()(Xn.base, Xn[`base__${t}`], o) },
                            l().createElement(
                                Un,
                                { selectedItemId: b, isEnabled: i },
                                l().createElement(Qn, {
                                    parentId: e,
                                    items: n,
                                    size: t,
                                    selectedIds: a,
                                    onClick: _,
                                    soundHover: m,
                                    soundClick: g,
                                    itemClassMix: u,
                                    itemRenderer: c,
                                }),
                            ),
                        );
                    },
                    ea = {
                        base: 'PureDropDown_base_fc',
                        base__extraSmall: 'PureDropDown_base__extraSmall_31',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    ta = (0, s.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: n,
                            selected: a = [],
                            variant: r = Nn.Basic,
                            size: i = xn.Medium,
                            multiple: o = !1,
                            autoScroll: u = !0,
                            placeholder: c,
                            classMix: _,
                            className: m,
                            controlRenderer: g,
                            itemRenderer: E,
                            open: b,
                            tooltipArgs: v,
                            onChanges: A,
                            onOpen: w,
                            onClose: C,
                            onClick: k,
                            onClickOutside: y,
                            onMouseEnter: D,
                            onMouseDown: F,
                            onMouseUp: S,
                            onMouseLeave: B,
                            soundHover: L = 'highlight',
                            soundClick: N = 'play',
                            soundItemHover: I,
                            soundItemClick: T,
                        }) => {
                            const R = (0, s.useRef)(null),
                                M = (0, s.useRef)(null),
                                P = (0, s.useRef)({ open: !1, listAbove: !1 }),
                                H = (0, s.useState)(!1),
                                W = H[0],
                                j = H[1],
                                z = (0, s.useState)(!1),
                                $ = z[0],
                                G = z[1],
                                U = ((e, t) => {
                                    const n = Array.isArray(e) ? e : [e];
                                    return !t && n.length > 1 ? n.slice(0, 1) : n;
                                })(a, o),
                                V = r !== Nn.Disabled,
                                Z = void 0 === b,
                                q = Boolean(Z ? W : b),
                                Y = O(() => {
                                    P.current.open && ((P.current.open = !1), j(!1), null == C || C());
                                });
                            h(q ? p.n.ESCAPE : p.n.NONE, Y, q);
                            const K = O(() => {
                                (null == y || y(), Z && (j(!1), (P.current.open = !1), null == C || C()));
                            });
                            ((0, s.useEffect)(() => {
                                const e = R.current;
                                if (e && q)
                                    return (
                                        f.c1.register(e, K),
                                        () => {
                                            f.c1.unregister(e, K);
                                        }
                                    );
                            }, [q, K]),
                                (0, s.useEffect)(() => {
                                    void 0 !== b && (P.current.open = b);
                                }, [b]));
                            const Q = (0, s.useCallback)(() => {
                                if (!R.current || !M.current) return;
                                const e = t && t.current,
                                    n = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    a =
                                        R.current.getBoundingClientRect().bottom +
                                            M.current.getBoundingClientRect().height >
                                        n;
                                a !== P.current.listAbove && ((P.current.listAbove = a), G(a));
                            }, [t]);
                            (0, s.useEffect)(() => x(() => x(Q)), [Q, i, n.length]);
                            const X = (0, s.useCallback)(
                                    (e) => {
                                        const t = U.findIndex((t) => t === e) > -1;
                                        let n = [];
                                        ((n = o ? (t ? U.filter((t) => t !== e) : [e, ...U]) : t ? [] : [e]),
                                            null == A || A(n));
                                    },
                                    [o, A, U],
                                ),
                                J = (0, s.useCallback)(() => {
                                    Z &&
                                        ((P.current.open = !P.current.open),
                                        j(P.current.open),
                                        P.current.open ? null == w || w() : null == C || C());
                                }, [Z, w, C]),
                                ee = (0, s.useCallback)(
                                    (e) => {
                                        (V && J(), null == k || k(e));
                                    },
                                    [V, k, J],
                                ),
                                te = (0, s.useCallback)(
                                    (e, t) => {
                                        (null == k || k(e, t), X(t), o || J());
                                    },
                                    [k, o, J, X],
                                ),
                                ne = (0, s.useMemo)(
                                    () =>
                                        n
                                            .filter((e) => U.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [n, U],
                                ),
                                ae = (0, s.useMemo)(() => n.filter((e) => U.includes(e.id)), [n, U]),
                                re = g ? g(ae) : void 0;
                            return l().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: R,
                                    className: d()(ea.base, ea[`base__${i}`], m, null == _ ? void 0 : _.base),
                                    onMouseEnter: D,
                                    onMouseUp: S,
                                    onMouseDown: F,
                                    onMouseLeave: B,
                                },
                                l().createElement(
                                    'div',
                                    { className: d()(ea.control, q && ea.control__down) },
                                    l().createElement(
                                        Le.l,
                                        { tooltipArgs: v },
                                        l().createElement(Wn, {
                                            parentId: e,
                                            size: i,
                                            variant: r,
                                            isOpen: q,
                                            placeholder: c,
                                            label: ne,
                                            classMix: _ && _.control,
                                            onClick: ee,
                                            soundHover: L,
                                            soundClick: N,
                                            customControl: re,
                                        }),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    {
                                        ref: M,
                                        className: d()(
                                            ea.list,
                                            q ? ea.list__down : ea.list__up,
                                            $ ? ea.list__above : ea.list__under,
                                        ),
                                    },
                                    l().createElement(Jn, {
                                        parentId: e,
                                        size: i,
                                        items: n,
                                        selectedIds: U,
                                        isOpen: q,
                                        autoScroll: u,
                                        classMix: _ && _.list,
                                        itemClassMix: _ && _.item,
                                        itemRenderer: E,
                                        onClick: te,
                                        soundHover: I || L,
                                        soundClick: T || N,
                                    }),
                                ),
                            );
                        },
                    );
                var na = n(2056),
                    aa = n(771),
                    ra = n(8018);
                const ia = {
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
                let sa;
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
                })(sa || (sa = {}));
                const la = l().memo(function ({ role: e, size: t = sa.c30x30, className: n }) {
                        const a = (0, s.useMemo)(() => {
                            try {
                                var n;
                                const a =
                                    null == (n = R.images.gui.maps.icons.tankmen.roles.$dyn(t))
                                        ? void 0
                                        : n.$dyn((0, Ie.BN)(e));
                                if (!a) throw Error;
                                return { backgroundImage: `url(${a})` };
                            } catch (t) {
                                console.error('Cant find resource in RoleIcon: ', e);
                            }
                        }, [e, t]);
                        return l().createElement('div', { style: a, className: d()(ia.base, ia[`base__${t}`], n) });
                    }),
                    oa = 'DropDownItemRender_base_c6',
                    ua = 'DropDownItemRender_base__header_97',
                    ca = 'DropDownItemRender_base__disabled_35',
                    da = 'DropDownItemRender_icon_f0',
                    _a = 'DropDownItemRender_text_49',
                    ma = (e) => {
                        if (0 === e.length) return;
                        const t = e[0];
                        return ga(t, !0);
                    },
                    ga = ({ id: e, label: t, isDisabled: n }, a = !1) => {
                        const r = (0, s.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.crew.sortingDropdown.dropdownItems.$dyn(`c_${e}`)})`,
                                }),
                                [e],
                            ),
                            i = d()(oa, a && ua, n && ca);
                        return l().createElement(
                            'div',
                            { className: i },
                            l().createElement('div', { className: da, style: r }),
                            l().createElement('div', { className: _a }, a ? l().createElement(Mn, { content: t }) : t),
                        );
                    },
                    Ea = {
                        base: 'Header_base_bd',
                        title: 'Header_title_21',
                        pointsContainer: 'Header_pointsContainer_13',
                        selectedPointsContainer: 'Header_selectedPointsContainer_37',
                        roleNameAndPointsContainer: 'Header_roleNameAndPointsContainer_7d',
                        roleIcon: 'Header_roleIcon_5d',
                        roleName: 'Header_roleName_ee',
                        selectedPointsProgressContainer: 'Header_selectedPointsProgressContainer_99',
                        selectedPointsProgress: 'Header_selectedPointsProgress_7e',
                        selectedPointsCurrent: 'Header_selectedPointsCurrent_96',
                        availablePointsContainer: 'Header_availablePointsContainer_0b',
                        allPerksTrained: 'Header_allPerksTrained_b5',
                        untrained: 'Header_untrained_c3',
                        availablePointsTitle: 'Header_availablePointsTitle_fd',
                        availablePointsTitle__allSkillsLearned: 'Header_availablePointsTitle__allSkillsLearned_db',
                        availablePointsTitle__disabled: 'Header_availablePointsTitle__disabled_53',
                        countContainer: 'Header_countContainer_a3',
                        count: 'Header_count_81',
                        skillIcon: 'Header_skillIcon_0b',
                        spinGlow: 'Header_spinGlow_4c',
                        rotation: 'Header_rotation_2e',
                        dropdown: 'Header_dropdown_a9',
                        dropdown_content: 'Header_dropdown_content_23',
                        dropdown_background: 'Header_dropdown_background_c0',
                        dropdown__warning: 'Header_dropdown__warning_f2',
                        dropdown_icon: 'Header_dropdown_icon_80',
                        dropdown_title: 'Header_dropdown_title_84',
                        dropdown_list: 'Header_dropdown_list_c8',
                    };
                var ba;
                !(function (e) {
                    ((e.AllSkillsLearned = 'allSkillsLearned'), (e.Available = 'available'), (e.Disabled = 'disabled'));
                })(ba || (ba = {}));
                const pa = (0, w.Pi)(() => {
                    const e = An(),
                        t = e.model,
                        n = e.controls,
                        a = t.role.get(),
                        r = t.areAllSkillsLearned.get(),
                        i = t.availableSkillsAmount.get(),
                        o = i > 0,
                        u = t.skillsEfficiency.get(),
                        c = ((e, t) => (e ? ba.AllSkillsLearned : t === aa.sU ? ba.Disabled : ba.Available))(r, u),
                        _ = (0, ra.Y4)(u) === ra.H$.Untrained,
                        m = (0, A.GS)().mediaSize,
                        g = 0 === t.computes.getSortingDropDownItems().length,
                        E = t.computes.getDisabledSorting(),
                        b = n.onSortingSelectionChange,
                        p = t.showSortingSelectionWarning.get(),
                        f = {
                            contentId: R.views.lobby.crew.tooltips.SortingDropdownTooltip('resId'),
                            args: { isWarningShown: p, isSortingDisabled: E },
                        },
                        v = (0, s.useCallback)(
                            (e) => {
                                if (e) {
                                    const t = e[0];
                                    void 0 !== t && b({ sortingType: t });
                                }
                            },
                            [b],
                        );
                    return l().createElement(
                        'div',
                        { className: Ea.base },
                        l().createElement(
                            'div',
                            { className: Ea.title },
                            t.isMajorQualification.get()
                                ? R.strings.crew.skillsTraining.title.majorQualification()
                                : R.strings.crew.skillsTraining.title.bonusQualification(),
                        ),
                        l().createElement(
                            'div',
                            { className: Ea.pointsContainer },
                            l().createElement(
                                'div',
                                { className: Ea.selectedPointsContainer },
                                l().createElement(la, {
                                    role: a,
                                    size: m < A.cJ.Medium ? sa.c24x24 : sa.c30x30,
                                    className: m >= A.cJ.Medium ? Ea.roleIcon : void 0,
                                }),
                                l().createElement(
                                    'div',
                                    { className: Ea.roleNameAndPointsContainer },
                                    l().createElement(
                                        'div',
                                        { className: Ea.roleName },
                                        t.isFemale.get()
                                            ? R.strings.crew.matrix.skills.roles.female.$dyn(a)
                                            : R.strings.crew.matrix.skills.roles.$dyn(a),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: Ea.selectedPointsProgressContainer },
                                        l().createElement(ot, {
                                            text: R.strings.common.progress(),
                                            classMix: Ea.selectedPointsProgress,
                                            binding: {
                                                current: l().createElement(
                                                    'div',
                                                    { className: Ea.selectedPointsCurrent },
                                                    t.currentSkillsAmount.get(),
                                                ),
                                                total: l().createElement('div', null, t.totalSkillsAmount.get()),
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            (o || t.isAnySkillSelected.get() || r) &&
                                !_ &&
                                l().createElement(
                                    In.i,
                                    { body: R.strings.crew.skillsTraining.availableSkillsTitle.available() },
                                    l().createElement(
                                        'div',
                                        { className: Ea.availablePointsContainer },
                                        l().createElement('div', {
                                            className: d()(Ea.availablePointsTitle, Ea[`availablePointsTitle__${c}`]),
                                        }),
                                        !r &&
                                            l().createElement(
                                                'div',
                                                { className: Ea.countContainer },
                                                l().createElement(
                                                    'div',
                                                    { className: Ea.skillIcon },
                                                    o && l().createElement('div', { className: Ea.spinGlow }),
                                                ),
                                                l().createElement('div', { className: Ea.count }, i),
                                            ),
                                    ),
                                ),
                            r &&
                                !_ &&
                                l().createElement(
                                    In.i,
                                    { body: R.strings.crew.skillsTraining.availableSkillsTitle.allSkillsLearned() },
                                    l().createElement('div', { className: Ea.allPerksTrained }),
                                ),
                            _ &&
                                l().createElement(
                                    In.i,
                                    { body: R.strings.crew.skillsTraining.availableSkillsTitle.disabled() },
                                    l().createElement('div', { className: Ea.untrained }),
                                ),
                        ),
                        !g &&
                            l().createElement(
                                'div',
                                { className: d()(Ea.dropdown, p && Ea.dropdown__warning) },
                                l().createElement('div', { className: Ea.dropdown_background }),
                                l().createElement(
                                    na.u,
                                    {
                                        contentId: R.views.lobby.crew.tooltips.SortingDropdownTooltip('resId'),
                                        args: { isWarningShown: p, isSortingDisabled: E },
                                    },
                                    l().createElement(
                                        'div',
                                        { className: Ea.dropdown_content },
                                        l().createElement('div', { className: Ea.dropdown_icon }),
                                        l().createElement(
                                            'div',
                                            { className: Ea.dropdown_title },
                                            R.strings.crew_perks.sorting.title(),
                                        ),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    null,
                                    l().createElement(ta, {
                                        items: t.computes.getSortingDropDownItems(),
                                        selected: t.computes.getCurrentSorting(),
                                        variant: E ? Nn.Disabled : p ? Nn.Alert : Nn.Basic,
                                        onChanges: v,
                                        size: xn.Small,
                                        controlRenderer: ma,
                                        itemRenderer: ga,
                                        className: Ea.dropdown_list,
                                        tooltipArgs: f,
                                    }),
                                ),
                            ),
                    );
                });
                let fa;
                !(function (e) {
                    ((e[(e.Default = 0)] = 'Default'),
                        (e[(e.Common = 1)] = 'Common'),
                        (e[(e.Legendary = 2)] = 'Legendary'));
                })(fa || (fa = {}));
                const va = 'ScrollWithLips_base_a2',
                    ha = 'ScrollWithLips_bar_67',
                    Aa = 'ScrollWithLips_content_6d',
                    wa = 'ScrollWithLips_fadeContainerTop_6d',
                    Ca = 'ScrollWithLips_fadeContainerBottom_43',
                    ka = 'ScrollWithLips_fade_5e';
                let ya;
                !(function (e) {
                    ((e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom'));
                })(ya || (ya = {}));
                const Da = ({ children: e, className: t, classNames: n }) => {
                    const a = (0, s.useState)(ya.None),
                        r = a[0],
                        i = a[1],
                        o = r === ya.Both,
                        u = ue();
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                const e = u.getBounds()[1],
                                    t = u.animationScroll.scrollPosition.get();
                                0 === e
                                    ? i(ya.None)
                                    : t > 1 && t < e - 21
                                      ? i(ya.Both)
                                      : t <= 1
                                        ? i(ya.Bottom)
                                        : t >= e - 21 && i(ya.Top);
                            };
                            return (
                                u.events.on('change', e),
                                u.events.on('resizeHandled', e),
                                u.events.on('recalculateContent', e),
                                () => {
                                    (u.events.off('change', e),
                                        u.events.off('resizeHandled', e),
                                        u.events.off('recalculateContent', e));
                                }
                            );
                        }, [u]),
                        l().createElement(
                            'div',
                            { className: d()(va, t) },
                            l().createElement(
                                Fe.Vertical.Default,
                                {
                                    api: u,
                                    barClassNames: { base: d()(ha, null == n ? void 0 : n.bar) },
                                    scrollClassNames: { content: d()(Aa, null == n ? void 0 : n.content) },
                                },
                                e,
                            ),
                            (r === ya.Top || o) &&
                                l().createElement(
                                    'div',
                                    { className: d()(wa, null == n ? void 0 : n.lips) },
                                    l().createElement('div', { className: ka }),
                                ),
                            (r === ya.Bottom || o) &&
                                l().createElement(
                                    'div',
                                    { className: d()(Ca, null == n ? void 0 : n.lips) },
                                    l().createElement('div', { className: ka }),
                                ),
                        )
                    );
                };
                var Fa = n(4150),
                    Sa = n(2603);
                const Ba = 'ListCardAlert_base_52',
                    La = 'ListCardAlert_glow_1c',
                    Na = 'ListCardAlert_icon_d2',
                    xa = ({ className: e, tooltipArgs: t }) =>
                        l().createElement(
                            'div',
                            { className: d()(Ba, e) },
                            l().createElement('div', { className: La }),
                            t
                                ? l().createElement(In.i, t, l().createElement('div', { className: Na }))
                                : l().createElement('div', { className: Na }),
                        );
                var Ia = n(2768);
                const Ta = 'SkillCardBackground_base_f0',
                    Oa = 'SkillCardBackground_background_77',
                    Ra = 'SkillCardBackground_base__selected_02',
                    Ma = 'SkillCardBackground_base__fullyLearned_f5',
                    Pa = 'SkillCardBackground_base__lowEfficiency_1e',
                    Ha = 'SkillCardBackground_base__inProgress_71',
                    Wa = 'SkillCardBackground_frame_db',
                    ja = 'SkillCardBackground_progress_22',
                    za = 'SkillCardBackground_disabled_68',
                    $a = (0, s.memo)(({ level: e, isSelected: t, isLearned: n, hasLowEfficiency: a, isDisabled: r }) =>
                        l().createElement(
                            'div',
                            { className: d()(Ta, n && (e === aa.I ? Ma : Ha), t && Ra, !r && a && Pa) },
                            l().createElement('div', { className: Oa }),
                            n &&
                                e > 0 &&
                                e < aa.I &&
                                l().createElement('div', { className: ja, style: { width: `${e}%` } }),
                            r && l().createElement('div', { className: za }),
                            l().createElement('div', { className: Wa }),
                        ),
                    ),
                    Ga = 'SkillCard_base_1a',
                    Ua = 'SkillCard_base__clickable_8b',
                    Va = 'SkillCard_container_11',
                    Za = 'SkillCard_icon_a1',
                    qa = 'SkillCard_description_26',
                    Ya = 'SkillCard_popularityList_38',
                    Ka = 'SkillCard_content_76',
                    Qa = 'SkillCard_base__disabled_af',
                    Xa = 'SkillCard_popularityItem_23',
                    Ja = 'SkillCard_popularityItem_image_0d',
                    er = 'SkillCard_name_c8',
                    tr = 'SkillCard_base__withSignIcon_48',
                    nr = 'SkillCard_zeroSign_a1',
                    ar = 'SkillCard_directiveSign_cd',
                    rr = 'SkillCard_boosterSign_30',
                    ir = 'SkillCard_level_91',
                    sr = 'SkillCard_level__selectedFull_ff',
                    lr = 'SkillCard_level__selectedNotFul_87',
                    or = 'SkillCard_level__inProgress_97',
                    ur = 'SkillCard_base__untrained_eb',
                    cr = 'SkillCard_base__lowEfficiency_f0',
                    dr = 'SkillCard_level__fullyLearned_a1',
                    _r = 'SkillCard_warning_9c',
                    mr = [
                        R.images.gui.maps.icons.crew.sortingDropdown.common_icon(),
                        R.images.gui.maps.icons.crew.sortingDropdown.legendary_icon(),
                    ],
                    gr = (0, ra.Ds)();
                let Er = !1;
                const br = (0, w.Pi)(
                        ({
                            name: e,
                            iconName: t,
                            userName: n,
                            description: a,
                            isSelected: r,
                            level: i,
                            isZero: o,
                            isIrrelevant: u,
                            hasAvailableSkills: c,
                            isLearned: m,
                            skillsEfficiency: g,
                            battleBooster: E,
                            isExtraLarge: b,
                            componentKey: p,
                            popularityList: v,
                        }) => {
                            const h = (0, s.useRef)(null),
                                w = An(),
                                C = w.model,
                                k = w.controls,
                                y = (0, A.GS)().mediaWidth === A.fd.ExtraSmall,
                                D = (0, s.useMemo)(
                                    () =>
                                        ((e, t) => ({
                                            toString: () => {
                                                if (!e.current) return '';
                                                const n = _.O.view.getSize('rem'),
                                                    a = _.O.view.getViewGlobalPosition(),
                                                    r = e.current.getBoundingClientRect(),
                                                    i = _.O.view.pxToRem(r.x) + a.x,
                                                    s = _.O.view.pxToRem(r.width),
                                                    l = i > n.width / 2 || t ? -370 : s - 30;
                                                return Math.round(i + l).toString();
                                            },
                                        }))(h, y),
                                    [y],
                                ),
                                F = E !== Fa.S.None,
                                S = i === aa.I,
                                B = !o && (r || m),
                                L = (0, ra.Y4)(g),
                                N = L === ra.H$.Low,
                                x = L === ra.H$.Untrained,
                                I = u || (x && !(m && F)),
                                T = (c || r) && !m && !I,
                                O = !u && F && m,
                                M = C.computes.getFirstDisabledSortingOption();
                            return l().createElement(
                                Be.t,
                                {
                                    args: { skillName: e, tooltipId: Sa._K, componentKey: p, positionX: D },
                                    ignoreMouseClick: !0,
                                },
                                l().createElement(
                                    'div',
                                    {
                                        className: d()(Ga, T && Ua, I && Qa, N && cr, O && tr, ur),
                                        onClick: () => {
                                            T && (_.O.sound.play.click(), k.clickOnSkill(e));
                                        },
                                        onMouseEnter: () => {
                                            I ||
                                                (_.O.sound.play.highlight(),
                                                gr(() => {
                                                    ((Er = !0), k.hoverSkill(e));
                                                }, 300));
                                        },
                                        onMouseLeave: () => {
                                            I || (gr.cancel(), Er && (k.outSkill(e), (Er = !1)));
                                        },
                                        ref: h,
                                    },
                                    l().createElement($a, {
                                        level: i,
                                        isSelected: r,
                                        isLearned: m,
                                        isDisabled: I,
                                        hasLowEfficiency: N,
                                    }),
                                    l().createElement(
                                        'div',
                                        { className: Ka },
                                        l().createElement(Ia.y, {
                                            iconName: t,
                                            size: b ? Ia.F.c120x90 : Ia.F.c80x80,
                                            className: Za,
                                        }),
                                        l().createElement(
                                            'div',
                                            { className: Va },
                                            l().createElement('div', { className: er }, n),
                                            l().createElement(ot, { classMix: qa, text: a, isTruncationAvailable: !0 }),
                                        ),
                                    ),
                                    v &&
                                        l().createElement(
                                            'div',
                                            { className: Ya },
                                            v
                                                .map((e, t) => ({ value: e, index: t }))
                                                .filter(({ value: e }) => e > 0 || !M)
                                                .map(({ value: e, index: t }) =>
                                                    l().createElement(
                                                        'div',
                                                        { key: t, className: Xa },
                                                        l().createElement('img', {
                                                            className: Ja,
                                                            src: mr[t],
                                                            alt: '',
                                                        }),
                                                        (0, Ie.dL)(f.Z5.getRealFormat(e, f.Gr.WO_ZERO_DIGITS)),
                                                    ),
                                                ),
                                        ),
                                    o && l().createElement('div', { className: nr }),
                                    O && l().createElement('div', { className: E === Fa.S.Improved ? rr : ar }),
                                    B &&
                                        l().createElement(
                                            'div',
                                            { className: d()(ir, m && (S ? dr : or), r && (S ? sr : lr)) },
                                            (0, Ie.uF)(R.strings.common.percentValue(), { value: i }),
                                        ),
                                    u && !x && l().createElement(xa, { className: _r }),
                                ),
                            );
                        },
                    ),
                    pr = 'SkillsGroup_base_58',
                    fr = 'SkillsGroup_skillCard_b6',
                    vr = ['list', 'delayOffset'];
                function hr() {
                    return (
                        (hr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        hr.apply(this, arguments)
                    );
                }
                const Ar = (0, w.Pi)((e) => {
                        let t = e.list,
                            n = e.delayOffset,
                            a = void 0 === n ? 0 : n,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, vr);
                        const i = An().model,
                            o = i.computes.getCurrentSorting(),
                            u = i.isFirstRender.get(),
                            c = i.computes.getCurrentSorting() === fa.Default,
                            d = (0, s.useRef)(!1);
                        (0, s.useEffect)(() => {
                            d.current ? (d.current = !1) : (d.current = !0);
                        }, [o]);
                        const _ = d.current,
                            m = 0 !== i.computes.getSortingDropDownItems().length,
                            g = (!u && !c) || !_;
                        return l().createElement(
                            'div',
                            { className: pr, key: `sorting_${o}` },
                            (0, Se.UI)(t, (e, t) =>
                                l().createElement(
                                    'div',
                                    {
                                        key: `skill_${t}_${e.name}`,
                                        className: g && m ? fr : void 0,
                                        style: { animationDelay: `${0.13 * t + a}s` },
                                    },
                                    l().createElement(br, hr({}, e, r)),
                                ),
                            ),
                        );
                    }),
                    wr = 'SkillsList_base_23',
                    Cr = 'SkillsList_line_28',
                    kr = 'SkillsList_scrollArea_db',
                    yr = 'SkillsList_bar_e3',
                    Dr = 'SkillsList_lips_a9',
                    Fr = (0, w.Pi)(({ className: e }) => {
                        const t = An().model,
                            n = t.availableSkillsAmount.get(),
                            a = t.computes.getCurrentSorting(),
                            r = (0, A.GS)().mediaWidth,
                            i = t.computes.getAllBlocks(r),
                            o = t.isFirstRender.get(),
                            u = t.role.get(),
                            c = (0, s.useRef)(!1),
                            _ = (0, bn.aD)(() => {
                                t.isFirstRender.set(!1);
                            });
                        ((0, s.useEffect)(() => {
                            _();
                        }, [_]),
                            (0, s.useEffect)(() => {
                                c.current ? (c.current = !1) : (c.current = !0);
                            }, [a]));
                        const m = c.current,
                            g = t.computes.getCurrentSorting() === fa.Default,
                            E = 0 !== t.computes.getSortingOptions().length,
                            b = (!o && !g) || m;
                        return l().createElement(
                            'div',
                            { className: d()(wr, e), key: g ? 'default' : `role_${u}_${o}` },
                            l().createElement('div', { className: Cr }),
                            l().createElement(
                                Da,
                                { className: kr, classNames: { bar: yr, lips: Dr } },
                                (0, Se.UI)(i, (e, a) => {
                                    const s = {
                                        animationDelay:
                                            b && E ? 0.05 * i.slice(a).reduce((e, t) => e + t.length, 0) + 's' : '0s',
                                    };
                                    return l().createElement(
                                        l().Fragment,
                                        { key: `block_${a}` },
                                        l().createElement(Ar, {
                                            list: e,
                                            skillsEfficiency: t.skillsEfficiency.get(),
                                            hasAvailableSkills: n > 0,
                                            isExtraLarge: r >= A.fd.ExtraLarge,
                                            componentKey: t.skillsList.componentKey.get(),
                                            delayOffset: 0.2 * i.slice(0, a).reduce((e, t) => e + t.length, 0),
                                        }),
                                        a !== i.length - 1 && l().createElement('div', { className: Cr, style: s }),
                                    );
                                }),
                            ),
                            l().createElement('div', { className: Cr }),
                        );
                    }),
                    Sr = 'SkillsTrainingViewApp_base_f2',
                    Br = 'SkillsTrainingViewApp_background_c4',
                    Lr = 'SkillsTrainingViewApp_closeBtn_b8',
                    Nr = 'SkillsTrainingViewApp_crewWidget_52',
                    xr = 'SkillsTrainingViewApp_ttcWidget_f0',
                    Ir = 'SkillsTrainingViewApp_widgetDecorator_80',
                    Tr = 'SkillsTrainingViewApp_content_14',
                    Or = 'SkillsTrainingViewApp_skillsList_9f',
                    Rr = 'SkillsTrainingViewApp_footer_fa';
                function Mr() {
                    return (
                        (Mr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Mr.apply(this, arguments)
                    );
                }
                const Pr = (0, w.Pi)(() => {
                    const e = An(),
                        t = e.model,
                        n = e.controls,
                        a = () => {
                            n.close();
                        },
                        r = (0, A.GS)().mediaWidth,
                        i = t.isTankmanInVehicle.get() && r >= A.fd.Medium;
                    var s;
                    return (
                        (s = a),
                        h(p.n.ESCAPE, s),
                        l().createElement(
                            'div',
                            { className: Sr },
                            l().createElement('div', { className: Br }),
                            l().createElement(
                                'div',
                                { className: Lr },
                                l().createElement(b, {
                                    caption: R.strings.common.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: a,
                                }),
                            ),
                            l().createElement('div', { className: Nr }, l().createElement(C.O, null)),
                            i &&
                                l().createElement(
                                    'div',
                                    { className: xr },
                                    l().createElement(
                                        gn,
                                        Mr({}, t.vehicleInfo.get(), { isPerkTipShown: !0, className: Ir }),
                                        l().createElement(Xt, {
                                            showBackground: !1,
                                            resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { className: Tr },
                                l().createElement(pa, null),
                                l().createElement(Fr, { className: Or }),
                                l().createElement(Ln, { className: Rr }),
                            ),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    u().render(
                        l().createElement(i.z, null, l().createElement(hn, null, l().createElement(Pr, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2857: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => u });
                var a = n(6483),
                    r = n.n(a),
                    i = n(6373),
                    s = n(7363),
                    l = n.n(s),
                    o = n(8699);
                const u = (0, s.memo)(({ classMix: e, targetId: t }) =>
                    l().createElement(
                        i.i,
                        {
                            header: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.header(),
                            body: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on.body(),
                            targetId: t,
                        },
                        l().createElement(
                            'div',
                            { className: r()(o.Z.base, e) },
                            l().createElement('div', { className: o.Z.icon }),
                        ),
                    ),
                );
            },
            5563: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => g, r: () => m });
                var a = n(6483),
                    r = n.n(a),
                    i = n(7078),
                    s = n(2603),
                    l = n(771),
                    o = n(3649),
                    u = n(9916),
                    c = n(7363),
                    d = n.n(c),
                    _ = n(130);
                let m;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large'));
                })(m || (m = {}));
                const g = (0, c.memo)(
                    ({
                        efficiencyValue: e,
                        tankmanID: t = l.y$,
                        className: n,
                        targetId: a = R.views.lobby.crew.widgets.CrewWidget('resId'),
                        size: c = m.Normal,
                    }) => {
                        const g = e === l.sU,
                            E = g ? { tooltipId: s.M4 } : { tooltipId: s.Br, skillEfficiency: e, tankmanID: t };
                        return d().createElement(
                            i.t,
                            { targetId: a, args: E, isEnabled: t !== l.y$ },
                            d().createElement(
                                'div',
                                { className: r()(_.Z.base, _.Z[`base__${c}`], g && _.Z.base__untrained, n) },
                                g
                                    ? d().createElement('div', { className: _.Z.icon })
                                    : d().createElement(
                                          'div',
                                          { className: r()(_.Z.percent, e === l.yb && _.Z.percent__full) },
                                          (0, o.dL)(u.Z5.getNumberFormat(100 * e, u.B3.INTEGRAL)),
                                      ),
                            ),
                        );
                    },
                );
            },
            2768: (e, t, n) => {
                'use strict';
                n.d(t, { F: () => o, y: () => u });
                var a = n(6483),
                    r = n.n(a),
                    i = n(7363),
                    s = n.n(i),
                    l = n(4458);
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
                const u = s().memo(function ({ iconName: e, size: t = o.c24x24, className: n }) {
                    var a;
                    const i = null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e);
                    return s().createElement('div', {
                        style: null !== i ? { backgroundImage: `url(${i})` } : void 0,
                        className: r()(l.Z.base, l.Z[`base__${t}`], n),
                    });
                });
            },
            8617: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => f });
                var a = n(6483),
                    r = n.n(a),
                    i = n(771),
                    s = n(9480),
                    l = n(7363),
                    o = n.n(l),
                    u = n(5563),
                    c = n(8018),
                    d = n(5108),
                    _ = n(4091),
                    m = n(552),
                    g = n(8326),
                    E = n(5855),
                    b = n(3591);
                function p() {
                    return (
                        (p =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        p.apply(this, arguments)
                    );
                }
                const f = ({
                    data: e,
                    dataToCompare: t,
                    classes: n,
                    tankmanID: a = i.y$,
                    size: l = E.Ow.c24x24,
                    collapseType: f = E.t6.None,
                    isSkillTooltipEnabled: v = !1,
                    isAcceleratedTrainingVisible: h = !1,
                    isNewSkillAnimated: A = !1,
                    isEfficiencyVisible: w = !1,
                    isBonusSkillsVisible: C = !0,
                    tooltipsTargetId: k = R.invalid('resId'),
                    tooltipArgs: y,
                    blinkStyle: D,
                    children: F,
                }) => {
                    const S = e.majorSkills,
                        B = e.bonusSkills,
                        L = e.skillsEfficiency,
                        N = (null == t ? void 0 : t.skillsEfficiency) || L,
                        x = (0, c.Y4)(L),
                        I = void 0 !== t && t.skillsEfficiency !== L,
                        T = x !== c.H$.Normal || w || I,
                        O = null == t ? void 0 : t.majorSkills,
                        M = null == t ? void 0 : t.bonusSkills,
                        P = M || B,
                        H = s.lN(P),
                        W = C && P.length > 0,
                        j = A || void 0 !== t,
                        z = (null == O ? void 0 : O.length) === i.GT,
                        $ = (0, b.Ld)(f, P.length, T, x !== c.H$.Low && void 0 !== H && H.level < i.I),
                        G = {
                            size: l,
                            efficiencyState: x,
                            tooltipData: { targetId: k, isEnabled: v, tankmanID: a, args: y },
                        };
                    return o().createElement(
                        'div',
                        { className: r()(g.Z.base, g.Z[`base__${l}`], null == n ? void 0 : n.base) },
                        T &&
                            o().createElement(
                                d.r,
                                { blinkStyle: D, isEnabled: I && j },
                                o().createElement(u.A, {
                                    efficiencyValue: N,
                                    tankmanID: a,
                                    className: g.Z.efficiency,
                                    size: (0, b.h7)(l, W),
                                    targetId: k,
                                }),
                            ),
                        F,
                        o().createElement(
                            'div',
                            { className: g.Z.rows },
                            j
                                ? o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement(
                                          _.s,
                                          p(
                                              {
                                                  skills: S,
                                                  possibleSkills: O,
                                                  blinkStyle: D,
                                                  isAcceleratedTrainingVisible: h,
                                                  isNewSkillAnimated: A,
                                                  isSkillsEfficiencyLearning: I,
                                              },
                                              G,
                                          ),
                                      ),
                                      W &&
                                          o().createElement(
                                              _.s,
                                              p(
                                                  {
                                                      skills: B,
                                                      skillType: E.W.Bonus,
                                                      possibleSkills: M,
                                                      className: g.Z.bonusRow,
                                                      collapseLayout: $,
                                                      blinkStyle: D,
                                                      isNewSkillAnimated: A,
                                                      isAllMajorSkillsLearned: z,
                                                  },
                                                  G,
                                              ),
                                          ),
                                  )
                                : o().createElement(
                                      o().Fragment,
                                      null,
                                      o().createElement(m.X, p({ skills: S, isAcceleratedTrainingVisible: h }, G)),
                                      W &&
                                          o().createElement(
                                              m.X,
                                              p(
                                                  {
                                                      skills: B,
                                                      skillType: E.W.Bonus,
                                                      className: g.Z.bonusRow,
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
            6177: (e, t, n) => {
                'use strict';
                n.d(t, { I: () => p });
                var a = n(6483),
                    r = n.n(a),
                    i = n(2686),
                    s = n(126),
                    l = n(6373),
                    o = n(3138),
                    u = n(3112),
                    c = n(7363),
                    d = n.n(c),
                    _ = n(7030),
                    m = n(2582),
                    g = n(7160),
                    E = n(5855),
                    b = n(1890);
                const p = d().memo(function ({ type: e, index: t, totalAmount: n, className: a, size: p }) {
                    const f = (0, c.useState)(m.yZ.Stop),
                        v = f[0],
                        h = f[1],
                        A = (0, u.V)(),
                        w =
                            p === E.Ow.c44x44
                                ? ((e) => ({
                                      width: 96,
                                      height: 96,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 2, columns: 21 },
                                      getChunkPath: (0, s.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_big_${e}_`,
                                      ),
                                  }))(e)
                                : ((e) => ({
                                      width: 64,
                                      height: 64,
                                      frameCount: 24,
                                      chunk: { count: 1, rows: 1, columns: 24 },
                                      getChunkPath: (0, s.V)(
                                          `R.images.gui.maps.icons.sequence.lost_skill.lostSkill_small_${e}_`,
                                      ),
                                  }))(e),
                        C = (0, s.q)(w),
                        k = p === E.Ow.c44x44 ? 60 : 36,
                        y = (0, _.useSpring)(
                            () => ({
                                from: { x: 0 },
                                to: { x: o.O.view.remToPx(k) },
                                config: { duration: 300, easing: g.qb },
                                delay: 600 - 100 * t,
                            }),
                            [t, k, A],
                        )[0];
                    return (
                        (0, c.useEffect)(() => {
                            const e = setTimeout(() => h(m.yZ.Play), 100 * (n - 1) - 100 * t);
                            return () => clearTimeout(e);
                        }, [t, n]),
                        d().createElement(
                            l.i,
                            { body: R.strings.dialogs.perksReset.lostSkill.tooltip.description() },
                            d().createElement(
                                _.animated.div,
                                { style: y, className: r()(b.Z.base, b.Z[`base__${p}`], a) },
                                d().createElement(
                                    'div',
                                    { className: b.Z.icon },
                                    d().createElement(i.At, {
                                        width: w.width,
                                        height: w.height,
                                        frameCount: w.frameCount,
                                        getImageSource: C,
                                        loop: !1,
                                        state: v,
                                        style: { transform: `scale(${A})` },
                                    }),
                                ),
                            ),
                        )
                    );
                });
            },
            9152: (e, t, n) => {
                'use strict';
                n.d(t, { E: () => c });
                var a = n(2686),
                    r = n(126),
                    i = n(7363),
                    s = n.n(i),
                    l = n(2582),
                    o = n(6253),
                    u = n(5147);
                const c = ({ type: e, state: t }) => {
                    const n = ((e, t) => ({
                            width: 24,
                            height: 24,
                            frameCount: 42,
                            chunk: { count: 1, columns: 42, rows: 1 },
                            getChunkPath: (0, r.V)(`R.images.gui.maps.icons.sequence.new_skill.${e}_${t}_`),
                        }))(e, t),
                        c = (0, r.q)(n),
                        d = (0, i.useState)(l.yZ.Stop),
                        _ = d[0],
                        m = d[1];
                    return (
                        (0, i.useEffect)(() => {
                            const e = () => {
                                m(l.yZ.Play);
                            };
                            return ((0, u.L)(e), () => (0, u.r)(e));
                        }, []),
                        s().createElement(a.At, {
                            width: n.width,
                            height: n.height,
                            frameCount: n.frameCount,
                            getImageSource: c,
                            loop: !1,
                            state: _,
                            onAnimationDone: () => {
                                m(l.yZ.Stop);
                            },
                            className: o.Z.base,
                        })
                    );
                };
            },
            5147: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
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
                function r(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                n.d(t, { L: () => o, r: () => u });
                const i = new Map();
                let s = null;
                const l = () => {
                        i.size
                            ? s ||
                              (s = window.setInterval(() => {
                                  for (var e, t = a(i.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : s && (clearInterval(s), (s = null));
                    },
                    o = (e) => {
                        (i.set(e, e), l());
                    },
                    u = (e) => {
                        (i.delete(e), l());
                    };
            },
            3413: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => o, r: () => l });
                var a = n(7363),
                    r = n.n(a),
                    i = n(8147),
                    s = n(9108);
                let l;
                !(function (e) {
                    ((e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale'));
                })(l || (l = {}));
                const o = r().memo(function ({
                    size: e,
                    skillsSignature: t,
                    animationType: n,
                    className: a,
                    children: o,
                }) {
                    return n === l.Scale
                        ? r().createElement(s.Y, { isEnabled: !0, className: a }, o)
                        : n === l.FadeIn
                          ? r().createElement(i.U, { size: e, key: t, className: a }, o)
                          : r().createElement('div', { className: a }, o);
                });
            },
            5108: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => s });
                var a = n(7363),
                    r = n.n(a),
                    i = n(7030);
                const s = r().memo(function ({ blinkStyle: e, isEnabled: t, children: n }) {
                    return r().createElement(i.animated.div, { style: t && e ? e : void 0 }, n);
                });
            },
            8147: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => u });
                var a = n(3112),
                    r = n(7363),
                    i = n.n(r),
                    s = n(7030),
                    l = n(7160),
                    o = n(5855);
                const u = ({ size: e, children: t, className: n }) => {
                    const r = (0, a.V)(),
                        u = e === o.Ow.c44x44 ? 48 : 26,
                        c = (0, s.useSpring)({
                            from: { opacity: 0, marginRight: -u * r },
                            to: [{ marginRight: 0 }, { opacity: 1 }],
                            config: { duration: 400, easing: l.Fs },
                            delay: 800,
                        });
                    return i().createElement(s.animated.div, { style: c, className: n }, t);
                };
            },
            7765: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3138),
                    s = n(3649),
                    l = n(7363),
                    o = n.n(l),
                    u = n(7030),
                    c = n(7160),
                    d = n(8110);
                const _ = o().memo(function ({ size: e, level: t, withSlideOut: n = !0 }) {
                    const a = (0, u.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        l = (0, u.useSpring)(() => ({
                            from: { x: i.O.view.remToPx(-5), opacity: 0 },
                            to: { x: 0, opacity: 1 },
                            config: { duration: 300, easing: c.qb },
                            delay: 700,
                        }))[0],
                        _ = (0, u.useSpring)(
                            () => ({
                                from: { opacity: 0 },
                                to: [{ opacity: 1 }, { opacity: 0 }],
                                config: { duration: 150, easing: c.qb },
                            }),
                            [t],
                        )[0];
                    return o().createElement(
                        'div',
                        { className: r()(d.Z.base, d.Z[`base__${e}`]) },
                        o().createElement(
                            u.animated.div,
                            { style: n ? l : void 0, className: r()(d.Z.level, d.Z.level__skillLost) },
                            a.val.to((e) => (0, s.dL)(Math.floor(e))),
                        ),
                        o().createElement(
                            u.animated.div,
                            { style: n ? Object.assign({}, l, _) : _, className: r()(d.Z.level, d.Z.level__skillBlur) },
                            a.val.to((e) => (0, s.dL)(Math.floor(e))),
                        ),
                    );
                });
            },
            9108: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => l });
                var a = n(7363),
                    r = n.n(a),
                    i = n(7030),
                    s = n(7160);
                const l = r().memo(function ({ isEnabled: e, className: t, children: n }) {
                    const l = (0, i.useSpring)(() => ({ from: { scale: 1 } })),
                        o = l[0],
                        u = l[1];
                    return (
                        (0, a.useEffect)(() => {
                            e &&
                                u.start({
                                    from: { scale: 1 },
                                    to: [{ scale: 1.2 }, { scale: 1 }],
                                    delay: 200,
                                    config: { duration: 400, easing: s.Fs },
                                });
                        }, [e, u]),
                        r().createElement(i.animated.div, { style: e ? o : void 0, className: t }, n)
                    );
                });
            },
            4055: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => u });
                var a = n(3112),
                    r = n(7363),
                    i = n.n(r),
                    s = n(7030),
                    l = n(7160),
                    o = n(5855);
                const u = i().memo(function ({ size: e, className: t, children: n }) {
                    const r = e === o.Ow.c44x44 ? 48 : 26,
                        u = (0, a.V)(),
                        c = (0, s.useSpring)(
                            () => ({
                                from: { opacity: 1, marginRight: 0 },
                                to: [{ opacity: 0 }, { marginRight: -r * u }],
                                config: { duration: 400, easing: l.Fs },
                            }),
                            [u, r],
                        )[0];
                    return i().createElement(s.animated.div, { style: c, className: t }, n);
                });
            },
            4091: (e, t, n) => {
                'use strict';
                n.d(t, { s: () => v });
                var a = n(6483),
                    r = n.n(a),
                    i = n(2344),
                    s = n(9480),
                    l = n(4385),
                    o = n(3649),
                    u = n(7363),
                    c = n.n(u),
                    d = n(2857),
                    _ = n(8018),
                    m = n(5855),
                    g = n(3591),
                    E = n(6177),
                    b = n(7713),
                    p = n(9772),
                    f = n(4722);
                const v = ({
                    skills: e,
                    skillType: t = m.W.Major,
                    possibleSkills: n,
                    isAcceleratedTrainingVisible: a = !1,
                    collapseLayout: u = m.hj.None,
                    efficiencyState: v,
                    size: h,
                    tooltipData: A,
                    blinkStyle: w,
                    isSkillsEfficiencyLearning: C = !1,
                    isAllMajorSkillsLearned: k = !1,
                    isNewSkillAnimated: y = !1,
                    className: D,
                }) => {
                    const F = void 0 === n ? e : n,
                        S = (0, i.D9)(e),
                        B = (0, i.D9)(F),
                        L = S && s.lN(S),
                        N = s.lN(e),
                        x = (0, g.dv)(F),
                        I = s.lN(F),
                        T = n ? e.length - n.length : 0,
                        O = v !== _.H$.Low || C || (I && N && I.level !== N.level),
                        R = (0, g.Nn)(F);
                    return c().createElement(
                        'div',
                        { className: r()(f.Z.base, f.Z[`base__${h}`], f.Z[`base__collapse${(0, o.e)(u)}`], D) },
                        (0, g.oo)(e, S, F, B, (e, n, a) => {
                            const i = (0, g.mg)(e);
                            return c().createElement(b.k, {
                                key: a,
                                index: a,
                                skill: e,
                                skillState: i,
                                skillType: t,
                                previousSkill: B && s.U2(B, a),
                                skillAnimationType: n,
                                size: h,
                                skillsSignature: R,
                                efficiencyState: v,
                                tooltipData: A,
                                blinkStyle: w,
                                isNewSkillAnimated: y,
                                className: r()(
                                    f.Z.skill,
                                    f.Z[`skill__state${(0, o.e)(i)}`],
                                    e === I && f.Z.skill__last,
                                    e === x && f.Z.skill__lastLearnedSkill,
                                ),
                            });
                        }),
                        O &&
                            c().createElement(p.H, {
                                skillsAmountDiff: T,
                                size: h,
                                wasLearned: L && N && L.level !== N.level,
                                skillType: t,
                                isAllMajorSkillsLearned: k,
                                skill: N,
                                possibleSkill: I,
                                blinkStyle: w,
                                className: f.Z.level,
                            }),
                        a &&
                            c().createElement(d.L, {
                                classMix: f.Z.acceleratedTrainingIcon,
                                targetId: null == A ? void 0 : A.targetId,
                            }),
                        T > 0 &&
                            (0, l.K)(T, (e) =>
                                c().createElement(E.I, {
                                    key: e,
                                    index: e,
                                    totalAmount: T,
                                    type: t,
                                    className: f.Z.lostSkill,
                                    size: h,
                                }),
                            ),
                    );
                };
            },
            552: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => v });
                var a = n(6483),
                    r = n.n(a),
                    i = n(771),
                    s = n(9480),
                    l = n(3649),
                    o = n(7363),
                    u = n.n(o),
                    c = n(2857),
                    d = n(8018),
                    _ = n(5855),
                    m = n(3591),
                    g = n(1606),
                    E = n(9561),
                    b = n(2202),
                    p = n(4722);
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                const v = ({
                    skills: e,
                    collapseLayout: t = _.hj.None,
                    skillType: n = _.W.Major,
                    efficiencyState: a,
                    size: o,
                    tooltipData: v,
                    className: h,
                    isAcceleratedTrainingVisible: A,
                }) => {
                    const w = s.lN(e),
                        C = (0, m.dv)(e),
                        k = a !== d.H$.Low && (null == w ? void 0 : w.level) !== i.I;
                    return u().createElement(
                        'div',
                        { className: r()(p.Z.base, p.Z[`base__${o}`], p.Z[`base__collapse${(0, l.e)(t)}`], h) },
                        s.UI(e, (e, t) => {
                            const i = (0, m.mg)(e);
                            return u().createElement(
                                b.O,
                                {
                                    key: t,
                                    skillIndex: t,
                                    name: e.name,
                                    roleName: e.roleName,
                                    customName: e.customName,
                                    level: e.level,
                                    tooltipData: v,
                                    skillType: n,
                                    className: r()(
                                        p.Z.skill,
                                        p.Z[`skill__state${(0, l.e)(i)}`],
                                        e === w && p.Z.skill__last,
                                        e === C && p.Z.skill__lastLearnedSkill,
                                    ),
                                },
                                u().createElement(g.U, f({ size: o, type: n, efficiencyState: a, skillState: i }, e)),
                            );
                        }),
                        k && w && u().createElement(E.T, { skillLevel: w.level, className: p.Z.level }),
                        A &&
                            u().createElement(c.L, {
                                classMix: p.Z.acceleratedTrainingIcon,
                                targetId: null == v ? void 0 : v.targetId,
                            }),
                    );
                };
            },
            9772: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => d });
                var a = n(771),
                    r = n(7363),
                    i = n.n(r),
                    s = n(5855),
                    l = n(5108),
                    o = n(7765),
                    u = n(9108),
                    c = n(9561);
                const d = ({
                    skillsAmountDiff: e,
                    size: t,
                    skillType: n,
                    wasLearned: r,
                    isAllMajorSkillsLearned: d,
                    skill: _,
                    possibleSkill: m,
                    blinkStyle: g,
                    className: E,
                }) => {
                    const b = m || _,
                        p = void 0 !== _ && void 0 !== m ? m.level - _.level : 0,
                        f = e > 0,
                        v = e < 0 || p > 0;
                    return !b ||
                        (b.level === a.I && 0 === p) ||
                        ((null == m ? void 0 : m.level) === a.I && n === s.W.Bonus && p > 0 && !d)
                        ? null
                        : f || (p < 0 && 0 === e)
                          ? i().createElement(o.G, { size: t, level: b.level, withSlideOut: f })
                          : i().createElement(
                                u.Y,
                                { isEnabled: Boolean(r) },
                                i().createElement(
                                    l.r,
                                    { blinkStyle: g, isEnabled: v },
                                    i().createElement(c.T, { skillLevel: b.level, isHighlighted: v, className: E }),
                                ),
                            );
                };
            },
            9561: (e, t, n) => {
                'use strict';
                n.d(t, { T: () => c });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3649),
                    s = n(7363),
                    l = n.n(s),
                    o = n(3591),
                    u = n(872);
                const c = ({ skillLevel: e, isHighlighted: t = !1, className: n }) =>
                    l().createElement(
                        'div',
                        { className: r()(u.Z.base, t && u.Z.base__highlighted, n) },
                        (0, i.dL)(e > 0 && e < 0.01 ? 0.01 : (0, o.iv)(e)),
                    );
            },
            2202: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => o });
                var a = n(3415),
                    r = n(7363),
                    i = n.n(r),
                    s = n(3591);
                const l = ['className', 'children'];
                const o = (e) => {
                    let t = e.className,
                        n = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, l);
                    return i().createElement(a.l, { tooltipArgs: (0, s.iR)(r), className: t }, n);
                };
            },
            7713: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => E });
                var a = n(771),
                    r = n(7363),
                    i = n.n(r),
                    s = n(5855),
                    l = n(9152),
                    o = n(3413),
                    u = n(5108),
                    c = n(4055),
                    d = n(2202),
                    _ = n(1606);
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
                const g = (e, t) => (e ? o.r.Scale : t ? o.r.FadeIn : o.r.None),
                    E = ({
                        index: e,
                        skill: t,
                        previousSkill: n,
                        skillState: r,
                        skillType: E,
                        size: b,
                        efficiencyState: p,
                        tooltipData: f,
                        skillsSignature: v,
                        blinkStyle: h,
                        isNewSkillAnimated: A = !1,
                        skillAnimationType: w = s.Qm.None,
                        className: C,
                    }) => {
                        const k = w === s.Qm.Blink || w === s.Qm.SlideOutAndBlink,
                            y = w === s.Qm.SlideOutAndBlink || w === s.Qm.SlideOut,
                            D = w === s.Qm.FadeIn,
                            F = {
                                skillIndex: e,
                                name: t.name,
                                roleName: t.roleName,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: f,
                                skillType: E,
                            };
                        return A && t.name === a.jw && b === s.Ow.c24x24
                            ? i().createElement(
                                  d.O,
                                  m({}, F, { className: C }),
                                  i().createElement(l.E, { type: E, state: r }),
                              )
                            : i().createElement(
                                  i().Fragment,
                                  null,
                                  n &&
                                      y &&
                                      i().createElement(
                                          c.w,
                                          { size: b, className: C, key: n.name },
                                          i().createElement(
                                              u.r,
                                              { blinkStyle: h, isEnabled: k },
                                              i().createElement(
                                                  _.U,
                                                  m({ size: b, type: E, efficiencyState: p, skillState: r }, n),
                                              ),
                                          ),
                                      ),
                                  i().createElement(
                                      o.L,
                                      {
                                          size: b,
                                          skillsSignature: v,
                                          className: C,
                                          animationType: g(w === s.Qm.ScaleUp, D),
                                      },
                                      i().createElement(
                                          d.O,
                                          F,
                                          i().createElement(
                                              u.r,
                                              { blinkStyle: h, isEnabled: k },
                                              i().createElement(
                                                  _.U,
                                                  m({ size: b, type: E, efficiencyState: p, skillState: r }, t),
                                              ),
                                          ),
                                      ),
                                  ),
                              );
                    };
            },
            1606: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => b });
                var a = n(6483),
                    r = n.n(a),
                    i = n(4150),
                    s = n(771),
                    l = n(3649),
                    o = n(7363),
                    u = n.n(o),
                    c = n(2768),
                    d = n(8018),
                    _ = n(5855),
                    m = n(3591),
                    g = n(699);
                const E = { [_.Ow.c24x24]: c.F.c22x22, [_.Ow.c44x44]: c.F.c52x52 },
                    b = ({
                        size: e,
                        isIrrelevant: t,
                        efficiencyState: n,
                        type: a,
                        iconName: o,
                        name: b,
                        skillState: p,
                        battleBooster: f,
                        className: v,
                    }) => {
                        const h = f !== i.S.None,
                            A = (0, m.Ot)(b, p, h, t, n),
                            w = (!h && n === d.H$.Untrained) || t,
                            C = o === s.jw;
                        return u().createElement(
                            'div',
                            {
                                className: r()(
                                    g.Z.base,
                                    g.Z[`base__type${(0, l.e)(a)}`],
                                    g.Z[`base__state${(0, l.e)(p)}`],
                                    g.Z[`base__border${(0, l.e)(A)}`],
                                    g.Z[`base__${e}`],
                                    w && g.Z.base__disabled,
                                    v,
                                ),
                            },
                            u().createElement('div', {
                                className: g.Z.background,
                                style:
                                    a === _.W.Bonus
                                        ? {
                                              backgroundImage: `url('R.images.gui.maps.icons.crew.skillsFrame.${e}.${A}')`,
                                          }
                                        : void 0,
                            }),
                            C && p === _.Lm.Learned && u().createElement('div', { className: g.Z.newSkillHighLight }),
                            u().createElement(c.y, { iconName: o, size: E[e], className: g.Z.icon }),
                            w && u().createElement('div', { className: g.Z.disabledOverlay }),
                        );
                    };
            },
            5855: (e, t, n) => {
                'use strict';
                let a, r, i, s, l, o, u;
                (n.d(t, { Lm: () => u, Ow: () => l, Qm: () => r, W: () => o, hj: () => i, t6: () => a, u0: () => s }),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.Default = 'default'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp'));
                    })(r || (r = {})),
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
                    })(i || (i = {})),
                    (function (e) {
                        ((e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e.Major = 'major'), (e.Bonus = 'bonus'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.Learned = 'learned'), (e.Learning = 'learning'));
                    })(u || (u = {})));
            },
            3591: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Ld: () => E,
                    Nn: () => u,
                    Ot: () => _,
                    dv: () => d,
                    h7: () => g,
                    iR: () => m,
                    iv: () => v,
                    mg: () => c,
                    oo: () => f,
                });
                var a = n(2603),
                    r = n(771),
                    i = n(9480),
                    s = n(5563),
                    l = n(8018),
                    o = n(5855);
                const u = (e) => i.UI(e, (e) => e.name).join(),
                    c = (e) => (e.level < r.I ? o.Lm.Learning : o.Lm.Learned),
                    d = (e) => i.dF(e, (e) => e.level === r.I),
                    _ = (e, t, n, a, i = l.H$.Normal) =>
                        e === r.jw
                            ? o.u0.LightYellow
                            : i === l.H$.Untrained || a
                              ? t === o.Lm.Learning
                                  ? o.u0.Yellow
                                  : o.u0.Grey
                              : i === l.H$.Low
                                ? n
                                    ? o.u0.Grey
                                    : o.u0.Red
                                : t === o.Lm.Learning
                                  ? o.u0.Yellow
                                  : o.u0.Grey,
                    m = ({
                        name: e,
                        roleName: t,
                        level: n,
                        customName: i,
                        skillType: s,
                        skillIndex: l,
                        tooltipData: u,
                    }) => {
                        const c = { targetId: u.targetId, isEnabled: u.isEnabled };
                        return e === r.jw
                            ? s === o.W.Major
                                ? Object.assign(
                                      {
                                          contentId: R.views.lobby.crew.tooltips.EmptySkillTooltip('resId'),
                                          args: Object.assign({ tankmanID: u.tankmanID, skillIndex: l }, u.args),
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
                                              tooltipId: a.HZ,
                                              tankmanID: u.tankmanID,
                                              skillName: e,
                                              roleName: t,
                                              isBonus: s === o.W.Bonus,
                                              level: n,
                                              customName: i,
                                              skillIndex: l,
                                          },
                                          u.args,
                                      ),
                                  },
                                  c,
                              );
                    },
                    g = (e, t) => (e === o.Ow.c44x44 ? s.r.Large : t ? s.r.Big : s.r.Normal),
                    E = (e, t, n, a) => {
                        if (t !== r.vA) return o.hj.None;
                        switch (e) {
                            case o.t6.Default:
                                if (n && a) return o.hj.NoMargins;
                                break;
                            case o.t6.Overlap:
                                if (n) return a ? o.hj.Overlap : o.hj.ReducedMargins;
                                if (a) return o.hj.OnlyLearningOverlap;
                                break;
                            case o.t6.ExtraOverlap:
                                return n && a
                                    ? o.hj.ExtraOverlapWithLevelAndEfficiency
                                    : n
                                      ? o.hj.ExtraOverlapWithEfficiency
                                      : a
                                        ? o.hj.ExtraOverlapWithLevel
                                        : o.hj.ExtraOverlap;
                        }
                        return o.hj.None;
                    },
                    b = (e, t) => {
                        const n = i.U2(e, t);
                        return null == n ? void 0 : n.name;
                    },
                    p = (e, t) => {
                        const n = i.U2(e, t);
                        return null == n ? void 0 : n.level;
                    },
                    f = (e, t, n, a, s) => {
                        if (!a || !t) return i.UI(n, (e, t) => s(e, o.Qm.None, t));
                        const l = new Map(i.UI(t, ({ name: e, level: t }) => [e, t])),
                            u = new Map(i.UI(e, ({ name: e, level: t }) => [e, t]));
                        let c = !1;
                        return i.UI(n, (i, d) => {
                            const _ = i.name,
                                m = i.level,
                                g = _ === r.jw,
                                E = b(e, d),
                                f = g ? p(e, d) : u.get(_),
                                v = g ? p(t, d) : l.get(_),
                                h = b(n, d - 1),
                                A = b(a, d),
                                w = b(a, d + 1);
                            let C = o.Qm.None;
                            return (
                                c || _ !== w || h === A || g || E !== r.jw
                                    ? g && d === n.length - 1 && c
                                        ? (C = o.Qm.FadeIn)
                                        : (!g && !u.has(_)) || (void 0 === E && g) || (f !== m && m === r.I)
                                          ? (C = o.Qm.Blink)
                                          : v !== f && (C = o.Qm.ScaleUp)
                                    : ((c = !0), (C = u.has(_) ? o.Qm.SlideOut : o.Qm.SlideOutAndBlink)),
                                s(i, C, d)
                            );
                        });
                    },
                    v = (e, t = 2) => {
                        const n = Math.pow(10, t);
                        return e % 1 > 0 ? Math.round(e * n) / n : e;
                    };
            },
            7077: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => c, U: () => u });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3649),
                    s = n(7363),
                    l = n.n(s),
                    o = n(3938);
                let u;
                !(function (e) {
                    ((e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256'));
                })(u || (u = {}));
                const c = (0, s.memo)(function ({ name: e, size: t = u.c100x60, classMix: n, isSkin: a = !1 }) {
                    let s = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                    a && (s = s.$dyn('crewSkins'));
                    const c = s.$dyn((0, i.BN)(e));
                    return (
                        c ||
                            console.error(
                                `Can't find ${(0, i.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${a ? '.crewSkins' : ''}`,
                            ),
                        l().createElement('div', {
                            style: { backgroundImage: `url(${c})` },
                            className: r()(o.Z.base, o.Z[`base__${t}`], n),
                        })
                    );
                });
            },
            9631: (e, t, n) => {
                'use strict';
                n.d(t, { C: () => m });
                var a = n(6483),
                    r = n.n(a),
                    i = n(3457),
                    s = n(2106),
                    l = n(9987),
                    o = n(7363),
                    u = n.n(o),
                    c = n(4723);
                const d = ['isActive', 'counter', 'className', 'children', 'type', 'size', 'hasIndicator'];
                function _() {
                    return (
                        (_ =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        _.apply(this, arguments)
                    );
                }
                const m = u().memo(function (e) {
                    let t = e.isActive,
                        n = e.counter,
                        a = e.className,
                        o = e.children,
                        m = e.type,
                        g = void 0 === m ? s.L.secondary : m,
                        E = e.size,
                        b = void 0 === E ? s.q.small : E,
                        p = e.hasIndicator,
                        f = void 0 === p || p,
                        v = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, d);
                    return u().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        u().createElement(i.u5, _({ type: g, size: b, mixClass: c.Z.button }, v), o),
                        u().createElement('div', { className: c.Z.overlay }),
                        f && u().createElement('div', { className: c.Z.indicator }),
                        Boolean(n) &&
                            u().createElement(
                                'div',
                                { className: c.Z.counter },
                                u().createElement(l.A, { value: n, size: 'small' }),
                            ),
                    );
                });
            },
            7160: (e, t, n) => {
                'use strict';
                n.d(t, { BH: () => i, Fs: () => s, ei: () => a, qb: () => r });
                const a = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    r = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    i = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    s = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { Ds: () => u, Gc: () => s, H$: () => l, Y4: () => o, gO: () => i, wP: () => r });
                var a = n(771);
                n(3649);
                (R.strings.common.percentValue(), R.strings.common.plusPercentValue());
                let r;
                !(function (e) {
                    ((e.Objective = 'objective'), (e.Possessive = 'possessive'));
                })(r || (r = {}));
                (R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body());
                let i;
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
                })(i || (i = {}));
                const s = (e, t = !1, n = null) => {
                    const a = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (n ? a.$dyn(`${n}Case`) : a).$dyn(e);
                };
                let l;
                !(function (e) {
                    ((e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained'));
                })(l || (l = {}));
                const o = (e) => (e === a.sU ? l.Untrained : e < a.yb ? l.Low : l.Normal),
                    u = function () {
                        let e, t;
                        const n = function (n, a) {
                            (e && clearTimeout(e),
                                (t = n),
                                (e = setTimeout(function () {
                                    (t.call(this), clearTimeout(e));
                                }, a)));
                        };
                        return (
                            (n.cancel = function () {
                                e && clearTimeout(e);
                            }),
                            n
                        );
                    };
            },
            603: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => Wt });
                var a = n(4029),
                    r = n(7363),
                    i = n.n(r);
                let s;
                !(function (e) {
                    ((e[(e.Default = 0)] = 'Default'), (e[(e.Compact = 1)] = 'Compact'));
                })(s || (s = {}));
                var l = n(5415),
                    o = n(3403),
                    u = n(3215),
                    c = n(4598),
                    d = n(9480),
                    _ = n(3946);
                const m = [
                        R.views.lobby.crew.TankmanContainerView('resId'),
                        R.views.lobby.crew.personal_case.PersonalFileView('resId'),
                        R.views.lobby.crew.personal_case.PersonalDataView('resId'),
                        R.views.lobby.crew.personal_case.ServiceRecordView('resId'),
                    ],
                    g = (0, u.q3)()(
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
                                n = (0, _.Om)(
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
                                a = (0, _.Om)(() => Boolean(d.sE(n(), (e) => -1 === e.tankman.tankmanID))),
                                r = (0, _.Om)(() => 1 === t.slots.get().length),
                                i = (0, _.Om)((e) => t.selectedSlotIdx.get() === e),
                                s = (0, _.Om)(() => -1 !== t.selectedSlotIdx.get()),
                                l = (0, _.Om)((e) => {
                                    var t;
                                    return null == (t = d.U2(n(), e)) ? void 0 : t.tankman;
                                }),
                                o = (0, _.Om)(() => {
                                    return (
                                        (e = t.currentLayoutID.get()),
                                        (n = t.previousLayoutID.get()),
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
                                            isPreviousLayoutHangar: n === R.views.lobby.crew.HangarCrewWidget('resId'),
                                            isPreviousLayoutTankmanContainer: m.includes(n),
                                            isPreviousLayoutQuickTraining:
                                                n === R.views.lobby.crew.QuickTrainingView('resId'),
                                            isPreviousLayoutMemberChange:
                                                n === R.views.lobby.crew.MemberChangeView('resId'),
                                            isPreviousLayoutBarrack: n === R.views.lobby.crew.BarracksView('resId'),
                                            isPreviousLayoutMentorAssigment:
                                                n === R.views.lobby.crew.MentorAssigmentView('resId'),
                                        }
                                    );
                                    var e, n;
                                }),
                                u = (0, _.Om)(() => {
                                    const e = o();
                                    return !(
                                        r() ||
                                        e.isCurrentLayoutHangar ||
                                        e.isCurrentLayoutQuickTraining ||
                                        e.isCurrentLayoutSkillsTraining ||
                                        e.isCurrentLayoutMentorAssigment
                                    );
                                }),
                                g = (0, _.Om)(() => !r() && t.buttonsBar.get().isVisible);
                            return Object.assign({}, t, {
                                computes: {
                                    getSlots: n,
                                    isSlotSelected: i,
                                    isAnySlotSelected: s,
                                    getSlotTankman: l,
                                    isAnyEmptySlots: a,
                                    isTankmanMode: r,
                                    isChangeCrewButtonVisible: u,
                                    isButtonBarVisible: g,
                                    getLayoutInfo: o,
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
                    E = g[0],
                    b = g[1];
                var p = n(6483),
                    f = n.n(p),
                    v = n(6373),
                    h = n(2056);
                let A;
                !(function (e) {
                    ((e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden'));
                })(A || (A = {}));
                const w = 'ButtonsBar_base_9c',
                    C = 'ButtonsBar_button_d1',
                    k = 'ButtonsBar_button__crewOperaions_70',
                    y = 'ButtonsBar_button__crewBooks_b4',
                    D = 'ButtonsBar_button__toggle_64';
                var F = n(3457),
                    S = n(9987),
                    B = n(3649);
                const L = 'CrewBookButton_base_da',
                    N = 'CrewBookButton_button_ee',
                    x = 'CrewBookButton_icon_11',
                    I = 'CrewBookButton_discount_6b',
                    T = 'CrewBookButton_counter_5d',
                    O = (0, o.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = b(),
                            a = n.model,
                            r = n.controls,
                            s = a.crewBooks.get(),
                            l = r.onCrewBooksClick,
                            o = s.isDisabled || t;
                        return i().createElement(
                            v.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, B.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: s.totalAmount,
                                }),
                            },
                            i().createElement(
                                'div',
                                { id: 'crew_book_button', className: f()(L, e) },
                                i().createElement(
                                    F.u5,
                                    { type: F.L$.primary, mixClass: N, disabled: o, onClick: l },
                                    i().createElement('div', { className: x }),
                                ),
                                !o &&
                                    '0' !== s.newAmount &&
                                    i().createElement(
                                        'div',
                                        { className: T },
                                        i().createElement(S.A, { value: s.newAmount }),
                                    ),
                                !o && s.hasDiscount && i().createElement('div', { className: I }),
                            ),
                        );
                    });
                var M = n(3616);
                const P = ['children'];
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        H.apply(this, arguments)
                    );
                }
                const W = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                            return r;
                        })(e, P);
                    return i().createElement(
                        M.Z,
                        H(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            n,
                        ),
                        t,
                    );
                };
                var j = n(1037);
                const z = 'CrewOperationsButton_base_e3',
                    $ = 'CrewOperationsButton_button_8e',
                    G = 'CrewOperationsButton_icon_0c',
                    U = 'CrewOperationsButton_autoReturnIcon_f0',
                    V = (0, o.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = b().model.crewOperations.get();
                        return i().createElement(
                            'div',
                            { id: 'crew_operations_button', className: f()(z, e) },
                            i().createElement(
                                W,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isEnabled: !t,
                                    direction: j.IC.Right,
                                },
                                i().createElement(
                                    v.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(
                                            F.u5,
                                            { type: F.L$.primary, mixClass: $, disabled: t },
                                            i().createElement('div', { className: G }),
                                        ),
                                        n.isAutoReturnOn && i().createElement('div', { className: U }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Z = n(9631);
                const q = 'CrewToggleButton_base_03',
                    Y = 'CrewToggleButton_button_89',
                    K = 'CrewToggleButton_iconContainer_f9',
                    Q = 'CrewToggleButton_icon_a7';
                let X;
                !(function (e) {
                    ((e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus'));
                })(X || (X = {}));
                const J = (0, r.memo)(({ type: e, state: t, isDisabled: n, onClick: a, classMix: s }) => {
                        const l = (0, r.useMemo)(() => {
                            const n = t === A.Disabled ? A.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${n})`,
                            };
                        }, [e, t]);
                        return i().createElement(
                            'div',
                            { className: f()(q, s) },
                            i().createElement(
                                Z.C,
                                {
                                    type: F.L$.primary,
                                    isActive: t === A.On,
                                    disabled: n || t === A.Disabled,
                                    className: Y,
                                    onClick: a,
                                },
                                i().createElement(
                                    'div',
                                    { className: K },
                                    i().createElement('div', { className: Q, style: l }),
                                ),
                            ),
                        );
                    }),
                    ee = {
                        [A.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [A.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [A.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [A.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    te = (0, o.Pi)(({ isWidgetDisabled: e }) => {
                        const t = b(),
                            n = t.model,
                            a = t.controls,
                            r = n.acceleratedTraining.get(),
                            s = n.wotPlus.get(),
                            l = a.onAcceleratedTrainingClick,
                            o = a.onWotPlusClick,
                            u = ee[r.state];
                        return i().createElement(
                            'div',
                            { className: w },
                            i().createElement(V, { classMix: f()(C, k), isWidgetDisabled: e }),
                            i().createElement(O, { classMix: f()(C, y), isWidgetDisabled: e }),
                            r.state !== A.Hidden &&
                                i().createElement(
                                    v.i,
                                    { header: u.header(), body: u.body() },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(J, {
                                            type: X.AcceleratedTraining,
                                            state: r.state,
                                            isDisabled: e || r.isDisabled,
                                            onClick: l,
                                            classMix: f()(C, D),
                                        }),
                                    ),
                                ),
                            s.state !== A.Hidden &&
                                i().createElement(
                                    h.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    i().createElement(
                                        'div',
                                        null,
                                        i().createElement(J, {
                                            type: X.WotPlus,
                                            state: s.state,
                                            isDisabled: e || s.isDisabled,
                                            onClick: o,
                                            classMix: f()(C, D),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    ne = 'CrewWidgetApp_base_cc',
                    ae = 'CrewWidgetApp_buttonsBar_e5',
                    re = 'CrewWidgetApp_slotsList_ee';
                var ie = n(7727),
                    se = n(7030),
                    le = n(7160),
                    oe = n(8018),
                    ue = n(7077);
                const ce = 'WidgetTankmanIcon_icon_0f',
                    de = 'WidgetTankmanIcon_icon__small_24',
                    _e = 'WidgetTankmanIcon_icon__cropped_bd',
                    me = ({ name: e, isSkin: t = !1, isCropped: n = !1, slotSize: a, className: r }) => {
                        const s = (0, l.GS)().mediaSize,
                            o = 'small' === a || s < l.cJ.Large;
                        return i().createElement(ue.G, {
                            name: e,
                            size: o && n ? ue.U.c100x60 : ue.U.c158x118,
                            isSkin: t,
                            classMix: f()(ce, o && n && de, !o && n && _e, r),
                        });
                    },
                    ge = {
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
                    ((e.HoverGlow = 'hoverGlow'),
                        (e.SelectedGlow = 'selectedGlow'),
                        (e.Disabled = 'disabledLayer'),
                        (e.SelectedHighlight = 'selectedTankmanHighlight'),
                        (e.SelectedHighlight2 = 'selectedTankmanHighlight2'),
                        (e.TankmanSlotHover = 'tankmanSlotHover'),
                        (e.UntrainedTankmanHighlight = 'untrainedTankmanHighlight'));
                })(Ee || (Ee = {}));
                const be = ({ type: e, slotSize: t, isHigh: n, className: a, isVisible: r = !0 }) => {
                        const s = n ? e + 'High' : e;
                        return i().createElement(
                            'div',
                            { className: f()(ge.base, ge[`base__${t}`], r && ge.base__visible, a) },
                            i().createElement('div', {
                                className: f()(ge.content, ge[`content__${s}`]),
                                style: { backgroundImage: `url(R.images.gui.maps.icons.crewWidget.slot.${t}.${s})` },
                            }),
                        );
                    },
                    pe = {
                        base: 'BaseSlot_base_97',
                        base__hovered: 'BaseSlot_base__hovered_61',
                        base__inactive: 'BaseSlot_base__inactive_7e',
                        content: 'BaseSlot_content_93',
                        content__high: 'BaseSlot_content__high_81',
                        base__big: 'BaseSlot_base__big_8d',
                        delimiter: 'BaseSlot_delimiter_f8',
                        layer: 'BaseSlot_layer_cb',
                    },
                    fe = ({
                        isHigh: e,
                        slotSize: t,
                        onClick: n,
                        children: a,
                        isSelected: s = !1,
                        isDisabled: l,
                        isEnabledForMouse: o,
                        isEmpty: u = !1,
                        layoutInfo: c,
                    }) => {
                        const d = (0, r.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            g = _ && (!s || (!u && c.isCurrentLayoutMemberChange)),
                            E = g && !u && !c.isCurrentLayoutHangar;
                        return i().createElement(
                            'div',
                            {
                                className: f()(
                                    pe.base,
                                    pe[`base__${t}`],
                                    (_ || s) && !c.isCurrentLayoutHangar && pe.base__hovered,
                                    !o && pe.base__inactive,
                                ),
                                onClick: n,
                                onMouseEnter: () => {
                                    o && (ie.$.playHighlight(), m(!0));
                                },
                                onMouseLeave: () => {
                                    m(!1);
                                },
                            },
                            i().createElement(
                                'div',
                                { className: f()(pe.content, e && pe.content__high) },
                                !c.isCurrentLayoutMemberChange &&
                                    i().createElement(be, {
                                        type: Ee.SelectedGlow,
                                        slotSize: t,
                                        isHigh: e,
                                        isVisible: s,
                                        className: pe.layer,
                                    }),
                                i().createElement(be, {
                                    type: Ee.HoverGlow,
                                    slotSize: t,
                                    isHigh: e,
                                    isVisible: E,
                                    className: pe.layer,
                                }),
                                i().createElement(be, {
                                    type: Ee.TankmanSlotHover,
                                    slotSize: t,
                                    isHigh: e,
                                    isVisible: g,
                                    className: pe.layer,
                                }),
                                l &&
                                    i().createElement(be, {
                                        type: Ee.Disabled,
                                        slotSize: t,
                                        isHigh: e,
                                        isVisible: !0,
                                        className: pe.layer,
                                    }),
                                a,
                                i().createElement('div', { className: pe.delimiter }),
                            ),
                        );
                    },
                    ve = ({
                        startState: e,
                        endState: t,
                        layoutInfo: n,
                        isPaused: a = !1,
                        children: s,
                        className: l,
                        isTankmanMode: o,
                    }) => {
                        const u = (0, se.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: le.qb }, pause: a }),
                                [a],
                            )[0],
                            c = (0, r.useMemo)(
                                () =>
                                    n.isCurrentLayoutHangar ||
                                    n.isCurrentLayoutQuickTraining ||
                                    n.isCurrentLayoutMentorAssigment ||
                                    n.isCurrentLayoutSkillsTraining ||
                                    o
                                        ? e
                                        : (!n.isPreviousLayoutHangar && !n.isPreviousLayoutBarrack) || a
                                          ? t
                                          : u,
                                [n, a, u, e, t, o],
                            );
                        return i().createElement(se.animated.div, { className: l, style: c }, s);
                    },
                    he = 'DogSlot_base_8f',
                    Ae = 'DogSlot_icon_ba',
                    we = 'DogSlot_container_63',
                    Ce = 'DogSlot_roleAndName_c9',
                    ke = 'DogSlot_role_5c',
                    ye = 'DogSlot_name_9c',
                    De = 'DogSlot_btnDetails_b7',
                    Fe = { transform: 'translateX(0rem)' },
                    Se = (0, o.Pi)(({ isDisabled: e, layoutInfo: t, slotSize: n }) => {
                        const a = b(),
                            s = a.model,
                            l = a.controls,
                            o = s.nation.get(),
                            u = l.onDogMoreInfoClick,
                            c = (0, r.useCallback)(() => {
                                !e && (0, ie.G)(oe.gO.RUDY);
                            }, [e]),
                            d = (0, r.useCallback)(
                                (t) => {
                                    (t.stopPropagation(), !e && u());
                                },
                                [u, e],
                            ),
                            _ = (0, se.useSpring)(
                                () => ({
                                    from: Fe,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: le.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(o);
                        return i().createElement(
                            v.i,
                            { header: m.header(), body: m.body() },
                            i().createElement(
                                'div',
                                null,
                                i().createElement(
                                    fe,
                                    {
                                        onClick: c,
                                        isDisabled: e,
                                        isEnabledForMouse: !1,
                                        layoutInfo: t,
                                        isHigh: !1,
                                        slotSize: n,
                                    },
                                    i().createElement(
                                        ve,
                                        {
                                            startState: Fe,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            className: he,
                                            isTankmanMode: !1,
                                        },
                                        i().createElement(
                                            se.animated.div,
                                            { style: _ },
                                            i().createElement(me, {
                                                name: 'ussr_dog_1',
                                                isCropped: !0,
                                                className: Ae,
                                                slotSize: n,
                                            }),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: we },
                                            i().createElement(
                                                'div',
                                                { className: Ce },
                                                i().createElement('div', { className: ke }),
                                                i().createElement(
                                                    'div',
                                                    { className: ye },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(o).name(),
                                                ),
                                            ),
                                            i().createElement(
                                                'div',
                                                { className: De },
                                                i().createElement(
                                                    F.u5,
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
                var Be = n(1641),
                    Le = n(9916);
                const Ne = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: l,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                ((0, Le.c9)(Le.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    ie.$.playYes());
                            }, [i, t, n, a]),
                            u = (0, r.useCallback)(() => {
                                (0, Le.c9)(Le.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    (l && l(e), ((e) => e.button === Be.t.RIGHT)(e) && o());
                                },
                                [l, o],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === s && u();
                            }, [s, u]),
                            s ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    xe = ['children'];
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const Te = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) ((n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                return r;
                            })(e, xe);
                        return i().createElement(
                            Ne,
                            Ie({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Oe = 'ChangeCrewButton_base_0f',
                    Re = 'ChangeCrewButton_base__inactive_77',
                    Me = 'ChangeCrewButton_normalState_07',
                    Pe = 'ChangeCrewButton_normalState__hide_db',
                    He = 'ChangeCrewButton_hoverState_68',
                    We = 'ChangeCrewButton_hoverState__show_89',
                    je = ({ isSelected: e, isLocked: t, mainRole: n, isFemale: a }) => {
                        const s = (0, r.useState)(!1),
                            l = s[0],
                            o = s[1],
                            u = (0, r.useMemo)(
                                () =>
                                    t
                                        ? [
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.header(),
                                              R.strings.crew_widget.tooltip.changeCrewButton.unavailable.body(),
                                          ]
                                        : [
                                              '',
                                              (0, B.uF)(R.strings.crew_widget.changeTankman(), {
                                                  role: (0, oe.Gc)(n, a, oe.wP.Objective),
                                              }),
                                          ],
                                [t, a, n],
                            ),
                            c = u[0],
                            d = u[1];
                        return i().createElement(
                            v.i,
                            {
                                header: c,
                                body: d,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            i().createElement(
                                'div',
                                {
                                    className: f()(Oe, (t || e) && Re),
                                    onMouseEnter: () => {
                                        t || e || (ie.$.playHighlight(), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                },
                                i().createElement('div', { className: f()(Me, l && Pe) }),
                                i().createElement('div', { className: f()(He, (e || l) && We) }),
                            ),
                        );
                    },
                    ze = 'CrewSlot_base_ac',
                    $e = 'CrewSlot_changeCrew_02',
                    Ge = 'CrewSlot_content_5b',
                    Ue = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ve = 'CrewSlot_layer_49';
                var Ze = n(7078),
                    qe = n(2603),
                    Ye = n(771);
                const Ke = 'SpecializationAndName_base_ef',
                    Qe = 'SpecializationAndName_roleWrapper_87',
                    Xe = 'SpecializationAndName_role_55',
                    Je = 'SpecializationAndName_role__withGap_35',
                    et = 'SpecializationAndName_name_aa',
                    tt = 'SpecializationAndName_name__highlighted_1b',
                    nt = ({ roles: e, tankmanID: t = Ye.y$, slotIdx: n, name: a, hasPostProgression: r = !1 }) =>
                        i().createElement(
                            'div',
                            { className: Ke },
                            i().createElement(
                                Ze.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: qe.rs, slotIdx: n, tankmanID: t },
                                },
                                i().createElement(
                                    'div',
                                    { className: Qe },
                                    d.UI(e, (e, t) =>
                                        i().createElement('div', {
                                            key: `role__${e}`,
                                            className: f()(Xe, t > 0 && Je),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            i().createElement('div', { className: f()(et, r && tt) }, a),
                        ),
                    at = {
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
                    rt = { transform: 'translateX(0rem)', opacity: 1 },
                    it = { transform: 'translateX(-70rem)', opacity: 0 },
                    st = (0, r.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: n,
                            vehicleType: a,
                            isDisabled: s,
                            isSelected: l,
                            slotIdx: o,
                            blinkStyle: u,
                            qtTankmanIconStyle: c,
                            isHigh: _,
                            slotSize: m,
                        }) => {
                            const g = (0, se.useSpring)(
                                    () => ({
                                        from: rt,
                                        to: it,
                                        config: { duration: 200, easing: le.ei },
                                        immediate: !0,
                                        pause: l,
                                    }),
                                    [l],
                                ),
                                E = g[0],
                                b = g[1],
                                p = (0, r.useCallback)(() => {
                                    t.isCurrentLayoutQuickTraining || b.start({ reset: !0, reverse: !0 });
                                }, [b, t]),
                                v = d.U2(e, 0) || '',
                                h = R.strings.crew_widget.vehicleWithName.$dyn((0, B.BN)(a)),
                                A = (0, B.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(v),
                                });
                            return i().createElement(
                                'div',
                                { className: f()(at.base, at[`base__${m}`]), onMouseEnter: p, onMouseLeave: p },
                                i().createElement(
                                    'div',
                                    { className: f()(at.content, _ && at.content__high) },
                                    i().createElement(
                                        'div',
                                        { className: at.tankmanIcon },
                                        i().createElement(
                                            se.animated.div,
                                            { className: at.iconContainer, style: c },
                                            i().createElement(me, {
                                                name: 'empty',
                                                className: at.icon,
                                                isCropped: !_,
                                                slotSize: m,
                                            }),
                                            i().createElement(
                                                se.animated.div,
                                                { className: at.iconContainer, style: s ? void 0 : u },
                                                i().createElement(me, {
                                                    name: 'emptyRed',
                                                    className: at.icon,
                                                    isCropped: !_,
                                                    slotSize: m,
                                                }),
                                            ),
                                        ),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: f()(at.specialization, s && at.specialization__disabled) },
                                        i().createElement(nt, { slotIdx: o, roles: e, name: A }),
                                    ),
                                    i().createElement(
                                        se.animated.div,
                                        { className: at.vehicle, style: l ? void 0 : E },
                                        (0, B.uF)(h, { name: n }),
                                    ),
                                ),
                            );
                        },
                    );
                var lt = n(8617),
                    ot = n(5855);
                const ut = {
                        base: 'TankmanInfo_base_69',
                        base__disabled: 'TankmanInfo_base__disabled_36',
                        tankmanTooltipHoverArea: 'TankmanInfo_tankmanTooltipHoverArea_9b',
                        specialization: 'TankmanInfo_specialization_77',
                        specialization__withBonusSkills: 'TankmanInfo_specialization__withBonusSkills_b1',
                        base__big: 'TankmanInfo_base__big_e5',
                        skillsContainer: 'TankmanInfo_skillsContainer_17',
                        skillsContainer__withBonusSkills: 'TankmanInfo_skillsContainer__withBonusSkills_83',
                    },
                    ct = (e, t) => (e ? ot.t6.None : 'small' === t ? ot.t6.ExtraOverlap : ot.t6.Overlap),
                    dt = ({ slotIdx: e, tankman: t, isDisabled: n, layoutInfo: a, blinkStyle: r, slotSize: s }) => {
                        const l = t.skills.bonusSkills.length > 0;
                        return i().createElement(
                            'div',
                            { className: f()(ut.base, n && ut.base__disabled, ut[`base__${s}`]) },
                            i().createElement(
                                Ze.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: qe.v$, tankmanID: t.tankmanID },
                                },
                                i().createElement('div', { className: ut.tankmanTooltipHoverArea }),
                            ),
                            i().createElement(
                                'div',
                                { className: f()(ut.specialization, l && ut.specialization__withBonusSkills) },
                                i().createElement(nt, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                    hasPostProgression: t.hasPostProgression,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: f()(ut.skillsContainer, l && ut.skillsContainer__withBonusSkills) },
                                i().createElement(lt.n, {
                                    tankmanID: t.tankmanID,
                                    size: ot.Ow.c24x24,
                                    data: t.skills,
                                    dataToCompare:
                                        a.isCurrentLayoutQuickTraining ||
                                        a.isCurrentLayoutSkillsTraining ||
                                        a.isCurrentLayoutMentorAssigment
                                            ? t.possibleSkills
                                            : void 0,
                                    tooltipsTargetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    isSkillTooltipEnabled: !0,
                                    blinkStyle: r,
                                    isNewSkillAnimated: a.isCurrentLayoutHangar,
                                    isAcceleratedTrainingVisible:
                                        !a.isCurrentLayoutQuickTraining && -1 !== t.tankmanID && t.isLessMastered,
                                    collapseType: ct(a.isCurrentLayoutHangar, s),
                                }),
                            ),
                        );
                    },
                    _t = 'QuickTrainingTankmanSlotContent_base_8d',
                    mt = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    gt = 'QuickTrainingTankmanSlotContent_iconContainer_f1',
                    Et = 'QuickTrainingTankmanSlotContent_icon_7c',
                    bt = 'QuickTrainingTankmanSlotContent_layer_10',
                    pt = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    ft = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    vt = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    ht = { opacity: 0 },
                    At = [{ opacity: 1 }, { opacity: 0 }],
                    wt = (0, r.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: n,
                            qtTankmanIconStyle: a,
                            layoutInfo: s,
                            isDisabled: l,
                            slotSize: o,
                        }) => {
                            const u = (0, r.useRef)(t.lastSkillLevelFull),
                                c = (0, r.useRef)(t.skills.majorSkills.length),
                                d = (0, se.useSpring)(() => ({ from: pt })),
                                _ = d[0],
                                m = d[1],
                                g = (0, se.useSpring)(() => ({ from: ht })),
                                E = g[0],
                                b = g[1],
                                p = (0, r.useRef)(!1);
                            return (
                                (0, r.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? p.current ||
                                          (m.start({
                                              from: pt,
                                              to: ft,
                                              reverse: false,
                                              config: { duration: 300, easing: le.BH },
                                          }),
                                          (p.current = !0))
                                        : p.current
                                          ? (t.skills.majorSkills.length > c.current || t.lastSkillLevelFull > u.current
                                                ? (m.start({
                                                      from: ft,
                                                      to: vt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: le.BH },
                                                  }),
                                                  (u.current = t.lastSkillLevelFull),
                                                  (c.current = t.skills.majorSkills.length),
                                                  b.start({
                                                      from: ht,
                                                      to: At,
                                                      delay: 200,
                                                      config: { duration: 500, easing: le.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (p.current = !1))
                                          : ((u.current = t.lastSkillLevelFull),
                                            (c.current = t.skills.majorSkills.length));
                                }, [m, b, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.majorSkills.length]),
                                i().createElement(
                                    'div',
                                    { className: _t },
                                    i().createElement(
                                        se.animated.div,
                                        { style: E },
                                        i().createElement(be, {
                                            type: Ee.SelectedHighlight,
                                            slotSize: o,
                                            isHigh: t.skills.bonusSkills.length > 1,
                                            className: bt,
                                        }),
                                    ),
                                    i().createElement(
                                        se.animated.div,
                                        { className: gt, style: a },
                                        i().createElement(me, {
                                            name: t.icon,
                                            isSkin: t.isInSkin,
                                            isCropped: 0 === t.skills.bonusSkills.length,
                                            slotSize: o,
                                            className: Et,
                                        }),
                                    ),
                                    i().createElement(se.animated.div, { className: mt, style: _ }),
                                    i().createElement(dt, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: s,
                                        blinkStyle: n,
                                        isDisabled: l,
                                        slotSize: o,
                                    }),
                                )
                            );
                        },
                        (e, t) => {
                            const n = e.tankman,
                                a = t.tankman;
                            return (
                                n.hasPossibleProgress === a.hasPossibleProgress &&
                                ((e, t) => {
                                    if (e.length !== t.length) return !1;
                                    const n = e.length;
                                    for (let i = 0; i < n; i++) {
                                        var a, r;
                                        if (
                                            (null == (a = d.U2(e, i)) ? void 0 : a.name) !==
                                            (null == (r = d.U2(t, i)) ? void 0 : r.name)
                                        )
                                            return !1;
                                    }
                                    return !0;
                                })(n.skills.majorSkills, a.skills.majorSkills) &&
                                n.lastSkillLevelFull === a.lastSkillLevelFull &&
                                n.possibleSkillsAmount === a.possibleSkillsAmount &&
                                n.lastPossibleSkillLevel === a.lastPossibleSkillLevel &&
                                n.skillsEfficiency === a.skillsEfficiency &&
                                n.possibleSkillsEfficiency === a.possibleSkillsEfficiency
                            );
                        },
                    ),
                    Ct = 'TankmanSlotContent_base_00',
                    kt = 'TankmanSlotContent_icon_ef',
                    yt = (0, r.memo)(
                        ({ slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a, blinkStyle: r, slotSize: s }) =>
                            i().createElement(
                                'div',
                                { className: Ct },
                                i().createElement(me, {
                                    name: t.icon,
                                    isCropped: 0 === t.skills.bonusSkills.length,
                                    isSkin: t.isInSkin,
                                    slotSize: s,
                                    className: kt,
                                }),
                                i().createElement(dt, {
                                    slotIdx: e,
                                    tankman: t,
                                    layoutInfo: n,
                                    isDisabled: a,
                                    blinkStyle: r,
                                    slotSize: s,
                                }),
                            ),
                    ),
                    Dt = (0, r.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            vehicleName: r,
                            vehicleType: s,
                            isDisabled: l,
                            isSelected: o,
                            blinkSlotStyle: u,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                            slotSize: _,
                            isHigh: m,
                        }) =>
                            -1 === n.tankmanID
                                ? i().createElement(st, {
                                      roles: t,
                                      layoutInfo: a,
                                      vehicleName: r,
                                      vehicleType: s,
                                      isDisabled: l,
                                      isSelected: o,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                      isHigh: m,
                                      slotSize: _,
                                  })
                                : a.isCurrentLayoutQuickTraining || a.isCurrentLayoutMentorAssigment
                                  ? i().createElement(wt, {
                                        slotIdx: e,
                                        tankman: n,
                                        blinkStyle: u,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: a,
                                        isDisabled: l,
                                        slotSize: _,
                                    })
                                  : i().createElement(yt, {
                                        slotIdx: e,
                                        tankman: n,
                                        layoutInfo: a,
                                        isDisabled: l,
                                        blinkStyle: u,
                                        slotSize: _,
                                    }),
                    ),
                    Ft = { transform: 'translateX(0rem)' },
                    St = { transform: 'translateX(41rem)' },
                    Bt = { opacity: 0 },
                    Lt = { opacity: 1 },
                    Nt = (0, o.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            isSelected: s,
                            isDisabled: l,
                            blinkSlotStyle: o,
                            blinkTankmanStyle: u,
                            qtTankmanIconStyle: c,
                            slotSize: _,
                        }) => {
                            const m = b(),
                                g = m.model,
                                E = m.controls,
                                p = E.onSlotClick,
                                v = E.onChangeCrewClick,
                                h = g.computes.isChangeCrewButtonVisible(),
                                A = g.computes.isTankmanMode(),
                                w = g.isCrewLocked.get(),
                                C = g.vehicleName.get(),
                                k = g.vehicleType.get(),
                                y = -1 === n.tankmanID ? t.length > 1 : n.skills.bonusSkills.length > 0,
                                D = !l && n.isInteractive && (!s || a.isCurrentLayoutMemberChange),
                                F = (0, r.useCallback)(() => {
                                    D && !A && ((0, ie.G)(R.sounds.yes1()), p(e, n.tankmanID));
                                }, [e, n, p, A, D]),
                                S = (0, r.useCallback)(
                                    (t) => {
                                        (t.stopPropagation(),
                                            w ||
                                                (s && a.isCurrentLayoutMemberChange) ||
                                                ((0, ie.G)(R.sounds.yes1()), v(e, n.tankmanID)));
                                    },
                                    [e, n, v, w, s, a.isCurrentLayoutMemberChange],
                                ),
                                B = (0, r.useMemo)(() => ({ tankmanID: n.tankmanID, slotIdx: e }), [n, e]);
                            return i().createElement(
                                Te,
                                {
                                    args: B,
                                    isEnabled:
                                        !l && !a.isCurrentLayoutSkillsTraining && !a.isCurrentLayoutMentorAssigment,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                },
                                i().createElement(
                                    'div',
                                    null,
                                    i().createElement(
                                        fe,
                                        {
                                            isHigh: y,
                                            onClick: F,
                                            isSelected: s,
                                            isDisabled: l,
                                            isEmpty: -1 === n.tankmanID,
                                            layoutInfo: a,
                                            isEnabledForMouse: D,
                                            slotSize: _,
                                        },
                                        i().createElement(
                                            'div',
                                            { className: ze },
                                            n.hasWarning &&
                                                i().createElement(be, {
                                                    type: Ee.UntrainedTankmanHighlight,
                                                    slotSize: _,
                                                    isHigh: y,
                                                    className: Ve,
                                                }),
                                            s &&
                                                i().createElement(be, {
                                                    type: A ? Ee.SelectedHighlight2 : Ee.SelectedHighlight,
                                                    slotSize: _,
                                                    isHigh: y,
                                                    className: Ve,
                                                }),
                                            i().createElement(
                                                ve,
                                                {
                                                    startState: Ft,
                                                    endState: St,
                                                    layoutInfo: a,
                                                    isPaused: !h,
                                                    className: f()(Ge, h && Ue),
                                                    isTankmanMode: A,
                                                },
                                                i().createElement(Dt, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: n,
                                                    layoutInfo: a,
                                                    isDisabled: l,
                                                    vehicleName: C,
                                                    vehicleType: k,
                                                    blinkSlotStyle: o,
                                                    blinkTankmanStyle: u,
                                                    qtTankmanIconStyle: c,
                                                    isSelected: s,
                                                    slotSize: _,
                                                    isHigh: y,
                                                }),
                                            ),
                                            h &&
                                                i().createElement(
                                                    'div',
                                                    { onClick: S },
                                                    i().createElement(
                                                        ve,
                                                        {
                                                            startState: Bt,
                                                            endState: Lt,
                                                            layoutInfo: a,
                                                            className: $e,
                                                            isTankmanMode: A,
                                                        },
                                                        i().createElement(je, {
                                                            isSelected: a.isCurrentLayoutMemberChange && s,
                                                            isLocked: w,
                                                            mainRole: d.U2(t, 0) || '',
                                                            isFemale: -1 !== n.tankmanID && n.isFemale,
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
                    It = 'SlotsList_base__hangar_8b';
                function Tt() {
                    return (
                        (Tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Tt.apply(this, arguments)
                    );
                }
                const Ot = { transform: new se.SpringValue('translateX(0rem)') },
                    Rt = { transform: new se.SpringValue('translateX(15rem)') },
                    Mt = (0, o.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: n, slotSize: a }) => {
                        const s = b().model,
                            l = s.computes.isAnyEmptySlots(),
                            o = (0, se.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: le.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            u = o[0],
                            c = o[1];
                        (0, r.useEffect)(() => {
                            l ? c.resume() : c.pause();
                        }, [c, l]);
                        const d = (0, se.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0.3 }, { opacity: 1 }],
                                    config: { duration: 400, easing: le.Fs },
                                    loop: !0,
                                }),
                                [],
                            ),
                            _ = d[0],
                            m = d[1];
                        (0, r.useEffect)(() => {
                            e.isCurrentLayoutQuickTraining ||
                            e.isCurrentLayoutSkillsTraining ||
                            e.isCurrentLayoutMentorAssigment
                                ? m.resume()
                                : m.pause();
                        }, [m, e]);
                        const g = (0, se.useSpring)(() => ({
                                from: Ot,
                                to: Rt,
                                delay: 200,
                                config: { duration: 300, easing: le.ei },
                            }))[0],
                            E = (0, r.useMemo)(
                                () =>
                                    e.isCurrentLayoutQuickTraining || e.isCurrentLayoutMentorAssigment
                                        ? e.isPreviousLayoutQuickTraining || e.isPreviousLayoutMentorAssigment
                                            ? Rt
                                            : g
                                        : Ot,
                                [e, g],
                            );
                        return i().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: f()(xt, e.isCurrentLayoutHangar && It, n) },
                            s.computes
                                .getSlots()
                                .map((n, r) =>
                                    i().createElement(
                                        Nt,
                                        Tt({}, n, {
                                            layoutInfo: e,
                                            key: `slot_${r}_${n.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (s.computes.isSlotSelected(n.slotIdx) || s.computes.isTankmanMode()),
                                            isDisabled: t,
                                            blinkSlotStyle: _,
                                            blinkTankmanStyle: u,
                                            qtTankmanIconStyle: E,
                                            slotSize: a,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Pt = (0, o.Pi)(() => {
                        const e = b().model,
                            t = e.isDisabled.get(),
                            n = e.hasDog.get(),
                            a = e.computes.getLayoutInfo(),
                            r = (0, l.GS)().mediaSize,
                            o = ((e, t) =>
                                e === s.Compact
                                    ? t < l.cJ.ExtraLarge
                                        ? 'small'
                                        : 'big'
                                    : t < l.cJ.Large
                                      ? 'small'
                                      : 'big')(e.slotSizeMode.get(), r);
                        return i().createElement(
                            'div',
                            { className: ne },
                            e.computes.isButtonBarVisible() &&
                                i().createElement(
                                    'div',
                                    { className: ae },
                                    i().createElement(te, { isWidgetDisabled: t }),
                                ),
                            i().createElement(Mt, { layoutInfo: a, isWidgetDisabled: t, className: re, slotSize: o }),
                            n && i().createElement(Se, { layoutInfo: a, isDisabled: t, slotSize: o }),
                        );
                    }),
                    Ht = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    Wt = (0, r.memo)(() =>
                        i().createElement(
                            a.z,
                            null,
                            i().createElement(E, { options: Ht }, i().createElement(Pt, null)),
                        ),
                    );
            },
            4150: (e, t, n) => {
                'use strict';
                let a;
                (n.d(t, { S: () => a }),
                    (function (e) {
                        ((e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved'));
                    })(a || (a = {})));
            },
            2603: (e, t, n) => {
                'use strict';
                n.d(t, { Br: () => s, HZ: () => a, M4: () => l, _K: () => r, rs: () => o, v$: () => i });
                const a = 'crewPerkGf',
                    r = 'crewPerkAltGf',
                    i = 'tankman',
                    s = 'skillsEfficiency',
                    l = 'crewSkillUntrained',
                    o = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { GT: () => o, I: () => i, jw: () => s, sU: () => a, vA: () => l, y$: () => u, yb: () => r });
                const a = -1,
                    r = 1,
                    i = 100,
                    s = 'new_skill',
                    l = 9,
                    o = 6,
                    u = -1;
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
            8699: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'AcceleratedTrainingIcon_base_4f', icon: 'AcceleratedTrainingIcon_icon_45' };
            },
            130: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'EfficiencyIndicator_base_34',
                    base__big: 'EfficiencyIndicator_base__big_a1',
                    base__large: 'EfficiencyIndicator_base__large_dc',
                    base__untrained: 'EfficiencyIndicator_base__untrained_cd',
                    percent: 'EfficiencyIndicator_percent_6b',
                    percent__full: 'EfficiencyIndicator_percent__full_30',
                    icon: 'EfficiencyIndicator_icon_da',
                };
            },
            4458: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            8326: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'Skills_base_ec',
                    efficiency: 'Skills_efficiency_d0',
                    base__c_44x44: 'Skills_base__c_44x44_c0',
                    rows: 'Skills_rows_e8',
                    bonusRow: 'Skills_bonusRow_4a',
                };
            },
            1890: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'AnimatedLostSkill_base_55',
                    base__c_24x24: 'AnimatedLostSkill_base__c_24x24_d5',
                    base__c_44x44: 'AnimatedLostSkill_base__c_44x44_72',
                    icon: 'AnimatedLostSkill_icon_d4',
                };
            },
            6253: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'AnimatedNewSkill_base_0f' };
            },
            8110: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'LostLevelAnimation_base_f6',
                    level: 'LostLevelAnimation_level_f0',
                    level__skillLost: 'LostLevelAnimation_level__skillLost_a2',
                    level__skillBlur: 'LostLevelAnimation_level__skillBlur_24',
                    base__c_24x24: 'LostLevelAnimation_base__c_24x24_1c',
                    base__c_44x44: 'LostLevelAnimation_base__c_44x44_44',
                };
            },
            4722: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            872: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = { base: 'SkillLevel_base_d2', base__highlighted: 'SkillLevel_base__highlighted_e3' };
            },
            699: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
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
            3938: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => a });
                const a = {
                    base: 'TankmanIcon_base_f9',
                    base__big: 'TankmanIcon_base__big_98',
                    base__small: 'TankmanIcon_base__small_b2',
                    base__barracks: 'TankmanIcon_base__barracks_62',
                    base__special: 'TankmanIcon_base__special_3f',
                    base__c_204x256: 'TankmanIcon_base__c_204x256_97',
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, n, a] = deferred[o], i = !0, s = 0; s < t.length; s++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), a < r && (r = a));
                    if (i) {
                        deferred.splice(o--, 1);
                        var l = n();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, n, a];
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
        (__webpack_require__.j = 4275),
        (() => {
            var e = { 4275: 0, 8003: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [i, s, l] = n,
                        o = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in s) __webpack_require__.o(s, a) && (__webpack_require__.m[a] = s[a]);
                        if (l) var u = l(__webpack_require__);
                    }
                    for (t && t(n); o < i.length; o++)
                        ((r = i[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(1427));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
