(() => {
    'use strict';
    var __webpack_modules__ = {
            2686: (e, u, t) => {
                t.d(u, { At: () => i });
                var n = t(6179),
                    r = t.n(n),
                    a = t(3458);
                t(2902);
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
                const i = (0, n.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            i = e.getImageSource,
                            d = e.frameCount,
                            A = e.onAnimate,
                            _ = e.frameTime,
                            m = void 0 === _ ? a.O.FRAME_TIME : _,
                            F = e.initialFrameIndex,
                            D = void 0 === F ? a.O.INITIAL_FRAME_INDEX : F,
                            C = e.lastFrameIndex,
                            B = void 0 === C ? d - 1 : C,
                            g = e.loop,
                            p = void 0 === g ? a.O.LOOP : g,
                            v = e.state,
                            h = void 0 === v ? a.O.STATE : v,
                            b = e.onAnimationDone,
                            w = e.onAnimationComplete,
                            f = e.poster,
                            R = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, o);
                        const y = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const e = y.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        (u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y));
                                    };
                                switch (h) {
                                    case 'play':
                                        return (function () {
                                            const e = E(D, B, i),
                                                u = l(D, B),
                                                n = window.setInterval(() => {
                                                    const r = u(),
                                                        a = e.get(r);
                                                    a
                                                        ? (null == A || A(r, a),
                                                          t(a),
                                                          r === B &&
                                                              (null == w || w(),
                                                              p || (null == b || b(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, m);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === D && f ? { path: f, x: 0, y: 0 } : i(D),
                                                u = new Image();
                                            u.src = e.path;
                                            const n = () => t(c(e, u));
                                            return (
                                                u.addEventListener('load', n),
                                                () => u.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [m, i, D, B, p, A, w, b, f, h]),
                            r().createElement('canvas', s({}, R, { width: u, height: t, ref: y }))
                        );
                    }),
                    l = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return ((t += 1), t > u && (t = e), n);
                        };
                    },
                    c = (e, u) => Object.assign({}, e, { img: u }),
                    E = (e, u, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = r[e.path];
                            if (u) n.set(a, c(e, u));
                            else {
                                const u = new Image();
                                ((r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, c(e, u)));
                            }
                        }
                        return n;
                    };
            },
            3458: (e, u, t) => {
                t.d(u, { O: () => n });
                const n = { FRAME_TIME: 33, INITIAL_FRAME_INDEX: 0, LOOP: !0, STATE: 'play' };
            },
            126: (e, u, t) => {
                function n(e) {
                    const u = e.chunk,
                        t = u.rows * u.columns;
                    return (n) => {
                        const r = n % t,
                            a = (r % u.columns) * e.width,
                            o = Math.trunc(r / u.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(n / t)), x: a, y: o };
                    };
                }
                function r(e) {
                    return (u) => `${e}${u}`;
                }
                t.d(u, { V: () => r, q: () => n });
            },
            2902: (e, u, t) => {
                (t(6179), t(3458));
            },
            2372: (e, u, t) => {
                t.d(u, { A: () => o });
                var n = t(6179),
                    r = t.n(n),
                    a = t(9916);
                class o extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = a.B3.GOLD;
                        else e = a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                o.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                t.d(u, { z: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    o = t(6179),
                    s = t.n(o),
                    i = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: n = a.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, a.WU)(u, e) : u;
                    return s().createElement(
                        o.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            s().createElement(
                                'div',
                                { className: r()(i.Z.base, t), key: `${u}-${l}` },
                                (0, a.Uw)(u, n, e).map((e, u) =>
                                    s().createElement(o.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                t.d(u, { z: () => n.z });
                var n = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                t(3649);
            },
            3495: (e, u, t) => {
                t.d(u, { Y: () => E });
                var n = t(3138),
                    r = t(6179),
                    a = t(1043),
                    o = t(5262);
                const s = n.O.client.getSize('rem'),
                    i = s.width,
                    l = s.height,
                    c = Object.assign({ width: i, height: l }, (0, o.T)(i, l, a.j)),
                    E = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                (t(3138), t(6536), t(6179), t(3495), t(1043), t(5262));
            },
            6010: (e, u, t) => {
                var n = t(6179),
                    r = t(7382),
                    a = t(3495);
                const o = ['children'];
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
                        })(e, o);
                    const s = (0, n.useContext)(a.Y),
                        i = s.extraLarge,
                        l = s.large,
                        c = s.medium,
                        E = s.small,
                        d = s.extraSmall,
                        A = s.extraLargeWidth,
                        _ = s.largeWidth,
                        m = s.mediumWidth,
                        F = s.smallWidth,
                        D = s.extraSmallWidth,
                        C = s.extraLargeHeight,
                        B = s.largeHeight,
                        g = s.mediumHeight,
                        p = s.smallHeight,
                        v = s.extraSmallHeight,
                        h = { extraLarge: C, large: B, medium: g, small: p, extraSmall: v };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && A) return (0, r.H)(u, t, h);
                        if (t.largeWidth && _) return (0, r.H)(u, t, h);
                        if (t.mediumWidth && m) return (0, r.H)(u, t, h);
                        if (t.smallWidth && F) return (0, r.H)(u, t, h);
                        if (t.extraSmallWidth && D) return (0, r.H)(u, t, h);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
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
                (t(6010), t(1039), t(3495));
            },
            1043: (e, u, t) => {
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
                var n;
                function r(e, u, t) {
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
                        r = (function (e, u) {
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
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
                    };
                }
                (t.d(u, { T: () => r }),
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
                t.d(u, { IC: () => n });
                var n,
                    r = t(6483),
                    a = t.n(r),
                    o = t(6373),
                    s = t(3138),
                    i = t(2039),
                    l = t(5099),
                    c = t(7727),
                    E = t(9916),
                    d = t(6179),
                    A = t.n(d),
                    _ = t(4769),
                    m = t(8475);
                !(function (e) {
                    ((e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom'));
                })(n || (n = {}));
                const F = ['__left', '__right', '__top', '__bottom'];
                (0, d.forwardRef)(
                    ({ children: e, disableAutoSizeUpdate: u, onOutsideClick: t, customStyles: n = {} }, r) => {
                        const D = (0, d.useRef)(null),
                            C = (0, d.useRef)(null),
                            B = (0, d.useRef)(null),
                            g = (0, d.useState)(window.decorator && window.decorator.directionType),
                            p = g[0],
                            v = g[1],
                            h = (0, d.useCallback)(() => {
                                (c.$.playClick(), s.O.view.sendEvent.close());
                            }, []),
                            b = (0, d.useCallback)(() => {
                                c.$.playHighlight();
                            }, []),
                            w = a()(_.Z.arrow, _.Z[`arrow${F[p]}`]);
                        (0, i.b)(
                            () => (
                                s.O.client.events.mouse.enableOutside(),
                                s.O.client.events.mouse.down(([, e]) => {
                                    'outside' === e && (t ? t() : s.O.view.sendEvent.close('popover'));
                                })
                            ),
                        );
                        const f = (0, d.useCallback)(
                                (e) => {
                                    let u = e.target;
                                    do {
                                        if (u === D.current || u === B.current) return;
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
                                [D, B, t],
                            ),
                            y = (0, m.w)(),
                            x = (0, d.useCallback)(() => {
                                const e = C.current;
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
                            (0, d.useImperativeHandle)(r, () => ({ updateSize: x })),
                            (0, i.b)(() => {
                                s.O.view.setInputPaddingsRem(58);
                            }),
                            (0, d.useEffect)(() => {
                                document.addEventListener('mousedown', f, { capture: !0 });
                                const e = (0, l.B)((0, E.Eu)());
                                return (
                                    !u && e.promise.then(() => x()),
                                    () => {
                                        (e.cancel(), document.removeEventListener('mousedown', f));
                                    }
                                );
                            }, [x, f, u]),
                            A().createElement(
                                'div',
                                { className: _.Z.base, ref: C },
                                A().createElement(
                                    'div',
                                    { className: _.Z.decorator },
                                    A().createElement(
                                        'div',
                                        { className: _.Z.content, ref: D },
                                        e,
                                        window.decorator &&
                                            window.decorator.isCloseBtnVisible &&
                                            A().createElement(
                                                o.i,
                                                { body: R.strings.dialogs.common.error.cancel() },
                                                A().createElement('div', {
                                                    className: _.Z.closeBtn,
                                                    onClick: h,
                                                    onMouseEnter: b,
                                                    ref: B,
                                                }),
                                            ),
                                    ),
                                    A().createElement('div', { className: w, style: n.arrow }),
                                ),
                            )
                        );
                    },
                );
            },
            1504: (e, u, t) => {
                t.d(u, { $: () => i });
                var n = t(6179),
                    r = t.n(n),
                    a = t(3616);
                const o = ['children'];
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
                const i = (e) => {
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
                        })(e, o);
                    return r().createElement(
                        a.Z,
                        s(
                            {
                                decoratorId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                                contentId:
                                    R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                            },
                            t,
                        ),
                        u,
                    );
                };
            },
            3616: (e, u, t) => {
                t.d(u, { Z: () => l });
                var n = t(1037),
                    r = t(9916),
                    a = t(6179),
                    o = t.n(a);
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
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = (e) => {
                    let u = e.contentId,
                        t = e.decoratorId,
                        l = e.direction,
                        c = void 0 === l ? n.IC.Top : l,
                        E = e.targetId,
                        d = e.args,
                        A = e.onClick,
                        _ = e.children,
                        m = e.isEnabled,
                        F = void 0 === m || m,
                        D = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, s);
                    const C = (0, a.useRef)(null),
                        B = (0, a.useCallback)(() => {
                            if ((0, r.wU)()) return (0, r.SW)();
                            C.current && (0, r.P3)(u, c, C.current, t, E, d);
                        }, [u, c, d, t, E]);
                    return o().createElement(
                        'div',
                        i(
                            {
                                ref: C,
                                onMouseDown:
                                    ((g = _.props.onClick),
                                    (e) => {
                                        F && (B(), A && A(e), g && g(e));
                                    }),
                            },
                            D,
                        ),
                        _,
                    );
                    var g;
                };
            },
            2862: (e, u, t) => {
                let n, r, a, o, s, i, l, c;
                (t.d(u, { $h: () => o, A2: () => i, E4: () => n, h2: () => a, kK: () => s, sh: () => l }),
                    (function (e) {
                        ((e.Items = 'items'),
                            (e.Equipment = 'equipment'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.Goodies = 'goodies'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Tokens = 'tokens'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.CrewBooks = 'crewBooks'),
                            (e.Customizations = 'customizations'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Tankman = 'tankman'),
                            (e.Tankwoman = 'tankwoman'),
                            (e.TankmenXp = 'tankmenXP'),
                            (e.TankmenXpFactor = 'tankmenXPFactor'),
                            (e.FreeXpFactor = 'freeXPFactor'),
                            (e.BattleToken = 'battleToken'),
                            (e.Entitlements = 'entitlements'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.FreeXp = 'freeXP'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattlePassSelectToken = 'battlePassSelectToken'),
                            (e.StyleProgressToken = 'styleProgressToken'),
                            (e.TmanToken = 'tmanToken'),
                            (e.NaturalCover = 'naturalCover'),
                            (e.BpCoin = 'bpcoin'),
                            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.NewYearInvoice = 'newYearInvoice'),
                            (e.NewYearSlot = 'newYearSlot'),
                            (e.NewYearGuestD = 'ny_dog'),
                            (e.EquipCoin = 'equipCoin'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.DeluxeGift = 'deluxe_gift'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.OptionalDevice = 'optionalDevice'),
                            (e.LootBox = 'lootBox'),
                            (e.BrCoin = 'brcoin'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin'));
                    })(r || (r = {})),
                    (function (e) {
                        ((e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(s || (s = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(i || (i = {})),
                    (function (e) {
                        ((e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(l || (l = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(c || (c = {})));
            },
            729: (e, u, t) => {
                t.d(u, { c$: () => D, i2: () => C, m9: () => B, p3: () => E, pI: () => m, ry: () => _ });
                var n = t(2372),
                    r = t(6179),
                    a = t.n(r),
                    o = t(2862);
                const s = [
                        o.E4.Items,
                        o.E4.Equipment,
                        o.E4.Xp,
                        o.E4.XpFactor,
                        o.E4.Blueprints,
                        o.E4.BlueprintsAny,
                        o.E4.Goodies,
                        o.E4.Berths,
                        o.E4.Slots,
                        o.E4.Tokens,
                        o.E4.CrewSkins,
                        o.E4.CrewBooks,
                        o.E4.Customizations,
                        o.E4.CreditsFactor,
                        o.E4.TankmenXp,
                        o.E4.TankmenXpFactor,
                        o.E4.FreeXpFactor,
                        o.E4.BattleToken,
                        o.E4.Entitlements,
                        o.E4.PremiumUniversal,
                        o.E4.NaturalCover,
                        o.E4.BpCoin,
                        o.E4.BattlePassSelectToken,
                        o.E4.BattlaPassFinalAchievement,
                        o.E4.BattleBadge,
                        o.E4.BonusX5,
                        o.E4.CrewBonusX3,
                        o.E4.NewYearInvoice,
                        o.E4.EpicSelectToken,
                        o.E4.Comp7TokenWeeklyReward,
                        o.E4.DeluxeGift,
                        o.E4.BattleBoosterGift,
                        o.E4.OptionalDevice,
                    ],
                    i = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    l = [o.E4.BattlePassPoints, o.E4.EquipCoin],
                    c = [o.E4.PremiumPlus, o.E4.Premium],
                    E = (e) =>
                        s.includes(e)
                            ? o.$h.MULTI
                            : i.includes(e)
                              ? o.$h.CURRENCY
                              : l.includes(e)
                                ? o.$h.NUMBER
                                : c.includes(e)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    d = ['engravings', 'backgrounds'],
                    A = ['engraving', 'background'],
                    _ = (e, u = o.h2.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case o.h2.S600x450:
                                        return 'c_600x450';
                                    case o.h2.S400x300:
                                        return 'c_400x300';
                                    case o.h2.S296x222:
                                        return 'c_296x222';
                                    case o.h2.S232x174:
                                        return 'c_232x174';
                                    case o.h2.Big:
                                        return 'c_80x80';
                                    case o.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'entitlements':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = d[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(A[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'premiumTank_rent':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles_rent`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            case 'newYearSlot':
                                return `R.images.gui.maps.icons.newYear.rewards.${u}.slot`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    m = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    F = [o.h2.Small, o.h2.Big],
                    D = (e, u) => {
                        if (void 0 === u || !F.includes(e)) return null;
                        switch (u) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    C = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                                return o.sh.BATTLE_BOOSTER;
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.sh.BATTLE_BOOSTER_REPLACE;
                            case o.kK.BUILT_IN_EQUIPMENT:
                                return o.sh.BUILT_IN_EQUIPMENT;
                            case o.kK.EQUIPMENT_PLUS:
                                return o.sh.EQUIPMENT_PLUS;
                            case o.kK.EQUIPMENT_TROPHY_BASIC:
                                return o.sh.EQUIPMENT_TROPHY_BASIC;
                            case o.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return o.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case o.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return o.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_4;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_5:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_5;
                            case o.kK.PROGRESSION_STYLE_UPGRADED_6:
                                return o.sh.PROGRESSION_STYLE_UPGRADED_6;
                        }
                    },
                    B = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case o.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return a().createElement(n.A, { format: 'integral', value: Number(e) });
                            case o.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7078: (e, u, t) => {
                t.d(u, { t: () => i });
                var n = t(6179),
                    r = t.n(n),
                    a = t(2056);
                const o = ['children'];
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
                const i = (e) => {
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
                        })(e, o);
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
                            t,
                        ),
                        u,
                    );
                };
            },
            3415: (e, u, t) => {
                t.d(u, { l: () => l });
                var n = t(6179),
                    r = t.n(n),
                    a = t(7078),
                    o = t(6373),
                    s = t(2056);
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(o.i, u, n);
                    const l = u.contentId;
                    return l ? r().createElement(s.u, i({}, u, { contentId: l }), n) : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(6179),
                    a = t.n(r);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const i = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            E = e.alert,
                            d = e.args,
                            A = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, o);
                        const _ = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, d]);
                        return a().createElement(
                            n.u,
                            s(
                                {
                                    contentId:
                                        ((m = null == d ? void 0 : d.hasHtmlContent),
                                        m ? i.SimpleTooltipHtmlContent('resId') : i.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: _,
                                },
                                A,
                            ),
                            u,
                        );
                        var m;
                    };
            },
            2056: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(7902),
                    r = t(9916),
                    a = t(6179);
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
                const i = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: r.B0.TOOLTIP,
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
                            r = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            d = e.onClick,
                            A = e.ignoreShowDelay,
                            _ = void 0 !== A && A,
                            m = e.ignoreMouseClick,
                            F = void 0 !== m && m,
                            D = e.decoratorId,
                            C = void 0 === D ? 0 : D,
                            B = e.isEnabled,
                            g = void 0 === B || B,
                            p = e.targetId,
                            v = void 0 === p ? 0 : p,
                            h = e.onShow,
                            b = e.onHide,
                            w = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, o);
                        const f = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            R = (0, a.useMemo)(() => v || (0, n.F)().resId, [v]),
                            y = (0, a.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (i(t, C, { isMouseEvent: !0, on: !0, arguments: s(r) }, R),
                                    h && h(),
                                    (f.current.isVisible = !0));
                            }, [t, C, r, R, h]),
                            x = (0, a.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        i(t, C, { on: !1 }, R),
                                        f.current.isVisible && b && b(),
                                        (f.current.isVisible = !1));
                                }
                            }, [t, C, R, b]),
                            P = (0, a.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', P, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && x();
                            }, [g, x]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        (window.removeEventListener('mouseleave', x), x());
                                    }
                                ),
                                [x],
                            ));
                        return g
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(y, _ ? 100 : 400)),
                                                      l && l(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (x(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && x(), null == d || d(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && x(), null == E || E(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : u;
                        var S;
                    };
            },
            122: (e, u, t) => {
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
                t.d(u, { U: () => s });
                var n = t(3138);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return a(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? a(e, u)
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
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const o = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: u = 0, getRoot: t = o, context: a = 'model' } = {}) {
                    const s = new Map();
                    function i(e, u = 0) {
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
                            r = a.split('.').reduce((e, u) => e[u], n);
                        return 'string' != typeof e || 0 === e.length
                            ? r
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, r);
                    };
                    return {
                        subscribe: (t, r) => {
                            const o = 'string' == typeof r ? `${a}.${r}` : a,
                                i = n.O.view.addModelObserver(o, u, !0);
                            return (s.set(i, t), e && t(l(r)), i);
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
                            for (var e, t = r(s.keys()); !(e = t()).done;) {
                                i(e.value, u);
                            }
                        },
                        unsubscribe: i,
                    };
                }
            },
            3215: (e, u, t) => {
                t.d(u, { q: () => i });
                var n = t(4598),
                    r = t(9174),
                    a = t(6179),
                    o = t.n(a),
                    s = t(8246);
                const i = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: i = 'real', options: l, children: c, mocks: E }) {
                            const d = (0, a.useRef)([]),
                                A = (t, a, o) => {
                                    var i;
                                    const l = s.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (i = null == o ? void 0 : o.getter) ? i : () => {},
                                                  }),
                                        E = (e) =>
                                            'mocks' === t ? (null == o ? void 0 : o.getter(e)) : c.readByPath(e),
                                        A = (e) => d.current.push(e),
                                        _ = e({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : E(e),
                                                        o = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : E(e),
                                                        o = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => o.set(e)),
                                                                e,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const n = E(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = r.LO.box(n[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((u) => {
                                                                        e.forEach((e) => {
                                                                            a[e].set(u[e]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = e,
                                                            o = Object.entries(a),
                                                            s = o.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
                                                                        o.forEach(([u, t]) => {
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
                                            cleanup: A,
                                        }),
                                        m = { mode: t, model: _, externalModel: c, cleanup: A };
                                    return {
                                        model: _,
                                        controls: 'mocks' === t && o ? o.controls(m) : u(m),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                _ = (0, a.useRef)(!1),
                                m = (0, a.useState)(i),
                                F = m[0],
                                D = m[1],
                                C = (0, a.useState)(() => A(i, l, E)),
                                B = C[0],
                                g = C[1];
                            return (
                                (0, a.useEffect)(() => {
                                    _.current ? g(A(F, l, E)) : (_.current = !0);
                                }, [E, F, l]),
                                (0, a.useEffect)(() => {
                                    D(i);
                                }, [i]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (B.externalModel.dispose(), d.current.forEach((e) => e()));
                                    },
                                    [B],
                                ),
                                o().createElement(t.Provider, { value: B }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                (t(3649), t(9916));
                var n = t(8613);
                (Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime);
            },
            527: (e, u, t) => {
                (t.r(u),
                    t.d(u, { mouse: () => c, off: () => i, on: () => s, onResize: () => a, onScaleUpdated: () => o }));
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
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
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        o = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
            5959: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    }));
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
            },
            2472: (e, u, t) => {
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
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                t.d(u, { ZP: () => o });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n }));
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => r });
                var n = t(2472);
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
            7641: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => R,
                        events: () => a.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => w,
                        getFontNames: () => f,
                        getScale: () => D,
                        getSize: () => A,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    }));
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    o = t(8566);
                const s = 15;
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, s);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, s);
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const f = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    R = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    y = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    o = 32,
                    s = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : o);
                        },
                        minimize() {
                            i(s);
                        },
                        move(e) {
                            i(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                t.d(u, { jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            7902: (e, u, t) => {
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
                t.d(u, { D9: () => r });
                (t(3469), t(2133));
                var n = t(2790);
                (t(3779), t(579), t(5360), t(9056));
                const r = n.Z;
            },
            6536: (e, u, t) => {
                t(6179);
            },
            4532: (e, u, t) => {
                t.d(u, { M: () => r });
                var n = t(6179);
                const r = (e, u = []) => {
                    const t = (0, n.useRef)(),
                        r = (0, n.useCallback)((...u) => {
                            (t.current && t.current(), (t.current = e(...u)));
                        }, u);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                t.current && t.current();
                            },
                            [r],
                        ),
                        r
                    );
                };
            },
            3469: (e, u, t) => {
                (t(7044), t(6179));
            },
            2133: (e, u, t) => {
                t(6179);
            },
            3305: (e, u, t) => {
                t.d(u, { H: () => r });
                var n = t(6179);
                const r = (e, u) => {
                    (0, n.useEffect)(() => {
                        let u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    ((u = null), e());
                                });
                            })),
                            () => {
                                null !== u && cancelAnimationFrame(u);
                            }
                        );
                    }, u);
                };
            },
            5360: (e, u, t) => {
                t(6536);
                var n = t(9916);
                t(6179);
                n.Sw.instance;
                let r;
                !(function (e) {
                    ((e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep'));
                })(r || (r = {}));
            },
            9056: (e, u, t) => {
                var n = t(9916);
                t(6179);
                n.Sw.instance;
            },
            2039: (e, u, t) => {
                t.d(u, { b: () => r, k: () => a });
                var n = t(6179);
                const r = (e) => {
                        (0, n.useEffect)(e, []);
                    },
                    a = (e) => {
                        (0, n.useEffect)(() => e, []);
                    };
            },
            2790: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(6179);
                const r = (e, u) => {
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
                t(6179);
            },
            3112: (e, u, t) => {
                t.d(u, { V: () => a });
                var n = t(6179),
                    r = t(3138);
                const a = () => {
                    const e = (0, n.useState)(r.O.view.getScale()),
                        u = e[0],
                        t = e[1];
                    return (
                        (0, n.useEffect)(() => {
                            const e = () => {
                                t(r.O.view.getScale());
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
                (t(3138), t(6179));
            },
            8475: (e, u, t) => {
                t.d(u, { w: () => o });
                var n = t(6179),
                    r = t(2039);
                const a = 0;
                function o() {
                    const e = (0, n.useRef)(a);
                    return (
                        (0, r.k)(() => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, n.useMemo)(
                            () => ({
                                run: (u) => {
                                    (window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                (u(), (e.current = a));
                                            });
                                        })));
                                },
                                clear: () => {
                                    (window.cancelAnimationFrame(e.current), (e.current = a));
                                },
                                get isRunning() {
                                    return e.current !== a;
                                },
                            }),
                            [],
                        )
                    );
                }
            },
            5521: (e, u, t) => {
                let n, r;
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
                    })(r || (r = {})));
            },
            9480: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        collectMapBy: () => w,
                        contains: () => _,
                        every: () => i,
                        exists: () => b,
                        filter: () => c,
                        filterMap: () => f,
                        find: () => v,
                        findIndex: () => y,
                        findIndexLast: () => x,
                        findLast: () => p,
                        get: () => r,
                        includes: () => h,
                        join: () => P,
                        lastElement: () => D,
                        lastIndex: () => m,
                        lastIndexZero: () => F,
                        map: () => s,
                        mapExists: () => R,
                        pop: () => A,
                        push: () => E,
                        reduce: () => S,
                        set: () => d,
                        slice: () => C,
                        some: () => l,
                        splice: () => g,
                        tail: () => B,
                        unsafeGet: () => a,
                        unwrapItem: () => o,
                    }));
                var n = t(8968);
                function r(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const a = r;
                function o(e) {
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
                function i(e, u) {
                    if (Array.isArray(e)) return e.every(u);
                    for (let t = 0; t < e.length; t++) {
                        if (!u(a(e, t), t, e)) return !1;
                    }
                    return !0;
                }
                function l(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(a(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function c(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                        var n;
                        const a = null == (n = e[r]) ? void 0 : n.value;
                        u(a, r, e) && t.push(a);
                    }
                    return t;
                }
                function E(e, u) {
                    if (Array.isArray(e)) return (e.push(u), e);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function d(e, u, t) {
                    if (Array.isArray(e)) return ((e[u] = t), e);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function A(e, u = e.length - 1) {
                    if (Array.isArray(e)) return e.splice(u, 1)[0];
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function _(e, u, t) {
                    for (let n = 0; n < e.length; n++) {
                        const r = a(e, n);
                        if (t && t(r)) return !0;
                        if (u === r) return !0;
                    }
                    return !1;
                }
                function m(e) {
                    return e.length - 1;
                }
                function F(e) {
                    return Math.max(0, e.length - 1);
                }
                function D(e) {
                    if (0 !== e.length) return r(e, e.length - 1);
                }
                function C(e, u = 0, t = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let n = Math.max(u, 0);
                            const r = Math.min(t, F(e));
                            return {
                                next: function () {
                                    if (n > r) return { done: !0, value: null };
                                    const u = e[n++];
                                    return u ? { value: o(u), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
                function B(e, u) {
                    return C(e, Math.max(0, e.length - 1 - u), m(e));
                }
                function g(e, u, t) {
                    if (Array.isArray(e)) return e.splice(u, t);
                    throw new Error('Mutate CoherentArrayProxy is not available');
                }
                function p(e, u) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        const n = o(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                function v(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const n = o(e[t]);
                        if (u(n, t, e)) return n;
                    }
                }
                function h(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (a(e, t) === u) return !0;
                    }
                    return !1;
                }
                function b(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (u(o(e[t]))) return !0;
                    }
                    return !1;
                }
                function w(e, u, t) {
                    return S(e, (e, n) => ((e[u(n)] = t(n)), e), {});
                }
                function f(e, u, t) {
                    const n = [];
                    for (let r = 0; r < e.length; r++) {
                        const o = a(e, r);
                        u(o, r, e) && n.push(t(o, r, e));
                    }
                    return n;
                }
                function R(e, u) {
                    return f(e, n.C, u);
                }
                function y(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        if (u(a(e, t), t, e)) return t;
                    }
                }
                function x(e, u) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        if (u(a(e, t), t, e)) return t;
                    }
                }
                function P(e, u = ',') {
                    let t = '';
                    for (let n = 0; n < e.length; n++) {
                        n > 0 && (t += u);
                        const r = a(e, n);
                        t += null == r ? '' : String(r);
                    }
                    return t;
                }
                function S(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, a(e, t), t, e);
                    }
                    return n;
                }
            },
            5099: (e, u, t) => {
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
            8968: (e, u, t) => {
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
                t.d(u, { HG: () => o });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const a = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    o = (e) =>
                        a
                            ? `${e}`
                            : (function (e) {
                                  let u = '';
                                  for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t];) ((u += n[t]), (e -= r[t]));
                                  return u;
                              })(e);
            },
            4785: (e, u, t) => {
                t.d(u, { w: () => n });
                const n = (e, u) =>
                    Object.keys(e).length === Object.keys(u).length &&
                    Object.keys(e).every((t) => Object.prototype.hasOwnProperty.call(u, t) && e[t] === u[t]);
            },
            7727: (e, u, t) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => r, G: () => n });
                const r = {
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
                t.d(u, { BN: () => s, Uw: () => m, WU: () => a, uF: () => o, v2: () => r });
                var n = t(1281);
                let r;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function o(e, u) {
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
                })(r || (r = {}));
                const i = (e) => e.replace(/&nbsp;/g, ' '),
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
                    E = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? l : c, []),
                    d = (() => {
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
                    A = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (A.includes(t)) return d(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => i(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = i(e);
                            return (E(a, /( )/, u).forEach((e) => (t = t.concat(E(e, n, r.left)))), t);
                        })(e, u);
                    },
                    m = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : _(e, u)));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                r.__instance = void 0;
                const a = r;
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
            9916: (e, u, t) => {
                t.d(u, {
                    c1: () => f,
                    Sw: () => a.Z,
                    B3: () => i,
                    Z5: () => o.Z5,
                    B0: () => s,
                    wU: () => h,
                    ry: () => D,
                    Eu: () => C,
                    SW: () => p,
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
                const r = n;
                var a = t(1358);
                var o = t(8613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    A = t(3138);
                const _ = ['args'];
                function m(e, u, t, n, r, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            m(a, n, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            m(a, n, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => B(s.CLOSE),
                    p = () => B(s.POP_OVER, { on: !1 }),
                    v = (e, u, t, n, r = R.invalid('resId'), a) => {
                        const o = A.O.view.getViewGlobalPosition(),
                            i = t.getBoundingClientRect(),
                            l = i.x,
                            c = i.y,
                            E = i.width,
                            d = i.height,
                            _ = {
                                x: A.O.view.pxToRem(l) + o.x,
                                y: A.O.view.pxToRem(c) + o.y,
                                width: A.O.view.pxToRem(E),
                                height: A.O.view.pxToRem(d),
                            };
                        B(s.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: r,
                            direction: u,
                            bbox: F(_),
                            on: !0,
                            args: a,
                        });
                    },
                    h = () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                    b = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var w = t(7572);
                const f = r.instance,
                    y = {
                        DataTracker: a.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: p,
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: v,
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: h,
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = y;
            },
            8613: (e, u, t) => {
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            324: (e, u, t) => {
                t.d(u, { Z: () => i });
                var n = t(2372),
                    r = t(6179),
                    a = t.n(r),
                    o = t(8417);
                const s = (e, u, t, n) => (t && !n ? u : e),
                    i = (0, r.memo)(
                        ({
                            valueFrom: e,
                            valueTo: u,
                            isDisabled: t = !0,
                            isPreAnimation: i = !1,
                            duration: l = 1e3,
                            hasPlus: c = !1,
                            onAnimationComplete: E,
                        }) => {
                            const d = (0, r.useState)(() => s(e, u, t, i)),
                                A = d[0],
                                _ = d[1],
                                m = (0, r.useRef)(0),
                                F = (0, r.useCallback)(() => {
                                    (cancelAnimationFrame(m.current), E());
                                }, [E]);
                            return (
                                (0, r.useEffect)(() => {
                                    (t || i) && _(s(e, u, t, i));
                                }, [e, u, t, i]),
                                (0, r.useEffect)(() => {
                                    if (!t && !i) {
                                        const t = (n, r) => {
                                            const a = Math.min((n - r) / l, 1),
                                                o = Math.floor(a * (u - e) + e);
                                            (_(o), a < 1 ? (m.current = requestAnimationFrame((e) => t(e, r))) : F());
                                        };
                                        m.current = requestAnimationFrame((e) => t(e, e));
                                    }
                                }, [l, e, u, E, t, i, F]),
                                a().createElement(
                                    'div',
                                    { className: o.Z.base },
                                    a().createElement(n.A, { value: A }),
                                    c && a().createElement('div', { className: o.Z.plus }, '+'),
                                )
                            );
                        },
                    );
            },
            3601: (e, u, t) => {
                t.d(u, { n: () => o });
                var n = t(2344),
                    r = t(6179);
                const a = (e, u) => {
                        const t = Math.min(e, u);
                        return { countFrom: t, countTo: t, isDecrement: !1 };
                    },
                    o = (e, u, t = 999999) => {
                        const o = (0, r.useRef)(e),
                            s = (0, n.D9)(u),
                            i = (0, r.useState)(() => a(e, t)),
                            l = i[0],
                            c = i[1];
                        ((0, r.useEffect)(() => {
                            const u = Math.min(o.current, t),
                                n = Math.min(e, t);
                            (u === n && o.current === e) || c({ countFrom: u, countTo: n, isDecrement: o.current > e });
                        }, [e, t]),
                            (0, r.useEffect)(() => {
                                s && !u && c(a(l.countTo, t));
                            }, [l.countTo, u, t, s]));
                        const E = (0, r.useCallback)(() => {
                            o.current = e;
                        }, [e]);
                        return [l, { handleAnimationEnd: E }];
                    };
            },
            4069: (e, u, t) => {
                t.d(u, { A: () => i });
                var n = t(6179),
                    r = t.n(n),
                    a = t(6808);
                const o = [
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
                ];
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
                const i = (0, n.memo)((e) => {
                    let u = e.width,
                        t = e.height,
                        i = e.getSrcByFrame,
                        l = e.frameCount,
                        c = e.onAnimate,
                        E = void 0 === c ? a.Bi : c,
                        d = e.frameTime,
                        A = void 0 === d ? 33 : d,
                        _ = e.initialFrameIndex,
                        m = void 0 === _ ? 0 : _,
                        F = e.loop,
                        D = void 0 === F || F,
                        C = e.state,
                        B = void 0 === C ? 'play' : C,
                        g = e.onAnimationComplete,
                        p = void 0 === g ? a.Bi : g,
                        v = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, o);
                    const h = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            const e = h.current;
                            if (!e) return;
                            const n = l - 1,
                                r = e.getContext('2d'),
                                a = (n) => {
                                    (r.clearRect(0, 0, e.width, e.height), r.drawImage(n, 0, 0, u, t));
                                };
                            if ('stop' === B) {
                                const e = i(0),
                                    u = new Image();
                                u.src = e;
                                const t = () => a(u);
                                return (u.addEventListener('load', t), () => u.removeEventListener('load', t));
                            }
                            const o = ((e, u) => {
                                    const t = [];
                                    for (let n = 0; n < e; n++) {
                                        const e = new Image();
                                        ((e.src = u(n)), t.push(e));
                                    }
                                    return t;
                                })(l, i),
                                s = ((e, u = 0) => {
                                    let t = u;
                                    return () => {
                                        const u = t;
                                        return ((t += 1), t > e && (t = 0), u);
                                    };
                                })(n, m),
                                c = setInterval(() => {
                                    const e = s(),
                                        u = o[e];
                                    (a(o[e]), E(e, u), e === n && (p(), D || clearInterval(c)));
                                }, A);
                            return () => clearInterval(c);
                        }, [l, A, i, t, m, D, E, p, B, u]),
                        r().createElement('canvas', s({}, v, { width: u, height: t, ref: h }))
                    );
                });
            },
            3859: (e, u, t) => {
                t.d(u, { cg: () => B, uu: () => m });
                var n = t(6483),
                    r = t.n(n),
                    a = t(4785),
                    o = t(6179),
                    s = t.n(o),
                    i = t(7298),
                    l = t(4069),
                    c = t(4385);
                const E = ['children'],
                    d = ['children'];
                function A(e, u) {
                    if (null == e) return {};
                    var t = {};
                    for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                            if (u.indexOf(n) >= 0) continue;
                            t[n] = e[n];
                        }
                    return t;
                }
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
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    F = { width: 250, height: 250 },
                    D = () => {},
                    C = (e) =>
                        `R.images.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                    B = ({
                        children: [e, u],
                        className: t,
                        classNames: n = {},
                        onAnimate: a = D,
                        animationSettings: E = m,
                        getSrcByFrameTwirly: d = C,
                        size: A = F,
                        drawSize: B = F,
                        isConvertationStart: g = !0,
                        initAnimationState: p = 'idle',
                    }) => {
                        const v = (0, i._)(E, p, g).step.state;
                        return (
                            (0, o.useEffect)(() => {
                                a(v);
                            }, [v, a]),
                            s().createElement(
                                'div',
                                {
                                    className: r()(c.Z.base, c.Z[`base__${v}`], t),
                                    style: {
                                        width: 'number' == typeof A.width ? `${A.width}rem` : A.width,
                                        height: 'number' == typeof A.height ? `${A.height}rem` : A.height,
                                    },
                                },
                                s().createElement(
                                    'div',
                                    { className: r()(c.Z.bumpStars, n.bumpStars) },
                                    s().createElement('div', { className: r()(c.Z.star, c.Z.star__one, n.star) }),
                                    s().createElement('div', { className: r()(c.Z.star, c.Z.star__second, n.star) }),
                                    s().createElement('div', { className: r()(c.Z.star, c.Z.star__third, n.star) }),
                                ),
                                s().createElement('div', { className: r()(c.Z.bump, n.bump) }),
                                s().createElement('div', { className: r()(c.Z.bumpRays, n.bumpRays) }),
                                s().createElement(
                                    'div',
                                    { className: r()(c.Z.reward, n.reward) },
                                    ('idle' === v || 'start' === v) &&
                                        s().createElement('div', { className: r()(c.Z.rewardFrom, n.rewardFrom) }, e),
                                    ('end' === v || 'bump' === v) &&
                                        s().createElement('div', { className: r()(c.Z.rewardTo, n.rewardTo) }, u),
                                ),
                                ('start' === v || 'bump' === v) &&
                                    s().createElement(
                                        l.A,
                                        _({}, B, {
                                            className: r()(c.Z.twirlyCanvas, n.twirlyCanvas),
                                            frameCount: 60,
                                            frameTime: 16,
                                            getSrcByFrame: d,
                                        }),
                                    ),
                                s().createElement('div', { className: r()(c.Z.bumpParticles, n.bumpParticles) }),
                            )
                        );
                    };
                (0, o.memo)(B, (e, u) => {
                    e.children;
                    const t = A(e, E),
                        n = (u.children, A(u, d));
                    return (0, a.w)(t, n);
                });
            },
            2853: (e, u, t) => {
                t.d(u, { V: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6373),
                    o = t(6179),
                    s = t.n(o),
                    i = t(3768),
                    l = t(2026);
                const c = R.strings.ny.activityReward.tooltip,
                    E = ({ name: e, icon: u, isClickable: t, isNew: n, isFlexable: o }) => {
                        const E = ((e) => {
                            switch (e) {
                                case i.pS.CelebrityAction:
                                    return 'action';
                                case i.pS.Story:
                                    return 'story';
                                case i.pS.Decoration:
                                    return 'decoration';
                                default:
                                    return e;
                            }
                        })(e);
                        return s().createElement(
                            a.i,
                            { header: c.header.$dyn(E), body: c.body.$dyn(E) },
                            s().createElement(
                                'div',
                                {
                                    className: r()(
                                        l.Z.base,
                                        t && l.Z.base__completed,
                                        t && n && l.Z.base__animated,
                                        o && l.Z.base__flex,
                                    ),
                                },
                                s().createElement(
                                    'div',
                                    { className: l.Z.inner },
                                    s().createElement('div', {
                                        className: l.Z.icon,
                                        style: {
                                            backgroundImage: `url(${R.images.gui.maps.icons.newYear.rewards.activity.$dyn(u)})`,
                                        },
                                    }),
                                    e === i.pS.CelebrityAction && s().createElement('div', { className: l.Z.iconPlay }),
                                ),
                            ),
                        );
                    };
            },
            2415: (e, u, t) => {
                t.d(u, { f: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    o = t.n(a),
                    s = t(4723),
                    i = t(7314),
                    l = t(3768),
                    c = t(5062);
                const E = (e, u) =>
                        R.images.gui.maps.vehicles.attachments.$dyn(u).$dyn(e) ||
                        `R.images.gui.maps.icons.quests.bonuses.${u}.attachment`,
                    d = ({
                        name: e,
                        iconName: u,
                        tooltipId: t,
                        rarity: n,
                        value: a,
                        tooltipContentId: d,
                        size: A = l.$u.Small,
                        isFlexable: _,
                        withGlowAndSign: m = !0,
                        classNames: F,
                    }) =>
                        o().createElement(
                            'div',
                            { className: r()(c.Z.base, c.Z[`base__${A}`]) },
                            o().createElement('div', {
                                className: c.Z.glow,
                                style: m
                                    ? {
                                          backgroundImage: `url(R.images.gui.maps.icons.customization.rarity.glowWithSign.${A}.${n})`,
                                      }
                                    : {},
                            }),
                            o().createElement(s.r, {
                                name: e,
                                image: E(u, A),
                                valueType: (0, i.n9)(e),
                                value: a,
                                tooltipId: t,
                                tooltipContentId: d,
                                size: A,
                                isFlexable: _,
                                classNames: F,
                            }),
                        );
            },
            4723: (e, u, t) => {
                t.d(u, { r: () => d });
                var n = t(6483),
                    r = t.n(n),
                    a = t(729),
                    o = t(3415),
                    s = t(6179),
                    i = t.n(s),
                    l = t(3768),
                    c = t(691);
                const E = R.strings.settings.LANGUAGE_CODE(),
                    d = ({
                        name: e,
                        image: u,
                        value: t,
                        valueType: n,
                        isCompensation: s,
                        tooltipId: d,
                        tooltipContentId: A,
                        tooltipDecoratorId: _,
                        size: m = l.$u.Big,
                        isLabelHidden: F = !1,
                        isFlexable: D = !1,
                        classNames: C,
                        tooltipArgs: B,
                    }) => {
                        const g = (0, a.pI)(Object.assign({ tooltipId: d, value: t }, B), Number(A), {
                                decoratorId: _,
                                ignoreMouseClick: !1,
                            }),
                            p = (0, a.m9)(t, n);
                        return i().createElement(
                            o.l,
                            { tooltipArgs: g, className: r()(c.Z.base, c.Z[`base__${m}`], D && c.Z.base__flex) },
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', {
                                    className: c.Z.bonusIcon,
                                    style: { backgroundImage: `url(${u})` },
                                }),
                                p &&
                                    i().createElement(
                                        'div',
                                        {
                                            lang: E,
                                            className: r()(
                                                c.Z.info,
                                                F && c.Z.info__hidden,
                                                c.Z[`info__${e}`],
                                                c.Z[`info__${n}`],
                                                null == C ? void 0 : C.info,
                                            ),
                                        },
                                        p,
                                    ),
                                s && i().createElement('div', { className: c.Z.compensationIcon }),
                            ),
                        );
                    };
            },
            3396: (e, u, t) => {
                t.d(u, { S: () => _ });
                var n = t(729),
                    r = t(4532),
                    a = t(7727),
                    o = t(6179),
                    s = t.n(o),
                    i = t(3859),
                    l = t(4723),
                    c = t(7314);
                const E = { width: 180, height: 180 },
                    d = Object.assign({}, i.uu, { idle: Object.assign({}, i.uu.idle, { timeout: 0 }) }),
                    A = (e, u) => ('vehicles' === e.name ? (0, n.ry)(e, u.toString()) : (0, c.gJ)(e, u)),
                    _ = ({
                        className: e,
                        bonusModel: u,
                        size: t,
                        playAnimation: n = !0,
                        isShowCompensation: o = !0,
                        animationSize: _ = E,
                        animationSettings: m = d,
                    }) => {
                        const F = (0, r.M)((e) => {
                                'start' === e && (0, a.G)('gui_gift_system_newyear_reward_transform');
                            }, []),
                            D = u.compensatedItem,
                            C = o ? 'idle' : 'end';
                        return s().createElement(
                            i.cg,
                            {
                                className: e,
                                animationSettings: m,
                                onAnimate: F,
                                isConvertationStart: n,
                                initAnimationState: C,
                                size: _,
                            },
                            [
                                s().createElement(l.r, {
                                    key: 1,
                                    name: D.name,
                                    image: A(D, t),
                                    value: D.value,
                                    valueType: (0, c.n9)(D.name),
                                    size: t,
                                }),
                                s().createElement(l.r, {
                                    key: 2,
                                    name: u.name,
                                    image: (0, c.gJ)(u, t),
                                    value: u.value,
                                    valueType: (0, c.n9)(u.name),
                                    isCompensation: u.isCompensation,
                                    tooltipId: u.tooltipId,
                                    tooltipContentId: u.tooltipContentId,
                                    tooltipDecoratorId:
                                        R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    size: t,
                                }),
                            ],
                        );
                    };
            },
            489: (e, u, t) => {
                t.d(u, { u: () => F });
                var n = t(6483),
                    r = t.n(n),
                    a = t(1504),
                    o = t(2056),
                    s = t(7869),
                    i = t(3305),
                    l = t(7727),
                    c = t(3649),
                    E = t(6179),
                    d = t.n(E),
                    A = t(7314),
                    _ = t(3768),
                    m = t(4823);
                const F = (0, E.memo)(
                    ({
                        bonus: e,
                        options: u,
                        size: t = _.$u.Small,
                        className: n,
                        isCurrentProgressionCompleted: F,
                        isProgressionReward: D,
                        isFlexable: C,
                    }) => {
                        const B = e.level,
                            g = e.discount,
                            p = e.selectedVehicle,
                            v = e.variadicID,
                            h = u || {},
                            b = h.disabled,
                            w = h.isPopoverOpened,
                            f = `${(0, A.by)(_.AC.VariadicDiscount, t)}.${_.AC.VariadicDiscount}`,
                            y = (0, A.Y1)() ? B : R.strings.roman_numerals.$dyn(`n_${B}`),
                            x = (0, E.useState)(!1),
                            P = x[0],
                            S = x[1],
                            T = (0, E.useState)(!1),
                            O = T[0],
                            I = T[1],
                            k = !p && !O,
                            N = { variadicID: v, discount: g, isCurrentProgressionCompleted: F },
                            L = { popoverId: s.k, variadicID: v },
                            M = {
                                backgroundImage: `url('${p ? R.images.gui.maps.icons.vehicle.$dyn(((U = p), U.replace(/:|-/g, '_'))) : f}')`,
                            };
                        var U;
                        const G = (0, E.useCallback)(() => {
                                b || I(!0);
                            }, [b]),
                            $ = (0, E.useCallback)(() => {
                                k && F && !w && ((0, l.G)(R.sounds.hangar_newyear_slot_over()), S(!0));
                            }, [k, F, w]),
                            Z = (0, E.useCallback)(() => {
                                P && ((0, l.G)(R.sounds.hangar_newyear_slot_over_off()), S(!1));
                            }, [P]);
                        ((0, E.useEffect)(() => {
                            !k && P && ((0, l.G)(R.sounds.hangar_newyear_slot_over_off()), S(!1));
                        }, [k, P]),
                            (0, i.H)(() => {
                                !w && O && I(!1);
                            }, [w, O]));
                        const q = r()(
                                m.Z.base,
                                m.Z[`base__${t}`],
                                b && m.Z.base__disabled,
                                p && m.Z.base__applied,
                                F && m.Z.base__currentProgressionCompleted,
                                D && m.Z.base__progressionReward,
                                C && m.Z.base__flex,
                                n,
                            ),
                            z = d().createElement(
                                o.u,
                                {
                                    contentId: R.views.lobby.new_year.tooltips.NyDiscountRewardTooltip('resId'),
                                    args: N,
                                },
                                d().createElement(
                                    'div',
                                    { className: q, onMouseEnter: $, onMouseLeave: Z, onClick: G },
                                    d().createElement(
                                        'div',
                                        { className: m.Z.discountReward },
                                        d().createElement('div', { className: m.Z.icon, style: M }),
                                        d().createElement('div', { className: m.Z.vehicleLevel }, y),
                                        d().createElement(
                                            'div',
                                            { className: m.Z.discountAmount },
                                            D
                                                ? R.strings.common.common.percent()
                                                : (0, c.uF)(R.strings.ny.percentageValue.withMinus(), { value: g }),
                                        ),
                                    ),
                                ),
                            );
                        return b || p || !F ? z : d().createElement(a.$, { args: L }, z);
                    },
                );
            },
            6278: (e, u, t) => {
                t.d(u, { e: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(729),
                    o = t(6179),
                    s = t.n(o),
                    i = t(4723),
                    l = t(7314),
                    c = t(6135);
                const E = ({
                    bonusModel: e,
                    size: u,
                    isLabelHidden: t,
                    isFlexable: n,
                    classNames: o,
                    tooltipArgs: E,
                }) => {
                    const d = (0, a.c$)(u, e.overlayType),
                        A = (0, a.i2)(e.overlayType);
                    return s().createElement(
                        'div',
                        { className: r()(c.Z.base, c.Z[`base__${u}`]) },
                        d &&
                            s().createElement('div', {
                                className: c.Z.highlight,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${d}_highlight)`,
                                },
                            }),
                        s().createElement(i.r, {
                            name: e.name,
                            image: (0, l.gJ)(e, u),
                            value: e.value,
                            valueType: (0, l.n9)(e.name),
                            isCompensation: e.isCompensation,
                            tooltipId: e.tooltipId,
                            tooltipContentId: e.tooltipContentId,
                            tooltipArgs: E,
                            size: u,
                            isLabelHidden: t,
                            isFlexable: n,
                            classNames: o,
                        }),
                        A &&
                            s().createElement('div', {
                                className: c.Z.overlay,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${A}_overlay)`,
                                },
                            }),
                    );
                };
            },
            8387: (e, u, t) => {
                t.d(u, { g: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    o = t.n(a),
                    s = t(4723),
                    i = t(7314),
                    l = t(3768),
                    c = t(3038);
                const E = ({
                    name: e,
                    tooltipId: u,
                    image: t,
                    overlayType: n,
                    value: a,
                    tooltipContentId: E,
                    size: d = l.$u.Big,
                    isFlexable: A,
                    classNames: _,
                }) =>
                    o().createElement(
                        'div',
                        { className: r()(c.Z.base, c.Z[`base__${d}`], A && c.Z.base__flex) },
                        o().createElement('div', {
                            className: c.Z.equipmentGlow,
                            style: { backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${d}.${n}_overlay)` },
                        }),
                        o().createElement(s.r, {
                            name: e,
                            image: t,
                            valueType: (0, i.n9)(e),
                            value: a,
                            tooltipId: u,
                            tooltipContentId: E,
                            size: d,
                            classNames: _,
                            isFlexable: A,
                        }),
                    );
            },
            4284: (e, u, t) => {
                t.d(u, { d: () => m });
                var n = t(6483),
                    r = t.n(n),
                    a = t(6373),
                    o = t(3649),
                    s = t(6179),
                    i = t.n(s),
                    l = t(3768),
                    c = t(4479);
                const E = R.strings.ny.lootBoxAutoOpen.reward.premiumPlus,
                    d = E.label(),
                    A = E.tooltip.header(),
                    _ = E.tooltip.body(),
                    m = ({ value: e, size: u = l.$u.Big, isFlexable: t = !1, classNames: n }) => {
                        const s = (0, o.uF)(d, { quantity: e }),
                            E = (0, o.uF)(A, { quantity: e });
                        return i().createElement(
                            a.i,
                            { header: E, body: _ },
                            i().createElement(
                                'div',
                                {
                                    className: r()(c.Z.base, c.Z[`base__${u}`], t && c.Z.base__flex),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                i().createElement('div', {
                                    className: c.Z.icon,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.premium_plus_1)`,
                                    },
                                }),
                                Number(e) > 1 &&
                                    i().createElement(
                                        'div',
                                        { className: r()(c.Z.info, null == n ? void 0 : n.info) },
                                        s,
                                    ),
                            ),
                        );
                    };
            },
            7506: (e, u, t) => {
                t.d(u, { Q: () => C });
                var n = t(6179),
                    r = t.n(n),
                    a = t(3396),
                    o = t(489),
                    s = t(2853),
                    i = t(2415),
                    l = t(4723),
                    c = t(7314),
                    E = t(6278),
                    d = t(8387),
                    A = t(4284),
                    _ = t(5734),
                    m = t(3768),
                    F = t(1125);
                function D() {
                    return (
                        (D = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        D.apply(null, arguments)
                    );
                }
                const C = ({
                    bonusModel: e,
                    options: u,
                    size: t = m.$u.Big,
                    toyRewardOptions: n = {},
                    isProgressionReward: C,
                    isCurrentProgressionCompleted: B,
                    compensationRewardOptions: g = {},
                    activityRewardOptions: p = {},
                    vehicleRewardOptions: v = {},
                    isLabelHidden: h,
                    isFlexable: b = !1,
                    isPixelatedImage: w,
                    level: f,
                    classNames: R,
                    tooltipArgs: y,
                }) =>
                    (0, m.bT)(e)
                        ? r().createElement(
                              d.g,
                              D({}, e, { image: (0, c.gJ)(e, t, w), size: t, classNames: R, isFlexable: b }),
                          )
                        : (0, m.qI)(e)
                          ? r().createElement(
                                _.i,
                                D(
                                    {
                                        image: e.icon,
                                        bigImage: e.bigIcon,
                                        toyID: e.toyID,
                                        value: e.value,
                                        isFlexable: b,
                                    },
                                    n,
                                ),
                            )
                          : (0, m.px)(e)
                            ? r().createElement(o.u, {
                                  rewardLevel: f,
                                  bonus: e,
                                  options: u,
                                  size: t,
                                  className: null == R ? void 0 : R.discountReward,
                                  isProgressionReward: C,
                                  isCurrentProgressionCompleted: B,
                                  isFlexable: b,
                              })
                            : (0, m.I5)(e)
                              ? r().createElement(A.d, D({}, e, { size: t, isFlexable: b, classNames: R }))
                              : e.isCompensation
                                ? r().createElement(a.S, D({ bonusModel: e, size: t }, g))
                                : (0, c.ri)(e.name)
                                  ? r().createElement(s.V, D({}, e, p, { isFlexable: b }))
                                  : (0, c.xj)(e.name)
                                    ? r().createElement(F.g, D({ image: (0, c.gJ)(e, t, w), size: t }, e, v))
                                    : (0, c.K8)(e.name)
                                      ? r().createElement(E.e, {
                                            bonusModel: e,
                                            size: t,
                                            classNames: R,
                                            tooltipArgs: y,
                                            isLabelHidden: h,
                                            isFlexable: b,
                                        })
                                      : (0, m.SB)(e)
                                        ? r().createElement(i.f, D({}, e, { size: t, classNames: R, isFlexable: b }))
                                        : r().createElement(l.r, {
                                              name: e.name,
                                              image: (0, c.gJ)(e, t, w),
                                              value: e.value,
                                              valueType: (0, c.n9)(e.name),
                                              isCompensation: e.isCompensation,
                                              tooltipId: e.tooltipId,
                                              tooltipContentId: e.tooltipContentId,
                                              tooltipArgs: y,
                                              size: t,
                                              isLabelHidden: h,
                                              isFlexable: b,
                                              classNames: R,
                                          });
            },
            5734: (e, u, t) => {
                t.d(u, { i: () => A });
                var n = t(6483),
                    r = t.n(n),
                    a = t(2056),
                    o = t(6179),
                    s = t.n(o),
                    i = t(9025),
                    l = t(729),
                    c = t(2862);
                let E;
                !(function (e) {
                    ((e.Medium = 'medium'), (e.Large = 'large'));
                })(E || (E = {}));
                const d = R.views.lobby.new_year.tooltips,
                    A = ({
                        image: e,
                        bigImage: u,
                        value: t,
                        size: n = E.Medium,
                        toyID: o,
                        isFlexable: A,
                        classNames: _,
                    }) => {
                        const m = (0, l.m9)(t, c.$h.MULTI);
                        return s().createElement(
                            a.u,
                            { ignoreShowDelay: !0, contentId: d.NyDecorationTooltip('resId'), args: { toyID: o } },
                            s().createElement(
                                'div',
                                {
                                    className: r()(i.Z.base, A && i.Z.base__flex, i.Z[`base__${n}`]),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                s().createElement(
                                    'div',
                                    {
                                        className: i.Z.image,
                                        style: { backgroundImage: `url(${n === E.Medium ? e : u})` },
                                    },
                                    m &&
                                        s().createElement(
                                            'div',
                                            { className: r()(i.Z.counter, null == _ ? void 0 : _.counter) },
                                            m,
                                        ),
                                ),
                            ),
                        );
                    };
            },
            1125: (e, u, t) => {
                t.d(u, { g: () => C });
                var n = t(6483),
                    r = t.n(n),
                    a = t(9766),
                    o = t(9690),
                    s = t(3649),
                    i = t(6179),
                    l = t.n(i),
                    c = t(4723),
                    E = t(3768),
                    d = t(7665);
                const A = ['vehicleInfo', 'rentDays', 'rentBattles', 'size', 'theme', 'classNames'];
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
                const m = R.strings.ny.giftMachine,
                    F = R.images.gui.maps.icons.newYear.tank_types;
                let D;
                !(function (e) {
                    ((e.Light = 'light'), (e.Dark = 'dark'));
                })(D || (D = {}));
                const C = (e) => {
                    let u = e.vehicleInfo,
                        t = e.rentDays,
                        n = void 0 === t ? 0 : t,
                        i = e.rentBattles,
                        C = void 0 === i ? 0 : i,
                        B = e.size,
                        g = void 0 === B ? E.$u.S180x135 : B,
                        p = e.theme,
                        v = void 0 === p ? D.Light : p,
                        h = e.classNames,
                        b = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, A);
                    const w = u.vehicleLvl,
                        f = u.vehicleName,
                        y = u.vehicleType,
                        x = (v === D.Light ? F.white_elite : F.blue_elite).$dyn(`${(0, s.BN)(y)}`),
                        P = n > 0 || C > 0;
                    return l().createElement(
                        'div',
                        {
                            className: r()(d.Z.base, d.Z[`base__${g}`], d.Z[`base__${v}`], P && d.Z.base__withRent),
                            lang: R.strings.settings.LANGUAGE_CODE(),
                        },
                        l().createElement(c.r, _({ size: g, isLabelHidden: !0 }, b)),
                        n > 0 &&
                            l().createElement(a.z, {
                                text: m.rentDays(),
                                binding: {
                                    clockIcon: l().createElement('span', { className: d.Z.clockIcon }),
                                    days: n,
                                },
                                classMix: r()(d.Z.rent, null == h ? void 0 : h.rent),
                            }),
                        C > 0 &&
                            l().createElement(a.z, {
                                text: m.rentBattles(),
                                binding: {
                                    clockIcon: l().createElement('span', { className: d.Z.clockIcon }),
                                    battles: C,
                                },
                                classMix: r()(d.Z.rent, null == h ? void 0 : h.rent),
                            }),
                        l().createElement(
                            'div',
                            { className: r()(d.Z.vehicleInfo, null == h ? void 0 : h.info) },
                            (0, o.HG)(w),
                            l().createElement(
                                'div',
                                { className: d.Z.typeContainer },
                                l().createElement('div', {
                                    className: d.Z.type,
                                    style: { backgroundImage: `url('${x}')` },
                                }),
                            ),
                            f,
                        ),
                    );
                };
            },
            7314: (e, u, t) => {
                t.d(u, { K8: () => m, Y1: () => g, by: () => F, gJ: () => C, n9: () => B, ri: () => A, xj: () => _ });
                var n = t(2862),
                    r = t(729),
                    a = t(5433),
                    o = t(3649),
                    s = t(3768);
                const i = ['ko', 'no'],
                    l = R.strings.settings.LANGUAGE_CODE(),
                    c = [
                        s.AC.Tman,
                        s.AC.GiftMachineToken,
                        s.AC.AddcEconomicBonuses,
                        s.AC.AchievementReward,
                        s.AC.Vehicles,
                        s.AC.EquipCoin,
                    ],
                    E = [s.pS.CelebrityAction, s.pS.Story, s.pS.Decoration],
                    d = (s.pS.CelebrityAction, s.pS.Story, [s.AC.Vehicles, s.AC.AchievementReward]),
                    A =
                        (s.AC.RandomBooklet,
                        s.AC.RandomGuide,
                        s.AC.RandomDecoration,
                        s.AC.RandomInstruction,
                        s.AC.RandomCrewInstruction,
                        n.E4.Credits,
                        n.E4.Gold,
                        n.E4.FreeXp,
                        a._z.Iron,
                        a._z.Crystal,
                        a._z.Emerald,
                        a._z.Amber,
                        (e) => E.includes(e)),
                    _ = (e) => e === n.E4.Vehicles,
                    m = (e) => e === n.E4.Items,
                    F = (e, u) => {
                        const t = 'R.images.gui.maps.icons';
                        return `${e === s.AC.AddcEconomicBonuses || e === n.E4.EquipCoin ? `${t}.newYear.rewards` : e === s.AC.AchievementReward ? `${t}.achievement` : e === s.AC.Vehicles ? 'R.images.gui.maps.shop.vehicles' : e === n.E4.CrewBooks ? 'R.images.gui.maps.icons.crewBooks.books' : `${t}.quests.bonuses`}.${(() => {
                            if (e === n.E4.EquipCoin) return u;
                            switch (u) {
                                case s.$u.Small:
                                case s.$u.Big:
                                    return 'big';
                                default:
                                    return ((t = e), d.includes(t) ? u.replace('s', 'c_') : u);
                            }
                            var t;
                        })()}`;
                    },
                    D = [s.$u.S360x270, s.$u.S400x300, s.$u.S600x450],
                    C = (e, u, t) => {
                        const n = e.name,
                            a = D.includes(u) || ((e) => c.includes(e))(n);
                        if (a) {
                            const r = F(n, u),
                                a = (({ name: e, icon: u, bigIcon: t, userName: n }) => {
                                    switch (e) {
                                        case s.AC.Tman:
                                            return t;
                                        case s.AC.Customizations:
                                            return u;
                                        case s.AC.Vehicles:
                                            return (0, o.BN)(n);
                                        default:
                                            return u || e;
                                    }
                                })(e);
                            '' === a && console.warn('empty icon');
                            return `${r}.${a}${t ? '_pixelated' : ''}`;
                        }
                        return (0, r.ry)(e, u.toString());
                    },
                    B = (e) => {
                        switch (e) {
                            case s.AC.Tman:
                            case s.AC.GiftMachineToken:
                            case s.AC.AddcEconomicBonuses:
                            case s.AC.RandomBooklet:
                            case s.AC.RandomGuide:
                            case s.AC.RandomDecoration:
                            case s.AC.RandomInstruction:
                            case s.AC.RandomCrewInstruction:
                                return n.$h.MULTI;
                            default:
                                return (0, r.p3)(e);
                        }
                    },
                    g = () => i.includes(l);
            },
            3768: (e, u, t) => {
                t.d(u, {
                    $u: () => l,
                    AC: () => d,
                    I5: () => o,
                    SB: () => i,
                    bT: () => s,
                    pS: () => A,
                    px: () => a,
                    qI: () => r,
                });
                var n = t(4484);
                const r = (e) => e.name === n.rv,
                    a = (e) => e.name === n.Yw,
                    o = (e) => e.name === n.SC,
                    s = (e) => 'item' in e && e.item && e.item.startsWith('modernized'),
                    i = (e) => 'icon' in e && 'attachment' === e.icon;
                let l, c, E, d, A;
                (!(function (e) {
                    ((e.Small = 'small'),
                        (e.Big = 'big'),
                        (e.S180x135 = 's180x135'),
                        (e.S232x174 = 's232x174'),
                        (e.S296x222 = 's296x222'),
                        (e.S360x270 = 's360x270'),
                        (e.S400x300 = 's400x300'),
                        (e.S600x450 = 's600x450'));
                })(l || (l = {})),
                    (function (e) {
                        ((e.None = 'noAnimation'),
                            (e.Default = 'defaultAnimation'),
                            (e.OnlyButton = 'onlyButtonAnimation'),
                            (e.OnlyText = 'onlyTextAnimation'));
                    })(c || (c = {})),
                    (function (e) {
                        ((e.Default = 'default'), (e.Big = 'Big'));
                    })(E || (E = {})),
                    (function (e) {
                        ((e.GiftMachineToken = 'battleToken'),
                            (e.Tman = 'tmanToken'),
                            (e.AchievementReward = 'dossier_achievement'),
                            (e.Customizations = 'customizations'),
                            (e.VariadicDiscount = 'variadicDiscount'),
                            (e.AddcEconomicBonuses = 'addcEconomicBonuses'),
                            (e.Vehicles = 'vehicles'),
                            (e.MarketplaceToken = 'ny_marketplace'),
                            (e.RandomBooklet = 'randomNyBooklet'),
                            (e.RandomGuide = 'randomNyGuide'),
                            (e.RandomDecoration = 'randomNyToy'),
                            (e.RandomInstruction = 'randomNyInstruction'),
                            (e.RandomCrewInstruction = 'randomNyCrewInstruction'),
                            (e.EquipCoin = 'equipCoin'));
                    })(d || (d = {})),
                    (function (e) {
                        ((e.CelebrityAction = 'questTokenAnim'),
                            (e.Story = 'questTokenStory'),
                            (e.Decoration = 'questTokenDecoration'));
                    })(A || (A = {})));
            },
            6808: (e, u, t) => {
                t.d(u, { Bi: () => r, Wt: () => n });
                (t(6483), t(7739), t(3649), t(6179), t(2973));
                var n = t(9480);
                const r = () => {};
            },
            7298: (e, u, t) => {
                t.d(u, { _: () => o });
                var n = t(122),
                    r = t(6179);
                const a = () => {},
                    o = (e, u, t = !0) => {
                        const o = (0, r.useState)(e[u]),
                            s = o[0],
                            i = o[1],
                            l = (0, r.useRef)(a),
                            c = (0, r.useCallback)(() => {
                                s.stop ||
                                    (l.current(),
                                    (l.current = (0, n.F)(() => {
                                        i(e[null == s ? void 0 : s.nextState]);
                                    }, s.timeout)));
                            }, [s, e]);
                        return (
                            (0, r.useEffect)(() => (t && c(), () => l.current()), [t, c]),
                            {
                                step: s,
                                setStep: (0, r.useCallback)(
                                    (u) => {
                                        i(e[u]);
                                    },
                                    [e],
                                ),
                                next: c,
                            }
                        );
                    };
            },
            2973: (e, u, t) => {
                let n, r;
                (!(function (e) {
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
                    })(r || (r = {})));
            },
            6339: (e, u, t) => {
                var n = t(6483),
                    r = t.n(n),
                    a = t(6179),
                    o = t.n(a),
                    s = t(2686),
                    i = t(126),
                    l = t(3415),
                    c = t(3112),
                    E = t(7727),
                    d = t(3403),
                    A = t(3215),
                    _ = t(3946),
                    m = t(6808),
                    F = t(9480),
                    D = t(8284);
                const C = (0, A.q)()(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    rewards: e.array('rewards'),
                                    pointsForAwards: e.array('pointsForAwards'),
                                },
                                t = (0, _.Om)((e) => m.Wt.get(u.pointsForAwards.get(), e)),
                                n = (e) => {
                                    const t = u.root.get(),
                                        n = t.availableRewardsCount,
                                        r = t.receivedRewardsCount;
                                    return n >= e + 1 && r < e + 1
                                        ? D.v.Available
                                        : r >= e + 1
                                          ? D.v.Received
                                          : D.v.Disabled;
                                },
                                r = (0, _.Om)(() =>
                                    m.Wt.map(u.rewards.get(), (e, u) => Object.assign({}, e, { rewardState: n(u) })),
                                ),
                                a = (0, _.Om)(() =>
                                    (0, F.filterMap)(
                                        r(),
                                        (e) => e.rewardState === D.v.Available,
                                        (e) => e,
                                    ),
                                ),
                                o = (0, _.Om)(() => a().length);
                            return Object.assign({}, u, {
                                computes: {
                                    getRewards: r,
                                    getAvailableRewards: a,
                                    getAvailableRewardsLength: o,
                                    getPointForReward: t,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            getReward: e.createCallbackNoArgs('onGetReward'),
                            openAnimationTrigger: e.createCallbackNoArgs('onOpenAnimationTrigger'),
                            showStylePreview: e.createCallback((e) => ({ intCD: e }), 'onStylePreview'),
                        }),
                    ),
                    B = C[0],
                    g = C[1];
                var p = t(9916),
                    v = t(324),
                    h = t(7506),
                    b = t(7030);
                const w = 'RadialProgressBar_base_53',
                    f = 'RadialProgressBar_wrapper_f3',
                    y = 'RadialProgressBar_circle_ed',
                    x = 'RadialProgressBar_base__fullProgress_a4',
                    P = 'RadialProgressBar_light_da',
                    S = (e, u) => `-${(e / u) * 4}s`,
                    T = ({ prevValue: e, currentValue: u, maxValue: t, isDisabled: n, onAnimationEnd: s }) => {
                        const i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = u >= t,
                            E = S(u, t),
                            d = n ? { animationDelay: E } : {},
                            A = (0, b.useSpring)(() => ({
                                progress: u,
                                onChange: (e) => {
                                    const u = i.current,
                                        n = l.current;
                                    if (!u || !n) return;
                                    const r = S(e.value.progress, t);
                                    ((u.style.animationDelay = r), (n.style.animationDelay = r));
                                },
                                onRest: () => {
                                    null == s || s();
                                },
                            })),
                            _ = A[1];
                        return (
                            (0, a.useEffect)(() => {
                                n || _.start({ from: { progress: e }, to: { progress: u } });
                            }, [_, u, e, n]),
                            o().createElement(
                                'div',
                                { className: r()(w, c && x) },
                                o().createElement(
                                    'div',
                                    { className: f },
                                    o().createElement('div', { ref: i, className: y, style: d }),
                                    o().createElement('div', { ref: l, className: P, style: d }),
                                ),
                            )
                        );
                    },
                    O = {
                        base: 'ResourceProgression_base_91',
                        background: 'ResourceProgression_background_f3',
                        base__glade: 'ResourceProgression_base__glade_8a',
                        glow: 'ResourceProgression_glow_90',
                        wrapper: 'ResourceProgression_wrapper_d9',
                        base__friends: 'ResourceProgression_base__friends_2d',
                        holder: 'ResourceProgression_holder_9a',
                        holder__1: 'ResourceProgression_holder__1_1f',
                        holder__2: 'ResourceProgression_holder__2_5b',
                        holder__3: 'ResourceProgression_holder__3_03',
                        holder__style: 'ResourceProgression_holder__style_8f',
                        reward: 'ResourceProgression_reward_f6',
                        holder__available: 'ResourceProgression_holder__available_35',
                        holder__received: 'ResourceProgression_holder__received_a7',
                        loupe: 'ResourceProgression_loupe_07',
                        receivedIcon: 'ResourceProgression_receivedIcon_d1',
                        counter: 'ResourceProgression_counter_19',
                        counter__done: 'ResourceProgression_counter__done_56',
                        check: 'ResourceProgression_check_4d',
                        indicator: 'ResourceProgression_indicator_c7',
                        quantity: 'ResourceProgression_quantity_49',
                        label: 'ResourceProgression_label_9a',
                        slideInFadeIn: 'ResourceProgression_slideInFadeIn_9a',
                        fadeOut: 'ResourceProgression_fadeOut_d3',
                        fadeIn: 'ResourceProgression_fadeIn_20',
                        fadeInWithScale: 'ResourceProgression_fadeInWithScale_11',
                        slideUp: 'ResourceProgression_slideUp_4f',
                        scale: 'ResourceProgression_scale_82',
                        spin: 'ResourceProgression_spin_09',
                        blink: 'ResourceProgression_blink_d6',
                        slideInNotification: 'ResourceProgression_slideInNotification_d7',
                    },
                    I = R.strings.ny.resourceProgression,
                    k = (0, d.Pi)(({ widgetType: e = D.t.Friends }) => {
                        const u = g(),
                            t = u.model,
                            n = u.controls,
                            s = t.root.get(),
                            i = s.maxProgressValue,
                            l = s.currentProgressValue,
                            c = s.isOpenAnimationTriggered,
                            d = s.savedProgressValue,
                            A = l >= i,
                            _ = A ? i : d,
                            F = (0, a.useState)(_),
                            C = F[0],
                            B = F[1],
                            p = t.computes.getAvailableRewardsLength() && A,
                            b = (0, a.useMemo)(() => l > i || C >= i || c, [l, c, i, C]);
                        return o().createElement(
                            'div',
                            { className: r()(O.base, O[`base__${e}`]) },
                            o().createElement('div', { className: O.background }),
                            o().createElement('div', { className: O.glow }),
                            o().createElement(
                                'div',
                                { className: O.wrapper },
                                o().createElement(T, { isDisabled: b, prevValue: C, currentValue: l, maxValue: i }),
                                m.Wt.map(t.computes.getRewards(), (e, u) => {
                                    const a = e.icon,
                                        s = e.name,
                                        i = e.intCD,
                                        l = e.rewardState,
                                        c = 'style' === a;
                                    return o().createElement(
                                        'div',
                                        {
                                            key: `${s}_${u}`,
                                            className: r()(
                                                O.holder,
                                                O[`holder__${u + 1}`],
                                                O[`holder__${l}`],
                                                O[`holder__${a}`],
                                            ),
                                            onClick: () =>
                                                ((e) => {
                                                    e && (E.$.playClick(), n.showStylePreview(e));
                                                })(i),
                                            onMouseEnter: () => {
                                                c && E.$.playHighlight();
                                            },
                                        },
                                        o().createElement(
                                            'div',
                                            { className: O.reward },
                                            o().createElement(h.Q, { bonusModel: e, isFlexable: !0 }),
                                        ),
                                        o().createElement('div', { className: O.receivedIcon }),
                                        c && o().createElement('div', { className: O.loupe }),
                                        o().createElement(
                                            'div',
                                            { className: O.quantity },
                                            t.computes.getPointForReward(u),
                                        ),
                                        o().createElement('div', { className: O.indicator }),
                                    );
                                }),
                                o().createElement(
                                    'div',
                                    { className: r()(O.counter, A && O.counter__done) },
                                    A
                                        ? o().createElement('div', { className: O.check })
                                        : o().createElement(v.Z, {
                                              valueFrom: C,
                                              valueTo: l,
                                              isDisabled: b,
                                              onAnimationComplete: () => {
                                                  C !== l && B(l);
                                              },
                                          }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: O.label },
                                    p ? I.collectLabel() : A ? I.finalLabel() : I.label(),
                                ),
                            ),
                        );
                    }),
                    N = 'ResourceBoxPopover_base_d8',
                    L = 'ResourceBoxPopover_closeBtn_04',
                    M = (0, d.Pi)(({ root: e, onClose: u }) => {
                        (0, a.useEffect)(() => {
                            const t = e.current;
                            if (t) return (p.c1.register(t, u), () => p.c1.unregister(t, u));
                        }, [e, u]);
                        return o().createElement(
                            'div',
                            { className: N },
                            o().createElement(k, null),
                            o().createElement('div', {
                                className: L,
                                onClick: () => {
                                    ((0, E.G)(R.sounds.cancelcloseno()), u());
                                },
                                onMouseEnter: E.$.playHighlight,
                            }),
                        );
                    });
                var U = t(2372),
                    G = t(9766),
                    $ = t(3601);
                const Z = 'Counter_base_0c',
                    q = (0, d.Pi)(() => {
                        const e = g().model.root.get(),
                            u = e.maxProgressValue,
                            t = e.currentProgressValue,
                            n = (0, a.useState)(!1),
                            r = n[0],
                            s = n[1],
                            i = (0, $.n)(t, r, u),
                            l = i[0],
                            c = l.countFrom,
                            E = l.countTo,
                            d = i[1].handleAnimationEnd,
                            A = (0, a.useCallback)(() => s(!1), []);
                        return (
                            (0, a.useEffect)(() => {
                                c !== E && d();
                            }, [c, E, d]),
                            o().createElement(
                                'div',
                                { className: Z },
                                o().createElement(G.z, {
                                    text: R.strings.ny.progress.default(),
                                    binding: {
                                        value: o().createElement(v.Z, {
                                            valueFrom: c,
                                            valueTo: E,
                                            isDisabled: c >= u,
                                            onAnimationComplete: A,
                                        }),
                                        maxValue: o().createElement(U.A, { value: u }),
                                    },
                                }),
                            )
                        );
                    }),
                    z = {
                        base: 'ResourceBox_base_7c',
                        glow: 'ResourceBox_glow_62',
                        glow__scale: 'ResourceBox_glow__scale_b5',
                        base__hasRewards: 'ResourceBox_base__hasRewards_0d',
                        wrapper: 'ResourceBox_wrapper_a4',
                        base__glade: 'ResourceBox_base__glade_7d',
                        icon: 'ResourceBox_icon_a4',
                        base__completed: 'ResourceBox_base__completed_25',
                        completed: 'ResourceBox_completed_91',
                        rewards: 'ResourceBox_rewards_63',
                        counter: 'ResourceBox_counter_a8',
                        text: 'ResourceBox_text_3a',
                    },
                    H = {
                        base: 'RewardNotification_base_39',
                        base__1: 'RewardNotification_base__1_b2',
                        base__2: 'RewardNotification_base__2_ad',
                        base__3: 'RewardNotification_base__3_1f',
                        reward: 'RewardNotification_reward_bd',
                    },
                    W = (0, d.Pi)(() => {
                        const e = g().model,
                            u = e.computes.getAvailableRewardsLength();
                        return o().createElement(
                            'div',
                            { className: r()(H.base, H[`base__${u}`]) },
                            m.Wt.map(e.computes.getAvailableRewards(), (e, u) =>
                                o().createElement(
                                    'div',
                                    { className: H.reward, key: `${e.name}_${u}` },
                                    o().createElement(h.Q, { bonusModel: e, isFlexable: !0 }),
                                ),
                            ),
                        );
                    }),
                    V = {
                        width: 250,
                        height: 250,
                        frameCount: 75,
                        chunk: { count: 1, columns: 11, rows: 7 },
                        getChunkPath: (0, i.V)('R.images.gui.maps.icons.newYear.resourceBox.blue_glow.sprite_glow_'),
                    },
                    Y = R.strings.ny.resourceBox,
                    j = (0, i.q)(V),
                    X = (0, d.Pi)(({ type: e = D.t.Friends }) => {
                        const u = g(),
                            t = u.model,
                            n = u.controls,
                            i = t.root.get(),
                            d = i.maxProgressValue,
                            A = i.currentProgressValue,
                            _ = i.isOpenAnimationTriggered,
                            m = (0, a.useRef)(null),
                            F = (0, a.useState)(!1),
                            C = F[0],
                            B = F[1],
                            p = (0, c.V)(),
                            v = t.computes.getAvailableRewardsLength() > 0,
                            h = t.computes.getAvailableRewardsLength() > 1,
                            b = 0 === t.computes.getAvailableRewardsLength() && A >= d,
                            w = h ? Y.label.multiple() : Y.label.single(),
                            f = b
                                ? { body: Y.tooltip.completed.body() }
                                : {
                                      contentId: R.views.lobby.new_year.tooltips.NyResourceBoxTooltip('resId'),
                                      isEnabled: !v,
                                      args: { isFriendsList: e === D.t.Friends },
                                  };
                        return o().createElement(
                            'div',
                            {
                                className: r()(
                                    z.base,
                                    z[`base__${e}`],
                                    v && z.base__hasRewards,
                                    b && z.base__completed,
                                ),
                                ref: m,
                            },
                            v &&
                                o().createElement(s.At, {
                                    width: V.width,
                                    height: V.height,
                                    frameCount: V.frameCount,
                                    getImageSource: j,
                                    className: r()(z.glow, 2 === p && z.glow__scale),
                                }),
                            o().createElement(
                                l.l,
                                { tooltipArgs: f, className: z.wrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', {
                                        className: z.icon,
                                        onClick: () => {
                                            if (((0, E.G)(R.sounds.hangar_newyear_friends_progress()), v))
                                                return (B(!1), void n.getReward());
                                            if (e === D.t.Friends) {
                                                const e = !C;
                                                (B(e), !_ && e && n.openAnimationTrigger());
                                            }
                                        },
                                    }),
                                    v && o().createElement('div', { className: z.text }, w),
                                    e === D.t.Friends &&
                                        (v
                                            ? o().createElement(
                                                  'div',
                                                  { className: z.rewards },
                                                  o().createElement(W, null),
                                              )
                                            : !b &&
                                              o().createElement(
                                                  'div',
                                                  { className: z.counter },
                                                  o().createElement(q, null),
                                              )),
                                    b && o().createElement('div', { className: z.completed }),
                                ),
                            ),
                            C && o().createElement(M, { root: m, onClose: () => B(!1) }),
                        );
                    }),
                    K = {
                        base: 'WidgetResourceBox_base_c5',
                        wrapper: 'WidgetResourceBox_wrapper_de',
                        wrapper__glade: 'WidgetResourceBox_wrapper__glade_23',
                    };
                o().memo(({ options: e, mode: u, mocks: t, widgetType: n = D.t.Friends }) =>
                    o().createElement(
                        B,
                        { mode: u, options: e, mocks: t },
                        o().createElement(
                            'div',
                            { className: K.base, lang: R.strings.settings.LANGUAGE_CODE() },
                            o().createElement(
                                'div',
                                { className: r()(K.wrapper, K[`wrapper__${n}`]) },
                                o().createElement(X, { type: n }),
                            ),
                            n === D.t.Glade && o().createElement(k, { widgetType: n }),
                        ),
                    ),
                );
            },
            8284: (e, u, t) => {
                let n, r;
                (t.d(u, { t: () => r, v: () => n }),
                    (function (e) {
                        ((e.Available = 'available'), (e.Received = 'received'), (e.Disabled = 'disabled'));
                    })(n || (n = {})),
                    (function (e) {
                        ((e.Friends = 'friends'), (e.Glade = 'glade'));
                    })(r || (r = {})));
            },
            7869: (e, u, t) => {
                t.d(u, { k: () => n });
                const n = 'NYSelectVehicleForDiscountPopover';
            },
            5433: (e, u, t) => {
                let n, r, a, o, s, i, l;
                (t.d(u, { _z: () => r }),
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
                    })(r || (r = {})),
                    (function (e) {
                        ((e.XP = 'xpFactor'),
                            (e.TankmenXP = 'tankmenXPFactor'),
                            (e.FreeXp = 'freeXPFactor'),
                            (e.Credits = 'creditsFactor'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.NewYear = 'NewYear'),
                            (e.Christmas = 'Christmas'),
                            (e.Fairytale = 'Fairytale'),
                            (e.Oriental = 'Oriental'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.Level1 = 'level1'), (e.Level2 = 'level2'), (e.Level3 = 'level3'), (e.Level4 = 'level4'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.Zero = 'zero'), (e.Number = 'number'), (e.Default = 'default'));
                    })(i || (i = {})),
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
            4484: (e, u, t) => {
                t.d(u, { SC: () => r, Yw: () => a, rv: () => n });
                const n = 'ny25Toys',
                    r = 'premium_plus',
                    a = 'variadicDiscount';
            },
            5287: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            4769: (e, u, t) => {
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
            8417: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'BaseCounter_base_f0', plus: 'BaseCounter_plus_e0' };
            },
            4385: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'Convertation_base_86',
                    bumpStars: 'Convertation_bumpStars_9e',
                    bumpParticles: 'Convertation_bumpParticles_18',
                    particlesCanvas: 'Convertation_particlesCanvas_97',
                    bump: 'Convertation_bump_5e',
                    bumpRays: 'Convertation_bumpRays_c0',
                    twirlyCanvas: 'Convertation_twirlyCanvas_65',
                    base__start: 'Convertation_base__start_e7',
                    base__bump: 'Convertation_base__bump_26',
                    base__end: 'Convertation_base__end_8c',
                    reward: 'Convertation_reward_7e',
                    rewardFrom: 'Convertation_rewardFrom_0b',
                    rewardTo: 'Convertation_rewardTo_92',
                    star: 'Convertation_star_06',
                    star__one: 'Convertation_star__one_d7',
                    star__second: 'Convertation_star__second_9e',
                    star__third: 'Convertation_star__third_11',
                };
            },
            2026: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ActivityReward_base_50',
                    base__animated: 'ActivityReward_base__animated_b8',
                    pulse: 'ActivityReward_pulse_3d',
                    base__completed: 'ActivityReward_base__completed_02',
                    base__flex: 'ActivityReward_base__flex_24',
                    inner: 'ActivityReward_inner_39',
                    icon: 'ActivityReward_icon_21',
                    iconPlay: 'ActivityReward_iconPlay_02',
                };
            },
            5062: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'AttachmentReward_base_a0', glow: 'AttachmentReward_glow_5c' };
            },
            691: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'CommonReward_base_c0',
                    base__small: 'CommonReward_base__small_cb',
                    base__big: 'CommonReward_base__big_4c',
                    base__s180x135: 'CommonReward_base__s180x135_11',
                    base__s232x174: 'CommonReward_base__s232x174_60',
                    base__s296x222: 'CommonReward_base__s296x222_06',
                    base__s360x270: 'CommonReward_base__s360x270_9a',
                    base__s400x300: 'CommonReward_base__s400x300_02',
                    base__s600x450: 'CommonReward_base__s600x450_8c',
                    base__flex: 'CommonReward_base__flex_0e',
                    bonusIcon: 'CommonReward_bonusIcon_a5',
                    compensationIcon: 'CommonReward_compensationIcon_d9',
                    info: 'CommonReward_info_37',
                    info__hidden: 'CommonReward_info__hidden_1b',
                    info__credits: 'CommonReward_info__credits_4b',
                    info__gold: 'CommonReward_info__gold_73',
                    info__crystal: 'CommonReward_info__crystal_f8',
                    info__premiumTank: 'CommonReward_info__premiumTank_a6',
                    info__style_3d: 'CommonReward_info__style_3d_7c',
                    info__multi: 'CommonReward_info__multi_64',
                };
            },
            4823: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'DiscountReward_base_86',
                    base__progressionReward: 'DiscountReward_base__progressionReward_49',
                    base__currentProgressionCompleted: 'DiscountReward_base__currentProgressionCompleted_04',
                    base__applied: 'DiscountReward_base__applied_fd',
                    base__flex: 'DiscountReward_base__flex_0d',
                    discountReward: 'DiscountReward_discountReward_5a',
                    base__small: 'DiscountReward_base__small_74',
                    base__big: 'DiscountReward_base__big_02',
                    base__s180x135: 'DiscountReward_base__s180x135_18',
                    base__s232x174: 'DiscountReward_base__s232x174_39',
                    base__s296x222: 'DiscountReward_base__s296x222_e9',
                    icon: 'DiscountReward_icon_ba',
                    vehicleLevel: 'DiscountReward_vehicleLevel_0b',
                    discountAmount: 'DiscountReward_discountAmount_cc',
                };
            },
            6135: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ItemReward_base_34',
                    overlay: 'ItemReward_overlay_47',
                    base__small: 'ItemReward_base__small_38',
                    base__big: 'ItemReward_base__big_a6',
                    base__s180x135: 'ItemReward_base__s180x135_ff',
                    base__s232x174: 'ItemReward_base__s232x174_61',
                    base__s296x222: 'ItemReward_base__s296x222_64',
                    base__s400x300: 'ItemReward_base__s400x300_c4',
                    base__s600x450: 'ItemReward_base__s600x450_fe',
                    highlight: 'ItemReward_highlight_21',
                };
            },
            3038: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ModernizedEquipmentReward_base_d8',
                    equipmentGlow: 'ModernizedEquipmentReward_equipmentGlow_05',
                    base__small: 'ModernizedEquipmentReward_base__small_36',
                    base__big: 'ModernizedEquipmentReward_base__big_09',
                    base__s180x135: 'ModernizedEquipmentReward_base__s180x135_ba',
                    base__s232x174: 'ModernizedEquipmentReward_base__s232x174_02',
                    base__s296x222: 'ModernizedEquipmentReward_base__s296x222_5f',
                    base__flex: 'ModernizedEquipmentReward_base__flex_8a',
                };
            },
            4479: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'PremiumReward_base_16',
                    base__small: 'PremiumReward_base__small_21',
                    base__big: 'PremiumReward_base__big_08',
                    base__s180x135: 'PremiumReward_base__s180x135_68',
                    base__s232x174: 'PremiumReward_base__s232x174_8f',
                    base__s296x222: 'PremiumReward_base__s296x222_4b',
                    base__s360x270: 'PremiumReward_base__s360x270_75',
                    base__s400x300: 'PremiumReward_base__s400x300_92',
                    base__s600x450: 'PremiumReward_base__s600x450_d2',
                    base__flex: 'PremiumReward_base__flex_e2',
                    icon: 'PremiumReward_icon_e2',
                    info: 'PremiumReward_info_13',
                };
            },
            9025: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'ToyReward_base_1d',
                    base__large: 'ToyReward_base__large_c7',
                    base__flex: 'ToyReward_base__flex_3e',
                    label: 'ToyReward_label_f7',
                    image: 'ToyReward_image_46',
                    counter: 'ToyReward_counter_85',
                };
            },
            7665: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'VehicleReward_base_a9',
                    vehicleInfo: 'VehicleReward_vehicleInfo_3e',
                    base__s360x270: 'VehicleReward_base__s360x270_be',
                    base__s400x300: 'VehicleReward_base__s400x300_67',
                    base__s600x450: 'VehicleReward_base__s600x450_f0',
                    base__withRent: 'VehicleReward_base__withRent_a4',
                    base__dark: 'VehicleReward_base__dark_af',
                    typeContainer: 'VehicleReward_typeContainer_19',
                    type: 'VehicleReward_type_90',
                    rent: 'VehicleReward_rent_6b',
                    rent__hidden: 'VehicleReward_rent__hidden_34',
                    clockIcon: 'VehicleReward_clockIcon_46',
                };
            },
        },
        __webpack_module_cache__ = {},
        deferred;
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 6344),
        (() => {
            var e = { 6344: 0, 7506: 0, 6339: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        ((r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [8360], () => __webpack_require__(6339));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
