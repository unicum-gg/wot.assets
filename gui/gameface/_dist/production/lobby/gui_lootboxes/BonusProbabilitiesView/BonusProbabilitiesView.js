(() => {
    var __webpack_modules__ = {
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => a });
                var r = t(6179),
                    n = t.n(r),
                    o = t(4179);
                class a extends n().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? o.B3.GOLD : o.B3.INTEGRAL;
                        const u = o.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                a.defaultProps = { format: 'integral' };
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => E });
                var r = t(3138),
                    n = t(6179),
                    o = t(1043),
                    a = t(5262);
                const i = r.O.client.getSize('rem'),
                    s = i.width,
                    l = i.height,
                    c = Object.assign({ width: s, height: l }, (0, a.T)(s, l, o.j)),
                    E = (0, n.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var r = t(6179),
                    n = t.n(r),
                    o = t(6536),
                    a = t(3495),
                    i = t(1043),
                    s = t(5262),
                    l = t(3138);
                const c = (0, r.memo)(({ children: e }) => {
                    const u = (0, r.useContext)(a.Y),
                        t = (0, r.useState)(u),
                        c = t[0],
                        E = t[1],
                        d = (0, r.useCallback)((e, u) => {
                            const t = l.O.view.pxToRem(e),
                                r = l.O.view.pxToRem(u);
                            E(Object.assign({ width: t, height: r }, (0, s.T)(t, r, i.j)));
                        }, []);
                    ((0, o.Z)(() => {
                        engine.on('clientResized', d);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', d), [d]));
                    const A = (0, r.useMemo)(() => Object.assign({}, c), [c]);
                    return n().createElement(a.Y.Provider, { value: A }, e);
                });
            },
            6010: (e, u, t) => {
                'use strict';
                var r = t(6179),
                    n = t(7382),
                    o = t(3495);
                const a = ['children'],
                    i = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, a);
                        const i = (0, r.useContext)(o.Y),
                            s = i.extraLarge,
                            l = i.large,
                            c = i.medium,
                            E = i.small,
                            d = i.extraSmall,
                            A = i.extraLargeWidth,
                            m = i.largeWidth,
                            F = i.mediumWidth,
                            D = i.smallWidth,
                            _ = i.extraSmallWidth,
                            B = i.extraLargeHeight,
                            g = i.largeHeight,
                            C = i.mediumHeight,
                            p = i.smallHeight,
                            b = i.extraSmallHeight,
                            h = { extraLarge: B, large: g, medium: C, small: p, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && s) return u;
                            if (t.large && l) return u;
                            if (t.medium && c) return u;
                            if (t.small && E) return u;
                            if (t.extraSmall && d) return u;
                        } else {
                            if (t.extraLargeWidth && A) return (0, n.H)(u, t, h);
                            if (t.largeWidth && m) return (0, n.H)(u, t, h);
                            if (t.mediumWidth && F) return (0, n.H)(u, t, h);
                            if (t.smallWidth && D) return (0, n.H)(u, t, h);
                            if (t.extraSmallWidth && _) return (0, n.H)(u, t, h);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && g) return u;
                                if (t.mediumHeight && C) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                ((i.defaultProps = {
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
                }),
                    (0, r.memo)(i));
            },
            7382: (e, u, t) => {
                'use strict';
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
            7739: (e, u, t) => {
                'use strict';
                (t.d(u, { YN: () => n.Y, ZN: () => r.Z }), t(6010));
                var r = t(1039),
                    n = t(3495);
            },
            1043: (e, u, t) => {
                'use strict';
                t.d(u, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            5262: (e, u, t) => {
                'use strict';
                var r;
                function n(e, u, t) {
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
                        o = Math.min(r, n);
                    return {
                        extraLarge: o === t.extraLarge.weight,
                        large: o === t.large.weight,
                        medium: o === t.medium.weight,
                        small: o === t.small.weight,
                        extraSmall: o === t.extraSmall.weight,
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
                (t.d(u, { T: () => n }),
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
                    })(r || (r = {})));
            },
            5739: (e, u, t) => {
                'use strict';
                t.d(u, { Q: () => E });
                var r = t(6483),
                    n = t.n(r),
                    o = t(6179),
                    a = t.n(o),
                    i = t(3415),
                    s = t(2862),
                    l = t(729),
                    c = t(1609);
                const E = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: r = s.h2.Big,
                    special: o,
                    value: E,
                    valueType: d,
                    style: A,
                    className: m,
                    classNames: F,
                    tooltipArgs: D,
                    periodicIconTooltipArgs: _,
                }) => {
                    const B = (0, l.L_)(o),
                        g = (0, l.i2)(o),
                        C = (0, l.m9)(E, d);
                    return a().createElement(
                        'div',
                        { className: n()(c.Z.base, c.Z[`base__${r}`], m), style: A },
                        a().createElement(
                            i.l,
                            { tooltipArgs: D, className: c.Z.tooltipWrapper },
                            a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    'div',
                                    { className: n()(c.Z.image, null == F ? void 0 : F.image) },
                                    B &&
                                        a().createElement('div', {
                                            className: n()(c.Z.highlight, null == F ? void 0 : F.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${B}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        a().createElement('div', {
                                            className: n()(c.Z.icon, null == F ? void 0 : F.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    g &&
                                        a().createElement('div', {
                                            className: n()(c.Z.overlay, null == F ? void 0 : F.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_overlay)`,
                                            },
                                        }),
                                ),
                                C &&
                                    a().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                d === s.$h.MULTI && c.Z.info__multi,
                                                null == F ? void 0 : F.info,
                                            ),
                                        },
                                        C,
                                    ),
                            ),
                        ),
                        t &&
                            a().createElement(
                                i.l,
                                { tooltipArgs: _ },
                                a().createElement('div', {
                                    className: n()(c.Z.timer, null == F ? void 0 : F.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, u, t) => {
                'use strict';
                let r, n, o, a, i, s, l;
                (t.d(u, { $h: () => a, A2: () => s, E4: () => r, h2: () => o, kK: () => i, sh: () => l }),
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
                            (e.Currency = 'currency'),
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
                            (e.SelectableBonus = 'selectableBonus'),
                            (e.StyleProgressToken = 'styleProgressToken'),
                            (e.TmanToken = 'tmanToken'),
                            (e.NaturalCover = 'naturalCover'),
                            (e.BpCoin = 'bpcoin'),
                            (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                            (e.NewYearFillers = 'ny22Fillers'),
                            (e.NewYearInvoice = 'newYearInvoice'),
                            (e.NewYearToyFragments = 'ny22ToyFragments'),
                            (e.NewYearSlot = 'newYearSlot'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.CollectionItem = 'collectionItem'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.CosmicLootboxSilver = 'lootBoxToken'),
                            (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                            (e.Branch = 'branch'),
                            (e.VehicleSelect = 'vehicleSelect'),
                            (e.StyleProgress = 'styleProgress'),
                            (e.ParagonsUnlocks = 'paragonsUnlocks'),
                            (e.LootBoxToken = 'lootBoxToken'),
                            (e.GoldenTicket = 'birthday2025_golden_ticket'),
                            (e.PostStamp = 'giftsystem_4_stamp'),
                            (e.Quests = 'quests'));
                    })(r || (r = {})),
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
                            (e.BattleAchievement = 'dossier_achievement'));
                    })(n || (n = {})),
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
                            (e.S48x48 = 's48x48'));
                    })(o || (o = {})),
                    (function (e) {
                        ((e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string'));
                    })(a || (a = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(i || (i = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(s || (s = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'));
                    })(l || (l = {})));
            },
            729: (e, u, t) => {
                'use strict';
                t.d(u, { L_: () => D, i2: () => _, m9: () => B, p3: () => E, pI: () => F, ry: () => m });
                var r = t(2372),
                    n = t(6179),
                    o = t.n(n),
                    a = t(2862);
                const i = [
                        a.E4.Items,
                        a.E4.Equipment,
                        a.E4.Xp,
                        a.E4.XpFactor,
                        a.E4.Blueprints,
                        a.E4.BlueprintsAny,
                        a.E4.Goodies,
                        a.E4.Berths,
                        a.E4.Slots,
                        a.E4.Tokens,
                        a.E4.CrewSkins,
                        a.E4.CrewBooks,
                        a.E4.Customizations,
                        a.E4.CreditsFactor,
                        a.E4.TankmenXp,
                        a.E4.TankmenXpFactor,
                        a.E4.FreeXpFactor,
                        a.E4.BattleToken,
                        a.E4.PremiumUniversal,
                        a.E4.NaturalCover,
                        a.E4.BpCoin,
                        a.E4.BattlePassSelectToken,
                        a.E4.BattlaPassFinalAchievement,
                        a.E4.BattleBadge,
                        a.E4.BonusX5,
                        a.E4.CrewBonusX3,
                        a.E4.NewYearFillers,
                        a.E4.NewYearInvoice,
                        a.E4.EpicSelectToken,
                        a.E4.Comp7TokenWeeklyReward,
                        a.E4.Comp7TokenCouponReward,
                        a.E4.BattleBoosterGift,
                        a.E4.CosmicLootboxCommon,
                        a.E4.CosmicLootboxSilver,
                        a.E4.SelectableBonus,
                        a.E4.GoldenTicket,
                        a.E4.PostStamp,
                    ],
                    s = [a.E4.Gold, a.E4.Credits, a.E4.Crystal, a.E4.FreeXp],
                    l = [a.E4.BattlePassPoints],
                    c = [a.E4.PremiumPlus, a.E4.Premium],
                    E = (e) =>
                        i.includes(e)
                            ? a.$h.MULTI
                            : s.includes(e)
                              ? a.$h.CURRENCY
                              : l.includes(e)
                                ? a.$h.NUMBER
                                : c.includes(e)
                                  ? a.$h.PREMIUM_PLUS
                                  : a.$h.STRING,
                    d = ['engravings', 'backgrounds'],
                    A = ['engraving', 'background'],
                    m = (e, u = a.h2.Small) => {
                        const t = e.name,
                            r = e.type,
                            n = e.value,
                            o = e.icon,
                            i = e.item,
                            s = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case a.h2.S600x450:
                                        return 'c_600x450';
                                    case a.h2.S400x300:
                                        return 'c_400x300';
                                    case a.h2.S296x222:
                                        return 'c_296x222';
                                    case a.h2.S232x174:
                                        return 'c_232x174';
                                    case a.h2.Big:
                                        return 'c_80x80';
                                    case a.h2.Small:
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${o}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case a.h2.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case a.h2.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${o}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const r = d[e];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                            o = n.$dyn(t);
                                        return o ? `${o}` : `${n.$dyn(A[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, u, o);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${o}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${((e) => {
                                    switch (e) {
                                        case a.h2.S600x450:
                                            return 'c_600x450';
                                        case a.h2.S400x300:
                                            return 'c_400x300';
                                        case a.h2.S296x222:
                                            return 'c_296x222';
                                        case a.h2.S232x174:
                                            return 'c_232x174';
                                        case a.h2.S180x135:
                                            return 'big';
                                        case a.h2.Big:
                                        case a.h2.S80x80:
                                            return 'c_80x80';
                                        case a.h2.Small:
                                        case a.h2.S48x48:
                                            return 'c_48x48';
                                        default:
                                            return e;
                                    }
                                })(u)}.${o}`;
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
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                            case 'selectableBonus':
                            case 'groups':
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${o}`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${o}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    F = (e, u, t) => {
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
                    D = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case a.kK.BATTLE_BOOSTER:
                            case a.kK.BATTLE_BOOSTER_REPLACE:
                                return a.A2.BATTLE_BOOSTER;
                        }
                    },
                    _ = (e) => {
                        if (void 0 === e) return null;
                        switch (e) {
                            case a.kK.BATTLE_BOOSTER:
                                return a.sh.BATTLE_BOOSTER;
                            case a.kK.BATTLE_BOOSTER_REPLACE:
                                return a.sh.BATTLE_BOOSTER_REPLACE;
                            case a.kK.BUILT_IN_EQUIPMENT:
                                return a.sh.BUILT_IN_EQUIPMENT;
                            case a.kK.EQUIPMENT_PLUS:
                                return a.sh.EQUIPMENT_PLUS;
                            case a.kK.EQUIPMENT_TROPHY_BASIC:
                                return a.sh.EQUIPMENT_TROPHY_BASIC;
                            case a.kK.EQUIPMENT_TROPHY_UPGRADED:
                                return a.sh.EQUIPMENT_TROPHY_UPGRADED;
                            case a.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                return a.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                            case a.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                return a.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                            case a.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                return a.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                            case a.kK.PROGRESSION_STYLE_UPGRADED_1:
                                return a.sh.PROGRESSION_STYLE_UPGRADED_1;
                            case a.kK.PROGRESSION_STYLE_UPGRADED_2:
                                return a.sh.PROGRESSION_STYLE_UPGRADED_2;
                            case a.kK.PROGRESSION_STYLE_UPGRADED_3:
                                return a.sh.PROGRESSION_STYLE_UPGRADED_3;
                            case a.kK.PROGRESSION_STYLE_UPGRADED_4:
                                return a.sh.PROGRESSION_STYLE_UPGRADED_4;
                        }
                    },
                    B = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case a.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case a.$h.CURRENCY:
                            case a.$h.NUMBER:
                                return o().createElement(r.A, { format: 'integral', value: Number(e) });
                            case a.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => s });
                var r = t(6179),
                    n = t.n(r),
                    o = t(2056);
                const a = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                            return n;
                        })(e, a);
                    return n().createElement(
                        o.u,
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
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var r = t(6179),
                    n = t.n(r),
                    o = t(7078),
                    a = t(6373),
                    i = t(2056);
                function s() {
                    return (
                        (s =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        s.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = n().createElement('div', { className: t }, e);
                    if (u.header || u.body) return n().createElement(a.i, u, r);
                    const l = u.contentId,
                        c = u.args,
                        E = null == c ? void 0 : c.contentId;
                    return l || E
                        ? n().createElement(i.u, s({}, u, { contentId: l || E }), r)
                        : n().createElement(o.t, u, r);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var r = t(2056),
                    n = t(6179),
                    o = t.n(n);
                const a = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            E = e.alert,
                            d = e.args,
                            A = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, a);
                        const m = (0, n.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, d]);
                        return o().createElement(
                            r.u,
                            i(
                                {
                                    contentId:
                                        ((F = null == d ? void 0 : d.hasHtmlContent),
                                        F ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: m,
                                },
                                A,
                            ),
                            u,
                        );
                        var F;
                    };
            },
            2056: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => l });
                var r = t(7902),
                    n = t(4179),
                    o = t(6179);
                const a = [
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
                const s = (e, u, t = {}, r = 0) => {
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
                    l = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            E = e.onMouseDown,
                            d = e.onClick,
                            A = e.ignoreShowDelay,
                            m = void 0 !== A && A,
                            F = e.ignoreMouseClick,
                            D = void 0 !== F && F,
                            _ = e.decoratorId,
                            B = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            C = void 0 === g || g,
                            p = e.targetId,
                            b = void 0 === p ? 0 : p,
                            h = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, a);
                        const w = (0, o.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, o.useMemo)(() => b || (0, r.F)().resId, [b]),
                            x = (0, o.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (s(t, B, { isMouseEvent: !0, on: !0, arguments: i(n) }, S),
                                    h && h(),
                                    (w.current.isVisible = !0));
                            }, [t, B, n, S, h]),
                            R = (0, o.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    (e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        s(t, B, { on: !1 }, S),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1));
                                }
                            }, [t, B, S, v]),
                            y = (0, o.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && R();
                                    }, 200)));
                            }, []);
                        return (
                            (0, o.useEffect)(() => {
                                const e = w.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        (document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e));
                                    }
                                );
                            }, []),
                            (0, o.useEffect)(() => {
                                !1 === C && R();
                            }, [C, R]),
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', R),
                                    () => {
                                        (window.removeEventListener('mouseleave', R), R());
                                    }
                                ),
                                [R],
                            ),
                            C
                                ? (0, o.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((P = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((w.current.timeoutId = window.setTimeout(x, m ? 100 : 400)),
                                                          l && l(e),
                                                          P && P(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  (R(), null == c || c(u), null == e || e(u));
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  (!1 === D && R(), null == d || d(u), null == e || e(u));
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  (!1 === D && R(), null == E || E(u), null == e || e(u));
                                              })(u.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : u
                        );
                        var P;
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
            527: (e, u, t) => {
                'use strict';
                (t.r(u), t.d(u, { mouse: () => i, onResize: () => o }));
                var r = t(2472),
                    n = t(1176);
                const o = (0, r.E)('clientResized'),
                    a = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    i = (function () {
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
                        const o = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const o = `mouse${u}`,
                                            i = a[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(o, s),
                                            r(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(o, s),
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
                        return Object.assign({}, o, {
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
            5959: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => n,
                        graphicsQuality: () => a,
                    }));
                var r = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
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
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                (t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(2472);
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
            7641: (e, u, t) => {
                'use strict';
                (t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => f,
                        events: () => o.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => h,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => D,
                        getSize: () => d,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => b,
                        isFocused: () => C,
                        pxToRem: () => _,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    }));
                var r = t(3722),
                    n = t(6112),
                    o = t(6538),
                    a = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, u, t = 'px') {
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
                function _(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function g(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function h() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const f = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => o });
                const r = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, r);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    o = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, u, t) => {
                'use strict';
                t.d(u, { F: () => r });
                const r = (e = 1) => {
                    const u = new Error().stack;
                    let t,
                        r = R.invalid('resId');
                    return (
                        u &&
                            ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== t &&
                                window.subViews[t] &&
                                (r = window.subViews[t].id)),
                        { caller: t, stack: u, resId: r }
                    );
                };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                var r = t(6179);
                const n = (e) => {
                    const u = (0, r.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => s, GS: () => l, cJ: () => a, fd: () => i });
                var r = t(6179),
                    n = t(7739),
                    o = t(1043);
                let a, i, s;
                (!(function (e) {
                    ((e[(e.ExtraSmall = o.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.j.small.width)] = 'Small'),
                        (e[(e.Medium = o.j.medium.width)] = 'Medium'),
                        (e[(e.Large = o.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.j.extraLarge.width)] = 'ExtraLarge'));
                })(a || (a = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.j.small.width)] = 'Small'),
                            (e[(e.Medium = o.j.medium.width)] = 'Medium'),
                            (e[(e.Large = o.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.j.extraLarge.width)] = 'ExtraLarge'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e[(e.ExtraSmall = o.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.j.small.height)] = 'Small'),
                            (e[(e.Medium = o.j.medium.height)] = 'Medium'),
                            (e[(e.Large = o.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.j.extraLarge.height)] = 'ExtraLarge'));
                    })(s || (s = {})));
                const l = () => {
                    const e = (0, r.useContext)(n.YN),
                        u = e.width,
                        t = e.height,
                        o = ((e) => {
                            switch (!0) {
                                case e.extraLarge:
                                    return a.ExtraLarge;
                                case e.large:
                                    return a.Large;
                                case e.medium:
                                    return a.Medium;
                                case e.small:
                                    return a.Small;
                                case e.extraSmall:
                                    return a.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), a.ExtraSmall);
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
                                    return s.ExtraLarge;
                                case e.largeHeight:
                                    return s.Large;
                                case e.mediumHeight:
                                    return s.Medium;
                                case e.smallHeight:
                                    return s.Small;
                                case e.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(e);
                    return { mediaSize: o, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                (t.d(u, { n: () => r }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD'));
                    })(r || (r = {})),
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
                    })(n || (n = {})));
            },
            3649: (e, u, t) => {
                'use strict';
                let r;
                function n(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function o(e) {
                    return e.replace(/-/g, '_');
                }
                (t.d(u, { BN: () => o, Uw: () => E, uF: () => n, v2: () => r }),
                    (function (e) {
                        ((e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right'));
                    })(r || (r = {})));
                const a = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    i = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    s = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? a : i, []),
                    l = (() => {
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
                    c = ['zh_cn', 'zh_sg', 'zh_tw'],
                    E = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = r.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return c.includes(t)
                                          ? l(e)
                                          : ((e, u = r.left) => {
                                                let t = [];
                                                const n =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    o = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    s(o, /( )/, u).forEach((e) => (t = t.concat(s(e, n, r.left)))),
                                                    t
                                                );
                                            })(e, u);
                                  })(e, u),
                        );
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => o });
                var r = t(3138);
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
                        const o = r.O.view.addModelObserver(e, t, n);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                const o = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => c, Z5: () => a, B0: () => s, ry: () => g });
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
                var o = t(1358);
                const a = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let s;
                var l;
                (((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE'));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    F = t(3138);
                const D = ['args'];
                function _(e, u, t, r, n, o, a) {
                    try {
                        var i = e[o](a),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(r, n);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (r, n) {
                                        var o = e.apply(u, t);
                                        function a(e) {
                                            _(o, r, n, a, i, 'next', e);
                                        }
                                        function i(e) {
                                            _(o, r, n, a, i, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(u, D);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    p = () => C(s.CLOSE),
                    b = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var h = t(7572);
                const v = n.instance,
                    f = {
                        DataTracker: o.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: d,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => C(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => C(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            C(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), o) => {
                            const a = F.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                A = {
                                    x: F.O.view.pxToRem(l) + a.x,
                                    y: F.O.view.pxToRem(c) + a.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(d),
                                };
                            C(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: B(A),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u),
                                () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, p);
                        },
                        handleViewEvent: C,
                        onBindingsReady: g,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
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
                        ClickOutsideManager: v,
                        SystemLocale: a,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = f;
            },
            3458: (e, u, t) => {
                'use strict';
                let r;
                (t.d(u, { Z0: () => n, in: () => r, sx: () => o }),
                    (function (e) {
                        ((e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning'));
                    })(r || (r = {})));
                const n = 'tooltip_watched',
                    o = 2;
                let a;
                !(function (e) {
                    ((e.Click = 'click'), (e.KeyDown = 'keydown'));
                })(a || (a = {}));
            },
            1943: (e, u, t) => {
                'use strict';
                t.d(u, { Jp: () => c, Sr: () => d });
                var r = t(6179),
                    n = t(3458);
                const o = ['action', 'timeLimit'],
                    a = 'metrics',
                    i = () => Date.now(),
                    s = ({ partnerID: e, item: u, parentScreen: t, itemState: r, info: n }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: r || null,
                        additional_info: n || null,
                    }),
                    l = (e, u) => {
                        const t = (0, r.useCallback)(
                            (t, r = n.in.Info, o) => {
                                (o || (o = {}),
                                    Object.keys(o).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: r,
                                            params: JSON.stringify(o),
                                        }));
                            },
                            [e, u],
                        );
                        return (e, u, r) => t(e, u, r);
                    },
                    c = (e) => {
                        const u = l(e, a),
                            t = (0, r.useCallback)(
                                (e) => {
                                    u(e.action, e.logLevel, s(e));
                                },
                                [u],
                            );
                        return (e) => t(e);
                    },
                    E = (e) => {
                        const u = ((e, u) => {
                                const t = l(e, u),
                                    n = (0, r.useRef)(new Map()),
                                    o = (0, r.useRef)(new Map()),
                                    a = (0, r.useCallback)(
                                        (e) => {
                                            if (!e) return;
                                            const u = n.current.get(e);
                                            (void 0 !== u && u > 0) || n.current.set(e, i());
                                        },
                                        [n],
                                    ),
                                    s = (0, r.useCallback)(() => {
                                        (n.current.clear(), o.current.clear());
                                    }, [n, o]),
                                    c = (0, r.useCallback)(
                                        (e) => {
                                            e &&
                                                void 0 !== n.current.get(e) &&
                                                void 0 === o.current.get(e) &&
                                                o.current.set(e, i());
                                        },
                                        [n, o],
                                    ),
                                    E = (0, r.useCallback)(
                                        (e) => {
                                            if (!e) return;
                                            const u = n.current.get(e);
                                            if (void 0 === u) return;
                                            const t = o.current.get(e);
                                            if (void 0 === t) return;
                                            o.current.delete(e);
                                            const r = i() - t;
                                            n.current.set(e, u + r);
                                        },
                                        [n, o],
                                    ),
                                    d = (0, r.useCallback)(
                                        (e, u = 0, r, a) => {
                                            const s = n.current.get(e);
                                            if (void 0 === s) return;
                                            (void 0 !== o.current.get(e) && E(e), n.current.delete(e));
                                            const l = (i() - s) / 1e3;
                                            l <= u ||
                                                ((a = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(
                                                    a,
                                                    l,
                                                )),
                                                t(e, r, a));
                                        },
                                        [n, o, t, E],
                                    );
                                return [
                                    (e) => a(e),
                                    (e, u, t, r) => d(e, u, t, r),
                                    () => s(),
                                    (e) => c(e),
                                    (e) => E(e),
                                ];
                            })(e, a),
                            t = u[0],
                            n = u[1],
                            o = u[2],
                            c = u[3],
                            E = u[4],
                            d = (0, r.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        r = e.logLevel;
                                    n(u, t, r, s(e));
                                },
                                [n],
                            );
                        return [(e) => t(e), (e) => d(e), () => o(), (e) => c(e), (e) => E(e)];
                    },
                    d = (e, u) => {
                        const t = E(e),
                            a = t[0],
                            i = t[1],
                            s = u.action,
                            l = u.timeLimit,
                            c = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(u, o);
                        return (0, r.useMemo)(
                            () => ({
                                onShow: () => a(s || n.Z0),
                                onHide: () => i(Object.assign({ action: s || n.Z0, timeLimit: l || n.sx }, c)),
                            }),
                            [s, l, c, a, i],
                        );
                    };
            },
            316: (e, u, t) => {
                'use strict';
                var r = {};
                (t.r(r),
                    t.d(r, {
                        Area: () => De,
                        Bar: () => Ae,
                        DefaultScroll: () => Fe,
                        Direction: () => re,
                        defaultSettings: () => ne,
                        useHorizontalScrollApi: () => ae,
                    }));
                var n = {};
                (t.r(n), t.d(n, { Area: () => xe, Bar: () => fe, Default: () => Se, useVerticalScrollApi: () => _e }));
                var o = t(6179),
                    a = t.n(o),
                    i = t(493),
                    s = t.n(i),
                    l = t(7739),
                    c = t(6483),
                    E = t.n(c),
                    d = t(926),
                    A = t.n(d),
                    m = t(5415);
                const F = ['children', 'className'];
                function D() {
                    return (
                        (D =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        D.apply(this, arguments)
                    );
                }
                const _ = {
                        [m.fd.ExtraSmall]: '',
                        [m.fd.Small]: A().SMALL_WIDTH,
                        [m.fd.Medium]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH}`,
                        [m.fd.Large]: `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH} ${A().LARGE_WIDTH}`,
                        [m.fd.ExtraLarge]:
                            `${A().SMALL_WIDTH} ${A().MEDIUM_WIDTH} ${A().LARGE_WIDTH} ${A().EXTRA_LARGE_WIDTH}`,
                    },
                    B = {
                        [m.Aq.ExtraSmall]: '',
                        [m.Aq.Small]: A().SMALL_HEIGHT,
                        [m.Aq.Medium]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT}`,
                        [m.Aq.Large]: `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT} ${A().LARGE_HEIGHT}`,
                        [m.Aq.ExtraLarge]:
                            `${A().SMALL_HEIGHT} ${A().MEDIUM_HEIGHT} ${A().LARGE_HEIGHT} ${A().EXTRA_LARGE_HEIGHT}`,
                    },
                    g = {
                        [m.cJ.ExtraSmall]: '',
                        [m.cJ.Small]: A().SMALL,
                        [m.cJ.Medium]: `${A().SMALL} ${A().MEDIUM}`,
                        [m.cJ.Large]: `${A().SMALL} ${A().MEDIUM} ${A().LARGE}`,
                        [m.cJ.ExtraLarge]: `${A().SMALL} ${A().MEDIUM} ${A().LARGE} ${A().EXTRA_LARGE}`,
                    },
                    C = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, F);
                        const n = (0, m.GS)(),
                            o = n.mediaWidth,
                            i = n.mediaHeight,
                            s = n.mediaSize;
                        return a().createElement('div', D({ className: E()(t, _[o], B[i], g[s]) }, r), u);
                    },
                    p = ['children'],
                    b = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                return n;
                            })(e, p);
                        return a().createElement(l.ZN, null, a().createElement(C, t, u));
                    };
                var h = t(3403);
                function v(e) {
                    engine.call('PlaySound', e);
                }
                const f = {
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
                    w = [
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
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                class x extends a().PureComponent {
                    constructor(...e) {
                        (super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && v(this.props.soundHover));
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                (e && e(u), this.setState({ hover: !1, click: !1 }));
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                (e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && v(this.props.soundClick));
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
                            r = e.goto,
                            n = e.side,
                            o = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            A =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        o = Object.keys(e);
                                    for (r = 0; r < o.length; r++) ((t = o[r]), u.indexOf(t) >= 0 || (n[t] = e[t]));
                                    return n;
                                })(e, w)),
                            m = E()(f.base, f[`base__${o}`], f[`base__${n}`], null == i ? void 0 : i.base),
                            F = E()(f.icon, f[`icon__${o}`], f[`icon__${n}`], null == i ? void 0 : i.icon),
                            D = E()(f.glow, null == i ? void 0 : i.glow),
                            _ = E()(f.caption, f[`caption__${o}`], null == i ? void 0 : i.caption),
                            B = E()(f.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            S(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== o && a().createElement('div', { className: f.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: D })),
                            a().createElement('div', { className: _ }, u),
                            r && a().createElement('div', { className: B }, r),
                        );
                    }
                }
                x.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var y = t(2862),
                    P = t(729);
                function T() {}
                function L() {
                    return !1;
                }
                console.log;
                var N = t(9174),
                    k = t(3138);
                function O(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const M = (e) => (0 === e ? window : window.subViews.get(e));
                function I(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var W = t(3946),
                    H = t(3649);
                (y.E4.Vehicles, y.E4.TmanToken, y.E4.CollectionItem);
                var U = t(9409);
                const G = ((e, u) => {
                        const t = (0, o.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: i }) {
                                const s = (0, o.useRef)([]),
                                    l = (e, t, r) => {
                                        var n;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = M,
                                                context: r = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function o(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = n.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const a = (e) => {
                                                    const n = t(u),
                                                        o = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? o
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, o);
                                                };
                                                return {
                                                    subscribe: (t, o) => {
                                                        const i = 'string' == typeof o ? `${r}.${o}` : r,
                                                            s = k.O.view.addModelObserver(i, u, !0);
                                                        return (n.set(s, t), e && t(a(o)), s);
                                                    },
                                                    readByPath: a,
                                                    createCallback: (e, u) => {
                                                        const t = a(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = a(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return O(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? O(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            o(e.value, u);
                                                    },
                                                    unsubscribe: o,
                                                };
                                            })(t),
                                            a =
                                                'real' === e
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : a.readByPath(u),
                                            l = (e) => s.current.push(e),
                                            c = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        slots: e.array('slots'),
                                                        lootLists: e.array('lootLists', []),
                                                    },
                                                    t = (e, u) =>
                                                        Object.assign(
                                                            {
                                                                image: (0, P.ry)(e, y.h2.Big),
                                                                tooltipArgs: (0, P.pI)(
                                                                    { tooltipId: e.tooltipId, slotId: u },
                                                                    Number(e.tooltipContentId),
                                                                ),
                                                                special: e.overlayType,
                                                                valueType: (0, P.p3)(e.name),
                                                            },
                                                            e,
                                                        ),
                                                    r = (0, W.Om)(
                                                        (e) => {
                                                            const r = u.root.get().hasLootLists,
                                                                n = r ? o() : [];
                                                            return I(u.slots.get(), (u, o) => {
                                                                const a = I(u.bonuses, (e) => t(e, o)),
                                                                    i =
                                                                        r && n[e].length
                                                                            ? ((e, u, r) => {
                                                                                  const n = e[u][0].value;
                                                                                  return n.id - 1 !== r
                                                                                      ? []
                                                                                      : I(n.bonuses, (e) => t(e, r));
                                                                              })(n, e, o)
                                                                            : [],
                                                                    s = [...a, ...i];
                                                                return Object.assign({}, u, {
                                                                    probability: u.probabilities[e].value,
                                                                    bonuses: s.filter((e) => !e.isCompensation),
                                                                });
                                                            });
                                                        },
                                                        { equals: L },
                                                    ),
                                                    n = (0, W.Om)(() => I(u.lootLists.get(), (e, u) => r(u)), {
                                                        equals: L,
                                                    }),
                                                    o = (0, W.Om)(() => I(u.lootLists.get(), (e) => e.slice(1)), {
                                                        equals: L,
                                                    }),
                                                    a = (0, W.Om)(
                                                        () => {
                                                            const e = u.lootLists.get();
                                                            return I(e, (r, n) => {
                                                                const o = r[0].value,
                                                                    a = o.bonuses,
                                                                    i = o.probabilities,
                                                                    s = n === e.length - 1;
                                                                let l = I(a, (e) => {
                                                                    let t = U.H.Available;
                                                                    const r = u.root.get().rotationStage;
                                                                    return (
                                                                        e.inInventory || e.wasSold
                                                                            ? (t = U.H.Received)
                                                                            : n > r && (t = U.H.Unavailable),
                                                                        Object.assign({}, e, { status: t })
                                                                    );
                                                                });
                                                                return (
                                                                    s &&
                                                                        l[0].status !== U.H.Received &&
                                                                        (l = l.map((e) =>
                                                                            Object.assign({}, t(e, n), {
                                                                                image: (u) =>
                                                                                    ((e, u = y.h2.Small) => {
                                                                                        const t = (0, H.BN)(
                                                                                            e.vehicleName || '',
                                                                                        );
                                                                                        if (e.name === y.E4.Vehicles)
                                                                                            switch (u) {
                                                                                                case y.h2.Mini:
                                                                                                case y.h2.Small:
                                                                                                case y.h2.S48x48:
                                                                                                    return e.isRent
                                                                                                        ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                                                                        : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                                                                                case y.h2.Big:
                                                                                                case y.h2.S80x80:
                                                                                                    return e.isRent
                                                                                                        ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                                                                        : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                                                                                case y.h2.S128x100:
                                                                                                case y.h2.S180x135:
                                                                                                    return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                                                                                case y.h2.S232x174:
                                                                                                case y.h2.S296x222:
                                                                                                    return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                                                                                case y.h2.S400x300:
                                                                                                case y.h2.S600x450:
                                                                                                    return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                                                                                default:
                                                                                                    return (
                                                                                                        console.error(
                                                                                                            'Unknown vehicle image size',
                                                                                                            u,
                                                                                                            e.vehicleName,
                                                                                                        ),
                                                                                                        'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                                                                                    );
                                                                                            }
                                                                                        if (e.name === y.E4.TmanToken)
                                                                                            switch (u) {
                                                                                                case y.h2.Mini:
                                                                                                case y.h2.Small:
                                                                                                case y.h2.S48x48:
                                                                                                case y.h2.Big:
                                                                                                case y.h2.S80x80:
                                                                                                    return `R.images.gui.maps.icons.tankmen.icons.s80x80.${e.icon}`;
                                                                                                case y.h2.S128x100:
                                                                                                case y.h2.S180x135:
                                                                                                case y.h2.S232x174:
                                                                                                    return `R.images.gui.maps.icons.tankmen.icons.s232x174.${e.icon}`;
                                                                                                case y.h2.S296x222:
                                                                                                    return `R.images.gui.maps.icons.tankmen.icons.s296x222.${e.icon}`;
                                                                                                case y.h2.S400x300:
                                                                                                    return `R.images.gui.maps.icons.tankmen.icons.s400x300.${e.icon}`;
                                                                                                case y.h2.S600x450:
                                                                                                    return `R.images.gui.maps.icons.tankmen.icons.s600x450.${e.icon}`;
                                                                                                default:
                                                                                                    return (
                                                                                                        console.error(
                                                                                                            'Unknown image size',
                                                                                                            u,
                                                                                                        ),
                                                                                                        'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                                                                                    );
                                                                                            }
                                                                                        if (
                                                                                            e.name ===
                                                                                            y.E4.CollectionItem
                                                                                        )
                                                                                            switch (u) {
                                                                                                case y.h2.Mini:
                                                                                                case y.h2.Small:
                                                                                                case y.h2.S48x48:
                                                                                                    return `R.images.gui.maps.icons.collectionItems.c_48x48.${e.icon}`;
                                                                                                case y.h2.Big:
                                                                                                case y.h2.S80x80:
                                                                                                    return `R.images.gui.maps.icons.collectionItems.c_80x80.${e.icon}`;
                                                                                                case y.h2.S128x100:
                                                                                                case y.h2.S180x135:
                                                                                                case y.h2.S232x174:
                                                                                                    return `R.images.gui.maps.icons.collectionItems.c_232x174.${e.icon}`;
                                                                                                case y.h2.S296x222:
                                                                                                    return `R.images.gui.maps.icons.collectionItems.c_296x222.${e.icon}`;
                                                                                                case y.h2.S400x300:
                                                                                                    return `R.images.gui.maps.icons.collectionItems.c_400x300.${e.icon}`;
                                                                                                case y.h2.S600x450:
                                                                                                    return `R.images.gui.maps.icons.collectionItems.c_600x450.${e.icon}`;
                                                                                                default:
                                                                                                    console.error(
                                                                                                        'Unknown image size',
                                                                                                        u,
                                                                                                    );
                                                                                            }
                                                                                        return (0, P.ry)(e, u);
                                                                                    })(e, u),
                                                                            }),
                                                                        )),
                                                                    { probability: i[n].value, bonuses: l }
                                                                );
                                                            });
                                                        },
                                                        { equals: L },
                                                    ),
                                                    i = (0, W.Om)(() => {
                                                        const e = u.root.get().rotationStage;
                                                        return e === u.lootLists.get().length ? e - 1 : e;
                                                    });
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        getSlots: r,
                                                        getStageSlots: n,
                                                        getLootLists: a,
                                                        getCurrentStage: i,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : i(u),
                                                            n = N.LO.box(r, { equals: L });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, N.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : i(u),
                                                            n = N.LO.box(r, { equals: L });
                                                        return (
                                                            'real' === e &&
                                                                a.subscribe(
                                                                    (0, N.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = i(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = N.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, N.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                o = Object.entries(n),
                                                                i = o.reduce(
                                                                    (e, [u, t]) => ((e[t] = N.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    a.subscribe(
                                                                        (0, N.aD)((e) => {
                                                                            o.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            E = { mode: e, model: c, externalModel: a, cleanup: l };
                                        return {
                                            model: c,
                                            controls: 'mocks' === e && r ? r.controls(E) : u(E),
                                            externalModel: a,
                                            mode: e,
                                        };
                                    },
                                    c = (0, o.useRef)(!1),
                                    E = (0, o.useState)(e),
                                    d = E[0],
                                    A = E[1],
                                    m = (0, o.useState)(() => l(e, r, i)),
                                    F = m[0],
                                    D = m[1];
                                return (
                                    (0, o.useEffect)(() => {
                                        c.current ? D(l(d, r, i)) : (c.current = !0);
                                    }, [i, d, r]),
                                    (0, o.useEffect)(() => {
                                        A(e);
                                    }, [e]),
                                    (0, o.useEffect)(
                                        () => () => {
                                            (F.externalModel.dispose(), s.current.forEach((e) => e()));
                                        },
                                        [F],
                                    ),
                                    a().createElement(t.Provider, { value: F }, n)
                                );
                            },
                            () => (0, o.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallback((e) => ({ closeMethod: e }), 'onClose'),
                    })),
                    $ = G[0],
                    V = G[1],
                    j = ({ binding: e, text: u = '', classMix: t, alignment: r = H.v2.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  o.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      a().createElement(
                                          'div',
                                          { className: E()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          (0, H.Uw)(u, r, e).map((e, u) =>
                                              a().createElement(o.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    z = {
                        base: 'ProbabilitiesHeader_base_24',
                        probabilityHeaderText: 'ProbabilitiesHeader_probabilityHeaderText_cb',
                        probabilityBoxName: 'ProbabilitiesHeader_probabilityBoxName_81',
                        probabilityBoxDescription: 'ProbabilitiesHeader_probabilityBoxDescription_2b',
                        probabilityBoxTier: 'ProbabilitiesHeader_probabilityBoxTier_97',
                        boxIcon: 'ProbabilitiesHeader_boxIcon_d5',
                        boxIcon__tier1: 'ProbabilitiesHeader_boxIcon__tier1_5b',
                        boxIcon__tier2: 'ProbabilitiesHeader_boxIcon__tier2_e1',
                        boxIcon__tier3: 'ProbabilitiesHeader_boxIcon__tier3_04',
                        boxIcon__tier4: 'ProbabilitiesHeader_boxIcon__tier4_bb',
                        infoBoxes: 'ProbabilitiesHeader_infoBoxes_4a',
                    },
                    q = R.strings.gui_lootboxes,
                    X = R.strings.lootboxes,
                    Y = (0, h.Pi)(({ isBoxWithRotation: e = !1 }) => {
                        var u;
                        const t = V().model.root.get(),
                            r = t.lootboxName,
                            n = t.lootboxTier;
                        return a().createElement(
                            'div',
                            { className: z.base },
                            a().createElement(j, {
                                text: q.probabilitiesOverlay.optional.header(),
                                classMix: z.probabilityHeaderText,
                            }),
                            !e &&
                                a().createElement(j, {
                                    text: null == (u = X.userName.$dyn(r)) ? void 0 : u.replace('\n', ' '),
                                    classMix: z.probabilityBoxName,
                                }),
                            e
                                ? a().createElement(
                                      'div',
                                      { className: z.probabilityBoxDescription },
                                      q.probabilitiesOverlay.boxDescription(),
                                  )
                                : a().createElement(
                                      'div',
                                      { className: z.probabilityBoxTier },
                                      a().createElement('div', { className: E()(z.boxIcon, z[`boxIcon__tier${n}`]) }),
                                      a().createElement(j, {
                                          text: String(q.tier.$dyn(`tier_${n}`)),
                                          classMix: z.infoBoxes,
                                      }),
                                  ),
                        );
                    }),
                    K = (e) => {
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
                    },
                    Z = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Q = [];
                function J(e) {
                    const u = (0, o.useRef)(e);
                    return (
                        (0, o.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, o.useCallback)((...e) => (0, u.current)(...e), Q)
                    );
                }
                function ee(e, u, t = []) {
                    const r = (0, o.useRef)(0),
                        n = (0, o.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, o.useEffect)(() => n, [n]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, o.useCallback)((t) => {
                            ((r.current = window.setInterval(() => e(t, !0), u)), e(t, !1));
                        }, a),
                        n,
                    ];
                }
                function ue(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                var te = t(7030);
                let re;
                !(function (e) {
                    ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
                })(re || (re = {}));
                const ne = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    oe = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const i = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                o = r[1];
                            return Z(n, o, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? ne : l,
                                E = (0, o.useRef)(null),
                                d = (0, o.useRef)(null),
                                A = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return ue(e, u);
                                                                    var t = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            e.constructor &&
                                                                            (t = e.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? ue(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(r = n()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, o.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                m = (function (e, u, t) {
                                    const r = (0, o.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    o = !1,
                                                    a = 0;
                                                function i() {
                                                    n && clearTimeout(n);
                                                }
                                                function s(...s) {
                                                    const l = this,
                                                        c = Date.now() - a;
                                                    function E() {
                                                        ((a = Date.now()), t.apply(l, s));
                                                    }
                                                    o ||
                                                        (r && !n && E(),
                                                        i(),
                                                        void 0 === r && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (s.cancel = function () {
                                                        (i(), (o = !0));
                                                    }),
                                                    s
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return ((0, o.useEffect)(() => r.cancel, [r]), r);
                                })(
                                    () => {
                                        k.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, te.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), A.trigger('change', e), a && m());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                D = F[0],
                                _ = F[1],
                                B = (0, o.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            o = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return i(e, u * t + o + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                g = (0, o.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = E.current;
                                        r &&
                                            _.start({
                                                scrollPosition: i(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: i(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [_, c.animationConfig, D.scrollPosition],
                                ),
                                C = (0, o.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            o = B(u, e, r);
                                        g(o);
                                    },
                                    [g, B, c.step],
                                ),
                                p = (0, o.useCallback)(
                                    (e) => {
                                        (0 !== e.deltaY && C(r(e)),
                                            E.current && A.trigger('mouseWheel', e, D.scrollPosition, u(E.current)));
                                    },
                                    [D.scrollPosition, C, A],
                                ),
                                b = ((e, u = []) => {
                                    const t = (0, o.useRef)(),
                                        r = (0, o.useCallback)((...u) => {
                                            (t.current && t.current(), (t.current = e(...u)));
                                        }, u);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        K(() => {
                                            const e = E.current;
                                            e &&
                                                (g(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [g, D.scrollPosition.goal],
                                ),
                                h = J(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    (u !== D.scrollPosition.goal && g(u, { immediate: !0 }),
                                        A.trigger('recalculateContent'));
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', b),
                                    () => {
                                        window.removeEventListener('resize', b);
                                    }
                                ),
                                [b],
                            );
                            const v = (0, o.useCallback)((e) => A.trigger('isThumbDraggingChanged', e), [A]);
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? n(d.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: p,
                                    applyScroll: g,
                                    applyStepTo: C,
                                    contentRef: E,
                                    wrapperRef: d,
                                    scrollPosition: _,
                                    animationScroll: D,
                                    recalculateContent: h,
                                    handleIsThumbDragging: v,
                                    events: { on: A.on, off: A.off },
                                }),
                                [D.scrollPosition, g, C, v, A.off, A.on, h, p, _, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ae = oe({
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
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? re.Next : re.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    ie = 'HorizontalBar_base__nonActive_82',
                    se = 'disable',
                    le = { pending: !1, offset: 0 },
                    ce = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Ee = () => {},
                    de = (e, u) => Math.max(20, e.offsetWidth * u),
                    Ae = (0, o.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = ce, onDrag: r = Ee }) => {
                        const n = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            A = (0, o.useState)(le),
                            m = A[0],
                            F = A[1],
                            D = (0, o.useCallback)(
                                (e) => {
                                    (F(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            _ = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / n),
                                    E = Z(0, 1, o / (n - r)),
                                    d = (u.offsetWidth - de(u, a)) * E;
                                ((t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(se),
                                                    void s.current.classList.remove(se)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(se),
                                                    void s.current.classList.add(se)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(se), s.current.classList.remove(se));
                                        }
                                    })(d));
                            },
                            B = J(() => {
                                ((() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && u && r && t)) return;
                                    const a = Math.min(1, r / o);
                                    ((u.style.width = `${de(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === a ? n.current.classList.add(ie) : n.current.classList.remove(ie)));
                                })(),
                                    _());
                            });
                        ((0, o.useEffect)(() => K(B)),
                            (0, o.useEffect)(
                                () =>
                                    K(() => {
                                        const u = () => {
                                            _();
                                        };
                                        let t = Ee;
                                        const r = () => {
                                            (t(), (t = K(B)));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const o = l.current,
                                            a = c.current;
                                        if (!n || !o || !a) return;
                                        const i = u.screenX - m.offset - o.getBoundingClientRect().x,
                                            s = (i / o.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u), D(le));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, r, D]));
                        const g = ee((u) => e.applyStepTo(u), d, [e]),
                            C = g[0],
                            p = g[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const b = (e) => {
                            e.target.classList.contains(se) || v('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: E()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: E()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(se) || 0 !== e.button || (v('play'), C(re.Next));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: b,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: E()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (v('play'),
                                            u.target === r
                                                ? D({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const o = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + o * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? re.Prev : re.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: b,
                                },
                                a().createElement('div', { ref: c, className: E()('HorizontalBar_thumb_fd', u.thumb) }),
                                a().createElement('div', { className: E()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            a().createElement('div', {
                                className: E()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(se) || 0 !== e.button || (v('play'), C(re.Prev));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    me = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Fe = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: i,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: E()(me.base, e.base) });
                            }, [r]),
                            A = (0, o.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return a().createElement(
                            'div',
                            { className: E()(me.defaultScroll, t), onWheel: u.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: E()(me.defaultScrollArea, n) },
                                a().createElement(De, { className: s, api: A, classNames: i }, e),
                            ),
                            a().createElement(Ae, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    De = ({ api: e, className: u, classNames: t, children: r, style: n }) => (
                        (0, o.useEffect)(() => K(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: E()(me.base, u), style: n },
                            a().createElement(
                                'div',
                                {
                                    className: E()(me.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                a().createElement(
                                    'div',
                                    { className: E()(me.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                ((De.Bar = Ae),
                    (De.Default = Fe),
                    (De.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, o.useEffect)(() => K(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: E()(me.base, u) },
                            a().createElement(
                                'div',
                                { className: E()(me.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                a().createElement(
                                    'div',
                                    { className: E()(me.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    )));
                const _e = oe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? re.Next : re.Prev),
                    }),
                    Be = 'VerticalBar_base__nonActive_42',
                    ge = 'disable',
                    Ce = () => {},
                    pe = { pending: !1, offset: 0 },
                    be = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    he = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    ve = (e, u) => Math.max(20, e.offsetHeight * u),
                    fe = (0, o.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = be, onDrag: r = Ce }) => {
                        const n = (0, o.useRef)(null),
                            i = (0, o.useRef)(null),
                            s = (0, o.useRef)(null),
                            l = (0, o.useRef)(null),
                            c = (0, o.useRef)(null),
                            d = e.stepTimeout || 100,
                            A = (0, o.useState)(pe),
                            m = A[0],
                            F = A[1],
                            D = (0, o.useCallback)(
                                (e) => {
                                    (F(e),
                                        c.current &&
                                            r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current }));
                                },
                                [r],
                            ),
                            _ = J(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && o && u && t)) return;
                                const a = Math.min(1, r / o);
                                return (
                                    (u.style.height = `${ve(t, a)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === a ? n.current.classList.add(Be) : n.current.classList.remove(Be)),
                                    a
                                );
                            }),
                            B = J(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    a = Math.min(1, r / n),
                                    E = Z(0, 1, o / (n - r)),
                                    d = (u.offsetHeight - ve(u, a)) * E;
                                ((t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return (
                                                    i.current.classList.add(ge),
                                                    void s.current.classList.remove(ge)
                                                );
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (
                                                    i.current.classList.remove(ge),
                                                    void s.current.classList.add(ge)
                                                );
                                            var u, t;
                                            (i.current.classList.remove(ge), s.current.classList.remove(ge));
                                        }
                                    })(d));
                            }),
                            g = J(() => {
                                he(e, () => {
                                    (_(), B());
                                });
                            });
                        ((0, o.useEffect)(() => K(g)),
                            (0, o.useEffect)(() => {
                                const u = () => {
                                    he(e, () => {
                                        B();
                                    });
                                };
                                let t = Ce;
                                const r = () => {
                                    (t(), (t = K(g)));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r));
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        he(e, (t) => {
                                            const n = l.current,
                                                o = c.current,
                                                a = e.getContainerSize();
                                            if (!n || !o || !a) return;
                                            const i = u.screenY - m.offset - n.getBoundingClientRect().y,
                                                s = (i / n.offsetHeight) * a;
                                            (e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: o, thumbOffset: i, contentOffset: s }));
                                        });
                                    },
                                    t = () => {
                                        (window.removeEventListener('mousemove', u),
                                            e.handleIsThumbDragging(!1),
                                            D(pe));
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        (window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t));
                                    }
                                );
                            }, [e, m.offset, m.pending, r, D]));
                        const C = ee((u) => e.applyStepTo(u), d, [e]),
                            p = C[0],
                            b = C[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', b, !0),
                                () => document.removeEventListener('mouseup', b, !0)
                            ),
                            [b],
                        );
                        const h = (e) => {
                            e.target.classList.contains(ge) || v('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: E()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: E()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ge) || 0 !== e.button || (v('play'), p(re.Next));
                                },
                                ref: i,
                                onMouseEnter: h,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: E()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (v('play'),
                                            u.target === r
                                                ? (e.handleIsThumbDragging(!0),
                                                  D({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y }))
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? re.Prev : re.Next),
                                                  c.current &&
                                                      he(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              o = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(o);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                a().createElement('div', { ref: c, className: u.thumb }),
                                a().createElement('div', { className: E()('VerticalBar_rail_43', u.rail) }),
                            ),
                            a().createElement('div', {
                                className: E()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ge) || 0 !== e.button || (v('play'), p(re.Prev));
                                },
                                onMouseUp: b,
                                ref: s,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    we = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Se = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: E()(we.base, e.base) });
                            }, [r]),
                            A = (0, o.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return a().createElement(
                            'div',
                            { className: E()(we.defaultScroll, t), onWheel: u.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: E()(we.area, n) },
                                a().createElement(xe, { className: i, classNames: s, api: A }, e),
                            ),
                            a().createElement(fe, { getStepByRailClick: l, api: u, onDrag: c, classNames: d }),
                        );
                    },
                    xe = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, o.useEffect)(() => K(r.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: E()(we.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: E()(we.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                xe.Default = Se;
                const Re = { Vertical: n, Horizontal: r };
                var ye = t(6373),
                    Pe = t(3415),
                    Te = t(4891);
                const Le = 'vehicles',
                    Ne = ({
                        vehicleName: e,
                        shortVehicleLabel: u,
                        rentDays: t,
                        lootboxName: r,
                        lootboxID: n,
                        rentBattles: o,
                        inInventory: i,
                        tooltipArgs: s,
                        isRent: l,
                        wasSold: c,
                    }) => {
                        const d =
                                R.images.gui_lootboxes.gui.maps.rewards.vehicles.$dyn(`${(0, H.BN)(e)}`) ||
                                R.images.gui.maps.icons.quests.bonuses.big.vehicles(),
                            A = t > 0 || o > 0,
                            m = (i && !l) || c,
                            F = E()('VehicleReward_base_b9', m && 'VehicleReward_base__inInventory_7e'),
                            D = (0, Te.B)({
                                info: JSON.stringify({ reward: Le, value: e, lootboxName: r, lootboxID: n }),
                            }).rewardVehicleToopltipWatched;
                        return a().createElement(
                            Pe.l,
                            { tooltipArgs: Object.assign({}, s, D) },
                            a().createElement(
                                'div',
                                { className: F },
                                a().createElement('div', {
                                    className: 'VehicleReward_icon_9a',
                                    style: { backgroundImage: `url(${d})` },
                                }),
                                a().createElement(
                                    'div',
                                    { className: 'VehicleReward_label_0c' },
                                    m && a().createElement('div', { className: 'VehicleReward_checkIcon_c6' }),
                                    a().createElement('div', { className: 'VehicleReward_name_02' }, u),
                                ),
                                A && a().createElement('div', { className: 'VehicleReward_rentIcon_f2' }),
                            ),
                        );
                    };
                var ke = t(5739);
                function Oe() {
                    return (
                        (Oe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Oe.apply(this, arguments)
                    );
                }
                const Me = a().memo(({ bonus: e, lootboxName: u, lootboxID: t }) => {
                    const r = (0, Te.B)({
                        info: JSON.stringify({ reward: e.name, value: e.value, lootboxName: u, lootboxID: t }),
                    }).rewardToopltipWatched;
                    return a().createElement(
                        ke.Q,
                        Oe({ size: y.h2.Big }, e, { tooltipArgs: Object.assign({}, e.tooltipArgs, r) }),
                    );
                });
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                const We = a().memo(({ data: e, lootboxName: u, lootboxID: t, className: r, classNames: n }) => {
                    const o = E()('Rewards_base_e4', r),
                        i = E()('Rewards_reward_29', n);
                    return a().createElement(
                        'div',
                        { className: o },
                        e.map((e, r) =>
                            a().createElement(
                                'div',
                                { key: r, className: i },
                                e.name === Le
                                    ? a().createElement(Ne, Ie({}, e, { lootboxName: u, lootboxID: t }))
                                    : a().createElement(Me, { bonus: e, lootboxName: u, lootboxID: t }),
                            ),
                        ),
                    );
                });
                function He() {
                    return (
                        (He =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        He.apply(this, arguments)
                    );
                }
                const Ue = R.strings.gui_lootboxes,
                    Ge = a().memo(({ probability: e, bonuses: u, index: t, lootboxName: r, lootboxID: n }) => {
                        const o = (0, Te.B)(),
                            i = o.probabilityPercentToopltipWatched,
                            s = o.probabilityPercentClick;
                        return a().createElement(
                            'div',
                            { className: E()('RewardSlot_base_61', t % 2 == 0 && 'RewardSlot_base__withBg_a7') },
                            a().createElement(
                                'div',
                                { className: 'RewardSlot_probability_3c' },
                                a().createElement(
                                    ye.i,
                                    He(
                                        {
                                            header: Ue.tooltips.probability.header(),
                                            body: Ue.tooltips.probability.body(),
                                        },
                                        i,
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: 'RewardSlot_probabilityWrapper_f5', onClick: s },
                                        a().createElement('div', { className: 'RewardSlot_probabilityIcon_e0' }),
                                        a().createElement(j, {
                                            text: Ue.probabilitiesOverlay.optional.procentProbability(),
                                            binding: { probability: e },
                                            classMix: 'RewardSlot_probabbilityValue_98',
                                        }),
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'RewardSlot_rewards_87' },
                                u.length > 0 &&
                                    a().createElement(We, {
                                        data: u,
                                        className: 'RewardSlot_rewardsIconsWrapper_7a',
                                        rewardItemClassMix: 'RewardSlot_rewardSingle_a8',
                                        lootboxName: r,
                                        lootboxID: n,
                                    }),
                            ),
                        );
                    }),
                    $e = (0, h.Pi)(({ setActiveDividers: e, slots: u, lootboxName: t, lootboxID: r }) => {
                        const n = _e(),
                            i = J(() => {
                                const u = n.getWrapperSize() || 1,
                                    t = n.getContainerSize() || 1,
                                    r = Math.min(1, u / t);
                                e(1 !== r);
                            }),
                            s = J(() => {
                                var e, u;
                                ((u = () => {
                                    i();
                                }),
                                    (e = n).contentRef.current && u(e.contentRef.current));
                            });
                        return (
                            (0, o.useEffect)(() => K(s)),
                            (0, o.useEffect)(() => {
                                let e = Ce;
                                const u = () => {
                                    (e(), (e = K(s)));
                                };
                                return (
                                    n.events.on('recalculateContent', s),
                                    n.events.on('resizeHandled', u),
                                    () => {
                                        (e(), n.events.off('recalculateContent', s), n.events.off('resizeHandled', u));
                                    }
                                );
                            }, [n]),
                            a().createElement(
                                'div',
                                { className: 'Slots_base_f7' },
                                a().createElement(
                                    Re.Vertical.Area.Default,
                                    {
                                        api: n,
                                        scrollClassNames: { content: 'Slots_verticalContent_4b' },
                                        className: 'Slots_scroll_e3',
                                    },
                                    u.map(({ probability: e, bonuses: u }, n) =>
                                        a().createElement(
                                            'div',
                                            { key: n },
                                            a().createElement(Ge, {
                                                probability: e,
                                                bonuses: u,
                                                index: n + 1,
                                                lootboxName: t,
                                                lootboxID: r,
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Ve = 'ProbabilitiesSimple_divider_d2',
                    je = (0, h.Pi)(() => {
                        const e = (0, o.useState)(!1),
                            u = e[0],
                            t = e[1],
                            r = V().model,
                            n = r.computes.getSlots(0),
                            i = r.root.get(),
                            s = i.lootboxName,
                            l = i.lootboxID;
                        return a().createElement(
                            'div',
                            { className: 'ProbabilitiesSimple_base_07' },
                            a().createElement(
                                'div',
                                { className: 'ProbabilitiesSimple_headerWrapper_10' },
                                a().createElement(Y, null),
                            ),
                            a().createElement(
                                'div',
                                { className: 'ProbabilitiesSimple_contentWrapper_7c' },
                                u && a().createElement('div', { className: Ve }),
                                a().createElement(
                                    'div',
                                    { className: 'ProbabilitiesSimple_probabilitiesBlocksWrapper_2c' },
                                    a().createElement($e, {
                                        slots: n,
                                        setActiveDividers: t,
                                        lootboxName: s,
                                        lootboxID: l,
                                    }),
                                ),
                                u &&
                                    a().createElement('div', {
                                        className: E()(Ve, 'ProbabilitiesSimple_divider__bottom_c8'),
                                    }),
                            ),
                        );
                    });
                var ze = t(2056);
                const qe = 'AnimatedSlots_divider_cd',
                    Xe = (e) => Math.sqrt(1 - Math.pow(e - 1, 2));
                function Ye(e, u, t, r, n, o, a) {
                    try {
                        var i = e[o](a),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(r, n);
                }
                const Ke = (0, h.Pi)(({ selectedStageIndex: e }) => {
                    const u = V().model,
                        t = u.computes.getLootLists(),
                        r = u.computes.getStageSlots(),
                        n = (0, te.useTransition)(e, {
                            from: { opacity: 0 },
                            enter: (e) =>
                                (function () {
                                    var u,
                                        r =
                                            ((u = function* (u) {
                                                const r = t[e].bonuses.length;
                                                (yield new Promise((e) => {
                                                    const u = setTimeout(
                                                        () => {
                                                            (clearTimeout(u), e(!0));
                                                        },
                                                        300 + 200 * r,
                                                    );
                                                }),
                                                    yield u({ opacity: 1 }));
                                            }),
                                            function () {
                                                var e = this,
                                                    t = arguments;
                                                return new Promise(function (r, n) {
                                                    var o = u.apply(e, t);
                                                    function a(e) {
                                                        Ye(o, r, n, a, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        Ye(o, r, n, a, i, 'throw', e);
                                                    }
                                                    a(void 0);
                                                });
                                            });
                                    return function (e) {
                                        return r.apply(this, arguments);
                                    };
                                })(),
                            config: { duration: 150 },
                            leave: { opacity: 0 },
                        });
                    return a().createElement(
                        'div',
                        { className: 'AnimatedSlots_base_2d' },
                        n((e, u) =>
                            a().createElement(
                                te.animated.div,
                                { style: e, className: 'AnimatedSlots_animatedSlots_52' },
                                a().createElement(
                                    'div',
                                    { className: 'AnimatedSlots_slotsWrapper_0f' },
                                    a().createElement('div', { className: qe }),
                                    a().createElement($e, { slots: r[u], setActiveDividers: T }),
                                    a().createElement('div', {
                                        className: E()(qe, 'AnimatedSlots_divider__bottom_3b'),
                                    }),
                                ),
                            ),
                        ),
                    );
                });
                var Ze = t(4085),
                    Qe = t(6760),
                    Je = t(8354);
                const eu = ({ index: e = 0, delay: u = 0, children: t }) => {
                    const r = (0, te.useSpring)({
                        from: { scale: 1.2, opacity: 0, transform: 'translateY(20rem)' },
                        to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                        delay: u + 300 + 200 * e,
                        config: { duration: 400, easing: Xe },
                    });
                    return a().createElement(te.animated.div, { className: 'AnimatedBonus_base_43', style: r }, t);
                };
                var uu = t(4380);
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const ru = R.strings.gui_lootboxes,
                    nu = (0, h.Pi)(({ bonuses: e, probability: u, isCurrent: t, lootboxName: r, lootboxID: n }) => {
                        const o = (0, Te.B)(),
                            i = o.probabilityPercentWithGarantToopltipWatched,
                            s = o.probabilityPercentWithGarantClick;
                        return a().createElement(
                            'div',
                            { className: 'LootList_base_d4' },
                            (t && a().createElement('div', { className: 'LootList_background_48' })) ||
                                a().createElement('div', { className: 'LootList_border_7a' }),
                            a().createElement(
                                'div',
                                { className: 'LootList_probability_cc' },
                                a().createElement(
                                    ze.u,
                                    tu(
                                        {
                                            contentId:
                                                R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.ProbabilityGuaranteedRewardTooltip(
                                                    'resId',
                                                ),
                                        },
                                        i,
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: 'LootList_probabilityWrapper_e9', onClick: s },
                                        a().createElement('div', { className: 'LootList_bg_ca' }),
                                        a().createElement('div', { className: 'LootList_probabilityIcon_1a' }),
                                        a().createElement(j, {
                                            text: ru.probabilitiesOverlay.optional.procentProbability(),
                                            binding: { probability: u },
                                            classMix: 'LootList_probabbilityValue_c7',
                                        }),
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'LootList_rewardsWrapper_55' },
                                e.map((e, u) => {
                                    const t = (0, P.pI)({ tooltipId: e.tooltipId }, Number(e.tooltipContentId));
                                    return a().createElement(
                                        'div',
                                        { className: 'LootList_bonusContainer_2a', key: `bonus-${u}` },
                                        a().createElement(
                                            eu,
                                            { index: u },
                                            a().createElement(
                                                'div',
                                                { className: 'LootList_rewardWrapper_20' },
                                                ((e, u) => {
                                                    switch (e.name) {
                                                        case 'vehicles':
                                                            return a().createElement(Je.A, {
                                                                vehicleName: e.shortVehicleLabel,
                                                                name: e.vehicleName,
                                                                tooltipArgs: u,
                                                                status: e.status,
                                                                lootboxName: r,
                                                                lootboxID: n,
                                                                parentScreen: uu.de.Probability,
                                                            });
                                                        case 'credits':
                                                            return a().createElement(
                                                                Ze.L,
                                                                tu(
                                                                    {
                                                                        parentScreen: uu.de.Probability,
                                                                        lootboxName: r,
                                                                        lootboxID: n,
                                                                    },
                                                                    e,
                                                                ),
                                                            );
                                                        default:
                                                            return a().createElement(Qe.H, {
                                                                status: e.status,
                                                                reward: e,
                                                                bigOnly: !0,
                                                                parentScreen: uu.de.Probability,
                                                                lootboxName: r,
                                                                lootboxID: n,
                                                            });
                                                    }
                                                })(e, t),
                                            ),
                                        ),
                                    );
                                }),
                            ),
                        );
                    }),
                    ou = (0, h.Pi)(({ selectedStageIndex: e }) => {
                        const u = V().model,
                            t = u.computes.getCurrentStage(),
                            r = u.computes.getLootLists(),
                            n = u.root.get(),
                            o = n.lootboxName,
                            i = n.lootboxID,
                            s = (0, te.useTransition)(e, {
                                from: { opacity: 0 },
                                enter: { opacity: 1 },
                                leave: { opacity: 0 },
                            });
                        return a().createElement(
                            'div',
                            { className: 'LootLists_base_d4' },
                            s((e, u) =>
                                a().createElement(
                                    te.animated.div,
                                    { style: e, className: 'LootLists_lootList_d6' },
                                    a().createElement(nu, {
                                        lootboxName: o,
                                        lootboxID: i,
                                        bonuses: r[u].bonuses,
                                        probability: r[u].probability,
                                        isCurrent: t === u,
                                    }),
                                ),
                            ),
                        );
                    }),
                    au = {
                        base: 'StagesButtons_base_d9',
                        buttonWrapper: 'StagesButtons_buttonWrapper_52',
                        stageButton: 'StagesButtons_stageButton_03',
                        stageButton__done: 'StagesButtons_stageButton__done_25',
                        stageButton__selected: 'StagesButtons_stageButton__selected_ff',
                        stageButton__current: 'StagesButtons_stageButton__current_93',
                        borderWrapper: 'StagesButtons_borderWrapper_be',
                        border: 'StagesButtons_border_5f',
                        border__not_available: 'StagesButtons_border__not_available_d3',
                        border__current: 'StagesButtons_border__current_68',
                        border__done: 'StagesButtons_border__done_95',
                        iconCheck: 'StagesButtons_iconCheck_fd',
                    };
                let iu;
                !(function (e) {
                    ((e.Done = 'done'), (e.Current = 'current'), (e.NotAvailable = 'not_available'));
                })(iu || (iu = {}));
                const su = R.strings.gui_lootboxes,
                    lu = (0, h.Pi)(({ list: e, onSelectStage: u, selectedStageIndex: t }) => {
                        const r = V().model.root.get().rotationStage;
                        return a().createElement(
                            'div',
                            { className: au.base },
                            e.map((e, n) => {
                                const o = r > (i = n) ? iu.Done : t === i ? iu.Current : iu.NotAvailable;
                                var i;
                                const s = (0, H.uF)(R.strings.gui_lootboxes.probabilitiesOverlay.tabTooltip(), {
                                    stage: n + 1,
                                });
                                return a().createElement(
                                    ye.i,
                                    { body: s, key: `button-${n}` },
                                    a().createElement(
                                        'div',
                                        { className: E()(au.buttonWrapper, n === t && au.stageButton__selected) },
                                        a().createElement(
                                            'div',
                                            {
                                                className: E()(au.stageButton, au[`stageButton__${o}`]),
                                                onClick: () => u(n),
                                            },
                                            a().createElement(
                                                'div',
                                                { className: au.borderWrapper },
                                                a().createElement('div', {
                                                    className: E()(au.border, au[`border__${o}`]),
                                                }),
                                            ),
                                            o === iu.Done && a().createElement('div', { className: E()(au.iconCheck) }),
                                            a().createElement(j, {
                                                text: su.probabilitiesOverlay.tabTitle(),
                                                binding: { stage: n + 1 },
                                            }),
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    cu = 'ProbabilitiesWithRotation_rewardsTitle_b8',
                    Eu = R.strings.gui_lootboxes.probabilitiesOverlay,
                    du = (0, h.Pi)(() => {
                        const e = V().model,
                            u = e.computes.getLootLists(),
                            t = e.computes.getCurrentStage(),
                            r = (0, o.useState)(t),
                            n = r[0],
                            i = r[1];
                        return a().createElement(
                            'div',
                            { className: 'ProbabilitiesWithRotation_base_6c' },
                            a().createElement(
                                'div',
                                { className: 'ProbabilitiesWithRotation_headerWrapper_5c' },
                                a().createElement(Y, null),
                            ),
                            a().createElement(
                                'div',
                                { className: 'ProbabilitiesWithRotation_stageSelectorWrapper_fb' },
                                a().createElement(lu, { list: u, onSelectStage: i, selectedStageIndex: n }),
                                a().createElement(
                                    ze.u,
                                    {
                                        contentId:
                                            R.views.gui_lootboxes.lobby.gui_lootboxes.tooltips.ProbabilityStageButtonsTooltip(
                                                'resId',
                                            ),
                                    },
                                    a().createElement('div', { className: 'ProbabilitiesWithRotation_info_36' }),
                                ),
                            ),
                            a().createElement('div', { className: cu }, Eu.boxMainRewards()),
                            a().createElement(
                                'div',
                                { className: 'ProbabilitiesWithRotation_mainRewardsWrapper_01' },
                                a().createElement(ou, { selectedStageIndex: n }),
                            ),
                            a().createElement(
                                'div',
                                { className: 'ProbabilitiesWithRotation_contentWrapper_29' },
                                a().createElement(Ke, { selectedStageIndex: n }),
                                a().createElement(
                                    'div',
                                    { className: E()(cu, 'ProbabilitiesWithRotation_rewardsTitle__slots_58') },
                                    Eu.boxAdditionalRewards(),
                                ),
                            ),
                        );
                    });
                var Au = t(5521);
                t(4179);
                const mu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Fu(e = Au.n.NONE, u = mu, t = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== Au.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (k.O.view.isEventHandled()) return;
                                (k.O.view.setEventHandled(), u(r), t && r.stopPropagation());
                            }
                        }
                    }, [u, e, t]);
                }
                const Du = (0, h.Pi)(() => {
                        const e = V(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get().hasLootLists;
                        return (
                            (function ({
                                key: e = Au.n.ESCAPE,
                                callback: u = () => k.O.view.sendEvent.close(),
                                preventPropagation: t = !0,
                            } = {}) {
                                Fu(e, u, t);
                            })({
                                callback: () => {
                                    t.close(uu.ob.ESCButton);
                                },
                            }),
                            a().createElement(
                                'div',
                                { className: 'App_base_3d' },
                                a().createElement(
                                    'div',
                                    { className: 'App_content_37' },
                                    (r && a().createElement(du, null)) || a().createElement(je, null),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'App_close_85' },
                                    a().createElement(x, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: () => {
                                            t.close(uu.ob.CloseButton);
                                        },
                                    }),
                                ),
                            )
                        );
                    }),
                    _u = a().memo(Du);
                engine.whenReady.then(() => {
                    s().render(
                        a().createElement($, null, a().createElement(b, null, a().createElement(_u, null))),
                        document.getElementById('root'),
                    );
                });
            },
            4085: (e, u, t) => {
                'use strict';
                t.d(u, { L: () => d });
                var r = t(6483),
                    n = t.n(r),
                    o = t(6179),
                    a = t.n(o),
                    i = t(2372),
                    s = t(3415);
                const l = {
                    base: 'Compensation_base_8c',
                    currencyIcon: 'Compensation_currencyIcon_1c',
                    base__credits: 'Compensation_base__credits_63',
                    base__gold: 'Compensation_base__gold_c7',
                    value: 'Compensation_value_72',
                    compensationIcon: 'Compensation_compensationIcon_6b',
                };
                var c = t(729),
                    E = t(4891);
                const d = ({
                    value: e,
                    name: u,
                    tooltipId: t,
                    tooltipContentId: r,
                    parentScreen: o,
                    lootboxName: d,
                    lootboxID: A,
                }) => {
                    const m = (0, c.pI)({ tooltipId: t }, Number(r)),
                        F = (0, E.B)({
                            parentScreen: o,
                            info: JSON.stringify({ reward: u, value: e, lootboxName: d, lootboxID: A }),
                        }).rewardSharedToopltipWatched;
                    return a().createElement(
                        s.l,
                        { tooltipArgs: Object.assign({}, m, F) },
                        a().createElement(
                            'div',
                            { className: n()(l.base, l[`base__${u}`]) },
                            a().createElement('div', { className: l.currencyIcon }),
                            a().createElement(
                                'div',
                                { className: l.value },
                                a().createElement(i.A, { value: Number(e) }),
                            ),
                            a().createElement('div', { className: l.compensationIcon }),
                        ),
                    );
                };
            },
            6760: (e, u, t) => {
                'use strict';
                t.d(u, { H: () => m });
                var r = t(2862),
                    n = t(729),
                    o = t(5739),
                    a = t(6373),
                    i = t(5415),
                    s = t(6179),
                    l = t.n(s),
                    c = t(9409);
                var E = t(4891);
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const A = R.strings.gui_lootboxes.probabilitiesOverlay,
                    m = ({ reward: e, status: u, bigOnly: t, parentScreen: s, lootboxName: m, lootboxID: F }) => {
                        const D = (0, i.GS)().mediaSize < i.cJ.Medium && !t ? r.h2.Small : r.h2.Big,
                            _ = (0, E.B)({
                                parentScreen: s,
                                info: JSON.stringify({ reward: e.name, value: e.value, lootboxName: m, lootboxID: F }),
                            }).rewardToopltipWatchedWithRotation;
                        return l().createElement(
                            'div',
                            { className: 'RotationReward_base_5c' },
                            l().createElement(
                                o.Q,
                                d({}, e, {
                                    tooltipArgs: Object.assign({}, e.tooltipArgs, _),
                                    valueType: (0, n.p3)(e.name),
                                    size: D,
                                    image: e.image(D),
                                }),
                            ),
                            l().createElement(
                                'div',
                                { className: 'RotationReward_label_da' },
                                u === c.H.Unavailable &&
                                    l().createElement(
                                        a.i,
                                        { body: A.blockedReward() },
                                        l().createElement(
                                            'div',
                                            { className: 'RotationReward_labelContent_44' },
                                            l().createElement('div', { className: 'RotationReward_lockIcon_39' }),
                                        ),
                                    ),
                            ),
                        );
                    };
            },
            8354: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => m });
                var r = t(6483),
                    n = t.n(r),
                    o = t(6179),
                    a = t.n(o),
                    i = t(3649),
                    s = t(9409),
                    l = t(3415),
                    c = t(6373);
                const E = {
                    base: 'RotationVehicle_base_2f',
                    base__received: 'RotationVehicle_base__received_32',
                    icon: 'RotationVehicle_icon_41',
                    label: 'RotationVehicle_label_b8',
                    labelContent: 'RotationVehicle_labelContent_27',
                    lockIcon: 'RotationVehicle_lockIcon_78',
                    checkIcon: 'RotationVehicle_checkIcon_9e',
                };
                var d = t(4891);
                const A = R.strings.gui_lootboxes.probabilitiesOverlay,
                    m = ({
                        name: e,
                        vehicleName: u,
                        status: t,
                        lootboxName: r,
                        lootboxID: o,
                        tooltipArgs: m,
                        parentScreen: F,
                    }) => {
                        const D = R.images.gui_lootboxes.gui.maps.rewards.vehicles.$dyn(`${(0, i.BN)(e)}`),
                            _ = (0, d.B)({
                                parentScreen: F,
                                info: JSON.stringify({ reward: e, value: u, lootboxName: r, lootboxID: o }),
                            }).rewardSharedToopltipWatched;
                        return a().createElement(
                            'div',
                            { className: n()(E.base, E[`base__${t}`]) },
                            a().createElement(
                                l.l,
                                { tooltipArgs: Object.assign({}, m, _) },
                                a().createElement('div', {
                                    className: E.icon,
                                    style: { backgroundImage: `url(${D})` },
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: E.label },
                                t === s.H.Unavailable &&
                                    a().createElement(
                                        c.i,
                                        { body: A.blockedReward() },
                                        a().createElement(
                                            'div',
                                            { className: E.labelContent },
                                            a().createElement('div', { className: E.lockIcon }),
                                            u,
                                        ),
                                    ),
                                t === s.H.Received &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', { className: E.checkIcon }),
                                        u,
                                    ),
                                t === s.H.Available && u,
                            ),
                        );
                    };
            },
            9409: (e, u, t) => {
                'use strict';
                let r;
                (t.d(u, { H: () => r }),
                    (function (e) {
                        ((e.Available = 'available'), (e.Unavailable = 'unavailable'), (e.Received = 'received'));
                    })(r || (r = {})));
            },
            4380: (e, u, t) => {
                'use strict';
                t.d(u, { AN: () => o, SS: () => n, de: () => i, eX: () => a, ob: () => s, sx: () => r });
                const r = 1,
                    n = 2;
                let o, a, i, s;
                (!(function (e) {
                    e.Lootbox = 'lootbox';
                })(o || (o = {})),
                    (function (e) {
                        ((e.TooltipWatched = 'tooltip_watched'),
                            (e.Click = 'click'),
                            (e.VideoStarted = 'video_started'),
                            (e.Show = 'show'));
                    })(a || (a = {})),
                    (function (e) {
                        ((e.Storage = 'storage'),
                            (e.Probability = 'probability'),
                            (e.Rewards = 'rewards'),
                            (e.LoseRewards = 'lose_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.Welcome = 'welcome'));
                    })(i || (i = {})),
                    (function (e) {
                        ((e.IconPossibleRewardGroup = 'icon_possible_reward_group'),
                            (e.CarouselLootbox = 'carousel_lootbox'),
                            (e.InfoIcon = 'info_icon'),
                            (e.ESCButton = 'esc_button'),
                            (e.ProbabilityPercent = 'probability_percent'),
                            (e.ProbabilityPercentWithGarant = 'probability_percent_with_garant'),
                            (e.ProbabilityReward = 'probability_reward'),
                            (e.MinorRewards = 'minor_rewards'),
                            (e.RewardVideo = 'reward_video'),
                            (e.RewardToopltip = 'reward_tooltip'),
                            (e.ContinueButton = 'continue_button'),
                            (e.OpenOneMoreButton = 'open_one_more_button'),
                            (e.OpenMultiButton = 'open_multi_button'),
                            (e.OpenInHangarButton = 'open_in_hangar_button'),
                            (e.OKButton = 'ok_button'),
                            (e.CloseButton = 'close_button'));
                    })(s || (s = {})));
            },
            4891: (e, u, t) => {
                'use strict';
                t.d(u, { B: () => o });
                var r = t(1943),
                    n = t(4380);
                const o = (e) => {
                    const u = (0, r.Jp)(n.AN.Lootbox);
                    return {
                        rewardToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.RewardToopltip,
                            parentScreen: n.de.Probability,
                            timeLimit: n.sx,
                            info: null == e ? void 0 : e.info,
                        }),
                        infoIconToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.InfoIcon,
                            parentScreen: n.de.Storage,
                            timeLimit: n.sx,
                        }),
                        probabilityPercentToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.ProbabilityPercent,
                            parentScreen: n.de.Probability,
                            timeLimit: n.sx,
                        }),
                        probabilityPercentWithGarantToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.ProbabilityPercentWithGarant,
                            parentScreen: n.de.Probability,
                            timeLimit: n.sx,
                        }),
                        rewardVehicleToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.RewardToopltip,
                            parentScreen: n.de.Probability,
                            timeLimit: n.sx,
                            info: null == e ? void 0 : e.info,
                        }),
                        minorRewardsToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.MinorRewards,
                            parentScreen: n.de.Rewards,
                            timeLimit: n.sx,
                        }),
                        rewardSharedToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.RewardToopltip,
                            parentScreen: null == e ? void 0 : e.parentScreen,
                            timeLimit: n.sx,
                            info: null == e ? void 0 : e.info,
                        }),
                        iconPossibleRewardGroupToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.IconPossibleRewardGroup,
                            parentScreen: n.de.Storage,
                            timeLimit: n.sx,
                        }),
                        carouselLootboxToopltipWatched: (0, r.Sr)(n.AN.Lootbox, {
                            action: n.eX.TooltipWatched,
                            item: n.ob.CarouselLootbox,
                            parentScreen: n.de.Storage,
                            timeLimit: n.SS,
                        }),
                        probabilityPercentWithGarantClick: () => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.Probability,
                                item: n.ob.ProbabilityPercentWithGarant,
                            });
                        },
                        probabilityPercentClick: () => {
                            u({ action: n.eX.Click, parentScreen: n.de.Probability, item: n.ob.ProbabilityPercent });
                        },
                        showLoseRewardsViewButton: (e, t) => {
                            u({
                                action: n.eX.Show,
                                parentScreen: n.de.LoseRewards,
                                item: e,
                                info: JSON.stringify({ lockpickCount: t }),
                            });
                        },
                        loseRewardsViewButtonClick: (e, t) => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.LoseRewards,
                                item: e,
                                info: JSON.stringify({ lockpickCount: t }),
                            });
                        },
                        showLoseRewardsViewCloseButton: (e) => {
                            u({
                                action: n.eX.Show,
                                parentScreen: n.de.LoseRewards,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        loseRewardsViewCloseButtonClick: (e) => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.LoseRewards,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        loseRewardsViewESCButtonClick: (e) => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.LoseRewards,
                                item: n.ob.ESCButton,
                                info: JSON.stringify({ lockpickCount: e }),
                            });
                        },
                        showRewardsViewCloseButton: (e) => {
                            u({
                                action: n.eX.Show,
                                parentScreen: n.de.Rewards,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewCloseButtonClick: (e) => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.Rewards,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewESCButtonClick: (e) => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.Rewards,
                                item: n.ob.ESCButton,
                                info: JSON.stringify({ lootboxCount: e }),
                            });
                        },
                        rewardsViewMinorRewardsShow: () => {
                            u({ action: n.eX.Show, parentScreen: n.de.Rewards, item: n.ob.MinorRewards });
                        },
                        showRewardsViewButton: (e, t) => {
                            u({
                                action: n.eX.Show,
                                parentScreen: n.de.Rewards,
                                item: e,
                                info: JSON.stringify({ lootboxCount: t }),
                            });
                        },
                        rewardsViewButtonClick: (e, t) => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.Rewards,
                                item: e,
                                info: JSON.stringify({ lootboxCount: t }),
                            });
                        },
                        rewardsVideoCloseClick: (e, t, r, o) => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.RewardVideo,
                                item: n.ob.CloseButton,
                                info: JSON.stringify({ duration: e, lootboxType: t, lootboxID: r, reward: o }),
                            });
                        },
                        rewardsVideoESCClick: (e, t, r, o) => {
                            u({
                                action: n.eX.Click,
                                parentScreen: n.de.RewardVideo,
                                item: n.ob.ESCButton,
                                info: JSON.stringify({ duration: e, lootboxType: t, lootboxID: r, reward: o }),
                            });
                        },
                        rewardsVideoStarted: (e, t, r) => {
                            u({
                                action: n.eX.VideoStarted,
                                parentScreen: n.de.RewardVideo,
                                item: n.ob.RewardVideo,
                                info: JSON.stringify({ lootboxID: t, lootboxType: e, reward: r }),
                            });
                        },
                        storageViewESCButtonClick: () => {
                            u({ action: n.eX.Click, parentScreen: n.de.Storage, item: n.ob.ESCButton });
                        },
                        iconPossibleRewardGroupClick: () => {
                            u({ action: n.eX.Click, parentScreen: n.de.Storage, item: n.ob.IconPossibleRewardGroup });
                        },
                    };
                };
            },
            1609: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                const r = {
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
                    highlight: 'Reward_highlight_36',
                    image: 'Reward_image_89',
                    info: 'Reward_info_72',
                    info__multi: 'Reward_info__multi_63',
                    info__credits: 'Reward_info__credits_ef',
                    info__gold: 'Reward_info__gold_36',
                    info__crystal: 'Reward_info__crystal_36',
                    info__premiumTank: 'Reward_info__premiumTank_d3',
                    timer: 'Reward_timer_d3',
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, r] = deferred[s], o = !0, a = 0; a < u.length; a++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[a]))
                            ? u.splice(a--, 1)
                            : ((o = !1), r < n && (n = r));
                    if (o) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, r];
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
        (__webpack_require__.j = 1),
        (() => {
            var e = { 1: 0, 824: 0, 98: 0, 175: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [o, a, i] = t,
                        s = 0;
                    if (o.some((u) => 0 !== e[u])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < o.length; s++)
                        ((n = o[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(316));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
