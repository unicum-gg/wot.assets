import { e as s, B as e } from './resources.js';
import { R as a } from './lib.js';
const t = (s) => s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;'),
    r = ['style', 'style_3d'],
    i = (s) => {
        const { name: e, icon: t } = s;
        switch (e) {
            case a.Vehicles:
                return !0;
            case a.Customizations:
                return r.includes(t);
            default:
                return !1;
        }
    };
var n = ((s) => ((s.Disable = 'disable'), (s.Active = 'active'), (s.Default = 'default'), s))(n || {});
const c = (s, e, a) => {
        switch (!0) {
            case 0 === a:
                return 'disable';
            case s === e:
                return 'active';
            default:
                return 'default';
        }
    },
    o = (e) => s.includes(e),
    l = (s) => !s.isCompensation && o(s.rarity),
    u = (s) => s === e.Common;
export { n as S, l as a, u as b, t as f, c as g, o as h, i };
