'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [972],
    {
        5461: (e, t, a) => {
            a.d(t, { XZ: () => _, yB: () => l.yB, Rh: () => l.Rh });
            var n = a(7363),
                r = a.n(n),
                s = a(6483),
                i = a.n(s),
                o = a(7727);
            let c;
            !(function (e) {
                ((e[(e.LEFT = 0)] = 'LEFT'),
                    (e[(e.WHEEL = 1)] = 'WHEEL'),
                    (e[(e.RIGHT = 2)] = 'RIGHT'),
                    (e[(e.FOURTH = 3)] = 'FOURTH'),
                    (e[(e.FIFTH = 4)] = 'FIFTH'));
            })(c || (c = {}));
            var l = a(8844);
            const u = {
                    base: 'Checkbox_base_36',
                    base__disabled: 'Checkbox_base__disabled_08',
                    base__center: 'Checkbox_base__center_52',
                    base__bottom: 'Checkbox_base__bottom_28',
                    input: 'Checkbox_input_37',
                    base__mouseDown: 'Checkbox_base__mouseDown_45',
                    base__small: 'Checkbox_base__small_18',
                    base__medium: 'Checkbox_base__medium_12',
                    base__large: 'Checkbox_base__large_f7',
                    base__extraLarge: 'Checkbox_base__extraLarge_c9',
                    alertOverlay: 'Checkbox_alertOverlay_52',
                    base__alert: 'Checkbox_base__alert_b7',
                    blink: 'Checkbox_blink_5e',
                    base__checked: 'Checkbox_base__checked_a2',
                    inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                    highlight: 'Checkbox_highlight_b8',
                    base__main: 'Checkbox_base__main_3a',
                    base__primary: 'Checkbox_base__primary_ab',
                    checkmark: 'Checkbox_checkmark_60',
                    fadeIn: 'Checkbox_fadeIn_1a',
                    label: 'Checkbox_label_bc',
                    labelContent: 'Checkbox_labelContent_64',
                },
                d = [
                    'id',
                    'isChecked',
                    'isDisabled',
                    'isAlert',
                    'size',
                    'type',
                    'soundHover',
                    'soundClick',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseUp',
                    'onMouseDown',
                    'onClick',
                    'onChange',
                    'onFocus',
                    'onBlur',
                    'text',
                    'contentStyles',
                    'children',
                    'alignment',
                ];
            function m() {
                return (
                    (m = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    m.apply(null, arguments)
                );
            }
            const _ = (e) => {
                let t = e.id,
                    a = e.isChecked,
                    s = void 0 !== a && a,
                    _ = e.isDisabled,
                    g = void 0 !== _ && _,
                    b = e.isAlert,
                    v = void 0 !== b && b,
                    p = e.size,
                    h = void 0 === p ? l.yB.medium : p,
                    y = e.type,
                    k = void 0 === y ? l.Rh.primary : y,
                    E = e.soundHover,
                    f = void 0 === E ? 'highlight' : E,
                    w = e.soundClick,
                    C = void 0 === w ? 'play' : w,
                    x = e.onMouseEnter,
                    R = e.onMouseLeave,
                    N = e.onMouseUp,
                    B = e.onMouseDown,
                    A = e.onClick,
                    O = e.onChange,
                    S = e.onFocus,
                    L = e.onBlur,
                    T = e.text,
                    $ = e.contentStyles,
                    z = e.children,
                    P = e.alignment,
                    I = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, d);
                const H = (0, n.useState)(!1),
                    M = H[0],
                    D = H[1],
                    F = (0, n.useState)(!1),
                    G = (F[0], F[1]),
                    K = (0, n.useCallback)(
                        (e) => {
                            g || (O && O(), A && A(e));
                        },
                        [g, O, A],
                    ),
                    q = (0, n.useCallback)(
                        (e) => {
                            const t = e.button === c.LEFT;
                            g || (t && D(!0), t && B && B(e), C && (0, o.G)(C));
                        },
                        [g, B, C],
                    ),
                    Q = (0, n.useCallback)(
                        (e) => {
                            g || (D(!1), N && N(e));
                        },
                        [g, N],
                    ),
                    V = (0, n.useCallback)(
                        (e) => {
                            g || (x && x(e), f && (0, o.G)(f));
                        },
                        [g, x, f],
                    ),
                    j = (0, n.useCallback)(
                        (e) => {
                            g || (D(!1), R && R(e));
                        },
                        [g, R],
                    ),
                    W = (0, n.useCallback)(
                        (e) => {
                            g || (G(!0), S && S(e));
                        },
                        [g, S],
                    ),
                    U = (0, n.useCallback)(
                        (e) => {
                            g || (G(!1), L && L(e));
                        },
                        [g, L],
                    ),
                    Y = r().createElement(
                        'div',
                        { className: u.label },
                        r().createElement(
                            'div',
                            { className: i()(u.labelContent, 's-labelContent'), style: $ },
                            T || z,
                        ),
                    );
                return r().createElement(
                    'div',
                    m(
                        {
                            id: t,
                            className: i()(u.base, u[`base__${h}`], u[`base__${k}`], {
                                [u.base__checked]: s,
                                [u.base__disabled]: g,
                                [u.base__mouseDown]: M,
                                [u.base__alert]: v,
                                [u.base__center]: P === l.N3.Center,
                                [u.base__bottom]: P === l.N3.Bottom,
                            }),
                            onClick: K,
                            onMouseEnter: V,
                            onMouseLeave: j,
                            onMouseDown: q,
                            onMouseUp: Q,
                            onFocus: W,
                            onBlur: U,
                        },
                        I,
                    ),
                    r().createElement(
                        'div',
                        { className: u.input },
                        r().createElement('div', { className: u.alertOverlay }),
                        r().createElement('div', { className: u.inputHoverOverlay }),
                        r().createElement('div', { className: u.highlight }),
                    ),
                    r().createElement('div', { className: u.checkmark }),
                    ((T || z) && Y) || null,
                );
            };
        },
        8844: (e, t, a) => {
            let n, r, s;
            (a.d(t, { N3: () => s, Rh: () => r, yB: () => n }),
                (function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(n || (n = {})),
                (function (e) {
                    ((e.primary = 'primary'), (e.main = 'main'));
                })(r || (r = {})),
                (function (e) {
                    ((e.Center = 'center'), (e.Bottom = 'bottom'));
                })(s || (s = {})));
        },
        9690: (e, t, a) => {
            a.d(t, { HG: () => o, cg: () => s });
            const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
            function s(e) {
                let t = '';
                for (let a = r.length - 1; a >= 0; a--) for (; e >= r[a];) ((t += n[a]), (e -= r[a]));
                return t;
            }
            const i = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                o = (e) => (i ? `${e}` : s(e));
        },
        5834: (e, t, a) => {
            function n(e, t = '-') {
                if ('string' == typeof e) return e;
                const a = Object.entries(e)[0];
                return [a[0], n(a[1], t)].join(t);
            }
            a.d(t, { P: () => n });
        },
        198: (e, t, a) => {
            a.d(t, { A_: () => m, Az: () => d, B1: () => i, Kg: () => b, QK: () => _, mB: () => u });
            var n = a(9762),
                r = a(6457),
                s = a(8869);
            const i = {
                    initial: 'initial',
                    waiting: 'waiting',
                    preparation: 'preparation',
                    open: 'open',
                    rewards: 'rewards',
                    page: 'page',
                    extra: 'extra',
                    skip: 'skip',
                },
                o = 'initial',
                c = 'complex',
                l = 'simple',
                u = `${i.open}-${o}`,
                d = `${i.open}-${l}`,
                m = `${i.open}-${c}`,
                _ = {
                    toExtra: 'toExtra',
                    toRewards: 'toRewards',
                    toPage: 'toPage',
                    toInitial: 'toInitial',
                    toPreparation: 'toStart',
                    toWaiting: 'toWaiting',
                    toOpen: 'toOpen',
                    toSkip: 'toSkip',
                    setAnimationActive: 'setAnimationActive',
                    next: 'next',
                },
                g = (0, n.C)({
                    id: 'animation',
                    initial: i.initial,
                    context: { isAnimationActive: !0 },
                    on: {
                        [_.setAnimationActive]: {
                            actions: (0, r.f0)({ isAnimationActive: (e, t) => t.isAnimationActive }),
                        },
                    },
                    states: {
                        [i.initial]: {
                            on: { [_.toSkip]: i.skip, [_.toPreparation]: i.preparation, [_.toOpen]: i.open },
                        },
                        [i.skip]: { after: { 100: { target: i.initial } } },
                        [i.preparation]: { on: { [_.toWaiting]: { target: i.waiting } } },
                        [i.waiting]: { on: { [_.toOpen]: i.open } },
                        [i.open]: {
                            initial: i.initial,
                            states: {
                                [o]: {
                                    after: { 100: [{ target: c, cond: (e) => e.isAnimationActive }, { target: l }] },
                                },
                                [c]: { on: { [_.toRewards]: '#animation.rewards' } },
                                [l]: { on: { [_.toRewards]: '#animation.rewards' } },
                            },
                        },
                        [i.rewards]: { on: { [_.toPage]: i.page, [_.toExtra]: i.extra } },
                        [i.extra]: { on: { [_.toPage]: i.page } },
                        [i.page]: { on: { [_.toInitial]: i.initial } },
                    },
                }),
                b = (0, s.kJ)(g);
        },
        3703: (e, t, a) => {
            a.d(t, { Z: () => f });
            var n = a(295),
                r = a(6483),
                s = a.n(r),
                i = a(3457),
                o = a(9766),
                c = a(8526),
                l = a(4489),
                u = a(5521),
                d = a(7363),
                m = a.n(d),
                _ = a(2984),
                g = a(2333),
                b = a(198);
            const v = 'Controls_base_1b',
                p = 'Controls_buttons_c3',
                h = 'Controls_button_61',
                y = 'Controls_button__first_66',
                k = 'Controls_quantity_8a',
                E = 'Controls_purchase_bb',
                f = ({
                    actions: e,
                    boxesCount: t,
                    useExternal: a,
                    texts: r,
                    images: d,
                    sounds: f,
                    openingCount: w = 0,
                    isShopVisible: C,
                }) => {
                    const x = (0, l.f)(e.openNext, [], 1100),
                        R = (0, n.v)(b.Kg, (e) => e.value),
                        N = () => {
                            R === b.B1.initial && t && x();
                        };
                    return (
                        (0, c.gd)(u.n.SPACE, N, !0),
                        m().createElement(
                            'div',
                            { className: v },
                            m().createElement(
                                'div',
                                { className: p },
                                Boolean(t) &&
                                    m().createElement(
                                        i.u5,
                                        { type: i.L$.main, size: i.qE.medium, mixClass: s()(h, y), onClick: N },
                                        m().createElement(o.z, {
                                            text: r.footerOpenNextButton,
                                            binding: { count: Math.min(t, w) },
                                        }),
                                    ),
                                m().createElement(
                                    i.u5,
                                    {
                                        type: i.L$.primary,
                                        size: i.qE.medium,
                                        mixClass: h,
                                        onClick: () => {
                                            R === b.B1.initial && e.goBack();
                                        },
                                    },
                                    r.footerBackButton,
                                ),
                            ),
                            m().createElement(
                                'div',
                                { className: k },
                                m().createElement(g.q, {
                                    text: t ? r.quantityAvailableTitle : r.quantityNoBoxesTitle,
                                    boxesCount: t,
                                }),
                            ),
                            C &&
                                0 === t &&
                                m().createElement(_.i, {
                                    text: a ? r.footerPurchaseButtonTextCn : r.footerPurchaseButtonText,
                                    image: d.iconEmpty,
                                    sounds: f,
                                    icon: a ? d.externalLink : void 0,
                                    className: E,
                                    onClick: () => {
                                        R === b.B1.initial && e.buyBoxes();
                                    },
                                }),
                        )
                    );
                };
        },
        2369: (e, t, a) => {
            a.d(t, { H: () => K, k: () => G });
            var n = a(6483),
                r = a.n(n),
                s = a(3457),
                i = a(8089),
                o = a(7412),
                c = a(122),
                l = a(5959),
                u = a(514),
                d = a(8526),
                m = a(5521),
                _ = a(7363),
                g = a.n(_),
                b = a(3905),
                v = a(1354),
                p = a(5888),
                h = a(9768),
                y = a(9766),
                k = a(2374);
            const E = 'Customization_base_5c',
                f = 'Customization_styleTitle_a0',
                w = 'Customization_styleDescription_ae',
                C = 'Customization_vehicleInfoStyle_03',
                x = 'Customization_vehicleTypeStyle_db',
                R = ({ rareBonus: e, texts: t }) =>
                    e
                        ? g().createElement(
                              'div',
                              { className: E },
                              g().createElement(y.z, {
                                  text: t.rareOverlayStyleTitle,
                                  binding: { style: e.label },
                                  classMix: f,
                              }),
                              g().createElement(y.z, {
                                  text: t.rareOverlayStyleDescription,
                                  binding: {
                                      vehicleInfo: g().createElement(k.e, {
                                          vehicleName: e.vehicle3DStyleName,
                                          vehicleLvl: e.level,
                                          isElite: e.isElite,
                                          vehicleType: e.type,
                                          classNames: { base: C, type: x },
                                      }),
                                  },
                                  classMix: w,
                              }),
                          )
                        : null,
                N = 'Lootbox_base_88',
                B = ({ rareBonus: e }) => (e ? g().createElement('div', { className: N }, e.label) : null),
                A = 'Vehicle_base_ee',
                O = 'Vehicle_vehicleInfo_8d',
                S = 'Vehicle_vehicleType_2a',
                L = ({ rareBonus: e }) =>
                    e
                        ? g().createElement(
                              'div',
                              { className: A },
                              g().createElement(k.e, {
                                  vehicleName: e.label,
                                  vehicleLvl: e.level,
                                  isElite: e.isElite,
                                  vehicleType: e.type,
                                  classNames: { base: O, type: S },
                              }),
                          )
                        : null,
                T = 'RewardDescription_base_b3',
                $ = ({ rareBonus: e, texts: t }) =>
                    e
                        ? g().createElement(
                              'div',
                              { className: T },
                              (() => {
                                  switch (e.name) {
                                      case G.vehicle:
                                          return g().createElement(L, { rareBonus: e });
                                      case G.lootbox:
                                          return g().createElement(B, { rareBonus: e });
                                      case G.customizations:
                                          return g().createElement(R, { rareBonus: e, texts: t });
                                      default:
                                          return (console.warn(`Unsupported bonus: ${e.name}`), null);
                                  }
                              })(),
                          )
                        : null,
                z = 'RareRewardOverlay_base_8d',
                P = 'RareRewardOverlay_rewardDescription_ff',
                I = 'RareRewardOverlay_title_c3',
                H = 'RareRewardOverlay_continueButton_8f',
                M = 'RareRewardOverlay_closeButton_2d',
                D = 'RareRewardOverlay_media_1f',
                F = 'RareRewardOverlay_media__image_56';
            let G;
            !(function (e) {
                ((e.vehicle = 'vehicles'), (e.lootbox = 'lootBox'), (e.customizations = 'customizations'));
            })(G || (G = {}));
            const K = ({
                res: e,
                rareBonus: t,
                texts: a,
                minimized: n,
                controls: { onClose: y, onPlay: k, onEnded: E },
            }) => {
                const f = (0, _.useState)(!1),
                    w = f[0],
                    C = f[1],
                    x = (0, _.useState)(!1),
                    R = x[0],
                    N = x[1],
                    B = (0, _.useRef)(null);
                (0, _.useEffect)(() => {
                    t && l.graphicsQuality.isHigh() && (u.hY.sound(e.sound), N(!0), k());
                }, [t]);
                (0, d.gd)(
                    m.n.ESCAPE,
                    () => {
                        w && y();
                    },
                    !0,
                    !0,
                );
                const A = (0, v._)(b.p6);
                return (
                    (0, p.L)(B),
                    (0, h.G)(B, R, n),
                    (0, _.useEffect)(() => {
                        if (l.graphicsQuality.isLow()) return (0, c.F)(() => C(!0), 300);
                    }, []),
                    g().createElement(
                        'div',
                        { className: z },
                        l.graphicsQuality.isHigh()
                            ? g().createElement(o.n, {
                                  style: A,
                                  src: e.video,
                                  ref: B,
                                  autoplay: !0,
                                  onEnded: () => {
                                      (N(!1), C(!0), E());
                                  },
                                  className: D,
                              })
                            : g().createElement('div', {
                                  className: r()(D, F),
                                  style: { backgroundImage: `url(${e.image})` },
                              }),
                        w &&
                            g().createElement(
                                g().Fragment,
                                null,
                                g().createElement(
                                    'div',
                                    { className: P },
                                    g().createElement('div', { className: I }, a.rareOverlayTitle),
                                    g().createElement($, { rareBonus: t, texts: a }),
                                    g().createElement(
                                        s.u5,
                                        { type: s.L$.primary, size: s.qE.medium, mixClass: H, onClick: y },
                                        a.rareOverlayButtonContinue,
                                    ),
                                ),
                                g().createElement(
                                    'div',
                                    { className: M },
                                    g().createElement(i.A, {
                                        caption: a.closeButton,
                                        type: 'close',
                                        side: 'right',
                                        onClick: y,
                                    }),
                                ),
                            ),
                    )
                );
            };
        },
        7039: (e, t, a) => {
            a.d(t, { s: () => _ });
            var n = a(6483),
                r = a.n(n),
                s = a(7412),
                i = a(514),
                o = a(7363),
                c = a.n(o),
                l = a(5888);
            const u = 'RareRewardVideo_base_43',
                d = 'RareRewardVideo_video_09',
                m = 'RareRewardVideo_video__show_e9',
                _ = ({ className: e, style: t = {}, src: a, sound: n, show: _, timer: g, onEnded: b }) => {
                    const v = (0, o.useRef)(null),
                        p = (0, o.useRef)(!1);
                    return (
                        (0, l.L)(v),
                        (0, o.useEffect)(() => {
                            var e;
                            _ && ((p.current = !1), null == (e = v.current) || e.play(), i.hY.sound(n));
                        }, [_, n]),
                        (0, o.useEffect)(() => {
                            var e, t;
                            const a = (null == (e = v.current) ? void 0 : e.getDuration()) || 0;
                            null == (t = v.current) ||
                                t.onChangeTime((e) => {
                                    if (p && !p.current) {
                                        const t = e.currentTime;
                                        if (_ && a && t && a - t <= g.remainder)
                                            return ((p.current = !0), void g.next());
                                    }
                                });
                        }, [v.current, _]),
                        c().createElement(
                            'div',
                            { className: r()(u, e), style: t },
                            c().createElement(s.n, { className: r()(d, _ && m), src: a, ref: v, onEnded: b }),
                        )
                    );
                };
        },
        6328: (e, t, a) => {
            a.d(t, { F: () => O });
            var n = a(6483),
                r = a.n(n),
                s = a(7363),
                i = a.n(s),
                o = a(295),
                c = a(7412),
                l = a(514),
                u = a(5834),
                d = a(3905),
                m = a(1354),
                _ = a(5888),
                g = a(9768),
                b = a(198);
            const v = 'RewardBackground_base_41',
                p = 'RewardBackground_image_f9',
                h = 'RewardBackground_image__show_1f',
                y = 'RewardBackground_video_e4',
                k = 'RewardBackground_video__show_f7',
                E = 'RewardBackground_video__hide_ba',
                f = 'initial',
                w = 'video',
                C = 'image',
                x = ({ className: e, res: t, enabled: a, minimized: n, onPlay: x, onEnded: R }) => {
                    const N = (0, s.useState)(f),
                        B = N[0],
                        A = N[1],
                        O = (0, s.useRef)(null),
                        S = (0, o.v)(b.Kg, (e) => e.value),
                        L = (0, u.P)(S),
                        T = (0, m._)(d.p6),
                        $ = () => {
                            (B !== C && A(C), b.Kg.send({ type: b.QK.toRewards }));
                        };
                    return (
                        (0, s.useEffect)(() => {
                            switch (L) {
                                case b.B1.skip:
                                    A(C);
                                    break;
                                case b.A_:
                                    (A(w),
                                        a &&
                                            (() => {
                                                const e = O.current;
                                                (null == e || e.play(), l.hY.sound(t.sound));
                                            })());
                                    break;
                                case b.Az:
                                    (A(C),
                                        a &&
                                            (() => {
                                                const e = setTimeout($, 400);
                                            })());
                            }
                        }, [L]),
                        (0, g.G)(O, a && B === w, n),
                        (0, _.L)(O),
                        i().createElement(
                            'div',
                            { className: r()(v, e) },
                            i().createElement('div', {
                                className: r()(p, B === C && h),
                                style: { backgroundImage: `url(${t.image})` },
                            }),
                            i().createElement(c.n, {
                                ref: O,
                                className: r()(y, B === w && k, B === C && E),
                                style: T,
                                src: t.video,
                                onEnded: () => {
                                    ($(), R());
                                },
                                onPlay: x,
                            }),
                        )
                    );
                },
                R = 'RewardBackgroundsSwitch_base_dd',
                N = 'RewardBackgroundsSwitch_background_02',
                B = 'RewardBackgroundsSwitch_background__show_9d',
                A = 'RewardBackgroundsSwitch_background__hide_13',
                O = ({ minimized: e, activeType: t, res: a, onEnded: n, onPlay: s, className: o }) =>
                    i().createElement(
                        'div',
                        { className: r()(R, o) },
                        Object.keys(a).map((o) => {
                            const c = t === o;
                            return i().createElement(x, {
                                key: o,
                                className: r()(N, c ? B : A),
                                enabled: c,
                                minimized: e,
                                res: Object.assign({}, a[o]),
                                onPlay: s,
                                onEnded: n,
                            });
                        }),
                    );
        },
        9108: (e, t, a) => {
            a.d(t, { _: () => c });
            var n = a(6483),
                r = a.n(n),
                s = a(7363),
                i = a.n(s);
            const o = 'RewardIcon_base_f2',
                c = ({ icon: e, sizes: t, className: a = '' }) =>
                    i().createElement('div', {
                        className: r()(o, a),
                        style: { backgroundImage: `url(${e})`, width: t.width, height: t.height },
                    });
        },
        46: (e, t, a) => {
            a.d(t, { Q: () => g });
            var n = a(6483),
                r = a.n(n),
                s = a(2862),
                i = a(3649),
                o = a(7363),
                c = a.n(o),
                l = a(114),
                u = a(3905),
                d = a(9108);
            const m = {
                    base: 'Reward_base_d1',
                    icon: 'Reward_icon_b2',
                    count: 'Reward_count_ee',
                    count__tokenOffset: 'Reward_count__tokenOffset_49',
                    overlay: 'Reward_overlay_5b',
                    overlay__big: 'Reward_overlay__big_9a',
                },
                _ = (e, t) => {
                    const a = e.name,
                        n = e.isRent;
                    return a === l.tB.vehicles && t === s.h2.Big
                        ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles' + (n ? '_rent' : '')
                        : a === l.tB.customizations && t === s.h2.Big
                          ? (0, l.ry)(Object.assign({}, e, { id: 0 }), t)
                          : (0, l.ry)(e, t);
                },
                g = ({ reward: e, sizes: t, countText: a, className: n = '' }) => {
                    const s = e.count,
                        o = e.name,
                        g = e.overlayType,
                        b =
                            o === l.tB.premiumPlus
                                ? {
                                      height: t.premDaysHeight || t.rewardHeight,
                                      width: t.premDaysWidth || t.rewardWidth,
                                  }
                                : { height: t.rewardHeight, width: t.rewardWidth };
                    return c().createElement(
                        'div',
                        { className: r()(m.base, n) },
                        c().createElement(d._, { className: m.icon, icon: _(e, t.imageSize), sizes: b }),
                        s > 1 &&
                            c().createElement(
                                'div',
                                {
                                    className: r()(m.count, o === l.tB.tokens && m.count__tokenOffset),
                                    style: { fontSize: t.countHeight },
                                },
                                (0, i.uF)(a, { count: s }),
                            ),
                        g &&
                            c().createElement('div', {
                                className: r()(m.overlay, !u.LI.includes(o) && m[`overlay__${t.imageSize}`]),
                                style: { backgroundImage: `url(${(0, l.rj)(t.imageSize, o, g)})` },
                            }),
                    );
                };
        },
        7672: (e, t, a) => {
            a.d(t, { u: () => i, y: () => s });
            var n = a(4736);
            const r = [n.G.Rare, n.G.Epic],
                s = (e) => !e.isCompensation && r.includes(e.rarity),
                i = () => new Date().getTime();
        },
        7051: (e, t, a) => {
            a.d(t, { G: () => i });
            var n = a(9653),
                r = a(2039),
                s = a(7363);
            const i = (e) => () => {
                const t = e.steps,
                    a = e.autoStart,
                    i = void 0 === a || a,
                    o = (0, s.useRef)(0),
                    c = (0, s.useRef)(null),
                    l = (0, s.useRef)('idle'),
                    u = (0, n.q)(),
                    d = (function () {
                        const e = (0, s.useRef)(0);
                        return (
                            (0, r.k)(() => {
                                window.clearTimeout(e.current);
                            }),
                            (0, s.useMemo)(
                                () => ({
                                    run: (t, a) => {
                                        (window.clearTimeout(e.current),
                                            (e.current = window.setTimeout(() => {
                                                ((e.current = 0), t());
                                            }, a)));
                                    },
                                    clear: () => {
                                        (window.clearTimeout(e.current), (e.current = 0));
                                    },
                                    get isRunning() {
                                        return 0 !== e.current;
                                    },
                                }),
                                [],
                            )
                        );
                    })(),
                    m = (function () {
                        const e = (0, s.useRef)(0);
                        return (
                            (0, r.k)(() => {
                                window.cancelAnimationFrame(e.current);
                            }),
                            (0, s.useMemo)(
                                () => ({
                                    run: (t) => {
                                        (window.cancelAnimationFrame(e.current),
                                            (e.current = window.requestAnimationFrame(() => {
                                                e.current = window.requestAnimationFrame(() => {
                                                    (t(), (e.current = 0));
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
                    })(),
                    _ = (0, s.useMemo)(() => {
                        const e = () => {
                            if (o.current >= t.length) return ((l.current = 'end'), void u.trigger('end'));
                            const a = t[o.current],
                                n = t[o.current - 1],
                                r = (n && !n.pauseNextSteps && n.duration) || 0,
                                s = (a.delay || 0) + r;
                            (d.run(() => {
                                if (!c.current)
                                    return void console.error(
                                        `${t[o.current].name} step don't know on what rootRef it should be set`,
                                    );
                                const a = t[o.current];
                                if ((c.current.classList.add(a.name), u.trigger('change', a), a.pauseNextSteps))
                                    return ((l.current = 'paused'), u.trigger('pause'), void o.current++);
                                (o.current++, e());
                            }, s),
                                (l.current = 'running'));
                        };
                        return {
                            rootRef: c,
                            steps: t,
                            events: { on: u.on, off: u.off },
                            start: () => {
                                (e(), u.trigger('start'));
                            },
                            resume: () => {
                                'paused' === l.current
                                    ? (e(), u.trigger('resume'))
                                    : console.warn(
                                          'api.resume() should be called only after paused animation, ignore resume() call',
                                      );
                            },
                            skipAll: () => {
                                (d.clear(),
                                    m.run(() => {
                                        ((l.current = 'skip'),
                                            u.trigger('skipAll'),
                                            t.forEach((e) => {
                                                c.current
                                                    ? c.current.classList.add(`${e.name}__skip`)
                                                    : console.error(
                                                          `${e} tried to be set, but rootRef was not received in api`,
                                                      );
                                            }),
                                            (l.current = 'end'),
                                            u.trigger('end'));
                                    }));
                            },
                            reset: () => {
                                (t.forEach((e) => {
                                    c.current
                                        ? (c.current.classList.remove(e.name),
                                          c.current.classList.remove(`${e.name}__skip`),
                                          u.trigger('reset'))
                                        : console.error(`${e} tried to be set, but rootRef was not received in api`);
                                }),
                                    (o.current = 0));
                            },
                        };
                    }, [d, o, u, m, t]);
                return (
                    (0, r.b)(() => {
                        i && _.start();
                    }),
                    _
                );
            };
        },
        2914: (e, t, a) => {
            a.d(t, { H: () => r });
            var n = a(7363);
            const r = (e) => {
                const t = (0, n.useContext)(e);
                if (null === t)
                    throw new Error(
                        'useAnimationApi was called in component, which is not wrapped in MultipleAwardProvider',
                    );
                return t;
            };
        },
        9744: (e, t, a) => {
            a.d(t, { H: () => d });
            var n = a(7522),
                r = a(5834),
                s = a(7363),
                i = a(7030),
                o = a(198);
            const c = { opacity: 1, display: 'flex', config: { duration: 100, easing: n.Z.easeInOutCubic } },
                l = { opacity: 0, config: { duration: 200, easing: n.Z.easeOutCubic } },
                u = { opacity: 1, immediate: !0 },
                d = (e, t) => {
                    const a = (0, i.useSpring)(() => ({ from: { opacity: 0, display: 'none' } })),
                        n = a[0],
                        d = a[1],
                        m = (0, i.useSpring)(() => ({ from: { opacity: 1 } })),
                        _ = m[0],
                        g = m[1];
                    return (
                        (0, s.useEffect)(() => {
                            switch ((0, r.P)(e)) {
                                case o.B1.preparation:
                                    g.start(Object.assign({}, l, { onRest: t }));
                                    break;
                                case o.B1.waiting:
                                    d.start(c);
                                    break;
                                case o.Az:
                                case o.A_:
                                    g.start(u);
                            }
                        }, [e]),
                        (0, s.useMemo)(() => ({ loadingStyle: n, contentStyle: _ }), [])
                    );
                };
        },
        9210: (e, t, a) => {
            a.d(t, { s: () => s });
            var n = a(7363),
                r = a(198);
            const s = (e, t, a) => {
                ((0, n.useEffect)(() => {
                    a === r.B1.preparation && t
                        ? r.Kg.send({ type: r.QK.toWaiting })
                        : a !== r.B1.waiting || t || r.Kg.send({ type: r.QK.toOpen });
                }, [t, a]),
                    (0, n.useEffect)(() => {
                        e ? r.Kg.send({ type: r.QK.toSkip }) : r.Kg.send({ type: r.QK.toOpen });
                    }, []));
            };
        },
        6486: (e, t, a) => {
            a.d(t, { e: () => r });
            var n = a(4736);
            const r = { [n.G.Common]: n.G.Common, [n.G.Rare]: n.G.Rare };
        },
        2333: (e, t, a) => {
            a.d(t, { q: () => u });
            var n = a(6483),
                r = a.n(n),
                s = a(9766),
                i = a(7363),
                o = a.n(i);
            const c = 'QuantityTitle_base_06',
                l = 'QuantityTitle_count_a9',
                u = ({ text: e, boxesCount: t = 0, className: a }) =>
                    o().createElement(
                        'div',
                        { className: r()(c, a) },
                        t > 0
                            ? o().createElement(s.z, {
                                  text: e,
                                  binding: { boxesCount: o().createElement('span', { className: l }, t) },
                              })
                            : e,
                    );
        },
        8821: (e, t, a) => {
            a.d(t, { o: () => d });
            var n = a(6483),
                r = a.n(n),
                s = a(5461),
                i = a(7363),
                o = a.n(i);
            const c = 'AnimationCheckbox_base_53',
                l = 'AnimationCheckbox_base__disabled_22',
                u = 'AnimationCheckbox_text_28',
                d = ({ className: e, isActive: t, text: a, size: n = s.yB.large, disable: i = !1, onClick: d }) =>
                    o().createElement(
                        'div',
                        { className: r()(c, i && l, e) },
                        o().createElement(
                            s.XZ,
                            {
                                isDisabled: i,
                                size: n,
                                isChecked: t,
                                onClick: d,
                                type: s.Rh.main,
                                contentStyles: { paddingTop: n === s.yB.extraLarge ? '4rem' : '0' },
                            },
                            o().createElement('span', { className: u }, a),
                        ),
                    );
        },
        3597: (e, t, a) => {
            a.d(t, { a: () => u });
            var n = a(6483),
                r = a.n(n),
                s = a(7363),
                i = a.n(s);
            const o = 'Loader_base_ed',
                c = 'Loader_icon_d2',
                l = 'Loader_text_c4',
                u = ({ img: e, text: t, className: a }) =>
                    i().createElement(
                        'div',
                        { className: r()(o, a) },
                        i().createElement('div', { className: c, style: { backgroundImage: `url(${e})` } }),
                        i().createElement('div', { className: l }, t),
                    );
        },
        3633: (e, t, a) => {
            a.d(t, { k: () => u });
            var n = a(6483),
                r = a.n(n),
                s = a(514),
                i = a(7363),
                o = a.n(i);
            const c = 'LoupeButton_base_bb',
                l = 'LoupeButton_icon_07',
                u = ({ onClick: e, icon: t, className: a = '' }) =>
                    o().createElement(
                        'div',
                        {
                            className: r()(c, a),
                            onMouseEnter: () => {
                                s.hY.highlight();
                            },
                            onClick: e,
                        },
                        o().createElement('div', {
                            className: r()(l, t.className),
                            style: { backgroundImage: `url(${t.img})` },
                        }),
                    );
        },
        2984: (e, t, a) => {
            a.d(t, { i: () => g });
            var n = a(6483),
                r = a.n(n),
                s = a(514),
                i = a(7363),
                o = a.n(i);
            const c = 'PurchaseButton_base_86',
                l = 'PurchaseButton_wrapper_5d',
                u = 'PurchaseButton_image_46',
                d = 'PurchaseButton_textBlock_52',
                m = 'PurchaseButton_text_56',
                _ = 'PurchaseButton_icon_a3',
                g = ({ text: e, image: t, sounds: a, icon: n, onClick: i, className: g }) =>
                    o().createElement(
                        'div',
                        {
                            className: r()(c, g),
                            onClick: () => {
                                (s.hY.click(), s.hY.sound(a.purchaseClick), i());
                            },
                        },
                        o().createElement(
                            'div',
                            {
                                className: l,
                                onMouseEnter: () => {
                                    s.hY.sound(a.purchaseHover);
                                },
                            },
                            o().createElement('div', { className: u, style: { backgroundImage: `url(${t})` } }),
                            o().createElement(
                                'div',
                                { className: d },
                                o().createElement('div', { className: m }, e),
                                n &&
                                    o().createElement('div', { className: _, style: { backgroundImage: `url(${n})` } }),
                            ),
                        ),
                    );
        },
        2374: (e, t, a) => {
            a.d(t, { e: () => d });
            var n = a(6483),
                r = a.n(n),
                s = a(9690),
                i = a(3649),
                o = a(7363),
                c = a.n(o);
            const l = 'VehicleInfo_base_18',
                u = 'VehicleInfo_type_05',
                d = ({ vehicleLvl: e, vehicleName: t, vehicleType: a, isElite: n, classNames: o }) =>
                    c().createElement(
                        'div',
                        { className: r()(l, null == o ? void 0 : o.base) },
                        (0, s.cg)(e),
                        c().createElement('div', {
                            className: r()(u, null == o ? void 0 : o.type),
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.large.$dyn(`${(0, i.BN)(a)}${n ? '_elite' : ''}`)})`,
                            },
                        }),
                        t,
                    );
        },
        9605: (e, t, a) => {
            a.d(t, { C: () => s, D: () => r });
            var n = a(2691);
            const r = (e, t = '') => {
                    if (!t) return { video: '', image: '', sound: '' };
                    const a = `lootbox.events.${e}.rarityOverlay.${t}`,
                        r = `gui.maps.icons.lootBoxSystem.events.${e}.rarityOverlay.${t}`,
                        s = `gui_lb_video_appear_${e}_${t}`;
                    return { video: (0, n.R)(R.videos, a), image: (0, n.R)(R.images, r), sound: s };
                },
                s = (e, t = '') => '' !== r(e, t).video;
        },
        5888: (e, t, a) => {
            a.d(t, { L: () => r });
            var n = a(7363);
            const r = (e) => {
                (0, n.useEffect)(() => {
                    const t = e.current;
                    return () => {
                        t && (t.domRef.src = '');
                    };
                }, [e]);
            };
        },
        9768: (e, t, a) => {
            a.d(t, { G: () => r });
            var n = a(7363);
            const r = (e, t = !0, a) => {
                (0, n.useEffect)(() => {
                    const n = e.current;
                    if (t && n) return a ? n.pause() : n.play();
                }, [a, e]);
            };
        },
        4736: (e, t, a) => {
            let n, r;
            (a.d(t, { G: () => r }),
                (function (e) {
                    ((e.Heavy = 'heavyTank'),
                        (e.Medium = 'mediumTank'),
                        (e.Light = 'lightTank'),
                        (e.Spg = 'SPG'),
                        (e.AtSpg = 'AT-SPG'));
                })(n || (n = {})),
                (function (e) {
                    ((e.Common = 'common'), (e.Rare = 'rare'), (e.Epic = 'epic'));
                })(r || (r = {})));
        },
    },
]);
