import { m as e, j as s, r as a, n as c, p as i, e as r } from '../../../chunks/vendor.js';
import {
    i as l,
    e as o,
    u as n,
    s as d,
    c as t,
    d as p,
    F as h,
    B as m,
    t as _,
    p as v,
    r as u,
    U as j,
} from '../../../chunks/lib.js';
import { V as b, P as x } from '../../../chunks/vehicle_info.js';
import { a as f } from '../../../chunks/sounds.js';
/* empty css                     */ const [N, A] = l()(
        ({ observableModel: e }) => ({
            ...e.primitives(['hasStyle', 'personalNumber']),
            vehicleInfo: e.object('vehicleInfo'),
        }),
        ({ externalModel: e }) => ({
            showAbout: e.createCallbackNoArgs('onAboutClick'),
            showVehicle: e.createCallbackNoArgs('onShowVehicle'),
        }),
    ),
    g = 'Header_674a410b',
    w = 'Header_subTitle_eb3d3f02',
    k = 'Header_title_85f73f2e',
    y = R.strings.resource_well.awardView,
    I = e(function () {
        const { model: e } = A(),
            a = e.personalNumber.get();
        return s.jsxs('div', {
            className: g,
            children: [
                s.jsx('div', { className: w, children: y.end() }),
                s.jsx('div', { className: k, children: a ? y.vehicleNumberedTitle() : y.vehicleTitle() }),
            ],
        });
    }),
    V = 'App_a69e7530',
    T = 'App_decoration_709527c2',
    z = 'App_bg_dc2ea83b',
    C = 'App_vehicle_951eb362',
    H = 'App_vehicle__style_a5491eb6',
    M = 'App_content_79538684',
    S = 'App_reward_5fe7968c',
    B = 'App_personalNumberDecor_e7e3a061',
    D = 'App_personalNumber_864d02d7',
    E = 'App_vehicleInfoWrapper_b39b8000',
    L = 'App_vehicleInfo_81a4bb44',
    P = 'App_receiveWrapper_31b438f8',
    W = 'App_receiveDecoration_8cd659f9',
    F = 'App_receiveTitle_292b078d',
    O = 'App_header_34ccd58f',
    Q = 'App_hangarButton_6d5ac65d',
    U = 'App_formatText_8ecdbb0e',
    q = R.strings.resource_well,
    G = e(function () {
        const { model: e, controls: l } = A(),
            u = e.personalNumber.get(),
            { showVehicle: j } = l,
            N = n({ size: d.medium }, { large: { size: d.large } });
        (a.useLayoutEffect(() => {
            t(!0);
        }),
            p());
        const [g] = c(() => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            delay: 300,
            config: { duration: 500, easings: o.easeOutQuad },
        }));
        return s.jsx('div', {
            className: V,
            children: s.jsxs(i.div, {
                style: g,
                children: [
                    s.jsxs('div', {
                        className: T,
                        children: [
                            s.jsx('div', { className: z }),
                            s.jsx('div', { className: r(C, u && H) }),
                            s.jsx('div', {
                                className: S,
                                children: u
                                    ? s.jsxs('div', {
                                          className: D,
                                          children: [
                                              s.jsx(h, {
                                                  className: U,
                                                  text: q.awardView.vehicleNumberTitle(),
                                                  params: {
                                                      vehicleInfo: s.jsx(b, { vehicleInfo: e.vehicleInfo.get() }),
                                                  },
                                                  upgradeLegacy: !0,
                                              }),
                                              s.jsx('div', { className: B, children: s.jsx(x, { personalNumber: u }) }),
                                          ],
                                      })
                                    : s.jsxs('div', {
                                          className: E,
                                          children: [
                                              s.jsx(b, { className: L, vehicleInfo: e.vehicleInfo.get() }),
                                              s.jsxs('div', {
                                                  className: P,
                                                  children: [
                                                      s.jsx('div', { className: W }),
                                                      s.jsx('div', {
                                                          className: F,
                                                          children: q.awardView.completedProgressionView.received(),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                            }),
                        ],
                    }),
                    s.jsxs('div', {
                        className: M,
                        children: [
                            s.jsx('div', { className: O, children: s.jsx(I, {}) }),
                            s.jsx('div', {
                                className: Q,
                                children: s.jsx(m, {
                                    theme: _.primary,
                                    onClick: j,
                                    onMouseEnter: () => v.sound(f),
                                    size: N.size,
                                    children: q.awardView.toHangar(),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    });
u(s.jsx(j, { children: s.jsx(N, { children: s.jsx(G, {}) }) }), { fullScreen: !0 }).then(() => t(!1));
