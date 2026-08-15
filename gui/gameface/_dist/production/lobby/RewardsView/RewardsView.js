(() => {
    'use strict';
    var __webpack_modules__ = {
            4090: (e, t, r) => {
                r.d(t, { A: () => d });
                var n = r(6483),
                    a = r.n(n),
                    i = r(7363),
                    s = r.n(i);
                const o = {
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
                    },
                    l = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
                function c() {
                    return (
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                const d = (e) => {
                    let t = e.value,
                        r = e.isEmpty,
                        n = e.className,
                        i = e.size,
                        d = void 0 === i ? 'normal' : i,
                        u = e.fadeInAnimation,
                        _ = void 0 !== u && u,
                        m = e.hide,
                        g = void 0 !== m && m,
                        E = e.maximumNumber,
                        h = void 0 === E ? 99 : E,
                        v = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, l);
                    const p = r ? null : t,
                        w = 'string' == typeof p;
                    if ((p && !w && p < 0) || 0 === p) return null;
                    const b = p && !w && p > h,
                        f = a()(
                            o.base,
                            o[`base__${d}`],
                            _ && o.base__animated,
                            g && o.base__hidden,
                            !p && o.base__pattern,
                            r && o.base__empty,
                            n,
                        );
                    return s().createElement(
                        'div',
                        c({ className: f }, v),
                        s().createElement('div', { className: o.bg }),
                        s().createElement('div', { className: o.pattern }),
                        s().createElement(
                            'div',
                            { className: a()(o.value, w && o.value__text) },
                            b ? h : p,
                            b && s().createElement('span', { className: o.plus }, '+'),
                        ),
                    );
                };
            },
            3495: (e, t, r) => {
                r.d(t, { Y: () => l });
                var n = r(70),
                    a = r(7363),
                    i = r(1043),
                    s = r(5262);
                const o = (function (e = n.O.client.getSize('rem')) {
                        const t = e.width,
                            r = e.height;
                        return Object.assign({ width: t, height: r }, (0, s.T)(t, r, i.j));
                    })(),
                    l = (0, a.createContext)(o);
            },
            1039: (e, t, r) => {
                (r(70), r(7363), r(3495));
            },
            6010: (e, t, r) => {
                var n = r(7363),
                    a = r(7382),
                    i = r(3495);
                const s = ['children'];
                (0, n.memo)((e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, s);
                    const o = (0, n.useContext)(i.Y),
                        l = o.extraLarge,
                        c = o.large,
                        d = o.medium,
                        u = o.small,
                        _ = o.extraSmall,
                        m = o.extraLargeWidth,
                        g = o.largeWidth,
                        E = o.mediumWidth,
                        h = o.smallWidth,
                        v = o.extraSmallWidth,
                        p = o.extraLargeHeight,
                        w = o.largeHeight,
                        b = o.mediumHeight,
                        f = o.smallHeight,
                        R = o.extraSmallHeight,
                        T = { extraLarge: p, large: w, medium: b, small: f, extraSmall: R };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && l) return t;
                        if (r.large && c) return t;
                        if (r.medium && d) return t;
                        if (r.small && u) return t;
                        if (r.extraSmall && _) return t;
                    } else {
                        if (r.extraLargeWidth && m) return (0, a.H)(t, r, T);
                        if (r.largeWidth && g) return (0, a.H)(t, r, T);
                        if (r.mediumWidth && E) return (0, a.H)(t, r, T);
                        if (r.smallWidth && h) return (0, a.H)(t, r, T);
                        if (r.extraSmallWidth && v) return (0, a.H)(t, r, T);
                        if (!(
                            r.extraLargeWidth ||
                            r.largeWidth ||
                            r.mediumWidth ||
                            r.smallWidth ||
                            r.extraSmallWidth
                        )) {
                            if (r.extraLargeHeight && p) return t;
                            if (r.largeHeight && w) return t;
                            if (r.mediumHeight && b) return t;
                            if (r.smallHeight && f) return t;
                            if (r.extraSmallHeight && R) return t;
                        }
                    }
                    return null;
                });
            },
            7382: (e, t, r) => {
                r.d(t, { H: () => n });
                const n = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
            },
            7739: (e, t, r) => {
                (r.d(t, { YN: () => n.Y }), r(6010), r(1039));
                var n = r(3495);
            },
            1043: (e, t, r) => {
                r.d(t, { j: () => n });
                const n = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, t, r) => {
                var n;
                function a(e, t, r) {
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
                        })(e, r),
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
                        })(t, r),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: a === r.extraLarge.weight,
                        largeHeight: a === r.large.weight,
                        mediumHeight: a === r.medium.weight,
                        smallHeight: a === r.small.weight,
                        extraSmallHeight: a === r.extraSmall.weight,
                    };
                }
                (r.d(t, { T: () => a }),
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
            1442: (e, t, r) => {
                r.d(t, { Q: () => u });
                var n = r(6483),
                    a = r.n(n),
                    i = r(7363),
                    s = r.n(i),
                    o = r(3415),
                    l = r(2862),
                    c = r(1558);
                const d = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        base__normalize: 'Reward_base__normalize_a6',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__bptaler: 'Reward_info__bptaler_82',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    u = ({
                        name: e,
                        image: t,
                        isPeriodic: r = !1,
                        size: n = l.h2.Big,
                        special: i,
                        value: u,
                        valueType: _,
                        title: m,
                        style: g,
                        className: E,
                        classNames: h,
                        tooltipArgs: v,
                        periodicIconTooltipArgs: p,
                    }) => {
                        const w = (0, c.c$)(n, i),
                            b = (0, c.i2)(i),
                            f = (0, c.m9)(u, _);
                        return s().createElement(
                            'div',
                            {
                                className: a()(d.base, d[`base__${n}`], l.oy.includes(e) && d.base__normalize, E),
                                style: g,
                            },
                            s().createElement(
                                o.l,
                                { tooltipArgs: v, className: d.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: a()(d.image, null == h ? void 0 : h.image) },
                                        w &&
                                            s().createElement('div', {
                                                className: a()(d.highlight, null == h ? void 0 : h.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${w}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            s().createElement('div', {
                                                className: a()(d.icon, null == h ? void 0 : h.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        b &&
                                            s().createElement('div', {
                                                className: a()(d.overlay, null == h ? void 0 : h.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${b}_overlay)`,
                                                },
                                            }),
                                    ),
                                    f &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: a()(
                                                    d.info,
                                                    d[`info__${e}`],
                                                    _ === l.$h.MULTI && d.info__multi,
                                                    null == h ? void 0 : h.info,
                                                ),
                                            },
                                            f,
                                        ),
                                    m && s().createElement('div', { className: d.title }, m),
                                ),
                            ),
                            r &&
                                s().createElement(
                                    o.l,
                                    { tooltipArgs: p },
                                    s().createElement('div', {
                                        className: a()(d.timer, null == h ? void 0 : h.periodicIcon),
                                    }),
                                ),
                        );
                    };
            },
            2862: (e, t, r) => {
                let n, a, i, s, o, l, c, d;
                (r.d(t, { $h: () => s, A2: () => l, E4: () => n, h2: () => i, kK: () => o, oy: () => u, sh: () => c }),
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
                            (e.Stamp = 'stamp'),
                            (e.WtEventLootbox = 'wtevent_lootBox'),
                            (e.WtEventTicket = 'wtevent_ticket'));
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
                    })(a || (a = {})),
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
                    })(i || (i = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(s || (s = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(o || (o = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(l || (l = {})),
                    (function (e) {
                        ((e.ATTACHMENT_RARE = 'rare'),
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'));
                    })(c || (c = {})),
                    (function (e) {
                        ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                    })(d || (d = {})));
                const u = [n.Attachment];
            },
            1558: (e, t, r) => {
                r.d(t, { c$: () => p, m9: () => b, i2: () => w, ry: () => E, pI: () => h, p3: () => _ });
                var n = r(9916);
                const a = ({ value: e, format: t = 'integral' }) => {
                    const r = (function (e) {
                            return 'gold' === e ? n.B3.GOLD : n.B3.INTEGRAL;
                        })(t),
                        a = n.Z5.getNumberFormat(e, r);
                    return void 0 !== e && void 0 !== a ? a : null;
                };
                var i = r(7363),
                    s = r.n(i),
                    o = r(2862);
                const l = [
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
                        o.E4.LootBox,
                        o.E4.PremiumUniversal,
                        o.E4.NaturalCover,
                        o.E4.BpCoin,
                        o.E4.BattlePassSelectToken,
                        o.E4.BattlaPassFinalAchievement,
                        o.E4.BattleBadge,
                        o.E4.BattlePassTicket,
                        o.E4.BonusX5,
                        o.E4.CrewBonusX3,
                        o.E4.EpicSelectToken,
                        o.E4.Comp7TokenWeeklyReward,
                        o.E4.DeluxeGift,
                        o.E4.ModernizedDevicesT1Gift,
                        o.E4.ModernizedDevicesT2Gift,
                        o.E4.ModernizedDevicesT3Gift,
                        o.E4.BattleBoosterGift,
                        o.E4.OptionalDevice,
                        o.E4.Attachment,
                        o.E4.Stamp,
                        o.E4.WtEventLootbox,
                        o.E4.WtEventTicket,
                    ],
                    c = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    d = [o.E4.BattlePassPoints, o.E4.EquipCoin],
                    u = [o.E4.PremiumPlus, o.E4.Premium],
                    _ = (e) =>
                        l.includes(e)
                            ? o.$h.MULTI
                            : c.includes(e)
                              ? o.$h.CURRENCY
                              : d.includes(e)
                                ? o.$h.NUMBER
                                : u.includes(e)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    m = ['engravings', 'backgrounds'],
                    g = ['engraving', 'background'],
                    E = (e, t = o.h2.Small) => {
                        const r = e.name,
                            n = e.type,
                            a = e.value,
                            i = e.icon,
                            s = e.item,
                            l = e.dogTagType,
                            c = ((e) => {
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
                            })(t);
                        switch (r) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${i}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${i}`;
                            case 'dogTagComponents':
                                return ((e, t, r) => {
                                    const n = m[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            i = a.$dyn(r);
                                        return i ? `${i}` : `${a.$dyn(g[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(l, t, i);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${c}.${i}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${c}.${i}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${c}.${i}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${t}.${i}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${t}.${i}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                        }
                    },
                    h = (e, t, r) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            r,
                        );
                    },
                    v = [o.h2.Small, o.h2.Big],
                    p = (e, t) => {
                        if (void 0 === t || !v.includes(e)) return null;
                        switch (t) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    w = (e) => {
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
                            case o.kK.ATTACHMENT_RARE:
                                return o.sh.ATTACHMENT_RARE;
                            case o.kK.ATTACHMENT_EPIC:
                                return o.sh.ATTACHMENT_EPIC;
                            case o.kK.ATTACHMENT_LEGENDARY:
                                return o.sh.ATTACHMENT_LEGENDARY;
                        }
                    },
                    b = (e, t) => {
                        if (void 0 === e) return null;
                        switch (t) {
                            case o.$h.MULTI: {
                                const t = Number(e);
                                return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return s().createElement(a, { format: 'integral', value: Number(e) });
                            case o.$h.PREMIUM_PLUS: {
                                const t = Number(e);
                                return isNaN(t) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7078: (e, t, r) => {
                r.d(t, { t: () => l });
                var n = r(7363),
                    a = r.n(n),
                    i = r(2056);
                const s = ['children'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                            return a;
                        })(e, s);
                    return a().createElement(
                        i.u,
                        o(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            r,
                        ),
                        t,
                    );
                };
            },
            3415: (e, t, r) => {
                r.d(t, { l: () => c });
                var n = r(7363),
                    a = r.n(n),
                    i = r(7078),
                    s = r(6373),
                    o = r(2056);
                function l() {
                    return (
                        (l =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        l.apply(this, arguments)
                    );
                }
                const c = ({ children: e, tooltipArgs: t, className: r }) => {
                    if (!t) return e;
                    const n = a().createElement('div', { className: r }, e);
                    if (t.header || t.body) return a().createElement(s.i, t, n);
                    const c = t.contentId;
                    return c ? a().createElement(o.u, l({}, t, { contentId: c }), n) : a().createElement(i.t, t, n);
                };
            },
            6373: (e, t, r) => {
                r.d(t, { i: () => c });
                var n = r(2056),
                    a = r(7363),
                    i = r.n(a);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = R.views.common.tooltip_window.simple_tooltip_content,
                    c = (e) => {
                        let t = e.children,
                            r = e.body,
                            c = e.header,
                            d = e.note,
                            u = e.alert,
                            _ = e.args,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, s);
                        const g = (0, a.useMemo)(() => {
                            const e = Object.assign({}, _, { body: r, header: c, note: d, alert: u });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [u, r, c, d, _]);
                        return i().createElement(
                            n.u,
                            o(
                                {
                                    contentId:
                                        ((E = null == _ ? void 0 : _.hasHtmlContent),
                                        E ? l.SimpleTooltipHtmlContent('resId') : l.SimpleTooltipContent('resId')),
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
            2056: (e, t, r) => {
                r.d(t, { u: () => c });
                var n = r(7902),
                    a = r(9916),
                    i = r(7363);
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
                function o(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const l = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: a.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    c = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            a = e.args,
                            c = e.onMouseEnter,
                            d = e.onMouseLeave,
                            u = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            g = void 0 !== m && m,
                            E = e.ignoreMouseClick,
                            h = void 0 !== E && E,
                            v = e.decoratorId,
                            p = void 0 === v ? 0 : v,
                            w = e.isEnabled,
                            b = void 0 === w || w,
                            f = e.targetId,
                            R = void 0 === f ? 0 : f,
                            T = e.onShow,
                            S = e.onHide,
                            P = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                return a;
                            })(e, s);
                        const y = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            O = (0, i.useMemo)(() => R || (0, n.F)().resId, [R]),
                            x = (0, i.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (l(r, p, { isMouseEvent: !0, on: !0, arguments: o(a) }, O),
                                    T && T(),
                                    (y.current.isVisible = !0));
                            }, [r, p, a, O, T]),
                            k = (0, i.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        l(r, p, { on: !1 }, O),
                                        y.current.isVisible && S && S(),
                                        (y.current.isVisible = !1));
                                }
                            }, [r, p, O, S]),
                            L = (0, i.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = y.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', L, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', L, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === b && k();
                            }, [b, k]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        (window.removeEventListener('mouseleave', k), k());
                                    }
                                ),
                                [k],
                            ),
                            b
                                ? (0, i.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((N = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          (clearTimeout(y.current.timeoutId),
                                                          (y.current.timeoutId = window.setTimeout(x, g ? 100 : 400)),
                                                          c && c(e),
                                                          N && N(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  (k(), null == d || d(t), null == e || e(t));
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  (!1 === h && k(), null == _ || _(t), null == e || e(t));
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  (!1 === h && k(), null == u || u(t), null == e || e(t));
                                              })(t.props.onMouseDown),
                                          },
                                          P,
                                      ),
                                  )
                                : t
                        );
                        var N;
                    };
            },
            8246: (e, t, r) => {
                r.d(t, { U: () => s });
                var n = r(70);
                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const i = (e) => (0 === e ? window : window.subViews.get(e));
                function s({ initializer: e = !0, rootId: t = 0, getRoot: r = i, context: s = 'model' } = {}) {
                    const o = new Map();
                    function l(e, t = 0) {
                        viewEnv.removeDataChangedCallback(e, t)
                            ? o.delete(e)
                            : console.error("Can't remove callback by id:", e);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (e, t, r) => {
                            r.forEach((t) => {
                                const r = o.get(t);
                                void 0 !== r && r(e);
                            });
                        });
                    });
                    const c = (e) => {
                        const n = r(t),
                            a = s.split('.').reduce((e, t) => e[t], n);
                        return 'string' != typeof e || 0 === e.length
                            ? a
                            : e.split('.').reduce((e, t) => {
                                  const r = e[t];
                                  return 'function' == typeof r ? r.bind(e) : r;
                              }, a);
                    };
                    return {
                        subscribe: (r, a) => {
                            const i = 'string' == typeof a ? `${s}.${a}` : s,
                                l = n.O.view.addModelObserver(i, t, !0);
                            return (o.set(l, r), e && r(c(a)), l);
                        },
                        readByPath: c,
                        createCallback: (e, t) => {
                            const r = c(t);
                            return (...t) => {
                                r(e(...t));
                            };
                        },
                        createCallbackNoArgs: (e) => {
                            const t = c(e);
                            return () => {
                                t();
                            };
                        },
                        dispose: function () {
                            for (
                                var e,
                                    r = (function (e, t) {
                                        var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                                        if (r) return (r = r.call(e)).next.bind(r);
                                        if (
                                            Array.isArray(e) ||
                                            (r = (function (e, t) {
                                                if (e) {
                                                    if ('string' == typeof e) return a(e, t);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    return (
                                                        'Object' === r && e.constructor && (r = e.constructor.name),
                                                        'Map' === r || 'Set' === r
                                                            ? Array.from(e)
                                                            : 'Arguments' === r ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                                              ? a(e, t)
                                                              : void 0
                                                    );
                                                }
                                            })(e)) ||
                                            (t && e && 'number' == typeof e.length)
                                        ) {
                                            r && (e = r);
                                            var n = 0;
                                            return function () {
                                                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                                            };
                                        }
                                        throw new TypeError(
                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                        );
                                    })(o.keys());
                                !(e = r()).done;
                            )
                                l(e.value, t);
                        },
                        unsubscribe: l,
                    };
                }
            },
            3215: (e, t, r) => {
                r.d(t, { q3: () => l });
                var n = r(4598),
                    a = r(9174),
                    i = r(7363),
                    s = r.n(i),
                    o = r(8246);
                const l = () => (e, t) => {
                    const r = (0, i.createContext)({});
                    return [
                        function ({ mode: l = 'real', options: c, children: d, mocks: u }) {
                            const _ = (0, i.useRef)([]),
                                m = (r, i, s) => {
                                    var l;
                                    const c = o.U(i),
                                        d =
                                            'real' === r
                                                ? c
                                                : Object.assign({}, c, {
                                                      readByPath:
                                                          null != (l = null == s ? void 0 : s.getter) ? l : () => {},
                                                  }),
                                        u = (e) =>
                                            'mocks' === r ? (null == s ? void 0 : s.getter(e)) : d.readByPath(e),
                                        m = (e) => _.current.push(e),
                                        g = e({
                                            mode: r,
                                            readByPath: u,
                                            externalModel: d,
                                            observableModel: {
                                                dict: (e) => {
                                                    const t = u(e),
                                                        i = a.LO.box(t, { equals: n.jv });
                                                    return (
                                                        'real' === r &&
                                                            d.subscribe(
                                                                (0, a.aD)((e) => i.set(e)),
                                                                e,
                                                            ),
                                                        i
                                                    );
                                                },
                                                array: (e, t) => {
                                                    const i = null != t ? t : u(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === r &&
                                                            d.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : u(e),
                                                        s = a.LO.box(i, { equals: n.jv });
                                                    return (
                                                        'real' === r &&
                                                            d.subscribe(
                                                                (0, a.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const n = u(t);
                                                    if (Array.isArray(e)) {
                                                        const i = e.reduce(
                                                            (e, t) => ((e[t] = a.LO.box(n[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === r &&
                                                                d.subscribe(
                                                                    (0, a.aD)((t) => {
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
                                                            o = s.reduce(
                                                                (e, [t, r]) => ((e[r] = a.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === r &&
                                                                d.subscribe(
                                                                    (0, a.aD)((e) => {
                                                                        s.forEach(([t, r]) => {
                                                                            o[r].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            o
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: m,
                                        }),
                                        E = { mode: r, model: g, externalModel: d, cleanup: m };
                                    return {
                                        model: g,
                                        controls: 'mocks' === r && s ? s.controls(E) : t(E),
                                        externalModel: d,
                                        mode: r,
                                    };
                                },
                                g = (0, i.useRef)(!1),
                                E = (0, i.useState)(l),
                                h = E[0],
                                v = E[1],
                                p = (0, i.useState)(() => m(l, c, u)),
                                w = p[0],
                                b = p[1];
                            return (
                                (0, i.useEffect)(() => {
                                    g.current ? b(m(h, c, u)) : (g.current = !0);
                                }, [u, h, c]),
                                (0, i.useEffect)(() => {
                                    v(l);
                                }, [l]),
                                (0, i.useEffect)(
                                    () => () => {
                                        (w.externalModel.dispose(), _.current.forEach((e) => e()));
                                    },
                                    [w],
                                ),
                                s().createElement(r.Provider, { value: w }, d)
                            );
                        },
                        () => (0, i.useContext)(r),
                    ];
                };
            },
            70: (e, t, r) => {
                r.d(t, { O: () => ae });
                var n = {};
                (r.r(n),
                    r.d(n, { mouse: () => g, off: () => _, on: () => u, onResize: () => c, onScaleUpdated: () => d }));
                var a = {};
                (r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => p,
                        getSize: () => v,
                        graphicsQuality: () => w,
                        playSound: () => E,
                        setRTPC: () => h,
                    }));
                var i = {};
                (r.r(i), r.d(i, { getBgUrl: () => y, getTextureUrl: () => P }));
                var s = {};
                function o(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                (r.r(s),
                    r.d(s, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => C,
                        arabic2roman: () => Q,
                        children: () => i,
                        displayStatus: () => O,
                        displayStatusIs: () => J,
                        enableFullScreenModeSupported: () => re,
                        events: () => x,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => z,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => K,
                        getExternalPaddingsRem: () => Z,
                        getFontNames: () => X,
                        getScale: () => H,
                        getSize: () => B,
                        getViewGlobalPosition: () => G,
                        initExternalPaddings: () => ne,
                        isEventHandled: () => V,
                        isFocused: () => q,
                        pxToRem: () => W,
                        remToPx: () => j,
                        resize: () => U,
                        sendEvent: () => N,
                        setAnimateWindow: () => $,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => M,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => te,
                    }));
                const c = o('clientResized'),
                    d = o('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    g = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && l(!1);
                        }
                        function r() {
                            e.enabled && l(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', r))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', r))
                                : l(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            s = m[t]((e) => r([e, 'outside']));
                                        function o(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, o),
                                            n(),
                                            () => {
                                                a &&
                                                    (s(),
                                                    window.removeEventListener(i, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
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
                                e.enabled && l(!0);
                            },
                            disableOutside() {
                                e.enabled && l(!1);
                            },
                        });
                    })();
                function E(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function h(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const w = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    b = {
                        toUpperCase: (e) => window.systemLocale.toUpperCase(e),
                        toLowerCase: (e) => window.systemLocale.toLowerCase(e),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    R = Object.keys(f).reduce((e, t) => ((e[t] = () => E(f[t])), e), {}),
                    T = { play: Object.assign({}, R, { sound: E }), setRTPC: h };
                var S = r(9690);
                function P(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function y(e, t, r) {
                    return `url(${P(e, t, r)})`;
                }
                const O = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    k = ['args'],
                    L = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, k);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    N = {
                        close(e) {
                            L('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            L(64);
                        },
                        move(e) {
                            L(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function C(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function A(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function U(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function G(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: j(t.x), y: j(t.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function H() {
                    return viewEnv.getScale();
                }
                function W(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function $(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function V() {
                    return viewEnv.isEventHandled();
                }
                function z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function K() {
                    return viewEnv.getShowingStatus();
                }
                const X = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    Q = S.cg;
                function Z() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const J = Object.keys(O).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === O[t]), e), {}),
                    ee = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    te = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : x.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
                function re() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function ne(e) {
                    function t() {
                        const t = viewEnv.getExternalPaddingsRem(),
                            r = t.top,
                            n = t.right,
                            a = t.bottom,
                            i = t.left;
                        (e.style.setProperty('--external-padding-top', `${r}rem`),
                            e.style.setProperty('--external-padding-right', `${n}rem`),
                            e.style.setProperty('--external-padding-bottom', `${a}rem`),
                            e.style.setProperty('--external-padding-left', `${i}rem`));
                    }
                    (t(), engine.on('self.onPaddingsUpdated', () => t()));
                }
                const ae = { view: s, client: a, sound: T, intl: b };
            },
            4598: (e, t, r) => {
                function n() {
                    return !1;
                }
                (r.d(t, { jv: () => n }), console.log);
            },
            7902: (e, t, r) => {
                r.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let r,
                        n = R.invalid('resId'),
                        a = '';
                    var i;
                    return (
                        t &&
                            ((a = (null == (i = t.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : i[0]) || ''),
                            (r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== r &&
                                window.subViews[r] &&
                                (n = window.subViews[r].id)),
                        { callerUrl: a, caller: r, stack: t, resId: n }
                    );
                };
            },
            5415: (e, t, r) => {
                r.d(t, { GS: () => c, cJ: () => s });
                var n = r(7363),
                    a = r(7739),
                    i = r(1043);
                let s, o, l;
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
                    })(o || (o = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = i.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.j.small.height)] = 'Small'),
                            (e[(e.Medium = i.j.medium.height)] = 'Medium'),
                            (e[(e.Large = i.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.j.extraLarge.height)] = 'ExtraLarge'));
                    })(l || (l = {})));
                const c = () => {
                    const e = (0, n.useContext)(a.YN),
                        t = e.width,
                        r = e.height,
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
                        c = ((e) => {
                            switch (!0) {
                                case e.extraLargeWidth:
                                    return o.ExtraLarge;
                                case e.largeWidth:
                                    return o.Large;
                                case e.mediumWidth:
                                    return o.Medium;
                                case e.smallWidth:
                                    return o.Small;
                                case e.extraSmallWidth:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(e),
                        d = ((e) => {
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
                    return { mediaSize: i, mediaWidth: c, mediaHeight: d, remScreenWidth: t, remScreenHeight: r };
                };
            },
            5521: (e, t, r) => {
                let n, a;
                (r.d(t, { n: () => n }),
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
            9480: (e, t, r) => {
                function n(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, r, n) => t(null == e ? void 0 : e.value, r, n));
                }
                r.d(t, { UI: () => n });
            },
            9690: (e, t, r) => {
                r.d(t, { cg: () => i });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    a = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function i(e) {
                    let t = '';
                    for (let r = a.length - 1; r >= 0; r--) for (; e >= a[r];) ((t += n[r]), (e -= a[r]));
                    return t;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, t, r) => {
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                r.d(t, { $: () => a });
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
            1358: (e, t, r) => {
                r.d(t, { Z: () => i });
                var n = r(70);
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
                    addCallback(e, t, r = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, r, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(i) : (this._views[r] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const n = this._callbacks[r];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
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
            9916: (e, t, r) => {
                r.d(t, { B3: () => c, Z5: () => s.Z5, B0: () => o, ry: () => p });
                class n {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    r();
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
                        const r = e,
                            n = t;
                        ((this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== n)),
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
                var i = r(1358),
                    s = r(8613);
                let o;
                var l;
                (((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = r(5521),
                    g = r(70);
                const E = ['args'];
                function h(e, t, r, n, a, i, s) {
                    try {
                        var o = e[i](s),
                            l = o.value;
                    } catch (e) {
                        return void r(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        r = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(t, r);
                                        function s(e) {
                                            h(i, n, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            h(i, n, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    w = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    b = () => w(o.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var T = r(7572);
                const S = a.instance,
                    P = {
                        DataTracker: i.Z,
                        ViewModel: T.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => w(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => w(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            w(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, a = R.invalid('resId'), i) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                l = r.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                m = {
                                    x: g.O.view.pxToRem(c) + s.x,
                                    y: g.O.view.pxToRem(d) + s.y,
                                    width: g.O.view.pxToRem(u),
                                    height: g.O.view.pxToRem(_),
                                };
                            w(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t),
                                () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
                        },
                        handleViewEvent: w,
                        onBindingsReady: p,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < a.length; t++) r[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = P;
            },
            8613: (e, t, r) => {
                r.d(t, { Z5: () => n, cy: () => a });
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
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            2406: (e, t, r) => {
                var n = r(7363),
                    a = r.n(n),
                    i = r(3403),
                    s = r(6373),
                    o = r(3854);
                const l = (0, r(3215).q3)()(
                        ({ observableModel: e }) => ({ root: e.object(), rewards: e.array('rewards') }),
                        ({ externalModel: e }) => ({ claimRewards: e.createCallbackNoArgs('onClaimRewards') }),
                    ),
                    c = (l[0], l[1]);
                var d = r(6483),
                    u = r.n(d),
                    _ = r(4090),
                    m = r(7727);
                const g = 'FlatButton_glowInner_44',
                    E = 'FlatButton_glowBorder_0b',
                    h = ({ label: e, icon: t, isHighlighted: r = !1, onClick: i, counter: s = 0 }) => {
                        const o = (0, n.useState)(!1),
                            l = o[0],
                            c = o[1];
                        return a().createElement(
                            'div',
                            {
                                className: u()(
                                    'FlatButton_base_0a',
                                    l && 'FlatButton_base__hover_ed',
                                    r && 'FlatButton_base__highlight_39',
                                ),
                                onMouseEnter: () => {
                                    (m.$.playHighlight(), c(!0));
                                },
                                onMouseLeave: () => {
                                    c(!1);
                                },
                                onClick: () => {
                                    (m.$.playClick(), i());
                                },
                            },
                            r &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: 'FlatButton_glow_cb' },
                                        a().createElement('div', { className: g }),
                                        a().createElement('div', {
                                            className: u()(g, 'FlatButton_glowInner__duplicate_9a'),
                                        }),
                                    ),
                                    a().createElement('div', { className: 'FlatButton_highlight_42' }),
                                    a().createElement('div', { className: E }),
                                    a().createElement('div', { className: u()(E, 'FlatButton_glowBorder__hover_b5') }),
                                ),
                            a().createElement(
                                'div',
                                { className: 'FlatButton_content_34' },
                                a().createElement('div', {
                                    className: 'FlatButton_icon_20',
                                    style: { backgroundImage: `url(${t})` },
                                }),
                                a().createElement('div', { className: 'FlatButton_label_88' }, e),
                                Boolean(s) &&
                                    a().createElement(
                                        'div',
                                        { className: 'FlatButton_counter_ab' },
                                        a().createElement(_.A, { value: s }),
                                    ),
                            ),
                        );
                    };
                var v = r(9480),
                    p = r(2862),
                    w = r(5415),
                    b = r(1558);
                let f;
                !(function (e) {
                    ((e.Static = 'static'), (e.Claimable = 'claimable'));
                })(f || (f = {}));
                var T = r(1442);
                const S = (0, n.memo)(
                        ({
                            claimState: e,
                            name: t,
                            icon: r,
                            rewardSize: n,
                            value: i,
                            tooltipId: s,
                            tooltipContentId: o,
                            isDisable: l,
                            isBattlePassRewardDisable: c,
                            classMix: d,
                        }) => {
                            const _ = e === f.Claimable;
                            return a().createElement(
                                'div',
                                {
                                    className: u()(
                                        'FrontlineReward_base_e2',
                                        l && 'FrontlineReward_base__disable_dc',
                                        !l && c && 'FrontlineReward_base__disableBattlePassReward_5a',
                                        d,
                                    ),
                                },
                                _ &&
                                    a().createElement(
                                        'div',
                                        { className: 'FrontlineReward_animWrapper_23' },
                                        a().createElement('div', { className: 'FrontlineReward_glow_0d' }),
                                        a().createElement('div', { className: 'FrontlineReward_glowReverse_42' }),
                                    ),
                                a().createElement(T.Q, {
                                    name: t,
                                    image: (0, b.ry)({ name: t, icon: r }, p.h2.Big),
                                    size: n,
                                    value: i.toString(),
                                    valueType: (0, b.p3)(t),
                                    tooltipArgs: (0, b.pI)({ tooltipId: s }, Number(o), {
                                        ignoreShowDelay: !0,
                                        targetId: R.views.frontline.lobby.RewardsView('resId'),
                                    }),
                                }),
                            );
                        },
                    ),
                    P = {
                        base: 'RewardsCol_base_74',
                        bg: 'RewardsCol_bg_12',
                        highlight: 'RewardsCol_highlight_2b',
                        highlight__white: 'RewardsCol_highlight__white_a8',
                        highlight__gold: 'RewardsCol_highlight__gold_c5',
                        levels: 'RewardsCol_levels_7a',
                        levels__disable: 'RewardsCol_levels__disable_d4',
                        reward: 'RewardsCol_reward_40',
                    };
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                var O;
                !(function (e) {
                    ((e.None = 'none'), (e.White = 'white'), (e.Gold = 'gold'));
                })(O || (O = {}));
                const x = ({ levelsRange: e, frontlineLevel: t, isBattlePassComplete: r, isLastCol: n }) => {
                        const i = (0, w.GS)(),
                            s = i.mediaSize,
                            o = i.remScreenHeight,
                            l = s === w.cJ.ExtraSmall || o < 844 ? p.h2.Small : p.h2.Big,
                            c = e.lvlStart,
                            d = e.lvlEnd,
                            _ = e.rewards,
                            m = ((e, t, r, n) => {
                                switch (!0) {
                                    case e <= r && r <= t:
                                        return O.Gold;
                                    case n:
                                        return O.White;
                                    default:
                                        return O.None;
                                }
                            })(c, d, t, n),
                            g = t < c;
                        return a().createElement(
                            'div',
                            { className: P.base },
                            a().createElement('div', { className: P.bg }),
                            m && a().createElement('div', { className: u()(P.highlight, P[`highlight__${m}`]) }),
                            a().createElement(
                                'span',
                                { className: u()(P.levels, g && P.levels__disable) },
                                c !== d ? `${c}-${d}` : c,
                            ),
                            v.UI(_, (e, t) =>
                                a().createElement(
                                    a().Fragment,
                                    { key: t },
                                    a().createElement(
                                        S,
                                        y({}, e, {
                                            rewardSize: l,
                                            classMix: P.reward,
                                            isDisable: g,
                                            isBattlePassRewardDisable: r && e.name === p.E4.BattlePassPoints,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    k = (0, i.Pi)(() => {
                        const e = c().model,
                            t = e.root.get(),
                            r = t.frontlineLevel,
                            n = t.isBattlePassComplete,
                            i = e.rewards.get();
                        return a().createElement(
                            'div',
                            { className: 'RewardTable_base_cf' },
                            v.UI(i, (e, t) =>
                                a().createElement(
                                    a().Fragment,
                                    { key: `${e.lvlStart}-${e.lvlEnd}` },
                                    a().createElement(x, {
                                        levelsRange: e,
                                        frontlineLevel: r,
                                        isBattlePassComplete: n,
                                        isLastCol: t === i.length - 1,
                                    }),
                                ),
                            ),
                        );
                    });
                var L = r(4959);
                const N = 'SubTitle_base_8d',
                    C = R.strings.fl_rewards.subtitle,
                    M = (0, n.memo)(({ level: e, rewardsCount: t, frontlineState: r }) =>
                        r !== L.c.Finished
                            ? a().createElement('div', { className: N }, C.active())
                            : a().createElement(
                                  'div',
                                  { className: N },
                                  C.finished.title(),
                                  e > 1 &&
                                      (t > 0
                                          ? C.finished.rewards()
                                          : a().createElement(
                                                'div',
                                                { className: 'SubTitle_noRewards_f1' },
                                                a().createElement('div', { className: 'SubTitle_icon_0f' }),
                                                ' ',
                                                C.finished.noRewards(),
                                            )),
                              ),
                    );
                ((0, i.Pi)(() => {
                    const e = c(),
                        t = e.model,
                        r = e.controls,
                        i = t.root.get(),
                        l = i.selectableRewardsCount,
                        d = i.frontlineLevel,
                        u = i.frontlineState,
                        _ = (0, n.useCallback)(() => {
                            r.claimRewards();
                        }, [r]);
                    return a().createElement(
                        'div',
                        { className: 'RewardsViewApp_base_1c' },
                        a().createElement(
                            o.V,
                            { text: R.strings.fl_rewards.title(), classMix: 'RewardsViewApp_pageTitle_61' },
                            a().createElement(M, { level: d, rewardsCount: l, frontlineState: u }),
                        ),
                        a().createElement('div', { className: 'RewardsViewApp_table_32' }, a().createElement(k, null)),
                        l > 0 &&
                            a().createElement(
                                'div',
                                { className: 'RewardsViewApp_claimButton_3d' },
                                a().createElement(
                                    s.i,
                                    {
                                        targetId: R.views.frontline.lobby.RewardsView('resId'),
                                        body: R.strings.fl_rewards.chooseRewards.tooltip(),
                                    },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(h, {
                                            label: R.strings.fl_rewards.chooseRewards.label(),
                                            icon: R.images.frontline.gui.maps.icons.rewards.claim_all(),
                                            isHighlighted: !0,
                                            counter: l,
                                            onClick: _,
                                        }),
                                    ),
                                ),
                            ),
                    );
                }),
                    R.views.frontline.lobby.RewardsView('resId'));
            },
            3854: (e, t, r) => {
                r.d(t, { V: () => l });
                var n = r(6483),
                    a = r.n(n),
                    i = r(7363),
                    s = r.n(i),
                    o = r(5577);
                const l = (0, i.memo)(({ text: e, children: t, classMix: r }) =>
                    s().createElement(
                        'div',
                        { className: a()(o.Z.base, r) },
                        s().createElement('span', { className: o.Z.title }, e),
                        t,
                    ),
                );
            },
            4959: (e, t, r) => {
                let n;
                (r.d(t, { c: () => n }),
                    (function (e) {
                        ((e.Announce = 'announce'),
                            (e.Active = 'active'),
                            (e.Finished = 'finished'),
                            (e.Frozen = 'frozen'));
                    })(n || (n = {})));
            },
            5577: (e, t, r) => {
                r.d(t, { Z: () => n });
                const n = { base: 'PageTitle_base_ef', title: 'PageTitle_title_33' };
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
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return (__webpack_modules__[e](r, r.exports, __webpack_require__), r.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, n] = deferred[l], i = !0, s = 0; s < t.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var o = r();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (__webpack_require__.d(t, { a: t }), t);
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        (__webpack_require__.j = 'lobby/RewardsView/RewardsView'),
        (() => {
            var e = { 'lobby/RewardsView/RewardsView': 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        a,
                        [i, s, o] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        ((a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0));
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, ['lib/frontline.vendors'], () => __webpack_require__(2406));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
