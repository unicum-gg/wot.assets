import { j as e, f as s, v as a, r as i } from '../../../../chunks/vendor.js';
import {
    i as t,
    O as n,
    n as c,
    _ as o,
    Z as l,
    Y as r,
    F as d,
    r as _,
    U as p,
    bs as u,
} from '../../../../chunks/lib.js';
import { D as m } from '../../../../chunks/daily_bonus.js';
/* empty css                        */ const [h, y] = t()(({ observableModel: e }) => {
        const s = {
                vehicleInfo: e.object(),
                techParams: e.object('tech'),
                eventInfo: e.object('eventInfo'),
                dailyBonus: e.object('dailyBonus'),
            },
            a = n.structural(() =>
                Object.entries(s.techParams.get()).map(([e, s]) => {
                    return {
                        type: e,
                        indicatorsValue:
                            ((a = s),
                            Array.from({ length: 5 }, (e, s) => {
                                const i = (Math.max(0, Math.min(20, a - 20 * s)) / 20) * 100;
                                return { filledValueIndicator: i, baseValueIndicator: 100 - i };
                            })),
                    };
                    var a;
                }),
            );
        return {
            vehicleInfo: s.vehicleInfo,
            eventInfo: s.eventInfo,
            dailyBonus: s.dailyBonus,
            computes: { techParams: a },
        };
    }, c),
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
    b = o.resolve('strings'),
    f = R.images.battle_royale.gui.maps.icons.techParams;
function j({ type: a, className: i }) {
    return e.jsxs('div', {
        className: s(v.paramsTypeContainer, i),
        children: [
            e.jsx('div', { className: v.icon, style: { backgroundImage: `url(${f.$dyn(a)})` } }),
            e.jsx('div', { className: v.description, children: b.readOrEmpty(`battle_royale.techParams.type.${a}`) }),
        ],
    });
}
function x({ className: a, filledValue: i, baseValue: t }) {
    return e.jsxs('div', {
        className: s(v.indicatorsContainer, a),
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
function B({ type: a, indicatorsValue: i, className: t }) {
    return e.jsxs('div', {
        className: s(v.base, t),
        children: [
            e.jsx(j, { type: a }),
            e.jsx('div', {
                className: v.sectionContainer,
                children: i.map(({ filledValueIndicator: s, baseValueIndicator: a }, i) =>
                    e.jsx(x, { baseValue: a, filledValue: s, className: v.indicator }, `${i}-${a}-${s}`),
                ),
            }),
        ],
    });
}
const N = {
        base: 'App_986de781',
        bg: 'App_bg_464c58d8',
        base__default: 'App_base__default_0',
        base__stPatrick: 'App_base__stPatrick_0',
        vehicleInfo: 'App_vehicleInfo_c897879f',
        vehicleContainer: 'App_vehicleContainer_74572754',
        modeDescription: 'App_modeDescription_0',
        vehicleDescription: 'App_vehicleDescription_1072bf2a',
        vehicleName: 'App_vehicleName_4f8f598b',
        separator: 'App_separator_607a4eb4',
        dailyBonusSection: 'App_dailyBonusSection_96a2feb7',
        dailyBonusSectionBg: 'App_dailyBonusSectionBg_4be9a126',
        dailyBonusSectionBg1: 'App_dailyBonusSectionBg1_182f55f4',
        dailyBonusSectionBg2: 'App_dailyBonusSectionBg2_c3086e92',
        dailyBonusText: 'App_dailyBonusText_356464f9',
        status: 'App_status_c17188dd',
        status__critical: 'App_status__critical_5a32e41a',
        status__attention: 'App_status__attention_0',
        status__warning: 'App_status__warning_48295791',
        section: 'App_section_1f0fb308',
    },
    g = a(function () {
        const { model: a } = y(),
            { vehicleName: t, vehicleNation: n, vehicleType: c, statusLevel: o, statusText: _ } = a.vehicleInfo.get(),
            {
                hasDailyBonus: p,
                dailyBonusFactor: u,
                soloTopPlaces: h,
                squadTopPlaces: v,
                coinType: b,
            } = a.dailyBonus.get(),
            f = a.eventInfo.get().subMode,
            j = a.computes.techParams();
        return e.jsxs('div', {
            className: s(N.base, N[`base__${f}`]),
            children: [
                e.jsx('div', { className: N.bg }),
                e.jsxs('div', {
                    className: N.vehicleInfo,
                    children: [
                        l(c) && e.jsx(r.Type, { type: c, size: r.Type.sizes.x64x64 }),
                        e.jsxs('div', {
                            className: N.vehicleContainer,
                            children: [
                                e.jsx(r.Name, { className: N.vehicleName, children: t }),
                                e.jsx('div', {
                                    className: N.modeDescription,
                                    children: R.strings.battle_royale.tooltips.vehicle.description(),
                                }),
                            ],
                        }),
                    ],
                }),
                p &&
                    e.jsxs(e.Fragment, {
                        children: [
                            e.jsx('div', { className: N.separator }),
                            e.jsxs('div', {
                                className: N.dailyBonusSection,
                                children: [
                                    e.jsxs('div', {
                                        className: N.dailyBonusSectionBg,
                                        children: [
                                            e.jsx('div', { className: N.dailyBonusSectionBg1 }),
                                            e.jsx('div', { className: N.dailyBonusSectionBg2 }),
                                        ],
                                    }),
                                    e.jsx('div', {
                                        className: N.dailyBonusText,
                                        children: e.jsx(d, {
                                            text: R.strings.battle_royale_extention.dailyBonus.description(),
                                            binding: {
                                                dailyBonus: e.jsx(m, { dailyBonusFactor: u, coinType: b }),
                                                soloTopPlaces: h,
                                                squadTopPlaces: v,
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                e.jsx('div', { className: N.separator }),
                e.jsx('div', {
                    className: N.vehicleDescription,
                    children: `${R.strings.tooltips.battle_royale.hangar.vehicle.description.$dyn(n)}`,
                }),
                e.jsx('div', { className: N.separator }),
                j.map((e, s) => i.createElement(B, { ...e, key: s, className: N.section })),
                e.jsx('div', { className: s(N.status, N[`status__${o}`]), children: _ }),
            ],
        });
    });
_(
    e.jsx(p, {
        children: e.jsx(h, { children: e.jsx(u, { children: e.jsx(u.Decorator, { children: e.jsx(g, {}) }) }) }),
    }),
);
