import { j as e, F as a, R as i, v as t, r as s } from '../../../chunks/vendor.js';
import {
    i as l,
    a as o,
    ai as r,
    y as n,
    aA as c,
    r as m,
    ap as p,
    aB as g,
    aC as d,
    aD as _,
    aE as b,
    aF as h,
    aG as u,
    aH as f,
    aI as y,
    aJ as x,
    aw as v,
    ax as j,
    ay as N,
    az as P,
} from '../../../chunks/lib.js';
const [w, k] = l()(
        ({ observableModel: e }) => {
            const a = {
                    ...e.primitives(['platoonTimeToResurrect', 'platoonRespawnPeriod', 'soloRespawnPeriod']),
                    root: e.object(),
                    sh: { types: e.array('modesSH.battleTypes'), modes: e.array('modesSH.battleModes') },
                    bp: e.array('modesBP'),
                },
                i = o.shallow((e) => {
                    const i = r(a.sh.types.get(), e);
                    if (!i) throw Error('battleType is undefined');
                    return i;
                }),
                t = o.shallow(
                    () => {
                        var e;
                        const i =
                            null ==
                            (e = r(
                                n(a.bp.get(), (e) => e),
                                0,
                            ))
                                ? void 0
                                : e.tableRows;
                        if (!i) throw Error('Tables of BP are undefined');
                        return i;
                    },
                    { equals: c },
                );
            return { ...a, computes: { battleTypeSH: i, tableRowsBP: t } };
        },
        ({ externalModel: e }) => ({
            openVideo: e.createCallbackNoArgs('onOpenVideo'),
            сloseWindow: e.createCallbackNoArgs('onClose'),
        }),
    ),
    T = {
        title: 'battle_royale_infopage.mosaic.title',
        mosaic: [
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.mosaic.general',
                title: 'battle_royale_infopage.mosaic.info1.title',
                subtitle: 'battle_royale_infopage.mosaic.info1.subtitle',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.mosaic.economic',
                title: 'battle_royale_infopage.mosaic.info2.title',
                subtitle: 'battle_royale_infopage.mosaic.info2.subtitle',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.mosaic.progression',
                title: 'battle_royale_infopage.mosaic.info3.title',
                subtitle: 'battle_royale_infopage.mosaic.info3.subtitle',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.mosaic.respawn',
                title: 'battle_royale_infopage.mosaic.info4.title',
                subtitle: 'battle_royale_infopage.mosaic.info4.subtitle',
            },
        ],
    },
    D = {
        title: 'battle_royale_infopage.maps.title',
        subtitles: [{ subtitle: R.strings.battle_royale_infopage.maps.subtitle() }],
        images: [
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.maps.arzagir',
                title: 'battle_royale_infopage.maps.map1.title',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.maps.zone',
                title: 'battle_royale_infopage.maps.map2.title',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.maps.firnulfir',
                title: 'battle_royale_infopage.maps.map3.title',
            },
        ],
    },
    B = {
        title: 'battle_royale_infopage.generalDescription.title',
        subtitles: [{ subtitle: R.strings.battle_royale_infopage.generalDescription.subtitle() }],
        accent: 'battle_royale_infopage.generalDescription.accent',
    },
    C = {
        title: 'battle_royale_infopage.towerBlock.title',
        subtitle: 'battle_royale_infopage.towerBlock.subtitle',
        loots: [
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.tower.euipment',
                title: 'battle_royale_infopage.towerBlock.ammunition.title',
                subtitle: 'battle_royale_infopage.towerBlock.ammunition.subtitle',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.tower.ammunition',
                title: 'battle_royale_infopage.towerBlock.euipment.title',
                subtitle: 'battle_royale_infopage.towerBlock.euipment.subtitle',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.tower.cargo',
                title: 'battle_royale_infopage.towerBlock.cargo.title',
                subtitle: 'battle_royale_infopage.towerBlock.cargo.subtitle',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.tower.trophies',
                title: 'battle_royale_infopage.towerBlock.trophies.title',
                subtitle: 'battle_royale_infopage.towerBlock.trophies.subtitle',
            },
        ],
    },
    S = {
        title: 'battle_royale_infopage.zones.title',
        subtitles: [
            { subtitle: R.strings.battle_royale_infopage.zones.subtitle() },
            { subtitle: R.strings.battle_royale_infopage.zones.subtitle2() },
        ],
        images: [
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.zones.yellowZone',
                title: 'battle_royale_infopage.zones.zoneYellow.title',
                subtitle: 'battle_royale_infopage.zones.zoneYellow.subtitle',
            },
            {
                imagePath: 'R.images.battle_royale.gui.maps.infopage.zones.redZone',
                title: 'battle_royale_infopage.zones.zoneRed.title',
                subtitle: 'battle_royale_infopage.zones.zoneRed.subtitle',
            },
        ],
    },
    A = {
        title: 'battle_royale_infopage.sectorDetails.title',
        textBlock: [
            { text: R.strings.battle_royale_infopage.sectorDetails.text1() },
            { text: R.strings.battle_royale_infopage.sectorDetails.text2() },
        ],
        imagePath: 'R.images.battle_royale.gui.maps.infopage.sector',
    },
    I = {
        title: 'battle_royale_infopage.radarDetails.title',
        textBlock: [
            { text: R.strings.battle_royale_infopage.radarDetails.text1() },
            { text: R.strings.battle_royale_infopage.radarDetails.text2() },
        ],
        imagePath: 'R.images.battle_royale.gui.maps.infopage.radar',
    },
    V = {
        title: 'battle_royale_infopage.progressionDetails.title',
        textBlock: [
            { text: R.strings.battle_royale_infopage.progressionDetails.subtitle() },
            {
                subtitle: 'battle_royale_infopage.progressionDetails.title2',
                text: R.strings.battle_royale_infopage.progressionDetails.subtitle2(),
            },
        ],
        imagePath: 'R.images.battle_royale.gui.maps.infopage.progression',
    },
    E = {
        title: 'battle_royale_infopage.battleTasksDetails.title',
        textBlock: [{ text: R.strings.battle_royale_infopage.battleTasksDetails.subtitle() }],
        imagePath: 'R.images.battle_royale.gui.maps.infopage.battleTasks',
    },
    z = {
        title: 'battle_royale_infopage.shopDetails.title',
        textBlock: [
            { text: R.strings.battle_royale_infopage.shopDetails.text1() },
            { text: R.strings.battle_royale_infopage.shopDetails.text2() },
        ],
        imagePath: 'R.images.battle_royale.gui.maps.infopage.shop',
    },
    H = {
        title: 'battle_royale_infopage.articleBP.title',
        subtitles: [{ subtitle: R.strings.battle_royale_infopage.articleBP.subtitle() }],
    },
    O = {
        title: 'battle_royale_infopage.pointsBPDetailsSettings.title',
        textBlock: [{ text: R.strings.battle_royale_infopage.pointsBPDetailsSettings.subtitle() }],
        imagePath: 'R.images.battle_royale.gui.maps.infopage.pointsBP',
    },
    M = {
        title: 'battle_royale_infopage.respawn.title',
        textBlock: [
            { text: R.strings.battle_royale_infopage.respawn.text() },
            {
                subtitle: 'battle_royale_infopage.respawn.block1.title',
                text: R.strings.battle_royale_infopage.respawn.block1.subtitle(),
            },
            {
                subtitle: 'battle_royale_infopage.respawn.block2.title',
                text: R.strings.battle_royale_infopage.respawn.block2.subtitle(),
            },
        ],
        imagePath: 'R.images.battle_royale.gui.maps.infopage.respawn',
    },
    G = {
        title: 'battle_royale_infopage.tableBPDetailsSettings.title',
        subtitles: [{ subtitle: R.strings.battle_royale_infopage.tableBPDetailsSettings.subtitle() }],
    },
    F = {
        title: 'battle_royale_infopage.pointsSHDetailsSettings.title',
        subtitles: [{ subtitle: R.strings.battle_royale_infopage.pointsSHDetailsSettings.subtitle() }],
    },
    K = {
        title: 'battle_royale_infopage.marauders.title',
        textBlock: [{ text: R.strings.battle_royale_infopage.marauders.text() }],
        list: [
            R.strings.battle_royale_infopage.marauders.marauder1(),
            R.strings.battle_royale_infopage.marauders.marauder2(),
            R.strings.battle_royale_infopage.marauders.marauder3(),
        ],
        footer: 'battle_royale_infopage.marauders.footer',
        imagePath: 'R.images.battle_royale.gui.maps.infopage.marauders',
    },
    Z = {
        base: 'Article_600dda1f',
        title: 'Article_title_66b565ae',
        head: 'Article_head_e6098ef4',
        images: 'Article_images_1c3d2987',
        imageContainer: 'Article_imageContainer_8e95068',
        images__mapStyle: 'Article_images__mapStyle_b9623d81',
        text: 'Article_text_dded2e7e',
        accent: 'Article_accent_1beaa2ee',
        divider: 'Article_divider_c3c15108',
    },
    W = ({ description: t, classNames: s, mapsStyle: l }) => {
        const o = m.resolve('strings');
        return e.jsxs('div', {
            className: a(Z.base, null == s ? void 0 : s.alignCenter),
            children: [
                e.jsxs('div', {
                    className: Z.head,
                    children: [
                        e.jsx('div', { className: Z.title, children: o.readOrEmpty(t.title) }),
                        t.subtitles.map(({ subtitle: a }, i) =>
                            e.jsx(
                                'div',
                                {
                                    className: Z.subtitle,
                                    children: e.jsx(p, {
                                        text: a,
                                        split: !0,
                                        className: null == s ? void 0 : s.alignCenter,
                                    }),
                                },
                                i,
                            ),
                        ),
                        t.accent && e.jsx('div', { className: Z.accent, children: o.readOrEmpty(t.accent) }),
                    ],
                }),
                t.images &&
                    e.jsx('div', {
                        className: a(Z.images, l && Z.images__mapStyle),
                        children: t.images.map(({ imagePath: t, title: l, subtitle: r }, n) =>
                            e.jsxs(
                                i.Fragment,
                                {
                                    children: [
                                        e.jsxs(
                                            'div',
                                            {
                                                className: Z.imageContainer,
                                                children: [
                                                    e.jsx('img', {
                                                        className: a(Z.image, null == s ? void 0 : s.image),
                                                        src: t,
                                                        alt: l,
                                                    }),
                                                    e.jsx('div', { className: Z.text, children: o.readOrEmpty(l) }),
                                                    r &&
                                                        e.jsx('div', {
                                                            className: Z.subtitle,
                                                            children: o.readOrEmpty(r),
                                                        }),
                                                ],
                                            },
                                            n,
                                        ),
                                        1 !== n && e.jsx('div', { className: Z.divider }),
                                    ],
                                },
                                n,
                            ),
                        ),
                    }),
            ],
        });
    },
    Y = 'Details_50e89445',
    q = 'Details_base__reverse_e972fe9f',
    J = 'Details_base__noIndent_ee7aedc9',
    $ = 'Details_title_fd4939f0',
    L = 'Details_subtitle_be57650f',
    Q = 'Details_text_6884449',
    U = 'Details_image_e176a953',
    X = 'Details_description_27a0d131',
    ee = 'Details_devider_eb6cc254',
    ae = 'Details_textBlock_830232f9',
    ie = ({ description: i, reverse: t, smallImage: s, classNames: l, className: o, binding: r }) => {
        var n;
        const c = m.resolve('strings');
        return e.jsxs('div', {
            className: a(Y, t && q, s && J, o),
            children: [
                e.jsxs('div', {
                    className: X,
                    children: [
                        e.jsx('div', {
                            className: a($, null == l ? void 0 : l.titleStyling),
                            children: c.readOrEmpty(i.title),
                        }),
                        i.textBlock.map(({ subtitle: a, text: i }, t) =>
                            e.jsxs(
                                'div',
                                {
                                    className: ae,
                                    children: [
                                        a && e.jsx('div', { className: L, children: c.readOrEmpty(a) }),
                                        i &&
                                            e.jsx('div', {
                                                className: Q,
                                                children: e.jsx(p, { params: r, text: i, split: !0 }),
                                            }),
                                    ],
                                },
                                t,
                            ),
                        ),
                        null == (n = i.list)
                            ? void 0
                            : n.map((a, i) => e.jsx('div', { children: e.jsx(p, { text: a, split: !0 }) }, i)),
                        i.footer && e.jsx('div', { children: c.readOrEmpty(i.footer) }),
                    ],
                }),
                e.jsx('div', { className: ee }),
                e.jsx('img', { className: a(!s && U, null == l ? void 0 : l.image), src: i.imagePath, alt: i.title }),
            ],
        });
    },
    te = 'Header_d058a8a',
    se = 'Header_87ab0b13',
    le = 'Header_title_8c0d9960',
    oe = 'Header_subtitle_7c3ddb13',
    re = 'Header_container_500d6c3d',
    ne = 'Header_video_60c6b98f',
    ce = 'Header_preview_a64158df',
    me = t(({ title: a, subtitle: i }) => {
        const { controls: t, model: s } = k(),
            { openVideo: l } = t,
            { startDate: o, endDate: r } = s.root.get(),
            n = m.resolve('strings');
        return e.jsxs('div', {
            className: te,
            children: [
                e.jsxs('div', {
                    className: se,
                    children: [
                        e.jsx('div', { className: le, children: n.readOrEmpty('battle_royale_infopage.footer') }),
                        e.jsx('div', {
                            className: oe,
                            children: e.jsx(p, {
                                text: i,
                                params: {
                                    startDate: e.jsx(g, { datetime: o, format: d.ShortDate }),
                                    endDate: e.jsx(g, { datetime: r, format: d.ShortDate }),
                                },
                            }),
                        }),
                    ],
                }),
                e.jsxs('div', {
                    onClick: () => {
                        (_.click(), l());
                    },
                    onMouseEnter: () => _.highlight(),
                    className: re,
                    children: [e.jsx('div', { className: ce }), e.jsx('div', { className: ne })],
                }),
            ],
        });
    }),
    pe = 'Mosaic_bc3cf2e2',
    ge = 'Mosaic_title_aad7bdfc',
    de = 'Mosaic_container_2ad5aab8',
    _e = 'Mosaic_item_b894c3e',
    be = 'Mosaic_description_2b66d8c6',
    he = 'Mosaic_itemTitle_9fee91fd',
    ue = 'Mosaic_image_1d2ab1f',
    fe = 'Mosaic_itemSubtitle_a455ef82',
    ye = ({ description: a }) => {
        const i = m.resolve('strings');
        return e.jsxs('div', {
            className: pe,
            children: [
                e.jsx('div', { className: ge, children: i.readOrEmpty(a.title) }),
                e.jsx('div', {
                    className: de,
                    children: a.mosaic.map(({ imagePath: a, title: t, subtitle: s }, l) =>
                        e.jsxs(
                            'div',
                            {
                                className: _e,
                                children: [
                                    e.jsx('img', { className: ue, src: a, alt: t }),
                                    e.jsxs('div', {
                                        className: be,
                                        children: [
                                            e.jsx('div', { className: he, children: i.readOrEmpty(t) }),
                                            e.jsx('div', { className: fe, children: i.readOrEmpty(s) }),
                                        ],
                                    }),
                                ],
                            },
                            l,
                        ),
                    ),
                }),
            ],
        });
    },
    xe = {
        base: 'TableBp_d23ceba',
        row: 'TableBp_row_b8f9187b',
        border: 'TableBp_border_6cbdc913',
        cell__inFirstRow: 'TableBp_cell__inFirstRow_dac34690',
        cell: 'TableBp_cell_e10ee24c',
        cell__text: 'TableBp_cell__text_6fa09ccd',
        cell__inSecondCell: 'TableBp_cell__inSecondCell_8d05c5fe',
        points: 'TableBp_points_2af0bd46',
        dash: 'TableBp_dash_c1d52572',
    },
    ve = 'points',
    je = 'text',
    Ne = 'none',
    Re = t(() => {
        const { model: i } = k(),
            t = i.computes.tableRowsBP(),
            s = r(t, 1),
            l = t.length > 1 ? s && n(s.cell, (e) => e) : null;
        return e.jsx('div', {
            className: xe.base,
            children: n(t, (i, t) =>
                e.jsx(
                    'div',
                    {
                        className: xe.row,
                        children: n(i.cell, ({ text: i, points: s }, o) => {
                            const r = l && l[o].text;
                            return e.jsxs(
                                'div',
                                {
                                    className: a(
                                        xe.cell,
                                        r && xe.cell__text,
                                        0 === t && xe.cell__inFirstRow,
                                        1 === o && xe.cell__inSecondCell,
                                    ),
                                    children: [
                                        (() => {
                                            switch (((e, a, i) => (!e && !a && i > 0 ? Ne : e ? ve : je))(s, i, t)) {
                                                case ve:
                                                    return e.jsx('div', { className: xe.points, children: s });
                                                case je:
                                                    return e.jsx('div', { className: xe.text, children: i });
                                                default:
                                                    return e.jsx('div', {
                                                        className: xe.dash,
                                                        children: R.strings.common.common.dash(),
                                                    });
                                            }
                                        })(),
                                        e.jsx('div', { className: a(r && xe.border) }),
                                    ],
                                },
                                o,
                            );
                        }),
                    },
                    t,
                ),
            ),
        });
    }),
    Pe = {
        base: 'Column_c72629bc',
        battleType: 'Column_battleType_3d174272',
        cell: 'Column_cell_a1fe9659',
        pointContainer: 'Column_pointContainer_4a58f509',
        point: 'Column_point_fe634df2',
        reward: 'Column_reward_53feda1a',
    },
    we = ({ type: a, rewards: i }) =>
        e.jsxs('div', {
            className: Pe.base,
            children: [
                e.jsx('div', { className: Pe.battleType, children: a }),
                n(i, ({ place: a, points: i }, t) =>
                    e.jsxs(
                        'div',
                        {
                            className: Pe.cell,
                            children: [
                                e.jsx('div', { className: Pe.place, children: a }),
                                i
                                    ? e.jsxs('div', {
                                          className: Pe.pointContainer,
                                          children: [
                                              e.jsx('div', { className: Pe.point, children: i }),
                                              e.jsx('div', { className: Pe.reward }),
                                          ],
                                      })
                                    : e.jsx('div', { className: Pe.dash, children: R.strings.common.common.dash() }),
                            ],
                        },
                        t,
                    ),
                ),
            ],
        }),
    ke = 'TableSh_d2a33479',
    Te = t(() => {
        const { model: a } = k();
        return e.jsx('div', {
            className: ke,
            children: n(a.sh.modes.get(), (i, t) => e.jsx(we, { rewards: i, type: a.computes.battleTypeSH(t) }, t)),
        });
    }),
    De = {
        base: 'TowerBlock_20368ecb',
        title: 'TowerBlock_title_4a7d1aa8',
        head: 'TowerBlock_head_9d384ef3',
        lootsContainer: 'TowerBlock_lootsContainer_5c1f8860',
        description: 'TowerBlock_description_27c3fd0f',
        descriptionTitle: 'TowerBlock_descriptionTitle_2344033c',
        image: 'TowerBlock_image_53afacf6',
    },
    Be = ({ description: a }) => {
        const i = m.resolve('strings');
        return e.jsxs('div', {
            className: De.base,
            children: [
                e.jsxs('div', {
                    className: De.head,
                    children: [
                        e.jsx('div', { className: De.title, children: i.readOrEmpty(a.title) }),
                        e.jsx('div', { className: De.subtitle, children: i.readOrEmpty(a.subtitle) }),
                    ],
                }),
                e.jsx('div', {
                    className: De.loots,
                    children: a.loots.map(({ imagePath: a, title: t, subtitle: s }, l) =>
                        e.jsxs(
                            'div',
                            {
                                className: De.lootsContainer,
                                children: [
                                    e.jsx('img', { className: De.image, src: a, alt: t }),
                                    e.jsxs('div', {
                                        className: De.description,
                                        children: [
                                            e.jsx('div', {
                                                className: De.descriptionTitle,
                                                children: i.readOrEmpty(t),
                                            }),
                                            e.jsx('div', {
                                                className: De.descriptionSubtitle,
                                                children: i.readOrEmpty(s),
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            t + l,
                        ),
                    ),
                }),
            ],
        });
    },
    Ce = R.strings.battle_royale_vehicles,
    Se = 'light',
    Ae = 'medium',
    Ie = 'heavy',
    Ve = 'ussr',
    Ee = 'germany',
    ze = 'usa',
    He = 'britain',
    Oe = 'france',
    Me = 'china',
    Ge = 'poland',
    Fe = 'sweden',
    Ke = [Ve, Ee, ze, He, Oe, Me, Ge, Fe],
    Ze = [
        {
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.repairKit',
            title: Ce.abilities.repairKit(),
            description: Ce.abilities.repairKitDescription(),
        },
        {
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.recoveryKit',
            title: Ce.abilities.recoveryKit(),
            description: Ce.abilities.recoveryKitDescription(),
        },
    ],
    We = {
        [Ve]: {
            name: Ce.tanks.ussr.title(),
            description: Ce.tanks.ussr.description(),
            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.ussr',
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.ussr',
            abilities: [
                ...Ze,
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.minefield',
                    title: Ce.abilities.minefield(),
                    description: Ce.abilities.minefieldDescription(),
                },
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.recoveryZone',
                    title: Ce.abilities.recoveryZone(),
                    description: Ce.abilities.recoveryZoneDescription(),
                },
            ],
            vehicleType: Ie,
        },
        [Ee]: {
            name: Ce.tanks.germany.title(),
            description: Ce.tanks.germany.description(),
            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.germany',
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.germany',
            abilities: [
                ...Ze,
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.nitro',
                    title: Ce.abilities.nitro(),
                    description: Ce.abilities.nitroDescription(),
                },
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.recoveryDot',
                    title: Ce.abilities.recoveryDot(),
                    description: Ce.abilities.recoveryDotDescription(),
                },
            ],
            vehicleType: Ie,
        },
        [ze]: {
            name: Ce.tanks.usa.title(),
            description: Ce.tanks.usa.description(),
            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.usa',
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.usa',
            abilities: [
                ...Ze,
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.extremeConcentration',
                    title: Ce.abilities.extremeConcentration(),
                    description: Ce.abilities.extremeConcentrationDescription(),
                },
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.trap',
                    title: Ce.abilities.trap(),
                    description: Ce.abilities.trapDescription(),
                },
            ],
            vehicleType: Ae,
        },
        [He]: {
            name: Ce.tanks.britain.title(),
            description: Ce.tanks.britain.description(),
            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.britain',
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.britain',
            abilities: [
                ...Ze,
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.rustCloud',
                    title: Ce.abilities.rustCloud(),
                    description: Ce.abilities.rustCloudDescription(),
                },
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.berserk',
                    title: Ce.abilities.berserk(),
                    description: Ce.abilities.berserkDescription(),
                },
            ],
            vehicleType: Ae,
        },
        [Oe]: {
            name: Ce.tanks.france.title(),
            description: Ce.tanks.france.description(),
            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.france',
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.france',
            abilities: [
                ...Ze,
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.airstrike',
                    title: Ce.abilities.airstrike(),
                    description: Ce.abilities.airstrikeDescription(),
                },
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.brander',
                    title: Ce.abilities.brander(),
                    description: Ce.abilities.branderDescription(),
                },
            ],
            vehicleType: Se,
            hasCN360Image: !0,
        },
        [Me]: {
            name: Ce.tanks.china.title(),
            description: Ce.tanks.china.description(),
            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.china',
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.china',
            abilities: [
                ...Ze,
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.corrodingShot',
                    title: Ce.abilities.corrodingShot(),
                    description: Ce.abilities.corrodingShotDescription(),
                },
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.clingBrander',
                    title: Ce.abilities.clingBrander(),
                    description: Ce.abilities.clingBranderDescription(),
                },
            ],
            vehicleType: Se,
        },
        [Ge]: {
            name: Ce.tanks.poland.title(),
            description: Ce.tanks.poland.description(),
            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.poland',
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.poland',
            abilities: [
                ...Ze,
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.thunderStrike',
                    title: Ce.abilities.thunderStrike(),
                    description: Ce.abilities.thunderStrikeDescription(),
                },
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.shotPassion',
                    title: Ce.abilities.shotPassion(),
                    description: Ce.abilities.shotPassionDescription(),
                },
            ],
            vehicleType: Ae,
        },
        [Fe]: {
            name: Ce.tanks.sweden.title(),
            description: Ce.tanks.sweden.description(),
            tabImagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.slots.sweden',
            imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.sweden',
            abilities: [
                ...Ze,
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.fireCircle',
                    title: Ce.abilities.fireCircle(),
                    description: Ce.abilities.fireCircleDescription(),
                },
                {
                    imagePath: 'R.images.battle_royale.gui.maps.infopage.vehicles.abilities.adaptationHealthRestore',
                    title: Ce.abilities.adaptationHealthRestore(),
                    description: Ce.abilities.adaptationHealthRestoreDescription(),
                },
            ],
            vehicleType: Ie,
        },
    },
    Ye = {
        header: 'Vehicles_header_5be1213',
        tab: 'Vehicles_tab_166fa258',
        tabGlow: 'Vehicles_tabGlow_fd176726',
        tabGlow__upper: 'Vehicles_tabGlow__upper_403f1868',
        tabGlow__bottom: 'Vehicles_tabGlow__bottom_6369026f',
        tab__active: 'Vehicles_tab__active_7f03fbab',
        tabTitle: 'Vehicles_tabTitle_837e7d0c',
        body: 'Vehicles_body_532e5d31',
        description: 'Vehicles_description_b9e7c588',
        text: 'Vehicles_text_160baebc',
        subtitle: 'Vehicles_subtitle_e8e12e5e',
        title: 'Vehicles_title_be8240d9',
        titleText: 'Vehicles_titleText_f60a649a',
        container: 'Vehicles_container_9668783f',
        abilitiesItem: 'Vehicles_abilitiesItem_7f892815',
        abilitiesImage: 'Vehicles_abilitiesImage_4521ac01',
        abilitiesTitle: 'Vehicles_abilitiesTitle_9dfb8c1c',
        abilitiesSubtitle: 'Vehicles_abilitiesSubtitle_a9212b38',
        tabImage: 'Vehicles_tabImage_f47b2080',
        image: 'Vehicles_image_3dcb5e28',
        type: 'Vehicles_type_707e0352',
    },
    qe = [];
for (const [, R] of Object.entries(We)) qe.push(R.imagePath);
const Je = () => {
        const [i, t] = s.useState(0);
        return (
            'success' === b(qe) &&
            e.jsxs('div', {
                className: Ye.base,
                children: [
                    e.jsx('div', {
                        className: Ye.header,
                        children: Ke.map((s, l) =>
                            e.jsxs(
                                'div',
                                {
                                    className: a(Ye.tab, i === l && Ye.tab__active),
                                    onClick: () => (t(l), void _.click()),
                                    children: [
                                        e.jsx('img', {
                                            className: Ye.tabImage,
                                            src: We[s].tabImagePath,
                                            alt: We[s].name,
                                        }),
                                        e.jsx('div', { className: Ye.tabTitle, children: We[s].name }),
                                        e.jsx('div', { className: a(Ye.tabGlow, Ye.tabGlow__upper) }),
                                        e.jsx('div', { className: a(Ye.tabGlow, Ye.tabGlow__bottom) }),
                                    ],
                                },
                                l,
                            ),
                        ),
                    }),
                    e.jsxs('div', {
                        className: Ye.body,
                        children: [
                            e.jsxs('div', {
                                className: Ye.description,
                                children: [
                                    e.jsx('img', {
                                        className: Ye.image,
                                        src: We[Ke[i]].imagePath,
                                        alt: We[Ke[i]].name,
                                    }),
                                    e.jsxs('div', {
                                        className: Ye.text,
                                        children: [
                                            e.jsxs('div', {
                                                className: Ye.title,
                                                children: [
                                                    e.jsx('img', {
                                                        className: Ye.type,
                                                        src: `R.images.battle_royale.gui.maps.infopage.vehicles.vehicleTypes.${We[Ke[i]].vehicleType}`,
                                                    }),
                                                    e.jsx('div', { className: Ye.titleText, children: We[Ke[i]].name }),
                                                ],
                                            }),
                                            e.jsx('div', { className: Ye.subtitle, children: We[Ke[i]].description }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsx('div', {
                                className: Ye.container,
                                children: We[Ke[i]].abilities.map((a) =>
                                    e.jsxs(
                                        'div',
                                        {
                                            className: Ye.abilitiesItem,
                                            children: [
                                                e.jsx('img', {
                                                    className: Ye.abilitiesImage,
                                                    src: a.imagePath,
                                                    alt: a.title,
                                                }),
                                                e.jsxs('div', {
                                                    className: Ye.abilitiesText,
                                                    children: [
                                                        e.jsx('div', {
                                                            className: Ye.abilitiesTitle,
                                                            children: a.title,
                                                        }),
                                                        e.jsx('div', {
                                                            className: Ye.abilitiesSubtitle,
                                                            children: e.jsx(h, { text: a.description }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        a.title,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    $e = 'App_79460fa8',
    Le = 'App_container_wrapper_de3d4b06',
    Qe = 'App_container_ed715267',
    Ue = 'App_scroll_de3d4b06',
    Xe = 'App_divider_7e475860',
    ea = 'App_alignCenter_1fabed30',
    aa = 'App_titleStyling_0',
    ia = 'App_footer_af794bf6',
    ta = 'App_respawnTitle_ac74116c',
    sa = 'App_maraudersTitle_34fac843',
    la = 'App_maraudersContainer_8dc6cdec',
    oa = 'App_respawnContainer_e10d5379',
    ra = 'App_map_e9a3bd98',
    na = 'App_respawn_8179a5ff',
    ca = 'App_marauder_0',
    ma = 'App_progression_0',
    pa = 'App_shop_885c7375',
    ga = 'App_zone_0',
    da = 'App_radar_0',
    _a = 'App_sector_e9e1a7cd',
    ba = 'App_battleTask_ae6b98e4',
    ha = 'App_pointsBattleTask_48279b79',
    ua = 'App_indentBPTable_3e739cc7',
    fa = 'App_closeButton_f5179698',
    ya = t(() => {
        const { model: a, controls: t } = k(),
            { сloseWindow: s } = t;
        return (
            u(s),
            e.jsxs('div', {
                className: $e,
                children: [
                    e.jsx(f, { className: fa, onClose: s }),
                    e.jsx(y, {
                        children: e.jsx(x, {
                            className: Ue,
                            children: e.jsx('div', {
                                className: Le,
                                children: e.jsxs('div', {
                                    className: Qe,
                                    children: [
                                        e.jsx(me, {
                                            title: 'battle_royale_infopage.title',
                                            subtitle: R.strings.battle_royale_infopage.subtitle(),
                                        }),
                                        e.jsx(ye, { description: T }),
                                        e.jsx('div', { className: Xe }),
                                        e.jsx(W, {
                                            description: D,
                                            classNames: { alignCenter: ea, image: ra },
                                            mapsStyle: !0,
                                        }),
                                        e.jsx('div', { className: Xe }),
                                        e.jsx(W, { description: B, classNames: { alignCenter: ea } }),
                                        e.jsx(Je, {}),
                                        e.jsx(ie, {
                                            description: M,
                                            binding: {
                                                soloRespawnPeriod: a.soloRespawnPeriod.get(),
                                                platoonTimeToResurrect: a.platoonTimeToResurrect.get(),
                                                platoonRespawnPeriod: a.platoonRespawnPeriod.get(),
                                            },
                                            className: oa,
                                            classNames: { titleStyling: ta, image: na },
                                        }),
                                        e.jsx('div', { className: Xe }),
                                        e.jsx(Be, { description: C }),
                                        e.jsx(ie, {
                                            description: K,
                                            className: la,
                                            classNames: { titleStyling: sa, image: ca },
                                            reverse: !0,
                                        }),
                                        e.jsx('div', { className: Xe }),
                                        e.jsx(W, { description: S, classNames: { image: ga } }),
                                        e.jsx('div', { className: Xe }),
                                        e.jsx(ie, { description: A, classNames: { image: _a }, reverse: !0 }),
                                        e.jsx('div', { className: Xe }),
                                        e.jsx(ie, { description: I, classNames: { image: da } }),
                                        a.sh.modes.get().length > 0 &&
                                            e.jsxs(i.Fragment, {
                                                children: [
                                                    e.jsx('div', { className: Xe }),
                                                    e.jsx(ie, { description: V, classNames: { image: ma } }),
                                                    e.jsx(ie, {
                                                        description: E,
                                                        smallImage: !0,
                                                        classNames: { titleStyling: aa, image: ba },
                                                        reverse: !0,
                                                    }),
                                                    e.jsx(W, { description: F, classNames: { alignCenter: ua } }),
                                                    e.jsx(Te, {}),
                                                ],
                                            }),
                                        e.jsx('div', { className: Xe }),
                                        e.jsx(ie, { description: z, classNames: { image: pa } }),
                                        e.jsx('div', { className: Xe }),
                                        a.bp.get().length > 0 &&
                                            e.jsxs(i.Fragment, {
                                                children: [
                                                    e.jsx(W, { description: H }),
                                                    e.jsx(ie, {
                                                        description: O,
                                                        classNames: { titleStyling: aa, image: ha },
                                                        smallImage: !0,
                                                        reverse: !0,
                                                    }),
                                                    e.jsx('div', { className: Xe }),
                                                    e.jsx(W, { description: G, classNames: { alignCenter: ua } }),
                                                    e.jsx(Re, {}),
                                                    e.jsx('div', { className: Xe }),
                                                ],
                                            }),
                                        e.jsx('div', {
                                            className: ia,
                                            children: e.jsx(p, { text: R.strings.battle_royale_infopage.footer() }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                ],
            })
        );
    });
N(new v().add(j).add(w).render(e.jsx(ya, {})), { fullScreen: !0 }).then(() => P(!1));
