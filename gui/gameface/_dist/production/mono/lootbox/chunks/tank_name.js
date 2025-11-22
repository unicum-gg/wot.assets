import { j as e, e as a } from './vendor.js';
import { Y as s, ac as i, ad as l } from './lib.js';
const t = { base: 'TankName_aa0700b7', type: 'TankName_type_652adbed' },
    r = (e, a, s) => ({
        backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.${s ? 'c_48x48' : 'c_24x24'}.${`${e.replace('-', '_')}${a ? '_elite' : ''}`}`})`,
    });
function c({ reward: c, style: d, className: o = '', hasShortName: m }) {
    const { breakpoint: n } = s(),
        { label: v, level: p, type: h, isElite: b, vehicleShortName: y } = c;
    return e.jsxs('div', {
        className: a(t.base, o),
        style: { fontSize: d.nameHeight },
        children: [
            void 0 !== p && e.jsx('div', { className: t.level, children: i(p) }),
            void 0 !== h && void 0 !== b && e.jsx('div', { className: t.type, style: r(h, b, n.width >= l.Medium) }),
            e.jsx('div', { children: m ? y : v }),
        ],
    });
}
export { c as T };
