'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [2714],
    {
        2714: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ge });
            var n = a(6179),
                l = a.n(n),
                s = a(2608),
                c = a(4906),
                o = a(3572),
                r = a(6483),
                i = a.n(r),
                d = a(3415),
                _ = a(3649),
                m = a(3403),
                u = a(7506),
                v = a(3768),
                g = a(1504),
                E = a(2056),
                w = a(7869),
                N = a(9690),
                p = a(489),
                C = a(7314);
            const b = 'DiscountReward_base_98',
                y = 'DiscountReward_base__empty_82',
                h = 'DiscountReward_base__withPopover_04',
                D = 'DiscountReward_plus_56',
                f = 'DiscountReward_icon_2d',
                A = 'DiscountReward_iconCheck_52',
                L = 'DiscountReward_reward_80',
                $ = 'DiscountReward_glow_cb',
                I = 'DiscountReward_popover_19',
                V = 'DiscountReward_level_82',
                k = 'DiscountReward_discountAmount_0c',
                T = R.strings.ny.percentageValue,
                x = R.images.gui.maps.icons.vehicle,
                P = ({ reward: e, discountPopoverId: t }) => {
                    const a = e.level,
                        n = e.discount,
                        s = e.selectedVehicle,
                        c = e.variadicID,
                        o = t === c,
                        r = { popoverId: w.k, variadicID: c },
                        d = { variadicID: c, discount: n, isCurrentProgressionCompleted: !0 },
                        m = `${(0, C.by)(v.AC.VariadicDiscount, v.$u.Small)}.${v.AC.VariadicDiscount}`,
                        u = { backgroundImage: `url('${s ? x.$dyn((0, p.C)(s)) : m}')` },
                        P = l().createElement(
                            E.u,
                            { contentId: R.views.lobby.new_year.tooltips.NyDiscountRewardTooltip('resId'), args: d },
                            l().createElement(
                                'div',
                                { className: i()(b, !s && y, o && h) },
                                !s && l().createElement('div', { className: D }),
                                l().createElement('div', { className: $ }),
                                l().createElement(
                                    'div',
                                    { className: L },
                                    l().createElement('div', { className: f, style: u }),
                                    l().createElement('div', { className: V }, (0, N.HG)(a)),
                                    !s &&
                                        l().createElement(
                                            'div',
                                            { className: k },
                                            (0, _.uF)(T.withMinus(), { value: n }),
                                        ),
                                ),
                                s && l().createElement('div', { className: A }),
                            ),
                        );
                    return s ? P : l().createElement(g.$, { className: I, args: r }, P);
                };
            var M = a(3215),
                O = a(9480),
                S = a(3946);
            const H = (0, M.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                discountRewards: e.array('discountRewards'),
                                remainingRewards: e.array('remainingRewards'),
                            },
                            a = (0, S.Om)(() => O.map(t.discountRewards.get(), (e) => Object.assign({}, e))),
                            n = (0, S.Om)(() => O.map(t.remainingRewards.get(), (e) => Object.assign({}, e))),
                            l = (0, S.Om)(() => O.every(a(), (e) => '' !== e.selectedVehicle));
                        return Object.assign({}, t, {
                            computes: { getDiscountRewards: a, getRemainingRewards: n, allRewardsReceived: l },
                        });
                    },
                    ({ externalModel: e }) => ({
                        showStylePreview: e.createCallback((e) => ({ intCD: e }), 'onStylePreview'),
                    }),
                ),
                j = H[0],
                B = H[1],
                G = 'Content_base_a4',
                Y = 'Content_base__expanded_e5',
                q = 'Content_inner_cc',
                z = 'Content_title_75',
                F = 'Content_holder_40',
                Q = 'Content_buttonHolder_58',
                U = 'Content_buttonHolder__withLines_8e',
                X = 'Content_button_1d',
                J = 'Content_buttonArrow_60',
                K = 'Content_rewards_dd',
                W = 'Content_rewards__discount_d3',
                Z = 'Content_rewards__common_2d',
                ee = 'Content_reward_f6',
                te = 'Content_reward__common_e1',
                ae = 'Content_reward__discount_93',
                ne = 'Content_reward__style_9b',
                le = 'Content_loupe_79',
                se = 'Content_rewardInfo_22',
                ce = 'Content_box_5f',
                oe = 'Content_boxIcon_05',
                re = R.strings.ny.newYear.challenge.challengeComplete,
                ie = R.strings.settings.LANGUAGE_CODE(),
                de = (0, m.Pi)(() => {
                    const e = B(),
                        t = e.model,
                        a = e.controls,
                        s = t.root.get().discountPopoverId,
                        c = t.computes,
                        o = c.getRemainingRewards,
                        r = c.getDiscountRewards,
                        m = c.allRewardsReceived,
                        g = (0, n.useState)(!1),
                        E = g[0],
                        w = g[1],
                        N = o(),
                        p = r(),
                        C = N.length - 11,
                        b = C > 1,
                        y = b ? 11 : 12,
                        h = N.slice(0, y),
                        D = {
                            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                            args: { showCount: C },
                        };
                    return l().createElement(
                        'div',
                        { className: i()(G, E && Y) },
                        l().createElement(
                            'div',
                            { className: q },
                            l().createElement(
                                'div',
                                { className: F },
                                l().createElement(
                                    'div',
                                    { className: z, lang: ie },
                                    m() ? re.allReceived() : re.title(),
                                ),
                                l().createElement(
                                    'div',
                                    { className: i()(K, W) },
                                    p.map((e, t) =>
                                        l().createElement(
                                            'div',
                                            { key: t, className: i()(ee, ae) },
                                            l().createElement(P, { reward: e, discountPopoverId: s }),
                                        ),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    { className: i()(Q, E && U) },
                                    l().createElement(
                                        'div',
                                        { className: X, onClick: () => w(!E) },
                                        re.button(),
                                        l().createElement('div', { className: J }),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    { className: i()(K, Z) },
                                    h.map((e, t) => {
                                        const n = 'style' === e.icon;
                                        return l().createElement(
                                            'div',
                                            {
                                                key: t,
                                                className: i()(ee, te, n && ne),
                                                onClick: () => {
                                                    n && a.showStylePreview(e.intCD);
                                                },
                                            },
                                            l().createElement(u.Q, {
                                                classNames: { info: se },
                                                bonusModel: e,
                                                size: v.$u.Small,
                                            }),
                                            n && l().createElement('div', { className: le }),
                                        );
                                    }),
                                    b &&
                                        l().createElement(
                                            'div',
                                            { className: i()(ee, te) },
                                            l().createElement(
                                                d.l,
                                                { tooltipArgs: D },
                                                l().createElement(
                                                    'div',
                                                    { className: ce },
                                                    l().createElement('div', { className: oe }),
                                                    l().createElement(
                                                        'div',
                                                        { className: se },
                                                        (0, _.uF)(re.andMore(), { count: C }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                ),
                            ),
                        ),
                    );
                }),
                _e = 'App_base_30',
                me = 'App_logoBox_10',
                ue = 'App_content_b3',
                ve = () =>
                    l().createElement(
                        'div',
                        { className: _e },
                        l().createElement(
                            'div',
                            { className: me },
                            l().createElement(o.T, {
                                viewType: s.X.Tournament,
                                counterType: c.e.Challenge,
                                isDescriptionHidden: !0,
                            }),
                        ),
                        l().createElement('div', { className: ue }, l().createElement(de, null)),
                    ),
                ge = () =>
                    l().createElement(
                        j,
                        { options: { context: 'model.challengeModel.completedModel' } },
                        l().createElement(ve, null),
                    );
        },
        4906: (e, t, a) => {
            a.d(t, { A: () => h, e: () => b });
            var n = a(6483),
                l = a.n(n),
                s = a(9766),
                c = a(6179),
                o = a.n(c);
            const r = 'Counter_base_6d',
                i = 'Counter_caption_b7',
                d = 'Counter_captionText_3d',
                _ = 'Counter_indent_a9',
                m = 'Counter_currentValue_98',
                u = 'Counter_currentValue__shadow_0d',
                v = 'Counter_gradient_ce',
                g = 'Counter_gradient__top_fb',
                E = 'Counter_gradient__bottom_ff',
                w = 'Counter_mask_ce',
                N = 'Counter_divider_16',
                p = 'Counter_wreath_58',
                C = 'Counter_totalValue_2a';
            let b;
            !(function (e) {
                (e.Challenge = 'challenge'), (e.Quest = 'quest'), (e.Advanced = 'advanced');
            })(b || (b = {}));
            const y = R.strings.ny.newYear.challenge.logo,
                h = ({ currentValue: e, totalValue: t, type: a }) =>
                    o().createElement(
                        'div',
                        { className: r },
                        o().createElement(
                            'div',
                            { className: i },
                            o().createElement(s.z, {
                                classMix: d,
                                text: y.counterCaption.$dyn(a),
                                binding: { indent: o().createElement('div', { className: _ }) },
                            }),
                        ),
                        o().createElement('div', { className: l()(m, u) }, e),
                        o().createElement(
                            'div',
                            { className: w },
                            o().createElement(
                                'div',
                                { className: m },
                                e,
                                o().createElement('div', { className: l()(v, g) }, e),
                                o().createElement('div', { className: l()(v, E) }, e),
                            ),
                        ),
                        o().createElement(
                            'div',
                            { className: N },
                            a === b.Advanced && o().createElement('div', { className: p }),
                        ),
                        o().createElement('div', { className: C }, t),
                    );
        },
        3572: (e, t, a) => {
            a.d(t, { T: () => y });
            var n = a(6483),
                l = a.n(n),
                s = a(6179),
                c = a.n(s),
                o = a(4906);
            const r = 'Logo_base_1c',
                i = 'Logo_count_75',
                d = 'Logo_glow_4b',
                _ = 'Logo_info_f4',
                m = 'Logo_label_6f',
                u = 'Logo_title_d0',
                v = 'Logo_text_a5',
                g = 'Logo_gradient_60',
                E = 'Logo_gradient__labelTop_1d',
                w = 'Logo_gradient__labelBottom_ed',
                N = 'Logo_gradient__titleTop_4a',
                p = 'Logo_gradient__titleBottom_1e',
                C = 'Logo_description_f9',
                b = R.strings.ny.newYear.challenge.logo,
                y = ({ currentValue: e, totalValue: t, viewType: a, counterType: n, isDescriptionHidden: s }) =>
                    c().createElement(
                        'div',
                        { className: r },
                        void 0 !== e &&
                            void 0 !== t &&
                            c().createElement(
                                'div',
                                { className: i },
                                c().createElement('div', { className: d }),
                                c().createElement(o.A, { currentValue: e, totalValue: t, type: n }),
                            ),
                        c().createElement(
                            'div',
                            { className: _ },
                            c().createElement(
                                'div',
                                { className: m },
                                c().createElement('div', { className: v }, b.label.$dyn(a)),
                                c().createElement('div', { className: l()(g, E) }, b.label.$dyn(a)),
                                c().createElement('div', { className: l()(g, w) }, b.label.$dyn(a)),
                            ),
                            c().createElement(
                                'div',
                                { className: u },
                                c().createElement('div', { className: v }, b.title.$dyn(a)),
                                c().createElement('div', { className: l()(g, N) }, b.title.$dyn(a)),
                                c().createElement('div', { className: l()(g, p) }, b.title.$dyn(a)),
                            ),
                            !s && c().createElement('div', { className: C }, b.description.$dyn(a)),
                        ),
                    );
        },
    },
]);
