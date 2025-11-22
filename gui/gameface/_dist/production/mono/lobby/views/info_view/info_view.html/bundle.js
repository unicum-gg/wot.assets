import { j as e, Q as s, I as a } from '../../../chunks/vendor.js';
import {
    cn as i,
    co as l,
    bL as r,
    R as n,
    A as t,
    i as o,
    cp as c,
    o as _,
    cm as p,
    cq as g,
    P as d,
    M as f,
    O as m,
    ch as u,
    bO as x,
} from '../../../chunks/lib.js';
const v = [
        {
            header: 'fl_info_page.addons.cellRent.header',
            text: 'fl_info_page.addons.cellRent.text_9',
            binding: { vehiclesLevel: i(8) },
        },
        { header: 'fl_info_page.addons.cellTime.header', text: 'fl_info_page.addons.cellTime.text' },
        { header: 'fl_info_page.addons.cellSpectator.header', text: 'fl_info_page.addons.cellSpectator.text' },
    ],
    h = {
        divider: 'SectionDivider_divider_4388c29f',
        dividerWrapper: 'SectionDivider_dividerWrapper_476044f4',
        contentWrapper: 'SectionDivider_contentWrapper_9129fcfd',
        wrapper: 'SectionDivider_wrapper_8107b8d5',
    };
function j({ children: s, withDivider: a = !0 }) {
    return e.jsxs('div', {
        className: h.wrapper,
        children: [
            e.jsx('div', { className: h.contentWrapper, children: s }),
            a && e.jsx('div', { className: h.dividerWrapper, children: e.jsx('div', { className: h.divider }) }),
        ],
    });
}
const b = 'Typography_title_9e921a81',
    N = 'Typography_description_8ce6e6a4',
    I = 'Typography_subtitle_ecdc2835',
    C = ({ className: a, ...i }) => e.jsx(n, { ...i, className: s(b, a) }),
    T = ({ className: a, ...i }) => e.jsx(n, { ...i, className: s(N, a) }),
    k = ({ className: a, ...i }) => e.jsx(n, { ...i, className: s(I, a) }),
    y = 'AdditionalInfo_contentWrapper_2b0dc85',
    P = 'AdditionalInfo_descriptionWrapper_de4229ba',
    W = 'AdditionalInfo_column_fc5fc9cb',
    w = 'AdditionalInfo_description_9f855607',
    S = a(function ({ withDivider: s }) {
        return e.jsx(j, {
            withDivider: s,
            children: e.jsxs('div', {
                className: y,
                children: [
                    e.jsx(C, { path: 'fl_info_page.addons.header' }),
                    e.jsx('div', {
                        className: P,
                        children: v.map(({ header: s, text: a, binding: i }, l) =>
                            e.jsxs(
                                'div',
                                {
                                    className: W,
                                    children: [
                                        e.jsx(k, { path: s }),
                                        e.jsx(T, { className: w, split: !0, path: a, params: i }),
                                    ],
                                },
                                l,
                            ),
                        ),
                    }),
                ],
            }),
        });
    }),
    L = 'BattlePass_contentWrapper_e710928c',
    $ = 'BattlePass_description_6c9afd9a',
    B = 'BattlePass_battlePassImg_62743d72',
    G = 'BattlePass_pointsWrapper_267a3b69',
    D = 'BattlePass_pointsTextWrapper_dcdf9a80',
    H = 'BattlePass_pointsText_f3f8914e',
    F = 'BattlePass_pointsTitle_ce8f8dec',
    M = 'BattlePass_tableBpImg_a4a80d9e',
    V = 'BattlePass_table_63223d56',
    A = 'BattlePass_tableCell_814f7c5d',
    Y = 'BattlePass_tableColumn_b9a1f867',
    E = 'BattlePass_tableCellText_c7b1c07e',
    O = [5, 20, 30],
    U = [
        { header: 'fl_info_page.about.scoresTable.winHeader', cells: [25, 10, null] },
        { header: 'fl_info_page.about.scoresTable.loseHeader', cells: [10, 5, null] },
    ];
function q() {
    return e.jsx(j, {
        withDivider: !1,
        children: e.jsxs('div', {
            className: L,
            children: [
                e.jsx(C, { path: 'fl_info_page.about.header' }),
                e.jsx(T, { className: $, path: 'fl_info_page.about.text' }),
                e.jsxs('div', {
                    className: G,
                    children: [
                        e.jsx('div', { className: B }),
                        e.jsxs('div', {
                            className: D,
                            children: [
                                e.jsx(k, { path: 'fl_info_page.about.scores.header' }),
                                e.jsx(T, { className: H, split: !0, path: 'fl_info_page.about.scores.text' }),
                                e.jsx(k, { className: F, path: 'fl_info_page.about.position.header' }),
                                e.jsx(T, { className: H, split: !0, path: 'fl_info_page.about.position.text' }),
                                e.jsxs('div', {
                                    className: V,
                                    children: [
                                        e.jsxs('div', {
                                            className: Y,
                                            children: [
                                                e.jsx('div', { className: A }),
                                                O.map((s, a) =>
                                                    e.jsx(
                                                        T,
                                                        {
                                                            path: 'fl_info_page.about.scoresTable.topCell',
                                                            params: { top: s },
                                                            className: A,
                                                        },
                                                        a,
                                                    ),
                                                ),
                                            ],
                                        }),
                                        U.map(({ header: s, cells: a }, i) =>
                                            e.jsxs(
                                                'div',
                                                {
                                                    className: Y,
                                                    children: [
                                                        e.jsx('div', { className: A, children: e.jsx(T, { path: s }) }),
                                                        a.map((s, a) =>
                                                            e.jsx(
                                                                'div',
                                                                {
                                                                    className: A,
                                                                    children: s
                                                                        ? e.jsxs(e.Fragment, {
                                                                              children: [
                                                                                  e.jsx('div', {
                                                                                      className: E,
                                                                                      children: s,
                                                                                  }),
                                                                                  e.jsx('div', { className: M }),
                                                                              ],
                                                                          })
                                                                        : e.jsx('div', { className: E, children: '-' }),
                                                                },
                                                                a,
                                                            ),
                                                        ),
                                                    ],
                                                },
                                                i,
                                            ),
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
const Q = 'Configuration_subtitle_9098d8a9',
    Z = 'Configuration_contentWrapper_cd9afa41',
    z = 'Configuration_configurationWrapper_5f1f44b8',
    J = 'Configuration_configurationIcon_d40cb44e',
    K = 'Configuration_configurationIconWrapper_8494ee6c',
    X = 'Configuration_tableWrapper_e2c92d8e',
    ee = 'Configuration_cell_844d940e',
    se = 'Configuration_column_3ebbf6d6',
    ae = 'Configuration_configurationImgContainer_c2047a9',
    ie = 'Configuration_configurationImg_d7b4181b',
    le = 'Configuration_noteText_30ab7bcc',
    re = [
        [
            { isImg: !1, value: null },
            { isImg: !1, value: 'fl_info_page.reserveCategories.config.vehicles.light' },
            { isImg: !1, value: 'fl_info_page.reserveCategories.config.vehicles.middle' },
            { isImg: !1, value: 'fl_info_page.reserveCategories.config.vehicles.heavy' },
            { isImg: !1, value: 'fl_info_page.reserveCategories.config.vehicles.destroyer' },
            { isImg: !1, value: 'fl_info_page.reserveCategories.config.vehicles.selfPropelled' },
        ],
        [
            { isImg: !1, value: 'fl_info_page.reserveCategories.categories.main' },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.reconnaissance() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.tactics() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.firesupport() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.reconnaissance() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.firesupport() },
        ],
        [
            { isImg: !1, value: 'fl_info_page.reserveCategories.categories.additional' },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.tactics() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.firesupport() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.tactics() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.firesupport() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.reconnaissance() },
        ],
        [
            { isImg: !1, value: 'fl_info_page.reserveCategories.categories.support' },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.firesupport() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.reconnaissance() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.reconnaissance() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.tactics() },
            { isImg: !0, value: R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.tactics() },
        ],
    ];
function ne() {
    return e.jsx(j, {
        children: e.jsxs('div', {
            className: Z,
            children: [
                e.jsx(C, { path: 'fl_info_page.reserveCategories.config.header' }),
                e.jsx(T, { className: Q, path: 'fl_info_page.reserveCategories.config.text', split: !0 }),
                e.jsxs('div', {
                    className: z,
                    children: [
                        e.jsx('div', {
                            className: X,
                            children: t(re, (s, a) =>
                                e.jsx(
                                    'div',
                                    {
                                        className: se,
                                        children: t(s, ({ isImg: s, value: a }, i) =>
                                            e.jsx(
                                                'div',
                                                {
                                                    className: ee,
                                                    children: s
                                                        ? e.jsx('div', {
                                                              className: K,
                                                              children: e.jsx('div', {
                                                                  className: J,
                                                                  style: { backgroundImage: `url(${a})` },
                                                              }),
                                                          })
                                                        : a && e.jsx(T, { path: a }),
                                                },
                                                `cell_${i}`,
                                            ),
                                        ),
                                    },
                                    `column_${a}`,
                                ),
                            ),
                        }),
                        e.jsx('div', { className: ae, children: e.jsx('div', { className: ie }) }),
                    ],
                }),
                e.jsx(T, { className: le, path: 'fl_info_page.reserveCategories.config.footerText' }),
            ],
        }),
    });
}
const [te, oe] = o()(
        ({ observableModel: e }) => ({
            ...e.primitives([
                'isNinthLevelEnabled',
                'isBattlePassAvailable',
                'isRandomReservesModeEnabled',
                'autoscrollSection',
                'startTimestamp',
                'endTimestamp',
            ]),
            skillsCategories: e.arrayClone('skillsCategories'),
            ranksWithPoints: e.arrayClone('ranksWithPoints'),
        }),
        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
    ),
    ce = 'GeneralInfo_contentWrapper_4c37eb45',
    _e = 'GeneralInfo_wrapper_38584321',
    pe = 'GeneralInfo_cellHeader_11ccb279',
    ge = 'GeneralInfo_cell_db2c72d7',
    de = 'GeneralInfo_cellTitle_a42b02aa',
    fe = 'GeneralInfo_cellDescription_6f635451',
    me = 'GeneralInfo_icon_c0644ea3',
    ue = 'GeneralInfo_row_2e8d4ae8',
    xe = a(function () {
        const { model: s } = oe(),
            a = Math.round((s.endTimestamp.get() - s.startTimestamp.get()) / c),
            r = ((e, s = 3) => {
                const a = [];
                for (let i = 0; i < e.length; i += s) a.push(e.slice(i, i + s));
                return a;
            })(
                ((e, s, a, r) => {
                    const n = i(9),
                        t = i(8),
                        o = [
                            {
                                image: R.images.frontline.gui.maps.icons.about.epic(),
                                header: { value: 'fl_info_page.main.cellFrontline.header' },
                                text: {
                                    value: e
                                        ? 'fl_info_page.main.cellFrontline.text_9'
                                        : 'fl_info_page.main.cellFrontline.text_8',
                                    binding: { vehiclesLevelFrom: t, vehiclesLevelTo: n, vehiclesLevel: t },
                                },
                            },
                            {
                                image: R.images.frontline.gui.maps.icons.about.reserves(),
                                header: { value: 'fl_info_page.main.cellReserves.header' },
                                text: { value: 'fl_info_page.main.cellReserves.text' },
                            },
                        ];
                    return (
                        a &&
                            o.push({
                                image: R.images.frontline.gui.maps.icons.about.scenarios(),
                                header: { value: 'fl_info_page.main.cellScenarios.header' },
                                text: { value: 'fl_info_page.main.cellScenarios.text' },
                            }),
                        s &&
                            o.push({
                                image: R.images.frontline.gui.maps.icons.about.battlepass(),
                                header: { value: 'fl_info_page.main.cellPass.header' },
                                text: { value: 'fl_info_page.main.cellPass.text' },
                            }),
                        o.push({
                            image: R.images.frontline.gui.maps.icons.about.level_8(),
                            header: { value: 'fl_info_page.main.cellLevels.header', binding: { vehiclesLevel: t } },
                            text: {
                                value: e
                                    ? 'fl_info_page.main.cellLevels.text_9'
                                    : 'fl_info_page.main.cellLevels.text_8',
                                binding: { vehiclesLevel: t },
                            },
                        }),
                        o.push({
                            image: R.images.frontline.gui.maps.icons.about.episodic(),
                            header: { value: 'fl_info_page.main.cellDuration.header' },
                            text: {
                                value: 'fl_info_page.main.cellDuration.text',
                                binding: { days: l(R.strings.fl_common.day(r), { duration: r }) },
                            },
                        }),
                        e &&
                            o.push({
                                image: R.images.frontline.gui.maps.icons.about.level_9(),
                                header: { value: 'fl_info_page.main.cellLevel9.header', binding: { vehiclesLevel: n } },
                                text: { value: 'fl_info_page.main.cellLevel9.text', binding: { vehiclesLevel: n } },
                            }),
                        o
                    );
                })(s.isNinthLevelEnabled.get(), s.isBattlePassAvailable.get(), s.isRandomReservesModeEnabled.get(), a),
            );
        return e.jsx(j, {
            children: e.jsxs('div', {
                className: ce,
                children: [
                    e.jsx(C, { path: 'fl_info_page.main.sectionHeader' }),
                    e.jsx('div', {
                        className: _e,
                        children: t(r, (s, a) =>
                            e.jsx(
                                'div',
                                {
                                    className: ue,
                                    children: t(s, ({ image: s, header: a, text: i }, l) =>
                                        e.jsxs(
                                            'div',
                                            {
                                                className: ge,
                                                children: [
                                                    e.jsxs('div', {
                                                        className: pe,
                                                        children: [
                                                            e.jsx('div', {
                                                                className: me,
                                                                style: { backgroundImage: `url(${s})` },
                                                            }),
                                                            e.jsx(k, {
                                                                path: a.value,
                                                                params: a.binding,
                                                                className: de,
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx(T, {
                                                        className: fe,
                                                        path: i.value,
                                                        params: i.binding,
                                                        split: !0,
                                                    }),
                                                ],
                                            },
                                            `section-${l}`,
                                        ),
                                    ),
                                },
                                a,
                            ),
                        ),
                    }),
                ],
            }),
        });
    }),
    ve = 'GeneralRules_contentWrapper_d98d08a1',
    he = 'GeneralRules_rulesWrapper_1f696fe2',
    je = 'GeneralRules_column_b69d46fc',
    be = 'GeneralRules_ruleImage_91a4f89',
    Ne = 'GeneralRules_ruleTitle_250d67d9',
    Ie = 'GeneralRules_rulesText_81cd3c0',
    Ce = 'GeneralRules_listItem_bb969db3',
    Re = 'GeneralRules_listWrapper_81cd3c0',
    Te = 'GeneralRules_listBullet_18c894c8',
    ke = 'GeneralRules_backToFightImg_a9c9a28a',
    ye = 'GeneralRules_backToFight_c3119c8b',
    Pe = 'GeneralRules_backToFightTextWrapper_fcc08592',
    We = 'GeneralRules_backToFightDescription_4017e795',
    we = a(function () {
        const { model: s } = oe(),
            a = [
                {
                    image: (i = s.isNinthLevelEnabled.get())
                        ? R.images.frontline.gui.maps.infopage.weapons()
                        : R.images.frontline.gui.maps.infopage.weapons_8lvl(),
                    header: 'fl_info_page.rules.weapons.header',
                    text: ['fl_info_page.rules.weapons.text'],
                    list: [
                        'fl_info_page.rules.weapons.list.roof',
                        i ? 'fl_info_page.rules.weapons.list.sides_9' : 'fl_info_page.rules.weapons.list.sides',
                        'fl_info_page.rules.weapons.list.back',
                        'fl_info_page.rules.weapons.list.vulnerable',
                    ],
                },
                {
                    image: R.images.frontline.gui.maps.infopage.base(),
                    header: 'fl_info_page.rules.base.header',
                    text: ['fl_info_page.rules.base.textTop', 'fl_info_page.rules.base.textBottom'],
                },
                {
                    image: R.images.frontline.gui.maps.infopage.service(),
                    header: 'fl_info_page.rules.service.header',
                    text: ['fl_info_page.rules.service.text'],
                },
            ];
        var i;
        return e.jsx(j, {
            children: e.jsxs('div', {
                className: ve,
                children: [
                    e.jsx(C, { path: 'fl_info_page.rules.sectionHeader' }),
                    e.jsx('div', {
                        className: he,
                        children: t(a, ({ text: s, list: a, header: i, image: l }, r) =>
                            e.jsxs(
                                'div',
                                {
                                    className: je,
                                    children: [
                                        e.jsx('div', { className: be, style: { backgroundImage: `url(${l})` } }),
                                        e.jsx(k, { className: Ne, path: i }),
                                        t(s, (s, a) =>
                                            e.jsx(T, { className: Ie, split: !0, path: s }, `rule-text-${a}`),
                                        ),
                                        e.jsx('div', {
                                            className: Re,
                                            children: t(a ?? [], (s, a) =>
                                                e.jsxs(
                                                    'div',
                                                    {
                                                        className: Ce,
                                                        children: [
                                                            e.jsx('div', { className: Te, children: '•' }),
                                                            e.jsx(T, { split: !0, path: s }, a),
                                                        ],
                                                    },
                                                    `rule-list-${a}`,
                                                ),
                                            ),
                                        }),
                                    ],
                                },
                                `rule-${r}`,
                            ),
                        ),
                    }),
                    e.jsxs('div', {
                        className: ye,
                        children: [
                            e.jsxs('div', {
                                className: Pe,
                                children: [
                                    e.jsx(k, { path: 'fl_info_page.rules.backToFight.header' }),
                                    e.jsx(T, { className: We, split: !0, path: 'fl_info_page.rules.backToFight.text' }),
                                ],
                            }),
                            e.jsx('div', { className: ke }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Se = 'Progression_contentWrapper_3a0356f1',
    Le = 'Progression_description_bac962f1',
    $e = 'Progression_captionBadge_f16caccb',
    Be = 'Progression_captionImg_fe01cac8',
    Ge = 'Progression_caption_32ed00dc',
    De = 'Progression_bottomCaptionBlock_571a7797',
    He = 'Progression_captionDescription_adfae39a',
    Fe = 'Progression_captionTextBottom_14bc6992',
    Me = 'Progression_captionText_e8531968',
    Ve = 'Progression_tableWrapper_e617c990',
    Ae = 'Progression_rankImg_97dedc33',
    Ye = 'Progression_tableCell_5186b08b',
    Ee = 'Progression_tableColumn_bfdf0695',
    Oe = 'Progression_tableValue_46886aa8',
    Ue = _.resolve('intl'),
    qe = [
        null,
        'fl_info_page.progression.ranksTable.frontExperienceCell',
        'fl_info_page.progression.ranksTable.bonusCell',
        'fl_info_page.progression.ranksTable.crewBonusCell',
    ],
    Qe = a(function () {
        const { model: a } = oe(),
            i = a.ranksWithPoints.get();
        return e.jsx(j, {
            children: e.jsxs('div', {
                className: Se,
                children: [
                    e.jsx(C, { path: 'fl_info_page.progression.sectionHeader' }),
                    e.jsx(T, { className: Le, path: 'fl_info_page.progression.text', split: !0 }),
                    e.jsxs('div', {
                        children: [
                            e.jsxs('div', {
                                className: Ge,
                                children: [
                                    e.jsx('div', { className: Be }),
                                    e.jsxs('div', {
                                        className: He,
                                        children: [
                                            e.jsx(k, { path: 'fl_info_page.progression.ranksSection.header' }),
                                            e.jsx(T, {
                                                className: Me,
                                                path: 'fl_info_page.progression.ranksSection.text',
                                                split: !0,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsx(T, {
                                className: Fe,
                                path: 'fl_info_page.progression.ranksSection.experience',
                                split: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: Ve,
                        children: [
                            e.jsx('div', {
                                className: Ee,
                                children: t(qe, (s, a) =>
                                    e.jsx('div', { className: Ye, children: s && e.jsx(T, { path: s }) }, `label-${a}`),
                                ),
                            }),
                            t(i, ({ rankName: a, rankPoints: i }, l) =>
                                e.jsxs(
                                    'div',
                                    {
                                        className: Ee,
                                        children: [
                                            e.jsxs('div', {
                                                className: Ye,
                                                children: [
                                                    e.jsx('div', {
                                                        className: Ae,
                                                        style: {
                                                            backgroundImage: `url(${R.images.gui.maps.icons.library.epicRank.$dyn(`msg_rank_${a}`)})`,
                                                        },
                                                    }),
                                                    e.jsx(T, { path: `fl_info_page.progression.ranksTable.${a}` }),
                                                ],
                                            }),
                                            i.map((a, i) =>
                                                e.jsx(
                                                    'div',
                                                    {
                                                        className: s(Ye, Oe),
                                                        children:
                                                            0 === i
                                                                ? a
                                                                    ? e.jsx(n, {
                                                                          path: 'fl_info_page.plusValue',
                                                                          params: { value: Ue.formatNumber('gold', a) },
                                                                      })
                                                                    : a
                                                                : e.jsx(n, {
                                                                      path:
                                                                          a > 0
                                                                              ? 'fl_info_page.plusPercentValue'
                                                                              : 'fl_info_page.percentValue',
                                                                      params: { value: a },
                                                                  }),
                                                    },
                                                    `rank_cell_${i}`,
                                                ),
                                            ),
                                        ],
                                    },
                                    l,
                                ),
                            ),
                        ],
                    }),
                    e.jsxs('div', {
                        className: s(Ge, De),
                        children: [
                            e.jsx('div', { className: $e }),
                            e.jsxs('div', {
                                className: He,
                                children: [
                                    e.jsx(k, { path: 'fl_info_page.progression.levelsSection.header' }),
                                    e.jsx(T, {
                                        className: Me,
                                        path: 'fl_info_page.progression.levelsSection.experienceText',
                                        split: !0,
                                    }),
                                    e.jsx(T, {
                                        className: Fe,
                                        path: a.isBattlePassAvailable.get()
                                            ? 'fl_info_page.progression.levelsSection.rewardsText'
                                            : 'fl_info_page.progression.levelsSection.rewardsTextNoBP',
                                        split: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Ze = 'ReserveCategories_contentWrapper_abb2dfc',
    ze = 'ReserveCategories_subtitle_6df11df5',
    Je = 'ReserveCategories_categoryColumn_1fc9c281',
    Ke = 'ReserveCategories_categoryColumnHeader_20701acf',
    Xe = 'ReserveCategories_categoryTypeIconWrapper_7acbd61a',
    es = 'ReserveCategories_categoryTypeIcon_33babf6f',
    ss = 'ReserveCategories_categoryTypeImg_2ad430fa',
    as = 'ReserveCategories_categoriesLists_a35df825',
    is = 'ReserveCategories_categoryCell_b0dcc9d9',
    ls = 'ReserveCategories_description_e511bb05',
    rs = a(function () {
        const { model: s } = oe();
        return e.jsx(j, {
            children: e.jsxs('div', {
                className: Ze,
                children: [
                    e.jsx(C, { path: 'fl_info_page.reserveCategories.sectionHeader' }),
                    e.jsx(T, { className: ze, path: 'fl_info_page.reserveCategories.text' }),
                    e.jsx('div', {
                        className: as,
                        children: t(s.skillsCategories.get(), ({ type: s, skills: a }, i) =>
                            e.jsxs(
                                'div',
                                {
                                    className: Je,
                                    children: [
                                        e.jsxs('div', {
                                            className: Ke,
                                            children: [
                                                e.jsx('div', {
                                                    className: Xe,
                                                    children: e.jsx('div', {
                                                        className: es,
                                                        style: {
                                                            backgroundImage: `url(${R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.$dyn(s)})`,
                                                        },
                                                    }),
                                                }),
                                                e.jsx(k, { path: `fl_info_page.reserveCategories.types.${s}` }),
                                            ],
                                        }),
                                        a.map(({ icon: s, name: a }, i) =>
                                            e.jsxs(
                                                'div',
                                                {
                                                    className: is,
                                                    children: [
                                                        e.jsx('div', {
                                                            className: ss,
                                                            style: {
                                                                backgroundImage: `url(${R.images.frontline.gui.maps.icons.loadout.battleAbilities.c_48x48.$dyn(s)})`,
                                                            },
                                                        }),
                                                        e.jsx('div', { className: ls, children: a }),
                                                    ],
                                                },
                                                `skill_${i}`,
                                            ),
                                        ),
                                    ],
                                },
                                `reserve_category_${i}`,
                            ),
                        ),
                    }),
                ],
            }),
        });
    }),
    ns = {
        progressionImg: 'Progression_progressionImg_e25ad174',
        progression: 'Progression_32ed00dc',
        contentWrapper: 'Progression_contentWrapper_30d79ea7',
        wrapper: 'Progression_wrapper_3ba24e0d',
        progressionInfo: 'Progression_progressionInfo_52a486b9',
        column: 'Progression_column_94a7176b',
        tableWrapper: 'Progression_tableWrapper_81d4b75c',
        cell: 'Progression_cell_4eb56c1b',
        progressionTableHeaderIcon: 'Progression_progressionTableHeaderIcon_a363c88c',
        progressionNoteText: 'Progression_progressionNoteText_16125176',
    },
    ts = [
        {
            icon: null,
            label: null,
            cells: [
                'fl_info_page.reserveCategories.categories.cell_1',
                'fl_info_page.reserveCategories.categories.cell_2',
                'fl_info_page.reserveCategories.categories.cell_3',
            ],
        },
        {
            icon: R.images.gui.maps.icons.library.epicRank.list_rank_recruit(),
            label: 'fl_info_page.reserveCategories.ranks.soldier',
            cells: [1, null, null],
        },
        {
            icon: R.images.gui.maps.icons.library.epicRank.list_rank_sergeant(),
            label: 'fl_info_page.reserveCategories.ranks.sergeant',
            cells: [null, 1, null],
        },
        {
            icon: R.images.gui.maps.icons.library.epicRank.list_rank_lieutenant(),
            label: 'fl_info_page.reserveCategories.ranks.lieutenant',
            cells: [null, null, 1],
        },
        {
            icon: R.images.gui.maps.icons.library.epicRank.list_rank_captain(),
            label: 'fl_info_page.reserveCategories.ranks.captain',
            cells: [2, 2, 2],
        },
        {
            icon: R.images.gui.maps.icons.library.epicRank.list_rank_major(),
            label: 'fl_info_page.reserveCategories.ranks.major',
            cells: [3, 3, 3],
        },
    ];
function os() {
    return e.jsx('div', {
        className: ns.wrapper,
        children: e.jsxs('div', {
            className: ns.contentWrapper,
            children: [
                e.jsxs('div', {
                    className: ns.progression,
                    children: [
                        e.jsxs('div', {
                            className: ns.progressionInfo,
                            children: [
                                e.jsx(k, { split: !0, path: 'fl_info_page.reserveCategories.levels.header' }),
                                e.jsx(T, { split: !0, path: 'fl_info_page.reserveCategories.levels.text' }),
                            ],
                        }),
                        e.jsx('div', { className: ns.progressionImg }),
                    ],
                }),
                e.jsx('div', {
                    className: ns.tableWrapper,
                    children: t(ts, ({ label: s, cells: a, icon: l }, r) =>
                        e.jsxs(
                            'div',
                            {
                                className: ns.column,
                                children: [
                                    e.jsxs('div', {
                                        className: ns.cell,
                                        children: [
                                            e.jsx('div', {
                                                className: ns.progressionTableHeaderIcon,
                                                style: null !== l ? { backgroundImage: `url(${l})` } : void 0,
                                            }),
                                            s && e.jsx(T, { path: s }),
                                        ],
                                    }),
                                    a &&
                                        a.map((s, a) =>
                                            e.jsx(
                                                'div',
                                                {
                                                    className: ns.cell,
                                                    children:
                                                        s &&
                                                        e.jsx(T, {
                                                            path: Number.isInteger(s)
                                                                ? 'fl_info_page.reserveCategories.progression.tableCell'
                                                                : s,
                                                            params: { level: i(s), levelNext: i(s + 1) },
                                                        }),
                                                },
                                                `cell_${a}`,
                                            ),
                                        ),
                                ],
                            },
                            `column_${r}`,
                        ),
                    ),
                }),
                e.jsx(T, { className: ns.progressionNoteText, path: 'fl_info_page.reserveCategories.levelUpNote' }),
            ],
        }),
    });
}
const cs = {
        scenariosItemHeaderIcon: 'ScenariosList_scenariosItemHeaderIcon_85bf9391',
        scenariosItemHeader: 'ScenariosList_scenariosItemHeader_7a7cf942',
        scenariosItem: 'ScenariosList_scenariosItem_bc09f63d',
        scenariosItemList: 'ScenariosList_scenariosItemList_99600cd6',
        listWrapper: 'ScenariosList_listWrapper_b93acd0f',
        listBullet: 'ScenariosList_listBullet_fde00cd3',
        scenarios: 'ScenariosList_scenarios_5831082d',
    },
    _s = [
        {
            icon: R.images.frontline.gui.maps.icons.battleTypes.c_48x48.standard(),
            header: 'fl_info_page.reserveCategories.scenarios.standard.header',
            text: 'fl_info_page.reserveCategories.scenarios.standard.text',
        },
        {
            icon: R.images.frontline.gui.maps.icons.battleTypes.c_48x48.fast(),
            header: 'fl_info_page.reserveCategories.scenarios.support.header',
            text: 'fl_info_page.reserveCategories.scenarios.support.text',
            list: [
                'fl_info_page.reserveCategories.scenarios.support.list.reserveOpen',
                'fl_info_page.reserveCategories.scenarios.support.list.respawn',
            ],
        },
        {
            icon: R.images.frontline.gui.maps.icons.battleTypes.c_48x48.random(),
            header: 'fl_info_page.reserveCategories.scenarios.random.header',
            text: 'fl_info_page.reserveCategories.scenarios.random.text',
        },
    ];
function ps() {
    return e.jsx('div', {
        className: cs.scenarios,
        children: t(_s, (s, a) =>
            e.jsxs(
                'div',
                {
                    className: cs.scenariosItem,
                    children: [
                        e.jsxs('div', {
                            className: cs.scenariosItemHeader,
                            children: [
                                e.jsx('div', {
                                    className: cs.scenariosItemHeaderIcon,
                                    style: { backgroundImage: `url(${s.icon})` },
                                }),
                                e.jsx(k, { split: !0, path: s.header }),
                            ],
                        }),
                        e.jsx(T, { split: !0, path: s.text }),
                        e.jsx('div', {
                            className: cs.listWrapper,
                            children:
                                s.list &&
                                t(s.list, (s, a) =>
                                    e.jsxs(
                                        'div',
                                        {
                                            className: cs.scenariosItemList,
                                            children: [
                                                e.jsx('div', { className: cs.listBullet, children: '•' }),
                                                e.jsx(T, { split: !0, path: s }),
                                            ],
                                        },
                                        `scenarios_list_${a}`,
                                    ),
                                ),
                        }),
                    ],
                },
                `scenario_item_${a}`,
            ),
        ),
    });
}
const gs = 'Scenarios_subtitle_245f6322',
    ds = 'Scenarios_contentWrapper_5fa3aa74';
function fs() {
    return e.jsx(j, {
        children: e.jsxs('div', {
            className: ds,
            children: [
                e.jsx(C, { path: 'fl_info_page.reserveCategories.scenarios.sectionHeader' }),
                e.jsx(T, { className: gs, path: 'fl_info_page.reserveCategories.scenarios.text', split: !0 }),
                e.jsx(ps, {}),
                e.jsx(os, {}),
            ],
        }),
    });
}
const ms = 'WinningStrategy_contentWrapper_17f30bd5',
    us = 'WinningStrategy_textWrapper_46ce83ae',
    xs = 'WinningStrategy_text_ad73a0d6',
    vs = 'WinningStrategy_firstText_d2f2fc5f',
    hs = 'WinningStrategy_img_97a22f1c',
    js = [
        'fl_info_page.winStrategy.firstLine',
        'fl_info_page.winStrategy.secondLine',
        'fl_info_page.winStrategy.thirdLine',
    ];
function bs() {
    return e.jsx(j, {
        children: e.jsxs('div', {
            className: ms,
            children: [
                e.jsxs('div', {
                    className: us,
                    children: [
                        e.jsx(C, { path: 'fl_info_page.winStrategy.header' }),
                        e.jsx(T, { className: vs, path: 'fl_info_page.winStrategy.mapZones' }),
                        js.map((s, a) => e.jsx(T, { className: xs, path: s, split: !0 }, a)),
                    ],
                }),
                e.jsx('div', { className: hs }),
            ],
        }),
    });
}
const Ns = 'InfoView_1674491c',
    Is = 'InfoView_closeButton_d5207903',
    Cs = 'InfoView_wrapper_392acbfc',
    Rs = 'InfoView_scrollWrapper_28fa2dbb',
    Ts = 'InfoView_title_ced11487',
    ks = 'InfoView_subtitle_d7af0e7d',
    ys = 'InfoView_scrollContent_9a303e94',
    Ps = 'InfoView_scrollContentWrapper_541d7dda',
    Ws = a(function () {
        const { controls: s, model: a } = oe(),
            i = a.isBattlePassAvailable.get(),
            { dateFormat: l, params: t } = ((e, s) => {
                const a = R.strings.menu.dateTime.months,
                    i = new Date(e * r),
                    l = new Date(s * r),
                    n = {
                        from: i.getDate(),
                        to: l.getDate(),
                        startMonth: a.$num(i.getMonth() + 1),
                        endMonth: a.$num(l.getMonth() + 1),
                        startYear: i.getFullYear(),
                        endYear: l.getFullYear(),
                    };
                return {
                    params: n,
                    dateFormat:
                        n.startYear === n.endYear
                            ? n.startMonth === n.endMonth
                                ? 'sameMonth'
                                : 'differentMonth'
                            : 'differentYears',
                };
            })(a.startTimestamp.get(), a.endTimestamp.get());
        return (
            p(s.close),
            e.jsxs('div', {
                className: Ns,
                children: [
                    e.jsx(g, { className: Is, onClose: s.close }),
                    e.jsxs('div', {
                        className: Cs,
                        children: [
                            e.jsx(n, { className: Ts, path: 'fl_info_page.page.headerUpper' }),
                            e.jsx(n, { className: ks, params: t, path: `fl_info_page.subTitle.${l}` }),
                            e.jsx('div', {
                                className: Rs,
                                children: e.jsxs(d, {
                                    children: [
                                        e.jsx(f, {
                                            className: Ps,
                                            children: e.jsxs('div', {
                                                className: ys,
                                                children: [
                                                    e.jsx(xe, {}),
                                                    e.jsx(rs, {}),
                                                    e.jsx(fs, {}),
                                                    e.jsx(ne, {}),
                                                    e.jsx(we, {}),
                                                    e.jsx(Qe, {}),
                                                    e.jsx(bs, {}),
                                                    e.jsx(S, { withDivider: i }),
                                                    i && e.jsx(q, {}),
                                                ],
                                            }),
                                        }),
                                        e.jsx(m, {}),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    });
u(e.jsx(x, { children: e.jsx(te, { children: e.jsx(Ws, {}) }) }));
