'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [7506],
    {
        280: (e, a, t) => {
            t.d(a, { z: () => c });
            var s = t(6483),
                n = t.n(s),
                r = t(3649),
                i = t(6179),
                o = t.n(i),
                l = t(5287);
            const c = ({ binding: e, text: a = '', classMix: t, alignment: s = r.v2.left, formatWithBrackets: c }) => {
                if (null === a) return console.error("FormatText was supplied with 'null'"), null;
                const _ = c && e ? (0, r.WU)(a, e) : a;
                return o().createElement(
                    i.Fragment,
                    null,
                    _.split('\n').map((a, c) =>
                        o().createElement(
                            'div',
                            { className: n()(l.Z.base, t), key: `${a}-${c}` },
                            (0, r.Uw)(a, s, e).map((e, a) => o().createElement(i.Fragment, { key: `${a}-${e}` }, e)),
                        ),
                    ),
                );
            };
        },
        9766: (e, a, t) => {
            t.d(a, { z: () => s.z });
            var s = t(280);
            t(8082);
        },
        8082: (e, a, t) => {
            t(3649);
        },
        1504: (e, a, t) => {
            t.d(a, { $: () => l });
            var s = t(6179),
                n = t.n(s),
                r = t(3616);
            const i = ['children'];
            function o() {
                return (
                    (o = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                              }
                              return e;
                          }),
                    o.apply(null, arguments)
                );
            }
            const l = (e) => {
                let a = e.children,
                    t = (function (e, a) {
                        if (null == e) return {};
                        var t = {};
                        for (var s in e)
                            if ({}.hasOwnProperty.call(e, s)) {
                                if (a.indexOf(s) >= 0) continue;
                                t[s] = e[s];
                            }
                        return t;
                    })(e, i);
                return n().createElement(
                    r.Z,
                    o(
                        {
                            decoratorId:
                                R.views.common.pop_over_window.backport_pop_over.BackportPopOverWindow('resId'),
                            contentId: R.views.common.pop_over_window.backport_pop_over.BackportPopOverContent('resId'),
                        },
                        t,
                    ),
                    a,
                );
            };
        },
        2862: (e, a, t) => {
            let s, n, r, i, o, l, c, _;
            t.d(a, { $h: () => i, A2: () => l, E4: () => s, h2: () => r, kK: () => o, sh: () => c }),
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
                })(l || (l = {})),
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
                })(c || (c = {})),
                (function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(_ || (_ = {}));
        },
        729: (e, a, t) => {
            t.d(a, { c$: () => g, i2: () => v, m9: () => w, p3: () => m, pI: () => b, ry: () => p });
            var s = t(2372),
                n = t(6179),
                r = t.n(n),
                i = t(2862);
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
                c = [i.E4.BattlePassPoints, i.E4.EquipCoin],
                _ = [i.E4.PremiumPlus, i.E4.Premium],
                m = (e) =>
                    o.includes(e)
                        ? i.$h.MULTI
                        : l.includes(e)
                          ? i.$h.CURRENCY
                          : c.includes(e)
                            ? i.$h.NUMBER
                            : _.includes(e)
                              ? i.$h.PREMIUM_PLUS
                              : i.$h.STRING,
                u = ['engravings', 'backgrounds'],
                d = ['engraving', 'background'],
                p = (e, a = i.h2.Small) => {
                    const t = e.name,
                        s = e.type,
                        n = e.value,
                        r = e.icon,
                        o = e.item,
                        l = e.dogTagType,
                        c = ((e) => {
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
                        })(a);
                    switch (t) {
                        case 'basic':
                        case 'plus':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.${s}_${n}`;
                        case 'premium':
                        case 'premium_plus':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.${t}_${n}`;
                        case 'items':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.${o}`;
                        case 'blueprints':
                        case 'blueprintsAny':
                        case 'finalBlueprints':
                            return `R.images.gui.maps.icons.blueprints.fragment.${a}.${r}`;
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
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.${r}`;
                        case 'entitlements':
                            return 'big' === a
                                ? e.iconBig.replace('..', 'img://gui')
                                : e.iconSmall.replace('..', 'img://gui');
                        case 'crewBooks':
                            return `R.images.gui.maps.icons.crewBooks.books.${a}.${r}`;
                        case 'dogTagComponents':
                            return ((e, a, t) => {
                                const s = u[e];
                                if (s) {
                                    const n = R.images.gui.maps.icons.dogtags.$dyn(a).$dyn(s),
                                        r = n.$dyn(t);
                                    return r ? `${r}` : `${n.$dyn(d[e])}`;
                                }
                                return (
                                    console.error(
                                        'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                    ),
                                    ''
                                );
                            })(l, a, r);
                        case 'dossier_badge':
                            return `R.images.gui.maps.icons.quests.bonuses.badges.${c}.${r}`;
                        case 'dossier_achievement':
                            return `R.images.gui.maps.icons.achievement.${c}.${r}`;
                        case 'xp':
                        case 'xpFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.exp`;
                        case 'creditsFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.credits`;
                        case 'tankmenXPFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.tankmenXP`;
                        case 'dailyXPFactor':
                        case 'freeXPFactor':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.freeXP`;
                        case 'premiumTank':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.vehicles`;
                        case 'premiumTank_rent':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.vehicles_rent`;
                        case 'styleProgressToken':
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.style_3d`;
                        case 'collectionItem':
                            return `R.images.gui.maps.icons.collectionItems.${c}.${r}`;
                        case 'newYearSlot':
                            return `R.images.gui.maps.icons.newYear.rewards.${a}.slot`;
                        default:
                            return `R.images.gui.maps.icons.quests.bonuses.${a}.${t}`;
                    }
                },
                b = (e, a, t) => {
                    const s = a && { contentId: a };
                    return Object.assign(
                        {
                            args: e,
                            isEnabled: Boolean((e && e.tooltipId) || a),
                            ignoreMouseClick: !0,
                            ignoreShowDelay: !a,
                        },
                        s,
                        t,
                    );
                },
                E = [i.h2.Small, i.h2.Big],
                g = (e, a) => {
                    if (void 0 === a || !E.includes(e)) return null;
                    switch (a) {
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
                w = (e, a) => {
                    if (void 0 === e) return null;
                    switch (a) {
                        case i.$h.MULTI: {
                            const a = Number(e);
                            return isFinite(a) && a > 1 ? `x${Math.floor(a)}` : null;
                        }
                        case i.$h.CURRENCY:
                        case i.$h.NUMBER:
                            return r().createElement(s.A, { format: 'integral', value: Number(e) });
                        case i.$h.PREMIUM_PLUS: {
                            const a = Number(e);
                            return isNaN(a) ? e : null;
                        }
                        default:
                            return e;
                    }
                };
        },
        4532: (e, a, t) => {
            t.d(a, { M: () => n });
            var s = t(6179);
            const n = (e, a = []) => {
                const t = (0, s.useRef)(),
                    n = (0, s.useCallback)((...a) => {
                        t.current && t.current(), (t.current = e(...a));
                    }, a);
                return (
                    (0, s.useEffect)(
                        () => () => {
                            t.current && t.current();
                        },
                        [n],
                    ),
                    n
                );
            };
        },
        3305: (e, a, t) => {
            t.d(a, { H: () => n });
            var s = t(6179);
            const n = (e, a) => {
                (0, s.useEffect)(() => {
                    let a = null;
                    return (
                        (a = requestAnimationFrame(() => {
                            a = requestAnimationFrame(() => {
                                (a = null), e();
                            });
                        })),
                        () => {
                            null !== a && cancelAnimationFrame(a);
                        }
                    );
                }, a);
            };
        },
        4785: (e, a, t) => {
            t.d(a, { w: () => s });
            const s = (e, a) =>
                Object.keys(e).length === Object.keys(a).length &&
                Object.keys(e).every((t) => Object.prototype.hasOwnProperty.call(a, t) && e[t] === a[t]);
        },
        4069: (e, a, t) => {
            t.d(a, { A: () => l });
            var s = t(6179),
                n = t.n(s),
                r = t(6808);
            const i = [
                'width',
                'height',
                'getSrcByFrame',
                'frameCount',
                'onAnimate',
                'frameTime',
                'initialFrameIndex',
                'loop',
                'state',
                'onAnimationComplete',
            ];
            function o() {
                return (
                    (o = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                              }
                              return e;
                          }),
                    o.apply(null, arguments)
                );
            }
            const l = (0, s.memo)((e) => {
                let a = e.width,
                    t = e.height,
                    l = e.getSrcByFrame,
                    c = e.frameCount,
                    _ = e.onAnimate,
                    m = void 0 === _ ? r.Bi : _,
                    u = e.frameTime,
                    d = void 0 === u ? 33 : u,
                    p = e.initialFrameIndex,
                    b = void 0 === p ? 0 : p,
                    E = e.loop,
                    g = void 0 === E || E,
                    R = e.state,
                    v = void 0 === R ? 'play' : R,
                    w = e.onAnimationComplete,
                    h = void 0 === w ? r.Bi : w,
                    y = (function (e, a) {
                        if (null == e) return {};
                        var t = {};
                        for (var s in e)
                            if ({}.hasOwnProperty.call(e, s)) {
                                if (a.indexOf(s) >= 0) continue;
                                t[s] = e[s];
                            }
                        return t;
                    })(e, i);
                const S = (0, s.useRef)(null);
                return (
                    (0, s.useEffect)(() => {
                        const e = S.current;
                        if (!e) return;
                        const s = c - 1,
                            n = e.getContext('2d'),
                            r = (s) => {
                                n.clearRect(0, 0, e.width, e.height), n.drawImage(s, 0, 0, a, t);
                            };
                        if ('stop' === v) {
                            const e = l(0),
                                a = new Image();
                            a.src = e;
                            const t = () => r(a);
                            return a.addEventListener('load', t), () => a.removeEventListener('load', t);
                        }
                        const i = ((e, a) => {
                                const t = [];
                                for (let s = 0; s < e; s++) {
                                    const e = new Image();
                                    (e.src = a(s)), t.push(e);
                                }
                                return t;
                            })(c, l),
                            o = ((e, a = 0) => {
                                let t = a;
                                return () => {
                                    const a = t;
                                    return (t += 1), t > e && (t = 0), a;
                                };
                            })(s, b),
                            _ = setInterval(() => {
                                const e = o(),
                                    a = i[e];
                                r(i[e]), m(e, a), e === s && (h(), g || clearInterval(_));
                            }, d);
                        return () => clearInterval(_);
                    }, [c, d, l, t, b, g, m, h, v, a]),
                    n().createElement('canvas', o({}, y, { width: a, height: t, ref: S }))
                );
            });
        },
        3859: (e, a, t) => {
            t.d(a, { cg: () => v, uu: () => b });
            var s = t(6483),
                n = t.n(s),
                r = t(4785),
                i = t(6179),
                o = t.n(i),
                l = t(7298),
                c = t(4069),
                _ = t(4385);
            const m = ['children'],
                u = ['children'];
            function d(e, a) {
                if (null == e) return {};
                var t = {};
                for (var s in e)
                    if ({}.hasOwnProperty.call(e, s)) {
                        if (a.indexOf(s) >= 0) continue;
                        t[s] = e[s];
                    }
                return t;
            }
            function p() {
                return (
                    (p = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                              }
                              return e;
                          }),
                    p.apply(null, arguments)
                );
            }
            const b = {
                    idle: { state: 'idle', nextState: 'start', timeout: 400 },
                    start: { state: 'start', nextState: 'bump', timeout: 960 },
                    bump: { state: 'bump', nextState: 'end', timeout: 33 },
                    end: { state: 'end', stop: !0 },
                },
                E = { width: 250, height: 250 },
                g = () => {},
                R = (e) =>
                    `R.images.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                v = ({
                    children: [e, a],
                    className: t,
                    classNames: s = {},
                    onAnimate: r = g,
                    animationSettings: m = b,
                    getSrcByFrameTwirly: u = R,
                    size: d = E,
                    drawSize: v = E,
                    isConvertationStart: w = !0,
                    initAnimationState: h = 'idle',
                }) => {
                    const y = (0, l._)(m, h, w).step.state;
                    return (
                        (0, i.useEffect)(() => {
                            r(y);
                        }, [y, r]),
                        o().createElement(
                            'div',
                            {
                                className: n()(_.Z.base, _.Z[`base__${y}`], t),
                                style: {
                                    width: 'number' == typeof d.width ? `${d.width}rem` : d.width,
                                    height: 'number' == typeof d.height ? `${d.height}rem` : d.height,
                                },
                            },
                            o().createElement(
                                'div',
                                { className: n()(_.Z.bumpStars, s.bumpStars) },
                                o().createElement('div', { className: n()(_.Z.star, _.Z.star__one, s.star) }),
                                o().createElement('div', { className: n()(_.Z.star, _.Z.star__second, s.star) }),
                                o().createElement('div', { className: n()(_.Z.star, _.Z.star__third, s.star) }),
                            ),
                            o().createElement('div', { className: n()(_.Z.bump, s.bump) }),
                            o().createElement('div', { className: n()(_.Z.bumpRays, s.bumpRays) }),
                            o().createElement(
                                'div',
                                { className: n()(_.Z.reward, s.reward) },
                                ('idle' === y || 'start' === y) &&
                                    o().createElement('div', { className: n()(_.Z.rewardFrom, s.rewardFrom) }, e),
                                ('end' === y || 'bump' === y) &&
                                    o().createElement('div', { className: n()(_.Z.rewardTo, s.rewardTo) }, a),
                            ),
                            ('start' === y || 'bump' === y) &&
                                o().createElement(
                                    c.A,
                                    p({}, v, {
                                        className: n()(_.Z.twirlyCanvas, s.twirlyCanvas),
                                        frameCount: 60,
                                        frameTime: 16,
                                        getSrcByFrame: u,
                                    }),
                                ),
                            o().createElement('div', { className: n()(_.Z.bumpParticles, s.bumpParticles) }),
                        )
                    );
                };
            (0, i.memo)(v, (e, a) => {
                e.children;
                const t = d(e, m),
                    s = (a.children, d(a, u));
                return (0, r.w)(t, s);
            });
        },
        2853: (e, a, t) => {
            t.d(a, { V: () => m });
            var s = t(6483),
                n = t.n(s),
                r = t(6373),
                i = t(6179),
                o = t.n(i),
                l = t(3768),
                c = t(2026);
            const _ = R.strings.ny.activityReward.tooltip,
                m = ({ name: e, icon: a, isClickable: t, isNew: s, isFlexable: i }) => {
                    const m = ((e) => {
                        switch (e) {
                            case l.pS.CelebrityAction:
                                return 'action';
                            case l.pS.Story:
                                return 'story';
                            case l.pS.Decoration:
                                return 'decoration';
                            default:
                                return e;
                        }
                    })(e);
                    return o().createElement(
                        r.i,
                        { header: _.header.$dyn(m), body: _.body.$dyn(m) },
                        o().createElement(
                            'div',
                            {
                                className: n()(
                                    c.Z.base,
                                    t && c.Z.base__completed,
                                    t && s && c.Z.base__animated,
                                    i && c.Z.base__flex,
                                ),
                            },
                            o().createElement(
                                'div',
                                { className: c.Z.inner },
                                o().createElement('div', {
                                    className: c.Z.icon,
                                    style: {
                                        backgroundImage: `url(${R.images.gui.maps.icons.newYear.rewards.activity.$dyn(a)})`,
                                    },
                                }),
                                e === l.pS.CelebrityAction && o().createElement('div', { className: c.Z.iconPlay }),
                            ),
                        ),
                    );
                };
        },
        2415: (e, a, t) => {
            t.d(a, { f: () => u });
            var s = t(6483),
                n = t.n(s),
                r = t(6179),
                i = t.n(r),
                o = t(4723),
                l = t(7314),
                c = t(3768),
                _ = t(5062);
            const m = (e, a) =>
                    R.images.gui.maps.vehicles.attachments.$dyn(a).$dyn(e) ||
                    `R.images.gui.maps.icons.quests.bonuses.${a}.attachment`,
                u = ({
                    name: e,
                    iconName: a,
                    tooltipId: t,
                    rarity: s,
                    value: r,
                    tooltipContentId: u,
                    size: d = c.$u.Small,
                    isFlexable: p,
                    withGlowAndSign: b = !0,
                    classNames: E,
                }) =>
                    i().createElement(
                        'div',
                        { className: n()(_.Z.base, _.Z[`base__${d}`]) },
                        i().createElement('div', {
                            className: _.Z.glow,
                            style: b
                                ? {
                                      backgroundImage: `url(R.images.gui.maps.icons.customization.rarity.glowWithSign.${d}.${s})`,
                                  }
                                : {},
                        }),
                        i().createElement(o.r, {
                            name: e,
                            image: m(a, d),
                            valueType: (0, l.n9)(e),
                            value: r,
                            tooltipId: t,
                            tooltipContentId: u,
                            size: d,
                            isFlexable: p,
                            classNames: E,
                        }),
                    );
        },
        4723: (e, a, t) => {
            t.d(a, { r: () => u });
            var s = t(6483),
                n = t.n(s),
                r = t(729),
                i = t(3415),
                o = t(6179),
                l = t.n(o),
                c = t(3768),
                _ = t(691);
            const m = R.strings.settings.LANGUAGE_CODE(),
                u = ({
                    name: e,
                    image: a,
                    value: t,
                    valueType: s,
                    isCompensation: o,
                    tooltipId: u,
                    tooltipContentId: d,
                    tooltipDecoratorId: p,
                    size: b = c.$u.Big,
                    isLabelHidden: E = !1,
                    isFlexable: g = !1,
                    classNames: R,
                    tooltipArgs: v,
                }) => {
                    const w = (0, r.pI)(Object.assign({ tooltipId: u, value: t }, v), Number(d), {
                            decoratorId: p,
                            ignoreMouseClick: !1,
                        }),
                        h = (0, r.m9)(t, s);
                    return l().createElement(
                        i.l,
                        { tooltipArgs: w, className: n()(_.Z.base, _.Z[`base__${b}`], g && _.Z.base__flex) },
                        l().createElement(
                            l().Fragment,
                            null,
                            l().createElement('div', {
                                className: _.Z.bonusIcon,
                                style: { backgroundImage: `url(${a})` },
                            }),
                            h &&
                                l().createElement(
                                    'div',
                                    {
                                        lang: m,
                                        className: n()(
                                            _.Z.info,
                                            E && _.Z.info__hidden,
                                            _.Z[`info__${e}`],
                                            _.Z[`info__${s}`],
                                            null == R ? void 0 : R.info,
                                        ),
                                    },
                                    h,
                                ),
                            o && l().createElement('div', { className: _.Z.compensationIcon }),
                        ),
                    );
                };
        },
        3396: (e, a, t) => {
            t.d(a, { S: () => p });
            var s = t(729),
                n = t(4532),
                r = t(7727),
                i = t(6179),
                o = t.n(i),
                l = t(3859),
                c = t(4723),
                _ = t(7314);
            const m = { width: 180, height: 180 },
                u = Object.assign({}, l.uu, { idle: Object.assign({}, l.uu.idle, { timeout: 0 }) }),
                d = (e, a) => ('vehicles' === e.name ? (0, s.ry)(e, a.toString()) : (0, _.gJ)(e, a)),
                p = ({
                    className: e,
                    bonusModel: a,
                    size: t,
                    playAnimation: s = !0,
                    isShowCompensation: i = !0,
                    animationSize: p = m,
                    animationSettings: b = u,
                }) => {
                    const E = (0, n.M)((e) => {
                            'start' === e && (0, r.G)('gui_gift_system_newyear_reward_transform');
                        }, []),
                        g = a.compensatedItem,
                        v = i ? 'idle' : 'end';
                    return o().createElement(
                        l.cg,
                        {
                            className: e,
                            animationSettings: b,
                            onAnimate: E,
                            isConvertationStart: s,
                            initAnimationState: v,
                            size: p,
                        },
                        [
                            o().createElement(c.r, {
                                key: 1,
                                name: g.name,
                                image: d(g, t),
                                value: g.value,
                                valueType: (0, _.n9)(g.name),
                                size: t,
                            }),
                            o().createElement(c.r, {
                                key: 2,
                                name: a.name,
                                image: (0, _.gJ)(a, t),
                                value: a.value,
                                valueType: (0, _.n9)(a.name),
                                isCompensation: a.isCompensation,
                                tooltipId: a.tooltipId,
                                tooltipContentId: a.tooltipContentId,
                                tooltipDecoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                size: t,
                            }),
                        ],
                    );
                };
        },
        489: (e, a, t) => {
            t.d(a, { C: () => E, u: () => g });
            var s = t(6483),
                n = t.n(s),
                r = t(1504),
                i = t(2056),
                o = t(7869),
                l = t(3305),
                c = t(7727),
                _ = t(3649),
                m = t(6179),
                u = t.n(m),
                d = t(7314),
                p = t(3768),
                b = t(4823);
            const E = (e) => e.replace(/:|-/g, '_'),
                g = (0, m.memo)(
                    ({
                        bonus: e,
                        options: a,
                        size: t = p.$u.Small,
                        className: s,
                        isCurrentProgressionCompleted: g,
                        isProgressionReward: v,
                        isFlexable: w,
                    }) => {
                        const h = e.level,
                            y = e.discount,
                            S = e.selectedVehicle,
                            P = e.variadicID,
                            I = a || {},
                            C = I.disabled,
                            f = I.isPopoverOpened,
                            T = `${(0, d.by)(p.AC.VariadicDiscount, t)}.${p.AC.VariadicDiscount}`,
                            x = (0, d.Y1)() ? h : R.strings.roman_numerals.$dyn(`n_${h}`),
                            N = (0, m.useState)(!1),
                            A = N[0],
                            D = N[1],
                            k = (0, m.useState)(!1),
                            B = k[0],
                            O = k[1],
                            $ = !S && !B,
                            U = { variadicID: P, discount: y, isCurrentProgressionCompleted: g },
                            G = { popoverId: o.k, variadicID: P },
                            Z = { backgroundImage: `url('${S ? R.images.gui.maps.icons.vehicle.$dyn(E(S)) : T}')` },
                            M = (0, m.useCallback)(() => {
                                C || O(!0);
                            }, [C]),
                            L = (0, m.useCallback)(() => {
                                $ && g && !f && ((0, c.G)(R.sounds.hangar_newyear_slot_over()), D(!0));
                            }, [$, g, f]),
                            F = (0, m.useCallback)(() => {
                                A && ((0, c.G)(R.sounds.hangar_newyear_slot_over_off()), D(!1));
                            }, [A]);
                        (0, m.useEffect)(() => {
                            !$ && A && ((0, c.G)(R.sounds.hangar_newyear_slot_over_off()), D(!1));
                        }, [$, A]),
                            (0, l.H)(() => {
                                !f && B && O(!1);
                            }, [f, B]);
                        const q = n()(
                                b.Z.base,
                                b.Z[`base__${t}`],
                                C && b.Z.base__disabled,
                                S && b.Z.base__applied,
                                g && b.Z.base__currentProgressionCompleted,
                                v && b.Z.base__progressionReward,
                                w && b.Z.base__flex,
                                s,
                            ),
                            z = u().createElement(
                                i.u,
                                {
                                    contentId: R.views.lobby.new_year.tooltips.NyDiscountRewardTooltip('resId'),
                                    args: U,
                                },
                                u().createElement(
                                    'div',
                                    { className: q, onMouseEnter: L, onMouseLeave: F, onClick: M },
                                    u().createElement(
                                        'div',
                                        { className: b.Z.discountReward },
                                        u().createElement('div', { className: b.Z.icon, style: Z }),
                                        u().createElement('div', { className: b.Z.vehicleLevel }, x),
                                        u().createElement(
                                            'div',
                                            { className: b.Z.discountAmount },
                                            v
                                                ? R.strings.common.common.percent()
                                                : (0, _.uF)(R.strings.ny.percentageValue.withMinus(), { value: y }),
                                        ),
                                    ),
                                ),
                            );
                        return C || S || !g ? z : u().createElement(r.$, { args: G }, z);
                    },
                );
        },
        6278: (e, a, t) => {
            t.d(a, { e: () => m });
            var s = t(6483),
                n = t.n(s),
                r = t(729),
                i = t(6179),
                o = t.n(i),
                l = t(4723),
                c = t(7314),
                _ = t(6135);
            const m = ({ bonusModel: e, size: a, isLabelHidden: t, isFlexable: s, classNames: i, tooltipArgs: m }) => {
                const u = (0, r.c$)(a, e.overlayType),
                    d = (0, r.i2)(e.overlayType);
                return o().createElement(
                    'div',
                    { className: n()(_.Z.base, _.Z[`base__${a}`]) },
                    u &&
                        o().createElement('div', {
                            className: _.Z.highlight,
                            style: {
                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${u}_highlight)`,
                            },
                        }),
                    o().createElement(l.r, {
                        name: e.name,
                        image: (0, c.gJ)(e, a),
                        value: e.value,
                        valueType: (0, c.n9)(e.name),
                        isCompensation: e.isCompensation,
                        tooltipId: e.tooltipId,
                        tooltipContentId: e.tooltipContentId,
                        tooltipArgs: m,
                        size: a,
                        isLabelHidden: t,
                        isFlexable: s,
                        classNames: i,
                    }),
                    d &&
                        o().createElement('div', {
                            className: _.Z.overlay,
                            style: { backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${d}_overlay)` },
                        }),
                );
            };
        },
        8387: (e, a, t) => {
            t.d(a, { g: () => m });
            var s = t(6483),
                n = t.n(s),
                r = t(6179),
                i = t.n(r),
                o = t(4723),
                l = t(7314),
                c = t(3768),
                _ = t(3038);
            const m = ({
                name: e,
                tooltipId: a,
                image: t,
                overlayType: s,
                value: r,
                tooltipContentId: m,
                size: u = c.$u.Big,
                isFlexable: d,
                classNames: p,
            }) =>
                i().createElement(
                    'div',
                    { className: n()(_.Z.base, _.Z[`base__${u}`], d && _.Z.base__flex) },
                    i().createElement('div', {
                        className: _.Z.equipmentGlow,
                        style: { backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${s}_overlay)` },
                    }),
                    i().createElement(o.r, {
                        name: e,
                        image: t,
                        valueType: (0, l.n9)(e),
                        value: r,
                        tooltipId: a,
                        tooltipContentId: m,
                        size: u,
                        classNames: p,
                        isFlexable: d,
                    }),
                );
        },
        4284: (e, a, t) => {
            t.d(a, { d: () => b });
            var s = t(6483),
                n = t.n(s),
                r = t(6373),
                i = t(3649),
                o = t(6179),
                l = t.n(o),
                c = t(3768),
                _ = t(4479);
            const m = R.strings.ny.lootBoxAutoOpen.reward.premiumPlus,
                u = m.label(),
                d = m.tooltip.header(),
                p = m.tooltip.body(),
                b = ({ value: e, size: a = c.$u.Big, isFlexable: t = !1, classNames: s }) => {
                    const o = (0, i.uF)(u, { quantity: e }),
                        m = (0, i.uF)(d, { quantity: e });
                    return l().createElement(
                        r.i,
                        { header: m, body: p },
                        l().createElement(
                            'div',
                            {
                                className: n()(_.Z.base, _.Z[`base__${a}`], t && _.Z.base__flex),
                                lang: R.strings.settings.LANGUAGE_CODE(),
                            },
                            l().createElement('div', {
                                className: _.Z.icon,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.premium_plus_1)`,
                                },
                            }),
                            Number(e) > 1 &&
                                l().createElement('div', { className: n()(_.Z.info, null == s ? void 0 : s.info) }, o),
                        ),
                    );
                };
        },
        7506: (e, a, t) => {
            t.d(a, { Q: () => R });
            var s = t(6179),
                n = t.n(s),
                r = t(3396),
                i = t(489),
                o = t(2853),
                l = t(2415),
                c = t(4723),
                _ = t(7314),
                m = t(6278),
                u = t(8387),
                d = t(4284),
                p = t(5734),
                b = t(3768),
                E = t(1125);
            function g() {
                return (
                    (g = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                              }
                              return e;
                          }),
                    g.apply(null, arguments)
                );
            }
            const R = ({
                bonusModel: e,
                options: a,
                size: t = b.$u.Big,
                toyRewardOptions: s = {},
                isProgressionReward: R,
                isCurrentProgressionCompleted: v,
                compensationRewardOptions: w = {},
                activityRewardOptions: h = {},
                vehicleRewardOptions: y = {},
                isLabelHidden: S,
                isFlexable: P = !1,
                isPixelatedImage: I,
                level: C,
                classNames: f,
                tooltipArgs: T,
            }) =>
                (0, b.bT)(e)
                    ? n().createElement(
                          u.g,
                          g({}, e, { image: (0, _.gJ)(e, t, I), size: t, classNames: f, isFlexable: P }),
                      )
                    : (0, b.qI)(e)
                      ? n().createElement(
                            p.i,
                            g({ image: e.icon, bigImage: e.bigIcon, toyID: e.toyID, value: e.value, isFlexable: P }, s),
                        )
                      : (0, b.px)(e)
                        ? n().createElement(i.u, {
                              rewardLevel: C,
                              bonus: e,
                              options: a,
                              size: t,
                              className: null == f ? void 0 : f.discountReward,
                              isProgressionReward: R,
                              isCurrentProgressionCompleted: v,
                              isFlexable: P,
                          })
                        : (0, b.I5)(e)
                          ? n().createElement(d.d, g({}, e, { size: t, isFlexable: P, classNames: f }))
                          : e.isCompensation
                            ? n().createElement(r.S, g({ bonusModel: e, size: t }, w))
                            : (0, _.ri)(e.name)
                              ? n().createElement(o.V, g({}, e, h, { isFlexable: P }))
                              : (0, _.xj)(e.name)
                                ? n().createElement(E.g, g({ image: (0, _.gJ)(e, t, I), size: t }, e, y))
                                : (0, _.K8)(e.name)
                                  ? n().createElement(m.e, {
                                        bonusModel: e,
                                        size: t,
                                        classNames: f,
                                        tooltipArgs: T,
                                        isLabelHidden: S,
                                        isFlexable: P,
                                    })
                                  : (0, b.SB)(e)
                                    ? n().createElement(l.f, g({}, e, { size: t, classNames: f, isFlexable: P }))
                                    : n().createElement(c.r, {
                                          name: e.name,
                                          image: (0, _.gJ)(e, t, I),
                                          value: e.value,
                                          valueType: (0, _.n9)(e.name),
                                          isCompensation: e.isCompensation,
                                          tooltipId: e.tooltipId,
                                          tooltipContentId: e.tooltipContentId,
                                          tooltipArgs: T,
                                          size: t,
                                          isLabelHidden: S,
                                          isFlexable: P,
                                          classNames: f,
                                      });
        },
        5734: (e, a, t) => {
            t.d(a, { B: () => m, i: () => d });
            var s = t(6483),
                n = t.n(s),
                r = t(2056),
                i = t(6179),
                o = t.n(i),
                l = t(9025),
                c = t(729),
                _ = t(2862);
            let m;
            !(function (e) {
                (e.Medium = 'medium'), (e.Large = 'large');
            })(m || (m = {}));
            const u = R.views.lobby.new_year.tooltips,
                d = ({
                    image: e,
                    bigImage: a,
                    value: t,
                    size: s = m.Medium,
                    toyID: i,
                    isFlexable: d,
                    classNames: p,
                }) => {
                    const b = (0, c.m9)(t, _.$h.MULTI);
                    return o().createElement(
                        r.u,
                        { ignoreShowDelay: !0, contentId: u.NyDecorationTooltip('resId'), args: { toyID: i } },
                        o().createElement(
                            'div',
                            {
                                className: n()(l.Z.base, d && l.Z.base__flex, l.Z[`base__${s}`]),
                                lang: R.strings.settings.LANGUAGE_CODE(),
                            },
                            o().createElement(
                                'div',
                                { className: l.Z.image, style: { backgroundImage: `url(${s === m.Medium ? e : a})` } },
                                b &&
                                    o().createElement(
                                        'div',
                                        { className: n()(l.Z.counter, null == p ? void 0 : p.counter) },
                                        b,
                                    ),
                            ),
                        ),
                    );
                };
        },
        1125: (e, a, t) => {
            t.d(a, { g: () => v });
            var s = t(6483),
                n = t.n(s),
                r = t(9766),
                i = t(9690),
                o = t(3649),
                l = t(6179),
                c = t.n(l),
                _ = t(4723),
                m = t(3768),
                u = t(7665);
            const d = ['vehicleInfo', 'rentDays', 'rentBattles', 'size', 'theme', 'classNames'];
            function p() {
                return (
                    (p = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                              }
                              return e;
                          }),
                    p.apply(null, arguments)
                );
            }
            const b = R.strings.ny.giftMachine,
                E = R.images.gui.maps.icons.newYear.tank_types;
            let g;
            !(function (e) {
                (e.Light = 'light'), (e.Dark = 'dark');
            })(g || (g = {}));
            const v = (e) => {
                let a = e.vehicleInfo,
                    t = e.rentDays,
                    s = void 0 === t ? 0 : t,
                    l = e.rentBattles,
                    v = void 0 === l ? 0 : l,
                    w = e.size,
                    h = void 0 === w ? m.$u.S180x135 : w,
                    y = e.theme,
                    S = void 0 === y ? g.Light : y,
                    P = e.classNames,
                    I = (function (e, a) {
                        if (null == e) return {};
                        var t = {};
                        for (var s in e)
                            if ({}.hasOwnProperty.call(e, s)) {
                                if (a.indexOf(s) >= 0) continue;
                                t[s] = e[s];
                            }
                        return t;
                    })(e, d);
                const C = a.vehicleLvl,
                    f = a.vehicleName,
                    T = a.vehicleType,
                    x = (S === g.Light ? E.white_elite : E.blue_elite).$dyn(`${(0, o.BN)(T)}`),
                    N = s > 0 || v > 0;
                return c().createElement(
                    'div',
                    {
                        className: n()(u.Z.base, u.Z[`base__${h}`], u.Z[`base__${S}`], N && u.Z.base__withRent),
                        lang: R.strings.settings.LANGUAGE_CODE(),
                    },
                    c().createElement(_.r, p({ size: h, isLabelHidden: !0 }, I)),
                    s > 0 &&
                        c().createElement(r.z, {
                            text: b.rentDays(),
                            binding: { clockIcon: c().createElement('span', { className: u.Z.clockIcon }), days: s },
                            classMix: n()(u.Z.rent, null == P ? void 0 : P.rent),
                        }),
                    v > 0 &&
                        c().createElement(r.z, {
                            text: b.rentBattles(),
                            binding: { clockIcon: c().createElement('span', { className: u.Z.clockIcon }), battles: v },
                            classMix: n()(u.Z.rent, null == P ? void 0 : P.rent),
                        }),
                    c().createElement(
                        'div',
                        { className: n()(u.Z.vehicleInfo, null == P ? void 0 : P.info) },
                        (0, i.HG)(C),
                        c().createElement(
                            'div',
                            { className: u.Z.typeContainer },
                            c().createElement('div', {
                                className: u.Z.type,
                                style: { backgroundImage: `url('${x}')` },
                            }),
                        ),
                        f,
                    ),
                );
            };
        },
        7314: (e, a, t) => {
            t.d(a, {
                $N: () => b,
                K8: () => g,
                Y1: () => S,
                by: () => v,
                gJ: () => h,
                n9: () => y,
                ri: () => p,
                xj: () => E,
            });
            var s = t(2862),
                n = t(729),
                r = t(5433),
                i = t(3649),
                o = t(3768);
            const l = ['ko', 'no'],
                c = R.strings.settings.LANGUAGE_CODE(),
                _ = [
                    o.AC.Tman,
                    o.AC.GiftMachineToken,
                    o.AC.AddcEconomicBonuses,
                    o.AC.AchievementReward,
                    o.AC.Vehicles,
                    o.AC.EquipCoin,
                ],
                m = [o.pS.CelebrityAction, o.pS.Story, o.pS.Decoration],
                u = [o.pS.CelebrityAction, o.pS.Story],
                d = [o.AC.Vehicles, o.AC.AchievementReward],
                p =
                    (o.AC.RandomBooklet,
                    o.AC.RandomGuide,
                    o.AC.RandomDecoration,
                    o.AC.RandomInstruction,
                    o.AC.RandomCrewInstruction,
                    s.E4.Credits,
                    s.E4.Gold,
                    s.E4.FreeXp,
                    r._z.Iron,
                    r._z.Crystal,
                    r._z.Emerald,
                    r._z.Amber,
                    (e) => m.includes(e)),
                b = (e) => u.includes(e),
                E = (e) => e === s.E4.Vehicles,
                g = (e) => e === s.E4.Items,
                v = (e, a) => {
                    const t = 'R.images.gui.maps.icons';
                    return `${e === o.AC.AddcEconomicBonuses || e === s.E4.EquipCoin ? `${t}.newYear.rewards` : e === o.AC.AchievementReward ? `${t}.achievement` : e === o.AC.Vehicles ? 'R.images.gui.maps.shop.vehicles' : e === s.E4.CrewBooks ? 'R.images.gui.maps.icons.crewBooks.books' : `${t}.quests.bonuses`}.${(() => {
                        if (e === s.E4.EquipCoin) return a;
                        switch (a) {
                            case o.$u.Small:
                            case o.$u.Big:
                                return 'big';
                            default:
                                return (t = e), d.includes(t) ? a.replace('s', 'c_') : a;
                        }
                        var t;
                    })()}`;
                },
                w = [o.$u.S360x270, o.$u.S400x300, o.$u.S600x450],
                h = (e, a, t) => {
                    const s = e.name,
                        r = w.includes(a) || ((e) => _.includes(e))(s);
                    if (r) {
                        const n = v(s, a),
                            r = (({ name: e, icon: a, bigIcon: t, userName: s }) => {
                                switch (e) {
                                    case o.AC.Tman:
                                        return t;
                                    case o.AC.Customizations:
                                        return a;
                                    case o.AC.Vehicles:
                                        return (0, i.BN)(s);
                                    default:
                                        return a || e;
                                }
                            })(e);
                        '' === r && console.warn('empty icon');
                        return `${n}.${r}${t ? '_pixelated' : ''}`;
                    }
                    return (0, n.ry)(e, a.toString());
                },
                y = (e) => {
                    switch (e) {
                        case o.AC.Tman:
                        case o.AC.GiftMachineToken:
                        case o.AC.AddcEconomicBonuses:
                        case o.AC.RandomBooklet:
                        case o.AC.RandomGuide:
                        case o.AC.RandomDecoration:
                        case o.AC.RandomInstruction:
                        case o.AC.RandomCrewInstruction:
                            return s.$h.MULTI;
                        default:
                            return (0, n.p3)(e);
                    }
                },
                S = () => l.includes(c);
        },
        3768: (e, a, t) => {
            t.d(a, {
                $u: () => c,
                AC: () => u,
                I5: () => i,
                SB: () => l,
                bT: () => o,
                pS: () => d,
                px: () => r,
                qI: () => n,
            });
            var s = t(4484);
            const n = (e) => e.name === s.rv,
                r = (e) => e.name === s.Yw,
                i = (e) => e.name === s.SC,
                o = (e) => 'item' in e && e.item && e.item.startsWith('modernized'),
                l = (e) => 'icon' in e && 'attachment' === e.icon;
            let c, _, m, u, d;
            !(function (e) {
                (e.Small = 'small'),
                    (e.Big = 'big'),
                    (e.S180x135 = 's180x135'),
                    (e.S232x174 = 's232x174'),
                    (e.S296x222 = 's296x222'),
                    (e.S360x270 = 's360x270'),
                    (e.S400x300 = 's400x300'),
                    (e.S600x450 = 's600x450');
            })(c || (c = {})),
                (function (e) {
                    (e.None = 'noAnimation'),
                        (e.Default = 'defaultAnimation'),
                        (e.OnlyButton = 'onlyButtonAnimation'),
                        (e.OnlyText = 'onlyTextAnimation');
                })(_ || (_ = {})),
                (function (e) {
                    (e.Default = 'default'), (e.Big = 'Big');
                })(m || (m = {})),
                (function (e) {
                    (e.GiftMachineToken = 'battleToken'),
                        (e.Tman = 'tmanToken'),
                        (e.AchievementReward = 'dossier_achievement'),
                        (e.Customizations = 'customizations'),
                        (e.VariadicDiscount = 'variadicDiscount'),
                        (e.AddcEconomicBonuses = 'addcEconomicBonuses'),
                        (e.Vehicles = 'vehicles'),
                        (e.MarketplaceToken = 'ny_marketplace'),
                        (e.RandomBooklet = 'randomNyBooklet'),
                        (e.RandomGuide = 'randomNyGuide'),
                        (e.RandomDecoration = 'randomNyToy'),
                        (e.RandomInstruction = 'randomNyInstruction'),
                        (e.RandomCrewInstruction = 'randomNyCrewInstruction'),
                        (e.EquipCoin = 'equipCoin');
                })(u || (u = {})),
                (function (e) {
                    (e.CelebrityAction = 'questTokenAnim'),
                        (e.Story = 'questTokenStory'),
                        (e.Decoration = 'questTokenDecoration');
                })(d || (d = {}));
        },
        7298: (e, a, t) => {
            t.d(a, { _: () => i });
            var s = t(122),
                n = t(6179);
            const r = () => {},
                i = (e, a, t = !0) => {
                    const i = (0, n.useState)(e[a]),
                        o = i[0],
                        l = i[1],
                        c = (0, n.useRef)(r),
                        _ = (0, n.useCallback)(() => {
                            o.stop ||
                                (c.current(),
                                (c.current = (0, s.F)(() => {
                                    l(e[null == o ? void 0 : o.nextState]);
                                }, o.timeout)));
                        }, [o, e]);
                    return (
                        (0, n.useEffect)(() => (t && _(), () => c.current()), [t, _]),
                        {
                            step: o,
                            setStep: (0, n.useCallback)(
                                (a) => {
                                    l(e[a]);
                                },
                                [e],
                            ),
                            next: _,
                        }
                    );
                };
        },
        7869: (e, a, t) => {
            t.d(a, { k: () => s });
            const s = 'NYSelectVehicleForDiscountPopover';
        },
        4484: (e, a, t) => {
            t.d(a, { SC: () => n, Yw: () => r, rv: () => s });
            const s = 'ny25Toys',
                n = 'premium_plus',
                r = 'variadicDiscount';
        },
        5287: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = { base: 'FormatText_base_d0' };
        },
        4385: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'Convertation_base_86',
                bumpStars: 'Convertation_bumpStars_9e',
                bumpParticles: 'Convertation_bumpParticles_18',
                particlesCanvas: 'Convertation_particlesCanvas_97',
                bump: 'Convertation_bump_5e',
                bumpRays: 'Convertation_bumpRays_c0',
                twirlyCanvas: 'Convertation_twirlyCanvas_65',
                base__start: 'Convertation_base__start_e7',
                base__bump: 'Convertation_base__bump_26',
                base__end: 'Convertation_base__end_8c',
                reward: 'Convertation_reward_7e',
                rewardFrom: 'Convertation_rewardFrom_0b',
                rewardTo: 'Convertation_rewardTo_92',
                star: 'Convertation_star_06',
                star__one: 'Convertation_star__one_d7',
                star__second: 'Convertation_star__second_9e',
                star__third: 'Convertation_star__third_11',
            };
        },
        2026: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'ActivityReward_base_50',
                base__animated: 'ActivityReward_base__animated_b8',
                pulse: 'ActivityReward_pulse_3d',
                base__completed: 'ActivityReward_base__completed_02',
                base__flex: 'ActivityReward_base__flex_24',
                inner: 'ActivityReward_inner_39',
                icon: 'ActivityReward_icon_21',
                iconPlay: 'ActivityReward_iconPlay_02',
            };
        },
        5062: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = { base: 'AttachmentReward_base_a0', glow: 'AttachmentReward_glow_5c' };
        },
        691: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'CommonReward_base_c0',
                base__small: 'CommonReward_base__small_cb',
                base__big: 'CommonReward_base__big_4c',
                base__s180x135: 'CommonReward_base__s180x135_11',
                base__s232x174: 'CommonReward_base__s232x174_60',
                base__s296x222: 'CommonReward_base__s296x222_06',
                base__s360x270: 'CommonReward_base__s360x270_9a',
                base__s400x300: 'CommonReward_base__s400x300_02',
                base__s600x450: 'CommonReward_base__s600x450_8c',
                base__flex: 'CommonReward_base__flex_0e',
                bonusIcon: 'CommonReward_bonusIcon_a5',
                compensationIcon: 'CommonReward_compensationIcon_d9',
                info: 'CommonReward_info_37',
                info__hidden: 'CommonReward_info__hidden_1b',
                info__credits: 'CommonReward_info__credits_4b',
                info__gold: 'CommonReward_info__gold_73',
                info__crystal: 'CommonReward_info__crystal_f8',
                info__premiumTank: 'CommonReward_info__premiumTank_a6',
                info__style_3d: 'CommonReward_info__style_3d_7c',
                info__multi: 'CommonReward_info__multi_64',
            };
        },
        4823: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'DiscountReward_base_86',
                base__progressionReward: 'DiscountReward_base__progressionReward_49',
                base__currentProgressionCompleted: 'DiscountReward_base__currentProgressionCompleted_04',
                base__applied: 'DiscountReward_base__applied_fd',
                base__flex: 'DiscountReward_base__flex_0d',
                discountReward: 'DiscountReward_discountReward_5a',
                base__small: 'DiscountReward_base__small_74',
                base__big: 'DiscountReward_base__big_02',
                base__s180x135: 'DiscountReward_base__s180x135_18',
                base__s232x174: 'DiscountReward_base__s232x174_39',
                base__s296x222: 'DiscountReward_base__s296x222_e9',
                icon: 'DiscountReward_icon_ba',
                vehicleLevel: 'DiscountReward_vehicleLevel_0b',
                discountAmount: 'DiscountReward_discountAmount_cc',
            };
        },
        6135: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'ItemReward_base_34',
                overlay: 'ItemReward_overlay_47',
                base__small: 'ItemReward_base__small_38',
                base__big: 'ItemReward_base__big_a6',
                base__s180x135: 'ItemReward_base__s180x135_ff',
                base__s232x174: 'ItemReward_base__s232x174_61',
                base__s296x222: 'ItemReward_base__s296x222_64',
                base__s400x300: 'ItemReward_base__s400x300_c4',
                base__s600x450: 'ItemReward_base__s600x450_fe',
                highlight: 'ItemReward_highlight_21',
            };
        },
        3038: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'ModernizedEquipmentReward_base_d8',
                equipmentGlow: 'ModernizedEquipmentReward_equipmentGlow_05',
                base__small: 'ModernizedEquipmentReward_base__small_36',
                base__big: 'ModernizedEquipmentReward_base__big_09',
                base__s180x135: 'ModernizedEquipmentReward_base__s180x135_ba',
                base__s232x174: 'ModernizedEquipmentReward_base__s232x174_02',
                base__s296x222: 'ModernizedEquipmentReward_base__s296x222_5f',
                base__flex: 'ModernizedEquipmentReward_base__flex_8a',
            };
        },
        4479: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'PremiumReward_base_16',
                base__small: 'PremiumReward_base__small_21',
                base__big: 'PremiumReward_base__big_08',
                base__s180x135: 'PremiumReward_base__s180x135_68',
                base__s232x174: 'PremiumReward_base__s232x174_8f',
                base__s296x222: 'PremiumReward_base__s296x222_4b',
                base__s360x270: 'PremiumReward_base__s360x270_75',
                base__s400x300: 'PremiumReward_base__s400x300_92',
                base__s600x450: 'PremiumReward_base__s600x450_d2',
                base__flex: 'PremiumReward_base__flex_e2',
                icon: 'PremiumReward_icon_e2',
                info: 'PremiumReward_info_13',
            };
        },
        9025: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'ToyReward_base_1d',
                base__large: 'ToyReward_base__large_c7',
                base__flex: 'ToyReward_base__flex_3e',
                label: 'ToyReward_label_f7',
                image: 'ToyReward_image_46',
                counter: 'ToyReward_counter_85',
            };
        },
        7665: (e, a, t) => {
            t.d(a, { Z: () => s });
            const s = {
                base: 'VehicleReward_base_a9',
                vehicleInfo: 'VehicleReward_vehicleInfo_3e',
                base__s360x270: 'VehicleReward_base__s360x270_be',
                base__s400x300: 'VehicleReward_base__s400x300_67',
                base__s600x450: 'VehicleReward_base__s600x450_f0',
                base__withRent: 'VehicleReward_base__withRent_a4',
                base__dark: 'VehicleReward_base__dark_af',
                typeContainer: 'VehicleReward_typeContainer_19',
                type: 'VehicleReward_type_90',
                rent: 'VehicleReward_rent_6b',
                rent__hidden: 'VehicleReward_rent__hidden_34',
                clockIcon: 'VehicleReward_clockIcon_46',
            };
        },
    },
]);
