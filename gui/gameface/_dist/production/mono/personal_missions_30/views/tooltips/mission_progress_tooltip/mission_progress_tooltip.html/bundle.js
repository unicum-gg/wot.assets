import { j as s, f as e, q as o } from '../../../../chunks/vendor.js';
import { i, n as l, q as t, w as n, m as a, ay as c, d as r } from '../../../../chunks/lib.js';
import { G as m } from '../../../../chunks/gradient_decorator.js';
/* empty css                       */ const [d, _] = i()(
        ({ observableModel: s }) => ({
            ...s.primitives(['totalMissionsAmount', 'completedMissionsAmount']),
            vehicles: s.arrayClone('vehicles'),
        }),
        l,
    ),
    p = 'VehicleItem_586f927b',
    h = 'VehicleItem_vehicleIcon_be065974',
    j = 'VehicleItem_base__completed_e538d77c',
    x = 'VehicleItem_label_d360b547',
    g = 'VehicleItem_line_45efcf11',
    v = 'VehicleItem_line__vertical_b60df039',
    b = ({ vehicleName: o, completed: i, last: l }) =>
        s.jsxs('div', {
            className: e(p, i && j),
            children: [
                s.jsx('div', { className: h }),
                s.jsx('div', {
                    className: x,
                    children: o || s.jsx(t, { path: 'personal_missions_30.tooltip.missionProgress.unknownVehicle' }),
                }),
                s.jsx('div', { className: e(g, v) }),
                !l && s.jsx('div', { className: g }),
            ],
        }),
    u = 'InnerBlock_a92b837',
    N = 'InnerBlock_title_8cfb58b5',
    f = 'InnerBlock_total_6e746610',
    M = 'InnerBlock_vehicles_16d11ceb',
    I = o(function () {
        const { model: e } = _(),
            o = e.completedMissionsAmount.get(),
            i = e.totalMissionsAmount.get();
        return s.jsxs('div', {
            className: u,
            children: [
                s.jsx(t, {
                    path: 'personal_missions_30.tooltip.missionProgress.completed',
                    params: { completed: o, total: i, totalClass: f },
                    className: N,
                }),
                s.jsx('div', {
                    className: M,
                    children: n(i, (l) =>
                        s.jsx(b, { vehicleName: a(e.vehicles.get(), l), completed: l + 1 <= o, last: l + 1 === i }, l),
                    ),
                }),
            ],
        });
    }),
    P = 'MissionProgressTooltip_a2ab3368',
    k = 'MissionProgressTooltip_title_34d67d31',
    V = 'MissionProgressTooltip_description_56cc6402',
    A = 'MissionProgressTooltip_content_6844579',
    T = 'MissionProgressTooltip_footer_f9c0540d',
    B = o(function () {
        const { model: e } = _(),
            o = e.completedMissionsAmount.get(),
            i = e.totalMissionsAmount.get();
        return s.jsx(c, {
            'data-name': 'MissionProgressTooltip',
            children: s.jsx(c.Decorator, {
                children: s.jsxs('div', {
                    className: P,
                    children: [
                        s.jsx(t, { path: 'personal_missions_30.tooltip.missionProgress.title', className: k }),
                        s.jsx(t, { path: 'personal_missions_30.tooltip.missionProgress.description', className: V }),
                        o < i &&
                            s.jsxs(s.Fragment, {
                                children: [
                                    s.jsx(m, { className: A, children: s.jsx(I, {}) }),
                                    s.jsx(t, {
                                        path: 'personal_missions_30.tooltip.missionProgress.footer',
                                        className: T,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
        });
    });
r(s.jsx(d, { children: s.jsx(B, {}) }));
