import { j as e } from './vendor.js';
import { V as i } from './vehicle_info.js';
import { m as s, e as t } from './lib.js';
const l = 'VehicleList_82a6a4d',
    o = 'VehicleList_info_41a84ef',
    c = 'VehicleList_points_9c8e2f92',
    n = 'VehicleList_top_af361d05',
    a = ({ vehiclesList: a }) => {
        const h = ({
            vehicleLevel: s,
            vehicleName: l,
            vehicleType: o,
            vehicleBonus: a,
            vehicleTop: h,
            isElite: v,
        }) => ({
            vehicle: e.jsx(
                i,
                { isElite: v, isSpecial: !0, vehicleLevel: s, vehicleName: l, vehicleType: o },
                'vehicle',
            ),
            bonus: e.jsx(
                'div',
                {
                    className: c,
                    children: e.jsx(t, { text: R.strings.battle_pass.howToEarnPoints.bonus(), binding: { bonus: a } }),
                },
                'bonus',
            ),
            top: e.jsx(
                'div',
                {
                    className: n,
                    children: e.jsx(t, { text: R.strings.battle_pass.points.topCount(), binding: { top: h } }),
                },
                'top',
            ),
        });
        return e.jsx('div', {
            className: l,
            children: s(a, (i, s) => e.jsx(t, { classMix: o, text: i.textResource, binding: h(i) }, s)),
        });
    };
export { a as V };
