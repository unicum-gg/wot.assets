import { j as e, e as s } from './vendor.js';
import { ai as i, aj as a } from './lib.js';
const l = 'VehicleInfo_7e31903c',
    c = 'VehicleInfo_type_9875a6cb';
function o({ vehicleLvl: o, vehicleName: n, vehicleType: r, isElite: m, classNames: t }) {
    return e.jsxs('div', {
        className: s(l, null == t ? void 0 : t.base),
        children: [
            i(o),
            e.jsx('div', {
                className: s(c, null == t ? void 0 : t.type),
                style: {
                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.large.$dyn(`${a(r)}${m ? '_elite' : ''}`)})`,
                },
            }),
            n,
        ],
    });
}
export { o as V };
