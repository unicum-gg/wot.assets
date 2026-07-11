import { i as e, j as a, W as s, V as i, r as n, f as t, u as c, t as l } from '../../../chunks/vendor.js';
import {
    i as r,
    d9 as d,
    aT as _,
    j as o,
    dj as m,
    dB as h,
    d7 as p,
    h as g,
    B as x,
    cG as b,
    F as v,
    cF as u,
    m as j,
    ab as N,
    ai as w,
    dl as f,
    r as V,
    U as M,
} from '../../../chunks/lib.js';
import { u as y, S as I } from '../../../chunks/schedule_model.js';
import { C as T } from '../../../chunks/close_button.js';
import { P as k } from '../../../chunks/consts.js';
import { g as A } from '../../../chunks/get_button_size.js';
import { b as U } from '../../../chunks/enums.js';
import { S as C } from '../../../chunks/schedule_subheading.js';
import { V as B, a as $ } from '../../../chunks/vehicle_name.js';
/* empty css                     */ import '../../../chunks/get_season_name.js';
import '../../../chunks/use_server_time_polling.js';
const [S, z] = r()(
        ({ observableModel: a }) => {
            const s = {
                    ...a.primitives(['topPercentage']),
                    vehicles: a.array('vehicles'),
                    newAvailableVehicles: a.array('newAvailableVehicles'),
                    rentalVehicles: a.array('rentalVehicles'),
                },
                i = e(
                    (e) => {
                        const a = _(s.vehicles.get(), e);
                        if (!a) throw new Error(`vehicle with index ${e} is not found`);
                        return { ...a };
                    },
                    { equals: d },
                ),
                n = e(
                    (e) => {
                        const a = _(s.newAvailableVehicles.get(), e);
                        if (!a) throw new Error(`newAvailableVehicle with index ${e} is not found`);
                        return { ...a };
                    },
                    { equals: d },
                ),
                t = e(
                    (e) => {
                        const a = _(s.rentalVehicles.get(), e);
                        if (!a) throw new Error(`rentalVehicle with index ${e} is not found`);
                        return { ...a };
                    },
                    { equals: d },
                );
            return { ...s, computes: { vehicle: i, newAvailableVehicle: n, rentalVehicle: t } };
        },
        ({ externalModel: e }) => ({
            close: e.createCallbackNoArgs('onClose'),
            openVideo: e.createCallbackNoArgs('onVideoOpen'),
        }),
    ),
    D = ({ className: e, onClose: i }) => (o(i), a.jsx('div', { className: s(e), children: a.jsx(m, {}) })),
    W = 'BackgroundVideo_3146bd30',
    q = 'BackgroundVideo_video_be61ad9f',
    P = 'BackgroundVideo_video__bg_277575c1',
    H = (e) => !!p.isHigh() && e,
    O = ({ className: e, classNames: i, animated: n = !0 }) =>
        a.jsx('div', {
            className: s(W, e),
            children: H(n)
                ? a.jsx(h, {
                      className: s(q, i?.video),
                      src: String(R.videos.comp7.yearly_styles()),
                      autoplay: !0,
                      loop: !0,
                  })
                : a.jsx('div', { className: s(q, P, i?.video) }),
        }),
    Q = {
        base: 'Tag_ebca89ec',
        base__new: 'Tag_base__new_bca663c2',
        base__changed: 'Tag_base__changed_9320deb9',
        base__seasonUpdate: 'Tag_base__seasonUpdate_852f3760',
        base__revamped: 'Tag_base__revamped_712085ab',
        base__returned: 'Tag_base__returned_dee71c48',
        base__attention: 'Tag_base__attention_2521ac7d',
        base__experimental: 'Tag_base__experimental_48eda667',
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
    F = ({ type: e, className: i }) =>
        a.jsx('div', {
            className: s(Q.base, Q[`base__${e}`], i),
            children: `${R.strings.comp7_ext.whatsNewView.tag.$dyn(e)}`,
        }),
    G = 'WatchVideo_content_ae20f033',
    L = 'WatchVideo_videoButton_6b01e609',
    E = 'WatchVideo_text_6df0b12';
function K(e) {
    return e >= b.Large ? x.sizes.large : x.sizes.medium;
}
const J = i(() => {
        const { controls: e } = z(),
            { mediaSize: s } = g();
        return a.jsx(x, {
            theme: x.themes.secondary,
            size: K(s),
            onClick: e.openVideo,
            children: a.jsxs('div', {
                className: G,
                children: [
                    a.jsx('div', { className: L }),
                    a.jsx('div', { className: E, children: R.strings.comp7_ext.whatsNewView.watchVideo() }),
                ],
            }),
        });
    }),
    X = 'Banner_807baf62',
    Y = 'Banner_h3_b42f8584',
    Z = 'Banner_header_bb3943d8',
    ee = 'Banner_heading_233e13d2',
    ae = 'Banner_date_1c1a4743',
    se = 'Banner_introDescription_d878698f',
    ie = 'Banner_seasonText_bf05f458',
    ne = 'Banner_headingContainer_cb4c7c84',
    te = 'Banner_introContainer_471eb66c',
    ce = 'Banner_shadow_57286f21',
    le = 'Banner_tag_b884e5f0',
    re = 'Typography_h1_da89a0d0',
    de = 'Typography_h2_13f4d2f5',
    _e = 'Typography_h3_13f4d2f5',
    oe = 'Typography_paragraphText_5f2b094e',
    me = () =>
        a.jsxs('div', {
            className: X,
            children: [
                a.jsx('div', { className: s(_e, Y), children: R.strings.comp7_ext.whatsNewView.banner.title.small() }),
                a.jsx('div', { className: re, children: R.strings.comp7_ext.whatsNewView.banner.title.large() }),
                a.jsx(C, { hasSeasonName: !1, className: ae }),
                a.jsxs('div', {
                    className: ne,
                    children: [
                        a.jsx('div', {
                            className: s(_e, Y),
                            children: R.strings.comp7_ext.whatsNewView.banner.heading(),
                        }),
                        a.jsx('div', {
                            className: oe,
                            children: R.strings.comp7_ext.whatsNewView.banner.description(),
                        }),
                    ],
                }),
                a.jsx(J, {}),
                a.jsx('div', {
                    className: te,
                    children: a.jsxs('div', {
                        className: se,
                        children: [
                            a.jsx('div', { className: ce }),
                            a.jsx('div', {
                                className: Z,
                                children: a.jsx(v, {
                                    classMix: ee,
                                    text: R.strings.comp7_ext.whatsNewView.intro.heading(),
                                    binding: { tag: a.jsx(F, { type: 'experimental', className: le }) },
                                }),
                            }),
                            a.jsx(v, {
                                classMix: s(oe, ie),
                                text: R.strings.comp7_ext.whatsNewView.intro.description(),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    he = 'Grid_header_9a3828c4',
    pe = 'Grid_row_6e713752',
    ge = 'Grid_cell_ea174109',
    xe = {
        base: 'DetailedBattleResults_ab0dba80',
        bg: 'DetailedBattleResults_bg_c63dbfe8',
        content: 'DetailedBattleResults_content_4a35a316',
        text: 'DetailedBattleResults_text_2d612608',
    },
    be = ({ className: e }) =>
        a.jsxs('div', {
            className: s(xe.base, e),
            children: [
                a.jsx('div', { className: xe.bg }),
                a.jsxs('div', {
                    className: xe.content,
                    children: [
                        a.jsxs('div', {
                            className: s(he, xe.header),
                            children: [
                                a.jsx('div', {
                                    className: de,
                                    children: R.strings.comp7_ext.whatsNewView.detailedBattleResults.heading(),
                                }),
                                a.jsx(F, { type: 'revamped' }),
                            ],
                        }),
                        a.jsx(u, {
                            classMix: s(oe, xe.text),
                            text: R.strings.comp7_ext.whatsNewView.detailedBattleResults.description(),
                        }),
                    ],
                }),
            ],
        }),
    ve = [{ name: '31_airfield', tag: 'revamped' }],
    ue = {
        base: 'Map_a5d4fa10',
        gradient: 'Map_gradient_ec64a7b9',
        content: 'Map_content_3c0f8b58',
        nameContainer: 'Map_nameContainer_8f070fae',
        name: 'Map_name_cdb35f0e',
        stamp: 'Map_stamp_a5bd6bea',
        stamp__removed: 'Map_stamp__removed_ea43b661',
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
    je = ({ name: e, index: i, tag: n, stamp: t }) => {
        const c = R.strings.arenas.$dyn(`c_${e}`);
        return a.jsxs('div', {
            className: ue.base,
            style: { backgroundImage: `url(${R.images.comp7.gui.maps.icons.whatsNewView.arenas.$num(i)})` },
            children: [
                a.jsx('div', { className: ue.gradient }),
                t &&
                    a.jsx('div', {
                        className: s(ue.stamp, ue[`stamp__${t}`]),
                        children: `${R.strings.comp7_ext.whatsNewView.stamp.$dyn(t)}`,
                    }),
                a.jsxs('div', {
                    className: ue.content,
                    children: [
                        n && a.jsx(F, { type: n }),
                        a.jsx('div', {
                            className: ue.nameContainer,
                            children: a.jsx('div', { className: ue.name, children: `${c.$dyn('name')}` }),
                        }),
                    ],
                }),
            ],
        });
    },
    Ne = { header: 'MapChanges_header_31ada2d' },
    we = () =>
        a.jsxs('div', {
            className: Ne.base,
            children: [
                a.jsxs('div', {
                    className: s(he, Ne.header),
                    children: [
                        a.jsx('div', {
                            className: de,
                            children: R.strings.comp7_ext.whatsNewView.mapChanges.heading(),
                        }),
                        a.jsx(F, { type: 'seasonUpdate' }),
                    ],
                }),
                a.jsx('div', {
                    className: pe,
                    children: ve.map(({ name: e, tag: s, stamp: i }, n) =>
                        a.jsx(
                            'div',
                            { className: ge, children: a.jsx(je, { name: e, tag: s, stamp: i, index: n }) },
                            e,
                        ),
                    ),
                }),
            ],
        }),
    fe = 'Vehicle_84301d37',
    Ve = 'Vehicle_vehicleName_b2fce6a9',
    Me = i(({ index: e, size: s }) => {
        const { model: i } = z(),
            { name: n, tier: t, type: c, isPremium: l, vehicleCD: r, roleKey: d } = i.computes.newAvailableVehicle(e),
            _ = `url(${R.images.comp7.gui.maps.icons.whatsNewView.new_vehicles.$num(r)})`;
        return a.jsx('div', {
            className: fe,
            style: { backgroundImage: _ },
            children: a.jsx(B, {
                name: n,
                tier: t,
                type: c,
                isPremium: l,
                tooltipArgs: { vehicleCD: r, tooltipId: 'shopVehicle' },
                vehicleCD: r,
                role: d,
                size: s,
                className: Ve,
            }),
        });
    }),
    ye = 'NewVehicles_d5d0356b',
    Ie = 'NewVehicles_header_89183fb7',
    Re = 'NewVehicles_separator_11eca317',
    Te = i(() => {
        const { model: e } = z(),
            i = e.newAvailableVehicles.get().length,
            { mediaSize: t } = g(),
            c = t >= b.Large ? $.x48 : $.x24;
        return a.jsxs('div', {
            className: ye,
            children: [
                a.jsxs('div', {
                    className: s(he, Ie),
                    children: [
                        a.jsx('div', {
                            className: de,
                            children: R.strings.comp7_ext.whatsNewView.newAvailableVehicles.heading(),
                        }),
                        a.jsx(F, { type: 'new' }),
                    ],
                }),
                a.jsx('div', {
                    className: pe,
                    children: j(i, (e) =>
                        a.jsxs(
                            n.Fragment,
                            {
                                children: [
                                    a.jsx('div', { className: ge, children: a.jsx(Me, { index: e, size: c }) }),
                                    e !== i - 1 && a.jsx('div', { className: Re }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            ],
        });
    }),
    ke = 'Vehicle_b4f7ade7',
    Ae = 'Vehicle_gradient_66189772',
    Ue = 'Vehicle_details_1190e9b6',
    Ce = 'Vehicle_vehicleName_3c00f9a6',
    Be = i(({ index: e }) => {
        const { model: s } = z(),
            { mediaSize: i } = g(),
            { name: n, tier: t, type: c, isPremium: l, vehicleCD: r, roleKey: d } = s.computes.rentalVehicle(e),
            _ = `url(${R.images.comp7.gui.maps.icons.whatsNewView.rental_vehicles.$num(r)})`;
        return a.jsxs('div', {
            className: ke,
            style: { backgroundImage: _ },
            children: [
                a.jsx('div', { className: Ae }),
                a.jsx('div', {
                    className: Ue,
                    children: a.jsx(B, {
                        name: n,
                        tier: t,
                        type: c,
                        isPremium: l,
                        tooltipArgs: { vehicleCD: r, tooltipId: 'shopVehicle' },
                        vehicleCD: r,
                        role: d,
                        size: i >= b.Large ? $.x48 : $.x24,
                        className: Ce,
                    }),
                }),
            ],
        });
    }),
    $e = 'RentalVehicles_header_4faf333a',
    Se = i(() => {
        const { model: e } = z();
        return a.jsxs('div', {
            children: [
                a.jsxs('div', {
                    className: s(he, $e),
                    children: [
                        a.jsx('div', {
                            className: de,
                            children: R.strings.comp7_ext.whatsNewView.rentalVehicles.heading(),
                        }),
                        a.jsx(F, { type: 'seasonUpdate' }),
                    ],
                }),
                a.jsx('div', {
                    className: pe,
                    children: j(e.rentalVehicles.get().length, (e) =>
                        a.jsx('div', { className: ge, children: a.jsx(Be, { index: e }) }, e),
                    ),
                }),
            ],
        });
    }),
    ze = 'SeasonalUpdate_250e2e65',
    De = 'SeasonalUpdate_image_1bf5b78',
    We = 'SeasonalUpdate_container_cc8124a9',
    qe = 'SeasonalUpdate_title_250e2e65',
    Pe = 'SeasonalUpdate_description_77846fe8',
    He = 'SeasonalUpdate_tag_fe951f3d',
    Oe = ({ title: e, description: i, classNames: n, tagType: t = 'seasonUpdate' }) =>
        a.jsxs('div', {
            className: s(ze, n?.base),
            children: [
                a.jsx('div', { className: s(De, n?.image) }),
                a.jsxs('div', {
                    className: s(We, n?.container),
                    children: [
                        a.jsx(v, {
                            text: e,
                            classMix: s(de, qe, n?.title),
                            binding: { tag: a.jsx(F, { type: t, className: He }) },
                        }),
                        a.jsx(v, { text: i, classMix: s(oe, Pe, n?.description) }),
                        a.jsx('div', { className: s(Pe, n?.description) }),
                    ],
                }),
            ],
        }),
    Qe = 'Vehicle_41ea8bcf',
    Fe = 'Vehicle_bg_b513a8a1',
    Ge = 'Vehicle_vehicleName_fb8a086d',
    Le = i(({ index: e, size: i, className: n }) => {
        const { model: t } = z(),
            { name: c, tier: l, type: r, isPremium: d, vehicleCD: _, roleKey: o } = t.computes.vehicle(e),
            m = `url(${R.images.comp7.gui.maps.icons.whatsNewView.vehicles.$num(_)})`;
        return a.jsxs('div', {
            className: s(Qe, n),
            children: [
                a.jsx('div', { className: Fe, style: { backgroundImage: m } }),
                a.jsx(B, {
                    name: c,
                    tier: l,
                    type: r,
                    isPremium: d,
                    tooltipArgs: { vehicleCD: _, tooltipId: 'shopVehicle' },
                    vehicleCD: _,
                    role: o,
                    size: i,
                    className: Ge,
                }),
            ],
        });
    }),
    Ee = 'Vehicles_8d411b1e',
    Ke = 'Vehicles_container_e1038935',
    Je = 'Vehicles_vehicle_daa226f',
    Xe = 'Vehicles_tag_bb42ef71',
    Ye = 'Vehicles_heading_a1055f01',
    Ze = 'Vehicles_description_eb64462f',
    ea = i(({ className: e }) => {
        const { model: s } = z(),
            i = s.vehicles.get().length,
            { mediaSize: n } = g(),
            c = n >= b.Large ? $.x48 : $.x24;
        return a.jsxs('div', {
            className: t(Ee, e),
            children: [
                a.jsxs('div', {
                    className: Ke,
                    children: [
                        a.jsx(v, {
                            text: R.strings.comp7_ext.whatsNewView.roleSkillUpdate.heading(),
                            classMix: t(de, Ye),
                            binding: { tag: a.jsx(F, { type: 'revamped', className: Xe }) },
                        }),
                        a.jsx(v, {
                            text: R.strings.comp7_ext.whatsNewView.roleSkillUpdate.description(),
                            classMix: t(oe, Ze),
                        }),
                    ],
                }),
                j(i, (e) => a.jsx(Le, { index: e, className: Je, size: c }, e)),
            ],
        });
    }),
    aa = {
        base: 'Main_c6b88ada',
        areaBaseWrapper: 'Main_areaBaseWrapper_afa6e4d5',
        videoContainer: 'Main_videoContainer_742b9b37',
        content: 'Main_content_89d4e584',
        content__first: 'Main_content__first_dbd58c45',
        content__second: 'Main_content__second_7dca6a3b',
        content__third: 'Main_content__third_2588e0ff',
        scrollBar: 'Main_scrollBar_1f24d8d6',
        button: 'Main_button_9e2e2dc3',
        slideUpIn: 'Main_slideUpIn_84c5dae7',
        container: 'Main_container_6171ab21',
        container__custom: 'Main_container__custom_41c25278',
        container__updates: 'Main_container__updates_b5be00ed',
        container__1: 'Main_container__1_f604bb7f',
        container__2: 'Main_container__2_3037bf3a',
        container__3: 'Main_container__3_364d1171',
        container__4: 'Main_container__4_2d897c3d',
        container__5: 'Main_container__5_f30d5c83',
        container__6: 'Main_container__6_d560cd2f',
        container__7: 'Main_container__7_cbb333ac',
        battleResults: 'Main_battleResults_2ea6c8c6',
        vehicles: 'Main_vehicles_b5a07342',
        equippedRentalsImage: 'Main_equippedRentalsImage_4326fbb2',
        shopUpdatesImage: 'Main_shopUpdatesImage_d21fd295',
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
    sa = { base: aa.scrollBar },
    ia = [
        { value: a.jsx(me, {}) },
        {
            value: a.jsx(Oe, {
                title: `${R.strings.comp7_ext.whatsNewView.equippedRentals.heading()}`,
                description: `${R.strings.comp7_ext.whatsNewView.equippedRentals.description()}`,
                classNames: { image: aa.equippedRentalsImage },
                tagType: 'experimental',
            }),
        },
        {
            value: a.jsxs(a.Fragment, {
                children: [a.jsx(be, { className: aa.battleResults }), a.jsx(ea, { className: aa.vehicles })],
            }),
            modifier: 'updates',
        },
        {
            value: a.jsx(Oe, {
                title: String(R.strings.comp7_ext.whatsNewView.shopUpdates.heading()),
                description: String(R.strings.comp7_ext.whatsNewView.shopUpdates.description()),
                classNames: { image: aa.shopUpdatesImage },
                tagType: 'revamped',
            }),
            modifier: 'custom',
        },
        { value: a.jsx(Te, {}) },
        { value: a.jsx(we, {}) },
        { value: a.jsx(Se, {}) },
    ],
    na = i(() => {
        const { controls: e } = z(),
            { model: i } = y(),
            { mediaSize: n } = g(),
            t = i.season.name.get();
        return a.jsx(N, {
            children: a.jsxs(w, {
                className: aa.base,
                barClassNames: sa,
                scrollClassName: aa.areaBaseWrapper,
                children: [
                    t === U.Third && a.jsx(O, { className: aa.videoContainer }),
                    a.jsxs('div', {
                        className: s(aa.content, aa[`content__${t}`]),
                        children: [
                            ia.map((e, i) =>
                                a.jsx(
                                    'div',
                                    {
                                        className: s(
                                            aa.container,
                                            e.modifier && aa[`container__${e.modifier}`],
                                            aa[`container__${i + 1}`],
                                        ),
                                        children: e.value,
                                    },
                                    i,
                                ),
                            ),
                            a.jsx(x, {
                                theme: x.themes.primary,
                                size: A(n),
                                className: aa.button,
                                onClick: e.close,
                                children: R.strings.comp7_ext.whatsNewView.button.ok(),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    ta = 'App_f9ac9f39',
    ca = 'App_container_9abce13f',
    la = 'App_waiting_93ca532a',
    ra = i(() => {
        const { controls: e } = z(),
            { model: s } = y(),
            i = s.season.name.get(),
            n = c(k),
            t = f(
                ((e) => [
                    R.images.comp7.gui.maps.icons.whatsNewView.backdrop(),
                    String(R.images.comp7.gui.maps.icons.whatsNewView.$dyn(`bg_${e}`)),
                ])(i),
            );
        return a.jsx('div', {
            className: ta,
            children:
                'success' === t
                    ? a.jsxs(l.div, {
                          className: ca,
                          style: n,
                          children: [a.jsx(na, {}), a.jsx(T, { onClick: e.close })],
                      })
                    : a.jsx(D, { onClose: e.close, className: la }),
        });
    });
V(
    a.jsx(M, {
        children: a.jsx(S, {
            children: a.jsx(I, { options: { context: 'model.scheduleInfo' }, children: a.jsx(ra, {}) }),
        }),
    }),
);
