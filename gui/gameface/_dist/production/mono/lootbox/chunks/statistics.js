import { a as e, l as t } from './getRewardImage.js';
var o = ((e) => (
    (e.LootBox = 'lootBox'),
    (e.Vehicles = 'vehicles'),
    (e.Style = 'style'),
    (e.Style3D = 'style_3d'),
    (e.CrewMember = 'tmanToken'),
    (e.PremiumPlus = 'premium_plus'),
    (e.Credits = 'credits'),
    (e.Gold = 'gold'),
    (e.Crystal = 'crystal'),
    (e.FreeXP = 'freeXP'),
    (e.Customizations = 'customizations'),
    (e.Attachment = 'attachment'),
    (e.ExperimentalEquipment = 'experimental_equipment'),
    (e.Components = 'equipCoin'),
    (e.ImprovedEquipment = 'improved_equipment'),
    (e.BountyEquipment = 'trophy_equipment'),
    (e.StandardEquipment = 'standard_equipment'),
    (e.Directives = 'battleBooster_gift'),
    (e.MentoringLicense = 'mentoringLicense'),
    (e.CrewBook = 'crewBook'),
    (e.Guide = 'guide'),
    (e.Brochure = 'brochure'),
    (e.RecertificationForm = 'recertificationForm'),
    (e.Blueprints = 'blueprints'),
    (e.BattleBonusX5 = 'battle_bonus_x5'),
    (e.CrewBonusX3 = 'crew_bonus_x3'),
    (e.PersonalReserves = 'personal_reserves'),
    (e.Consumables = 'consumables'),
    (e.Rations = 'rations'),
    e
))(o || {});
const s = {
        [o.Vehicles]: 'vehicles',
        [o.Style]: 'style',
        [o.Style3D]: 'style_3d',
        [o.CrewMember]: 'tankman',
        [o.PremiumPlus]: 'premium_plus_universal',
        [o.Gold]: 'gold',
        [o.Crystal]: 'crystal',
        [o.Credits]: 'credits',
        [o.FreeXP]: 'freeXP',
        [o.Customizations]: 'customizations',
        [o.ExperimentalEquipment]: 'expequipments_gift',
        [o.Components]: 'equipCoin',
        [o.ImprovedEquipment]: 'deluxe_gift',
        [o.BountyEquipment]: 'trophy_gift',
        [o.StandardEquipment]: 'new_device_mi_gift',
        [o.Directives]: 'battle_booster_gift',
        [o.MentoringLicense]: 'mentoringLicense',
        [o.CrewBook]: 'crewBook',
        [o.Guide]: 'guide',
        [o.Brochure]: 'brochure',
        [o.RecertificationForm]: 'recertificationForm',
        [o.Blueprints]: 'blueprint_tube',
        [o.BattleBonusX5]: 'battle_bonus_x5',
        [o.CrewBonusX3]: 'crew_bonus_x3',
        [o.PersonalReserves]: 'personal_reserves',
        [o.Consumables]: 'consumables',
        [o.Rations]: 'rations',
    },
    r = [o.RecertificationForm],
    n = [o.Vehicles, o.Style, o.Style3D, o.Attachment],
    i = [
        o.CrewMember,
        o.Customizations,
        o.ExperimentalEquipment,
        o.ImprovedEquipment,
        o.BountyEquipment,
        o.StandardEquipment,
        o.Directives,
        o.CrewBook,
        o.Guide,
        o.Brochure,
        o.Blueprints,
        o.PersonalReserves,
        o.Consumables,
        o.Rations,
    ],
    a = (e) => e.split('_')[0] === o.LootBox,
    u = (e) => e.replace(`${o.LootBox}_`, ''),
    l = (e) => s[e] || e,
    d = (o, s) => {
        const r = l(o);
        return a(o) ? t(s, u(o)) : e(R.images, `gui.maps.icons.quests.bonuses.${s}.${r}`);
    },
    m = R.strings.tooltips.awardItem,
    c = (t, s) => {
        if (t.startsWith(o.LootBox)) {
            const e = t.slice(`${o.LootBox}_`.length);
            return {
                contentId: R.views.mono.lootbox.tooltips.box_tooltip('resId'),
                args: { boxCategory: e, eventName: s },
            };
        }
        if (n.includes(t) || i.includes(t))
            return {
                contentId: R.views.mono.lootbox.tooltips.statistics_category('resId'),
                args: { bonusesCategory: t, eventName: s },
            };
        if (t === o.MentoringLicense)
            return {
                contentId: R.views.lobby.crew.tooltips.MentoringLicenseTooltip('resId'),
                args: { bonusesCategory: t, eventName: s },
            };
        if (r.includes(t)) return { args: { bonusesCategory: t, eventName: s } };
        switch (t) {
            case o.PremiumPlus:
                return { header: m.premium_plus.header(), body: m.premium_plus.body() };
            case o.Credits:
                return { header: m.credits.header(), body: m.credits.body() };
            case o.Gold:
                return { header: m.gold.header(), body: m.gold.body() };
            case o.Crystal:
                return { header: m.crystal.header(), body: m.crystal.body() };
            case o.FreeXP:
                return { header: m.freeXP.header(), body: m.freeXP.body() };
            case o.Components:
                return { header: m.equipCoin.header(), body: m.equipCoin.body() };
            case o.BattleBonusX5:
                return {
                    header: R.strings.tooltips.quests.bonuses.token.battle_bonus_x5.header(),
                    body: R.strings.tooltips.quests.bonuses.token.battle_bonus_x5.body(),
                };
            case o.CrewBonusX3:
                return {
                    header: R.strings.tooltips.quests.bonuses.token.crew_bonus_x3.header(),
                    body: R.strings.tooltips.quests.bonuses.token.crew_bonus_x3.body(),
                };
            default:
                return {
                    header: e(R.strings, `tooltips.awardItem.${t}.header`),
                    body: e(R.strings, `tooltips.awardItem.${t}.body`),
                };
        }
    };
export { n as L, o as T, c as a, u as b, d as c, l as g, a as i };
