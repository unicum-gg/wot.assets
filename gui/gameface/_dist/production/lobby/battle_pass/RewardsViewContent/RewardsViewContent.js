(() => {
    'use strict';
    var __webpack_modules__ = {
            1602: (u, e, t) => {
                t.d(e, { A: () => n });
                var r = t(828);
                const n = ({ value: u, format: e = 'integral' }) => {
                    const t = (function (u) {
                            return 'gold' === u ? r.B3.GOLD : r.B3.INTEGRAL;
                        })(e),
                        n = r.Z5.getNumberFormat(u, t);
                    return void 0 !== u && void 0 !== n ? n : null;
                };
            },
            2616: (u, e, t) => {
                t.d(e, { z: () => l });
                var r = t(9849),
                    n = t.n(r),
                    a = t(6758),
                    o = t(7363),
                    i = t.n(o),
                    s = t(4880);
                const l = ({
                    binding: u,
                    text: e = '',
                    classMix: t,
                    alignment: r = a.v2.left,
                    formatWithBrackets: l,
                }) => {
                    if (null === e) return (console.error("FormatText was supplied with 'null'"), null);
                    const c = l && u ? (0, a.WU)(e, u) : e;
                    return i().createElement(
                        o.Fragment,
                        null,
                        c.split('\n').map((e, l) =>
                            i().createElement(
                                'div',
                                { className: n()(s.Z.base, t), key: `${e}-${l}` },
                                (0, a.Uw)(e, r, u).map((u, e) =>
                                    i().createElement(o.Fragment, { key: `${e}-${u}` }, u),
                                ),
                            ),
                        ),
                    );
                };
            },
            397: (u, e, t) => {
                t.d(e, { Y: () => s });
                var r = t(7475),
                    n = t(7363),
                    a = t(1958),
                    o = t(9478);
                const i = (function (u = r.O.client.getSize('rem')) {
                        const e = u.width,
                            t = u.height;
                        return Object.assign({ width: e, height: t }, (0, o.T)(e, t, a.j));
                    })(),
                    s = (0, n.createContext)(i);
            },
            68: (u, e, t) => {
                (t(7475), t(7363), t(397));
            },
            5191: (u, e, t) => {
                var r = t(7363),
                    n = t(3034),
                    a = t(397);
                const o = ['children'];
                (0, r.memo)((u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var r in u)
                                if ({}.hasOwnProperty.call(u, r)) {
                                    if (-1 !== e.indexOf(r)) continue;
                                    t[r] = u[r];
                                }
                            return t;
                        })(u, o);
                    const i = (0, r.useContext)(a.Y),
                        s = i.extraLarge,
                        l = i.large,
                        c = i.medium,
                        E = i.small,
                        A = i.extraSmall,
                        d = i.extraLargeWidth,
                        F = i.largeWidth,
                        D = i.mediumWidth,
                        B = i.smallWidth,
                        m = i.extraSmallWidth,
                        C = i.extraLargeHeight,
                        _ = i.largeHeight,
                        g = i.mediumHeight,
                        p = i.smallHeight,
                        f = i.extraSmallHeight,
                        h = { extraLarge: C, large: _, medium: g, small: p, extraSmall: f };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return e;
                        if (t.large && l) return e;
                        if (t.medium && c) return e;
                        if (t.small && E) return e;
                        if (t.extraSmall && A) return e;
                    } else {
                        if (t.extraLargeWidth && d) return (0, n.H)(e, t, h);
                        if (t.largeWidth && F) return (0, n.H)(e, t, h);
                        if (t.mediumWidth && D) return (0, n.H)(e, t, h);
                        if (t.smallWidth && B) return (0, n.H)(e, t, h);
                        if (t.extraSmallWidth && m) return (0, n.H)(e, t, h);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && _) return e;
                            if (t.mediumHeight && g) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && f) return e;
                        }
                    }
                    return null;
                });
            },
            3034: (u, e, t) => {
                t.d(e, { H: () => r });
                const r = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
            },
            5579: (u, e, t) => {
                t.d(e, { YN: () => r.Y });
                (t(5191), t(68));
                var r = t(397);
            },
            1958: (u, e, t) => {
                t.d(e, { j: () => r });
                const r = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
            },
            9478: (u, e, t) => {
                t.d(e, { T: () => r });
                function r(u, e, t) {
                    const r = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.width:
                                    return e.extraLarge.weight;
                                case u >= e.large.width && u < e.extraLarge.width:
                                    return e.large.weight;
                                case u >= e.medium.width && u < e.large.width:
                                    return e.medium.weight;
                                case u >= e.small.width && u < e.medium.width:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(u, t),
                        n = (function (u, e) {
                            switch (!0) {
                                case u >= e.extraLarge.height:
                                    return e.extraLarge.weight;
                                case u >= e.large.height && u < e.extraLarge.height:
                                    return e.large.weight;
                                case u >= e.medium.height && u < e.large.height:
                                    return e.medium.weight;
                                case u >= e.small.height && u < e.medium.height:
                                    return e.small.weight;
                                default:
                                    return e.extraSmall.weight;
                            }
                        })(e, t),
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
            3359: (u, e, t) => {
                t.d(e, { Q: () => E });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    o = t.n(a),
                    i = t(1672),
                    s = t(2486),
                    l = t(4692),
                    c = t(5261);
                const E = ({
                    name: u,
                    image: e,
                    isPeriodic: t = !1,
                    size: r = s.h2.Big,
                    special: a,
                    value: E,
                    valueType: A,
                    title: d,
                    style: F,
                    className: D,
                    classNames: B,
                    tooltipArgs: m,
                    periodicIconTooltipArgs: C,
                }) => {
                    const _ = (0, l.c$)(r, a),
                        g = (0, l.i2)(a),
                        p = (0, l.m9)(E, A);
                    return o().createElement(
                        'div',
                        {
                            className: n()(c.Z.base, c.Z[`base__${r}`], s.oy.includes(u) && c.Z.base__normalize, D),
                            style: F,
                        },
                        o().createElement(
                            i.l,
                            { tooltipArgs: m, className: c.Z.tooltipWrapper },
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(
                                    'div',
                                    { className: n()(c.Z.image, null == B ? void 0 : B.image) },
                                    _ &&
                                        o().createElement('div', {
                                            className: n()(c.Z.highlight, null == B ? void 0 : B.highlight),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${_}_highlight)`,
                                            },
                                        }),
                                    e &&
                                        o().createElement('div', {
                                            className: n()(c.Z.icon, null == B ? void 0 : B.rewardIcon),
                                            style: { backgroundImage: `url(${e})` },
                                        }),
                                    g &&
                                        o().createElement('div', {
                                            className: n()(c.Z.overlay, null == B ? void 0 : B.overlay),
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_overlay)`,
                                            },
                                        }),
                                ),
                                p &&
                                    o().createElement(
                                        'div',
                                        {
                                            className: n()(
                                                c.Z.info,
                                                c.Z[`info__${u}`],
                                                A === s.$h.MULTI && c.Z.info__multi,
                                                null == B ? void 0 : B.info,
                                            ),
                                        },
                                        p,
                                    ),
                                d && o().createElement('div', { className: c.Z.title }, d),
                            ),
                        ),
                        t &&
                            o().createElement(
                                i.l,
                                { tooltipArgs: C },
                                o().createElement('div', {
                                    className: n()(c.Z.timer, null == B ? void 0 : B.periodicIcon),
                                }),
                            ),
                    );
                };
            },
            2486: (u, e, t) => {
                t.d(e, { $h: () => a, A2: () => i, E4: () => r, h2: () => n, kK: () => o, oy: () => l, sh: () => s });
                let r = (function (u) {
                        return (
                            (u.Items = 'items'),
                            (u.Equipment = 'equipment'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.Goodies = 'goodies'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Tokens = 'tokens'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.CrewBooks = 'crewBooks'),
                            (u.Customizations = 'customizations'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Tankman = 'tankman'),
                            (u.Tankwoman = 'tankwoman'),
                            (u.TankmenXp = 'tankmenXP'),
                            (u.TankmenXpFactor = 'tankmenXPFactor'),
                            (u.FreeXpFactor = 'freeXPFactor'),
                            (u.BattleToken = 'battleToken'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.FreeXp = 'freeXP'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattlePassSelectToken = 'battlePassSelectToken'),
                            (u.BattlePassTicket = 'lootBox_commonTicket'),
                            (u.BattlePassTaler = 'bptaler'),
                            (u.StyleProgressToken = 'styleProgressToken'),
                            (u.TmanToken = 'tmanToken'),
                            (u.NaturalCover = 'naturalCover'),
                            (u.BpCoin = 'bpcoin'),
                            (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BonusX5 = 'battle_bonus_x5'),
                            (u.CrewBonusX3 = 'crew_bonus_x3'),
                            (u.Vehicles = 'vehicles'),
                            (u.EpicSelectToken = 'epicSelectToken'),
                            (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (u.DeluxeGift = 'deluxe_gift'),
                            (u.BattleBoosterGift = 'battleBooster_gift'),
                            (u.ModernizedDevicesT1Gift = 'modernized_devices_t1_gift'),
                            (u.ModernizedDevicesT2Gift = 'modernized_devices_t2_gift'),
                            (u.ModernizedDevicesT3Gift = 'modernized_devices_t3_gift'),
                            (u.OptionalDevice = 'optionalDevice'),
                            (u.EquipCoin = 'equipCoin'),
                            (u.LootBox = 'lootBox'),
                            (u.BrCoin = 'brcoin'),
                            (u.Attachment = 'attachment'),
                            u
                        );
                    })({}),
                    n = (function (u) {
                        return (
                            (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48'),
                            u
                        );
                    })({}),
                    a = (function (u) {
                        return (
                            (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string'),
                            u
                        );
                    })({}),
                    o = (function (u) {
                        return (
                            (u.ATTACHMENT_RARE = 'rare'),
                            (u.ATTACHMENT_EPIC = 'epic'),
                            (u.ATTACHMENT_LEGENDARY = 'legendary'),
                            (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            u
                        );
                    })({}),
                    i = (function (u) {
                        return ((u.BATTLE_BOOSTER = 'battleBooster'), u);
                    })({}),
                    s = (function (u) {
                        return (
                            (u.ATTACHMENT_RARE = 'rare'),
                            (u.ATTACHMENT_EPIC = 'epic'),
                            (u.ATTACHMENT_LEGENDARY = 'legendary'),
                            (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                            u
                        );
                    })({});
                const l = [r.Attachment];
            },
            4692: (u, e, t) => {
                t.d(e, { c$: () => m, i2: () => C, m9: () => _, p3: () => E, pI: () => D, ry: () => F });
                var r = t(1602),
                    n = t(7363),
                    a = t.n(n),
                    o = t(2486);
                const i = [
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
                    ],
                    s = [o.E4.Gold, o.E4.Credits, o.E4.Crystal, o.E4.FreeXp],
                    l = [o.E4.BattlePassPoints, o.E4.EquipCoin],
                    c = [o.E4.PremiumPlus, o.E4.Premium],
                    E = (u) =>
                        i.includes(u)
                            ? o.$h.MULTI
                            : s.includes(u)
                              ? o.$h.CURRENCY
                              : l.includes(u)
                                ? o.$h.NUMBER
                                : c.includes(u)
                                  ? o.$h.PREMIUM_PLUS
                                  : o.$h.STRING,
                    A = ['engravings', 'backgrounds'],
                    d = ['engraving', 'background'],
                    F = (u, e = o.h2.Small) => {
                        const t = u.name,
                            r = u.type,
                            n = u.value,
                            a = u.icon,
                            i = u.item,
                            s = u.dogTagType,
                            l = ((u) => {
                                switch (u) {
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
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}_${n}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${a}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${a}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const r = A[u];
                                    if (r) {
                                        const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(r),
                                            a = n.$dyn(t);
                                        return a ? `${a}` : `${n.$dyn(d[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, e, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${a}`;
                            case 'attachment':
                                return `R.images.gui.maps.vehicles.attachments.${e}.${a}`;
                            case 'statTracker':
                                return `R.images.gui.maps.vehicles.statTrackers.${e}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    D = (u, e, t) => {
                        const r = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            r,
                            t,
                        );
                    },
                    B = [o.h2.Small, o.h2.Big],
                    m = (u, e) => {
                        if (void 0 === e || !B.includes(u)) return null;
                        switch (e) {
                            case o.kK.BATTLE_BOOSTER:
                            case o.kK.BATTLE_BOOSTER_REPLACE:
                                return o.A2.BATTLE_BOOSTER;
                        }
                    },
                    C = (u) => {
                        if (void 0 === u) return null;
                        switch (u) {
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
                    _ = (u, e) => {
                        if (void 0 === u) return null;
                        switch (e) {
                            case o.$h.MULTI: {
                                const e = Number(u);
                                return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                            }
                            case o.$h.CURRENCY:
                            case o.$h.NUMBER:
                                return a().createElement(r.A, { format: 'integral', value: Number(u) });
                            case o.$h.PREMIUM_PLUS: {
                                const e = Number(u);
                                return isNaN(e) ? u : null;
                            }
                            default:
                                return u;
                        }
                    };
            },
            8656: (u, e, t) => {
                t.d(e, { nS: () => r });
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
                    return new Promise((u) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                u();
                            });
                        });
                    });
                }
            },
            7925: (u, e, t) => {
                t.d(e, { $Q: () => g });
                var r = t(9849),
                    n = t.n(r),
                    a = t(8463),
                    o = t(8978),
                    i = t(7475),
                    s = t(9659),
                    l = t(5239),
                    c = t(4029),
                    E = t(7363),
                    A = t.n(E),
                    d = t(8718),
                    F = t(8823);
                const D = 'disable',
                    B = { pending: !1, offset: 0 },
                    m = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    C = () => {},
                    _ = (u, e) => Math.max(20, u.offsetWidth * e),
                    g = (0, E.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = m, onDrag: r = C }) => {
                        const g = (0, E.useRef)(null),
                            p = (0, E.useRef)(null),
                            f = (0, E.useRef)(null),
                            h = (0, E.useRef)(null),
                            v = (0, E.useRef)(null),
                            w = u.stepTimeout || 100,
                            b = (0, E.useState)(B),
                            S = b[0],
                            R = b[1],
                            T = (0, E.useCallback)(
                                (u) => {
                                    (R(u),
                                        v.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: v.current }));
                                },
                                [r],
                            ),
                            P = () => {
                                const e = h.current,
                                    t = v.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const o = u.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    s = (0, a.u)(0, 1, o / (n - r)),
                                    l = (e.offsetWidth - _(e, i)) * s;
                                ((t.style.transform = `translateX(${0 | l}px)`),
                                    ((u) => {
                                        if (p.current && f.current && h.current && v.current) {
                                            if (0 === u)
                                                return (p.current.classList.add(D), void f.current.classList.remove(D));
                                            if (
                                                ((e = h.current),
                                                (t = v.current),
                                                u - (e.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return (p.current.classList.remove(D), void f.current.classList.add(D));
                                            var e, t;
                                            (p.current.classList.remove(D), f.current.classList.remove(D));
                                        }
                                    })(l));
                            },
                            y = (0, s.z)(() => {
                                ((() => {
                                    const e = v.current,
                                        t = h.current,
                                        r = u.getWrapperSize(),
                                        n = u.getContainerSize();
                                    if (!(n && e && r && t)) return;
                                    const a = Math.min(1, r / n);
                                    ((e.style.width = `${_(t, a)}px`),
                                        (e.style.display = 'flex'),
                                        g.current &&
                                            (1 !== a
                                                ? g.current.classList.add(F.Z.base__active)
                                                : g.current.classList.remove(F.Z.base__active)));
                                })(),
                                    P());
                            });
                        ((0, E.useEffect)(() => (0, o.v)(y)),
                            (0, E.useEffect)(
                                () =>
                                    (0, o.v)(() => {
                                        const e = () => {
                                            P();
                                        };
                                        let t = C;
                                        const r = () => {
                                            (t(), (t = (0, o.v)(y)));
                                        };
                                        return (
                                            u.events.on('recalculateContent', y),
                                            u.events.on('rest', e),
                                            u.events.on('change', e),
                                            u.events.on('resizeHandled', r),
                                            () => {
                                                (t(),
                                                    u.events.off('recalculateContent', y),
                                                    u.events.off('rest', e),
                                                    u.events.off('change', e),
                                                    u.events.off('resizeHandled', r));
                                            }
                                        );
                                    }),
                                [u],
                            ),
                            (0, E.useEffect)(() => {
                                if (!S.pending) return;
                                const e = i.O.client.events.mouse.move(([e, t]) => {
                                        var n;
                                        const a = u.contentRef.current,
                                            o = u.wrapperRef.current;
                                        if (!a || !o) return;
                                        const i = h.current,
                                            s = v.current;
                                        if (!i || !s) return;
                                        if ('inside' === t && e.clientX < 0) return;
                                        const l = e.clientX - S.offset - i.getBoundingClientRect().x,
                                            c = (l / i.offsetWidth) * (null != (n = u.getContainerSize()) ? n : 0);
                                        (u.scrollPosition.start({
                                            scrollPosition: u.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: u.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: l, contentOffset: c }));
                                    }),
                                    t = i.O.client.events.mouse.up(() => {
                                        (e(), T(B));
                                    });
                                return () => {
                                    (e(), t());
                                };
                            }, [u, S.offset, S.pending, r, T]));
                        const x = (0, l.B)((e) => u.applyStepTo(e), w, [u]),
                            O = x[0],
                            N = x[1];
                        (0, E.useEffect)(
                            () => (
                                document.addEventListener('mouseup', N, !0),
                                () => document.removeEventListener('mouseup', N, !0)
                            ),
                            [N],
                        );
                        const k = (u) => {
                            u.target.classList.contains(D) || (0, c.G)('highlight');
                        };
                        return A().createElement(
                            'div',
                            { className: n()(F.Z.base, e.base), ref: g, onWheel: u.handleMouseWheel },
                            A().createElement('div', {
                                className: n()(F.Z.leftButton, e.leftButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(D) ||
                                        0 !== u.button ||
                                        ((0, c.G)('play'), O(d.Nm.Next));
                                },
                                onMouseUp: N,
                                ref: p,
                                onMouseEnter: k,
                            }),
                            A().createElement(
                                'div',
                                {
                                    className: n()(F.Z.track, e.track),
                                    onMouseDown: (e) => {
                                        const r = v.current;
                                        if (r && 0 === e.button)
                                            if (((0, c.G)('play'), e.target === r))
                                                T({ pending: !0, offset: e.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((e) => {
                                                    const r = v.current,
                                                        n = u.contentRef.current;
                                                    if (!r || !n) return;
                                                    const a = t(u);
                                                    u.applyScroll(u.animationScroll.scrollPosition.get() + a * e);
                                                })(e.screenX > r.getBoundingClientRect().x ? d.Nm.Prev : d.Nm.Next);
                                            }
                                    },
                                    ref: h,
                                    onMouseEnter: k,
                                },
                                A().createElement('div', { ref: v, className: n()(F.Z.thumb, e.thumb) }),
                                A().createElement('div', { className: n()(F.Z.rail, e.rail) }),
                            ),
                            A().createElement('div', {
                                className: n()(F.Z.rightButton, e.rightButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(D) ||
                                        0 !== u.button ||
                                        ((0, c.G)('play'), O(d.Nm.Prev));
                                },
                                onMouseUp: N,
                                ref: f,
                                onMouseEnter: k,
                            }),
                        );
                    });
            },
            2893: (u, e, t) => {
                t.d(e, { K: () => c });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    o = t.n(a),
                    i = t(7925),
                    s = t(969),
                    l = t(4109);
                const c = ({
                    children: u,
                    api: e,
                    className: t,
                    barClassNames: r,
                    areaClassName: c,
                    classNames: E,
                    scrollClassName: A,
                    getStepByRailClick: d,
                    onDrag: F,
                }) => {
                    const D = (0, a.useMemo)(() => {
                            const u = r || {};
                            return Object.assign({}, u, { base: n()(l.Z.base, u.base) });
                        }, [r]),
                        B = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                    return o().createElement(
                        'div',
                        { className: n()(l.Z.defaultScroll, t), onWheel: e.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: n()(l.Z.defaultScrollArea, c) },
                            o().createElement(s.Area, { className: A, api: B, classNames: E }, u),
                        ),
                        o().createElement(i.$Q, { getStepByRailClick: d, api: e, onDrag: F, classNames: D }),
                    );
                };
            },
            969: (u, e, t) => {
                (t.r(e),
                    t.d(e, {
                        Area: () => A,
                        Bar: () => s.$Q,
                        DefaultScroll: () => l.K,
                        Direction: () => E.Nm,
                        defaultSettings: () => E.he,
                        useHorizontalScrollApi: () => E.T5,
                    }));
                var r = t(9849),
                    n = t.n(r),
                    a = t(8978),
                    o = t(7363),
                    i = t.n(o),
                    s = t(7925),
                    l = t(2893),
                    c = t(4109),
                    E = t(8718);
                const A = ({ api: u, className: e, classNames: t, children: r }) => (
                    (0, o.useEffect)(() => (0, a.v)(u.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: n()(c.Z.base, e) },
                        i().createElement(
                            'div',
                            {
                                className: n()(c.Z.wrapper, null == t ? void 0 : t.wrapper),
                                onWheel: u.handleMouseWheel,
                                ref: u.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: n()(c.Z.content, null == t ? void 0 : t.content), ref: u.contentRef },
                                r,
                            ),
                        ),
                    )
                );
                ((A.Bar = s.$Q), (A.Default = l.K));
            },
            8718: (u, e, t) => {
                t.d(e, { Nm: () => n.Nm, T5: () => o, he: () => n.he });
                var r = t(7475),
                    n = t(4977);
                const a = {
                        getBounds: (u) => {
                            var e, t;
                            return [
                                0,
                                u.offsetWidth -
                                    (null != (e = null == (t = u.parentElement) ? void 0 : t.offsetWidth) ? e : 0),
                            ];
                        },
                        getContainerSize: (u) => u.offsetWidth,
                        getWrapperSize: (u) => u.offsetWidth,
                        setScrollPosition: (u, e) => {
                            var t;
                            u.style.transform = `translateX(-${0 | (null != (t = e.value.scrollPosition) ? t : 0)}px)`;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                        forceTriggerMouseMove: r.O.view.forceTriggerMouseMove,
                    },
                    o = (0, n.EO)(a);
            },
            5154: (u, e, t) => {
                t.d(e, { $Q: () => p });
                var r = t(9849),
                    n = t.n(r),
                    a = t(8463),
                    o = t(8978),
                    i = t(7475),
                    s = t(9659),
                    l = t(5239),
                    c = t(4029),
                    E = t(7363),
                    A = t.n(E),
                    d = t(4222),
                    F = t(1905);
                const D = 'disable',
                    B = () => {},
                    m = { pending: !1, offset: 0 },
                    C = (u) => {
                        var e;
                        return 0.9 * (null != (e = u.getWrapperSize()) ? e : 0);
                    },
                    _ = (u, e) => {
                        u.contentRef.current && e(u.contentRef.current);
                    },
                    g = (u, e) => Math.max(20, u.offsetHeight * e),
                    p = (0, E.memo)(({ api: u, classNames: e = {}, getStepByRailClick: t = C, onDrag: r = B }) => {
                        const p = (0, E.useRef)(null),
                            f = (0, E.useRef)(null),
                            h = (0, E.useRef)(null),
                            v = (0, E.useRef)(null),
                            w = (0, E.useRef)(null),
                            b = u.stepTimeout || 100,
                            S = (0, E.useState)(m),
                            R = S[0],
                            T = S[1],
                            P = (0, E.useCallback)(
                                (u) => {
                                    (T(u),
                                        w.current &&
                                            r({ type: u.pending ? 'dragStart' : 'dragEnd', thumb: w.current }));
                                },
                                [r],
                            ),
                            y = (0, s.z)(() => {
                                const e = w.current,
                                    t = v.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && n && e && t)) return;
                                const a = Math.min(1, r / n);
                                return (
                                    (e.style.height = `${g(t, a)}px`),
                                    (e.style.display = 'flex'),
                                    p.current &&
                                        (1 !== a
                                            ? p.current.classList.add(F.Z.base__active)
                                            : p.current.classList.remove(F.Z.base__active)),
                                    a
                                );
                            }),
                            x = (0, s.z)(() => {
                                const e = v.current,
                                    t = w.current,
                                    r = u.getWrapperSize(),
                                    n = u.getContainerSize();
                                if (!(r && e && t && n)) return;
                                const o = u.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, r / n),
                                    s = (0, a.u)(0, 1, o / (n - r)),
                                    l = (e.offsetHeight - g(e, i)) * s;
                                ((t.style.transform = `translateY(${0 | l}px)`),
                                    ((u) => {
                                        if (f.current && h.current && v.current && w.current) {
                                            if (0 === Math.round(u))
                                                return (f.current.classList.add(D), void h.current.classList.remove(D));
                                            if (
                                                ((e = v.current),
                                                (t = w.current),
                                                u - (e.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return (f.current.classList.remove(D), void h.current.classList.add(D));
                                            var e, t;
                                            (f.current.classList.remove(D), h.current.classList.remove(D));
                                        }
                                    })(l));
                            }),
                            O = (0, s.z)(() => {
                                _(u, () => {
                                    (y(), x());
                                });
                            });
                        ((0, E.useEffect)(() => (0, o.v)(O)),
                            (0, E.useEffect)(() => {
                                const e = () => {
                                    _(u, () => {
                                        x();
                                    });
                                };
                                let t = B;
                                const r = () => {
                                    (t(), (t = (0, o.v)(O)));
                                };
                                return (
                                    u.events.on('recalculateContent', O),
                                    u.events.on('rest', e),
                                    u.events.on('change', e),
                                    u.events.on('resizeHandled', r),
                                    () => {
                                        (t(),
                                            u.events.off('recalculateContent', O),
                                            u.events.off('rest', e),
                                            u.events.off('change', e),
                                            u.events.off('resizeHandled', r));
                                    }
                                );
                            }, [u]),
                            (0, E.useEffect)(() => {
                                if (!R.pending) return;
                                const e = i.O.client.events.mouse.up(() => {
                                        P(m);
                                    }),
                                    t = i.O.client.events.mouse.move(([e]) => {
                                        _(u, (t) => {
                                            const n = v.current,
                                                a = w.current,
                                                o = u.getContainerSize();
                                            if (!n || !a || !o) return;
                                            const i = e.screenY - R.offset - n.getBoundingClientRect().y,
                                                s = (i / n.offsetHeight) * o;
                                            (u.scrollPosition.start({
                                                scrollPosition: u.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: s }));
                                        });
                                    });
                                return () => {
                                    (e(), t());
                                };
                            }, [u, R.offset, R.pending, r, P]));
                        const N = (0, l.B)((e) => u.applyStepTo(e), b, [u]),
                            k = N[0],
                            M = N[1];
                        (0, E.useEffect)(
                            () => (
                                document.addEventListener('mouseup', M, !0),
                                () => document.removeEventListener('mouseup', M, !0)
                            ),
                            [M],
                        );
                        const L = (u) => {
                            u.target.classList.contains(D) || (0, c.G)('highlight');
                        };
                        return A().createElement(
                            'div',
                            { className: n()(F.Z.base, e.base), ref: p, onWheel: u.handleMouseWheel },
                            A().createElement('div', {
                                className: n()(F.Z.topButton, e.topButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(D) ||
                                        0 !== u.button ||
                                        ((0, c.G)('play'), k(d.Nm.Next));
                                },
                                ref: f,
                                onMouseEnter: L,
                            }),
                            A().createElement(
                                'div',
                                {
                                    className: n()(F.Z.track, e.track),
                                    onMouseDown: (e) => {
                                        const r = w.current;
                                        if (r && 0 === e.button)
                                            if (((0, c.G)('play'), e.target === r))
                                                P({ pending: !0, offset: e.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((e) => {
                                                    w.current &&
                                                        _(u, (r) => {
                                                            if (!r) return;
                                                            const n = t(u),
                                                                a = u.clampPosition(r, r.scrollTop + n * e);
                                                            u.applyScroll(a);
                                                        });
                                                })(e.screenY > r.getBoundingClientRect().y ? d.Nm.Prev : d.Nm.Next);
                                            }
                                    },
                                    ref: v,
                                    onMouseEnter: L,
                                },
                                A().createElement('div', { ref: w, className: n()(F.Z.thumb, e.thumb) }),
                                A().createElement('div', { className: n()(F.Z.rail, e.rail) }),
                            ),
                            A().createElement('div', {
                                className: n()(F.Z.bottomButton, e.bottomButton),
                                onMouseDown: (u) => {
                                    u.target.classList.contains(D) ||
                                        0 !== u.button ||
                                        ((0, c.G)('play'), k(d.Nm.Prev));
                                },
                                onMouseUp: M,
                                ref: h,
                                onMouseEnter: L,
                            }),
                        );
                    });
            },
            4444: (u, e, t) => {
                t.d(e, { K: () => c });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    o = t.n(a),
                    i = t(5154),
                    s = t(3934),
                    l = t(2459);
                const c = ({
                    children: u,
                    api: e,
                    className: t,
                    barClassNames: r,
                    areaClassName: c,
                    scrollClassName: E,
                    scrollClassNames: A,
                    getStepByRailClick: d,
                    onDrag: F,
                }) => {
                    const D = (0, a.useMemo)(() => {
                            const u = r || {};
                            return Object.assign({}, u, { base: n()(l.Z.base, u.base) });
                        }, [r]),
                        B = (0, a.useMemo)(() => Object.assign({}, e, { handleMouseWheel: () => {} }), [e]);
                    return o().createElement(
                        'div',
                        { className: n()(l.Z.defaultScroll, t), onWheel: e.handleMouseWheel },
                        o().createElement(
                            'div',
                            { className: n()(l.Z.area, c) },
                            o().createElement(s.Area, { className: E, classNames: A, api: B }, u),
                        ),
                        o().createElement(i.$Q, { getStepByRailClick: d, api: e, onDrag: F, classNames: D }),
                    );
                };
            },
            3934: (u, e, t) => {
                (t.r(e),
                    t.d(e, { Area: () => A, Bar: () => s.$Q, Default: () => l.K, useVerticalScrollApi: () => c.c4 }));
                var r = t(9849),
                    n = t.n(r),
                    a = t(8978),
                    o = t(7363),
                    i = t.n(o),
                    s = t(5154),
                    l = t(4444),
                    c = t(4222),
                    E = t(2459);
                const A = ({ className: u, classNames: e, children: t, api: r }) => (
                    (0, o.useEffect)(() => (0, a.v)(r.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: n()(E.Z.base, u), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: n()(E.Z.content, null == e ? void 0 : e.content), ref: r.contentRef },
                            t,
                        ),
                    )
                );
                A.Default = l.K;
            },
            4222: (u, e, t) => {
                t.d(e, { Nm: () => r.Nm, c4: () => a });
                var r = t(4977);
                const n = {
                        getBounds: (u) => [0, u.scrollHeight - u.offsetHeight],
                        getContainerSize: (u) => u.scrollHeight,
                        getWrapperSize: (u) => u.offsetHeight,
                        setScrollPosition: (u, e) => {
                            u.scrollTop = e.value.scrollPosition;
                        },
                        getDirection: (u) => (u.deltaY > 1 ? r.Nm.Next : r.Nm.Prev),
                    },
                    a = (0, r.EO)(n);
            },
            4977: (u, e, t) => {
                t.d(e, { EO: () => d, Nm: () => E, he: () => A });
                var r = t(8463),
                    n = t(8978),
                    a = t(7845),
                    o = t(603),
                    i = t(9659),
                    s = t(3024),
                    l = t(7363),
                    c = t(1374);
                let E = (function (u) {
                    return ((u[(u.Next = -1)] = 'Next'), (u[(u.Prev = 1)] = 'Prev'), u);
                })({});
                const A = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    d = ({
                        getContainerSize: u,
                        getBounds: e,
                        setScrollPosition: t,
                        getDirection: E,
                        getWrapperSize: d,
                        forceTriggerMouseMove: F,
                    }) => {
                        const D = (u, t) => {
                            const n = e(u),
                                a = n[0],
                                o = n[1];
                            return o <= a ? 0 : (0, r.u)(a, o, t);
                        };
                        return (r = {}) => {
                            const B = r.settings,
                                m = void 0 === B ? A : B,
                                C = (0, l.useRef)(null),
                                _ = (0, l.useRef)(null),
                                g = (0, l.useRef)(!1),
                                p = (0, o.q)(),
                                f = (0, s.f)(
                                    () => {
                                        F && F();
                                    },
                                    [],
                                    150,
                                ),
                                h = (0, c.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (u) => {
                                        const e = C.current;
                                        e && (t(e, u), p.trigger('change', u), F && g.current && f());
                                    },
                                    onRest: (u) => p.trigger('rest', u),
                                    onStart: (u) => p.trigger('start', u),
                                    onPause: (u) => p.trigger('pause', u),
                                })),
                                v = h[0],
                                w = h[1],
                                b = (0, l.useCallback)(
                                    (u, e, t) => {
                                        var r;
                                        const n = v.scrollPosition.get(),
                                            a = (null != (r = v.scrollPosition.goal) ? r : 0) - n;
                                        return D(u, e * t + a + n);
                                    },
                                    [v.scrollPosition],
                                ),
                                S = (0, l.useCallback)(
                                    (u, { immediate: e = !1, reset: t = !0 } = {}) => {
                                        const r = C.current;
                                        r &&
                                            w.start({
                                                scrollPosition: D(r, u),
                                                immediate: e,
                                                reset: t,
                                                config: m.animationConfig,
                                                from: { scrollPosition: D(r, v.scrollPosition.get()) },
                                            });
                                    },
                                    [w, m.animationConfig, v.scrollPosition],
                                ),
                                R = (0, l.useCallback)(
                                    (u) => {
                                        const e = C.current,
                                            t = _.current;
                                        if (!e || !t) return;
                                        const r = ((u, e) => {
                                                switch (e.type) {
                                                    case 'proportional':
                                                        return d(u) / e.factor;
                                                    case 'fixed':
                                                        return e.value;
                                                }
                                            })(t, m.step),
                                            n = b(e, u, r);
                                        S(n);
                                    },
                                    [S, b, m.step],
                                ),
                                T = (0, l.useCallback)(
                                    (u) => {
                                        (0 !== u.deltaY && R(E(u)),
                                            C.current && p.trigger('mouseWheel', u, v.scrollPosition, e(C.current)));
                                    },
                                    [v.scrollPosition, R, p],
                                ),
                                P = (0, a.M)(
                                    () =>
                                        (0, n.v)(() => {
                                            const u = C.current;
                                            u &&
                                                (S(D(u, v.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [S, v.scrollPosition.goal],
                                ),
                                y = (0, i.z)(() => {
                                    const u = C.current;
                                    if (!u) return;
                                    const e = D(u, v.scrollPosition.goal);
                                    (e !== v.scrollPosition.goal && S(e, { immediate: !0 }),
                                        p.trigger('recalculateContent'));
                                });
                            ((0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', P),
                                    () => {
                                        window.removeEventListener('resize', P);
                                    }
                                ),
                                [P],
                            ),
                                (0, l.useEffect)(() => {
                                    const u = C.current;
                                    if (!u || !F) return;
                                    const e = () => {
                                            g.current = !0;
                                        },
                                        t = () => {
                                            g.current = !1;
                                        };
                                    return (
                                        u.addEventListener('mouseenter', e),
                                        u.addEventListener('mouseleave', t),
                                        () => {
                                            (u.removeEventListener('mouseenter', e),
                                                u.removeEventListener('mouseleave', t));
                                        }
                                    );
                                }, [C]));
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? d(_.current) : void 0),
                                    getContainerSize: () => (C.current ? u(C.current) : void 0),
                                    getBounds: () =>
                                        C.current
                                            ? e(C.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: m.step.clampedArrowStepTimeout,
                                    clampPosition: D,
                                    handleMouseWheel: T,
                                    applyScroll: S,
                                    applyStepTo: R,
                                    contentRef: C,
                                    wrapperRef: _,
                                    scrollPosition: w,
                                    animationScroll: v,
                                    recalculateContent: y,
                                    events: { on: p.on, off: p.off },
                                }),
                                [v.scrollPosition, S, R, p.off, p.on, y, T, w, m.step.clampedArrowStepTimeout],
                            );
                        };
                    };
            },
            2884: (u, e, t) => {
                t.d(e, { X: () => n });
                var r = t(969);
                const n = { Vertical: t(3934), Horizontal: r };
            },
            941: (u, e, t) => {
                t.d(e, { t: () => s });
                var r = t(7363),
                    n = t.n(r),
                    a = t(2278);
                const o = ['children'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const s = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t = {};
                            for (var r in u)
                                if ({}.hasOwnProperty.call(u, r)) {
                                    if (-1 !== e.indexOf(r)) continue;
                                    t[r] = u[r];
                                }
                            return t;
                        })(u, o);
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
                        e,
                    );
                };
            },
            1672: (u, e, t) => {
                t.d(e, { l: () => l });
                var r = t(7363),
                    n = t.n(r),
                    a = t(941),
                    o = t(6485),
                    i = t(2278);
                function s() {
                    return (
                        (s = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        s.apply(null, arguments)
                    );
                }
                const l = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const r = n().createElement('div', { className: t }, u);
                    if (e.header || e.body) return n().createElement(o.i, e, r);
                    const l = e.contentId;
                    return l ? n().createElement(i.u, s({}, e, { contentId: l }), r) : n().createElement(a.t, e, r);
                };
            },
            6485: (u, e, t) => {
                t.d(e, { i: () => l });
                var r = t(2278),
                    n = t(7363),
                    a = t.n(n);
                const o = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function i() {
                    return (
                        (i = Object.assign
                            ? Object.assign.bind()
                            : function (u) {
                                  for (var e = 1; e < arguments.length; e++) {
                                      var t = arguments[e];
                                      for (var r in t) ({}).hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                  }
                                  return u;
                              }),
                        i.apply(null, arguments)
                    );
                }
                const s = R.views.common.tooltip_window.simple_tooltip_content,
                    l = (u) => {
                        let e = u.children,
                            t = u.body,
                            l = u.header,
                            c = u.note,
                            E = u.alert,
                            A = u.args,
                            d = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var r in u)
                                    if ({}.hasOwnProperty.call(u, r)) {
                                        if (-1 !== e.indexOf(r)) continue;
                                        t[r] = u[r];
                                    }
                                return t;
                            })(u, o);
                        const F = (0, n.useMemo)(() => {
                            const u = Object.assign({}, A, { body: t, header: l, note: c, alert: E });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [E, t, l, c, A]);
                        return a().createElement(
                            r.u,
                            i(
                                {
                                    contentId:
                                        ((D = null == A ? void 0 : A.hasHtmlContent),
                                        D ? s.SimpleTooltipHtmlContent('resId') : s.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                d,
                            ),
                            e,
                        );
                        var D;
                    };
            },
            2278: (u, e, t) => {
                t.d(e, { u: () => l });
                var r = t(3485),
                    n = t(828),
                    a = t(7363);
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
                function i(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const t = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                t.number = e;
                                break;
                            case 'boolean':
                                t.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = e.toString();
                        }
                        return t;
                    });
                }
                const s = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: n.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    l = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            l = u.onMouseEnter,
                            c = u.onMouseLeave,
                            E = u.onMouseDown,
                            A = u.onClick,
                            d = u.ignoreShowDelay,
                            F = void 0 !== d && d,
                            D = u.ignoreMouseClick,
                            B = void 0 !== D && D,
                            m = u.decoratorId,
                            C = void 0 === m ? 0 : m,
                            _ = u.isEnabled,
                            g = void 0 === _ || _,
                            p = u.targetId,
                            f = void 0 === p ? 0 : p,
                            h = u.onShow,
                            v = u.onHide,
                            w = (function (u, e) {
                                if (null == u) return {};
                                var t = {};
                                for (var r in u)
                                    if ({}.hasOwnProperty.call(u, r)) {
                                        if (-1 !== e.indexOf(r)) continue;
                                        t[r] = u[r];
                                    }
                                return t;
                            })(u, o);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, a.useMemo)(() => f || (0, r.F)().resId, [f]),
                            R = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (s(t, C, { isMouseEvent: !0, on: !0, arguments: i(n) }, S),
                                    h && h(),
                                    (b.current.isVisible = !0));
                            }, [t, C, n, S, h]),
                            T = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const u = b.current.timeoutId;
                                    (u > 0 && (clearTimeout(u), (b.current.timeoutId = 0)),
                                        s(t, C, { on: !1 }, S),
                                        b.current.isVisible && v && v(),
                                        (b.current.isVisible = !1));
                                }
                            }, [t, C, S, v]),
                            P = (0, a.useCallback)((u) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(b.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        ((0, a.useEffect)(() => {
                            const u = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    (document.removeEventListener('wheel', P, { capture: !0 }),
                                        u && window.clearTimeout(u));
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
                                        (window.removeEventListener('mouseleave', T), T());
                                    }
                                ),
                                [T],
                            ));
                        return g
                            ? (0, a.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      (clearTimeout(b.current.timeoutId),
                                                      (b.current.timeoutId = window.setTimeout(R, F ? 100 : 400)),
                                                      l && l(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              (T(), null == c || c(e), null == u || u(e));
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              (!1 === B && T(), null == A || A(e), null == u || u(e));
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              (!1 === B && T(), null == E || E(e), null == u || u(e));
                                          })(e.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : e;
                        var y;
                    };
            },
            8463: (u, e, t) => {
                t.d(e, { u: () => r });
                const r = (u, e, t) => (t < u ? u : t > e ? e : t);
            },
            8978: (u, e, t) => {
                t.d(e, { v: () => r });
                const r = (u) => {
                    let e,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                ((t = null), (e = u()));
                            });
                        })),
                        () => {
                            ('function' == typeof e && e(), null !== t && cancelAnimationFrame(t));
                        }
                    );
                };
            },
            9352: (u, e, t) => {
                t.d(e, { U: () => i });
                var r = t(7475);
                function n(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return a(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? a(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const o = (u) => (0 === u ? window : window.subViews.get(u));
                function i({ initializer: u = !0, rootId: e = 0, getRoot: t = o, context: a = 'model' } = {}) {
                    const i = new Map();
                    function s(u, e = 0) {
                        viewEnv.removeDataChangedCallback(u, e)
                            ? i.delete(u)
                            : console.error("Can't remove callback by id:", u);
                    }
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (u, e, t) => {
                            t.forEach((e) => {
                                const t = i.get(e);
                                void 0 !== t && t(u);
                            });
                        });
                    });
                    const l = (u) => {
                        const r = t(e),
                            n = a.split('.').reduce((u, e) => u[e], r);
                        return 'string' != typeof u || 0 === u.length
                            ? n
                            : u.split('.').reduce((u, e) => {
                                  const t = u[e];
                                  return 'function' == typeof t ? t.bind(u) : t;
                              }, n);
                    };
                    return {
                        subscribe: (t, n) => {
                            const o = 'string' == typeof n ? `${a}.${n}` : a,
                                s = r.O.view.addModelObserver(o, e, !0);
                            return (i.set(s, t), u && t(l(n)), s);
                        },
                        readByPath: l,
                        createCallback: (u, e) => {
                            const t = l(e);
                            return (...e) => {
                                t(u(...e));
                            };
                        },
                        createCallbackNoArgs: (u) => {
                            const e = l(u);
                            return () => {
                                e();
                            };
                        },
                        dispose: function () {
                            for (var u, t = n(i.keys()); !(u = t()).done; ) {
                                s(u.value, e);
                            }
                        },
                        unsubscribe: s,
                    };
                }
            },
            5090: (u, e, t) => {
                t.d(e, { q3: () => s });
                var r = t(9723),
                    n = t(3305),
                    a = t(7363),
                    o = t.n(a),
                    i = t(9352);
                const s = () => (u, e) => {
                    const t = (0, a.createContext)({});
                    return [
                        function ({ mode: s = 'real', options: l, children: c, mocks: E }) {
                            const A = (0, a.useRef)([]),
                                d = (t, a, o) => {
                                    var s;
                                    const l = i.U(a),
                                        c =
                                            'real' === t
                                                ? l
                                                : Object.assign({}, l, {
                                                      readByPath:
                                                          null != (s = null == o ? void 0 : o.getter) ? s : () => {},
                                                  }),
                                        E = (u) =>
                                            'mocks' === t ? (null == o ? void 0 : o.getter(u)) : c.readByPath(u),
                                        d = (u) => A.current.push(u),
                                        F = u({
                                            mode: t,
                                            readByPath: E,
                                            externalModel: c,
                                            observableModel: {
                                                dict: (u) => {
                                                    const e = E(u),
                                                        a = n.LO.box(e, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => a.set(u)),
                                                                u,
                                                            ),
                                                        a
                                                    );
                                                },
                                                array: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        o = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => o.set(u)),
                                                                u,
                                                            ),
                                                        o
                                                    );
                                                },
                                                object: (u, e) => {
                                                    const a = null != e ? e : E(u),
                                                        o = n.LO.box(a, { equals: r.jv });
                                                    return (
                                                        'real' === t &&
                                                            c.subscribe(
                                                                (0, n.aD)((u) => o.set(u)),
                                                                u,
                                                            ),
                                                        o
                                                    );
                                                },
                                                primitives: (u, e) => {
                                                    const r = E(e);
                                                    if (Array.isArray(u)) {
                                                        const a = u.reduce(
                                                            (u, e) => ((u[e] = n.LO.box(r[e], {})), u),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((e) => {
                                                                        u.forEach((u) => {
                                                                            a[u].set(e[u]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    }
                                                    {
                                                        const a = u,
                                                            o = Object.entries(a),
                                                            i = o.reduce(
                                                                (u, [e, t]) => ((u[t] = n.LO.box(r[e], {})), u),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === t &&
                                                                c.subscribe(
                                                                    (0, n.aD)((u) => {
                                                                        o.forEach(([e, t]) => {
                                                                            i[t].set(u[e]);
                                                                        });
                                                                    }),
                                                                    e,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: d,
                                        }),
                                        D = { mode: t, model: F, externalModel: c, cleanup: d };
                                    return {
                                        model: F,
                                        controls: 'mocks' === t && o ? o.controls(D) : e(D),
                                        externalModel: c,
                                        mode: t,
                                    };
                                },
                                F = (0, a.useRef)(!1),
                                D = (0, a.useState)(s),
                                B = D[0],
                                m = D[1],
                                C = (0, a.useState)(() => d(s, l, E)),
                                _ = C[0],
                                g = C[1];
                            return (
                                (0, a.useEffect)(() => {
                                    F.current ? g(d(B, l, E)) : (F.current = !0);
                                }, [E, B, l]),
                                (0, a.useEffect)(() => {
                                    m(s);
                                }, [s]),
                                (0, a.useEffect)(
                                    () => () => {
                                        (_.externalModel.dispose(), A.current.forEach((u) => u()));
                                    },
                                    [_],
                                ),
                                o().createElement(t.Provider, { value: _ }, c)
                            );
                        },
                        () => (0, a.useContext)(t),
                    ];
                };
            },
            873: (u, e, t) => {
                (t(6758), t(828));
                var r = t(6609);
                (Date.now(), r.Ew.getRegionalDateTime, r.Ew.getFormattedDateTime);
            },
            5034: (u, e, t) => {
                (t.r(e),
                    t.d(e, {
                        mouse: () => E,
                        off: () => l,
                        on: () => s,
                        onMinimize: () => i,
                        onResize: () => a,
                        onScaleUpdated: () => o,
                    }));
                var r = t(8277),
                    n = t(1708);
                const a = (0, r.E)('clientResized'),
                    o = (0, r.E)('self.onScaleUpdated'),
                    i = (0, r.E)('clientMinimized'),
                    s = (u, e) => engine.on(u, e),
                    l = (u, e) => engine.off(u, e),
                    c = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const E = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${e}`,
                                        o = c[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, i),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(a, i),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            ((u.enabled = !1), r());
                        },
                        enable() {
                            ((u.enabled = !0), r());
                        },
                        enableOutside() {
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            3157: (u, e, t) => {
                (t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => i,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    }));
                var r = t(5034),
                    n = t(9703);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1708: (u, e, t) => {
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            9703: (u, e, t) => {
                function r(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function n(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => n, G: () => r });
            },
            8277: (u, e, t) => {
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            7475: (u, e, t) => {
                t.d(e, { O: () => o });
                var r = t(3157),
                    n = t(8133),
                    a = t(3925);
                const o = { view: t(7553), client: r, sound: a.ZP, intl: n.N };
            },
            8133: (u, e, t) => {
                t.d(e, { N: () => r });
                const r = {
                    toUpperCase: (u) => window.systemLocale.toUpperCase(u),
                    toLowerCase: (u) => window.systemLocale.toLowerCase(u),
                };
            },
            3925: (u, e, t) => {
                t.d(e, { ZP: () => o });
                var r = t(3157);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(n).reduce((u, e) => ((u[e] = () => (0, r.playSound)(n[e])), u), {}),
                    o = { play: Object.assign({}, a, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            5544: (u, e, t) => {
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                (t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r }));
            },
            3163: (u, e, t) => {
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            7576: (u, e, t) => {
                t.d(e, { U: () => n });
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
            7553: (u, e, t) => {
                (t.r(e),
                    t.d(e, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => l,
                        arabic2roman: () => R,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => P,
                        enableFullScreenModeSupported: () => O,
                        events: () => o.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => b,
                        getExternalPaddingsRem: () => T,
                        getFontNames: () => S,
                        getScale: () => C,
                        getSize: () => F,
                        getViewGlobalPosition: () => B,
                        initExternalPaddings: () => N,
                        isEventHandled: () => v,
                        isFocused: () => f,
                        pxToRem: () => _,
                        remToPx: () => g,
                        resize: () => D,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    }));
                var r = t(1308),
                    n = t(5544),
                    a = t(3163),
                    o = t(7576),
                    i = t(2319);
                const s = 15;
                function l(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, s);
                }
                function E(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function A(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function d(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, s);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function D(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function B(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: g(e.x), y: g(e.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function _(u) {
                    return viewEnv.pxToRem(u);
                }
                function g(u) {
                    return viewEnv.remToPx(u);
                }
                function p(u, e) {
                    viewEnv.setAnimateWindow(u, e);
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
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const S = (() => {
                        let u = [];
                        return () => (0 === u.length && (u = Object.keys(viewEnv.getFontsConfig())), u);
                    })(),
                    R = r.cg;
                function T() {
                    return viewEnv.getExternalPaddingsRem();
                }
                const P = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
                        {},
                    ),
                    y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : o.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
                function O() {
                    viewEnv.setFullscreenModeSupported(!0);
                }
                function N(u) {
                    function e() {
                        const e = viewEnv.getExternalPaddingsRem(),
                            t = e.top,
                            r = e.right,
                            n = e.bottom,
                            a = e.left;
                        (u.style.setProperty('--external-padding-top', `${t}rem`),
                            u.style.setProperty('--external-padding-right', `${r}rem`),
                            u.style.setProperty('--external-padding-bottom', `${n}rem`),
                            u.style.setProperty('--external-padding-left', `${a}rem`));
                    }
                    (e(), engine.on('self.onPaddingsUpdated', () => e()));
                }
            },
            2319: (u, e, t) => {
                t.d(e, { qP: () => l });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    o = 32,
                    i = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var r in u)
                                        if ({}.hasOwnProperty.call(u, r)) {
                                            if (-1 !== e.indexOf(r)) continue;
                                            t[r] = u[r];
                                        }
                                    return t;
                                })(e, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([u, e]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: t, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: t, name: u, bool: e };
                                                      default:
                                                          return { __Type: t, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    l = {
                        close(u) {
                            s('popover' === u ? n : o);
                        },
                        minimize() {
                            s(i);
                        },
                        move(u) {
                            s(a, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            9723: (u, e, t) => {
                function r() {}
                t.d(e, { ZT: () => r, jv: () => n });
                function n() {
                    return !1;
                }
                console.log;
            },
            3485: (u, e, t) => {
                t.d(e, { F: () => r });
                const r = (u = 1) => {
                    const e = new Error().stack;
                    let t,
                        r = R.invalid('resId'),
                        n = '';
                    var a;
                    e &&
                        ((n = (null == (a = e.match(/(coui:\/\/[^\s]+\.js)/)) ? void 0 : a[0]) || ''),
                        (t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                        window.__feature &&
                            window.__feature !== t &&
                            window.subViews[t] &&
                            (r = window.subViews[t].id));
                    return { callerUrl: n, caller: t, stack: e, resId: r };
                };
            },
            7845: (u, e, t) => {
                t.d(e, { M: () => n });
                var r = t(7363);
                const n = (u, e = []) => {
                    const t = (0, r.useRef)(),
                        n = (0, r.useCallback)((...e) => {
                            (t.current && t.current(), (t.current = u(...e)));
                        }, e);
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
            603: (u, e, t) => {
                t.d(e, { q: () => o });
                var r = t(7363);
                function n(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (u) {
                                if ('string' == typeof u) return a(u, e);
                                var t = {}.toString.call(u).slice(8, -1);
                                return (
                                    'Object' === t && u.constructor && (t = u.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(u)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? a(u, e)
                                          : void 0
                                );
                            }
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var r = 0;
                        return function () {
                            return r >= u.length ? { done: !0 } : { done: !1, value: u[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function a(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, r = Array(e); t < e; t++) r[t] = u[t];
                    return r;
                }
                const o = () => {
                    const u = (0, r.useMemo)(() => ({}), []),
                        e = (e) => (u[e] || (u[e] = new Map()), u[e]),
                        t = (u, t) => {
                            e(u).set(t, t);
                        },
                        a = (u, t) => {
                            e(u).delete(t);
                        },
                        o = (u, ...t) => {
                            for (var r, a = n(e(u).values()); !(r = a()).done; ) {
                                (0, r.value)(...t);
                            }
                        };
                    return (0, r.useMemo)(() => ({ on: t, off: a, trigger: o }), []);
                };
            },
            9659: (u, e, t) => {
                t.d(e, { z: () => a });
                var r = t(7363);
                const n = [];
                function a(u) {
                    const e = (0, r.useRef)(u);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            e.current = u;
                        }),
                        (0, r.useCallback)((...u) => (0, e.current)(...u), n)
                    );
                }
            },
            8925: (u, e, t) => {
                t.d(e, { GS: () => l, cJ: () => o });
                var r = t(7363),
                    n = t(5579),
                    a = t(1958);
                let o = (function (u) {
                        return (
                            (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'),
                            u
                        );
                    })({}),
                    i = (function (u) {
                        return (
                            (u[(u.ExtraSmall = a.j.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.width)] = 'Small'),
                            (u[(u.Medium = a.j.medium.width)] = 'Medium'),
                            (u[(u.Large = a.j.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.width)] = 'ExtraLarge'),
                            u
                        );
                    })({}),
                    s = (function (u) {
                        return (
                            (u[(u.ExtraSmall = a.j.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = a.j.small.height)] = 'Small'),
                            (u[(u.Medium = a.j.medium.height)] = 'Medium'),
                            (u[(u.Large = a.j.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = a.j.extraLarge.height)] = 'ExtraLarge'),
                            u
                        );
                    })({});
                const l = () => {
                    const u = (0, r.useContext)(n.YN),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return o.ExtraLarge;
                                case u.large:
                                    return o.Large;
                                case u.medium:
                                    return o.Medium;
                                case u.small:
                                    return o.Small;
                                case u.extraSmall:
                                    return o.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), o.ExtraSmall);
                            }
                        })(u),
                        l = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return i.ExtraLarge;
                                case u.largeWidth:
                                    return i.Large;
                                case u.mediumWidth:
                                    return i.Medium;
                                case u.smallWidth:
                                    return i.Small;
                                case u.extraSmallWidth:
                                    return i.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), i.ExtraSmall);
                            }
                        })(u),
                        c = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return s.ExtraLarge;
                                case u.largeHeight:
                                    return s.Large;
                                case u.mediumHeight:
                                    return s.Medium;
                                case u.smallHeight:
                                    return s.Small;
                                case u.extraSmallHeight:
                                    return s.ExtraSmall;
                                default:
                                    return (console.error('Unreachable media context resolution'), s.ExtraSmall);
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: l, mediaHeight: c, remScreenWidth: e, remScreenHeight: t };
                };
            },
            5239: (u, e, t) => {
                t.d(e, { B: () => n });
                var r = t(7363);
                function n(u, e, t = []) {
                    const n = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => {
                            (window.clearInterval(n.current), (n.current = 0));
                        }, t || []);
                    (0, r.useEffect)(() => a, [a]);
                    const o = (null != t ? t : []).concat([e]);
                    return [
                        (0, r.useCallback)((t) => {
                            (0 !== n.current && a(), (n.current = window.setInterval(() => u(t, !0), e)), u(t, !1));
                        }, o),
                        a,
                    ];
                }
            },
            3024: (u, e, t) => {
                t.d(e, { f: () => a });
                var r = t(8658),
                    n = t(7363);
                function a(u, e, t) {
                    const a = (0, n.useMemo)(() => (0, r.Z)(t, u), e);
                    return ((0, n.useEffect)(() => a.cancel, [a]), a);
                }
            },
            4020: (u, e, t) => {
                t.d(e, { n: () => r });
                let r = (function (u) {
                    return (
                        (u[(u.NONE = -1)] = 'NONE'),
                        (u[(u.ALT = 165)] = 'ALT'),
                        (u[(u.ENTER = 13)] = 'ENTER'),
                        (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                        (u[(u.SPACE = 32)] = 'SPACE'),
                        (u[(u.END = 35)] = 'END'),
                        (u[(u.HOME = 36)] = 'HOME'),
                        (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                        (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                        (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                        (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                        (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                        (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                        (u[(u.PLUS = 187)] = 'PLUS'),
                        (u[(u.MINUS = 189)] = 'MINUS'),
                        (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                        (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                        (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                        (u[(u.DELETE = 46)] = 'DELETE'),
                        (u[(u.TAB = 9)] = 'TAB'),
                        (u[(u.KEY_N = 78)] = 'KEY_N'),
                        (u[(u.KEY_1 = 49)] = 'KEY_1'),
                        (u[(u.KEY_2 = 50)] = 'KEY_2'),
                        (u[(u.KEY_3 = 51)] = 'KEY_3'),
                        (u[(u.KEY_4 = 52)] = 'KEY_4'),
                        (u[(u.KEY_5 = 53)] = 'KEY_5'),
                        (u[(u.KEY_6 = 54)] = 'KEY_6'),
                        (u[(u.KEY_7 = 55)] = 'KEY_7'),
                        (u[(u.KEY_8 = 56)] = 'KEY_8'),
                        (u[(u.KEY_9 = 57)] = 'KEY_9'),
                        u
                    );
                })({});
            },
            8739: (u, e, t) => {
                t.d(e, { UI: () => r });
                function r(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, r) => e(null == u ? void 0 : u.value, t, r));
                }
            },
            1308: (u, e, t) => {
                t.d(e, { cg: () => a });
                const r = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    n = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function a(u) {
                    let e = '';
                    for (let t = n.length - 1; t >= 0; t--) for (; u >= n[t]; ) ((e += r[t]), (u -= n[t]));
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
            },
            4029: (u, e, t) => {
                function r(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                t.d(e, { G: () => r });
            },
            6758: (u, e, t) => {
                t.d(e, { Uw: () => d, WU: () => a, v2: () => n });
                var r = t(8354);
                let n = (function (u) {
                    return ((u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right'), u);
                })({});
                function a(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                const o = (u) => u.replace(/&nbsp;/g, ' '),
                    i = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    s = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    l = (u, e, t = n.left) => u.split(e).reduce(t === n.left ? i : s, []),
                    c = (() => {
                        const u = new RegExp(
                            [
                                /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu,
                                /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                                /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu,
                            ]
                                .map((u) => u.source)
                                .join('|'),
                            'gum',
                        );
                        return (e) =>
                            e
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(u);
                    })(),
                    E = ['zh_cn', 'zh_sg', 'zh_tw'],
                    A = (u, e = n.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (E.includes(t)) return c(u);
                        if ('ja' === t) {
                            return (0, r.D4)()
                                .parse(u)
                                .map((u) => o(u));
                        }
                        return ((u, e = n.left) => {
                            let t = [];
                            const r =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = o(u);
                            return (l(a, /( )/, e).forEach((u) => (t = t.concat(l(u, r, n.left)))), t);
                        })(u, e);
                    },
                    d = (u, e, t) => u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : A(u, e)));
            },
            8658: (u, e, t) => {
                function r(u, e, t, r) {
                    let n,
                        a = !1,
                        o = 0;
                    function i() {
                        n && clearTimeout(n);
                    }
                    function s(...s) {
                        const l = this,
                            c = Date.now() - o;
                        function E() {
                            ((o = Date.now()), t.apply(l, s));
                        }
                        a ||
                            (r && !n && E(),
                            i(),
                            void 0 === r && c > u
                                ? E()
                                : !0 !== e &&
                                  (n = setTimeout(
                                      r
                                          ? function () {
                                                n = void 0;
                                            }
                                          : E,
                                      void 0 === r ? u - c : u,
                                  )));
                    }
                    return (
                        'boolean' != typeof e && ((r = t), (t = e), (e = void 0)),
                        (s.cancel = function () {
                            (i(), (a = !0));
                        }),
                        s
                    );
                }
                t.d(e, { Z: () => r });
            },
            8973: (u, e, t) => {
                t.d(e, { Z: () => a });
                var r = t(7475);
                class n {
                    constructor() {
                        ((this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(u, t, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", u),
                            a
                        );
                    }
                    removeCallback(u, e = 0) {
                        let t = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((t = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            t || console.error("Can't remove callback by id:", u),
                            t
                        );
                    }
                    _emmitDataChanged(u, e, t) {
                        t.forEach((t) => {
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
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
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    }));
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                (this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers());
                            }));
                    }
                    subscribe(u) {
                        (this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data));
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        (this.dataTracker.clear(), this.callbacks.clear());
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            828: (u, e, t) => {
                t.d(e, { B3: () => s, Z5: () => o.Z5, B0: () => i, ry: () => m, Eu: () => C });
                class r {
                    constructor() {
                        ((this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            }));
                    }
                    static get instance() {
                        return (r.__instance || (r.__instance = new r()), r.__instance);
                    }
                    register(u, e) {
                        (this.addMouseListener(), this.entries.push({ container: u, callback: e }));
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        ((this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                var o = t(6609);
                let i = (function (u) {
                    return (
                        (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                        (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                        (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                        (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (u[(u.MOVE = 16)] = 'MOVE'),
                        (u[(u.CLOSE = 32)] = 'CLOSE'),
                        (u[(u.MINIMIZE = 64)] = 'MINIMIZE'),
                        u
                    );
                })({});
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(4020),
                    d = t(7475);
                const F = ['args'];
                function D(u, e, t, r, n, a, o) {
                    try {
                        var i = u[a](o),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(r, n);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._ContentLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        t = arguments;
                                    return new Promise(function (r, n) {
                                        var a = u.apply(e, t);
                                        function o(u) {
                                            D(a, r, n, o, i, 'next', u);
                                        }
                                        function i(u) {
                                            D(a, r, n, o, i, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    _ = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t = {};
                                    for (var r in u)
                                        if ({}.hasOwnProperty.call(u, r)) {
                                            if (-1 !== e.indexOf(r)) continue;
                                            t[r] = u[r];
                                        }
                                    return t;
                                })(e, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
                                                  const t = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          t.number = e;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = e;
                                                          break;
                                                      default:
                                                          t.string = e.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    g = () => _(i.CLOSE),
                    p = (u, e) => {
                        u.keyCode === A.n.ESCAPE && e();
                    };
                var f = t(5533);
                const h = n.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: i,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => _(i.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => _(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            _(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, n = R.invalid('resId'), a) => {
                            const o = d.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                A = s.height,
                                F = {
                                    x: d.O.view.pxToRem(l) + o.x,
                                    y: d.O.view.pxToRem(c) + o.y,
                                    width: d.O.view.pxToRem(E),
                                    height: d.O.view.pxToRem(A),
                                };
                            _(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e),
                                () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, g);
                        },
                        handleViewEvent: _,
                        onBindingsReady: m,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            6609: (u, e, t) => {
                t.d(e, { Ew: () => a, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e, t = 2) => systemLocale.getRealFormat(u, e, t),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            8230: (u, e, t) => {
                var r = t(8656),
                    n = t(4020),
                    a = t(828),
                    o = t(2041),
                    i = t(7363),
                    s = t.n(i),
                    l = t(1705),
                    c = t(9994),
                    E = t(1158),
                    A = t(8862),
                    d = t(9849),
                    F = t.n(d),
                    D = t(2714),
                    B = t(1820),
                    m = t(3287),
                    C = t(8024);
                const _ = 'Content_base_ae5c4',
                    g = 'Content_mainContent_a092c',
                    p = 'Content_base__noScroll_ad6fe',
                    f = R.strings.battle_pass.battlePassBuyView.reward,
                    h = (0, o.Pi)(() => {
                        const u = (0, C.t)().model,
                            e = u.levels.get(),
                            t = e.fromLevel,
                            r = e.toLevel,
                            n = e.isPurchaseWithLevels,
                            a = u.computes.nowRewards(),
                            o = u.computes.futureRewards(),
                            l = ((u, e, t) =>
                                t
                                    ? { description: f.descriptionNowRewardsCheckbox() }
                                    : u < e
                                      ? { description: f.descriptionNowRewards(), completedSteps: `${u} - ${e}` }
                                      : { description: f.descriptionNowRewardsSingle(), completedSteps: `${e}` })(
                                t,
                                r,
                                n,
                            ),
                            c = l.description,
                            E = l.completedSteps,
                            A = (0, i.useState)(!1),
                            d = A[0],
                            h = A[1];
                        return s().createElement(
                            m.z,
                            { className: F()(_, !d && p), setVisibleScroll: h },
                            s().createElement(
                                'div',
                                { className: g },
                                a.length > 0 &&
                                    s().createElement(B.r, {
                                        description: c,
                                        iconType: D.Q.now,
                                        rewards: a,
                                        steps: E,
                                        title: f.titleNowRewards(),
                                    }),
                                o.length > 0 &&
                                    s().createElement(B.r, {
                                        description: f.descriptionFutureRewards(),
                                        iconType: D.Q.future,
                                        rewards: o,
                                        title: f.titleFutureRewards(),
                                    }),
                            ),
                        );
                    }),
                    v = 'RewardsViewContent_base_c6578',
                    w = 'RewardsViewContent_content_b14ad',
                    b = 'RewardsViewContent_background_cc9fe',
                    S = 'RewardsViewContent_shadow_e76b8';
                function T(u, e, t, r, n, a, o) {
                    try {
                        var i = u[a](o),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(r, n);
                }
                (0, o.Pi)(() => {
                    const u = (0, C.t)().model.levels.get().chapterID,
                        e = (0, i.useState)(!1),
                        t = e[0],
                        o = e[1],
                        d = (0, A.tv)();
                    (c.N.useHandleKeydown(n.n.ESCAPE, () => d.goBack()),
                        (0, i.useEffect)(() => {
                            (function () {
                                var u,
                                    e =
                                        ((u = function* () {
                                            (yield (0, a.Eu)(), yield (0, r.nS)(), o(!0));
                                        }),
                                        function () {
                                            var e = this,
                                                t = arguments;
                                            return new Promise(function (r, n) {
                                                var a = u.apply(e, t);
                                                function o(u) {
                                                    T(a, r, n, o, i, 'next', u);
                                                }
                                                function i(u) {
                                                    T(a, r, n, o, i, 'throw', u);
                                                }
                                                o(void 0);
                                            });
                                        });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })()();
                        }, []));
                    const F = {
                        backgroundImage: `url(${(0, l.wD)(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, u)})`,
                    };
                    return s().createElement(
                        'div',
                        { className: v },
                        s().createElement(
                            'div',
                            { className: b },
                            s().createElement(E.N, { chapter: u, isCurrent: !0, customBackgroundStyle: F }),
                        ),
                        s().createElement('div', { className: S }),
                        t && s().createElement('div', { className: w }, s().createElement(h, null)),
                    );
                });
            },
            8024: (u, e, t) => {
                t.d(e, { t: () => i });
                var r = t(5090),
                    n = t(9723),
                    a = t(5369);
                const o = (0, r.q3)()(({ observableModel: u }) => {
                        const e = {
                                levels: u.object(),
                                nowRewards: u.array('nowRewards.items'),
                                futureRewards: u.array('futureRewards.items'),
                            },
                            t = (0, a.Om)(() => e.nowRewards.get(), { equals: n.jv }),
                            r = (0, a.Om)(() => e.futureRewards.get(), { equals: n.jv });
                        return Object.assign({}, e, { computes: { nowRewards: t, futureRewards: r } });
                    }, n.ZT),
                    i = (o[0], o[1]);
            },
            1705: (u, e, t) => {
                t.d(e, { W4: () => n, wD: () => r });
                t(4490);
                const r = (u, e, t = '') => {
                        const r = t.length > 0 ? `_${t}` : t,
                            n = u.$dyn(`c_${e}${r}`),
                            a = String(e).slice(-1),
                            o = u.$dyn(`default_${a}${r}`);
                        return n || o;
                    },
                    n = (u) => {
                        const e = R.images.gui.maps.icons.battlePass.backgrounds;
                        return u
                            ? { backgroundImage: `url(${r(e.progression, u)})` }
                            : { backgroundImage: `url(${e.$dyn('common')})` };
                    };
            },
            3245: (u, e, t) => {
                let r = (function (u) {
                    return ((u.style = 'style'), (u.tankman = 'tankman'), u);
                })({});
                (r.style, r.tankman);
            },
            5278: (u, e, t) => {
                t.d(e, { $n: () => o });
                var r = t(2486),
                    n = t(4692);
                (t(768), t(873), t(6758), t(4490), t(3245));
                const a = (u) =>
                        u.bigIcon.includes('vehicle')
                            ? u.vehicleName
                            : u.bigIcon.includes('style_3d')
                              ? u.userName
                              : void 0,
                    o = (u, e = r.h2.Big, t = !1) => {
                        const o = u.item,
                            i = u.name,
                            s = u.value,
                            l = u.overlayType,
                            c = u.tooltipId,
                            E = u.tooltipContentId;
                        return {
                            name: o || i,
                            image: (0, n.ry)(u, e),
                            special: l,
                            value: s,
                            valueType: (0, n.p3)(i),
                            title: t && a(u),
                            tooltipArgs: (0, n.pI)({ tooltipId: c }, Number(E), { ignoreShowDelay: !0 }),
                            size: e,
                        };
                    };
            },
            1158: (u, e, t) => {
                t.d(e, { N: () => c });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    o = t.n(a),
                    i = t(1705);
                const s = 'ChapterBackground_base_ec1b7',
                    l = 'ChapterBackground_base__current_d1211',
                    c = ({ chapter: u, isCurrent: e, customBackgroundStyle: t }) =>
                        o().createElement('div', { className: n()(s, e && l), style: t || (0, i.W4)(u) });
            },
            4490: (u, e, t) => {},
            1820: (u, e, t) => {
                t.d(e, { r: () => g });
                var r = t(9849),
                    n = t.n(r),
                    a = t(7363),
                    o = t.n(a),
                    i = t(2486),
                    s = t(3359),
                    l = t(8925),
                    c = t(8739),
                    E = t(5278);
                const A = 'GroupRewards_base_aacb3',
                    d = 'GroupRewards_item_efa84',
                    F = ({ rewards: u, className: e }) => {
                        const t = (0, l.GS)().mediaSize < l.cJ.Medium ? i.h2.Small : i.h2.Big;
                        return o().createElement(
                            'div',
                            { className: n()(A, e) },
                            c.UI(u, (u, e) =>
                                o().createElement(
                                    'div',
                                    { key: `reward_${e}_${u.name}`, className: d },
                                    o().createElement(s.Q, (0, E.$n)(u, t, !0)),
                                ),
                            ),
                        );
                    };
                var D = t(2714);
                const B = 'RewardsBlock_base_de0ba',
                    m = 'RewardsBlock_groupTitle_a9848',
                    C = 'RewardsBlock_groupRewards_a539c',
                    _ = 'RewardsBlock_groupRewards__future_c0a72',
                    g = ({
                        description: u,
                        iconType: e,
                        steps: t = '',
                        rewards: r,
                        className: a = '',
                        title: i = '',
                    }) =>
                        o().createElement(
                            'div',
                            { className: n()(B, a) },
                            o().createElement(D.p, { description: u, type: e, steps: t, className: m, title: i }),
                            o().createElement(F, { rewards: r, className: n()(C, e === D.Q.future && _) }),
                        );
            },
            2714: (u, e, t) => {
                t.d(e, { p: () => c, Q: () => l });
                var r = t(9849),
                    n = t.n(r),
                    a = t(2616),
                    o = t(7363),
                    i = t.n(o);
                const s = {
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
                let l = (function (u) {
                    return ((u.now = 'now'), (u.future = 'future'), u);
                })({});
                const c = ({ description: u, type: e, steps: t = '', className: r = '', title: o = '' }) =>
                    i().createElement(
                        'div',
                        { className: n()(s.base, s[`base__${e}`], r) },
                        i().createElement('div', { className: s.iconShadow }),
                        i().createElement(
                            'div',
                            { className: s.title },
                            i().createElement('div', { className: s.icon }),
                            i().createElement('div', { className: s.titleText }, o),
                        ),
                        i().createElement(a.z, {
                            classMix: s.descriptionText,
                            text: u,
                            binding: { steps: i().createElement('span', { className: s.steps, key: t }, t) },
                        }),
                    );
            },
            3287: (u, e, t) => {
                t.d(e, { z: () => b });
                var r = t(9849),
                    n = t.n(r),
                    a = t(2884),
                    o = t(3934),
                    i = t(7363),
                    s = t.n(i),
                    l = t(8656),
                    c = t(8978),
                    E = t(828);
                function A(u, e, t, r, n, a, o) {
                    try {
                        var i = u[a](o),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(r, n);
                }
                function d(u) {
                    return function () {
                        var e = this,
                            t = arguments;
                        return new Promise(function (r, n) {
                            var a = u.apply(e, t);
                            function o(u) {
                                A(a, r, n, o, i, 'next', u);
                            }
                            function i(u) {
                                A(a, r, n, o, i, 'throw', u);
                            }
                            o(void 0);
                        });
                    };
                }
                let F = (function (u) {
                    return (
                        (u[(u.Idle = 0)] = 'Idle'),
                        (u[(u.Start = 1)] = 'Start'),
                        (u[(u.Between = 2)] = 'Between'),
                        (u[(u.End = 3)] = 'End'),
                        u
                    );
                })({});
                const D = (u) => {
                        const e = (0, i.useState)(F.Idle),
                            t = e[0],
                            r = e[1],
                            n = u.animationScroll,
                            a = u.getContainerSize,
                            o = u.getWrapperSize,
                            s = u.events,
                            A = (0, i.useCallback)(() => {
                                const u = n.scrollPosition.get(),
                                    e = a() - o();
                                switch (!0) {
                                    case !e:
                                        return r(F.Idle);
                                    case u <= 0:
                                        return r(F.Start);
                                    case u >= e:
                                        return r(F.End);
                                    default:
                                        r(F.Between);
                                }
                            }, [n.scrollPosition, a, o]);
                        return (
                            (0, i.useEffect)(
                                () => (
                                    (function () {
                                        var u = d(function* () {
                                            yield (0, c.v)(A);
                                        });
                                        return function () {
                                            return u.apply(this, arguments);
                                        };
                                    })()(),
                                    s.on('change', A),
                                    () => s.off('change', A)
                                ),
                                [s, A],
                            ),
                            (0, i.useEffect)(() => {
                                const u = (function () {
                                    var u = d(function* () {
                                        (yield (0, E.Eu)(), yield (0, l.nS)(), A());
                                    });
                                    return function () {
                                        return u.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', u),
                                    () => {
                                        engine.off('clientResized', u);
                                    }
                                );
                            }, [A]),
                            t
                        );
                    },
                    B = { type: 'idle' };
                const m = 'ScrollWithLips_base_f5336',
                    C = 'ScrollWithLips_lip_d5315',
                    _ = 'ScrollWithLips_lip__top_eb0da',
                    g = 'ScrollWithLips_lip__bottom_a8083',
                    p = 'ScrollWithLips_scroll_a3a48',
                    f = 'ScrollWithLips_scroll__loaded_c247e',
                    h = 'ScrollWithLips_topButton_a9553',
                    v = 'ScrollWithLips_bottomButton_e59e6',
                    w = 'ScrollWithLips_track_d9f05',
                    b = ({ className: u, children: e, setVisibleScroll: t }) => {
                        const r = (0, o.useVerticalScrollApi)();
                        !(function (u, e) {
                            const t = u.contentRef,
                                r = u.wrapperRef,
                                n = u.scrollPosition,
                                a = u.clampPosition,
                                o = u.animationScroll,
                                s = u.events,
                                l = u.getContainerSize,
                                c = u.getWrapperSize,
                                E = (0, i.useState)(B),
                                A = E[0],
                                d = E[1],
                                F = (0, i.useState)(!1),
                                D = F[0],
                                m = F[1];
                            ((0, i.useEffect)(() => {
                                const u = t.current;
                                u && (u.style.cursor = D ? ('dragging' === A.type ? 'grabbing' : 'grab') : 'default');
                            }, [t, D, A.type]),
                                (0, i.useEffect)(() => {
                                    if ('dragging' !== A.type) return;
                                    const u = (u) => {
                                            const i = t.current,
                                                s = r.current;
                                            if (!i || !s) return;
                                            const l = A.positionFrom - u.screenY,
                                                c = A.previousScrollPosition + l;
                                            n.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: a(i, c),
                                                        from: { scrollPosition: o.scrollPosition.get() },
                                                    },
                                                    e && { config: e },
                                                ),
                                            );
                                        },
                                        i = () => {
                                            (window.removeEventListener('mousemove', u), d({ type: 'scrollingToEnd' }));
                                        };
                                    return (
                                        window.addEventListener('mousemove', u),
                                        window.addEventListener('mouseup', i),
                                        () => {
                                            (window.removeEventListener('mousemove', u),
                                                window.removeEventListener('mouseup', i));
                                        }
                                    );
                                }, [o.scrollPosition, a, t, A, n, r, e]),
                                (0, i.useEffect)(() => {
                                    if ('scrollingToEnd' !== A.type) return;
                                    const u = () => {
                                        d(B);
                                    };
                                    return (o.scrollPosition.idle && u(), s.on('rest', u), () => s.off('rest', u));
                                }, [o.scrollPosition, A.type, s]),
                                (0, i.useEffect)(() => {
                                    const u = t.current;
                                    if (!u) return;
                                    const e = (u) => {
                                        0 === u.button &&
                                            d({
                                                type: 'dragging',
                                                positionFrom: u.screenY,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                    };
                                    return (
                                        u.addEventListener('mousedown', e),
                                        () => u.removeEventListener('mousedown', e)
                                    );
                                }, [o.scrollPosition, t]),
                                (0, i.useEffect)(() => {
                                    const u = () => {
                                        var u, e;
                                        const t = null != (u = l()) ? u : 0,
                                            r = null != (e = c()) ? e : 0;
                                        m(t > r);
                                    };
                                    return (
                                        s.on('resizeHandled', u),
                                        s.on('recalculateContent', u),
                                        () => {
                                            (s.off('resizeHandled', u), s.off('recalculateContent', u));
                                        }
                                    );
                                }, [s, l, c]));
                        })(r);
                        const l = D(r),
                            c = l !== F.Idle;
                        return (
                            (0, i.useEffect)(() => {
                                t && t(l !== F.Idle);
                            }, [t, l]),
                            s().createElement(
                                'div',
                                { className: n()(m, u) },
                                l !== F.Start && l !== F.Idle && s().createElement('div', { className: n()(C, _) }),
                                l !== F.End && l !== F.Idle && s().createElement('div', { className: n()(C, g) }),
                                s().createElement(
                                    a.X.Vertical.Area.Default,
                                    {
                                        api: r,
                                        barClassNames: {
                                            base: n()(p, c && f),
                                            topButton: h,
                                            bottomButton: v,
                                            track: w,
                                        },
                                    },
                                    e,
                                ),
                            )
                        );
                    };
            },
            4053: (u, e, t) => {
                t.d(e, { t: () => a });
                var r = t(7363);
                const n = (0, r.createContext)(void 0);
                function a() {
                    const u = (0, r.useContext)(n);
                    if (!u) throw new Error('useRouter must be used within a RouterProvider');
                    return u;
                }
            },
            9994: (u, e, t) => {
                t.d(e, { N: () => r });
                var r = {};
                (t.r(r), t.d(r, { Provider: () => D, useApi: () => d, useHandleKeydown: () => F }));
                var n = t(7475),
                    a = t(9659),
                    o = t(7363),
                    i = t.n(o),
                    s = t(4020);
                class l {
                    constructor() {
                        this.items = [];
                    }
                    get length() {
                        return this.items.length;
                    }
                    push(u) {
                        this.items.push(u);
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
                    includes(u) {
                        return this.items.includes(u);
                    }
                    some(u) {
                        return this.items.some(u);
                    }
                    remove(u) {
                        const e = this.items.indexOf(u);
                        return -1 !== e && (this.items.splice(e, 1), !0);
                    }
                    isEmpty() {
                        return 0 === this.items.length;
                    }
                    toArray() {
                        return this.items.slice();
                    }
                }
                var c = t(9723);
                const E = () => {
                        const u = new Map();
                        function e(e) {
                            const t = u.get(e);
                            if (t) return t;
                            const r = new l();
                            return (u.set(e, r), r);
                        }
                        function t(e, t) {
                            const r = u.get(e);
                            return !!r && r.remove(t);
                        }
                        return {
                            handlers: u,
                            obtain: e,
                            register: function (u, r) {
                                if (u === s.n.NONE) return c.jv;
                                const n = e(u);
                                return (n.includes(r) || n.push(r), () => t(u, r));
                            },
                            unregister: t,
                            takeCurrent: function (e) {
                                const t = u.get(e);
                                if (!t) return;
                                const r = t.peek();
                                return r || void 0;
                            },
                        };
                    },
                    A = (0, o.createContext)(void 0);
                function d() {
                    const u = (0, o.useContext)(A);
                    if (!u) throw new Error('useHierarchicalKeyEvents must be used within a hierarchyKeyDown.Provider');
                    return u;
                }
                function F(u, e, t) {
                    const r = (0, a.z)((u) => {
                            n.O.view.isEventHandled() || (e(u), n.O.view.setEventHandled(), t && u.stopPropagation());
                        }),
                        i = d(),
                        s = (0, o.useMemo)(() => i.keydown.register(u, r), [i, u, r]);
                    (0, o.useEffect)(() => s, [s]);
                }
                const D = (u) => {
                    const e = (0, o.useMemo)(E, []);
                    (0, o.useEffect)(() => {
                        function u(u) {
                            const t = e.takeCurrent(u.keyCode);
                            t && t(u);
                        }
                        return (window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u));
                    });
                    const t = (0, o.useMemo)(
                        () => ({ keydown: { register: e.register, unregister: e.unregister } }),
                        [e],
                    );
                    return i().createElement(A.Provider, { value: t }, u.children);
                };
            },
            8862: (u, e, t) => {
                t.d(e, { tv: () => r.t });
                var r = t(4053),
                    n = t(7363);
                (0, n.createContext)(void 0);
            },
            768: (u, e, t) => {},
            4880: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = { base: 'FormatText_base_f27a4' };
            },
            5261: (u, e, t) => {
                t.d(e, { Z: () => r });
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
            8823: (u, e, t) => {
                t.d(e, { Z: () => r });
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
            4109: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
                    base: 'HorizontalScroll_base_a33a9',
                    wrapper: 'HorizontalScroll_wrapper_b622e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_a2315',
                };
            },
            1905: (u, e, t) => {
                t.d(e, { Z: () => r });
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
            2459: (u, e, t) => {
                t.d(e, { Z: () => r });
                const r = {
                    content: 'VerticalScroll_content_fe263',
                    defaultScroll: 'VerticalScroll_defaultScroll_e27f5',
                    bar: 'VerticalScroll_bar_b8700',
                    area: 'VerticalScroll_area_b5a82',
                };
            },
            7363: (u) => {
                u.exports = React;
            },
            1533: (u) => {
                u.exports = ReactDOM;
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var t = (__webpack_module_cache__[u] = { exports: {} });
        return (__webpack_modules__[u](t, t.exports, __webpack_require__), t.exports);
    }
    ((__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], a = !0, o = 0; o < e.length; o++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return (__webpack_require__.d(e, { a: e }), e);
        }),
        (__webpack_require__.d = (u, e) => {
            for (var t in e)
                __webpack_require__.o(e, t) &&
                    !__webpack_require__.o(u, t) &&
                    Object.defineProperty(u, t, { enumerable: !0, get: e[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            ('undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 }));
        }),
        (__webpack_require__.j = 2155),
        (() => {
            var u = { 2155: 0, 8805: 0, 6488: 0, 2670: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [a, o, i] = t,
                        s = 0;
                    if (a.some((e) => 0 !== u[e])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); s < a.length; s++)
                        ((n = a[s]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0));
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            (t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t))));
        })());
    var __webpack_exports__ = __webpack_require__.O(void 0, [1519], () => __webpack_require__(8230));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
