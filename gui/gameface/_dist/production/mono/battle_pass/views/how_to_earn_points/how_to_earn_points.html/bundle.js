import { g as e, j as a, f as s, t as l } from '../../../chunks/vendor.js';
import {
    i as t,
    e as i,
    f as n,
    g as o,
    h as d,
    C as r,
    j as _,
    m as c,
    k as m,
    F as p,
    r as x,
    I as g,
    l as h,
    n as b,
    t as T,
    o as u,
    P as v,
    T as j,
    s as L,
    J as P,
    U as E,
    d as N,
} from '../../../chunks/lib.js';
import { V as A } from '../../../chunks/vehicle_list.js';
import '../../../chunks/vehicle_info.js';
const [w, C] = t()(
    ({ observableModel: a }) => {
        const s = { root: a.object(), gameModes: a.array('gameModes') },
            l = e(() => s.gameModes.get(), { equals: i }),
            t = e((e) => n(l(), (a) => e === a.arenaBonusType), { equals: i });
        return { ...s, computes: { getItems: l, getSlide: t } };
    },
    ({ externalModel: e }) => ({
        openLink: e.createCallback((e) => ({ viewId: e }), 'onLinkClick'),
        openWotPlus: e.createCallback(() => ({}), 'onWotPlusClick'),
    }),
);
var I = ((e) => (
    (e[(e.TECH = 0)] = 'TECH'),
    (e[(e.LIMIT = 1)] = 'LIMIT'),
    (e[(e.DAILY = 2)] = 'DAILY'),
    (e[(e.BATTLE = 3)] = 'BATTLE'),
    (e[(e.EPIC_BATTLE_POINTS = 4)] = 'EPIC_BATTLE_POINTS'),
    (e[(e.COMP7 = 5)] = 'COMP7'),
    (e[(e.COMP7_LIGHT = 6)] = 'COMP7_LIGHT'),
    e
))(I || {});
const B = R.strings.battle_pass.howToEarnPoints.card,
    k = R.images.gui.maps.icons.battlePass,
    O = {
        [I.TECH]: { title: B.specialVehicle.title(), text: B.specialVehicle.text() },
        [I.LIMIT]: {
            title: B.limitPoints.title(),
            text: B.limitPoints.text(),
            image: { small: k.tooltips.points_reward(), large: k.tooltips.points_136() },
            backgroundImage: {
                small: k.how_to_earn_points.godrays_157x157(),
                large: k.how_to_earn_points.godrays_210x210(),
            },
        },
        [I.DAILY]: {
            title: B.daily.title(),
            text: B.daily.text(),
            linkText: B.daily.linkText(),
            image: { small: k.how_to_earn_points.quest_80x80(), large: k.how_to_earn_points.quest_136x136() },
        },
        [I.BATTLE]: {
            title: B.battle.title(),
            text: B.battle.text(),
            linkText: B.battle.linkText(),
            image: { small: k.how_to_earn_points.quest_80x80(), large: k.how_to_earn_points.quest_136x136() },
        },
        [I.EPIC_BATTLE_POINTS]: {
            title: B.epicBattlePoints.title(),
            text: B.epicBattlePoints.text(),
            image: { small: k.tooltips.points_reward(), large: k.tooltips.points_136() },
            backgroundImage: {
                small: k.how_to_earn_points.godrays_157x157(),
                large: k.how_to_earn_points.godrays_210x210(),
            },
        },
        [I.COMP7]: {
            title: B.comp7.title(),
            text: B.comp7.text(),
            image: { small: k.how_to_earn_points.quest_80x80(), large: k.how_to_earn_points.quest_136x136() },
        },
        [I.COMP7_LIGHT]: {
            title: B.comp7Light.title(),
            text: B.comp7Light.text(),
            image: { small: k.how_to_earn_points.quest_80x80(), large: k.how_to_earn_points.quest_136x136() },
        },
    },
    S = 'Card_5d59c3ba',
    f = 'Card_base__small_a5123ca6',
    y = 'Card_text_b22ed3d',
    M = 'Card_image_dd82cfbc',
    G = 'Card_vehicleBonusListContainer_88ece21f',
    H = 'Card_backgroundImage_9800c524',
    W = 'Card_cardTitle_48137531',
    q = ({ card: e, isSmall: l = !1 }) => {
        const { controls: t } = C(),
            { breakpoint: i } = o(),
            { cardType: n, viewId: _, vehiclesList: c } = e,
            m = i.weight >= d.medium.weight,
            { text: p, image: x, backgroundImage: g, linkText: h } = O[n],
            b = { backgroundImage: `url(${m ? (null == x ? void 0 : x.large) : null == x ? void 0 : x.small})` },
            T = { backgroundImage: `url(${m ? (null == g ? void 0 : g.large) : null == g ? void 0 : g.small})` };
        return a.jsxs('div', {
            className: s(S, l && f),
            children: [
                a.jsx('div', { className: W, children: O[n].title }),
                x && a.jsx('div', { className: M, style: b, children: g && a.jsx('div', { className: H, style: T }) }),
                c.length > 0 && a.jsx('div', { className: G, children: a.jsx(A, { vehiclesList: c }) }),
                a.jsx('div', { className: y, children: p }),
                h && _ && a.jsx(r, { onClick: () => _ && t.openLink(_), size: 'medium', type: 'ghost', children: h }),
            ],
        });
    };
var D = ((e) => (
    (e[(e.REGULAR = 1)] = 'REGULAR'),
    (e[(e.RANKED = 22)] = 'RANKED'),
    (e[(e.BATTLE_ROYALE_SOLO = 29)] = 'BATTLE_ROYALE_SOLO'),
    (e[(e.EPIC_BATTLE = 27)] = 'EPIC_BATTLE'),
    (e[(e.COMP7 = 43)] = 'COMP7'),
    (e[(e.COMP7_LIGHT = 49)] = 'COMP7_LIGHT'),
    e
))(D || {});
const Y = 'Table_8a871ed4',
    $ = 'Table_row_170eb960',
    U = 'Table_row__head_ab323727',
    K = 'Table_row__content_46d674f8',
    F = 'Table_cell_49b44cd3',
    V = 'Table_cell__text_7133907b',
    z = 'Table_cell__wide_b9f57d60',
    J = 'Table_cell__narrow_de45274',
    Q = 'Table_cell__inFirstRow_30782017',
    X = 'Table_cell__bold_ab212a49',
    Z = 'Table_points_a2d597c6',
    ee = 'Table_pointAmount_5701dc92',
    ae = 'Table_additionalPoints_6b6e5121',
    se = 'Table_additionalPointsGlow_3bb9aa4',
    le = 'Table_additionalPointsDivider_9592deb5',
    te = 'Table_additionalPointsText_c7963a49',
    ie = 'Table_icon_a6a9a834',
    ne = 'icon',
    oe = ({ tableRows: e, arenaBonusType: l, hasAdditionalPoints: t }) => {
        const i = _(e, 1),
            n = e.length > 1 ? (null == i ? void 0 : i.cell) : null,
            o = { [ne]: a.jsx('div', { className: ie }) };
        return a.jsx('div', {
            className: Y,
            children: c(e, (e, i) => {
                const d = s($, 0 === i && U, 0 !== i && K);
                return a.jsx(
                    'div',
                    {
                        className: d,
                        children: c(e.cell, ({ text: e, points: d, externalPoints: r }, _) => {
                            var c;
                            const x = null == (c = null == n ? void 0 : n[_]) ? void 0 : c.value.text,
                                g = l === D.BATTLE_ROYALE_SOLO,
                                h = 0 === _,
                                b = e.includes(`${m.start}${ne}${m.end}`),
                                T = s(F, x && V, h && z, g && J, 0 === i && Q, b && X);
                            let u = a.jsx(p, { text: e, params: o });
                            return (
                                d &&
                                    ((u = a.jsx('div', { className: Z, children: d })),
                                    t &&
                                        (u = a.jsxs('div', {
                                            className: Z,
                                            children: [
                                                a.jsx('div', { className: ee, children: d }),
                                                r > 0 &&
                                                    a.jsxs('div', {
                                                        className: ae,
                                                        children: [
                                                            a.jsx('div', { className: se }),
                                                            a.jsx('div', { className: le }),
                                                            a.jsx('div', { className: te, children: d + r }),
                                                        ],
                                                    }),
                                            ],
                                        }))),
                                a.jsx('div', { className: T, lang: R.strings.settings.LANGUAGE_CODE(), children: u }, _)
                            );
                        }),
                    },
                    i,
                );
            }),
        });
    },
    de = 'WotPlusBanner_9d55fd66',
    re = 'WotPlusBanner_text_a6efd270',
    _e = 'WotPlusBanner_link_51b75122',
    ce = x.resolve('strings'),
    me = l(() => {
        const { controls: e } = C(),
            s = ce.readOrEmpty('battle_pass.howToEarnPoints.plusBanner.link');
        return a.jsxs('div', {
            className: de,
            children: [
                a.jsx(g, { path: 'battlePass.how_to_earn_points.plus_logo', width: 64, height: 64 }),
                a.jsxs('div', {
                    className: re,
                    children: [
                        a.jsx(h, {
                            path: 'battle_pass.howToEarnPoints.plusBanner.line1',
                            params: {
                                color: '#E9E2BF',
                                link: a.jsx('a', { className: _e, onClick: e.openWotPlus, children: s }),
                            },
                            split: !0,
                        }),
                        a.jsx(h, { path: 'battle_pass.howToEarnPoints.plusBanner.line2', split: !0 }),
                    ],
                }),
            ],
        });
    }),
    pe = R.images.gui.maps.icons,
    xe = pe.battleTypes.c_64x64,
    ge = pe.battleTypes.c_136x136,
    he = {
        [D.REGULAR]: { small: xe.random(), large: ge.random() },
        [D.RANKED]: { small: xe.ranked(), large: ge.ranked() },
        [D.BATTLE_ROYALE_SOLO]: { small: xe.steelhunt(), large: ge.battle_royale() },
        [D.EPIC_BATTLE]: { small: xe.frontline(), large: ge.epicbattle() },
        [D.COMP7]: { small: xe.comp7(), large: ge.comp7() },
        [D.COMP7_LIGHT]: { small: xe.comp7Light(), large: ge.comp7Light() },
    },
    be = {
        [D.REGULAR]: { levelRange: [4, 11] },
        [D.RANKED]: { levelRange: [10] },
        [D.BATTLE_ROYALE_SOLO]: { levelRange: [0] },
        [D.EPIC_BATTLE]: { levelRange: [8] },
        [D.COMP7]: { levelRange: [10] },
        [D.COMP7_LIGHT]: { levelRange: [8] },
    },
    Te = 'Slide_78f832cd',
    ue = 'Slide_container_aaf2d722',
    ve = 'Slide_tableBackground_19576052',
    je = 'Slide_tableBackground__withBanner_bb063fdf',
    Le = 'Slide_tableContainer_d1906a8a',
    Pe = 'Slide_tableContainer__withBanner_710fa79f',
    Ee = 'Slide_titleContainer_8861ab75',
    Ne = 'Slide_titleImage_4b3bff3a',
    Ae = 'Slide_title_d5157bb9',
    we = 'Slide_description_22a2cb28',
    Ce = 'Slide_cards_b9030792',
    Ie = 'Slide_cardsWrapper_5d7448c8',
    Be = (e, a) => {
        const { small: s, large: l } = he[a];
        return { backgroundImage: `url(${e ? l : s})` };
    },
    ke = ({ slide: e, isWotPlusShown: l }) => {
        var t;
        const { title: i, text: n, tableRows: r, cards: m, arenaBonusType: p } = e,
            { breakpoint: x } = o(),
            g = x.weight >= d.medium.weight,
            h = (null == (t = be[p]) ? void 0 : t.levelRange) ?? [];
        return a.jsx('div', {
            className: Te,
            children: a.jsxs('div', {
                className: ue,
                children: [
                    a.jsx('div', { className: s(ve, l && je) }),
                    a.jsxs('div', {
                        className: s(Le, l && Pe),
                        children: [
                            a.jsx('div', { className: Ne, style: Be(g, p) }),
                            a.jsxs('div', {
                                className: Ee,
                                children: [
                                    a.jsx('div', { className: Ae, children: i }),
                                    a.jsx('div', {
                                        className: we,
                                        children: a.jsx(b, {
                                            text: n,
                                            binding:
                                                2 === h.length
                                                    ? { startLevel: T(h[0]), endLevel: T(h[1]) }
                                                    : { level: void 0 !== h[0] ? T(h[0]) : void 0 },
                                        }),
                                    }),
                                ],
                            }),
                            a.jsx(oe, { tableRows: r, arenaBonusType: p, hasAdditionalPoints: l }),
                            l && a.jsx(me, {}),
                        ],
                    }),
                    a.jsx('div', {
                        className: Ce,
                        children: a.jsx('div', {
                            className: Ie,
                            children: c(m, (e, s) => a.jsx(q, { card: _(m, s), isSmall: m.length >= 3 }, `card-${s}`)),
                        }),
                    }),
                ],
            }),
        });
    },
    Oe = 'App_28aad4f9',
    Re = 'App_animationMain_355bda5d',
    Se = 'App_mainBg_9a111fbb',
    fe = 'App_dimBg_e8187a2a',
    ye = 'App_close_c79d8d0e',
    Me = 'App_titleContainer_5f8254b3',
    Ge = 'App_title_c7ea8999',
    He = 'App_description_66468d55',
    We = 'App_pagination_7b840b69',
    qe = 'App_animationBg_1dccac61',
    De = R.strings.battle_pass.howToEarnPoints,
    Ye = l(() => {
        const { model: e } = C(),
            s = e.computes.getItems(),
            { isWotPlusShown: l } = e.root.get();
        return (
            u(),
            a.jsxs('div', {
                className: Oe,
                children: [
                    a.jsx('div', { className: qe }),
                    a.jsxs('div', {
                        className: Re,
                        children: [
                            a.jsx('div', { className: Se, children: a.jsx('div', { className: fe }) }),
                            a.jsxs('div', {
                                className: Me,
                                children: [
                                    a.jsx('div', { className: Ge, children: De.title() }),
                                    a.jsx('div', { className: He, children: De.description() }),
                                ],
                            }),
                            s.length > 0 &&
                                a.jsx(v, {
                                    hasArrow: !0,
                                    selectedIndex: 0,
                                    className: We,
                                    children: c(s, (s) => ({
                                        render: () =>
                                            a.jsx(
                                                ke,
                                                { slide: e.computes.getSlide(s.arenaBonusType), isWotPlusShown: l },
                                                s.arenaBonusType,
                                            ),
                                    })),
                                }),
                            a.jsx('div', {
                                className: ye,
                                children: a.jsx(j, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: () => L.close(),
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    });
N(new P().add(E).addWithProps(w, {}).render(a.jsx(Ye, {})));
