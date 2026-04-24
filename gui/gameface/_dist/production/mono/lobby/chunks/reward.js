import { j as e, e as s, r as a } from './vendor.js';
import { c as t, e as i } from './resources.js';
import { a8 as r, a4 as m, R as n, N as o, a9 as c, r as l, a5 as u, F as g, aa as _, ab as d, S as h } from './lib.js';
var x = ((e) => (
    (e.Big = 'big'),
    (e.Small = 'small'),
    (e.Mini = 'mini'),
    (e.S600x450 = 's600x450'),
    (e.S400x300 = 's400x300'),
    (e.S360x270 = 's360x270'),
    (e.S260x222 = 's296x222'),
    (e.S232x174 = 's232x174'),
    (e.S180x135 = 's180x135'),
    (e.S128x100 = 's128x100'),
    (e.S80x80 = 's80x80'),
    (e.S64x64 = 's64x64'),
    (e.S48x48 = 's48x48'),
    e
))(x || {});
const b = {
        vehicles: 'vehicles',
        customizations: 'customizations',
        attachmentsSet: 'attachmentsSet',
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
    S = (e) => {
        switch (e) {
            case 's180x135':
            case 'small':
            case 'big':
                return 'c_180x135';
            case 's232x174':
            case 's360x270':
                return 'c_360x270';
            case 's600x450':
                return 'c_600x450';
            default:
                return e;
        }
    },
    p = (e, s = 's180x135') => {
        const { name: a, isRent: r, icon: m, id: n } = e;
        switch (a) {
            case b.vehicles:
                return r
                    ? `R.images.gui.maps.icons.quests.bonuses.${s}.vehicles_rent`
                    : m
                      ? `R.images.gui.maps.shop.vehicles.${S(s)}.${m}`
                      : `R.images.gui.maps.icons.quests.bonuses.${s}.vehicles`;
            case b.customizations:
                return t.has(`quests.bonuses.${s}.${m}_${n}`)
                    ? `R.images.gui.maps.icons.quests.bonuses.${s}.${m}_${n}`
                    : `R.images.gui.maps.icons.quests.bonuses.${s}.${m}`;
            case b.attachment:
                return t.has(`R.images.gui.maps.vehicles.attachments.${s}.${m}`)
                    ? `R.images.gui.maps.vehicles.attachments.${s}.${m}`
                    : `R.images.gui.maps.icons.quests.bonuses.${s}.${a}`;
            case b.attachmentsSet:
                return i.has(`bonuses.${s}.attachmentsSet${m}`)
                    ? `R.images.open_bundle.gui.maps.icons.bonuses.${s}.attachmentsSet${m}`
                    : `R.images.open_bundle.gui.maps.icons.bonuses.${s}.attachmentsSet`;
            case b.basic:
            case b.plus:
            case b.premium:
            case b.premiumPlus:
            case b.items:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.${m}`;
            case b.blueprints:
            case b.blueprintsAny:
            case b.finalBlueprints:
            case b.randomNationalBlueprint:
                return `R.images.gui.maps.icons.blueprints.fragment.${s}.${m}`;
            case b.tokens:
            case b.styleProgress:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.${m}`;
            case b.crewBooks:
            case b.randomNationalBrochure:
            case b.randomNationalGuide:
            case b.randomNationalCrewBook:
                return `R.images.gui.maps.icons.crewBooks.books.${s}.${m}`;
            case b.crewSkins:
            case b.goodies:
            case b.groups:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.${m}`;
            case b.dossierBadge:
                return `R.images.gui.maps.icons.quests.bonuses.badges.${S(s)}.${m}`;
            case b.dossierAchievement:
                return `R.images.gui.maps.icons.achievement.${S(s)}.${m}`;
            case b.xp:
            case b.xpFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.exp`;
            case b.creditsFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.credits`;
            case b.crystal:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.crystal`;
            case b.tankmenXPFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.tankmenXP`;
            case b.dailyXPFactor:
            case b.freeXPFactor:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.freeXP`;
            case b.tmanToken:
            case b.battlePassSelectToken:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.${m}`;
            case b.premiumTank:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.vehicles`;
            case b.styleProgressToken:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.style_3d`;
            case b.lootBox:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.${m}`;
            case b.collectionItem:
                return `R.images.gui.maps.icons.collectionItems.${S(s)}.${m}`;
            default:
                return `R.images.gui.maps.icons.quests.bonuses.${s}.${m}`;
        }
    };
function z({ size: e, name: s, special: a }) {
    let i = e;
    return (
        's360x270' === e && (i = 's400x300'),
        s === b.attachment
            ? t.readOrEmpty(`customization.rarity.glowWithSign.${e}.${a}`)
            : t.readOrEmpty(`quests.bonuses.${i}.${r(a)}_overlay`)
    );
}
function y(e) {
    return e === m.ATTACHMENT_EPIC || e === m.ATTACHMENT_LEGENDARY;
}
const $ = ['gold', 'credits', 'freeXP', 'crystal', 'equipCoin', 'bptaler'];
var v = ((e) => ((e.S = 's'), (e.M = 'm'), (e.L = 'l'), (e.AttachmentPreview = 'a'), e))(v || {});
const N = {
    s: {
        [n.medium]: {
            width: '80rem',
            height: '80rem',
            padding: '5rem',
            assetSize: x.Small,
            assetWidth: '48rem',
            assetHeight: '48rem',
            overlaySize: x.Small,
            multiTextSize: '36rem',
            multiCurrencySize: '18rem',
            textSize: '16rem',
            shineSize: '722rem',
        },
        [n.large]: {
            width: '90rem',
            height: '100rem',
            padding: '5rem',
            assetSize: x.Big,
            assetWidth: '80rem',
            assetHeight: '80rem',
            overlaySize: x.Big,
            multiTextSize: '36rem',
            multiCurrencySize: '18rem',
            textSize: '16rem',
            shineSize: '722rem',
        },
        [n.extraLarge]: {
            width: '110rem',
            height: '120rem',
            padding: '15rem',
            assetSize: x.Big,
            assetWidth: '80rem',
            assetHeight: '80rem',
            overlaySize: x.Big,
            multiTextSize: '36rem',
            multiCurrencySize: '18rem',
            textSize: '16rem',
            shineSize: '722rem',
        },
    },
    m: {
        [n.medium]: {
            width: '110rem',
            height: '120rem',
            padding: '10rem',
            assetSize: x.Big,
            assetWidth: '80rem',
            assetHeight: '80rem',
            overlaySize: x.Big,
            multiTextSize: '36rem',
            multiCurrencySize: '18rem',
            textSize: '16rem',
            shineSize: '964rem',
        },
        [n.large]: {
            width: '200rem',
            height: '170rem',
            padding: '10rem',
            assetSize: x.S180x135,
            assetWidth: '180rem',
            assetHeight: '135rem',
            overlaySize: x.S180x135,
            multiTextSize: '36rem',
            multiCurrencySize: '18rem',
            textSize: '16rem',
            shineSize: '964rem',
        },
        [n.extraLarge]: {
            width: '262rem',
            height: '222rem',
            padding: '15rem',
            assetSize: x.S232x174,
            assetWidth: '232rem',
            assetHeight: '174rem',
            overlaySize: x.S232x174,
            multiTextSize: '36rem',
            multiCurrencySize: '18rem',
            textSize: '16rem',
            shineSize: '964rem',
        },
    },
    l: {
        [n.medium]: {
            width: '180rem',
            height: '100%',
            padding: '0',
            assetSize: x.S180x135,
            assetWidth: '180rem',
            assetHeight: '135rem',
            overlaySize: x.S180x135,
            multiTextSize: '40rem',
            multiCurrencySize: '20rem',
            textSize: '18rem',
            shineSize: '964rem',
        },
        [n.large]: {
            width: '100%',
            height: '100%',
            padding: '0',
            assetSize: x.S600x450,
            assetWidth: '260rem',
            assetHeight: '195rem',
            overlaySize: x.S260x222,
            multiTextSize: '40rem',
            multiCurrencySize: '20rem',
            textSize: '18rem',
            shineSize: '964rem',
        },
        [n.extraLarge]: {
            width: '100%',
            height: '100%',
            padding: '0',
            assetSize: x.S600x450,
            assetWidth: '360rem',
            assetHeight: '270rem',
            overlaySize: x.S360x270,
            multiTextSize: '53rem',
            multiCurrencySize: '27rem',
            textSize: '24rem',
            shineSize: '964rem',
        },
    },
    a: {
        [n.medium]: {
            width: '400rem',
            height: '300rem',
            padding: '0',
            assetSize: x.S400x300,
            assetWidth: '400rem',
            assetHeight: '300rem',
            overlaySize: x.S400x300,
            multiTextSize: '40rem',
            multiCurrencySize: '20rem',
            textSize: '18rem',
            shineSize: '500rem',
        },
        [n.large]: {
            width: '600rem',
            height: '450rem',
            padding: '0',
            assetSize: x.S600x450,
            assetWidth: '600rem',
            assetHeight: '450rem',
            overlaySize: x.S600x450,
            multiTextSize: '40rem',
            multiCurrencySize: '20rem',
            textSize: '18rem',
            shineSize: '760rem',
        },
        [n.extraLarge]: {
            width: '600rem',
            height: '450rem',
            padding: '0',
            assetSize: x.S600x450,
            assetWidth: '600rem',
            assetHeight: '450rem',
            overlaySize: x.S600x450,
            multiTextSize: '40rem',
            multiCurrencySize: '20rem',
            textSize: '18rem',
            shineSize: '760rem',
        },
    },
};
function f(e) {
    const { breakpoint: s } = o(),
        a = s.width > c.Medium ? s.name : n.medium,
        t = e.charAt(0).toLowerCase();
    return N[`${t}`][`${a}`];
}
const T = 'Highlight_e258b804',
    k = l.resolve('images');
const w = {
    root: 'Image_root_f239db79',
    base: 'Image_f3f63595',
    count: 'Image_count_ab384088',
    base__s: 'Image_base__s_f239db79',
    base__m: 'Image_base__m_f239db79',
    base__l: 'Image_base__l_f239db79',
};
const B = 'LoupeButton_5495857f',
    P = 'LoupeButton_icon_e65c88cd',
    C = (e) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
    I = { base: 'TankName_b9b19397', type: 'TankName_type_564fa82d' },
    q = (e, s, a) => ({
        backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.${a ? 'c_48x48' : 'c_24x24'}.${`${e.replace('-', '_')}${s ? '_elite' : ''}`}`})`,
    }),
    H = ({ reward: a, style: t, className: i = '' }) => {
        const { breakpoint: r } = o(),
            { level: m, type: n, isElite: l, vehicleShortName: u } = a;
        return e.jsxs('div', {
            className: s(I.base, i),
            style: { fontSize: t.nameHeight },
            children: [
                void 0 !== m && e.jsx('div', { className: I.level, children: _(m) }),
                void 0 !== n &&
                    void 0 !== l &&
                    e.jsx('div', { className: I.type, style: q(n, l, r.width >= c.Medium) }),
                e.jsx('div', { children: u }),
            ],
        });
    },
    O = {
        root: 'Name_root_e2f8f44',
        text: 'Name_text_bcc9ac85',
        text__s: 'Name_text__s_9a0d0c9',
        text__m: 'Name_text__m_94438915',
        text__l: 'Name_text__l_13ed7afc',
        innerText: 'Name_innerText_993b364d',
    };
const j = {
        root: 'Overlay_root_3c7155a',
        base: 'Overlay_5823bbf',
        base__s24x24: 'Overlay_base__s24x24_4e2b74ec',
        base__s48x48: 'Overlay_base__s48x48_3c7155a',
        base__small: 'Overlay_base__small_2862b81b',
        base__s80x80: 'Overlay_base__s80x80_3c7155a',
        base__big: 'Overlay_base__big_83274ce6',
        base__s180x135: 'Overlay_base__s180x135_508d8721',
        base__s232x174: 'Overlay_base__s232x174_f7e25f10',
        base__s296x222: 'Overlay_base__s296x222_88d0c030',
        base__s360x270: 'Overlay_base__s360x270_ac8e531b',
        base__s400x300: 'Overlay_base__s400x300_e1cde049',
        base__s600x450: 'Overlay_base__s600x450_bfd47780',
        base__trophy: 'Overlay_base__trophy_3c7155a',
        base__normalize: 'Overlay_base__normalize_428f4b67',
    },
    F = [m.EQUIPMENT_TROPHY_BASIC, m.EQUIPMENT_TROPHY_UPGRADED];
const E = 'Reward_bfa36689',
    A = ['style', 'style_3d'],
    W = (e) => {
        const { name: s, icon: a } = e;
        switch (s) {
            case b.attachmentsSet:
            case b.vehicles:
                return !0;
            case b.customizations:
                return A.includes(a);
            default:
                return !1;
        }
    },
    X = a.forwardRef(function ({ reward: t, template: i, tooltipDisabled: r = !1, className: m = '', ...n }, o) {
        const { width: c, height: l, padding: u } = f(i),
            { tooltipContentId: g, tooltipId: _ } = t,
            d = a.useMemo(() => ({ contentId: Number(g), args: { tooltipId: _ }, disabled: r }), [r, g, _]),
            x = h(d);
        return e.jsx('div', {
            ref: o,
            ...x,
            className: s(E, m),
            style: { width: c, height: l, padding: u },
            children: n.children,
        });
    });
((X.Highlight = function ({ size: a, special: t, className: i }) {
    const r = u(a, t);
    return e.jsx('div', {
        className: s(T, i),
        style: { backgroundImage: `url(${k.readOrEmpty(`quests.bonuses.${a}.${r}_highlight`, 'silent')})` },
    });
}),
    (X.Image = function ({
        template: a,
        showCounter: t,
        count: i,
        image: r,
        currencySize: m,
        className: n = '',
        ...o
    }) {
        const { assetWidth: c, assetHeight: l } = f(a),
            u = a.charAt(0).toLowerCase();
        return e.jsx('div', {
            className: s(w.base, w[`base__${u}`], n),
            style: { backgroundImage: `url(${r})`, width: c, height: l },
            ...o,
            children:
                t &&
                e.jsx(g, {
                    style: { fontSize: m },
                    text: R.strings.open_bundle_lobby_default.main.multi(),
                    className: w.count,
                    params: { count: i },
                }),
        });
    }),
    (X.Name = function ({ reward: a, multiTextSize: t, nameHeight: i, fontSize: r, template: m, className: n = '' }) {
        const { name: o, label: c } = a,
            l = s(O.text, O[`text__${m}`], n);
        return e.jsx(e.Fragment, {
            children:
                o === b.vehicles
                    ? e.jsx(H, { reward: a, style: { nameHeight: i }, className: l })
                    : e.jsx(d, {
                          className: l,
                          classNames: { text: O.innerText },
                          text: C(c),
                          styleBase: { fontSize: r, maxHeight: t },
                      }),
        });
    }),
    (X.Overlay = function ({ size: a, name: t, special: i, className: r }) {
        const m = z({ size: a, name: t, special: i }),
            n = t === b.attachment,
            o = F.includes(i);
        return e.jsx('div', {
            className: s(j.base, j[`base__${a}`], n && j.base__normalize, o && j.base__trophy, r),
            style: { backgroundImage: `url(${m})` },
        });
    }),
    (X.LoupeButton = ({ onClick: a, onMouseEnter: t, icon: i, className: r = '' }) =>
        e.jsx('div', {
            className: s(B, r),
            onClick: a,
            onMouseEnter: t,
            children: e.jsx('div', { className: s(P, i.className), style: { backgroundImage: `url(${i.img})` } }),
        })));
export { $ as C, x as I, v as P, X as R, H as T, b as a, z as b, C as f, p as g, y as h, W as i, f as u };
