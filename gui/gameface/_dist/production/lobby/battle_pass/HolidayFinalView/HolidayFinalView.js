(() => {
    var __webpack_modules__ = {
            2372: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => s });
                var n = t(7363),
                    r = t.n(n),
                    a = t(9916);
                class s extends r().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = a.B3.GOLD;
                        else e = a.B3.INTEGRAL;
                        const u = a.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                s.defaultProps = { format: 'integral' };
            },
            280: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(3649),
                    s = t(7363),
                    i = t.n(s),
                    o = t(5287);
                const l = ({
                    binding: e,
                    text: u = '',
                    classMix: t,
                    alignment: n = a.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                    const c = l && e ? (0, a.WU)(u, e) : u;
                    return i().createElement(
                        s.Fragment,
                        null,
                        c.split('\n').map((u, l) =>
                            i().createElement(
                                'div',
                                { className: r()(o.Z.base, t), key: `${u}-${l}` },
                                (0, a.Uw)(u, n, e).map((e, u) =>
                                    i().createElement(s.Fragment, { key: `${u}-${e}` }, e),
                                ),
                            ),
                        ),
                    );
                };
            },
            9766: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => n.z });
                var n = t(280);
                t(8082);
            },
            8082: (e, u, t) => {
                'use strict';
                t(3649);
            },
            3495: (e, u, t) => {
                'use strict';
                t.d(u, { Y: () => E });
                var n = t(3138),
                    r = t(7363),
                    a = t(1043),
                    s = t(5262);
                const i = n.O.client.getSize('rem'),
                    o = i.width,
                    l = i.height,
                    c = Object.assign({ width: o, height: l }, (0, s.T)(o, l, a.j)),
                    E = (0, r.createContext)(c);
            },
            1039: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => c });
                var n = t(3138),
                    r = t(6536),
                    a = t(7363),
                    s = t.n(a),
                    i = t(3495),
                    o = t(1043),
                    l = t(5262);
                const c = ({ children: e }) => {
                    const u = (0, a.useContext)(i.Y),
                        t = (0, a.useState)(u),
                        c = t[0],
                        E = t[1],
                        d = (0, a.useCallback)((e, u) => {
                            const t = n.O.view.pxToRem(e),
                                r = n.O.view.pxToRem(u);
                            E(Object.assign({ width: t, height: r }, (0, l.T)(t, r, o.j)));
                        }, []),
                        _ = (0, a.useCallback)(() => {
                            const e = n.O.client.getSize('px');
                            d(e.width, e.height);
                        }, [d]);
                    (0, r.Z)(() => {
                        n.O.client.events.on('clientResized', d), n.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                n.O.client.events.off('clientResized', d),
                                    n.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [d, _],
                        );
                    const m = (0, a.useMemo)(() => Object.assign({}, c), [c]);
                    return s().createElement(i.Y.Provider, { value: m }, e);
                };
            },
            6010: (e, u, t) => {
                'use strict';
                var n = t(7363),
                    r = t(7382),
                    a = t(3495);
                const s = ['children'];
                const i = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, s);
                    const i = (0, n.useContext)(a.Y),
                        o = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        E = i.small,
                        d = i.extraSmall,
                        _ = i.extraLargeWidth,
                        m = i.largeWidth,
                        A = i.mediumWidth,
                        F = i.smallWidth,
                        D = i.extraSmallWidth,
                        C = i.extraLargeHeight,
                        B = i.largeHeight,
                        g = i.mediumHeight,
                        p = i.smallHeight,
                        h = i.extraSmallHeight,
                        b = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && l) return u;
                        if (t.medium && c) return u;
                        if (t.small && E) return u;
                        if (t.extraSmall && d) return u;
                    } else {
                        if (t.extraLargeWidth && _) return (0, r.H)(u, t, b);
                        if (t.largeWidth && m) return (0, r.H)(u, t, b);
                        if (t.mediumWidth && A) return (0, r.H)(u, t, b);
                        if (t.smallWidth && F) return (0, r.H)(u, t, b);
                        if (t.extraSmallWidth && D) return (0, r.H)(u, t, b);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                i.defaultProps = {
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
                (0, n.memo)(i);
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
                t.d(u, { YN: () => r.Y, ZN: () => n.Z });
                t(6010);
                var n = t(1039),
                    r = t(3495);
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
                t.d(u, { T: () => r }),
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
                    })(n || (n = {}));
            },
            5739: (e, u, t) => {
                'use strict';
                t.d(u, { Q: () => E });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    i = t(3415),
                    o = t(2862),
                    l = t(729),
                    c = t(1609);
                const E = ({
                    name: e,
                    image: u,
                    isPeriodic: t = !1,
                    size: n = o.h2.Big,
                    special: a,
                    value: E,
                    valueType: d,
                    title: _,
                    style: m,
                    className: A,
                    classNames: F,
                    tooltipArgs: D,
                    periodicIconTooltipArgs: C,
                }) => {
                    const B = (0, l.c$)(n, a),
                        g = (0, l.i2)(a),
                        p = (0, l.m9)(E, d);
                    return s().createElement(
                        'div',
                        { className: r()(c.Z.base, c.Z[`base__${n}`], A), style: m },
                        s().createElement(
                            i.l,
                            { tooltipArgs: D, className: c.Z.tooltipWrapper },
                            s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(
                                    'div',
                                    { className: r()(c.Z.image, null == F ? void 0 : F.image) },
                                    B &&
                                        s().createElement('div', {
                                            className: r()(c.Z.highlight, null == F ? void 0 : F.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${B}_highlight)`,
                                            },
                                        }),
                                    u &&
                                        s().createElement('div', {
                                            className: r()(c.Z.icon, null == F ? void 0 : F.rewardIcon),
                                            style: { backgroundImage: `url(${u})` },
                                        }),
                                    g &&
                                        s().createElement('div', {
                                            className: r()(c.Z.overlay, null == F ? void 0 : F.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_overlay)`,
                                            },
                                        }),
                                ),
                                p &&
                                    s().createElement(
                                        'div',
                                        {
                                            className: r()(
                                                c.Z.info,
                                                c.Z[`info__${e}`],
                                                d === o.$h.MULTI && c.Z.info__multi,
                                                null == F ? void 0 : F.info,
                                            ),
                                        },
                                        p,
                                    ),
                                _ && s().createElement('div', { className: c.Z.title }, _),
                            ),
                        ),
                        t &&
                            s().createElement(
                                i.l,
                                { tooltipArgs: C },
                                s().createElement('div', {
                                    className: r()(c.Z.timer, null == F ? void 0 : F.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2862: (e, u, t) => {
                'use strict';
                let n, r, a, s, i, o, l, c;
                t.d(u, { $h: () => s, A2: () => o, E4: () => n, h2: () => a, kK: () => i, sh: () => l }),
                    (function (e) {
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
                            (e.BrCoin = 'brcoin');
                    })(n || (n = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
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
                            (e.EquipCoin = 'equipCoin');
                    })(r || (r = {})),
                    (function (e) {
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
                            (e.S48x48 = 's48x48');
                    })(a || (a = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(s || (s = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(i || (i = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(o || (o = {})),
                    (function (e) {
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
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(l || (l = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(c || (c = {}));
            },
            729: (e, u, t) => {
                'use strict';
                t.d(u, { c$: () => D, i2: () => C, m9: () => B, p3: () => E, pI: () => A, ry: () => m });
                var n = t(2372),
                    r = t(7363),
                    a = t.n(r),
                    s = t(2862);
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
                    ],
                    o = [s.E4.Gold, s.E4.Credits, s.E4.Crystal, s.E4.FreeXp],
                    l = [s.E4.BattlePassPoints, s.E4.EquipCoin],
                    c = [s.E4.PremiumPlus, s.E4.Premium],
                    E = (e) =>
                        i.includes(e)
                            ? s.$h.MULTI
                            : o.includes(e)
                              ? s.$h.CURRENCY
                              : l.includes(e)
                                ? s.$h.NUMBER
                                : c.includes(e)
                                  ? s.$h.PREMIUM_PLUS
                                  : s.$h.STRING,
                    d = ['engravings', 'backgrounds'],
                    _ = ['engraving', 'background'],
                    m = (e, u = s.h2.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
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
                                    const n = d[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(_[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, a);
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
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
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
                        }
                    },
                    B = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case s.$h.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case s.$h.CURRENCY:
                            case s.$h.NUMBER:
                                return a().createElement(n.A, { format: 'integral', value: Number(e) });
                            case s.$h.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    };
            },
            7932: (e, u, t) => {
                'use strict';
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
            },
            8882: (e, u, t) => {
                'use strict';
                t.d(u, { nS: () => n });
                t(7932);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
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
            8089: (e, u, t) => {
                'use strict';
                t.d(u, { A: () => E });
                var n = t(7363),
                    r = t.n(n),
                    a = t(6483),
                    s = t.n(a),
                    i = t(7727),
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
                        (c =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        c.apply(this, arguments)
                    );
                }
                class E extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, i.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, i.G)(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            a = e.side,
                            i = e.type,
                            E = e.classNames,
                            d = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            m = e.onMouseDown,
                            A = e.onMouseUp,
                            F =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, l)),
                            D = s()(o.Z.base, o.Z[`base__${i}`], o.Z[`base__${a}`], null == E ? void 0 : E.base),
                            C = s()(o.Z.icon, o.Z[`icon__${i}`], o.Z[`icon__${a}`], null == E ? void 0 : E.icon),
                            B = s()(o.Z.glow, null == E ? void 0 : E.glow),
                            g = s()(o.Z.caption, o.Z[`caption__${i}`], null == E ? void 0 : E.caption),
                            p = s()(o.Z.goto, null == E ? void 0 : E.goto);
                        return r().createElement(
                            'div',
                            c(
                                {
                                    className: D,
                                    onMouseEnter: this._onMouseEnter(d),
                                    onMouseLeave: this._onMouseLeave(_),
                                    onMouseDown: this._onMouseDown(m),
                                    onMouseUp: this._onMouseUp(A),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                F,
                            ),
                            'info' !== i && r().createElement('div', { className: o.Z.shine }),
                            r().createElement('div', { className: C }, r().createElement('div', { className: B })),
                            r().createElement('div', { className: g }, u),
                            n && r().createElement('div', { className: p }, n),
                        );
                    }
                }
                E.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
            },
            7078: (e, u, t) => {
                'use strict';
                t.d(u, { t: () => o });
                var n = t(7363),
                    r = t.n(n),
                    a = t(2056);
                const s = ['children'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, s);
                    return r().createElement(
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
            3415: (e, u, t) => {
                'use strict';
                t.d(u, { l: () => l });
                var n = t(7363),
                    r = t.n(n),
                    a = t(7078),
                    s = t(6373),
                    i = t(2056);
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                const l = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const n = r().createElement('div', { className: t }, e);
                    if (u.header || u.body) return r().createElement(s.i, u, n);
                    const l = u.contentId;
                    return l ? r().createElement(i.u, o({}, u, { contentId: l }), n) : r().createElement(a.t, u, n);
                };
            },
            6373: (e, u, t) => {
                'use strict';
                t.d(u, { i: () => l });
                var n = t(2056),
                    r = t(7363),
                    a = t.n(r);
                const s = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        i.apply(this, arguments)
                    );
                }
                const o = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (e) => {
                        let u = e.children,
                            t = e.body,
                            l = e.header,
                            c = e.note,
                            E = e.alert,
                            d = e.args,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, s);
                        const m = (0, r.useMemo)(() => {
                            const e = Object.assign({}, d, { body: t, header: l, note: c, alert: E });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [E, t, l, c, d]);
                        return a().createElement(
                            n.u,
                            i(
                                {
                                    contentId:
                                        ((A = null == d ? void 0 : d.hasHtmlContent),
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
                    r = t(9916),
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
                const o = (e, u, t = {}, n = 0) => {
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
                            _ = e.ignoreShowDelay,
                            m = void 0 !== _ && _,
                            A = e.ignoreMouseClick,
                            F = void 0 !== A && A,
                            D = e.decoratorId,
                            C = void 0 === D ? 0 : D,
                            B = e.isEnabled,
                            g = void 0 === B || B,
                            p = e.targetId,
                            h = void 0 === p ? 0 : p,
                            b = e.onShow,
                            v = e.onHide,
                            f = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, s);
                        const w = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => h || (0, n.F)().resId, [h]),
                            y = (0, a.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (o(t, C, { isMouseEvent: !0, on: !0, arguments: i(r) }, S),
                                    b && b(),
                                    (w.current.isVisible = !0));
                            }, [t, C, r, S, b]),
                            T = (0, a.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        o(t, C, { on: !1 }, S),
                                        w.current.isVisible && v && v(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, C, S, v]),
                            k = (0, a.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(w.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', k, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && T();
                            }, [g, T]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            );
                        return g
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(y, m ? 100 : 400)),
                                                      l && l(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              T(), null == c || c(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === F && T(), null == d || d(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === F && T(), null == E || E(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : u;
                        var R;
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
            7515: (e, u, t) => {
                'use strict';
                t.d(u, { u: () => n });
                const n = (e, u, t) => (t < e ? e : t > u ? u : t);
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
                                (t = null), (u = e());
                            });
                        })),
                        () => {
                            'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                        }
                    );
                };
            },
            8246: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => i });
                var n = t(3138);
                function r(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return a(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, u);
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
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
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
                            const s = 'string' == typeof r ? `${a}.${r}` : a,
                                o = n.O.view.addModelObserver(s, u, !0);
                            return i.set(o, t), e && t(l(r)), o;
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
                            for (var e, t = r(i.keys()); !(e = t()).done; ) {
                                o(e.value, u);
                            }
                        },
                        unsubscribe: o,
                    };
                }
            },
            3215: (e, u, t) => {
                'use strict';
                t.d(u, { q3: () => o });
                var n = t(4598),
                    r = t(9174),
                    a = t(7363),
                    s = t.n(a),
                    i = t(8246);
                const o = () => (e, u) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: o = 'real', options: l, children: c, mocks: E }) {
                            const d = (0, a.useRef)([]),
                                _ = (t, a, s) => {
                                    var o;
                                    const l = i.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (o = null == s ? void 0 : s.getter) ? o : () => {},
                                                  }),
                                        E = (e) =>
                                            'mocks' === t ? (null == s ? void 0 : s.getter(e)) : c.readByPath(e),
                                        _ = (e) => d.current.push(e),
                                        m = e({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                array: (e, u) => {
                                                    const a = null != u ? u : E(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
                                                    );
                                                },
                                                object: (e, u) => {
                                                    const a = null != u ? u : E(e),
                                                        s = r.LO.box(a, { equals: n.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, r.aD)((e) => s.set(e)),
                                                                e,
                                                            ),
                                                        s
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
                                                            s = Object.entries(a),
                                                            i = s.reduce(
                                                                (e, [u, t]) => ((e[t] = r.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, r.aD)((e) => {
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
                                m = (0, a.useRef)(!1),
                                A = (0, a.useState)(o),
                                F = A[0],
                                D = A[1],
                                C = (0, a.useState)(() => _(o, l, E)),
                                B = C[0],
                                g = C[1];
                            return (
                                (0, a.useEffect)(() => {
                                    m.current ? g(_(F, l, E)) : (m.current = !0);
                                }, [E, F, l]),
                                (0, a.useEffect)(() => {
                                    D(o);
                                }, [o]),
                                (0, a.useEffect)(
                                    () => () => {
                                        B.externalModel.dispose(), d.current.forEach((e) => e());
                                    },
                                    [B],
                                ),
                                s().createElement(t.Provider, { value: B }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            7044: (e, u, t) => {
                'use strict';
                t(3649), t(9916);
                var n = t(8613);
                Date.now(), n.Ew.getRegionalDateTime, n.Ew.getFormattedDateTime;
            },
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => o, on: () => i, onResize: () => a, onScaleUpdated: () => s });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    i = (e, u) => engine.on(e, u),
                    o = (e, u) => engine.off(e, u),
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
                                        s = l[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, i),
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
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
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
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
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
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
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
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => i, hY: () => s });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    s = Object.assign({}, a, { sound: n.playSound }),
                    i = { play: s, setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => o,
                        arabic2roman: () => S,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => s.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => f,
                        getFontNames: () => w,
                        getScale: () => D,
                        getSize: () => _,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => C,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => g,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var n = t(9690),
                    r = t(3722),
                    a = t(6112),
                    s = t(6538),
                    i = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function E(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
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
                function h() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const w = (() => {
                        let e = [];
                        return () => (0 === e.length && (e = Object.keys(viewEnv.getFontsConfig())), e);
                    })(),
                    S = n.cg,
                    y = Object.keys(a.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === a.W[u]), e),
                        {},
                    ),
                    T = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : s.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    s = 32,
                    i = 64,
                    o = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            o('popover' === e ? r : s);
                        },
                        minimize() {
                            o(i);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            4598: (e, u, t) => {
                'use strict';
                function n() {}
                t.d(u, { ZT: () => n, jv: () => r });
                function r() {
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
                        n = R.invalid('resId'),
                        r = '';
                    var a;
                    u &&
                        ((r = (null == (a = u.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                        (t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (n = window.subViews[t].id));
                    return { callerUrl: r, caller: t, stack: u, resId: n };
                };
            },
            6536: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(7363);
                const r = (e) => {
                    const u = (0, n.useRef)(!1);
                    u.current || (e(), (u.current = !0));
                };
            },
            3815: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => a });
                var n = t(7363);
                const r = [];
                function a(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), r)
                    );
                }
            },
            8526: (e, u, t) => {
                'use strict';
                t.d(u, { I9: () => o });
                var n = t(3138),
                    r = t(5521),
                    a = (t(9916), t(7363));
                const s = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function i(e = r.n.NONE, u = s, t = !1, i = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== r.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(r) {
                            if (r.keyCode === e) {
                                if (!i && n.O.view.isEventHandled()) return;
                                n.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, i]);
                }
                function o(e) {
                    i(r.n.ESCAPE, e);
                }
            },
            5415: (e, u, t) => {
                'use strict';
                t.d(u, { Aq: () => o, GS: () => l, cJ: () => s, fd: () => i });
                var n = t(7363),
                    r = t(7739),
                    a = t(1043);
                let s, i, o;
                !(function (e) {
                    (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = a.j.small.width)] = 'Small'),
                        (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                        (e[(e.Large = a.j.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                })(s || (s = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.width)] = 'Small'),
                            (e[(e.Medium = a.j.medium.width)] = 'Medium'),
                            (e[(e.Large = a.j.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge');
                    })(i || (i = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = a.j.small.height)] = 'Small'),
                            (e[(e.Medium = a.j.medium.height)] = 'Medium'),
                            (e[(e.Large = a.j.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge');
                    })(o || (o = {}));
                const l = () => {
                    const e = (0, n.useContext)(r.YN),
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
                                    return console.error('Unreachable media context resolution'), s.ExtraSmall;
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
                                    return console.error('Unreachable media context resolution'), i.ExtraSmall;
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
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: u, remScreenHeight: t };
                };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
                t.d(u, { n: () => n }),
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
                    })(n || (n = {})),
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
            9480: (e, u, t) => {
                'use strict';
                t.d(u, { UI: () => r, tP: () => a });
                function n(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function r(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function a(e, u = 0, t = e.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let r = Math.max(u, 0);
                            const a = Math.min(
                                t,
                                (function (e) {
                                    return Math.max(0, e.length - 1);
                                })(e),
                            );
                            return {
                                next: function () {
                                    if (r > a) return { done: !0, value: null };
                                    const u = e[r++];
                                    return u ? { value: n(u), done: !1 } : { done: !0, value: null };
                                },
                            };
                        },
                    };
                }
            },
            9690: (e, u, t) => {
                'use strict';
                t.d(u, { cg: () => a });
                const n = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    r = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(e) {
                    let u = '';
                    for (let t = r.length - 1; t >= 0; t--) for (; e >= r[t]; ) (u += n[t]), (e -= r[t]);
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            7727: (e, u, t) => {
                'use strict';
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
                'use strict';
                t.d(u, { Uw: () => _, WU: () => a, v2: () => r });
                var n = t(1281);
                let r;
                function a(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(r || (r = {}));
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
                    l = (e, u, t = r.left) => e.split(u).reduce(t === r.left ? i : o, []),
                    c = (() => {
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
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    d = (e, u = r.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return c(e);
                        if ('ja' === t) {
                            return (0, n.D4)()
                                .parse(e)
                                .map((e) => s(e));
                        }
                        return ((e, u = r.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = s(e);
                            return l(a, /( )/, u).forEach((e) => (t = t.concat(l(e, n, r.left)))), t;
                        })(e, u);
                    },
                    _ = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : d(e, u)));
            },
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
            9916: (e, u, t) => {
                'use strict';
                t.d(u, { B3: () => o, Z5: () => s.Z5, B0: () => i, ry: () => D, Eu: () => C });
                class n {
                    constructor() {
                        (this.entries = []),
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
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                n.__instance = void 0;
                const r = n;
                var a = t(1358);
                var s = t(8613);
                let i;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(i || (i = {}));
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(5521),
                    _ = t(3138);
                const m = ['args'];
                function A(e, u, t, n, r, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, r);
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
                                        function s(e) {
                                            A(a, n, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            A(a, n, r, s, i, 'throw', e);
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
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, m);
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
                    g = () => B(i.CLOSE),
                    p = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(7572);
                const b = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: i,
                        NumberFormatType: o,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                d = o.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(d),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, g);
                        },
                        handleViewEvent: B,
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
                        ClickOutsideManager: b,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = v;
            },
            8613: (e, u, t) => {
                'use strict';
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
            3046: (e, u, t) => {
                'use strict';
                var n = t(7739),
                    r = t(7363),
                    a = t.n(r),
                    s = t(6483),
                    i = t.n(s),
                    o = t(926),
                    l = t.n(o),
                    c = t(5415);
                const E = ['children', 'className'];
                function d() {
                    return (
                        (d =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        d.apply(this, arguments)
                    );
                }
                const _ = {
                        [c.fd.ExtraSmall]: '',
                        [c.fd.Small]: l().SMALL_WIDTH,
                        [c.fd.Medium]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH}`,
                        [c.fd.Large]: `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH}`,
                        [c.fd.ExtraLarge]:
                            `${l().SMALL_WIDTH} ${l().MEDIUM_WIDTH} ${l().LARGE_WIDTH} ${l().EXTRA_LARGE_WIDTH}`,
                    },
                    m = {
                        [c.Aq.ExtraSmall]: '',
                        [c.Aq.Small]: l().SMALL_HEIGHT,
                        [c.Aq.Medium]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT}`,
                        [c.Aq.Large]: `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT}`,
                        [c.Aq.ExtraLarge]:
                            `${l().SMALL_HEIGHT} ${l().MEDIUM_HEIGHT} ${l().LARGE_HEIGHT} ${l().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [c.cJ.ExtraSmall]: '',
                        [c.cJ.Small]: l().SMALL,
                        [c.cJ.Medium]: `${l().SMALL} ${l().MEDIUM}`,
                        [c.cJ.Large]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE}`,
                        [c.cJ.ExtraLarge]: `${l().SMALL} ${l().MEDIUM} ${l().LARGE} ${l().EXTRA_LARGE}`,
                    },
                    F = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, E);
                        const r = (0, c.GS)(),
                            s = r.mediaWidth,
                            o = r.mediaHeight,
                            l = r.mediaSize;
                        return a().createElement('div', d({ className: i()(t, _[s], m[o], A[l]) }, n), u);
                    },
                    D = ['children'];
                const C = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, D);
                    return a().createElement(n.ZN, null, a().createElement(F, t, u));
                };
                var B = t(1533),
                    g = t.n(B),
                    p = t(9766),
                    h = t(8882),
                    b = t(9916),
                    v = t(3403),
                    f = t(2432),
                    w = t(3215),
                    S = t(4598),
                    y = t(3946);
                const T = (0, w.q3)()(
                        ({ observableModel: e }) => {
                            const u = { root: e.object(), nowRewards: e.array('rewards.nowRewards.items') },
                                t = (0, y.Om)(() => u.nowRewards.get(), { equals: S.jv });
                            return Object.assign({}, u, { computes: { rewardList: t } });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            takeRewards: e.createCallbackNoArgs('onTakeRewardsClick'),
                            showPreviewVehicle: e.createCallbackNoArgs('onPreviewVehicle'),
                            showTankmen: e.createCallbackNoArgs('showTankmen'),
                            showRewards: e.createCallbackNoArgs('showRewards'),
                            showBuy: e.createCallbackNoArgs('showBuy'),
                            showVehicle: e.createCallbackNoArgs('showVehicle'),
                        }),
                    ),
                    k = T[0],
                    P = T[1],
                    N = {
                        base: 'App_base_31',
                        base__rewardsState: 'App_base__rewardsState_39',
                        background: 'App_background_74',
                        base__tankmenState: 'App_base__tankmenState_c9',
                        additionalAnimation: 'App_additionalAnimation_0a',
                        fadeIn: 'App_fadeIn_02',
                        header: 'App_header_70',
                        awards: 'App_awards_34',
                        footer: 'App_footer_2f',
                        base__buyState: 'App_base__buyState_ad',
                        fadeOut: 'App_fadeOut_8f',
                        fadeInWithScale: 'App_fadeInWithScale_d3',
                        slideUp: 'App_slideUp_ae',
                        scale: 'App_scale_25',
                        rotate: 'App_rotate_ef',
                    },
                    x = 'selectableRewardsState',
                    L = 'finalState';
                let M;
                !(function (e) {
                    (e[(e.Active = 0)] = 'Active'),
                        (e[(e.Paused = 1)] = 'Paused'),
                        (e[(e.Completed = 2)] = 'Completed'),
                        (e[(e.NotStarted = 3)] = 'NotStarted');
                })(M || (M = {}));
                var O = t(8526),
                    I = t(7727);
                const H = {
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
                let U, G;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(U || (U = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(G || (G = {}));
                const z = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: s,
                    mixClass: o,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: E,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const D = (0, r.useRef)(null),
                        C = (0, r.useState)(t),
                        B = C[0],
                        g = C[1],
                        p = (0, r.useState)(!1),
                        h = p[0],
                        b = p[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                B && null !== D.current && !D.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, r.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: D,
                                className: i()(
                                    H.base,
                                    H[`base__${n}`],
                                    s && H.base__disabled,
                                    u && H[`base__${u}`],
                                    B && H.base__focus,
                                    h && H.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== l && (0, I.G)(l), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), b(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== c && (0, I.G)(c),
                                        _ && _(e),
                                        t && (s || (D.current && (D.current.focus(), g(!0)))),
                                        b(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (A && A(e), b(!1));
                                },
                                onClick: function (e) {
                                    s || (F && F(e));
                                },
                            },
                            n !== U.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: H.back }),
                                    a().createElement('span', { className: H.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: i()(H.state, H.state__default) },
                                a().createElement('span', { className: H.stateDisabled }),
                                a().createElement('span', { className: H.stateHighlightHover }),
                                a().createElement('span', { className: H.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: H.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                z.defaultProps = { type: U.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const $ = z,
                    W = {
                        base: 'Final_base_62',
                        controls: 'Final_controls_3e',
                        label: 'Final_label_e0',
                        base__finalState: 'Final_base__finalState_92',
                        text: 'Final_text_d2',
                        buttonWrapper: 'Final_buttonWrapper_be',
                        button: 'Final_button_f4',
                    },
                    j = R.strings.battle_pass.holidayFinalScreen,
                    V = (0, v.Pi)(() => {
                        var e;
                        const u = P(),
                            t = u.model,
                            n = u.controls,
                            r = n.takeRewards,
                            s = n.showVehicle,
                            o = t.root.get().state,
                            l = o === x ? j.selectableRewardsState.label() : '',
                            c = (null == (e = j.$dyn(o)) ? void 0 : e.$dyn('button')) || '';
                        return a().createElement(
                            'div',
                            { className: i()(W.base, W[`base__${o}`]) },
                            a().createElement(
                                'div',
                                { className: W.controls },
                                a().createElement(
                                    'div',
                                    { className: W.label },
                                    a().createElement('div', { className: W.text }, l),
                                ),
                                a().createElement(
                                    'div',
                                    { className: W.buttonWrapper },
                                    a().createElement(
                                        $,
                                        {
                                            size: G.medium,
                                            mixClass: W.button,
                                            onClick: () => {
                                                o === x ? r() : s();
                                            },
                                        },
                                        c,
                                    ),
                                ),
                            ),
                        );
                    }),
                    q =
                        (e, u) =>
                        (...t) => {
                            if (e(...t)) return u(...t);
                        };
                let Y;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Y || (Y = {}));
                const Z = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    X = [
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
                function K() {
                    return (
                        (K =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        K.apply(this, arguments)
                    );
                }
                const Q = (e) => {
                    let u = e.type,
                        t = e.children,
                        n = e.className,
                        s = e.classNames,
                        o = e.disabled,
                        l = void 0 !== o && o,
                        c = e.isVisibleLabel,
                        E = void 0 !== c && c,
                        d = e.soundHover,
                        _ = void 0 === d ? R.sounds.highlight() : d,
                        m = e.soundClick,
                        A = void 0 === m ? R.sounds.play() : m,
                        F = e.size,
                        D = void 0 === F ? 'normal' : F,
                        C = e.onClick,
                        B = e.onMouseEnter,
                        g = e.onMouseLeave,
                        p = e.onMouseDown,
                        h = e.onMouseUp,
                        b = e.onFocus,
                        v = e.onBlur,
                        f = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, X);
                    const w = (0, r.useState)(!1),
                        S = w[0],
                        y = w[1],
                        T = (0, r.useState)(!1),
                        k = T[0],
                        P = T[1],
                        N = (0, r.useRef)(null),
                        x = () => !1 === l,
                        L = (e) => x() && ((e) => e.button === Y.LEFT)(e),
                        M = q(x, (e) => {
                            null == C || C(e);
                        }),
                        O = q(L, (e) => {
                            y(!0), null == p || p(e), A && (0, I.G)(A);
                        }),
                        H = q(L, (e) => {
                            y(!1), null == h || h(e);
                        }),
                        U = q(x, (e) => {
                            P(!0), null == B || B(e), _ && (0, I.G)(_);
                        }),
                        G = q(x, (e) => {
                            null == b || b(e);
                        }),
                        z = q(x, (e) => {
                            null == v || v(e);
                        });
                    return a().createElement(
                        'div',
                        K(
                            {
                                ref: N,
                                className: i()(
                                    Z.base,
                                    l && Z.base__disabled,
                                    E && Z.base__visibleLabel,
                                    !l && S && Z.base__mouseDown,
                                    !l && k && Z.base__hovered,
                                    n,
                                ),
                                onClick: M,
                                onMouseEnter: U,
                                onMouseLeave: (e) => {
                                    P(!1), y(!1), null == g || g(e);
                                },
                                onMouseDown: O,
                                onMouseUp: H,
                                onFocus: G,
                                onBlur: z,
                            },
                            f,
                        ),
                        a().createElement('div', {
                            className: i()(Z.icon, Z[`icon__${D}`], Z[`icon__${u}`], null == s ? void 0 : s.icon),
                        }),
                        t &&
                            a().createElement(
                                'div',
                                { className: i()(Z.label, Z[`label__${D}`], null == s ? void 0 : s.label) },
                                t,
                            ),
                    );
                };
                var J = t(2862),
                    ee = t(5739),
                    ue = t(9480),
                    te = t(7030),
                    ne = t(2893),
                    re = t(7264);
                const ae = 'Divider_divider_48',
                    se = 'Divider_divider__right_96',
                    ie = ({ isRight: e = !1 }) => a().createElement('div', { className: i()(ae, e && se) }),
                    oe = 'Title_base_65',
                    le = 'Title_text_7d',
                    ce = ({ text: e }) =>
                        a().createElement(
                            'div',
                            { className: oe },
                            a().createElement(ie, null),
                            a().createElement('div', { className: le }, e),
                            a().createElement(ie, { isRight: !0 }),
                        ),
                    Ee = {
                        base: 'Purchase_base_43',
                        content: 'Purchase_content_1a',
                        preview: 'Purchase_preview_30',
                        shadow: 'Purchase_shadow_4c',
                        visibleRewards: 'Purchase_visibleRewards_84',
                        title: 'Purchase_title_b0',
                        description: 'Purchase_description_b9',
                        button: 'Purchase_button_1a',
                        button__active: 'Purchase_button__active_05',
                        button__disappearing: 'Purchase_button__disappearing_cb',
                        rewardButton: 'Purchase_rewardButton_fe',
                    };
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const _e = R.strings.battle_pass.holidayFinalScreen.buyState,
                    me = (e) => ({
                        from: { opacity: 0 },
                        to: { opacity: 1 },
                        delay: 400 + 100 * e,
                        config: { duration: 400 },
                        onStart: () => {
                            (0, I.G)(R.sounds.bp_reward());
                        },
                    }),
                    Ae = (0, v.Pi)(() => {
                        const e = P().model,
                            u = P().controls,
                            t = u.showRewards,
                            n = u.showPreviewVehicle,
                            r = e.computes.rewardList(),
                            s = (0, c.GS)().mediaSize <= c.cJ.Small ? J.h2.Small : J.h2.Big,
                            i = r.length > 9 ? [...ue.tP(r, 0, 9)] : r,
                            o = (0, te.useSpring)(me(i.length)),
                            l = r.length - i.length;
                        return a().createElement(
                            'div',
                            { className: Ee.base },
                            a().createElement(
                                'div',
                                { className: Ee.preview },
                                a().createElement(Q, { type: 'preview', onClick: n }),
                            ),
                            a().createElement(
                                'div',
                                { className: Ee.content },
                                a().createElement('div', { className: Ee.shadow }),
                                a().createElement(
                                    'div',
                                    { className: Ee.title },
                                    a().createElement(ce, { text: _e.title() }),
                                ),
                                a().createElement('div', { className: Ee.description }, _e.description()),
                                a().createElement(
                                    'div',
                                    { className: Ee.visibleRewards },
                                    ue.UI(i, (e, u) =>
                                        a().createElement(
                                            re.d,
                                            { animationConfig: me(u), key: `${e.item}_${u}` },
                                            a().createElement(ee.Q, de({}, (0, ne.$n)(e, s), { className: Ee.reward })),
                                        ),
                                    ),
                                ),
                                l > 0 &&
                                    a().createElement(
                                        te.animated.div,
                                        { style: o },
                                        a().createElement(
                                            $,
                                            { type: U.ghost, size: G.medium, mixClass: Ee.rewardButton, onClick: t },
                                            a().createElement(p.z, { text: _e.moreRewards(), binding: { count: l } }),
                                        ),
                                    ),
                            ),
                        );
                    });
                var Fe = t(2640),
                    De = t(2189);
                const Ce = 'Rewards_full_ea',
                    Be = { context: 'model.rewards' },
                    ge = (0, v.Pi)(() => {
                        const e = P().controls.close;
                        return a().createElement(
                            De.k,
                            { options: Be },
                            a().createElement('div', { className: Ce }, a().createElement(Fe.$, { onBack: e })),
                        );
                    }),
                    pe = 'Tankmen_base_21',
                    he = 'Tankmen_image_2b',
                    be = 'Tankmen_title_82',
                    ve = 'Tankmen_description_b6',
                    fe = 'Tankmen_tankmenBtn_5e',
                    we = 'Tankmen_button_77',
                    Se = 'Tankmen_blink_25',
                    ye = R.strings.battle_pass.holidayFinalScreen.tankmenState,
                    Te = (0, v.Pi)(() => {
                        const e = P().controls.showTankmen;
                        return a().createElement(
                            'div',
                            { className: pe },
                            a().createElement('div', { className: he }),
                            a().createElement('div', { className: be }, a().createElement(ce, { text: ye.title() })),
                            a().createElement('div', { className: ve }, ye.description()),
                            a().createElement(
                                'div',
                                { className: fe },
                                a().createElement(
                                    $,
                                    { type: U.main, size: G.medium, mixClass: we, onClick: e },
                                    a().createElement('div', { className: Se }),
                                    ye.tankmenButton(),
                                ),
                            ),
                        );
                    }),
                    ke = (0, v.Pi)(() => {
                        const e = P(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get().state,
                            r = t.close;
                        switch (((0, O.I9)(r), n)) {
                            case 'buyState':
                                return a().createElement(Ae, null);
                            case 'rewardsState':
                                return a().createElement(ge, null);
                            case 'tankmenState':
                                return a().createElement(Te, null);
                            case x:
                            case L:
                                return a().createElement(V, null);
                            default:
                                return console.warn('Unknown state ', n), null;
                        }
                    }),
                    Re = 'Footer_base_fe',
                    Pe = 'Footer_light_1b',
                    Ne = 'Footer_buttonWrapper_e5',
                    xe = 'Footer_button_0a',
                    Le = 'Footer_blink_f2',
                    Me = R.strings.battle_pass.holidayFinalScreen.buyState,
                    Oe = (0, v.Pi)(() => {
                        const e = P(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get().isSeasonEndingSoon,
                            r = t.showBuy;
                        return a().createElement(
                            'div',
                            { className: Re },
                            a().createElement('div', { className: Pe }),
                            a().createElement(
                                'div',
                                { className: Ne },
                                a().createElement(
                                    $,
                                    { type: U.main, size: G.medium, mixClass: xe, onClick: r },
                                    n && a().createElement('div', { className: Le }),
                                    Me.buyButton(),
                                ),
                            ),
                        );
                    }),
                    Ie = 'Header_base_a7',
                    He = 'Header_title_0e',
                    Ue = 'Header_description_d3',
                    Ge = 'Header_icon_3b',
                    ze = 'Header_text_bf',
                    $e = 'Header_label_d8',
                    We = 'Header_greenLight_5a',
                    je = R.strings.battle_pass.holidayFinalScreen,
                    Ve = (0, v.Pi)(({ title: e, description: u }) => {
                        const t = P().model.root.get().state,
                            n = t === L ? je.finalState.label() : '';
                        return a().createElement(
                            'div',
                            { className: Ie },
                            a().createElement('div', { className: He }, e),
                            a().createElement('div', { className: Ue }, u),
                            t === L &&
                                a().createElement(
                                    'div',
                                    { className: $e },
                                    a().createElement('div', { className: Ge }),
                                    a().createElement('div', { className: We }),
                                    a().createElement('div', { className: ze }, n),
                                ),
                        );
                    });
                function qe(e, u, t, n, r, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const Ye = R.strings.battle_pass,
                    Ze = (0, v.Pi)(() => {
                        const e = (0, r.useState)(!1),
                            u = e[0],
                            t = e[1],
                            n = P().model.root.get(),
                            s = n.state,
                            o = n.chapterID;
                        return (
                            (0, r.useEffect)(() => {
                                (function () {
                                    var e,
                                        u =
                                            ((e = function* () {
                                                yield (0, b.Eu)(), yield (0, h.nS)(), t(!0);
                                            }),
                                            function () {
                                                var u = this,
                                                    t = arguments;
                                                return new Promise(function (n, r) {
                                                    var a = e.apply(u, t);
                                                    function s(e) {
                                                        qe(a, n, r, s, i, 'next', e);
                                                    }
                                                    function i(e) {
                                                        qe(a, n, r, s, i, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return u.apply(this, arguments);
                                    };
                                })()();
                            }, []),
                            a().createElement(
                                'div',
                                { className: i()(N.base, N[`base__${s}`]) },
                                a().createElement('div', { className: N.background }),
                                u &&
                                    a().createElement(
                                        'div',
                                        { className: N.additionalAnimation },
                                        a().createElement(
                                            'div',
                                            { className: N.header },
                                            a().createElement(Ve, {
                                                title: a().createElement(p.z, {
                                                    text: Ye.holidayFinalScreen.chapter(),
                                                    binding: { chapterName: Ye.chapter.fullNameUppercased.$num(o) },
                                                }),
                                                description: Ye.holidayFinalScreen.completed(),
                                            }),
                                            a().createElement(
                                                'div',
                                                { className: N.awards },
                                                a().createElement(f.Z, { context: 'model.awardsWidget' }),
                                            ),
                                        ),
                                        a().createElement(ke, null),
                                        a().createElement('div', { className: N.footer }, a().createElement(Oe, null)),
                                    ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    g().render(
                        a().createElement(k, null, a().createElement(C, null, a().createElement(Ze, null))),
                        document.getElementById('root'),
                    );
                });
            },
            2640: (e, u, t) => {
                'use strict';
                t.d(u, { $: () => T });
                var n = t(8882),
                    r = t(8089),
                    a = t(8526),
                    s = t(9916),
                    i = t(3403),
                    o = t(7363),
                    l = t.n(o),
                    c = t(9485),
                    E = t(4420),
                    d = t(6483),
                    _ = t.n(d),
                    m = t(3862),
                    A = t(9430),
                    F = t(9144),
                    D = t(2189);
                const C = 'Content_base_94',
                    B = 'Content_mainContent_d4',
                    g = 'Content_base__noScroll_d3',
                    p = R.strings.battle_pass.battlePassBuyView.reward,
                    h = () => {
                        const e = (0, D.t)().model,
                            u = e.levels.get(),
                            t = u.fromLevel,
                            n = u.toLevel,
                            r = u.isPurchaseWithLevels,
                            a = e.computes.nowRewards(),
                            s = e.computes.futureRewards(),
                            i = ((e, u, t) =>
                                t
                                    ? { description: p.descriptionNowRewardsCheckbox() }
                                    : e < u
                                      ? { description: p.descriptionNowRewards(), completedSteps: `${e} - ${u}` }
                                      : { description: p.descriptionNowRewardsSingle(), completedSteps: `${u}` })(
                                t,
                                n,
                                r,
                            ),
                            c = i.description,
                            E = i.completedSteps,
                            d = (0, o.useState)(!1),
                            h = d[0],
                            b = d[1];
                        return l().createElement(
                            F.z,
                            { className: _()(C, !h && g), setVisibleScroll: b },
                            l().createElement(
                                'div',
                                { className: B },
                                a.length > 0 &&
                                    l().createElement(A.r, {
                                        description: c,
                                        iconType: m.Q.now,
                                        rewards: a,
                                        steps: E,
                                        title: p.titleNowRewards(),
                                    }),
                                s.length > 0 &&
                                    l().createElement(A.r, {
                                        description: p.descriptionFutureRewards(),
                                        iconType: m.Q.future,
                                        rewards: s,
                                        title: p.titleFutureRewards(),
                                    }),
                            ),
                        );
                    },
                    b = 'RewardsViewContent_base_42',
                    v = 'RewardsViewContent_content_64',
                    f = 'RewardsViewContent_background_37',
                    w = 'RewardsViewContent_shadow_2a',
                    S = 'RewardsViewContent_back_96';
                function y(e, u, t, n, r, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const T = (0, i.Pi)(({ onBack: e }) => {
                    const u = (0, D.t)().model.levels.get().chapterID,
                        t = (0, o.useState)(!1),
                        i = t[0],
                        d = t[1];
                    (0, a.I9)(e),
                        (0, o.useEffect)(() => {
                            (function () {
                                var e,
                                    u =
                                        ((e = function* () {
                                            yield (0, s.Eu)(), yield (0, n.nS)(), d(!0);
                                        }),
                                        function () {
                                            var u = this,
                                                t = arguments;
                                            return new Promise(function (n, r) {
                                                var a = e.apply(u, t);
                                                function s(e) {
                                                    y(a, n, r, s, i, 'next', e);
                                                }
                                                function i(e) {
                                                    y(a, n, r, s, i, 'throw', e);
                                                }
                                                s(void 0);
                                            });
                                        });
                                return function () {
                                    return u.apply(this, arguments);
                                };
                            })()();
                        }, []);
                    const _ = {
                        backgroundImage: `url(${(0, c.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, u)})`,
                    };
                    return l().createElement(
                        'div',
                        { className: b },
                        l().createElement(
                            'div',
                            { className: f },
                            l().createElement(E.N, { chapter: u, isCurrent: !0, customBackgroundStyle: _ }),
                        ),
                        l().createElement('div', { className: w }),
                        i &&
                            l().createElement(
                                'div',
                                { className: v },
                                l().createElement(
                                    'div',
                                    { className: S },
                                    l().createElement(r.A, {
                                        caption: R.strings.menu.viewHeader.backBtn.label(),
                                        onClick: e,
                                    }),
                                ),
                                l().createElement(h, null),
                            ),
                    );
                });
            },
            2189: (e, u, t) => {
                'use strict';
                t.d(u, { k: () => i, t: () => o });
                var n = t(3215),
                    r = t(4598),
                    a = t(3946);
                const s = (0, n.q3)()(({ observableModel: e }) => {
                        const u = {
                                levels: e.object(),
                                nowRewards: e.array('nowRewards.items'),
                                futureRewards: e.array('futureRewards.items'),
                            },
                            t = (0, a.Om)(() => u.nowRewards.get(), { equals: r.jv }),
                            n = (0, a.Om)(() => u.futureRewards.get(), { equals: r.jv });
                        return Object.assign({}, u, { computes: { nowRewards: t, futureRewards: n } });
                    }, r.ZT),
                    i = s[0],
                    o = s[1];
            },
            9485: (e, u, t) => {
                'use strict';
                t.d(u, { W4: () => r, wD: () => n });
                t(8546);
                const n = (e, u, t = '') => {
                        const n = t.length > 0 ? `_${t}` : t,
                            r = e.$dyn(`c_${u}${n}`),
                            a = String(u).slice(-1),
                            s = e.$dyn(`default_${a}${n}`);
                        return r || s;
                    },
                    r = (e) => {
                        const u = R.images.gui.maps.icons.battlePass.backgrounds;
                        return e
                            ? { backgroundImage: `url(${n(u.progression, e)})` }
                            : { backgroundImage: `url(${u.$dyn('common')})` };
                    };
            },
            930: (e, u, t) => {
                'use strict';
                let n;
                !(function (e) {
                    (e.style = 'style'), (e.tankman = 'tankman');
                })(n || (n = {}));
                n.style, n.tankman;
            },
            2893: (e, u, t) => {
                'use strict';
                t.d(u, { $n: () => s });
                var n = t(2862),
                    r = t(729);
                t(5216), t(7044), t(3649), t(8546), t(930);
                const a = (e) =>
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
                            E = e.tooltipContentId;
                        return {
                            name: s || i,
                            image: (0, r.ry)(e, u),
                            special: l,
                            value: o,
                            valueType: (0, r.p3)(i),
                            title: t && a(e),
                            tooltipArgs: (0, r.pI)({ tooltipId: c }, Number(E), { ignoreShowDelay: !0 }),
                            size: u,
                        };
                    };
            },
            7264: (e, u, t) => {
                'use strict';
                t.d(u, { d: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    i = t(7030);
                const o = 'AnimatedReward_base_f0',
                    l = ({ children: e, animationConfig: u, className: t }) => {
                        const n = (0, i.useSpring)(u);
                        return s().createElement(i.animated.div, { style: n, className: r()(o, t) }, e);
                    };
            },
            2432: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => _e });
                var n = t(7363),
                    r = t.n(n),
                    a = t(6483),
                    s = t.n(a),
                    i = t(9480),
                    o = t(3403),
                    l = t(6373),
                    c = t(7727),
                    E = t(5415);
                const d = (e, u, t, n, r) => {
                    const a = R.images.gui.maps.icons.battlePass.awards_widget;
                    return r
                        ? `url(${a.$dyn(`${e.toLowerCase()}_${u}${t}_${n}_${r}`)})`
                        : `url(${a.$dyn(`${e.toLowerCase()}_${u}${t}_${n}`)})`;
                };
                let _, m, A, F, D;
                !(function (e) {
                    (e.Award = 'Award'),
                        (e.Ticket = 'Ticket'),
                        (e.Coin = 'Coin'),
                        (e.Taler = 'Taler'),
                        (e.Collection = 'Collection'),
                        (e.Commander = 'Commander');
                })(_ || (_ = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Big = 'big');
                    })(m || (m = {})),
                    (function (e) {
                        (e.None = ''), (e.Small = 's'), (e.Medium = 'm');
                    })(A || (A = {})),
                    (function (e) {
                        (e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = '');
                    })(F || (F = {})),
                    (function (e) {
                        (e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = '');
                    })(D || (D = {}));
                const C = {
                        base: 'Background_base_67',
                        bg: 'Background_bg_e8',
                        bgDisabled: 'Background_bgDisabled_e0',
                        bgHover: 'Background_bgHover_b4',
                        base__big: 'Background_base__big_56',
                        base__hovered: 'Background_base__hovered_32',
                    },
                    B = ({ size: e, isHover: u, disabled: t = !1, type: n = _.Coin }) => {
                        const a = (0, E.GS)().mediaSize >= E.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement(
                            'div',
                            { className: s()(C.base, C[`base__${e}`], C[`base__${e}${n}`], u && C.base__hovered) },
                            t
                                ? r().createElement('div', {
                                      className: C.bgDisabled,
                                      style: { backgroundImage: d(n, F.Background, D.Disabled, e, a) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: C.bg,
                                          style: { backgroundImage: d(n, F.Background, D.None, e, a) },
                                      }),
                                      r().createElement('div', {
                                          className: C.bgHover,
                                          style: { backgroundImage: d(n, F.Background, D.Hover, e, a) },
                                      }),
                                  ),
                        );
                    },
                    g = {
                        base: 'Border_base_5a',
                        border: 'Border_border_bd',
                        borderHover: 'Border_borderHover_ab',
                        base__hovered: 'Border_base__hovered_83',
                        borderDisabled: 'Border_borderDisabled_8b',
                        borderDisabled__big: 'Border_borderDisabled__big_12',
                    },
                    p = ({ size: e, isHover: u, highlighted: t = !1, disabled: n = !1, type: a = _.Coin }) => {
                        const i = (0, E.GS)().mediaSize >= E.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement(
                            'div',
                            { className: s()(g.base, g[`base__${e}`], u && g.base__hovered) },
                            n
                                ? r().createElement('div', {
                                      className: s()(g.borderDisabled, g[`borderDisabled__${e}`]),
                                      style: { backgroundImage: d(a, F.Border, D.Disabled, e, i) },
                                  })
                                : r().createElement(
                                      r().Fragment,
                                      null,
                                      r().createElement('div', {
                                          className: g.border,
                                          style: { backgroundImage: d(t ? _.Collection : a, F.Border, D.None, e, i) },
                                      }),
                                      r().createElement('div', {
                                          className: g.borderHover,
                                          style: { backgroundImage: d(a, F.Border, D.Hover, e, i) },
                                      }),
                                  ),
                        );
                    };
                var h = t(2372),
                    b = t(9766);
                const v = { base: 'CountValue_base_fe', base__big: 'CountValue_base__big_ea' },
                    f = ({ state: e, count: u, size: t, maxCount: n = 0 }) => {
                        switch (e) {
                            case S.InProgress:
                                return r().createElement(b.z, { text: `${u || 0} / ${n}` });
                            case S.Completed:
                                return r().createElement('div', { className: s()(v.base, v[`base__${t}`]) });
                            default:
                                return r().createElement(h.A, { format: 'integral', value: u });
                        }
                    },
                    w = {
                        base: 'Count_base_a6',
                        base__big: 'Count_base__big_2c',
                        base__locked: 'Count_base__locked_e3',
                        base__disabled: 'Count_base__disabled_66',
                    };
                let S;
                !(function (e) {
                    (e.Default = ''), (e.InProgress = 'InProgress'), (e.Completed = 'Completed');
                })(S || (S = {}));
                const y = ({
                        size: e,
                        count: u,
                        maxCount: t,
                        state: n = S.Default,
                        isLocked: a = !1,
                        disabled: i = !1,
                    }) =>
                        r().createElement(
                            'div',
                            { className: s()(w.base, w[`base__${e}`], a && w.base__locked, i && w.base__disabled) },
                            r().createElement(f, { state: n, size: e, count: u, maxCount: t }),
                        ),
                    T = {
                        base: 'Icon_base_05',
                        base__big: 'Icon_base__big_9e',
                        base__darkened: 'Icon_base__darkened_2b',
                        base__hover: 'Icon_base__hover_03',
                        base__disabled: 'Icon_base__disabled_a1',
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
                    P = ({ size: e, isHover: u, isDark: t = !0, disabled: n = !1, type: a }) => {
                        const i = (0, E.GS)().mediaSize >= E.cJ.Medium ? A.Medium : A.Small;
                        return r().createElement('div', {
                            className: s()(T.base, T[`base__${e}`], T[`base__${k(u, t, n)}`]),
                            style: { backgroundImage: d(a, F.Icon, D.None, e, a === _.Collection ? A.None : i) },
                        });
                    },
                    N = {
                        base: 'Label_base_05',
                        base__big: 'Label_base__big_3c',
                        base__gold: 'Label_base__gold_dc',
                        base__hover: 'Label_base__hover_51',
                        base__disabled: 'Label_base__disabled_df',
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
                    L = ({ size: e, title: u, isHover: t, disabled: n = !1, isGold: a = !1 }) =>
                        r().createElement(
                            'div',
                            { className: s()(N.base, N[`base__${e}`], N[`base__${x(n, t)}`], a && N.base__gold) },
                            u,
                        ),
                    M = {
                        base: 'ChoiceAward_base_0d',
                        base__big: 'ChoiceAward_base__big_ec',
                        base__disabled: 'ChoiceAward_base__disabled_f1',
                        base__hasAppearAnimation: 'ChoiceAward_base__hasAppearAnimation_a0',
                        baseAppear: 'ChoiceAward_baseAppear_89',
                        shine: 'ChoiceAward_shine_d5',
                        shine_small_s: 'ChoiceAward_shine_small_s_f2',
                        shine_small_m: 'ChoiceAward_shine_small_m_de',
                        shine_big_s: 'ChoiceAward_shine_big_s_02',
                        shine_big_m: 'ChoiceAward_shine_big_m_ed',
                        shine__left: 'ChoiceAward_shine__left_2e',
                        shine__right: 'ChoiceAward_shine__right_64',
                        arrow: 'ChoiceAward_arrow_30',
                        blinkShape: 'ChoiceAward_blinkShape_89',
                        blink: 'ChoiceAward_blink_f0',
                        blinker: 'ChoiceAward_blinker_0c',
                    },
                    O = R.strings.battle_pass.awardsWidget,
                    I = ({ count: e, disabled: u = !1, onClick: t, size: a }) => {
                        const i = (0, n.useState)(!1),
                            o = i[0],
                            E = i[1],
                            d = 1 === e ? O.title.awardSingle() : O.title.awardMultiple(),
                            m = u ? O.description.awardDisabled() : O.description.award(),
                            A = (0, n.useCallback)(() => {
                                u || (c.$.playClick(), t());
                            }, [u, t]);
                        return r().createElement(
                            l.i,
                            { body: m, isEnabled: Boolean(m) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(
                                        M.base,
                                        M[`base__${a}`],
                                        u ? M.base__disabled : M.base__hasAppearAnimation,
                                    ),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), E(!0);
                                    },
                                    onMouseLeave: () => {
                                        E(!1);
                                    },
                                    onClick: A,
                                },
                                r().createElement(p, { size: a, isHover: o, type: _.Award, disabled: u }),
                                r().createElement(B, { size: a, isHover: o, type: _.Award, disabled: u }),
                                r().createElement(P, { size: a, isHover: o, type: _.Award, disabled: u, isDark: !1 }),
                                r().createElement(y, { size: a, count: e, disabled: u }),
                                r().createElement(L, { size: a, isHover: o, title: d, disabled: u, isGold: !0 }),
                                !u &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: s()(M.shine, M.shine__left) }),
                                        r().createElement('div', { className: s()(M.shine, M.shine__right) }),
                                        r().createElement('div', { className: M.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: M.blinkShape },
                                            r().createElement('div', { className: M.blink }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    H = { base: 'CoinAward_base_75', base__big: 'CoinAward_base__big_1f' },
                    U = R.strings.battle_pass.awardsWidget,
                    G = ({ count: e, onClick: u, size: t }) => {
                        const a = (0, n.useState)(!1),
                            i = a[0],
                            o = a[1];
                        return r().createElement(
                            l.i,
                            { body: U.description.coin(), isEnabled: Boolean(U.description.coin()) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(H.base, H[`base__${t}`]),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), o(!0);
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        c.$.playClick(), u();
                                    },
                                },
                                r().createElement(p, { size: t, isHover: i }),
                                r().createElement(B, { size: t, isHover: i }),
                                r().createElement(P, { size: t, isHover: i, type: _.Coin }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(L, { size: t, isHover: i, title: U.title.coin() }),
                            ),
                        );
                    },
                    z = {
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
                    $ = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                const j = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        a = e.fadeInAnimation,
                        i = e.hide,
                        o = e.maximumNumber,
                        l = e.className,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, $);
                    const E = n ? null : t,
                        d = 'string' == typeof E;
                    if ((E && !d && E < 0) || 0 === E) return null;
                    const _ = E && !d && E > o,
                        m = s()(
                            z.base,
                            z[`base__${u}`],
                            a && z.base__animated,
                            i && z.base__hidden,
                            !E && z.base__pattern,
                            n && z.base__empty,
                            l,
                        );
                    return r().createElement(
                        'div',
                        W({ className: m }, c),
                        r().createElement('div', { className: z.bg }),
                        r().createElement('div', { className: z.pattern }),
                        r().createElement(
                            'div',
                            { className: s()(z.value, d && z.value__text) },
                            _ ? o : E,
                            _ && r().createElement('span', { className: z.plus }, '+'),
                        ),
                    );
                };
                j.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                var V = t(3815);
                const q = {
                        base: 'CollectionAward_base_0c',
                        base__big: 'CollectionAward_base__big_ca',
                        bubble: 'CollectionAward_bubble_65',
                    },
                    Y = R.strings.battle_pass.awardsWidget,
                    Z = ({ count: e, maxCount: u, newItemsCount: t, hasTrigger: a, size: i, onClick: o }) => {
                        const E = (0, n.useState)(!1),
                            d = E[0],
                            A = E[1],
                            F = u === e,
                            D = i === m.Small && a,
                            C = F ? Y.description.collectionCompleted() : Y.description.collection(),
                            g = (0, V.z)(() => {
                                c.$.playClick(), o();
                            });
                        return r().createElement(
                            l.i,
                            { body: C, isEnabled: Boolean(C) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(q.base, q[`base__${i}`]),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), A(!0);
                                    },
                                    onMouseLeave: () => {
                                        A(!1);
                                    },
                                    onClick: g,
                                },
                                r().createElement(p, { size: i, isHover: d, type: _.Coin, highlighted: D }),
                                r().createElement(B, { size: i, isHover: d }),
                                r().createElement(P, { size: i, isHover: d, type: _.Collection }),
                                r().createElement(y, {
                                    size: i,
                                    count: e,
                                    maxCount: u,
                                    state: F ? S.Completed : S.InProgress,
                                }),
                                r().createElement(L, { size: i, isHover: d, title: Y.title.collection() }),
                                t > 0 &&
                                    r().createElement(
                                        'div',
                                        { className: q.bubble },
                                        r().createElement(j, { size: 'small' }),
                                    ),
                            ),
                        );
                    },
                    X = {
                        base: 'CommanderAward_base_11',
                        base__big: 'CommanderAward_base__big_ce',
                        icon: 'CommanderAward_icon_92',
                        base__hover: 'CommanderAward_base__hover_fc',
                    },
                    K = R.strings.battle_pass.awardsWidget,
                    Q = ({ onClick: e, size: u }) => {
                        const t = (0, n.useState)(!1),
                            a = t[0],
                            i = t[1],
                            o = K.description.commander();
                        return r().createElement(
                            l.i,
                            { body: o, isEnabled: Boolean(o) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(X.base, X[`base__${u}`], a && X.base__hover),
                                    onMouseEnter: () => {
                                        (0, c.G)(R.sounds.bp_highlight_02()), i(!0);
                                    },
                                    onMouseLeave: () => i(!1),
                                    onClick: () => {
                                        c.$.playClick(), e();
                                    },
                                },
                                r().createElement(p, { size: u, isHover: a }),
                                r().createElement(B, { size: u, isHover: a }),
                                r().createElement(L, { size: u, isHover: a, title: K.title.commander() }),
                                r().createElement('div', { className: X.icon }),
                            ),
                        );
                    };
                var J = t(514);
                const ee = { base: 'TalerAward_base_ef', base__big: 'TalerAward_base__big_6b' },
                    ue = R.strings.battle_pass.awardsWidget,
                    te = ({ count: e, onClick: u, size: t }) => {
                        const a = (0, n.useState)(!1),
                            i = a[0],
                            o = a[1];
                        return r().createElement(
                            l.i,
                            { body: ue.description.taler() },
                            r().createElement(
                                'div',
                                {
                                    className: s()(ee.base, ee[`base__${t}`], i && ee.base__hover),
                                    onMouseEnter: () => {
                                        J.hY.sound(R.sounds.bp_highlight_02()), o(!0);
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        J.hY.click(), u();
                                    },
                                },
                                r().createElement(p, { size: t, isHover: i }),
                                r().createElement(B, { size: t, isHover: i }),
                                r().createElement(P, { size: t, isHover: i, type: _.Taler }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(L, { size: t, isHover: i, title: ue.title.taler() }),
                            ),
                        );
                    },
                    ne = {
                        base: 'TicketAward_base_76',
                        base__big: 'TicketAward_base__big_91',
                        base__hasAppearAnimation: 'TicketAward_base__hasAppearAnimation_09',
                        baseAppear: 'TicketAward_baseAppear_ef',
                        shine: 'TicketAward_shine_46',
                        shine_small_s: 'TicketAward_shine_small_s_22',
                        shine_small_m: 'TicketAward_shine_small_m_5b',
                        shine_big_s: 'TicketAward_shine_big_s_43',
                        shine_big_m: 'TicketAward_shine_big_m_80',
                        shine__left: 'TicketAward_shine__left_15',
                        shine__right: 'TicketAward_shine__right_4b',
                        arrow: 'TicketAward_arrow_d4',
                        blinkShape: 'TicketAward_blinkShape_17',
                        blink: 'TicketAward_blink_1b',
                        blinker: 'TicketAward_blinker_1e',
                    },
                    re = R.strings.battle_pass.awardsWidget,
                    ae = ({ count: e, onClick: u, size: t }) => {
                        const a = (0, n.useState)(!1),
                            i = a[0],
                            o = a[1],
                            c = Boolean(e),
                            E = c ? _.Ticket : void 0;
                        return r().createElement(
                            l.i,
                            { body: re.description.ticket(), isEnabled: Boolean(re.description.ticket()) },
                            r().createElement(
                                'div',
                                {
                                    className: s()(ne.base, ne[`base__${t}`], c && ne.base__hasAppearAnimation),
                                    onMouseEnter: () => {
                                        J.hY.sound('bp_highlight_02'), o(!0);
                                    },
                                    onMouseLeave: () => {
                                        o(!1);
                                    },
                                    onClick: () => {
                                        J.hY.sound('play'), u();
                                    },
                                },
                                r().createElement(p, { size: t, isHover: i, type: E }),
                                r().createElement(B, { size: t, isHover: i, type: E }),
                                r().createElement(P, { size: t, isHover: i, type: _.Ticket, isDark: !c }),
                                r().createElement(y, { size: t, count: e }),
                                r().createElement(L, { size: t, isHover: i, title: re.title.ticket(), isGold: c }),
                                c &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', { className: s()(ne.shine, ne.shine__left) }),
                                        r().createElement('div', { className: s()(ne.shine, ne.shine__right) }),
                                        r().createElement('div', { className: ne.arrow }),
                                        r().createElement(
                                            'div',
                                            { className: ne.blinkShape },
                                            r().createElement('div', { className: ne.blink }),
                                        ),
                                    ),
                            ),
                        );
                    };
                var se = t(3215),
                    ie = t(3946);
                const oe = (0, se.q3)()(
                        ({ observableModel: e, externalModel: u }) => {
                            const t = { root: e.object(), collectionEntryPoint: e.object('collectionEntryPoint') },
                                n = (0, ie.Om)((e) => {
                                    const n = t.root.get(),
                                        r = n.talerCount,
                                        a = n.notChosenRewardCount,
                                        s = n.bpcoinCount,
                                        i = n.ticketsCount,
                                        o = n.isChooseRewardsEnabled,
                                        l = n.isSpecialVoiceTankmenEnabled,
                                        c = n.isTalerEnabled,
                                        E = n.isBpCoinEnabled,
                                        d = n.isTicketsEnabled,
                                        m = t.collectionEntryPoint.get(),
                                        A = m.collectionItemCount,
                                        F = m.newCollectionItemCount,
                                        D = m.maxCollectionItemCount,
                                        C = m.isFirstEnter,
                                        B = m.isCollectionsEnabled;
                                    return [
                                        {
                                            type: _.Award,
                                            props: {
                                                size: e,
                                                count: a,
                                                disabled: !o,
                                                onClick: u.createCallbackNoArgs('onTakeRewardsClick'),
                                            },
                                            condition: a > 0,
                                        },
                                        {
                                            type: _.Ticket,
                                            props: {
                                                size: e,
                                                count: i,
                                                onClick: u.createCallbackNoArgs('showTickets'),
                                            },
                                            condition: d,
                                        },
                                        {
                                            type: _.Coin,
                                            props: {
                                                size: e,
                                                count: s,
                                                onClick: u.createCallbackNoArgs('onBpcoinClick'),
                                            },
                                            condition: E,
                                        },
                                        {
                                            type: _.Taler,
                                            props: { size: e, count: r, onClick: u.createCallbackNoArgs('showTalers') },
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
                                            condition: B,
                                        },
                                        {
                                            type: _.Commander,
                                            props: {
                                                size: e,
                                                count: 0,
                                                onClick: u.createCallbackNoArgs('showTankmen'),
                                            },
                                            condition: l,
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
                    Ee = {
                        base: 'AwardsWrapper_base_e5',
                        award: 'AwardsWrapper_award_49',
                        base__big: 'AwardsWrapper_base__big_6b',
                    },
                    de = (0, o.Pi)(({ size: e, classNames: u }) => {
                        const t = ce().model;
                        return r().createElement(
                            'div',
                            { className: s()(Ee.base, Ee[`base__${e}`], null == u ? void 0 : u.base) },
                            i.UI(
                                t.computes.awardsList(e),
                                (e) =>
                                    e.condition &&
                                    r().createElement(
                                        'div',
                                        { key: e.type, className: s()(Ee.award, null == u ? void 0 : u.award) },
                                        ((e, u) => {
                                            switch (e) {
                                                case _.Award:
                                                    return r().createElement(I, u);
                                                case _.Ticket:
                                                    return r().createElement(ae, u);
                                                case _.Coin:
                                                    return r().createElement(G, u);
                                                case _.Taler:
                                                    return r().createElement(te, u);
                                                case _.Collection:
                                                    return r().createElement(Z, u);
                                                case _.Commander:
                                                    return r().createElement(Q, u);
                                                default:
                                                    return console.warn('Unknown award type: ', e), null;
                                            }
                                        })(e.type, e.props),
                                    ),
                            ),
                        );
                    }),
                    _e = ({ size: e = m.Small, context: u = 'model', classNames: t }) =>
                        r().createElement(
                            le,
                            { options: { context: u } },
                            r().createElement(de, { size: e, classNames: t }),
                        );
            },
            4420: (e, u, t) => {
                'use strict';
                t.d(u, { N: () => c });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    i = t(9485);
                const o = 'ChapterBackground_base_fa',
                    l = 'ChapterBackground_base__current_7a',
                    c = ({ chapter: e, isCurrent: u, customBackgroundStyle: t }) =>
                        s().createElement('div', { className: r()(o, u && l), style: t || (0, i.W4)(e) });
            },
            8546: (e, u, t) => {
                'use strict';
                let n, r, a, s;
                !(function (e) {
                    (e.Micro = 'micro'), (e.Small = 'small'), (e.Medium = 'medium');
                })(n || (n = {})),
                    (function (e) {
                        (e.ACTIVE = 'active'), (e.COMPLETED = 'completed'), (e.NOT_CHOSEN = 'notChosen');
                    })(r || (r = {})),
                    (function (e) {
                        (e.AwaitSeason = 'awaitSeason'),
                            (e.Bought = 'bought'),
                            (e.Free = 'free'),
                            (e.Completed = 'completed'),
                            (e.CompletedRightNow = 'completedRightNow'),
                            (e.SwitchedChapterRightNow = 'switchedChapterRightNow'),
                            (e.NoVehiclesBase = 'noVehiclesBase'),
                            (e.ChapterNotChosen = 'chapterNotChosen');
                    })(a || (a = {})),
                    (function (e) {
                        (e.None = ''),
                            (e.ShowLevel = 'show'),
                            (e.HideLevel = 'hide'),
                            (e.HideLevelWithDelay = 'hideWithDelay');
                    })(s || (s = {}));
            },
            9430: (e, u, t) => {
                'use strict';
                t.d(u, { r: () => g });
                var n = t(6483),
                    r = t.n(n),
                    a = t(7363),
                    s = t.n(a),
                    i = t(2862),
                    o = t(5739),
                    l = t(5415),
                    c = t(9480),
                    E = t(2893);
                const d = 'GroupRewards_base_70',
                    _ = 'GroupRewards_item_af',
                    m = ({ rewards: e, className: u }) => {
                        const t = (0, l.GS)().mediaSize < l.cJ.Medium ? i.h2.Small : i.h2.Big;
                        return s().createElement(
                            'div',
                            { className: r()(d, u) },
                            c.UI(e, (e, u) =>
                                s().createElement(
                                    'div',
                                    { key: `reward_${u}_${e.name}`, className: _ },
                                    s().createElement(o.Q, (0, E.$n)(e, t, !0)),
                                ),
                            ),
                        );
                    };
                var A = t(3862);
                const F = 'RewardsBlock_base_0e',
                    D = 'RewardsBlock_groupTitle_2f',
                    C = 'RewardsBlock_groupRewards_38',
                    B = 'RewardsBlock_groupRewards__future_b9',
                    g = ({
                        description: e,
                        iconType: u,
                        steps: t = '',
                        rewards: n,
                        className: a = '',
                        title: i = '',
                    }) =>
                        s().createElement(
                            'div',
                            { className: r()(F, a) },
                            s().createElement(A.p, { description: e, type: u, steps: t, className: D, title: i }),
                            s().createElement(m, { rewards: n, className: r()(C, u === A.Q.future && B) }),
                        );
            },
            3862: (e, u, t) => {
                'use strict';
                t.d(u, { p: () => c, Q: () => l });
                var n = t(6483),
                    r = t.n(n),
                    a = t(280),
                    s = t(7363),
                    i = t.n(s);
                const o = {
                    base: 'GroupTitle_base_e8',
                    title: 'GroupTitle_title_0c',
                    iconShadow: 'GroupTitle_iconShadow_81',
                    base__now: 'GroupTitle_base__now_fa',
                    base__future: 'GroupTitle_base__future_42',
                    icon: 'GroupTitle_icon_62',
                    titleText: 'GroupTitle_titleText_90',
                    descriptionText: 'GroupTitle_descriptionText_bc',
                    steps: 'GroupTitle_steps_8d',
                };
                let l;
                !(function (e) {
                    (e.now = 'now'), (e.future = 'future');
                })(l || (l = {}));
                const c = ({ description: e, type: u, steps: t = '', className: n = '', title: s = '' }) =>
                    i().createElement(
                        'div',
                        { className: r()(o.base, o[`base__${u}`], n) },
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
            9144: (e, u, t) => {
                'use strict';
                t.d(u, { z: () => ge });
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => I,
                        Bar: () => L,
                        DefaultScroll: () => O,
                        Direction: () => B,
                        defaultSettings: () => g,
                        useHorizontalScrollApi: () => h,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => te, Bar: () => J, Default: () => ue, useVerticalScrollApi: () => H });
                var a = t(6483),
                    s = t.n(a),
                    i = t(1856),
                    o = t(7363),
                    l = t.n(o),
                    c = t(7515),
                    E = t(3138),
                    d = t(3815);
                function _(e, u, t = []) {
                    const n = (0, o.useRef)(0),
                        r = (0, o.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, o.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, o.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, a),
                        r,
                    ];
                }
                var m = t(7727);
                function A(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return F(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return F(e, u);
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
                function F(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function D(e, u, t) {
                    const n = (0, o.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    s = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        (s = Date.now()), t.apply(l, o);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        i(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (o.cancel = function () {
                                        i(), (a = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, o.useEffect)(() => n.cancel, [n]), n;
                }
                var C = t(7030);
                let B;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(B || (B = {}));
                const g = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    p = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        forceTriggerMouseMove: a,
                    }) => {
                        const s = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : (0, c.u)(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? g : c,
                                _ = (0, o.useRef)(null),
                                m = (0, o.useRef)(null),
                                F = (0, o.useRef)(!1),
                                B = (() => {
                                    const e = (0, o.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = A(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, o.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                p = D(
                                    () => {
                                        a && a();
                                    },
                                    [],
                                    150,
                                ),
                                h = (0, C.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = _.current;
                                        u && (t(u, e), B.trigger('change', e), a && F.current && p());
                                    },
                                    onRest: (e) => B.trigger('rest', e),
                                    onStart: (e) => B.trigger('start', e),
                                    onPause: (e) => B.trigger('pause', e),
                                })),
                                b = h[0],
                                v = h[1],
                                f = (0, o.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = b.scrollPosition.get(),
                                            a = (null != (n = b.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, u * t + a + r);
                                    },
                                    [b.scrollPosition],
                                ),
                                w = (0, o.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = _.current;
                                        n &&
                                            v.start({
                                                scrollPosition: s(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: s(n, b.scrollPosition.get()) },
                                            });
                                    },
                                    [v, E.animationConfig, b.scrollPosition],
                                ),
                                S = (0, o.useCallback)(
                                    (e) => {
                                        const u = _.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = f(u, e, n);
                                        w(a);
                                    },
                                    [w, f, E.step],
                                ),
                                y = (0, o.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && S(n(e)),
                                            _.current && B.trigger('mouseWheel', e, b.scrollPosition, u(_.current));
                                    },
                                    [b.scrollPosition, S, B],
                                ),
                                T = ((e, u = []) => {
                                    const t = (0, o.useRef)(),
                                        n = (0, o.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, o.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        (0, i.v)(() => {
                                            const e = _.current;
                                            e &&
                                                (w(s(e, b.scrollPosition.goal), { immediate: !0 }),
                                                B.trigger('resizeHandled'));
                                        }),
                                    [w, b.scrollPosition.goal],
                                ),
                                k = (0, d.z)(() => {
                                    const e = _.current;
                                    if (!e) return;
                                    const u = s(e, b.scrollPosition.goal);
                                    u !== b.scrollPosition.goal && w(u, { immediate: !0 }),
                                        B.trigger('recalculateContent');
                                });
                            (0, o.useEffect)(
                                () => (
                                    window.addEventListener('resize', T),
                                    () => {
                                        window.removeEventListener('resize', T);
                                    }
                                ),
                                [T],
                            ),
                                (0, o.useEffect)(() => {
                                    const e = _.current;
                                    if (!e || !a) return;
                                    const u = () => {
                                            F.current = !0;
                                        },
                                        t = () => {
                                            F.current = !1;
                                        };
                                    return (
                                        e.addEventListener('mouseenter', u),
                                        e.addEventListener('mouseleave', t),
                                        () => {
                                            e.removeEventListener('mouseenter', u),
                                                e.removeEventListener('mouseleave', t);
                                        }
                                    );
                                }, [_]);
                            return (0, o.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (_.current ? e(_.current) : void 0),
                                    getBounds: () =>
                                        _.current
                                            ? u(_.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: y,
                                    applyScroll: w,
                                    applyStepTo: S,
                                    contentRef: _,
                                    wrapperRef: m,
                                    scrollPosition: v,
                                    animationScroll: b,
                                    recalculateContent: k,
                                    events: { on: B.on, off: B.off },
                                }),
                                [b.scrollPosition, w, S, B.off, B.on, k, y, v, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    h = p({
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
                        getDirection: (e) => (e.deltaY > 1 ? B.Next : B.Prev),
                        forceTriggerMouseMove: E.O.view.forceTriggerMouseMove,
                    }),
                    b = 'HorizontalBar_base_49',
                    v = 'HorizontalBar_base__nonActive_82',
                    f = 'HorizontalBar_leftButton_5f',
                    w = 'HorizontalBar_rightButton_03',
                    S = 'HorizontalBar_track_0d',
                    y = 'HorizontalBar_thumb_fd',
                    T = 'HorizontalBar_rail_32',
                    k = 'disable',
                    R = { pending: !1, offset: 0 },
                    P = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    N = () => {},
                    x = (e, u) => Math.max(20, e.offsetWidth * u),
                    L = (0, o.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = P, onDrag: n = N }) => {
                        const r = (0, o.useRef)(null),
                            a = (0, o.useRef)(null),
                            A = (0, o.useRef)(null),
                            F = (0, o.useRef)(null),
                            D = (0, o.useRef)(null),
                            C = e.stepTimeout || 100,
                            g = (0, o.useState)(R),
                            p = g[0],
                            h = g[1],
                            L = (0, o.useCallback)(
                                (e) => {
                                    h(e),
                                        D.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [n],
                            ),
                            M = () => {
                                const u = F.current,
                                    t = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    o = (0, c.u)(0, 1, s / (r - n)),
                                    l = (u.offsetWidth - x(u, i)) * o;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (a.current && A.current && F.current && D.current) {
                                            if (0 === e)
                                                return a.current.classList.add(k), void A.current.classList.remove(k);
                                            if (
                                                ((u = F.current),
                                                (t = D.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(k), void A.current.classList.add(k);
                                            var u, t;
                                            a.current.classList.remove(k), A.current.classList.remove(k);
                                        }
                                    })(l);
                            },
                            O = (0, d.z)(() => {
                                (() => {
                                    const u = D.current,
                                        t = F.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const s = Math.min(1, n / a);
                                    (u.style.width = `${x(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(v) : r.current.classList.remove(v));
                                })(),
                                    M();
                            });
                        (0, o.useEffect)(() => (0, i.v)(O)),
                            (0, o.useEffect)(
                                () =>
                                    (0, i.v)(() => {
                                        const u = () => {
                                            M();
                                        };
                                        let t = N;
                                        const n = () => {
                                            t(), (t = (0, i.v)(O));
                                        };
                                        return (
                                            e.events.on('recalculateContent', O),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', O),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, o.useEffect)(() => {
                                if (!p.pending) return;
                                const u = E.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const i = F.current,
                                            o = D.current;
                                        if (!i || !o) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - p.offset - i.getBoundingClientRect().x,
                                            c = (l / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: o, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = E.O.client.events.mouse.up(() => {
                                        u(), L(R);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, p.offset, p.pending, n, L]);
                        const I = _((u) => e.applyStepTo(u), C, [e]),
                            H = I[0],
                            U = I[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', U, !0),
                                () => document.removeEventListener('mouseup', U, !0)
                            ),
                            [U],
                        );
                        const G = (e) => {
                            e.target.classList.contains(k) || (0, m.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(b, u.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(f, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(k) || 0 !== e.button || ((0, m.G)('play'), H(B.Next));
                                },
                                onMouseUp: U,
                                ref: a,
                                onMouseEnter: G,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(S, u.track),
                                    onMouseDown: (u) => {
                                        const n = D.current;
                                        if (n && 0 === u.button)
                                            if (((0, m.G)('play'), u.target === n))
                                                L({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = D.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? B.Prev : B.Next);
                                            }
                                    },
                                    ref: F,
                                    onMouseEnter: G,
                                },
                                l().createElement('div', { ref: D, className: s()(y, u.thumb) }),
                                l().createElement('div', { className: s()(T, u.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()(w, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(k) || 0 !== e.button || ((0, m.G)('play'), H(B.Prev));
                                },
                                onMouseUp: U,
                                ref: A,
                                onMouseEnter: G,
                            }),
                        );
                    }),
                    M = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    O = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: s()(M.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return l().createElement(
                            'div',
                            { className: s()(M.defaultScroll, t), onWheel: u.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(M.defaultScrollArea, r) },
                                l().createElement(I, { className: i, api: _, classNames: a }, e),
                            ),
                            l().createElement(L, { getStepByRailClick: c, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    I = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, o.useEffect)(() => (0, i.v)(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(M.base, u) },
                            l().createElement(
                                'div',
                                {
                                    className: s()(M.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: s()(M.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (I.Bar = L), (I.Default = O);
                const H = p({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? B.Next : B.Prev),
                    }),
                    U = 'VerticalBar_base_f3',
                    G = 'VerticalBar_base__nonActive_42',
                    z = 'VerticalBar_topButton_d7',
                    $ = 'VerticalBar_bottomButton_06',
                    W = 'VerticalBar_track_df',
                    j = 'VerticalBar_thumb_32',
                    V = 'VerticalBar_rail_43',
                    q = 'disable',
                    Y = () => {},
                    Z = { pending: !1, offset: 0 },
                    X = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    K = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Q = (e, u) => Math.max(20, e.offsetHeight * u),
                    J = (0, o.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = X, onDrag: n = Y }) => {
                        const r = (0, o.useRef)(null),
                            a = (0, o.useRef)(null),
                            A = (0, o.useRef)(null),
                            F = (0, o.useRef)(null),
                            D = (0, o.useRef)(null),
                            C = e.stepTimeout || 100,
                            g = (0, o.useState)(Z),
                            p = g[0],
                            h = g[1],
                            b = (0, o.useCallback)(
                                (e) => {
                                    h(e),
                                        D.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: D.current });
                                },
                                [n],
                            ),
                            v = (0, d.z)(() => {
                                const u = D.current,
                                    t = F.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Q(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    r.current && (1 === s ? r.current.classList.add(G) : r.current.classList.remove(G)),
                                    s
                                );
                            }),
                            f = (0, d.z)(() => {
                                const u = F.current,
                                    t = D.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const s = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    o = (0, c.u)(0, 1, s / (r - n)),
                                    l = (u.offsetHeight - Q(u, i)) * o;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (a.current && A.current && F.current && D.current) {
                                            if (0 === Math.round(e))
                                                return a.current.classList.add(q), void A.current.classList.remove(q);
                                            if (
                                                ((u = F.current),
                                                (t = D.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(q), void A.current.classList.add(q);
                                            var u, t;
                                            a.current.classList.remove(q), A.current.classList.remove(q);
                                        }
                                    })(l);
                            }),
                            w = (0, d.z)(() => {
                                K(e, () => {
                                    v(), f();
                                });
                            });
                        (0, o.useEffect)(() => (0, i.v)(w)),
                            (0, o.useEffect)(() => {
                                const u = () => {
                                    K(e, () => {
                                        f();
                                    });
                                };
                                let t = Y;
                                const n = () => {
                                    t(), (t = (0, i.v)(w));
                                };
                                return (
                                    e.events.on('recalculateContent', w),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', w),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, o.useEffect)(() => {
                                if (!p.pending) return;
                                const u = E.O.client.events.mouse.up(() => {
                                        b(Z);
                                    }),
                                    t = E.O.client.events.mouse.move(([u]) => {
                                        K(e, (t) => {
                                            const r = F.current,
                                                a = D.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const i = u.screenY - p.offset - r.getBoundingClientRect().y,
                                                o = (i / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: o });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, p.offset, p.pending, n, b]);
                        const S = _((u) => e.applyStepTo(u), C, [e]),
                            y = S[0],
                            T = S[1];
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mouseup', T, !0),
                                () => document.removeEventListener('mouseup', T, !0)
                            ),
                            [T],
                        );
                        const k = (e) => {
                            e.target.classList.contains(q) || (0, m.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: s()(U, u.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: s()(z, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(q) || 0 !== e.button || ((0, m.G)('play'), y(B.Next));
                                },
                                ref: a,
                                onMouseEnter: k,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: s()(W, u.track),
                                    onMouseDown: (u) => {
                                        const n = D.current;
                                        if (n && 0 === u.button)
                                            if (((0, m.G)('play'), u.target === n))
                                                b({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    D.current &&
                                                        K(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? B.Prev : B.Next);
                                            }
                                    },
                                    ref: F,
                                    onMouseEnter: k,
                                },
                                l().createElement('div', { ref: D, className: s()(j, u.thumb) }),
                                l().createElement('div', { className: s()(V, u.rail) }),
                            ),
                            l().createElement('div', {
                                className: s()($, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(q) || 0 !== e.button || ((0, m.G)('play'), y(B.Prev));
                                },
                                onMouseUp: T,
                                ref: A,
                                onMouseEnter: k,
                            }),
                        );
                    }),
                    ee = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ue = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, o.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: s()(ee.base, e.base) });
                            }, [n]),
                            _ = (0, o.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return l().createElement(
                            'div',
                            { className: s()(ee.defaultScroll, t), onWheel: u.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(ee.area, r) },
                                l().createElement(te, { className: a, classNames: i, api: _ }, e),
                            ),
                            l().createElement(J, { getStepByRailClick: c, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    te = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, o.useEffect)(() => (0, i.v)(n.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: s()(ee.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: s()(ee.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                te.Default = ue;
                const ne = { Vertical: r, Horizontal: n };
                var re = t(8882),
                    ae = t(9916);
                function se(e, u, t, n, r, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                function ie(e) {
                    return function () {
                        var u = this,
                            t = arguments;
                        return new Promise(function (n, r) {
                            var a = e.apply(u, t);
                            function s(e) {
                                se(a, n, r, s, i, 'next', e);
                            }
                            function i(e) {
                                se(a, n, r, s, i, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                let oe;
                !(function (e) {
                    (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End');
                })(oe || (oe = {}));
                const le = (e) => {
                        const u = (0, o.useState)(oe.Idle),
                            t = u[0],
                            n = u[1],
                            r = e.animationScroll,
                            a = e.getContainerSize,
                            s = e.getWrapperSize,
                            l = e.events,
                            c = (0, o.useCallback)(() => {
                                const e = r.scrollPosition.get(),
                                    u = a() - s();
                                switch (!0) {
                                    case !u:
                                        return n(oe.Idle);
                                    case e <= 0:
                                        return n(oe.Start);
                                    case e >= u:
                                        return n(oe.End);
                                    default:
                                        n(oe.Between);
                                }
                            }, [r.scrollPosition, a, s]);
                        return (
                            (0, o.useEffect)(
                                () => (
                                    (function () {
                                        var e = ie(function* () {
                                            yield (0, i.v)(c);
                                        });
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()(),
                                    l.on('change', c),
                                    () => l.off('change', c)
                                ),
                                [l, c],
                            ),
                            (0, o.useEffect)(() => {
                                const e = (function () {
                                    var e = ie(function* () {
                                        yield (0, ae.Eu)(), yield (0, re.nS)(), c();
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
                            }, [c]),
                            t
                        );
                    },
                    ce = { type: 'idle' };
                const Ee = 'ScrollWithLips_base_69',
                    de = 'ScrollWithLips_lip_90',
                    _e = 'ScrollWithLips_lip__top_ab',
                    me = 'ScrollWithLips_lip__bottom_17',
                    Ae = 'ScrollWithLips_scroll_7e',
                    Fe = 'ScrollWithLips_scroll__loaded_b2',
                    De = 'ScrollWithLips_topButton_4e',
                    Ce = 'ScrollWithLips_bottomButton_1e',
                    Be = 'ScrollWithLips_track_4f',
                    ge = ({ className: e, children: u, setVisibleScroll: t }) => {
                        const n = H();
                        !(function (e, u) {
                            const t = e.contentRef,
                                n = e.wrapperRef,
                                r = e.scrollPosition,
                                a = e.clampPosition,
                                s = e.animationScroll,
                                i = e.events,
                                l = e.getContainerSize,
                                c = e.getWrapperSize,
                                E = (0, o.useState)(ce),
                                d = E[0],
                                _ = E[1],
                                m = (0, o.useState)(!1),
                                A = m[0],
                                F = m[1];
                            (0, o.useEffect)(() => {
                                const e = t.current;
                                e && (e.style.cursor = A ? ('dragging' === d.type ? 'grabbing' : 'grab') : 'default');
                            }, [t, A, d.type]),
                                (0, o.useEffect)(() => {
                                    if ('dragging' !== d.type) return;
                                    const e = (e) => {
                                            const i = t.current,
                                                o = n.current;
                                            if (!i || !o) return;
                                            const l = d.positionFrom - e.screenY,
                                                c = d.previousScrollPosition + l;
                                            r.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: a(i, c),
                                                        from: { scrollPosition: s.scrollPosition.get() },
                                                    },
                                                    u && { config: u },
                                                ),
                                            );
                                        },
                                        i = () => {
                                            window.removeEventListener('mousemove', e), _({ type: 'scrollingToEnd' });
                                        };
                                    return (
                                        window.addEventListener('mousemove', e),
                                        window.addEventListener('mouseup', i),
                                        () => {
                                            window.removeEventListener('mousemove', e),
                                                window.removeEventListener('mouseup', i);
                                        }
                                    );
                                }, [s.scrollPosition, a, t, d, r, n, u]),
                                (0, o.useEffect)(() => {
                                    if ('scrollingToEnd' !== d.type) return;
                                    const e = () => {
                                        _(ce);
                                    };
                                    return s.scrollPosition.idle && e(), i.on('rest', e), () => i.off('rest', e);
                                }, [s.scrollPosition, d.type, i]),
                                (0, o.useEffect)(() => {
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
                                        e.addEventListener('mousedown', u), () => e.removeEventListener('mousedown', u)
                                    );
                                }, [s.scrollPosition, t]),
                                (0, o.useEffect)(() => {
                                    const e = () => {
                                        var e, u;
                                        const t = null != (e = l()) ? e : 0,
                                            n = null != (u = c()) ? u : 0;
                                        F(t > n);
                                    };
                                    return (
                                        i.on('resizeHandled', e),
                                        i.on('recalculateContent', e),
                                        () => {
                                            i.off('resizeHandled', e), i.off('recalculateContent', e);
                                        }
                                    );
                                }, [i, l, c]);
                        })(n);
                        const r = le(n),
                            a = r !== oe.Idle;
                        return (
                            (0, o.useEffect)(() => {
                                t && t(r !== oe.Idle);
                            }, [t, r]),
                            l().createElement(
                                'div',
                                { className: s()(Ee, e) },
                                r !== oe.Start && r !== oe.Idle && l().createElement('div', { className: s()(de, _e) }),
                                r !== oe.End && r !== oe.Idle && l().createElement('div', { className: s()(de, me) }),
                                l().createElement(
                                    ne.Vertical.Area.Default,
                                    {
                                        api: n,
                                        barClassNames: {
                                            base: s()(Ae, a && Fe),
                                            topButton: De,
                                            bottomButton: Ce,
                                            track: Be,
                                        },
                                    },
                                    u,
                                ),
                            )
                        );
                    };
            },
            5216: (e, u, t) => {
                'use strict';
                let n, r;
                !(function (e) {
                    (e.Active = 'active'),
                        (e.Paused = 'paused'),
                        (e.Completed = 'completed'),
                        (e.NotStarted = 'notStarted');
                })(n || (n = {})),
                    (function (e) {
                        (e.Vehicle = 'vehicle'), (e.Style = 'style'), (e.Tankman = 'tankman');
                    })(r || (r = {}));
            },
            5287: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = { base: 'FormatText_base_d0' };
            },
            1609: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => n });
                const n = {
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
                    info__bptaler: 'Reward_info__bptaler_82',
                    info__crystal: 'Reward_info__crystal_36',
                    info__premiumTank: 'Reward_info__premiumTank_d3',
                    title: 'Reward_title_36',
                    timer: 'Reward_timer_d3',
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
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
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
            return __webpack_require__.d(u, { a: u }), u;
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
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 9258),
        (() => {
            var e = { 9258: 0, 2155: 0, 8872: 0, 7737: 0, 8805: 0, 6488: 0, 2670: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, i] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(3046));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
