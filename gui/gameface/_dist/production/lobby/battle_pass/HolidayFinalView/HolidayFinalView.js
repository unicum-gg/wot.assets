(() => {
    'use strict';
    var __webpack_modules__ = {
            7109: (e, u, t) => {
                t.d(u, { L$: () => c.L, qE: () => c.q, u5: () => d });
                var n = t(9849),
                    a = t.n(n),
                    r = t(4170),
                    s = t(4029),
                    i = t(7363),
                    o = t.n(i),
                    l = t(6290),
                    c = t(2262);
                const d = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: n,
                    onMouseEnter: d,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: F,
                    isFocused: D = !1,
                    type: C = c.L.primary,
                    soundHover: b = 'highlight',
                    soundClick: B = 'play',
                }) => {
                    const g = (0, i.useRef)(null),
                        p = (0, i.useState)(D),
                        h = p[0],
                        v = p[1],
                        f = (0, i.useState)(!1),
                        w = f[0],
                        y = f[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                h && null !== g.current && !g.current.contains(e.target) && v(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, i.useEffect)(() => {
                            v(D);
                        }, [D]),
                        o().createElement(
                            'div',
                            {
                                ref: g,
                                className: a()(
                                    l.Z.base,
                                    l.Z[`base__${C}`],
                                    t && l.Z.base__disabled,
                                    u && l.Z[`base__${u}`],
                                    h && l.Z.base__focus,
                                    w && l.Z.base__highlightActive,
                                    n,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== b && (0, s.G)(b), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    t || (m && m(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    if (t) return;
                                    const u = e.button === r.t.LEFT;
                                    (null !== B && u && (0, s.G)(B),
                                        _ && _(e),
                                        D && (t || (g.current && (g.current.focus(), v(!0)))),
                                        u && y(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (A && A(e), y(!1));
                                },
                                onClick: function (e) {
                                    t || (F && F(e));
                                },
                            },
                            C !== c.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: l.Z.back }),
                                    o().createElement('span', { className: l.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: a()(l.Z.state, l.Z.state__default) },
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
            2262: (e, u, t) => {
                t.d(u, { L: () => n, q: () => a });
                let n = (function (e) {
                        return (
                            (e.main = 'main'),
                            (e.primary = 'primary'),
                            (e.primaryGreen = 'primaryGreen'),
                            (e.primaryRed = 'primaryRed'),
                            (e.secondary = 'secondary'),
                            (e.ghost = 'ghost'),
                            e
                        );
                    })({}),
                    a = (function (e) {
                        return (
                            (e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            e
                        );
                    })({});
            },
            1602: (e, u, t) => {
                t.d(u, { A: () => a });
                var n = t(828);
                const a = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? n.B3.GOLD : n.B3.INTEGRAL;
                        })(u),
                        a = n.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== a ? a : null;
                };
            },
            2616: (e, u, t) => {
                t.d(u, { z: () => l });
                var n = t(9849),
                    a = t.n(n),
                    r = t(6758),
                    s = t(7363),
                    i = t.n(s),
                    o = t(4880);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: n = r.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && e ? (0, r.WU)(u, e) : u;
                    return i().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            i().createElement(
                                'div',
                                { className: a()(o.Z.base, t), key: `${u}-${l}` },
                                (0, r.Uw)(u, n, e).map((e, u) =>
                                    i().createElement(s.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            5603: (e, u, t) => {
                t.d(u, { z: () => n.z });
                var n = t(2616);
                t(1749);
            },
            1749: (e, u, t) => {
                t(6758);
            },
            7436: (e, u, t) => {
                t.d(u, { h: () => _ });
                var n = t(9849),
                    a = t.n(n);
                const r =
                    (e, u) =>
                    (...t) => {
                        if (e(...t)) return u(...t);
                    };
                var s = t(4170),
                    i = t(4029),
                    o = t(7363),
                    l = t.n(o);
                const c = {
                        base: 'IconButton_base_edac2',
                        base__hovered: 'IconButton_base__hovered_bedf8',
                        base__disabled: 'IconButton_base__disabled_f97d3',
                        icon: 'IconButton_icon_e81ef',
                        icon__preview: 'IconButton_icon__preview_d420c',
                        icon__compare: 'IconButton_icon__compare_e0c48',
                        icon__small: 'IconButton_icon__small_bdc70',
                        icon__normal: 'IconButton_icon__normal_e10ba',
                        base__mouseDown: 'IconButton_base__mouseDown_af6e6',
                        label: 'IconButton_label_bb533',
                        label__small: 'IconButton_label__small_a0a45',
                        label__normal: 'IconButton_label__normal_ecd39',
                        base__visibleLabel: 'IconButton_base__visibleLabel_ed77c',
                    },
                    d = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
                        'soundHover',
                        'soundClick',
                        'size',
                        'onClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseDown',
                        'onMouseUp',
                        'onFocus',
                        'onBlur',
                    ];
                function E() {
                    return (
                        (E = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        E.apply(null, arguments)
                    );
                }
                const _ = (e) => {
                    let u = e.type,
                        t = e.children,
                        n = e.className,
                        _ = e.classNames,
                        m = e.disabled,
                        A = void 0 !== m && m,
                        F = e.isVisibleLabel,
                        D = void 0 !== F && F,
                        C = e.soundHover,
                        b = void 0 === C ? R.sounds.highlight() : C,
                        B = e.soundClick,
                        g = void 0 === B ? R.sounds.play() : B,
                        p = e.size,
                        h = void 0 === p ? 'normal' : p,
                        v = e.onClick,
                        f = e.onMouseEnter,
                        w = e.onMouseLeave,
                        y = e.onMouseDown,
                        S = e.onMouseUp,
                        T = e.onFocus,
                        k = e.onBlur,
                        P = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== u.indexOf(n)) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, d);
                    const N = (0, o.useState)(!1),
                        x = N[0],
                        M = N[1],
                        L = (0, o.useState)(!1),
                        O = L[0],
                        I = L[1],
                        z = (0, o.useRef)(null),
                        U = () => !1 === A,
                        H = (e) => U() && ((e) => e.button === s.t.LEFT)(e),
                        G = r(U, (e) => {
                            null == v || v(e);
                        }),
                        $ = r(H, (e) => {
                            (M(!0), null == y || y(e), g && (0, i.G)(g));
                        }),
                        W = r(H, (e) => {
                            (M(!1), null == S || S(e));
                        }),
                        Z = r(U, (e) => {
                            (I(!0), null == f || f(e), b && (0, i.G)(b));
                        }),
                        j = r(U, (e) => {
                            null == T || T(e);
                        }),
                        q = r(U, (e) => {
                            null == k || k(e);
                        });
                    return l().createElement(
                        'div',
                        E(
                            {
                                ref: z,
                                className: a()(
                                    c.base,
                                    A && c.base__disabled,
                                    D && c.base__visibleLabel,
                                    !A && x && c.base__mouseDown,
                                    !A && O && c.base__hovered,
                                    n,
                                ),
                                onClick: G,
                                onMouseEnter: Z,
                                onMouseLeave: (e) => {
                                    (I(!1), M(!1), null == w || w(e));
                                },
                                onMouseDown: $,
                                onMouseUp: W,
                                onFocus: j,
                                onBlur: q,
                            },
                            P,
                        ),
                        l().createElement('div', {
                            className: a()(c.icon, c[`icon__${h}`], c[`icon__${u}`], null == _ ? void 0 : _.icon),
                        }),
                        t &&
                            l().createElement(
                                'div',
                                { className: a()(c.label, c[`label__${h}`], null == _ ? void 0 : _.label) },
                                t,
                            ),
                    );
                };
            },
            397: (e, u, t) => {
                t.d(u, { Y: () => o });
                var n = t(7475),
                    a = t(7363),
                    r = t(1958),
                    s = t(9478);
                const i = (function (e = n.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign({ width: u, height: t }, (0, s.T)(u, t, r.j));
                    })(),
                    o = (0, a.createContext)(i);
            },
            68: (e, u, t) => {
                (t(7475), t(7363), t(397));
            },
            5191: (e, u, t) => {
                var n = t(7363),
                    a = t(3034),
                    r = t(397);
                const s = ['children'];
                (0, n.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== u.indexOf(n)) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, s);
                    const i = (0, n.useContext)(r.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        d = i.small,
                        E = i.extraSmall,
                        _ = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        D = i.extraSmallWidth,
                        C = i.extraLargeHeight,
                        b = i.largeHeight,
                        B = i.mediumHeight,
                        g = i.smallHeight,
                        p = i.extraSmallHeight,
                        h = { extraLarge: C, large: b, medium: B, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && E) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, a.H)(u, t, h);
                        if (t.largeWidth && m) return (0, a.H)(u, t, h);
                        if (t.mediumWidth && A) return (0, a.H)(u, t, h);
                        if (t.smallWidth && F) return (0, a.H)(u, t, h);
                        if (t.extraSmallWidth && D) return (0, a.H)(u, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && b) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && g) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                });
            },
            3034: (e, u, t) => {
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
            5579: (e, u, t) => {
                t.d(u, { YN: () => n.Y });
                (t(5191), t(68));
                var n = t(397);
            },
            1958: (e, u, t) => {
                t.d(u, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            9478: (e, u, t) => {
                t.d(u, { T: () => n });
                function n(e, u, t) {
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
            },
            3359: (e, u, t) => {
                t.d(u, { Q: () => d });
                var n = t(9849),
                    a = t.n(n),
                    r = t(7363),
                    s = t.n(r),
                    i = t(1672),
                    o = t(2486),
                    l = t(4692),
                    c = t(5261);
                const d = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: n = o.h2.Big,
                    special: r,
                    value: d,
                    valueType: E,
                    title: _,
                    style: m,
                    className: A,
                    classNames: F,
                    tooltipArgs: D,
                    periodicIconTooltipArgs: C,
                }) => {
                    const b = (0, l.c$)(n, r),
                        B = (0, l.i2)(r),
                        g = (0, l.m9)(d, E);
                    return s().createElement(
                        'div',
                        {
                            className: a()(c.Z.base, c.Z[`base__${n}`], o.oy.includes(e) && c.Z.base__normalize, A),
                            style: m,
                        },
                        s().createElement(
                            i.l,
                            { tooltipArgs: D, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: a()(c.Z.image, null == F ? void 0 : F.image) },
                                    b &&
                                        s().createElement('div', {
                                            className: a()(c.Z.highlight, null == F ? void 0 : F.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${b}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: a()(c.Z.icon, null == F ? void 0 : F.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    B &&
                                        s().createElement('div', {
                                            className: a()(c.Z.overlay, null == F ? void 0 : F.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${B}_overlay)`,
                                            },
                                        }),
                                ),
                                g &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: a()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                E === o.$h.MULTI && c.Z.info__multi,
                                                null == F ? void 0 : F.info,
                                            ),
                                        },
                                        g,
                                    ),
                                _ && s().createElement('div', { className: c.Z.title }, _),
                            ),
                        ),
                        t &&
                            s().createElement(
                                i.l,
                                { tooltipArgs: C },
                                s().createElement('div', {
                                    className: a()(c.Z.timer, null == F ? void 0 : F.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2486: (e, u, t) => {
                t.d(u, { $h: () => r, A2: () => i, E4: () => n, h2: () => a, kK: () => s, oy: () => l, sh: () => o });
                let n = (function (e) {
                        return (
                            (e.Items = 'items'),
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
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.FreeXp = 'freeXP'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattlePassSelectToken = 'battlePassSelectToken'),
                            (e.BattlePassTicket = 'lootBox_commonTicket'),
                            (e.BattlePassTaler = 'bptaler'),
                            (e.StyleProgressToken = 'styleProgressToken'),
                            (e.TmanToken = 'tmanToken'),
                            (e.NaturalCover = 'naturalCover'),
                            (e.BpCoin = 'bpcoin'),
                            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.DeluxeGift = 'deluxe_gift'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                            (e.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                            (e.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                            (e.OptionalDevice = 'optionalDevice'),
                            (e.EquipCoin = 'equipCoin'),
                            (e.LootBox = 'lootBox'),
                            (e.BrCoin = 'brcoin'),
                            (e.Attachment = 'attachment'),
                            e
                        );
                    })({}),
                    a = (function (e) {
                        return (
                            (e.Big = 'big'),
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
                            (e.S48x48 = 's48x48'),
                            e
                        );
                    })({}),
                    r = (function (e) {
                        return (
                            (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'),
                            e
                        );
                    })({}),
                    s = (function (e) {
                        return (
                            (e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            e
                        );
                    })({}),
                    i = (function (e) {
                        return ((e.BATTLE_BOOSTER = 'battleBooster'), e);
                    })({}),
                    o = (function (e) {
                        return (
                            (e.ATTACHMENT_RARE = 'rare'),
                            (e.ATTACHMENT_EPIC = 'epic'),
                            (e.ATTACHMENT_LEGENDARY = 'legendary'),
                            (e.BATTLE_BOOSTER = 'battleBooster'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            e
                        );
                    })({});
                const l = [n.Attachment];
            },
            4692: (e, u, t) => {
                t.d(u, { c$: () => D, i2: () => C, m9: () => b, p3: () => d, pI: () => A, ry: () => m });
                var n = t(1602),
                    a = t(7363),
                    r = t.n(a),
                    s = t(2486);
                const i = [
                        s.E4.Items,
                        s.E4.Equipment,
                        s.E4.Xp,
                        s.E4.XpFactor,
                        s.E4.Blueprints,
                        s.E4.BlueprintsAny,
                        s.E4.Goodies,
                        s.E4.Berths,
                        s.E4.Slots,
                        s.E4.Tokens,
                        s.E4.CrewSkins,
                        s.E4.CrewBooks,
                        s.E4.Customizations,
                        s.E4.CreditsFactor,
                        s.E4.TankmenXp,
                        s.E4.TankmenXpFactor,
                        s.E4.FreeXpFactor,
                        s.E4.BattleToken,
                        s.E4.LootBox,
                        s.E4.PremiumUniversal,
                        s.E4.NaturalCover,
                        s.E4.BpCoin,
                        s.E4.BattlePassSelectToken,
                        s.E4.BattlaPassFinalAchievement,
                        s.E4.BattleBadge,
                        s.E4.BattlePassTicket,
                        s.E4.BonusX5,
                        s.E4.CrewBonusX3,
                        s.E4.EpicSelectToken,
                        s.E4.Comp7TokenWeeklyReward,
                        s.E4.DeluxeGift,
                        s.E4.ModernizedDevicesT1Gift,
                        s.E4.ModernizedDevicesT2Gift,
                        s.E4.ModernizedDevicesT3Gift,
                        s.E4.BattleBoosterGift,
                        s.E4.OptionalDevice,
                        s.E4.Attachment,
                    ],
                    o = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints, s.E4.EquipCoin],
                    c = [s.E4.PremiumPlus, s.E4.Premium],
                    d = (e) =>
                        i.includes(e)
                            ? s.$h.MULTI
                            : o.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    E = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    m = (e, u = s.h2.Small) => {
                        const t = e.name,
                            n = e.type,
                            a = e.value,
                            r = e.icon,
                            i = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case s.h2.S600x450:
                                        return 'c_600x450';
                                    case s.h2.S400x300:
                                        return 'c_400x300';
                                    case s.h2.S296x222:
                                        return 'c_296x222';
                                    case s.h2.S232x174:
                                        return 'c_232x174';
                                    case s.h2.Big:
                                        return 'c_80x80';
                                    case s.h2.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${r}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${r}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = E[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            r = a.$dyn(t);
                                        return r ? `${r}` : `${a.$dyn(_[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${r}`;
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
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${u}.${r}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${u}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    A = (e, u, t) => {
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
                    F = [s.h2.Small, s.h2.Big],
                    D = (e, u) => {
                        if (void 0 === u || !F.includes(e)) return null;
                        switch (u) {
                            case s.kK.BATTLE_BOOSTER:
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.A2.BATTLE_BOOSTER;
                        }
                    },
                    C = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case s.kK.BATTLE_BOOSTER:
                                return s.sh.BATTLE_BOOSTER;
                            case s.kK.BATTLE_BOOSTER_REPLACE:
                                return s.sh.BATTLE_BOOSTER_REPLACE;
                            case s.kK.BUILT_IN_EQUIPMENT:
                                return s.sh.BUILT_IN_EQUIPMENT;
                            case s.kK.EQUIPMENT_PLUS:
                                return s.sh.EQUIPMENT_PLUS;
                            case s.kK.EQUIPMENT_TROPHY_BASIC:
                                return s.sh.EQUIPMENT_TROPHY_BASIC;
                            case s.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return s.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case s.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return s.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_4;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_5:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_5;
                            case s.kK.PROGRESSION_STYLE_UPGRADED_6:
                                return s.sh.PROGRESSION_STYLE_UPGRADED_6;
                            case s.kK.ATTACHMENT_RARE:
                                return s.sh.ATTACHMENT_RARE;
                            case s.kK.ATTACHMENT_EPIC:
                                return s.sh.ATTACHMENT_EPIC;
                            case s.kK.ATTACHMENT_LEGENDARY:
                                return s.sh.ATTACHMENT_LEGENDARY;
                        }
                    },
                    b = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return r().createElement(n.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            8656: (e, u, t) => {
                t.d(u, { nS: () => n });
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
                function n() {
                    return new Promise((e) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                e();
                            });
                        });
                    });
                }
            },
            7925: (e, u, t) => {
                t.d(u, { $Q: () => B });
                var n = t(9849),
                    a = t.n(n),
                    r = t(8463),
                    s = t(8978),
                    i = t(7475),
                    o = t(9659),
                    l = t(5239),
                    c = t(4029),
                    d = t(7363),
                    E = t.n(d),
                    _ = t(8718),
                    m = t(8823);
                const A = 'disable',
                    F = { pending: !1, offset: 0 },
                    D = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    C = () => {},
                    b = (e, u) => Math.max(20, e.offsetWidth * u),
                    B = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = D, onDrag: n = C }) => {
                        const B = (0, d.useRef)(null),
                            g = (0, d.useRef)(null),
                            p = (0, d.useRef)(null),
                            h = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            f = e.stepTimeout || 100,
                            w = (0, d.useState)(F),
                            y = w[0],
                            S = w[1],
                            R = (0, d.useCallback)(
                                (e) => {
                                    (S(e),
                                        v.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current }));
                                },
                                [n],
                            ),
                            T = () => {
                                const u = h.current,
                                    t = v.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    o = (0, r.u)(0, 1, s / (a - n)),
                                    l = (u.offsetWidth - b(u, i)) * o;
                                ((t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (g.current && p.current && h.current && v.current) {
                                            if (0 === e)
                                                return (g.current.classList.add(A), void p.current.classList.remove(A));
                                            if (
                                                ((u = h.current),
                                                (t = v.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (g.current.classList.remove(A), void p.current.classList.add(A));
                                            var u, t;
                                            (g.current.classList.remove(A), p.current.classList.remove(A));
                                        }
                                    })(l));
                            },
                            k = (0, o.z)(() => {
                                ((() => {
                                    const u = v.current,
                                        t = h.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const r = Math.min(1, n / a);
                                    ((u.style.width = `${b(t, r)}px`),
                                        (u.style.display = 'flex'),
                                        B.current &&
                                            (1 !== r
                                                ? B.current.classList.add(m.Z.base__active)
                                                : B.current.classList.remove(m.Z.base__active)));
                                })(),
                                    T());
                            });
                        ((0, d.useEffect)(() => (0, s.v)(k)),
                            (0, d.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const u = () => {
                                            T();
                                        };
                                        let t = C;
                                        const n = () => {
                                            (t(), (t = (0, s.v)(k)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', k),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', k),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const u = i.O.client.events.mouse.move(([u, t]) => {
                                        var a;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const i = h.current,
                                            o = v.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - y.offset - i.getBoundingClientRect().x,
                                            c = (l / i.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c }));
                                    }),
                                    t = i.O.client.events.mouse.up(() => {
                                        (u(), R(F));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, y.offset, y.pending, n, R]));
                        const P = (0, l.B)((u) => e.applyStepTo(u), f, [e]),
                            N = P[0],
                            x = P[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', x, !0),
                                () => document.removeEventListener('mouseup', x, !0)
                            ),
                            [x],
                        );
                        const M = (e) => {
                            e.target.classList.contains(A) || (0, c.G)('highlight');
                        };
                        return E().createElement(
                            'div',
                            { className: a()(m.Z.base, u.base), ref: B, onWheel: e.handleMouseWheel },
                            E().createElement('div', {
                                className: a()(m.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(_.Nm.Next));
                                },
                                onMouseUp: x,
                                ref: g,
                                onMouseEnter: M,
                            }),
                            E().createElement(
                                'div',
                                {
                                    className: a()(m.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = v.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                R({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = v.current,
                                                        a = e.contentRef.current;
                                                    if (!n || !a) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: h,
                                    onMouseEnter: M,
                                },
                                E().createElement('div', { ref: v, className: a()(m.Z.thumb, u.thumb) }),
                                E().createElement('div', { className: a()(m.Z.rail, u.rail) }),
                            ),
                            E().createElement('div', {
                                className: a()(m.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), N(_.Nm.Prev));
                                },
                                onMouseUp: x,
                                ref: p,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            2893: (e, u, t) => {
                t.d(u, { K: () => c });
                var n = t(9849),
                    a = t.n(n),
                    r = t(7363),
                    s = t.n(r),
                    i = t(7925),
                    o = t(969),
                    l = t(4109);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    classNames: d,
                    scrollClassName: E,
                    getStepByRailClick: _,
                    onDrag: m,
                }) => {
                    const A = (0, r.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: a()(l.Z.base, e.base) });
                        }, [n]),
                        F = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: a()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: a()(l.Z.defaultScrollArea, c) },
                            s().createElement(o.Area, { className: E, api: F, classNames: d }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: _, api: u, onDrag: m, classNames: A }),
                    );
                };
            },
            969: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        Area: () => E,
                        Bar: () => o.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    }));
                var n = t(9849),
                    a = t.n(n),
                    r = t(8978),
                    s = t(7363),
                    i = t.n(s),
                    o = t(7925),
                    l = t(2893),
                    c = t(4109),
                    d = t(8718);
                const E = ({ api: e, className: u, classNames: t, children: n }) => (
                    (0, s.useEffect)(() => (0, r.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: a()(c.Z.base, u) },
                        i().createElement(
                            'div',
                            {
                                className: a()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: a()(c.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
                ((E.Bar = o.$Q), (E.Default = l.K));
            },
            8718: (e, u, t) => {
                t.d(u, { Nm: () => a.Nm, T5: () => s, he: () => a.he });
                var n = t(7475),
                    a = t(4977);
                const r = {
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            var t;
                            e.style.transform = `translateX(-${0 | (null != (t = u.value.scrollPosition) ? t : 0)}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? a.Nm.Next : a.Nm.Prev),
                        forceTriggerMouseMove: n.O.view.forceTriggerMouseMove,
                    },
                    s = (0, a.EO)(r);
            },
            5154: (e, u, t) => {
                t.d(u, { $Q: () => g });
                var n = t(9849),
                    a = t.n(n),
                    r = t(8463),
                    s = t(8978),
                    i = t(7475),
                    o = t(9659),
                    l = t(5239),
                    c = t(4029),
                    d = t(7363),
                    E = t.n(d),
                    _ = t(4222),
                    m = t(1905);
                const A = 'disable',
                    F = () => {},
                    D = { pending: !1, offset: 0 },
                    C = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    b = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    B = (e, u) => Math.max(20, e.offsetHeight * u),
                    g = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = C, onDrag: n = F }) => {
                        const g = (0, d.useRef)(null),
                            p = (0, d.useRef)(null),
                            h = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            f = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(D),
                            S = y[0],
                            R = y[1],
                            T = (0, d.useCallback)(
                                (e) => {
                                    (R(e),
                                        f.current &&
                                            n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: f.current }));
                                },
                                [n],
                            ),
                            k = (0, o.z)(() => {
                                const u = f.current,
                                    t = v.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const r = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${B(t, r)}px`),
                                    (u.style.display = 'flex'),
                                    g.current &&
                                        (1 !== r
                                            ? g.current.classList.add(m.Z.base__active)
                                            : g.current.classList.remove(m.Z.base__active)),
                                    r
                                );
                            }),
                            P = (0, o.z)(() => {
                                const u = v.current,
                                    t = f.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && u && t && a)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / a),
                                    o = (0, r.u)(0, 1, s / (a - n)),
                                    l = (u.offsetHeight - B(u, i)) * o;
                                ((t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (p.current && h.current && v.current && f.current) {
                                            if (0 === Math.round(e))
                                                return (p.current.classList.add(A), void h.current.classList.remove(A));
                                            if (
                                                ((u = v.current),
                                                (t = f.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (p.current.classList.remove(A), void h.current.classList.add(A));
                                            var u, t;
                                            (p.current.classList.remove(A), h.current.classList.remove(A));
                                        }
                                    })(l));
                            }),
                            N = (0, o.z)(() => {
                                b(e, () => {
                                    (k(), P());
                                });
                            });
                        ((0, d.useEffect)(() => (0, s.v)(N)),
                            (0, d.useEffect)(() => {
                                const u = () => {
                                    b(e, () => {
                                        P();
                                    });
                                };
                                let t = F;
                                const n = () => {
                                    (t(), (t = (0, s.v)(N)));
                                };
                                return (
                                    e.events.on('recalculateContent', N),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', N),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n));
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!S.pending) return;
                                const u = i.O.client.events.mouse.up(() => {
                                        T(D);
                                    }),
                                    t = i.O.client.events.mouse.move(([u]) => {
                                        b(e, (t) => {
                                            const a = v.current,
                                                r = f.current,
                                                s = e.getContainerSize();
                                            if (!a || !r || !s) return;
                                            const i = u.screenY - S.offset - a.getBoundingClientRect().y,
                                                o = (i / a.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: i, contentOffset: o }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, S.offset, S.pending, n, T]));
                        const x = (0, l.B)((u) => e.applyStepTo(u), w, [e]),
                            M = x[0],
                            L = x[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const O = (e) => {
                            e.target.classList.contains(A) || (0, c.G)('highlight');
                        };
                        return E().createElement(
                            'div',
                            { className: a()(m.Z.base, u.base), ref: g, onWheel: e.handleMouseWheel },
                            E().createElement('div', {
                                className: a()(m.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), M(_.Nm.Next));
                                },
                                ref: p,
                                onMouseEnter: O,
                            }),
                            E().createElement(
                                'div',
                                {
                                    className: a()(m.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const n = f.current;
                                        if (n && 0 === u.button)
                                            if (((0, c.G)('play'), u.target === n))
                                                T({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    f.current &&
                                                        b(e, (n) => {
                                                            if (!n) return;
                                                            const a = t(e),
                                                                r = e.clampPosition(n, n.scrollTop + a * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: v,
                                    onMouseEnter: O,
                                },
                                E().createElement('div', { ref: f, className: a()(m.Z.thumb, u.thumb) }),
                                E().createElement('div', { className: a()(m.Z.rail, u.rail) }),
                            ),
                            E().createElement('div', {
                                className: a()(m.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, c.G)('play'), M(_.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: h,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            4444: (e, u, t) => {
                t.d(u, { K: () => c });
                var n = t(9849),
                    a = t.n(n),
                    r = t(7363),
                    s = t.n(r),
                    i = t(5154),
                    o = t(3934),
                    l = t(2459);
                const c = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: n,
                    areaClassName: c,
                    scrollClassName: d,
                    scrollClassNames: E,
                    getStepByRailClick: _,
                    onDrag: m,
                }) => {
                    const A = (0, r.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: a()(l.Z.base, e.base) });
                        }, [n]),
                        F = (0, r.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: a()(l.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: a()(l.Z.area, c) },
                            s().createElement(o.Area, { className: d, classNames: E, api: F }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: _, api: u, onDrag: m, classNames: A }),
                    );
                };
            },
            3934: (e, u, t) => {
                (t.r(u),
                    t.d(u, { Area: () => E, Bar: () => o.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var n = t(9849),
                    a = t.n(n),
                    r = t(8978),
                    s = t(7363),
                    i = t.n(s),
                    o = t(5154),
                    l = t(4444),
                    c = t(4222),
                    d = t(2459);
                const E = ({ className: e, classNames: u, children: t, api: n }) => (
                    (0, s.useEffect)(() => (0, r.v)(n.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: a()(d.Z.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: a()(d.Z.content, null == u ? void 0 : u.content), ref: n.contentRef },
                            t,
                        ),
                    )
                );
                E.Default = l.K;
            },
            4222: (e, u, t) => {
                t.d(u, { Nm: () => n.Nm, c4: () => r });
                var n = t(4977);
                const a = {
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                    },
                    r = (0, n.EO)(a);
            },
            4977: (e, u, t) => {
                t.d(u, { EO: () => _, Nm: () => d, he: () => E });
                var n = t(8463),
                    a = t(8978),
                    r = t(7845),
                    s = t(603),
                    i = t(9659),
                    o = t(3024),
                    l = t(7363),
                    c = t(1374);
                let d = (function (e) {
                    return ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'), e);
                })({});
                const E = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    _ = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: d,
                        getWrapperSize: _,
                        forceTriggerMouseMove: m,
                    }) => {
                        const A = (e, t) => {
                            const a = u(e),
                                r = a[0],
                                s = a[1];
                            return s <= r ? 0 : (0, n.u)(r, s, t);
                        };
                        return (n = {}) => {
                            const F = n.settings,
                                D = void 0 === F ? E : F,
                                C = (0, l.useRef)(null),
                                b = (0, l.useRef)(null),
                                B = (0, l.useRef)(!1),
                                g = (0, s.q)(),
                                p = (0, o.f)(
                                    () => {
                                        m && m();
                                    },
                                    [],
                                    150,
                                ),
                                h = (0, c.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = C.current;
                                        u && (t(u, e), g.trigger('change', e), m && B.current && p());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                v = h[0],
                                f = h[1],
                                w = (0, l.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const a = v.scrollPosition.get(),
                                            r = (null != (n = v.scrollPosition.goal) ? n : 0) - a;
                                        return A(e, u * t + r + a);
                                    },
                                    [v.scrollPosition],
                                ),
                                y = (0, l.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = C.current;
                                        n &&
                                            f.start({
                                                scrollPosition: A(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: D.animationConfig,
                                                from: { scrollPosition: A(n, v.scrollPosition.get()) },
                                            });
                                    },
                                    [f, D.animationConfig, v.scrollPosition],
                                ),
                                S = (0, l.useCallback)(
                                    (e) => {
                                        const u = C.current,
                                            t = b.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return _(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, D.step),
                                            a = w(u, e, n);
                                        y(a);
                                    },
                                    [y, w, D.step],
                                ),
                                R = (0, l.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && S(d(e)),
                                            C.current && g.trigger('mouseWheel', e, v.scrollPosition, u(C.current)));
                                    },
                                    [v.scrollPosition, S, g],
                                ),
                                T = (0, r.M)(
                                    () =>
                                        (0, a.v)(() => {
                                            const e = C.current;
                                            e &&
                                                (y(A(e, v.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [y, v.scrollPosition.goal],
                                ),
                                k = (0, i.z)(() => {
                                    const e = C.current;
                                    if (!e) return;
                                    const u = A(e, v.scrollPosition.goal);
                                    (u !== v.scrollPosition.goal && y(u, { immediate: !0 }),
                                        g.trigger('recalculateContent'));
                                });
                            ((0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', T),
                                    () => {
                                        window.removeEventListener('resize', T);
                                    }
                                ),
                                [T],
                            ),
                                (0, l.useEffect)(() => {
                                    const e = C.current;
                                    if (!e || !m) return;
                                    const u = () => {
                                            B.current = !0;
                                        },
                                        t = () => {
                                            B.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            (e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [C]));
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (b.current ? _(b.current) : void 0),
                                    getContainerSize: () => (C.current ? e(C.current) : void 0),
                                    getBounds: () =>
                                        C.current
                                            ? u(C.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: D.step.clampedArrowStepTimeout,
                                    clampPosition: A,
                                    handleMouseWheel: R,
                                    applyScroll: y,
                                    applyStepTo: S,
                                    contentRef: C,
                                    wrapperRef: b,
                                    scrollPosition: f,
                                    animationScroll: v,
                                    recalculateContent: k,
                                    events: { on: g.on, off: g.off },
                                }),
                                [v.scrollPosition, y, S, g.off, g.on, k, R, f, D.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            2884: (e, u, t) => {
                t.d(u, { X: () => a });
                var n = t(969);
                const a = { Vertical: t(3934), Horizontal: n };
            },
            941: (e, u, t) => {
                t.d(u, { t: () => o });
                var n = t(7363),
                    a = t.n(n),
                    r = t(2278);
                const s = ['children'];
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
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== u.indexOf(n)) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, s);
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
                            t,
                        ),
                        u,
                    );
                };
            },
            1672: (e, u, t) => {
                t.d(u, { l: () => l });
                var n = t(7363),
                    a = t.n(n),
                    r = t(941),
                    s = t(6485),
                    i = t(2278);
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
                    if (u.header || u.body) return a().createElement(s.i, u, n);
                    const l = u.contentId;
                    return l ? a().createElement(i.u, o({}, u, { contentId: l }), n) : a().createElement(r.t, u, n);
                };
            },
            6485: (e, u, t) => {
                t.d(u, { i: () => l });
                var n = t(2278),
                    a = t(7363),
                    r = t.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                                        if (-1 !== u.indexOf(n)) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, s);
                        const m = (0, a.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: l, note: c, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, l, c, E]);
                        return r().createElement(
                            n.u,
                            i(
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
            2278: (e, u, t) => {
                t.d(u, { u: () => l });
                var n = t(3485),
                    a = t(828),
                    r = t(7363);
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
                function i(e) {
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
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            C = void 0 === D ? 0 : D,
                            b = e.isEnabled,
                            B = void 0 === b || b,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            h = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (-1 !== u.indexOf(n)) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, s);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => p || (0, n.F)().resId, [p]),
                            S = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, C, { isMouseEvent: !0, on: !0, arguments: i(a) }, y),
                                    h && h(),
                                    (w.current.isVisible = !0));
                            }, [t, C, a, y, h]),
                            R = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, C, { on: !1 }, y),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, C, y, v]),
                            T = (0, r.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && R();
                                    }, 200)));
                            }, []);
                        ((0, r.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === B && R();
                            }, [B, R]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', R),
                                    () => {
                                        (window.removeEventListener('mouseleave', R), R());
                                    }
                                ),
                                [R],
                            ));
                        return B
                            ? (0, r.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(S, m ? 100 : 400)),
                                                      l && l(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (R(), null == c || c(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && R(), null == E || E(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && R(), null == d || d(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var k;
                    };
            },
            8463: (e, u, t) => {
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            8978: (e, u, t) => {
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
            9352: (e, u, t) => {
                t.d(u, { U: () => i });
                var n = t(7475);
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
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: r = 'model' } = {}) {
                    const i = new Map();
                    function o(e, u = 0) {
                        viewEnv.removeDataChangedCallback(e, u)
                            ? i.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, u, t) => {
                            t.forEach((u) => {
                                const t = i.get(u);
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
                            const s = 'string' == typeof a ? `${r}.${a}` : r,
                                o = n.O.view.addModelObserver(s, u, !0);
                            return (i.set(o, t), e && t(l(a)), o);
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
                            for (var e, t = a(i.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            5090: (e, u, t) => {
                t.d(u, { q3: () => o });
                var n = t(9723),
                    a = t(3305),
                    r = t(7363),
                    s = t.n(r),
                    i = t(9352);
                const o = () => (e, u) => {
                    const t = (0, r.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: d }) {
                            const E = (0, r.useRef)([]),
                                _ = (t, r, s) => {
                                    var o;
                                    const l = i.U(r),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => E.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = d(e),
                                                        r = a.LO.box(u, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const r = null != u ? u : d(e),
                                                        s = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const r = null != u ? u : d(e),
                                                        s = a.LO.box(r, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
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
                                                            s = Object.entries(r),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = a.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([u, t]) => {
                                                                            i[t].set(e[u]);
                                                                        });
                                                                    }),
                                                                    u,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: _,
                                        }),
                                        A = { mode: t, model: m, externalModel: c, cleanup: _ };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                m = (0, r.useRef)(!1),
                                A = (0, r.useState)(o),
                                F = A[0],
                                D = A[1],
                                C = (0, r.useState)(() => _(o, l, d)),
                                b = C[0],
                                B = C[1];
                            return (
                                (0, r.useEffect)(() => {
                                    m.current ? B(_(F, l, d)) : (m.current = !0);
                                }, [d, F, l]),
                                (0, r.useEffect)(() => {
                                    D(o);
                                }, [o]),
                                (0, r.useEffect)(
                                    () => () => {
                                        (b.externalModel.dispose(), E.current.forEach((e) => e()));
                                    },
                                    [b],
                                ),
                                s().createElement(t.Provider, { value: b }, c)
                            );
                        },
                        () => (0, r.useContext)(t),
                    ];
                };
            },
            873: (e, u, t) => {
                (t(6758), t(828));
                var n = t(6609);
                (Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime);
            },
            5034: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        mouse: () => d,
                        off: () => l,
                        on: () => o,
                        onMinimize: () => i,
                        onResize: () => r,
                        onScaleUpdated: () => s,
                    }));
                var n = t(8277),
                    a = t(1708);
                const r = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    i = (0, n.E)('clientMinimized'),
                    o = (e, u) => engine.on(e, u),
                    l = (e, u) => engine.off(e, u),
                    c = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const d = (function () {
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
                                        s = c[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, i),
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
            3157: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    }));
                var n = t(5034),
                    a = t(9703);
                function r(e = 'px') {
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
            1708: (e, u, t) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            9703: (e, u, t) => {
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
            8277: (e, u, t) => {
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
            7475: (e, u, t) => {
                t.d(u, { O: () => s });
                var n = t(3157),
                    a = t(8133),
                    r = t(3925);
                const s = { view: t(7553), client: n, sound: r.ZP, intl: a.N };
            },
            8133: (e, u, t) => {
                t.d(u, { N: () => n });
                const n = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, u, t) => {
                t.d(u, { ZP: () => i, hY: () => s });
                var n = t(3157);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((e, u) => ((e[u] = () => (0, n.playSound)(a[u])), e), {}),
                    s = Object.assign({}, r, { sound: n.playSound }),
                    i = { play: s, setRTPC: n.setRTPC };
            },
            5544: (e, u, t) => {
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function a(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => a, getTextureUrl: () => n }));
            },
            3163: (e, u, t) => {
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, u, t) => {
                t.d(u, { U: () => a });
                var n = t(8277);
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
            7553: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => l,
                        arabic2roman: () => S,
                        children: () => a,
                        displayStatus: () => r.W,
                        displayStatusIs: () => T,
                        enableFullScreenModeSupported: () => N,
                        events: () => s.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => w,
                        getExternalPaddingsRem: () => R,
                        getFontNames: () => y,
                        getScale: () => C,
                        getSize: () => m,
                        getViewGlobalPosition: () => F,
                        initExternalPaddings: () => x,
                        isEventHandled: () => v,
                        isFocused: () => p,
                        pxToRem: () => b,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => P,
                    }));
                var n = t(1308),
                    a = t(5544),
                    r = t(3163),
                    s = t(7576),
                    i = t(2319);
                const o = 15;
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function d(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function F(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function b(e) {
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
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = n.cg;
                function R() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const T = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    k = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function N() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function x(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            n = u.right,
                            a = u.bottom,
                            r = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${r}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            2319: (e, u, t) => {
                t.d(u, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (-1 !== u.indexOf(n)) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? a : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            9723: (e, u, t) => {
                function n() {}
                t.d(u, { ZT: () => n, jv: () => a });
                function a() {
                    return !1;
                }
                console.log;
            },
            3485: (e, u, t) => {
                t.d(u, { F: () => n });
                const n = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        n = R.invalid('resId'),
                        a = '';
                    var r;
                    u &&
                        ((a = (null == (r = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : r[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (n = window.subViews[t].id));
                    return { callerUrl: a, caller: t, stack: u, resId: n };
                };
            },
            7845: (e, u, t) => {
                t.d(u, { M: () => a });
                var n = t(7363);
                const a = (e, u = []) => {
                    const t = (0, n.useRef)(),
                        a = (0, n.useCallback)((...u) => {
                            (t.current && t.current(), (t.current = e(...u)));
                        }, u);
                    return (
                        (0, n.useEffect)(
                            () => () => {
                                t.current && t.current();
                            },
                            [a],
                        ),
                        a
                    );
                };
            },
            603: (e, u, t) => {
                t.d(u, { q: () => s });
                var n = t(7363);
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
                const s = () => {
                    const e = (0, n.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        r = (e, t) => {
                            u(e).delete(t);
                        },
                        s = (e, ...t) => {
                            for (var n, r = a(u(e).values()); !(n = r()).done; ) {
                                (0, n.value)(...t);
                            }
                        };
                    return (0, n.useMemo)(() => ({ on: t, off: r, trigger: s }), []);
                };
            },
            9659: (e, u, t) => {
                t.d(u, { z: () => r });
                var n = t(7363);
                const a = [];
                function r(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), a)
                    );
                }
            },
            8925: (e, u, t) => {
                t.d(u, { GS: () => l, cJ: () => s });
                var n = t(7363),
                    a = t(5579),
                    r = t(1958);
                let s = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    i = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.width)] = 'Small'),
                            (e[(e.Medium = r.j.medium.width)] = 'Medium'),
                            (e[(e.Large = r.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    o = (function (e) {
                        return (
                            (e[(e.ExtraSmall = r.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = r.j.small.height)] = 'Small'),
                            (e[(e.Medium = r.j.medium.height)] = 'Medium'),
                            (e[(e.Large = r.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = r.j.extraLarge.height)] = 'ExtraLarge'),
                            e
                        );
                    })({});
                const l = () => {
                    const e = (0, n.useContext)(a.YN),
                        u = e.width,
                        t = e.height,
                        r = ((e) => {
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
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
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
            5239: (e, u, t) => {
                t.d(u, { B: () => a });
                var n = t(7363);
                function a(e, u, t = []) {
                    const a = (0, n.useRef)(0),
                        r = (0, n.useCallback)(() => {
                            (window.clearInterval(a.current), (a.current = 0));
                        }, t || []);
                    (0, n.useEffect)(() => r, [r]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, n.useCallback)((t) => {
                            (0 !== a.current && r(), (a.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        r,
                    ];
                }
            },
            3024: (e, u, t) => {
                t.d(u, { f: () => r });
                var n = t(8658),
                    a = t(7363);
                function r(e, u, t) {
                    const r = (0, a.useMemo)(() => (0, n.Z)(t, e), u);
                    return ((0, a.useEffect)(() => r.cancel, [r]), r);
                }
            },
            4020: (e, u, t) => {
                t.d(u, { n: () => n });
                let n = (function (e) {
                    return (
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
                        (e[(e.KEY_9 = 57)] = 'KEY_9'),
                        e
                    );
                })({});
            },
            8739: (e, u, t) => {
                t.d(u, { UI: () => a, tP: () => r });
                function n(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function a(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function r(e, u = 0, t = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let a = Math.max(u, 0);
                            const r = Math.min(
                                t,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (a > r) return { done: !0, value: null };
                                    const u = e[a++];
                                    return u ? { value: n(u), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
            },
            4170: (e, u, t) => {
                t.d(u, { t: () => n });
                let n = (function (e) {
                    return (
                        (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH'),
                        e
                    );
                })({});
            },
            1308: (e, u, t) => {
                t.d(u, { cg: () => r });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function r(e) {
                    let u = '';
                    for (let t = a.length - 1; t >= 0; t--) for (; e >= a[t]; ) ((u += n[t]), (e -= a[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            4029: (e, u, t) => {
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
            6758: (e, u, t) => {
                t.d(u, { Uw: () => _, WU: () => r, v2: () => a });
                var n = t(8354);
                let a = (function (e) {
                    return ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e);
                })({});
                function r(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                const s = (e) => e.replace(/&nbsp;/g, ' '),
                    i = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    o = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    l = (e, u, t = a.left) => e.split(u).reduce(t === a.left ? i : o, []),
                    c = (() => {
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    d = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, u = a.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (d.includes(t)) return c(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, u = a.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = s(e);
                            return (l(r, /( )/, u).forEach((e) => (t = t.concat(l(e, n, a.left)))), t);
                        })(e, u);
                    },
                    _ = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : E(e, u)));
            },
            8658: (e, u, t) => {
                function n(e, u, t, n) {
                    let a,
                        r = !1,
                        s = 0;
                    function i() {
                        a && clearTimeout(a);
                    }
                    function o(...o) {
                        const l = this,
                            c = Date.now() - s;
                        function d() {
                            ((s = Date.now()), t.apply(l, o));
                        }
                        r ||
                            (n && !a && d(),
                            i(),
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
                            (i(), (r = !0));
                        }),
                        o
                    );
                }
                t.d(u, { Z: () => n });
            },
            8973: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(7475);
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
            5533: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8973),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(828);
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
            828: (e, u, t) => {
                t.d(u, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => D, Eu: () => C });
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
                var r = t(8973);
                var s = t(6609);
                let i = (function (e) {
                    return (
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE'),
                        e
                    );
                })({});
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(4020),
                    _ = t(7475);
                const m = ['args'];
                function A(e, u, t, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._ContentLoaded) ||
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
                                        function s(e) {
                                            A(r, n, a, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(r, n, a, s, i, 'throw', e);
                                        }
                                        s(void 0);
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
                    b = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (-1 !== u.indexOf(n)) continue;
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
                    B = () => b(i.CLOSE),
                    g = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var p = t(5533);
                const h = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => b(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => b(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            b(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                E = o.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            b(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, B);
                        },
                        handleViewEvent: b,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
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
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            6609: (e, u, t) => {
                t.d(u, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u, t = 2) => systemLocale.getRealFormat(e, u, t),
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
            6734: (e, u, t) => {
                var n = t(7363),
                    a = t.n(n),
                    r = t(5090),
                    s = t(9723),
                    i = t(5369);
                const o = (0, r.q3)()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), nowRewards: e.array('rewards.nowRewards.items') },
                                t = (0, i.Om)(() => u.nowRewards.get(), { equals: s.jv });
                            return Object.assign({}, u, { computes: { rewardList: t } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            showPreviewVehicle: e.createCallbackNoArgs('onPreviewVehicle'),
                            showTankmen: e.createCallbackNoArgs('showTankmen'),
                            showHangar: e.createCallbackNoArgs('showHangar'),
                        }),
                    ),
                    l = (o[0], o[1]);
                var c = t(9849),
                    d = t.n(c),
                    E = t(5603),
                    _ = t(8656),
                    m = t(4020),
                    A = t(828),
                    F = t(2041),
                    D = t(9994),
                    C = t(2215);
                const b = {
                        base: 'App_base_ceada',
                        base__rewardsState: 'App_base__rewardsState_c14da',
                        background: 'App_background_e3e87',
                        base__tankmenState: 'App_base__tankmenState_cb015',
                        additionalAnimation: 'App_additionalAnimation_b68c9',
                        fadeIn: 'App_fadeIn_b1da5',
                        header: 'App_header_a6469',
                        awards: 'App_awards_db6bf',
                        footer: 'App_footer_cb898',
                        base__buyState: 'App_base__buyState_d5a7f',
                        fadeOut: 'App_fadeOut_d703b',
                        fadeInWithScale: 'App_fadeInWithScale_eb97e',
                        slideUp: 'App_slideUp_ef029',
                        scale: 'App_scale_c5c53',
                        rotate: 'App_rotate_c1f05',
                    },
                    B = 'selectableRewardsState',
                    g = 'finalState';
                var p = t(7109),
                    h = t(768);
                const v = {
                        base: 'Final_base_c3951',
                        controls: 'Final_controls_b0c47',
                        label: 'Final_label_bfefc',
                        base__finalState: 'Final_base__finalState_bdc8b',
                        text: 'Final_text_f8c72',
                        buttonWrapper: 'Final_buttonWrapper_f1dfe',
                        button: 'Final_button_fa9d3',
                    },
                    f = 'FinalStateLabel_icon_c6f66',
                    w = 'FinalStateLabel_greenLight_c6404',
                    y = 'FinalStateLabel_text_b59f3',
                    S = () =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement('div', { className: f }),
                            a().createElement('div', { className: w }),
                            a().createElement(
                                'div',
                                { className: y },
                                R.strings.battle_pass.holidayFinalScreen.finalState.label(),
                            ),
                        ),
                    T = R.strings.battle_pass.holidayFinalScreen,
                    k = (0, F.Pi)(() => {
                        const e = l(),
                            u = e.model,
                            t = e.controls,
                            n = t.takeRewards,
                            r = t.showHangar,
                            s = u.root.get(),
                            i = s.state,
                            o = s.finalRewardType,
                            c = i === B;
                        return a().createElement(
                            'div',
                            { className: d()(v.base, v[`base__${i}`]) },
                            a().createElement(
                                'div',
                                { className: v.controls },
                                a().createElement(
                                    'div',
                                    { className: v.label },
                                    c
                                        ? a().createElement(
                                              'div',
                                              { className: v.text },
                                              T.selectableRewardsState.label(),
                                          )
                                        : a().createElement(S, null),
                                ),
                                a().createElement(
                                    'div',
                                    { className: v.buttonWrapper },
                                    a().createElement(
                                        p.u5,
                                        {
                                            size: p.qE.medium,
                                            mixClass: v.button,
                                            onClick: () => {
                                                c ? n() : r();
                                            },
                                        },
                                        (() => {
                                            switch (i) {
                                                case B:
                                                    return T.selectableRewardsState.button();
                                                case g:
                                                    return o === h.E.Vehicle
                                                        ? T.finalState.button.showVehicle()
                                                        : T.finalState.button.showHangar();
                                                default:
                                                    return '';
                                            }
                                        })(),
                                    ),
                                ),
                            ),
                        );
                    });
                var P = t(7436),
                    N = t(2486),
                    x = t(3359),
                    M = t(8925),
                    L = t(8739),
                    O = t(4029),
                    I = t(1374),
                    z = t(5278),
                    U = t(2317),
                    H = t(3975),
                    G = t(8862);
                const $ = 'Divider_divider_d0267',
                    W = 'Divider_divider__right_e793f',
                    Z = ({ isRight: e = !1 }) => a().createElement('div', { className: d()($, e && W) }),
                    j = 'Title_base_cd641',
                    q = 'Title_text_bdc4c',
                    V = ({ text: e }) =>
                        a().createElement(
                            'div',
                            { className: j },
                            a().createElement(Z, null),
                            a().createElement('div', { className: q }, e),
                            a().createElement(Z, { isRight: !0 }),
                        ),
                    Y = {
                        base: 'Purchase_base_ace29',
                        content: 'Purchase_content_e042c',
                        preview: 'Purchase_preview_b11d3',
                        shadow: 'Purchase_shadow_fb996',
                        visibleRewards: 'Purchase_visibleRewards_d6a46',
                        title: 'Purchase_title_dbd80',
                        description: 'Purchase_description_b0181',
                        button: 'Purchase_button_b07a6',
                        button__active: 'Purchase_button__active_fbb47',
                        button__disappearing: 'Purchase_button__disappearing_e9c00',
                        rewardButton: 'Purchase_rewardButton_cde7f',
                    };
                function K() {
                    return (
                        (K = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        K.apply(null, arguments)
                    );
                }
                const Q = R.strings.battle_pass.holidayFinalScreen.buyState,
                    X = (e) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 400 + 100 * e,
                        config: { duration: 400 },
                        onStart: () => {
                            (0, O.G)(R.sounds.bp_reward());
                        },
                    }),
                    J = (0, F.Pi)(() => {
                        const e = l(),
                            u = e.model,
                            t = e.controls,
                            n = (0, G.tv)(),
                            r = u.root.get(),
                            s = r.chapterID,
                            i = r.finalRewardType,
                            o = t.showPreviewVehicle,
                            c = u.computes.rewardList(),
                            d = i === h.E.Vehicle,
                            _ = (0, M.GS)().mediaSize <= M.cJ.Small ? N.h2.Small : N.h2.Big,
                            m = c.length > 9 ? [...L.tP(c, 0, 9)] : c,
                            A = (0, I.useSpring)(X(m.length)),
                            F = c.length - m.length;
                        return a().createElement(
                            'div',
                            { className: Y.base },
                            d &&
                                a().createElement(
                                    'div',
                                    { className: Y.preview },
                                    a().createElement(P.h, { type: 'preview', onClick: o }),
                                ),
                            a().createElement(
                                'div',
                                { className: Y.content },
                                a().createElement('div', { className: Y.shadow }),
                                a().createElement(
                                    'div',
                                    { className: Y.title },
                                    a().createElement(V, { text: Q.title() }),
                                ),
                                a().createElement('div', { className: Y.description }, Q.description()),
                                a().createElement(
                                    'div',
                                    { className: Y.visibleRewards },
                                    L.UI(m, (e, u) =>
                                        a().createElement(
                                            H.d,
                                            { animationConfig: X(u), key: `${e.item}_${u}` },
                                            a().createElement(x.Q, K({}, (0, z.$n)(e, _), { className: Y.reward })),
                                        ),
                                    ),
                                ),
                                F > 0 &&
                                    a().createElement(
                                        I.animated.div,
                                        { style: A },
                                        a().createElement(
                                            p.u5,
                                            {
                                                type: p.L$.ghost,
                                                size: p.qE.medium,
                                                mixClass: Y.rewardButton,
                                                onClick: () => {
                                                    n.push(U._.battlePass.buyPassRewards, { packageID: s });
                                                },
                                            },
                                            a().createElement(E.z, { text: Q.moreRewards(), binding: { count: F } }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var ee = t(8230),
                    ue = t(8024);
                const te = 'Rewards_full_f8781',
                    ne = { context: 'model.rewards' },
                    ae = (0, F.Pi)(() => {
                        const e = l().controls.close;
                        return a().createElement(
                            ue.k,
                            { options: ne },
                            a().createElement('div', { className: te }, a().createElement(ee.$, { onBack: e })),
                        );
                    });
                var re = t(2262);
                const se = 'Tankmen_base_d288d',
                    ie = 'Tankmen_image_ada80',
                    oe = 'Tankmen_title_b0d37',
                    le = 'Tankmen_description_e8821',
                    ce = 'Tankmen_tankmenBtn_ac6b8',
                    de = 'Tankmen_button_a2cf1',
                    Ee = 'Tankmen_blink_f0aef',
                    _e = R.strings.battle_pass.holidayFinalScreen.tankmenState,
                    me = (0, F.Pi)(() => {
                        const e = l().controls.showTankmen;
                        return a().createElement(
                            'div',
                            { className: se },
                            a().createElement('div', { className: ie }),
                            a().createElement('div', { className: oe }, a().createElement(V, { text: _e.title() })),
                            a().createElement('div', { className: le }, _e.description()),
                            a().createElement(
                                'div',
                                { className: ce },
                                a().createElement(
                                    p.u5,
                                    { type: re.L.main, size: re.q.medium, mixClass: de, onClick: e },
                                    a().createElement('div', { className: Ee }),
                                    _e.tankmenButton(),
                                ),
                            ),
                        );
                    }),
                    Ae = (0, F.Pi)(() => {
                        const e = l().model.root.get().state;
                        switch (e) {
                            case 'buyState':
                                return a().createElement(J, null);
                            case 'rewardsState':
                                return a().createElement(ae, null);
                            case 'tankmenState':
                                return a().createElement(me, null);
                            case B:
                            case g:
                                return a().createElement(k, null);
                            default:
                                return (console.warn('Unknown state ', e), null);
                        }
                    }),
                    Fe = 'Footer_base_e7ffc',
                    De = 'Footer_light_d8352',
                    Ce = 'Footer_buttonWrapper_d2bc1',
                    be = 'Footer_button_e4943',
                    Be = 'Footer_blink_ee2c2',
                    ge = R.strings.battle_pass.holidayFinalScreen.buyState,
                    pe = (0, F.Pi)(() => {
                        const e = l().model.root.get(),
                            u = e.isSeasonEndingSoon,
                            t = e.chapterID,
                            n = (0, G.tv)();
                        return a().createElement(
                            'div',
                            { className: Fe },
                            a().createElement('div', { className: De }),
                            a().createElement(
                                'div',
                                { className: Ce },
                                a().createElement(
                                    p.u5,
                                    {
                                        type: p.L$.main,
                                        size: p.qE.medium,
                                        mixClass: be,
                                        onClick: () => {
                                            n.push(U._.battlePass.buyPassConfirm, { packageID: t });
                                        },
                                    },
                                    u && a().createElement('div', { className: Be }),
                                    ge.buyButton(),
                                ),
                            ),
                        );
                    }),
                    he = 'Header_base_a6593',
                    ve = 'Header_title_b6bec',
                    fe = 'Header_description_efc56',
                    we = ({ title: e, description: u }) =>
                        a().createElement(
                            'div',
                            { className: he },
                            a().createElement('div', { className: ve }, e),
                            a().createElement('div', { className: fe }, u),
                        );
                function ye(e, u, t, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const Se = R.strings.battle_pass;
                (0, F.Pi)(() => {
                    const e = (0, n.useState)(!1),
                        u = e[0],
                        t = e[1],
                        r = l().model.root.get(),
                        s = r.state,
                        i = r.chapterID,
                        o = (0, G.tv)();
                    return (
                        (0, n.useEffect)(() => {
                            (function () {
                                var e,
                                    u =
                                        ((e = function* () {
                                            (yield (0, A.Eu)(), yield (0, _.nS)(), t(!0));
                                        }),
                                        function () {
                                            var u = this,
                                                t = arguments;
                                            return new Promise(function (n, a) {
                                                var r = e.apply(u, t);
                                                function s(e) {
                                                    ye(r, n, a, s, i, 'next', e);
                                                }
                                                function i(e) {
                                                    ye(r, n, a, s, i, 'throw', e);
                                                }
                                                s(void 0);
                                            });
                                        });
                                return function () {
                                    return u.apply(this, arguments);
                                };
                            })()();
                        }, []),
                        D.N.useHandleKeydown(m.n.ESCAPE, () => o.goBack()),
                        a().createElement(
                            'div',
                            { className: d()(b.base, b[`base__${s}`]) },
                            a().createElement('div', { className: b.background }),
                            u &&
                                a().createElement(
                                    'div',
                                    { className: b.additionalAnimation },
                                    a().createElement(
                                        'div',
                                        { className: b.header },
                                        a().createElement(we, {
                                            title: a().createElement(E.z, {
                                                text: Se.holidayFinalScreen.chapter(),
                                                binding: { chapterName: Se.chapter.fullNameUppercased.$num(i) },
                                            }),
                                            description: Se.holidayFinalScreen.completed(),
                                        }),
                                        a().createElement(
                                            'div',
                                            { className: b.awards },
                                            a().createElement(C.Z, {
                                                rootId: R.aliases.battle_pass.HolidayFinal('resId'),
                                                context: 'model.awardsWidget',
                                            }),
                                        ),
                                    ),
                                    a().createElement(Ae, null),
                                    a().createElement('div', { className: b.footer }, a().createElement(pe, null)),
                                ),
                        )
                    );
                });
            },
            2317: (e, u, t) => {
                t.d(u, { _: () => n });
                const n = {
                    root: '/hangar',
                    battlePass: {
                        chapterChoice: '/battlePass/chapterChoice',
                        progression: '/battlePass/progression',
                        postProgression: '/battlePass/postProgression',
                        intro: '/battlePass/intro',
                        buyPass: '/battlePass/buyPass',
                        buyPassConfirm: '/battlePass/buyPassConfirm',
                        buyPassRewards: '/battlePass/buyPassRewards',
                        buyLevels: '/battlePass/buyLevels',
                        buyLevelsRewards: '/battlePass/buyLevelsRewards',
                        holidayFinal: '/battlePass/holidayFinal',
                    },
                };
            },
            8230: (e, u, t) => {
                t.d(u, { $: () => T });
                var n = t(8656),
                    a = t(4020),
                    r = t(828),
                    s = t(2041),
                    i = t(7363),
                    o = t.n(i),
                    l = t(1705),
                    c = t(9994),
                    d = t(1158),
                    E = t(8862),
                    _ = t(9849),
                    m = t.n(_),
                    A = t(2714),
                    F = t(1820),
                    D = t(3287),
                    C = t(8024);
                const b = 'Content_base_ae5c4',
                    B = 'Content_mainContent_a092c',
                    g = 'Content_base__noScroll_ad6fe',
                    p = R.strings.battle_pass.battlePassBuyView.reward,
                    h = (0, s.Pi)(() => {
                        const e = (0, C.t)().model,
                            u = e.levels.get(),
                            t = u.fromLevel,
                            n = u.toLevel,
                            a = u.isPurchaseWithLevels,
                            r = e.computes.nowRewards(),
                            s = e.computes.futureRewards(),
                            l = ((e, u, t) =>
                                t
                                    ? { description: p.descriptionNowRewardsCheckbox() }
                                    : e < u
                                      ? { description: p.descriptionNowRewards(), completedSteps: `${e} - ${u}` }
                                      : { description: p.descriptionNowRewardsSingle(), completedSteps: `${u}` })(
                                t,
                                n,
                                a,
                            ),
                            c = l.description,
                            d = l.completedSteps,
                            E = (0, i.useState)(!1),
                            _ = E[0],
                            h = E[1];
                        return o().createElement(
                            D.z,
                            { className: m()(b, !_ && g), setVisibleScroll: h },
                            o().createElement(
                                'div',
                                { className: B },
                                r.length > 0 &&
                                    o().createElement(F.r, {
                                        description: c,
                                        iconType: A.Q.now,
                                        rewards: r,
                                        steps: d,
                                        title: p.titleNowRewards(),
                                    }),
                                s.length > 0 &&
                                    o().createElement(F.r, {
                                        description: p.descriptionFutureRewards(),
                                        iconType: A.Q.future,
                                        rewards: s,
                                        title: p.titleFutureRewards(),
                                    }),
                            ),
                        );
                    }),
                    v = 'RewardsViewContent_base_c6578',
                    f = 'RewardsViewContent_content_b14ad',
                    w = 'RewardsViewContent_background_cc9fe',
                    y = 'RewardsViewContent_shadow_e76b8';
                function S(e, u, t, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const T = (0, s.Pi)(() => {
                    const e = (0, C.t)().model.levels.get().chapterID,
                        u = (0, i.useState)(!1),
                        t = u[0],
                        s = u[1],
                        _ = (0, E.tv)();
                    (c.N.useHandleKeydown(a.n.ESCAPE, () => _.goBack()),
                        (0, i.useEffect)(() => {
                            (function () {
                                var e,
                                    u =
                                        ((e = function* () {
                                            (yield (0, r.Eu)(), yield (0, n.nS)(), s(!0));
                                        }),
                                        function () {
                                            var u = this,
                                                t = arguments;
                                            return new Promise(function (n, a) {
                                                var r = e.apply(u, t);
                                                function s(e) {
                                                    S(r, n, a, s, i, 'next', e);
                                                }
                                                function i(e) {
                                                    S(r, n, a, s, i, 'throw', e);
                                                }
                                                s(void 0);
                                            });
                                        });
                                return function () {
                                    return u.apply(this, arguments);
                                };
                            })()();
                        }, []));
                    const m = {
                        backgroundImage: `url(${(0, l.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, e)})`,
                    };
                    return o().createElement(
                        'div',
                        { className: v },
                        o().createElement(
                            'div',
                            { className: w },
                            o().createElement(d.N, { chapter: e, isCurrent: !0, customBackgroundStyle: m }),
                        ),
                        o().createElement('div', { className: y }),
                        t && o().createElement('div', { className: f }, o().createElement(h, null)),
                    );
                });
            },
            8024: (e, u, t) => {
                t.d(u, { k: () => i, t: () => o });
                var n = t(5090),
                    a = t(9723),
                    r = t(5369);
                const s = (0, n.q3)()(({ observableModel: e }) => {
                        const u = {
                                levels: e.object(),
                                nowRewards: e.array('nowRewards.items'),
                                futureRewards: e.array('futureRewards.items'),
                            },
                            t = (0, r.Om)(() => u.nowRewards.get(), { equals: a.jv }),
                            n = (0, r.Om)(() => u.futureRewards.get(), { equals: a.jv });
                        return Object.assign({}, u, { computes: { nowRewards: t, futureRewards: n } });
                    }, a.ZT),
                    i = s[0],
                    o = s[1];
            },
            1705: (e, u, t) => {
                t.d(u, { W4: () => a, wD: () => n });
                t(4490);
                const n = (e, u, t = '') => {
                        const n = t.length > 0 ? `_${t}` : t,
                            a = e.$dyn(`c_${u}${n}`),
                            r = String(u).slice(-1),
                            s = e.$dyn(`default_${r}${n}`);
                        return a || s;
                    },
                    a = (e) => {
                        const u = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${n(u.progression, e)})` }
                            : { backgroundImage: `url(${u.$dyn('common')})` };
                    };
            },
            3245: (e, u, t) => {
                let n = (function (e) {
                    return ((e.style = 'style'), (e.tankman = 'tankman'), e);
                })({});
                (n.style, n.tankman);
            },
            5278: (e, u, t) => {
                t.d(u, { $n: () => s });
                var n = t(2486),
                    a = t(4692);
                (t(768), t(873), t(6758), t(4490), t(3245));
                const r = (e) =>
                        e.bigIcon.includes('vehicle')
                            ? e.vehicleName
                            : e.bigIcon.includes('style_3d')
                              ? e.userName
                              : void 0,
                    s = (e, u = n.h2.Big, t = !1) => {
                        const s = e.item,
                            i = e.name,
                            o = e.value,
                            l = e.overlayType,
                            c = e.tooltipId,
                            d = e.tooltipContentId;
                        return {
                            name: s || i,
                            image: (0, a.ry)(e, u),
                            special: l,
                            value: o,
                            valueType: (0, a.p3)(i),
                            title: t && r(e),
                            tooltipArgs: (0, a.pI)({ tooltipId: c }, Number(d), { ignoreShowDelay: !0 }),
                            size: u,
                        };
                    };
            },
            3975: (e, u, t) => {
                t.d(u, { d: () => l });
                var n = t(9849),
                    a = t.n(n),
                    r = t(7363),
                    s = t.n(r),
                    i = t(1374);
                const o = 'AnimatedReward_base_f60ec',
                    l = ({ children: e, animationConfig: u, className: t }) => {
                        const n = (0, i.useSpring)(u);
                        return s().createElement(i.animated.div, { style: n, className: a()(o, t) }, e);
                    };
            },
            2215: (e, u, t) => {
                t.d(u, { Z: () => _e });
                var n = t(7363),
                    a = t.n(n),
                    r = t(9849),
                    s = t.n(r),
                    i = t(8739),
                    o = t(2041),
                    l = t(6485),
                    c = t(4029),
                    d = t(8925);
                const E = (e, u, t, n, a) => {
                    const r = R.images.gui.maps.icons.battlePass.awards_widget;
                    return a
                        ? `url(${r.$dyn(`${e.toLowerCase()}_${u}${t}_${n}_${a}`)})`
                        : `url(${r.$dyn(`${e.toLowerCase()}_${u}${t}_${n}`)})`;
                };
                let _ = (function (e) {
                        return (
                            (e.Award = 'Award'),
                            (e.Ticket = 'Ticket'),
                            (e.Coin = 'Coin'),
                            (e.Taler = 'Taler'),
                            (e.Collection = 'Collection'),
                            (e.Commander = 'Commander'),
                            e
                        );
                    })({}),
                    m = (function (e) {
                        return ((e.Small = 'small'), (e.Big = 'big'), e);
                    })({}),
                    A = (function (e) {
                        return ((e.None = ''), (e.Small = 's'), (e.Medium = 'm'), e);
                    })({}),
                    F = (function (e) {
                        return ((e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = ''), e);
                    })({}),
                    D = (function (e) {
                        return (
                            (e.Hover = 'Hover'),
                            (e.Disabled = 'Disabled'),
                            (e.Triggered = 'Triggered'),
                            (e.None = ''),
                            e
                        );
                    })({});
                const C = {
                        base: 'Background_base_f3073',
                        bg: 'Background_bg_a03fd',
                        bgDisabled: 'Background_bgDisabled_abb43',
                        bgHover: 'Background_bgHover_a39f3',
                        base__big: 'Background_base__big_a6d00',
                        base__hovered: 'Background_base__hovered_a74f9',
                    },
                    b = ({ size: e, isHover: u, disabled: t = !1, type: n = _.Coin }) => {
                        const r = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return a().createElement(
                            'div',
                            { className: s()(C.base, C[`base__${e}`], C[`base__${e}${n}`], u && C.base__hovered) },
                            t
                                ? a().createElement('div', {
                                      className: C.bgDisabled,
                                      style: { backgroundImage: E(n, F.Background, D.Disabled, e, r) },
                                  })
                                : a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement('div', {
                                          className: C.bg,
                                          style: { backgroundImage: E(n, F.Background, D.None, e, r) },
                                      }),
                                      a().createElement('div', {
                                          className: C.bgHover,
                                          style: { backgroundImage: E(n, F.Background, D.Hover, e, r) },
                                      }),
                                  ),
                        );
                    },
                    B = {
                        base: 'Border_base_a4523',
                        border: 'Border_border_d8967',
                        borderHover: 'Border_borderHover_e30d7',
                        base__hovered: 'Border_base__hovered_d4ec9',
                        borderDisabled: 'Border_borderDisabled_eb6d6',
                        borderDisabled__big: 'Border_borderDisabled__big_f5398',
                    },
                    g = ({ size: e, isHover: u, highlighted: t = !1, disabled: n = !1, type: r = _.Coin }) => {
                        const i = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return a().createElement(
                            'div',
                            { className: s()(B.base, B[`base__${e}`], u && B.base__hovered) },
                            n
                                ? a().createElement('div', {
                                      className: s()(B.borderDisabled, B[`borderDisabled__${e}`]),
                                      style: { backgroundImage: E(r, F.Border, D.Disabled, e, i) },
                                  })
                                : a().createElement(
                                      a().Fragment,
                                      null,
                                      a().createElement('div', {
                                          className: B.border,
                                          style: { backgroundImage: E(t ? _.Collection : r, F.Border, D.None, e, i) },
                                      }),
                                      a().createElement('div', {
                                          className: B.borderHover,
                                          style: { backgroundImage: E(r, F.Border, D.Hover, e, i) },
                                      }),
                                  ),
                        );
                    };
                var p = t(1602),
                    h = t(5603);
                const v = { base: 'CountValue_base_b47f3', base__big: 'CountValue_base__big_b1f00' },
                    f = ({ state: e, count: u, size: t, maxCount: n = 0 }) => {
                        switch (e) {
                            case y.InProgress:
                                return a().createElement(h.z, { text: `${u || 0} / ${n}` });
                            case y.Completed:
                                return a().createElement('div', { className: s()(v.base, v[`base__${t}`]) });
                            default:
                                return a().createElement(p.A, { format: 'integral', value: u });
                        }
                    },
                    w = {
                        base: 'Count_base_d2aba',
                        base__big: 'Count_base__big_fa81f',
                        base__locked: 'Count_base__locked_cb8f9',
                        base__disabled: 'Count_base__disabled_ac367',
                    };
                let y = (function (e) {
                    return ((e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed'), e);
                })({});
                const S = ({
                        size: e,
                        count: u,
                        maxCount: t,
                        state: n = y.Default,
                        isLocked: r = !1,
                        disabled: i = !1,
                    }) =>
                        a().createElement(
                            'div',
                            { className: s()(w.base, w[`base__${e}`], r && w.base__locked, i && w.base__disabled) },
                            a().createElement(f, { state: n, size: e, count: u, maxCount: t }),
                        ),
                    T = {
                        base: 'Icon_base_be976',
                        base__big: 'Icon_base__big_b2756',
                        base__darkened: 'Icon_base__darkened_d968e',
                        base__hover: 'Icon_base__hover_e2ee8',
                        base__disabled: 'Icon_base__disabled_a1f6f',
                    },
                    k = (e, u, t) => {
                        switch (!0) {
                            case t:
                                return 'disabled';
                            case e:
                                return 'hover';
                            case u:
                                return 'darkened';
                            default:
                                return '';
                        }
                    },
                    P = ({ size: e, isHover: u, isDark: t = !0, disabled: n = !1, type: r }) => {
                        const i = (0, d.GS)().mediaSize >= d.cJ.Medium ? A.Medium : A.Small;
                        return a().createElement('div', {
                            className: s()(T.base, T[`base__${e}`], T[`base__${k(u, t, n)}`]),
                            style: { backgroundImage: E(r, F.Icon, D.None, e, r === _.Collection ? A.None : i) },
                        });
                    },
                    N = {
                        base: 'Label_base_f2adf',
                        base__big: 'Label_base__big_dbfd8',
                        base__gold: 'Label_base__gold_bb470',
                        base__hover: 'Label_base__hover_e4ce6',
                        base__disabled: 'Label_base__disabled_dad1b',
                    },
                    x = (e, u) => {
                        switch (!0) {
                            case e:
                                return 'disabled';
                            case u:
                                return 'hover';
                            default:
                                return '';
                        }
                    },
                    M = ({ size: e, title: u, isHover: t, disabled: n = !1, isGold: r = !1 }) =>
                        a().createElement(
                            'div',
                            { className: s()(N.base, N[`base__${e}`], N[`base__${x(n, t)}`], r && N.base__gold) },
                            u,
                        ),
                    L = {
                        base: 'ChoiceAward_base_ab1a3',
                        base__big: 'ChoiceAward_base__big_febd0',
                        base__disabled: 'ChoiceAward_base__disabled_d33bf',
                        base__hasAppearAnimation: 'ChoiceAward_base__hasAppearAnimation_cfc1a',
                        baseAppear: 'ChoiceAward_baseAppear_df31e',
                        shine: 'ChoiceAward_shine_c0a04',
                        shine_small_s: 'ChoiceAward_shine_small_s_b113b',
                        shine_small_m: 'ChoiceAward_shine_small_m_a346a',
                        shine_big_s: 'ChoiceAward_shine_big_s_f2580',
                        shine_big_m: 'ChoiceAward_shine_big_m_e95e2',
                        shine__left: 'ChoiceAward_shine__left_c76a8',
                        shine__right: 'ChoiceAward_shine__right_d7679',
                        arrow: 'ChoiceAward_arrow_d0fa6',
                        blinkShape: 'ChoiceAward_blinkShape_a9abc',
                        blink: 'ChoiceAward_blink_b918b',
                        blinker: 'ChoiceAward_blinker_e8cd4',
                    },
                    O = R.strings.battle_pass.awardsWidget,
                    I = ({ count: e, disabled: u = !1, onClick: t, size: r }) => {
                        const i = (0, n.useState)(!1),
                            o = i[0],
                            d = i[1],
                            E = 1 === e ? O.title.awardSingle() : O.title.awardMultiple(),
                            m = u ? O.description.awardDisabled() : O.description.award(),
                            A = (0, n.useCallback)(() => {
                                u || (c.$.playClick(), t());
                            }, [u, t]);
                        return a().createElement(
                            l.i,
                            { body: m, isEnabled: Boolean(m) },
                            a().createElement(
                                'div',
                                {
                                    className: s()(
                                        L.base,
                                        L[`base__${r}`],
                                        u ? L.base__disabled : L.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), d(!0));
                                    },
                                    onMouseLeave: () => {
                                        d(!1);
                                    },
                                    onClick: A,
                                },
                                a().createElement(g, { size: r, isHover: o, type: _.Award, disabled: u }),
                                a().createElement(b, { size: r, isHover: o, type: _.Award, disabled: u }),
                                a().createElement(P, { size: r, isHover: o, type: _.Award, disabled: u, isDark: !1 }),
                                a().createElement(S, { size: r, count: e, disabled: u }),
                                a().createElement(M, { size: r, isHover: o, title: E, disabled: u, isGold: !0 }),
                                !u &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: s()(L.shine, L.shine__left) }),
                                        a().createElement('div', { className: s()(L.shine, L.shine__right) }),
                                        a().createElement('div', { className: L.arrow }),
                                        a().createElement(
                                            'div',
                                            { className: L.blinkShape },
                                            a().createElement('div', { className: L.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    z = { base: 'CoinAward_base_eb565', base__big: 'CoinAward_base__big_ddf7f' },
                    U = R.strings.battle_pass.awardsWidget,
                    H = ({ count: e, onClick: u, size: t }) => {
                        const r = (0, n.useState)(!1),
                            i = r[0],
                            o = r[1];
                        return a().createElement(
                            l.i,
                            { body: U.description.coin(), isEnabled: Boolean(U.description.coin()) },
                            a().createElement(
                                'div',
                                {
                                    className: s()(z.base, z[`base__${t}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (c.$.playClick(), u());
                                    },
                                },
                                a().createElement(g, { size: t, isHover: i }),
                                a().createElement(b, { size: t, isHover: i }),
                                a().createElement(P, { size: t, isHover: i, type: _.Coin }),
                                a().createElement(S, { size: t, count: e }),
                                a().createElement(M, { size: t, isHover: i, title: U.title.coin() }),
                            ),
                        );
                    },
                    G = {
                        base: 'Counter_base_b457c',
                        show: 'Counter_show_a62c2',
                        base__big: 'Counter_base__big_d6a57',
                        base__small: 'Counter_base__small_ea547',
                        base__empty: 'Counter_base__empty_c2ad2',
                        base__animated: 'Counter_base__animated_fb5ef',
                        base__hidden: 'Counter_base__hidden_b1e71',
                        hide: 'Counter_hide_d1bf0',
                        bg: 'Counter_bg_f25ac',
                        value: 'Counter_value_d1de3',
                        value__text: 'Counter_value__text_bb007',
                        base__pattern: 'Counter_base__pattern_d1fff',
                        plus: 'Counter_plus_a405c',
                        pattern: 'Counter_pattern_a4be2',
                    },
                    $ = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function W() {
                    return (
                        (W = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        W.apply(null, arguments)
                    );
                }
                const Z = (e) => {
                    let u = e.value,
                        t = e.isEmpty,
                        n = void 0 !== t && t,
                        r = e.className,
                        i = e.size,
                        o = void 0 === i ? 'normal' : i,
                        l = e.fadeInAnimation,
                        c = void 0 !== l && l,
                        d = e.hide,
                        E = void 0 !== d && d,
                        _ = e.maximumNumber,
                        m = void 0 === _ ? 99 : _,
                        A = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (-1 !== u.indexOf(n)) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, $);
                    const F = n ? null : u,
                        D = 'string' == typeof F;
                    if ((F && !D && F < 0) || 0 === F) return null;
                    const C = F && !D && F > m,
                        b = s()(
                            G.base,
                            G[`base__${o}`],
                            c && G.base__animated,
                            E && G.base__hidden,
                            !F && G.base__pattern,
                            n && G.base__empty,
                            r,
                        );
                    return a().createElement(
                        'div',
                        W({ className: b }, A),
                        a().createElement('div', { className: G.bg }),
                        a().createElement('div', { className: G.pattern }),
                        a().createElement(
                            'div',
                            { className: s()(G.value, D && G.value__text) },
                            C ? m : F,
                            C && a().createElement('span', { className: G.plus }, '+'),
                        ),
                    );
                };
                var j = t(9659);
                const q = {
                        base: 'CollectionAward_base_f6b67',
                        base__big: 'CollectionAward_base__big_a4e03',
                        bubble: 'CollectionAward_bubble_c556b',
                    },
                    V = R.strings.battle_pass.awardsWidget,
                    Y = ({ count: e, maxCount: u, newItemsCount: t, hasTrigger: r, size: i, onClick: o }) => {
                        const d = (0, n.useState)(!1),
                            E = d[0],
                            A = d[1],
                            F = u === e,
                            D = i === m.Small && r,
                            C = F ? V.description.collectionCompleted() : V.description.collection(),
                            B = (0, j.z)(() => {
                                (c.$.playClick(), o());
                            });
                        return a().createElement(
                            l.i,
                            { body: C, isEnabled: Boolean(C) },
                            a().createElement(
                                'div',
                                {
                                    className: s()(q.base, q[`base__${i}`]),
                                    onMouseEnter: () => {
                                        ((0, c.G)(R.sounds.bp_highlight_02()), A(!0));
                                    },
                                    onMouseLeave: () => {
                                        A(!1);
                                    },
                                    onClick: B,
                                },
                                a().createElement(g, { size: i, isHover: E, type: _.Coin, highlighted: D }),
                                a().createElement(b, { size: i, isHover: E }),
                                a().createElement(P, { size: i, isHover: E, type: _.Collection }),
                                a().createElement(S, {
                                    size: i,
                                    count: e,
                                    maxCount: u,
                                    state: F ? y.Completed : y.InProgress,
                                }),
                                a().createElement(M, { size: i, isHover: E, title: V.title.collection() }),
                                t > 0 &&
                                    a().createElement(
                                        'div',
                                        { className: q.bubble },
                                        a().createElement(Z, { size: 'small' }),
                                    ),
                            ),
                        );
                    };
                var K = t(3925);
                const Q = {
                        base: 'CommanderAward_base_ad575',
                        icon: 'CommanderAward_icon_e1e10',
                        base__hover: 'CommanderAward_base__hover_cedd4',
                    },
                    X = R.strings.battle_pass.awardsWidget,
                    J = ({ onClick: e, size: u, tankmenScreenID: t }) => {
                        const r = (0, n.useState)(!1),
                            i = r[0],
                            o = r[1],
                            c = X.description.commander(),
                            d =
                                R.images.gui.maps.icons.battlePass.awards_widget.$dyn(`commander_icon_small_${t}`) ||
                                R.images.gui.maps.icons.battlePass.awards_widget.commander_icon_small();
                        return a().createElement(
                            l.i,
                            { body: c, isEnabled: Boolean(c) },
                            a().createElement(
                                'div',
                                {
                                    className: s()(Q.base, Q[`base__${u}`], i && Q.base__hover),
                                    onMouseEnter: () => {
                                        (K.hY.sound(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => o(!1),
                                    onClick: () => {
                                        (K.hY.sound(R.sounds.play()), e());
                                    },
                                },
                                a().createElement(g, { size: u, isHover: i }),
                                a().createElement(b, { size: u, isHover: i }),
                                a().createElement(M, { size: u, isHover: i, title: X.title.commander() }),
                                a().createElement('div', {
                                    className: Q.icon,
                                    style: { backgroundImage: `url(${d})` },
                                }),
                            ),
                        );
                    },
                    ee = { base: 'TalerAward_base_bd8d2', base__big: 'TalerAward_base__big_e13b6' },
                    ue = R.strings.battle_pass.awardsWidget,
                    te = ({ count: e, onClick: u, size: t }) => {
                        const r = (0, n.useState)(!1),
                            i = r[0],
                            o = r[1];
                        return a().createElement(
                            l.i,
                            { body: ue.description.taler() },
                            a().createElement(
                                'div',
                                {
                                    className: s()(ee.base, ee[`base__${t}`], i && ee.base__hover),
                                    onMouseEnter: () => {
                                        (K.hY.sound(R.sounds.bp_highlight_02()), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (K.hY.click(), u());
                                    },
                                },
                                a().createElement(g, { size: t, isHover: i }),
                                a().createElement(b, { size: t, isHover: i }),
                                a().createElement(P, { size: t, isHover: i, type: _.Taler }),
                                a().createElement(S, { size: t, count: e }),
                                a().createElement(M, { size: t, isHover: i, title: ue.title.taler() }),
                            ),
                        );
                    },
                    ne = {
                        base: 'TicketAward_base_f3d98',
                        base__big: 'TicketAward_base__big_a6dda',
                        base__hasAppearAnimation: 'TicketAward_base__hasAppearAnimation_d3808',
                        baseAppear: 'TicketAward_baseAppear_cbc10',
                        shine: 'TicketAward_shine_d75b9',
                        shine_small_s: 'TicketAward_shine_small_s_b2d1d',
                        shine_small_m: 'TicketAward_shine_small_m_aa1d4',
                        shine_big_s: 'TicketAward_shine_big_s_ddf65',
                        shine_big_m: 'TicketAward_shine_big_m_ef804',
                        shine__left: 'TicketAward_shine__left_c8f17',
                        shine__right: 'TicketAward_shine__right_c0a9f',
                        arrow: 'TicketAward_arrow_d5617',
                        blinkShape: 'TicketAward_blinkShape_c798a',
                        blink: 'TicketAward_blink_d9f53',
                        blinker: 'TicketAward_blinker_ee314',
                    },
                    ae = R.strings.battle_pass.awardsWidget,
                    re = ({ count: e, onClick: u, size: t }) => {
                        const r = (0, n.useState)(!1),
                            i = r[0],
                            o = r[1],
                            c = Boolean(e),
                            d = c ? _.Ticket : void 0;
                        return a().createElement(
                            l.i,
                            { body: ae.description.ticket(), isEnabled: Boolean(ae.description.ticket()) },
                            a().createElement(
                                'div',
                                {
                                    className: s()(ne.base, ne[`base__${t}`], c && ne.base__hasAppearAnimation),
                                    onMouseEnter: () => {
                                        (K.hY.sound('bp_highlight_02'), o(!0));
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        (K.hY.sound('play'), u());
                                    },
                                },
                                a().createElement(g, { size: t, isHover: i, type: d }),
                                a().createElement(b, { size: t, isHover: i, type: d }),
                                a().createElement(P, { size: t, isHover: i, type: _.Ticket, isDark: !c }),
                                a().createElement(S, { size: t, count: e }),
                                a().createElement(M, { size: t, isHover: i, title: ae.title.ticket(), isGold: c }),
                                c &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: s()(ne.shine, ne.shine__left) }),
                                        a().createElement('div', { className: s()(ne.shine, ne.shine__right) }),
                                        a().createElement('div', { className: ne.arrow }),
                                        a().createElement(
                                            'div',
                                            { className: ne.blinkShape },
                                            a().createElement('div', { className: ne.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var se = t(5090),
                    ie = t(5369);
                const oe = (0, se.q3)()(
                        ({ observableModel: e, externalModel: u }) => {
                            const t = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                n = (0, ie.Om)((e) => {
                                    const n = t.root.get(),
                                        a = n.talerCount,
                                        r = n.notChosenRewardCount,
                                        s = n.bpcoinCount,
                                        i = n.ticketsCount,
                                        o = n.isChooseRewardsEnabled,
                                        l = n.tankmenScreenID,
                                        c = n.isTalerEnabled,
                                        d = n.isBpCoinEnabled,
                                        E = n.isTicketsEnabled,
                                        m = t.collectionEntryPoint.get(),
                                        A = m.collectionItemCount,
                                        F = m.newCollectionItemCount,
                                        D = m.maxCollectionItemCount,
                                        C = m.isFirstEnter,
                                        b = m.isCollectionsEnabled;
                                    return [
                                        {
                                            type: _.Award,
                                            props: {
                                                size: e,
                                                count: r,
                                                disabled: !o,
                                                onClick: u.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: r > 0,
                                        },
                                        {
                                            type: _.Ticket,
                                            props: {
                                                size: e,
                                                count: i,
                                                onClick: u.createCallbackNoArgs('showTickets'),
                                            },
                                            condition: E,
                                        },
                                        {
                                            type: _.Coin,
                                            props: {
                                                size: e,
                                                count: s,
                                                onClick: u.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: _.Taler,
                                            props: { size: e, count: a, onClick: u.createCallbackNoArgs('showTalers') },
                                            condition: c,
                                        },
                                        {
                                            type: _.Collection,
                                            props: {
                                                size: e,
                                                count: A,
                                                maxCount: D,
                                                newItemsCount: F,
                                                hasTrigger: C,
                                                onClick: u.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                                            },
                                            condition: b,
                                        },
                                        {
                                            type: _.Commander,
                                            props: {
                                                size: e,
                                                count: 0,
                                                tankmenScreenID: l,
                                                onClick: u.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: 0 !== l,
                                        },
                                    ];
                                });
                            return Object.assign({}, t, { computes: { awardsList: n } });
                        },
                        ({ externalModel: e }) => ({
                            openPointsInfo: e.createCallbackNoArgs('onPointsInfoClick'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            openGoodsForBpCoins: e.createCallbackNoArgs('onBpcoinClick'),
                            openGoodsForBpTalers: e.createCallbackNoArgs('showTalers'),
                            openCollection: e.createCallbackNoArgs('collectionEntryPoint.openCollection'),
                        }),
                    ),
                    le = oe[0],
                    ce = oe[1],
                    de = {
                        base: 'AwardsWrapper_base_c2632',
                        award: 'AwardsWrapper_award_a5575',
                        base__big: 'AwardsWrapper_base__big_c4528',
                    },
                    Ee = (0, o.Pi)(({ size: e, classNames: u }) => {
                        const t = ce().model;
                        return a().createElement(
                            'div',
                            { className: s()(de.base, de[`base__${e}`], null == u ? void 0 : u.base) },
                            i.UI(
                                t.computes.awardsList(e),
                                (e) =>
                                    e.condition &&
                                    a().createElement(
                                        'div',
                                        { key: e.type, className: s()(de.award, null == u ? void 0 : u.award) },
                                        ((e, u) => {
                                            switch (e) {
                                                case _.Award:
                                                    return a().createElement(I, u);
                                                case _.Ticket:
                                                    return a().createElement(re, u);
                                                case _.Coin:
                                                    return a().createElement(H, u);
                                                case _.Taler:
                                                    return a().createElement(te, u);
                                                case _.Collection:
                                                    return a().createElement(Y, u);
                                                case _.Commander:
                                                    return a().createElement(J, u);
                                                default:
                                                    return (console.warn('Unknown award type: ', e), null);
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    _e = ({ rootId: e, size: u = m.Small, context: t = 'model', classNames: n }) =>
                        a().createElement(
                            le,
                            { options: { context: t, rootId: e } },
                            a().createElement(Ee, { size: u, classNames: n }),
                        );
            },
            1158: (e, u, t) => {
                t.d(u, { N: () => c });
                var n = t(9849),
                    a = t.n(n),
                    r = t(7363),
                    s = t.n(r),
                    i = t(1705);
                const o = 'ChapterBackground_base_ec1b7',
                    l = 'ChapterBackground_base__current_d1211',
                    c = ({ chapter: e, isCurrent: u, customBackgroundStyle: t }) =>
                        s().createElement('div', { className: a()(o, u && l), style: t || (0, i.W4)(e) });
            },
            4490: (e, u, t) => {},
            1820: (e, u, t) => {
                t.d(u, { r: () => B });
                var n = t(9849),
                    a = t.n(n),
                    r = t(7363),
                    s = t.n(r),
                    i = t(2486),
                    o = t(3359),
                    l = t(8925),
                    c = t(8739),
                    d = t(5278);
                const E = 'GroupRewards_base_aacb3',
                    _ = 'GroupRewards_item_efa84',
                    m = ({ rewards: e, className: u }) => {
                        const t = (0, l.GS)().mediaSize < l.cJ.Medium ? i.h2.Small : i.h2.Big;
                        return s().createElement(
                            'div',
                            { className: a()(E, u) },
                            c.UI(e, (e, u) =>
                                s().createElement(
                                    'div',
                                    { key: `reward_${u}_${e.name}`, className: _ },
                                    s().createElement(o.Q, (0, d.$n)(e, t, !0)),
                                ),
                            ),
                        );
                    };
                var A = t(2714);
                const F = 'RewardsBlock_base_de0ba',
                    D = 'RewardsBlock_groupTitle_a9848',
                    C = 'RewardsBlock_groupRewards_a539c',
                    b = 'RewardsBlock_groupRewards__future_c0a72',
                    B = ({
                        description: e,
                        iconType: u,
                        steps: t = '',
                        rewards: n,
                        className: r = '',
                        title: i = '',
                    }) =>
                        s().createElement(
                            'div',
                            { className: a()(F, r) },
                            s().createElement(A.p, { description: e, type: u, steps: t, className: D, title: i }),
                            s().createElement(m, { rewards: n, className: a()(C, u === A.Q.future && b) }),
                        );
            },
            2714: (e, u, t) => {
                t.d(u, { p: () => c, Q: () => l });
                var n = t(9849),
                    a = t.n(n),
                    r = t(2616),
                    s = t(7363),
                    i = t.n(s);
                const o = {
                    base: 'GroupTitle_base_ffd14',
                    title: 'GroupTitle_title_ce668',
                    iconShadow: 'GroupTitle_iconShadow_b0e82',
                    base__now: 'GroupTitle_base__now_ba9ec',
                    base__future: 'GroupTitle_base__future_cec34',
                    icon: 'GroupTitle_icon_ce0f8',
                    titleText: 'GroupTitle_titleText_caeb2',
                    descriptionText: 'GroupTitle_descriptionText_fe55e',
                    steps: 'GroupTitle_steps_c10eb',
                };
                let l = (function (e) {
                    return ((e.now = 'now'), (e.future = 'future'), e);
                })({});
                const c = ({ description: e, type: u, steps: t = '', className: n = '', title: s = '' }) =>
                    i().createElement(
                        'div',
                        { className: a()(o.base, o[`base__${u}`], n) },
                        i().createElement('div', { className: o.iconShadow }),
                        i().createElement(
                            'div',
                            { className: o.title },
                            i().createElement('div', { className: o.icon }),
                            i().createElement('div', { className: o.titleText }, s),
                        ),
                        i().createElement(r.z, {
                            classMix: o.descriptionText,
                            text: e,
                            binding: { steps: i().createElement('span', { className: o.steps, key: t }, t) },
                        }),
                    );
            },
            3287: (e, u, t) => {
                t.d(u, { z: () => w });
                var n = t(9849),
                    a = t.n(n),
                    r = t(2884),
                    s = t(3934),
                    i = t(7363),
                    o = t.n(i),
                    l = t(8656),
                    c = t(8978),
                    d = t(828);
                function E(e, u, t, n, a, r, s) {
                    try {
                        var i = e[r](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                function _(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (n, a) {
                            var r = e.apply(u, t);
                            function s(e) {
                                E(r, n, a, s, i, 'next', e);
                            }
                            function i(e) {
                                E(r, n, a, s, i, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let m = (function (e) {
                    return (
                        (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End'),
                        e
                    );
                })({});
                const A = (e) => {
                        const u = (0, i.useState)(m.Idle),
                            t = u[0],
                            n = u[1],
                            a = e.animationScroll,
                            r = e.getContainerSize,
                            s = e.getWrapperSize,
                            o = e.events,
                            E = (0, i.useCallback)(() => {
                                const e = a.scrollPosition.get(),
                                    u = r() - s();
                                switch (!0) {
                                    case !u:
                                        return n(m.Idle);
                                    case e <= 0:
                                        return n(m.Start);
                                    case e >= u:
                                        return n(m.End);
                                    default:
                                        n(m.Between);
                                }
                            }, [a.scrollPosition, r, s]);
                        return (
                            (0, i.useEffect)(
                                () => (
                                    (function () {
                                        var e = _(function* () {
                                            yield (0, c.v)(E);
                                        });
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()(),
                                    o.on('change', E),
                                    () => o.off('change', E)
                                ),
                                [o, E],
                            ),
                            (0, i.useEffect)(() => {
                                const e = (function () {
                                    var e = _(function* () {
                                        (yield (0, d.Eu)(), yield (0, l.nS)(), E());
                                    });
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, [E]),
                            t
                        );
                    },
                    F = { type: 'idle' };
                const D = 'ScrollWithLips_base_f5336',
                    C = 'ScrollWithLips_lip_d5315',
                    b = 'ScrollWithLips_lip__top_eb0da',
                    B = 'ScrollWithLips_lip__bottom_a8083',
                    g = 'ScrollWithLips_scroll_a3a48',
                    p = 'ScrollWithLips_scroll__loaded_c247e',
                    h = 'ScrollWithLips_topButton_a9553',
                    v = 'ScrollWithLips_bottomButton_e59e6',
                    f = 'ScrollWithLips_track_d9f05',
                    w = ({ className: e, children: u, setVisibleScroll: t }) => {
                        const n = (0, s.useVerticalScrollApi)();
                        !(function (e, u) {
                            const t = e.contentRef,
                                n = e.wrapperRef,
                                a = e.scrollPosition,
                                r = e.clampPosition,
                                s = e.animationScroll,
                                o = e.events,
                                l = e.getContainerSize,
                                c = e.getWrapperSize,
                                d = (0, i.useState)(F),
                                E = d[0],
                                _ = d[1],
                                m = (0, i.useState)(!1),
                                A = m[0],
                                D = m[1];
                            ((0, i.useEffect)(() => {
                                const e = t.current;
                                e && (e.style.cursor = A ? ('dragging' === E.type ? 'grabbing' : 'grab') : 'default');
                            }, [t, A, E.type]),
                                (0, i.useEffect)(() => {
                                    if ('dragging' !== E.type) return;
                                    const e = (e) => {
                                            const i = t.current,
                                                o = n.current;
                                            if (!i || !o) return;
                                            const l = E.positionFrom - e.screenY,
                                                c = E.previousScrollPosition + l;
                                            a.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: r(i, c),
                                                        from: { scrollPosition: s.scrollPosition.get() },
                                                    },
                                                    u && { config: u },
                                                ),
                                            );
                                        },
                                        i = () => {
                                            (window.removeEventListener('mousemove', e), _({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', i),
                                        () => {
                                            (window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', i));
                                        }
                                    );
                                }, [s.scrollPosition, r, t, E, a, n, u]),
                                (0, i.useEffect)(() => {
                                    if ('scrollingToEnd' !== E.type) return;
                                    const e = () => {
                                        _(F);
                                    };
                                    return (s.scrollPosition.idle && e(), o.on('rest', e), () => o.off('rest', e));
                                }, [s.scrollPosition, E.type, o]),
                                (0, i.useEffect)(() => {
                                    const e = t.current;
                                    if (!e) return;
                                    const u = (e) => {
                                        0 === e.button &&
                                            _({
                                                type: 'dragging',
                                                positionFrom: e.screenY,
                                                previousScrollPosition: s.scrollPosition.get(),
                                            });
                                    };
                                    return (
                                        e.addEventListener('mousedown', u),
                                        () => e.removeEventListener('mousedown', u)
                                    );
                                }, [s.scrollPosition, t]),
                                (0, i.useEffect)(() => {
                                    const e = () => {
                                        var e, u;
                                        const t = null != (e = l()) ? e : 0,
                                            n = null != (u = c()) ? u : 0;
                                        D(t > n);
                                    };
                                    return (
                                        o.on('resizeHandled', e),
                                        o.on('recalculateContent', e),
                                        () => {
                                            (o.off('resizeHandled', e), o.off('recalculateContent', e));
                                        }
                                    );
                                }, [o, l, c]));
                        })(n);
                        const l = A(n),
                            c = l !== m.Idle;
                        return (
                            (0, i.useEffect)(() => {
                                t && t(l !== m.Idle);
                            }, [t, l]),
                            o().createElement(
                                'div',
                                { className: a()(D, e) },
                                l !== m.Start && l !== m.Idle && o().createElement('div', { className: a()(C, b) }),
                                l !== m.End && l !== m.Idle && o().createElement('div', { className: a()(C, B) }),
                                o().createElement(
                                    r.X.Vertical.Area.Default,
                                    {
                                        api: n,
                                        barClassNames: {
                                            base: a()(g, c && p),
                                            topButton: h,
                                            bottomButton: v,
                                            track: f,
                                        },
                                    },
                                    u,
                                ),
                            )
                        );
                    };
            },
            4053: (e, u, t) => {
                t.d(u, { t: () => r });
                var n = t(7363);
                const a = (0, n.createContext)(void 0);
                function r() {
                    const e = (0, n.useContext)(a);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            9994: (e, u, t) => {
                t.d(u, { N: () => n });
                var n = {};
                (t.r(n), t.d(n, { Provider: () => A, useApi: () => _, useHandleKeydown: () => m }));
                var a = t(7475),
                    r = t(9659),
                    s = t(7363),
                    i = t.n(s),
                    o = t(4020);
                class l {
                    constructor() {
                        this.items = [];
                    }
                    get length() {
                        return this.items.length;
                    }
                    push(e) {
                        this.items.push(e);
                    }
                    pop() {
                        return this.items.pop();
                    }
                    peek() {
                        return this.items[this.items.length - 1];
                    }
                    clear() {
                        this.items = [];
                    }
                    includes(e) {
                        return this.items.includes(e);
                    }
                    some(e) {
                        return this.items.some(e);
                    }
                    remove(e) {
                        const u = this.items.indexOf(e);
                        return -1 !== u && (this.items.splice(u, 1), !0);
                    }
                    isEmpty() {
                        return 0 === this.items.length;
                    }
                    toArray() {
                        return this.items.slice();
                    }
                }
                var c = t(9723);
                const d = () => {
                        const e = new Map();
                        function u(u) {
                            const t = e.get(u);
                            if (t) return t;
                            const n = new l();
                            return (e.set(u, n), n);
                        }
                        function t(u, t) {
                            const n = e.get(u);
                            return !!n && n.remove(t);
                        }
                        return {
                            handlers: e,
                            obtain: u,
                            register: function (e, n) {
                                if (e === o.n.NONE) return c.jv;
                                const a = u(e);
                                return (a.includes(n) || a.push(n), () => t(e, n));
                            },
                            unregister: t,
                            takeCurrent: function (u) {
                                const t = e.get(u);
                                if (!t) return;
                                const n = t.peek();
                                return n || void 0;
                            },
                        };
                    },
                    E = (0, s.createContext)(void 0);
                function _() {
                    const e = (0, s.useContext)(E);
                    if (!e) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return e;
                }
                function m(e, u, t) {
                    const n = (0, r.z)((e) => {
                            a.O.view.isEventHandled() || (u(e), a.O.view.setEventHandled(), t && e.stopPropagation());
                        }),
                        i = _(),
                        o = (0, s.useMemo)(() => i.keydown.register(e, n), [i, e, n]);
                    (0, s.useEffect)(() => o, [o]);
                }
                const A = (e) => {
                    const u = (0, s.useMemo)(d, []);
                    (0, s.useEffect)(() => {
                        function e(e) {
                            const t = u.takeCurrent(e.keyCode);
                            t && t(e);
                        }
                        return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e));
                    });
                    const t = (0, s.useMemo)(
                        () => ({ keydown: { register: u.register, unregister: u.unregister } }),
                        [u],
                    );
                    return i().createElement(E.Provider, { value: t }, e.children);
                };
            },
            8862: (e, u, t) => {
                t.d(u, { tv: () => n.t });
                var n = t(4053),
                    a = t(7363);
                (0, a.createContext)(void 0);
            },
            768: (e, u, t) => {
                t.d(u, { E: () => n });
                let n = (function (e) {
                    return (
                        (e.Vehicle = 'vehicle'),
                        (e.VehicleStyle = 'vehicleStyle'),
                        (e.Style = 'style'),
                        (e.Tankman = 'tankman'),
                        (e.PostProgression = 'postProgression'),
                        e
                    );
                })({});
            },
            6290: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'CButton_base_bb13f',
                    base__main: 'CButton_base__main_dd05d',
                    base__primary: 'CButton_base__primary_c75a2',
                    base__primaryGreen: 'CButton_base__primaryGreen_ae65b',
                    base__primaryRed: 'CButton_base__primaryRed_b1341',
                    base__secondary: 'CButton_base__secondary_f2c20',
                    base__ghost: 'CButton_base__ghost_f452b',
                    base__extraSmall: 'CButton_base__extraSmall_e1273',
                    base__small: 'CButton_base__small_c20a3',
                    base__medium: 'CButton_base__medium_ef59a',
                    base__large: 'CButton_base__large_bafd5',
                    base__disabled: 'CButton_base__disabled_eef7a',
                    back: 'CButton_back_e957b',
                    texture: 'CButton_texture_ccd7e',
                    state: 'CButton_state_f2bb4',
                    base__focus: 'CButton_base__focus_b0875',
                    stateHighlightHover: 'CButton_stateHighlightHover_bd0cb',
                    stateHighlightActive: 'CButton_stateHighlightActive_e9a8a',
                    stateDisabled: 'CButton_stateDisabled_ed209',
                    base__highlightActive: 'CButton_base__highlightActive_db27d',
                    content: 'CButton_content_a99fc',
                };
            },
            4880: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_f27a4' };
            },
            5261: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'Reward_base_b1fec',
                    base__s48x48: 'Reward_base__s48x48_ea3ee',
                    base__small: 'Reward_base__small_d4940',
                    base__s80x80: 'Reward_base__s80x80_de3ac',
                    base__big: 'Reward_base__big_a4f0e',
                    base__s128x100: 'Reward_base__s128x100_c29f0',
                    base__s180x135: 'Reward_base__s180x135_cb4c8',
                    base__s232x174: 'Reward_base__s232x174_aea24',
                    base__s296x222: 'Reward_base__s296x222_cbf7c',
                    base__s400x300: 'Reward_base__s400x300_bb29d',
                    base__s600x450: 'Reward_base__s600x450_c4f07',
                    tooltipWrapper: 'Reward_tooltipWrapper_af665',
                    icon: 'Reward_icon_b619b',
                    overlay: 'Reward_overlay_dac5c',
                    base__normalize: 'Reward_base__normalize_b8703',
                    highlight: 'Reward_highlight_df36b',
                    image: 'Reward_image_e2997',
                    info: 'Reward_info_b27d2',
                    info__multi: 'Reward_info__multi_e08a5',
                    info__credits: 'Reward_info__credits_ccc0d',
                    info__gold: 'Reward_info__gold_af0a5',
                    info__bptaler: 'Reward_info__bptaler_d4229',
                    info__crystal: 'Reward_info__crystal_b0d9d',
                    info__premiumTank: 'Reward_info__premiumTank_f53be',
                    title: 'Reward_title_ab4e2',
                    timer: 'Reward_timer_c097c',
                };
            },
            8823: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalBar_base_fa517',
                    base__active: 'HorizontalBar_base__active_ad89b',
                    leftButton: 'HorizontalBar_leftButton_eb8c3',
                    rightButton: 'HorizontalBar_rightButton_f5116',
                    track: 'HorizontalBar_track_fd3af',
                    thumb: 'HorizontalBar_thumb_bb7e0',
                    rail: 'HorizontalBar_rail_a3d9e',
                };
            },
            4109: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'HorizontalScroll_base_a33a9',
                    wrapper: 'HorizontalScroll_wrapper_b622e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a2315',
                };
            },
            1905: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    base: 'VerticalBar_base_b5610',
                    base__active: 'VerticalBar_base__active_be260',
                    topButton: 'VerticalBar_topButton_c2227',
                    bottomButton: 'VerticalBar_bottomButton_ef09b',
                    track: 'VerticalBar_track_e3345',
                    thumb: 'VerticalBar_thumb_a34e7',
                    rail: 'VerticalBar_rail_ff232',
                };
            },
            2459: (e, u, t) => {
                t.d(u, { Z: () => n });
                const n = {
                    content: 'VerticalScroll_content_fe263',
                    defaultScroll: 'VerticalScroll_defaultScroll_e27f5',
                    bar: 'VerticalScroll_bar_b8700',
                    area: 'VerticalScroll_area_b5a82',
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
                    for (var [u, t, n] = deferred[o], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
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
        (__webpack_require__.j = 9258),
        (() => {
            var e = { 9258: 0, 2155: 0, 8872: 0, 7737: 0, 8805: 0, 6488: 0, 2670: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, s, i] = t,
                        o = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < r.length; o++)
                        ((a = r[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(6734));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
