import { j as e, f as a, v as s, r as i } from '../../../../chunks/vendor.js';
import { i as t, a as c, n, r, aK as o, f as l, e as d, ay as p, ax as _ } from '../../../../chunks/lib.js';
const [m, h] = t()(({ observableModel: e }) => {
        const a = { vehicleInfo: e.object(), techParams: e.object('tech') },
            s = c.structural(() =>
                Object.entries(a.techParams.get()).map(([e, a]) => {
                    return {
                        type: e,
                        indicatorsValue:
                            ((s = a),
                            Array.from({ length: 5 }, (e, a) => {
                                const i = (Math.max(0, Math.min(20, s - 20 * a)) / 20) * 100;
                                return { filledValueIndicator: i, baseValueIndicator: 100 - i };
                            })),
                    };
                    var s;
                }),
            );
        return { vehicleInfo: a.vehicleInfo, computes: { techParams: s } };
    }, n),
    v = {
        base: 'Section_7e479de1',
        sectionContainer: 'Section_sectionContainer_9b3feee3',
        indicator: 'Section_indicator_3a17ac80',
        indicatorsContainer: 'Section_indicatorsContainer_bf77f3f6',
        indicatorBody: 'Section_indicatorBody_13b4725d',
        baseIndicator: 'Section_baseIndicator_3d1a9805',
        filledIndicator: 'Section_filledIndicator_d66212bb',
        filledLayerIndicator: 'Section_filledLayerIndicator_ee5eb9cd',
        paramsTypeContainer: 'Section_paramsTypeContainer_e4739f53',
        icon: 'Section_icon_dc43b4b3',
        description: 'Section_description_2a41345d',
    },
    u = r.resolve('strings'),
    b = R.images.battle_royale.gui.maps.icons.techParams;
function f({ type: s, className: i }) {
    return e.jsxs('div', {
        className: a(v.paramsTypeContainer, i),
        children: [
            e.jsx('div', { className: v.icon, style: { backgroundImage: `url(${b.$dyn(s)})` } }),
            e.jsx('div', { className: v.description, children: u.readOrEmpty(`battle_royale.techParams.type.${s}`) }),
        ],
    });
}
function j({ className: s, filledValue: i, baseValue: t }) {
    return e.jsxs('div', {
        className: a(v.indicatorsContainer, s),
        children: [
            e.jsxs('div', {
                className: v.indicatorBody,
                children: [
                    e.jsx('div', { className: v.filledIndicator, style: { width: `${i}%` } }),
                    e.jsx('div', { className: v.baseIndicator, style: { width: `${t}%` } }),
                ],
            }),
            e.jsx('div', { className: v.filledLayerIndicator, style: { width: `${i}%` } }),
        ],
    });
}
function x({ type: s, indicatorsValue: i, className: t }) {
    return e.jsxs('div', {
        className: a(v.base, t),
        children: [
            e.jsx(f, { type: s }),
            e.jsx('div', {
                className: v.sectionContainer,
                children: i.map(({ filledValueIndicator: a, baseValueIndicator: s }, i) =>
                    e.jsx(j, { baseValue: s, filledValue: a, className: v.indicator }, `${i}-${s}-${a}`),
                ),
            }),
        ],
    });
}
const y = {
        base: 'App_986de781',
        bg: 'App_bg_7ae63465',
        vehicleInfo: 'App_vehicleInfo_c897879f',
        vehicleContainer: 'App_vehicleContainer_74572754',
        modeDescription: 'App_modeDescription_0',
        vehicleDescription: 'App_vehicleDescription_1072bf2a',
        vehicleName: 'App_vehicleName_4f8f598b',
        separator: 'App_separator_bad28223',
        status: 'App_status_c17188dd',
        status__critical: 'App_status__critical_5a32e41a',
        status__attention: 'App_status__attention_0',
        status__warning: 'App_status__warning_48295791',
        section: 'App_section_1f0fb308',
    },
    N = r.resolve('strings'),
    I = s(function () {
        const { model: s } = h(),
            { vehicleName: t, vehicleNation: c, vehicleType: n, statusLevel: r, statusText: p } = s.vehicleInfo.get(),
            _ = s.computes.techParams();
        return e.jsx(o, {
            children: e.jsx(o.Decorator, {
                children: e.jsxs('div', {
                    className: y.base,
                    children: [
                        e.jsx('div', { className: y.bg }),
                        e.jsxs('div', {
                            className: y.vehicleInfo,
                            children: [
                                l(n) && e.jsx(d.Type, { type: n, size: d.Type.sizes.x64x64 }),
                                e.jsxs('div', {
                                    className: y.vehicleContainer,
                                    children: [
                                        e.jsx(d.Name, { className: y.vehicleName, children: t }),
                                        e.jsx('div', {
                                            className: y.modeDescription,
                                            children: N.readOrEmpty('battle_royale.tooltips.vehicle.description'),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx('div', { className: y.separator }),
                        e.jsx('div', {
                            className: y.vehicleDescription,
                            children: N.readOrEmpty(`tooltips.battle_royale.hangar.vehicle.description.${c}`),
                        }),
                        e.jsx('div', { className: y.separator }),
                        _.map((e, a) => i.createElement(x, { ...e, key: a, className: y.section })),
                        e.jsx('div', { className: a(y.status, y[`status__${r}`]), children: p }),
                    ],
                }),
            }),
        });
    });
p(e.jsx(_, { children: e.jsx(m, { children: e.jsx(I, {}) }) }));
