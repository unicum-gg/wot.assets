import { a as e, l as t } from './getRewardImage.js';
var s = ((e) => (
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
    (e.TrainingMaterials = 'training_materials'),
    (e.Blueprints = 'blueprints'),
    (e.BattleBonusX5 = 'battle_bonus_x5'),
    (e.CrewBonusX3 = 'crew_bonus_x3'),
    (e.PersonalReserves = 'personal_reserves'),
    (e.Consumables = 'consumables'),
    (e.Rations = 'rations'),
    e
))(s || {});
const o = {
        [s.Vehicles]: 'vehicles',
        [s.Style]: 'style',
        [s.Style3D]: 'style_3d',
        [s.CrewMember]: 'tankman',
        [s.PremiumPlus]: 'premium_plus_universal',
        [s.Gold]: 'gold',
        [s.Crystal]: 'crystal',
        [s.Credits]: 'credits',
        [s.FreeXP]: 'freeXP',
        [s.Customizations]: 'customizations',
        [s.ExperimentalEquipment]: 'expequipments_gift',
        [s.Components]: 'equipCoin',
        [s.ImprovedEquipment]: 'deluxe_gift',
        [s.BountyEquipment]: 'trophy_gift',
        [s.StandardEquipment]: 'new_device_mi_gift',
        [s.Directives]: 'battle_booster_gift',
        [s.TrainingMaterials]: 'training_materials',
        [s.Blueprints]: 'blueprint_tube',
        [s.BattleBonusX5]: 'battle_bonus_x5',
        [s.CrewBonusX3]: 'crew_bonus_x3',
        [s.PersonalReserves]: 'personal_reserves',
        [s.Consumables]: 'consumables',
        [s.Rations]: 'rations',
    },
    r = [s.Vehicles, s.Style, s.Style3D, s.Attachment],
    n = [
        s.CrewMember,
        s.Customizations,
        s.ExperimentalEquipment,
        s.ImprovedEquipment,
        s.BountyEquipment,
        s.StandardEquipment,
        s.Directives,
        s.TrainingMaterials,
        s.Blueprints,
        s.PersonalReserves,
        s.Consumables,
        s.Rations,
    ],
    i = (e) => e.split('_')[0] === s.LootBox,
    a = (e) => e.replace(`${s.LootBox}_`, ''),
    u = (e) => o[e] || e,
    l = (s, o) => {
        const r = u(s);
        return i(s) ? t(o, a(s)) : e(R.images, `gui.maps.icons.quests.bonuses.${o}.${r}`);
    },
    d = R.strings.tooltips.awardItem,
    m = (t, o) => {
        if (t.startsWith(s.LootBox)) {
            const e = t.slice(`${s.LootBox}_`.length);
            return {
                contentId: R.views.mono.lootbox.tooltips.box_tooltip('resId'),
                args: { boxCategory: e, eventName: o },
            };
        }
        if (r.includes(t) || n.includes(t))
            return {
                contentId: R.views.mono.lootbox.tooltips.statistics_category('resId'),
                args: { bonusesCategory: t, eventName: o },
            };
        switch (t) {
            case s.PremiumPlus:
                return { header: d.premium_plus.header(), body: d.premium_plus.body() };
            case s.Credits:
                return { header: d.credits.header(), body: d.credits.body() };
            case s.Gold:
                return { header: d.gold.header(), body: d.gold.body() };
            case s.Crystal:
                return { header: d.crystal.header(), body: d.crystal.body() };
            case s.FreeXP:
                return { header: d.freeXP.header(), body: d.freeXP.body() };
            case s.Components:
                return { header: d.equipCoin.header(), body: d.equipCoin.body() };
            case s.BattleBonusX5:
                return {
                    header: R.strings.tooltips.quests.bonuses.token.battle_bonus_x5.header(),
                    body: R.strings.tooltips.quests.bonuses.token.battle_bonus_x5.body(),
                };
            case s.CrewBonusX3:
                return {
                    header: R.strings.tooltips.quests.bonuses.token.crew_bonus_x3.header(),
                    body: R.strings.tooltips.quests.bonuses.token.crew_bonus_x3.body(),
                };
            default:
                return { header: e(R.strings, `${d}.${t}.header`), body: e(R.strings, `${d}.${t}.body`) };
        }
    };
export { r as L, s as T, m as a, a as b, l as c, u as g, i };
