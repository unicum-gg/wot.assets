(() => {
    var __webpack_modules__ = {
            2686: (e, u, t) => {
                'use strict';
                t.d(u, { At: () => l, Vx: () => i.V, qs: () => i.q });
                var n = t(6179),
                    a = t.n(n),
                    r = t(3458),
                    i = t(126);
                t(2902);
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
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            i = e.getImageSource,
                            l = e.frameCount,
                            _ = e.onAnimate,
                            m = e.frameTime,
                            A = void 0 === m ? r.O.FRAME_TIME : m,
                            g = e.initialFrameIndex,
                            F = void 0 === g ? r.O.INITIAL_FRAME_INDEX : g,
                            D = e.lastFrameIndex,
                            b = void 0 === D ? l - 1 : D,
                            h = e.loop,
                            C = void 0 === h ? r.O.LOOP : h,
                            v = e.state,
                            f = void 0 === v ? r.O.STATE : v,
                            B = e.onAnimationDone,
                            p = e.onAnimationComplete,
                            w = e.poster,
                            y = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, s);
                        const S = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = S.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (f) {
                                    case 'play':
                                        return (function () {
                                            const e = E(F, b, i),
                                                u = c(F, b),
                                                n = window.setInterval(() => {
                                                    const a = u(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == _ || _(a, r),
                                                          t(r),
                                                          a === b &&
                                                              (null == p || p(),
                                                              C || (null == B || B(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, A);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === F && w ? { path: w, x: 0, y: 0 } : i(F),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(d(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [A, i, F, b, C, _, p, B, w, f]),
                            a().createElement('canvas', o({}, y, { width: u, height: t, ref: S }))
                        );
                    }),
                    c = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return ((t += 1), t > u && (t = e), n);
                        };
                    },
                    d = (e, u) => Object.assign({}, e, { img: u }),
                    E = (e, u, t) => {
                        const n = new Map(),
                            a = {};
                        for (let r = e; r <= u; r++) {
                            const e = t(r),
                                u = a[e.path];
                            if (u) n.set(r, d(e, u));
                            else {
                                const u = new Image();
                                ((a[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(r, d(e, u)));
                            }
                        }
                        return n;
                    };
            },
            3458: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                const n = { FRAME_TIME: 33, INITIAL_FRAME_INDEX: 0, LOOP: !0, STATE: 'play' };
            },
            126: (e, u, t) => {
                'use strict';
                function n(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const a = n % t,
                            r = (a % u.columns) * e.width,
                            i = Math.trunc(a / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: r, y: i };
                    };
                }
                function a(e) {
                    return (u) => `${e}${u}`;
                }
                t.d(u, { V: () => a, q: () => n });
            },
            2902: (e, u, t) => {
                'use strict';
                (t(6179), t(3458));
            },
            9987: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => c });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    s = t(8055);
                const o = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                const c = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        r = e.fadeInAnimation,
                        c = e.hide,
                        d = e.maximumNumber,
                        E = e.className,
                        _ = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, o);
                    const m = n ? null : t,
                        A = 'string' == typeof m;
                    if ((m && !A && m < 0) || 0 === m) return null;
                    const g = m && !A && m > d,
                        F = a()(
                            s.Z.base,
                            s.Z[`base__${u}`],
                            r && s.Z.base__animated,
                            c && s.Z.base__hidden,
                            !m && s.Z.base__pattern,
                            n && s.Z.base__empty,
                            E,
                        );
                    return i().createElement(
                        'div',
                        l({ className: F }, _),
                        i().createElement('div', { className: s.Z.bg }),
                        i().createElement('div', { className: s.Z.pattern }),
                        i().createElement(
                            'div',
                            { className: a()(s.Z.value, A && s.Z.value__text) },
                            g ? d : m,
                            g && i().createElement('span', { className: s.Z.plus }, '+'),
                        ),
                    );
                };
                c.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            },
            944: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => g });
                var n = t(6483),
                    a = t.n(n),
                    r = t(7044),
                    i = t(2344),
                    s = t(3112),
                    o = t(3649),
                    l = t(6179),
                    c = t.n(l),
                    d = t(7916),
                    E = t(7165);
                const _ = (e) => e.toString().padStart(2, '0'),
                    m = R.images.gui.maps.icons.components.countdown,
                    A = (e, u) => {
                        const t = 2 === u ? m.big : m;
                        switch (e) {
                            case E.l.Timer:
                                return t.clock();
                            case E.l.Countdown:
                                return t.hourglass();
                            case E.l.Cooldown:
                                return t.lock();
                        }
                    },
                    g = (0, l.memo)(
                        ({
                            duration: e,
                            icon: u = E.l.Timer,
                            style: t = E.o.Description,
                            onTimeReached: n,
                            className: l = '',
                            classNames: m = {},
                        }) => {
                            const g = t !== E.o.Description ? 1 : void 0,
                                F = (0, i.au)(e, g),
                                D = (0, s.V)();
                            n && n[F] && n[F]();
                            const b = ((e, u) => {
                                switch (u) {
                                    case E.o.Description:
                                        return (0, r.wB)(e);
                                    case E.o.Short:
                                        return `${_(e.minutes)}:${_(e.seconds)}`;
                                    case E.o.Long:
                                        return `${_(e.hours)}:${_(e.minutes)}:${_(e.seconds)}`;
                                    case E.o.Extended:
                                        return `${(0, o.WU)(R.strings.common.duration.days(), { days: e.days })} | ${_(e.hours)}:${_(e.minutes)}:${_(e.seconds)}`;
                                }
                            })((0, r.f8)(F), t);
                            return c().createElement(
                                'div',
                                { className: a()(d.Z.base, l) },
                                u !== E.l.None &&
                                    c().createElement('div', {
                                        className: a()(d.Z.icon, m.icon),
                                        style: { backgroundImage: `url('${A(u, D)}')` },
                                    }),
                                c().createElement('div', { className: a()(d.Z.description, m.text) }, b),
                            );
                        },
                    );
            },
            3032: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => a.Z, ls: () => n.l, o_: () => n.o });
                var n = t(7165),
                    a = t(944);
            },
            7165: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { l: () => n, o: () => a }),
                    (function (e) {
                        ((e.Timer = 'timer'),
                            (e.Countdown = 'countdown'),
                            (e.Cooldown = 'cooldown'),
                            (e.None = 'none'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended'));
                    })(a || (a = {})));
            },
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => i });
                var n = t(6179),
                    a = t.n(n),
                    r = t(9916);
                class i extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = r.B3.GOLD;
                        else e = r.B3.INTEGRAL;
                        const u = r.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                i.defaultProps = { format: 'integral' };
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => d });
                var n = t(3138),
                    a = t(6179),
                    r = t(1043),
                    i = t(5262);
                const s = n.O.client.getSize('rem'),
                    o = s.width,
                    l = s.height,
                    c = Object.assign({ width: o, height: l }, (0, i.T)(o, l, r.j)),
                    d = (0, a.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(3138),
                    a = t(6536),
                    r = t(6179),
                    i = t.n(r),
                    s = t(3495),
                    o = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, r.useContext)(s.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        d = t[1],
                        E = (0, r.useCallback)((e, u) => {
                            const t = n.O.view.pxToRem(e),
                                a = n.O.view.pxToRem(u);
                            d(Object.assign({ width: t, height: a }, (0, l.T)(t, a, o.j)));
                        }, []),
                        _ = (0, r.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            E(e.width, e.height);
                        }, [E]);
                    ((0, a.Z)(() => {
                        (n.O.client.events.on('clientResized', E), n.O.client.events.on('self.onScaleUpdated', _));
                    }),
                        (0, r.useEffect)(
                            () => () => {
                                (n.O.client.events.off('clientResized', E),
                                    n.O.client.events.off('self.onScaleUpdated', _));
                            },
                            [E, _],
                        ));
                    const m = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return i().createElement(s.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(6179),
                    a = t(7382),
                    r = t(3495);
                const i = ['children'];
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, i);
                    const s = (0, n.useContext)(r.Y),
                        o = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        d = s.small,
                        E = s.extraSmall,
                        _ = s.extraLargeWidth,
                        m = s.largeWidth,
                        A = s.mediumWidth,
                        g = s.smallWidth,
                        F = s.extraSmallWidth,
                        D = s.extraLargeHeight,
                        b = s.largeHeight,
                        h = s.mediumHeight,
                        C = s.smallHeight,
                        v = s.extraSmallHeight,
                        f = { extraLarge: D, large: b, medium: h, small: C, extraSmall: v };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && E) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, a.H)(u, t, f);
                        if (t.largeWidth && m) return (0, a.H)(u, t, f);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, f);
                        if (t.smallWidth && g) return (0, a.H)(u, t, f);
                        if (t.extraSmallWidth && F) return (0, a.H)(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && b) return u;
                            if (t.mediumHeight && h) return u;
                            if (t.smallHeight && C) return u;
                            if (t.extraSmallHeight && v) return u;
                        }
                    }
                    return null;
                };
                s.defaultProps = {
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
                (0, n.memo)(s);
            },
            7382: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => n });
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, u, t) => {
                'use strict';
                t.d(u, { YN: () => a.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    a = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var n;
                function a(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        a = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => a }),
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
            1037: (e, u, t) => {
                'use strict';
                t.d(u, { IC: () => n });
                var n,
                    a = t(6483),
                    r = t.n(a),
                    i = t(6373),
                    s = t(3138),
                    o = t(2039),
                    l = t(5099),
                    c = t(7727),
                    d = t(9916),
                    E = t(6179),
                    _ = t.n(E),
                    m = t(4769),
                    A = t(8475);
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(n || (n = {}));
                const g = ['__left', '__right', '__top', '__bottom'];
                (0, E.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: n = {} }, a) => {
                        const F = (0, E.useRef)(null),
                            D = (0, E.useRef)(null),
                            b = (0, E.useRef)(null),
                            h = (0, E.useState)(window.decorator && window.decorator.directionType),
                            C = h[0],
                            v = h[1],
                            f = (0, E.useCallback)(() => {
                                (c.$.playClick(), s.O.view.sendEvent.close());
                            }, []),
                            B = (0, E.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            p = r()(m.Z.arrow, m.Z[`arrow${g[C]}`]);
                        (0, o.b)(
                            () => (
                                s.O.client.events.mouse.enableOutside(),
                                s.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (t ? t() : s.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const w = (0, E.useCallback)(
                                (e) => {
                                    let u = e.target;
                                    do {
                                        if (u === F.current || u === b.current) return;
                                        u = u.parentNode;
                                    } while (u);
                                    const n = window.decorator;
                                    if (void 0 !== window.decorator) {
                                        const e = s.O.client.getMouseGlobalPosition(),
                                            u = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                            t =
                                                e.x < n.boundX ||
                                                e.x > n.boundX + n.boundWidth ||
                                                e.y > n.boundY + n.boundHeight ||
                                                e.y < n.boundY;
                                        if (u && !t) return;
                                    }
                                    t ? t() : s.O.view.sendEvent.close('popover');
                                },
                                [F, b, t],
                            ),
                            y = (0, A.w)(),
                            S = (0, E.useCallback)(() => {
                                const e = D.current;
                                if (e)
                                    return (
                                        s.O.view.freezeTextureBeforeResize(),
                                        y.run(() => {
                                            const u = e.scrollWidth,
                                                t = e.scrollHeight;
                                            (s.O.view.resize(u, t), v(window.decorator.directionType));
                                        })
                                    );
                            }, [y]);
                        return (
                            (0, E.useImperativeHandle)(a, () => ({ updateSize: S })),
                            (0, o.b)(() => {
                                s.O.view.setInputPaddingsRem(58);
                            }),
                            (0, E.useEffect)(() => {
                                document.addEventListener('mousedown', w, { capture: !0 });
                                const e = (0, l.B)((0, d.Eu)());
                                return (
                                    !u && e.promise.then(() => S()),
                                    () => {
                                        (e.cancel(), document.removeEventListener('mousedown', w));
                                    }
                                );
                            }, [S, w, u]),
                            _().createElement(
                                'div',
                                { className: m.Z.base, ref: D },
                                _().createElement(
                                    'div',
                                    { className: m.Z.decorator },
                                    _().createElement(
                                        'div',
                                        { className: m.Z.content, ref: F },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            _().createElement(
                                                i.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                _().createElement('div', {
                                                    className: m.Z.closeBtn,
                                                    onClick: f,
                                                    onMouseEnter: B,
                                                    ref: b,
                                                }),
                                            ),
                                    ),
                                    _().createElement('div', { className: p, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            3616: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => l });
                var n = t(1037),
                    a = t(9916),
                    r = t(6179),
                    i = t.n(r);
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
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = (e) => {
                    let u = e.contentId,
                        t = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        d = e.targetId,
                        E = e.args,
                        _ = e.onClick,
                        m = e.children,
                        A = e.isEnabled,
                        g = void 0 === A || A,
                        F = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, s);
                    const D = (0, r.useRef)(null),
                        b = (0, r.useCallback)(() => {
                            if ((0, a.wU)()) return (0, a.SW)();
                            D.current && (0, a.P3)(u, c, D.current, t, d, E);
                        }, [u, c, E, t, d]);
                    return i().createElement(
                        'div',
                        o(
                            {
                                ref: D,
                                onMouseDown:
                                    ((h = m.props.onClick),
                                    (e) => {
                                        g && (b(), _ && _(e), h && h(e));
                                    }),
                            },
                            F,
                        ),
                        m,
                    );
                    var h;
                };
            },
            8089: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => d });
                var n = t(6179),
                    a = t.n(n),
                    r = t(6483),
                    i = t.n(r),
                    s = t(7727),
                    o = t(7476);
                const l = [
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
                function c() {
                    return (
                        (c = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        c.apply(null, arguments)
                    );
                }
                class d extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, s.G)(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, s.G)(this.props.soundClick));
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                (e && e(u), this.setState({ click: !1 }));
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 })));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.side,
                            s = e.type,
                            d = e.classNames,
                            E = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            m = e.onMouseDown,
                            A = e.onMouseUp,
                            g =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, l)),
                            F = i()(o.Z.base, o.Z[`base__${s}`], o.Z[`base__${r}`], null == d ? void 0 : d.base),
                            D = i()(o.Z.icon, o.Z[`icon__${s}`], o.Z[`icon__${r}`], null == d ? void 0 : d.icon),
                            b = i()(o.Z.glow, null == d ? void 0 : d.glow),
                            h = i()(o.Z.caption, o.Z[`caption__${s}`], null == d ? void 0 : d.caption),
                            C = i()(o.Z.goto, null == d ? void 0 : d.goto);
                        return a().createElement(
                            'div',
                            c(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(E),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                g,
                            ),
                            'info' !== s && a().createElement('div', { className: o.Z.shine }),
                            a().createElement('div', { className: D }, a().createElement('div', { className: b })),
                            a().createElement('div', { className: h }, u),
                            n && a().createElement('div', { className: C }, n),
                        );
                    }
                }
                d.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            6349: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => E });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6373),
                    i = t(1856),
                    s = t(6179),
                    o = t.n(s),
                    l = t(1699);
                const c = ['content', 'classMix', 'className'];
                function d() {
                    return (
                        (d = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        d.apply(null, arguments)
                    );
                }
                const E = (e) => {
                    let u = e.content,
                        t = e.classMix,
                        n = e.className,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, c);
                    const _ = (0, s.useRef)(null),
                        m = (0, s.useState)(!0),
                        A = m[0],
                        g = m[1];
                    return (
                        (0, s.useEffect)(() =>
                            (0, i.v)(() => {
                                const e = _.current;
                                e && e.offsetWidth >= e.scrollWidth && g(!1);
                            }),
                        ),
                        o().createElement(
                            r.i,
                            { isEnabled: A, body: u },
                            o().createElement('div', d({}, E, { ref: _, className: a()(l.Z.base, n, t) }), u),
                        )
                    );
                };
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => o });
                var n = t(6179),
                    a = t.n(n),
                    r = t(2056);
                const i = ['children'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
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
                            t,
                        ),
                        u,
                    );
                };
            },
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var n = t(6179),
                    a = t.n(n),
                    r = t(7078),
                    i = t(6373),
                    s = t(2056);
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = a().createElement('div', { className: t }, e);
                    if (u.header || u.body) return a().createElement(i.i, u, n);
                    const l = u.contentId;
                    return l ? a().createElement(s.u, o({}, u, { contentId: l }), n) : a().createElement(r.t, u, n);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    a = t(6179),
                    r = t.n(a);
                const i = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            d = e.alert,
                            E = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const m = (0, a.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, E]);
                        return r().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((A = null == E ? void 0 : E.hasHtmlContent),
                                        A ? o.SimpleTooltipHtmlContent('resId') : o.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                _,
                            ),
                            u,
                        );
                        var A;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var n = t(7902),
                    a = t(9916),
                    r = t(6179);
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
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const o = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            E = e.onClick,
                            _ = e.ignoreShowDelay,
                            m = void 0 !== _ && _,
                            A = e.ignoreMouseClick,
                            g = void 0 !== A && A,
                            F = e.decoratorId,
                            D = void 0 === F ? 0 : F,
                            b = e.isEnabled,
                            h = void 0 === b || b,
                            C = e.targetId,
                            v = void 0 === C ? 0 : C,
                            f = e.onShow,
                            B = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, i);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => v || (0, n.F)().resId, [v]),
                            S = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, D, { isMouseEvent: !0, on: !0, arguments: s(a) }, y),
                                    f && f(),
                                    (w.current.isVisible = !0));
                            }, [t, D, a, y, f]),
                            N = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, D, { on: !1 }, y),
                                        w.current.isVisible && B && B(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, D, y, B]),
                            R = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && N();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', R, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', R, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && N();
                            }, [h, N]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', N),
                                    () => {
                                        (window.removeEventListener('mouseleave', N), N());
                                    }
                                ),
                                [N],
                            ));
                        return h
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(S, m ? 100 : 400)),
                                                      l && l(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (N(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === g && N(), null == E || E(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === g && N(), null == d || d(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
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
            1856: (e, u, t) => {
                'use strict';
                t.d(u, { v: () => n });
                const n = (e) => {
                    let u,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (u = e()));
                            });
                        })),
                        () => {
                            ('function' == typeof u && u(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                };
            },
            122: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e, u) => {
                    let t;
                    const n = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(n));
                    };
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => s });
                var n = t(3138);
                function a(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return r(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? r(e, u)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function r(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = i, context: r = 'model' } = {}) {
                    const s = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? s.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = s.get(u);
                                void 0 !== t && t(e);
                            });
                        });
                    });
                    const l = (e) => {
                        const n = t(u),
                            a = r.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, a);
                    };
                    return {
                        subscribe: (t, a) => {
                            const i = 'string' == typeof a ? `${r}.${a}` : r,
                                o = n.O.view.addModelObserver(i, u, !0);
                            return (s.set(o, t), e && t(l(a)), o);
                        },
                        readByPath: l,
                        createCallback: (e, u) => {
                            const t = l(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = l(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (var e, t = a(s.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q: () => o });
                var n = t(4598),
                    a = t(9174),
                    r = t(6179),
                    i = t.n(r),
                    s = t(8246);
                const o = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const E = (0, r.useRef)([]),
                                _ = (t, r, i) => {
                                    var o;
                                    const l = s.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == i ? void 0 : i.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == i ? void 0 : i.getter(e)) : c.readByPath(e),
                                        _ = (e) => E.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const r = null != u ? u : d(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : d(e),
                                                        i = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = d(u);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, u) => ((e[u] = a.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            i = Object.entries(r),
                                                            s = i.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        i.forEach(([u, t]) => {
                                                                            s[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            s
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: _ };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && i ? i.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, r.useRef)(!1),
                                A = (0, r.useState)(o),
                                g = A[0],
                                F = A[1],
                                D = (0, r.useState)(() => _(o, l, d)),
                                b = D[0],
                                h = D[1];
                            return (
                                (0, r.useEffect)(() => {
                                    m.current ? h(_(g, l, d)) : (m.current = !0);
                                }, [d, g, l]),
                                (0, r.useEffect)(() => {
                                    F(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (b.externalModel.dispose(), E.current.forEach((e) => e()));
                                    },
                                    [b],
                                ),
                                i().createElement(t.Provider, { value: b }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                'use strict';
                t.d(u, { f8: () => c, s2: () => l, s_: () => i, wB: () => d, yR: () => s });
                var n = t(3649),
                    a = (t(9916), t(8613));
                const r = 24,
                    i = 1e3,
                    s = 60,
                    o = 60 * s,
                    l = r * o;
                (Date.now(), a.Ew.getRegionalDateTime, a.Ew.getFormattedDateTime);
                function c(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / l);
                    u -= t * l;
                    const n = Math.trunc(u / o);
                    u -= n * o;
                    const a = Math.trunc(u / s);
                    return ((u -= a * s), { days: t, hours: n, minutes: a, seconds: u });
                }
                const d = (e, u = !0) =>
                    e.days > 7 && u
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
            7522: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    linear: (e) => e,
                    easeInQuad: (e) => e * e,
                    easeOutQuad: (e) => e * (2 - e),
                    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
                    easeInCubic: (e) => e * e * e,
                    easeOutCubic: (e) => --e * e * e + 1,
                    easeInOutCubic: (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    easeInQuart: (e) => e * e * e * e,
                    easeOutQuart: (e) => 1 - --e * e * e * e,
                    easeInOutQuart: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
                    easeInQuint: (e) => e * e * e * e * e,
                    easeOutQuint: (e) => 1 + --e * e * e * e * e,
                    easeInOutQuint: (e) => (e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e),
                    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
                    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
                    easeInOutCirc(e) {
                        const u = Math.sqrt,
                            t = Math.pow;
                        return e < 0.5 ? (1 - u(1 - t(2 * e, 2))) / 2 : (u(1 - t(-2 * e + 2, 2)) + 1) / 2;
                    },
                    easeOutBack(e) {
                        const u = 1.70158;
                        return 1 + 2.70158 * Math.pow(e - 1, 3) + u * Math.pow(e - 1, 2);
                    },
                    bezier: (e, u, t, n) => (a) =>
                        (1 - a) * (1 - a) * (1 - a) * e +
                        3 * (1 - a) * (1 - a) * a * u +
                        3 * (1 - a) * a * a * t +
                        a * a * a * n,
                };
            },
            527: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => s, onResize: () => r, onScaleUpdated: () => i }));
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        i = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
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
                            })(t)),
                            u
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(527),
                    a = t(2493);
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
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function a(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => a, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s, hY: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    i = Object.assign({}, r, { sound: n.playSound }),
                    s = { play: i, setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => a });
                var n = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => r.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => p,
                        getFontNames: () => w,
                        getScale: () => F,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => f,
                        isFocused: () => C,
                        pxToRem: () => D,
                        remToPx: () => b,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => N,
                    }));
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                const s = 15;
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function d(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: b(u.x), y: b(u.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function p() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    y = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    S = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    N = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    s = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : i);
                        },
                        minimize() {
                            o(s);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function n() {}
                t.d(u, { Bi: () => a, ZT: () => n, jv: () => i, yR: () => r });
                const a = n;
                function r(e) {
                    return e;
                }
                function i() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (n = window.subViews[t].id)),
                        { caller: t, stack: u, resId: n }
                    );
                };
            },
            2344: (e, u, t) => {
                'use strict';
                t.d(u, { D9: () => r, au: () => i });
                var n = t(3469),
                    a = (t(2133), t(2790));
                (t(3779), t(579), t(5360), t(9056));
                const r = a.Z,
                    i = n.Z;
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(6179);
                const a = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3469: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var n = t(7044),
                    a = t(6179);
                const r = () => {},
                    i = (e = 0, u, t = 0, i = r) => {
                        const s = (0, a.useState)(e),
                            o = s[0],
                            l = s[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    l(e);
                                    const a = Date.now(),
                                        r = u || (e > 2 * n.yR ? n.yR : 1),
                                        s = setInterval(() => {
                                            const u = e - Math.floor((Date.now() - a) / n.s_);
                                            null !== t && u <= t ? (l(t), i && i(), clearInterval(s)) : l(u);
                                        }, r * n.s_);
                                    return () => {
                                        clearInterval(s);
                                    };
                                }
                            }, [e, u, t, i]),
                            o
                        );
                    };
            },
            5332: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => r });
                var n = t(4483),
                    a = t(6179);
                function r(e, u, t, r = !1) {
                    const i = (0, a.useMemo)(() => (0, n.Z)(t, r, e), u);
                    return ((0, a.useEffect)(() => i.cancel, [i]), i);
                }
            },
            2133: (e, u, t) => {
                'use strict';
                t(6179);
            },
            8526: (e, u, t) => {
                'use strict';
                t.d(u, { I9: () => o, gd: () => s });
                var n = t(3138),
                    a = t(5521),
                    r = (t(9916), t(6179));
                const i = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function s(e = a.n.NONE, u = i, t = !1, s = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== a.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(a) {
                            if (a.keyCode === e) {
                                if (!s && n.O.view.isEventHandled()) return;
                                (n.O.view.setEventHandled(), u(a), t && a.stopPropagation());
                            }
                        }
                    }, [u, e, t, s]);
                }
                function o(e) {
                    s(a.n.ESCAPE, e);
                }
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => o, GS: () => l, cJ: () => i, fd: () => s });
                var n = t(6179),
                    a = t(7739),
                    r = t(1043);
                let i, s, o;
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
                    })(o || (o = {})));
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        u = e.width,
                        t = e.height,
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
                    return { mediaSize: r, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5360: (e, u, t) => {
                'use strict';
                t(6536);
                var n = t(9916);
                t(6179);
                n.Sw.instance;
                let a;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(a || (a = {}));
            },
            9056: (e, u, t) => {
                'use strict';
                var n = t(9916);
                t(6179);
                n.Sw.instance;
            },
            2039: (e, u, t) => {
                'use strict';
                t.d(u, { b: () => a, k: () => r });
                var n = t(6179);
                const a = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    r = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
            },
            2790: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(6179);
                const a = (e, u) => {
                    const t = (0, n.useRef)();
                    return (
                        (0, n.useEffect)(() => {
                            (u && !u(e)) || (t.current = e);
                        }, [u, e]),
                        t.current
                    );
                };
            },
            3779: (e, u, t) => {
                'use strict';
                t(6179);
            },
            3112: (e, u, t) => {
                'use strict';
                t.d(u, { V: () => r });
                var n = t(6179),
                    a = t(3138);
                const r = () => {
                    const e = (0, n.useState)(a.O.view.getScale()),
                        u = e[0],
                        t = e[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = () => {
                                t(a.O.view.getScale());
                            };
                            return (
                                window.addEventListener('resize', e),
                                () => {
                                    window.removeEventListener('resize', e);
                                }
                            );
                        }, []),
                        u
                    );
                };
            },
            579: (e, u, t) => {
                'use strict';
                (t(3138), t(6179));
            },
            8475: (e, u, t) => {
                'use strict';
                t.d(u, { w: () => i });
                var n = t(6179),
                    a = t(2039);
                const r = 0;
                function i() {
                    const e = (0, n.useRef)(r);
                    return (
                        (0, a.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (u) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (u(), (e.current = r));
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(e.current), (e.current = r));
                                },
                                get isRunning() {
                                    return e.current !== r;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { n: () => n }),
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
            9480: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        collectMapBy: () => p,
                        contains: () => m,
                        every: () => o,
                        exists: () => B,
                        filter: () => c,
                        filterMap: () => w,
                        find: () => v,
                        findIndex: () => S,
                        findIndexLast: () => N,
                        findLast: () => C,
                        get: () => a,
                        includes: () => f,
                        join: () => R,
                        lastElement: () => F,
                        lastIndex: () => A,
                        lastIndexZero: () => g,
                        map: () => s,
                        mapExists: () => y,
                        pop: () => _,
                        push: () => d,
                        reduce: () => T,
                        set: () => E,
                        slice: () => D,
                        some: () => l,
                        splice: () => h,
                        tail: () => b,
                        unsafeGet: () => r,
                        unwrapItem: () => i,
                    }));
                var n = t(8968);
                function a(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const r = a;
                function i(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function s(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function o(e, u) {
                    if (Array.isArray(e)) return e.every(u);
                    for (let t = 0; t < e.length; t++) {
                        if (!u(r(e, t), t, e)) return !1;
                    }
                    return !0;
                }
                function l(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(r(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function c(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let a = 0; a < e.length; a++) {
                        var n;
                        const r = null == (n = e[a]) ? void 0 : n.value;
                        u(r, a, e) && t.push(r);
                    }
                    return t;
                }
                function d(e, u) {
                    if (Array.isArray(e)) return (e.push(u), e);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function E(e, u, t) {
                    if (Array.isArray(e)) return ((e[u] = t), e);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function _(e, u = e.length - 1) {
                    if (Array.isArray(e)) return e.splice(u, 1)[0];
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function m(e, u, t) {
                    for (let n = 0; n < e.length; n++) {
                        const a = r(e, n);
                        if (t && t(a)) return !0;
                        if (u === a) return !0;
                    }
                    return !1;
                }
                function A(e) {
                    return e.length - 1;
                }
                function g(e) {
                    return Math.max(0, e.length - 1);
                }
                function F(e) {
                    if (0 !== e.length) return a(e, e.length - 1);
                }
                function D(e, u = 0, t = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(u, 0);
                            const a = Math.min(t, g(e));
                            return {
                                next: function () {
                                    if (n > a) return { done: !0, value: null };
                                    const u = e[n++];
                                    return u ? { value: i(u), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function b(e, u) {
                    return D(e, Math.max(0, e.length - 1 - u), A(e));
                }
                function h(e, u, t) {
                    if (Array.isArray(e)) return e.splice(u, t);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function C(e, u) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        const n = i(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                function v(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const n = i(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                function f(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (r(e, t) === u) return !0;
                    }
                    return !1;
                }
                function B(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (u(i(e[t]))) return !0;
                    }
                    return !1;
                }
                function p(e, u, t) {
                    return T(e, (e, n) => ((e[u(n)] = t(n)), e), {});
                }
                function w(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const i = r(e, a);
                        u(i, a, e) && n.push(t(i, a, e));
                    }
                    return n;
                }
                function y(e, u) {
                    return w(e, n.C, u);
                }
                function S(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (u(r(e, t), t, e)) return t;
                    }
                }
                function N(e, u) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        if (u(r(e, t), t, e)) return t;
                    }
                }
                function R(e, u = ',') {
                    let t = '';
                    for (let n = 0; n < e.length; n++) {
                        n > 0 && (t += u);
                        const a = r(e, n);
                        t += null == a ? '' : String(a);
                    }
                    return t;
                }
                function T(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, r(e, t), t, e);
                    }
                    return n;
                }
            },
            5099: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => n });
                const n = (e) => {
                    let u = !1;
                    return {
                        promise: new Promise((t, n) => {
                            e.then((e) => !u && t(e)).catch((e) => !u && n(e));
                        }),
                        cancel() {
                            u = !0;
                        },
                    };
                };
            },
            6247: (e, u, t) => {
                'use strict';
                t.d(u, { K: () => n });
                const n = (e, u) => {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(u(n));
                    return t;
                };
            },
            1612: (e, u, t) => {
                'use strict';
                t.d(u, { h: () => a });
                var n = t(9174);
                function a(e) {
                    const u = {};
                    for (const t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                            const a = e[t];
                            u[t] = (0, n.aD)(a);
                        }
                    return u;
                }
            },
            8968: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                t.d(u, { C: () => n });
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { HG: () => i, qP: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const r = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    i = (e) =>
                        r
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = a.length - 1; t >= 0; t--)
                                      for (; e >= a[t]; ) ((u += n[t]), (e -= a[t]));
                                  return u;
                              })(e);
            },
            7727: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => a, G: () => n });
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
            3649: (e, u, t) => {
                'use strict';
                t.d(u, { BN: () => s, Uw: () => A, WU: () => r, uF: () => i, v2: () => a, z4: () => o });
                var n = t(1281);
                let a;
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function i(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function s(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                })(a || (a = {}));
                const o = (e) => e.replace(/&nbsp;/g, ' '),
                    l = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    c = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    d = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? l : c, []),
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    _ = ['zh_cn', 'zh_sg', 'zh_tw'],
                    m = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (_.includes(t)) return E(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => o(e));
                        }
                        return ((e, u = a.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = o(e);
                            return (d(r, /( )/, u).forEach((e) => (t = t.concat(d(e, n, a.left)))), t);
                        })(e, u);
                    },
                    A = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : m(e, u)));
            },
            4483: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(5139);
                function a(e, u, t) {
                    return void 0 === t ? (0, n.Z)(e, u, !1) : (0, n.Z)(e, t, !1 !== u);
                }
            },
            5139: (e, u, t) => {
                'use strict';
                function n(e, u, t, n) {
                    let a,
                        r = !1,
                        i = 0;
                    function s() {
                        a && clearTimeout(a);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - i;
                        function d() {
                            ((i = Date.now()), t.apply(l, o));
                        }
                        r ||
                            (n && !a && d(),
                            s(),
                            void 0 === n && c > e
                                ? d()
                                : !0 !== u &&
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
                        'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                        (o.cancel = function () {
                            (s(), (r = !0));
                        }),
                        o
                    );
                }
                t.d(u, { Z: () => n });
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, {
                    c1: () => w,
                    Sw: () => r.Z,
                    kH: () => d,
                    B3: () => o,
                    Gr: () => l,
                    Z5: () => i.Z5,
                    B0: () => s,
                    c9: () => b,
                    wU: () => f,
                    ry: () => F,
                    Eu: () => D,
                    SW: () => C,
                    P3: () => v,
                });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (n.__instance || (n.__instance = new n()), n.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var r = t(1358);
                var i = t(8613);
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
                var E = t(5521),
                    _ = t(3138);
                const m = ['args'];
                function A(e, u, t, n, a, r, i) {
                    try {
                        var s = e[r](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    F = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            A(r, n, a, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, n, a, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    b = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    h = () => b(s.CLOSE),
                    C = () => b(s.POP_OVER, { on: !1 }),
                    v = (e, u, t, n, a = R.invalid('resId'), r) => {
                        const i = _.O.view.getViewGlobalPosition(),
                            o = t.getBoundingClientRect(),
                            l = o.x,
                            c = o.y,
                            d = o.width,
                            E = o.height,
                            m = {
                                x: _.O.view.pxToRem(l) + i.x,
                                y: _.O.view.pxToRem(c) + i.y,
                                width: _.O.view.pxToRem(d),
                                height: _.O.view.pxToRem(E),
                            };
                        b(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: u,
                            bbox: g(m),
                            on: !0,
                            args: r,
                        });
                    },
                    f = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    B = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var p = t(7572);
                const w = a.instance,
                    y = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => b(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: C,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            b(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: v,
                        addEscapeListener: (e) => {
                            const u = (u) => B(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, h);
                        },
                        handleViewEvent: b,
                        onBindingsReady: F,
                        onLayoutReady: D,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: f,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            92: (e, u, t) => {
                'use strict';
                var n = t(3138),
                    a = t(7739),
                    r = t(6179),
                    i = t.n(r),
                    s = t(6483),
                    o = t.n(s),
                    l = t(926),
                    c = t.n(l),
                    d = t(5415);
                const E = ['children', 'className'];
                function _() {
                    return (
                        (_ = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        _.apply(null, arguments)
                    );
                }
                const m = {
                        [d.fd.ExtraSmall]: '',
                        [d.fd.Small]: c().SMALL_WIDTH,
                        [d.fd.Medium]: `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH}`,
                        [d.fd.Large]: `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH} ${c().LARGE_WIDTH}`,
                        [d.fd.ExtraLarge]:
                            `${c().SMALL_WIDTH} ${c().MEDIUM_WIDTH} ${c().LARGE_WIDTH} ${c().EXTRA_LARGE_WIDTH}`,
                    },
                    A = {
                        [d.Aq.ExtraSmall]: '',
                        [d.Aq.Small]: c().SMALL_HEIGHT,
                        [d.Aq.Medium]: `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT}`,
                        [d.Aq.Large]: `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT} ${c().LARGE_HEIGHT}`,
                        [d.Aq.ExtraLarge]:
                            `${c().SMALL_HEIGHT} ${c().MEDIUM_HEIGHT} ${c().LARGE_HEIGHT} ${c().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [d.cJ.ExtraSmall]: '',
                        [d.cJ.Small]: c().SMALL,
                        [d.cJ.Medium]: `${c().SMALL} ${c().MEDIUM}`,
                        [d.cJ.Large]: `${c().SMALL} ${c().MEDIUM} ${c().LARGE}`,
                        [d.cJ.ExtraLarge]: `${c().SMALL} ${c().MEDIUM} ${c().LARGE} ${c().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, E);
                        const a = (0, d.GS)(),
                            r = a.mediaWidth,
                            s = a.mediaHeight,
                            l = a.mediaSize;
                        return i().createElement('div', _({ className: o()(t, m[r], A[s], g[l]) }, n), u);
                    },
                    D = ['children'];
                const b = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, D);
                    return i().createElement(a.ZN, null, i().createElement(F, t, u));
                };
                var h = t(493),
                    C = t.n(h),
                    v = t(9799);
                let f, B;
                (!(function (e) {
                    ((e[(e.GLADE = 0)] = 'GLADE'),
                        (e[(e.FRIENDS = 1)] = 'FRIENDS'),
                        (e[(e.CHALLENGE = 2)] = 'CHALLENGE'),
                        (e[(e.MARKETPLACE = 3)] = 'MARKETPLACE'),
                        (e[(e.GIFT_MACHINE = 4)] = 'GIFT_MACHINE'),
                        (e[(e.REWARDS = 5)] = 'REWARDS'),
                        (e[(e.INFO = 6)] = 'INFO'),
                        (e[(e.FRIEND_GLADE = 7)] = 'FRIEND_GLADE'),
                        (e[(e.FRIEND_CHALLENGE = 8)] = 'FRIEND_CHALLENGE'),
                        (e[(e.FRIEND_INFO = 9)] = 'FRIEND_INFO'));
                })(f || (f = {})),
                    (function (e) {
                        ((e[(e.DONE = 0)] = 'DONE'),
                            (e[(e.DEFAULT = 1)] = 'DEFAULT'),
                            (e[(e.WITH_SWITCHING_OBJS = 2)] = 'WITH_SWITCHING_OBJS'));
                    })(B || (B = {})));
                var p = t(122),
                    w = t(8526),
                    y = t(3403),
                    S = t(7030),
                    N = t(7522),
                    T = t(2344),
                    L = t(5521),
                    x = t(3215),
                    O = t(4598),
                    k = t(9480),
                    I = t(3946),
                    M = t(9987),
                    P = t(3415),
                    H = t(7727),
                    G = t(324),
                    W = t(3601);
                const Z = {
                    base: 'CounterWithGlow_base_59',
                    base__small: 'CounterWithGlow_base__small_c8',
                    base__disabled: 'CounterWithGlow_base__disabled_3f',
                    amount: 'CounterWithGlow_amount_36',
                };
                var $ = t(2686),
                    j = t(126),
                    q = t(7044);
                const U = 'Glow_base_ee',
                    V = 'Glow_base__increment_42',
                    z = 'Glow_base__decrement_13',
                    Y = 'Glow_animation_3f',
                    K = {
                        width: 400,
                        height: 300,
                        frameCount: 95,
                        chunk: { count: 2, rows: 8, columns: 6 },
                        getChunkPath: (0, j.V)(
                            'R.images.gui.maps.icons.newYear.common.counter_with_glow.increment.sprite_',
                        ),
                    },
                    X = {
                        width: 400,
                        height: 300,
                        frameCount: 80,
                        chunk: { count: 2, rows: 8, columns: 5 },
                        getChunkPath: (0, j.V)(
                            'R.images.gui.maps.icons.newYear.common.counter_with_glow.decrement.sprite_',
                        ),
                    },
                    J = (0, j.q)(K),
                    Q = (0, j.q)(X),
                    ee = (0, r.memo)(({ isDecrement: e = !1 }) =>
                        i().createElement(
                            'div',
                            { className: o()(U, e ? z : V) },
                            i().createElement($.At, {
                                width: 400,
                                height: 300,
                                frameCount: e ? X.frameCount : K.frameCount,
                                frameTime: q.s_ / 50,
                                className: Y,
                                getImageSource: e ? Q : J,
                                loop: !1,
                            }),
                        ),
                    );
                let ue, te;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Normal = 'normal'), (e.Default = 'normal'));
                })(ue || (ue = {})),
                    (function (e) {
                        ((e.Init = 'init'),
                            (e.ShowGlow = 'showGlow'),
                            (e.StartCount = 'startCount'),
                            (e.FinishCount = 'finishCount'),
                            (e.Done = 'done'));
                    })(te || (te = {})));
                const ne = ({ count: e, hasSound: u, maxCount: t = W.k, size: n = ue.Default }) => {
                        const a = (0, r.useState)(te.Init),
                            s = a[0],
                            l = a[1],
                            c = (0, r.useRef)(e),
                            d = (0, W.n)(e, s !== te.Init, t),
                            E = d[0],
                            _ = E.countFrom,
                            m = E.countTo,
                            A = E.isDecrement,
                            g = d[1].handleAnimationEnd;
                        (0, r.useEffect)(() => {
                            e !== c.current && (l(te.ShowGlow), (c.current = e));
                        }, [e]);
                        const F = (0, r.useCallback)(() => {
                            l(te.FinishCount);
                        }, []);
                        return (
                            (0, r.useEffect)(() => {
                                switch (s) {
                                    case te.ShowGlow:
                                        return (0, p.F)(() => {
                                            (u &&
                                                (0, H.G)(
                                                    R.sounds[
                                                        A
                                                            ? 'hangar_newyear_debrises_spend'
                                                            : 'hangar_newyear_debrises_get'
                                                    ](),
                                                ),
                                                l(te.StartCount));
                                        }, 800);
                                    case te.FinishCount:
                                        return (0, p.F)(() => l(te.Done), 800);
                                    case te.Done:
                                        return (0, p.F)(() => {
                                            (l(te.Init), g());
                                        }, 300);
                                    default:
                                        return;
                                }
                            }, [s, A, u, g]),
                            i().createElement(
                                'div',
                                { className: o()(Z.base, 0 === _ && 0 === m && Z.base__disabled, Z[`base__${n}`]) },
                                s !== te.Init && i().createElement(ee, { isDecrement: A, key: m }),
                                i().createElement(
                                    'div',
                                    { className: Z.amount },
                                    i().createElement(G.Z, {
                                        key: `${_}-${m}`,
                                        valueFrom: _,
                                        valueTo: m,
                                        hasPlus: e > t,
                                        duration: 800,
                                        isDisabled: s !== te.StartCount,
                                        isPreAnimation: s === te.ShowGlow,
                                        onAnimationComplete: F,
                                    }),
                                ),
                            )
                        );
                    },
                    ae = {
                        base: 'MenuItem_base_b4',
                        base__active: 'MenuItem_base__active_f6',
                        base__disabled: 'MenuItem_base__disabled_7e',
                        inner: 'MenuItem_inner_0b',
                        icon: 'MenuItem_icon_8b',
                        base__friends: 'MenuItem_base__friends_86',
                        titleOver: 'MenuItem_titleOver_ed',
                        selectionIndicator: 'MenuItem_selectionIndicator_9b',
                        selectionIndicator__active: 'MenuItem_selectionIndicator__active_96',
                        glow: 'MenuItem_glow_ea',
                        light: 'MenuItem_light_bf',
                        title: 'MenuItem_title_9d',
                        info: 'MenuItem_info_f1',
                        unseen: 'MenuItem_unseen_1b',
                    },
                    re = R.strings.ny.widget.menu;
                let ie, se;
                (!(function (e) {
                    ((e.Glade = 'glade'),
                        (e.Marketplace = 'marketplace'),
                        (e.Rewards = 'rewards'),
                        (e.Gift = 'gift'),
                        (e.Challenge = 'challenge'),
                        (e.Friends = 'friends'),
                        (e.FriendGlade = 'friendGlade'),
                        (e.FriendChallenge = 'friendChallenge'));
                })(ie || (ie = {})),
                    (function (e) {
                        ((e.Normal = 'normal'), (e.Active = 'active'), (e.Disabled = 'disabled'));
                    })(se || (se = {})));
                const oe = (0, y.Pi)(({ index: e, state: u, onSelected: t }) => {
                        const n = Ee().model,
                            a = n.computes.getItemMenu(e),
                            r = a.name,
                            s = a.iconName,
                            l = a.unseenCount,
                            c = a.infoCount,
                            E = n.computes.getIsFriendHangar,
                            _ = (0, d.GS)().mediaSize,
                            m = o()(ae.base, ae[`base__${u}`], E() && _ < d.cJ.Small && ae.base__friends),
                            A = ((e, u) => {
                                switch (e) {
                                    case ie.Gift:
                                        return {
                                            contentId: R.views.lobby.new_year.tooltips.NyMenuGiftTooltip('resId'),
                                        };
                                    case ie.Glade:
                                    case ie.Marketplace:
                                    case ie.Rewards:
                                    case ie.Challenge:
                                    case ie.Friends:
                                        if (u)
                                            return { header: re[e].header(), body: re.friends.disabledDescription() };
                                    case ie.FriendGlade:
                                    case ie.FriendChallenge:
                                    default:
                                        return { header: re[e].header(), body: re[e].body() };
                                }
                            })(r, u === se.Disabled);
                        return i().createElement(
                            P.l,
                            { tooltipArgs: A },
                            i().createElement(
                                'div',
                                {
                                    className: m,
                                    onClick: () => {
                                        u === se.Normal && t(r);
                                    },
                                    onMouseEnter: () => {
                                        u === se.Normal && H.$.playHighlight();
                                    },
                                },
                                i().createElement(
                                    'div',
                                    { className: ae.inner },
                                    i().createElement(
                                        'div',
                                        {
                                            className: ae.icon,
                                            style: {
                                                backgroundImage: `url('R.images.gui.maps.icons.newYear.main_menu.${s}${_ < d.cJ.Medium ? '' : '_big'}')`,
                                            },
                                        },
                                        c > 0 &&
                                            i().createElement(
                                                'div',
                                                { className: ae.info },
                                                i().createElement(ne, {
                                                    count: c,
                                                    size: _ < d.cJ.Medium ? ue.Small : ue.Normal,
                                                    hasSound: !0,
                                                }),
                                            ),
                                        l > 0 &&
                                            i().createElement(
                                                'div',
                                                { className: ae.unseen },
                                                i().createElement(M.A, { isEmpty: !0 }),
                                            ),
                                    ),
                                    i().createElement(
                                        'div',
                                        {
                                            className: o()(
                                                ae.selectionIndicator,
                                                u === se.Active && ae.selectionIndicator__active,
                                            ),
                                        },
                                        i().createElement('div', { className: ae.glow }),
                                        i().createElement('div', { className: ae.light }),
                                    ),
                                    u !== se.Disabled && i().createElement('div', { className: ae.titleOver }),
                                    i().createElement('div', { className: ae.title }, re[r].title()),
                                ),
                            ),
                        );
                    }),
                    le = { name: '', unseenCount: 0, infoCount: 0, iconName: '', isEnabled: !0, isCompleted: !1 },
                    ce = (0, x.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    itemsMenu: e.array('itemsMenu'),
                                    triggerHintTabs: e.object('triggerHintTabs'),
                                    activeTriggerHintTabs: e.array('triggerHintTabs.activeTabs'),
                                },
                                t = (0, I.Om)(() => (0, k.mapExists)(u.activeTriggerHintTabs.get(), O.yR)),
                                n = (0, I.Om)(
                                    (e) => {
                                        var t;
                                        return null != (t = k.get(u.itemsMenu.get(), e)) ? t : le;
                                    },
                                    { equals: O.jv },
                                ),
                                a = (0, I.Om)(() => u.root.get().startIndexMenu, { equals: O.jv }),
                                r = (0, I.Om)((e) =>
                                    n(e).isEnabled ? (a() === e ? se.Active : se.Normal) : se.Disabled,
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getIsFriendHangar: (0, I.Om)(() => u.root.get().isFriendHangar),
                                    getItemsMenuLength: (0, I.Om)(() => u.itemsMenu.get().length),
                                    getItemMenu: n,
                                    getItemMenuState: r,
                                    getActiveTriggerHintTabs: t,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            switchContent: e.createCallback((e) => ({ view: e }), 'onSwitchContent'),
                            goToFriendsList: e.createCallbackNoArgs('onGoToFriendsList'),
                            showLootList: e.createCallbackNoArgs('onShowLootList'),
                        }),
                    ),
                    de = ce[0],
                    Ee = ce[1];
                var _e = t(8089),
                    me = t(6373),
                    Ae = t(5332),
                    ge = t(6247);
                const Fe = {
                    base: 'TriggerHint_base_11',
                    bg: 'TriggerHint_bg_16',
                    base__blue: 'TriggerHint_base__blue_29',
                    content: 'TriggerHint_content_f8',
                    border: 'TriggerHint_border_87',
                    base__visible: 'TriggerHint_base__visible_ba',
                    triggerHolder: 'TriggerHint_triggerHolder_46',
                    base__right: 'TriggerHint_base__right_3e',
                    base__left: 'TriggerHint_base__left_dd',
                    base__up: 'TriggerHint_base__up_bb',
                    text: 'TriggerHint_text_f7',
                    animationArrow: 'TriggerHint_animationArrow_2c',
                    arrow: 'TriggerHint_arrow_fd',
                    blink: 'TriggerHint_blink_26',
                    base__cyan: 'TriggerHint_base__cyan_5d',
                    base__withoutAnimation: 'TriggerHint_base__withoutAnimation_19',
                };
                let De, be;
                (!(function (e) {
                    ((e.Blue = 'blue'), (e.Cyan = 'cyan'));
                })(De || (De = {})),
                    (function (e) {
                        ((e.Right = 'right'), (e.Left = 'left'), (e.Up = 'up'), (e.Down = 'down'));
                    })(be || (be = {})));
                const he = ({
                        direction: e = be.Right,
                        text: u,
                        isVisible: t,
                        children: a,
                        hintType: r = De.Blue,
                        classNames: s,
                    }) => {
                        const l = n.O.client.graphicsQuality.isLow();
                        return i().createElement(
                            'div',
                            {
                                className: o()(
                                    Fe.base,
                                    Fe[`base__${r}`],
                                    Fe[`base__${e}`],
                                    t && Fe.base__visible,
                                    l && Fe.base__withoutAnimation,
                                    null == s ? void 0 : s.base,
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: o()(Fe.content, null == s ? void 0 : s.content) },
                                i().createElement('div', { className: o()(Fe.border, null == s ? void 0 : s.border) }),
                                a,
                            ),
                            i().createElement(
                                'div',
                                { className: o()(Fe.triggerHolder, null == s ? void 0 : s.holder) },
                                i().createElement('div', { className: o()(Fe.bg, null == s ? void 0 : s.arrowBg) }),
                                i().createElement(
                                    'div',
                                    { className: o()(Fe.animationArrow, null == s ? void 0 : s.arrow) },
                                    i().createElement('div', { className: Fe.arrow }),
                                ),
                                i().createElement('div', { className: o()(Fe.text, null == s ? void 0 : s.text) }, u),
                            ),
                        );
                    },
                    Ce = {
                        base: 'MainMenu_base_9e',
                        list: 'MainMenu_list_1b',
                        triggerHintText: 'MainMenu_triggerHintText_f6',
                        triggerHintBackground__glade: 'MainMenu_triggerHintBackground__glade_82',
                    },
                    ve = (0, y.Pi)(() => {
                        const e = Ee(),
                            u = e.model,
                            t = e.controls,
                            n = u.computes,
                            a = n.getItemsMenuLength,
                            r = n.getItemMenuState,
                            s = n.getActiveTriggerHintTabs,
                            l = u.triggerHintTabs.get().triggerHintType,
                            c = (0, Ae.N)((e) => t.switchContent(e), [t.switchContent], 400, !0);
                        return i().createElement(
                            'div',
                            { className: Ce.base },
                            i().createElement(
                                'div',
                                { className: Ce.list },
                                (0, ge.K)(a(), (e) => {
                                    const t = u.computes.getItemMenu(e).name,
                                        n = r(e),
                                        a = n !== se.Active && n !== se.Disabled && s().includes(t);
                                    return i().createElement(
                                        'div',
                                        { key: e },
                                        i().createElement(
                                            he,
                                            {
                                                isVisible: a,
                                                text: String(R.strings.ny.triggerHints.$dyn(l)),
                                                direction: be.Up,
                                                classNames: {
                                                    text: Ce.triggerHintText,
                                                    arrowBg: o()(
                                                        Ce.triggerHintBackground,
                                                        t === ie.Glade && Ce.triggerHintBackground__glade,
                                                    ),
                                                },
                                            },
                                            i().createElement(oe, { index: e, onSelected: c, state: r(e) }),
                                        ),
                                    );
                                }),
                            ),
                        );
                    });
                var fe = t(3032),
                    Be = t(944),
                    pe = t(3616),
                    we = t(1037);
                let ye;
                !(function (e) {
                    ((e.Available = 'available'),
                        (e.AvailableExtra = 'availableExtra'),
                        (e.Collected = 'collected'),
                        (e.Finished = 'finished'),
                        (e.Unavailable = 'unavailable'));
                })(ye || (ye = {}));
                var Se = t(3269),
                    Ne = t(2056),
                    Re = t(4254);
                const Te = 'ResourcePanel_base_1e',
                    Le = 'ResourcePanel_item_83',
                    xe = 'ResourcePanel_count_8d',
                    Oe = R.strings.ny.resourceTooltip.unavailable,
                    ke = ({ resources: e, isWalletAvailable: u = !0, hasAnimation: t = !1 }) =>
                        i().createElement(
                            me.i,
                            { header: Oe.header(), body: Oe.body(), isEnabled: !u },
                            i().createElement(
                                'div',
                                { className: Te },
                                e.map(({ type: e, value: n }) =>
                                    i().createElement(
                                        'div',
                                        { key: e, className: Le },
                                        i().createElement(
                                            Ne.u,
                                            {
                                                contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                                args: { type: e },
                                                isEnabled: u,
                                            },
                                            i().createElement(
                                                'div',
                                                null,
                                                i().createElement(Re._z, {
                                                    withAnimation: t,
                                                    type: e,
                                                    isError: !u,
                                                    value: n,
                                                    size: Re.q4.s24,
                                                    classNames: { value: xe },
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    Ie = 'Balance_base_93',
                    Me = 'Balance_collectButton_d4',
                    Pe = 'Balance_resources_6d',
                    He = 'Balance_resources__clickable_2e',
                    Ge = 'Balance_collectWrapper_25',
                    We = 'Balance_countdownText_3d',
                    Ze = 'Balance_triggerHintBorder_68',
                    $e = {
                        base: 'BalanceButton_base_de',
                        base__disabled: 'BalanceButton_base__disabled_57',
                        background: 'BalanceButton_background_60',
                        border: 'BalanceButton_border_b2',
                        lightWrapper: 'BalanceButton_lightWrapper_16',
                        light: 'BalanceButton_light_f9',
                        icon: 'BalanceButton_icon_aa',
                        base__convert: 'BalanceButton_base__convert_cc',
                        base__extra: 'BalanceButton_base__extra_ef',
                        bubble: 'BalanceButton_bubble_f3',
                    };
                let je;
                !(function (e) {
                    ((e.Collect = 'collect'), (e.Extra = 'extra'), (e.Convert = 'convert'));
                })(je || (je = {}));
                const qe = ({ type: e, isBubbleVisible: u, isDisabled: t, onClick: n }) => {
                        const a = (0, d.GS)().mediaSize,
                            s = viewEnv.getScale(),
                            l = (0, r.useState)(!1),
                            c = l[0],
                            E = l[1],
                            _ = a >= d.cJ.Medium ? 6 : 4;
                        return i().createElement(
                            'div',
                            {
                                className: o()($e.base, t && $e.base__disabled, c && $e.base__hover, $e[`base__${e}`]),
                                onClick: () => {
                                    t || ((0, H.G)(R.sounds.play()), null == n || n());
                                },
                                onMouseEnter: () => {
                                    t || ((0, H.G)(R.sounds.highlight_red_butt()), E(!0));
                                },
                                onMouseLeave: () => E(!1),
                            },
                            i().createElement(
                                'svg',
                                { className: $e.background, viewBox: '0 0 100% 100%' },
                                i().createElement(
                                    'defs',
                                    null,
                                    i().createElement(
                                        'linearGradient',
                                        {
                                            id: 'bg-gradient',
                                            gradientUnits: 'userSpaceOnUse',
                                            x1: '0%',
                                            y1: '0%',
                                            x2: '0%',
                                            y2: '100%',
                                        },
                                        c
                                            ? i().createElement(
                                                  i().Fragment,
                                                  null,
                                                  i().createElement('stop', { offset: '8%', stopColor: '#639DFF' }),
                                                  i().createElement('stop', { offset: '88%', stopColor: '#2A45BB' }),
                                              )
                                            : t
                                              ? i().createElement(
                                                    i().Fragment,
                                                    null,
                                                    i().createElement('stop', { offset: '-4%', stopColor: '#1F2A87' }),
                                                    i().createElement('stop', { offset: '99%', stopColor: '#4160CD' }),
                                                )
                                              : i().createElement(
                                                    i().Fragment,
                                                    null,
                                                    i().createElement('stop', { offset: '8%', stopColor: '#4983E5' }),
                                                    i().createElement('stop', { offset: '88%', stopColor: '#1C36A3' }),
                                                ),
                                    ),
                                ),
                                i().createElement('rect', {
                                    x: '0%',
                                    y: '0%',
                                    width: '100%',
                                    height: '100%',
                                    rx: _ * s,
                                    fill: 'url(#bg-gradient)',
                                }),
                            ),
                            i().createElement('div', { className: $e.border }),
                            i().createElement(
                                'div',
                                { className: $e.lightWrapper },
                                i().createElement('div', { className: $e.light }),
                            ),
                            i().createElement('div', { className: $e.icon }),
                            u &&
                                i().createElement(
                                    'div',
                                    { className: $e.bubble },
                                    i().createElement(M.A, { size: 'small', isEmpty: !0 }),
                                ),
                        );
                    },
                    Ue = (0, x.q)()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), resources: e.array('resources', []) },
                                t = (0, I.Om)(() =>
                                    k.map(u.resources.get(), (e) => ({ type: e.type, value: e.value })),
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    getResources: t,
                                    collectState: (0, I.Om)(() => u.root.get().collectState),
                                    collectCooldown: (0, I.Om)(() => u.root.get().collectCooldown),
                                    isResourcesTabOpen: (0, I.Om)(() => u.root.get().isResourcesTabOpen),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            collectResources: e.createCallbackNoArgs('onCollectResources'),
                            convertResources: e.createCallbackNoArgs('onConvertResources'),
                            goToResources: e.createCallbackNoArgs('onGoToResources'),
                        }),
                    ),
                    Ve = Ue[0],
                    ze = Ue[1],
                    Ye = R.strings.ny.mainView.balance.convertBtn.tooltip,
                    Ke = [ye.Available, ye.AvailableExtra],
                    Xe = {
                        [ye.Available]: Se.V.Available,
                        [ye.AvailableExtra]: Se.V.AvailableExtra,
                        [ye.Collected]: Se.V.Collected,
                        [ye.Unavailable]: Se.V.Available,
                        [ye.Finished]: Se.V.Finished,
                    },
                    Je = (e) => ({
                        contentId: R.views.lobby.new_year.tooltips.NyResourceCollectorTooltip('resId'),
                        args: { type: Xe[e] },
                    }),
                    Qe = (0, y.Pi)(({ isFriendHangar: e = !1 }) => {
                        const u = ze(),
                            t = u.model,
                            n = u.controls,
                            a = t.root.get(),
                            r = a.isWalletAvailable,
                            s = a.isHintVisible,
                            l = t.computes,
                            c = l.collectState,
                            d = l.collectCooldown,
                            E = l.isResourcesTabOpen,
                            _ = l.getResources,
                            m = n.collectResources,
                            A = n.convertResources,
                            g = c() === ye.AvailableExtra ? je.Extra : je.Collect,
                            F = !E() && !e,
                            D = Ke.includes(c()) && r,
                            b = d() > 0 && c() === ye.Collected;
                        return i().createElement(
                            'div',
                            { className: Ie },
                            !e &&
                                i().createElement(
                                    P.l,
                                    { tooltipArgs: Je(c()) },
                                    i().createElement(
                                        'div',
                                        { className: Ge },
                                        b &&
                                            i().createElement(Be.Z, {
                                                duration: d(),
                                                icon: fe.ls.Timer,
                                                style: fe.o_.Description,
                                                classNames: { text: We },
                                            }),
                                        i().createElement(
                                            'div',
                                            { className: Me },
                                            i().createElement(
                                                he,
                                                {
                                                    isVisible: s,
                                                    text: R.strings.ny.triggerHints.Resources(),
                                                    direction: be.Left,
                                                    classNames: { border: Ze },
                                                },
                                                i().createElement(qe, {
                                                    type: g,
                                                    isBubbleVisible: D,
                                                    isDisabled: E(),
                                                    onClick: m,
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            i().createElement(
                                'div',
                                { className: o()(Pe, F && He), onClick: () => F && n.goToResources() },
                                i().createElement(ke, { resources: _(), isWalletAvailable: r, hasAnimation: r }),
                            ),
                            i().createElement(
                                pe.Z,
                                {
                                    contentId: R.views.lobby.new_year.popovers.NyResourcesConvertPopover('resId'),
                                    direction: we.IC.Bottom,
                                },
                                i().createElement(
                                    me.i,
                                    { header: Ye.header(), body: Ye.body() },
                                    i().createElement(qe, { type: je.Convert, onClick: A }),
                                ),
                            ),
                        );
                    }),
                    eu = 'Navigation_base_5d',
                    uu = 'Navigation_close_0a',
                    tu = 'Navigation_base__friends_f3',
                    nu = 'Navigation_lootListInfo_a6',
                    au = 'Navigation_infoCaption_8d',
                    ru = 'Navigation_closeCaption_0c',
                    iu = 'Navigation_background_8d',
                    su = 'Navigation_widgetWrapper_66',
                    ou = 'Navigation_widgetWrapper__clickable_5a',
                    lu = 'Navigation_mainMenu_c6',
                    cu = 'Navigation_balance_15',
                    du = 'Navigation_balanceWrapper_9f';
                var Eu = t(9495),
                    _u = t(8764),
                    mu = t(5976),
                    Au = t(1132),
                    gu = t(2578),
                    Fu = t(3668),
                    Du = t(1856),
                    bu = t(3112),
                    hu = t(4302),
                    Cu = t(6497),
                    vu = t(3017);
                Symbol('arabicLevel');
                function fu(e) {
                    if ('string' == typeof e) {
                        const u = Number(e);
                        if (Number.isNaN(u)) {
                            const u = `ArabianLevel: value ${e} is not valid, available: 1 - 10`;
                            console.error(u);
                        }
                        return fu(u);
                    }
                    if (e < 1 || e > 10 || e !== Math.floor(e)) {
                        const u = `ArabicLevel: value ${e} is out of range [1, 10]`;
                        console.error(u);
                    }
                    return e;
                }
                t(9690);
                Symbol('romanLevel');
                const Bu = 10,
                    pu = 1,
                    wu = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10 };
                function yu(e) {
                    if ('string' == typeof e) {
                        const u = wu[e];
                        if (void 0 === u) {
                            const u = `RomanLevel: value ${e} is not valid, available: ${Object.keys(wu)}`;
                            console.error(u);
                        }
                        return yu(u);
                    }
                    if (e < pu || e > Bu || e !== Math.floor(e)) {
                        const u = `RomanLevel: value ${e} is out of range [${pu}, ${Bu}]`;
                        console.error(u);
                    }
                    return e;
                }
                const Su = (e, u) => (e ? { type: 'roman', level: yu(u) } : { type: 'arabic', level: fu(u) }),
                    Nu = (e, u) => {
                        const t = u / 2,
                            n = e - t;
                        return `M ${e + t} ${e + t} m -${n}, 0 a ${n},${n} 0 1,0 ${2 * n},0 a ${n},${n} 0 1,0 -${2 * n},0`;
                    },
                    Ru = 'GlowingProgressBar_base_f6',
                    Tu = 'GlowingProgressBar_base__levelUp_ba',
                    Lu = ({ progressBarSize: e, prevPoints: u, currentPoints: t, maxPoints: n, isActive: a }) => {
                        const s = (0, r.useRef)(null),
                            l = (0, bu.V)(),
                            c = Cu.L4 * l,
                            d = (0, S.useSpring)(() => ({
                                progress: t,
                                onChange: (u) => {
                                    if (!s.current) return;
                                    var t, a;
                                    const r = `${((t = e / 2 - c), (a = ((e, u) => (100 * e) / u)(u.value.progress, n) + c), ((Math.PI * (2 * t)) / 100) * a)}, 314`;
                                    s.current.setAttribute('stroke-dasharray', r);
                                },
                            }))[1];
                        return (
                            (0, r.useEffect)(() => {
                                t > u &&
                                    d.start({
                                        from: { progress: u },
                                        to: { progress: t },
                                        config: { duration: 800, easing: N.Z.easeInOutCubic },
                                    });
                            }, [d, u, t, e, c, n]),
                            i().createElement(
                                'svg',
                                { className: o()(Ru, a && Tu) },
                                i().createElement('path', {
                                    ref: s,
                                    d: `${Nu(e / 2, c)}`,
                                    fill: 'transparent',
                                    stroke: 'rgba(255, 255, 255, 0.8)',
                                    strokeWidth: c,
                                    strokeLinecap: 'round',
                                }),
                            )
                        );
                    },
                    xu = {
                        base: 'LevelProgress_base_7a',
                        base__main: 'LevelProgress_base__main_7b',
                        base__navigation: 'LevelProgress_base__navigation_87',
                        levelWrapper: 'LevelProgress_levelWrapper_39',
                        level: 'LevelProgress_level_4c',
                        base__increase: 'LevelProgress_base__increase_a4',
                        levelUp: 'LevelProgress_levelUp_37',
                        level__ghost: 'LevelProgress_level__ghost_78',
                        levelUpGhost: 'LevelProgress_levelUpGhost_e7',
                        levelGlow: 'LevelProgress_levelGlow_a1',
                        animateBox: 'LevelProgress_animateBox_41',
                        particles: 'LevelProgress_particles_7d',
                        circles: 'LevelProgress_circles_25',
                        circle: 'LevelProgress_circle_df',
                        circle__1: 'LevelProgress_circle__1_f1',
                        circle__2: 'LevelProgress_circle__2_2d',
                        circle__3: 'LevelProgress_circle__3_63',
                        circle__4: 'LevelProgress_circle__4_62',
                        splash: 'LevelProgress_splash_71',
                        glowProgressbar: 'LevelProgress_glowProgressbar_da',
                    };
                function Ou() {
                    return (
                        (Ou = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Ou.apply(null, arguments)
                    );
                }
                const ku = {
                        width: 180,
                        height: 250,
                        frameCount: 86,
                        chunk: { count: 2, rows: 6, columns: 8 },
                        getChunkPath: (0, $.Vx)(
                            'R.images.gui.maps.icons.newYear.sequence.main_widget.particles.sprite_',
                        ),
                    },
                    Iu = (0, $.qs)(ku),
                    Mu = ({
                        type: e,
                        level: u,
                        maxPoints: t,
                        currentPoints: n,
                        progressBarSize: a,
                        isRomanNumbersAllowed: s = !0,
                        hasAnimation: l,
                        isSkipAnimation: c,
                        isFriendHangar: d = !1,
                        onAnimationEnd: E,
                    }) => {
                        var _, m, A;
                        const g = (0, r.useState)(u),
                            F = g[0],
                            D = g[1],
                            b = (0, r.useState)(n),
                            h = b[0],
                            C = b[1],
                            v = (0, r.useState)(t),
                            f = v[0],
                            B = v[1],
                            w = (0, r.useState)(!1),
                            y = w[0],
                            N = w[1],
                            R = !mu.Z.isWeak(),
                            L = null != (_ = (0, T.D9)(F)) ? _ : F,
                            x = null != (m = (0, T.D9)(h)) ? m : h,
                            O = null != (A = (0, T.D9)(f)) ? A : f,
                            k = i().useRef(null),
                            I = e === Zu.Main,
                            M = n > x,
                            P = u > L,
                            H = (0, bu.V)();
                        ((0, r.useEffect)(() => {
                            if (I) D(u);
                            else if (l)
                                return c
                                    ? (C(n), B(t), void N(!1))
                                    : P
                                      ? (N(!0),
                                        C(O),
                                        (0, p.F)(() => {
                                            (C(n), B(t), N(!1), null == E || E());
                                        }, 3e3))
                                      : M
                                        ? (N(!0),
                                          C(n),
                                          (0, p.F)(() => {
                                              (N(!1), null == E || E());
                                          }, 1500))
                                        : void 0;
                        }, [n, l, P, I, M, c, u, t, E, O]),
                            (0, r.useEffect)(() => {
                                d && (F !== u && D(u), h !== n && C(n));
                            }, [F, n, l, d, u, h]),
                            (0, r.useEffect)(() => {
                                const e = k.current;
                                if (e && l)
                                    return (
                                        e.classList.remove(xu.base__increase),
                                        (0, Du.v)(() => {
                                            if (P)
                                                return (
                                                    e.classList.add(xu.base__increase),
                                                    (0, p.F)(() => {
                                                        D(u);
                                                    }, 50)
                                                );
                                        })
                                    );
                            }, [l, P, u, L]));
                        const G = { '--circle-size': `${a + Cu.L4}rem` };
                        return i().createElement(
                            'div',
                            { ref: k, style: G, className: o()(xu.base, xu[`base__${e}`]) },
                            R && i().createElement('div', { className: xu.levelGlow }),
                            i().createElement(
                                'div',
                                { className: xu.animateBox },
                                l &&
                                    i().createElement($.At, {
                                        className: xu.particles,
                                        width: ku.width,
                                        height: ku.height,
                                        loop: !1,
                                        frameCount: ku.frameCount,
                                        getImageSource: Iu,
                                    }),
                                i().createElement(
                                    'div',
                                    { className: xu.circles },
                                    i().createElement('div', { className: o()(xu.circle, xu.circle__1) }),
                                    i().createElement('div', { className: o()(xu.circle, xu.circle__2) }),
                                    i().createElement('div', { className: o()(xu.circle, xu.circle__3) }),
                                    i().createElement('div', { className: o()(xu.circle, xu.circle__4) }),
                                ),
                                R &&
                                    i().createElement(
                                        'div',
                                        { className: xu.glowProgressbar },
                                        i().createElement(Lu, {
                                            progressBarSize: a * H,
                                            prevPoints: x,
                                            currentPoints: h,
                                            maxPoints: f,
                                            isActive: y,
                                        }),
                                    ),
                            ),
                            i().createElement(hu.G, {
                                theme: hu.G.Theme.Default,
                                prevValue: I ? n : x,
                                currentValue: I ? n : h,
                                maxValue: I ? t : f,
                                size: a,
                            }),
                            i().createElement(
                                'div',
                                { className: xu.levelWrapper },
                                i().createElement(
                                    S.animated.div,
                                    { className: xu.level },
                                    i().createElement(vu.W, Ou({ theme: vu.Q.Simple }, Su(s, null != L ? L : 1))),
                                ),
                            ),
                            i().createElement(
                                'div',
                                { className: xu.levelWrapper },
                                i().createElement(
                                    'div',
                                    { className: o()(xu.level, xu.level__ghost) },
                                    i().createElement(vu.W, Ou({ theme: vu.Q.Simple }, Su(s, F))),
                                ),
                            ),
                        );
                    },
                    Pu = {
                        base: 'Widget_base_b3',
                        glow: 'Widget_glow_4f',
                        base__main: 'Widget_base__main_ff',
                        base__additionalEffects: 'Widget_base__additionalEffects_f4',
                        base__navigation: 'Widget_base__navigation_e4',
                        bigGlow: 'Widget_bigGlow_5d',
                        hangarName: 'Widget_hangarName_61',
                        title: 'Widget_title_7d',
                        description: 'Widget_description_9b',
                        line: 'Widget_line_9b',
                        status: 'Widget_status_4a',
                        hangarNameWrapper: 'Widget_hangarNameWrapper_76',
                        statusName: 'Widget_statusName_39',
                    },
                    Hu = R.strings.ny.navigation.widget,
                    Gu = (e, u) => {
                        if (e !== Zu.Main)
                            return u
                                ? { body: Hu.hangarName.friendView.tooltip.body() }
                                : {
                                      header: Hu.hangarName.mainView.tooltip.header(),
                                      body: Hu.hangarName.mainView.tooltip.body(),
                                  };
                    },
                    Wu = (e, u) => {
                        if (e !== Zu.Main)
                            return u
                                ? { body: Hu.progressBar.friendView.tooltip.body() }
                                : { contentId: R.views.lobby.new_year.tooltips.NyMainWidgetTooltip('resId') };
                    };
                let Zu;
                !(function (e) {
                    ((e.Main = 'main'), (e.Navigation = 'navigation'));
                })(Zu || (Zu = {}));
                const $u = { [_u.J.Online]: gu.q.Online, [_u.J.Offline]: gu.q.Offline },
                    ju = ({
                        type: e,
                        title: u,
                        description: t,
                        level: n,
                        maxPoints: a,
                        currentPoints: r,
                        progressBarSize: s,
                        isRomanNumbersAllowed: l = !0,
                        hangarNameType: c = Eu.vS.Default,
                        hasAnimation: d,
                        isSkipAnimation: E,
                        onAnimationEnd: _,
                        isFriendHangar: m,
                        friendStatusInfo: A,
                    }) => {
                        const g = A ? $u[A.userStatus] : $u[_u.J.Offline],
                            F = A && {
                                type: 'playerStatus',
                                payload: {
                                    name: null == A ? void 0 : A.nickname,
                                    serverName: null == A ? void 0 : A.serverName,
                                    status: g,
                                },
                            },
                            D = !mu.Z.isWeak();
                        return i().createElement(
                            'div',
                            { className: o()(Pu.base, Pu[`base__${e}`], D && Pu.base__additionalEffects) },
                            i().createElement('div', { className: Pu.glow }),
                            D && e === Zu.Main && i().createElement('div', { className: Pu.bigGlow }),
                            i().createElement(
                                P.l,
                                { tooltipArgs: Wu(e, m) },
                                i().createElement(Mu, {
                                    type: e,
                                    level: n,
                                    maxPoints: a,
                                    currentPoints: r,
                                    progressBarSize: s,
                                    isRomanNumbersAllowed: l,
                                    hasAnimation: d,
                                    isSkipAnimation: E,
                                    isFriendHangar: m,
                                    onAnimationEnd: _,
                                }),
                            ),
                            i().createElement(
                                'div',
                                { className: Pu.hangarNameWrapper },
                                i().createElement(
                                    P.l,
                                    { tooltipArgs: Gu(e, m) },
                                    i().createElement(
                                        'div',
                                        { className: Pu.hangarName },
                                        i().createElement(Eu.A6, {
                                            classNames: { title: Pu.title, description: Pu.description, line: Pu.line },
                                            title: (0, Au.Y)(u),
                                            description: (0, Au.E)(t),
                                            size: Eu.A6.Size.Dynamic,
                                            type: c,
                                        }),
                                    ),
                                ),
                                m &&
                                    A &&
                                    (null == A ? void 0 : A.isShow) &&
                                    i().createElement(
                                        'div',
                                        { className: Pu.status },
                                        i().createElement(Fu.s, {
                                            name: null == A ? void 0 : A.nickname,
                                            status: g,
                                            tooltipArgs: F,
                                            classNames: { name: Pu.statusName },
                                        }),
                                    ),
                            ),
                        );
                    };
                var qu = t(2608),
                    Uu = t(5977),
                    Vu = t(7596),
                    zu = t(3047);
                const Yu = {
                        defaultConfig: Object.assign({}, { top: 20, right: 0, bottom: 25, left: 20 }),
                        T20R0B20L40: { top: 20, right: 0, bottom: 20, left: 40 },
                        T20R0B80L0: { top: 20, right: 0, bottom: 80, left: 0 },
                        empty: { top: 0, right: 0, bottom: 0, left: 0 },
                        T20R0B35L20: { top: 20, right: 0, bottom: 35, left: 20 },
                        T20R0B40L20: { top: 20, right: 0, bottom: 40, left: 20 },
                        T20R0B25L40: { top: 20, right: 0, bottom: 25, left: 40 },
                    },
                    Ku = (0, x.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    gladeModel: e.object('gladeModel'),
                                    toySlotsBar: e.object('gladeModel.toySlotsBar'),
                                    maxLevelReward: e.object('gladeModel.maxLevelReward'),
                                    mainMenu: e.object('mainMenu'),
                                    widgetLevelProgress: e.object('mainMenu.widgetLevelProgress'),
                                    widgetFriendStatus: e.object('mainMenu.widgetFriendStatus'),
                                    hangarName: e.object('mainMenu.widgetLevelProgress.hangarName'),
                                    friendGladeModel: e.object('friendGladeModel'),
                                    friends: e.array('friendsModel.friends'),
                                    giftMachine: e.object('giftMachineModel'),
                                    challenge: e.object('challengeModel'),
                                    questsCelebrityModel: e.object('challengeModel.questsCelebrityModel'),
                                    guestDCustomization: e.object('challengeModel.guestDCustomizationModel'),
                                },
                                t = (0, I.Om)(() => {
                                    const e = u.root.get().viewType,
                                        t = u.giftMachine.get().machineState;
                                    return e === f.GIFT_MACHINE && zu.Fl.includes(t);
                                }),
                                n = (0, I.Om)(() => {
                                    if (u.root.get().viewType !== f.GIFT_MACHINE) return !1;
                                    const e = u.giftMachine.get(),
                                        t = e.machineState,
                                        n = e.isCameraSwitching,
                                        a = t === Vu.a.SpecialReward && n;
                                    return t === Vu.a.SpecialRewardPreview || a;
                                }),
                                a = (0, I.Om)(() => {
                                    const e = u.root.get().viewType;
                                    if (e === f.GLADE && u.maxLevelReward.get().isVisible) return Yu.T20R0B40L20;
                                    if (e === f.CHALLENGE) {
                                        const e = u.challenge.get().viewState,
                                            t = u.questsCelebrityModel.get().hasGuestC,
                                            n = u.guestDCustomization.get().state;
                                        return (e === qu.X.GuestD && n === Uu.f.Empty) || (e === qu.X.GuestC && !t)
                                            ? Yu.empty
                                            : e === qu.X.Completed
                                              ? Yu.T20R0B20L40
                                              : e === qu.X.GuestD
                                                ? Yu.T20R0B25L40
                                                : e === qu.X.Tournament
                                                  ? Yu.T20R0B40L20
                                                  : Yu.T20R0B20L40;
                                    }
                                    return e === f.FRIEND_CHALLENGE || e === f.GIFT_MACHINE
                                        ? Yu.T20R0B35L20
                                        : Yu.defaultConfig;
                                }),
                                r = (0, I.Om)(() => {
                                    const e = u.giftMachine.get().machineState;
                                    return zu.jv.includes(e);
                                }),
                                i = (0, I.Om)(() => {
                                    const e = u.giftMachine.get().machineState;
                                    return zu.Ip.includes(e);
                                }),
                                s = (0, I.Om)(() => {
                                    const e = u.giftMachine.get().machineState;
                                    return zu.lW.includes(e);
                                }),
                                o = (0, I.Om)(() => u.giftMachine.get().machineState === Vu.a.SpecialRewardPreview),
                                l = (0, I.Om)(() => {
                                    const e = u.root.get().viewType,
                                        t = u.giftMachine.get(),
                                        n = t.isCameraSwitching,
                                        a = t.isInRequest;
                                    return e === f.GIFT_MACHINE && (i() || s() || r() || o() || n || a);
                                });
                            return Object.assign({}, u, {
                                computes: {
                                    canClose: l,
                                    isNavigationHidden: t,
                                    isVignetteHidden: n,
                                    getVignetteConfig: a,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallback((e) => ({ isEscPressed: e }), 'onClose'),
                            onStartClose: e.createCallbackNoArgs('onStartClose'),
                            onFadeInDone: e.createCallbackNoArgs('onFadeInDone'),
                            onGlobalFadeIn: e.createCallbackNoArgs('onGlobalFadeIn'),
                            onGlobalFadeOut: e.createCallbackNoArgs('onGlobalFadeOut'),
                            onAnimationEnd: e.createCallbackNoArgs('mainMenu.widgetLevelProgress.onAnimationEnd'),
                        }),
                    ),
                    Xu = Ku[0],
                    Ju = Ku[1],
                    Qu = (e) =>
                        e === d.cJ.Large || e === d.cJ.ExtraLarge
                            ? 69
                            : e === d.cJ.Small || e === d.cJ.Medium
                              ? 56
                              : 49,
                    et = (0, y.Pi)(({ isFriendHangar: e, onClick: u }) => {
                        const t = Ju(),
                            n = t.model,
                            a = t.controls,
                            r = n.widgetLevelProgress.get(),
                            s = r.level,
                            o = r.maxPoints,
                            l = r.currentPoints,
                            c = r.isRomanNumbersAllowed,
                            E = n.widgetFriendStatus.get(),
                            _ = n.gladeModel.get(),
                            m = _.animationLevelUpState,
                            A = _.hasChangedViewAnimation,
                            g = n.hangarName.get(),
                            F = g.title,
                            D = g.description,
                            b = (0, d.GS)().mediaSize,
                            h = m === v.n.Widget || A;
                        return i().createElement(
                            'div',
                            { onClick: u },
                            i().createElement(ju, {
                                type: Zu.Navigation,
                                level: s,
                                title: F,
                                description: D,
                                maxPoints: o,
                                currentPoints: l,
                                progressBarSize: Qu(b),
                                hangarNameType: Eu.vS.Gradient,
                                isRomanNumbersAllowed: c,
                                isFriendHangar: e,
                                hasAnimation: h,
                                isSkipAnimation: A,
                                onAnimationEnd: a.onAnimationEnd,
                                friendStatusInfo: E,
                            }),
                        );
                    }),
                    ut = R.strings.ny.menu,
                    tt = { context: 'model.mainMenu.balance' },
                    nt = (0, y.Pi)(({ onClose: e }) => {
                        const u = Ee(),
                            t = u.model,
                            n = u.controls,
                            a = n.goToFriendsList,
                            r = t.computes.getIsFriendHangar(),
                            s = t.root.get(),
                            l = s.startIndexMenu,
                            c = s.isGiftMachineLootListAvailable,
                            d = l === f.GIFT_MACHINE && c,
                            E = t.root.get().currentView !== ie.Glade;
                        (0, w.gd)(L.n.ESCAPE, () => {
                            r ? a() : e();
                        });
                        const _ = i().useCallback(() => {
                            const e = r ? ie.FriendGlade : ie.Glade;
                            n.switchContent(e);
                        }, [n, r]);
                        return i().createElement(
                            'div',
                            { className: o()(eu, r && tu) },
                            i().createElement('div', { className: iu }),
                            i().createElement(
                                'div',
                                { className: o()(su, E && ou) },
                                i().createElement(et, { isFriendHangar: r, onClick: _ }),
                            ),
                            i().createElement('div', { className: lu }, i().createElement(ve, null)),
                            d &&
                                i().createElement(
                                    'div',
                                    { className: nu },
                                    i().createElement(_e.A, {
                                        classNames: { caption: au },
                                        caption: ut.showGiftMachineLootList(),
                                        type: 'info',
                                        side: 'left',
                                        onClick: n.showLootList,
                                    }),
                                ),
                            i().createElement(
                                'div',
                                { className: cu },
                                i().createElement(
                                    Ve,
                                    { options: tt },
                                    i().createElement(
                                        'div',
                                        { className: du },
                                        i().createElement(Qe, { isFriendHangar: r }),
                                    ),
                                ),
                                i().createElement(
                                    'div',
                                    { className: uu },
                                    i().createElement(
                                        me.i,
                                        { body: r ? ut.backToFriendsListTooltip() : ut.closeTooltip() },
                                        i().createElement(_e.A, {
                                            caption: r ? ut.backToFriendsList() : ut.close(),
                                            type: 'close',
                                            side: 'right',
                                            classNames: r ? void 0 : { caption: ru },
                                            onClick: r ? a : () => e(),
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    at = (0, x.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    sidebar: e.object('sidebar'),
                                    cards: e.array('marketplaceModel.cards'),
                                    itemsTabBar: e.array('sidebar.itemsTabBar'),
                                    activeTriggerHintTabs: e.array('sidebar.triggerHintTabs.activeTabs'),
                                },
                                t = (0, I.Om)(() =>
                                    (0, k.mapExists)(u.itemsTabBar.get(), (e) => Object.assign({ id: e.name }, e)),
                                ),
                                n = (0, I.Om)(() => (0, k.mapExists)(u.activeTriggerHintTabs.get(), O.yR)),
                                a = (0, I.Om)(() => {
                                    var e;
                                    const n = k.get(t(), null == (e = u.sidebar.get()) ? void 0 : e.startIndex);
                                    return null == n ? void 0 : n.id;
                                });
                            return Object.assign({}, u, {
                                computes: { getTabs: t, getActiveTab: a, getActiveTriggerHintTabs: n },
                            });
                        },
                        ({ externalModel: e }) => ({
                            changeTab: e.createCallback((e) => ({ tabName: e }), 'sidebar.onChangeTab'),
                        }),
                    ),
                    rt = at[0],
                    it = at[1];
                var st = t(1458);
                const ot = (0, r.createContext)(null);
                function lt() {
                    return (0, r.useContext)(ot);
                }
                const ct = ({ children: e }) => {
                    const u = (0, r.useRef)(new Map());
                    return i().createElement(
                        ot.Provider,
                        {
                            value: {
                                sectionItemsRef: u,
                                setSectionItem: (e, t) => {
                                    const n = u.current;
                                    n && (e ? n.set(t, e) : n.delete(t));
                                },
                            },
                        },
                        e,
                    );
                };
                let dt, Et, _t;
                (!(function (e) {
                    ((e.Small = 'small'), (e.Big = 'big'));
                })(dt || (dt = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Active = 'active'), (e.Disabled = 'disabled'));
                    })(Et || (Et = {})),
                    (function (e) {
                        e.Blue = 'blue';
                    })(_t || (_t = {})));
                const mt = {
                        base: 'MenuSection_base_4e',
                        base__small: 'MenuSection_base__small_f3',
                        item: 'MenuSection_item_7a',
                        item__first: 'MenuSection_item__first_ed',
                        item__last: 'MenuSection_item__last_93',
                        item__single: 'MenuSection_item__single_19',
                        title: 'MenuSection_title_90',
                    },
                    At = 'BlueArrow_base_ef',
                    gt = 'BlueArrow_base__active_e8',
                    Ft = ({ isEnabled: e = !1 }) => i().createElement('div', { className: o()(At, e && gt) }),
                    Dt = ['type'];
                const bt = (e) => {
                        let u = e.type,
                            t = void 0 === u ? _t.Blue : u,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Dt);
                        return t === _t.Blue ? i().createElement(Ft, n) : null;
                    },
                    ht = {
                        base: 'ItemPresenter_base_b1',
                        base__small: 'ItemPresenter_base__small_67',
                        base__active: 'ItemPresenter_base__active_db',
                        base__disabled: 'ItemPresenter_base__disabled_2e',
                        icon: 'ItemPresenter_icon_69',
                        icon__small: 'ItemPresenter_icon__small_d2',
                        counter: 'ItemPresenter_counter_90',
                        label: 'ItemPresenter_label_3e',
                        hover: 'ItemPresenter_hover_57',
                        light: 'ItemPresenter_light_ef',
                        indicator: 'ItemPresenter_indicator_5f',
                        name: 'ItemPresenter_name_ae',
                    },
                    Ct = ({
                        children: e,
                        sidebarState: u,
                        isComplete: t,
                        icon: n,
                        name: a,
                        iconSmall: r,
                        size: s,
                        unseen: l,
                        onClick: c,
                        classNames: d,
                    }) => {
                        const E = r && s === dt.Small,
                            _ = 'boolean' == typeof l ? 0 : l,
                            m = u === Et.Active;
                        return i().createElement(
                            'div',
                            { onClick: () => !m && c(), className: o()(ht.base, ht[`base__${s}`], ht[`base__${u}`]) },
                            i().createElement('div', { className: ht.hover }),
                            i().createElement('div', { className: o()(ht.light, null == d ? void 0 : d.light) }),
                            n &&
                                i().createElement(
                                    'div',
                                    {
                                        className: o()(ht.icon, E && ht.icon__small),
                                        style: { backgroundImage: `url(${E ? r : n})` },
                                    },
                                    t && i().createElement('div', { className: ht.indicator }),
                                ),
                            a && i().createElement('div', { className: o()(ht.name, null == d ? void 0 : d.name) }, a),
                            Boolean(l) &&
                                i().createElement(
                                    'div',
                                    { className: ht.counter },
                                    i().createElement(M.A, { value: _, isEmpty: !_ }),
                                ),
                            e && e,
                        );
                    },
                    vt = {
                        base: 'SectionItem_base_ec',
                        arrow: 'SectionItem_arrow_4f',
                        base__small: 'SectionItem_base__small_1e',
                    },
                    ft = [
                        'id',
                        'contentRenderer',
                        'sidebarState',
                        'isComplete',
                        'onChange',
                        'size',
                        'tooltipArgs',
                        'activeArrowType',
                    ];
                function Bt() {
                    return (
                        (Bt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Bt.apply(null, arguments)
                    );
                }
                const pt = (e) => {
                    let u = e.id,
                        t = e.contentRenderer,
                        n = e.sidebarState,
                        a = e.isComplete,
                        s = e.onChange,
                        l = e.size,
                        c = e.tooltipArgs,
                        d = e.activeArrowType,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, ft);
                    const _ = (0, r.useRef)(null),
                        m = { tabId: u, isActive: n === Et.Active, size: l },
                        A = t && (0, r.cloneElement)(t, m),
                        g = n === Et.Active;
                    return i().createElement(
                        P.l,
                        { tooltipArgs: c },
                        i().createElement(
                            'div',
                            {
                                className: o()(vt.base, vt[`base__${l}`]),
                                ref: _,
                                onMouseEnter: () => !g && H.$.playHighlight(),
                            },
                            i().createElement(
                                'div',
                                { className: vt.arrow },
                                i().createElement(bt, { size: l, type: d, isEnabled: g }),
                            ),
                            i().createElement(
                                Ct,
                                Bt({ sidebarState: n, isComplete: a, onClick: () => s(u), size: l }, E),
                                A,
                            ),
                        ),
                    );
                };
                function wt() {
                    return (
                        (wt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        wt.apply(null, arguments)
                    );
                }
                const yt = (e, u) => (e.id === u ? Et.Active : Et.Default),
                    St = ({ items: e, size: u, activeTabId: t, onChange: n, classNames: a, activeArrowType: r }) => {
                        const s = lt();
                        return i().createElement(
                            'div',
                            { className: o()(mt.base, mt[`base__${u}`]) },
                            e.map((l, c) => {
                                const d = 1 === e.length;
                                return i().createElement(
                                    'div',
                                    {
                                        className: o()(
                                            mt.item,
                                            d && mt.item__single,
                                            0 === c && !d && mt.item__first,
                                            c === e.length - 1 && !d && mt.item__last,
                                        ),
                                        key: l.id,
                                        ref: (e) => (null == s ? void 0 : s.setSectionItem(e, l.id.toString())),
                                    },
                                    l.sectionName &&
                                        i().createElement(
                                            'div',
                                            { className: o()(mt.title, null == a ? void 0 : a.title) },
                                            l.sectionName,
                                        ),
                                    i().createElement(
                                        pt,
                                        wt({}, l, {
                                            size: u,
                                            sidebarState: yt(l, t),
                                            activeArrowType: l.activeArrowType || r,
                                            classNames: a,
                                            onChange: n,
                                            isComplete: l.isComplete,
                                        }),
                                    ),
                                );
                            }),
                        );
                    },
                    Nt = {
                        base: 'Sidebar_base_30',
                        section: 'Sidebar_section_05',
                        section__small: 'Sidebar_section__small_7f',
                    },
                    Rt = ({ classNames: e, items: u, onChange: t, startTabId: n, isTabChangeDisabled: a }) => {
                        const s = (0, st.W)(),
                            l = (0, r.useState)(n),
                            c = l[0],
                            d = l[1],
                            E = (0, T.D9)(n),
                            _ = (0, r.useRef)(null),
                            m = ((e) =>
                                e.reduce((e, u) => (u.isNewSection && e.push([]), e[e.length - 1].push(u), e), [[]]))(
                                u,
                            ),
                            A = (0, Ae.N)(
                                (e) => {
                                    a || (d(e), t(e));
                                },
                                [a, t],
                                400,
                                !0,
                            );
                        return (
                            (0, r.useEffect)(() => {
                                u.find((e) => e.id === n) ? d(n) : console.warn(`Unknown start tabId: ${n} provided`);
                            }, [E, n, u]),
                            i().createElement(
                                'div',
                                { className: o()(Nt.base, null == e ? void 0 : e.base), ref: _ },
                                m.map((u, t) => {
                                    const n = u.find((e) => e.id === c);
                                    return i().createElement(
                                        'div',
                                        { className: o()(Nt.section, Nt[`section__${s ? dt.Big : dt.Small}`]), key: t },
                                        i().createElement(St, {
                                            items: u,
                                            size: s ? dt.Big : dt.Small,
                                            activeTabId: null == n ? void 0 : n.id,
                                            classNames: e,
                                            onChange: A,
                                        }),
                                    );
                                }),
                            )
                        );
                    };
                var Tt = t(6844);
                const Lt = (e) => (e > 1 ? e : Boolean(e)),
                    xt = R.images.gui.maps.icons.newYear.sidebar,
                    Ot = (e) =>
                        e.map((e) => {
                            const u = e.name === Tt.J$.Town;
                            return {
                                id: e.name,
                                icon: xt.$dyn(e.iconName),
                                iconSmall: xt.$dyn(`${e.iconName}_small`),
                                isComplete: e.isCompleted,
                                name: R.strings.ny.tabBar.$dyn(e.name),
                                unseen: Lt(e.unseenCount),
                                isNewSection: u,
                                tooltipArgs: {
                                    header: R.strings.ny.tabBar.$dyn(e.name),
                                    body: R.strings.ny.tabBar.body.$dyn(e.name),
                                },
                            };
                        }),
                    kt = (e) =>
                        e.map((e) => {
                            const u = e.name === Tt.k4.Town;
                            return {
                                id: e.name,
                                icon: xt.$dyn(e.iconName),
                                iconSmall: xt.$dyn(`${e.iconName}_small`),
                                isComplete: e.isCompleted,
                                name: R.strings.ny.tabBar.$dyn(e.name),
                                unseen: Lt(e.unseenCount),
                                isNewSection: u,
                                tooltipArgs: {
                                    header: R.strings.ny.tabBar.$dyn(e.name),
                                    body: R.strings.ny.tabBar.body.$dyn(e.name),
                                },
                            };
                        }),
                    It = (e) =>
                        e.map((e) => ({
                            id: e.name,
                            icon: xt.$dyn(e.iconName),
                            iconSmall: xt.$dyn(`${e.iconName}_small`),
                            isComplete: e.isCompleted,
                            name: R.strings.ny.tabBar.$dyn(e.name),
                            unseen: Lt(e.unseenCount),
                            tooltipArgs: { body: R.strings.ny.marketplace.tooltips.tabs.$dyn(e.name) },
                        })),
                    Mt = (e) =>
                        e.map((e) => {
                            const u = e.name === Tt.ut.Headquarters;
                            return {
                                id: e.name,
                                icon: xt.$dyn(e.iconName),
                                iconSmall: xt.$dyn(`${e.iconName}_small`),
                                name: R.strings.ny.tabBar.$dyn(e.name),
                                isNewSection: u,
                                unseen: Lt(e.unseenCount),
                                tooltipArgs: {
                                    header: R.strings.ny.tabBar.title.$dyn(e.name),
                                    body: R.strings.ny.tabBar.body.$dyn(e.name),
                                },
                            };
                        }),
                    Pt = (e, u = 2) => {
                        let t,
                            n = null;
                        const a = (u) =>
                            u <= 0
                                ? ((t = e()), null)
                                : requestAnimationFrame(() => {
                                      a(u - 1);
                                  });
                        return (
                            (n = a(u)),
                            () => {
                                ('function' == typeof t && t(), null !== n && cancelAnimationFrame(n));
                            }
                        );
                    };
                const Ht = 'TriggerHints_base_a9',
                    Gt = 'TriggerHints_hintContent_20',
                    Wt = 'TriggerHints_hintBase_2e',
                    Zt = (e) => {
                        switch (e) {
                            case Tt.J$.Fir:
                            case Tt.J$.Fair:
                            case Tt.J$.Installation:
                                return R.strings.ny.triggerHints.tabs.DecorationZones();
                            default:
                                return String(R.strings.ny.triggerHints.tabs.$dyn(e));
                        }
                    },
                    $t = ({ tabs: e }) => {
                        const u = e[0],
                            t = lt(),
                            n = (0, r.useState)({ width: 0, height: 0, top: 0, left: 0 }),
                            a = n[0],
                            s = n[1],
                            o = (0, r.useCallback)(() => {
                                const u = null == t ? void 0 : t.sectionItemsRef.current;
                                if (!u) return;
                                const n = e.map((e) => u.get(e)),
                                    a = n[0],
                                    r = n[n.length - 1];
                                if (!a || !r) return;
                                const i = a.getBoundingClientRect(),
                                    o = i.top,
                                    l = i.left,
                                    c = i.width,
                                    d = r.getBoundingClientRect().bottom;
                                s({ width: c, height: d - o, top: o, left: l });
                            }, [null == t ? void 0 : t.sectionItemsRef, e]);
                        return (
                            (0, r.useEffect)(() => Pt(() => o(), 4), [o]),
                            (function (e, u, t = 2) {
                                (0, r.useEffect)(() => {
                                    let u = () => {};
                                    const n = () => {
                                        (u(), (u = Pt(e, t)));
                                    };
                                    return (
                                        window.addEventListener('resize', n),
                                        () => {
                                            (u(), window.removeEventListener('resize', n));
                                        }
                                    );
                                }, u);
                            })(() => o(), [o], 4),
                            i().createElement(
                                'div',
                                { className: Ht, style: a },
                                i().createElement(he, {
                                    text: Zt(u),
                                    isVisible: !0,
                                    classNames: { base: Wt, content: Gt },
                                }),
                            )
                        );
                    },
                    jt = (0, y.Pi)(({ className: e }) => {
                        const u = it(),
                            t = u.model,
                            n = u.controls,
                            a = t.sidebar.get().viewName,
                            r = t.computes.getActiveTab(),
                            s = t.computes.getTabs(),
                            o = t.computes.getActiveTriggerHintTabs(),
                            l = ((e) => {
                                switch (e) {
                                    case 'glade':
                                        return Ot;
                                    case 'friendGlade':
                                        return kt;
                                    case 'marketplace':
                                        return It;
                                    case 'challenge':
                                        return Mt;
                                    default:
                                        return () => [];
                                }
                            })(a),
                            c = l(s);
                        return c.length > 0
                            ? i().createElement(
                                  ct,
                                  null,
                                  i().createElement(Rt, {
                                      items: c,
                                      onChange: n.changeTab,
                                      startTabId: r,
                                      classNames: { base: e },
                                  }),
                                  0 !== o.length && i().createElement($t, { tabs: o }),
                              )
                            : null;
                    }),
                    qt = (0, r.lazy)(() =>
                        Promise.all([t.e(1521), t.e(4727), t.e(2736), t.e(1282)]).then(t.bind(t, 9155)),
                    ),
                    Ut = (0, r.lazy)(() => t.e(8629).then(t.bind(t, 8629))),
                    Vt = (0, r.lazy)(() =>
                        Promise.all([t.e(7506), t.e(1521), t.e(4727), t.e(6339), t.e(5041)]).then(t.bind(t, 2307)),
                    ),
                    zt = (0, r.lazy)(() => t.e(7852).then(t.bind(t, 7852))),
                    Yt = (0, r.lazy)(() => t.e(8310).then(t.bind(t, 8310))),
                    Kt = (0, r.lazy)(() => t.e(5785).then(t.bind(t, 5785))),
                    Xt = (0, r.lazy)(() => t.e(7773).then(t.bind(t, 7773))),
                    Jt = (0, r.lazy)(() =>
                        Promise.all([t.e(7506), t.e(1521), t.e(4727), t.e(2736), t.e(6339), t.e(7438)]).then(
                            t.bind(t, 2607),
                        ),
                    ),
                    Qt = (0, r.lazy)(() => Promise.all([t.e(3820), t.e(1628)]).then(t.bind(t, 7015))),
                    en = {
                        [f.GLADE]: qt,
                        [f.FRIENDS]: Vt,
                        [f.CHALLENGE]: Kt,
                        [f.MARKETPLACE]: Xt,
                        [f.GIFT_MACHINE]: Yt,
                        [f.REWARDS]: zt,
                        [f.INFO]: Ut,
                        [f.FRIEND_GLADE]: Jt,
                        [f.FRIEND_CHALLENGE]: Qt,
                        [f.FRIEND_INFO]: Ut,
                    },
                    un = i().memo(({ viewType: e }) => {
                        const u = en[e];
                        return u
                            ? i().createElement(
                                  r.Suspense,
                                  { fallback: i().createElement('div', null) },
                                  i().createElement(u, null),
                              )
                            : (console.error('Unknown view type for render', e), null);
                    }),
                    tn = 'Vignette_base_2e',
                    nn = 'Vignette_gradient_76',
                    an = 'Vignette_gradient__top_dc',
                    rn = 'Vignette_gradient__right_4b',
                    sn = 'Vignette_gradient__bottom_c6',
                    on = 'Vignette_gradient__left_71',
                    ln = (0, y.Pi)(() => {
                        const e = Ju().model.computes.getVignetteConfig();
                        return i().createElement(
                            'div',
                            { className: tn },
                            i().createElement('div', {
                                className: o()(nn, an),
                                style: { backgroundSize: `100% ${e.top}%` },
                            }),
                            i().createElement('div', {
                                className: o()(nn, rn),
                                style: { backgroundSize: `${e.right}% 100%` },
                            }),
                            i().createElement('div', {
                                className: o()(nn, sn),
                                style: { backgroundSize: `100% ${e.bottom}%` },
                            }),
                            i().createElement('div', {
                                className: o()(nn, on),
                                style: { backgroundSize: `${e.left}% 100%` },
                            }),
                        );
                    }),
                    cn = 'App_base_5d',
                    dn = 'App_base__animatedShow_10',
                    En = 'App_base__disabled_5e',
                    _n = 'App_contentWrapper_fd',
                    mn = 'App_bg_35',
                    An = 'App_bg__visible_7e',
                    gn = 'App_vignette_28',
                    Fn = 'App_vignette__hidden_04',
                    Dn = 'App_inner_dd',
                    bn = 'App_inner__faded_0a',
                    hn = 'App_content_58',
                    Cn = 'App_content__faded_2d',
                    vn = 'App_navigation_2e',
                    fn = 'App_navigation__hidden_24',
                    Bn = 'App_sidebar_21',
                    pn = [f.GLADE, f.CHALLENGE, f.MARKETPLACE, f.GIFT_MACHINE, f.FRIEND_GLADE, f.FRIEND_CHALLENGE],
                    wn = { duration: 600, easing: N.Z.easeInOutCubic },
                    yn = { context: 'model.mainMenu' },
                    Sn = (0, y.Pi)(() => {
                        var e;
                        const u = Ju(),
                            t = u.model,
                            n = u.controls,
                            a = t.root.get(),
                            s = a.viewType,
                            l = a.isAnimatedShow,
                            c = a.switchState,
                            d = a.isGlobalFaded,
                            E = a.isWaitingShown,
                            _ = t.computes.isNavigationHidden(),
                            m = t.computes.canClose(),
                            A = t.mainMenu.get().isFriendHangar,
                            g = t.gladeModel.get().animationLevelUpState,
                            F = t.toySlotsBar.get().hasNewToysAnimation,
                            D = n.close,
                            b = n.onFadeInDone,
                            h = n.onStartClose,
                            C = (0, r.useState)({ isFadedView: !1, isEscPressed: !1 }),
                            y = C[0],
                            R = y.isFadedView,
                            x = y.isEscPressed,
                            O = C[1],
                            k = null != (e = (0, T.D9)(d)) ? e : d,
                            I = (g !== v.n.Idle && g !== v.n.MaxLevel) || F,
                            M = (0, r.useRef)(null),
                            P = (0, S.useSpring)(() => ({
                                opacity: 1,
                                onChange: (e) => {
                                    const u = M.current;
                                    u && (u.style.opacity = `${e.value.opacity}`);
                                },
                            }))[1];
                        (0, r.useEffect)(() => {
                            (d &&
                                P.start({
                                    from: { opacity: 1 },
                                    to: { opacity: 0 },
                                    config: wn,
                                    onRest: () => n.onGlobalFadeIn(),
                                }),
                                k &&
                                    !d &&
                                    P.start({
                                        from: { opacity: 0 },
                                        to: { opacity: 1 },
                                        config: { duration: 600, easing: N.Z.easeInOutCubic },
                                        onRest: () => n.onGlobalFadeOut(),
                                    }));
                        }, [P, n, k, d]);
                        const H = c === B.DEFAULT || -1 === pn.indexOf(s),
                            G = (0, r.useCallback)((e = !1) => {
                                O({ isEscPressed: e, isFadedView: !0 });
                            }, []);
                        ((0, r.useEffect)(() => {
                            if (R)
                                return (0, p.F)(() => {
                                    D(x);
                                }, 300);
                        }, [x, R, D]),
                            (0, r.useEffect)(() => {
                                if (c)
                                    return (0, p.F)(() => {
                                        b();
                                    }, 300);
                            }, [c, b]));
                        const W = (e = !1) => {
                            A || E || R || m || (h(), G(e));
                        };
                        return (
                            (0, w.gd)(L.n.ESCAPE, () => W(!0), !(A || m)),
                            i().createElement(
                                'div',
                                { className: o()(cn, l && dn, I && En) },
                                i().createElement(
                                    'div',
                                    { className: _n, ref: M },
                                    i().createElement('div', { className: o()(mn, H && An) }),
                                    i().createElement(
                                        'div',
                                        { className: o()(Dn, R && bn) },
                                        i().createElement(
                                            'div',
                                            {
                                                className: o()(vn, _ && fn),
                                                key: A ? 'NavigationFriend' : 'NavigationMine',
                                            },
                                            i().createElement(
                                                de,
                                                { options: yn },
                                                i().createElement(nt, { onClose: W }),
                                            ),
                                        ),
                                        i().createElement(
                                            'div',
                                            { className: o()(hn, c !== B.DONE && Cn) },
                                            i().createElement(
                                                'div',
                                                { className: o()(gn, t.computes.isVignetteHidden() && Fn) },
                                                i().createElement(ln, null),
                                            ),
                                            i().createElement(un, { viewType: s }),
                                            s !== f.FRIEND_CHALLENGE &&
                                                i().createElement(rt, null, i().createElement(jt, { className: Bn })),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Nn = 'MainView_base_76';
                engine.whenReady.then(() => {
                    (n.O.view.extraSize.set(0, 90),
                        C().render(
                            i().createElement(
                                b,
                                null,
                                i().createElement(
                                    Xu,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: Nn, lang: R.strings.settings.LANGUAGE_CODE() },
                                        i().createElement(Sn, null),
                                    ),
                                ),
                            ),
                            document.getElementById('root'),
                        ));
                });
            },
            3047: (e, u, t) => {
                'use strict';
                t.d(u, { Fl: () => l, Ip: () => c, jv: () => E, k8: () => g, lW: () => d, tT: () => F });
                var n = t(7596),
                    a = t(3215),
                    r = t(9480),
                    i = t(1612),
                    s = t(9174),
                    o = t(3946);
                const l = [
                        n.a.Reward,
                        n.a.RewardPrequel,
                        n.a.SkipRewardPrequel,
                        n.a.RareReward,
                        n.a.RareRewardPrequel,
                        n.a.SkipRareRewardPrequel,
                        n.a.SpecialReward,
                        n.a.SpecialRewardPrequel,
                        n.a.SkipSpecialRewardPrequel,
                        n.a.SpecialRewardPreview,
                        n.a.Error,
                    ],
                    c = [n.a.RewardPrequel, n.a.RareRewardPrequel, n.a.SpecialRewardPrequel],
                    d = [n.a.SkipRewardPrequel, n.a.SkipRareRewardPrequel, n.a.SkipSpecialRewardPrequel],
                    E = [n.a.Reward, n.a.RareReward, n.a.SpecialReward, n.a.Error],
                    _ = [n.a.Reward, n.a.RareReward, n.a.SpecialReward],
                    m = { type: '', value: -1 },
                    A = (0, a.q)()(
                        ({ observableModel: e, readByPath: u }) => {
                            const t = {
                                    root: e.object(),
                                    currentResource: s.LO.box(
                                        (() => {
                                            const e = u('resources');
                                            return r.reduce(e, (e, u) => (u.value > e.value ? u : e), m).type;
                                        })(),
                                    ),
                                    tokenCount: s.LO.box(1),
                                    tokenPrice: e.array('tokenPrice'),
                                    resources: e.array('resources'),
                                    vehiclePreview: e.object('vehiclePreview'),
                                    vehicleInfo: e.object('vehiclePreview.vehicleInfo'),
                                },
                                a = (0, o.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.isMaxAtmosphereLevel,
                                        n = e.isGuestQuestsCompleted;
                                    return u && n;
                                }),
                                i = (0, o.Om)(() => r.map(t.resources.get(), (e) => e.type)),
                                l = (0, o.Om)(() => {
                                    var e;
                                    const u = r.findLast(t.tokenPrice.get(), (e) => e.type === t.currentResource.get());
                                    return (null != (e = null == u ? void 0 : u.value) ? e : 0) * t.tokenCount.get();
                                }),
                                A = (0, o.Om)(() => {
                                    var e, u;
                                    const n =
                                        null !=
                                        (e =
                                            null ==
                                            (u = r.findLast(
                                                t.resources.get(),
                                                (e) => e.type === t.currentResource.get(),
                                            ))
                                                ? void 0
                                                : u.value)
                                            ? e
                                            : 0;
                                    return l() <= n;
                                }),
                                g = (0, o.Om)(() => ({ resourceType: t.currentResource.get(), price: l() })),
                                F = (0, o.Om)(() => E.includes(t.root.get().machineState)),
                                D = (0, o.Om)(() => c.includes(t.root.get().machineState)),
                                b = (0, o.Om)(() => d.includes(t.root.get().machineState)),
                                h = (0, o.Om)(() => t.root.get().machineState === n.a.SpecialRewardPreview),
                                C = (0, o.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.isCameraSwitching,
                                        n = e.isInRequest,
                                        a = e.isWaitRequest;
                                    return D() || b() || F() || h() || u || n || a;
                                }),
                                v = (0, o.Om)(() => t.root.get().tokenCount > 0),
                                f = (0, o.Om)(
                                    () => t.root.get().isNeededShowHint && v() && _.includes(t.root.get().machineState),
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    isPurchaseAvailable: a,
                                    isCloseVisible: F,
                                    isAnimState: D,
                                    isSkippingAnimState: b,
                                    isOnSpecialReward: h,
                                    canClose: C,
                                    hasTokens: v,
                                    resourcesTypes: i,
                                    totalPrice: l,
                                    isEnoughResources: A,
                                    getLackResourcesTooltipArgs: g,
                                    isHintVisible: f,
                                },
                                constants: { MIN_TOKEN_COUNT: 1, MAX_TOKEN_COUNT: 9999 },
                            });
                        },
                        ({ externalModel: e, model: { currentResource: u, tokenCount: t, vehiclePreview: n } }) =>
                            Object.assign(
                                {
                                    goToBuyTokens: e.createCallbackNoArgs('onGoToBuyTokens'),
                                    goToIdle: e.createCallbackNoArgs('onGoToIdle'),
                                    onSkipAnimation: e.createCallbackNoArgs('onSkipAnimation'),
                                    goToChallengeGuest: e.createCallbackNoArgs('onGoToChallengeGuest'),
                                    goToVillage: e.createCallbackNoArgs('onGoToVillage'),
                                },
                                (0, i.h)({ changeResourceType: (e) => u.set(e), changeTokenCount: (e) => t.set(e) }),
                                {
                                    buyTokens: e.createCallback(
                                        () => ({ resource: u.get(), amount: t.get() }),
                                        'onBuyTokens',
                                    ),
                                    onMoveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                                    onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
                                    backFromVehiclePreview: e.createCallbackNoArgs('onBackFromVehiclePreview'),
                                    goToHangar: e.createCallback(
                                        () => ({ vehIntCD: n.get().vehIntCD }),
                                        'onGoToHangar',
                                    ),
                                    hintClose: e.createCallbackNoArgs('onHintClose'),
                                },
                            ),
                    ),
                    g = A[0],
                    F = A[1];
            },
            324: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => o });
                var n = t(2372),
                    a = t(6179),
                    r = t.n(a),
                    i = t(8417);
                const s = (e, u, t, n) => (t && !n ? u : e),
                    o = (0, a.memo)(
                        ({
                            valueFrom: e,
                            valueTo: u,
                            isDisabled: t = !0,
                            isPreAnimation: o = !1,
                            duration: l = 1e3,
                            hasPlus: c = !1,
                            onAnimationComplete: d,
                        }) => {
                            const E = (0, a.useState)(() => s(e, u, t, o)),
                                _ = E[0],
                                m = E[1],
                                A = (0, a.useRef)(0),
                                g = (0, a.useCallback)(() => {
                                    (cancelAnimationFrame(A.current), d());
                                }, [d]);
                            return (
                                (0, a.useEffect)(() => {
                                    (t || o) && m(s(e, u, t, o));
                                }, [e, u, t, o]),
                                (0, a.useEffect)(() => {
                                    if (!t && !o) {
                                        const t = (n, a) => {
                                            const r = Math.min((n - a) / l, 1),
                                                i = Math.floor(r * (u - e) + e);
                                            (m(i), r < 1 ? (A.current = requestAnimationFrame((e) => t(e, a))) : g());
                                        };
                                        A.current = requestAnimationFrame((e) => t(e, e));
                                    }
                                }, [l, e, u, d, t, o, g]),
                                r().createElement(
                                    'div',
                                    { className: i.Z.base },
                                    r().createElement(n.A, { value: _ }),
                                    c && r().createElement('div', { className: i.Z.plus }, '+'),
                                )
                            );
                        },
                    );
            },
            3601: (e, u, t) => {
                'use strict';
                t.d(u, { k: () => r, n: () => s });
                var n = t(2344),
                    a = t(6179);
                const r = 999999,
                    i = (e, u) => {
                        const t = Math.min(e, u);
                        return { countFrom: t, countTo: t, isDecrement: !1 };
                    },
                    s = (e, u, t = r) => {
                        const s = (0, a.useRef)(e),
                            o = (0, n.D9)(u),
                            l = (0, a.useState)(() => i(e, t)),
                            c = l[0],
                            d = l[1];
                        ((0, a.useEffect)(() => {
                            const u = Math.min(s.current, t),
                                n = Math.min(e, t);
                            (u === n && s.current === e) || d({ countFrom: u, countTo: n, isDecrement: s.current > e });
                        }, [e, t]),
                            (0, a.useEffect)(() => {
                                o && !u && d(i(c.countTo, t));
                            }, [c.countTo, u, t, o]));
                        const E = (0, a.useCallback)(() => {
                            s.current = e;
                        }, [e]);
                        return [c, { handleAnimationEnd: E }];
                    };
            },
            4302: (e, u, t) => {
                'use strict';
                t.d(u, { G: () => g });
                var n,
                    a = t(6483),
                    r = t.n(a),
                    i = t(7522),
                    s = t(6179),
                    o = t.n(s),
                    l = t(7030),
                    c = t(6808),
                    d = t(3736),
                    E = t(6497),
                    _ = t(8007),
                    m = t(3050),
                    A = t(5976);
                !(function (e) {
                    ((e.Default = 'default'), (e.Simple = 'simple'));
                })(n || (n = {}));
                const g = ({
                    maxValue: e,
                    prevValue: u,
                    currentValue: t,
                    size: a = 64,
                    className: g,
                    theme: F = n.Default,
                    onAnimationEnd: D = c.Bi,
                }) => {
                    const b = (0, _.ow)(u, e),
                        h = (0, _.ow)(t, e),
                        C = (0, s.useState)(!1),
                        v = C[0],
                        f = C[1],
                        B = (0, s.useRef)(null),
                        p = (0, s.useRef)(null),
                        w = !A.Z.isWeak(),
                        y = (0, m.n)(a),
                        S = y.scale,
                        N = y.radiusRef,
                        R = E.aU / 4,
                        T = h >= R,
                        L = h >= 3 * R,
                        x = Math.floor(a * E.YH * S),
                        O = (0, l.useSpring)(() => ({
                            degrees: h,
                            onChange: (e) => {
                                const u = Math.round(e.value.degrees),
                                    t = B.current,
                                    n = p.current,
                                    a = N.current;
                                if (!t || !n) return;
                                const r = t.getContext('2d');
                                ((0, _.xE)(r, t, a.value, a.inner, u), (0, _.Wc)(n, u));
                            },
                            onRest: (e) => {
                                const u = Math.round(e.value.degrees);
                                (f(u >= E.aU), D());
                            },
                        })),
                        k = O[0],
                        I = O[1];
                    ((0, s.useEffect)(() => {
                        const e = B.current;
                        if (!e) return;
                        const u = e.getContext('2d');
                        (0, _.xE)(u, e, N.current.value, N.current.inner, k.degrees.get());
                    }, [N.current.value, N.current.inner, N, k.degrees]),
                        (0, s.useEffect)(() => {
                            if (b === h) {
                                const e = p.current;
                                if (!e) return;
                                (0, _.Wc)(e, Math.round(h));
                            }
                            I.start({
                                from: { degrees: b },
                                to: { degrees: h },
                                config: { duration: 800, easing: i.Z.easeInOutCubic },
                            });
                        }, [I, h, b]));
                    const M = a >= 64 ? { transform: `rotate(${0.2 * a}deg)` } : void 0;
                    return o().createElement(
                        'div',
                        {
                            className: r()(d.Z.base, d.Z[`base__${F}`], w && d.Z.base__additionalEffects, g),
                            style: { '--bar-size': `${a}rem` },
                        },
                        F === n.Default && o().createElement('div', { className: d.Z.bgLight }),
                        o().createElement('canvas', { width: x, height: x, ref: B }),
                        o().createElement(
                            'div',
                            { className: d.Z.circleSizeCentered },
                            o().createElement(
                                'div',
                                { className: d.Z.progressLightContainer },
                                T &&
                                    o().createElement('div', {
                                        className: r()(d.Z.progressLight, d.Z.progressLight__quarter),
                                        style: M,
                                    }),
                                L &&
                                    o().createElement('div', {
                                        className: r()(d.Z.progressLight, d.Z.progressLight__threeQuarter),
                                        style: M,
                                    }),
                            ),
                        ),
                        o().createElement(
                            'div',
                            { ref: p, className: r()(d.Z.light, v && d.Z.light__hidden) },
                            o().createElement(
                                'div',
                                { className: d.Z.circleSizeCentered },
                                o().createElement('div', { className: d.Z.lightTip }),
                                o().createElement('div', { className: d.Z.lightGlow }),
                            ),
                        ),
                    );
                };
                g.Theme = n;
            },
            6497: (e, u, t) => {
                'use strict';
                t.d(u, { DM: () => n, L4: () => s, YH: () => i, _V: () => r, aU: () => a });
                const n = {
                        CIRCLE_GRADIENT_FIRST: 'rgba(255, 255, 255, 0.2)',
                        CIRCLE_GRADIENT_SECOND: 'rgba(255, 255, 255, 0.2)',
                        PROGRESS_BORDER: 'rgba(255, 255, 255, 0.2)',
                        PROGRESS_LIGHTER: '#f77e72',
                        PROGRESS_GRADIENT_FIRST: '#94bffb',
                        PROGRESS_GRADIENT_SECOND: '#5877ef',
                        PROGRESS_GRADIENT_THIRD: '#5877ef',
                    },
                    a = 360,
                    r = 270,
                    i = 1.48,
                    s = 5;
            },
            8007: (e, u, t) => {
                'use strict';
                t.d(u, { QH: () => s, Wc: () => i, ow: () => r, rF: () => o, xE: () => c });
                var n = t(6497);
                const a = (e) => (Math.PI / 180) * e,
                    r = (e, u) => (n.aU / u) * e,
                    i = (e, u) => (e.style.transform = `rotate(${u}deg)`),
                    s = (e, u) => e * (u / 2),
                    o = (e, u) => e - n.L4 * u,
                    l = (e, u, t) => {
                        const a = e.createLinearGradient(u, 0, 0, u);
                        return (
                            t
                                ? (a.addColorStop(0, n.DM.PROGRESS_GRADIENT_FIRST),
                                  a.addColorStop(0.6, n.DM.PROGRESS_GRADIENT_SECOND),
                                  a.addColorStop(1, n.DM.PROGRESS_GRADIENT_FIRST))
                                : (a.addColorStop(0, n.DM.CIRCLE_GRADIENT_FIRST),
                                  a.addColorStop(1, n.DM.CIRCLE_GRADIENT_SECOND)),
                            a
                        );
                    },
                    c = (e, u, t, r, i) => {
                        const s = u.width / 2,
                            o = u.height / 2;
                        (e.clearRect(0, 0, u.width, u.height),
                            (e.fillStyle = n.DM.PROGRESS_GRADIENT_FIRST),
                            e.beginPath(),
                            e.arc(s, o - t / 2 - r / 2, Math.floor((t - r) / 2), 0, 2 * Math.PI),
                            e.fill(),
                            e.closePath(),
                            (e.fillStyle = l(e, t)),
                            e.beginPath(),
                            e.arc(s, o, t, a(n._V), a(n._V + n.aU)),
                            e.arc(s, o, r, a(n.aU / 2), a(n._V + n.aU), !0),
                            e.fill(),
                            (e.fillStyle = l(e, t, !0)),
                            (e.strokeStyle = n.DM.PROGRESS_BORDER),
                            e.beginPath(),
                            e.arc(s, o, t, a(n._V), a(n._V + i)),
                            e.arc(s, o, r, a(n._V + i), a(n._V), !0),
                            e.stroke(),
                            e.fill(),
                            e.closePath());
                    };
            },
            3050: (e, u, t) => {
                'use strict';
                t.d(u, { n: () => r });
                var n = t(6179),
                    a = t(8007);
                const r = (e) => {
                    const u = (() => {
                            const e = (0, n.useState)(viewEnv.getScale()),
                                u = e[0],
                                t = e[1];
                            return (
                                (0, n.useEffect)(() => {
                                    const e = () => {
                                        t(viewEnv.getScale());
                                    };
                                    return (
                                        window.addEventListener('resize', e),
                                        () => {
                                            window.removeEventListener('resize', e);
                                        }
                                    );
                                }, []),
                                u
                            );
                        })(),
                        t = (0, a.QH)(u, e),
                        r = (0, a.rF)(t, u),
                        i = (0, n.useRef)({ value: t, inner: r });
                    return ((i.current.value = t), (i.current.inner = r), { scale: u, radiusRef: i });
                };
            },
            9495: (e, u, t) => {
                'use strict';
                t.d(u, { A6: () => E, vS: () => d });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    s = t(5976),
                    o = t(3026),
                    l = t(2408);
                let c, d;
                (!(function (e) {
                    ((e.Small = 'small'),
                        (e.Middle = 'middle'),
                        (e.Large = 'large'),
                        (e.Dynamic = 'dynamic'),
                        (e.Custom = 'custom'),
                        (e.Default = 'small'));
                })(c || (c = {})),
                    (function (e) {
                        ((e.Simple = 'simple'), (e.Gradient = 'gradient'), (e.Default = 'simple'));
                    })(d || (d = {})));
                const E = i().forwardRef(
                    (
                        {
                            title: e,
                            description: u,
                            size: t = c.Default,
                            type: n = d.Default,
                            hasLine: r = !0,
                            classNames: E,
                        },
                        _,
                    ) => {
                        const m = n === d.Gradient,
                            A = !s.Z.isWeak(),
                            g = m ? o.D.COLOR_GRADIENT_LINE : o.D.COLOR_LINE;
                        return i().createElement(
                            'div',
                            {
                                ref: _,
                                className: a()(
                                    l.Z.base,
                                    l.Z[`base__${n}`],
                                    l.Z[`base__${t}`],
                                    A && l.Z.base__additionalEffects,
                                    null == E ? void 0 : E.base,
                                ),
                            },
                            i().createElement(
                                'div',
                                { className: a()(l.Z.description, null == E ? void 0 : E.description) },
                                u,
                                A &&
                                    m &&
                                    i().createElement(
                                        'div',
                                        { className: a()(l.Z.gradient, l.Z.gradient__description) },
                                        u,
                                    ),
                            ),
                            i().createElement(
                                'div',
                                { className: a()(l.Z.titleBox, null == E ? void 0 : E.titleBox) },
                                i().createElement(
                                    'div',
                                    { className: a()(l.Z.title, null == E ? void 0 : E.title) },
                                    e,
                                    A &&
                                        m &&
                                        i().createElement(
                                            'div',
                                            { className: a()(l.Z.gradient, l.Z.gradient__title) },
                                            e,
                                        ),
                                ),
                                r &&
                                    i().createElement(
                                        'div',
                                        { className: a()(l.Z.line, null == E ? void 0 : E.line) },
                                        i().createElement(
                                            'svg',
                                            {
                                                className: l.Z.svg,
                                                viewBox: '0 0 302 7',
                                                fill: 'none',
                                                preserveAspectRatio: 'none meet',
                                            },
                                            i().createElement('path', {
                                                d: 'M301.384 1.01395C301.349 1.49453 300.953 1.86827 300.471 1.87651L2.76092 6.96329C1.55303 6.98393 0.556593 6.0184 0.539109 4.81042C0.521633 3.60338 1.48832 2.61399 2.69543 2.60348L300.443 0.00972535C300.99 0.00496359 301.425 0.468857 301.384 1.01395Z',
                                                fill: g,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    },
                );
                E.Size = c;
            },
            3026: (e, u, t) => {
                'use strict';
                t.d(u, { D: () => n });
                const n = { COLOR_LINE: '#fff', COLOR_GRADIENT_LINE: '#8ab9ff' };
            },
            1132: (e, u, t) => {
                'use strict';
                t.d(u, { E: () => a, Y: () => n });
                const n = (e) => {
                        const u = R.strings.ny_hangar_name.title.$num(e);
                        return u || '';
                    },
                    a = (e) => {
                        const u = R.strings.ny_hangar_name.description.$num(e);
                        return u || '';
                    };
            },
            3017: (e, u, t) => {
                'use strict';
                t.d(u, { Q: () => c, W: () => d });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    s = t(6030);
                const o = ['theme', 'level', 'type', 'className', 'style'];
                function l() {
                    return (
                        (l = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        l.apply(null, arguments)
                    );
                }
                let c;
                !(function (e) {
                    ((e.Light = 'light'), (e.Simple = 'simple'));
                })(c || (c = {}));
                const d = (e) => {
                    let u = e.theme,
                        t = void 0 === u ? c.Light : u,
                        n = e.level,
                        r = e.type,
                        d = e.className,
                        E = e.style,
                        _ = void 0 === E ? {} : E,
                        m = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, o);
                    const A = Object.assign({}, _, { backgroundPosition: `-${n - 1}em 0%` });
                    return i().createElement(
                        'div',
                        l({}, m, { className: a()(s.Z.base, s.Z[`base__${r}`], s.Z[`base__${t}`], d), style: A }),
                    );
                };
                d.Theme = c;
            },
            6307: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => o });
                var n = t(2056),
                    a = t(6179),
                    r = t.n(a);
                const i = ['args', 'children', 'ignoreShowDelay', 'isEnabled'];
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const o = (e) => {
                    var u;
                    let t = e.args,
                        a = e.children,
                        o = e.ignoreShowDelay,
                        l = void 0 === o || o,
                        c = e.isEnabled,
                        d = void 0 === c || c,
                        E = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, i);
                    return d && t
                        ? r().createElement(
                              n.u,
                              s({}, E, {
                                  ignoreShowDelay: l,
                                  contentId: R.views.lobby.new_year.tooltips.NyFriendsTooltips('resId'),
                                  args: { type: t.type, payload: JSON.stringify(null != (u = t.payload) ? u : {}) },
                              }),
                              a,
                          )
                        : a;
                };
            },
            2578: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => l, q: () => o });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    s = t(6977);
                let o;
                !(function (e) {
                    ((e.Online = 'online'), (e.Offline = 'offline'), (e.Busy = 'busy'));
                })(o || (o = {}));
                const l = ({ status: e }) => i().createElement('div', { className: a()(s.Z.base, s.Z[`base__${e}`]) });
                l.Status = o;
            },
            3668: (e, u, t) => {
                'use strict';
                t.d(u, { s: () => E });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6349),
                    i = t(6179),
                    s = t.n(i),
                    o = t(6307),
                    l = t(2578),
                    c = t(2221);
                let d;
                !(function (e) {
                    ((e.Primary = 'primary'), (e.Simple = 'simple'), (e.Default = 'primary'));
                })(d || (d = {}));
                const E = ({
                    status: e,
                    className: u,
                    classNames: t,
                    name: n,
                    tooltipArgs: i,
                    theme: E = d.Default,
                    isIconAbsolute: _ = !1,
                }) =>
                    s().createElement(
                        o.O,
                        { args: i },
                        s().createElement(
                            'div',
                            { className: a()(c.Z.base, c.Z[`base__${E}`], u, _ && c.Z.base__absoluteStatus) },
                            s().createElement(
                                'div',
                                { className: a()(c.Z.status, null == t ? void 0 : t.status) },
                                s().createElement(l.Y, { status: e }),
                            ),
                            s().createElement(
                                'div',
                                { className: a()(c.Z.name, null == t ? void 0 : t.name) },
                                s().createElement(r.l, { content: n }),
                            ),
                        ),
                    );
                ((E.Status = l.Y.Status), (E.Theme = d));
            },
            9383: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => E });
                var n = t(6483),
                    a = t.n(n),
                    r = t(6179),
                    i = t.n(r),
                    s = t(7030),
                    o = t(6676),
                    l = t(4989);
                const c = { enter: 'translateY(100%)', reduce: 'translateY(-100%)', none: 'translateY(0%)' },
                    d = { leave: 'translateY(0%)', reduce: 'translateY(0%)', none: 'translateY(-100%)' },
                    E = ({ value: e, enterType: u, exitType: t }) => {
                        const n = i().useState(o.W.number(e)),
                            r = n[0],
                            E = n[1];
                        i().useEffect(() => {
                            'none' !== t && E('');
                        }, [t]);
                        const _ = i().useMemo(() => r.split('').map((e) => ({ char: e, key: Symbol() })), [r]),
                            m = (0, s.useTransition)(_, {
                                from: { transform: c[u], opacity: 'none' === u ? 1 : 0 },
                                enter: { transform: 'translateY(0%)', opacity: 1 },
                                leave: { transform: d[t], opacity: 0 },
                                keys: _.map((e) => e.key),
                                trail: 200,
                            });
                        return i().createElement(
                            i().Fragment,
                            null,
                            m((e, u) =>
                                i().createElement(
                                    s.animated.div,
                                    { className: a()(l.Z.char, l.Z[`char__${t}`]), style: e },
                                    u.char,
                                ),
                            ),
                        );
                    };
            },
            4254: (e, u, t) => {
                'use strict';
                t.d(u, { _z: () => d, q4: () => c.q });
                var n = t(6483),
                    a = t.n(n),
                    r = (t(5433), t(6179)),
                    i = t.n(r),
                    s = t(6676),
                    o = t(4989),
                    l = t(480),
                    c = t(6826);
                const d = i().memo((e) => {
                    if (e.withAnimation) return i().createElement(l.W, e);
                    const u = e.type,
                        t = e.size,
                        n = void 0 === t ? c.q.Default : t,
                        r = e.isReverse,
                        d = e.isNotEnough,
                        E = e.classNames,
                        _ = e.className,
                        m = e.value,
                        A = e.isError,
                        g = void 0 !== A && A;
                    return i().createElement(
                        'div',
                        {
                            className: a()(
                                o.Z.base,
                                o.Z[`base__${u}`],
                                o.Z[`base__${n}`],
                                r && o.Z.base__reverse,
                                null == E ? void 0 : E.base,
                                _,
                            ),
                        },
                        i().createElement('div', { className: a()(o.Z.icon, null == E ? void 0 : E.icon) }),
                        void 0 !== m &&
                            i().createElement(
                                'div',
                                { className: a()(o.Z.value, d && o.Z.value__notEnough, null == E ? void 0 : E.value) },
                                e.additionalValue,
                                g ? R.strings.ny.common.dashes() : s.W.number(m),
                            ),
                    );
                });
            },
            480: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => A });
                var n = t(6483),
                    a = t.n(n),
                    r = t(1856),
                    i = t(122),
                    s = t(2344),
                    o = t(6179),
                    l = t.n(o),
                    c = t(7030),
                    d = t(6676),
                    E = t(9383),
                    _ = t(4989),
                    m = t(6826);
                const A = ({
                    type: e,
                    value: u = 0,
                    size: t = m.q.Default,
                    isReverse: n,
                    classNames: o,
                    className: A,
                }) => {
                    var D;
                    const b = l().useState(u),
                        h = b[0],
                        C = b[1],
                        v = l().useRef(null),
                        f = null != (D = (0, s.D9)(h)) ? D : h,
                        B = l().useMemo(() => Symbol(), [h]);
                    l().useEffect(() => {
                        const e = v.current;
                        if (e)
                            return (
                                e.classList.remove(_.Z.base__reduce),
                                e.classList.remove(_.Z.base__increase),
                                (0, r.v)(() =>
                                    f > u
                                        ? (e.classList.add(_.Z.base__reduce),
                                          (0, i.F)(() => {
                                              C(u);
                                          }, 50))
                                        : f < u
                                          ? (e.classList.add(_.Z.base__increase),
                                            (0, i.F)(() => {
                                                C(u);
                                            }, 200))
                                          : void 0,
                                )
                            );
                    }, [f, u]);
                    const p = (0, c.useTransition)(h, {
                        from: { opacity: h === f ? 1 : 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        keys: () => B,
                        config: { duration: 1200 },
                    });
                    return l().createElement(
                        'div',
                        {
                            ref: v,
                            className: a()(
                                _.Z.base,
                                _.Z[`base__${e}`],
                                _.Z[`base__${t}`],
                                n && _.Z.base__reverse,
                                null == o ? void 0 : o.base,
                                A,
                            ),
                        },
                        l().createElement(
                            'div',
                            { className: a()(_.Z.icon, null == o ? void 0 : o.icon) },
                            l().createElement('div', { className: a()(_.Z.iconEffect, _.Z.iconEffect__reduce) }),
                            l().createElement('div', { className: a()(_.Z.iconEffect, _.Z.iconEffect__increase) }),
                            l().createElement('div', { className: a()(_.Z.increaseParticles) }),
                        ),
                        l().createElement(
                            'div',
                            { className: a()(_.Z.value, null == o ? void 0 : o.value) },
                            p((e, u, t) =>
                                l().createElement(
                                    c.animated.div,
                                    { className: _.Z.valueWrapper, style: e },
                                    l().createElement(E.A, { value: u, enterType: F(h, f), exitType: g(h, u, t) }),
                                ),
                            ),
                            l().createElement('div', { className: _.Z.value__ghost }, d.W.number(h)),
                        ),
                    );
                };
                function g(e, u, t) {
                    return e === u || 'mount' === t.phase ? 'none' : u > e ? 'reduce' : 'leave';
                }
                function F(e, u) {
                    return e === u ? 'none' : u > e ? 'reduce' : 'enter';
                }
            },
            6826: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { q: () => n }),
                    (function (e) {
                        ((e.s16 = '16'),
                            (e.s20 = '20'),
                            (e.s24 = '24'),
                            (e.s28 = '28'),
                            (e.s32 = '32'),
                            (e.s40 = '40'),
                            (e.s48 = '48'),
                            (e.Default = '24'));
                    })(n || (n = {})));
            },
            6676: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { number: t(5348).Z };
            },
            5348: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => i });
                var n = t(9916);
                const a = { gold: 'gold', integral: 'integral' },
                    r = { [a.gold]: n.B3.GOLD, [a.integral]: n.B3.INTEGRAL };
                function i(e, u = a.integral) {
                    return n.Z5.getNumberFormat(e, r[u]);
                }
                i.type = a;
            },
            5976: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { Z: () => r }),
                    (function (e) {
                        ((e[(e.Ultra = 0)] = 'Ultra'),
                            (e[(e.Max = 1)] = 'Max'),
                            (e[(e.Height = 2)] = 'Height'),
                            (e[(e.Medium = 3)] = 'Medium'),
                            (e[(e.Low = 4)] = 'Low'),
                            (e[(e.Min = 5)] = 'Min'),
                            (e[(e.PerfLevelCount = 6)] = 'PerfLevelCount'));
                    })(n || (n = {})));
                const a = n.Ultra,
                    r = {
                        GraphicsPreset: n,
                        isWeak: () => a >= n.Low,
                        betterThan: (e) => a < e,
                        betterThanEq: (e) => a <= e,
                        worseThan: (e) => a > e,
                        worseThanEq: (e) => a >= e,
                        is: (e) => a === e,
                    };
            },
            6808: (e, u, t) => {
                'use strict';
                t.d(u, { Bi: () => a, Wt: () => n });
                (t(6483), t(7739), t(3649), t(6179), t(2973));
                var n = t(9480);
                const a = () => {};
            },
            1458: (e, u, t) => {
                'use strict';
                t.d(u, { Iw: () => i, SD: () => s, W: () => o });
                var n = t(7739),
                    a = t(6179);
                let r;
                !(function (e) {
                    ((e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge'));
                })(r || (r = {}));
                const i = () => (0, a.useContext)(n.YN).extraSmall,
                    s = () => {
                        const e = (0, a.useContext)(n.YN);
                        return e.extraSmall || e.small;
                    },
                    o = () => {
                        const e = (0, a.useContext)(n.YN);
                        return e.large || e.extraLarge;
                    };
            },
            2973: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { r: () => a }),
                    (function (e) {
                        ((e.ExtraSmall = 'extraSmall'),
                            (e.Small = 'small'),
                            (e.Medium = 'medium'),
                            (e.Large = 'large'),
                            (e.ExtraLarge = 'extraLarge'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Ru = 'RU'),
                            (e.Eu = 'EU'),
                            (e.Na = 'NA'),
                            (e.Asia = 'ASIA'),
                            (e.Cn = 'CN'),
                            (e.Kr = 'KR'),
                            (e.Ct = 'CT'),
                            (e.St = 'ST'),
                            (e.QA = 'QA'),
                            (e.Dev = 'DEV'),
                            (e.Sb = 'SB'));
                    })(a || (a = {})));
            },
            5433: (e, u, t) => {
                'use strict';
                let n, a, r, i, s, o, l;
                (t.d(u, { _z: () => a, v5: () => s, vQ: () => n, xU: () => r }),
                    (function (e) {
                        ((e.Undefined = 'undefined'),
                            (e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'),
                            (e.Soviet = 'soviet'),
                            (e.TraditionalWestern = 'traditionalWestern'),
                            (e.ModernWestern = 'modernWestern'),
                            (e.Asian = 'asian'),
                            (e.Mega = 'Mega'),
                            (e.GiftSystem = 'GiftSystem'),
                            (e.Cat = 'Cat'),
                            (e.Atm = 'Atm'),
                            (e.Gift2 = 'Gift2'),
                            (e.Bro = 'Bro'),
                            (e.Dog = 'Dog'),
                            (e.Surprise = 'Surprise'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Crystal = 'ny_crystal'),
                            (e.Emerald = 'ny_emerald'),
                            (e.Amber = 'ny_amber'),
                            (e.Iron = 'ny_iron'),
                            (e.AnyResource = 'anyResource'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.Undefined = 'undefined'),
                            (e.ToEvent = 'toEvent'),
                            (e.ToGuestD = 'toGuestD'),
                            (e.ToGuestC = 'toGuestC'),
                            (e.ToMarkertplace = 'toMarkertplace'),
                            (e.ToGiftmachine = 'toGiftmachine'),
                            (e.ToRewards = 'toRewards'));
                    })(l || (l = {})));
            },
            6844: (e, u, t) => {
                'use strict';
                let n, a, r;
                (t.d(u, { J$: () => a, k4: () => r, ut: () => n }),
                    (function (e) {
                        ((e.Tournament = 'tournament'),
                            (e.TournamentCompleted = 'tournamentCompleted'),
                            (e.GuestA = 'guestA'),
                            (e.GuestC = 'guestC'),
                            (e.Headquarters = 'headquarters'),
                            (e.GuestD = 'guestD'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Town = 'Town'),
                            (e.Fir = 'Fir'),
                            (e.Fair = 'Fair'),
                            (e.Installation = 'Installation'),
                            (e.Resources = 'Resources'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Town = 'FriendTown'),
                            (e.Fir = 'FriendFir'),
                            (e.Fair = 'FriendFair'),
                            (e.Installation = 'FriendInstallation'),
                            (e.Resources = 'FriendResources'));
                    })(r || (r = {})));
            },
            3269: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { V: () => n }),
                    (function (e) {
                        ((e.Available = 'available'),
                            (e.AvailableExtra = 'availableExtra'),
                            (e.Collected = 'collected'),
                            (e.Unavailable = 'unavailable'),
                            (e.Finished = 'finished'));
                    })(n || (n = {})));
            },
            2608: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { X: () => n }),
                    (function (e) {
                        ((e.Tournament = 'tournament'),
                            (e.GuestA = 'guestA'),
                            (e.GuestC = 'guestC'),
                            (e.GuestD = 'guestD'),
                            (e.Completed = 'completed'),
                            (e.Headquarters = 'headquarters'),
                            (e.Advanced = 'advanced'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.GuestA = 'guest_A'), (e.GuestC = 'guest_C'), (e.GuestD = 'guest_D'));
                    })(a || (a = {})));
            },
            5977: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { K: () => a, f: () => n }),
                    (function (e) {
                        ((e[(e.Empty = 0)] = 'Empty'), (e[(e.Active = 1)] = 'Active'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Unavailable = 'unavailable'),
                            (e.AllPurchased = 'allPurchased'),
                            (e.Level2 = 'level2'),
                            (e.Level3 = 'level3'),
                            (e.Level4 = 'level4'));
                    })(a || (a = {})));
            },
            8764: (e, u, t) => {
                'use strict';
                let n, a;
                (t.d(u, { J: () => n }),
                    (function (e) {
                        ((e.Offline = 'Offline'), (e.Online = 'Online'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e[(e.Default = 0)] = 'Default'), (e[(e.Best = 1)] = 'Best'));
                    })(a || (a = {})));
            },
            7596: (e, u, t) => {
                'use strict';
                let n;
                (t.d(u, { a: () => n }),
                    (function (e) {
                        ((e.Idle = 'idle'),
                            (e.Reward = 'reward'),
                            (e.RewardPrequel = 'rewardPrequel'),
                            (e.SpecialReward = 'specialReward'),
                            (e.SpecialRewardPrequel = 'specialRewardPrequel'),
                            (e.SpecialRewardPreview = 'specialRewardPreview'),
                            (e.SkipRewardPrequel = 'skipRewardPrequel'),
                            (e.SkipSpecialRewardPrequel = 'skipSpecialRewardPrequel'),
                            (e.SkipRareRewardPrequel = 'skipRareRewardPrequel'),
                            (e.RareRewardPrequel = 'rareRewardPrequel'),
                            (e.RareReward = 'rareReward'),
                            (e.Error = 'error'),
                            (e.BuyTokens = 'buyTokens'));
                    })(n || (n = {})));
            },
            9799: (e, u, t) => {
                'use strict';
                let n, a, r;
                (t.d(u, { Mi: () => n, n: () => r, we: () => a }),
                    (function (e) {
                        ((e.Resources = 'Resources'),
                            (e.ToySlots = 'ToySlots'),
                            (e.AllTown = 'AllTown'),
                            (e.MaxLevelReward = 'MaxLevelReward'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.DefaultHangar = 'DefaultHangar'), (e.MaxLevel = 'MaxLevel'), (e.Default = 'Default'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Idle = 'idle'),
                            (e.Pending = 'Pending'),
                            (e.Customization = 'customization'),
                            (e.Widget = 'widget'),
                            (e.MaxLevel = 'maxLevel'));
                    })(r || (r = {})));
            },
            8055: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
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
            7916: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'Countdown_base_fe',
                    icon: 'Countdown_icon_8b',
                    description: 'Countdown_description_8d',
                };
            },
            4769: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
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
            7476: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                };
            },
            1699: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'TextOverflow_base_3b' };
            },
            8417: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'BaseCounter_base_f0', plus: 'BaseCounter_plus_e0' };
            },
            3736: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'CircleProgressBar_base_3d',
                    light: 'CircleProgressBar_light_6f',
                    base__additionalEffects: 'CircleProgressBar_base__additionalEffects_ec',
                    light__hidden: 'CircleProgressBar_light__hidden_c9',
                    circleSizeCentered: 'CircleProgressBar_circleSizeCentered_3b',
                    lightTip: 'CircleProgressBar_lightTip_16',
                    lightGlow: 'CircleProgressBar_lightGlow_89',
                    lightGlow__start: 'CircleProgressBar_lightGlow__start_50',
                    lightGlow__hidden: 'CircleProgressBar_lightGlow__hidden_8a',
                    bgLight: 'CircleProgressBar_bgLight_ae',
                    progressLightContainer: 'CircleProgressBar_progressLightContainer_2c',
                    progressLight: 'CircleProgressBar_progressLight_5d',
                    fadeIn: 'CircleProgressBar_fadeIn_35',
                    progressLight__quarter: 'CircleProgressBar_progressLight__quarter_45',
                    progressLight__threeQuarter: 'CircleProgressBar_progressLight__threeQuarter_15',
                    pulse: 'CircleProgressBar_pulse_b0',
                };
            },
            2408: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HangarName_base_bd',
                    base__large: 'HangarName_base__large_a1',
                    description: 'HangarName_description_83',
                    base__dynamic: 'HangarName_base__dynamic_6f',
                    base__small: 'HangarName_base__small_b6',
                    base__middle: 'HangarName_base__middle_4f',
                    base__additionalEffects: 'HangarName_base__additionalEffects_3a',
                    titleBox: 'HangarName_titleBox_d7',
                    title: 'HangarName_title_70',
                    gradient: 'HangarName_gradient_9e',
                    gradient__title: 'HangarName_gradient__title_cb',
                    gradient__description: 'HangarName_gradient__description_de',
                    line: 'HangarName_line_9d',
                    svg: 'HangarName_svg_8f',
                    slideInFadeIn: 'HangarName_slideInFadeIn_51',
                    fadeOut: 'HangarName_fadeOut_12',
                    fadeIn: 'HangarName_fadeIn_d3',
                    fadeInWithScale: 'HangarName_fadeInWithScale_8e',
                    slideUp: 'HangarName_slideUp_cb',
                    scale: 'HangarName_scale_d2',
                    spin: 'HangarName_spin_c6',
                    blink: 'HangarName_blink_a8',
                    slideInNotification: 'HangarName_slideInNotification_a8',
                };
            },
            6030: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'LightLevel_base_ae',
                    base__roman: 'LightLevel_base__roman_e3',
                    base__arabic: 'LightLevel_base__arabic_00',
                    base__light: 'LightLevel_base__light_33',
                };
            },
            6977: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'OnlineStatus_base_ce',
                    base__online: 'OnlineStatus_base__online_1f',
                    base__offline: 'OnlineStatus_base__offline_66',
                    base__busy: 'OnlineStatus_base__busy_27',
                };
            },
            2221: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'PlayerWithStatus_base_a9',
                    base__absoluteStatus: 'PlayerWithStatus_base__absoluteStatus_8b',
                    status: 'PlayerWithStatus_status_25',
                    name: 'PlayerWithStatus_name_8a',
                    base__simple: 'PlayerWithStatus_base__simple_ad',
                    base__primary: 'PlayerWithStatus_base__primary_34',
                    slideInFadeIn: 'PlayerWithStatus_slideInFadeIn_81',
                    fadeOut: 'PlayerWithStatus_fadeOut_da',
                    fadeIn: 'PlayerWithStatus_fadeIn_db',
                    fadeInWithScale: 'PlayerWithStatus_fadeInWithScale_bb',
                    slideUp: 'PlayerWithStatus_slideUp_ac',
                    scale: 'PlayerWithStatus_scale_9e',
                    spin: 'PlayerWithStatus_spin_3c',
                    blink: 'PlayerWithStatus_blink_d3',
                    slideInNotification: 'PlayerWithStatus_slideInNotification_ad',
                };
            },
            4989: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
                    base: 'Resource_base_f1',
                    base__reverse: 'Resource_base__reverse_e4',
                    base__ny_crystal: 'Resource_base__ny_crystal_28',
                    base__ny_emerald: 'Resource_base__ny_emerald_55',
                    base__ny_amber: 'Resource_base__ny_amber_da',
                    base__ny_iron: 'Resource_base__ny_iron_99',
                    base__anyResource: 'Resource_base__anyResource_08',
                    valueWrapper: 'Resource_valueWrapper_64',
                    value: 'Resource_value_ac',
                    value__ghost: 'Resource_value__ghost_ba',
                    value__notEnough: 'Resource_value__notEnough_a5',
                    char__reduce: 'Resource_char__reduce_28',
                    icon: 'Resource_icon_76',
                    base__16: 'Resource_base__16_83',
                    base__20: 'Resource_base__20_d8',
                    base__24: 'Resource_base__24_a2',
                    base__28: 'Resource_base__28_7c',
                    base__32: 'Resource_base__32_a6',
                    base__40: 'Resource_base__40_1d',
                    base__48: 'Resource_base__48_9b',
                    iconEffect: 'Resource_iconEffect_a7',
                    iconEffect__reduce: 'Resource_iconEffect__reduce_9e',
                    base__reduce: 'Resource_base__reduce_be',
                    redResource: 'Resource_redResource_c9',
                    iconEffect__increase: 'Resource_iconEffect__increase_99',
                    base__increase: 'Resource_base__increase_18',
                    gainResource: 'Resource_gainResource_14',
                    increaseParticles: 'Resource_increaseParticles_05',
                    showParticles: 'Resource_showParticles_9d',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred,
        inProgress,
        dataWebpackPrefix,
        loadStylesheet,
        installedCssChunks;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], r = !0, i = 0; i < u.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(u, { a: u }), u);
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.f = {}),
        (__webpack_require__.e = (e) =>
            Promise.all(Object.keys(__webpack_require__.f).reduce((u, t) => (__webpack_require__.f[t](e, u), u), []))),
        (__webpack_require__.u = (e) =>
            1521 === e
                ? 'chunks/lobby/f944b8bfb1eb603519ac.js'
                : 4727 === e
                  ? 'chunks/lobby/6b5ba7869302e49c9cce.js'
                  : 2736 === e
                    ? 'chunks/lobby/a25e4cf5500c42405bc8.js'
                    : 1282 === e
                      ? 'chunks/lobby/fb0c50b41966ac95ff44.js'
                      : 8629 === e
                        ? 'chunks/lobby/2c19452464c886c5d6fc.js'
                        : 7506 === e
                          ? 'chunks/lobby/a178e28cddbf1edec805.js'
                          : 6339 === e
                            ? 'chunks/lobby/277ccfa65949cb45e47d.js'
                            : 5041 === e
                              ? 'chunks/lobby/106a032c7a24d5cbadbb.js'
                              : 7852 === e
                                ? 'chunks/lobby/675c4f0710d2bc6f16ba.js'
                                : 8310 === e
                                  ? 'chunks/lobby/fc638196429ecfa516af.js'
                                  : 5785 === e
                                    ? 'chunks/lobby/877366f841f64b9ea42c.js'
                                    : 7773 === e
                                      ? 'chunks/lobby/5d50823fdab6431c33b9.js'
                                      : 7438 === e
                                        ? 'chunks/lobby/e32a96e67d459eba8e93.js'
                                        : 3820 === e
                                          ? 'chunks/lobby/8b4c927c407d9dd180b9.js'
                                          : 1628 === e
                                            ? 'chunks/lobby/26440fd72883e1c1ec73.js'
                                            : 2714 === e
                                              ? 'chunks/lobby/000021d168d6603aa4b2.js'
                                              : 10 === e
                                                ? 'chunks/lobby/23082465b07b2137a423.js'
                                                : 8584 === e
                                                  ? 'chunks/lobby/1668ae553f578ff70a99.js'
                                                  : 3522 === e
                                                    ? 'chunks/lobby/6d5e75b48a9e3da19b1a.js'
                                                    : 1193 === e
                                                      ? 'chunks/lobby/8c8577a92bfb6d18f735.js'
                                                      : 3138 === e
                                                        ? 'chunks/lobby/ce92b9d7e265a3d28d2a.js'
                                                        : void 0),
        (__webpack_require__.miniCssF = (e) =>
            2736 === e
                ? 'chunks/lobby/a25e4cf5500c42405bc8.css'
                : 1282 === e
                  ? 'chunks/lobby/fb0c50b41966ac95ff44.css'
                  : 8629 === e
                    ? 'chunks/lobby/2c19452464c886c5d6fc.css'
                    : 7506 === e
                      ? 'chunks/lobby/a178e28cddbf1edec805.css'
                      : 5041 === e
                        ? 'chunks/lobby/106a032c7a24d5cbadbb.css'
                        : 7852 === e
                          ? 'chunks/lobby/675c4f0710d2bc6f16ba.css'
                          : 8310 === e
                            ? 'chunks/lobby/fc638196429ecfa516af.css'
                            : 5785 === e
                              ? 'chunks/lobby/877366f841f64b9ea42c.css'
                              : 7773 === e
                                ? 'chunks/lobby/5d50823fdab6431c33b9.css'
                                : 7438 === e
                                  ? 'chunks/lobby/e32a96e67d459eba8e93.css'
                                  : 1628 === e
                                    ? 'chunks/lobby/26440fd72883e1c1ec73.css'
                                    : 2714 === e
                                      ? 'chunks/lobby/000021d168d6603aa4b2.css'
                                      : 10 === e
                                        ? 'chunks/lobby/23082465b07b2137a423.css'
                                        : 8584 === e
                                          ? 'chunks/lobby/1668ae553f578ff70a99.css'
                                          : 3522 === e
                                            ? 'chunks/lobby/6d5e75b48a9e3da19b1a.css'
                                            : 1193 === e
                                              ? 'chunks/lobby/8c8577a92bfb6d18f735.css'
                                              : 3138 === e
                                                ? 'chunks/lobby/ce92b9d7e265a3d28d2a.css'
                                                : 'lobby/new_year/MainView/MainView.css'),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (inProgress = {}),
        (dataWebpackPrefix = 'gameface:'),
        (__webpack_require__.l = (e, u, t, n) => {
            if (inProgress[e]) inProgress[e].push(u);
            else {
                var a, r;
                if (void 0 !== t)
                    for (var i = document.getElementsByTagName('script'), s = 0; s < i.length; s++) {
                        var o = i[s];
                        if (o.getAttribute('src') == e || o.getAttribute('data-webpack') == dataWebpackPrefix + t) {
                            a = o;
                            break;
                        }
                    }
                (a ||
                    ((r = !0),
                    ((a = document.createElement('script')).charset = 'utf-8'),
                    (a.timeout = 120),
                    __webpack_require__.nc && a.setAttribute('nonce', __webpack_require__.nc),
                    a.setAttribute('data-webpack', dataWebpackPrefix + t),
                    (a.src = e)),
                    (inProgress[e] = [u]));
                var l = (u, t) => {
                        ((a.onerror = a.onload = null), clearTimeout(c));
                        var n = inProgress[e];
                        if (
                            (delete inProgress[e],
                            a.parentNode && a.parentNode.removeChild(a),
                            n && n.forEach((e) => e(t)),
                            u)
                        )
                            return u(t);
                    },
                    c = setTimeout(l.bind(null, void 0, { type: 'timeout', target: a }), 12e4);
                ((a.onerror = l.bind(null, a.onerror)),
                    (a.onload = l.bind(null, a.onload)),
                    r && document.head.appendChild(a));
            }
        }),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 5533),
        (() => {
            var e;
            __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + '');
            var u = __webpack_require__.g.document;
            if (!e && u && (u.currentScript && (e = u.currentScript.src), !e)) {
                var t = u.getElementsByTagName('script');
                t.length && (e = t[t.length - 1].src);
            }
            if (!e) throw new Error('Automatic publicPath is not supported in this browser');
            ((e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (__webpack_require__.p = e + '../../../'));
        })(),
        (loadStylesheet = (e) =>
            new Promise((u, t) => {
                var n = __webpack_require__.miniCssF(e),
                    a = __webpack_require__.p + n;
                if (
                    ((e, u) => {
                        for (var t = document.getElementsByTagName('link'), n = 0; n < t.length; n++) {
                            var a = (i = t[n]).getAttribute('data-href') || i.getAttribute('href');
                            if ('stylesheet' === i.rel && (a === e || a === u)) return i;
                        }
                        var r = document.getElementsByTagName('style');
                        for (n = 0; n < r.length; n++) {
                            var i;
                            if ((a = (i = r[n]).getAttribute('data-href')) === e || a === u) return i;
                        }
                    })(n, a)
                )
                    return u();
                ((e, u, t, n) => {
                    var a = document.createElement('link');
                    ((a.rel = 'stylesheet'),
                        (a.type = 'text/css'),
                        (a.onerror = a.onload =
                            (r) => {
                                if (((a.onerror = a.onload = null), 'load' === r.type)) t();
                                else {
                                    var i = r && ('load' === r.type ? 'missing' : r.type),
                                        s = (r && r.target && r.target.href) || u,
                                        o = new Error('Loading CSS chunk ' + e + ' failed.\n(' + s + ')');
                                    ((o.code = 'CSS_CHUNK_LOAD_FAILED'),
                                        (o.type = i),
                                        (o.request = s),
                                        a.parentNode.removeChild(a),
                                        n(o));
                                }
                            }),
                        (a.href = u),
                        document.head.appendChild(a));
                })(e, a, u, t);
            })),
        (installedCssChunks = { 5533: 0 }),
        (__webpack_require__.f.miniCss = (e, u) => {
            installedCssChunks[e]
                ? u.push(installedCssChunks[e])
                : 0 !== installedCssChunks[e] &&
                  {
                      10: 1,
                      1193: 1,
                      1282: 1,
                      1628: 1,
                      2714: 1,
                      2736: 1,
                      3138: 1,
                      3522: 1,
                      5041: 1,
                      5785: 1,
                      7438: 1,
                      7506: 1,
                      7773: 1,
                      7852: 1,
                      8310: 1,
                      8584: 1,
                      8629: 1,
                  }[e] &&
                  u.push(
                      (installedCssChunks[e] = loadStylesheet(e).then(
                          () => {
                              installedCssChunks[e] = 0;
                          },
                          (u) => {
                              throw (delete installedCssChunks[e], u);
                          },
                      )),
                  );
        }),
        (() => {
            var e = { 5533: 0 };
            ((__webpack_require__.f.j = (u, t) => {
                var n = __webpack_require__.o(e, u) ? e[u] : void 0;
                if (0 !== n)
                    if (n) t.push(n[2]);
                    else {
                        var a = new Promise((t, a) => (n = e[u] = [t, a]));
                        t.push((n[2] = a));
                        var r = __webpack_require__.p + __webpack_require__.u(u),
                            i = new Error();
                        __webpack_require__.l(
                            r,
                            (t) => {
                                if (__webpack_require__.o(e, u) && (0 !== (n = e[u]) && (e[u] = void 0), n)) {
                                    var a = t && ('load' === t.type ? 'missing' : t.type),
                                        r = t && t.target && t.target.src;
                                    ((i.message = 'Loading chunk ' + u + ' failed.\n(' + a + ': ' + r + ')'),
                                        (i.name = 'ChunkLoadError'),
                                        (i.type = a),
                                        (i.request = r),
                                        n[1](i));
                                }
                            },
                            'chunk-' + u,
                            u,
                        );
                    }
            }),
                (__webpack_require__.O.j = (u) => 0 === e[u]));
            var u = (u, t) => {
                    var n,
                        a,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        ((a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(92));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
