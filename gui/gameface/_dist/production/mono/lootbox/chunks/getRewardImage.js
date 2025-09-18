import { I as s } from './lib.js';
const e = (s, e) => {
        let a = s;
        const t = e.split('.');
        for (let o = 0; o < t.length; o++) {
            if (!a) return '';
            if (('string' != typeof a && (a = a.$dyn(t[o])), 'string' == typeof a)) return a;
        }
        return '';
    },
    a = (s, a) => {
        const t = e(R.images, s);
        return t || a;
    },
    t = (s, e, t) => a(`gui.maps.icons.quests.bonuses.${s}.${e}`, `R.images.gui.maps.icons.quests.bonuses.${s}.${t}`),
    o = (s, e) => t(s, `lootBox_${e}`, 'lootBox_default'),
    i = {
        vehicles: 'vehicles',
        customizations: 'customizations',
        attachment: 'attachment',
        basic: 'basic',
        plus: 'plus',
        premium: 'premium',
        premiumPlus: 'premium_plus',
        items: 'items',
        blueprints: 'blueprints',
        blueprintsAny: 'blueprintsAny',
        finalBlueprints: 'finalBlueprints',
        randomNationalBlueprint: 'randomNationalBlueprint',
        tokens: 'tokens',
        styleProgress: 'styleProgress',
        crewBooks: 'crewBooks',
        randomNationalBrochure: 'randomNationalBrochure',
        randomNationalGuide: 'randomNationalGuide',
        randomNationalCrewBook: 'randomNationalCrewBook',
        crewSkins: 'crewSkins',
        goodies: 'goodies',
        groups: 'groups',
        dossierBadge: 'dossier_badge',
        dossierAchievement: 'dossier_achievement',
        xp: 'xp',
        xpFactor: 'xpFactor',
        creditsFactor: 'creditsFactor',
        crystal: 'crystal',
        tankmenXPFactor: 'tankmenXPFactor',
        dailyXPFactor: 'dailyXPFactor',
        freeXPFactor: 'freeXPFactor',
        tmanToken: 'tmanToken',
        battlePassSelectToken: 'battlePassSelectToken',
        premiumTank: 'premiumTank',
        styleProgressToken: 'styleProgressToken',
        lootBox: 'lootBox',
        collectionItem: 'collectionItem',
    },
    n = (e) => {
        switch (e) {
            case s.S600x450:
                return 'c_600x450';
            case s.S180x135:
                return 'c_180x135';
            default:
                return e;
        }
    },
    r = (e, r = s.S180x135, c = !1) => {
        const { name: u, icon: m, value: l } = c ? e.compensation : e,
            { id: g, isRent: p } = e;
        switch (u) {
            case i.vehicles:
                return p
                    ? `R.images.gui.maps.icons.quests.bonuses.${r}.vehicles_rent`
                    : m
                      ? `R.images.gui.maps.shop.vehicles.${n(r)}.${m}`
                      : `R.images.gui.maps.icons.quests.bonuses.${r}.vehicles`;
            case i.customizations:
                return t(r, `${m}_${g}`, m);
            case i.attachment:
                return ((s, e, t) =>
                    a(`gui.maps.vehicles.attachments.${s}.${e}`, `R.images.gui.maps.icons.quests.bonuses.${s}.${t}`))(
                    r,
                    m,
                    u,
                );
            case i.basic:
            case i.plus:
            case i.premium:
            case i.premiumPlus:
            case i.items:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.${m}`;
            case i.blueprints:
            case i.blueprintsAny:
            case i.finalBlueprints:
            case i.randomNationalBlueprint:
                return `R.images.gui.maps.icons.blueprints.fragment.${r}.${m}`;
            case i.tokens:
            case i.styleProgress:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.${m}`;
            case i.crewBooks:
            case i.randomNationalBrochure:
            case i.randomNationalGuide:
            case i.randomNationalCrewBook:
                return `R.images.gui.maps.icons.crewBooks.books.${r}.${m}`;
            case i.crewSkins:
            case i.goodies:
            case i.groups:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.${m}`;
            case i.dossierBadge:
                return `R.images.gui.maps.icons.quests.bonuses.badges.${n(r)}.${m}`;
            case i.dossierAchievement:
                return `R.images.gui.maps.icons.achievement.${n(r)}.${m}`;
            case i.xp:
            case i.xpFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.exp`;
            case i.creditsFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.credits`;
            case i.crystal:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.crystal`;
            case i.tankmenXPFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.tankmenXP`;
            case i.dailyXPFactor:
            case i.freeXPFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.freeXP`;
            case i.tmanToken:
            case i.battlePassSelectToken:
                return t(r, `${m}_${l}`, m);
            case i.premiumTank:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.vehicles`;
            case i.styleProgressToken:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.style_3d`;
            case i.lootBox:
                return o(r, m);
            case i.collectionItem:
                return `R.images.gui.maps.icons.collectionItems.${n(r)}.${m}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${r}.${m}`;
        }
    },
    c = (s, e, a) =>
        e === i.attachment
            ? `R.images.gui.maps.icons.customization.rarity.glowWithSign.${s}.${a}`
            : `R.images.gui.maps.icons.quests.bonuses.${s}.${a}_overlay`;
export { e as a, r as g, o as l, c as o, i as r };
