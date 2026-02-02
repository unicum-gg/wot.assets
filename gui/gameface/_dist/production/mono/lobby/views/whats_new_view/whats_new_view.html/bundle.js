import { S as e, j as a, J as s, I as n, f as i, R as c, Q as t, P as r } from '../../../chunks/vendor.js';
import {
    i as _,
    cU as d,
    aB as l,
    dA as o,
    d2 as h,
    cf as m,
    dl as p,
    cS as x,
    aI as g,
    a7 as v,
    ch as j,
    cd as b,
    m as N,
    T as w,
    _ as f,
    d4 as u,
    cP as M,
    cn as V,
} from '../../../chunks/lib.js';
import { u as y, S as I } from '../../../chunks/schedule_model.js';
import { C as T } from '../../../chunks/close_button.js';
import { P as C } from '../../../chunks/consts.js';
import { g as k } from '../../../chunks/get_button_size.js';
import { b as A } from '../../../chunks/enums.js';
import { S as U } from '../../../chunks/schedule_subheading.js';
import { V as B, a as S } from '../../../chunks/vehicle_name.js';
/* empty css                     */ import '../../../chunks/get_season_name.js';
import '../../../chunks/use_server_time_polling.js';
const [$, D] = _()(
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
                    { equals: d },
                ),
                i = e(
                    (e) => {
                        const a = l(s.newAvailableVehicles.get(), e);
                        if (!a) throw new Error(`vehicle with index ${e} is not found`);
                        return { ...a };
                    },
                    { equals: d },
                );
            return { ...s, computes: { vehicle: n, newAvailableVehicle: i } };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            openVideo: e.createCallbackNoArgs('onVideoOpen'),
        }),
    ),
    W = ({ className: e, onClose: n }) => (o(n), a.jsx('div', { className: s(e), children: a.jsx(h, {}) })),
    z = {
        base: 'Tag_ebca89ec',
        base__new: 'Tag_base__new_bca663c2',
        base__changed: 'Tag_base__changed_9320deb9',
        base__seasonUpdate: 'Tag_base__seasonUpdate_852f3760',
        base__revamped: 'Tag_base__revamped_712085ab',
        base__returned: 'Tag_base__returned_dee71c48',
        base__attention: 'Tag_base__attention_20082c79',
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
    P = ({ type: e, className: n }) =>
        a.jsx('div', {
            className: s(z.base, z[`base__${e}`], n),
            children: R.strings.comp7_ext.whatsNewView.tag.$dyn(e),
        }),
    H = 'Grid_container_831824ec',
    O = 'Grid_header_9a3828c4',
    Q = 'Grid_row_6e713752',
    F = 'Grid_cell_30c32ef4',
    G = 'CommsCenter_cacf3fc3',
    L = 'CommsCenter_text_b65fdeb3',
    q = 'CommsCenter_container_6791e5a4',
    E = 'Typography_h1_da89a0d0',
    K = 'Typography_h2_e8114310',
    J = 'Typography_h3_e8114310',
    X = 'Typography_paragraphText_5f2b094e',
    Y = () =>
        a.jsx('div', {
            className: G,
            children: a.jsxs('div', {
                className: q,
                children: [
                    a.jsxs('div', {
                        className: O,
                        children: [
                            a.jsx('div', { className: K, children: R.strings.comp7_ext.whatsNewView.comms.heading() }),
                            a.jsx(P, { type: 'seasonUpdate' }),
                        ],
                    }),
                    a.jsx(m, { classMix: s(X, L), text: R.strings.comp7_ext.whatsNewView.comms.description() }),
                ],
            }),
        }),
    Z = 'ShopUpdates_127b9aee',
    ee = 'ShopUpdates_header_f1f50f12',
    ae = 'ShopUpdates_text_c2b4cf6c',
    se = () =>
        a.jsxs('div', {
            className: Z,
            children: [
                a.jsxs('div', {
                    className: s(O, ee),
                    children: [
                        a.jsx('div', {
                            className: K,
                            children: R.strings.comp7_ext.whatsNewView.shopUpdates.heading(),
                        }),
                        a.jsx(P, { type: 'revamped' }),
                    ],
                }),
                a.jsx(m, { classMix: s(X, ae), text: R.strings.comp7_ext.whatsNewView.shopUpdates.description() }),
            ],
        }),
    ne = 'TemporaryUnavailable_8085316d',
    ie = 'TemporaryUnavailable_text_599b62f2',
    ce = 'TemporaryUnavailable_container_782e9cbd',
    te = () =>
        a.jsx('div', {
            className: ne,
            children: a.jsxs('div', {
                className: ce,
                children: [
                    a.jsxs('div', {
                        className: O,
                        children: [
                            a.jsx('div', {
                                className: K,
                                children: R.strings.comp7_ext.whatsNewView.unavailable.heading(),
                            }),
                            a.jsx(P, { type: 'attention' }),
                        ],
                    }),
                    a.jsx(m, { classMix: s(X, ie), text: R.strings.comp7_ext.whatsNewView.unavailable.description() }),
                ],
            }),
        }),
    re = 'BackgroundVideo_3146bd30',
    _e = 'BackgroundVideo_video_be61ad9f',
    de = 'BackgroundVideo_video__bg_277575c1',
    le = (e) => !!x.isHigh() && e,
    oe = ({ className: e, classNames: n, animated: i = !0 }) =>
        a.jsx('div', {
            className: s(re, e),
            children: le(i)
                ? a.jsx(p, {
                      className: s(_e, null == n ? void 0 : n.video),
                      src: String(R.videos.comp7.yearly_styles()),
                      autoplay: !0,
                      loop: !0,
                  })
                : a.jsx('div', { className: s(_e, de, null == n ? void 0 : n.video) }),
        }),
    he = 'WatchVideo_content_ae20f033',
    me = 'WatchVideo_videoButton_6b01e609',
    pe = 'WatchVideo_text_6df0b12';
function xe(e) {
    return e >= j.Large ? v.sizes.large : v.sizes.medium;
}
const ge = n(() => {
        const { controls: e } = D(),
            { mediaSize: s } = g();
        return a.jsx(v, {
            theme: v.themes.secondary,
            size: xe(s),
            onClick: e.openVideo,
            children: a.jsxs('div', {
                className: he,
                children: [
                    a.jsx('div', { className: me }),
                    a.jsx('div', { className: pe, children: R.strings.comp7_ext.whatsNewView.watchVideo() }),
                ],
            }),
        });
    }),
    ve = 'Banner_ecc3ce57',
    je = 'Banner_h3_da1d407a',
    be = 'Banner_header_bb3943d8',
    Ne = 'Banner_heading_31147dd',
    we = 'Banner_date_1c1a4743',
    fe = 'Banner_introDescription_62169d6e',
    ue = 'Banner_seasonText_bf05f458',
    Me = 'Banner_introContainer_328c8c73',
    Ve = 'Banner_shadow_57286f21',
    ye = 'Banner_tag_b884e5f0',
    Ie = () =>
        a.jsxs('div', {
            className: ve,
            children: [
                a.jsx('div', { className: s(J, je), children: R.strings.comp7_ext.whatsNewView.banner.title.small() }),
                a.jsx('div', { className: E, children: R.strings.comp7_ext.whatsNewView.banner.title.large() }),
                a.jsx(U, { hasSeasonName: !1, className: we }),
                a.jsx(ge, {}),
                a.jsx('div', {
                    className: Me,
                    children: a.jsxs('div', {
                        className: fe,
                        children: [
                            a.jsx('div', { className: Ve }),
                            a.jsx('div', {
                                className: be,
                                children: a.jsx(b, {
                                    classMix: Ne,
                                    text: R.strings.comp7_ext.whatsNewView.intro.heading(),
                                    binding: { tag: a.jsx(P, { type: 'new', className: ye }) },
                                }),
                            }),
                            a.jsx(b, {
                                classMix: s(X, ue),
                                text: R.strings.comp7_ext.whatsNewView.intro.description(),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    Te = [
        { name: '13_erlenberg', tag: 'new' },
        { name: '217_er_alaska', stamp: 'removed' },
    ],
    Ce = {
        base: 'Map_b174a88c',
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
    ke = ({ name: e, index: n, tag: i, stamp: c }) => {
        const t = R.images.comp7.gui.maps.icons.whatsNewView.arenas.$dyn(`c_${n}`),
            r = R.strings.arenas.$dyn(`c_${e}`);
        return a.jsxs('div', {
            className: Ce.base,
            style: { backgroundImage: `url(${t})` },
            children: [
                a.jsx('div', { className: Ce.gradient }),
                c &&
                    a.jsx('div', {
                        className: s(Ce.stamp, Ce[`stamp__${c}`]),
                        children: R.strings.comp7_ext.whatsNewView.stamp.$dyn(c),
                    }),
                a.jsxs('div', {
                    className: Ce.content,
                    children: [
                        i && a.jsx(P, { type: i }),
                        a.jsx('div', {
                            className: Ce.nameContainer,
                            children: a.jsx('div', { className: Ce.name, children: r.$dyn('name') }),
                        }),
                    ],
                }),
            ],
        });
    },
    Ae = { header: 'MapChanges_header_fee2f9a8' },
    Re = () =>
        a.jsxs('div', {
            className: Ae.base,
            children: [
                a.jsxs('div', {
                    className: s(O, Ae.header),
                    children: [
                        a.jsx('div', { className: K, children: R.strings.comp7_ext.whatsNewView.mapChanges.heading() }),
                        a.jsx(P, { type: 'seasonUpdate' }),
                    ],
                }),
                a.jsx('div', {
                    className: Q,
                    children: Te.map(({ name: e, tag: s, stamp: n }, i) =>
                        a.jsx('div', { className: F, children: a.jsx(ke, { name: e, tag: s, stamp: n, index: i }) }, e),
                    ),
                }),
            ],
        }),
    Ue = 'Vehicle_5a78e5c0',
    Be = 'Vehicle_bg_530dd6d8',
    Se = 'Vehicle_vehicleName_472d5bf7',
    $e = n(({ index: e }) => {
        const { model: s } = D(),
            { mediaSize: n } = g(),
            i = s.computes.newAvailableVehicle(e),
            c = `url(${R.images.comp7.gui.maps.icons.whatsNewView.newVehicles.$num(i.vehicleCD)})`;
        return a.jsxs('div', {
            className: Ue,
            children: [
                a.jsx('div', { className: Be, style: { backgroundImage: c } }),
                a.jsx(B, {
                    name: i.name,
                    tier: i.tier,
                    type: i.type,
                    isPremium: i.isPremium,
                    tooltipArgs: { vehicleCD: i.vehicleCD, tooltipId: 'shopVehicle' },
                    vehicleCD: i.vehicleCD,
                    role: i.roleKey,
                    size: n >= j.Large ? S.x48 : S.x24,
                    className: Se,
                }),
            ],
        });
    }),
    De = 'NewVehicles_6f7751e5',
    We = 'NewVehicles_header_f488f783',
    ze = 'NewVehicles_tag_be6dca54',
    Pe = 'NewVehicles_h2_b14237be',
    He = n(() => {
        const { model: e } = D(),
            s = e.newAvailableVehicles.get().length;
        return a.jsxs('div', {
            className: De,
            children: [
                a.jsx('div', {
                    className: We,
                    children: a.jsx(b, {
                        text: R.strings.comp7_ext.whatsNewView.newVehicles(s),
                        classMix: i(K, Pe),
                        binding: { tag: a.jsx(P, { type: 'new', className: ze }) },
                    }),
                }),
                N(s, (e) => a.jsx(c.Fragment, { children: a.jsx($e, { index: e }) }, e)),
            ],
        });
    }),
    Oe = 'Vehicle_adb90ae5',
    Qe = 'Vehicle_gradient_66189772',
    Fe = 'Vehicle_details_23086f8c',
    Ge = 'Vehicle_vehicleName_3c00f9a6',
    Le = n(({ index: e }) => {
        const { model: s } = D(),
            { mediaSize: n } = g(),
            i = s.computes.vehicle(e),
            c = `url(${R.images.comp7.gui.maps.icons.whatsNewView.vehiclesForRent.$num(i.vehicleCD)})`;
        return a.jsxs('div', {
            className: Oe,
            style: { backgroundImage: c },
            children: [
                a.jsx('div', { className: Qe }),
                a.jsx('div', {
                    className: Fe,
                    children: a.jsx(B, {
                        name: i.name,
                        tier: i.tier,
                        type: i.type,
                        isPremium: i.isPremium,
                        tooltipArgs: { vehicleCD: i.vehicleCD, tooltipId: 'shopVehicle' },
                        vehicleCD: i.vehicleCD,
                        role: i.roleKey,
                        size: n >= j.Large ? S.x48 : S.x24,
                        className: Ge,
                    }),
                }),
            ],
        });
    }),
    qe = { header: 'VehiclesForRent_header_63fcbd4e' },
    Ee = n(() => {
        const { model: e } = D();
        return a.jsxs('div', {
            className: qe.container,
            children: [
                a.jsxs('div', {
                    className: s(O, qe.header),
                    children: [
                        a.jsx('div', {
                            className: K,
                            children: R.strings.comp7_ext.whatsNewView.vehiclesForRent.heading(),
                        }),
                        a.jsx(P, { type: 'seasonUpdate' }),
                    ],
                }),
                a.jsx('div', {
                    className: Q,
                    children: N(e.vehicles.get().length, (e) =>
                        a.jsx('div', { className: F, children: a.jsx(Le, { index: e }) }, e),
                    ),
                }),
            ],
        });
    }),
    Ke = {
        base: 'Main_c6b88ada',
        areaBaseWrapper: 'Main_areaBaseWrapper_4f37ba56',
        videoContainer: 'Main_videoContainer_742b9b37',
        content: 'Main_content_89d4e584',
        content__first: 'Main_content__first_dbd58c45',
        content__second: 'Main_content__second_7dca6a3b',
        content__third: 'Main_content__third_2588e0ff',
        scrollBar: 'Main_scrollBar_1f24d8d6',
        banner: 'Main_banner_ddc5850d',
        section: 'Main_section_252e362d',
        section__updates: 'Main_section__updates_e509069',
        section__attention: 'Main_section__attention_2b89c1a7',
        button: 'Main_button_42e0b916',
        slideUpIn: 'Main_slideUpIn_84c5dae7',
        container__1: 'Main_container__1_f604bb7f',
        container__2: 'Main_container__2_3037bf3a',
        container__3: 'Main_container__3_364d1171',
        container__4: 'Main_container__4_2d897c3d',
        container__5: 'Main_container__5_f30d5c83',
        wrapper: 'Main_wrapper_652c62b3',
        separator: 'Main_separator_2d35d14a',
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
    Je = { base: Ke.scrollBar },
    Xe = n(() => {
        const { controls: e } = D(),
            { model: n } = y(),
            { mediaSize: i } = g(),
            c = n.season.name.get();
        return a.jsx(w, {
            children: a.jsxs(f, {
                className: Ke.base,
                barClassNames: Je,
                scrollClassName: Ke.areaBaseWrapper,
                children: [
                    c === A.Third && a.jsx(oe, { className: Ke.videoContainer }),
                    a.jsxs('div', {
                        className: s(Ke.content, Ke[`content__${c}`]),
                        children: [
                            a.jsx('div', { className: s(H, Ke.banner, Ke.container__1), children: a.jsx(Ie, {}) }),
                            a.jsxs('div', {
                                className: s(H, Ke.section, Ke.section__updates, Ke.container__2),
                                children: [a.jsx(se, {}), a.jsx(He, {})],
                            }),
                            a.jsxs('div', {
                                className: s(H, Ke.section, Ke.section__attention, Ke.container__3),
                                children: [a.jsx(te, {}), a.jsx('div', { className: Ke.separator }), a.jsx(Y, {})],
                            }),
                            a.jsx('div', { className: s(H, Ke.section, Ke.container__4), children: a.jsx(Re, {}) }),
                            a.jsx('div', { className: s(H, Ke.container__5), children: a.jsx(Ee, {}) }),
                            a.jsx(v, {
                                theme: v.themes.primary,
                                size: k(i),
                                className: Ke.button,
                                onClick: e.close,
                                children: R.strings.comp7_ext.whatsNewView.button.ok(),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Ye = 'App_f9ac9f39',
    Ze = 'App_container_9abce13f',
    ea = 'App_waiting_93ca532a',
    aa = n(() => {
        const { controls: e } = D(),
            { model: s } = y(),
            n = s.season.name.get(),
            i = t(C),
            c = u(
                ((e) => [
                    R.images.comp7.gui.maps.icons.whatsNewView.backdrop(),
                    String(R.images.comp7.gui.maps.icons.whatsNewView.$dyn(`bg_${e}`)),
                ])(n),
            );
        return a.jsx('div', {
            className: Ye,
            children:
                'success' === c
                    ? a.jsxs(r.div, {
                          className: Ze,
                          style: i,
                          children: [a.jsx(Xe, {}), a.jsx(T, { onClick: e.close })],
                      })
                    : a.jsx(W, { onClose: e.close, className: ea }),
        });
    });
M(
    a.jsx(V, {
        children: a.jsx($, {
            children: a.jsx(I, { options: { context: 'model.scheduleInfo' }, children: a.jsx(aa, {}) }),
        }),
    }),
);
