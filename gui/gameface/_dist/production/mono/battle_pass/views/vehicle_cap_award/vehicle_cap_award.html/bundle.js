import { t as e, j as s, f as a } from '../../../chunks/vendor.js';
import {
    i as c,
    N as i,
    bJ as l,
    u as d,
    b as n,
    C as t,
    s as r,
    B as o,
    q as m,
    h,
    w as _,
    T as b,
    J as j,
    U as p,
    j as v,
} from '../../../chunks/lib.js';
import { g as u, a as x } from '../../../chunks/filename.js';
import { H as g, u as N } from '../../../chunks/useKeyup.js';
import { b as w } from '../../../chunks/utils.js';
const [A, f] = c()(({ observableModel: e }) => ({ ...{ root: e.object(), vehicleInfo: e.object('vehicleInfo') } }), i),
    V = 'VehicleAward_1da7a90e',
    C = 'VehicleAward_content_899c9ed4',
    k = 'VehicleAward_vehicle_e48a2601',
    y = 'VehicleAward_imageContainer_2313e12f',
    I = 'VehicleAward_crop_908504d8',
    P = 'VehicleAward_border_9c501e8e',
    E = 'VehicleAward_image_e1085013',
    T = 'VehicleAward_score_9fcd64fb',
    $ = 'VehicleAward_scoreIcon_79b6ff35',
    B = 'VehicleAward_level_be403845',
    H = 'VehicleAward_name_db659683',
    J = 'VehicleAward_title_d2db4e25',
    L = 'VehicleAward_levelIcon_c18df12e',
    S = 'VehicleAward_light_8a441018',
    W = 'VehicleAward_rays_79b688e2',
    q = e(() => {
        const { model: e } = f(),
            { techName: a, vehicleLevelPoints: c } = e.root.get(),
            { vehicleType: i, vehicleName: d, vehicleLvl: n, isElite: t } = e.vehicleInfo.get(),
            r = l(a),
            o = { backgroundImage: `url(R.images.gui.maps.icons.vehicleTypes.big.${l(i)}${t ? '_elite' : ''})` };
        return s.jsx('div', {
            className: V,
            children: s.jsxs('div', {
                className: C,
                children: [
                    s.jsx('div', { className: S }),
                    s.jsxs('div', {
                        className: k,
                        children: [
                            r &&
                                s.jsxs('div', {
                                    className: y,
                                    children: [
                                        s.jsx('div', { className: W }),
                                        s.jsx('div', {
                                            className: I,
                                            children: s.jsx('div', {
                                                className: E,
                                                style: {
                                                    backgroundImage: `url(${R.images.gui.maps.shop.vehicles.c_600x450.$dyn(r)})`,
                                                },
                                            }),
                                        }),
                                        s.jsx('div', { className: P }),
                                    ],
                                }),
                            s.jsxs('span', { className: T, children: [c, '/', c, s.jsx('div', { className: $ })] }),
                        ],
                    }),
                    s.jsxs('span', {
                        className: J,
                        children: [
                            s.jsx('span', { className: B, children: w(n) }),
                            s.jsx('div', { className: L, style: o }),
                            s.jsx('span', { className: H, children: d }),
                        ],
                    }),
                ],
            }),
        });
    }),
    z = 'Content_deaba007',
    D = 'Content_subTitle_15c1ed7d',
    K = 'Content_bonusPoints_20fbc1ad',
    M = 'Content_bonusIcon_3cb2baa3',
    U = 'Content_2d9b5dc0',
    F = 'Content_bottom_6af58715',
    G = 'Content_reward_32d9fa9',
    O = 'Content_buttonWrapper_c4ef9224',
    Q = R.strings.battle_pass.battlePassVehicleAwardView,
    X = e(() => {
        const { model: e } = f(),
            { battlePassPointsAward: a } = e.root.get(),
            { breakpoint: c } = d(),
            i = c.weight >= n.medium.weight;
        return s.jsxs('div', {
            className: z,
            children: [
                s.jsx(g, { title: Q.content.title(), status: Q.content.description() }),
                s.jsxs('div', {
                    className: U,
                    children: [
                        s.jsx(q, {}),
                        s.jsxs('div', {
                            className: F,
                            children: [
                                s.jsxs('div', {
                                    className: G,
                                    children: [
                                        s.jsx('div', { className: D, children: Q.content.subTitle() }),
                                        s.jsxs('span', { className: K, children: [a, s.jsx('div', { className: M })] }),
                                    ],
                                }),
                                s.jsx(t, {
                                    type: m.primary,
                                    size: i ? o.medium : o.small,
                                    onClick: () => r.close(),
                                    mixClass: O,
                                    children: Q.button(),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    Y = 'App_a42bc668',
    Z = 'App_background_ceadfe63',
    ee = 'App_background__shaded_1aa0b778',
    se = 'App_close_6d09ac22',
    ae = e(() => {
        const { model: e } = f(),
            { chapterID: c } = e.root.get(),
            i = !c;
        (h(), N({ [_.ENTER]: () => r.close(), [_.SPACE]: () => r.close(), [_.ESCAPE]: () => r.close() }));
        return s.jsxs('div', {
            className: Y,
            children: [
                s.jsx('div', {
                    className: a(Z, i && ee),
                    style:
                        ((l = c),
                        l
                            ? {
                                  backgroundImage: `url(${u(R.images.gui.maps.icons.battlePass.backgrounds.chapter_general, l)})`,
                              }
                            : x()),
                }),
                s.jsx('div', {
                    className: se,
                    children: s.jsx(b, {
                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                        type: 'close',
                        side: 'right',
                        onClick: () => r.close(),
                    }),
                }),
                s.jsx(X, {}),
            ],
        });
        var l;
    });
v(new j().add(p).addWithProps(A, {}).render(s.jsx(ae, {})));
