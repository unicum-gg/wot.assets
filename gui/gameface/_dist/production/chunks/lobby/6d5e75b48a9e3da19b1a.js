'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [3522],
    {
        8521: (e, a, t) => {
            (t.r(a), t.d(a, { default: () => xa }));
            var s = t(6179),
                r = t.n(s),
                n = t(6483),
                l = t.n(n),
                o = t(2608),
                c = t(3403),
                i = t(4906),
                d = t(3572);
            let m, u;
            (!(function (e) {
                ((e[(e.Active = 0)] = 'Active'),
                    (e[(e.Completed = 1)] = 'Completed'),
                    (e[(e.JustCompleted = 2)] = 'JustCompleted'),
                    (e[(e.InTransition = 3)] = 'InTransition'),
                    (e[(e.Locked = 4)] = 'Locked'));
            })(m || (m = {})),
                (function (e) {
                    ((e.Main = 'main'), (e.Advanced = 'advanced'));
                })(u || (u = {})));
            var _ = t(3215),
                g = t(4598),
                p = t(9480),
                v = t(3946),
                b = t(3768);
            const E = 0,
                C = 1,
                w = (0, _.q)()(
                    ({ observableModel: e }) => {
                        const a = {
                                root: e.object(),
                                tournamentCelebrityModel: e.object('tournamentCelebrityModel'),
                                challengeCards: e.array('tournamentCelebrityModel.challengeCards'),
                                upcomingCards: e.array('tournamentCelebrityModel.upcomingCards'),
                                promoAdvancedCard: e.array('tournamentCelebrityModel.promoAdvancedCard'),
                                progressRewards: e.array('tournamentCelebrityModel.progressRewards'),
                            },
                            t = (0, v.Om)(() => a.challengeCards.get().length),
                            s = (0, v.Om)(() =>
                                p.map(a.challengeCards.get(), (e) => {
                                    const a = e.state,
                                        t = e.isCumulative,
                                        s = e.currentProgress,
                                        r = e.finalProgress,
                                        n = e.goalValue,
                                        l = (() => {
                                            if (t) return s;
                                            return a === m.Completed || a === m.JustCompleted ? C : E;
                                        })(),
                                        o = t ? (n === r ? n : r) : C;
                                    return Object.assign({}, e, {
                                        currentProgress: l,
                                        finalProgress: o,
                                        rewards: p.map(e.rewards, (e) => Object.assign({}, e)),
                                    });
                                }),
                            ),
                            r = (0, v.Om)(() => {
                                const e = [],
                                    a = [];
                                return (
                                    s().forEach((t) => {
                                        t.state === m.Completed && t.cardType === u.Main ? e.push(t) : a.push(t);
                                    }),
                                    [...e, ...a]
                                );
                            }),
                            n = (0, v.Om)(
                                (e) => {
                                    var a, t;
                                    return null != (a = null == (t = p.get(r(), e)) ? void 0 : t.rewards) ? a : [];
                                },
                                { equals: g.jv },
                            ),
                            l = (0, v.Om)(() =>
                                p.mapExists(a.upcomingCards.get(), (e) =>
                                    Object.assign({}, e, { rewards: p.map(e.rewards, (e) => Object.assign({}, e)) }),
                                ),
                            ),
                            o = (0, v.Om)(
                                (e) => {
                                    var a, t;
                                    return null != (a = null == (t = p.get(l(), e)) ? void 0 : t.rewards) ? a : [];
                                },
                                { equals: g.jv },
                            ),
                            c = (0, v.Om)(() =>
                                p.mapExists(a.promoAdvancedCard.get(), (e) =>
                                    Object.assign({}, e, { rewards: p.map(e.rewards, (e) => Object.assign({}, e)) }),
                                ),
                            ),
                            i = (0, v.Om)(
                                (e) => {
                                    var a, t;
                                    return null != (a = null == (t = p.get(c(), e)) ? void 0 : t.rewards) ? a : [];
                                },
                                { equals: g.jv },
                            ),
                            d = (0, v.Om)(() =>
                                p.map(a.progressRewards.get(), (e) => {
                                    return Object.assign({}, e, {
                                        rewards:
                                            ((t = e.rewards),
                                            p.reduce(
                                                t,
                                                (e, a) => (
                                                    (0, b.px)(a)
                                                        ? (e.discount = Object.assign({}, a))
                                                        : (e.common = Object.assign({}, a)),
                                                    e
                                                ),
                                                {},
                                            )),
                                        isCompleted:
                                            a.tournamentCelebrityModel.get().completedQuestsQuantity >= e.rewardLevel,
                                    });
                                    var t;
                                }),
                            );
                        return Object.assign({}, a, {
                            computes: {
                                getCardsLength: t,
                                getQuestsRewards: n,
                                getProgressionRewards: d,
                                getSortedCards: r,
                                getUpcomingCards: l,
                                getUpcomingRewards: o,
                                getPromoAdvancedCards: c,
                                getPromoAdvancedRewards: i,
                                getTimeTill: (0, v.Om)(() => a.tournamentCelebrityModel.get().timeTill),
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        showStylePreview: e.createCallback(
                            (e) => ({ intCD: e }),
                            'tournamentCelebrityModel.onStylePreviewShow',
                        ),
                        replace: e.createCallback((e) => ({ token: e }), 'tournamentCelebrityModel.onReplace'),
                        visit: e.createCallback((e) => ({ token: e }), 'tournamentCelebrityModel.onVisited'),
                        updateTimeTill: e.createCallbackNoArgs('tournamentCelebrityModel.onUpdateTimeTill'),
                    }),
                ),
                y = w[0],
                P = w[1];
            var N = t(5415),
                h = t(9158),
                f = t(2776),
                k = t(6373),
                x = t(514),
                M = t(2344),
                I = t(5032);
            const T = {
                base: 'ChallengeCard_base_d0',
                base__animated: 'ChallengeCard_base__animated_13',
                pulse: 'ChallengeCard_pulse_74',
                marker: 'ChallengeCard_marker_e8',
                backgroundBox: 'ChallengeCard_backgroundBox_de',
                background: 'ChallengeCard_background_af',
                info__locked: 'ChallengeCard_info__locked_9b',
            };
            var A = t(2372),
                O = t(9766),
                L = t(7506);
            const S = 'RewardList_base_33',
                Q = 'RewardList_item_c5',
                j = 'RewardList_rewardInfo_69',
                B = ({ rewards: e, className: a }) => {
                    const t = (0, N.GS)().mediaSize >= N.cJ.Large ? b.$u.Big : b.$u.Small;
                    return r().createElement(
                        'div',
                        { className: l()(S, a) },
                        e.map((e, a) =>
                            r().createElement(
                                'div',
                                { className: Q, key: `${e.name}_${a}` },
                                r().createElement(L.Q, { bonusModel: e, size: t, classNames: { info: j } }),
                            ),
                        ),
                    );
                },
                V = 'Info_base_8f',
                D = 'Info_inner_b1',
                z = 'Info_base__animated_8f',
                J = 'Info_progress_fb',
                q = 'Info_descriptionBox_27',
                Y = 'Info_description_d0',
                $ = 'Info_accentText_af',
                U = 'Info_rewardWrapper_6c',
                Z = 'Info_rewardWrapper__completed_23';
            var F = t(2308);
            const G = 'Progress_base_9b',
                W = 'Progress_progressInfo_4e',
                H = 'Progress_icon_2d',
                X = 'Progress_progress_8c',
                K = 'Progress_currentProgress_45',
                ee = 'Progress_progressBar_0e',
                ae = ({ isActive: e, icon: a, currentProgress: t, finalProgress: s, className: n }) =>
                    r().createElement(
                        'div',
                        { className: l()(G, n) },
                        r().createElement(
                            'div',
                            { className: W },
                            r().createElement('div', {
                                className: H,
                                style: {
                                    backgroundImage: `url(R.images.gui.maps.icons.quests.battleCondition.c_90.icon_battle_condition_${a}_90x90)`,
                                },
                            }),
                            r().createElement(
                                'div',
                                { className: X },
                                e
                                    ? r().createElement(O.z, {
                                          text: R.strings.ny.progress.default(),
                                          binding: {
                                              value: r().createElement(
                                                  'div',
                                                  { className: K },
                                                  r().createElement(A.A, { value: t }),
                                              ),
                                              maxValue: r().createElement(A.A, { value: s }),
                                          },
                                      })
                                    : r().createElement(A.A, { value: s }),
                            ),
                        ),
                        e &&
                            r().createElement(
                                'div',
                                { className: ee },
                                r().createElement(F.ko, { size: F.$u.Small, value: t, maxValue: s }),
                            ),
                    ),
                te = (0, c.Pi)(
                    ({
                        index: e,
                        icon: a,
                        description: t,
                        goalValue: s,
                        currentProgress: n,
                        finalProgress: o,
                        state: c,
                        className: i,
                    }) => {
                        const d = P().model.computes.getQuestsRewards;
                        return r().createElement(
                            'div',
                            { className: l()(V, c === m.InTransition && z, i) },
                            r().createElement(
                                'div',
                                { className: D },
                                r().createElement(ae, {
                                    isActive: c === m.Active || c === m.InTransition,
                                    icon: a,
                                    currentProgress: n,
                                    finalProgress: o,
                                    className: J,
                                }),
                                r().createElement(
                                    'div',
                                    { className: q },
                                    r().createElement(O.z, {
                                        classMix: Y,
                                        text: t,
                                        binding: {
                                            goal: r().createElement(
                                                'div',
                                                { className: $ },
                                                r().createElement(A.A, { value: s }),
                                            ),
                                        },
                                    }),
                                ),
                            ),
                            r().createElement(B, {
                                rewards: d(e),
                                className: l()(U, (c === m.Completed || c === m.JustCompleted) && Z),
                            }),
                        );
                    },
                );
            var se = t(1596),
                re = t(3415),
                ne = t(7727);
            const le = 'Replacement_base_0d',
                oe = 'Replacement_base__disabled_e4',
                ce = 'Replacement_disabledPattern_da',
                ie = 'Replacement_text_8f',
                de = 'Replacement_icon_c3',
                me = R.strings.ny.newYear.challenge.card;
            let ue;
            !(function (e) {
                ((e[(e.ReplacementsAvailable = 0)] = 'ReplacementsAvailable'),
                    (e[(e.ReplacementsMissing = 1)] = 'ReplacementsMissing'),
                    (e[(e.ReplacementsLocked = 2)] = 'ReplacementsLocked'),
                    (e[(e.VehicleInBattle = 3)] = 'VehicleInBattle'));
            })(ue || (ue = {}));
            const _e = (e) => {
                    switch (e) {
                        case ue.VehicleInBattle:
                            return { body: me.replacementTooltip.vehicleInBattle() };
                        case ue.ReplacementsMissing:
                            return { contentId: R.views.lobby.new_year.tooltips.NyReplacementTimerTooltip('resId') };
                        case ue.ReplacementsAvailable:
                            return {
                                contentId: R.views.lobby.new_year.tooltips.NyReplacementTimerTooltip('resId'),
                                args: { isAvailable: !0 },
                            };
                        default:
                            return { isEnabled: !1 };
                    }
                },
                ge = (0, c.Pi)(({ token: e, onMouseEnter: a, onMouseLeave: t }) => {
                    const n = P(),
                        o = n.model,
                        c = n.controls,
                        i = o.tournamentCelebrityModel.get(),
                        d = i.replacementsQuantity,
                        m = i.isVehicleInBattle,
                        u = i.isReplaceLocked,
                        _ = c.replace,
                        g = (0, s.useState)(ue.ReplacementsMissing),
                        p = g[0],
                        v = g[1],
                        b = p !== ue.ReplacementsAvailable;
                    (0, s.useEffect)(() => {
                        v(
                            u
                                ? ue.ReplacementsLocked
                                : m && d > 0
                                  ? ue.VehicleInBattle
                                  : d > 0
                                    ? ue.ReplacementsAvailable
                                    : ue.ReplacementsMissing,
                        );
                    }, [d, m, u]);
                    return r().createElement(
                        'div',
                        {
                            className: l()(le, b && oe),
                            onClick: () => {
                                b || (_(e), (0, ne.G)(R.sounds.yes()), null == t || t());
                            },
                            onMouseEnter: () => {
                                b || ((0, ne.G)(R.sounds.highlight()), null == a || a());
                            },
                            onMouseLeave: b ? void 0 : t,
                        },
                        r().createElement('div', { className: ce }),
                        r().createElement('div', { className: ie }, d),
                        r().createElement(re.l, { tooltipArgs: _e(p) }, r().createElement('div', { className: de })),
                    );
                }),
                pe = 'Status_base_1c',
                ve = 'Status_replacement_5c',
                be = 'Status_replacement__animated_63',
                Ee = ({ state: e, token: a, onMouseEnter: t, onMouseLeave: s }) =>
                    r().createElement(
                        'div',
                        { className: pe },
                        (() => {
                            switch (e) {
                                case m.Completed:
                                case m.JustCompleted:
                                case m.Locked:
                                    return r().createElement(se.L, {
                                        iconType: e === m.Locked ? se.s.Lock : se.s.Check,
                                        hasIconAnimation: e === m.JustCompleted,
                                    });
                                case m.Active:
                                case m.InTransition:
                                    return r().createElement(
                                        'div',
                                        { className: l()(ve, e === m.InTransition && be) },
                                        r().createElement(ge, { token: a, onMouseEnter: t, onMouseLeave: s }),
                                    );
                                default:
                                    return (console.error('Unknown state ', e), null);
                            }
                        })(),
                    );
            function Ce() {
                return (
                    (Ce = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                              }
                              return e;
                          }),
                    Ce.apply(null, arguments)
                );
            }
            const we = R.strings.ny.newYear.challenge.card,
                ye = (0, c.Pi)(({ info: e, token: a, isVisited: t, cardType: n = u.Main }) => {
                    var o;
                    const c = P().controls.visit,
                        i = (0, s.useState)(!1),
                        d = i[0],
                        _ = i[1],
                        g = e.state,
                        p = e.index,
                        v = g === m.Completed || g === m.JustCompleted,
                        b = null != (o = (0, M.D9)(g)) ? o : g;
                    return (
                        (0, s.useEffect)(() => {
                            b === m.InTransition && x.hY.sound('hangar_newyear_level_post_down');
                        }, [b]),
                        r().createElement(
                            I.hE,
                            {
                                className: l()(T.base, g === m.InTransition && T.base__animated),
                                state: v ? I.ve.Disabled : I.ve.Default,
                                isHovered: g !== m.Locked && d,
                                onMouseEnter: () => _(!0),
                                onMouseLeave: () => _(!1),
                            },
                            r().createElement(
                                k.i,
                                { body: we.locked(), isEnabled: g === m.Locked },
                                r().createElement(
                                    'div',
                                    {
                                        onMouseEnter: () => {
                                            t || c(a);
                                        },
                                    },
                                    !t && r().createElement('div', { className: T.marker }),
                                    n === u.Advanced &&
                                        r().createElement(
                                            'div',
                                            { className: T.backgroundBox },
                                            r().createElement('div', { className: T.background }),
                                        ),
                                    r().createElement(
                                        te,
                                        Ce({}, e, {
                                            index: p,
                                            className: l()(T.info, g === m.Locked && T.info__locked),
                                        }),
                                    ),
                                    r().createElement(Ee, { state: g, token: a }),
                                ),
                            ),
                        )
                    );
                });
            var Pe = t(406);
            const Ne = 'PromoCard_base_2b',
                he = 'PromoCard_title_61',
                Re = 'PromoCard_descriptionBox_d2',
                fe = 'PromoCard_description_0a',
                ke = 'PromoCard_backgroundBox_74',
                xe = 'PromoCard_background_e5',
                Me = R.strings.ny.newYear.challenge.promoCard,
                Ie = (0, c.Pi)(({ index: e, className: a }) => {
                    const t = P().model,
                        s = t.tournamentCelebrityModel.get(),
                        n = s.questsQuantity,
                        o = s.advancedQuestsQuantity,
                        c = t.computes.getPromoAdvancedRewards;
                    return r().createElement(
                        I.hE,
                        { state: I.ve.Disabled },
                        r().createElement(
                            'div',
                            { className: l()(Ne, a) },
                            r().createElement('div', { className: ke }, r().createElement('div', { className: xe })),
                            r().createElement('div', { className: he }, Me.title()),
                            r().createElement(
                                'div',
                                { className: Re },
                                r().createElement(Pe.B, {
                                    className: fe,
                                    text: Me.description(),
                                    binding: { questsQuantity: n, advancedQuestsQuantity: o },
                                }),
                            ),
                            r().createElement(B, { rewards: c(e) }),
                            r().createElement(se.L, { iconType: se.s.Lock }),
                        ),
                    );
                });
            var Te = t(7044),
                Ae = t(3649);
            const Oe = 'Timer_base_01',
                Le = 'Timer_icon_e2',
                Se = R.strings.ny.newYear.challenge.card,
                Qe = (0, c.Pi)(({ extraDaysCount: e }) => {
                    const a = P(),
                        t = a.model,
                        n = a.controls,
                        l = t.computes.getTimeTill,
                        o = (0, Te.f8)(e ? l() + e * Te.s2 : l()),
                        c = o.days,
                        i = o.hours,
                        d = o.minutes;
                    return (
                        (0, s.useEffect)(() => {
                            const e = setInterval(() => n.updateTimeTill(), 1e4);
                            return () => {
                                clearInterval(e);
                            };
                        }, [n]),
                        r().createElement(
                            'div',
                            { className: Oe },
                            r().createElement('div', { className: Le }),
                            c > 0
                                ? (0, Ae.uF)(Se.timerDays(), { days: c, hours: i })
                                : i > 0
                                  ? (0, Ae.uF)(Se.timerHours(), { hours: i, minutes: d })
                                  : d > 0
                                    ? (0, Ae.uF)(Se.timerMinutes(), { minutes: d })
                                    : Se.lessMinute(),
                        )
                    );
                }),
                je = {
                    base: 'TemporaryCard_base_d6',
                    inner: 'TemporaryCard_inner_ce',
                    timer: 'TemporaryCard_timer_e3',
                    text: 'TemporaryCard_text_a8',
                },
                Be = R.strings.ny.newYear.challenge.temporaryCard,
                Ve = (0, c.Pi)(({ index: e }) => {
                    const a = P().model.computes.getUpcomingRewards;
                    return r().createElement(
                        I.hE,
                        { state: I.ve.Empty },
                        r().createElement(
                            'div',
                            { className: je.base },
                            r().createElement(
                                'div',
                                { className: je.inner },
                                r().createElement(
                                    'div',
                                    { className: je.timer },
                                    r().createElement(Qe, { extraDaysCount: e }),
                                ),
                                r().createElement('div', { className: je.text }, Be.description()),
                            ),
                            r().createElement(B, { rewards: a(e), className: je.rewardWrapper }),
                        ),
                    );
                }),
                De = 'ChallengeList_base_31',
                ze = 'ChallengeList_item_98';
            function Je() {
                return (
                    (Je = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var a = 1; a < arguments.length; a++) {
                                  var t = arguments[a];
                                  for (var s in t) ({}).hasOwnProperty.call(t, s) && (e[s] = t[s]);
                              }
                              return e;
                          }),
                    Je.apply(null, arguments)
                );
            }
            const qe = (0, c.Pi)(() => {
                const e = P().model.computes,
                    a = e.getSortedCards,
                    t = e.getUpcomingCards,
                    s = e.getPromoAdvancedCards,
                    n = (0, N.GS)().mediaSize >= N.cJ.ExtraLarge ? 2 : 1;
                return r().createElement(
                    'div',
                    { className: De },
                    a().map((e, a) =>
                        r().createElement(
                            'div',
                            { key: a, className: ze },
                            r().createElement(ye, Je({}, e, { info: Object.assign({}, e, { index: a }) })),
                        ),
                    ),
                    t().map((e, a) => {
                        if (!(a + 1 > n))
                            return r().createElement(
                                'div',
                                { key: a, className: ze },
                                r().createElement(Ve, { index: a }),
                            );
                    }),
                    s().map((e, a) =>
                        r().createElement('div', { key: a, className: ze }, r().createElement(Ie, { index: a })),
                    ),
                );
            });
            var Ye = t(5607);
            const $e = (0, c.Pi)(() => {
                    const e = P().model.tournamentCelebrityModel.get(),
                        a = e.maxQuestsQuantity,
                        t = e.completedQuestsQuantity,
                        s = (0, N.GS)().mediaSize,
                        n = (0, h.SH)(s),
                        l = n.cardOffset,
                        o = n.cardWidth + l;
                    return r().createElement(
                        'div',
                        { className: Ye.Z.base },
                        r().createElement(
                            'div',
                            { className: Ye.Z.inner },
                            r().createElement(f.w, {
                                startPosition: t === a ? 0 : o * t,
                                content: r().createElement(
                                    'div',
                                    { className: Ye.Z.content },
                                    r().createElement(qe, null),
                                ),
                            }),
                        ),
                    );
                }),
                Ue = 'Progression_base_4a',
                Ze = 'Progression_item_54',
                Fe = 'Progression_gap_20',
                Ge = 'Progression_circle_e4',
                We = 'Progression_circle__completed_ea';
            var He = t(7522),
                Xe = t(3138),
                Ke = t(7030);
            const ea = 'ProgressionRewards_base_53',
                aa = 'ProgressionRewards_reward_32',
                ta = 'ProgressionRewards_reward__discount_12',
                sa = 'ProgressionRewards_base__completed_01',
                ra = 'ProgressionRewards_reward__withPopover_79',
                na = 'ProgressionRewards_base__discountApplied_2b',
                la = 'ProgressionRewards_reward__common_c2',
                oa = 'ProgressionRewards_reward__style_66',
                ca = 'ProgressionRewards_blink_a8',
                ia = 'ProgressionRewards_loupe_8e',
                da = 'ProgressionRewards_rewardInfo_05',
                ma = 'ProgressionRewards_check_ee',
                ua = {
                    from: { x: '-105rem', y: '0rem', rotateZ: '60deg' },
                    to: { x: '105rem', y: '0rem', rotateZ: '60deg' },
                    delay: 2e3,
                    config: { duration: 1500, easing: He.Z.easeOutCubic },
                },
                _a = (0, c.Pi)(({ level: e, rewards: a, styleRewardIndex: t, isCompleted: n }) => {
                    var o, c, i;
                    const d = P(),
                        m = d.model,
                        u = d.controls,
                        _ = m.tournamentCelebrityModel.get().discountPopoverId,
                        g = (0, s.useState)(!0),
                        p = g[0],
                        v = g[1],
                        E = (0, Ke.useSpring)(
                            () =>
                                Object.assign(
                                    {
                                        onChange: (e) => {
                                            const a = e.value.x,
                                                t = a ? Number(a.split('rem')[0]) : 0;
                                            (!p && t > 100 && w.stop(),
                                                p && 105 === t && w.start(Object.assign({}, ua)));
                                        },
                                    },
                                    ua,
                                ),
                            [p],
                        ),
                        C = E[0],
                        w = E[1],
                        y = _ === (null == a || null == (o = a.discount) ? void 0 : o.variadicID),
                        N = (null == (c = a.common) ? void 0 : c.index) === t,
                        h = null == (i = a.discount) ? void 0 : i.selectedVehicle,
                        f = Xe.O.client.graphicsQuality.isLow();
                    return r().createElement(
                        'div',
                        { className: l()(ea, n && sa, h && na) },
                        a.common &&
                            r().createElement(
                                'div',
                                {
                                    className: l()(aa, la, N && oa),
                                    onClick: () => {
                                        null != a &&
                                            a.common &&
                                            N &&
                                            (x.hY.sound(R.sounds.hangar_newyear_hud_side_click()),
                                            u.showStylePreview(a.common.intCD));
                                    },
                                    onMouseEnter: () => N && x.hY.sound(R.sounds.highlightx()),
                                },
                                r().createElement(L.Q, {
                                    classNames: { info: da },
                                    bonusModel: a.common,
                                    size: b.$u.Small,
                                    level: e,
                                    isFlexable: !0,
                                }),
                                N && r().createElement('div', { className: ia }),
                            ),
                        a.discount &&
                            r().createElement(
                                'div',
                                {
                                    className: l()(aa, ta, y && ra),
                                    onMouseEnter: () => v(!1),
                                    onMouseLeave: () => v(!0),
                                },
                                r().createElement(L.Q, {
                                    bonusModel: a.discount,
                                    size: b.$u.Small,
                                    level: e,
                                    isCurrentProgressionCompleted: n,
                                    isProgressionReward: !0,
                                    isFlexable: !0,
                                    options: { disabled: !n, isPopoverOpened: y },
                                }),
                                h && r().createElement('div', { className: ma }),
                                n &&
                                    !a.discount.selectedVehicle &&
                                    !f &&
                                    !y &&
                                    r().createElement(Ke.animated.div, { className: ca, style: C }),
                            ),
                    );
                }),
                ga = 'ProgressionItem_base_b2',
                pa = 'ProgressionItem_levelBox_a3',
                va = 'ProgressionItem_level_f3',
                ba = 'ProgressionItem_base__completed_d5',
                Ea = 'ProgressionItem_rewards_c1',
                Ca = ({ level: e, isCompleted: a, rewards: t, styleRewardIndex: s }) =>
                    r().createElement(
                        'div',
                        { className: l()(ga, a && ba) },
                        r().createElement('div', { className: pa }, r().createElement('div', { className: va }, e)),
                        r().createElement(
                            'div',
                            { className: Ea },
                            r().createElement(_a, { level: e, rewards: t, styleRewardIndex: s, isCompleted: a }),
                        ),
                    ),
                wa = (0, c.Pi)(() => {
                    const e = P().model.computes.getProgressionRewards;
                    return r().createElement(
                        'div',
                        { className: Ue },
                        e().map((e, a) => {
                            const t = e.rewardLevel,
                                s = e.rewards,
                                n = e.styleRewardIndex,
                                o = e.isCompleted;
                            return r().createElement(
                                'div',
                                { className: Ze, key: t },
                                0 !== a &&
                                    r().createElement(
                                        'div',
                                        { className: Fe },
                                        r().createElement('div', { className: l()(Ge, o && We) }),
                                    ),
                                r().createElement(Ca, { level: t, rewards: s, styleRewardIndex: n, isCompleted: o }),
                            );
                        }),
                    );
                }),
                ya = 'App_base_b6',
                Pa = 'App_progressBar_7d',
                Na = 'App_logo_15',
                ha = 'App_logo__advanced_23',
                Ra = 'App_content_85',
                fa = (0, c.Pi)(() => {
                    const e = P().model,
                        a = e.root.get().viewState,
                        t = e.tournamentCelebrityModel.get(),
                        s = t.maxQuestsQuantity,
                        n = t.completedQuestsQuantity,
                        c = t.questsQuantity,
                        m = a === o.X.Tournament && n >= c;
                    return r().createElement(
                        'div',
                        { className: ya },
                        r().createElement(
                            'div',
                            { className: l()(Na, m && ha) },
                            r().createElement(d.T, {
                                viewType: m ? o.X.Advanced : a,
                                currentValue: n,
                                totalValue: s,
                                counterType: m ? i.e.Advanced : i.e.Challenge,
                            }),
                        ),
                        r().createElement(
                            'div',
                            { className: Ra },
                            r().createElement($e, null),
                            r().createElement('div', { className: Pa }, r().createElement(wa, null)),
                        ),
                    );
                }),
                ka = { context: 'model.challengeModel' },
                xa = () => r().createElement(y, { options: ka }, r().createElement(fa, null));
        },
    },
]);
