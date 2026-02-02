import { ao as s, ap as e, aq as t, j as a, ar as o, I as r } from './lib.js';
import { d as n } from './vendor.js';
class i extends s {
    constructor(s, e) {
        (super(), (this.root = s), (this.prefix = e));
    }
    readOr(s, a, o = 'silent') {
        const r = e(this.prefix, s),
            n = (function (s, e) {
                const t = e.split('.');
                if (window.R && window.R.sounds) {
                    const e = t[t.length - 1];
                    if (!e) return;
                    const a = t.slice(0, -1).reduce((s, e) => {
                        if ('object' == typeof (null == s ? void 0 : s[e])) return s[e];
                    }, s);
                    if (!a) return;
                    return 'function' == typeof a[e] ? a[e]() : void 0;
                }
                throw new Error('R class with images field is not defined');
            })(this.root, r);
        return void 0 === n ? ('silent' !== o && t(`Resource not found: ${r}`, o), a()) : n;
    }
    readOrEmpty(s, e = 'warn') {
        return this.readOr(s, () => '', e);
    }
}
const c = 'lootbox_images',
    u = 'lootbox_sounds';
(a.register(c, n(() => new o(window.R.images)).singleton()),
    a.register(u, n(() => new i(window.R.sounds)).singleton()));
const m = a.resolve(c),
    l = a.resolve('videos'),
    g = a.resolve(u),
    p = a.resolve('strings'),
    d = (s, e) => {
        switch (s) {
            case R.images:
                return m.readOrEmpty(e, 'silent');
            case R.videos:
                return l.readOrEmpty(e, 'silent');
            case R.sounds:
                return g.readOrEmpty(e, 'silent');
            case R.strings:
                return p.readOrEmpty(e, 'silent');
            default:
                return '';
        }
    },
    $ = (s, e) => {
        const t = d(R.images, s);
        return t || e;
    },
    b = (s, e, t) => $(`gui.maps.icons.quests.bonuses.${s}.${e}`, `R.images.gui.maps.icons.quests.bonuses.${s}.${t}`),
    h = (s, e) => b(s, `lootBox_${e}`, 'lootBox_default'),
    k = {
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
    w = (s) => {
        switch (s) {
            case r.S600x450:
                return 'c_600x450';
            case r.S180x135:
                return 'c_180x135';
            default:
                return s;
        }
    },
    f = (s, e = r.S180x135, t = !1) => {
        const { name: a, icon: o, value: n } = t ? s.compensation : s,
            { id: i, isRent: c } = s;
        switch (a) {
            case k.vehicles:
                return c
                    ? `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles_rent`
                    : o
                      ? `R.images.gui.maps.shop.vehicles.${w(e)}.${o}`
                      : `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
            case k.customizations:
                return b(e, `${o}_${i}`, o);
            case k.attachment:
                return ((s, e, t) =>
                    $(`gui.maps.vehicles.attachments.${s}.${e}`, `R.images.gui.maps.icons.quests.bonuses.${s}.${t}`))(
                    e,
                    o,
                    a,
                );
            case k.basic:
            case k.plus:
            case k.premium:
            case k.premiumPlus:
            case k.items:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.${o}`;
            case k.blueprints:
            case k.blueprintsAny:
            case k.finalBlueprints:
            case k.randomNationalBlueprint:
                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${o}`;
            case k.tokens:
            case k.styleProgress:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.${o}`;
            case k.crewBooks:
            case k.randomNationalBrochure:
            case k.randomNationalGuide:
            case k.randomNationalCrewBook:
                return `R.images.gui.maps.icons.crewBooks.books.${e}.${o}`;
            case k.crewSkins:
            case k.goodies:
            case k.groups:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.${o}`;
            case k.dossierBadge:
                return `R.images.gui.maps.icons.quests.bonuses.badges.${w(e)}.${o}`;
            case k.dossierAchievement:
                return `R.images.gui.maps.icons.achievement.${w(e)}.${o}`;
            case k.xp:
            case k.xpFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
            case k.creditsFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
            case k.crystal:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.crystal`;
            case k.tankmenXPFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
            case k.dailyXPFactor:
            case k.freeXPFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
            case k.tmanToken:
            case k.battlePassSelectToken:
                return b(e, `${o}_${n}`, o);
            case k.premiumTank:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
            case k.styleProgressToken:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
            case k.lootBox:
                return h(e, o);
            case k.collectionItem:
                return `R.images.gui.maps.icons.collectionItems.${w(e)}.${o}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${e}.${o}`;
        }
    },
    y = (s, e, t) =>
        e === k.attachment
            ? `R.images.gui.maps.icons.customization.rarity.glowWithSign.${s}.${t}`
            : `R.images.gui.maps.icons.quests.bonuses.${s}.${t}_overlay`;
export { d as a, f as g, h as l, y as o, k as r };
