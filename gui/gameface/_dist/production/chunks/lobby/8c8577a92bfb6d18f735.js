'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [1193],
    {
        3457: (e, t, s) => {
            s.d(t, { L$: () => c.L, qE: () => c.q, u5: () => m });
            var a = s(6483),
                n = s.n(a),
                o = s(7727),
                l = s(6179),
                r = s.n(l),
                i = s(6880),
                c = s(2106);
            const u = ({
                children: e,
                size: t,
                isFocused: s,
                type: a,
                disabled: u,
                mixClass: m,
                soundHover: d,
                soundClick: _,
                onMouseEnter: b,
                onMouseMove: p,
                onMouseDown: C,
                onMouseUp: v,
                onMouseLeave: g,
                onClick: E,
            }) => {
                const y = (0, l.useRef)(null),
                    h = (0, l.useState)(s),
                    N = h[0],
                    f = h[1],
                    B = (0, l.useState)(!1),
                    w = B[0],
                    k = B[1];
                return (
                    (0, l.useEffect)(() => {
                        function e(e) {
                            N && null !== y.current && !y.current.contains(e.target) && f(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [N]),
                    (0, l.useEffect)(() => {
                        f(s);
                    }, [s]),
                    r().createElement(
                        'div',
                        {
                            ref: y,
                            className: n()(
                                i.Z.base,
                                i.Z[`base__${a}`],
                                u && i.Z.base__disabled,
                                t && i.Z[`base__${t}`],
                                N && i.Z.base__focus,
                                w && i.Z.base__highlightActive,
                                m,
                            ),
                            onMouseEnter: function (e) {
                                u || (null !== d && (0, o.G)(d), b && b(e));
                            },
                            onMouseMove: function (e) {
                                p && p(e);
                            },
                            onMouseUp: function (e) {
                                u || (v && v(e), k(!1));
                            },
                            onMouseDown: function (e) {
                                u ||
                                    (null !== _ && (0, o.G)(_),
                                    C && C(e),
                                    s && (u || (y.current && (y.current.focus(), f(!0)))),
                                    k(!0));
                            },
                            onMouseLeave: function (e) {
                                u || (g && g(e), k(!1));
                            },
                            onClick: function (e) {
                                u || (E && E(e));
                            },
                        },
                        a !== c.L.ghost &&
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement('div', { className: i.Z.back }),
                                r().createElement('span', { className: i.Z.texture }),
                            ),
                        r().createElement(
                            'span',
                            { className: n()(i.Z.state, i.Z.state__default) },
                            r().createElement('span', { className: i.Z.stateDisabled }),
                            r().createElement('span', { className: i.Z.stateHighlightHover }),
                            r().createElement('span', { className: i.Z.stateHighlightActive }),
                        ),
                        r().createElement(
                            'span',
                            { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            u.defaultProps = { type: c.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const m = u;
        },
        2106: (e, t, s) => {
            let a, n;
            (s.d(t, { L: () => a, q: () => n }),
                (function (e) {
                    ((e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost'));
                })(a || (a = {})),
                (function (e) {
                    ((e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'));
                })(n || (n = {})));
        },
        2145: (e, t, s) => {
            s.d(t, { O: () => m });
            var a = s(3457),
                n = s(6179),
                o = s.n(n);
            const l = 'EmptyScreen_base_7d',
                r = 'EmptyScreen_inner_4d',
                i = 'EmptyScreen_title_32',
                c = 'EmptyScreen_description_fb',
                u = 'EmptyScreen_button_65',
                m = ({ title: e, description: t, buttonText: s, onClick: n }) =>
                    o().createElement(
                        'div',
                        { className: l },
                        o().createElement(
                            'div',
                            { className: r },
                            o().createElement('div', { className: i }, e),
                            o().createElement('div', { className: c }, t),
                            o().createElement(
                                'div',
                                { className: u },
                                o().createElement(a.u5, { type: a.L$.primary, size: a.qE.medium, onClick: n }, s),
                            ),
                        ),
                    );
        },
        1193: (e, t, s) => {
            (s.r(t), s.d(t, { default: () => qe }));
            var a = s(6179),
                n = s.n(a),
                o = s(6483),
                l = s.n(o),
                r = s(3403),
                i = s(2145),
                c = s(4906),
                u = s(3572),
                m = s(2608);
            let d;
            !(function (e) {
                ((e[(e.Locked = 0)] = 'Locked'),
                    (e[(e.Active = 1)] = 'Active'),
                    (e[(e.Completed = 2)] = 'Completed'),
                    (e[(e.JustCompleted = 3)] = 'JustCompleted'));
            })(d || (d = {}));
            var _ = s(3215),
                b = s(4598),
                p = s(3946),
                C = s(6808),
                v = s(9480);
            let g;
            !(function (e) {
                ((e.Locked = 'locked'),
                    (e.Available = 'available'),
                    (e.NotEnough = 'notEnough'),
                    (e.Completed = 'completed'),
                    (e.WalletDisabled = 'walletDisabled'));
            })(g || (g = {}));
            const E = (0, _.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                questsCelebrityModel: e.object('questsCelebrityModel'),
                                questsCelebrity: e.array('questsCelebrityModel.questsCelebrity'),
                                economicBonuses: e.array('questsCelebrityModel.economicBonuses'),
                            },
                            s = (0, p.Om)(() => {
                                const e = t.questsCelebrityModel.get().isWalletAvailable,
                                    s = (t, s) =>
                                        t === d.Active
                                            ? e
                                                ? s
                                                    ? g.NotEnough
                                                    : g.Available
                                                : g.WalletDisabled
                                            : t === d.Completed || t === d.JustCompleted
                                              ? g.Completed
                                              : g.Locked;
                                return (0, v.mapExists)(t.questsCelebrity.get(), (e) => {
                                    const t = e.state,
                                        a = e.isNotEnough;
                                    return Object.assign({}, e, {
                                        state: s(t, a),
                                        hasCompleteAnimation: t === d.JustCompleted,
                                        resource: e.resource,
                                        rewards: C.Wt.map(e.rewards, (e) => Object.assign({}, e)),
                                    });
                                });
                            }),
                            a = (0, p.Om)(() => t.root.get().viewState === m.X.GuestC),
                            n = (0, p.Om)(
                                (e) => {
                                    var t, a;
                                    return null != (t = null == (a = C.Wt.get(s(), e)) ? void 0 : a.rewards) ? t : [];
                                },
                                { equals: b.jv },
                            ),
                            o = (0, p.Om)(() =>
                                C.Wt.map(t.economicBonuses.get(), (e) =>
                                    Object.assign({}, e, { bonusName: e.bonusName }),
                                ),
                            );
                        return Object.assign({}, t, {
                            computes: {
                                getQuestsCelebrity: s,
                                getQuestsRewards: n,
                                isQuestsCompleted: (0, p.Om)(
                                    () =>
                                        t.questsCelebrityModel.get().completedQuestsQuantity ===
                                        t.questsCelebrityModel.get().totalQuestsQuantity,
                                ),
                                getEconomicBonuses: o,
                                isAdditionalGuest: a,
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        buyQuest: e.createCallback((e) => ({ id: e }), 'questsCelebrityModel.onBuyQuest'),
                        openActivity: e.createCallback((e) => ({ id: e }), 'questsCelebrityModel.onOpenActivity'),
                        showStylePreview: e.createCallback(
                            (e) => ({ intCD: e }),
                            'questsCelebrityModel.onShowStylePreview',
                        ),
                        goToGlade: e.createCallbackNoArgs('questsCelebrityModel.onGoToGlade'),
                        updateBonus: e.createCallbackNoArgs('questsCelebrityModel.onUpdateBonus'),
                    }),
                ),
                y = E[0],
                h = E[1],
                N = 'Bonus_base_e6',
                f = 'Bonus_bonusMissing_f0',
                B = 'Bonus_accentText_b5';
            var w = s(2056),
                k = s(5433),
                M = s(122),
                Q = s(9766),
                A = s(9916);
            const q = 'BonusItem_base_98',
                S = 'BonusItem_icon_bd',
                I = 'BonusItem_text_bb',
                x = 'BonusItem_accent_75',
                G = R.strings.ny.newYear.challenge.quests.bonus,
                L = ({ type: e, current: t, total: s }) => {
                    const a = { backgroundImage: `url(R.images.gui.maps.icons.newYear.vehicles.bonuses.${e})` };
                    return n().createElement(
                        'div',
                        { className: q },
                        n().createElement('div', { className: S, style: a }),
                        n().createElement(Q.z, {
                            classMix: I,
                            text: G.bonus(),
                            binding: {
                                currentValue: n().createElement(
                                    'div',
                                    { className: x },
                                    A.Z5.getRealFormat(t, A.Gr.WO_ZERO_DIGITS),
                                ),
                                totalValue: s,
                            },
                        }),
                    );
                },
                D = {
                    base: 'BonusContent_base_fc',
                    shine: 'BonusContent_shine_9f',
                    base__show: 'BonusContent_base__show_55',
                    inner: 'BonusContent_inner_ae',
                    base__hide: 'BonusContent_base__hide_19',
                    holder: 'BonusContent_holder_8d',
                    label: 'BonusContent_label_f5',
                    bonusItem: 'BonusContent_bonusItem_88',
                    infoIcon: 'BonusContent_infoIcon_15',
                },
                O = R.strings.ny.newYear.challenge.quests.bonus;
            let H;
            !(function (e) {
                ((e.Initial = 'initial'), (e.HidePreviousBonus = 'hide'), (e.ShowCurrentBonus = 'show'));
            })(H || (H = {}));
            const Z = (0, r.Pi)(() => {
                    const e = h(),
                        t = e.model,
                        s = e.controls,
                        o = t.questsCelebrityModel.get(),
                        r = o.currentActiveBonus,
                        i = o.maxActiveBonus,
                        c = o.isBonusAnimated,
                        u = (0, t.computes.getEconomicBonuses)(),
                        m = (0, a.useState)(H.Initial),
                        d = m[0],
                        _ = m[1];
                    ((0, a.useEffect)(() => {
                        if (c) return (0, M.F)(() => _(H.HidePreviousBonus), 300);
                    }, [c]),
                        (0, a.useEffect)(() => {
                            switch (d) {
                                case H.HidePreviousBonus:
                                    return (0, M.F)(() => {
                                        (_(H.ShowCurrentBonus), s.updateBonus());
                                    }, 500);
                                case H.ShowCurrentBonus:
                                    return (0, M.F)(() => _(H.Initial), 500);
                                default:
                                    return;
                            }
                        }, [d, s]));
                    return n().createElement(
                        w.u,
                        {
                            contentId: R.views.lobby.new_year.tooltips.NyEconomicBonusTooltip('resId'),
                            args: { isMaxBonus: !0 },
                        },
                        n().createElement(
                            'div',
                            { className: l()(D.base, D[`base__${d}`]), style: { '--duration': '500ms' } },
                            n().createElement('div', { className: D.shine }),
                            n().createElement(
                                'div',
                                { className: D.inner },
                                n().createElement(
                                    'div',
                                    { className: D.holder },
                                    n().createElement('div', { className: D.label }, O.active()),
                                    n().createElement(
                                        'div',
                                        { className: D.bonusItem },
                                        n().createElement(L, { type: k.xU.Credits, current: r, total: i }),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: D.holder },
                                    n().createElement('div', { className: D.label }, O.choice()),
                                    u.map(({ bonusName: e, bonusValue: t, maxBonus: s }, a) =>
                                        n().createElement(
                                            'div',
                                            { key: a, className: D.bonusItem },
                                            n().createElement(L, { type: e, current: t, total: s }),
                                        ),
                                    ),
                                    n().createElement('div', { className: D.infoIcon }),
                                ),
                            ),
                        ),
                    );
                }),
                P = R.strings.ny.newYear.challenge.quests.bonusMissing,
                T = (0, r.Pi)(() => {
                    const e = h().model.computes,
                        t = e.isQuestsCompleted,
                        s = e.isAdditionalGuest;
                    return n().createElement(
                        'div',
                        { className: N },
                        s()
                            ? n().createElement(
                                  'div',
                                  { className: f },
                                  t()
                                      ? n().createElement('div', { className: B }, P.questsCompleted())
                                      : n().createElement(n().Fragment, null, P.description(), P.remark()),
                              )
                            : n().createElement(Z, null),
                    );
                });
            var W = s(5415),
                F = s(5607),
                $ = s(9158),
                j = s(2776),
                Y = s(3415),
                z = s(5332),
                U = s(7727),
                V = s(5032),
                J = s(889),
                X = s(1596),
                K = s(4254),
                ee = s(514),
                te = s(7314),
                se = s(7506),
                ae = s(3768);
            const ne = 'Info_base_cc',
                oe = 'Info_description_56',
                le = 'Info_rewardWrapper_6d',
                re = 'Info_reward_97',
                ie = 'Info_reward__clickable_0b',
                ce = 'Info_loupe_22',
                ue = R.strings.ny.guestQuest,
                me = (0, r.Pi)(({ id: e, index: t, state: s, className: a }) => {
                    const o = h(),
                        r = o.model,
                        i = o.controls,
                        c = r.computes.getQuestsRewards;
                    return n().createElement(
                        'div',
                        { className: l()(ne, a) },
                        n().createElement(
                            'div',
                            { className: oe },
                            s === g.Completed ? ue.mainDescriptionCompleted() : ue.description.$dyn(e),
                        ),
                        n().createElement(
                            'div',
                            { className: le },
                            c(t).map((t, a) => {
                                const o = 'style' === t.icon;
                                return n().createElement(
                                    'div',
                                    {
                                        className: l()(re, o && ie),
                                        key: `${t.name}_${a}`,
                                        onClick: (a) => {
                                            ((t, a, n, o) => {
                                                s === g.Completed && (0, te.$N)(t)
                                                    ? (i.openActivity(e),
                                                      ee.hY.sound(R.sounds.hangar_newyear_hud_side_click()))
                                                    : n &&
                                                      (i.showStylePreview(a),
                                                      ee.hY.sound(R.sounds.hangar_newyear_hud_side_click()),
                                                      o.stopPropagation());
                                            })(t.name, t.intCD, o, a);
                                        },
                                        onMouseEnter: () =>
                                            ((e, t) => {
                                                ((s === g.Completed && (0, te.$N)(e)) || t) &&
                                                    ee.hY.sound(R.sounds.highlightx());
                                            })(t.name, o),
                                    },
                                    n().createElement(se.Q, {
                                        isFlexable: !0,
                                        bonusModel: t,
                                        activityRewardOptions: {
                                            isClickable: s === g.Completed && t.name !== ae.pS.Decoration,
                                        },
                                    }),
                                    o && n().createElement('div', { className: ce }),
                                );
                            }),
                        ),
                    );
                }),
                de = {
                    base: 'QuestCard_base_51',
                    content: 'QuestCard_content_64',
                    base__locked: 'QuestCard_base__locked_1d',
                    buttonWrapper: 'QuestCard_buttonWrapper_e2',
                    button: 'QuestCard_button_bd',
                    base__notEnough: 'QuestCard_base__notEnough_50',
                    base__walletDisabled: 'QuestCard_base__walletDisabled_5c',
                    footer: 'QuestCard_footer_3d',
                    price: 'QuestCard_price_43',
                },
                _e = R.strings.ny.newYear.challenge.quests,
                be = (e, t, s) => {
                    switch (e) {
                        case g.NotEnough:
                            return {
                                contentId: R.views.lobby.new_year.tooltips.NyMarketLackTheResTooltip('resId'),
                                args: { resourceType: t, price: s },
                            };
                        case g.WalletDisabled:
                            return {
                                header: _e.tooltip.title.walletDisabled(),
                                body: _e.tooltip.body.walletDisabled(),
                            };
                        default:
                            return { isEnabled: !1 };
                    }
                },
                pe = (0, r.Pi)(
                    ({
                        id: e,
                        index: t,
                        price: s,
                        resource: o,
                        state: r,
                        hasCompleteAnimation: i,
                        isTriggerHintAnimationShown: c,
                    }) => {
                        const u = h().controls,
                            m = (0, a.useState)(!1),
                            d = m[0],
                            _ = m[1],
                            b = r !== g.Locked && r !== g.Completed,
                            p = (0, z.N)(
                                () => {
                                    r === g.Available && ((0, U.G)(R.sounds.yes()), u.buyQuest(e));
                                },
                                [e, r],
                                200,
                                !0,
                            );
                        return n().createElement(
                            V.hE,
                            {
                                className: l()(de.base, de[`base__${r}`]),
                                state: b ? V.ve.Default : V.ve.Disabled,
                                isHovered: d,
                                withHintAnimation: b && c,
                            },
                            n().createElement(me, { id: e, index: t, state: r, className: de.content }),
                            b
                                ? n().createElement(
                                      Y.l,
                                      { className: de.buttonWrapper, tooltipArgs: be(r, o, s) },
                                      n().createElement(
                                          'div',
                                          {
                                              className: de.button,
                                              onClick: p,
                                              onMouseEnter: () => {
                                                  r === g.Available && ((0, U.G)(R.sounds.highlight()), _(!0));
                                              },
                                              onMouseLeave: () => r === g.Available && _(!1),
                                          },
                                          n().createElement(
                                              J.e,
                                              { className: de.footer },
                                              n().createElement(K._z, {
                                                  type: o,
                                                  size: K.q4.s24,
                                                  value: s,
                                                  isReverse: !0,
                                                  isNotEnough: r === g.NotEnough,
                                                  classNames: { value: de.price },
                                              }),
                                          ),
                                      ),
                                  )
                                : n().createElement(X.L, {
                                      iconType: r === g.Completed ? X.s.Check : X.s.Lock,
                                      hasIconAnimation: i,
                                  }),
                        );
                    },
                ),
                Ce = 'QuestList_base_cc',
                ve = 'QuestList_item_13';
            function ge() {
                return (
                    (ge = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var s = arguments[t];
                                  for (var a in s) ({}).hasOwnProperty.call(s, a) && (e[a] = s[a]);
                              }
                              return e;
                          }),
                    ge.apply(null, arguments)
                );
            }
            const Ee = (0, r.Pi)(() => {
                    const e = h().model.computes.getQuestsCelebrity;
                    return n().createElement(
                        'div',
                        { className: Ce },
                        e().map((e, t) =>
                            n().createElement(
                                'div',
                                { className: ve, key: t },
                                n().createElement(pe, ge({}, e, { index: t })),
                            ),
                        ),
                    );
                }),
                ye = (0, r.Pi)(() => {
                    const e = h().model,
                        t = e.questsCelebrityModel.get().completedQuestsQuantity,
                        s = (0, W.GS)().mediaSize,
                        a = (0, $.SH)(s),
                        o = a.cardOffset,
                        l = a.cardWidth + o;
                    return n().createElement(
                        'div',
                        { className: F.Z.base },
                        n().createElement(j.w, {
                            startPosition: e.computes.isQuestsCompleted() ? 0 : l * t,
                            content: n().createElement('div', { className: F.Z.content }, n().createElement(Ee, null)),
                        }),
                    );
                }),
                he = 'Content_base_14',
                Ne = 'Content_base__guestUnavailable_87',
                fe = 'Content_inner_2a',
                Be = 'Content_content_73',
                we = 'Content_bonus_2a',
                ke = 'Content_logo_ed',
                Me = R.strings.ny.guestQuest.unavailable,
                Qe = (0, r.Pi)(() => {
                    const e = h(),
                        t = e.model,
                        s = e.controls,
                        a = t.computes,
                        o = t.root.get().viewState,
                        r = t.questsCelebrityModel.get(),
                        m = r.totalQuestsQuantity,
                        d = r.completedQuestsQuantity,
                        _ = r.hasGuestC,
                        b = a.isAdditionalGuest() && !_;
                    return n().createElement(
                        'div',
                        { className: l()(he, b && Ne) },
                        b
                            ? n().createElement(i.O, {
                                  title: Me.title(),
                                  description: Me.description(),
                                  buttonText: Me.button(),
                                  onClick: s.goToGlade,
                              })
                            : n().createElement(
                                  'div',
                                  { className: fe },
                                  n().createElement(
                                      'div',
                                      { className: ke },
                                      n().createElement(u.T, {
                                          currentValue: d,
                                          totalValue: m,
                                          viewType: o,
                                          counterType: c.e.Quest,
                                      }),
                                  ),
                                  n().createElement(
                                      'div',
                                      { className: Be },
                                      n().createElement(ye, { key: o }),
                                      n().createElement('div', { className: we }, n().createElement(T, null)),
                                  ),
                              ),
                    );
                }),
                Ae = 'QuestScreen_base_bd',
                qe = () =>
                    n().createElement(
                        y,
                        { options: { context: 'model.challengeModel' } },
                        n().createElement('div', { className: Ae }, n().createElement(Qe, null)),
                    );
        },
        889: (e, t, s) => {
            s.d(t, { e: () => u });
            var a = s(6483),
                n = s.n(a),
                o = s(6179),
                l = s.n(o);
            const r = 'CardFooter_base_56',
                i = 'CardFooter_glow_61',
                c = 'CardFooter_content_52',
                u = ({ children: e, hasHover: t = !1, className: s }) =>
                    l().createElement(
                        'div',
                        { className: n()(r, s) },
                        t && l().createElement('div', { className: i }),
                        l().createElement('div', { className: c }, e),
                    );
        },
        6880: (e, t, s) => {
            s.d(t, { Z: () => a });
            const a = {
                base: 'CButton_base_40',
                base__main: 'CButton_base__main_42',
                base__primary: 'CButton_base__primary_7f',
                base__primaryGreen: 'CButton_base__primaryGreen_6f',
                base__primaryRed: 'CButton_base__primaryRed_ec',
                base__secondary: 'CButton_base__secondary_50',
                base__ghost: 'CButton_base__ghost_ed',
                base__extraSmall: 'CButton_base__extraSmall_27',
                base__small: 'CButton_base__small_df',
                base__medium: 'CButton_base__medium_74',
                base__large: 'CButton_base__large_5c',
                base__disabled: 'CButton_base__disabled_d9',
                back: 'CButton_back_e5',
                texture: 'CButton_texture_fe',
                state: 'CButton_state_11',
                base__focus: 'CButton_base__focus_83',
                stateHighlightHover: 'CButton_stateHighlightHover_ff',
                stateHighlightActive: 'CButton_stateHighlightActive_35',
                stateDisabled: 'CButton_stateDisabled_54',
                base__highlightActive: 'CButton_base__highlightActive_b2',
                content: 'CButton_content_cc',
            };
        },
    },
]);
