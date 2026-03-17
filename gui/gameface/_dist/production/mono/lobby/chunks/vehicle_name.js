import { j as e, J as a } from './vendor.js';
import { aI as l, a4 as i, dm as s, dy as _, d9 as c } from './lib.js';
const n = {
    base: 'VehicleRole_b05c9386',
    icon: 'VehicleRole_icon_a3da323b',
    base__16x16: 'VehicleRole_base__16x16_741b56a9',
    base__24x24: 'VehicleRole_base__24x24_741b56a9',
    base__32x32: 'VehicleRole_base__32x32_741b56a9',
    base__48x48: 'VehicleRole_base__48x48_741b56a9',
    fadeIn: 'VehicleRole_fadeIn_741b56a9',
    fadeInThreeQuarters: 'VehicleRole_fadeInThreeQuarters_741b56a9',
    fadeInHalf: 'VehicleRole_fadeInHalf_741b56a9',
    fadeOut: 'VehicleRole_fadeOut_741b56a9',
    fadeInWithScale: 'VehicleRole_fadeInWithScale_741b56a9',
    slideUp: 'VehicleRole_slideUp_741b56a9',
    scale: 'VehicleRole_scale_741b56a9',
    raysAppearance: 'VehicleRole_raysAppearance_741b56a9',
    rotate: 'VehicleRole_rotate_741b56a9',
    'reverse-rotate': 'VehicleRole_reverse-rotate_741b56a9',
    glowAppearance: 'VehicleRole_glowAppearance_741b56a9',
    highlightAppearance: 'VehicleRole_highlightAppearance_741b56a9',
    blink: 'VehicleRole_blink_741b56a9',
    slideUpIn: 'VehicleRole_slideUpIn_741b56a9',
};
var o = ((e) => ((e.x16 = '16x16'), (e.x24 = '24x24'), (e.x32 = '32x32'), (e.x48 = '32x32'), e))(o || {});
function r({ role: s, size: _ = '24x24', roleIconFolderPath: c, className: o, classNames: r }) {
    const h = (function (e) {
        const a = e.split('_');
        return a[a.length - 1] || '';
    })(l(s));
    return e.jsx('div', {
        className: a(n.base, n[`base__${_}`], o),
        children: c
            ? e.jsx('div', {
                  className: a(n.icon, null == r ? void 0 : r.icon),
                  style: { backgroundImage: `url(${null == c ? void 0 : c.$dyn(h)})` },
              })
            : e.jsx(i, { roleKey: h, size: `x${_}`, classNames: { base: null == r ? void 0 : r.base } }),
    });
}
const h = {
    base: 'VehicleName_737a9fc',
    base__24x24: 'VehicleName_base__24x24_8fe58b49',
    base__48x48: 'VehicleName_base__48x48_35a6aa3f',
    base__64x64: 'VehicleName_base__64x64_7c908cf0',
    base__96x96: 'VehicleName_base__96x96_669f3978',
    nameContainer: 'VehicleName_nameContainer_37d7db85',
    vehicleTypeContainer: 'VehicleName_vehicleTypeContainer_36afa7ec',
    base__elite: 'VehicleName_base__elite_e43b4676',
    vehicleType: 'VehicleName_vehicleType_7b61c047',
    roleContainer: 'VehicleName_roleContainer_2b4839b4',
    role: 'VehicleName_role_dbc66a72',
    fadeIn: 'VehicleName_fadeIn_e43b4676',
    fadeInThreeQuarters: 'VehicleName_fadeInThreeQuarters_e43b4676',
    fadeInHalf: 'VehicleName_fadeInHalf_e43b4676',
    fadeOut: 'VehicleName_fadeOut_e43b4676',
    fadeInWithScale: 'VehicleName_fadeInWithScale_e43b4676',
    slideUp: 'VehicleName_slideUp_e43b4676',
    scale: 'VehicleName_scale_e43b4676',
    raysAppearance: 'VehicleName_raysAppearance_e43b4676',
    rotate: 'VehicleName_rotate_e43b4676',
    'reverse-rotate': 'VehicleName_reverse-rotate_e43b4676',
    glowAppearance: 'VehicleName_glowAppearance_e43b4676',
    highlightAppearance: 'VehicleName_highlightAppearance_e43b4676',
    blink: 'VehicleName_blink_e43b4676',
    slideUpIn: 'VehicleName_slideUpIn_e43b4676',
};
var t = ((e) => ((e.x24 = '24x24'), (e.x48 = '48x48'), (e.x64 = '64x64'), (e.x96 = '96x96'), e))(t || {});
const b = { '24x24': o.x16, '48x48': o.x24, '64x64': o.x32, '96x96': o.x32 },
    d = (e) => R.images.comp7.gui.maps.icons.vehicleTypes.$dyn(`c_${e}`);
function m({
    name: i,
    tier: n,
    type: o,
    role: t,
    vehicleCD: m,
    size: x = '24x24',
    typeIconFolderPath: p = d(x),
    isPremium: V = !1,
    className: N,
    classNames: v,
    tooltipArgs: f,
    roleClassName: u,
    roleClassNames: I,
}) {
    const y = l(o),
        g = V ? `${y}_elite` : y,
        j = `url(${null == p ? void 0 : p.$dyn(g)})`;
    return e.jsxs('div', {
        className: a(h.base, h[`base__${x}`], V && h.base__elite, N),
        children: [
            e.jsx(s, {
                args: f,
                isEnabled: void 0 !== f,
                children: e.jsxs('div', {
                    className: a(h.nameContainer, null == v ? void 0 : v.nameContainer),
                    children: [
                        e.jsx('div', { className: null == v ? void 0 : v.level, children: _(n) }),
                        e.jsx('div', {
                            className: a(h.vehicleTypeContainer, null == v ? void 0 : v.vehicleTypeContainer),
                            children: e.jsx('div', {
                                className: a(h.vehicleType, null == v ? void 0 : v.type),
                                style: { backgroundImage: j },
                            }),
                        }),
                        e.jsx('div', { className: a(h.shortName, null == v ? void 0 : v.shortName), children: i }),
                    ],
                }),
            }),
            t &&
                e.jsx(c, {
                    contentId: R.views.lobby.ranked.tooltips.RankedBattlesRolesTooltipView('resId'),
                    args: { vehicleCD: m },
                    ignoreShowDelay: !0,
                    isEnabled: void 0 !== m,
                    children: e.jsx('div', {
                        className: a(h.roleContainer, null == I ? void 0 : I.roleContainer),
                        children: e.jsx(r, { role: t, size: b[x], className: u, classNames: I }),
                    }),
                }),
        ],
    });
}
export { m as V, t as a };
