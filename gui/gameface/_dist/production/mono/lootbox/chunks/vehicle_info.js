import { j as e, e as s } from './vendor.js';
import { ac as a, ai as i } from './lib.js';
const c = 'VehicleInfo_7e31903c',
    l = 'VehicleInfo_type_9875a6cb';
function o({ vehicleLvl: o, vehicleName: r, vehicleType: m, isElite: n, classNames: t }) {
    return e.jsxs('div', {
        className: s(c, t?.base),
        children: [
            a(o),
            e.jsx('div', {
                className: s(l, t?.type),
                style: {
                    backgroundImage: `url(${R.images.gui.maps.icons.vehicleTypes.large.$dyn(`${i(m)}${n ? '_elite' : ''}`)})`,
                },
            }),
            r,
        ],
    });
}
export { o as V };
