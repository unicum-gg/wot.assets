(() => {
    'use strict';
    var __webpack_modules__ = {
            7109: (e, u, t) => {
                t.d(u, { L$: () => l.L, qE: () => l.q, u5: () => d });
                var r = t(9849),
                    n = t.n(r),
                    a = t(4170),
                    s = t(4029),
                    i = t(7363),
                    o = t.n(i),
                    c = t(6290),
                    l = t(2262);
                const d = ({
                    children: e,
                    size: u,
                    disabled: t,
                    mixClass: r,
                    onMouseEnter: d,
                    onMouseMove: E,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: F,
                    isFocused: D = !1,
                    type: C = l.L.primary,
                    soundHover: g = 'highlight',
                    soundClick: B = 'play',
                }) => {
                    const p = (0, i.useRef)(null),
                        f = (0, i.useState)(D),
                        h = f[0],
                        v = f[1],
                        b = (0, i.useState)(!1),
                        w = b[0],
                        y = b[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                h && null !== p.current && !p.current.contains(e.target) && v(!1);
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
                                ref: p,
                                className: n()(
                                    c.Z.base,
                                    c.Z[`base__${C}`],
                                    t && c.Z.base__disabled,
                                    u && c.Z[`base__${u}`],
                                    h && c.Z.base__focus,
                                    w && c.Z.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (e) {
                                    t || (null !== g && (0, s.G)(g), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    t || (m && m(e), y(!1));
                                },
                                onMouseDown: function (e) {
                                    if (t) return;
                                    const u = e.button === a.t.LEFT;
                                    (null !== B && u && (0, s.G)(B),
                                        _ && _(e),
                                        D && (t || (p.current && (p.current.focus(), v(!0)))),
                                        u && y(!0));
                                },
                                onMouseLeave: function (e) {
                                    t || (A && A(e), y(!1));
                                },
                                onClick: function (e) {
                                    t || (F && F(e));
                                },
                            },
                            C !== l.L.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: c.Z.back }),
                                    o().createElement('span', { className: c.Z.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: n()(c.Z.state, c.Z.state__default) },
                                o().createElement('span', { className: c.Z.stateDisabled }),
                                o().createElement('span', { className: c.Z.stateHighlightHover }),
                                o().createElement('span', { className: c.Z.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: c.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
            },
            2262: (e, u, t) => {
                t.d(u, { L: () => r, q: () => n });
                let r = (function (e) {
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
                    n = (function (e) {
                        return (
                            (e.extraSmall = 'extraSmall'),
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            e
                        );
                    })({});
            },
            4579: (e, u, t) => {
                t.d(u, { F: () => l });
                var r = t(9849),
                    n = t.n(r),
                    a = t(1602),
                    s = t(7363),
                    i = t.n(s);
                const o = {
                    base: 'Currency_base_ed02c',
                    icon: 'Currency_icon_d34e3',
                    base__small: 'Currency_base__small_af876',
                    base__big: 'Currency_base__big_f6388',
                    base__large: 'Currency_base__large_fb228',
                    base__extraLarge: 'Currency_base__extraLarge_d0b11',
                    'icon__credits-small': 'Currency_icon__credits-small_cb645',
                    'icon__credits-big': 'Currency_icon__credits-big_bb614',
                    'icon__credits-large': 'Currency_icon__credits-large_b65af',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_a4a53',
                    'icon__gold-small': 'Currency_icon__gold-small_eee32',
                    'icon__gold-big': 'Currency_icon__gold-big_e419a',
                    'icon__gold-large': 'Currency_icon__gold-large_c3a99',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_f2852',
                    'icon__crystal-small': 'Currency_icon__crystal-small_d8644',
                    'icon__crystal-big': 'Currency_icon__crystal-big_f2873',
                    'icon__crystal-large': 'Currency_icon__crystal-large_cf068',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_a9843',
                    'icon__xp-small': 'Currency_icon__xp-small_f3b46',
                    'icon__xp-big': 'Currency_icon__xp-big_c984a',
                    'icon__xp-large': 'Currency_icon__xp-large_e9a09',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_f90f7',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_bcda1',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_eb64e',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_e46b0',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_e41b1',
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_c4a51',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_eceb0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_e35ab',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_a17d5',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_d3b9a',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_c34e1',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_b1b5e',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_a7b90',
                    value: 'Currency_value_bb176',
                    value__freeXP: 'Currency_value__freeXP_db401',
                    value__credits: 'Currency_value__credits_c98c5',
                    value__gold: 'Currency_value__gold_b8214',
                    value__xp: 'Currency_value__xp_eda0a',
                    value__crystal: 'Currency_value__crystal_cf72e',
                    value__equipCoin: 'Currency_value__equipCoin_cb08d',
                    value__eliteXP: 'Currency_value__eliteXP_de450',
                    value__notEnough: 'Currency_value__notEnough_db10a',
                    stock: 'Currency_stock_bffbc',
                    stock__indent: 'Currency_stock__indent_c4c0d',
                    stock__interactive: 'Currency_stock__interactive_e78a9',
                    stockBackground: 'Currency_stockBackground_c8ab1',
                };
                var c = t(4585);
                const l = (0, s.memo)(
                    ({
                        isDiscount: e,
                        isInteractiveDiscount: u,
                        size: t,
                        type: r,
                        value: s,
                        discountValue: l,
                        showPlus: d,
                        isEnough: E = !0,
                        stockBackgroundName: _ = c.we.Red,
                        className: m,
                        classNames: A,
                    }) =>
                        i().createElement(
                            'span',
                            { className: n()(o.base, o[`base__${t}`], m) },
                            i().createElement(
                                'span',
                                {
                                    className: n()(
                                        o.value,
                                        o[`value__${r}`],
                                        !E && o.value__notEnough,
                                        null == A ? void 0 : A.value,
                                    ),
                                },
                                d && s > 0 && '+',
                                i().createElement(a.A, { value: s, format: r === c.V2.gold ? 'gold' : 'integral' }),
                            ),
                            i().createElement('span', {
                                className: n()(o.icon, o[`icon__${r}-${t}`], null == A ? void 0 : A.icon),
                            }),
                            e &&
                                i().createElement(
                                    'span',
                                    {
                                        className: n()(
                                            o.stock,
                                            l && o.stock__indent,
                                            u && o.stock__interactive,
                                            null == A ? void 0 : A.stock,
                                        ),
                                    },
                                    i().createElement('span', {
                                        className: o.stockBackground,
                                        style: { backgroundImage: `url(R.images.gui.maps.icons.library.${_})` },
                                    }),
                                    Boolean(l) && l,
                                ),
                        ),
                );
            },
            4585: (e, u, t) => {
                t.d(u, { V2: () => n, et: () => r, we: () => a });
                let r = (function (e) {
                        return (
                            (e.small = 'small'),
                            (e.big = 'big'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'),
                            e
                        );
                    })({}),
                    n = (function (e) {
                        return (
                            (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin'),
                            e
                        );
                    })({}),
                    a = (function (e) {
                        return ((e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG'), e);
                    })({});
            },
            1602: (e, u, t) => {
                t.d(u, { A: () => n });
                var r = t(828);
                const n = ({ value: e, format: u = 'integral' }) => {
                    const t = (function (e) {
                            return 'gold' === e ? r.B3.GOLD : r.B3.INTEGRAL;
                        })(u),
                        n = r.Z5.getNumberFormat(e, t);
                    return void 0 !== e && void 0 !== n ? n : null;
                };
            },
            2616: (e, u, t) => {
                t.d(u, { z: () => c });
                var r = t(9849),
                    n = t.n(r),
                    a = t(6758),
                    s = t(7363),
                    i = t.n(s),
                    o = t(4880);
                const c = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: r = a.v2.left,
                    formatWithBrackets: c,
                }) => {
                    if (null === u) return (console.error("FormatText was supplied with 'null'"), null);
                    const l = c && e ? (0, a.WU)(u, e) : u;
                    return i().createElement(
                        s.Fragment,
                        null,
                        l.split('\n').map((u, c) =>
                            i().createElement(
                                'div',
                                { className: n()(o.Z.base, t), key: `${u}-${c}` },
                                (0, a.Uw)(u, r, e).map((e, u) =>
                                    i().createElement(s.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            5603: (e, u, t) => {
                t.d(u, { z: () => r.z });
                var r = t(2616);
                t(1749);
            },
            1749: (e, u, t) => {
                t(6758);
            },
            397: (e, u, t) => {
                t.d(u, { Y: () => o });
                var r = t(7475),
                    n = t(7363),
                    a = t(1958),
                    s = t(9478);
                const i = (function (e = r.O.client.getSize('rem')) {
                        const u = e.width,
                            t = e.height;
                        return Object.assign({ width: u, height: t }, (0, s.T)(u, t, a.j));
                    })(),
                    o = (0, n.createContext)(i);
            },
            68: (e, u, t) => {
                (t(7475), t(7363), t(397));
            },
            5191: (e, u, t) => {
                var r = t(7363),
                    n = t(3034),
                    a = t(397);
                const s = ['children'];
                (0, r.memo)((e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== u.indexOf(r)) continue;
                                    t[r] = e[r];
                                }
                            return t;
                        })(e, s);
                    const i = (0, r.useContext)(a.Y),
                        o = i.extraLarge,
                        c = i.large,
                        l = i.medium,
                        d = i.small,
                        E = i.extraSmall,
                        _ = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        D = i.extraSmallWidth,
                        C = i.extraLargeHeight,
                        g = i.largeHeight,
                        B = i.mediumHeight,
                        p = i.smallHeight,
                        f = i.extraSmallHeight,
                        h = { extraLarge: C, large: g, medium: B, small: p, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && c) return u;
                        if (t.medium && l) return u;
                        if (t.small && d) return u;
                        if (t.extraSmall && E) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, n.H)(u, t, h);
                        if (t.largeWidth && m) return (0, n.H)(u, t, h);
                        if (t.mediumWidth && A) return (0, n.H)(u, t, h);
                        if (t.smallWidth && F) return (0, n.H)(u, t, h);
                        if (t.extraSmallWidth && D) return (0, n.H)(u, t, h);
                        if (!(
                            t.extraLargeWidth ||
                            t.largeWidth ||
                            t.mediumWidth ||
                            t.smallWidth ||
                            t.extraSmallWidth
                        )) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && B) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && f) return u;
                        }
                    }
                    return null;
                });
            },
            3034: (e, u, t) => {
                t.d(u, { H: () => r });
                const r = (e, u, t) =>
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
                t.d(u, { YN: () => r.Y });
                (t(5191), t(68));
                var r = t(397);
            },
            1958: (e, u, t) => {
                t.d(u, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            9478: (e, u, t) => {
                t.d(u, { T: () => r });
                function r(e, u, t) {
                    const r = (function (e, u) {
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
                        n = (function (e, u) {
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
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
                    };
                }
            },
            3359: (e, u, t) => {
                t.d(u, { Q: () => d });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    s = t.n(a),
                    i = t(1672),
                    o = t(2486),
                    c = t(4692),
                    l = t(5261);
                const d = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: r = o.h2.Big,
                    special: a,
                    value: d,
                    valueType: E,
                    title: _,
                    style: m,
                    className: A,
                    classNames: F,
                    tooltipArgs: D,
                    periodicIconTooltipArgs: C,
                }) => {
                    const g = (0, c.c$)(r, a),
                        B = (0, c.i2)(a),
                        p = (0, c.m9)(d, E);
                    return s().createElement(
                        'div',
                        {
                            className: n()(l.Z.base, l.Z[`base__${r}`], o.oy.includes(e) && l.Z.base__normalize, A),
                            style: m,
                        },
                        s().createElement(
                            i.l,
                            { tooltipArgs: D, className: l.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: n()(l.Z.image, null == F ? void 0 : F.image) },
                                    g &&
                                        s().createElement('div', {
                                            className: n()(l.Z.highlight, null == F ? void 0 : F.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: n()(l.Z.icon, null == F ? void 0 : F.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    B &&
                                        s().createElement('div', {
                                            className: n()(l.Z.overlay, null == F ? void 0 : F.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${B}_overlay)`,
                                            },
                                        }),
                                ),
                                p &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                l.Z.info,
                                                l.Z[`info__${e}`],
                                                E === o.$h.MULTI && l.Z.info__multi,
                                                null == F ? void 0 : F.info,
                                            ),
                                        },
                                        p,
                                    ),
                                _ && s().createElement('div', { className: l.Z.title }, _),
                            ),
                        ),
                        t &&
                            s().createElement(
                                i.l,
                                { tooltipArgs: C },
                                s().createElement('div', {
                                    className: n()(l.Z.timer, null == F ? void 0 : F.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2486: (e, u, t) => {
                t.d(u, { $h: () => a, A2: () => i, E4: () => r, h2: () => n, kK: () => s, oy: () => c, sh: () => o });
                let r = (function (e) {
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
                    n = (function (e) {
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
                    a = (function (e) {
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
                const c = [r.Attachment];
            },
            4692: (e, u, t) => {
                t.d(u, { c$: () => D, i2: () => C, m9: () => g, p3: () => d, pI: () => A, ry: () => m });
                var r = t(1602),
                    n = t(7363),
                    a = t.n(n),
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
                    c = [s.E4.BattlePassPoints, s.E4.EquipCoin],
                    l = [s.E4.PremiumPlus, s.E4.Premium],
                    d = (e) =>
                        i.includes(e)
                            ? s.$h.MULTI
                            : o.includes(e)
                              ? s.$h.CURRENCY
                              : c.includes(e)
                                ? s.$h.NUMBER
                                : l.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    E = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    m = (e, u = s.h2.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            a = e.icon,
                            i = e.item,
                            o = e.dogTagType,
                            c = ((e) => {
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = E[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(_[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${c}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${c}.${a}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${c}.${a}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${u}.${a}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${u}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    A = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
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
                    g = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return a().createElement(r.A, { format: 'integral', value: Number(e) });
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
                t.d(u, { nS: () => r });
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
                function r() {
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
                var r = t(9849),
                    n = t.n(r),
                    a = t(8463),
                    s = t(8978),
                    i = t(7475),
                    o = t(9659),
                    c = t(5239),
                    l = t(4029),
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
                    g = (e, u) => Math.max(20, e.offsetWidth * u),
                    B = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = D, onDrag: r = C }) => {
                        const B = (0, d.useRef)(null),
                            p = (0, d.useRef)(null),
                            f = (0, d.useRef)(null),
                            h = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            b = e.stepTimeout || 100,
                            w = (0, d.useState)(F),
                            y = w[0],
                            R = w[1],
                            P = (0, d.useCallback)(
                                (e) => {
                                    (R(e),
                                        v.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current }));
                                },
                                [r],
                            ),
                            S = () => {
                                const u = h.current,
                                    t = v.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    o = (0, a.u)(0, 1, s / (n - r)),
                                    c = (u.offsetWidth - g(u, i)) * o;
                                ((t.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (p.current && f.current && h.current && v.current) {
                                            if (0 === e)
                                                return (p.current.classList.add(A), void f.current.classList.remove(A));
                                            if (
                                                ((u = h.current),
                                                (t = v.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (p.current.classList.remove(A), void f.current.classList.add(A));
                                            var u, t;
                                            (p.current.classList.remove(A), f.current.classList.remove(A));
                                        }
                                    })(c));
                            },
                            k = (0, o.z)(() => {
                                ((() => {
                                    const u = v.current,
                                        t = h.current,
                                        r = e.getWrapperSize(),
                                        n = e.getContainerSize();
                                    if (!(n && u && r && t)) return;
                                    const a = Math.min(1, r / n);
                                    ((u.style.width = `${g(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        B.current &&
                                            (1 !== a
                                                ? B.current.classList.add(m.Z.base__active)
                                                : B.current.classList.remove(m.Z.base__active)));
                                })(),
                                    S());
                            });
                        ((0, d.useEffect)(() => (0, s.v)(k)),
                            (0, d.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const u = () => {
                                            S();
                                        };
                                        let t = C;
                                        const r = () => {
                                            (t(), (t = (0, s.v)(k)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', k),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', k),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, d.useEffect)(() => {
                                if (!y.pending) return;
                                const u = i.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const i = h.current,
                                            o = v.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const c = u.clientX - y.offset - i.getBoundingClientRect().x,
                                            l = (c / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: o, thumbOffset: c, contentOffset: l }));
                                    }),
                                    t = i.O.client.events.mouse.up(() => {
                                        (u(), P(F));
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, y.offset, y.pending, r, P]));
                        const T = (0, c.B)((u) => e.applyStepTo(u), b, [e]),
                            x = T[0],
                            N = T[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', N, !0),
                                () => document.removeEventListener('mouseup', N, !0)
                            ),
                            [N],
                        );
                        const O = (e) => {
                            e.target.classList.contains(A) || (0, l.G)('highlight');
                        };
                        return E().createElement(
                            'div',
                            { className: n()(m.Z.base, u.base), ref: B, onWheel: e.handleMouseWheel },
                            E().createElement('div', {
                                className: n()(m.Z.leftButton, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), x(_.Nm.Next));
                                },
                                onMouseUp: N,
                                ref: p,
                                onMouseEnter: O,
                            }),
                            E().createElement(
                                'div',
                                {
                                    className: n()(m.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const r = v.current;
                                        if (r && 0 === u.button)
                                            if (((0, l.G)('play'), u.target === r))
                                                P({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const r = v.current,
                                                        n = e.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > r.getBoundingClientRect().x ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: h,
                                    onMouseEnter: O,
                                },
                                E().createElement('div', { ref: v, className: n()(m.Z.thumb, u.thumb) }),
                                E().createElement('div', { className: n()(m.Z.rail, u.rail) }),
                            ),
                            E().createElement('div', {
                                className: n()(m.Z.rightButton, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), x(_.Nm.Prev));
                                },
                                onMouseUp: N,
                                ref: f,
                                onMouseEnter: O,
                            }),
                        );
                    });
            },
            2893: (e, u, t) => {
                t.d(u, { K: () => l });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    s = t.n(a),
                    i = t(7925),
                    o = t(969),
                    c = t(4109);
                const l = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: r,
                    areaClassName: l,
                    classNames: d,
                    scrollClassName: E,
                    getStepByRailClick: _,
                    onDrag: m,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: n()(c.Z.base, e.base) });
                        }, [r]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: n()(c.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: n()(c.Z.defaultScrollArea, l) },
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
                        DefaultScroll: () => c.K,
                        Direction: () => d.Nm,
                        defaultSettings: () => d.he,
                        useHorizontalScrollApi: () => d.T5,
                    }));
                var r = t(9849),
                    n = t.n(r),
                    a = t(8978),
                    s = t(7363),
                    i = t.n(s),
                    o = t(7925),
                    c = t(2893),
                    l = t(4109),
                    d = t(8718);
                const E = ({ api: e, className: u, classNames: t, children: r }) => (
                    (0, s.useEffect)(() => (0, a.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: n()(l.Z.base, u) },
                        i().createElement(
                            'div',
                            {
                                className: n()(l.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: n()(l.Z.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                r,
                            ),
                        ),
                    )
                );
                ((E.Bar = o.$Q), (E.Default = c.K));
            },
            8718: (e, u, t) => {
                t.d(u, { Nm: () => n.Nm, T5: () => s, he: () => n.he });
                var r = t(7475),
                    n = t(4977);
                const a = {
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
                        getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                        forceTriggerMouseMove: r.O.view.forceTriggerMouseMove,
                    },
                    s = (0, n.EO)(a);
            },
            5154: (e, u, t) => {
                t.d(u, { $Q: () => p });
                var r = t(9849),
                    n = t.n(r),
                    a = t(8463),
                    s = t(8978),
                    i = t(7475),
                    o = t(9659),
                    c = t(5239),
                    l = t(4029),
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
                    g = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    B = (e, u) => Math.max(20, e.offsetHeight * u),
                    p = (0, d.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = C, onDrag: r = F }) => {
                        const p = (0, d.useRef)(null),
                            f = (0, d.useRef)(null),
                            h = (0, d.useRef)(null),
                            v = (0, d.useRef)(null),
                            b = (0, d.useRef)(null),
                            w = e.stepTimeout || 100,
                            y = (0, d.useState)(D),
                            R = y[0],
                            P = y[1],
                            S = (0, d.useCallback)(
                                (e) => {
                                    (P(e),
                                        b.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: b.current }));
                                },
                                [r],
                            ),
                            k = (0, o.z)(() => {
                                const u = b.current,
                                    t = v.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && n && u && t)) return;
                                const a = Math.min(1, r / n);
                                return (
                                    (u.style.height = `${B(t, a)}px`),
                                    (u.style.display = 'flex'),
                                    p.current &&
                                        (1 !== a
                                            ? p.current.classList.add(m.Z.base__active)
                                            : p.current.classList.remove(m.Z.base__active)),
                                    a
                                );
                            }),
                            T = (0, o.z)(() => {
                                const u = v.current,
                                    t = b.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    o = (0, a.u)(0, 1, s / (n - r)),
                                    c = (u.offsetHeight - B(u, i)) * o;
                                ((t.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (f.current && h.current && v.current && b.current) {
                                            if (0 === Math.round(e))
                                                return (f.current.classList.add(A), void h.current.classList.remove(A));
                                            if (
                                                ((u = v.current),
                                                (t = b.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (f.current.classList.remove(A), void h.current.classList.add(A));
                                            var u, t;
                                            (f.current.classList.remove(A), h.current.classList.remove(A));
                                        }
                                    })(c));
                            }),
                            x = (0, o.z)(() => {
                                g(e, () => {
                                    (k(), T());
                                });
                            });
                        ((0, d.useEffect)(() => (0, s.v)(x)),
                            (0, d.useEffect)(() => {
                                const u = () => {
                                    g(e, () => {
                                        T();
                                    });
                                };
                                let t = F;
                                const r = () => {
                                    (t(), (t = (0, s.v)(x)));
                                };
                                return (
                                    e.events.on('recalculateContent', x),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', x),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, d.useEffect)(() => {
                                if (!R.pending) return;
                                const u = i.O.client.events.mouse.up(() => {
                                        S(D);
                                    }),
                                    t = i.O.client.events.mouse.move(([u]) => {
                                        g(e, (t) => {
                                            const n = v.current,
                                                a = b.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const i = u.screenY - R.offset - n.getBoundingClientRect().y,
                                                o = (i / n.offsetHeight) * s;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: o }));
                                        });
                                    });
                                return () => {
                                    (u(), t());
                                };
                            }, [e, R.offset, R.pending, r, S]));
                        const N = (0, c.B)((u) => e.applyStepTo(u), w, [e]),
                            O = N[0],
                            L = N[1];
                        (0, d.useEffect)(
                            () => (
                                document.addEventListener('mouseup', L, !0),
                                () => document.removeEventListener('mouseup', L, !0)
                            ),
                            [L],
                        );
                        const M = (e) => {
                            e.target.classList.contains(A) || (0, l.G)('highlight');
                        };
                        return E().createElement(
                            'div',
                            { className: n()(m.Z.base, u.base), ref: p, onWheel: e.handleMouseWheel },
                            E().createElement('div', {
                                className: n()(m.Z.topButton, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), O(_.Nm.Next));
                                },
                                ref: f,
                                onMouseEnter: M,
                            }),
                            E().createElement(
                                'div',
                                {
                                    className: n()(m.Z.track, u.track),
                                    onMouseDown: (u) => {
                                        const r = b.current;
                                        if (r && 0 === u.button)
                                            if (((0, l.G)('play'), u.target === r))
                                                S({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    b.current &&
                                                        g(e, (r) => {
                                                            if (!r) return;
                                                            const n = t(e),
                                                                a = e.clampPosition(r, r.scrollTop + n * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > r.getBoundingClientRect().y ? _.Nm.Prev : _.Nm.Next);
                                            }
                                    },
                                    ref: v,
                                    onMouseEnter: M,
                                },
                                E().createElement('div', { ref: b, className: n()(m.Z.thumb, u.thumb) }),
                                E().createElement('div', { className: n()(m.Z.rail, u.rail) }),
                            ),
                            E().createElement('div', {
                                className: n()(m.Z.bottomButton, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(A) ||
                                        0 !== e.button ||
                                        ((0, l.G)('play'), O(_.Nm.Prev));
                                },
                                onMouseUp: L,
                                ref: h,
                                onMouseEnter: M,
                            }),
                        );
                    });
            },
            4444: (e, u, t) => {
                t.d(u, { K: () => l });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    s = t.n(a),
                    i = t(5154),
                    o = t(3934),
                    c = t(2459);
                const l = ({
                    children: e,
                    api: u,
                    className: t,
                    barClassNames: r,
                    areaClassName: l,
                    scrollClassName: d,
                    scrollClassNames: E,
                    getStepByRailClick: _,
                    onDrag: m,
                }) => {
                    const A = (0, a.useMemo)(() => {
                            const e = r || {};
                            return Object.assign({}, e, { base: n()(c.Z.base, e.base) });
                        }, [r]),
                        F = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                    return s().createElement(
                        'div',
                        { className: n()(c.Z.defaultScroll, t), onWheel: u.handleMouseWheel },
                        s().createElement(
                            'div',
                            { className: n()(c.Z.area, l) },
                            s().createElement(o.Area, { className: d, classNames: E, api: F }, e),
                        ),
                        s().createElement(i.$Q, { getStepByRailClick: _, api: u, onDrag: m, classNames: A }),
                    );
                };
            },
            3934: (e, u, t) => {
                (t.r(u),
                    t.d(u, { Area: () => E, Bar: () => o.$Q, Default: () => c.K, useVerticalScrollApi: () => l.c4 }));
                var r = t(9849),
                    n = t.n(r),
                    a = t(8978),
                    s = t(7363),
                    i = t.n(s),
                    o = t(5154),
                    c = t(4444),
                    l = t(4222),
                    d = t(2459);
                const E = ({ className: e, classNames: u, children: t, api: r }) => (
                    (0, s.useEffect)(() => (0, a.v)(r.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: n()(d.Z.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: n()(d.Z.content, null == u ? void 0 : u.content), ref: r.contentRef },
                            t,
                        ),
                    )
                );
                E.Default = c.K;
            },
            4222: (e, u, t) => {
                t.d(u, { Nm: () => r.Nm, c4: () => a });
                var r = t(4977);
                const n = {
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                    },
                    a = (0, r.EO)(n);
            },
            4977: (e, u, t) => {
                t.d(u, { EO: () => _, Nm: () => d, he: () => E });
                var r = t(8463),
                    n = t(8978),
                    a = t(7845),
                    s = t(603),
                    i = t(9659),
                    o = t(3024),
                    c = t(7363),
                    l = t(1374);
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
                            const n = u(e),
                                a = n[0],
                                s = n[1];
                            return s <= a ? 0 : (0, r.u)(a, s, t);
                        };
                        return (r = {}) => {
                            const F = r.settings,
                                D = void 0 === F ? E : F,
                                C = (0, c.useRef)(null),
                                g = (0, c.useRef)(null),
                                B = (0, c.useRef)(!1),
                                p = (0, s.q)(),
                                f = (0, o.f)(
                                    () => {
                                        m && m();
                                    },
                                    [],
                                    150,
                                ),
                                h = (0, l.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = C.current;
                                        u && (t(u, e), p.trigger('change', e), m && B.current && f());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                v = h[0],
                                b = h[1],
                                w = (0, c.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = v.scrollPosition.get(),
                                            a = (null != (r = v.scrollPosition.goal) ? r : 0) - n;
                                        return A(e, u * t + a + n);
                                    },
                                    [v.scrollPosition],
                                ),
                                y = (0, c.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = C.current;
                                        r &&
                                            b.start({
                                                scrollPosition: A(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: D.animationConfig,
                                                from: { scrollPosition: A(r, v.scrollPosition.get()) },
                                            });
                                    },
                                    [b, D.animationConfig, v.scrollPosition],
                                ),
                                R = (0, c.useCallback)(
                                    (e) => {
                                        const u = C.current,
                                            t = g.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return _(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, D.step),
                                            n = w(u, e, r);
                                        y(n);
                                    },
                                    [y, w, D.step],
                                ),
                                P = (0, c.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && R(d(e)),
                                            C.current && p.trigger('mouseWheel', e, v.scrollPosition, u(C.current)));
                                    },
                                    [v.scrollPosition, R, p],
                                ),
                                S = (0, a.M)(
                                    () =>
                                        (0, n.v)(() => {
                                            const e = C.current;
                                            e &&
                                                (y(A(e, v.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [y, v.scrollPosition.goal],
                                ),
                                k = (0, i.z)(() => {
                                    const e = C.current;
                                    if (!e) return;
                                    const u = A(e, v.scrollPosition.goal);
                                    (u !== v.scrollPosition.goal && y(u, { immediate: !0 }),
                                        p.trigger('recalculateContent'));
                                });
                            ((0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', S),
                                    () => {
                                        window.removeEventListener('resize', S);
                                    }
                                ),
                                [S],
                            ),
                                (0, c.useEffect)(() => {
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
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (g.current ? _(g.current) : void 0),
                                    getContainerSize: () => (C.current ? e(C.current) : void 0),
                                    getBounds: () =>
                                        C.current
                                            ? u(C.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: D.step.clampedArrowStepTimeout,
                                    clampPosition: A,
                                    handleMouseWheel: P,
                                    applyScroll: y,
                                    applyStepTo: R,
                                    contentRef: C,
                                    wrapperRef: g,
                                    scrollPosition: b,
                                    animationScroll: v,
                                    recalculateContent: k,
                                    events: { on: p.on, off: p.off },
                                }),
                                [v.scrollPosition, y, R, p.off, p.on, k, P, b, D.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            2884: (e, u, t) => {
                t.d(u, { X: () => n });
                var r = t(969);
                const n = { Vertical: t(3934), Horizontal: r };
            },
            941: (e, u, t) => {
                t.d(u, { t: () => o });
                var r = t(7363),
                    n = t.n(r),
                    a = t(2278);
                const s = ['children'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
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
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== u.indexOf(r)) continue;
                                    t[r] = e[r];
                                }
                            return t;
                        })(e, s);
                    return n().createElement(
                        a.u,
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
                t.d(u, { l: () => c });
                var r = t(7363),
                    n = t.n(r),
                    a = t(941),
                    s = t(6485),
                    i = t(2278);
                function o() {
                    return (
                        (o = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        o.apply(null, arguments)
                    );
                }
                const c = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(s.i, u, r);
                    const c = u.contentId;
                    return c ? n().createElement(i.u, o({}, u, { contentId: c }), r) : n().createElement(a.t, u, r);
                };
            },
            6485: (e, u, t) => {
                t.d(u, { i: () => c });
                var r = t(2278),
                    n = t(7363),
                    a = t.n(n);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    c = (e) => {
                        let u = e.children,
                            t = e.body,
                            c = e.header,
                            l = e.note,
                            d = e.alert,
                            E = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== u.indexOf(r)) continue;
                                        t[r] = e[r];
                                    }
                                return t;
                            })(e, s);
                        const m = (0, n.useMemo)(() => {
                            const e = Object.assign({}, E, { body: t, header: c, note: l, alert: d });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [d, t, c, l, E]);
                        return a().createElement(
                            r.u,
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
                t.d(u, { u: () => c });
                var r = t(3485),
                    n = t(828),
                    a = t(7363);
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
                const o = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    c = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            c = e.onMouseEnter,
                            l = e.onMouseLeave,
                            d = e.onMouseDown,
                            E = e.onClick,
                            _ = e.ignoreShowDelay,
                            m = void 0 !== _ && _,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            C = void 0 === D ? 0 : D,
                            g = e.isEnabled,
                            B = void 0 === g || g,
                            p = e.targetId,
                            f = void 0 === p ? 0 : p,
                            h = e.onShow,
                            v = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== u.indexOf(r)) continue;
                                        t[r] = e[r];
                                    }
                                return t;
                            })(e, s);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, a.useMemo)(() => f || (0, r.F)().resId, [f]),
                            R = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, C, { isMouseEvent: !0, on: !0, arguments: i(n) }, y),
                                    h && h(),
                                    (w.current.isVisible = !0));
                            }, [t, C, n, y, h]),
                            P = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, C, { on: !1 }, y),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, C, y, v]),
                            S = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e));
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === B && P();
                            }, [B, P]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        (window.removeEventListener('mouseleave', P), P());
                                    }
                                ),
                                [P],
                            ));
                        return B
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((k = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      (clearTimeout(w.current.timeoutId),
                                                      (w.current.timeoutId = window.setTimeout(R, m ? 100 : 400)),
                                                      c && c(e),
                                                      k && k(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              (P(), null == l || l(u), null == e || e(u));
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              (!1 === F && P(), null == E || E(u), null == e || e(u));
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              (!1 === F && P(), null == d || d(u), null == e || e(u));
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var k;
                    };
            },
            8463: (e, u, t) => {
                t.d(u, { u: () => r });
                const r = (e, u, t) => (t < e ? e : t > u ? u : t);
            },
            8978: (e, u, t) => {
                t.d(u, { v: () => r });
                const r = (e) => {
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
            1652: (e, u, t) => {
                t.d(u, { F: () => r });
                const r = (e, u) => {
                    let t;
                    const r = setTimeout(() => {
                        t = e();
                    }, u);
                    return () => {
                        ('function' == typeof t && t(), clearTimeout(r));
                    };
                };
            },
            9352: (e, u, t) => {
                t.d(u, { U: () => i });
                var r = t(7475);
                function n(e, u) {
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
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const s = (e) => (0 === e ? window : window.subViews.get(e));
                function i({ initializer: e = !0, rootId: u = 0, getRoot: t = s, context: a = 'model' } = {}) {
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
                    const c = (e) => {
                        const r = t(u),
                            n = a.split('.').reduce((e, u) => e[u], r);
                        return 'string' != typeof e || 0 === e.length
                            ? n
                            : e.split('.').reduce((e, u) => {
                                  const t = e[u];
                                  return 'function' == typeof t ? t.bind(e) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const s = 'string' == typeof n ? `${a}.${n}` : a,
                                o = r.O.view.addModelObserver(s, u, !0);
                            return (i.set(o, t), e && t(c(n)), o);
                        },
                        readByPath: c,
                        createCallback: (e, u) => {
                            const t = c(u);
                            return (...u) => {
                                t(e(...u));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const u = c(e);
                            return () => {
                                u();
                            };
                        },
                        dispose: function () {
                            for (var e, t = n(i.keys()); !(e = t()).done;) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            5090: (e, u, t) => {
                t.d(u, { q3: () => o });
                var r = t(9723),
                    n = t(3305),
                    a = t(7363),
                    s = t.n(a),
                    i = t(9352);
                const o = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: c, children: l, mocks: d }) {
                            const E = (0, a.useRef)([]),
                                _ = (t, a, s) => {
                                    var o;
                                    const c = i.U(a),
                                        l =
                                            'real' === t
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        d = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : l.readByPath(e),
                                        _ = (e) => E.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: d,
                                            externalModel: l,
                                            observableModel: {
                                                dict: (e) => {
                                                    const u = d(e),
                                                        a = n.LO.box(u, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            l.subscribe(
                                                                (0, n.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                array: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        s = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            l.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : d(e),
                                                        s = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            l.subscribe(
                                                                (0, n.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, u) => {
                                                    const r = d(u);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, u) => ((e[u] = n.LO.box(r[u], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, n.aD)((u) => {
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
                                                            s = Object.entries(a),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = n.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                l.subscribe(
                                                                    (0, n.aD)((e) => {
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
                                        A = { mode: t, model: m, externalModel: l, cleanup: _ };
                                    return {
                                        model: m,
                                        controls: 'mocks' === t && s ? s.controls(A) : u(A),
                                        externalModel: l,
                                        mode: t,
                                    };
                                },
                                m = (0, a.useRef)(!1),
                                A = (0, a.useState)(o),
                                F = A[0],
                                D = A[1],
                                C = (0, a.useState)(() => _(o, c, d)),
                                g = C[0],
                                B = C[1];
                            return (
                                (0, a.useEffect)(() => {
                                    m.current ? B(_(F, c, d)) : (m.current = !0);
                                }, [d, F, c]),
                                (0, a.useEffect)(() => {
                                    D(o);
                                }, [o]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (g.externalModel.dispose(), E.current.forEach((e) => e()));
                                    },
                                    [g],
                                ),
                                s().createElement(t.Provider, { value: g }, l)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            873: (e, u, t) => {
                t.d(u, { f8: () => c, s_: () => a, wB: () => l, yR: () => s });
                var r = t(6758),
                    n = (t(828), t(6609));
                const a = 1e3,
                    s = 60,
                    i = 60 * s,
                    o = 24 * i;
                (Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime);
                function c(e = 0) {
                    let u = e;
                    const t = Math.trunc(u / o);
                    u -= t * o;
                    const r = Math.trunc(u / i);
                    u -= r * i;
                    const n = Math.trunc(u / s);
                    return ((u -= n * s), { days: t, hours: r, minutes: n, seconds: u });
                }
                const l = (e, u = !0) =>
                    e.days > 7 && u
                        ? (0, r.WU)(R.strings.common.duration.days(), { days: e.days })
                        : e.days >= 1
                          ? 0 === e.hours
                              ? (0, r.WU)(R.strings.common.duration.days(), { days: e.days })
                              : `${(0, r.WU)(R.strings.common.duration.days(), { days: e.days })} ${(0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })}`
                          : e.hours >= 1
                            ? 0 === e.minutes
                                ? (0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })
                                : `${(0, r.WU)(R.strings.common.duration.hours(), { hours: e.hours })} ${(0, r.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                            : (0, r.WU)(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 });
            },
            5034: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        mouse: () => d,
                        off: () => c,
                        on: () => o,
                        onMinimize: () => i,
                        onResize: () => a,
                        onScaleUpdated: () => s,
                    }));
                var r = t(8277),
                    n = t(1708);
                const a = (0, r.E)('clientResized'),
                    s = (0, r.E)('self.onScaleUpdated'),
                    i = (0, r.E)('clientMinimized'),
                    o = (e, u) => engine.on(e, u),
                    c = (e, u) => engine.off(e, u),
                    l = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        r(),
                                        () => {
                                            n &&
                                                (s(),
                                                window.removeEventListener(a, i),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
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
                            ((e.enabled = !1), r());
                        },
                        enable() {
                            ((e.enabled = !0), r());
                        },
                        enableOutside() {
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            3157: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var r = t(5034),
                    n = t(9703);
                function a(e = 'px') {
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
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            9703: (e, u, t) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function n(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => n, G: () => r });
            },
            8277: (e, u, t) => {
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            7475: (e, u, t) => {
                t.d(u, { O: () => s });
                var r = t(3157),
                    n = t(8133),
                    a = t(3925);
                const s = { view: t(7553), client: r, sound: a.ZP, intl: n.N };
            },
            8133: (e, u, t) => {
                t.d(u, { N: () => r });
                const r = {
                    toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                    toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                };
            },
            3925: (e, u, t) => {
                t.d(u, { ZP: () => s });
                var r = t(3157);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((e, u) => ((e[u] = () => (0, r.playSound)(n[u])), e), {}),
                    s = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            5544: (e, u, t) => {
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            3163: (e, u, t) => {
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (e, u, t) => {
                t.d(u, { U: () => n });
                var r = t(8277);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7553: (e, u, t) => {
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => c,
                        arabic2roman: () => R,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        enableFullScreenModeSupported: () => x,
                        events: () => s.U,
                        extraSize: () => k,
                        forceTriggerMouseMove: () => b,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => w,
                        getExternalPaddingsRem: () => P,
                        getFontNames: () => y,
                        getScale: () => C,
                        getSize: () => m,
                        getViewGlobalPosition: () => F,
                        initExternalPaddings: () => N,
                        isEventHandled: () => v,
                        isFocused: () => f,
                        pxToRem: () => g,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => T,
                    }));
                var r = t(1308),
                    n = t(5544),
                    a = t(3163),
                    s = t(7576),
                    i = t(2319);
                const o = 15;
                function c(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function d(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
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
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function b() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const y = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    R = r.cg;
                function P() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const S = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function x() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function N(e) {
                    function u() {
                        const u = viewEnv.getExternalPaddingsRem(),
                            t = u.top,
                            r = u.right,
                            n = u.bottom,
                            a = u.left;
                        (e.style.setProperty('--external-padding-top', `${t}rem`),
                            e.style.setProperty('--external-padding-right', `${r}rem`),
                            e.style.setProperty('--external-padding-bottom', `${n}rem`),
                            e.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (u(), engine.on('self.onPaddingsUpdated', () => u()));
                }
            },
            2319: (e, u, t) => {
                t.d(u, { qP: () => c });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== u.indexOf(r)) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    c = {
                        close(e) {
                            o('popover' === e ? n : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            9723: (e, u, t) => {
                function r() {}
                t.d(u, { ZT: () => r, jv: () => a, yR: () => n });
                function n(e) {
                    return e;
                }
                function a() {
                    return !1;
                }
                console.log;
            },
            3485: (e, u, t) => {
                t.d(u, { F: () => r });
                const r = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        r = R.invalid('resId'),
                        n = '';
                    var a;
                    u &&
                        ((n = (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (r = window.subViews[t].id));
                    return { callerUrl: n, caller: t, stack: u, resId: r };
                };
            },
            995: (e, u, t) => {
                t.d(u, { au: () => n });
                var r = t(5129);
                (t(1453), t(4434), t(8291), t(6756), t(5609));
                const n = r.Z;
            },
            9314: (e, u, t) => {
                t(7363);
            },
            7845: (e, u, t) => {
                t.d(u, { M: () => n });
                var r = t(7363);
                const n = (e, u = []) => {
                    const t = (0, r.useRef)(),
                        n = (0, r.useCallback)((...u) => {
                            (t.current && t.current(), (t.current = e(...u)));
                        }, u);
                    return (
                        (0, r.useEffect)(
                            () => () => {
                                t.current && t.current();
                            },
                            [n],
                        ),
                        n
                    );
                };
            },
            5129: (e, u, t) => {
                t.d(u, { Z: () => s });
                var r = t(873),
                    n = t(7363);
                const a = () => {},
                    s = (e = 0, u, t = 0, s = a) => {
                        const i = (0, n.useState)(e),
                            o = i[0],
                            c = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    c(e);
                                    const n = Date.now(),
                                        a = u || (e > 2 * r.yR ? r.yR : 1),
                                        i = setInterval(() => {
                                            const u = e - Math.floor((Date.now() - n) / r.s_);
                                            null !== t && u <= t ? (c(t), s && s(), clearInterval(i)) : c(u);
                                        }, a * r.s_);
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [e, u, t, s]),
                            o
                        );
                    };
            },
            1453: (e, u, t) => {
                t(7363);
            },
            603: (e, u, t) => {
                t.d(u, { q: () => s });
                var r = t(7363);
                function n(e, u) {
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
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const s = () => {
                    const e = (0, r.useMemo)(() => ({}), []),
                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                        t = (e, t) => {
                            u(e).set(t, t);
                        },
                        a = (e, t) => {
                            u(e).delete(t);
                        },
                        s = (e, ...t) => {
                            for (var r, a = n(u(e).values()); !(r = a()).done;) {
                                (0, r.value)(...t);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: s }), []);
                };
            },
            9659: (e, u, t) => {
                t.d(u, { z: () => a });
                var r = t(7363);
                const n = [];
                function a(e) {
                    const u = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, u.current)(...e), n)
                    );
                }
            },
            8494: (e, u, t) => {
                t.d(u, { gd: () => i });
                var r = t(7475),
                    n = t(4020),
                    a = (t(828), t(7363));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function i(e = n.n.NONE, u = s, t = !1, i = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== n.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(n) {
                            if (n.keyCode === e) {
                                if (!i && r.O.view.isEventHandled()) return;
                                (r.O.view.setEventHandled(), u(n), t && n.stopPropagation());
                            }
                        }
                    }, [u, e, t, i]);
                }
            },
            8925: (e, u, t) => {
                t.d(u, { GS: () => c, cJ: () => s });
                var r = t(7363),
                    n = t(5579),
                    a = t(1958);
                let s = (function (e) {
                        return (
                            (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    i = (function (e) {
                        return (
                            (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'),
                            e
                        );
                    })({}),
                    o = (function (e) {
                        return (
                            (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'),
                            e
                        );
                    })({});
                const c = () => {
                    const e = (0, r.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
                        a = ((e) => {
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
                        c = ((e) => {
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
                        l = ((e) => {
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
                    return { mediaSize: a, mediaWidth: c, mediaHeight: l, remScreenWidth: u, remScreenHeight: t };
                };
            },
            6756: (e, u, t) => {
                t(9314);
                var r = t(828);
                t(7363);
                r.Sw.instance;
            },
            5609: (e, u, t) => {
                var r = t(828);
                t(7363);
                r.Sw.instance;
            },
            4434: (e, u, t) => {
                t(7363);
            },
            5239: (e, u, t) => {
                t.d(u, { B: () => n });
                var r = t(7363);
                function n(e, u, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => {
                            (window.clearInterval(n.current), (n.current = 0));
                        }, t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, r.useCallback)((t) => {
                            (0 !== n.current && a(), (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, s),
                        a,
                    ];
                }
            },
            8291: (e, u, t) => {
                (t(7475), t(7363));
            },
            3024: (e, u, t) => {
                t.d(u, { f: () => a });
                var r = t(8658),
                    n = t(7363);
                function a(e, u, t) {
                    const a = (0, n.useMemo)(() => (0, r.Z)(t, e), u);
                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                }
            },
            4020: (e, u, t) => {
                t.d(u, { n: () => r });
                let r = (function (e) {
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
                t.d(u, { DZ: () => d, G: () => o, U2: () => n, UI: () => i, hX: () => c, sE: () => l, v: () => E });
                var r = t(6014);
                function n(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const a = n;
                function s(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function i(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                function o(e, u) {
                    if (Array.isArray(e)) return e.some(u);
                    for (let t = 0; t < e.length; t++) {
                        if (u(a(e, t), t, e)) return !0;
                    }
                    return !1;
                }
                function c(e, u) {
                    if (Array.isArray(e)) return e.filter(u);
                    const t = [];
                    for (let n = 0; n < e.length; n++) {
                        var r;
                        const a = null == (r = e[n]) ? void 0 : r.value;
                        u(a, n, e) && t.push(a);
                    }
                    return t;
                }
                function l(e, u) {
                    for (let t = 0; t < e.length; t++) {
                        const r = s(e[t]);
                        if (u(r, t, e)) return r;
                    }
                }
                function d(e, u, t) {
                    const r = [];
                    for (let n = 0; n < e.length; n++) {
                        const s = a(e, n);
                        u(s, n, e) && r.push(t(s, n, e));
                    }
                    return r;
                }
                function E(e, u) {
                    return d(e, r.C, u);
                }
            },
            4170: (e, u, t) => {
                t.d(u, { t: () => r });
                let r = (function (e) {
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
            6014: (e, u, t) => {
                function r(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                t.d(u, { C: () => r });
            },
            1308: (e, u, t) => {
                t.d(u, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; e >= n[t];) ((u += r[t]), (e -= n[t]));
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            4029: (e, u, t) => {
                function r(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                t.d(u, { $: () => n, G: () => r });
                const n = {
                    playHighlight() {
                        r('highlight');
                    },
                    playClick() {
                        r('play');
                    },
                    playYes() {
                        r('yes1');
                    },
                };
            },
            6758: (e, u, t) => {
                t.d(u, { Uw: () => m, WU: () => a, uF: () => s, v2: () => n });
                var r = t(8354);
                let n = (function (e) {
                    return ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'), e);
                })({});
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                function s(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                const i = (e) => e.replace(/&nbsp;/g, ' '),
                    o = (e, u, t) => {
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
                    l = (e, u, t = n.left) => e.split(u).reduce(t === n.left ? o : c, []),
                    d = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _ = (e, u = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return d(e);
                        if ('ja' === t) {
                            return (0, r.D4)()
                                .parse(e)
                                .map((e) => i(e));
                        }
                        return ((e, u = n.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = i(e);
                            return (l(a, /( )/, u).forEach((e) => (t = t.concat(l(e, r, n.left)))), t);
                        })(e, u);
                    },
                    m = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : _(e, u)));
            },
            8658: (e, u, t) => {
                function r(e, u, t, r) {
                    let n,
                        a = !1,
                        s = 0;
                    function i() {
                        n && clearTimeout(n);
                    }
                    function o(...o) {
                        const c = this,
                            l = Date.now() - s;
                        function d() {
                            ((s = Date.now()), t.apply(c, o));
                        }
                        a ||
                            (r && !n && d(),
                            i(),
                            void 0 === r && l > e
                                ? d()
                                : !0 !== u &&
                                  (n = setTimeout(
                                      r
                                          ? function () {
                                                n = void 0;
                                            }
                                          : d,
                                      void 0 === r ? e - l : e,
                                  )));
                    }
                    return (
                        'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                        (o.cancel = function () {
                            (i(), (a = !0));
                        }),
                        o
                    );
                }
                t.d(u, { Z: () => r });
            },
            8973: (e, u, t) => {
                t.d(u, { Z: () => a });
                var r = t(7475);
                class n {
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
                        return (window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker);
                    }
                    clear() {
                        (void 0 !== this._updateHandler &&
                            (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {}));
                    }
                    addCallback(e, u, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, t, n);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
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
                t.d(u, { Sw: () => a.Z, B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => D, Eu: () => C });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(e, u) {
                        (this.addMouseListener(), this.entries.push({ container: e, callback: u }));
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        ((this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(8973);
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(4020),
                    _ = t(7475);
                const m = ['args'];
                function A(e, u, t, r, n, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, n);
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            A(a, r, n, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(a, r, n, s, i, 'throw', e);
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
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (-1 !== u.indexOf(r)) continue;
                                            t[r] = e[r];
                                        }
                                    return t;
                                })(u, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    B = () => g(i.CLOSE),
                    p = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var f = t(5533);
                const h = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: d,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => g(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => g(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                c = o.x,
                                l = o.y,
                                d = o.width,
                                E = o.height,
                                m = {
                                    x: _.O.view.pxToRem(c) + s.x,
                                    y: _.O.view.pxToRem(l) + s.y,
                                    width: _.O.view.pxToRem(d),
                                    height: _.O.view.pxToRem(E),
                                };
                            g(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, B);
                        },
                        handleViewEvent: g,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
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
                t.d(u, { Ew: () => a, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u, t = 2) => systemLocale.getRealFormat(e, u, t),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    n = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            1829: (e, u, t) => {
                var r = {};
                (t.r(r), t.d(r, { R: () => s, P: () => i }));
                var n = t(7363),
                    a = t.n(n);
                const s = 'buyState',
                    i = 'rewardsState';
                var o = t(2041),
                    c = t(8024),
                    l = t(8230);
                let d = (function (e) {
                        return (
                            (e[(e.Active = 0)] = 'Active'),
                            (e[(e.Paused = 1)] = 'Paused'),
                            (e[(e.Completed = 2)] = 'Completed'),
                            (e[(e.NotStarted = 3)] = 'NotStarted'),
                            e
                        );
                    })({}),
                    E = (function (e) {
                        return ((e.COMMON = 'common'), (e.EXTRA = 'extra'), (e.HOLIDAY = 'holiday'), e);
                    })({});
                var _ = t(5090),
                    m = t(9723),
                    A = t(8739),
                    F = t(3305),
                    D = t(5369);
                const C = (0, _.q3)()(
                        ({ observableModel: e }) => {
                            const u = e.primitives(
                                    [
                                        'price',
                                        'prevPrice',
                                        'chapterID',
                                        'isActive',
                                        'compoundPriceDefaultID',
                                        'isPurchaseWithLevels',
                                        'remainingLevelsCount',
                                    ],
                                    'confirm',
                                ),
                                t = F.LO.box(''),
                                r = {
                                    main: e.primitives([
                                        'state',
                                        'shopOfferDiscount',
                                        'isShopOfferAvailable',
                                        'isWalletAvailable',
                                    ]),
                                    confirm: u,
                                    rewards: e.array('rewards'),
                                    packages: e.array('packages.items'),
                                    compoundPrice: e.array('confirm.compoundPrice'),
                                    priceID: t,
                                },
                                n = (0, D.Om)(() => r.rewards.get().topPriorityRewards.items, { equals: m.jv }),
                                a = (0, D.Om)(() => r.rewards.get().prevTopPriorityRewards.items, { equals: m.jv }),
                                s = (0, D.Om)(() => r.rewards.get().nowRewards.items, { equals: m.jv }),
                                i = (0, D.Om)(() => r.rewards.get().futureRewards.items, { equals: m.jv }),
                                o = (0, D.Om)(() => r.packages.get(), { equals: m.jv }),
                                c = (0, D.Om)(() => A.U2(r.packages.get(), 0), { equals: m.jv }),
                                l = (0, D.Om)((e) => A.hX(r.packages.get(), (u) => u.chapterID === e)[0]),
                                d = (0, D.Om)((e) => {
                                    const u = l(e).compoundPrice;
                                    return 0 === u.prices.length
                                        ? []
                                        : A.v(u.prices, (e) => {
                                              const u = A.v(e.price, m.yR),
                                                  t = { isMultiPrice: u.length > 1, isEnough: !0 };
                                              return u.reduce(
                                                  (e, { name: u, value: t, isEnough: r }) => (
                                                      (e[u] = { value: t, isEnough: r }),
                                                      (e.isEnough = e.isEnough && r),
                                                      e
                                                  ),
                                                  t,
                                              );
                                          });
                                }),
                                _ = (0, D.Om)((e, u) => {
                                    var t;
                                    return null == (t = d(e).find((e) => e[u])) ? void 0 : t[u];
                                }),
                                C = (0, D.Om)((e) => {
                                    const u = A.sE(
                                        r.packages.get(),
                                        (u) => u.chapterID === e && u.chapterType === E.EXTRA,
                                    );
                                    return Boolean(u);
                                }),
                                g = (0, D.Om)((e) => {
                                    const u = A.sE(
                                        r.packages.get(),
                                        (u) => u.chapterID === e && u.chapterType === E.HOLIDAY,
                                    );
                                    return Boolean(u);
                                }),
                                B = (0, D.Om)(
                                    () =>
                                        A.UI(r.compoundPrice.get().prices, (e) => {
                                            var u, t;
                                            return Object.assign({}, e, {
                                                currencyType: null == (u = A.U2(e.price, 0)) ? void 0 : u.name,
                                                value: null == (t = A.U2(e.price, 0)) ? void 0 : t.value,
                                            });
                                        }),
                                    { equals: m.jv },
                                ),
                                p = (0, D.Om)(() => r.compoundPrice.get().prices.length > 1),
                                f = (0, D.Om)(() => A.G(r.packages.get(), ({ chapterType: e }) => e === E.EXTRA));
                            return Object.assign({}, r, {
                                computes: {
                                    topPriorityRewards: n,
                                    prevTopPriorityRewards: a,
                                    nowRewards: s,
                                    futureRewards: i,
                                    firstChapter: c,
                                    chapters: o,
                                    chapter: l,
                                    getChapterPrices: d,
                                    findCurrencyByType: _,
                                    isExtra: C,
                                    isHoliday: g,
                                    prices: B,
                                    isMulticurrency: p,
                                    hasExtra: f,
                                },
                            });
                        },
                        ({ model: e, externalModel: u }) => ({
                            setPriceID: (0, F.aD)((u) => {
                                e.priceID.set(u);
                            }),
                            shopOffer: u.createCallbackNoArgs('onShopOfferClick'),
                            buy: u.createCallback(() => ({ priceID: e.priceID.get() }), 'confirm.onBuyClick'),
                            togglePurchaseWithLevels: u.createCallbackNoArgs('confirm.onChangePurchaseWithLevels'),
                        }),
                    ),
                    g = (C[0], C[1]);
                var B = t(9849),
                    p = t.n(B),
                    f = t(8978),
                    h = t(9994),
                    v = t(4020),
                    b = t(1158),
                    w = t(8862);
                const y = 'BattlePassBuyViewContent_base_f422a',
                    P = 'BattlePassBuyViewContent_background_e329d',
                    S = 'BattlePassBuyViewContent_background__visible_fb9e3',
                    k = 'BattlePassBuyViewContent_additionalBackground_ff94c',
                    T = 'BattlePassBuyViewContent_blackout_b7744',
                    x = 'BattlePassBuyViewContent_header_c6c65',
                    N = 'BattlePassBuyViewContent_title_f508a',
                    O = 'BattlePassBuyViewContent_subtitle_d2003';
                var L = t(4029),
                    M = t(1705);
                const I = {
                    base: 'Illustration_base_df755',
                    imgWrapper: 'Illustration_imgWrapper_a05f9',
                    img: 'Illustration_img_ec58b',
                    base__hover: 'Illustration_base__hover_b5e83',
                    base__disabled: 'Illustration_base__disabled_d21ef',
                    vignette: 'Illustration_vignette_d49eb',
                    asset: 'Illustration_asset_da34c',
                    highlight: 'Illustration_highlight_d2d11',
                    highlight__default: 'Illustration_highlight__default_b47b3',
                    highlight__active: 'Illustration_highlight__active_bb012',
                    highlight__shine: 'Illustration_highlight__shine_deab8',
                };
                let U = (function (e) {
                    return ((e.Hover = 'hover'), (e.Disabled = 'disabled'), e);
                })({});
                const H = ({ className: e, isHighlight: u, isActive: t, chapterID: r, state: n }) =>
                        a().createElement(
                            'div',
                            { className: p()(I.base, n && I[`base__${n}`], e) },
                            a().createElement(
                                'div',
                                { className: I.imgWrapper },
                                a().createElement(
                                    'div',
                                    {
                                        className: I.img,
                                        style: {
                                            backgroundImage: `url('${(0, M.wD)(R.images.gui.maps.icons.battlePass.buy.illustrations.commander, r)}')`,
                                        },
                                    },
                                    a().createElement('div', { className: I.vignette }),
                                ),
                            ),
                            a().createElement('div', { className: I.asset }),
                            a().createElement('div', { className: p()(I.highlight, I.highlight__default) }),
                            u &&
                                a().createElement('div', {
                                    className: p()(I.highlight, t ? I.highlight__active : I.highlight__shine),
                                }),
                        ),
                    G = 'State_base_a9a50',
                    W = 'State_bg_cf3f1',
                    z = 'State_content_d42db',
                    $ = 'State_ico_bc4f5',
                    V = ({ className: e }) =>
                        a().createElement(
                            'div',
                            { className: p()(G, e) },
                            a().createElement('div', { className: W }),
                            a().createElement(
                                'div',
                                { className: z },
                                a().createElement('div', { className: $ }),
                                R.strings.battle_pass.battlePassBuyView.card.purchased(),
                            ),
                        );
                var q = t(5278),
                    Z = t(2317);
                const j = {
                    base: 'BattlePassBuyExtraCard_base_f34dd',
                    base__small: 'BattlePassBuyExtraCard_base__small_fa7a8',
                    base__disabled: 'BattlePassBuyExtraCard_base__disabled_db2eb',
                    timer: 'BattlePassBuyExtraCard_timer_bcd70',
                    content: 'BattlePassBuyExtraCard_content_a74ba',
                    title: 'BattlePassBuyExtraCard_title_ab7be',
                    price: 'BattlePassBuyExtraCard_price_d8a75',
                    illustration: 'BattlePassBuyExtraCard_illustration_c9cc0',
                    state: 'BattlePassBuyExtraCard_state_c2bef',
                    chapterActiveText: 'BattlePassBuyExtraCard_chapterActiveText_e5da3',
                    fadeOut: 'BattlePassBuyExtraCard_fadeOut_c86c7',
                    fadeIn: 'BattlePassBuyExtraCard_fadeIn_f00da',
                    fadeInWithScale: 'BattlePassBuyExtraCard_fadeInWithScale_bef8f',
                    slideUp: 'BattlePassBuyExtraCard_slideUp_bde6f',
                    scale: 'BattlePassBuyExtraCard_scale_de359',
                    rotate: 'BattlePassBuyExtraCard_rotate_b6edb',
                };
                var Y = t(873),
                    X = t(995),
                    K = t(6758);
                const Q = 'CardTimer_base_b1d96',
                    J = 'CardTimer_light_ebd18',
                    ee = 'CardTimer_icon_ed0a2',
                    ue = 'CardTimer_value_abd60',
                    te = R.strings.battle_pass.battlePassBuyView.card.timer,
                    re = ({ expireTime: e }) => {
                        const u = (0, X.au)(e),
                            t = u <= 60 ? te.lessMinute() : (0, K.uF)(te.time(), { time: (0, Y.wB)((0, Y.f8)(u), !1) });
                        return a().createElement(
                            'div',
                            { className: Q },
                            a().createElement('div', { className: J }),
                            a().createElement('div', { className: ee }),
                            a().createElement('div', { className: ue }, t),
                        );
                    },
                    ne = 'CurrentLevel_base_a2596',
                    ae = 'CurrentLevel_base__isHovered_fb8c9',
                    se = 'CurrentLevel_level_d7555',
                    ie = 'CurrentLevel_text_ebcb1',
                    oe = R.strings.battle_pass.battlePassBuyView.card,
                    ce = ({ isHovered: e, currentLevel: u }) => {
                        const t = e ? oe.currentLevelHovered.text() : oe.currentLevel.text(),
                            r = p()(ne, e && ae);
                        return a().createElement(
                            'div',
                            { className: r },
                            a().createElement('div', { className: ie }, t),
                            a().createElement('div', { className: se }, u),
                        );
                    },
                    le = 'Description_base_d89ea',
                    de = 'Description_base__disabled_acfdd',
                    Ee = 'Description_text_da623',
                    _e = 'Description_text__hidden_cdbb5',
                    me = R.strings.battle_pass.battlePassBuyView.card.descr,
                    Ae = ({ currentLevel: e, isLevelShow: u, isHovered: t, isBought: r }) => {
                        const n = r ? me.bought() : me.chapter();
                        return a().createElement(
                            'div',
                            { className: p()(le, r && de) },
                            u && a().createElement(ce, { currentLevel: e, isHovered: t }),
                            a().createElement('div', { className: p()(Ee, !t && _e) }, n),
                        );
                    };
                var Fe = t(1652),
                    De = t(8925);
                const Ce = 'Logo_base_b6c07',
                    ge = 'Logo_light_d61d7',
                    Be = 'Logo_light__hovered_d3141',
                    pe = 'Logo_lightAppear_be96d',
                    fe = 'Logo_logoIcon_a4364',
                    he = 'Logo_base__notAvailable_cc894',
                    ve = (e, u) => {
                        const t = R.images.gui.maps.icons.battlePass.buy.logo,
                            r = u <= De.cJ.Small ? 'small' : '';
                        return (0, M.wD)(t, e, r);
                    },
                    be = ({ chapterID: e, animationOrder: u, isAvailable: t, isHovered: r, isActiveChapter: s }) => {
                        const i = 800 + 100 * u;
                        (0, n.useEffect)(() => {
                            if (t) return (0, Fe.F)(() => (0, L.G)('bp_buy_pass_02'), i);
                        }, [t, i]);
                        const o = (0, De.GS)().mediaSize,
                            c = { animationDelay: `${i}ms` };
                        return a().createElement(
                            'div',
                            { className: p()(Ce, !t && he) },
                            s &&
                                a().createElement(
                                    'div',
                                    { style: c, className: pe },
                                    a().createElement('div', { className: p()(ge, r && Be) }),
                                ),
                            a().createElement('div', { className: fe, style: { backgroundImage: `url(${ve(e, o)})` } }),
                        );
                    };
                var we = t(4579),
                    ye = t(4585);
                const Re = 'Price_base_cb5eb',
                    Pe = 'Price_divider_cc34a',
                    Se = { left: ye.V2.gold, right: ye.V2.freeXP },
                    ke = R.strings.battle_pass.battlePassBuyView.card,
                    Te = (0, o.Pi)(({ chapterID: e, className: u }) => {
                        const t = g().model.computes,
                            r = t.findCurrencyByType(e, Se.left),
                            n = t.findCurrencyByType(e, Se.right);
                        return r || n
                            ? a().createElement(
                                  'div',
                                  { className: p()(Re, u) },
                                  r && a().createElement(we.F, { type: Se.left, size: ye.et.small, value: r.value }),
                                  r && n && a().createElement('div', { className: Pe }, ke.priceDivider()),
                                  n && a().createElement(we.F, { type: Se.right, size: ye.et.small, value: n.value }),
                              )
                            : null;
                    }),
                    xe = R.strings.battle_pass.battlePassBuyView.card,
                    Ne = (0, o.Pi)(
                        ({
                            chapterID: e = 1,
                            animationOrder: u = 0,
                            onMouseEnter: t,
                            onMouseLeave: r,
                            isShopOfferAvailable: s = !1,
                            expireTime: i = 0,
                        }) => {
                            const o = g().model.computes,
                                c = o.chapter(e),
                                l = c.isBought,
                                E = c.chapterState,
                                _ = c.currentLevel,
                                m = c.packageID,
                                A = o.isExtra(e),
                                F = (0, n.useState)(!1),
                                D = F[0],
                                C = F[1],
                                B = E === d.Active,
                                f = E === d.Paused,
                                h = s && !A,
                                v = (0, w.tv)();
                            return a().createElement(
                                'div',
                                {
                                    className: p()(
                                        j.base,
                                        h && j.base__small,
                                        B && j.base__activeChapter,
                                        l && j.base__disabled,
                                    ),
                                    onClick: () => {
                                        (L.$.playClick(), l || (m && v.push(Z._.battlePass.buyPass, { packageID: m })));
                                    },
                                    onMouseEnter: () => {
                                        ((0, L.G)('bp_highlight'), t && t(), l || C(!0));
                                    },
                                    onMouseLeave: () => {
                                        (r && r(), C(!1));
                                    },
                                },
                                a().createElement(H, {
                                    chapterID: e,
                                    isHighlight: B,
                                    isActive: l,
                                    state: l ? U.Disabled : D ? U.Hover : void 0,
                                    className: j.illustration,
                                }),
                                A &&
                                    i > 0 &&
                                    a().createElement(
                                        'div',
                                        { className: j.timer },
                                        a().createElement(re, { expireTime: i }),
                                    ),
                                a().createElement(
                                    'div',
                                    { className: j.content },
                                    a().createElement(be, {
                                        chapterID: e,
                                        animationOrder: u,
                                        isAvailable: !l,
                                        isHovered: D,
                                        isActiveChapter: B,
                                    }),
                                    a().createElement('div', { className: j.title }, (0, q.pC)(e)),
                                    a().createElement(Ae, {
                                        isHovered: D,
                                        currentLevel: _,
                                        isLevelShow: B || f,
                                        isBought: l,
                                    }),
                                ),
                                l
                                    ? a().createElement(V, { className: j.state })
                                    : a().createElement(Te, { chapterID: e, className: j.price }),
                                B &&
                                    a().createElement(
                                        'div',
                                        { className: j.chapterActiveText },
                                        xe.activeChapter.text(),
                                    ),
                            );
                        },
                    );
                var Oe = t(9659),
                    Le = t(1374);
                const Me = 'ShopOfferCard_base_e3830',
                    Ie = 'ShopOfferCard_background_f7885',
                    Ue = 'ShopOfferCard_shopOfferBorder_aa65c',
                    He = 'ShopOfferCard_illustrationWrapper_bb955',
                    Ge = 'ShopOfferCard_illustration_a4454',
                    We = 'ShopOfferCard_backgroundAsset_f264c',
                    ze = 'ShopOfferCard_backgroundColor_f976e',
                    $e = 'ShopOfferCard_shopOfferDiscount_ddc67',
                    Ve = 'ShopOfferCard_content_d89f8',
                    qe = 'ShopOfferCard_title_d646c',
                    Ze = 'ShopOfferCard_base__highlighted_fd12d',
                    je = 'ShopOfferCard_description_e4356',
                    Ye = 'ShopOfferCard_warningOverlay_a123c',
                    Xe = R.strings.battle_pass.battlePassBuyView.card,
                    Ke = (0, o.Pi)(({ isWarningHighlighted: e = !1 }) => {
                        const u = g().controls,
                            t = (0, Oe.z)(() => {
                                (L.$.playClick(), u.shopOffer());
                            }),
                            r = (0, Oe.z)(() => {
                                (0, L.G)('bp_highlight');
                            }),
                            n = (0, Le.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                                config: { duration: 200 },
                            });
                        return a().createElement(
                            'div',
                            { className: p()(Me, e && Ze), onClick: t, onMouseEnter: r },
                            a().createElement(
                                'div',
                                { className: Ie },
                                a().createElement(
                                    'div',
                                    { className: He },
                                    a().createElement('div', { className: Ge }),
                                ),
                                a().createElement('div', { className: Ue }),
                                a().createElement('div', { className: We }),
                                a().createElement('div', { className: ze }),
                                a().createElement('div', { className: $e }),
                                n((e, u) => u && a().createElement(Le.animated.div, { style: e, className: Ye })),
                            ),
                            a().createElement(
                                'div',
                                { className: Ve },
                                a().createElement('div', { className: qe }, Xe.title.shopOffer()),
                                a().createElement(
                                    'div',
                                    { className: je },
                                    e ? Xe.shopOfferWaning() : Xe.descr.shopOffer(),
                                ),
                            ),
                        );
                    }),
                    Qe = 'CardAppearTransition_base_f364a',
                    Je = ({ animationOrder: e = 0, children: u }) => {
                        const t = 600 + 100 * e;
                        (0, n.useEffect)(() => (0, Fe.F)(() => (0, L.G)('bp_buy_pass_01'), t), [t]);
                        const r = (0, n.useMemo)(() => ({ animationDelay: `${t}ms` }), [t]);
                        return a().createElement('div', { style: r, className: Qe }, u);
                    },
                    eu = 'ExtraContent_base_a425a',
                    uu = 'ExtraContent_cardsWrapper_eee2c',
                    tu = 'ExtraContent_cards_ce5a9',
                    ru = 'ExtraContent_card__isShopOfferAvailable_d689b',
                    nu = 'ExtraContent_card_d6fc1',
                    au = 'ExtraContent_card__extra_d337a',
                    su = (0, o.Pi)(() => {
                        const e = g().model,
                            u = e.main.isShopOfferAvailable.get(),
                            t = e.computes.chapters(),
                            r = (0, n.useState)(!1),
                            s = r[0],
                            i = r[1],
                            o = (0, n.useCallback)(() => {
                                i(!0);
                            }, []),
                            c = (0, n.useCallback)(() => {
                                i(!1);
                            }, []);
                        return a().createElement(
                            'div',
                            { className: eu },
                            a().createElement(
                                'div',
                                { className: uu },
                                u &&
                                    a().createElement(
                                        'div',
                                        { className: p()(nu, ru) },
                                        a().createElement(Je, null, a().createElement(Ke, { isWarningHighlighted: s })),
                                    ),
                                a().createElement(
                                    'div',
                                    { className: tu },
                                    A.DZ(
                                        t,
                                        (e) => e.chapterType !== E.EXTRA,
                                        (e, t) =>
                                            a().createElement(
                                                'div',
                                                { key: e.packageID, className: nu },
                                                a().createElement(
                                                    Je,
                                                    { animationOrder: t + 1 },
                                                    a().createElement(Ne, {
                                                        chapterID: e.chapterID,
                                                        isShopOfferAvailable: u,
                                                        animationOrder: t + 1,
                                                        onMouseEnter: o,
                                                        onMouseLeave: c,
                                                    }),
                                                ),
                                            ),
                                    ),
                                ),
                            ),
                            A.DZ(
                                t,
                                (e) => e.chapterType === E.EXTRA,
                                (e) =>
                                    a().createElement(
                                        'div',
                                        { key: e.packageID, className: p()(nu, au) },
                                        a().createElement(
                                            Je,
                                            { animationOrder: t.length + 1 },
                                            a().createElement(Ne, {
                                                chapterID: e.chapterID,
                                                isShopOfferAvailable: !1,
                                                expireTime: e.expireTime,
                                                animationOrder: t.length + 1,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    }),
                    iu = R.strings.battle_pass.battlePassBuyView,
                    ou = (0, o.Pi)(() => {
                        const e = (0, n.useState)(!1),
                            u = e[0],
                            t = e[1],
                            r = g().model,
                            s = r.computes.firstChapter(),
                            i = (0, w.tv)();
                        return (
                            h.N.useHandleKeydown(v.n.ESCAPE, () => i.goBack()),
                            (0, n.useEffect)(() => {
                                (0, f.v)(() => {
                                    t(!0);
                                });
                            }, []),
                            a().createElement(
                                'div',
                                { className: y },
                                a().createElement(
                                    'div',
                                    { className: p()(P, u && S) },
                                    a().createElement(b.N, { key: null == s ? void 0 : s.packageID, isCurrent: !0 }),
                                    r.computes.hasExtra() && a().createElement('div', { className: k }),
                                    a().createElement('div', { className: T }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: x },
                                    a().createElement('div', { className: N }, iu.title()),
                                    a().createElement('div', { className: O }, iu.descr()),
                                ),
                                a().createElement(su, null),
                            )
                        );
                    });
                var cu = t(4170);
                let lu = (function (e) {
                        return (
                            (e.small = 'small'),
                            (e.medium = 'medium'),
                            (e.large = 'large'),
                            (e.extraLarge = 'extraLarge'),
                            e
                        );
                    })({}),
                    du = (function (e) {
                        return ((e.primary = 'primary'), (e.main = 'main'), e);
                    })({}),
                    Eu = (function (e) {
                        return ((e.Center = 'center'), (e.Bottom = 'bottom'), e);
                    })({});
                const _u = {
                        base: 'Checkbox_base_cffc9',
                        base__disabled: 'Checkbox_base__disabled_dc60b',
                        base__center: 'Checkbox_base__center_bcbc0',
                        base__bottom: 'Checkbox_base__bottom_b8113',
                        input: 'Checkbox_input_bdf00',
                        base__mouseDown: 'Checkbox_base__mouseDown_f0077',
                        base__small: 'Checkbox_base__small_deb05',
                        base__medium: 'Checkbox_base__medium_eeb1f',
                        base__large: 'Checkbox_base__large_e2605',
                        base__extraLarge: 'Checkbox_base__extraLarge_bec62',
                        alertOverlay: 'Checkbox_alertOverlay_a1e3f',
                        base__alert: 'Checkbox_base__alert_aa5f2',
                        blink: 'Checkbox_blink_f903e',
                        base__checked: 'Checkbox_base__checked_eac7a',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_f1bb9',
                        highlight: 'Checkbox_highlight_bdfa7',
                        base__main: 'Checkbox_base__main_dc26d',
                        base__primary: 'Checkbox_base__primary_a8575',
                        checkmark: 'Checkbox_checkmark_e1fc6',
                        fadeIn: 'Checkbox_fadeIn_c9675',
                        label: 'Checkbox_label_bd63c',
                        labelContent: 'Checkbox_labelContent_ae1ba',
                    },
                    mu = [
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
                function Au() {
                    return (
                        (Au = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        Au.apply(null, arguments)
                    );
                }
                const Fu = (e) => {
                    let u = e.id,
                        t = e.isChecked,
                        r = void 0 !== t && t,
                        s = e.isDisabled,
                        i = void 0 !== s && s,
                        o = e.isAlert,
                        c = void 0 !== o && o,
                        l = e.size,
                        d = void 0 === l ? lu.medium : l,
                        E = e.type,
                        _ = void 0 === E ? du.primary : E,
                        m = e.soundHover,
                        A = void 0 === m ? 'highlight' : m,
                        F = e.soundClick,
                        D = void 0 === F ? 'play' : F,
                        C = e.onMouseEnter,
                        g = e.onMouseLeave,
                        B = e.onMouseUp,
                        f = e.onMouseDown,
                        h = e.onClick,
                        v = e.onChange,
                        b = e.onFocus,
                        w = e.onBlur,
                        y = e.text,
                        R = e.contentStyles,
                        P = e.children,
                        S = e.alignment,
                        k = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (-1 !== u.indexOf(r)) continue;
                                    t[r] = e[r];
                                }
                            return t;
                        })(e, mu);
                    const T = (0, n.useState)(!1),
                        x = T[0],
                        N = T[1],
                        O = (0, n.useState)(!1),
                        M = (O[0], O[1]),
                        I = (0, n.useCallback)(
                            (e) => {
                                i || (v && v(), h && h(e));
                            },
                            [i, v, h],
                        ),
                        U = (0, n.useCallback)(
                            (e) => {
                                const u = e.button === cu.t.LEFT;
                                i || (u && N(!0), u && f && f(e), D && (0, L.G)(D));
                            },
                            [i, f, D],
                        ),
                        H = (0, n.useCallback)(
                            (e) => {
                                i || (N(!1), B && B(e));
                            },
                            [i, B],
                        ),
                        G = (0, n.useCallback)(
                            (e) => {
                                i || (C && C(e), A && (0, L.G)(A));
                            },
                            [i, C, A],
                        ),
                        W = (0, n.useCallback)(
                            (e) => {
                                i || (N(!1), g && g(e));
                            },
                            [i, g],
                        ),
                        z = (0, n.useCallback)(
                            (e) => {
                                i || (M(!0), b && b(e));
                            },
                            [i, b],
                        ),
                        $ = (0, n.useCallback)(
                            (e) => {
                                i || (M(!1), w && w(e));
                            },
                            [i, w],
                        ),
                        V = a().createElement(
                            'div',
                            { className: _u.label },
                            a().createElement(
                                'div',
                                { className: p()(_u.labelContent, 's-labelContent'), style: R },
                                y || P,
                            ),
                        );
                    return a().createElement(
                        'div',
                        Au(
                            {
                                id: u,
                                className: p()(_u.base, _u[`base__${d}`], _u[`base__${_}`], {
                                    [_u.base__checked]: r,
                                    [_u.base__disabled]: i,
                                    [_u.base__mouseDown]: x,
                                    [_u.base__alert]: c,
                                    [_u.base__center]: S === Eu.Center,
                                    [_u.base__bottom]: S === Eu.Bottom,
                                }),
                                onClick: I,
                                onMouseEnter: G,
                                onMouseLeave: W,
                                onMouseDown: U,
                                onMouseUp: H,
                                onFocus: z,
                                onBlur: $,
                            },
                            k,
                        ),
                        a().createElement(
                            'div',
                            { className: _u.input },
                            a().createElement('div', { className: _u.alertOverlay }),
                            a().createElement('div', { className: _u.inputHoverOverlay }),
                            a().createElement('div', { className: _u.highlight }),
                        ),
                        a().createElement('div', { className: _u.checkmark }),
                        ((y || P) && V) || null,
                    );
                };
                var Du = t(5603),
                    Cu = t(8494),
                    gu = t(4343),
                    Bu = t(3317),
                    pu = t(7109);
                let fu = (function (e) {
                    return ((e.Small = 'small'), (e.Medium = 'medium'), e);
                })({});
                const hu = {
                        base: 'RadioButton_base_ff08b',
                        base__disabled: 'RadioButton_base__disabled_bf8fb',
                        input: 'RadioButton_input_f534f',
                        base__small: 'RadioButton_base__small_c5c78',
                        base__medium: 'RadioButton_base__medium_a390a',
                        blank: 'RadioButton_blank_f51d4',
                        blankHover: 'RadioButton_blankHover_ad6a6',
                        blankMousedown: 'RadioButton_blankMousedown_c14de',
                        check: 'RadioButton_check_ada46',
                        checkHover: 'RadioButton_checkHover_d45af',
                        checkMousedown: 'RadioButton_checkMousedown_f86ba',
                        transition: 'RadioButton_transition_ce577',
                        base__blank: 'RadioButton_base__blank_b8f85',
                        base__blankHover: 'RadioButton_base__blankHover_bbf14',
                        base__blankMousedown: 'RadioButton_base__blankMousedown_cd193',
                        base__check: 'RadioButton_base__check_c0359',
                        base__checkHover: 'RadioButton_base__checkHover_cc598',
                        base__checkMousedown: 'RadioButton_base__checkMousedown_de781',
                        label: 'RadioButton_label_d16ec',
                    },
                    vu = [
                        'children',
                        'labelRenderer',
                        'value',
                        'currentValue',
                        'autofocus',
                        'disabled',
                        'size',
                        'label',
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
                    ];
                function bu() {
                    return (
                        (bu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        bu.apply(null, arguments)
                    );
                }
                const wu = (0, n.memo)((e) => {
                        let u = e.children,
                            t = e.labelRenderer,
                            r = e.value,
                            s = e.currentValue,
                            i = e.autofocus,
                            o = void 0 !== i && i,
                            c = e.disabled,
                            l = void 0 !== c && c,
                            d = e.size,
                            E = void 0 === d ? fu.Medium : d,
                            _ = e.label,
                            m = e.soundHover,
                            A = void 0 === m ? 'highlight' : m,
                            F = e.soundClick,
                            D = void 0 === F ? 'play' : F,
                            C = e.onMouseEnter,
                            g = e.onMouseLeave,
                            B = e.onMouseUp,
                            h = e.onMouseDown,
                            v = e.onClick,
                            b = e.onChange,
                            w = e.onFocus,
                            y = e.onBlur,
                            R = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (-1 !== u.indexOf(r)) continue;
                                        t[r] = e[r];
                                    }
                                return t;
                            })(e, vu);
                        const P = r === s,
                            S = (0, n.useState)(!1),
                            k = S[0],
                            T = S[1],
                            x = (0, n.useState)(!1),
                            N = x[0],
                            O = x[1],
                            M = (0, n.useState)(o),
                            I = M[0],
                            U = M[1],
                            H = (0, n.useRef)(null),
                            G = (0, n.useCallback)(() => {
                                !l && H.current && (H.current.focus(), U(!0));
                            }, [l]),
                            W = (0, n.useCallback)(
                                (e) => {
                                    I && null !== H.current && !H.current.contains(e.target) && U(!1);
                                },
                                [I],
                            );
                        ((0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', W),
                                () => {
                                    document.removeEventListener('mousedown', W);
                                }
                            ),
                            [W],
                        ),
                            (0, n.useEffect)(() => {
                                U(o);
                            }, [o]));
                        const z = (0, n.useCallback)(
                                (e) => {
                                    l || (b && b(r), v && v(r, e));
                                },
                                [l, b, v, r],
                            ),
                            $ = (0, n.useCallback)(
                                (e) => {
                                    if (!l) {
                                        const u = e.button === cu.t.LEFT;
                                        (u && T(!0), u && h && h(r, e), D && (0, L.G)(D), o && G());
                                    }
                                },
                                [o, l, h, G, D, r],
                            ),
                            V = (0, n.useCallback)(
                                (e) => {
                                    l || (T(!1), B && B(r, e));
                                },
                                [l, B, r],
                            ),
                            q = (0, n.useCallback)(
                                (e) => {
                                    l || (C && C(r, e), A && (0, L.G)(A), O(!0));
                                },
                                [l, C, A, r],
                            ),
                            Z = (0, n.useCallback)(
                                (e) => {
                                    l || (T(!1), O(!1), g && g(r, e));
                                },
                                [l, g, r],
                            ),
                            j = (0, n.useCallback)(
                                (e) => {
                                    l || (U(!0), w && w(r, e));
                                },
                                [l, w, r],
                            ),
                            Y = (0, n.useCallback)(
                                (e) => {
                                    l || (U(!1), y && y(r, e));
                                },
                                [l, y, r],
                            ),
                            X = p()(hu.base, hu[`base__${E}`], {
                                [hu.base__blank]: !P && !N,
                                [hu.base__blankHover]: !P && N && !k,
                                [hu.base__blankMousedown]: !P && N && k,
                                [hu.base__check]: P && !N,
                                [hu.base__checkHover]: P && N && !k,
                                [hu.base__checkMousedown]: P && N && k,
                                [hu.base__focused]: I,
                                [hu.base__disabled]: l,
                            }),
                            K = (0, n.useMemo)(
                                () => ({ isHovered: N, isMouseDown: k, isFocused: I, isChecked: P }),
                                [N, k, I, P],
                            ),
                            Q = (0, n.useRef)(hu.blank),
                            J = (0, n.useRef)(hu.blankHover),
                            ee = (0, n.useRef)(hu.blankMousedown),
                            ue = (0, n.useRef)(hu.check),
                            te = (0, n.useRef)(hu.checkHover),
                            re = (0, n.useRef)(hu.checkMousedown);
                        return (
                            (0, n.useEffect)(
                                (0, f.v)(() => {
                                    ((Q.current = p()(hu.blank, hu.transition)),
                                        (J.current = p()(hu.blankHover, hu.transition)),
                                        (ee.current = p()(hu.blankMousedown, hu.transition)),
                                        (ue.current = p()(hu.check, hu.transition)),
                                        (te.current = p()(hu.checkHover, hu.transition)),
                                        (re.current = p()(hu.checkMousedown, hu.transition)));
                                }),
                                [],
                            ),
                            a().createElement(
                                'div',
                                bu(
                                    {
                                        ref: H,
                                        className: X,
                                        onClick: z,
                                        onMouseEnter: q,
                                        onMouseLeave: Z,
                                        onMouseDown: $,
                                        onMouseUp: V,
                                        onFocus: j,
                                        onBlur: Y,
                                    },
                                    R,
                                ),
                                a().createElement(
                                    'div',
                                    { className: hu.input },
                                    a().createElement('div', { className: Q.current }),
                                    a().createElement('div', { className: J.current }),
                                    a().createElement('div', { className: ee.current }),
                                    a().createElement('div', { className: ue.current }),
                                    a().createElement('div', { className: te.current }),
                                    a().createElement('div', { className: re.current }),
                                ),
                                a().createElement('div', { className: hu.label }, _ || u || (t && t(K))),
                            )
                        );
                    }),
                    yu = 'CurrencyRadioButton_currency_ed541',
                    Ru = (0, o.Pi)(({ currencyType: e, value: u, priceID: t, currentPriceID: r, onClick: n }) =>
                        a().createElement(
                            wu,
                            {
                                value: t,
                                currentValue: r,
                                onClick: () => {
                                    n(t);
                                },
                            },
                            a().createElement(
                                'div',
                                { className: yu },
                                a().createElement(we.F, { type: e, size: ye.et.big, value: u }),
                            ),
                        ),
                    ),
                    Pu = 'Price_base_ab47c',
                    Su = 'Price_priceDivider_aab91',
                    ku = 'Price_button_c58f5',
                    Tu = R.strings.battle_pass.battlePassBuyView,
                    xu = { left: ye.V2.gold, right: ye.V2.freeXP },
                    Nu = (0, o.Pi)(({ className: e, price: u }) => {
                        const t = g(),
                            r = t.model,
                            s = t.controls,
                            i = r.main.isWalletAvailable.get(),
                            o = r.priceID.get(),
                            c = r.computes.prices(),
                            l = c.find((e) => e.currencyType === xu.left),
                            d = c.find((e) => e.currencyType === xu.right);
                        return (
                            (0, n.useEffect)(() => {
                                o || s.setPriceID(r.confirm.compoundPriceDefaultID.get());
                            }, [s, o, r.confirm.compoundPriceDefaultID]),
                            a().createElement(
                                'div',
                                { className: p()(Pu, e) },
                                l && d
                                    ? a().createElement(
                                          a().Fragment,
                                          null,
                                          a().createElement(Ru, {
                                              currencyType: xu.left,
                                              value: l.value,
                                              priceID: l.priceID,
                                              currentPriceID: o,
                                              onClick: s.setPriceID,
                                          }),
                                          a().createElement('div', { className: Su }, Tu.priceDivider()),
                                          a().createElement(Ru, {
                                              currencyType: xu.right,
                                              value: d.value,
                                              priceID: d.priceID,
                                              currentPriceID: o,
                                              onClick: s.setPriceID,
                                          }),
                                      )
                                    : a().createElement(we.F, { type: ye.V2.gold, size: ye.et.large, value: u }),
                                a().createElement(
                                    pu.u5,
                                    {
                                        type: pu.L$.main,
                                        size: pu.qE.medium,
                                        disabled: !i,
                                        onClick: s.buy,
                                        mixClass: ku,
                                    },
                                    Tu.confirm.btnBuy(),
                                ),
                            )
                        );
                    }),
                    Ou = 'Footer_base_b1746',
                    Lu = 'Footer_divider_a6438',
                    Mu = 'Footer_base__isMulticurrency_f1d79',
                    Iu = 'Footer_secondDivider_a3f20',
                    Uu = 'Footer_previousPrice_ec74d',
                    Hu = 'Footer_currentPrice_d61e5',
                    Gu = 'Footer_base__priceUpdateAnimation_b5fa8',
                    Wu = 'Footer_label_fd55d',
                    zu = 'Footer_price_c3bce',
                    $u = R.strings.battle_pass.battlePassBuyView,
                    Vu = (0, o.Pi)(({ isPriceUpdateAnimation: e }) => {
                        const u = g().model,
                            t = u.confirm,
                            r = t.price,
                            n = t.prevPrice,
                            s = t.isPurchaseWithLevels,
                            i = u.computes.isMulticurrency();
                        return a().createElement(
                            'div',
                            { className: p()(Ou, i && Mu, e && Gu) },
                            a().createElement('div', { className: Lu }),
                            a().createElement('div', { className: Iu }),
                            e &&
                                a().createElement(
                                    'div',
                                    { className: Uu },
                                    a().createElement(
                                        'div',
                                        { className: Wu },
                                        s.get() ? $u.confirm.price() : $u.confirm.priceWithLevels(),
                                    ),
                                    a().createElement(Nu, { price: n.get(), className: zu }),
                                ),
                            a().createElement(
                                'div',
                                { className: Hu },
                                a().createElement(
                                    'div',
                                    { className: Wu },
                                    s.get() ? $u.confirm.priceWithLevels() : $u.confirm.price(),
                                ),
                                a().createElement(Nu, { price: r.get(), className: zu }),
                            ),
                        );
                    });
                var qu = t(2486),
                    Zu = t(3359),
                    ju = t(3975);
                const Yu = {
                    descriptionText: 'Rewards_descriptionText_e99f9',
                    priorityRewards: 'Rewards_priorityRewards_ac595',
                    priorityRewards__rewardsButtonVisible: 'Rewards_priorityRewards__rewardsButtonVisible_aadd0',
                    buttonWrapper: 'Rewards_buttonWrapper_c7990',
                    indentBlock: 'Rewards_indentBlock_f74b3',
                    rewardBtn: 'Rewards_rewardBtn_f0ba0',
                    indentBlock__currentRewardsAnimation: 'Rewards_indentBlock__currentRewardsAnimation_a762a',
                    rewardBtn__currentRewardsAnimation: 'Rewards_rewardBtn__currentRewardsAnimation_e1fdc',
                    'fade-in': 'Rewards_fade-in_f7be0',
                    fadeOut: 'Rewards_fadeOut_eb261',
                    fadeIn: 'Rewards_fadeIn_c9992',
                    fadeInWithScale: 'Rewards_fadeInWithScale_d19df',
                    slideUp: 'Rewards_slideUp_aad71',
                    scale: 'Rewards_scale_a50c2',
                    rotate: 'Rewards_rotate_ec417',
                    windowIn: 'Rewards_windowIn_e0536',
                    'fade-out': 'Rewards_fade-out_ec1d5',
                };
                function Xu() {
                    return (
                        (Xu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                  }
                                  return e;
                              }),
                        Xu.apply(null, arguments)
                    );
                }
                const Ku = (e, u) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 100 * e,
                        config: { duration: 300 },
                        onStart: () => {
                            (0, L.G)(R.sounds.bp_reward());
                        },
                        reset: u,
                    }),
                    Qu = R.strings.battle_pass.battlePassBuyView,
                    Ju = (0, o.Pi)(({ isCheckboxAnimationActive: e, isPrevious: u = !1, className: t }) => {
                        const r = g().model,
                            n = r.confirm.isPurchaseWithLevels.get(),
                            s = r.confirm.chapterID.get(),
                            i =
                                r.computes.nowRewards().length +
                                r.computes.futureRewards().length -
                                r.computes.topPriorityRewards().length,
                            o = r.computes.topPriorityRewards(),
                            c = r.computes.prevTopPriorityRewards(),
                            l = u ? c : o,
                            d = u ? !n : n,
                            E = i > 0,
                            _ = (0, Le.useSpring)(Ku(4)),
                            m = (0, De.GS)().mediaSize < De.cJ.Medium ? qu.h2.Small : qu.h2.Big,
                            F = (0, w.tv)();
                        return a().createElement(
                            'div',
                            { className: p()(Yu.base, t) },
                            a().createElement(
                                'div',
                                { className: Yu.descriptionText },
                                d ? Qu.confirm.descriptionCheckboxChecked() : Qu.confirm.description(),
                            ),
                            a().createElement(
                                'div',
                                { className: p()(Yu.priorityRewards, E && Yu.priorityRewards__rewardsButtonVisible) },
                                A.UI(l, (e, t) =>
                                    u
                                        ? a().createElement(
                                              Zu.Q,
                                              Xu({}, (0, q.$n)(e, m), { className: Yu.reward, key: `${e.name}_${t}` }),
                                          )
                                        : a().createElement(
                                              ju.d,
                                              { animationConfig: Ku(t), key: `${e.name}_${t}` },
                                              a().createElement(
                                                  Zu.Q,
                                                  Xu({}, (0, q.$n)(e, m), { className: Yu.reward }),
                                              ),
                                          ),
                                ),
                            ),
                            E
                                ? a().createElement(
                                      Le.animated.div,
                                      { style: _ },
                                      a().createElement(
                                          'div',
                                          { className: Yu.buttonWrapper },
                                          a().createElement(
                                              pu.u5,
                                              {
                                                  type: pu.L$.ghost,
                                                  size: pu.qE.medium,
                                                  mixClass: p()(
                                                      Yu.rewardBtn,
                                                      e && Yu.rewardBtn__currentRewardsAnimation,
                                                  ),
                                                  onClick: () =>
                                                      F.push(Z._.battlePass.buyPassRewards, { packageID: s }),
                                              },
                                              (0, K.uF)(Qu.btnRewards(i), { count: i }),
                                          ),
                                      ),
                                  )
                                : a().createElement('div', { className: Yu.indentBlock }),
                        );
                    }),
                    et = 'ShopOfferWarning_base_ef6ce',
                    ut = 'ShopOfferWarning_lip_c651b',
                    tt = 'ShopOfferWarning_glow_e6d6d',
                    rt = 'ShopOfferWarning_message_aa454',
                    nt = 'ShopOfferWarning_shopOfferLink_aa85b',
                    at = R.strings.battle_pass.battlePassBuyView.confirm,
                    st = ({ className: e }) => {
                        const u = g().controls;
                        return a().createElement(
                            'div',
                            { className: p()(et, e) },
                            a().createElement('div', { className: ut }),
                            a().createElement('div', { className: tt }),
                            a().createElement(Du.z, {
                                classMix: rt,
                                text: R.strings.battle_pass.battlePassBuyView.confirm.shopOfferWarning(),
                                binding: {
                                    link: a().createElement(
                                        'div',
                                        { onClick: u.shopOffer, className: nt },
                                        at.shopOfferLinkText(),
                                    ),
                                },
                            }),
                        );
                    },
                    it = 'ConfirmBuyViewContent_base_f1e2b',
                    ot = 'ConfirmBuyViewContent_background_dc7ea',
                    ct = 'ConfirmBuyViewContent_content_d6adf',
                    lt = 'ConfirmBuyViewContent_backgroundCommander_d4fab',
                    dt = 'ConfirmBuyViewContent_title_ab060',
                    Et = 'ConfirmBuyViewContent_checkboxWrapper_e82d6',
                    _t = 'ConfirmBuyViewContent_content__rewardsUpdateAnimation_f423a',
                    mt = 'ConfirmBuyViewContent_checkbox_c4791',
                    At = 'ConfirmBuyViewContent_previousRewards_f51b0',
                    Ft = 'ConfirmBuyViewContent_currentRewards_fdae4',
                    Dt = 'ConfirmBuyViewContent_checkboxLabel_c2b01',
                    Ct = 'ConfirmBuyViewContent_shopOfferWarning_e5a34',
                    gt = R.strings.battle_pass.battlePassBuyView,
                    Bt = (0, o.Pi)(() => {
                        const e = g(),
                            u = e.model,
                            t = e.controls,
                            r = u.confirm,
                            s = r.chapterID,
                            i = r.isPurchaseWithLevels,
                            o = r.remainingLevelsCount,
                            c = u.main.isShopOfferAvailable,
                            l = u.computes.isExtra(s.get()),
                            d = u.computes.isHoliday(s.get()),
                            E = u.computes.hasChapterLogoBg(s.get()),
                            _ = (0, n.useState)(!1),
                            m = _[0],
                            A = _[1],
                            F = c.get() && !(l || d),
                            D = i.get(),
                            C = (0, n.useRef)(!1),
                            B = (0, De.GS)().mediaSize,
                            f = ((e) => ({
                                backgroundImage: `url(${(0, M.wD)(R.images.gui.maps.icons.battlePass.backgrounds.ip_purchase_confirmation, e)})`,
                            }))(s.get()),
                            b = (0, w.tv)();
                        (h.N.useHandleKeydown(v.n.ESCAPE, () => b.goBack()),
                            (0, gu.d)(t.buy),
                            (0, Cu.gd)(v.n.SPACE, t.buy),
                            (0, n.useEffect)(() => {
                                if (C.current)
                                    return (
                                        A(!0),
                                        (0, Fe.F)(() => {
                                            A(!1);
                                        }, 800)
                                    );
                                C.current = !0;
                            }, [D, C]));
                        const y = B < De.cJ.Medium ? lu.large : lu.extraLarge;
                        return a().createElement(
                            'div',
                            { className: it },
                            a().createElement('div', { className: ot, style: f }),
                            a().createElement(
                                'div',
                                { className: p()(ct, m && _t) },
                                !E &&
                                    a().createElement('div', {
                                        className: lt,
                                        style: {
                                            backgroundImage: `url(${(0, M.wD)(R.images.gui.maps.icons.battlePass.buy.confirm.commander, s.get())})`,
                                        },
                                    }),
                                a().createElement(Bu.D, {
                                    className: dt,
                                    chapter: s.get(),
                                    buyBP: gt.confirm.title(),
                                    type: Bu.x.TransparentChapterName,
                                }),
                                o.get() > 0 &&
                                    a().createElement(
                                        'div',
                                        { className: Et },
                                        a().createElement(
                                            'div',
                                            { className: mt },
                                            a().createElement(
                                                Fu,
                                                { size: y, isChecked: D, onClick: t.togglePurchaseWithLevels },
                                                a().createElement(Du.z, {
                                                    text: gt.confirm.checkbox.stage(o.get()),
                                                    binding: { stagesNumber: o.get() },
                                                    classMix: Dt,
                                                }),
                                            ),
                                        ),
                                    ),
                                m &&
                                    a().createElement(Ju, {
                                        isCheckboxAnimationActive: m,
                                        className: At,
                                        isPrevious: !0,
                                    }),
                                a().createElement(Ju, { isCheckboxAnimationActive: m, className: Ft }),
                                a().createElement(Vu, { isPriceUpdateAnimation: m }),
                            ),
                            F && a().createElement(st, { className: Ct }),
                        );
                    }),
                    pt = { context: 'model.rewards', rootId: R.aliases.battle_pass.BuyPass('resId') };
                (0, o.Pi)(() => {
                    const e = g(),
                        u = e.model,
                        t = e.controls,
                        o = u.main.state.get();
                    switch (
                        ((0, n.useEffect)(() => {
                            o === s && u.priceID.get() && t.setPriceID('');
                        }, [t, u.priceID, o]),
                        o)
                    ) {
                        case s:
                            return a().createElement(ou, null);
                        case r.CONFIRM_STATE:
                            return a().createElement(Bt, null);
                        case i:
                            return a().createElement(c.k, { options: pt }, a().createElement(l.$, null));
                        default:
                            return a().createElement(ou, null);
                    }
                });
            },
            2317: (e, u, t) => {
                t.d(u, { _: () => r });
                const r = {
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
                t.d(u, { $: () => S });
                var r = t(8656),
                    n = t(4020),
                    a = t(828),
                    s = t(2041),
                    i = t(7363),
                    o = t.n(i),
                    c = t(1705),
                    l = t(9994),
                    d = t(1158),
                    E = t(8862),
                    _ = t(9849),
                    m = t.n(_),
                    A = t(2714),
                    F = t(1820),
                    D = t(3287),
                    C = t(8024);
                const g = 'Content_base_ae5c4',
                    B = 'Content_mainContent_a092c',
                    p = 'Content_base__noScroll_ad6fe',
                    f = R.strings.battle_pass.battlePassBuyView.reward,
                    h = (0, s.Pi)(() => {
                        const e = (0, C.t)().model,
                            u = e.levels.get(),
                            t = u.fromLevel,
                            r = u.toLevel,
                            n = u.isPurchaseWithLevels,
                            a = e.computes.nowRewards(),
                            s = e.computes.futureRewards(),
                            c = ((e, u, t) =>
                                t
                                    ? { description: f.descriptionNowRewardsCheckbox() }
                                    : e < u
                                      ? { description: f.descriptionNowRewards(), completedSteps: `${e} - ${u}` }
                                      : { description: f.descriptionNowRewardsSingle(), completedSteps: `${u}` })(
                                t,
                                r,
                                n,
                            ),
                            l = c.description,
                            d = c.completedSteps,
                            E = (0, i.useState)(!1),
                            _ = E[0],
                            h = E[1];
                        return o().createElement(
                            D.z,
                            { className: m()(g, !_ && p), setVisibleScroll: h },
                            o().createElement(
                                'div',
                                { className: B },
                                a.length > 0 &&
                                    o().createElement(F.r, {
                                        description: l,
                                        iconType: A.Q.now,
                                        rewards: a,
                                        steps: d,
                                        title: f.titleNowRewards(),
                                    }),
                                s.length > 0 &&
                                    o().createElement(F.r, {
                                        description: f.descriptionFutureRewards(),
                                        iconType: A.Q.future,
                                        rewards: s,
                                        title: f.titleFutureRewards(),
                                    }),
                            ),
                        );
                    }),
                    v = 'RewardsViewContent_base_c6578',
                    b = 'RewardsViewContent_content_b14ad',
                    w = 'RewardsViewContent_background_cc9fe',
                    y = 'RewardsViewContent_shadow_e76b8';
                function P(e, u, t, r, n, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, n);
                }
                const S = (0, s.Pi)(() => {
                    const e = (0, C.t)().model.levels.get().chapterID,
                        u = (0, i.useState)(!1),
                        t = u[0],
                        s = u[1],
                        _ = (0, E.tv)();
                    (l.N.useHandleKeydown(n.n.ESCAPE, () => _.goBack()),
                        (0, i.useEffect)(() => {
                            (function () {
                                var e,
                                    u =
                                        ((e = function* () {
                                            (yield (0, a.Eu)(), yield (0, r.nS)(), s(!0));
                                        }),
                                        function () {
                                            var u = this,
                                                t = arguments;
                                            return new Promise(function (r, n) {
                                                var a = e.apply(u, t);
                                                function s(e) {
                                                    P(a, r, n, s, i, 'next', e);
                                                }
                                                function i(e) {
                                                    P(a, r, n, s, i, 'throw', e);
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
                        backgroundImage: `url(${(0, c.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, e)})`,
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
                        t && o().createElement('div', { className: b }, o().createElement(h, null)),
                    );
                });
            },
            8024: (e, u, t) => {
                t.d(u, { k: () => i, t: () => o });
                var r = t(5090),
                    n = t(9723),
                    a = t(5369);
                const s = (0, r.q3)()(({ observableModel: e }) => {
                        const u = {
                                levels: e.object(),
                                nowRewards: e.array('nowRewards.items'),
                                futureRewards: e.array('futureRewards.items'),
                            },
                            t = (0, a.Om)(() => u.nowRewards.get(), { equals: n.jv }),
                            r = (0, a.Om)(() => u.futureRewards.get(), { equals: n.jv });
                        return Object.assign({}, u, { computes: { nowRewards: t, futureRewards: r } });
                    }, n.ZT),
                    i = s[0],
                    o = s[1];
            },
            1705: (e, u, t) => {
                t.d(u, { W4: () => n, wD: () => r });
                t(4490);
                const r = (e, u, t = '') => {
                        const r = t.length > 0 ? `_${t}` : t,
                            n = e.$dyn(`c_${u}${r}`),
                            a = String(u).slice(-1),
                            s = e.$dyn(`default_${a}${r}`);
                        return n || s;
                    },
                    n = (e) => {
                        const u = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${r(u.progression, e)})` }
                            : { backgroundImage: `url(${u.$dyn('common')})` };
                    };
            },
            3245: (e, u, t) => {
                let r = (function (e) {
                    return ((e.style = 'style'), (e.tankman = 'tankman'), e);
                })({});
                (r.style, r.tankman);
            },
            5278: (e, u, t) => {
                t.d(u, { $n: () => i, pC: () => a });
                var r = t(2486),
                    n = t(4692);
                (t(768), t(873), t(6758), t(4490), t(3245));
                const a = (e) => R.strings.battle_pass.chapter.fullNameUppercased.$dyn(`c_${e}`),
                    s = (e) =>
                        e.bigIcon.includes('vehicle')
                            ? e.vehicleName
                            : e.bigIcon.includes('style_3d')
                              ? e.userName
                              : void 0,
                    i = (e, u = r.h2.Big, t = !1) => {
                        const a = e.item,
                            i = e.name,
                            o = e.value,
                            c = e.overlayType,
                            l = e.tooltipId,
                            d = e.tooltipContentId;
                        return {
                            name: a || i,
                            image: (0, n.ry)(e, u),
                            special: c,
                            value: o,
                            valueType: (0, n.p3)(i),
                            title: t && s(e),
                            tooltipArgs: (0, n.pI)({ tooltipId: l }, Number(d), { ignoreShowDelay: !0 }),
                            size: u,
                        };
                    };
            },
            4343: (e, u, t) => {
                t.d(u, { d: () => s });
                var r = t(8494),
                    n = t(4020),
                    a = t(7363);
                const s = (e) => {
                    const u = (0, a.useCallback)(
                        (u) => {
                            u.altKey || e();
                        },
                        [e],
                    );
                    (0, r.gd)(n.n.ENTER, u);
                };
            },
            3975: (e, u, t) => {
                t.d(u, { d: () => c });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    s = t.n(a),
                    i = t(1374);
                const o = 'AnimatedReward_base_f60ec',
                    c = ({ children: e, animationConfig: u, className: t }) => {
                        const r = (0, i.useSpring)(u);
                        return s().createElement(i.animated.div, { style: r, className: n()(o, t) }, e);
                    };
            },
            1158: (e, u, t) => {
                t.d(u, { N: () => l });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    s = t.n(a),
                    i = t(1705);
                const o = 'ChapterBackground_base_ec1b7',
                    c = 'ChapterBackground_base__current_d1211',
                    l = ({ chapter: e, isCurrent: u, customBackgroundStyle: t }) =>
                        s().createElement('div', { className: n()(o, u && c), style: t || (0, i.W4)(e) });
            },
            4490: (e, u, t) => {},
            1820: (e, u, t) => {
                t.d(u, { r: () => B });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    s = t.n(a),
                    i = t(2486),
                    o = t(3359),
                    c = t(8925),
                    l = t(8739),
                    d = t(5278);
                const E = 'GroupRewards_base_aacb3',
                    _ = 'GroupRewards_item_efa84',
                    m = ({ rewards: e, className: u }) => {
                        const t = (0, c.GS)().mediaSize < c.cJ.Medium ? i.h2.Small : i.h2.Big;
                        return s().createElement(
                            'div',
                            { className: n()(E, u) },
                            l.UI(e, (e, u) =>
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
                    g = 'RewardsBlock_groupRewards__future_c0a72',
                    B = ({
                        description: e,
                        iconType: u,
                        steps: t = '',
                        rewards: r,
                        className: a = '',
                        title: i = '',
                    }) =>
                        s().createElement(
                            'div',
                            { className: n()(F, a) },
                            s().createElement(A.p, { description: e, type: u, steps: t, className: D, title: i }),
                            s().createElement(m, { rewards: r, className: n()(C, u === A.Q.future && g) }),
                        );
            },
            2714: (e, u, t) => {
                t.d(u, { p: () => l, Q: () => c });
                var r = t(9849),
                    n = t.n(r),
                    a = t(2616),
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
                let c = (function (e) {
                    return ((e.now = 'now'), (e.future = 'future'), e);
                })({});
                const l = ({ description: e, type: u, steps: t = '', className: r = '', title: s = '' }) =>
                    i().createElement(
                        'div',
                        { className: n()(o.base, o[`base__${u}`], r) },
                        i().createElement('div', { className: o.iconShadow }),
                        i().createElement(
                            'div',
                            { className: o.title },
                            i().createElement('div', { className: o.icon }),
                            i().createElement('div', { className: o.titleText }, s),
                        ),
                        i().createElement(a.z, {
                            classMix: o.descriptionText,
                            text: e,
                            binding: { steps: i().createElement('span', { className: o.steps, key: t }, t) },
                        }),
                    );
            },
            3287: (e, u, t) => {
                t.d(u, { z: () => w });
                var r = t(9849),
                    n = t.n(r),
                    a = t(2884),
                    s = t(3934),
                    i = t(7363),
                    o = t.n(i),
                    c = t(8656),
                    l = t(8978),
                    d = t(828);
                function E(e, u, t, r, n, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(r, n);
                }
                function _(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (r, n) {
                            var a = e.apply(u, t);
                            function s(e) {
                                E(a, r, n, s, i, 'next', e);
                            }
                            function i(e) {
                                E(a, r, n, s, i, 'throw', e);
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
                            r = u[1],
                            n = e.animationScroll,
                            a = e.getContainerSize,
                            s = e.getWrapperSize,
                            o = e.events,
                            E = (0, i.useCallback)(() => {
                                const e = n.scrollPosition.get(),
                                    u = a() - s();
                                switch (!0) {
                                    case !u:
                                        return r(m.Idle);
                                    case e <= 0:
                                        return r(m.Start);
                                    case e >= u:
                                        return r(m.End);
                                    default:
                                        r(m.Between);
                                }
                            }, [n.scrollPosition, a, s]);
                        return (
                            (0, i.useEffect)(
                                () => (
                                    (function () {
                                        var e = _(function* () {
                                            yield (0, l.v)(E);
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
                                        (yield (0, d.Eu)(), yield (0, c.nS)(), E());
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
                    g = 'ScrollWithLips_lip__top_eb0da',
                    B = 'ScrollWithLips_lip__bottom_a8083',
                    p = 'ScrollWithLips_scroll_a3a48',
                    f = 'ScrollWithLips_scroll__loaded_c247e',
                    h = 'ScrollWithLips_topButton_a9553',
                    v = 'ScrollWithLips_bottomButton_e59e6',
                    b = 'ScrollWithLips_track_d9f05',
                    w = ({ className: e, children: u, setVisibleScroll: t }) => {
                        const r = (0, s.useVerticalScrollApi)();
                        !(function (e, u) {
                            const t = e.contentRef,
                                r = e.wrapperRef,
                                n = e.scrollPosition,
                                a = e.clampPosition,
                                s = e.animationScroll,
                                o = e.events,
                                c = e.getContainerSize,
                                l = e.getWrapperSize,
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
                                                o = r.current;
                                            if (!i || !o) return;
                                            const c = E.positionFrom - e.screenY,
                                                l = E.previousScrollPosition + c;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: a(i, l),
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
                                }, [s.scrollPosition, a, t, E, n, r, u]),
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
                                        const t = null != (e = c()) ? e : 0,
                                            r = null != (u = l()) ? u : 0;
                                        D(t > r);
                                    };
                                    return (
                                        o.on('resizeHandled', e),
                                        o.on('recalculateContent', e),
                                        () => {
                                            (o.off('resizeHandled', e), o.off('recalculateContent', e));
                                        }
                                    );
                                }, [o, c, l]));
                        })(r);
                        const c = A(r),
                            l = c !== m.Idle;
                        return (
                            (0, i.useEffect)(() => {
                                t && t(c !== m.Idle);
                            }, [t, c]),
                            o().createElement(
                                'div',
                                { className: n()(D, e) },
                                c !== m.Start && c !== m.Idle && o().createElement('div', { className: n()(C, g) }),
                                c !== m.End && c !== m.Idle && o().createElement('div', { className: n()(C, B) }),
                                o().createElement(
                                    a.X.Vertical.Area.Default,
                                    {
                                        api: r,
                                        barClassNames: {
                                            base: n()(p, l && f),
                                            topButton: h,
                                            bottomButton: v,
                                            track: b,
                                        },
                                    },
                                    u,
                                ),
                            )
                        );
                    };
            },
            3317: (e, u, t) => {
                t.d(u, { D: () => E, x: () => l });
                var r = t(9849),
                    n = t.n(r),
                    a = t(6758),
                    s = t(7363),
                    i = t.n(s),
                    o = t(5278);
                const c = {
                    base: 'Title_base_d6708',
                    chapter: 'Title_chapter_f1f86',
                    base__transparentChapterName: 'Title_base__transparentChapterName_aadf8',
                    buyBPTitle: 'Title_buyBPTitle_d1330',
                    subTitle: 'Title_subTitle_be156',
                };
                let l = (function (e) {
                    return ((e.Default = 'default'), (e.TransparentChapterName = 'transparentChapterName'), e);
                })({});
                const d = R.strings.battle_pass.battlePassBuyView.confirm,
                    E = ({ chapter: e, buyBP: u, subTitle: t, className: r, type: s = l.Default }) => {
                        const E = (0, a.uF)(d.chapter(), { name: (0, o.pC)(e) });
                        return i().createElement(
                            'div',
                            { className: n()(c.base, c[`base__${s}`], r) },
                            i().createElement('span', { className: c.chapter }, E),
                            i().createElement('span', { className: c.buyBPTitle }, u),
                            i().createElement('span', { className: c.subTitle }, t),
                        );
                    };
            },
            4053: (e, u, t) => {
                t.d(u, { t: () => a });
                var r = t(7363);
                const n = (0, r.createContext)(void 0);
                function a() {
                    const e = (0, r.useContext)(n);
                    if (!e) throw new Error('useRouter must be used within a RouterProvider');
                    return e;
                }
            },
            9994: (e, u, t) => {
                t.d(u, { N: () => r });
                var r = {};
                (t.r(r), t.d(r, { Provider: () => A, useApi: () => _, useHandleKeydown: () => m }));
                var n = t(7475),
                    a = t(9659),
                    s = t(7363),
                    i = t.n(s),
                    o = t(4020);
                class c {
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
                var l = t(9723);
                const d = () => {
                        const e = new Map();
                        function u(u) {
                            const t = e.get(u);
                            if (t) return t;
                            const r = new c();
                            return (e.set(u, r), r);
                        }
                        function t(u, t) {
                            const r = e.get(u);
                            return !!r && r.remove(t);
                        }
                        return {
                            handlers: e,
                            obtain: u,
                            register: function (e, r) {
                                if (e === o.n.NONE) return l.jv;
                                const n = u(e);
                                return (n.includes(r) || n.push(r), () => t(e, r));
                            },
                            unregister: t,
                            takeCurrent: function (u) {
                                const t = e.get(u);
                                if (!t) return;
                                const r = t.peek();
                                return r || void 0;
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
                    const r = (0, a.z)((e) => {
                            n.O.view.isEventHandled() || (u(e), n.O.view.setEventHandled(), t && e.stopPropagation());
                        }),
                        i = _(),
                        o = (0, s.useMemo)(() => i.keydown.register(e, r), [i, e, r]);
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
                t.d(u, { tv: () => r.t });
                var r = t(4053),
                    n = t(7363);
                (0, n.createContext)(void 0);
            },
            768: (e, u, t) => {},
            6290: (e, u, t) => {
                t.d(u, { Z: () => r });
                const r = {
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
                t.d(u, { Z: () => r });
                const r = { base: 'FormatText_base_f27a4' };
            },
            5261: (e, u, t) => {
                t.d(u, { Z: () => r });
                const r = {
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
                t.d(u, { Z: () => r });
                const r = {
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
                t.d(u, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_a33a9',
                    wrapper: 'HorizontalScroll_wrapper_b622e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a2315',
                };
            },
            1905: (e, u, t) => {
                t.d(u, { Z: () => r });
                const r = {
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
                t.d(u, { Z: () => r });
                const r = {
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, r] = deferred[o], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, r];
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
        (__webpack_require__.j = 4217),
        (() => {
            var e = { 4217: 0, 2155: 0, 8872: 0, 8805: 0, 6488: 0, 2670: 0, 3132: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, i] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (i) var c = i(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        ((n = a[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(1829));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
