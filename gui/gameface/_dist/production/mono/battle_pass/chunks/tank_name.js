import { j as e } from './vendor.js';
import { aU as a, cp as s, s as l, av as i } from './lib.js';
const n = (e) => {
        switch (e) {
            case i.heavyTank:
                return i.heavyTank;
            case i.lightTank:
                return i.lightTank;
            case i.mediumTank:
                return i.mediumTank;
            case i.SPG:
                return i.SPG;
            default:
                return i['AT-SPG'];
        }
    },
    r = ({
        vehicleName: i,
        vehicleShortName: r,
        vehicleType: m,
        vehicleLvl: c,
        isElite: t,
        classNames: v,
        vehicleTypeIconSize: o = l.x64x64,
        isShortName: u = !1,
        custom: h = !1,
    }) =>
        e.jsx('div', {
            className: null == v ? void 0 : v.base,
            children: e.jsxs(a, {
                children: [
                    e.jsx(a.Level, {
                        className: null == v ? void 0 : v.level,
                        value: c,
                        numberType: s.numberTypes.roman,
                    }),
                    e.jsx(a.Type, { className: null == v ? void 0 : v.typeIcon, type: n(m), premium: t, size: o }),
                    e.jsx(a.Name, { className: null == v ? void 0 : v.name, children: u ? r : i }),
                ],
            }),
        });
export { r as T };
