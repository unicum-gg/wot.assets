import { af as e, ag as s, ah as i, j as a, h as t, a1 as n } from './lib.js';
const o = 4,
    r = [1, 2, 3, 7, 14, 30, 90, 180, 360],
    u = [e.CURRENCY, e.NUMBER],
    m = [e.PREMIUM_PLUS, e.STRING],
    l = ['wtevent_ticket', 'lootBox_wt'],
    d = 1300,
    c = 200,
    p = 300,
    g = 600,
    b = (e, s = 0) => ({ appear: s + 400 + 200 * e, enter: 600 }),
    v = (e) => 1300 + 400 * e,
    _ = (e, { poFileName: s, assetsPointer: i, isSubMode: a } = {}) => {
        const t = s ? R.strings.$dyn(s) : R.strings.white_tiger_lobby;
        if (!t || 'string' == typeof t) throw Error("Incorrect 'poFileName' argument");
        const n = a ? 'sub_modes' : 'modes',
            o = (i ? t.$dyn(n)[i] : t) || t.$dyn(n)[void 0];
        return { staticTexts: t, dynamicTexts: o };
    },
    y = (e, i, a) => {
        const { name: t, icon: o, value: u } = i;
        return l.includes(t)
            ? `R.images.white_tiger.gui.maps.icons.rewards.bonuses.${a}.${t}`
            : '' !== e && t === s.Vehicles
              ? R.images.fun_random.gui.maps.icons.feature.rewards.bonuses.$dyn(`vehicle_default_${a}`)
              : t !== s.PremiumPlus || r.includes(Number(u))
                ? n(i, a)
                : `R.images.gui.maps.icons.quests.bonuses.${a}.premium_plus_1`;
    },
    P = (n, o, d = !0, c = '', p = !0) => {
        const { name: g, value: b, label: v } = n,
            _ = g === s.PremiumPlus && !r.includes(Number(b)),
            R = _ ? i.PremiumUniversal : g,
            P = l.includes(R) ? e.MULTI : a(R),
            f = p && !u.includes(P),
            N = !m.includes(P);
        return {
            name: _ ? i.PremiumUniversal : g || n.item,
            image: y(c, n, o),
            value: N ? b : void 0,
            special: n.overlayType,
            valueType: P,
            tooltipArgs: d ? t({ tooltipId: n.tooltipId }, Number(n.tooltipContentId)) : { isEnabled: !1 },
            label: f ? v : void 0,
            isCompensation: n.isCompensation,
        };
    };
export { o as M, p as R, b as a, v as b, d as c, c as d, g as e, P as f, _ as g };
