'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [7852],
    {
        5739: (e, s, a) => {
            a.d(s, { Q: () => u });
            var r = a(6483),
                t = a.n(r),
                n = a(6179),
                i = a.n(n),
                o = a(3415),
                l = a(2862),
                _ = a(729),
                c = a(1609);
            const u = ({
                name: e,
                image: s,
                isPeriodic: a = !1,
                size: r = l.h2.Big,
                special: n,
                value: u,
                valueType: d,
                title: m,
                style: E,
                className: R,
                classNames: p,
                tooltipArgs: g,
                periodicIconTooltipArgs: P,
            }) => {
                const T = (0, _.c$)(r, n),
                    S = (0, _.i2)(n),
                    b = (0, _.m9)(u, d);
                return i().createElement(
                    'div',
                    { className: t()(c.Z.base, c.Z[`base__${r}`], R), style: E },
                    i().createElement(
                        o.l,
                        { tooltipArgs: g, className: c.Z.tooltipWrapper },
                        i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(
                                'div',
                                { className: t()(c.Z.image, null == p ? void 0 : p.image) },
                                T &&
                                    i().createElement('div', {
                                        className: t()(c.Z.highlight, null == p ? void 0 : p.highlight),
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${T}_highlight)`,
                                        },
                                    }),
                                s &&
                                    i().createElement('div', {
                                        className: t()(c.Z.icon, null == p ? void 0 : p.rewardIcon),
                                        style: { backgroundImage: `url(${s})` },
                                    }),
                                S &&
                                    i().createElement('div', {
                                        className: t()(c.Z.overlay, null == p ? void 0 : p.overlay),
                                        style: {
                                            backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${S}_overlay)`,
                                        },
                                    }),
                            ),
                            b &&
                                i().createElement(
                                    'div',
                                    {
                                        className: t()(
                                            c.Z.info,
                                            c.Z[`info__${e}`],
                                            d === l.$h.MULTI && c.Z.info__multi,
                                            null == p ? void 0 : p.info,
                                        ),
                                    },
                                    b,
                                ),
                            m && i().createElement('div', { className: c.Z.title }, m),
                        ),
                    ),
                    a &&
                        i().createElement(
                            o.l,
                            { tooltipArgs: P },
                            i().createElement('div', {
                                className: t()(c.Z.timer, null == p ? void 0 : p.periodicIcon),
                            }),
                        ),
                );
            };
        },
        2862: (e, s, a) => {
            let r, t, n, i, o, l, _, c;
            (a.d(s, { $h: () => i, A2: () => l, E4: () => r, h2: () => n, kK: () => o, sh: () => _ }),
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
                        (e.BattleAchievement = 'dossier_achievement'),
                        (e.EquipCoin = 'equipCoin'));
                })(t || (t = {})),
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
                })(n || (n = {})),
                (function (e) {
                    ((e.MULTI = 'multi'),
                        (e.CURRENCY = 'currency'),
                        (e.PREMIUM_PLUS = 'premium_plus'),
                        (e.NUMBER = 'number'),
                        (e.STRING = 'string'));
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
                })(o || (o = {})),
                (function (e) {
                    e.BATTLE_BOOSTER = 'battleBooster';
                })(l || (l = {})),
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
                })(_ || (_ = {})),
                (function (e) {
                    ((e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background'));
                })(c || (c = {})));
        },
        729: (e, s, a) => {
            a.d(s, { c$: () => P, i2: () => T, m9: () => S, p3: () => u, pI: () => p, ry: () => E });
            var r = a(2372),
                t = a(6179),
                n = a.n(t),
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
                l = [i.E4.Gold, i.E4.Credits, i.E4.Crystal, i.E4.FreeXp],
                _ = [i.E4.BattlePassPoints, i.E4.EquipCoin],
                c = [i.E4.PremiumPlus, i.E4.Premium],
                u = (e) =>
                    o.includes(e)
                        ? i.$h.MULTI
                        : l.includes(e)
                          ? i.$h.CURRENCY
                          : _.includes(e)
                            ? i.$h.NUMBER
                            : c.includes(e)
                              ? i.$h.PREMIUM_PLUS
                              : i.$h.STRING,
                d = ['engravings', 'backgrounds'],
                m = ['engraving', 'background'],
                E = (e, s = i.h2.Small) => {
                    const a = e.name,
                        r = e.type,
                        t = e.value,
                        n = e.icon,
                        o = e.item,
                        l = e.dogTagType,
                        _ = ((e) => {
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
                        })(s);
                    switch (a) {
                        case 'basic':
                        case 'plus':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.${r}_${t}`;
                        case 'premium':
                        case 'premium_plus':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.${a}_${t}`;
                        case 'items':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.${o}`;
                        case 'blueprints':
                        case 'blueprintsAny':
                        case 'finalBlueprints':
                            return `R.images.gui.maps.icons.blueprints.fragment.${s}.${n}`;
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
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.${n}`;
                        case 'entitlements':
                            return 'big' === s
                                ? e.iconBig.replace('..', 'img://gui')
                                : e.iconSmall.replace('..', 'img://gui');
                        case 'crewBooks':
                            return `R.images.gui.maps.icons.crewBooks.books.${s}.${n}`;
                        case 'dogTagComponents':
                            return ((e, s, a) => {
                                const r = d[e];
                                if (r) {
                                    const t = R.images.gui.maps.icons.dogtags.$dyn(s).$dyn(r),
                                        n = t.$dyn(a);
                                    return n ? `${n}` : `${t.$dyn(m[e])}`;
                                }
                                return (
                                    console.error(
                                        'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                    ),
                                    ''
                                );
                            })(l, s, n);
                        case 'dossier_badge':
                            return `R.images.gui.maps.icons.quests.bonuses.badges.${_}.${n}`;
                        case 'dossier_achievement':
                            return `R.images.gui.maps.icons.achievement.${_}.${n}`;
                        case 'xp':
                        case 'xpFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.exp`;
                        case 'creditsFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.credits`;
                        case 'tankmenXPFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.tankmenXP`;
                        case 'dailyXPFactor':
                        case 'freeXPFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.freeXP`;
                        case 'premiumTank':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.vehicles`;
                        case 'premiumTank_rent':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.vehicles_rent`;
                        case 'styleProgressToken':
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.style_3d`;
                        case 'collectionItem':
                            return `R.images.gui.maps.icons.collectionItems.${_}.${n}`;
                        case 'newYearSlot':
                            return `R.images.gui.maps.icons.newYear.rewards.${s}.slot`;
                        default:
                            return `R.images.gui.maps.icons.quests.bonuses.${s}.${a}`;
                    }
                },
                p = (e, s, a) => {
                    const r = s && { contentId: s };
                    return Object.assign(
                        {
                            args: e,
                            isEnabled: Boolean((e && e.tooltipId) || s),
                            ignoreMouseClick: !0,
                            ignoreShowDelay: !s,
                        },
                        r,
                        a,
                    );
                },
                g = [i.h2.Small, i.h2.Big],
                P = (e, s) => {
                    if (void 0 === s || !g.includes(e)) return null;
                    switch (s) {
                        case i.kK.BATTLE_BOOSTER:
                        case i.kK.BATTLE_BOOSTER_REPLACE:
                            return i.A2.BATTLE_BOOSTER;
                    }
                },
                T = (e) => {
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
                S = (e, s) => {
                    if (void 0 === e) return null;
                    switch (s) {
                        case i.$h.MULTI: {
                            const s = Number(e);
                            return isFinite(s) && s > 1 ? `x${Math.floor(s)}` : null;
                        }
                        case i.$h.CURRENCY:
                        case i.$h.NUMBER:
                            return n().createElement(r.A, { format: 'integral', value: Number(e) });
                        case i.$h.PREMIUM_PLUS: {
                            const s = Number(e);
                            return isNaN(s) ? e : null;
                        }
                        default:
                            return e;
                    }
                };
        },
        7852: (e, s, a) => {
            (a.r(s), a.d(s, { default: () => ne }));
            var r = a(6179),
                t = a.n(r),
                n = a(5415),
                i = a(9480),
                o = a(3403),
                l = a(3215),
                _ = a(4598);
            const c = (0, l.q)()(({ observableModel: e }) => {
                    const s = { root: e.object(), rewardRenderers: e.array('rewardRenderers') };
                    return Object.assign({}, s);
                }, _.Bi),
                u = c[0],
                d = c[1],
                m = 'LevelsRewards_base_64';
            var E = a(6483),
                p = a.n(E),
                g = a(2862),
                P = a(729),
                T = a(3649),
                S = a(5739);
            const b = 'Rewards_base_26',
                N = 'Rewards_base__vertical_9f',
                w = 'Rewards_reward_7b',
                D = 'Rewards_reward__vertical_c6';
            function I() {
                return (
                    (I = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var s = 1; s < arguments.length; s++) {
                                  var a = arguments[s];
                                  for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                              }
                              return e;
                          }),
                    I.apply(null, arguments)
                );
            }
            const B = t().memo(
                    ({
                        data: e,
                        size: s = g.h2.Big,
                        isVertical: a = !1,
                        count: n,
                        classMix: i,
                        rewardItemClassMix: o,
                        boxRewardTooltip: l,
                        boxRewardValue: _,
                        boxRewardClassName: c,
                        boxRewardClassNames: u,
                    }) => {
                        const d = (0, r.useMemo)(
                                () => (n && n < e.length ? `R.images.gui.maps.icons.quests.bonuses.${s}.default` : ''),
                                [n, e.length, s],
                            ),
                            m =
                                _ ||
                                (0, T.uF)(R.strings.tooltips.quests.awards.additional.bottom(), {
                                    count: e.length - (n || 0),
                                }),
                            E = p()(b, a && N, i),
                            P = p()(w, a && D, o);
                        return t().createElement(
                            'div',
                            { className: E },
                            d
                                ? t().createElement(
                                      t().Fragment,
                                      null,
                                      e
                                          .slice(0, n)
                                          .map((e, a) =>
                                              t().createElement(
                                                  'div',
                                                  { key: a, className: P },
                                                  t().createElement(S.Q, I({ size: s }, e)),
                                              ),
                                          ),
                                      t().createElement(
                                          'div',
                                          { className: P },
                                          t().createElement(S.Q, {
                                              name: 'more',
                                              image: d,
                                              size: s,
                                              value: m,
                                              tooltipArgs: l,
                                              className: c,
                                              classNames: u,
                                          }),
                                      ),
                                  )
                                : e.map((e, a) =>
                                      t().createElement(
                                          'div',
                                          { key: a, className: P },
                                          t().createElement(S.Q, I({ size: s }, e)),
                                      ),
                                  ),
                        );
                    },
                ),
                v = 'RewardsColumn_base_dd',
                h = 'RewardsColumn_background_f8',
                U = 'RewardsColumn_background__current_56',
                k = 'RewardsColumn_background__disabled_77',
                O = 'RewardsColumn_backgroundPattern_50',
                A = 'RewardsColumn_backgroundPattern__current_10',
                G = 'RewardsColumn_backgroundPattern__disabled_b6',
                y = 'RewardsColumn_rewards_2a',
                x = 'RewardsColumn_rewards__disabled_5b',
                f = 'RewardsColumn_rewardItem_47',
                C = ({ idx: e, isLevelAchieved: s, isCurrentLevel: a, rewardsGroup: r, mediaSize: o }) => {
                    const l = r.length > 7 ? 6 : r.length,
                        _ = {
                            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                            args: { showedCount: l, idx: e },
                        },
                        c = o >= n.cJ.Large ? g.h2.Big : g.h2.Small,
                        u = i.map(r, (s) => ({
                            name: s.name,
                            image: (0, P.ry)(s, c),
                            special: s.overlayType,
                            value: s.value,
                            valueType: (0, P.p3)(s.name),
                            tooltipArgs: (0, P.pI)(
                                { tooltipId: s.tooltipId, idx: e, guestType: s.name },
                                Number(s.tooltipContentId),
                            ),
                        }));
                    return t().createElement(
                        'div',
                        { className: v },
                        t().createElement(
                            'div',
                            { className: p()(h, a && U, !s && k) },
                            t().createElement('div', { className: p()(O, a && A, !s && G) }),
                        ),
                        t().createElement(
                            'div',
                            { className: p()(y, (!s || a) && x) },
                            t().createElement(B, {
                                data: u,
                                size: c,
                                count: l,
                                boxRewardTooltip: _,
                                rewardItemClassMix: f,
                                isVertical: !0,
                            }),
                        ),
                    );
                };
            var M = a(6373);
            const L = 'Bridge_base_aa',
                $ = 'Bridge_base__achieved_a3',
                Y = 'Bridge_lock_38',
                q = R.strings.ny.levelsRewards.lock.tooltip,
                F = ({ isAchieved: e }) =>
                    t().createElement(
                        'div',
                        { className: p()(L, e && $) },
                        !e &&
                            t().createElement(
                                M.i,
                                { header: q.header(), body: q.description() },
                                t().createElement('div', { className: Y }),
                            ),
                    ),
                X = 'RewardsHeader_base_2a',
                Q = 'RewardsHeader_level_3f',
                Z = 'RewardsHeader_border_65',
                z = 'RewardsHeader_border__current_91',
                H = 'RewardsHeader_border__disabled_48',
                K = 'RewardsHeader_backlight_57',
                j = 'RewardsHeader_backlight__small_ce',
                W = 'RewardsHeader_textWrapper_b5',
                V = 'RewardsHeader_levelText_35',
                J = 'RewardsHeader_levelText__current_34',
                ee = 'RewardsHeader_levelText__disabled_eb',
                se = ({ levelText: e, isLevelAchieved: s, isCurrentLevel: a, idx: r }) =>
                    t().createElement(
                        'div',
                        { className: X },
                        r > 0 && t().createElement(F, { isAchieved: s }),
                        t().createElement(
                            'div',
                            { className: Q },
                            t().createElement('div', { className: p()(Z, a && z, !s && H) }),
                            a &&
                                t().createElement(
                                    'div',
                                    null,
                                    t().createElement('div', { className: K }),
                                    t().createElement('div', { className: p()(K, j) }),
                                ),
                            t().createElement(
                                'div',
                                { className: W },
                                t().createElement('div', { className: p()(V, a && J, !s && ee) }, e),
                            ),
                        ),
                    );
            function ae() {
                return (
                    (ae = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var s = 1; s < arguments.length; s++) {
                                  var a = arguments[s];
                                  for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
                              }
                              return e;
                          }),
                    ae.apply(null, arguments)
                );
            }
            const re = (0, o.Pi)(() => {
                    const e = (0, n.GS)().mediaSize,
                        s = d().model.rewardRenderers;
                    return t().createElement(
                        'div',
                        { className: m },
                        i.map(s.get().items, (s, a) =>
                            t().createElement(
                                'div',
                                { key: a },
                                t().createElement(se, s),
                                t().createElement(C, ae({}, s, { rewardsGroup: s.rewardsGroup.items, mediaSize: e })),
                            ),
                        ),
                    );
                }),
                te = 'NyRewardsInfoView_base_bb',
                ne = () =>
                    t().createElement(
                        u,
                        { options: { context: 'model.rewardsModel' } },
                        t().createElement('div', { className: te }, t().createElement(re, null)),
                    );
        },
        1609: (e, s, a) => {
            a.d(s, { Z: () => r });
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
                title: 'Reward_title_36',
                timer: 'Reward_timer_d3',
            };
        },
    },
]);
