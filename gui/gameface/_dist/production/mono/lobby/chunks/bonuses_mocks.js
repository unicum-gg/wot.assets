import { T as e, V as a } from './helpers.js';
const t = {
        index: 0,
        name: '',
        value: '',
        isCompensation: !1,
        tooltipId: '',
        tooltipContentId: '',
        label: '',
        probability: 0,
    },
    l = { ...t, icon: '' },
    i = { ...t, item: '', overlayType: '' },
    n = { ...l, name: 'equipCoin', label: 'Боны', value: '1000' },
    o = { ...l, name: 'freeXP', label: 'Free Experience', value: '500' },
    r = { ...t, name: 'credits', label: 'Credits', value: '400000' },
    s = { ...l, name: 'xpFactor', label: 'Коэффициент боевого опыта', value: '3.0' },
    m = {
        ...l,
        icon: 'booster_xp_expirable',
        label: 'Additional Experience per Battle',
        name: 'goodies',
        tooltipContentId: '27',
        value: '1',
    },
    c = { ...l, name: 'crystal', label: 'Bonds', value: '25' },
    p = {
        ...i,
        item: 'coatedOptics',
        label: 'Optical Calibration',
        name: 'items',
        overlayType: 'battleBooster',
        value: '3',
    },
    u = {
        ATTACHMENT: { ...l, name: 'attachment', item: '', label: '3d attachment', overlayType: 'rare' },
        ATTACHMENT_148: {
            discount: 0,
            icon: 'attachment',
            iconName: 'Cus_148_CS_RecordingEquipment',
            index: 2,
            intCD: 292812,
            isCompensation: !1,
            label: 'Recording Equipment',
            level: 0,
            name: 'customizations',
            probability: 0,
            rarity: 'epic',
            selectedVehicle: '',
            tooltipContentId: '27',
            tooltipId: '2',
            value: '1',
            variadicID: '',
        },
        EQUIP_COIN: n,
        EXP_FREE: o,
        CREDIT: r,
        XP_FACTOR: s,
        XP_BOOSTER: m,
        CRYSTAL: c,
        OPTICS: p,
        GUIDE: { ...l, icon: 'universalGuide', label: 'Universal Guide', name: 'crewBooks', value: '1' },
        VEHICLE: {
            ...l,
            name: a,
            vehicleType: 'heavyTank',
            vehicleLvl: 10,
            vehicleShortName: 'Semovente M41',
            isPremium: !0,
            isElite: !0,
        },
        TOKEN: { ...l, name: e, label: 'Key' },
        PREMIUM: { ...t, name: 'premium_plus', label: 'Премиум аккаунт', value: '3' },
    };
function d(e) {
    const a = Object.values(u);
    if (e >= a.length) return [...a];
    const t = new Set(),
        l = [];
    for (; l.length < e;) {
        const e = Math.floor(Math.random() * a.length);
        t.has(e) || (t.add(e), l.push(a[e]));
    }
    return l;
}
export { u as B, l as a, d as g };
