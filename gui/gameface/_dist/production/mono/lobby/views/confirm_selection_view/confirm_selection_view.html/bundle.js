import { p as e, j as s, q as a } from '../../../chunks/vendor.js';
import {
    i as c,
    m as i,
    r as n,
    u as l,
    s as r,
    B as t,
    t as o,
    F as m,
    V as d,
    a as h,
    b as _,
    c as p,
    k as N,
    p as x,
    d as C,
    U as u,
} from '../../../chunks/lib.js';
import { C as v } from '../../../chunks/close_button.js';
function j(e) {
    return {
        name: e.name,
        techName: e.techName,
        tier: e.tier,
        type: e.type,
        premium: e.isPremium,
        tags: e.tags,
        nation: e.nation,
        roleKey: e.roleKey,
        vehicleCD: e.vehicleCD,
    };
}
const [f, g] = c()(
        ({ observableModel: e }) => ({
            ...e.primitives(['branchName']),
            creditedVehicles: e.transform((e) => i(e, j), 'creditedVehicles'),
            obtainedVehicles: e.transform((e) => i(e, j), 'obtainedVehicles'),
        }),
        ({ externalModel: e }) => ({
            confirm: e.createCallbackNoArgs('onConfirm'),
            close: e.createCallbackNoArgs('onClose'),
        }),
    ),
    b = 'Footer_877c593c',
    V = 'Footer_button_d2d8cc98',
    y = n.resolve('strings'),
    k = e(function ({ className: e }) {
        const { controls: c } = g(),
            i = l({ size: r.small }, { medium: { size: r.large } });
        return s.jsxs('div', {
            className: a(b, e),
            children: [
                s.jsx('div', {
                    className: V,
                    children: s.jsx(t, {
                        onClick: c.confirm,
                        theme: o.primary,
                        size: i.size,
                        children: y.readOrEmpty('one_time_gift.selectionConfirm.claimButton.text'),
                    }),
                }),
                s.jsx('div', {
                    className: V,
                    children: s.jsx(t, {
                        onClick: c.close,
                        theme: o.secondary,
                        size: i.size,
                        children: y.readOrEmpty('one_time_gift.selectionConfirm.cancelButton.text'),
                    }),
                }),
            ],
        });
    }),
    A = 'Header_ee5a2d07',
    w = 'Header_title_1269cf82',
    H = 'Header_description_4964107b';
function W({ receivedVehiclesCount: e, branchName: c, className: i }) {
    return s.jsxs('div', {
        className: a(A, i),
        children: [
            s.jsx('div', {
                className: w,
                children: s.jsx(m, {
                    path: 'one_time_gift.selectionConfirm.title',
                    count: e,
                    params: { count: e, branchName: c },
                    brackets: { start: '%(', end: ')' },
                }),
            }),
            s.jsx('div', {
                className: H,
                children: n.resolve('strings').readOrEmpty('one_time_gift.selectionConfirm.description'),
            }),
        ],
    });
}
const z = 'VehicleCard_2635ba03',
    E = 'VehicleCard_image_889b70c0',
    M = 'VehicleCard_info_7897b1c0',
    L = 'VehicleCard_type_669c67a8',
    O = 'VehicleCard_text_d80efb68';
function T({ vehicle: e, className: c }) {
    const { tier: i, name: n, type: l, premium: r, techName: t } = e;
    return s.jsxs('div', {
        className: a(z, c),
        children: [
            s.jsx('div', {
                className: E,
                style: { backgroundImage: `url(R.images.gui.maps.shop.vehicles.c_360x270.${t})` },
            }),
            s.jsxs(d, {
                className: M,
                children: [
                    s.jsx(d.Level, { className: O, value: i }),
                    h(l) && s.jsx(d.Type, { type: l, premium: r, className: L }),
                    s.jsxs(d.Name, { className: O, children: [' ', n, ' '] }),
                ],
            }),
        ],
    });
}
const B = { base: 'InfoIcon_ec6c09bf' };
function F({ className: e }) {
    return s.jsx('svg', {
        viewBox: '0 0 15 15',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        className: a(B.base, e),
        children: s.jsx('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7.5 0.5C8.88447 0.5 10.2378 0.910548 11.389 1.67972C12.5401 2.44889 13.4373 3.54213 13.9672 4.82121C14.497 6.1003 14.6356 7.50776 14.3655 8.86563C14.0954 10.2235 13.4287 11.4708 12.4498 12.4498C11.4708 13.4287 10.2235 14.0954 8.86566 14.3655C7.50779 14.6356 6.10031 14.497 4.82123 13.9672C3.54215 13.4373 2.44886 12.5401 1.67969 11.389C0.910518 10.2378 0.5 8.88447 0.5 7.5C0.5 5.64348 1.23748 3.863 2.55023 2.55025C3.86299 1.23749 5.64348 0.5 7.5 0.5ZM7.5 1.75C8.63724 1.75 9.74894 2.08724 10.6945 2.71906C11.6401 3.35087 12.3771 4.2489 12.8123 5.29958C13.2475 6.35025 13.3614 7.50637 13.1395 8.62177C12.9177 9.73716 12.37 10.7617 11.5659 11.5659C10.7617 12.37 9.73716 12.9176 8.62177 13.1395C7.50637 13.3614 6.35024 13.2475 5.29956 12.8123C4.24889 12.3771 3.35087 11.6401 2.71906 10.6945C2.08724 9.74895 1.75 8.63724 1.75 7.5C1.75 5.97501 2.35581 4.51248 3.43414 3.43414C4.51248 2.35581 5.97501 1.75 7.5 1.75ZM6.5 7.5H8.5V11.5H6.5V7.5ZM6.5 3.5H8.5V5.5H6.5V3.5Z',
        }),
    });
}
const I = 'Warning_4661e26d',
    Z = 'Warning_text_abe66a14',
    D = 'Warning_icon_1341f926',
    K = 'Warning_obtainedVehicle_cbda26d',
    P = 'Warning_vehicleType_b03fdb6b',
    q = 'Warning_vehicleText_85d55237',
    S = 'Warning_vehicleInfo_cbda26d';
function U({ vehiclesList: e, className: c }) {
    const i = n.resolve('strings').readOrEmpty('one_time_gift.selectionConfirm.vehiclesDivider');
    return s.jsx('div', {
        className: a(I, c),
        children: s.jsx(_, {
            className: Z,
            split: !0,
            path: 'one_time_gift.selectionConfirm.warning.' + (1 === e.length ? 'oneVehicle' : 'moreThanOneVehicle'),
            params: {
                vehiclesList: s.jsxs(s.Fragment, {
                    children: [
                        s.jsx(F, { className: D }),
                        e.map((a, c) => {
                            const { name: n, tier: l, type: r, premium: t } = a;
                            return s.jsxs(
                                'span',
                                {
                                    className: K,
                                    children: [
                                        s.jsxs(d, {
                                            className: S,
                                            children: [
                                                s.jsx(d.Level, { className: q, value: l }),
                                                h(r) && s.jsx(d.Type, { type: r, premium: t, className: P }),
                                                s.jsxs(d.Name, { className: q, children: [' ', n, ' '] }),
                                            ],
                                        }),
                                        c < e.length - 1 && i,
                                    ],
                                },
                                n,
                            );
                        }),
                    ],
                }),
            },
        }),
    });
}
const $ = 'App_78513092',
    G = 'App_close_f5179698',
    J = 'App_content_2b9919c4',
    Q = 'App_header_e7ad3cdc',
    X = 'App_creditedVehicles_ab7ace59',
    Y = 'App_vehicleCard_372acee3',
    ee = 'App_warning_d691a8a2',
    se = 'App_footer_7d50632f',
    ae = e(function () {
        const { model: e, controls: a } = g(),
            c = e.creditedVehicles.get(),
            i = e.obtainedVehicles.get();
        return (
            p(N.ESCAPE, a.close),
            x.sound(R.sounds.wdr_award_tank()),
            s.jsxs('div', {
                className: $,
                children: [
                    s.jsx(v, { className: G, onClick: a.close }),
                    s.jsxs('div', {
                        className: J,
                        children: [
                            s.jsx(W, { branchName: e.branchName.get(), receivedVehiclesCount: c.length, className: Q }),
                            s.jsx('div', {
                                className: X,
                                children: c.map((e) => s.jsx(T, { vehicle: e, className: Y }, e.techName)),
                            }),
                            i.length > 0 && s.jsx(U, { vehiclesList: i, className: ee }),
                            s.jsx(k, { className: se }),
                        ],
                    }),
                ],
            })
        );
    });
C(s.jsx(f, { children: s.jsx(u, { children: s.jsx(ae, {}) }) }));
