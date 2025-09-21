import { a6 as s, b1 as e, a7 as a, b2 as t, b3 as i } from './lib.js';
import { f as o } from './string-utils.js';
const n = 'ls_artefact_key',
    r = (s) => s.replace(':', '_').slice(0, -1),
    u = (a, t = s.Small) => {
        switch (a.name) {
            case n:
                return `R.images.gui.maps.icons.quests.bonuses.${t}.ls_keys`;
            case 'vehicles':
            case 'items':
            case 'premium':
            case 'premium_plus':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a.icon}`;
            case 'ls_artefact':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.video`;
            case 'tokens':
                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a.icon}`;
            case 'battleToken':
                return `R.images.gui.maps.icons.missions.tokens.${t === s.Big ? 'c_80x80' : 'c_48x48'}.${a.icon}`;
        }
        return e(a, t);
    },
    c = (s) => (a(s.name) === t.MULTI && s.value.startsWith('x') ? s.value.replace('x', '') : s.value),
    m = (s, e) => i({ tooltipId: s.tooltipId }, Number(s.tooltipContentId), { targetId: e }),
    l = (s) => (s === n ? t.MULTI : a(s)),
    g = (s) => (s <= 9 ? `0${s}` : `${s}`),
    p = (s) => (s > 999 ? o(R.strings.last_stand_lobby.badgeWidget.round(), { count: Math.floor(s / 1e3) }) : s);
export { n as L, u as a, m as b, g as c, l as d, p as e, c as g, r as p };
