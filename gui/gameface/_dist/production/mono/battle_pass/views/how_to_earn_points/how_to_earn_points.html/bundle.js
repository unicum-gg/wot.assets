import { g as e, j as a, f as s, k as l, v as t } from '../../../chunks/vendor.js';
import {
    i,
    e as n,
    f as o,
    g as d,
    h as r,
    C as _,
    j as c,
    m,
    k as p,
    F as x,
    r as g,
    I as h,
    l as b,
    n as T,
    t as u,
    o as v,
    P as j,
    T as L,
    s as P,
    J as E,
    U as N,
    d as A,
} from '../../../chunks/lib.js';
import { V as w } from '../../../chunks/vehicle_list.js';
import '../../../chunks/vehicle_info.js';
const [C, I] = i()(
    ({ observableModel: a }) => {
        const s = { root: a.object(), gameModes: a.array('gameModes') },
            l = e(() => s.gameModes.get(), { equals: n }),
            t = e((e) => o(l(), (a) => e === a.arenaBonusType), { equals: n });
        return { ...s, computes: { getItems: l, getSlide: t } };
    },
    ({ externalModel: e }) => ({
        openLink: e.createCallback((e) => ({ viewId: e }), 'onLinkClick'),
        openWotPlus: e.createCallback(() => ({}), 'onWotPlusClick'),
    }),
);
var B = ((e) => (
    (e[(e.TECH = 0)] = 'TECH'),
    (e[(e.LIMIT = 1)] = 'LIMIT'),
    (e[(e.DAILY = 2)] = 'DAILY'),
    (e[(e.BATTLE = 3)] = 'BATTLE'),
    (e[(e.EPIC_BATTLE_POINTS = 4)] = 'EPIC_BATTLE_POINTS'),
    (e[(e.COMP7 = 5)] = 'COMP7'),
    (e[(e.COMP7_LIGHT = 6)] = 'COMP7_LIGHT'),
    e
))(B || {});
const k = R.strings.battle_pass.howToEarnPoints.card,
    O = R.images.gui.maps.icons.battlePass,
    S = {
        [B.TECH]: { title: k.specialVehicle.title(), text: k.specialVehicle.text() },
        [B.LIMIT]: {
            title: k.limitPoints.title(),
            text: k.limitPoints.text(),
            image: { small: O.tooltips.points_reward(), large: O.tooltips.points_136() },
            backgroundImage: {
                small: O.how_to_earn_points.godrays_157x157(),
                large: O.how_to_earn_points.godrays_210x210(),
            },
        },
        [B.DAILY]: {
            title: k.daily.title(),
            text: k.daily.text(),
            linkText: k.daily.linkText(),
            image: { small: O.how_to_earn_points.quest_80x80(), large: O.how_to_earn_points.quest_136x136() },
        },
        [B.BATTLE]: {
            title: k.battle.title(),
            text: k.battle.text(),
            linkText: k.battle.linkText(),
            image: { small: O.how_to_earn_points.quest_80x80(), large: O.how_to_earn_points.quest_136x136() },
        },
        [B.EPIC_BATTLE_POINTS]: {
            title: k.epicBattlePoints.title(),
            text: k.epicBattlePoints.text(),
            image: { small: O.tooltips.points_reward(), large: O.tooltips.points_136() },
            backgroundImage: {
                small: O.how_to_earn_points.godrays_157x157(),
                large: O.how_to_earn_points.godrays_210x210(),
            },
        },
        [B.COMP7]: {
            title: k.comp7.title(),
            text: k.comp7.text(),
            image: { small: O.how_to_earn_points.quest_80x80(), large: O.how_to_earn_points.quest_136x136() },
        },
        [B.COMP7_LIGHT]: {
            title: k.comp7Light.title(),
            text: k.comp7Light.text(),
            image: { small: O.how_to_earn_points.quest_80x80(), large: O.how_to_earn_points.quest_136x136() },
        },
    },
    y = 'Card_5d59c3ba',
    f = 'Card_base__small_a5123ca6',
    M = 'Card_text_b22ed3d',
    G = 'Card_image_dd82cfbc',
    H = 'Card_vehicleBonusListContainer_88ece21f',
    W = 'Card_backgroundImage_9800c524',
    q = 'Card_cardTitle_48137531',
    D = ({ card: e, isSmall: l = !1 }) => {
        const { controls: t } = I(),
            { breakpoint: i } = d(),
            { cardType: n, viewId: o, vehiclesList: c } = e,
            m = i.weight >= r.medium.weight,
            { text: p, image: x, backgroundImage: g, linkText: h } = S[n],
            b = { backgroundImage: `url(${m ? (null == x ? void 0 : x.large) : null == x ? void 0 : x.small})` },
            T = { backgroundImage: `url(${m ? (null == g ? void 0 : g.large) : null == g ? void 0 : g.small})` };
        return a.jsxs('div', {
            className: s(y, l && f),
            children: [
                a.jsx('div', { className: q, children: S[n].title }),
                x && a.jsx('div', { className: G, style: b, children: g && a.jsx('div', { className: W, style: T }) }),
                c.length > 0 && a.jsx('div', { className: H, children: a.jsx(w, { vehiclesList: c }) }),
                a.jsx('div', { className: M, children: p }),
                h && o && a.jsx(_, { onClick: () => o && t.openLink(o), size: 'medium', type: 'ghost', children: h }),
            ],
        });
    };
var Y = ((e) => (
    (e[(e.REGULAR = 1)] = 'REGULAR'),
    (e[(e.RANKED = 22)] = 'RANKED'),
    (e[(e.BATTLE_ROYALE_SOLO = 29)] = 'BATTLE_ROYALE_SOLO'),
    (e[(e.EPIC_BATTLE = 27)] = 'EPIC_BATTLE'),
    (e[(e.COMP7 = 43)] = 'COMP7'),
    (e[(e.COMP7_LIGHT = 49)] = 'COMP7_LIGHT'),
    e
))(Y || {});
const $ = 'Table_8a871ed4',
    U = 'Table_row_170eb960',
    K = 'Table_row__head_ab323727',
    F = 'Table_row__content_46d674f8',
    V = 'Table_cell_49b44cd3',
    z = 'Table_cell__text_7133907b',
    J = 'Table_cell__wide_b9f57d60',
    Q = 'Table_cell__narrow_de45274',
    X = 'Table_cell__inFirstRow_30782017',
    Z = 'Table_cell__bold_ab212a49',
    ee = 'Table_points_a2d597c6',
    ae = 'Table_pointAmount_5701dc92',
    se = 'Table_additionalPoints_6b6e5121',
    le = 'Table_additionalPointsGlow_3bb9aa4',
    te = 'Table_additionalPointsDivider_9592deb5',
    ie = 'Table_additionalPointsText_c7963a49',
    ne = 'Table_icon_a6a9a834',
    oe = 'icon',
    de = ({ tableRows: e, arenaBonusType: s, hasAdditionalPoints: t }) => {
        const i = c(e, 1),
            n = e.length > 1 ? (null == i ? void 0 : i.cell) : null,
            o = { [oe]: a.jsx('div', { className: ne }) };
        return a.jsx('div', {
            className: $,
            children: m(e, (e, i) => {
                const d = l(U, 0 === i && K, 0 !== i && F);
                return a.jsx(
                    'div',
                    {
                        className: d,
                        children: m(e.cell, ({ text: e, points: d, externalPoints: r }, _) => {
                            var c;
                            const m = null == (c = null == n ? void 0 : n[_]) ? void 0 : c.value.text,
                                g = s === Y.BATTLE_ROYALE_SOLO,
                                h = 0 === _,
                                b = e.includes(`${p.start}${oe}${p.end}`),
                                T = l(V, m && z, h && J, g && Q, 0 === i && X, b && Z);
                            let u = a.jsx(x, { text: e, params: o });
                            return (
                                d &&
                                    ((u = a.jsx('div', { className: ee, children: d })),
                                    t &&
                                        (u = a.jsxs('div', {
                                            className: ee,
                                            children: [
                                                a.jsx('div', { className: ae, children: d }),
                                                r > 0 &&
                                                    a.jsxs('div', {
                                                        className: se,
                                                        children: [
                                                            a.jsx('div', { className: le }),
                                                            a.jsx('div', { className: te }),
                                                            a.jsx('div', { className: ie, children: d + r }),
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
    re = 'WotPlusBanner_9d55fd66',
    _e = 'WotPlusBanner_text_a6efd270',
    ce = 'WotPlusBanner_link_51b75122',
    me = g.resolve('strings'),
    pe = t(() => {
        const { controls: e } = I(),
            s = me.readOrEmpty('battle_pass.howToEarnPoints.plusBanner.link');
        return a.jsxs('div', {
            className: re,
            children: [
                a.jsx(h, { path: 'battlePass.how_to_earn_points.plus_logo', width: 64, height: 64 }),
                a.jsxs('div', {
                    className: _e,
                    children: [
                        a.jsx(b, {
                            path: 'battle_pass.howToEarnPoints.plusBanner.line1',
                            params: {
                                color: '#E9E2BF',
                                link: a.jsx('a', { className: ce, onClick: e.openWotPlus, children: s }),
                            },
                            split: !0,
                        }),
                        a.jsx(b, { path: 'battle_pass.howToEarnPoints.plusBanner.line2', split: !0 }),
                    ],
                }),
            ],
        });
    }),
    xe = R.images.gui.maps.icons,
    ge = xe.battleTypes.c_64x64,
    he = xe.battleTypes.c_136x136,
    be = {
        [Y.REGULAR]: { small: ge.random(), large: he.random() },
        [Y.RANKED]: { small: ge.ranked(), large: he.ranked() },
        [Y.BATTLE_ROYALE_SOLO]: { small: ge.steelhunt(), large: he.battle_royale() },
        [Y.EPIC_BATTLE]: { small: ge.frontline(), large: he.epicbattle() },
        [Y.COMP7]: { small: ge.comp7(), large: he.comp7() },
        [Y.COMP7_LIGHT]: { small: ge.comp7Light(), large: he.comp7Light() },
    },
    Te = {
        [Y.REGULAR]: { levelRange: [4, 11] },
        [Y.RANKED]: { levelRange: [10] },
        [Y.BATTLE_ROYALE_SOLO]: { levelRange: [0] },
        [Y.EPIC_BATTLE]: { levelRange: [8] },
        [Y.COMP7]: { levelRange: [10] },
        [Y.COMP7_LIGHT]: { levelRange: [8] },
    },
    ue = 'Slide_78f832cd',
    ve = 'Slide_container_aaf2d722',
    je = 'Slide_tableBackground_19576052',
    Le = 'Slide_tableBackground__withBanner_bb063fdf',
    Pe = 'Slide_tableContainer_d1906a8a',
    Ee = 'Slide_tableContainer__withBanner_710fa79f',
    Ne = 'Slide_titleContainer_8861ab75',
    Ae = 'Slide_titleImage_4b3bff3a',
    we = 'Slide_title_d5157bb9',
    Ce = 'Slide_description_22a2cb28',
    Ie = 'Slide_cards_b9030792',
    Be = 'Slide_cardsWrapper_5d7448c8',
    ke = (e, a) => {
        const { small: s, large: l } = be[a];
        return { backgroundImage: `url(${e ? l : s})` };
    },
    Oe = ({ slide: e, isWotPlusShown: l }) => {
        var t;
        const { title: i, text: n, tableRows: o, cards: _, arenaBonusType: p } = e,
            { breakpoint: x } = d(),
            g = x.weight >= r.medium.weight,
            h = (null == (t = Te[p]) ? void 0 : t.levelRange) ?? [],
            b = h.every((e) => e > 0);
        return a.jsx('div', {
            className: ue,
            children: a.jsxs('div', {
                className: ve,
                children: [
                    a.jsx('div', { className: s(je, l && Le) }),
                    a.jsxs('div', {
                        className: s(Pe, l && Ee),
                        children: [
                            a.jsx('div', { className: Ae, style: ke(g, p) }),
                            a.jsxs('div', {
                                className: Ne,
                                children: [
                                    a.jsx('div', { className: we, children: i }),
                                    a.jsx('div', {
                                        className: Ce,
                                        children: b
                                            ? a.jsx(T, {
                                                  text: n,
                                                  binding:
                                                      2 === h.length
                                                          ? { startLevel: u(h[0]), endLevel: u(h[1]) }
                                                          : { level: void 0 !== h[0] ? u(h[0]) : void 0 },
                                              })
                                            : a.jsx(T, { text: n }),
                                    }),
                                ],
                            }),
                            a.jsx(de, { tableRows: o, arenaBonusType: p, hasAdditionalPoints: l }),
                            l && a.jsx(pe, {}),
                        ],
                    }),
                    a.jsx('div', {
                        className: Ie,
                        children: a.jsx('div', {
                            className: Be,
                            children: m(_, (e, s) => a.jsx(D, { card: c(_, s), isSmall: _.length >= 3 }, `card-${s}`)),
                        }),
                    }),
                ],
            }),
        });
    },
    Re = 'App_28aad4f9',
    Se = 'App_animationMain_355bda5d',
    ye = 'App_mainBg_9a111fbb',
    fe = 'App_dimBg_e8187a2a',
    Me = 'App_close_c79d8d0e',
    Ge = 'App_titleContainer_5f8254b3',
    He = 'App_title_c7ea8999',
    We = 'App_description_66468d55',
    qe = 'App_pagination_7b840b69',
    De = 'App_animationBg_1dccac61',
    Ye = R.strings.battle_pass.howToEarnPoints,
    $e = t(() => {
        const { model: e } = I(),
            s = e.computes.getItems(),
            { isWotPlusShown: l } = e.root.get();
        return (
            v(),
            a.jsxs('div', {
                className: Re,
                children: [
                    a.jsx('div', { className: De }),
                    a.jsxs('div', {
                        className: Se,
                        children: [
                            a.jsx('div', { className: ye, children: a.jsx('div', { className: fe }) }),
                            a.jsxs('div', {
                                className: Ge,
                                children: [
                                    a.jsx('div', { className: He, children: Ye.title() }),
                                    a.jsx('div', { className: We, children: Ye.description() }),
                                ],
                            }),
                            s.length > 0 &&
                                a.jsx(j, {
                                    hasArrow: !0,
                                    selectedIndex: 0,
                                    className: qe,
                                    children: m(s, (s) => ({
                                        render: () =>
                                            a.jsx(
                                                Oe,
                                                { slide: e.computes.getSlide(s.arenaBonusType), isWotPlusShown: l },
                                                s.arenaBonusType,
                                            ),
                                    })),
                                }),
                            a.jsx('div', {
                                className: Me,
                                children: a.jsx(L, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: () => P.close(),
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    });
A(new E().add(N).addWithProps(C, {}).render(a.jsx($e, {})));
