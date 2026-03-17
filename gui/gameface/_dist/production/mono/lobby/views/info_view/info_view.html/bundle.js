import { j as e, aa as s, S as a } from '../../../chunks/vendor.js';
import {
    cS as i,
    cT as r,
    c1 as l,
    a8 as n,
    E as t,
    i as o,
    cU as c,
    o as _,
    bY as g,
    cV as p,
    cW as d,
    H as f,
    a6 as m,
    F as u,
    cu as x,
    c3 as v,
} from '../../../chunks/lib.js';
const h = [
        {
            header: 'fl_info_page.addons.cellRent.header',
            text: 'fl_info_page.addons.cellRent.text_9',
            binding: { vehiclesLevel: i(8) },
        },
        { header: 'fl_info_page.addons.cellTime.header', text: 'fl_info_page.addons.cellTime.text' },
        { header: 'fl_info_page.addons.cellSpectator.header', text: 'fl_info_page.addons.cellSpectator.text' },
    ],
    j = {
        divider: 'SectionDivider_divider_4388c29f',
        dividerWrapper: 'SectionDivider_dividerWrapper_476044f4',
        contentWrapper: 'SectionDivider_contentWrapper_9129fcfd',
        wrapper: 'SectionDivider_wrapper_8107b8d5',
    };
function b({ children: s, withDivider: a = !0 }) {
    return e.jsxs('div', {
        className: j.wrapper,
        children: [
            e.jsx('div', { className: j.contentWrapper, children: s }),
            a && e.jsx('div', { className: j.dividerWrapper, children: e.jsx('div', { className: j.divider }) }),
        ],
    });
}
const N = 'Typography_title_9e921a81',
    I = 'Typography_description_8ce6e6a4',
    C = 'Typography_subtitle_ecdc2835',
    T = ({ className: a, ...i }) => e.jsx(n, { ...i, className: s(N, a) }),
    k = ({ className: a, ...i }) => e.jsx(n, { ...i, className: s(I, a) }),
    y = ({ className: a, ...i }) => e.jsx(n, { ...i, className: s(C, a) }),
    P = 'AdditionalInfo_contentWrapper_2b0dc85',
    W = 'AdditionalInfo_descriptionWrapper_de4229ba',
    w = 'AdditionalInfo_column_fc5fc9cb',
    S = 'AdditionalInfo_description_9f855607',
    $ = a(function ({ withDivider: s }) {
        return e.jsx(b, {
            withDivider: s,
            children: e.jsxs('div', {
                className: P,
                children: [
                    e.jsx(T, { path: 'fl_info_page.addons.header' }),
                    e.jsx('div', {
                        className: W,
                        children: h.map(({ header: s, text: a, binding: i }, r) =>
                            e.jsxs(
                                'div',
                                {
                                    className: w,
                                    children: [
                                        e.jsx(y, { path: s }),
                                        e.jsx(k, { className: S, split: !0, path: a, params: i }),
                                    ],
                                },
                                r,
                            ),
                        ),
                    }),
                ],
            }),
        });
    }),
    L = 'BattlePass_contentWrapper_e710928c',
    B = 'BattlePass_description_6c9afd9a',
    G = 'BattlePass_battlePassImg_62743d72',
    H = 'BattlePass_pointsWrapper_267a3b69',
    D = 'BattlePass_pointsTextWrapper_dcdf9a80',
    F = 'BattlePass_pointsText_f3f8914e',
    M = 'BattlePass_pointsTitle_ce8f8dec',
    V = 'BattlePass_tableBpImg_a4a80d9e',
    A = 'BattlePass_table_63223d56',
    E = 'BattlePass_tableCell_814f7c5d',
    Y = 'BattlePass_tableColumn_b9a1f867',
    U = 'BattlePass_tableCellText_c7b1c07e',
    O = [5, 20, 30],
    q = [
        { header: 'fl_info_page.about.scoresTable.winHeader', cells: [25, 10, null] },
        { header: 'fl_info_page.about.scoresTable.loseHeader', cells: [10, 5, null] },
    ];
function Z() {
    return e.jsx(b, {
        withDivider: !1,
        children: e.jsxs('div', {
            className: L,
            children: [
                e.jsx(T, { path: 'fl_info_page.about.header' }),
                e.jsx(k, { className: B, path: 'fl_info_page.about.text' }),
                e.jsxs('div', {
                    className: H,
                    children: [
                        e.jsx('div', { className: G }),
                        e.jsxs('div', {
                            className: D,
                            children: [
                                e.jsx(y, { path: 'fl_info_page.about.scores.header' }),
                                e.jsx(k, { className: F, split: !0, path: 'fl_info_page.about.scores.text' }),
                                e.jsx(y, { className: M, path: 'fl_info_page.about.position.header' }),
                                e.jsx(k, { className: F, split: !0, path: 'fl_info_page.about.position.text' }),
                                e.jsxs('div', {
                                    className: A,
                                    children: [
                                        e.jsxs('div', {
                                            className: Y,
                                            children: [
                                                e.jsx('div', { className: E }),
                                                O.map((s, a) =>
                                                    e.jsx(
                                                        k,
                                                        {
                                                            path: 'fl_info_page.about.scoresTable.topCell',
                                                            params: { top: s },
                                                            className: E,
                                                        },
                                                        a,
                                                    ),
                                                ),
                                            ],
                                        }),
                                        q.map(({ header: s, cells: a }, i) =>
                                            e.jsxs(
                                                'div',
                                                {
                                                    className: Y,
                                                    children: [
                                                        e.jsx('div', { className: E, children: e.jsx(k, { path: s }) }),
                                                        a.map((s, a) =>
                                                            e.jsx(
                                                                'div',
                                                                {
                                                                    className: E,
                                                                    children: s
                                                                        ? e.jsxs(e.Fragment, {
                                                                              children: [
                                                                                  e.jsx('div', {
                                                                                      className: U,
                                                                                      children: s,
                                                                                  }),
                                                                                  e.jsx('div', { className: V }),
                                                                              ],
                                                                          })
                                                                        : e.jsx('div', { className: U, children: '-' }),
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
const z = 'Configuration_subtitle_9098d8a9',
    J = 'Configuration_contentWrapper_cd9afa41',
    K = 'Configuration_configurationWrapper_5f1f44b8',
    Q = 'Configuration_configurationIcon_d40cb44e',
    X = 'Configuration_configurationIconWrapper_8494ee6c',
    ee = 'Configuration_tableWrapper_e2c92d8e',
    se = 'Configuration_cell_844d940e',
    ae = 'Configuration_column_3ebbf6d6',
    ie = 'Configuration_configurationImgContainer_c2047a9',
    re = 'Configuration_configurationImg_d7b4181b',
    le = 'Configuration_noteText_30ab7bcc',
    ne = [
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
function te() {
    return e.jsx(b, {
        children: e.jsxs('div', {
            className: J,
            children: [
                e.jsx(T, { path: 'fl_info_page.reserveCategories.config.header' }),
                e.jsx(k, { className: z, path: 'fl_info_page.reserveCategories.config.text', split: !0 }),
                e.jsxs('div', {
                    className: K,
                    children: [
                        e.jsx('div', {
                            className: ee,
                            children: t(ne, (s, a) =>
                                e.jsx(
                                    'div',
                                    {
                                        className: ae,
                                        children: t(s, ({ isImg: s, value: a }, i) =>
                                            e.jsx(
                                                'div',
                                                {
                                                    className: se,
                                                    children: s
                                                        ? e.jsx('div', {
                                                              className: X,
                                                              children: e.jsx('div', {
                                                                  className: Q,
                                                                  style: { backgroundImage: `url(${a})` },
                                                              }),
                                                          })
                                                        : a && e.jsx(k, { path: a }),
                                                },
                                                `cell_${i}`,
                                            ),
                                        ),
                                    },
                                    `column_${a}`,
                                ),
                            ),
                        }),
                        e.jsx('div', { className: ie, children: e.jsx('div', { className: re }) }),
                    ],
                }),
                e.jsx(k, { className: le, path: 'fl_info_page.reserveCategories.config.footerText' }),
            ],
        }),
    });
}
const [oe, ce] = o()(
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
    _e = 'GeneralInfo_contentWrapper_4c37eb45',
    ge = 'GeneralInfo_wrapper_38584321',
    pe = 'GeneralInfo_cellHeader_11ccb279',
    de = 'GeneralInfo_cell_db2c72d7',
    fe = 'GeneralInfo_cellTitle_a42b02aa',
    me = 'GeneralInfo_cellDescription_6f635451',
    ue = 'GeneralInfo_icon_c0644ea3',
    xe = 'GeneralInfo_row_2e8d4ae8',
    ve = a(function () {
        const { model: s } = ce(),
            a = Math.round((s.endTimestamp.get() - s.startTimestamp.get()) / c),
            l = ((e, s = 3) => {
                const a = [];
                for (let i = 0; i < e.length; i += s) a.push(e.slice(i, i + s));
                return a;
            })(
                ((e, s, a, l) => {
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
                                binding: { days: r(R.strings.fl_common.day(l), { duration: l }) },
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
        return e.jsx(b, {
            children: e.jsxs('div', {
                className: _e,
                children: [
                    e.jsx(T, { path: 'fl_info_page.main.sectionHeader' }),
                    e.jsx('div', {
                        className: ge,
                        children: t(l, (s, a) =>
                            e.jsx(
                                'div',
                                {
                                    className: xe,
                                    children: t(s, ({ image: s, header: a, text: i }, r) =>
                                        e.jsxs(
                                            'div',
                                            {
                                                className: de,
                                                children: [
                                                    e.jsxs('div', {
                                                        className: pe,
                                                        children: [
                                                            e.jsx('div', {
                                                                className: ue,
                                                                style: { backgroundImage: `url(${s})` },
                                                            }),
                                                            e.jsx(y, {
                                                                path: a.value,
                                                                params: a.binding,
                                                                className: fe,
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx(k, {
                                                        className: me,
                                                        path: i.value,
                                                        params: i.binding,
                                                        split: !0,
                                                    }),
                                                ],
                                            },
                                            `section-${r}`,
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
    he = 'GeneralRules_contentWrapper_d98d08a1',
    je = 'GeneralRules_rulesWrapper_1f696fe2',
    be = 'GeneralRules_column_b69d46fc',
    Ne = 'GeneralRules_ruleImage_91a4f89',
    Ie = 'GeneralRules_ruleTitle_250d67d9',
    Ce = 'GeneralRules_rulesText_82ace16f',
    Re = 'GeneralRules_listItem_bb969db3',
    Te = 'GeneralRules_listWrapper_81cd3c0',
    ke = 'GeneralRules_listBullet_18c894c8',
    ye = 'GeneralRules_backToFightImg_a9c9a28a',
    Pe = 'GeneralRules_backToFight_c3119c8b',
    We = 'GeneralRules_backToFightTextWrapper_fcc08592',
    we = 'GeneralRules_backToFightDescription_4017e795',
    Se = _.resolve('strings'),
    $e = a(function () {
        const { model: s } = ce(),
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
        return e.jsx(b, {
            children: e.jsxs('div', {
                className: he,
                children: [
                    e.jsx(T, { path: 'fl_info_page.rules.sectionHeader' }),
                    e.jsx('div', {
                        className: je,
                        children: t(a, ({ text: s, list: a, header: i, image: r }, l) =>
                            e.jsxs(
                                'div',
                                {
                                    className: be,
                                    children: [
                                        e.jsx('div', { className: Ne, style: { backgroundImage: `url(${r})` } }),
                                        e.jsx(y, { className: Ie, path: i }),
                                        t(s, (s, a) =>
                                            e.jsx(g, { classMix: Ce, text: Se.readOrEmpty(s) }, `rule-text-${a}`),
                                        ),
                                        e.jsx('div', {
                                            className: Te,
                                            children: t(a ?? [], (s, a) =>
                                                e.jsxs(
                                                    'div',
                                                    {
                                                        className: Re,
                                                        children: [
                                                            e.jsx('div', { className: ke, children: '•' }),
                                                            e.jsx(k, { split: !0, path: s }, a),
                                                        ],
                                                    },
                                                    `rule-list-${a}`,
                                                ),
                                            ),
                                        }),
                                    ],
                                },
                                `rule-${l}`,
                            ),
                        ),
                    }),
                    e.jsxs('div', {
                        className: Pe,
                        children: [
                            e.jsxs('div', {
                                className: We,
                                children: [
                                    e.jsx(y, { path: 'fl_info_page.rules.backToFight.header' }),
                                    e.jsx(k, { className: we, split: !0, path: 'fl_info_page.rules.backToFight.text' }),
                                ],
                            }),
                            e.jsx('div', { className: ye }),
                        ],
                    }),
                ],
            }),
        });
    }),
    Le = 'Progression_contentWrapper_3a0356f1',
    Be = 'Progression_description_bac962f1',
    Ge = 'Progression_captionBadge_f16caccb',
    He = 'Progression_captionImg_fe01cac8',
    De = 'Progression_caption_32ed00dc',
    Fe = 'Progression_bottomCaptionBlock_571a7797',
    Me = 'Progression_captionDescription_adfae39a',
    Ve = 'Progression_captionTextBottom_14bc6992',
    Ae = 'Progression_captionText_e8531968',
    Ee = 'Progression_tableWrapper_e617c990',
    Ye = 'Progression_rankImg_97dedc33',
    Ue = 'Progression_tableCell_5186b08b',
    Oe = 'Progression_tableColumn_bfdf0695',
    qe = 'Progression_tableValue_46886aa8',
    Ze = _.resolve('intl'),
    ze = [
        null,
        'fl_info_page.progression.ranksTable.frontExperienceCell',
        'fl_info_page.progression.ranksTable.bonusCell',
        'fl_info_page.progression.ranksTable.crewBonusCell',
    ],
    Je = a(function () {
        const { model: a } = ce(),
            i = a.ranksWithPoints.get();
        return e.jsx(b, {
            children: e.jsxs('div', {
                className: Le,
                children: [
                    e.jsx(T, { path: 'fl_info_page.progression.sectionHeader' }),
                    e.jsx(k, { className: Be, path: 'fl_info_page.progression.text', split: !0 }),
                    e.jsxs('div', {
                        children: [
                            e.jsxs('div', {
                                className: De,
                                children: [
                                    e.jsx('div', { className: He }),
                                    e.jsxs('div', {
                                        className: Me,
                                        children: [
                                            e.jsx(y, { path: 'fl_info_page.progression.ranksSection.header' }),
                                            e.jsx(k, {
                                                className: Ae,
                                                path: 'fl_info_page.progression.ranksSection.text',
                                                split: !0,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            e.jsx(k, {
                                className: Ve,
                                path: 'fl_info_page.progression.ranksSection.experience',
                                split: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: Ee,
                        children: [
                            e.jsx('div', {
                                className: Oe,
                                children: t(ze, (s, a) =>
                                    e.jsx('div', { className: Ue, children: s && e.jsx(k, { path: s }) }, `label-${a}`),
                                ),
                            }),
                            t(i, ({ rankName: a, rankPoints: i }, r) =>
                                e.jsxs(
                                    'div',
                                    {
                                        className: Oe,
                                        children: [
                                            e.jsxs('div', {
                                                className: Ue,
                                                children: [
                                                    e.jsx('div', {
                                                        className: Ye,
                                                        style: {
                                                            backgroundImage: `url(${R.images.gui.maps.icons.library.epicRank.$dyn(`msg_rank_${a}`)})`,
                                                        },
                                                    }),
                                                    e.jsx(k, { path: `fl_info_page.progression.ranksTable.${a}` }),
                                                ],
                                            }),
                                            i.map((a, i) =>
                                                e.jsx(
                                                    'div',
                                                    {
                                                        className: s(Ue, qe),
                                                        children:
                                                            0 === i
                                                                ? a
                                                                    ? e.jsx(n, {
                                                                          path: 'fl_info_page.plusValue',
                                                                          params: { value: Ze.formatNumber('gold', a) },
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
                                    r,
                                ),
                            ),
                        ],
                    }),
                    e.jsxs('div', {
                        className: s(De, Fe),
                        children: [
                            e.jsx('div', { className: Ge }),
                            e.jsxs('div', {
                                className: Me,
                                children: [
                                    e.jsx(y, { path: 'fl_info_page.progression.levelsSection.header' }),
                                    e.jsx(k, {
                                        className: Ae,
                                        path: 'fl_info_page.progression.levelsSection.experienceText',
                                        split: !0,
                                    }),
                                    e.jsx(k, {
                                        className: Ve,
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
    Ke = 'ReserveCategories_contentWrapper_abb2dfc',
    Qe = 'ReserveCategories_subtitle_6df11df5',
    Xe = 'ReserveCategories_categoryColumn_1fc9c281',
    es = 'ReserveCategories_categoryColumnHeader_20701acf',
    ss = 'ReserveCategories_categoryTypeIconWrapper_7acbd61a',
    as = 'ReserveCategories_categoryTypeIcon_33babf6f',
    is = 'ReserveCategories_categoryTypeImg_2ad430fa',
    rs = 'ReserveCategories_categoriesLists_a35df825',
    ls = 'ReserveCategories_categoryCell_b0dcc9d9',
    ns = 'ReserveCategories_description_e511bb05',
    ts = a(function () {
        const { model: s } = ce();
        return e.jsx(b, {
            children: e.jsxs('div', {
                className: Ke,
                children: [
                    e.jsx(T, { path: 'fl_info_page.reserveCategories.sectionHeader' }),
                    e.jsx(k, { className: Qe, path: 'fl_info_page.reserveCategories.text' }),
                    e.jsx('div', {
                        className: rs,
                        children: t(s.skillsCategories.get(), ({ type: s, skills: a }, i) =>
                            e.jsxs(
                                'div',
                                {
                                    className: Xe,
                                    children: [
                                        e.jsxs('div', {
                                            className: es,
                                            children: [
                                                e.jsx('div', {
                                                    className: ss,
                                                    children: e.jsx('div', {
                                                        className: as,
                                                        style: {
                                                            backgroundImage: `url(${R.images.frontline.gui.maps.icons.loadout.categories.c_52x52.$dyn(s)})`,
                                                        },
                                                    }),
                                                }),
                                                e.jsx(y, { path: `fl_info_page.reserveCategories.types.${s}` }),
                                            ],
                                        }),
                                        a.map(({ icon: s, name: a }, i) =>
                                            e.jsxs(
                                                'div',
                                                {
                                                    className: ls,
                                                    children: [
                                                        e.jsx('div', {
                                                            className: is,
                                                            style: {
                                                                backgroundImage: `url(${R.images.frontline.gui.maps.icons.loadout.battleAbilities.c_48x48.$dyn(s)})`,
                                                            },
                                                        }),
                                                        e.jsx('div', { className: ns, children: a }),
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
    os = {
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
    cs = [
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
function _s() {
    return e.jsx('div', {
        className: os.wrapper,
        children: e.jsxs('div', {
            className: os.contentWrapper,
            children: [
                e.jsxs('div', {
                    className: os.progression,
                    children: [
                        e.jsxs('div', {
                            className: os.progressionInfo,
                            children: [
                                e.jsx(y, { split: !0, path: 'fl_info_page.reserveCategories.levels.header' }),
                                e.jsx(k, { split: !0, path: 'fl_info_page.reserveCategories.levels.text' }),
                            ],
                        }),
                        e.jsx('div', { className: os.progressionImg }),
                    ],
                }),
                e.jsx('div', {
                    className: os.tableWrapper,
                    children: t(cs, ({ label: s, cells: a, icon: r }, l) =>
                        e.jsxs(
                            'div',
                            {
                                className: os.column,
                                children: [
                                    e.jsxs('div', {
                                        className: os.cell,
                                        children: [
                                            e.jsx('div', {
                                                className: os.progressionTableHeaderIcon,
                                                style: null !== r ? { backgroundImage: `url(${r})` } : void 0,
                                            }),
                                            s && e.jsx(k, { path: s }),
                                        ],
                                    }),
                                    a &&
                                        a.map((s, a) =>
                                            e.jsx(
                                                'div',
                                                {
                                                    className: os.cell,
                                                    children:
                                                        s &&
                                                        e.jsx(k, {
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
                            `column_${l}`,
                        ),
                    ),
                }),
                e.jsx(k, { className: os.progressionNoteText, path: 'fl_info_page.reserveCategories.levelUpNote' }),
            ],
        }),
    });
}
const gs = {
        scenariosItemHeaderIcon: 'ScenariosList_scenariosItemHeaderIcon_85bf9391',
        scenariosItemHeader: 'ScenariosList_scenariosItemHeader_7a7cf942',
        scenariosItem: 'ScenariosList_scenariosItem_bc09f63d',
        scenariosItemList: 'ScenariosList_scenariosItemList_99600cd6',
        listWrapper: 'ScenariosList_listWrapper_b93acd0f',
        listBullet: 'ScenariosList_listBullet_fde00cd3',
        scenarios: 'ScenariosList_scenarios_5831082d',
    },
    ps = [
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
function ds() {
    return e.jsx('div', {
        className: gs.scenarios,
        children: t(ps, (s, a) =>
            e.jsxs(
                'div',
                {
                    className: gs.scenariosItem,
                    children: [
                        e.jsxs('div', {
                            className: gs.scenariosItemHeader,
                            children: [
                                e.jsx('div', {
                                    className: gs.scenariosItemHeaderIcon,
                                    style: { backgroundImage: `url(${s.icon})` },
                                }),
                                e.jsx(y, { split: !0, path: s.header }),
                            ],
                        }),
                        e.jsx(k, { split: !0, path: s.text }),
                        e.jsx('div', {
                            className: gs.listWrapper,
                            children:
                                s.list &&
                                t(s.list, (s, a) =>
                                    e.jsxs(
                                        'div',
                                        {
                                            className: gs.scenariosItemList,
                                            children: [
                                                e.jsx('div', { className: gs.listBullet, children: '•' }),
                                                e.jsx(k, { split: !0, path: s }),
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
const fs = 'Scenarios_subtitle_245f6322',
    ms = 'Scenarios_contentWrapper_5fa3aa74';
function us() {
    return e.jsx(b, {
        children: e.jsxs('div', {
            className: ms,
            children: [
                e.jsx(T, { path: 'fl_info_page.reserveCategories.scenarios.sectionHeader' }),
                e.jsx(k, { className: fs, path: 'fl_info_page.reserveCategories.scenarios.text', split: !0 }),
                e.jsx(ds, {}),
                e.jsx(_s, {}),
            ],
        }),
    });
}
const xs = 'WinningStrategy_contentWrapper_17f30bd5',
    vs = 'WinningStrategy_textWrapper_46ce83ae',
    hs = 'WinningStrategy_text_ad73a0d6',
    js = 'WinningStrategy_firstText_d2f2fc5f',
    bs = 'WinningStrategy_img_97a22f1c',
    Ns = [
        'fl_info_page.winStrategy.firstLine',
        'fl_info_page.winStrategy.secondLine',
        'fl_info_page.winStrategy.thirdLine',
    ];
function Is() {
    return e.jsx(b, {
        children: e.jsxs('div', {
            className: xs,
            children: [
                e.jsxs('div', {
                    className: vs,
                    children: [
                        e.jsx(T, { path: 'fl_info_page.winStrategy.header' }),
                        e.jsx(k, { className: js, path: 'fl_info_page.winStrategy.mapZones' }),
                        Ns.map((s, a) => e.jsx(k, { className: hs, path: s, split: !0 }, a)),
                    ],
                }),
                e.jsx('div', { className: bs }),
            ],
        }),
    });
}
const Cs = 'InfoView_1674491c',
    Rs = 'InfoView_closeButton_d5207903',
    Ts = 'InfoView_wrapper_392acbfc',
    ks = 'InfoView_scrollWrapper_28fa2dbb',
    ys = 'InfoView_title_ced11487',
    Ps = 'InfoView_subtitle_d7af0e7d',
    Ws = 'InfoView_scrollContent_9a303e94',
    ws = 'InfoView_scrollContentWrapper_541d7dda',
    Ss = a(function () {
        const { controls: s, model: a } = ce(),
            i = a.isBattlePassAvailable.get(),
            { dateFormat: r, params: t } = ((e, s) => {
                const a = R.strings.menu.dateTime.months,
                    i = new Date(e * l),
                    r = new Date(s * l),
                    n = {
                        from: i.getDate(),
                        to: r.getDate(),
                        startMonth: a.$num(i.getMonth() + 1),
                        endMonth: a.$num(r.getMonth() + 1),
                        startYear: i.getFullYear(),
                        endYear: r.getFullYear(),
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
                className: Cs,
                children: [
                    e.jsx(d, { className: Rs, onClose: s.close }),
                    e.jsxs('div', {
                        className: Ts,
                        children: [
                            e.jsx(n, { className: ys, path: 'fl_info_page.page.headerUpper' }),
                            e.jsx(n, { className: Ps, params: t, path: `fl_info_page.subTitle.${r}` }),
                            e.jsx('div', {
                                className: ks,
                                children: e.jsxs(f, {
                                    children: [
                                        e.jsx(m, {
                                            className: ws,
                                            children: e.jsxs('div', {
                                                className: Ws,
                                                children: [
                                                    e.jsx(ve, {}),
                                                    e.jsx(ts, {}),
                                                    e.jsx(us, {}),
                                                    e.jsx(te, {}),
                                                    e.jsx($e, {}),
                                                    e.jsx(Je, {}),
                                                    e.jsx(Is, {}),
                                                    e.jsx($, { withDivider: i }),
                                                    i && e.jsx(Z, {}),
                                                ],
                                            }),
                                        }),
                                        e.jsx(u, {}),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    });
window.requestAnimationFrame(() => {
    x(e.jsx(v, { children: e.jsx(oe, { children: e.jsx(Ss, {}) }) }));
});
