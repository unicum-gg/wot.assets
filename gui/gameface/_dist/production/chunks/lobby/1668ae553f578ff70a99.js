'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [8584],
    {
        9630: (e, t, r) => {
            r.d(t, { a: () => o });
            var a = r(6179);
            function o(e, t) {
                (0, a.useEffect)(
                    () => (window.addEventListener('resize', e), () => window.removeEventListener('resize', e)),
                    t,
                );
            }
        },
        4906: (e, t, r) => {
            r.d(t, { A: () => C, e: () => S });
            var a = r(6483),
                o = r.n(a),
                n = r(9766),
                l = r(6179),
                c = r.n(l);
            const s = 'Counter_base_6d',
                i = 'Counter_caption_b7',
                _ = 'Counter_captionText_3d',
                d = 'Counter_indent_a9',
                u = 'Counter_currentValue_98',
                m = 'Counter_currentValue__shadow_0d',
                g = 'Counter_gradient_ce',
                p = 'Counter_gradient__top_fb',
                f = 'Counter_gradient__bottom_ff',
                v = 'Counter_mask_ce',
                b = 'Counter_divider_16',
                h = 'Counter_wreath_58',
                E = 'Counter_totalValue_2a';
            let S;
            !(function (e) {
                ((e.Challenge = 'challenge'), (e.Quest = 'quest'), (e.Advanced = 'advanced'));
            })(S || (S = {}));
            const w = R.strings.ny.newYear.challenge.logo,
                C = ({ currentValue: e, totalValue: t, type: r }) =>
                    c().createElement(
                        'div',
                        { className: s },
                        c().createElement(
                            'div',
                            { className: i },
                            c().createElement(n.z, {
                                classMix: _,
                                text: w.counterCaption.$dyn(r),
                                binding: { indent: c().createElement('div', { className: d }) },
                            }),
                        ),
                        c().createElement('div', { className: o()(u, m) }, e),
                        c().createElement(
                            'div',
                            { className: v },
                            c().createElement(
                                'div',
                                { className: u },
                                e,
                                c().createElement('div', { className: o()(g, p) }, e),
                                c().createElement('div', { className: o()(g, f) }, e),
                            ),
                        ),
                        c().createElement(
                            'div',
                            { className: b },
                            r === S.Advanced && c().createElement('div', { className: h }),
                        ),
                        c().createElement('div', { className: E }, t),
                    );
        },
        3572: (e, t, r) => {
            r.d(t, { T: () => w });
            var a = r(6483),
                o = r.n(a),
                n = r(6179),
                l = r.n(n),
                c = r(4906);
            const s = 'Logo_base_1c',
                i = 'Logo_count_75',
                _ = 'Logo_glow_4b',
                d = 'Logo_info_f4',
                u = 'Logo_label_6f',
                m = 'Logo_title_d0',
                g = 'Logo_text_a5',
                p = 'Logo_gradient_60',
                f = 'Logo_gradient__labelTop_1d',
                v = 'Logo_gradient__labelBottom_ed',
                b = 'Logo_gradient__titleTop_4a',
                h = 'Logo_gradient__titleBottom_1e',
                E = 'Logo_description_f9',
                S = R.strings.ny.newYear.challenge.logo,
                w = ({ currentValue: e, totalValue: t, viewType: r, counterType: a, isDescriptionHidden: n }) =>
                    l().createElement(
                        'div',
                        { className: s },
                        void 0 !== e &&
                            void 0 !== t &&
                            l().createElement(
                                'div',
                                { className: i },
                                l().createElement('div', { className: _ }),
                                l().createElement(c.A, { currentValue: e, totalValue: t, type: a }),
                            ),
                        l().createElement(
                            'div',
                            { className: d },
                            l().createElement(
                                'div',
                                { className: u },
                                l().createElement('div', { className: g }, S.label.$dyn(r)),
                                l().createElement('div', { className: o()(p, f) }, S.label.$dyn(r)),
                                l().createElement('div', { className: o()(p, v) }, S.label.$dyn(r)),
                            ),
                            l().createElement(
                                'div',
                                { className: m },
                                l().createElement('div', { className: g }, S.title.$dyn(r)),
                                l().createElement('div', { className: o()(p, b) }, S.title.$dyn(r)),
                                l().createElement('div', { className: o()(p, h) }, S.title.$dyn(r)),
                            ),
                            !n && l().createElement('div', { className: E }, S.description.$dyn(r)),
                        ),
                    );
        },
        2776: (e, t, r) => {
            r.d(t, { w: () => S });
            var a = r(6483),
                o = r.n(a),
                n = r(7950),
                l = r(3138),
                c = r(3815),
                s = r(9630),
                i = r(8475),
                _ = r(6179),
                d = r.n(_);
            const u = { type: 'idle' };
            var m = r(1856),
                g = r(4598),
                p = r(5415),
                f = r(7727),
                v = r(9900),
                b = r(9158);
            const h = {
                base: 'StepScroll_base_5f',
                content: 'StepScroll_content_f4',
                scrollWrapper__noScrolling: 'StepScroll_scrollWrapper__noScrolling_96',
                scroll: 'StepScroll_scroll_78',
                track: 'StepScroll_track_4b',
                rail: 'StepScroll_rail_30',
                arrow: 'StepScroll_arrow_87',
                arrow__disabled: 'StepScroll_arrow__disabled_ef',
                arrow__left: 'StepScroll_arrow__left_e6',
                arrow__right: 'StepScroll_arrow__right_8d',
                scrollBar: 'StepScroll_scrollBar_97',
                scrollBar__hidden: 'StepScroll_scrollBar__hidden_7d',
                scrollLeftButton: 'StepScroll_scrollLeftButton_d1',
                scrollRightButton: 'StepScroll_scrollRightButton_0e',
                scrollThumb: 'StepScroll_scrollThumb_b4',
            };
            let E;
            !(function (e) {
                ((e.Right = 'right'), (e.Left = 'left'), (e.None = 'none'));
            })(E || (E = {}));
            const S = ({ content: e, startPosition: t = 0, onRest: r = g.Bi }) => {
                const a = (0, p.GS)().mediaSize,
                    S = (0, b.SH)(a),
                    w = S.cardOffset,
                    C = S.cardWidth,
                    y = (0, b.qu)(a),
                    N = viewEnv.getScale(),
                    L = C + w,
                    k = L * b.Gj * N,
                    D = (0, n.useHorizontalScrollApi)({ settings: (0, b.ff)(k) }),
                    B = D.animationScroll.scrollPosition,
                    W = (0, _.useState)(!1),
                    P = W[0],
                    T = W[1],
                    $ = (0, _.useState)(E.Left),
                    z = $[0],
                    A = $[1],
                    x = (0, _.useState)(!0),
                    O = x[0],
                    H = x[1];
                (!(function (e, t) {
                    const r = e.contentRef,
                        a = e.wrapperRef,
                        o = e.scrollPosition,
                        n = e.clampPosition,
                        d = e.animationScroll,
                        m = e.events,
                        g = (0, _.useState)(u),
                        p = g[0],
                        f = g[1],
                        v = (0, i.w)(),
                        b = (0, c.z)(() => {
                            v.run(() => {
                                const t = e.contentRef.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                t &&
                                    r &&
                                    a &&
                                    (t.style.cursor = a <= r ? 'auto' : 'dragging' === p.type ? 'move' : 'grab');
                            });
                        });
                    ((0, _.useEffect)(() => {
                        b();
                    }, [p.type, b]),
                        (0, s.a)(() => {
                            b();
                        }, []),
                        (0, _.useEffect)(() => {
                            if ('dragging' !== p.type) return;
                            const e = l.O.client.events.mouse.move(([e, l]) => {
                                    const c = r.current,
                                        s = a.current;
                                    if (!c || !s) return;
                                    if ('inside' === l && e.clientX < 0) return;
                                    const i = 'inside' === l ? e.clientX : e.clientX - s.offsetLeft,
                                        _ = p.positionFrom - i,
                                        u = p.previousScrollPosition + _;
                                    o.start(
                                        Object.assign(
                                            {
                                                scrollPosition: n(c, u),
                                                from: { scrollPosition: d.scrollPosition.get() },
                                            },
                                            t && { config: t },
                                        ),
                                    );
                                }),
                                c = l.O.client.events.mouse.up(function () {
                                    f({ type: 'scrollingToEnd' });
                                });
                            return () => {
                                (e(), c());
                            };
                        }, [d.scrollPosition, n, r, p, o, a, t]),
                        (0, _.useEffect)(() => {
                            if ('scrollingToEnd' !== p.type) return;
                            const e = () => {
                                f(u);
                            };
                            return (d.scrollPosition.idle && e(), m.on('rest', e), () => m.off('rest', e));
                        }, [d.scrollPosition, p.type, m]),
                        (0, _.useEffect)(() => {
                            const e = r.current;
                            if (!e) return;
                            const t = (e) => {
                                f({
                                    type: 'dragging',
                                    positionFrom: e.screenX,
                                    previousScrollPosition: d.scrollPosition.get(),
                                });
                            };
                            return (e.addEventListener('mousedown', t), () => e.removeEventListener('mousedown', t));
                        }, [d.scrollPosition, r]));
                })(D),
                    (0, v.b)(() =>
                        (0, m.v)(() => {
                            (V(), D.applyScroll(t * N));
                        }),
                    ));
                const V = () => {
                        const e = D.contentRef.current;
                        e && T(e.scrollWidth / N > y);
                    },
                    J = (0, c.z)(() => {
                        const e = D.contentRef.current;
                        e &&
                            A(
                                ((e) => {
                                    const t = B.goal;
                                    return t <= 0 ? E.Left : t >= e - y ? E.Right : E.None;
                                })(e.scrollWidth),
                            );
                    }),
                    G = (0, c.z)(() => {
                        const e = D.contentRef.current,
                            t = B.goal;
                        if (!e) return;
                        const r = (0, b.B5)(L, D.animationScroll.scrollPosition.get());
                        r !== t && D.applyScroll(r * N);
                    }),
                    j = (0, c.z)(() => {
                        (0, m.v)(() => {
                            (G(), V());
                        });
                    }),
                    M = (0, c.z)(() => {
                        const e = B.goal;
                        (null == r || r(e), H(!0), J());
                    }),
                    X = (0, c.z)(() => {
                        ((0, f.G)(R.sounds.hangar_newyear_celeb_screen_card_more_show()), H(!1), V());
                    });
                return (
                    (0, _.useEffect)(
                        () => (
                            D.events.on('rest', M),
                            D.events.on('start', X),
                            D.events.on('recalculateContent', J),
                            window.addEventListener('resize', j),
                            () => {
                                (D.events.off('rest', M),
                                    D.events.off('start', X),
                                    D.events.off('recalculateContent', J),
                                    window.removeEventListener('resize', j));
                            }
                        ),
                        [X, D.events, j, M, J],
                    ),
                    d().createElement(
                        'div',
                        {
                            className: h.base,
                            style: { '--list-width': `${y}rem`, '--card-width': `${C}rem`, '--card-offset': `${w}rem` },
                        },
                        P &&
                            d().createElement(
                                d().Fragment,
                                null,
                                d().createElement('div', {
                                    className: o()(h.arrow, h.arrow__left, z === E.Left && h.arrow__disabled),
                                    onClick: () => {
                                        ((0, f.G)(R.sounds.gui_hangar_hover()), D.applyStepTo(n.Direction.Next));
                                    },
                                    onMouseEnter: f.$.playHighlight,
                                }),
                                d().createElement('div', {
                                    className: o()(h.arrow, h.arrow__right, z === E.Right && h.arrow__disabled),
                                    onClick: () => {
                                        ((0, f.G)(R.sounds.gui_hangar_hover()), D.applyStepTo(n.Direction.Prev));
                                    },
                                    onMouseEnter: f.$.playHighlight,
                                }),
                            ),
                        d().createElement(
                            'div',
                            { className: h.content },
                            d().createElement(
                                n.Area,
                                {
                                    api: D,
                                    classNames: {
                                        content: h.scroll,
                                        wrapper: o()(h.scrollWrapper, !P && h.scrollWrapper__noScrolling),
                                    },
                                },
                                e,
                            ),
                        ),
                        P &&
                            d().createElement(n.Bar, {
                                api: D,
                                classNames: {
                                    base: o()(h.scrollBar, O && h.scrollBar__hidden),
                                    leftButton: h.scrollLeftButton,
                                    rightButton: h.scrollRightButton,
                                    thumb: h.scrollThumb,
                                    track: h.track,
                                    rail: h.rail,
                                },
                            }),
                    )
                );
            };
        },
        9158: (e, t, r) => {
            r.d(t, { B5: () => s, Gj: () => o, SH: () => n, ff: () => c, qu: () => l });
            var a = r(5415);
            const o = 2,
                n = (e) => {
                    switch (e) {
                        case a.cJ.Large:
                        case a.cJ.ExtraLarge:
                            return { cardOffset: 16, cardWidth: 480 };
                        default:
                            return { cardOffset: 16, cardWidth: 380 };
                    }
                },
                l = (e) => {
                    switch (e) {
                        case a.cJ.ExtraSmall:
                            return 1140;
                        case a.cJ.Small:
                            return 1200;
                        case a.cJ.Medium:
                            return 1435;
                        case a.cJ.Large:
                            return 1636;
                        case a.cJ.ExtraLarge:
                            return 2186;
                        default:
                            return 1435;
                    }
                },
                c = (e) => ({ step: { type: 'fixed', value: e } }),
                s = (e, t) => {
                    const r = t % e || 0;
                    return r <= 0 ? t : t - (r > 0.35 * e ? r - e : r);
                };
        },
        5032: (e, t, r) => {
            r.d(t, { hE: () => m, ve: () => d, r9: () => u });
            var a = r(6483),
                o = r.n(a),
                n = r(3138),
                l = r(6179),
                c = r.n(l);
            const s = {
                    base: 'CardDecorator_base_13',
                    base__empty: 'CardDecorator_base__empty_08',
                    stylesWrapper: 'CardDecorator_stylesWrapper_79',
                    stylesWrapper__hintAnimation: 'CardDecorator_stylesWrapper__hintAnimation_74',
                    blink: 'CardDecorator_blink_46',
                    stylesWrapper__withoutAnimation: 'CardDecorator_stylesWrapper__withoutAnimation_a7',
                    none: 'CardDecorator_none_87',
                    backgroundBox: 'CardDecorator_backgroundBox_95',
                    background: 'CardDecorator_background_e7',
                    background__top: 'CardDecorator_background__top_25',
                    base__hover: 'CardDecorator_base__hover_93',
                    base__disabled: 'CardDecorator_base__disabled_7b',
                    background__bottom: 'CardDecorator_background__bottom_18',
                    border: 'CardDecorator_border_0f',
                    shadow: 'CardDecorator_shadow_5a',
                    glow: 'CardDecorator_glow_d6',
                    glow__top: 'CardDecorator_glow__top_57',
                    glow__left: 'CardDecorator_glow__left_14',
                    noise: 'CardDecorator_noise_ac',
                    decoration: 'CardDecorator_decoration_44',
                    content: 'CardDecorator_content_5a',
                },
                i = ['state', 'hasDecoration', 'glowType', 'children', 'isHovered', 'withHintAnimation', 'className'];
            function _() {
                return (
                    (_ = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
                              }
                              return e;
                          }),
                    _.apply(null, arguments)
                );
            }
            let d, u;
            (!(function (e) {
                ((e.Default = 'default'), (e.Empty = 'empty'), (e.Disabled = 'disabled'));
            })(d || (d = {})),
                (function (e) {
                    ((e.Top = 'top'), (e.Left = 'left'));
                })(u || (u = {})));
            const m = (e) => {
                let t = e.state,
                    r = void 0 === t ? d.Default : t,
                    a = e.hasDecoration,
                    l = void 0 === a || a,
                    m = e.glowType,
                    g = void 0 === m ? u.Top : m,
                    p = e.children,
                    f = e.isHovered,
                    v = e.withHintAnimation,
                    b = e.className,
                    h = (function (e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (t.indexOf(a) >= 0) continue;
                                r[a] = e[a];
                            }
                        return r;
                    })(e, i);
                const E = n.O.client.graphicsQuality.isLow();
                return c().createElement(
                    'div',
                    _({ className: o()(s.base, s[`base__${r}`], f && s.base__hover, b) }, h),
                    r !== d.Empty &&
                        c().createElement(
                            'div',
                            {
                                className: o()(
                                    s.stylesWrapper,
                                    v && s.stylesWrapper__hintAnimation,
                                    E && s.stylesWrapper__withoutAnimation,
                                ),
                            },
                            c().createElement(
                                'div',
                                { className: s.backgroundBox },
                                c().createElement('div', { className: o()(s.background, s.background__top) }),
                                c().createElement('div', { className: o()(s.background, s.background__bottom) }),
                            ),
                            c().createElement('div', { className: s.border }),
                            c().createElement('div', { className: s.noise }),
                            c().createElement('div', { className: s.shadow }),
                            r === d.Default && c().createElement('div', { className: o()(s.glow, s[`glow__${g}`]) }),
                            l && c().createElement('div', { className: s.decoration }),
                        ),
                    c().createElement('div', { className: s.content }, p),
                );
            };
        },
        1596: (e, t, r) => {
            r.d(t, { L: () => i, s: () => s });
            var a = r(6483),
                o = r.n(a),
                n = r(6179),
                l = r.n(n);
            const c = {
                base: 'CardStatus_base_cc',
                icon: 'CardStatus_icon_f9',
                icon__check: 'CardStatus_icon__check_3a',
                icon__lock: 'CardStatus_icon__lock_b0',
                icon__animation: 'CardStatus_icon__animation_ab',
                fadeIn: 'CardStatus_fadeIn_c0',
                bottomLine: 'CardStatus_bottomLine_23',
                bottomLine__blurred: 'CardStatus_bottomLine__blurred_f3',
                bottomLine__light: 'CardStatus_bottomLine__light_c6',
                decoration: 'CardStatus_decoration_48',
            };
            let s;
            !(function (e) {
                ((e.Check = 'check'), (e.Lock = 'lock'));
            })(s || (s = {}));
            const i = ({ iconType: e, hasIconAnimation: t, className: r }) =>
                l().createElement(
                    'div',
                    { className: o()(c.base, r) },
                    l().createElement('div', { className: o()(c.icon, c[`icon__${e}`], t && c.icon__animation) }),
                    l().createElement('div', { className: o()(c.bottomLine, c.bottomLine__blurred) }),
                    l().createElement('div', { className: o()(c.bottomLine, c.bottomLine__light) }),
                    l().createElement('div', { className: c.decoration }),
                );
        },
        5607: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = { base: 'ChallengeScroll_base_8a', content: 'ChallengeScroll_content_5b' };
        },
    },
]);
