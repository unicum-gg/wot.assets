import { R as e } from './lib.js';
import { e as s } from './resources.js';
const t = (e) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;'),
    a = ['style', 'style_3d'],
    r = (s) => {
        const { name: t, icon: r } = s;
        switch (t) {
            case e.Vehicles:
                return !0;
            case e.Customizations:
                return a.includes(r);
            default:
                return !1;
        }
    };
var i = ((e) => ((e.Disable = 'disable'), (e.Active = 'active'), (e.Default = 'default'), e))(i || {});
const c = (e, s, t) => {
        switch (!0) {
            case 0 === t:
                return 'disable';
            case e === s:
                return 'active';
            default:
                return 'default';
        }
    },
    n = (e) => !e.isCompensation && s.includes(e.rarity);
export { i as S, n as a, t as f, c as g, r as i };
