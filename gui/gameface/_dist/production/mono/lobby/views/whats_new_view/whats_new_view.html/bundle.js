import { T as e, j as a, A as s, x as n, R as i, y as c, z as r } from '../../../chunks/vendor.js';
import {
    i as t,
    cD as _,
    av as l,
    h as d,
    cL as o,
    cY as h,
    cB as m,
    u as p,
    B as g,
    M as x,
    F as v,
    m as j,
    a9 as u,
    af as f,
    cN as b,
    r as N,
    U as w,
} from '../../../chunks/lib.js';
import { u as M, S as V } from '../../../chunks/schedule_model.js';
import { C as y } from '../../../chunks/close_button.js';
import { P as I } from '../../../chunks/consts.js';
import { g as T } from '../../../chunks/get_button_size.js';
import { a as k } from '../../../chunks/enums.js';
import { S as A } from '../../../chunks/schedule_subheading.js';
import { V as C, a as B } from '../../../chunks/vehicle_name.js';
/* empty css                     */ import '../../../chunks/get_time_left.js';
import '../../../chunks/get_season_name.js';
import '../../../chunks/use_server_time_polling.js';
const [$, U] = t()(
        ({ observableModel: a }) => {
            const s = {
                    ...a.primitives(['topPercentage']),
                    vehicles: a.array('vehicles'),
                    newAvailableVehicles: a.array('newAvailableVehicles'),
                },
                n = e(
                    (e) => {
                        const a = l(s.vehicles.get(), e);
                        if (!a) throw new Error(`vehicle with index ${e} is not found`);
                        return { ...a };
                    },
                    { equals: _ },
                ),
                i = e(
                    (e) => {
                        const a = l(s.newAvailableVehicles.get(), e);
                        if (!a) throw new Error(`vehicle with index ${e} is not found`);
                        return { ...a };
                    },
                    { equals: _ },
                );
            return { ...s, computes: { vehicle: n, newAvailableVehicle: i } };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            openVideo: e.createCallbackNoArgs('onVideoOpen'),
        }),
    ),
    S = ({ className: e, onClose: n }) => (d(n), a.jsx('div', { className: s(e), children: a.jsx(o, {}) })),
    D = 'BackgroundVideo_3146bd30',
    z = 'BackgroundVideo_video_be61ad9f',
    W = 'BackgroundVideo_video__bg_277575c1',
    H = (e) => !!m.isHigh() && e,
    O = ({ className: e, classNames: n, animated: i = !0 }) =>
        a.jsx('div', {
            className: s(D, e),
            children: H(i)
                ? a.jsx(h, {
                      className: s(z, null == n ? void 0 : n.video),
                      src: String(R.videos.comp7.yearly_styles()),
                      autoplay: !0,
                      loop: !0,
                  })
                : a.jsx('div', { className: s(z, W, null == n ? void 0 : n.video) }),
        }),
    P = 'WatchVideo_content_ae20f033',
    Q = 'WatchVideo_videoButton_6b01e609',
    F = 'WatchVideo_text_6df0b12';
function G(e) {
    return e >= x.Large ? g.sizes.large : g.sizes.medium;
}
const L = n(() => {
        const { controls: e } = U(),
            { mediaSize: s } = p();
        return a.jsx(g, {
            theme: g.themes.secondary,
            size: G(s),
            onClick: e.openVideo,
            children: a.jsxs('div', {
                className: P,
                children: [
                    a.jsx('div', { className: Q }),
                    a.jsx('div', { className: F, children: R.strings.comp7_ext.whatsNewView.watchVideo() }),
                ],
            }),
        });
    }),
    q = 'Banner_ecc3ce57',
    E = 'Banner_h3_da1d407a',
    K = 'Banner_heading_5d953231',
    Y = 'Banner_date_1c1a4743',
    J = 'Banner_introDescription_d804cece',
    X = 'Banner_seasonText_bf05f458',
    Z = 'Banner_introContainer_9a7e5cc2',
    ee = 'Banner_shadow_57286f21',
    ae = 'Typography_h1_da89a0d0',
    se = 'Typography_h2_e8114310',
    ne = 'Typography_h3_e8114310',
    ie = 'Typography_paragraphText_5f2b094e',
    ce = () =>
        a.jsxs('div', {
            className: q,
            children: [
                a.jsx('div', { className: s(ne, E), children: R.strings.comp7_ext.whatsNewView.banner.title.small() }),
                a.jsx('div', { className: ae, children: R.strings.comp7_ext.whatsNewView.banner.title.large() }),
                a.jsx(A, { hasSeasonName: !1, className: Y }),
                a.jsx(L, {}),
                a.jsx('div', {
                    className: Z,
                    children: a.jsxs('div', {
                        className: J,
                        children: [
                            a.jsx('div', { className: ee }),
                            a.jsx(v, { classMix: K, text: R.strings.comp7_ext.whatsNewView.intro.heading() }),
                            a.jsx(v, {
                                classMix: s(ie, X),
                                text: R.strings.comp7_ext.whatsNewView.intro.description(),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    re = [
        { name: '08_ruinberg', tag: 'new' },
        { name: '31_airfield', tag: 'returned' },
        { name: '63_tundra', tag: 'revamped' },
    ],
    te = {
        base: 'Tag_76d15c82',
        base__new: 'Tag_base__new_bca663c2',
        base__changed: 'Tag_base__changed_9320deb9',
        base__seasonUpdate: 'Tag_base__seasonUpdate_852f3760',
        base__revamped: 'Tag_base__revamped_712085ab',
        base__returned: 'Tag_base__returned_dee71c48',
        fadeIn: 'Tag_fadeIn_0',
        fadeInThreeQuarters: 'Tag_fadeInThreeQuarters_0',
        fadeInHalf: 'Tag_fadeInHalf_0',
        fadeOut: 'Tag_fadeOut_0',
        fadeInWithScale: 'Tag_fadeInWithScale_0',
        slideUp: 'Tag_slideUp_0',
        scale: 'Tag_scale_0',
        raysAppearance: 'Tag_raysAppearance_0',
        rotate: 'Tag_rotate_0',
        'reverse-rotate': 'Tag_reverse-rotate_0',
        glowAppearance: 'Tag_glowAppearance_0',
        highlightAppearance: 'Tag_highlightAppearance_0',
        blink: 'Tag_blink_0',
        slideUpIn: 'Tag_slideUpIn_0',
    },
    _e = ({ type: e, className: n }) =>
        a.jsx('div', {
            className: s(te.base, te[`base__${e}`], n),
            children: R.strings.comp7_ext.whatsNewView.tag.$dyn(e),
        }),
    le = {
        base: 'Map_7af9858a',
        gradient: 'Map_gradient_ec64a7b9',
        content: 'Map_content_8a441eb3',
        nameContainer: 'Map_nameContainer_8f070fae',
        name: 'Map_name_cdb35f0e',
        stamp: 'Map_stamp_4d4b61ec',
        stamp__removed: 'Map_stamp__removed_134fd212',
        stamp__underDevelopment: 'Map_stamp__underDevelopment_2eab81f6',
        fadeIn: 'Map_fadeIn_0',
        fadeInThreeQuarters: 'Map_fadeInThreeQuarters_0',
        fadeInHalf: 'Map_fadeInHalf_0',
        fadeOut: 'Map_fadeOut_0',
        fadeInWithScale: 'Map_fadeInWithScale_0',
        slideUp: 'Map_slideUp_0',
        scale: 'Map_scale_0',
        raysAppearance: 'Map_raysAppearance_0',
        rotate: 'Map_rotate_0',
        'reverse-rotate': 'Map_reverse-rotate_0',
        glowAppearance: 'Map_glowAppearance_0',
        highlightAppearance: 'Map_highlightAppearance_0',
        blink: 'Map_blink_0',
        slideUpIn: 'Map_slideUpIn_0',
    },
    de = ({ name: e, index: n, tag: i, stamp: c }) => {
        const r = R.images.comp7.gui.maps.icons.whatsNewView.arenas.$dyn(`c_${n}`),
            t = R.strings.arenas.$dyn(`c_${e}`);
        return a.jsxs('div', {
            className: le.base,
            style: { backgroundImage: `url(${r})` },
            children: [
                a.jsx('div', { className: le.gradient }),
                c &&
                    a.jsx('div', {
                        className: s(le.stamp, le[`stamp__${c}`]),
                        children: R.strings.comp7_ext.whatsNewView.stamp.$dyn(c),
                    }),
                a.jsxs('div', {
                    className: le.content,
                    children: [
                        i && a.jsx(_e, { type: i }),
                        a.jsx('div', {
                            className: le.nameContainer,
                            children: a.jsx('div', { className: le.name, children: t.$dyn('name') }),
                        }),
                    ],
                }),
            ],
        });
    },
    oe = 'Grid_container_831824ec',
    he = 'Grid_header_9a3828c4',
    me = 'Grid_row_6e713752',
    pe = 'Grid_cell_30c32ef4',
    ge = { header: 'MapChanges_header_fee2f9a8' },
    xe = () =>
        a.jsxs('div', {
            className: ge.base,
            children: [
                a.jsxs('div', {
                    className: s(he, ge.header),
                    children: [
                        a.jsx('div', {
                            className: se,
                            children: R.strings.comp7_ext.whatsNewView.mapChanges.heading(),
                        }),
                        a.jsx(_e, { type: 'seasonUpdate' }),
                    ],
                }),
                a.jsx('div', {
                    className: me,
                    children: re.map(({ name: e, tag: s, stamp: n }, i) =>
                        a.jsx(
                            'div',
                            { className: pe, children: a.jsx(de, { name: e, tag: s, stamp: n, index: i }) },
                            e,
                        ),
                    ),
                }),
            ],
        }),
    ve = 'Vehicle_7e772fe',
    je = 'Vehicle_vehicleName_42fcd272',
    ue = n(({ index: e }) => {
        const { model: s } = U(),
            { mediaSize: n } = p(),
            i = s.computes.newAvailableVehicle(e),
            c = `url(${R.images.comp7.gui.maps.icons.whatsNewView.newVehicles.$num(i.vehicleCD)})`;
        return a.jsx('div', {
            className: ve,
            style: { backgroundImage: c },
            children: a.jsx(C, {
                name: i.name,
                tier: i.tier,
                type: i.type,
                isPremium: i.isPremium,
                tooltipArgs: { vehicleCD: i.vehicleCD, tooltipId: 'shopVehicle' },
                vehicleCD: i.vehicleCD,
                role: i.roleKey,
                size: n >= x.Large ? B.x48 : B.x24,
                className: je,
            }),
        });
    }),
    fe = { separator: 'NewVehicles_separator_11eca317', vehiclesRow: 'NewVehicles_vehiclesRow_7de4881' },
    be = n(() => {
        const { model: e } = U(),
            n = e.newAvailableVehicles.get().length;
        return a.jsxs('div', {
            className: fe.base,
            children: [
                a.jsxs('div', {
                    className: he,
                    children: [
                        a.jsx('div', { className: se, children: R.strings.comp7_ext.whatsNewView.newVehicles() }),
                        a.jsx(_e, { type: 'new' }),
                    ],
                }),
                a.jsx('div', {
                    className: s(me, fe.vehiclesRow),
                    children: j(n, (e) =>
                        a.jsxs(
                            i.Fragment,
                            {
                                children: [
                                    a.jsx('div', { className: pe, children: a.jsx(ue, { index: e }) }),
                                    e !== n - 1 && a.jsx('div', { className: fe.separator }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            ],
        });
    }),
    Ne = 'Vehicle_adb90ae5',
    we = 'Vehicle_gradient_66189772',
    Me = 'Vehicle_details_23086f8c',
    Ve = 'Vehicle_vehicleName_3c00f9a6',
    ye = n(({ index: e }) => {
        const { model: s } = U(),
            { mediaSize: n } = p(),
            i = s.computes.vehicle(e),
            c = `url(${R.images.comp7.gui.maps.icons.whatsNewView.vehiclesForRent.$num(i.vehicleCD)})`;
        return a.jsxs('div', {
            className: Ne,
            style: { backgroundImage: c },
            children: [
                a.jsx('div', { className: we }),
                a.jsx('div', {
                    className: Me,
                    children: a.jsx(C, {
                        name: i.name,
                        tier: i.tier,
                        type: i.type,
                        isPremium: i.isPremium,
                        tooltipArgs: { vehicleCD: i.vehicleCD, tooltipId: 'shopVehicle' },
                        vehicleCD: i.vehicleCD,
                        role: i.roleKey,
                        size: n >= x.Large ? B.x48 : B.x24,
                        className: Ve,
                    }),
                }),
            ],
        });
    }),
    Ie = { header: 'VehiclesForRent_header_63fcbd4e' },
    Te = n(() => {
        const { model: e } = U();
        return a.jsxs('div', {
            className: Ie.container,
            children: [
                a.jsxs('div', {
                    className: s(he, Ie.header),
                    children: [
                        a.jsx('div', {
                            className: se,
                            children: R.strings.comp7_ext.whatsNewView.vehiclesForRent.heading(),
                        }),
                        a.jsx(_e, { type: 'seasonUpdate' }),
                    ],
                }),
                a.jsx('div', {
                    className: me,
                    children: j(e.vehicles.get().length, (e) =>
                        a.jsx('div', { className: pe, children: a.jsx(ye, { index: e }) }, e),
                    ),
                }),
            ],
        });
    }),
    ke = {
        base: 'Main_c6b88ada',
        areaBaseWrapper: 'Main_areaBaseWrapper_4f37ba56',
        videoContainer: 'Main_videoContainer_742b9b37',
        content: 'Main_content_89d4e584',
        content__first: 'Main_content__first_dbd58c45',
        content__second: 'Main_content__second_7dca6a3b',
        content__third: 'Main_content__third_2588e0ff',
        scrollBar: 'Main_scrollBar_1f24d8d6',
        banner: 'Main_banner_453d2d3b',
        section: 'Main_section_252e362d',
        button: 'Main_button_42e0b916',
        slideUpIn: 'Main_slideUpIn_84c5dae7',
        container__1: 'Main_container__1_f604bb7f',
        container__2: 'Main_container__2_3037bf3a',
        container__3: 'Main_container__3_364d1171',
        container__4: 'Main_container__4_2d897c3d',
        container__5: 'Main_container__5_f30d5c83',
        wrapper: 'Main_wrapper_652c62b3',
        fadeIn: 'Main_fadeIn_84c5dae7',
        fadeInThreeQuarters: 'Main_fadeInThreeQuarters_84c5dae7',
        fadeInHalf: 'Main_fadeInHalf_84c5dae7',
        fadeOut: 'Main_fadeOut_84c5dae7',
        fadeInWithScale: 'Main_fadeInWithScale_84c5dae7',
        slideUp: 'Main_slideUp_84c5dae7',
        scale: 'Main_scale_84c5dae7',
        raysAppearance: 'Main_raysAppearance_84c5dae7',
        rotate: 'Main_rotate_84c5dae7',
        'reverse-rotate': 'Main_reverse-rotate_84c5dae7',
        glowAppearance: 'Main_glowAppearance_84c5dae7',
        highlightAppearance: 'Main_highlightAppearance_84c5dae7',
        blink: 'Main_blink_84c5dae7',
    },
    Ae = { base: ke.scrollBar },
    Ce = n(() => {
        const { controls: e } = U(),
            { model: n } = M(),
            { mediaSize: i } = p(),
            c = n.season.name.get();
        return a.jsx(u, {
            children: a.jsxs(f, {
                className: ke.base,
                barClassNames: Ae,
                scrollClassName: ke.areaBaseWrapper,
                children: [
                    c === k.Third && a.jsx(O, { className: ke.videoContainer }),
                    a.jsxs('div', {
                        className: s(ke.content, ke[`content__${c}`]),
                        children: [
                            a.jsx('div', { className: s(oe, ke.banner, ke.container__1), children: a.jsx(ce, {}) }),
                            a.jsx('div', { className: s(oe, ke.section, ke.container__2), children: a.jsx(be, {}) }),
                            a.jsx('div', { className: s(oe, ke.section, ke.container__3), children: a.jsx(xe, {}) }),
                            a.jsx('div', { className: s(oe, ke.container__4), children: a.jsx(Te, {}) }),
                            a.jsx(g, {
                                theme: g.themes.primary,
                                size: T(i),
                                className: ke.button,
                                onClick: e.close,
                                children: R.strings.comp7_ext.whatsNewView.button.ok(),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Re = 'App_f9ac9f39',
    Be = 'App_container_9abce13f',
    $e = 'App_waiting_93ca532a',
    Ue = n(() => {
        const { controls: e } = U(),
            { model: s } = M(),
            n = s.season.name.get(),
            i = c(I),
            t = b(
                ((e) => [
                    R.images.comp7.gui.maps.icons.whatsNewView.backdrop(),
                    String(R.images.comp7.gui.maps.icons.whatsNewView.$dyn(`bg_${e}`)),
                ])(n),
            );
        return a.jsx('div', {
            className: Re,
            children:
                'success' === t
                    ? a.jsxs(r.div, {
                          className: Be,
                          style: i,
                          children: [a.jsx(Ce, {}), a.jsx(y, { onClick: e.close })],
                      })
                    : a.jsx(S, { onClose: e.close, className: $e }),
        });
    });
N(
    a.jsx(w, {
        children: a.jsx($, {
            children: a.jsx(V, { options: { context: 'model.scheduleInfo' }, children: a.jsx(Ue, {}) }),
        }),
    }),
);
