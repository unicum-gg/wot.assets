import { f as e, j as l } from './vendor.js';
import './lib.js';
const _ = {
        root: 'VehicleInfo_root_9c9aeed',
        base: 'VehicleInfo_4dd93fad',
        base__level1: 'VehicleInfo_base__level1_540927ab',
        base__level2: 'VehicleInfo_base__level2_9dbae429',
        base__level3: 'VehicleInfo_base__level3_f6587e10',
        base__level4: 'VehicleInfo_base__level4_f79bc0e8',
        base__level5: 'VehicleInfo_base__level5_20050a52',
        base__level6: 'VehicleInfo_base__level6_12eca708',
        base__level7: 'VehicleInfo_base__level7_846d2cb7',
        base__level8: 'VehicleInfo_base__level8_54f23070',
        base__level9: 'VehicleInfo_base__level9_224d25d0',
        base__level10: 'VehicleInfo_base__level10_2a9c831a',
        base__level11: 'VehicleInfo_base__level11_a54afaef',
        vehicleType: 'VehicleInfo_vehicleType_41f8e956',
        vehicleType__elite: 'VehicleInfo_vehicleType__elite_43656a0e',
        vehicleName: 'VehicleInfo_vehicleName_1c8961d8',
        fadeInWithScale: 'VehicleInfo_fadeInWithScale_9c9aeed',
        slideUp: 'VehicleInfo_slideUp_9c9aeed',
        blink: 'VehicleInfo_blink_9c9aeed',
        scale: 'VehicleInfo_scale_9c9aeed',
        rotate: 'VehicleInfo_rotate_9c9aeed',
        windowIn: 'VehicleInfo_windowIn_9c9aeed',
        fadeOut: 'VehicleInfo_fadeOut_9c9aeed',
        fadeIn: 'VehicleInfo_fadeIn_9c9aeed',
    },
    a = R.images.gui.maps.icons.vehicleTypes,
    c = ({ isSpecial: c, vehicleLevel: i, vehicleName: s, vehicleType: n, isElite: o }) => {
        const f = ((e, l) => {
                const _ = l.replace('-', '_'),
                    c = e ? a.elite : a;
                if ((i = _) in c && '$num' !== i && '$dyn' !== i && 'function' == typeof c[_]) {
                    return { backgroundImage: `url(${c[_]()})` };
                }
                var i;
            })(o, n),
            v = e(_.base, _[`base__level${i}`]),
            h = e(_.vehicleType, o && _.vehicleType__elite);
        return l.jsxs('div', {
            className: v,
            children: [
                l.jsx('div', { className: h, style: f }),
                l.jsx('div', { className: c ? _.vehicleName : '', children: s }),
            ],
        });
    };
export { c as V };
