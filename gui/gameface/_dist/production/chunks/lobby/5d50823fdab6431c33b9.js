'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [7773],
    {
        3457: (e, t, a) => {
            a.d(t, { L$: () => l.L, qE: () => l.q, u5: () => u });
            var s = a(6483),
                n = a.n(s),
                r = a(7727),
                i = a(6179),
                o = a.n(i),
                c = a(6880),
                l = a(2106);
            const _ = ({
                children: e,
                size: t,
                isFocused: a,
                type: s,
                disabled: _,
                mixClass: u,
                soundHover: m,
                soundClick: d,
                onMouseEnter: E,
                onMouseMove: p,
                onMouseDown: g,
                onMouseUp: b,
                onMouseLeave: v,
                onClick: S,
            }) => {
                const N = (0, i.useRef)(null),
                    T = (0, i.useState)(a),
                    k = T[0],
                    P = T[1],
                    y = (0, i.useState)(!1),
                    h = y[0],
                    B = y[1];
                return (
                    (0, i.useEffect)(() => {
                        function e(e) {
                            k && null !== N.current && !N.current.contains(e.target) && P(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [k]),
                    (0, i.useEffect)(() => {
                        P(a);
                    }, [a]),
                    o().createElement(
                        'div',
                        {
                            ref: N,
                            className: n()(
                                c.Z.base,
                                c.Z[`base__${s}`],
                                _ && c.Z.base__disabled,
                                t && c.Z[`base__${t}`],
                                k && c.Z.base__focus,
                                h && c.Z.base__highlightActive,
                                u,
                            ),
                            onMouseEnter: function (e) {
                                _ || (null !== m && (0, r.G)(m), E && E(e));
                            },
                            onMouseMove: function (e) {
                                p && p(e);
                            },
                            onMouseUp: function (e) {
                                _ || (b && b(e), B(!1));
                            },
                            onMouseDown: function (e) {
                                _ ||
                                    (null !== d && (0, r.G)(d),
                                    g && g(e),
                                    a && (_ || (N.current && (N.current.focus(), P(!0)))),
                                    B(!0));
                            },
                            onMouseLeave: function (e) {
                                _ || (v && v(e), B(!1));
                            },
                            onClick: function (e) {
                                _ || (S && S(e));
                            },
                        },
                        s !== l.L.ghost &&
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
            _.defaultProps = { type: l.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const u = _;
        },
        2106: (e, t, a) => {
            let s, n;
            a.d(t, { L: () => s, q: () => n }),
                (function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(s || (s = {})),
                (function (e) {
                    (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                })(n || (n = {}));
        },
        5739: (e, t, a) => {
            a.d(t, { Q: () => u });
            var s = a(6483),
                n = a.n(s),
                r = a(6179),
                i = a.n(r),
                o = a(3415),
                c = a(2862),
                l = a(729),
                _ = a(1609);
            const u = ({
                name: e,
                image: t,
                isPeriodic: a = !1,
                size: s = c.h2.Big,
                special: r,
                value: u,
                valueType: m,
                title: d,
                style: E,
                className: p,
                classNames: g,
                tooltipArgs: b,
                periodicIconTooltipArgs: R,
            }) => {
                const v = (0, l.c$)(s, r),
                    S = (0, l.i2)(r),
                    N = (0, l.m9)(u, m);
                return i().createElement(
                    'div',
                    { className: n()(_.Z.base, _.Z[`base__${s}`], p), style: E },
                    i().createElement(
                        o.l,
                        { tooltipArgs: b, className: _.Z.tooltipWrapper },
                        i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                'div',
                                { className: n()(_.Z.image, null == g ? void 0 : g.image) },
                                v &&
                                    i().createElement('div', {
                                        className: n()(_.Z.highlight, null == g ? void 0 : g.highlight),
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${s}.${v}_highlight)`,
                                        },
                                    }),
                                t &&
                                    i().createElement('div', {
                                        className: n()(_.Z.icon, null == g ? void 0 : g.rewardIcon),
                                        style: { backgroundImage: `url(${t})` },
                                    }),
                                S &&
                                    i().createElement('div', {
                                        className: n()(_.Z.overlay, null == g ? void 0 : g.overlay),
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${s}.${S}_overlay)`,
                                        },
                                    }),
                            ),
                            N &&
                                i().createElement(
                                    'div',
                                    {
                                        className: n()(
                                            _.Z.info,
                                            _.Z[`info__${e}`],
                                            m === c.$h.MULTI && _.Z.info__multi,
                                            null == g ? void 0 : g.info,
                                        ),
                                    },
                                    N,
                                ),
                            d && i().createElement('div', { className: _.Z.title }, d),
                        ),
                    ),
                    a &&
                        i().createElement(
                            o.l,
                            { tooltipArgs: R },
                            i().createElement('div', {
                                className: n()(_.Z.timer, null == g ? void 0 : g.periodicIcon),
                            }),
                        ),
                );
            };
        },
        2862: (e, t, a) => {
            let s, n, r, i, o, c, l, _;
            a.d(t, { $h: () => i, A2: () => c, E4: () => s, h2: () => r, kK: () => o, sh: () => l }),
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
                        (e.BrCoin = 'brcoin');
                })(s || (s = {})),
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
                })(n || (n = {})),
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
                })(r || (r = {})),
                (function (e) {
                    (e.MULTI = 'multi'),
                        (e.CURRENCY = 'currency'),
                        (e.PREMIUM_PLUS = 'premium_plus'),
                        (e.NUMBER = 'number'),
                        (e.STRING = 'string');
                })(i || (i = {})),
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
                })(o || (o = {})),
                (function (e) {
                    e.BATTLE_BOOSTER = 'battleBooster';
                })(c || (c = {})),
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
                })(_ || (_ = {}));
        },
        729: (e, t, a) => {
            a.d(t, { c$: () => b, i2: () => v, m9: () => S, p3: () => u, pI: () => p, ry: () => E });
            var s = a(2372),
                n = a(6179),
                r = a.n(n),
                i = a(2862);
            const o = [
                    i.E4.Items,
                    i.E4.Equipment,
                    i.E4.Xp,
                    i.E4.XpFactor,
                    i.E4.Blueprints,
                    i.E4.BlueprintsAny,
                    i.E4.Goodies,
                    i.E4.Berths,
                    i.E4.Slots,
                    i.E4.Tokens,
                    i.E4.CrewSkins,
                    i.E4.CrewBooks,
                    i.E4.Customizations,
                    i.E4.CreditsFactor,
                    i.E4.TankmenXp,
                    i.E4.TankmenXpFactor,
                    i.E4.FreeXpFactor,
                    i.E4.BattleToken,
                    i.E4.Entitlements,
                    i.E4.PremiumUniversal,
                    i.E4.NaturalCover,
                    i.E4.BpCoin,
                    i.E4.BattlePassSelectToken,
                    i.E4.BattlaPassFinalAchievement,
                    i.E4.BattleBadge,
                    i.E4.BonusX5,
                    i.E4.CrewBonusX3,
                    i.E4.NewYearInvoice,
                    i.E4.EpicSelectToken,
                    i.E4.Comp7TokenWeeklyReward,
                    i.E4.DeluxeGift,
                    i.E4.BattleBoosterGift,
                    i.E4.OptionalDevice,
                ],
                c = [i.E4.Gold, i.E4.Credits, i.E4.Crystal, i.E4.FreeXp],
                l = [i.E4.BattlePassPoints, i.E4.EquipCoin],
                _ = [i.E4.PremiumPlus, i.E4.Premium],
                u = (e) =>
                    o.includes(e)
                        ? i.$h.MULTI
                        : c.includes(e)
                          ? i.$h.CURRENCY
                          : l.includes(e)
                            ? i.$h.NUMBER
                            : _.includes(e)
                              ? i.$h.PREMIUM_PLUS
                              : i.$h.STRING,
                m = ['engravings', 'backgrounds'],
                d = ['engraving', 'background'],
                E = (e, t = i.h2.Small) => {
                    const a = e.name,
                        s = e.type,
                        n = e.value,
                        r = e.icon,
                        o = e.item,
                        c = e.dogTagType,
                        l = ((e) => {
                            switch (e) {
                                case i.h2.S600x450:
                                    return 'c_600x450';
                                case i.h2.S400x300:
                                    return 'c_400x300';
                                case i.h2.S296x222:
                                    return 'c_296x222';
                                case i.h2.S232x174:
                                    return 'c_232x174';
                                case i.h2.Big:
                                    return 'c_80x80';
                                case i.h2.Small:
                                    return 'c_48x48';
                                default:
                                    return e;
                            }
                        })(t);
                    switch (a) {
                        case 'basic':
                        case 'plus':
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}_${n}`;
                        case 'premium':
                        case 'premium_plus':
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${n}`;
                        case 'items':
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                        case 'blueprints':
                        case 'blueprintsAny':
                        case 'finalBlueprints':
                            return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
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
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                        case 'entitlements':
                            return 'big' === t
                                ? e.iconBig.replace('..', 'img://gui')
                                : e.iconSmall.replace('..', 'img://gui');
                        case 'crewBooks':
                            return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                        case 'dogTagComponents':
                            return ((e, t, a) => {
                                const s = m[e];
                                if (s) {
                                    const n = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(s),
                                        r = n.$dyn(a);
                                    return r ? `${r}` : `${n.$dyn(d[e])}`;
                                }
                                return (
                                    console.error(
                                        'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                    ),
                                    ''
                                );
                            })(c, t, r);
                        case 'dossier_badge':
                            return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                        case 'dossier_achievement':
                            return `R.images.gui.maps.icons.achievement.${l}.${r}`;
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
                        case 'premiumTank_rent':
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles_rent`;
                        case 'styleProgressToken':
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                        case 'collectionItem':
                            return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                        case 'newYearSlot':
                            return `R.images.gui.maps.icons.newYear.rewards.${t}.slot`;
                        default:
                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                    }
                },
                p = (e, t, a) => {
                    const s = t && { contentId: t };
                    return Object.assign(
                        {
                            args: e,
                            isEnabled: Boolean((e && e.tooltipId) || t),
                            ignoreMouseClick: !0,
                            ignoreShowDelay: !t,
                        },
                        s,
                        a,
                    );
                },
                g = [i.h2.Small, i.h2.Big],
                b = (e, t) => {
                    if (void 0 === t || !g.includes(e)) return null;
                    switch (t) {
                        case i.kK.BATTLE_BOOSTER:
                        case i.kK.BATTLE_BOOSTER_REPLACE:
                            return i.A2.BATTLE_BOOSTER;
                    }
                },
                v = (e) => {
                    if (void 0 === e) return null;
                    switch (e) {
                        case i.kK.BATTLE_BOOSTER:
                            return i.sh.BATTLE_BOOSTER;
                        case i.kK.BATTLE_BOOSTER_REPLACE:
                            return i.sh.BATTLE_BOOSTER_REPLACE;
                        case i.kK.BUILT_IN_EQUIPMENT:
                            return i.sh.BUILT_IN_EQUIPMENT;
                        case i.kK.EQUIPMENT_PLUS:
                            return i.sh.EQUIPMENT_PLUS;
                        case i.kK.EQUIPMENT_TROPHY_BASIC:
                            return i.sh.EQUIPMENT_TROPHY_BASIC;
                        case i.kK.EQUIPMENT_TROPHY_UPGRADED:
                            return i.sh.EQUIPMENT_TROPHY_UPGRADED;
                        case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case i.kK.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return i.sh.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case i.kK.PROGRESSION_STYLE_UPGRADED_1:
                            return i.sh.PROGRESSION_STYLE_UPGRADED_1;
                        case i.kK.PROGRESSION_STYLE_UPGRADED_2:
                            return i.sh.PROGRESSION_STYLE_UPGRADED_2;
                        case i.kK.PROGRESSION_STYLE_UPGRADED_3:
                            return i.sh.PROGRESSION_STYLE_UPGRADED_3;
                        case i.kK.PROGRESSION_STYLE_UPGRADED_4:
                            return i.sh.PROGRESSION_STYLE_UPGRADED_4;
                        case i.kK.PROGRESSION_STYLE_UPGRADED_5:
                            return i.sh.PROGRESSION_STYLE_UPGRADED_5;
                        case i.kK.PROGRESSION_STYLE_UPGRADED_6:
                            return i.sh.PROGRESSION_STYLE_UPGRADED_6;
                    }
                },
                S = (e, t) => {
                    if (void 0 === e) return null;
                    switch (t) {
                        case i.$h.MULTI: {
                            const t = Number(e);
                            return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                        }
                        case i.$h.CURRENCY:
                        case i.$h.NUMBER:
                            return r().createElement(s.A, { format: 'integral', value: Number(e) });
                        case i.$h.PREMIUM_PLUS: {
                            const t = Number(e);
                            return isNaN(t) ? e : null;
                        }
                        default:
                            return e;
                    }
                };
        },
        7773: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Me });
            var s = a(6179),
                n = a.n(s),
                r = a(7522),
                i = a(2344),
                o = a(3403),
                c = a(7030),
                l = a(545),
                _ = a(729),
                u = a(5433);
            let m, d;
            !(function (e) {
                (e.Received = 'received'), (e.Available = 'available'), (e.Unavailable = 'unavailable');
            })(m || (m = {})),
                (function (e) {
                    (e.DEFAULT = 'default'),
                        (e.NOT_IN_INVENTORY = 'notInInventory'),
                        (e.BROKEN = 'broken'),
                        (e.IN_BATTLE = 'inBattle'),
                        (e.IN_UNIT = 'inUnit'),
                        (e.CUSTOMIZATION_UNAVAILABLE = 'customizationUnavailable');
                })(d || (d = {}));
            var E = a(3215),
                p = a(9480),
                g = a(3946);
            const b = (0, E.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                cardsList: e.array('cards', []),
                                kit: e.object('kit'),
                                resources: e.array('kit.resources', []),
                                rewards: e.array('kit.rewards', []),
                            },
                            a = (0, g.Om)(() => {
                                const e = t.root.get().currentKitName;
                                return (0, p.mapExists)(t.cardsList.get(), (t) => ({
                                    kitIndex: t.kitIndex,
                                    kitState: t.kitState,
                                    kitName: t.kitName,
                                    discount: t.discount,
                                    isSelected: t.kitName === e,
                                    currentToysCount: t.currentToysCount,
                                    totalToysCount: t.totalToysCount,
                                }));
                            }),
                            s = (0, g.Om)(() => a().find((e) => e.isSelected)),
                            n = (0, g.Om)((e) => {
                                const a = t.root.get().kitState === m.Received;
                                return (0, p.mapExists)(t.rewards.get(), (t) => ({
                                    isReceived: !a && t.isReceived,
                                    name: t.name,
                                    image: (0, _.ry)(t, e),
                                    value: t.value,
                                    valueType: (0, _.p3)(t.name),
                                    tooltipArgs: (0, _.pI)({ tooltipId: t.tooltipId }, Number(t.tooltipContentId)),
                                }));
                            }),
                            r = (0, g.Om)(() =>
                                t.root.get().kitState === m.Unavailable
                                    ? u._z.AnyResource
                                    : t.kit.get().currentResource,
                            ),
                            i = (0, g.Om)(() => t.root.get().currentKitName !== u.vQ.Mega),
                            o = (0, g.Om)(() => 0 !== t.kit.get().priceWithDiscount),
                            c = (0, g.Om)(() => {
                                var e, a;
                                const n = s(),
                                    r = t.root.get(),
                                    i = r.currentKitName,
                                    o = r.currentTabName,
                                    c = r.prevNYLevel;
                                return {
                                    discount: t.kit.get().discount,
                                    collection: i,
                                    year: o,
                                    prevNYLevel: c,
                                    currentToysCount: null != (e = null == n ? void 0 : n.currentToysCount) ? e : 0,
                                    totalToysCount: null != (a = null == n ? void 0 : n.totalToysCount) ? a : 0,
                                };
                            }),
                            l = (0, g.Om)(() => {
                                const e = t.kit.get().priceWithDiscount;
                                return { resourceType: r(), price: e };
                            });
                        return Object.assign({}, t, {
                            computes: {
                                getResources: (0, g.Om)(() => p.map(t.resources.get(), (e) => e)),
                                canBuy: o,
                                hasStyle: i,
                                getCurrentResource: r,
                                getRewards: n,
                                getCards: a,
                                getDiscountTooltipArgs: c,
                                getLackTheResTooltipArgs: l,
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        switchKit: e.createCallback((e) => ({ kitIndex: e }), 'onSwitchKit'),
                        switchResource: e.createCallback((e) => ({ resource: e }), 'kit.onSwitchResource'),
                        buyKit: e.createCallbackNoArgs('kit.onBuy'),
                        openStyle: e.createCallbackNoArgs('kit.onOpenStyle'),
                        moveSpace: e.createCallback((e) => e, 'onMoveSpace'),
                        onMouseOver3dScene: e.createCallback((e) => e, 'onMouseOver3dScene'),
                    }),
                ),
                v = b[0],
                S = b[1];
            var N = a(6483),
                T = a.n(N),
                k = a(2056),
                P = a(7727),
                y = a(3649);
            const h = {
                    base: 'Card_base_d5',
                    base__selected: 'Card_base__selected_40',
                    base__received: 'Card_base__received_e2',
                    bg: 'Card_bg_c5',
                    gradient: 'Card_gradient_72',
                    borderBox: 'Card_borderBox_f0',
                    border: 'Card_border_f2',
                    glow: 'Card_glow_28',
                    iconBox: 'Card_iconBox_e3',
                    iconShadow: 'Card_iconShadow_7a',
                    icon: 'Card_icon_4d',
                    base__unavailable: 'Card_base__unavailable_4b',
                    discount: 'Card_discount_d9',
                    discountBg: 'Card_discountBg_10',
                },
                B = R.strings.ny.marketplace.kit,
                C = (e, t) => ({
                    backgroundImage: `url(${R.images.gui.maps.icons.newYear.marketplace.cards.$dyn(`${e}_${t}`)})`,
                }),
                I = (0, o.Pi)(
                    ({
                        card: {
                            isSelected: e,
                            kitIndex: t,
                            kitState: a,
                            kitName: s,
                            discount: r,
                            currentToysCount: i,
                            totalToysCount: o,
                        },
                        className: c,
                    }) => {
                        const l = S(),
                            _ = l.model,
                            u = l.controls.switchKit,
                            d = _.root.get(),
                            E = d.currentTabName,
                            p = d.prevNYLevel,
                            g = _.kit.get().currentResource,
                            b = r > 0 && r < 100,
                            v = [m.Unavailable, m.Received].includes(a),
                            N = {
                                kitState: a,
                                kitName: s,
                                currentTabName: E,
                                kitIndex: t,
                                currentResource: g,
                                prevNYLevel: p,
                                currentToysCount: i,
                                totalToysCount: o,
                            };
                        return n().createElement(
                            k.u,
                            { contentId: R.views.lobby.new_year.tooltips.NyMarketCardTooltip('resId'), args: N },
                            n().createElement(
                                'div',
                                {
                                    className: T()(h.base, e && h.base__selected, h[`base__${a}`], c),
                                    onClick: () => {
                                        e || ((0, P.G)('hangar_newyear_hud_upper_click'), u(t));
                                    },
                                    onMouseEnter: () => {
                                        e || P.$.playHighlight();
                                    },
                                },
                                n().createElement(
                                    'div',
                                    { className: h.bg, style: C(s, E) },
                                    n().createElement('div', { className: h.gradient }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: h.borderBox },
                                    n().createElement('div', { className: h.border }),
                                    n().createElement('div', { className: h.glow }),
                                ),
                                v &&
                                    n().createElement(
                                        'div',
                                        { className: h.iconBox },
                                        n().createElement('div', { className: h.iconShadow }),
                                        n().createElement('div', { className: h.icon }),
                                    ),
                                b &&
                                    n().createElement(
                                        'div',
                                        { className: h.discount },
                                        n().createElement('div', { className: h.discountBg }),
                                        (0, y.uF)(B.discount(), { value: r }),
                                    ),
                            ),
                        );
                    },
                ),
                D = 'Cards_base_2a',
                f = 'Cards_item_09',
                U = (0, o.Pi)(({ classNames: e }) => {
                    const t = S().model.computes.getCards();
                    return n().createElement(
                        'div',
                        { className: T()(D, e) },
                        t.map((e, t) =>
                            n().createElement('div', { key: t, className: f }, n().createElement(I, { card: e })),
                        ),
                    );
                });
            var O = a(9738),
                w = a(7006);
            const A = 'CollectionsReward_base_bf',
                x = 'CollectionsReward_pageContent_9f',
                L = 'CollectionsReward_image_c1',
                M = 'CollectionsReward_image__hover_94',
                G = 'CollectionsReward_hoverArea_b9',
                $ = ({ name: e, imagesPath: t, className: a, onShowStylePreview: r }) => {
                    const i = (0, O.useTransition)(e, {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                        }),
                        o = (0, s.useState)(!1),
                        c = o[0],
                        l = o[1];
                    return n().createElement(
                        'div',
                        { className: T()(A, a) },
                        i((e, a) =>
                            n().createElement(
                                w.animated.div,
                                { style: e, className: x },
                                n().createElement(
                                    'div',
                                    { className: T()(L, c && M), style: { backgroundImage: `url('${t}.${a}_style')` } },
                                    r &&
                                        n().createElement('div', {
                                            className: G,
                                            onClick: r,
                                            onMouseEnter: () => l(!0),
                                            onMouseLeave: () => l(!1),
                                        }),
                                ),
                            ),
                        ),
                    );
                };
            var F = a(6766),
                Y = a(3457),
                q = a(3415),
                Z = a(6373),
                X = a(9690);
            const K = {
                    base: 'Footer_base_60',
                    unavailableBox: 'Footer_unavailableBox_eb',
                    bg: 'Footer_bg_42',
                    iconLevel: 'Footer_iconLevel_7a',
                    iconLevel__alt: 'Footer_iconLevel__alt_ea',
                    unavailableText: 'Footer_unavailableText_95',
                    iconCheck: 'Footer_iconCheck_36',
                    statusReceived: 'Footer_statusReceived_b5',
                    statusReceived__alignLeft: 'Footer_statusReceived__alignLeft_e2',
                    button: 'Footer_button_43',
                    buttonText: 'Footer_buttonText_87',
                    spinner: 'Footer_spinner_14',
                    spin: 'Footer_spin_b0',
                    slideInFadeIn: 'Footer_slideInFadeIn_ab',
                    fadeOut: 'Footer_fadeOut_3f',
                    fadeIn: 'Footer_fadeIn_77',
                    fadeInWithScale: 'Footer_fadeInWithScale_d9',
                    slideUp: 'Footer_slideUp_b0',
                    scale: 'Footer_scale_36',
                    blink: 'Footer_blink_b3',
                    slideInNotification: 'Footer_slideInNotification_02',
                },
                Q = R.strings.ny.marketplace.kit,
                z = R.strings.ny.marketplace.tooltips,
                H = (e, t, a) =>
                    t
                        ? e
                            ? { contentId: R.views.lobby.new_year.tooltips.NyMarketLackTheResTooltip('resId'), args: a }
                            : void 0
                        : {
                              header: R.strings.ny.marketplace.dialogs.purchase.tooltips.acceptBtn.header(),
                              body: R.strings.ny.marketplace.dialogs.purchase.tooltips.acceptBtn.body(),
                          },
                W = (0, o.Pi)(() => {
                    const e = S(),
                        t = e.model,
                        a = e.controls,
                        s = t.root.get(),
                        r = s.kitState,
                        i = s.isVehicleCustomizationEnabled,
                        o = s.vehicleState,
                        c = s.isWalletAvailable,
                        l = t.kit.get().notEnoughResource,
                        _ = a.buyKit,
                        u = a.openStyle,
                        E = t.computes.canBuy(),
                        p = !i && o !== d.DEFAULT,
                        g = z.goToStyle.unavailable.$dyn(`${o}`),
                        b = o === d.CUSTOMIZATION_UNAVAILABLE ? z.goToStyle.unavailable.header.$dyn(`${o}`) : '';
                    return n().createElement(
                        'div',
                        { className: K.base },
                        (() => {
                            switch (r) {
                                case m.Available:
                                    return n().createElement(
                                        q.l,
                                        { tooltipArgs: H(l, c, t.computes.getLackTheResTooltipArgs()) },
                                        E
                                            ? n().createElement(
                                                  'div',
                                                  null,
                                                  n().createElement(
                                                      Y.u5,
                                                      {
                                                          onClick: _,
                                                          size: Y.qE.medium,
                                                          mixClass: K.button,
                                                          disabled: l || !c,
                                                      },
                                                      n().createElement(
                                                          'div',
                                                          { className: K.buttonText },
                                                          Q.button.buy(),
                                                      ),
                                                  ),
                                              )
                                            : n().createElement(
                                                  'div',
                                                  null,
                                                  n().createElement(
                                                      Y.u5,
                                                      { size: Y.qE.medium, mixClass: K.button, disabled: !0 },
                                                      n().createElement(
                                                          'span',
                                                          { className: T()(K.submitText) },
                                                          n().createElement('span', { className: K.spinner }),
                                                          n().createElement(
                                                              'div',
                                                              { className: K.buttonText },
                                                              Q.button.buy(),
                                                          ),
                                                      ),
                                                  ),
                                              ),
                                    );
                                case m.Unavailable:
                                    return n().createElement(
                                        'div',
                                        { className: K.unavailableBox },
                                        n().createElement('div', { className: K.bg }),
                                        n().createElement('div', {
                                            className: T()(K.iconLevel, X.qP && K.iconLevel__alt),
                                        }),
                                        n().createElement(
                                            'div',
                                            { className: K.unavailableText },
                                            (0, y.uF)(Q.status.unavailable(), { level: (0, X.HG)(10) }),
                                        ),
                                    );
                                case m.Received:
                                    return n().createElement(
                                        n().Fragment,
                                        null,
                                        t.computes.hasStyle() &&
                                            n().createElement(
                                                Z.i,
                                                { header: b, body: g, isEnabled: p },
                                                n().createElement(
                                                    'div',
                                                    null,
                                                    n().createElement(
                                                        Y.u5,
                                                        {
                                                            onClick: u,
                                                            size: Y.qE.medium,
                                                            mixClass: K.button,
                                                            disabled: !i,
                                                        },
                                                        n().createElement(
                                                            'div',
                                                            { className: K.buttonText },
                                                            Q.button.toStyle(),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                        n().createElement(
                                            'div',
                                            {
                                                className: T()(
                                                    K.statusReceived,
                                                    !t.computes.hasStyle() && K.statusReceived__alignLeft,
                                                ),
                                            },
                                            n().createElement('div', { className: K.iconCheck }),
                                            n().createElement(
                                                'div',
                                                null,
                                                t.computes.hasStyle() ? Q.status.received() : Q.status.decalReceived(),
                                            ),
                                        ),
                                    );
                                default:
                                    return console.error('Unknown state', r), null;
                            }
                        })(),
                    );
                }),
                j = 'Kit_base_65',
                V = 'Kit_title_38',
                J = 'Kit_kitName_b3',
                ee = 'Kit_subTitle_09',
                te = 'Kit_rewardList_97',
                ae = 'Kit_resources_14',
                se = 'Kit_price_5d';
            var ne = a(2372),
                re = a(4254);
            const ie = 'Price_base_e1',
                oe = 'Price_oldPrice_8c',
                ce = 'Price_line_7d',
                le = 'Price_currentPrice_7c',
                _e = 'Price_currentPrice__unavailable_60',
                ue = 'Price_currentPrice__notEnough_ef',
                me = 'Price_discount_32',
                de = 'Price_discountBg_bb',
                Ee = 'Price_infoIcon_b0',
                pe = 'Price_resourceIcon_40',
                ge = R.strings.ny.marketplace.kit,
                be = (0, o.Pi)(() => {
                    const e = S().model,
                        t = e.root.get().kitState,
                        a = e.kit.get(),
                        s = a.price,
                        r = a.priceWithDiscount,
                        i = a.notEnoughResource,
                        o = a.discount,
                        c = e.computes,
                        l = c.getCurrentResource,
                        _ = c.getDiscountTooltipArgs,
                        u = o > 0 && o < 100,
                        d = t === m.Available && i;
                    return n().createElement(
                        'div',
                        { className: ie },
                        n().createElement(
                            'div',
                            { className: oe },
                            u && n().createElement(ne.A, { value: s }),
                            n().createElement('div', { className: ce }),
                        ),
                        n().createElement(
                            k.u,
                            {
                                contentId: R.views.lobby.new_year.tooltips.NyMarketLackTheResTooltip('resId'),
                                args: e.computes.getLackTheResTooltipArgs(),
                                isEnabled: d,
                            },
                            n().createElement(
                                'div',
                                null,
                                n().createElement(re._z, {
                                    value: r,
                                    type: l(),
                                    isReverse: !0,
                                    size: re.q4.s32,
                                    classNames: { value: T()(le, t === m.Unavailable && _e, d && ue), icon: pe },
                                }),
                            ),
                        ),
                        u &&
                            n().createElement(
                                k.u,
                                {
                                    contentId: R.views.lobby.new_year.tooltips.NyMarketDiscountTooltip('resId'),
                                    args: _(),
                                },
                                n().createElement(
                                    'div',
                                    { className: me },
                                    n().createElement('div', { className: de }),
                                    (0, y.uF)(ge.discount(), { value: o }),
                                    n().createElement('div', { className: Ee }),
                                ),
                            ),
                    );
                });
            var Re = a(2862),
                ve = a(5739),
                Se = a(5415);
            const Ne = 'RewardList_base_de',
                Te = 'RewardList_item_81',
                ke = 'RewardList_item__received_d5',
                Pe = 'RewardList_reward_15',
                ye = 'RewardList_label_a9';
            function he() {
                return (
                    (he = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var s in a) ({}).hasOwnProperty.call(a, s) && (e[s] = a[s]);
                              }
                              return e;
                          }),
                    he.apply(null, arguments)
                );
            }
            const Be = R.strings.ny.marketplace.kit,
                Ce = (0, o.Pi)(() => {
                    const e = S().model,
                        t = (0, Se.GS)().mediaSize >= Se.cJ.Medium ? Re.h2.Big : Re.h2.Small,
                        a = e.computes.getRewards(t);
                    return n().createElement(
                        'div',
                        { className: Ne },
                        a.map((e, a) =>
                            n().createElement(
                                'div',
                                { className: T()(Te, e.isReceived && ke), key: a },
                                n().createElement(ve.Q, he({}, e, { size: t, className: Pe })),
                                e.isReceived && n().createElement('div', { className: ye }, Be.rewardReceived()),
                            ),
                        ),
                    );
                }),
                Ie = R.strings.ny.marketplace.kit,
                De = (0, o.Pi)(() => {
                    const e = S(),
                        t = e.model,
                        a = e.controls,
                        s = t.root.get(),
                        r = s.kitState,
                        i = s.currentKitName,
                        o = s.currentTabName,
                        c = t.computes.canBuy(),
                        l = t.computes.getResources(),
                        _ = t.computes.getCurrentResource(),
                        u = `${i}_${o}`,
                        d = r !== m.Received,
                        E = r !== m.Unavailable;
                    return n().createElement(
                        'div',
                        { className: j },
                        n().createElement('div', { className: V }, systemLocale.toUpperCase(Ie.title.$dyn(u))),
                        n().createElement('div', { className: J }, Ie.name.$dyn(u)),
                        n().createElement('div', { className: ee }, Ie.subTitle.composition()),
                        n().createElement('div', { className: te }, n().createElement(Ce, null)),
                        d &&
                            c &&
                            n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(
                                    'div',
                                    { className: ee },
                                    E ? Ie.subTitle.buy() : Ie.subTitle.price(),
                                ),
                                E &&
                                    n().createElement(
                                        'div',
                                        { className: ae },
                                        n().createElement(F._, {
                                            resources: l,
                                            currentResource: _,
                                            switchResource: a.switchResource,
                                        }),
                                    ),
                                n().createElement('div', { className: se }, n().createElement(be, null)),
                            ),
                        n().createElement(W, null),
                    );
                }),
                fe = 'App_base_86',
                Ue = 'App_sceneWrapper_4f',
                Oe = 'App_bg_84',
                we = 'App_kit_64',
                Ae = 'App_cards_43',
                xe = 'App_collectionReward_29',
                Le = (0, o.Pi)(() => {
                    var e;
                    const t = S(),
                        a = t.controls,
                        o = t.model,
                        _ = o.root.get(),
                        u = _.currentTabName,
                        m = _.currentKitName,
                        d = null != (e = (0, i.D9)(u)) ? e : u,
                        E = (0, c.useSpring)(() => ({
                            config: { duration: 400, easing: r.Z.easeInOutCubic },
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                        })),
                        p = E[0],
                        g = E[1];
                    return (
                        (0, s.useEffect)(() => {
                            d !== u &&
                                g.start({
                                    from: { opacity: 0 },
                                    to: { opacity: 1 },
                                    config: { duration: 800, easing: r.Z.easeInOutCubic },
                                });
                        }, [g, u, d]),
                        n().createElement(
                            'div',
                            { className: fe },
                            o.computes.hasStyle()
                                ? n().createElement(
                                      'div',
                                      { className: Ue },
                                      n().createElement(l.w, {
                                          moveSpace: a.moveSpace,
                                          onMouseOver3dScene: a.onMouseOver3dScene,
                                      }),
                                  )
                                : n().createElement($, {
                                      className: xe,
                                      name: `${m}_${u}`,
                                      imagesPath: 'R.images.gui.maps.icons.newYear.marketplace.styles',
                                  }),
                            n().createElement('div', { className: Oe }),
                            n().createElement(c.animated.div, { style: p, className: we }, n().createElement(De, null)),
                            n().createElement(c.animated.div, { style: p, className: Ae }, n().createElement(U, null)),
                        )
                    );
                }),
                Me = () =>
                    n().createElement(
                        v,
                        { options: { context: 'model.marketplaceModel' } },
                        n().createElement(Le, null),
                    );
        },
        6766: (e, t, a) => {
            a.d(t, { _: () => b });
            var s = a(6483),
                n = a.n(s),
                r = a(2056),
                i = a(7727),
                o = a(6179),
                c = a.n(o),
                l = a(4254);
            const _ = 'Resources_base_aa',
                u = 'Resources_item_98',
                m = 'Resources_item__active_4b',
                d = 'Resources_check_ac',
                E = 'Resources_iconCheck_26',
                p = 'Resources_glowBox_2d',
                g = 'Resources_glow_ed',
                b = ({ resources: e, currentResource: t, switchResource: a, resourceSize: s, classNames: o }) => {
                    const b = null != s ? s : l.q4.s28;
                    return c().createElement(
                        'div',
                        { className: _ },
                        e.map((e, s) =>
                            c().createElement(
                                r.u,
                                {
                                    key: s,
                                    contentId: R.views.lobby.new_year.tooltips.NyResourceTooltip('resId'),
                                    args: { type: e },
                                },
                                c().createElement(
                                    'div',
                                    {
                                        onClick: () => {
                                            var s;
                                            (s = e) !== t && (a(s), (0, i.G)(R.sounds.hangar_newyear_hud_side_click()));
                                        },
                                        onMouseEnter: () => {
                                            e !== t && i.$.playHighlight();
                                        },
                                        className: n()(u, e === t && m, null == o ? void 0 : o.item),
                                    },
                                    c().createElement(
                                        'div',
                                        { className: p },
                                        c().createElement('div', { className: g }),
                                    ),
                                    c().createElement(l._z, { type: e, size: b }),
                                    c().createElement(
                                        'div',
                                        { className: d },
                                        c().createElement('div', { className: E }),
                                    ),
                                ),
                            ),
                        ),
                    );
                };
        },
        545: (e, t, a) => {
            a.d(t, { w: () => _ });
            var s = a(6483),
                n = a.n(s),
                r = a(6179),
                i = a.n(r);
            const o = 'SceneWrapper_base_85',
                c = 'SceneWrapper_base__down_fc',
                l = 'SceneWrapper_base__moveSpaceDisabled_67',
                _ = ({
                    children: e,
                    moveSpace: t,
                    onMouseOver3dScene: a,
                    onDragStateChange: s,
                    isMoveSpaceEnabled: _ = !0,
                }) => {
                    const u = (0, r.useState)(!1),
                        m = u[0],
                        d = u[1],
                        E = (0, r.useState)({ x: 0, y: 0 }),
                        p = E[0],
                        g = E[1],
                        b = (0, r.createRef)(),
                        R = (0, r.useCallback)(() => {
                            d(!1), null == s || s(!1);
                        }, [s]);
                    (0, r.useEffect)(
                        () => (window.addEventListener('mouseup', R), () => window.removeEventListener('mouseup', R)),
                        [R],
                    );
                    const v = (0, r.useCallback)(
                            (e) => {
                                if (!b.current) return;
                                const t = b.current.getBoundingClientRect(),
                                    a = t.width,
                                    s = t.height;
                                return !(
                                    0 === e.clientX ||
                                    0 === e.clientY ||
                                    e.clientX >= a - 1 ||
                                    e.clientY >= s - 1
                                );
                            },
                            [b],
                        ),
                        S = (0, r.useCallback)(
                            (e) => {
                                e.preventDefault(),
                                    0 === e.button &&
                                        v(e) &&
                                        _ &&
                                        (d(!0), null == s || s(!0), g({ x: e.clientX, y: e.clientY }));
                            },
                            [v, _, s],
                        ),
                        N = (0, r.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), m)) {
                                    if (!v(e)) return;
                                    const a = e.clientX !== p.x ? e.clientX - p.x : 0,
                                        s = e.clientY !== p.y ? e.clientY - p.y : 0;
                                    g({ x: e.clientX, y: e.clientY }), t({ dx: a, dy: s, dz: 0 });
                                }
                            },
                            [v, m, p.x, p.y, t],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), !_ || !v(e))) return;
                                const a = e.deltaY < 0;
                                t({ dx: 0, dy: 0, dz: a ? -600 : 600 });
                            },
                            [v, _, t],
                        ),
                        k = (0, r.useCallback)(() => {
                            d(!1), null == s || s(!1);
                        }, [s]),
                        P = (0, r.useCallback)(
                            (e) => {
                                0 === e.buttons && m && (d(!1), null == s || s(!1)), a({ isOver3dScene: !0 });
                            },
                            [s, a, m],
                        ),
                        y = (0, r.useCallback)(() => {
                            a({ isOver3dScene: !1 });
                        }, [a]);
                    return i().createElement(
                        'div',
                        {
                            ref: b,
                            className: n()(o, m && c, !_ && l),
                            onMouseDown: S,
                            onMouseMove: N,
                            onMouseUp: k,
                            onWheel: T,
                            onMouseOver: P,
                            onMouseOut: y,
                        },
                        e,
                    );
                };
        },
        6880: (e, t, a) => {
            a.d(t, { Z: () => s });
            const s = {
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
        },
        1609: (e, t, a) => {
            a.d(t, { Z: () => s });
            const s = {
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
                title: 'Reward_title_36',
                timer: 'Reward_timer_d3',
            };
        },
    },
]);
