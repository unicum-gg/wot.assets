(() => {
    var __webpack_modules__ = {
            3457: (e, t, n) => {
                'use strict';
                n.d(t, { L$: () => u.L, qE: () => u.q, u5: () => d });
                var a = n(6483),
                    r = n.n(a),
                    s = n(7727),
                    i = n(7363),
                    l = n.n(i),
                    o = n(6880),
                    u = n(2106);
                const c = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: c,
                    mixClass: d,
                    soundHover: _,
                    soundClick: m,
                    onMouseEnter: g,
                    onMouseMove: E,
                    onMouseDown: b,
                    onMouseUp: p,
                    onMouseLeave: h,
                    onClick: f,
                }) => {
                    const v = (0, i.useRef)(null),
                        A = (0, i.useState)(n),
                        w = A[0],
                        C = A[1],
                        k = (0, i.useState)(!1),
                        y = k[0],
                        D = k[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                w && null !== v.current && !v.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [w]),
                        (0, i.useEffect)(() => {
                            C(n);
                        }, [n]),
                        l().createElement(
                            'div',
                            {
                                ref: v,
                                className: r()(
                                    o.Z.base,
                                    o.Z[`base__${a}`],
                                    c && o.Z.base__disabled,
                                    t && o.Z[`base__${t}`],
                                    w && o.Z.base__focus,
                                    y && o.Z.base__highlightActive,
                                    d,
                                ),
                                onMouseEnter: function (e) {
                                    c || (null !== _ && (0, s.G)(_), g && g(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    c || (p && p(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    c ||
                                        (null !== m && (0, s.G)(m),
                                        b && b(e),
                                        n && (c || (v.current && (v.current.focus(), C(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    c || (h && h(e), D(!1));
                                },
                                onClick: function (e) {
                                    c || (f && f(e));
                                },
                            },
                            a !== u.L.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: o.Z.back }),
                                    l().createElement('span', { className: o.Z.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: r()(o.Z.state, o.Z.state__default) },
                                l().createElement('span', { className: o.Z.stateDisabled }),
                                l().createElement('span', { className: o.Z.stateHighlightHover }),
                                l().createElement('span', { className: o.Z.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: o.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                c.defaultProps = { type: u.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const d = c;
            },
            2106: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { L: () => a, q: () => r }),
                    (function (e) {
                        (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost');
                    })(a || (a = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(r || (r = {}));
            },
            2686: (e, t, n) => {
                'use strict';
                n.d(t, { At: () => o });
                var a = n(7363),
                    r = n.n(a),
                    s = n(3458);
                n(2902);
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
                            E = void 0 === g ? s.O.FRAME_TIME : g,
                            b = e.initialFrameIndex,
                            p = void 0 === b ? s.O.INITIAL_FRAME_INDEX : b,
                            h = e.lastFrameIndex,
                            f = void 0 === h ? _ - 1 : h,
                            v = e.loop,
                            A = void 0 === v ? s.O.LOOP : v,
                            w = e.state,
                            C = void 0 === w ? s.O.STATE : w,
                            k = e.onAnimationDone,
                            y = e.onAnimationComplete,
                            D = e.poster,
                            F = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, i);
                        const S = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = S.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    n = (n) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (C) {
                                    case 'play':
                                        return (function () {
                                            const e = d(p, f, o),
                                                t = u(p, f),
                                                a = window.setInterval(() => {
                                                    const r = t(),
                                                        s = e.get(r);
                                                    s
                                                        ? (null == m || m(r, s),
                                                          n(s),
                                                          r === f &&
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
                                                t.addEventListener('load', a), () => t.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [E, o, p, f, A, m, y, k, D, C]),
                            r().createElement('canvas', l({}, F, { width: t, height: n, ref: S }))
                        );
                    }),
                    u = (e, t) => {
                        let n = e;
                        return () => {
                            const a = n;
                            return (n += 1), n > t && (n = e), a;
                        };
                    },
                    c = (e, t) => Object.assign({}, e, { img: t }),
                    d = (e, t, n) => {
                        const a = new Map(),
                            r = {};
                        for (let s = e; s <= t; s++) {
                            const e = n(s),
                                t = r[e.path];
                            if (t) a.set(s, c(e, t));
                            else {
                                const t = new Image();
                                (r[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${s})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    a.set(s, c(e, t));
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
                            s = (r % t.columns) * e.width,
                            i = Math.trunc(r / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(a / n)), x: s, y: i };
                    };
                }
                function r(e) {
                    return (t) => `${e}${t}`;
                }
                n.d(t, { V: () => r, q: () => a });
            },
            2902: (e, t, n) => {
                'use strict';
                n(7363), n(3458);
            },
            9987: (e, t, n) => {
                'use strict';
                n.d(t, { A: () => c });
                var a = n(6483),
                    r = n.n(a),
                    s = n(7363),
                    i = n.n(s),
                    l = n(8055);
                const o = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
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
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        s = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        _ = e.className,
                        m = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, o);
                    const g = a ? null : n,
                        E = 'string' == typeof g;
                    if ((g && !E && g < 0) || 0 === g) return null;
                    const b = g && !E && g > d,
                        p = r()(
                            l.Z.base,
                            l.Z[`base__${t}`],
                            s && l.Z.base__animated,
                            c && l.Z.base__hidden,
                            !g && l.Z.base__pattern,
                            a && l.Z.base__empty,
                            _,
                        );
                    return i().createElement(
                        'div',
                        u({ className: p }, m),
                        i().createElement('div', { className: l.Z.bg }),
                        i().createElement('div', { className: l.Z.pattern }),
                        i().createElement(
                            'div',
                            { className: r()(l.Z.value, E && l.Z.value__text) },
                            b ? d : g,
                            b && i().createElement('span', { className: l.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            3495: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => d });
                var a = n(3138),
                    r = n(7363),
                    s = n(1043),
                    i = n(5262);
                const l = a.O.client.getSize('rem'),
                    o = l.width,
                    u = l.height,
                    c = Object.assign({ width: o, height: u }, (0, i.T)(o, u, s.j)),
                    d = (0, r.createContext)(c);
            },
            1039: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => c });
                var a = n(3138),
                    r = n(6536),
                    s = n(7363),
                    i = n.n(s),
                    l = n(3495),
                    o = n(1043),
                    u = n(5262);
                const c = ({ children: e }) => {
                    const t = (0, s.useContext)(l.Y),
                        n = (0, s.useState)(t),
                        c = n[0],
                        d = n[1],
                        _ = (0, s.useCallback)((e, t) => {
                            const n = a.O.view.pxToRem(e),
                                r = a.O.view.pxToRem(t);
                            d(Object.assign({ width: n, height: r }, (0, u.T)(n, r, o.j)));
                        }, []),
                        m = (0, s.useCallback)(() => {
                            const e = a.O.client.getSize('px');
                            _(e.width, e.height);
                        }, [_]);
                    (0, r.Z)(() => {
                        a.O.client.events.on('clientResized', _), a.O.client.events.on('self.onScaleUpdated', m);
                    }),
                        (0, s.useEffect)(
                            () => () => {
                                a.O.client.events.off('clientResized', _),
                                    a.O.client.events.off('self.onScaleUpdated', m);
                            },
                            [_, m],
                        );
                    const g = (0, s.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(l.Y.Provider, { value: g }, e);
                };
            },
            6010: (e, t, n) => {
                'use strict';
                var a = n(7363),
                    r = n(7382),
                    s = n(3495);
                const i = ['children'];
                const l = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    const l = (0, a.useContext)(s.Y),
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
                        h = l.extraLargeHeight,
                        f = l.largeHeight,
                        v = l.mediumHeight,
                        A = l.smallHeight,
                        w = l.extraSmallHeight,
                        C = { extraLarge: h, large: f, medium: v, small: A, extraSmall: w };
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
                            if (n.extraLargeHeight && h) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && v) return t;
                            if (n.smallHeight && A) return t;
                            if (n.extraSmallHeight && w) return t;
                        }
                    }
                    return null;
                };
                l.defaultProps = {
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
                (0, a.memo)(l);
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
                        s = Math.min(a, r);
                    return {
                        extraLarge: s === n.extraLarge.weight,
                        large: s === n.large.weight,
                        medium: s === n.medium.weight,
                        small: s === n.small.weight,
                        extraSmall: s === n.extraSmall.weight,
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
                n.d(t, { T: () => r }),
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
                    })(a || (a = {}));
            },
            1037: (e, t, n) => {
                'use strict';
                n.d(t, { IC: () => a });
                var a,
                    r = n(6483),
                    s = n.n(r),
                    i = n(6373),
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
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(a || (a = {}));
                const b = ['__left', '__right', '__top', '__bottom'];
                (0, _.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: a = {} }, r) => {
                        const p = (0, _.useRef)(null),
                            h = (0, _.useRef)(null),
                            f = (0, _.useRef)(null),
                            v = (0, _.useState)(window.decorator && window.decorator.directionType),
                            A = v[0],
                            w = v[1],
                            C = (0, _.useCallback)(() => {
                                c.$.playClick(), l.O.view.sendEvent.close();
                            }, []),
                            k = (0, _.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            y = s()(g.Z.arrow, g.Z[`arrow${b[A]}`]);
                        (0, o.b)(
                            () => (
                                l.O.client.events.mouse.enableOutside(),
                                l.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (n ? n() : l.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const D = (0, _.useCallback)(
                                (e) => {
                                    let t = e.target;
                                    do {
                                        if (t === p.current || t === f.current) return;
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
                                [p, f, n],
                            ),
                            F = (0, E.w)(),
                            S = (0, _.useCallback)(() => {
                                const e = h.current;
                                if (e)
                                    return (
                                        l.O.view.freezeTextureBeforeResize(),
                                        F.run(() => {
                                            const t = e.scrollWidth,
                                                n = e.scrollHeight;
                                            l.O.view.resize(t, n), w(window.decorator.directionType);
                                        })
                                    );
                            }, [F]);
                        return (
                            (0, _.useImperativeHandle)(r, () => ({ updateSize: S })),
                            (0, o.b)(() => {
                                l.O.view.setInputPaddingsRem(58);
                            }),
                            (0, _.useEffect)(() => {
                                document.addEventListener('mousedown', D, { capture: !0 });
                                const e = (0, u.B)((0, d.Eu)());
                                return (
                                    !t && e.promise.then(() => S()),
                                    () => {
                                        e.cancel(), document.removeEventListener('mousedown', D);
                                    }
                                );
                            }, [S, D, t]),
                            m().createElement(
                                'div',
                                { className: g.Z.base, ref: h },
                                m().createElement(
                                    'div',
                                    { className: g.Z.decorator },
                                    m().createElement(
                                        'div',
                                        { className: g.Z.content, ref: p },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            m().createElement(
                                                i.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                m().createElement('div', {
                                                    className: g.Z.closeBtn,
                                                    onClick: C,
                                                    onMouseEnter: k,
                                                    ref: f,
                                                }),
                                            ),
                                    ),
                                    m().createElement('div', { className: y, style: a.arrow }),
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
                    s = n(7363),
                    i = n.n(s);
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
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, l);
                    const h = (0, s.useRef)(null),
                        f = (0, s.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            h.current && (0, r.P3)(t, c, h.current, n, d, _);
                        }, [t, c, _, n, d]);
                    return i().createElement(
                        'div',
                        o(
                            {
                                ref: h,
                                onMouseDown:
                                    ((v = g.props.onClick),
                                    (e) => {
                                        b && (f(), m && m(e), v && v(e));
                                    }),
                            },
                            p,
                        ),
                        g,
                    );
                    var v;
                };
            },
            7078: (e, t, n) => {
                'use strict';
                n.d(t, { t: () => o });
                var a = n(7363),
                    r = n.n(a),
                    s = n(2056);
                const i = ['children'];
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
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, i);
                    return r().createElement(
                        s.u,
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
                    s = n(7078),
                    i = n(6373),
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
                    if (t.header || t.body) return r().createElement(i.i, t, a);
                    const u = t.contentId;
                    return u ? r().createElement(l.u, o({}, t, { contentId: u }), a) : r().createElement(s.t, t, a);
                };
            },
            6373: (e, t, n) => {
                'use strict';
                n.d(t, { i: () => u });
                var a = n(2056),
                    r = n(7363),
                    s = n.n(r);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, i);
                        const g = (0, r.useMemo)(() => {
                            const e = Object.assign({}, _, { body: n, header: u, note: c, alert: d });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [d, n, u, c, _]);
                        return s().createElement(
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
                    s = n(7363);
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
                            h = void 0 === p ? 0 : p,
                            f = e.isEnabled,
                            v = void 0 === f || f,
                            A = e.targetId,
                            w = void 0 === A ? 0 : A,
                            C = e.onShow,
                            k = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, i);
                        const D = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            F = (0, s.useMemo)(() => w || (0, a.F)().resId, [w]),
                            S = (0, s.useCallback)(() => {
                                (D.current.isVisible && D.current.timeoutId) ||
                                    (o(n, h, { isMouseEvent: !0, on: !0, arguments: l(r) }, F),
                                    C && C(),
                                    (D.current.isVisible = !0));
                            }, [n, h, r, F, C]),
                            B = (0, s.useCallback)(() => {
                                if (D.current.isVisible || D.current.timeoutId) {
                                    const e = D.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (D.current.timeoutId = 0)),
                                        o(n, h, { on: !1 }, F),
                                        D.current.isVisible && k && k(),
                                        (D.current.isVisible = !1);
                                }
                            }, [n, h, F, k]),
                            x = (0, s.useCallback)((e) => {
                                D.current.isVisible &&
                                    ((D.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (D.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(D.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = D.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === v && B();
                            }, [v, B]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            );
                        return v
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((D.current.timeoutId = window.setTimeout(S, g ? 100 : 400)),
                                                      u && u(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              B(), null == c || c(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === b && B(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === b && B(), null == d || d(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      y,
                                  ),
                              )
                            : t;
                        var L;
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
                            if ('string' == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
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
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function l({ initializer: e = !0, rootId: t = 0, getRoot: n = i, context: s = 'model' } = {}) {
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
                            r = s.split('.').reduce((e, t) => e[t], a);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, t) => {
                                  const n = e[t];
                                  return 'function' == typeof n ? n.bind(e) : n;
                              }, r);
                    };
                    return {
                        subscribe: (n, r) => {
                            const i = 'string' == typeof r ? `${s}.${r}` : s,
                                o = a.O.view.addModelObserver(i, t, !0);
                            return l.set(o, n), e && n(u(r)), o;
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
                    s = n(7363),
                    i = n.n(s),
                    l = n(8246);
                const o = () => (e, t) => {
                    const n = (0, s.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: u, children: c, mocks: d }) {
                            const _ = (0, s.useRef)([]),
                                m = (n, s, i) => {
                                    var o;
                                    const u = l.U(s),
                                        c =
                                            'real' === n
                                                ? u
                                                : Object.assign({}, u, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === n ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        g = e({
                                            mode: n,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const s = null != t ? t : d(e),
                                                        i = r.LO.box(s, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const s = null != t ? t : d(e),
                                                        i = r.LO.box(s, { equals: a.jv });
                                                    return (
                                                        'real' === n &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const a = d(t);
                                                    if (Array.isArray(e)) {
                                                        const s = e.reduce(
                                                            (e, t) => ((e[t] = r.LO.box(a[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            s[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                    {
                                                        const s = e,
                                                            i = Object.entries(s),
                                                            l = i.reduce(
                                                                (e, [t, n]) => ((e[n] = r.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        i.forEach(([t, n]) => {
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
                                        controls: 'mocks' === n && i ? i.controls(E) : t(E),
                                        externalModel: c,
                                        mode: n,
                                    };
                                },
                                g = (0, s.useRef)(!1),
                                E = (0, s.useState)(o),
                                b = E[0],
                                p = E[1],
                                h = (0, s.useState)(() => m(o, u, d)),
                                f = h[0],
                                v = h[1];
                            return (
                                (0, s.useEffect)(() => {
                                    g.current ? v(m(b, u, d)) : (g.current = !0);
                                }, [d, b, u]),
                                (0, s.useEffect)(() => {
                                    p(o);
                                }, [o]),
                                (0, s.useEffect)(
                                    () => () => {
                                        f.externalModel.dispose(), _.current.forEach((e) => e());
                                    },
                                    [f],
                                ),
                                i().createElement(n.Provider, { value: f }, c)
                            );
                        },
                        () => (0, s.useContext)(n),
                    ];
                };
            },
            7044: (e, t, n) => {
                'use strict';
                n(3649), n(9916);
                var a = n(8613);
                Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime;
            },
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => o, on: () => l, onResize: () => s, onScaleUpdated: () => i });
                var a = n(2472),
                    r = n(1176);
                const s = (0, a.E)('clientResized'),
                    i = (0, a.E)('self.onScaleUpdated'),
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
                    const s = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        i = u[t]((e) => n([e, 'outside']));
                                    function l(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, l),
                                        a(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(s, l),
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
                    return Object.assign({}, s, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
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
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => i,
                        getSize: () => s,
                        graphicsQuality: () => l,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var a = n(527),
                    r = n(2493);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
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
                    r = n(514);
                const s = { view: n(7641), client: a, sound: r.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => i });
                var a = n(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((e, t) => ((e[t] = () => (0, a.playSound)(r[t])), e), {}),
                    i = { play: Object.assign({}, s, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => a });
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
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        arabic2roman: () => F,
                        children: () => r,
                        displayStatus: () => s.W,
                        displayStatusIs: () => S,
                        events: () => i.U,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => k,
                        freezeTextureBeforeResize: () => b,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => y,
                        getFontNames: () => D,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => C,
                        isFocused: () => A,
                        pxToRem: () => h,
                        remToPx: () => f,
                        resize: () => g,
                        sendEvent: () => l.qP,
                        setAnimateWindow: () => v,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => u,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => x,
                    });
                var a = n(9690),
                    r = n(3722),
                    s = n(6112),
                    i = n(6538),
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
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function b() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function h(e) {
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
                    F = a.cg,
                    S = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => u });
                const a = ['args'];
                const r = 2,
                    s = 16,
                    i = 32,
                    l = 64,
                    o = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, a);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = s),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    u = {
                        close(e) {
                            o('popover' === e ? r : i);
                        },
                        minimize() {
                            o(l);
                        },
                        move(e) {
                            o(s, { isMouseEvent: !0, on: e });
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
                    var s;
                    t &&
                        ((r = (null == (s = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : s[0]) || ''),
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
                n(3469), n(2133);
                var a = n(2790);
                n(579), n(5360), n(9056);
                const r = a.Z;
            },
            6536: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => r });
                var a = n(7363);
                const r = (e) => {
                    const t = (0, a.useRef)(!1);
                    t.current || (e(), (t.current = !0));
                };
            },
            3469: (e, t, n) => {
                'use strict';
                n(7044), n(7363);
            },
            2133: (e, t, n) => {
                'use strict';
                n(7363);
            },
            5415: (e, t, n) => {
                'use strict';
                n.d(t, { Aq: () => o, GS: () => u, cJ: () => i, fd: () => l });
                var a = n(7363),
                    r = n(7739),
                    s = n(1043);
                let i, l, o;
                !(function (e) {
                    (e[(e.ExtraSmall = s.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.j.small.width)] = 'Small'),
                        (e[(e.Medium = s.j.medium.width)] = 'Medium'),
                        (e[(e.Large = s.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.j.extraLarge.width)] = 'ExtraLarge');
                })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.width)] = 'Small'),
                            (e[(e.Medium = s.j.medium.width)] = 'Medium'),
                            (e[(e.Large = s.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.width)] = 'ExtraLarge');
                    })(l || (l = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.j.small.height)] = 'Small'),
                            (e[(e.Medium = s.j.medium.height)] = 'Medium'),
                            (e[(e.Large = s.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const u = () => {
                    const e = (0, a.useContext)(r.YN),
                        t = e.width,
                        n = e.height,
                        s = ((e) => {
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
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
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
                                    return console.error('Unreachable media context resolution'), l.ExtraSmall;
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
                                    return console.error('Unreachable media context resolution'), o.ExtraSmall;
                            }
                        })(e);
                    return { mediaSize: s, mediaWidth: u, mediaHeight: c, remScreenWidth: t, remScreenHeight: n };
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
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
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
                n.d(t, { b: () => r, k: () => s });
                var a = n(7363);
                const r = (e) => {
                        (0, a.useEffect)(e, []);
                    },
                    s = (e) => {
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
                n.d(t, { V: () => s });
                var a = n(7363),
                    r = n(3138);
                const s = () => {
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
                n(3138), n(7363);
            },
            8475: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => s });
                var a = n(7363),
                    r = n(2039);
                function s() {
                    const e = (0, a.useRef)(0);
                    return (
                        (0, r.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, a.useMemo)(
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
            5521: (e, t, n) => {
                'use strict';
                let a, r;
                n.d(t, { n: () => a }),
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
                    })(a || (a = {})),
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
                    })(r || (r = {}));
            },
            9480: (e, t, n) => {
                'use strict';
                function a(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                n.d(t, { U2: () => a, UI: () => s, dF: () => l, lN: () => i, sE: () => o });
                function r(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function s(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function i(e) {
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
            9690: (e, t, n) => {
                'use strict';
                n.d(t, { HG: () => l, cg: () => s });
                const a = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function s(e) {
                    let t = '';
                    for (let n = r.length - 1; n >= 0; n--) for (; e >= r[n]; ) (t += a[n]), (e -= r[n]);
                    return t;
                }
                const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    l = (e) => (i ? `${e}` : s(e));
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
                n.d(t, { BN: () => s, Eg: () => o, dL: () => u, e: () => i, uF: () => r, z4: () => l });
                n(1281);
                let a;
                function r(e, t) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const n = 0 === e.indexOf('%') ? 2 : 1;
                        return String(t[e.slice(n, -n)]);
                    });
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                function i(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(a || (a = {}));
                const l = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e) => e.replace(/&zwnbsp;/g, '\ufeff'),
                    u =
                        ((() => {
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
                n.d(t, { Z: () => s });
                var a = n(3138);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const s = a.O.view.addModelObserver(e, n, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(s) : (this._views[n] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
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
                const s = r;
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    c1: () => D,
                    Sw: () => s.Z,
                    B3: () => o,
                    Gr: () => u,
                    Z5: () => i.Z5,
                    B0: () => l,
                    c9: () => f,
                    wU: () => C,
                    ry: () => p,
                    Eu: () => h,
                    SW: () => A,
                    P3: () => w,
                });
                class a {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                a.__instance = void 0;
                const r = a;
                var s = n(1358);
                var i = n(8613);
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(5521),
                    m = n(3138);
                const g = ['args'];
                function E(e, t, n, a, r, s, i) {
                    try {
                        var l = e[s](i),
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
                                        var s = e.apply(t, n);
                                        function i(e) {
                                            E(s, a, r, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            E(s, a, r, i, l, 'throw', e);
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
                    f = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    v = () => f(l.CLOSE),
                    A = () => f(l.POP_OVER, { on: !1 }),
                    w = (e, t, n, a, r = R.invalid('resId'), s) => {
                        const i = m.O.view.getViewGlobalPosition(),
                            o = n.getBoundingClientRect(),
                            u = o.x,
                            c = o.y,
                            d = o.width,
                            _ = o.height,
                            g = {
                                x: m.O.view.pxToRem(u) + i.x,
                                y: m.O.view.pxToRem(c) + i.y,
                                width: m.O.view.pxToRem(d),
                                height: m.O.view.pxToRem(_),
                            };
                        f(l.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: a || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: b(g),
                            on: !0,
                            args: s,
                        });
                    },
                    C = () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                    k = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var y = n(7572);
                const D = r.instance,
                    F = {
                        DataTracker: s.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: o,
                        RealFormatType: u,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => f(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: A,
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            f(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: w,
                        addEscapeListener: (e) => {
                            const t = (t) => k(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            k(e, v);
                        },
                        handleViewEvent: f,
                        onBindingsReady: p,
                        onLayoutReady: h,
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
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Ew: () => s, Z5: () => a, cy: () => r });
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
                    s = {
                        getRegionalDateTime: (e, t, n = !0) => regionalDateTime.getRegionalDateTime(e, t, n),
                        getFormattedDateTime: (e, t, n = !0) => regionalDateTime.getFormattedDateTime(e, t, n),
                    };
            },
            1504: (e, t, n) => {
                'use strict';
                n.d(t, { z: () => o });
                var a = n(7739),
                    r = n(7363),
                    s = n.n(r),
                    i = n(2849);
                const l = ['children'];
                const o = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, l);
                    return s().createElement(a.ZN, null, s().createElement(i.l, n, t));
                };
            },
            2849: (e, t, n) => {
                'use strict';
                n.d(t, { l: () => E });
                var a = n(6483),
                    r = n.n(a),
                    s = n(926),
                    i = n.n(s),
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
                        [u.fd.Small]: i().SMALL_WIDTH,
                        [u.fd.Medium]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH}`,
                        [u.fd.Large]: `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH}`,
                        [u.fd.ExtraLarge]:
                            `${i().SMALL_WIDTH} ${i().MEDIUM_WIDTH} ${i().LARGE_WIDTH} ${i().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
                        [u.Aq.ExtraSmall]: '',
                        [u.Aq.Small]: i().SMALL_HEIGHT,
                        [u.Aq.Medium]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT}`,
                        [u.Aq.Large]: `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT}`,
                        [u.Aq.ExtraLarge]:
                            `${i().SMALL_HEIGHT} ${i().MEDIUM_HEIGHT} ${i().LARGE_HEIGHT} ${i().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [u.cJ.ExtraSmall]: '',
                        [u.cJ.Small]: i().SMALL,
                        [u.cJ.Medium]: `${i().SMALL} ${i().MEDIUM}`,
                        [u.cJ.Large]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE}`,
                        [u.cJ.ExtraLarge]: `${i().SMALL} ${i().MEDIUM} ${i().LARGE} ${i().EXTRA_LARGE}`,
                    },
                    E = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, c);
                        const s = (0, u.GS)(),
                            i = s.mediaWidth,
                            l = s.mediaHeight,
                            E = s.mediaSize;
                        return o().createElement('div', d({ className: r()(n, _[i], m[l], g[E]) }, a), t);
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
                const s = [
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
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                let l;
                !(function (e) {
                    (e.Play = 'play'), (e.Stop = 'stop');
                })(l || (l = {}));
                const o = (e, t, n) => {
                    const a = new Image();
                    (a.src = n(t)), e.push(a);
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
                        h = void 0 === p || p,
                        f = e.state,
                        v = void 0 === f ? l.Play : f,
                        A = e.onAnimationComplete,
                        w = void 0 === A ? () => {} : A,
                        C = e.revers,
                        k = void 0 !== C && C,
                        y = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, s);
                    const D = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            const e = D.current;
                            if (!e) return;
                            const a = c - 1,
                                r = e.getContext('2d'),
                                s = (a) => {
                                    r.clearRect(0, 0, e.width, e.height), r.drawImage(a, 0, 0, t, n);
                                };
                            if ('stop' === v) {
                                const e = u(0),
                                    t = new Image();
                                t.src = e;
                                const n = () => s(t);
                                return t.addEventListener('load', n), () => t.removeEventListener('load', n);
                            }
                            const i = ((e, t, n) => {
                                    const a = [];
                                    if (n) for (let n = e; n >= 0; n--) o(a, n, t);
                                    else for (let n = 0; n < e; n++) o(a, n, t);
                                    return a;
                                })(c, u, k),
                                l = ((e, t = 0) => {
                                    let n = t;
                                    return () => {
                                        const t = n;
                                        return (n += 1), n > e && (n = 0), t;
                                    };
                                })(a, b),
                                d = setInterval(() => {
                                    const e = l(),
                                        t = i[e];
                                    s(i[e]), _(e, t), e === a && (w(), h || clearInterval(d));
                                }, g);
                            return () => clearInterval(d);
                        }, [c, g, u, n, b, h, _, w, v, t, k]),
                        r().createElement('canvas', i({}, y, { width: t, height: n, ref: D }))
                    );
                });
            },
            1427: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => oe,
                        Bar: () => se,
                        DefaultScroll: () => le,
                        Direction: () => $,
                        defaultSettings: () => G,
                        useHorizontalScrollApi: () => Z,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => De, Bar: () => Ce, Default: () => ye, useVerticalScrollApi: () => ue });
                var s = n(4029),
                    i = n(7363),
                    l = n.n(i),
                    o = n(1533),
                    u = n.n(o),
                    c = n(6483),
                    d = n.n(c),
                    _ = n(7727);
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
                class b extends l().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, _.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, _.G)(this.props.soundClick);
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
                            n = e.onClick,
                            a = e.goto,
                            r = e.side,
                            s = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            u = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            b =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, g)),
                            p = d()(m.base, m[`base__${s}`], m[`base__${r}`], null == i ? void 0 : i.base),
                            h = d()(m.icon, m[`icon__${s}`], m[`icon__${r}`], null == i ? void 0 : i.icon),
                            f = d()(m.glow, null == i ? void 0 : i.glow),
                            v = d()(m.caption, m[`caption__${s}`], null == i ? void 0 : i.caption),
                            A = d()(m.goto, null == i ? void 0 : i.goto);
                        return l().createElement(
                            'div',
                            E(
                                {
                                    className: p,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(u),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                b,
                            ),
                            'info' !== s && l().createElement('div', { className: m.shine }),
                            l().createElement('div', { className: h }, l().createElement('div', { className: f })),
                            l().createElement('div', { className: v }, t),
                            a && l().createElement('div', { className: A }, a),
                        );
                    }
                }
                b.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var p = n(3138),
                    h = n(5521),
                    f = n(9916);
                const v = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function A(e = h.n.NONE, t = v, n = !1, a = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== h.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && p.O.view.isEventHandled()) return;
                                p.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                var w = n(5415),
                    C = n(3403),
                    k = n(8706),
                    y = n(3215);
                let D, F, S, B;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(D || (D = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(F || (F = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(S || (S = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(B || (B = {}));
                D.Initialization, F.Initialization;
                const x = (0, y.q3)()(
                        ({ observableModel: e }) => {
                            const t = { groups: e.array('groups', []) };
                            return Object.assign({}, t);
                        },
                        ({ externalModel: e }) => ({
                            onGroupClick: e.createCallback((e) => ({ groupName: e }), 'onGroupClick'),
                        }),
                    ),
                    L = x[0],
                    N = x[1],
                    I = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    (n = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                            }
                        );
                    },
                    T = (e, t, n) => (n < e ? e : n > t ? t : n),
                    O = [];
                function M(e) {
                    const t = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, t.current)(...e), O)
                    );
                }
                function P(e, t, n = []) {
                    const a = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, i.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, i.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, s),
                        r,
                    ];
                }
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
                    const a = (0, i.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let r,
                                    s = !1,
                                    i = 0;
                                function l() {
                                    r && clearTimeout(r);
                                }
                                function o(...o) {
                                    const u = this,
                                        c = Date.now() - i;
                                    function d() {
                                        (i = Date.now()), n.apply(u, o);
                                    }
                                    s ||
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
                                        l(), (s = !0);
                                    }),
                                    o
                                );
                            })(n, e),
                        t,
                    );
                    return (0, i.useEffect)(() => a.cancel, [a]), a;
                }
                var z = n(7030);
                let $;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
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
                        forceTriggerMouseMove: s,
                    }) => {
                        const l = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                s = a[1];
                            return s <= r ? 0 : T(r, s, n);
                        };
                        return (o = {}) => {
                            const u = o.settings,
                                c = void 0 === u ? G : u,
                                d = (0, i.useRef)(null),
                                _ = (0, i.useRef)(null),
                                m = (0, i.useRef)(!1),
                                g = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
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
                                    return (0, i.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                E = j(
                                    () => {
                                        s && s();
                                    },
                                    [],
                                    150,
                                ),
                                b = (0, z.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), g.trigger('change', e), s && m.current && E());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                p = b[0],
                                h = b[1],
                                f = (0, i.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = p.scrollPosition.get(),
                                            s = (null != (a = p.scrollPosition.goal) ? a : 0) - r;
                                        return l(e, t * n + s + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                v = (0, i.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            h.start({
                                                scrollPosition: l(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: c.animationConfig,
                                                from: { scrollPosition: l(a, p.scrollPosition.get()) },
                                            });
                                    },
                                    [h, c.animationConfig, p.scrollPosition],
                                ),
                                A = (0, i.useCallback)(
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
                                            s = f(t, e, a);
                                        v(s);
                                    },
                                    [v, f, c.step],
                                ),
                                w = (0, i.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && A(a(e)),
                                            d.current && g.trigger('mouseWheel', e, p.scrollPosition, t(d.current));
                                    },
                                    [p.scrollPosition, A, g],
                                ),
                                C = ((e, t = []) => {
                                    const n = (0, i.useRef)(),
                                        a = (0, i.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        I(() => {
                                            const e = d.current;
                                            e &&
                                                (v(l(e, p.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [v, p.scrollPosition.goal],
                                ),
                                k = M(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = l(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && v(t, { immediate: !0 }),
                                        g.trigger('recalculateContent');
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', C),
                                    () => {
                                        window.removeEventListener('resize', C);
                                    }
                                ),
                                [C],
                            ),
                                (0, i.useEffect)(() => {
                                    const e = d.current;
                                    if (!e || !s) return;
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
                                            e.removeEventListener('mouseenter', t),
                                                e.removeEventListener('mouseleave', n);
                                        }
                                    );
                                }, [d]);
                            return (0, i.useMemo)(
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
                                    applyScroll: v,
                                    applyStepTo: A,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: h,
                                    animationScroll: p,
                                    recalculateContent: k,
                                    events: { on: g.on, off: g.off },
                                }),
                                [p.scrollPosition, v, A, g.off, g.on, k, w, h, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Z = U({
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
                        getDirection: (e) => (e.deltaY > 1 ? $.Next : $.Prev),
                        forceTriggerMouseMove: p.O.view.forceTriggerMouseMove,
                    }),
                    V = 'HorizontalBar_base_49',
                    q = 'HorizontalBar_base__nonActive_82',
                    Y = 'HorizontalBar_leftButton_5f',
                    K = 'HorizontalBar_rightButton_03',
                    X = 'HorizontalBar_track_0d',
                    Q = 'HorizontalBar_thumb_fd',
                    J = 'HorizontalBar_rail_32',
                    ee = 'disable',
                    te = { pending: !1, offset: 0 },
                    ne = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    ae = () => {},
                    re = (e, t) => Math.max(20, e.offsetWidth * t),
                    se = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ne, onDrag: a = ae }) => {
                        const r = (0, i.useRef)(null),
                            s = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            u = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, i.useState)(te),
                            E = g[0],
                            b = g[1],
                            h = (0, i.useCallback)(
                                (e) => {
                                    b(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            f = () => {
                                const t = u.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, a / r),
                                    d = T(0, 1, i / (r - a)),
                                    _ = (t.offsetWidth - re(t, l)) * d;
                                (n.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && o.current && u.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(ee), void o.current.classList.remove(ee);
                                            if (
                                                ((t = u.current),
                                                (n = c.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(ee), void o.current.classList.add(ee);
                                            var t, n;
                                            s.current.classList.remove(ee), o.current.classList.remove(ee);
                                        }
                                    })(_);
                            },
                            v = M(() => {
                                (() => {
                                    const t = c.current,
                                        n = u.current,
                                        a = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && a && n)) return;
                                    const i = Math.min(1, a / s);
                                    (t.style.width = `${re(n, i)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(q) : r.current.classList.remove(q));
                                })(),
                                    f();
                            });
                        (0, i.useEffect)(() => I(v)),
                            (0, i.useEffect)(
                                () =>
                                    I(() => {
                                        const t = () => {
                                            f();
                                        };
                                        let n = ae;
                                        const a = () => {
                                            n(), (n = I(v));
                                        };
                                        return (
                                            e.events.on('recalculateContent', v),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', v),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, i.useEffect)(() => {
                                if (!E.pending) return;
                                const t = p.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const s = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!s || !i) return;
                                        const l = u.current,
                                            o = c.current;
                                        if (!l || !o) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const d = t.clientX - E.offset - l.getBoundingClientRect().x,
                                            _ = (d / l.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: o, thumbOffset: d, contentOffset: _ });
                                    }),
                                    n = p.O.client.events.mouse.up(() => {
                                        t(), h(te);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, E.offset, E.pending, a, h]);
                        const A = P((t) => e.applyStepTo(t), m, [e]),
                            w = A[0],
                            C = A[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const k = (e) => {
                            e.target.classList.contains(ee) || (0, _.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: d()(V, t.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: d()(Y, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ee) || 0 !== e.button || ((0, _.G)('play'), w($.Next));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: k,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: d()(X, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, _.G)('play'), t.target === a))
                                                h({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = c.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? $.Prev : $.Next);
                                            }
                                    },
                                    ref: u,
                                    onMouseEnter: k,
                                },
                                l().createElement('div', { ref: c, className: d()(Q, t.thumb) }),
                                l().createElement('div', { className: d()(J, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: d()(K, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ee) || 0 !== e.button || ((0, _.G)('play'), w($.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: k,
                            }),
                        );
                    }),
                    ie = {
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
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: u,
                        onDrag: c,
                    }) => {
                        const _ = (0, i.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: d()(ie.base, e.base) });
                            }, [a]),
                            m = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: d()(ie.defaultScroll, n), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: d()(ie.defaultScrollArea, r) },
                                l().createElement(oe, { className: o, api: m, classNames: s }, e),
                            ),
                            l().createElement(se, { getStepByRailClick: u, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    oe = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, i.useEffect)(() => I(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: d()(ie.base, t) },
                            l().createElement(
                                'div',
                                {
                                    className: d()(ie.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: d()(ie.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (oe.Bar = se), (oe.Default = le);
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
                    de = 'VerticalBar_base__nonActive_42',
                    _e = 'VerticalBar_topButton_d7',
                    me = 'VerticalBar_bottomButton_06',
                    ge = 'VerticalBar_track_df',
                    Ee = 'VerticalBar_thumb_32',
                    be = 'VerticalBar_rail_43',
                    pe = 'disable',
                    he = () => {},
                    fe = { pending: !1, offset: 0 },
                    ve = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Ae = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    we = (e, t) => Math.max(20, e.offsetHeight * t),
                    Ce = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = ve, onDrag: a = he }) => {
                        const r = (0, i.useRef)(null),
                            s = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            u = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            g = (0, i.useState)(fe),
                            E = g[0],
                            b = g[1],
                            h = (0, i.useCallback)(
                                (e) => {
                                    b(e),
                                        c.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [a],
                            ),
                            f = M(() => {
                                const t = c.current,
                                    n = u.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && s && t && n)) return;
                                const i = Math.min(1, a / s);
                                return (
                                    (t.style.height = `${we(n, i)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(de) : r.current.classList.remove(de)),
                                    i
                                );
                            }),
                            v = M(() => {
                                const t = u.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    l = Math.min(1, a / r),
                                    d = T(0, 1, i / (r - a)),
                                    _ = (t.offsetHeight - we(t, l)) * d;
                                (n.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (s.current && o.current && u.current && c.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(pe), void o.current.classList.remove(pe);
                                            if (
                                                ((t = u.current),
                                                (n = c.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(pe), void o.current.classList.add(pe);
                                            var t, n;
                                            s.current.classList.remove(pe), o.current.classList.remove(pe);
                                        }
                                    })(_);
                            }),
                            A = M(() => {
                                Ae(e, () => {
                                    f(), v();
                                });
                            });
                        (0, i.useEffect)(() => I(A)),
                            (0, i.useEffect)(() => {
                                const t = () => {
                                    Ae(e, () => {
                                        v();
                                    });
                                };
                                let n = he;
                                const a = () => {
                                    n(), (n = I(A));
                                };
                                return (
                                    e.events.on('recalculateContent', A),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', A),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!E.pending) return;
                                const t = p.O.client.events.mouse.up(() => {
                                        h(fe);
                                    }),
                                    n = p.O.client.events.mouse.move(([t]) => {
                                        Ae(e, (n) => {
                                            const r = u.current,
                                                s = c.current,
                                                i = e.getContainerSize();
                                            if (!r || !s || !i) return;
                                            const l = t.screenY - E.offset - r.getBoundingClientRect().y,
                                                o = (l / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, E.offset, E.pending, a, h]);
                        const w = P((t) => e.applyStepTo(t), m, [e]),
                            C = w[0],
                            k = w[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', k, !0),
                                () => document.removeEventListener('mouseup', k, !0)
                            ),
                            [k],
                        );
                        const y = (e) => {
                            e.target.classList.contains(pe) || (0, _.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: d()(ce, t.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: d()(_e, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pe) || 0 !== e.button || ((0, _.G)('play'), C($.Next));
                                },
                                ref: s,
                                onMouseEnter: y,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: d()(ge, t.track),
                                    onMouseDown: (t) => {
                                        const a = c.current;
                                        if (a && 0 === t.button)
                                            if (((0, _.G)('play'), t.target === a))
                                                h({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        Ae(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                s = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? $.Prev : $.Next);
                                            }
                                    },
                                    ref: u,
                                    onMouseEnter: y,
                                },
                                l().createElement('div', { ref: c, className: d()(Ee, t.thumb) }),
                                l().createElement('div', { className: d()(be, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: d()(me, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(pe) || 0 !== e.button || ((0, _.G)('play'), C($.Prev));
                                },
                                onMouseUp: k,
                                ref: o,
                                onMouseEnter: y,
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
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: u,
                        onDrag: c,
                    }) => {
                        const _ = (0, i.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: d()(ke.base, e.base) });
                            }, [a]),
                            m = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: d()(ke.defaultScroll, n), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: d()(ke.area, r) },
                                l().createElement(De, { className: s, classNames: o, api: m }, e),
                            ),
                            l().createElement(Ce, { getStepByRailClick: u, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    De = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, i.useEffect)(() => I(a.recalculateContent)),
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
                    xe = n(3415),
                    Le = n(8045);
                const Ne = {
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
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Te || (Te = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Oe || (Oe = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(Re || (Re = {}));
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
                    Ze = {
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
                    Ve = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((r, s) => {
                                const i = `${n}_${s}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        t = e.blockType,
                                        n = Ve(e, Ze[t], i);
                                    a.push(...n);
                                } else a.push(t({ elementList: [r], textBlock: e, key: i }));
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
                                            r = Ze[a],
                                            s = Ve(e, r, t);
                                        return (
                                            a === Te.NoBreakWrapper
                                                ? n.push(r({ elementList: s, textBlock: e, key: `${t}` }))
                                                : n.push(...s),
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
                            s = 0;
                        for (; r; ) s !== r.index && n(e.slice(s, r.index)), a(r), (s = t.lastIndex), (r = t.exec(e));
                        s !== e.length && n(e.slice(s));
                    },
                    Ke = new RegExp('[฀-๿][ัำ-ฺ็-๎]*|[^฀-๿]', 'gu'),
                    Xe = (e) => {
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
                    Qe = Pe
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
                                          t.push(...Xe(e[0]));
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
                              let s = 0;
                              for (; a; ) {
                                  const i = t.justifyContent === Oe.FlexEnd ? a.index : n.lastIndex;
                                  r.push(e.slice(s, i)), (s = i), (a = n.exec(e));
                              }
                              return s !== e.length && r.push(e.slice(s)), r;
                          },
                    Je = (e, t = '', n) => {
                        const a = [];
                        return (
                            Ye(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: Te.Word, colorTag: t, childList: Qe(e, n) });
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
                                        : a.push({ blockType: r, colorTag: t, childList: [n] });
                                },
                            ),
                            a
                        );
                    },
                    et = (e, t, n = '', a) => {
                        const r = [];
                        return (
                            Ye(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    r.push(...Je(e, n, a));
                                },
                                (e) => {
                                    const s = e[1],
                                        i = void 0 === t[s] ? e[0] : t[s];
                                    'string' == typeof i || 'number' == typeof i
                                        ? r.push(...Je(String(i), n, a))
                                        : r.push({ blockType: Te.Binding, colorTag: n, childList: [i] });
                                },
                            ),
                            r
                        );
                    },
                    tt = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Te.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Te.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
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
                    st = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = rt(e, t),
                            r = e.textContent.length,
                            s = e.offsetWidth / r,
                            i = Math.ceil(a / s);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / s);
                            return a >= n ? [!0, n + i] : [!1, a];
                        }
                        const l = Math.max(n + i, 0);
                        return r < l ? [!1, 0] : [!0, l];
                    },
                    it = (e, t, n, a, r, s) => {
                        let i = -1,
                            o = null;
                        for (let u = n; u >= 0; u--) {
                            const n = e[u],
                                c = Number(e[u].getAttribute('data-block-type'));
                            if (c === Te.LineBreak || c === Te.NewLine || c === Te.Binding) continue;
                            const d = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = st(n, a, r),
                                    c = e[0],
                                    _ = e[1];
                                if (!c) {
                                    _ > 0 && (r -= _);
                                    continue;
                                }
                                const m = d.slice(0, d.length - _) + s,
                                    g = t[u];
                                (o = l().cloneElement(g, g.props, m)), (i = u);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[u],
                                    _ = c.props.children,
                                    m = it(e, _, e.length - 1, a, r, s),
                                    g = m[0],
                                    E = m[1];
                                if (!(g < 0)) {
                                    const e = _.slice(0, g);
                                    (o = l().cloneElement(c, c.props, e, E)), (i = u);
                                    break;
                                }
                                r -= d.length;
                            }
                        }
                        return [i, o];
                    },
                    lt = (e, t, n, a = '...') => {
                        const r = [...t],
                            s = e.current;
                        if (!s) return [r, !1];
                        const i = n.height,
                            l = n.width,
                            o = s.lastElementChild;
                        if (!at(o, i) && rt(o, l) <= 0) return [r, !1];
                        const u = s.children,
                            c = ((e, t) => {
                                let n = 0,
                                    a = e.length - 1;
                                for (; a - n >= 0; ) {
                                    const r = n + Math.ceil(0.5 * (a - n));
                                    at(e[r], t) ? (a = r - 1) : (n = r + 1);
                                }
                                return n - 1;
                            })(u, i);
                        if (c < 0) return [r, !1];
                        const d = it(u, r, c, l, a.length, a),
                            _ = d[0],
                            m = d[1];
                        return m && (r.splice(_, 1, m), r.splice(_ + 1)), [r, !0];
                    },
                    ot = l().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: s = !1,
                            customTooltipArgs: o,
                            targetId: u,
                            justifyContent: c = Oe.FlexStart,
                            alignContent: _ = Oe.FlexStart,
                            truncateIdentify: m = '...',
                        }) => {
                            const g = (0, i.useRef)(null),
                                E = (0, i.useRef)({ height: 0, width: 0 }),
                                b = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                p = b[0],
                                h = b[1],
                                f = (0, i.useMemo)(() => nt(e, a, { justifyContent: c }), [a, c, e]),
                                v = (0, i.useMemo)(() => {
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
                                A = (0, i.useCallback)(
                                    (e) => {
                                        (E.current.width = e.contentRect.width),
                                            (E.current.height = e.contentRect.height);
                                        const t = lt(g, f, E.current, m),
                                            a = t[0],
                                            r = t[1];
                                        h({ elementList: a, isTruncated: r, isTruncateFinished: !0 }), n && n(r);
                                    },
                                    [n, m, f],
                                ),
                                w = (0, i.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, i.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, i.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new Le.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(g, A, s),
                                l().createElement(
                                    'div',
                                    {
                                        className: d()(
                                            Ne.base,
                                            t,
                                            Ne.base__zeroPadding,
                                            s && Ne.base__isTruncationAvailable,
                                        ),
                                        style: w,
                                    },
                                    l().createElement('div', { className: Ne.unTruncated, ref: g }, f),
                                    l().createElement(
                                        xe.l,
                                        {
                                            tooltipArgs: v,
                                            className: d()(
                                                Ne.tooltip,
                                                Ne[`tooltip__justify-${c}`],
                                                Ne[`tooltip__align-${_}`],
                                            ),
                                        },
                                        l().createElement(
                                            'div',
                                            {
                                                className: d()(
                                                    Ne.truncated,
                                                    !p.isTruncateFinished && s && Ne.truncated__hide,
                                                ),
                                                style: w,
                                            },
                                            p.isTruncateFinished && s ? p.elementList : f,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let ut;
                !(function (e) {
                    (e[(e.none = 0)] = 'none'),
                        (e[(e.increase = 1)] = 'increase'),
                        (e[(e.decrease = 2)] = 'decrease'),
                        (e[(e.mixed = 3)] = 'mixed');
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
                            s = (0, z.useSpring)({
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
                            l().createElement(z.animated.div, { className: d()(_t, mt), style: s }),
                        );
                    }),
                    bt = 'Indicator_base_b9',
                    pt = 'Indicator_progress_ce',
                    ht = 'Indicator_progressMarker_b4',
                    ft = 'Indicator_indicator_bc',
                    vt = 'Indicator_indicator__start_80',
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
                        isUseAnim: s,
                    }) {
                        const i = a === e ? 2 : (a / t) * 254,
                            o = (n / t) * 254,
                            u = (r / t) * 254,
                            c = r > 0,
                            _ = { config: { duration: kt }, immediate: !s },
                            m = (0, z.useSpring)(Object.assign({ from: { left: 2 }, to: { left: i }, delay: kt }, _)),
                            g = (0, z.useSpring)(Object.assign({ from: { width: e }, to: { width: o }, delay: kt }, _));
                        return l().createElement(
                            'div',
                            { className: bt },
                            l().createElement(
                                'div',
                                { className: pt },
                                l().createElement('div', { className: d()(ft, vt) }),
                                l().createElement(z.animated.div, { className: Ct, style: g }),
                                l().createElement(
                                    'div',
                                    { className: ht },
                                    l().createElement(
                                        z.animated.div,
                                        { className: wt, style: m },
                                        l().createElement(Et, {
                                            isPositive: c,
                                            width: u,
                                            shift: o - u - i,
                                            isUseAnim: s,
                                        }),
                                    ),
                                ),
                                l().createElement('div', { className: d()(ft, At) }),
                            ),
                        );
                    });
                let Dt;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Increase = 'increase'),
                        (e.Decrease = 'decrease'),
                        (e.Situational = 'situational');
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
                        localizedName: s,
                    }) {
                        const o = (0, z.useSpring)(() => ({ from: { opacity: 0 } })),
                            u = o[0],
                            c = o[1],
                            _ = r !== Dt.None;
                        return (
                            (0, i.useEffect)(() => {
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
                                        s || R.strings.menu.tank_params.$dyn(e),
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
                    xt = 'Group_base_66',
                    Lt = 'Group_group_07',
                    Nt = 'Group_hoverBg_97',
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
                function Zt() {
                    return (
                        (Zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Zt.apply(this, arguments)
                    );
                }
                const Vt = (0, C.Pi)(
                        ({
                            id: e,
                            isOpen: t,
                            params: n,
                            extraParams: a,
                            tooltipID: r,
                            indicator: s,
                            value: i,
                            additionalValue: o,
                            buffIconType: u,
                            isEnabled: c,
                            isScrollable: m,
                            isSituational: g,
                        }) => {
                            const E = N().controls,
                                b = a && a.length > 0;
                            return l().createElement(
                                'div',
                                { className: xt },
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
                                            className: Lt,
                                            onClick: () => E.onGroupClick(e),
                                            onMouseEnter: _.$.playHighlight,
                                        },
                                        l().createElement('div', { className: d()(Nt, m && It) }),
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
                                                g && l().createElement('div', { className: zt }),
                                                l().createElement(dt, { buffIconType: u, className: $t }),
                                                o && l().createElement(ot, { classMix: d()(Gt, Ut), text: o }),
                                                l().createElement(ot, { classMix: Gt, text: i }),
                                            ),
                                        ),
                                        l().createElement(yt, s),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    { className: d()(Pt, t && Ht) },
                                    Se.UI(n, (e) => l().createElement(Bt, Zt({ key: e.id }, e))),
                                    b && l().createElement('div', { className: Wt }),
                                    Se.UI(a, (e) => l().createElement(Bt, Zt({ key: e.id }, e))),
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
                    Xt = (0, C.Pi)(({ showBackground: e = !0, className: t }) => {
                        const n = N().model,
                            a = (0, i.useState)(!1),
                            r = a[0],
                            s = a[1],
                            o = n.groups.get(),
                            u = ue(Kt);
                        return (
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    const e = u.getContainerSize(),
                                        t = u.getWrapperSize();
                                    e && t && s(e > t);
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
                                            l().createElement(Vt, Yt({ key: e.id }, e, { isScrollable: r })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Qt = (0, i.memo)(function (e) {
                        const t = (0, i.useMemo)(() => ({ rootId: e.resId }), [e.resId]);
                        return l().createElement(L, { options: t }, l().createElement(Xt, e));
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
                !(function (e) {
                    (e.extraSmall = 'extraSmall'), (e.medium = 'medium'), (e.big = 'big');
                })(nn || (nn = {})),
                    (function (e) {
                        (e.colored = 'colored'),
                            (e.white = 'white'),
                            (e.whiteSpanish = 'whiteSpanish'),
                            (e.whiteOrange = 'whiteOrange');
                    })(an || (an = {}));
                const rn = ({
                        isElite: e,
                        vehicleName: t,
                        vehicleShortName: n,
                        vehicleType: a,
                        vehicleLvl: r,
                        tags: s = '',
                        size: i = nn.extraSmall,
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
                                    tn[`base__size${(0, Ie.e)(i)}`],
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
                                    e && tn[`type__elite${(0, Ie.e)(i)}`],
                                    tn[`type__${i}`],
                                    null == c ? void 0 : c.typeIcon,
                                ),
                                style: a ? { backgroundImage: `url(${g})` } : void 0,
                            }),
                            en(s, 'premiumIGR') && l().createElement('div', { className: tn.premiumIGR }),
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
                    _n = ['className', 'children', 'isPerkTipShown', 'tipText'];
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
                        n = e.children,
                        a = e.isPerkTipShown,
                        r = e.tipText,
                        s = void 0 === r ? R.strings.crew.vehicleParamsDecorator.perkTip() : r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, _n);
                    return l().createElement(
                        'div',
                        { className: d()(sn, t) },
                        l().createElement(
                            rn,
                            mn({ className: ln, classNames: { name: on, level: un, typeIcon: cn } }, i, {
                                isShortName: !0,
                            }),
                        ),
                        n,
                        a && l().createElement('div', { className: dn }, s),
                    );
                };
                var En = n(4598),
                    bn = n(9174),
                    pn = n(3946);
                const hn = [
                        R.strings.crew_perks.sorting.fallback(),
                        R.strings.crew_perks.sorting.common(),
                        R.strings.crew_perks.sorting.legendary(),
                    ],
                    fn = (0, y.q3)()(
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
                                        if (t < w.cJ.Medium) return [[...n, ...a, ...r]];
                                        const s = [];
                                        return (
                                            n.length > 0 && s.push(n),
                                            a.length > 0 && s.push(a),
                                            r.length > 0 && s.push(r),
                                            s
                                        );
                                    },
                                    { equals: En.jv },
                                ),
                                r = (0, pn.Om)(() => Se.UI(n.get(), (e) => Object.assign({}, e))),
                                s = (0, pn.Om)(() =>
                                    r().map((e) => ({ id: e.mType, label: hn[e.mType], isDisabled: !e.isEnabled })),
                                ),
                                i = (0, pn.Om)(() => {
                                    const e = r().find((e) => e.isSelected);
                                    return null == e ? void 0 : e.mType;
                                }),
                                l = (0, pn.Om)(() => r().every((e) => !e.isEnabled)),
                                o = (0, pn.Om)(() => r().find((e) => !e.isEnabled));
                            return Object.assign({}, t, {
                                computes: {
                                    getSortingOptions: r,
                                    getSortingDropDownItems: s,
                                    getCurrentSorting: i,
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
                    vn = fn[0],
                    An = fn[1];
                var wn = n(3457);
                const Cn = 'Footer_base_8f',
                    kn = 'Footer_bonusDescription_89',
                    yn = 'Footer_bonusDescriptionIcon_c6',
                    Dn = 'Footer_bonusDescriptionText_ae',
                    Fn = 'Footer_buttonsContainer_fb',
                    Sn = 'Footer_buttonsContainer__visible_f1',
                    Bn = 'Footer_btn_bb',
                    xn = (0, C.Pi)(({ className: e }) => {
                        const t = An(),
                            n = t.model,
                            a = t.controls,
                            r = (0, w.GS)().mediaSize;
                        return l().createElement(
                            'div',
                            { className: d()(Cn, e) },
                            !n.isMajorQualification.get() &&
                                r >= w.cJ.Medium &&
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
                let Ln, Nn;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(Ln || (Ln = {})),
                    (function (e) {
                        (e.ExtraSmall = 'extraSmall'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(Nn || (Nn = {}));
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
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, On);
                        const s = (0, i.useRef)(null),
                            o = (0, i.useState)(!0),
                            u = o[0],
                            c = o[1];
                        return (
                            (0, i.useEffect)(() =>
                                I(() => {
                                    const e = s.current;
                                    e && e.offsetWidth >= e.scrollWidth && c(!1);
                                }),
                            ),
                            l().createElement(
                                In.i,
                                { isEnabled: u, body: t },
                                l().createElement('div', Rn({}, r, { ref: s, className: d()(Tn, a, n) }), t),
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
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(Hn || (Hn = {}));
                const Wn = (0, i.memo)(
                    ({
                        parentId: e,
                        variant: t = Ln.Basic,
                        size: n = Nn.Medium,
                        isOpen: a,
                        placeholder: r = R.strings.common.dropdown.placeholder.select(),
                        label: s = '',
                        classMix: o,
                        onClick: u,
                        soundHover: c,
                        soundClick: m,
                        customControl: g,
                    }) => {
                        const E = (0, i.useState)(Hn.Out),
                            b = E[0],
                            p = E[1],
                            h = (0, i.useState)(!1),
                            f = h[0],
                            v = h[1],
                            A = t === Ln.Disabled,
                            w = A || t === Ln.Basic,
                            C = (0, i.useCallback)(() => {
                                A || (p(Hn.Over), c && (0, _.G)(c));
                            }, [A, c]),
                            k = (0, i.useCallback)(() => p(Hn.Out), []);
                        return (
                            (0, i.useEffect)(() => {
                                w || v(!1);
                            }, [t, w]),
                            (0, i.useEffect)(() => {
                                A && k();
                            }, [A, k]),
                            l().createElement(
                                'div',
                                {
                                    id: e ? `${e}_control` : void 0,
                                    className: d()(
                                        Pn.base,
                                        a && Pn.base__open,
                                        Pn[`base__${b}`],
                                        (w || !f) && Pn[`base__${t}`],
                                        o,
                                    ),
                                    onMouseEnter: C,
                                    onMouseUp: () => {
                                        !A && p(Hn.Over), !w && v(!0);
                                    },
                                    onMouseDown: () => {
                                        A || (p(Hn.Down), m && (0, _.G)(m));
                                    },
                                    onMouseLeave: k,
                                    onClick: u,
                                },
                                l().createElement('div', { className: Pn.stateHighlight }),
                                !f && t === Ln.Alert && l().createElement('div', { className: Pn.alert }),
                                l().createElement(
                                    'div',
                                    { className: d()(Pn.label, Pn[`label__${n}`], !s && Pn.label__placeholder) },
                                    g || l().createElement(Mn, { content: s || r }),
                                ),
                                l().createElement(
                                    'div',
                                    { className: d()(Pn.button, Pn[`button__${n}`]) },
                                    l().createElement('div', { className: d()(Pn.arrow, Pn[`arrow__${n}`]) }),
                                    l().createElement('div', { className: Pn.gradient }),
                                    A && l().createElement('div', { className: Pn.disabled }),
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
                        containerClasses: s,
                    }) => {
                        const o = (0, i.useState)(!1),
                            u = o[0],
                            c = o[1],
                            _ = (0, i.useState)(!1),
                            m = _[0],
                            g = _[1],
                            E = (0, i.useRef)(null),
                            b = (0, i.useRef)(null),
                            p = ue(),
                            h = M(() => {
                                c(!0);
                            }),
                            f = (0, i.useCallback)(() => {
                                c(!1);
                            }, []),
                            v = (0, i.useCallback)(() => {
                                const e = b.current,
                                    t = E.current;
                                if (e && p && t) {
                                    const n = e.offsetTop + 0.5 * (e.offsetHeight - t.offsetHeight);
                                    r && p.events.on('rest', h), p.applyScroll(n);
                                }
                            }, [h, p, r]);
                        (0, i.useEffect)(
                            () => () => {
                                p.events.off('rest', h);
                            },
                            [h, p.events, r],
                        ),
                            (0, i.useEffect)(() => {
                                if (t && null !== n) return I(v);
                            }, [a, v, n, t]),
                            (0, i.useEffect)(() => {
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
                            }, [m, p]);
                        const A = {
                                scrollContainerRef: E,
                                selectedItemRef: b,
                                selectedItemId: n,
                                isScrollComplete: u,
                                scrollbarActive: m,
                                onScrollAnimationComplete: f,
                            },
                            w = (0, i.cloneElement)(e, A);
                        return l().createElement(
                            'div',
                            { className: d()(zn, s), ref: E },
                            l().createElement(Fe.Vertical.Area, { api: p, key: a, classNames: Gn }, w),
                            l().createElement(Fe.Vertical.Bar, { api: p, classNames: $n }),
                        );
                    },
                    Zn = {
                        base: 'DropDownItem_base_5e',
                        base__extraSmall: 'DropDownItem_base__extraSmall_5a',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    Vn = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const qn = (0, i.memo)((e) => {
                        let t = e.size,
                            n = e.classMix,
                            a = e.onClick,
                            r = e.itemRenderer,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Vn);
                        const o = s.id,
                            u = s.isSelected,
                            c = s.isDisabled,
                            m = s.label,
                            g = s.soundHover,
                            E = s.soundClick,
                            b = (0, i.useCallback)(
                                (e) => {
                                    c || (a && a(e, o));
                                },
                                [o, c, a],
                            ),
                            p = (0, i.useCallback)(() => {
                                c || (g && (0, _.G)(g));
                            }, [c, g]),
                            h = (0, i.useCallback)(() => {
                                c || (E && (0, _.G)(E));
                            }, [c, E]),
                            f = d()(Zn.base, t && Zn[`base__${t}`], u && Zn.base__selected, c && Zn.base__disabled, n);
                        return l().createElement(
                            'div',
                            { className: f, onMouseEnter: p, onMouseDown: h, onClick: b },
                            r ? r(s) : m,
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
                const Xn = ({
                        size: e,
                        items: t,
                        selectedIds: n,
                        selectedItemId: a,
                        selectedItemRef: r,
                        onClick: s,
                        parentId: i,
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
                                const d = `${i}_${t.id}`;
                                return l().createElement(
                                    'div',
                                    { id: i ? d : void 0, key: d, ref: t.id === a ? r : null },
                                    l().createElement(
                                        qn,
                                        Kn({ size: e, soundHover: o, soundClick: u, classMix: c, itemRenderer: _ }, t, {
                                            onClick: s,
                                            isSelected: n.includes(t.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    Qn = {
                        base: 'DropDownList_base_62',
                        base__extraSmall: 'DropDownList_base__extraSmall_60',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    Jn = ({
                        parentId: e,
                        size: t = Nn.Medium,
                        items: n,
                        selectedIds: a,
                        isOpen: r,
                        autoScroll: s,
                        classMix: o,
                        itemClassMix: u,
                        itemRenderer: c,
                        onClick: _,
                        soundHover: m,
                        soundClick: g,
                    }) => {
                        const E = (0, i.useState)(null),
                            b = E[0],
                            p = E[1],
                            h = (0, jn.D9)(r);
                        (0, i.useEffect)(() => {
                            if (r && !h) {
                                const e = ((e, t) => {
                                    if (!t.length) return null;
                                    const n = e.find((e) => t.includes(e.id));
                                    return n ? n.id : null;
                                })(n, a);
                                null !== e && p(e);
                            }
                            r || p(null);
                        }, [r, n, a, h]);
                        const f = e ? `${e}_list` : void 0;
                        return l().createElement(
                            'div',
                            { id: f, className: d()(Qn.base, Qn[`base__${t}`], o) },
                            l().createElement(
                                Un,
                                { selectedItemId: b, isEnabled: s },
                                l().createElement(Xn, {
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
                    ta = (0, i.memo)(
                        ({
                            componentId: e,
                            containerRef: t,
                            items: n,
                            selected: a = [],
                            variant: r = Ln.Basic,
                            size: s = Nn.Medium,
                            multiple: o = !1,
                            autoScroll: u = !0,
                            placeholder: c,
                            classMix: _,
                            className: m,
                            controlRenderer: g,
                            itemRenderer: E,
                            open: b,
                            tooltipArgs: p,
                            onChanges: v,
                            onOpen: w,
                            onClose: C,
                            onClick: k,
                            onClickOutside: y,
                            onMouseEnter: D,
                            onMouseDown: F,
                            onMouseUp: S,
                            onMouseLeave: B,
                            soundHover: x = 'highlight',
                            soundClick: L = 'play',
                            soundItemHover: N,
                            soundItemClick: T,
                        }) => {
                            const O = (0, i.useRef)(null),
                                R = (0, i.useRef)(null),
                                P = (0, i.useRef)({ open: !1, listAbove: !1 }),
                                H = (0, i.useState)(!1),
                                W = H[0],
                                j = H[1],
                                z = (0, i.useState)(!1),
                                $ = z[0],
                                G = z[1],
                                U = ((e, t) => {
                                    const n = Array.isArray(e) ? e : [e];
                                    return !t && n.length > 1 ? n.slice(0, 1) : n;
                                })(a, o),
                                Z = r !== Ln.Disabled,
                                V = void 0 === b,
                                q = Boolean(V ? W : b),
                                Y = M(() => {
                                    P.current.open && ((P.current.open = !1), j(!1), null == C || C());
                                });
                            A(q ? h.n.ESCAPE : h.n.NONE, Y, q);
                            const K = M(() => {
                                null == y || y(), V && (j(!1), (P.current.open = !1), null == C || C());
                            });
                            (0, i.useEffect)(() => {
                                const e = O.current;
                                if (e && q)
                                    return (
                                        f.c1.register(e, K),
                                        () => {
                                            f.c1.unregister(e, K);
                                        }
                                    );
                            }, [q, K]),
                                (0, i.useEffect)(() => {
                                    void 0 !== b && (P.current.open = b);
                                }, [b]);
                            const X = (0, i.useCallback)(() => {
                                if (!O.current || !R.current) return;
                                const e = t && t.current,
                                    n = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    a =
                                        O.current.getBoundingClientRect().bottom +
                                            R.current.getBoundingClientRect().height >
                                        n;
                                a !== P.current.listAbove && ((P.current.listAbove = a), G(a));
                            }, [t]);
                            (0, i.useEffect)(() => I(() => I(X)), [X, s, n.length]);
                            const Q = (0, i.useCallback)(
                                    (e) => {
                                        const t = U.findIndex((t) => t === e) > -1;
                                        let n = [];
                                        (n = o ? (t ? U.filter((t) => t !== e) : [e, ...U]) : t ? [] : [e]),
                                            null == v || v(n);
                                    },
                                    [o, v, U],
                                ),
                                J = (0, i.useCallback)(() => {
                                    V &&
                                        ((P.current.open = !P.current.open),
                                        j(P.current.open),
                                        P.current.open ? null == w || w() : null == C || C());
                                }, [V, w, C]),
                                ee = (0, i.useCallback)(
                                    (e) => {
                                        Z && J(), null == k || k(e);
                                    },
                                    [Z, k, J],
                                ),
                                te = (0, i.useCallback)(
                                    (e, t) => {
                                        null == k || k(e, t), Q(t), o || J();
                                    },
                                    [k, o, J, Q],
                                ),
                                ne = (0, i.useMemo)(
                                    () =>
                                        n
                                            .filter((e) => U.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [n, U],
                                ),
                                ae = (0, i.useMemo)(() => n.filter((e) => U.includes(e.id)), [n, U]),
                                re = g ? g(ae) : void 0;
                            return l().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: O,
                                    className: d()(ea.base, ea[`base__${s}`], m, null == _ ? void 0 : _.base),
                                    onMouseEnter: D,
                                    onMouseUp: S,
                                    onMouseDown: F,
                                    onMouseLeave: B,
                                },
                                l().createElement(
                                    'div',
                                    { className: d()(ea.control, q && ea.control__down) },
                                    l().createElement(
                                        xe.l,
                                        { tooltipArgs: p },
                                        l().createElement(Wn, {
                                            parentId: e,
                                            size: s,
                                            variant: r,
                                            isOpen: q,
                                            placeholder: c,
                                            label: ne,
                                            classMix: _ && _.control,
                                            onClick: ee,
                                            soundHover: x,
                                            soundClick: L,
                                            customControl: re,
                                        }),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    {
                                        ref: R,
                                        className: d()(
                                            ea.list,
                                            q ? ea.list__down : ea.list__up,
                                            $ ? ea.list__above : ea.list__under,
                                        ),
                                    },
                                    l().createElement(Jn, {
                                        parentId: e,
                                        size: s,
                                        items: n,
                                        selectedIds: U,
                                        isOpen: q,
                                        autoScroll: u,
                                        classMix: _ && _.list,
                                        itemClassMix: _ && _.item,
                                        itemRenderer: E,
                                        onClick: te,
                                        soundHover: N || x,
                                        soundClick: T || L,
                                    }),
                                ),
                            );
                        },
                    );
                var na = n(2056),
                    aa = n(771),
                    ra = n(8018);
                const sa = {
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
                let ia;
                !(function (e) {
                    (e.small = 'small'),
                        (e.c14x14 = 'c_14x14'),
                        (e.c18x18 = 'c_18x18'),
                        (e.c24x24 = 'c_24x24'),
                        (e.c24x24_new = 'c_24x24_new'),
                        (e.c30x30 = 'c_30x30'),
                        (e.c40x40 = 'c_40x40'),
                        (e.c30x30_red = 'c_30x30_red'),
                        (e.medium = 'medium'),
                        (e.white = 'white'),
                        (e.big = 'big');
                })(ia || (ia = {}));
                const la = l().memo(function ({ role: e, size: t = ia.c30x30, className: n }) {
                        const a = (0, i.useMemo)(() => {
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
                        return l().createElement('div', { style: a, className: d()(sa.base, sa[`base__${t}`], n) });
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
                        const r = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.crew.sortingDropdown.dropdownItems.$dyn(`c_${e}`)})`,
                                }),
                                [e],
                            ),
                            s = d()(oa, a && ua, n && ca);
                        return l().createElement(
                            'div',
                            { className: s },
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
                    (e.AllSkillsLearned = 'allSkillsLearned'), (e.Available = 'available'), (e.Disabled = 'disabled');
                })(ba || (ba = {}));
                const pa = (0, C.Pi)(() => {
                    const e = An(),
                        t = e.model,
                        n = e.controls,
                        a = t.role.get(),
                        r = t.areAllSkillsLearned.get(),
                        s = t.availableSkillsAmount.get(),
                        o = s > 0,
                        u = t.skillsEfficiency.get(),
                        c = ((e, t) => (e ? ba.AllSkillsLearned : t === aa.sU ? ba.Disabled : ba.Available))(r, u),
                        _ = (0, ra.Y4)(u) === ra.H$.Untrained,
                        m = (0, w.GS)().mediaSize,
                        g = 0 === t.computes.getSortingDropDownItems().length,
                        E = t.computes.getDisabledSorting(),
                        b = n.onSortingSelectionChange,
                        p = t.showSortingSelectionWarning.get(),
                        h = {
                            contentId: R.views.lobby.crew.tooltips.SortingDropdownTooltip('resId'),
                            args: { isWarningShown: p, isSortingDisabled: E },
                        },
                        f = (0, i.useCallback)(
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
                                    size: m < w.cJ.Medium ? ia.c24x24 : ia.c30x30,
                                    className: m >= w.cJ.Medium ? Ea.roleIcon : void 0,
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
                                                l().createElement('div', { className: Ea.count }, s),
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
                                    { id: 'crew_assist_drop_down_hint' },
                                    l().createElement(ta, {
                                        items: t.computes.getSortingDropDownItems(),
                                        selected: t.computes.getCurrentSorting(),
                                        variant: E ? Ln.Disabled : p ? Ln.Alert : Ln.Basic,
                                        onChanges: f,
                                        size: Nn.Small,
                                        controlRenderer: ma,
                                        itemRenderer: ga,
                                        className: Ea.dropdown_list,
                                        tooltipArgs: h,
                                    }),
                                ),
                            ),
                    );
                });
                let ha;
                !(function (e) {
                    (e[(e.Default = 0)] = 'Default'),
                        (e[(e.Common = 1)] = 'Common'),
                        (e[(e.Legendary = 2)] = 'Legendary');
                })(ha || (ha = {}));
                const fa = 'ScrollWithLips_base_a2',
                    va = 'ScrollWithLips_bar_67',
                    Aa = 'ScrollWithLips_content_6d',
                    wa = 'ScrollWithLips_fadeContainerTop_6d',
                    Ca = 'ScrollWithLips_fadeContainerBottom_43',
                    ka = 'ScrollWithLips_fade_5e';
                let ya;
                !(function (e) {
                    (e.None = 'none'), (e.Top = 'top'), (e.Both = 'both'), (e.Bottom = 'bottom');
                })(ya || (ya = {}));
                const Da = ({ children: e, className: t, classNames: n }) => {
                    const a = (0, i.useState)(ya.None),
                        r = a[0],
                        s = a[1],
                        o = r === ya.Both,
                        u = ue();
                    return (
                        (0, i.useEffect)(() => {
                            const e = () => {
                                const e = u.getBounds()[1],
                                    t = u.animationScroll.scrollPosition.get();
                                0 === e
                                    ? s(ya.None)
                                    : t > 1 && t < e - 21
                                      ? s(ya.Both)
                                      : t <= 1
                                        ? s(ya.Bottom)
                                        : t >= e - 21 && s(ya.Top);
                            };
                            return (
                                u.events.on('change', e),
                                u.events.on('resizeHandled', e),
                                u.events.on('recalculateContent', e),
                                () => {
                                    u.events.off('change', e),
                                        u.events.off('resizeHandled', e),
                                        u.events.off('recalculateContent', e);
                                }
                            );
                        }, [u]),
                        l().createElement(
                            'div',
                            { className: d()(fa, t) },
                            l().createElement(
                                Fe.Vertical.Default,
                                {
                                    api: u,
                                    barClassNames: { base: d()(va, null == n ? void 0 : n.bar) },
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
                    xa = 'ListCardAlert_glow_1c',
                    La = 'ListCardAlert_icon_d2',
                    Na = ({ className: e, tooltipArgs: t }) =>
                        l().createElement(
                            'div',
                            { className: d()(Ba, e) },
                            l().createElement('div', { className: xa }),
                            t
                                ? l().createElement(In.i, t, l().createElement('div', { className: La }))
                                : l().createElement('div', { className: La }),
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
                    $a = (0, i.memo)(({ level: e, isSelected: t, isLearned: n, hasLowEfficiency: a, isDisabled: r }) =>
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
                    Za = 'SkillCard_container_11',
                    Va = 'SkillCard_icon_a1',
                    qa = 'SkillCard_description_26',
                    Ya = 'SkillCard_popularityList_38',
                    Ka = 'SkillCard_content_76',
                    Xa = 'SkillCard_base__disabled_af',
                    Qa = 'SkillCard_popularityItem_23',
                    Ja = 'SkillCard_popularityItem_image_0d',
                    er = 'SkillCard_name_c8',
                    tr = 'SkillCard_zeroSign_a1',
                    nr = 'SkillCard_directiveSign_cd',
                    ar = 'SkillCard_boosterSign_30',
                    rr = 'SkillCard_level_91',
                    sr = 'SkillCard_level__selectedFull_ff',
                    ir = 'SkillCard_level__selectedNotFul_87',
                    lr = 'SkillCard_level__inProgress_97',
                    or = 'SkillCard_base__untrained_eb',
                    ur = 'SkillCard_base__lowEfficiency_f0',
                    cr = 'SkillCard_level__fullyLearned_a1',
                    dr = 'SkillCard_warning_9c',
                    _r = [
                        R.images.gui.maps.icons.crew.sortingDropdown.common_icon(),
                        R.images.gui.maps.icons.crew.sortingDropdown.legendary_icon(),
                    ],
                    mr = (0, ra.Ds)();
                let gr = !1;
                const Er = (0, C.Pi)(
                        ({
                            name: e,
                            iconName: t,
                            userName: n,
                            description: a,
                            isSelected: r,
                            level: s,
                            isZero: o,
                            isIrrelevant: u,
                            hasAvailableSkills: c,
                            isLearned: _,
                            skillsEfficiency: m,
                            battleBooster: g,
                            isExtraLarge: E,
                            componentKey: b,
                            popularityList: h,
                        }) => {
                            const v = (0, i.useRef)(null),
                                A = An(),
                                C = A.model,
                                k = A.controls,
                                y = (0, w.GS)().mediaWidth === w.fd.ExtraSmall,
                                D = (0, i.useMemo)(
                                    () =>
                                        ((e, t) => ({
                                            toString: () => {
                                                if (!e.current) return '';
                                                const n = p.O.view.getSize('rem'),
                                                    a = p.O.view.getViewGlobalPosition(),
                                                    r = e.current.getBoundingClientRect(),
                                                    s = p.O.view.pxToRem(r.x) + a.x,
                                                    i = p.O.view.pxToRem(r.width),
                                                    l = s > n.width / 2 || t ? -370 : i - 30;
                                                return Math.round(s + l).toString();
                                            },
                                        }))(v, y),
                                    [y],
                                ),
                                F = g !== Fa.S.None,
                                S = s === aa.I,
                                B = !o && (r || _),
                                x = (0, ra.Y4)(m),
                                L = x === ra.H$.Low,
                                N = x === ra.H$.Untrained,
                                I = u || (N && !(_ && F)),
                                T = (c || r) && !_ && !I,
                                O = C.computes.getFirstDisabledSortingOption();
                            return l().createElement(
                                Be.t,
                                {
                                    args: { skillName: e, tooltipId: Sa._K, componentKey: b, positionX: D },
                                    ignoreMouseClick: !0,
                                },
                                l().createElement(
                                    'div',
                                    {
                                        className: d()(Ga, T && Ua, I && Xa, L && ur, or),
                                        onClick: () => {
                                            T && (p.O.sound.play.click(), k.clickOnSkill(e));
                                        },
                                        onMouseEnter: () => {
                                            I ||
                                                (p.O.sound.play.highlight(),
                                                mr(() => {
                                                    (gr = !0), k.hoverSkill(e);
                                                }, 300));
                                        },
                                        onMouseLeave: () => {
                                            I || (mr.cancel(), gr && (k.outSkill(e), (gr = !1)));
                                        },
                                        ref: v,
                                    },
                                    l().createElement($a, {
                                        level: s,
                                        isSelected: r,
                                        isLearned: _,
                                        isDisabled: I,
                                        hasLowEfficiency: L,
                                    }),
                                    l().createElement(
                                        'div',
                                        { className: Ka },
                                        l().createElement(Ia.y, {
                                            iconName: t,
                                            size: E ? Ia.F.c120x90 : Ia.F.c80x80,
                                            className: Va,
                                        }),
                                        l().createElement(
                                            'div',
                                            { className: Za },
                                            l().createElement('div', { className: er }, n),
                                            l().createElement(ot, { classMix: qa, text: a, isTruncationAvailable: !0 }),
                                        ),
                                    ),
                                    h &&
                                        l().createElement(
                                            'div',
                                            { className: Ya },
                                            h
                                                .map((e, t) => ({ value: e, index: t }))
                                                .filter(({ value: e }) => e > 0 || !O)
                                                .map(({ value: e, index: t }) =>
                                                    l().createElement(
                                                        'div',
                                                        { key: t, className: Qa },
                                                        l().createElement('img', {
                                                            className: Ja,
                                                            src: _r[t],
                                                            alt: '',
                                                        }),
                                                        (0, Ie.dL)(f.Z5.getRealFormat(e, f.Gr.WO_ZERO_DIGITS)),
                                                    ),
                                                ),
                                        ),
                                    o && l().createElement('div', { className: tr }),
                                    !u &&
                                        F &&
                                        _ &&
                                        l().createElement('div', { className: g === Fa.S.Improved ? ar : nr }),
                                    B &&
                                        l().createElement(
                                            'div',
                                            { className: d()(rr, _ && (S ? cr : lr), r && (S ? sr : ir)) },
                                            (0, Ie.uF)(R.strings.common.percentValue(), { value: s }),
                                        ),
                                    u && !N && l().createElement(Na, { className: dr }),
                                ),
                            );
                        },
                    ),
                    br = 'SkillsGroup_base_58',
                    pr = 'SkillsGroup_skillCard_b6',
                    hr = ['list', 'delayOffset'];
                function fr() {
                    return (
                        (fr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        fr.apply(this, arguments)
                    );
                }
                const vr = (0, C.Pi)((e) => {
                        let t = e.list,
                            n = e.delayOffset,
                            a = void 0 === n ? 0 : n,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, hr);
                        const s = An().model,
                            o = s.computes.getCurrentSorting(),
                            u = s.isFirstRender.get(),
                            c = s.computes.getCurrentSorting() === ha.Default,
                            d = (0, i.useRef)(!1);
                        (0, i.useEffect)(() => {
                            d.current ? (d.current = !1) : (d.current = !0);
                        }, [o]);
                        const _ = d.current,
                            m = 0 !== s.computes.getSortingDropDownItems().length,
                            g = (!u && !c) || !_;
                        return l().createElement(
                            'div',
                            { className: br, key: `sorting_${o}` },
                            (0, Se.UI)(t, (e, t) =>
                                l().createElement(
                                    'div',
                                    {
                                        key: `skill_${t}_${e.name}`,
                                        className: g && m ? pr : void 0,
                                        style: { animationDelay: `${0.13 * t + a}s` },
                                    },
                                    l().createElement(Er, fr({}, e, r)),
                                ),
                            ),
                        );
                    }),
                    Ar = 'SkillsList_base_23',
                    wr = 'SkillsList_line_28',
                    Cr = 'SkillsList_scrollArea_db',
                    kr = 'SkillsList_bar_e3',
                    yr = 'SkillsList_lips_a9',
                    Dr = (0, C.Pi)(({ className: e }) => {
                        const t = An().model,
                            n = t.availableSkillsAmount.get(),
                            a = t.computes.getCurrentSorting(),
                            r = (0, w.GS)().mediaSize,
                            s = t.computes.getAllBlocks(r),
                            o = t.isFirstRender.get(),
                            u = t.role.get(),
                            c = (0, i.useRef)(!1),
                            _ = (0, bn.aD)(() => {
                                t.isFirstRender.set(!1);
                            });
                        (0, i.useEffect)(() => {
                            _();
                        }, [_]),
                            (0, i.useEffect)(() => {
                                c.current ? (c.current = !1) : (c.current = !0);
                            }, [a]);
                        const m = c.current,
                            g = t.computes.getCurrentSorting() === ha.Default,
                            E = 0 !== t.computes.getSortingOptions().length,
                            b = (!o && !g) || m;
                        return l().createElement(
                            'div',
                            { className: d()(Ar, e), key: g ? 'default' : `role_${u}_${o}` },
                            l().createElement('div', { className: wr }),
                            l().createElement(
                                Da,
                                { className: Cr, classNames: { bar: kr, lips: yr } },
                                (0, Se.UI)(s, (e, a) => {
                                    const i = {
                                        animationDelay:
                                            b && E ? 0.05 * s.slice(a).reduce((e, t) => e + t.length, 0) + 's' : '0s',
                                    };
                                    return l().createElement(
                                        l().Fragment,
                                        { key: `block_${a}` },
                                        l().createElement(vr, {
                                            list: e,
                                            skillsEfficiency: t.skillsEfficiency.get(),
                                            hasAvailableSkills: n > 0,
                                            isExtraLarge: r >= w.cJ.ExtraLarge,
                                            componentKey: t.skillsList.componentKey.get(),
                                            delayOffset: 0.2 * s.slice(0, a).reduce((e, t) => e + t.length, 0),
                                        }),
                                        a !== s.length - 1 && l().createElement('div', { className: wr, style: i }),
                                    );
                                }),
                            ),
                            l().createElement('div', { className: wr }),
                        );
                    }),
                    Fr = 'SkillsTrainingViewApp_base_f2',
                    Sr = 'SkillsTrainingViewApp_background_c4',
                    Br = 'SkillsTrainingViewApp_closeBtn_b8',
                    xr = 'SkillsTrainingViewApp_crewWidget_52',
                    Lr = 'SkillsTrainingViewApp_ttcWidget_f0',
                    Nr = 'SkillsTrainingViewApp_content_14',
                    Ir = 'SkillsTrainingViewApp_skillsList_9f',
                    Tr = 'SkillsTrainingViewApp_footer_fa';
                function Or() {
                    return (
                        (Or =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Or.apply(this, arguments)
                    );
                }
                const Rr = (0, C.Pi)(() => {
                    const e = An(),
                        t = e.model,
                        n = e.controls,
                        a = () => {
                            n.close();
                        },
                        r = (0, w.GS)().mediaWidth,
                        s = t.isTankmanInVehicle.get() && r >= w.fd.Small;
                    var i;
                    return (
                        (i = a),
                        A(h.n.ESCAPE, i),
                        l().createElement(
                            'div',
                            { className: Fr },
                            l().createElement('div', { className: Sr }),
                            l().createElement(
                                'div',
                                { className: Br },
                                l().createElement(b, {
                                    caption: R.strings.common.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: a,
                                }),
                            ),
                            l().createElement('div', { className: xr }, l().createElement(k.O, null)),
                            s &&
                                l().createElement(
                                    'div',
                                    { className: Lr },
                                    l().createElement(
                                        gn,
                                        Or({}, t.vehicleInfo.get(), { isPerkTipShown: !0 }),
                                        l().createElement(Qt, {
                                            showBackground: !1,
                                            resId: R.views.lobby.hangar.subViews.VehicleParams('resId'),
                                        }),
                                    ),
                                ),
                            l().createElement(
                                'div',
                                { className: Nr },
                                l().createElement(pa, null),
                                l().createElement(Dr, { className: Ir }),
                                l().createElement(xn, { className: Tr }),
                            ),
                        )
                    );
                });
                engine.whenReady.then(() => {
                    u().render(
                        l().createElement(s.z, null, l().createElement(vn, null, l().createElement(Rr, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2857: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => u });
                var a = n(6483),
                    r = n.n(a),
                    s = n(6373),
                    i = n(7363),
                    l = n.n(i),
                    o = n(8699);
                const u = (0, i.memo)(({ classMix: e, targetId: t }) =>
                    l().createElement(
                        s.i,
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
                    s = n(7078),
                    i = n(2603),
                    l = n(771),
                    o = n(3649),
                    u = n(9916),
                    c = n(7363),
                    d = n.n(c),
                    _ = n(130);
                let m;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Big = 'big'), (e.Large = 'large');
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
                            E = g ? { tooltipId: i.M4 } : { tooltipId: i.Br, skillEfficiency: e, tankmanID: t };
                        return d().createElement(
                            s.t,
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
                    s = n(7363),
                    i = n.n(s),
                    l = n(4458);
                let o;
                !(function (e) {
                    (e.c22x22 = 'c_22x22'),
                        (e.c24x24 = 'medium'),
                        (e.c36x36_flat = 'c_36x36_flat'),
                        (e.c52x52 = 'big'),
                        (e.c80x80 = 'c_80x80'),
                        (e.c120x90 = 'c_120x90'),
                        (e.c180x135 = 'dialogs');
                })(o || (o = {}));
                const u = i().memo(function ({ iconName: e, size: t = o.c24x24, className: n }) {
                    var a;
                    const s = null == (a = R.images.gui.maps.icons.tankmen.skills.$dyn(t)) ? void 0 : a.$dyn(e);
                    return i().createElement('div', {
                        style: null !== s ? { backgroundImage: `url(${s})` } : void 0,
                        className: r()(l.Z.base, l.Z[`base__${t}`], n),
                    });
                });
            },
            8617: (e, t, n) => {
                'use strict';
                n.d(t, { n: () => h });
                var a = n(6483),
                    r = n.n(a),
                    s = n(771),
                    i = n(9480),
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
                const h = ({
                    data: e,
                    dataToCompare: t,
                    classes: n,
                    tankmanID: a = s.y$,
                    size: l = E.Ow.c24x24,
                    collapseType: h = E.t6.None,
                    isSkillTooltipEnabled: f = !1,
                    isAcceleratedTrainingVisible: v = !1,
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
                        x = e.skillsEfficiency,
                        L = (null == t ? void 0 : t.skillsEfficiency) || x,
                        N = (0, c.Y4)(x),
                        I = void 0 !== t && t.skillsEfficiency !== x,
                        T = N !== c.H$.Normal || w || I,
                        O = null == t ? void 0 : t.majorSkills,
                        M = null == t ? void 0 : t.bonusSkills,
                        P = M || B,
                        H = i.lN(P),
                        W = C && P.length > 0,
                        j = A || void 0 !== t,
                        z = (null == O ? void 0 : O.length) === s.GT,
                        $ = (0, b.Ld)(h, P.length, T, N !== c.H$.Low && void 0 !== H && H.level < s.I),
                        G = {
                            size: l,
                            efficiencyState: N,
                            tooltipData: { targetId: k, isEnabled: f, tankmanID: a, args: y },
                        };
                    return o().createElement(
                        'div',
                        { className: r()(g.Z.base, g.Z[`base__${l}`], null == n ? void 0 : n.base) },
                        T &&
                            o().createElement(
                                d.r,
                                { blinkStyle: D, isEnabled: I && j },
                                o().createElement(u.A, {
                                    efficiencyValue: L,
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
                                                  isAcceleratedTrainingVisible: v,
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
                                      o().createElement(m.X, p({ skills: S, isAcceleratedTrainingVisible: v }, G)),
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
                    s = n(2686),
                    i = n(126),
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
                    const h = (0, c.useState)(m.yZ.Stop),
                        f = h[0],
                        v = h[1],
                        A = (0, u.V)(),
                        w =
                            p === E.Ow.c44x44
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
                        C = (0, i.q)(w),
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
                            const e = setTimeout(() => v(m.yZ.Play), 100 * (n - 1) - 100 * t);
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
                                    d().createElement(s.At, {
                                        width: w.width,
                                        height: w.height,
                                        frameCount: w.frameCount,
                                        getImageSource: C,
                                        loop: !1,
                                        state: f,
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
                    s = n(7363),
                    i = n.n(s),
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
                        d = (0, s.useState)(l.yZ.Stop),
                        _ = d[0],
                        m = d[1];
                    return (
                        (0, s.useEffect)(() => {
                            const e = () => {
                                m(l.yZ.Play);
                            };
                            return (0, u.L)(e), () => (0, u.r)(e);
                        }, []),
                        i().createElement(a.At, {
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
                const s = new Map();
                let i = null;
                const l = () => {
                        s.size
                            ? i ||
                              (i = window.setInterval(() => {
                                  for (var e, t = a(s.values()); !(e = t()).done; ) {
                                      (0, e.value)();
                                  }
                              }, 5e3))
                            : i && (clearInterval(i), (i = null));
                    },
                    o = (e) => {
                        s.set(e, e), l();
                    },
                    u = (e) => {
                        s.delete(e), l();
                    };
            },
            3413: (e, t, n) => {
                'use strict';
                n.d(t, { L: () => o, r: () => l });
                var a = n(7363),
                    r = n.n(a),
                    s = n(8147),
                    i = n(9108);
                let l;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.FadeIn = 1)] = 'FadeIn'), (e[(e.Scale = 2)] = 'Scale');
                })(l || (l = {}));
                const o = r().memo(function ({
                    size: e,
                    skillsSignature: t,
                    animationType: n,
                    className: a,
                    children: o,
                }) {
                    return n === l.Scale
                        ? r().createElement(i.Y, { isEnabled: !0, className: a }, o)
                        : n === l.FadeIn
                          ? r().createElement(s.U, { size: e, key: t, className: a }, o)
                          : r().createElement('div', { className: a }, o);
                });
            },
            5108: (e, t, n) => {
                'use strict';
                n.d(t, { r: () => i });
                var a = n(7363),
                    r = n.n(a),
                    s = n(7030);
                const i = r().memo(function ({ blinkStyle: e, isEnabled: t, children: n }) {
                    return r().createElement(s.animated.div, { style: t && e ? e : void 0 }, n);
                });
            },
            8147: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => u });
                var a = n(3112),
                    r = n(7363),
                    s = n.n(r),
                    i = n(7030),
                    l = n(7160),
                    o = n(5855);
                const u = ({ size: e, children: t, className: n }) => {
                    const r = (0, a.V)(),
                        u = e === o.Ow.c44x44 ? 48 : 26,
                        c = (0, i.useSpring)({
                            from: { opacity: 0, marginRight: -u * r },
                            to: [{ marginRight: 0 }, { opacity: 1 }],
                            config: { duration: 400, easing: l.Fs },
                            delay: 800,
                        });
                    return s().createElement(i.animated.div, { style: c, className: n }, t);
                };
            },
            7765: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => _ });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3138),
                    i = n(3649),
                    l = n(7363),
                    o = n.n(l),
                    u = n(7030),
                    c = n(7160),
                    d = n(8110);
                const _ = o().memo(function ({ size: e, level: t, withSlideOut: n = !0 }) {
                    const a = (0, u.useSpring)({ to: { val: t }, config: { duration: 150 } }),
                        l = (0, u.useSpring)(() => ({
                            from: { x: s.O.view.remToPx(-5), opacity: 0 },
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
                            a.val.to((e) => (0, i.dL)(Math.floor(e))),
                        ),
                        o().createElement(
                            u.animated.div,
                            { style: n ? Object.assign({}, l, _) : _, className: r()(d.Z.level, d.Z.level__skillBlur) },
                            a.val.to((e) => (0, i.dL)(Math.floor(e))),
                        ),
                    );
                });
            },
            9108: (e, t, n) => {
                'use strict';
                n.d(t, { Y: () => l });
                var a = n(7363),
                    r = n.n(a),
                    s = n(7030),
                    i = n(7160);
                const l = r().memo(function ({ isEnabled: e, className: t, children: n }) {
                    const l = (0, s.useSpring)(() => ({ from: { scale: 1 } })),
                        o = l[0],
                        u = l[1];
                    return (
                        (0, a.useEffect)(() => {
                            e &&
                                u.start({
                                    from: { scale: 1 },
                                    to: [{ scale: 1.2 }, { scale: 1 }],
                                    delay: 200,
                                    config: { duration: 400, easing: i.Fs },
                                });
                        }, [e, u]),
                        r().createElement(s.animated.div, { style: e ? o : void 0, className: t }, n)
                    );
                });
            },
            4055: (e, t, n) => {
                'use strict';
                n.d(t, { w: () => u });
                var a = n(3112),
                    r = n(7363),
                    s = n.n(r),
                    i = n(7030),
                    l = n(7160),
                    o = n(5855);
                const u = s().memo(function ({ size: e, className: t, children: n }) {
                    const r = e === o.Ow.c44x44 ? 48 : 26,
                        u = (0, a.V)(),
                        c = (0, i.useSpring)(
                            () => ({
                                from: { opacity: 1, marginRight: 0 },
                                to: [{ opacity: 0 }, { marginRight: -r * u }],
                                config: { duration: 400, easing: l.Fs },
                            }),
                            [u, r],
                        )[0];
                    return s().createElement(i.animated.div, { style: c, className: t }, n);
                });
            },
            4091: (e, t, n) => {
                'use strict';
                n.d(t, { s: () => f });
                var a = n(6483),
                    r = n.n(a),
                    s = n(2344),
                    i = n(9480),
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
                    h = n(4722);
                const f = ({
                    skills: e,
                    skillType: t = m.W.Major,
                    possibleSkills: n,
                    isAcceleratedTrainingVisible: a = !1,
                    collapseLayout: u = m.hj.None,
                    efficiencyState: f,
                    size: v,
                    tooltipData: A,
                    blinkStyle: w,
                    isSkillsEfficiencyLearning: C = !1,
                    isAllMajorSkillsLearned: k = !1,
                    isNewSkillAnimated: y = !1,
                    className: D,
                }) => {
                    const F = void 0 === n ? e : n,
                        S = (0, s.D9)(e),
                        B = (0, s.D9)(F),
                        x = S && i.lN(S),
                        L = i.lN(e),
                        N = (0, g.dv)(F),
                        I = i.lN(F),
                        T = n ? e.length - n.length : 0,
                        O = f !== _.H$.Low || C || (I && L && I.level !== L.level),
                        R = (0, g.Nn)(F);
                    return c().createElement(
                        'div',
                        { className: r()(h.Z.base, h.Z[`base__${v}`], h.Z[`base__collapse${(0, o.e)(u)}`], D) },
                        (0, g.oo)(e, S, F, B, (e, n, a) => {
                            const s = (0, g.mg)(e);
                            return c().createElement(b.k, {
                                key: a,
                                index: a,
                                skill: e,
                                skillState: s,
                                skillType: t,
                                previousSkill: B && i.U2(B, a),
                                skillAnimationType: n,
                                size: v,
                                skillsSignature: R,
                                efficiencyState: f,
                                tooltipData: A,
                                blinkStyle: w,
                                isNewSkillAnimated: y,
                                className: r()(
                                    h.Z.skill,
                                    h.Z[`skill__state${(0, o.e)(s)}`],
                                    e === I && h.Z.skill__last,
                                    e === N && h.Z.skill__lastLearnedSkill,
                                ),
                            });
                        }),
                        O &&
                            c().createElement(p.H, {
                                skillsAmountDiff: T,
                                size: v,
                                wasLearned: x && L && x.level !== L.level,
                                skillType: t,
                                isAllMajorSkillsLearned: k,
                                skill: L,
                                possibleSkill: I,
                                blinkStyle: w,
                                className: h.Z.level,
                            }),
                        a &&
                            c().createElement(d.L, {
                                classMix: h.Z.acceleratedTrainingIcon,
                                targetId: null == A ? void 0 : A.targetId,
                            }),
                        T > 0 &&
                            (0, l.K)(T, (e) =>
                                c().createElement(E.I, {
                                    key: e,
                                    index: e,
                                    totalAmount: T,
                                    type: t,
                                    className: h.Z.lostSkill,
                                    size: v,
                                }),
                            ),
                    );
                };
            },
            552: (e, t, n) => {
                'use strict';
                n.d(t, { X: () => f });
                var a = n(6483),
                    r = n.n(a),
                    s = n(771),
                    i = n(9480),
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
                function h() {
                    return (
                        (h =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        h.apply(this, arguments)
                    );
                }
                const f = ({
                    skills: e,
                    collapseLayout: t = _.hj.None,
                    skillType: n = _.W.Major,
                    efficiencyState: a,
                    size: o,
                    tooltipData: f,
                    className: v,
                    isAcceleratedTrainingVisible: A,
                }) => {
                    const w = i.lN(e),
                        C = (0, m.dv)(e),
                        k = a !== d.H$.Low && (null == w ? void 0 : w.level) !== s.I;
                    return u().createElement(
                        'div',
                        { className: r()(p.Z.base, p.Z[`base__${o}`], p.Z[`base__collapse${(0, l.e)(t)}`], v) },
                        i.UI(e, (e, t) => {
                            const s = (0, m.mg)(e);
                            return u().createElement(
                                b.O,
                                {
                                    key: t,
                                    skillIndex: t,
                                    name: e.name,
                                    roleName: e.roleName,
                                    customName: e.customName,
                                    level: e.level,
                                    tooltipData: f,
                                    skillType: n,
                                    className: r()(
                                        p.Z.skill,
                                        p.Z[`skill__state${(0, l.e)(s)}`],
                                        e === w && p.Z.skill__last,
                                        e === C && p.Z.skill__lastLearnedSkill,
                                    ),
                                },
                                u().createElement(g.U, h({ size: o, type: n, efficiencyState: a, skillState: s }, e)),
                            );
                        }),
                        k && w && u().createElement(E.T, { skillLevel: w.level, className: p.Z.level }),
                        A &&
                            u().createElement(c.L, {
                                classMix: p.Z.acceleratedTrainingIcon,
                                targetId: null == f ? void 0 : f.targetId,
                            }),
                    );
                };
            },
            9772: (e, t, n) => {
                'use strict';
                n.d(t, { H: () => d });
                var a = n(771),
                    r = n(7363),
                    s = n.n(r),
                    i = n(5855),
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
                        h = e > 0,
                        f = e < 0 || p > 0;
                    return !b ||
                        (b.level === a.I && 0 === p) ||
                        ((null == m ? void 0 : m.level) === a.I && n === i.W.Bonus && p > 0 && !d)
                        ? null
                        : h || (p < 0 && 0 === e)
                          ? s().createElement(o.G, { size: t, level: b.level, withSlideOut: h })
                          : s().createElement(
                                u.Y,
                                { isEnabled: Boolean(r) },
                                s().createElement(
                                    l.r,
                                    { blinkStyle: g, isEnabled: f },
                                    s().createElement(c.T, { skillLevel: b.level, isHighlighted: f, className: E }),
                                ),
                            );
                };
            },
            9561: (e, t, n) => {
                'use strict';
                n.d(t, { T: () => c });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3649),
                    i = n(7363),
                    l = n.n(i),
                    o = n(3591),
                    u = n(872);
                const c = ({ skillLevel: e, isHighlighted: t = !1, className: n }) =>
                    l().createElement(
                        'div',
                        { className: r()(u.Z.base, t && u.Z.base__highlighted, n) },
                        (0, s.dL)(e > 0 && e < 0.01 ? 0.01 : (0, o.iv)(e)),
                    );
            },
            2202: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => o });
                var a = n(3415),
                    r = n(7363),
                    s = n.n(r),
                    i = n(3591);
                const l = ['className', 'children'];
                const o = (e) => {
                    let t = e.className,
                        n = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, l);
                    return s().createElement(a.l, { tooltipArgs: (0, i.iR)(r), className: t }, n);
                };
            },
            7713: (e, t, n) => {
                'use strict';
                n.d(t, { k: () => E });
                var a = n(771),
                    r = n(7363),
                    s = n.n(r),
                    i = n(5855),
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
                        tooltipData: h,
                        skillsSignature: f,
                        blinkStyle: v,
                        isNewSkillAnimated: A = !1,
                        skillAnimationType: w = i.Qm.None,
                        className: C,
                    }) => {
                        const k = w === i.Qm.Blink || w === i.Qm.SlideOutAndBlink,
                            y = w === i.Qm.SlideOutAndBlink || w === i.Qm.SlideOut,
                            D = w === i.Qm.FadeIn,
                            F = {
                                skillIndex: e,
                                name: t.name,
                                roleName: t.roleName,
                                customName: t.customName,
                                level: t.level,
                                tooltipData: h,
                                skillType: E,
                            };
                        return A && t.name === a.jw && b === i.Ow.c24x24
                            ? s().createElement(
                                  d.O,
                                  m({}, F, { className: C }),
                                  s().createElement(l.E, { type: E, state: r }),
                              )
                            : s().createElement(
                                  s().Fragment,
                                  null,
                                  n &&
                                      y &&
                                      s().createElement(
                                          c.w,
                                          { size: b, className: C, key: n.name },
                                          s().createElement(
                                              u.r,
                                              { blinkStyle: v, isEnabled: k },
                                              s().createElement(
                                                  _.U,
                                                  m({ size: b, type: E, efficiencyState: p, skillState: r }, n),
                                              ),
                                          ),
                                      ),
                                  s().createElement(
                                      o.L,
                                      {
                                          size: b,
                                          skillsSignature: f,
                                          className: C,
                                          animationType: g(w === i.Qm.ScaleUp, D),
                                      },
                                      s().createElement(
                                          d.O,
                                          F,
                                          s().createElement(
                                              u.r,
                                              { blinkStyle: v, isEnabled: k },
                                              s().createElement(
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
                    s = n(4150),
                    i = n(771),
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
                        battleBooster: h,
                        className: f,
                    }) => {
                        const v = h !== s.S.None,
                            A = (0, m.Ot)(b, p, v, t, n),
                            w = (!v && n === d.H$.Untrained) || t,
                            C = o === i.jw;
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
                                    f,
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
                let a, r, s, i, l, o, u;
                n.d(t, { Lm: () => u, Ow: () => l, Qm: () => r, W: () => o, hj: () => s, t6: () => a, u0: () => i }),
                    (function (e) {
                        (e.None = 'none'),
                            (e.Default = 'default'),
                            (e.Overlap = 'overlap'),
                            (e.ExtraOverlap = 'extraOverlap');
                    })(a || (a = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.SlideOutAndBlink = 'slideOutAndBlink'),
                            (e.SlideOut = 'slideOut'),
                            (e.FadeIn = 'fadeIn'),
                            (e.Blink = 'blink'),
                            (e.ScaleUp = 'ScaleUp');
                    })(r || (r = {})),
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
                    })(s || (s = {})),
                    (function (e) {
                        (e.Grey = 'grey'), (e.LightYellow = 'lightYellow'), (e.Yellow = 'yellow'), (e.Red = 'red');
                    })(i || (i = {})),
                    (function (e) {
                        (e.c24x24 = 'c_24x24'), (e.c44x44 = 'c_44x44');
                    })(l || (l = {})),
                    (function (e) {
                        (e.Major = 'major'), (e.Bonus = 'bonus');
                    })(o || (o = {})),
                    (function (e) {
                        (e.Learned = 'learned'), (e.Learning = 'learning');
                    })(u || (u = {}));
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
                    iv: () => f,
                    mg: () => c,
                    oo: () => h,
                });
                var a = n(2603),
                    r = n(771),
                    s = n(9480),
                    i = n(5563),
                    l = n(8018),
                    o = n(5855);
                const u = (e) => s.UI(e, (e) => e.name).join(),
                    c = (e) => (e.level < r.I ? o.Lm.Learning : o.Lm.Learned),
                    d = (e) => s.dF(e, (e) => e.level === r.I),
                    _ = (e, t, n, a, s = l.H$.Normal) =>
                        e === r.jw
                            ? o.u0.LightYellow
                            : s === l.H$.Untrained || a
                              ? t === o.Lm.Learning
                                  ? o.u0.Yellow
                                  : o.u0.Grey
                              : s === l.H$.Low
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
                        customName: s,
                        skillType: i,
                        skillIndex: l,
                        tooltipData: u,
                    }) => {
                        const c = { targetId: u.targetId, isEnabled: u.isEnabled };
                        return e === r.jw
                            ? i === o.W.Major
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
                                              isBonus: i === o.W.Bonus,
                                              level: n,
                                              customName: s,
                                              skillIndex: l,
                                          },
                                          u.args,
                                      ),
                                  },
                                  c,
                              );
                    },
                    g = (e, t) => (e === o.Ow.c44x44 ? i.r.Large : t ? i.r.Big : i.r.Normal),
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
                        const n = s.U2(e, t);
                        return null == n ? void 0 : n.name;
                    },
                    p = (e, t) => {
                        const n = s.U2(e, t);
                        return null == n ? void 0 : n.level;
                    },
                    h = (e, t, n, a, i) => {
                        if (!a || !t) return s.UI(n, (e, t) => i(e, o.Qm.None, t));
                        const l = new Map(s.UI(t, ({ name: e, level: t }) => [e, t])),
                            u = new Map(s.UI(e, ({ name: e, level: t }) => [e, t]));
                        let c = !1;
                        return s.UI(n, (s, d) => {
                            const _ = s.name,
                                m = s.level,
                                g = _ === r.jw,
                                E = b(e, d),
                                h = g ? p(e, d) : u.get(_),
                                f = g ? p(t, d) : l.get(_),
                                v = b(n, d - 1),
                                A = b(a, d),
                                w = b(a, d + 1);
                            let C = o.Qm.None;
                            return (
                                c || _ !== w || v === A || g || E !== r.jw
                                    ? g && d === n.length - 1 && c
                                        ? (C = o.Qm.FadeIn)
                                        : (!g && !u.has(_)) || (void 0 === E && g) || (h !== m && m === r.I)
                                          ? (C = o.Qm.Blink)
                                          : f !== h && (C = o.Qm.ScaleUp)
                                    : ((c = !0), (C = u.has(_) ? o.Qm.SlideOut : o.Qm.SlideOutAndBlink)),
                                i(s, C, d)
                            );
                        });
                    },
                    f = (e, t = 2) => {
                        const n = Math.pow(10, t);
                        return e % 1 > 0 ? Math.round(e * n) / n : e;
                    };
            },
            7077: (e, t, n) => {
                'use strict';
                n.d(t, { G: () => c, U: () => u });
                var a = n(6483),
                    r = n.n(a),
                    s = n(3649),
                    i = n(7363),
                    l = n.n(i),
                    o = n(3938);
                let u;
                !(function (e) {
                    (e.c158x118 = 'big'),
                        (e.c100x60 = 'barracks'),
                        (e.c444x300 = 'special'),
                        (e.c204x256 = 'c_204x256');
                })(u || (u = {}));
                const c = (0, i.memo)(function ({ name: e, size: t = u.c100x60, classMix: n, isSkin: a = !1 }) {
                    let i = R.images.gui.maps.icons.tankmen.icons.$dyn(t);
                    a && (i = i.$dyn('crewSkins'));
                    const c = i.$dyn((0, s.BN)(e));
                    return (
                        c ||
                            console.error(
                                `Can't find ${(0, s.BN)(e)} in R.images.gui.maps.icons.tankmen.icons.${t}${a ? '.crewSkins' : ''}`,
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
                    s = n(3457),
                    i = n(2106),
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
                        g = void 0 === m ? i.L.secondary : m,
                        E = e.size,
                        b = void 0 === E ? i.q.small : E,
                        p = e.hasIndicator,
                        h = void 0 === p || p,
                        f = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, d);
                    return u().createElement(
                        'div',
                        { className: r()(c.Z.base, a, t && c.Z.base__active) },
                        u().createElement(s.u5, _({ type: g, size: b, mixClass: c.Z.button }, f), o),
                        u().createElement('div', { className: c.Z.overlay }),
                        h && u().createElement('div', { className: c.Z.indicator }),
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
                n.d(t, { BH: () => s, Fs: () => i, ei: () => a, qb: () => r });
                const a = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    r = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
                    s = (e) => {
                        const t = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + t * Math.pow(e - 1, 2);
                    },
                    i = (e) => -(Math.cos(Math.PI * e) - 1) / 2;
            },
            8018: (e, t, n) => {
                'use strict';
                n.d(t, { Ds: () => u, Gc: () => i, H$: () => l, Y4: () => o, gO: () => s, wP: () => r });
                var a = n(771);
                n(3649);
                R.strings.common.percentValue(), R.strings.common.plusPercentValue();
                let r;
                !(function (e) {
                    (e.Objective = 'objective'), (e.Possessive = 'possessive');
                })(r || (r = {}));
                R.strings.crew.filterPanel.counter.reset.header(), R.strings.crew.filterPanel.counter.reset.body();
                let s;
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
                })(s || (s = {}));
                const i = (e, t = !1, n = null) => {
                    const a = t ? R.strings.item_types.tankman.roles.female : R.strings.item_types.tankman.roles;
                    return (n ? a.$dyn(`${n}Case`) : a).$dyn(e);
                };
                let l;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                })(l || (l = {}));
                const o = (e) => (e === a.sU ? l.Untrained : e < a.yb ? l.Low : l.Normal),
                    u = function () {
                        let e, t;
                        const n = function (n, a) {
                            e && clearTimeout(e),
                                (t = n),
                                (e = setTimeout(function () {
                                    t.call(this), clearTimeout(e);
                                }, a));
                        };
                        return (
                            (n.cancel = function () {
                                e && clearTimeout(e);
                            }),
                            n
                        );
                    };
            },
            8706: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => Ht });
                var a = n(4029),
                    r = n(7363),
                    s = n.n(r);
                let i;
                !(function (e) {
                    (e[(e.Default = 0)] = 'Default'), (e[(e.Compact = 1)] = 'Compact');
                })(i || (i = {}));
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
                                s = (0, _.Om)((e) => t.selectedSlotIdx.get() === e),
                                i = (0, _.Om)(() => -1 !== t.selectedSlotIdx.get()),
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
                                    isSlotSelected: s,
                                    isAnySlotSelected: i,
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
                    h = n.n(p),
                    f = n(6373),
                    v = n(2056);
                let A;
                !(function (e) {
                    (e.On = 'on'), (e.Off = 'off'), (e.Disabled = 'disabled'), (e.Hidden = 'hidden');
                })(A || (A = {}));
                const w = 'ButtonsBar_base_9c',
                    C = 'ButtonsBar_button_d1',
                    k = 'ButtonsBar_button__crewOperaions_70',
                    y = 'ButtonsBar_button__crewBooks_b4',
                    D = 'ButtonsBar_button__toggle_64';
                var F = n(3457),
                    S = n(9987),
                    B = n(3649);
                const x = 'CrewBookButton_base_da',
                    L = 'CrewBookButton_button_ee',
                    N = 'CrewBookButton_icon_11',
                    I = 'CrewBookButton_discount_6b',
                    T = 'CrewBookButton_counter_5d',
                    O = (0, o.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = b(),
                            a = n.model,
                            r = n.controls,
                            i = a.crewBooks.get(),
                            l = r.onCrewBooksClick,
                            o = i.isDisabled || t;
                        return s().createElement(
                            f.i,
                            {
                                header: R.strings.crew_widget.tooltip.buttonsBar.crewBooks.header(),
                                body: (0, B.uF)(R.strings.crew_widget.tooltip.buttonsBar.crewBooks.body(), {
                                    count: i.totalAmount,
                                }),
                            },
                            s().createElement(
                                'div',
                                { id: 'crew_book_button', className: h()(x, e) },
                                s().createElement(
                                    F.u5,
                                    { type: F.L$.primary, mixClass: L, disabled: o, onClick: l },
                                    s().createElement('div', { className: N }),
                                ),
                                !o &&
                                    '0' !== i.newAmount &&
                                    s().createElement(
                                        'div',
                                        { className: T },
                                        s().createElement(S.A, { value: i.newAmount }),
                                    ),
                                !o && i.hasDiscount && s().createElement('div', { className: I }),
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
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, P);
                        return s().createElement(
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
                                n,
                            ),
                            t,
                        );
                    },
                    j = 'CrewOperationsButton_base_e3',
                    z = 'CrewOperationsButton_button_8e',
                    $ = 'CrewOperationsButton_icon_0c',
                    G = 'CrewOperationsButton_autoReturnIcon_f0',
                    U = (0, o.Pi)(({ classMix: e, isWidgetDisabled: t }) => {
                        const n = b().model.crewOperations.get();
                        return s().createElement(
                            'div',
                            { id: 'crew_operations_button', className: h()(j, e) },
                            s().createElement(
                                W,
                                { targetId: R.views.lobby.crew.widgets.CrewWidget('resId'), isEnabled: !t },
                                s().createElement(
                                    f.i,
                                    {
                                        header: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.header(),
                                        body: R.strings.crew_widget.tooltip.buttonsBar.crewOperations.body(),
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(
                                            F.u5,
                                            { type: F.L$.primary, mixClass: z, disabled: t },
                                            s().createElement('div', { className: $ }),
                                        ),
                                        n.isAutoReturnOn && s().createElement('div', { className: G }),
                                    ),
                                ),
                            ),
                        );
                    });
                var Z = n(9631);
                const V = 'CrewToggleButton_base_03',
                    q = 'CrewToggleButton_button_89',
                    Y = 'CrewToggleButton_iconContainer_f9',
                    K = 'CrewToggleButton_icon_a7';
                let X;
                !(function (e) {
                    (e.AcceleratedTraining = 'acceleratedTraining'), (e.WotPlus = 'wotPlus');
                })(X || (X = {}));
                const Q = (0, r.memo)(({ type: e, state: t, isDisabled: n, onClick: a, classMix: i }) => {
                        const l = (0, r.useMemo)(() => {
                            const n = t === A.Disabled ? A.Off : t;
                            return {
                                backgroundImage: `url(R.images.gui.maps.icons.crewWidget.buttonsBar.icons.${e}_${n})`,
                            };
                        }, [e, t]);
                        return s().createElement(
                            'div',
                            { className: h()(V, i) },
                            s().createElement(
                                Z.C,
                                {
                                    type: F.L$.primary,
                                    isActive: t === A.On,
                                    disabled: n || t === A.Disabled,
                                    className: q,
                                    onClick: a,
                                },
                                s().createElement(
                                    'div',
                                    { className: Y },
                                    s().createElement('div', { className: K, style: l }),
                                ),
                            ),
                        );
                    }),
                    J = {
                        [A.On]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_on,
                        [A.Off]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_off,
                        [A.Disabled]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                        [A.Hidden]: R.strings.crew_widget.tooltip.buttonsBar.acceleratedTraining_disabled,
                    },
                    ee = (0, o.Pi)(({ isWidgetDisabled: e }) => {
                        const t = b(),
                            n = t.model,
                            a = t.controls,
                            r = n.acceleratedTraining.get(),
                            i = n.wotPlus.get(),
                            l = a.onAcceleratedTrainingClick,
                            o = a.onWotPlusClick,
                            u = J[r.state];
                        return s().createElement(
                            'div',
                            { className: w },
                            s().createElement(U, { classMix: h()(C, k), isWidgetDisabled: e }),
                            s().createElement(O, { classMix: h()(C, y), isWidgetDisabled: e }),
                            r.state !== A.Hidden &&
                                s().createElement(
                                    f.i,
                                    { header: u.header(), body: u.body() },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(Q, {
                                            type: X.AcceleratedTraining,
                                            state: r.state,
                                            isDisabled: e || r.isDisabled,
                                            onClick: l,
                                            classMix: h()(C, D),
                                        }),
                                    ),
                                ),
                            i.state !== A.Hidden &&
                                s().createElement(
                                    v.u,
                                    {
                                        contentId: R.views.lobby.crew.CrewHeaderTooltipView('resId'),
                                        targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    },
                                    s().createElement(
                                        'div',
                                        null,
                                        s().createElement(Q, {
                                            type: X.WotPlus,
                                            state: i.state,
                                            isDisabled: e || i.isDisabled,
                                            onClick: o,
                                            classMix: h()(C, D),
                                        }),
                                    ),
                                ),
                        );
                    }),
                    te = 'CrewWidgetApp_base_cc',
                    ne = 'CrewWidgetApp_buttonsBar_e5',
                    ae = 'CrewWidgetApp_slotsList_ee';
                var re = n(7727),
                    se = n(7030),
                    ie = n(7160),
                    le = n(8018),
                    oe = n(7077);
                const ue = 'WidgetTankmanIcon_icon_0f',
                    ce = 'WidgetTankmanIcon_icon__small_24',
                    de = 'WidgetTankmanIcon_icon__cropped_bd',
                    _e = ({ name: e, isSkin: t = !1, isCropped: n = !1, slotSize: a, className: r }) => {
                        const i = (0, l.GS)().mediaSize,
                            o = 'small' === a || i < l.cJ.Large;
                        return s().createElement(oe.G, {
                            name: e,
                            size: o && n ? oe.U.c100x60 : oe.U.c158x118,
                            isSkin: t,
                            classMix: h()(ue, o && n && ce, !o && n && de, r),
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
                let ge;
                !(function (e) {
                    (e.HoverGlow = 'hoverGlow'),
                        (e.SelectedGlow = 'selectedGlow'),
                        (e.Disabled = 'disabledLayer'),
                        (e.SelectedHighlight = 'selectedTankmanHighlight'),
                        (e.SelectedHighlight2 = 'selectedTankmanHighlight2'),
                        (e.TankmanSlotHover = 'tankmanSlotHover'),
                        (e.UntrainedTankmanHighlight = 'untrainedTankmanHighlight');
                })(ge || (ge = {}));
                const Ee = ({ type: e, slotSize: t, isHigh: n, className: a, isVisible: r = !0 }) => {
                        const i = n ? e + 'High' : e;
                        return s().createElement(
                            'div',
                            { className: h()(me.base, me[`base__${t}`], r && me.base__visible, a) },
                            s().createElement('div', {
                                className: h()(me.content, me[`content__${i}`]),
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
                    pe = ({
                        isHigh: e,
                        slotSize: t,
                        onClick: n,
                        children: a,
                        isSelected: i = !1,
                        isDisabled: l,
                        isEnabledForMouse: o,
                        isEmpty: u = !1,
                        layoutInfo: c,
                    }) => {
                        const d = (0, r.useState)(!1),
                            _ = d[0],
                            m = d[1],
                            g = _ && (!i || (!u && c.isCurrentLayoutMemberChange)),
                            E = g && !u && !c.isCurrentLayoutHangar;
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    be.base,
                                    be[`base__${t}`],
                                    (_ || i) && !c.isCurrentLayoutHangar && be.base__hovered,
                                    !o && be.base__inactive,
                                ),
                                onClick: n,
                                onMouseEnter: () => {
                                    o && (re.$.playHighlight(), m(!0));
                                },
                                onMouseLeave: () => {
                                    m(!1);
                                },
                            },
                            s().createElement(
                                'div',
                                { className: h()(be.content, e && be.content__high) },
                                !c.isCurrentLayoutMemberChange &&
                                    s().createElement(Ee, {
                                        type: ge.SelectedGlow,
                                        slotSize: t,
                                        isHigh: e,
                                        isVisible: i,
                                        className: be.layer,
                                    }),
                                s().createElement(Ee, {
                                    type: ge.HoverGlow,
                                    slotSize: t,
                                    isHigh: e,
                                    isVisible: E,
                                    className: be.layer,
                                }),
                                s().createElement(Ee, {
                                    type: ge.TankmanSlotHover,
                                    slotSize: t,
                                    isHigh: e,
                                    isVisible: g,
                                    className: be.layer,
                                }),
                                l &&
                                    s().createElement(Ee, {
                                        type: ge.Disabled,
                                        slotSize: t,
                                        isHigh: e,
                                        isVisible: !0,
                                        className: be.layer,
                                    }),
                                a,
                                s().createElement('div', { className: be.delimiter }),
                            ),
                        );
                    },
                    he = ({
                        startState: e,
                        endState: t,
                        layoutInfo: n,
                        isPaused: a = !1,
                        children: i,
                        className: l,
                        isTankmanMode: o,
                    }) => {
                        const u = (0, se.useSpring)(
                                () => ({ from: e, to: t, config: { duration: 300, easing: ie.qb }, pause: a }),
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
                        return s().createElement(se.animated.div, { className: l, style: c }, i);
                    },
                    fe = 'DogSlot_base_8f',
                    ve = 'DogSlot_icon_ba',
                    Ae = 'DogSlot_container_63',
                    we = 'DogSlot_roleAndName_c9',
                    Ce = 'DogSlot_role_5c',
                    ke = 'DogSlot_name_9c',
                    ye = 'DogSlot_btnDetails_b7',
                    De = { transform: 'translateX(0rem)' },
                    Fe = (0, o.Pi)(({ isDisabled: e, layoutInfo: t, slotSize: n }) => {
                        const a = b(),
                            i = a.model,
                            l = a.controls,
                            o = i.nation.get(),
                            u = l.onDogMoreInfoClick,
                            c = (0, r.useCallback)(() => {
                                !e && (0, re.G)(le.gO.RUDY);
                            }, [e]),
                            d = (0, r.useCallback)(
                                (t) => {
                                    t.stopPropagation(), !e && u();
                                },
                                [u, e],
                            ),
                            _ = (0, se.useSpring)(
                                () => ({
                                    from: De,
                                    to: { transform: 'translateX(16rem)' },
                                    config: { duration: 300, easing: ie.qb },
                                    pause: !t.isCurrentLayoutQuickTraining,
                                }),
                                [t],
                            )[0],
                            m = R.strings.tooltips.hangar.crew.rudy.dog.$dyn(o);
                        return s().createElement(
                            f.i,
                            { header: m.header(), body: m.body() },
                            s().createElement(
                                'div',
                                null,
                                s().createElement(
                                    pe,
                                    {
                                        onClick: c,
                                        isDisabled: e,
                                        isEnabledForMouse: !1,
                                        layoutInfo: t,
                                        isHigh: !1,
                                        slotSize: n,
                                    },
                                    s().createElement(
                                        he,
                                        {
                                            startState: De,
                                            endState: { transform: 'translateX(42rem)' },
                                            layoutInfo: t,
                                            className: fe,
                                            isTankmanMode: !1,
                                        },
                                        s().createElement(
                                            se.animated.div,
                                            { style: _ },
                                            s().createElement(_e, {
                                                name: 'ussr_dog_1',
                                                isCropped: !0,
                                                className: ve,
                                                slotSize: n,
                                            }),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Ae },
                                            s().createElement(
                                                'div',
                                                { className: we },
                                                s().createElement('div', { className: Ce }),
                                                s().createElement(
                                                    'div',
                                                    { className: ke },
                                                    R.strings.menu.hangar.crew.rody.dog.$dyn(o).name(),
                                                ),
                                            ),
                                            s().createElement(
                                                'div',
                                                { className: ye },
                                                s().createElement(
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
                let Se;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Se || (Se = {}));
                var Be = n(9916);
                const xe = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: s,
                        isEnabled: i = !0,
                        onMouseDown: l,
                    }) => {
                        const o = (0, r.useCallback)(() => {
                                (0, Be.c9)(Be.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    re.$.playYes();
                            }, [s, t, n, a]),
                            u = (0, r.useCallback)(() => {
                                (0, Be.c9)(Be.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, r.useCallback)(
                                (e) => {
                                    l && l(e), ((e) => e.button === Se.RIGHT)(e) && o();
                                },
                                [l, o],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === i && u();
                            }, [i, u]),
                            i ? (0, r.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Le = ['children'];
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const Ie = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Le);
                        return s().createElement(
                            xe,
                            Ne({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                            t,
                        );
                    },
                    Te = 'ChangeCrewButton_base_0f',
                    Oe = 'ChangeCrewButton_base__inactive_77',
                    Re = 'ChangeCrewButton_normalState_07',
                    Me = 'ChangeCrewButton_normalState__hide_db',
                    Pe = 'ChangeCrewButton_hoverState_68',
                    He = 'ChangeCrewButton_hoverState__show_89',
                    We = ({ isSelected: e, isLocked: t, mainRole: n, isFemale: a }) => {
                        const i = (0, r.useState)(!1),
                            l = i[0],
                            o = i[1],
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
                                                  role: (0, le.Gc)(n, a, le.wP.Objective),
                                              }),
                                          ],
                                [t, a, n],
                            ),
                            c = u[0],
                            d = u[1];
                        return s().createElement(
                            f.i,
                            {
                                header: c,
                                body: d,
                                targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                ignoreMouseClick: !0,
                            },
                            s().createElement(
                                'div',
                                {
                                    className: h()(Te, (t || e) && Oe),
                                    onMouseEnter: () => {
                                        t || e || (re.$.playHighlight(), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                },
                                s().createElement('div', { className: h()(Re, l && Me) }),
                                s().createElement('div', { className: h()(Pe, (e || l) && He) }),
                            ),
                        );
                    },
                    je = 'CrewSlot_base_ac',
                    ze = 'CrewSlot_changeCrew_02',
                    $e = 'CrewSlot_content_5b',
                    Ge = 'CrewSlot_content__withChangeCrewButton_4e',
                    Ue = 'CrewSlot_layer_49';
                var Ze = n(7078),
                    Ve = n(2603),
                    qe = n(771);
                const Ye = 'SpecializationAndName_base_ef',
                    Ke = 'SpecializationAndName_roleWrapper_87',
                    Xe = 'SpecializationAndName_role_55',
                    Qe = 'SpecializationAndName_role__withGap_35',
                    Je = 'SpecializationAndName_name_aa',
                    et = 'SpecializationAndName_name__highlighted_1b',
                    tt = ({ roles: e, tankmanID: t = qe.y$, slotIdx: n, name: a, hasPostProgression: r = !1 }) =>
                        s().createElement(
                            'div',
                            { className: Ye },
                            s().createElement(
                                Ze.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ve.rs, slotIdx: n, tankmanID: t },
                                },
                                s().createElement(
                                    'div',
                                    { className: Ke },
                                    d.UI(e, (e, t) =>
                                        s().createElement('div', {
                                            key: `role__${e}`,
                                            className: h()(Xe, t > 0 && Qe),
                                            style: {
                                                backgroundImage: `url(${R.images.gui.maps.icons.tankmen.roles.c_18x18.$dyn(e)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                            s().createElement('div', { className: h()(Je, r && et) }, a),
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
                    st = (0, r.memo)(
                        ({
                            roles: e,
                            layoutInfo: t,
                            vehicleName: n,
                            vehicleType: a,
                            isDisabled: i,
                            isSelected: l,
                            slotIdx: o,
                            blinkStyle: u,
                            qtTankmanIconStyle: c,
                            isHigh: _,
                            slotSize: m,
                        }) => {
                            const g = (0, se.useSpring)(
                                    () => ({
                                        from: at,
                                        to: rt,
                                        config: { duration: 200, easing: ie.ei },
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
                                f = d.U2(e, 0) || '',
                                v = R.strings.crew_widget.vehicleWithName.$dyn((0, B.BN)(a)),
                                A = (0, B.uF)(R.strings.crew_widget.emptySlot.chooseTankman(), {
                                    role: R.strings.item_types.tankman.roles.objectiveCase.$dyn(f),
                                });
                            return s().createElement(
                                'div',
                                { className: h()(nt.base, nt[`base__${m}`]), onMouseEnter: p, onMouseLeave: p },
                                s().createElement(
                                    'div',
                                    { className: h()(nt.content, _ && nt.content__high) },
                                    s().createElement(
                                        'div',
                                        { className: nt.tankmanIcon },
                                        s().createElement(
                                            se.animated.div,
                                            { className: nt.iconContainer, style: c },
                                            s().createElement(_e, {
                                                name: 'empty',
                                                className: nt.icon,
                                                isCropped: !_,
                                                slotSize: m,
                                            }),
                                            s().createElement(
                                                se.animated.div,
                                                { className: nt.iconContainer, style: i ? void 0 : u },
                                                s().createElement(_e, {
                                                    name: 'emptyRed',
                                                    className: nt.icon,
                                                    isCropped: !_,
                                                    slotSize: m,
                                                }),
                                            ),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: h()(nt.specialization, i && nt.specialization__disabled) },
                                        s().createElement(tt, { slotIdx: o, roles: e, name: A }),
                                    ),
                                    s().createElement(
                                        se.animated.div,
                                        { className: nt.vehicle, style: l ? void 0 : E },
                                        (0, B.uF)(v, { name: n }),
                                    ),
                                ),
                            );
                        },
                    );
                var it = n(8617),
                    lt = n(5855);
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
                    ut = (e, t) => (e ? lt.t6.None : 'small' === t ? lt.t6.ExtraOverlap : lt.t6.Overlap),
                    ct = ({ slotIdx: e, tankman: t, isDisabled: n, layoutInfo: a, blinkStyle: r, slotSize: i }) => {
                        const l = t.skills.bonusSkills.length > 0;
                        return s().createElement(
                            'div',
                            { className: h()(ot.base, n && ot.base__disabled, ot[`base__${i}`]) },
                            s().createElement(
                                Ze.t,
                                {
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                    args: { tooltipId: Ve.v$, tankmanID: t.tankmanID },
                                },
                                s().createElement('div', { className: ot.tankmanTooltipHoverArea }),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(ot.specialization, l && ot.specialization__withBonusSkills) },
                                s().createElement(tt, {
                                    tankmanID: t.tankmanID,
                                    slotIdx: e,
                                    roles: t.roles,
                                    name: t.fullName,
                                    hasPostProgression: t.hasPostProgression,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(ot.skillsContainer, l && ot.skillsContainer__withBonusSkills) },
                                s().createElement(it.n, {
                                    tankmanID: t.tankmanID,
                                    size: lt.Ow.c24x24,
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
                                    collapseType: ut(a.isCurrentLayoutHangar, i),
                                }),
                            ),
                        );
                    },
                    dt = 'QuickTrainingTankmanSlotContent_base_8d',
                    _t = 'QuickTrainingTankmanSlotContent_arrow_5a',
                    mt = 'QuickTrainingTankmanSlotContent_iconContainer_f1',
                    gt = 'QuickTrainingTankmanSlotContent_icon_7c',
                    Et = 'QuickTrainingTankmanSlotContent_layer_10',
                    bt = { transform: 'translateY(50rem)', opacity: 0, scale: 1 },
                    pt = { transform: 'translateY(0rem)', opacity: 1, scale: 1 },
                    ht = [
                        { transform: 'translateY(-10rem)', scale: 1.3 },
                        { opacity: 0, scale: 1 },
                    ],
                    ft = { opacity: 0 },
                    vt = [{ opacity: 1 }, { opacity: 0 }],
                    At = (0, r.memo)(
                        ({
                            slotIdx: e,
                            tankman: t,
                            blinkStyle: n,
                            qtTankmanIconStyle: a,
                            layoutInfo: i,
                            isDisabled: l,
                            slotSize: o,
                        }) => {
                            const u = (0, r.useRef)(t.lastSkillLevelFull),
                                c = (0, r.useRef)(t.skills.majorSkills.length),
                                d = (0, se.useSpring)(() => ({ from: bt })),
                                _ = d[0],
                                m = d[1],
                                g = (0, se.useSpring)(() => ({ from: ft })),
                                E = g[0],
                                b = g[1],
                                p = (0, r.useRef)(!1);
                            return (
                                (0, r.useEffect)(() => {
                                    t.hasPossibleProgress
                                        ? p.current ||
                                          (m.start({
                                              from: bt,
                                              to: pt,
                                              reverse: false,
                                              config: { duration: 300, easing: ie.BH },
                                          }),
                                          (p.current = !0))
                                        : p.current
                                          ? (t.skills.majorSkills.length > c.current || t.lastSkillLevelFull > u.current
                                                ? (m.start({
                                                      from: pt,
                                                      to: ht,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ie.BH },
                                                  }),
                                                  (u.current = t.lastSkillLevelFull),
                                                  (c.current = t.skills.majorSkills.length),
                                                  b.start({
                                                      from: ft,
                                                      to: vt,
                                                      delay: 200,
                                                      config: { duration: 500, easing: ie.BH },
                                                  }))
                                                : m.start({ reset: !0, reverse: !0 }),
                                            (p.current = !1))
                                          : ((u.current = t.lastSkillLevelFull),
                                            (c.current = t.skills.majorSkills.length));
                                }, [m, b, t.lastSkillLevelFull, t.hasPossibleProgress, t.skills.majorSkills.length]),
                                s().createElement(
                                    'div',
                                    { className: dt },
                                    s().createElement(
                                        se.animated.div,
                                        { style: E },
                                        s().createElement(Ee, {
                                            type: ge.SelectedHighlight,
                                            slotSize: o,
                                            isHigh: t.skills.bonusSkills.length > 1,
                                            className: Et,
                                        }),
                                    ),
                                    s().createElement(
                                        se.animated.div,
                                        { className: mt, style: a },
                                        s().createElement(_e, {
                                            name: t.icon,
                                            isSkin: t.isInSkin,
                                            isCropped: 0 === t.skills.bonusSkills.length,
                                            slotSize: o,
                                            className: gt,
                                        }),
                                    ),
                                    s().createElement(se.animated.div, { className: _t, style: _ }),
                                    s().createElement(ct, {
                                        slotIdx: e,
                                        tankman: t,
                                        layoutInfo: i,
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
                                    for (let s = 0; s < n; s++) {
                                        var a, r;
                                        if (
                                            (null == (a = d.U2(e, s)) ? void 0 : a.name) !==
                                            (null == (r = d.U2(t, s)) ? void 0 : r.name)
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
                    wt = 'TankmanSlotContent_base_00',
                    Ct = 'TankmanSlotContent_icon_ef',
                    kt = (0, r.memo)(
                        ({ slotIdx: e, tankman: t, layoutInfo: n, isDisabled: a, blinkStyle: r, slotSize: i }) =>
                            s().createElement(
                                'div',
                                { className: wt },
                                s().createElement(_e, {
                                    name: t.icon,
                                    isCropped: 0 === t.skills.bonusSkills.length,
                                    isSkin: t.isInSkin,
                                    slotSize: i,
                                    className: Ct,
                                }),
                                s().createElement(ct, {
                                    slotIdx: e,
                                    tankman: t,
                                    layoutInfo: n,
                                    isDisabled: a,
                                    blinkStyle: r,
                                    slotSize: i,
                                }),
                            ),
                    ),
                    yt = (0, r.memo)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            vehicleName: r,
                            vehicleType: i,
                            isDisabled: l,
                            isSelected: o,
                            blinkSlotStyle: u,
                            blinkTankmanStyle: c,
                            qtTankmanIconStyle: d,
                            slotSize: _,
                            isHigh: m,
                        }) =>
                            -1 === n.tankmanID
                                ? s().createElement(st, {
                                      roles: t,
                                      layoutInfo: a,
                                      vehicleName: r,
                                      vehicleType: i,
                                      isDisabled: l,
                                      isSelected: o,
                                      slotIdx: e,
                                      blinkStyle: c,
                                      qtTankmanIconStyle: d,
                                      isHigh: m,
                                      slotSize: _,
                                  })
                                : a.isCurrentLayoutQuickTraining || a.isCurrentLayoutMentorAssigment
                                  ? s().createElement(At, {
                                        slotIdx: e,
                                        tankman: n,
                                        blinkStyle: u,
                                        qtTankmanIconStyle: d,
                                        layoutInfo: a,
                                        isDisabled: l,
                                        slotSize: _,
                                    })
                                  : s().createElement(kt, {
                                        slotIdx: e,
                                        tankman: n,
                                        layoutInfo: a,
                                        isDisabled: l,
                                        blinkStyle: u,
                                        slotSize: _,
                                    }),
                    ),
                    Dt = { transform: 'translateX(0rem)' },
                    Ft = { transform: 'translateX(41rem)' },
                    St = { opacity: 0 },
                    Bt = { opacity: 1 },
                    xt = (0, o.Pi)(
                        ({
                            slotIdx: e,
                            roles: t,
                            tankman: n,
                            layoutInfo: a,
                            isSelected: i,
                            isDisabled: l,
                            blinkSlotStyle: o,
                            blinkTankmanStyle: u,
                            qtTankmanIconStyle: c,
                            slotSize: _,
                            shouldShowAssistHint: m,
                        }) => {
                            const g = b(),
                                E = g.model,
                                p = g.controls,
                                f = p.onSlotClick,
                                v = p.onChangeCrewClick,
                                A = E.computes.isChangeCrewButtonVisible(),
                                w = E.computes.isTankmanMode(),
                                C = E.isCrewLocked.get(),
                                k = E.vehicleName.get(),
                                y = E.vehicleType.get(),
                                D = -1 === n.tankmanID ? t.length > 1 : n.skills.bonusSkills.length > 0,
                                F = !l && n.isInteractive && (!i || a.isCurrentLayoutMemberChange),
                                S = (0, r.useCallback)(() => {
                                    F && !w && ((0, re.G)(R.sounds.yes1()), f(e, n.tankmanID));
                                }, [e, n, f, w, F]),
                                B = (0, r.useCallback)(
                                    (t) => {
                                        t.stopPropagation(),
                                            C ||
                                                (i && a.isCurrentLayoutMemberChange) ||
                                                ((0, re.G)(R.sounds.yes1()), v(e, n.tankmanID));
                                    },
                                    [e, n, v, C, i, a.isCurrentLayoutMemberChange],
                                ),
                                x = (0, r.useMemo)(() => ({ tankmanID: n.tankmanID, slotIdx: e }), [n, e]);
                            return s().createElement(
                                Ie,
                                {
                                    args: x,
                                    isEnabled:
                                        !l && !a.isCurrentLayoutSkillsTraining && !a.isCurrentLayoutMentorAssigment,
                                    targetId: R.views.lobby.crew.widgets.CrewWidget('resId'),
                                },
                                s().createElement(
                                    'div',
                                    null,
                                    s().createElement(
                                        pe,
                                        {
                                            isHigh: D,
                                            onClick: S,
                                            isSelected: i,
                                            isDisabled: l,
                                            isEmpty: -1 === n.tankmanID,
                                            layoutInfo: a,
                                            isEnabledForMouse: F,
                                            slotSize: _,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: je, id: m ? 'crew_assist_hint_widget_candidate' : void 0 },
                                            n.hasWarning &&
                                                s().createElement(Ee, {
                                                    type: ge.UntrainedTankmanHighlight,
                                                    slotSize: _,
                                                    isHigh: D,
                                                    className: Ue,
                                                }),
                                            i &&
                                                s().createElement(Ee, {
                                                    type: w ? ge.SelectedHighlight2 : ge.SelectedHighlight,
                                                    slotSize: _,
                                                    isHigh: D,
                                                    className: Ue,
                                                }),
                                            s().createElement(
                                                he,
                                                {
                                                    startState: Dt,
                                                    endState: Ft,
                                                    layoutInfo: a,
                                                    isPaused: !A,
                                                    className: h()($e, A && Ge),
                                                    isTankmanMode: w,
                                                },
                                                s().createElement(yt, {
                                                    slotIdx: e,
                                                    roles: t,
                                                    tankman: n,
                                                    layoutInfo: a,
                                                    isDisabled: l,
                                                    vehicleName: k,
                                                    vehicleType: y,
                                                    blinkSlotStyle: o,
                                                    blinkTankmanStyle: u,
                                                    qtTankmanIconStyle: c,
                                                    isSelected: i,
                                                    slotSize: _,
                                                    isHigh: D,
                                                }),
                                            ),
                                            A &&
                                                s().createElement(
                                                    'div',
                                                    { onClick: B },
                                                    s().createElement(
                                                        he,
                                                        {
                                                            startState: St,
                                                            endState: Bt,
                                                            layoutInfo: a,
                                                            className: ze,
                                                            isTankmanMode: w,
                                                        },
                                                        s().createElement(We, {
                                                            isSelected: a.isCurrentLayoutMemberChange && i,
                                                            isLocked: C,
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
                    Lt = 'SlotsList_base_5f',
                    Nt = 'SlotsList_base__hangar_8b';
                function It() {
                    return (
                        (It =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        It.apply(this, arguments)
                    );
                }
                const Tt = { transform: new se.SpringValue('translateX(0rem)') },
                    Ot = { transform: new se.SpringValue('translateX(15rem)') },
                    Rt = (0, o.Pi)(({ layoutInfo: e, isWidgetDisabled: t, className: n, slotSize: a }) => {
                        const i = b().model,
                            l = i.computes.isAnyEmptySlots(),
                            o = (0, se.useSpring)(
                                () => ({
                                    from: { opacity: 1 },
                                    to: [{ opacity: 0 }, { opacity: 1 }],
                                    config: { duration: 750, easing: ie.Fs },
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
                                    config: { duration: 400, easing: ie.Fs },
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
                                from: Tt,
                                to: Ot,
                                delay: 200,
                                config: { duration: 300, easing: ie.ei },
                            }))[0],
                            E = (0, r.useMemo)(
                                () =>
                                    e.isCurrentLayoutQuickTraining || e.isCurrentLayoutMentorAssigment
                                        ? e.isPreviousLayoutQuickTraining || e.isPreviousLayoutMentorAssigment
                                            ? Ot
                                            : g
                                        : Tt,
                                [e, g],
                            ),
                            p = i.computes.getSlots().findIndex((e) => e.tankman.wotPlusAssistHintCandidate);
                        return s().createElement(
                            'div',
                            { id: 'crew_widget_slots_list', className: h()(Lt, e.isCurrentLayoutHangar && Nt, n) },
                            i.computes
                                .getSlots()
                                .map((n, r) =>
                                    s().createElement(
                                        xt,
                                        It({}, n, {
                                            layoutInfo: e,
                                            key: `slot_${r}_${n.tankman.tankmanID}`,
                                            isSelected:
                                                !e.isCurrentLayoutHangar &&
                                                (i.computes.isSlotSelected(n.slotIdx) || i.computes.isTankmanMode()),
                                            isDisabled: t,
                                            blinkSlotStyle: _,
                                            blinkTankmanStyle: u,
                                            qtTankmanIconStyle: E,
                                            slotSize: a,
                                            shouldShowAssistHint: p === r,
                                        }),
                                    ),
                                ),
                        );
                    }),
                    Mt = (0, o.Pi)(() => {
                        const e = b().model,
                            t = e.isDisabled.get(),
                            n = e.hasDog.get(),
                            a = e.computes.getLayoutInfo(),
                            r = (0, l.GS)().mediaSize,
                            o = ((e, t) =>
                                e === i.Compact
                                    ? t < l.cJ.ExtraLarge
                                        ? 'small'
                                        : 'big'
                                    : t < l.cJ.Large
                                      ? 'small'
                                      : 'big')(e.slotSizeMode.get(), r);
                        return s().createElement(
                            'div',
                            { className: te },
                            e.computes.isButtonBarVisible() &&
                                s().createElement(
                                    'div',
                                    { className: ne },
                                    s().createElement(ee, { isWidgetDisabled: t }),
                                ),
                            s().createElement(Rt, { layoutInfo: a, isWidgetDisabled: t, className: ae, slotSize: o }),
                            n && s().createElement(Fe, { layoutInfo: a, isDisabled: t, slotSize: o }),
                        );
                    }),
                    Pt = { rootId: R.views.lobby.crew.widgets.CrewWidget('resId') },
                    Ht = (0, r.memo)(() =>
                        s().createElement(
                            a.z,
                            null,
                            s().createElement(E, { options: Pt }, s().createElement(Mt, null)),
                        ),
                    );
            },
            4150: (e, t, n) => {
                'use strict';
                let a;
                n.d(t, { S: () => a }),
                    (function (e) {
                        (e.None = 'none'), (e.Learned = 'learned'), (e.Improved = 'Improved');
                    })(a || (a = {}));
            },
            2603: (e, t, n) => {
                'use strict';
                n.d(t, { Br: () => i, HZ: () => a, M4: () => l, _K: () => r, rs: () => o, v$: () => s });
                const a = 'crewPerkGf',
                    r = 'crewPerkAltGf',
                    s = 'tankman',
                    i = 'skillsEfficiency',
                    l = 'crewSkillUntrained',
                    o = 'vehicleCrewMemberInHangar';
            },
            771: (e, t, n) => {
                'use strict';
                n.d(t, { GT: () => o, I: () => s, jw: () => i, sU: () => a, vA: () => l, y$: () => u, yb: () => r });
                const a = -1,
                    r = 1,
                    s = 100,
                    i = 'new_skill',
                    l = 9,
                    o = 6,
                    u = -1;
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
            8055: (e, t, n) => {
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
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, n, a] = deferred[o], s = !0, i = 0; i < t.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((s = !1), a < r && (r = a));
                    if (s) {
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
            return __webpack_require__.d(t, { a: t }), t;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 4275),
        (() => {
            var e = { 4275: 0, 8003: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [s, i, l] = n,
                        o = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (l) var u = l(__webpack_require__);
                    }
                    for (t && t(n); o < s.length; o++)
                        (r = s[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(u);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [9056], () => __webpack_require__(1427));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
