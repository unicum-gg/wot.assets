import { j as e, _ as t, p as a, q as s, e as i } from '../../../chunks/vendor.js';
import {
    r as o,
    i as l,
    y as c,
    a9 as n,
    c as r,
    V as p,
    aa as d,
    F as h,
    _ as v,
    a4 as m,
    ab as y,
    J as b,
    a as u,
} from '../../../chunks/lib.js';
const x = {
    base: 'Body_b7b829d3',
    iconWrapper: 'Body_iconWrapper_30cbc8c9',
    disabledIcon: 'Body_disabledIcon_cdf14004',
    title: 'Body_title_cc0b5799',
    description: 'Body_description_ea60670c',
};
function _() {
    const t = o.resolve('strings');
    return e.jsxs('div', {
        className: x.base,
        children: [
            e.jsx('div', { className: x.iconWrapper, children: e.jsx('div', { className: x.disabledIcon }) }),
            e.jsx('div', {
                className: x.title,
                children: t.readOrEmpty('one_time_gift.notAvailableVehicleTooltip.title'),
            }),
            e.jsx('div', {
                className: x.description,
                children: t.readOrEmpty('one_time_gift.notAvailableVehicleTooltip.description'),
            }),
        ],
    });
}
const [f, j] = l()((e) => {
    const t = e.observableModel.primitives(['params', 'type']);
    return {
        type: t.type,
        computes: {
            params: c.primitive(function (e) {
                return e(t.params.get());
            }),
        },
    };
}, n);
const g =
    ((N = (() => {
        const e = (e) =>
                'string' == typeof e.icon &&
                'string' == typeof e.iconSmall &&
                'boolean' == typeof e.unlocked &&
                'boolean' == typeof e.obtained &&
                'number' == typeof e.id &&
                'boolean' == typeof e.isElite &&
                'string' == typeof e.vehicleName &&
                'string' == typeof e.vehicleShortName &&
                'string' == typeof e.vehicleNation &&
                'string' == typeof e.vehicleType &&
                'number' == typeof e.vehicleLvl &&
                'string' == typeof e.tags,
            a = (e, a, s = !0) =>
                ('string' == typeof e.icon ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.icon',
                            expected: 'string',
                            value: e.icon,
                        },
                        i,
                    )) &&
                ('string' == typeof e.iconSmall ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.iconSmall',
                            expected: 'string',
                            value: e.iconSmall,
                        },
                        i,
                    )) &&
                ('boolean' == typeof e.unlocked ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.unlocked',
                            expected: 'boolean',
                            value: e.unlocked,
                        },
                        i,
                    )) &&
                ('boolean' == typeof e.obtained ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.obtained',
                            expected: 'boolean',
                            value: e.obtained,
                        },
                        i,
                    )) &&
                ('number' == typeof e.id ||
                    t(
                        s,
                        { method: 'typia.json.createAssertParse', path: a + '.id', expected: 'number', value: e.id },
                        i,
                    )) &&
                ('boolean' == typeof e.isElite ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.isElite',
                            expected: 'boolean',
                            value: e.isElite,
                        },
                        i,
                    )) &&
                ('string' == typeof e.vehicleName ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleName',
                            expected: 'string',
                            value: e.vehicleName,
                        },
                        i,
                    )) &&
                ('string' == typeof e.vehicleShortName ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleShortName',
                            expected: 'string',
                            value: e.vehicleShortName,
                        },
                        i,
                    )) &&
                ('string' == typeof e.vehicleNation ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleNation',
                            expected: 'string',
                            value: e.vehicleNation,
                        },
                        i,
                    )) &&
                ('string' == typeof e.vehicleType ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleType',
                            expected: 'string',
                            value: e.vehicleType,
                        },
                        i,
                    )) &&
                ('number' == typeof e.vehicleLvl ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.vehicleLvl',
                            expected: 'number',
                            value: e.vehicleLvl,
                        },
                        i,
                    )) &&
                ('string' == typeof e.tags ||
                    t(
                        s,
                        {
                            method: 'typia.json.createAssertParse',
                            path: a + '.tags',
                            expected: 'string',
                            value: e.tags,
                        },
                        i,
                    )),
            s = (t) =>
                'object' == typeof t &&
                null !== t &&
                ((t) => 'object' == typeof t.vehicle && null !== t.vehicle && e(t.vehicle))(t);
        let i;
        const o = (e, o) => {
            var l, c;
            return (
                !1 === s(e) &&
                    ((i = o),
                    (c = '$input'),
                    ((('object' == typeof (l = e) && null !== l) ||
                        t(
                            !0,
                            {
                                method: 'typia.json.createAssertParse',
                                path: c + '',
                                expected: 'NotAvailableVehicle',
                                value: l,
                            },
                            i,
                        )) &&
                        ((e, s, o = !0) =>
                            ((('object' == typeof e.vehicle && null !== e.vehicle) ||
                                t(
                                    o,
                                    {
                                        method: 'typia.json.createAssertParse',
                                        path: s + '.vehicle',
                                        expected: 'BranchVehicleInfo',
                                        value: e.vehicle,
                                    },
                                    i,
                                )) &&
                                a(e.vehicle, s + '.vehicle', o)) ||
                            t(
                                o,
                                {
                                    method: 'typia.json.createAssertParse',
                                    path: s + '.vehicle',
                                    expected: 'BranchVehicleInfo',
                                    value: e.vehicle,
                                },
                                i,
                            ))(l, c + '', !0)) ||
                        t(
                            !0,
                            {
                                method: 'typia.json.createAssertParse',
                                path: c + '',
                                expected: 'NotAvailableVehicle',
                                value: l,
                            },
                            i,
                        )),
                e
            );
        };
        return (e, t) => o(JSON.parse(e), t);
    })()),
    function () {
        return j().model.computes.params(N);
    });
var N;
const A = 'Header_c1a2d983',
    P = 'Header_vehicleInfo_f5ebd162',
    T = 'Header_vehicleName_78bcddd6',
    E = 'Header_vehicleDescription_4620097b',
    S = 'Header_vehicleType_65f475ba',
    I = 'Header_vehicleLevel_2a1649ab',
    k = a(function () {
        const { vehicleType: t, isElite: a, vehicleName: s, vehicleLvl: i } = g().vehicle;
        return e.jsxs('div', {
            className: A,
            children: [
                e.jsx('div', {
                    className: S,
                    children: r(t) && e.jsx(p.Type, { size: d.x64x64, type: t, premium: a }),
                }),
                e.jsxs('div', {
                    className: P,
                    children: [
                        e.jsx(p.Name, { className: T, children: s }),
                        e.jsx('div', {
                            className: E,
                            children: e.jsx(h, {
                                path: 'one_time_gift.notAvailableVehicleTooltip.level_and_type',
                                params: {
                                    vehicleLevel: e.jsx('span', { className: I, children: m(i) }),
                                    vehicleType: e.jsx('span', {
                                        className: S,
                                        children: o
                                            .resolve('strings')
                                            .readOrEmpty(
                                                `tooltips.tankCaruselTooltip.vehicleType.${a ? 'elite' : 'normal'}.${v(t)}`,
                                            ),
                                    }),
                                },
                                brackets: { start: '%(', end: ')' },
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    O = 'Index_96d973f5',
    V = 'Index_base__isElite_5a58bcb4',
    B = 'Index_header_acc50af3',
    L = 'Index_divider_8d32c350';
const H = a(function () {
        const { isElite: t } = g().vehicle;
        return e.jsxs('div', {
            className: s(O, t && V),
            children: [
                e.jsx('div', { className: B, children: e.jsx(k, {}) }),
                e.jsx('div', { className: L }),
                e.jsx(_, {}),
            ],
        });
    }),
    D = Object.freeze(Object.defineProperty({ __proto__: null, default: H }, Symbol.toStringTag, { value: 'Module' })),
    C = {
        tooltipDecorator: 'App_tooltipDecorator_1b09144',
        text: 'App_text_13feac86',
        text__bold: 'App_text__bold_f88f7b4e',
    };
function W({ type: t }) {
    return e.jsxs('div', {
        className: C.text,
        children: [
            'Unknown tooltip type:',
            e.jsx('span', { className: i(C.text, C.text__bold), children: t.length > 0 ? t : '<empty>' }),
        ],
    });
}
const $ = Object.fromEntries(
    Object.entries(Object.assign({ './not_available_vehicle/index.tsx': D })).map(([e, t]) => [
        e.match(/\/([^/]+)\/index\.tsx/)[1],
        { Component: t.default },
    ]),
);
const w = a(function () {
    var t;
    const { model: a } = j(),
        s = a.type.get(),
        i = null == (t = $[s]) ? void 0 : t.Component;
    return e.jsx(y, {
        children: e.jsx(y.Decorator, {
            className: C.tooltipDecorator,
            children: i ? e.jsx(i, {}) : e.jsx(W, { type: s }),
        }),
    });
});
u(new b().add(f).render(e.jsx(w, {})));
