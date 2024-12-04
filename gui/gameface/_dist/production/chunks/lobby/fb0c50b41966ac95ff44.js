'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [1282],
    {
        280: (e, t, a) => {
            a.d(t, { z: () => c });
            var n = a(6483),
                l = a.n(n),
                s = a(3649),
                i = a(6179),
                r = a.n(i),
                o = a(5287);
            const c = ({ binding: e, text: t = '', classMix: a, alignment: n = s.v2.left, formatWithBrackets: c }) => {
                if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                const d = c && e ? (0, s.WU)(t, e) : t;
                return r().createElement(
                    i.Fragment,
                    null,
                    d.split('\n').map((t, c) =>
                        r().createElement(
                            'div',
                            { className: l()(o.Z.base, a), key: `${t}-${c}` },
                            (0, s.Uw)(t, n, e).map((e, t) => r().createElement(i.Fragment, { key: `${t}-${e}` }, e)),
                        ),
                    ),
                );
            };
        },
        9766: (e, t, a) => {
            a.d(t, { z: () => n.z });
            var n = a(280);
            a(8082);
        },
        8082: (e, t, a) => {
            a(3649);
        },
        4532: (e, t, a) => {
            a.d(t, { M: () => l });
            var n = a(6179);
            const l = (e, t = []) => {
                const a = (0, n.useRef)(),
                    l = (0, n.useCallback)((...t) => {
                        a.current && a.current(), (a.current = e(...t));
                    }, t);
                return (
                    (0, n.useEffect)(
                        () => () => {
                            a.current && a.current();
                        },
                        [l],
                    ),
                    l
                );
            };
        },
        9155: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ut });
            var n = a(6179),
                l = a.n(n),
                s = a(6483),
                i = a.n(s),
                r = a(2056),
                o = a(9799),
                c = a(3403),
                d = a(2686),
                _ = a(126),
                u = a(7044),
                m = a(7727),
                b = a(2973);
            const v = {
                base: 'RewardKit_base_44',
                content: 'RewardKit_content_0f',
                base__mediumKit: 'RewardKit_base__mediumKit_2b',
                base__premium: 'RewardKit_base__premium_59',
                kit: 'RewardKit_kit_60',
                kit__default: 'RewardKit_kit__default_f4',
                kit__premium: 'RewardKit_kit__premium_ab',
                kit__hoverState: 'RewardKit_kit__hoverState_ee',
                kit__activeState: 'RewardKit_kit__activeState_55',
                counter: 'RewardKit_counter_c9',
                counter__premium: 'RewardKit_counter__premium_b1',
                counter__usual: 'RewardKit_counter__usual_b8',
                value: 'RewardKit_value_72',
                plus: 'RewardKit_plus_e0',
                slideInFadeIn: 'RewardKit_slideInFadeIn_95',
                fadeOut: 'RewardKit_fadeOut_d1',
                fadeIn: 'RewardKit_fadeIn_f3',
                fadeInWithScale: 'RewardKit_fadeInWithScale_1d',
                slideUp: 'RewardKit_slideUp_35',
                scale: 'RewardKit_scale_fa',
                spin: 'RewardKit_spin_27',
                blink: 'RewardKit_blink_b8',
                slideInNotification: 'RewardKit_slideInNotification_e5',
            };
            let g, p;
            !(function (e) {
                (e.Usual = 'usual'), (e.Premium = 'premium'), (e.Default = 'default');
            })(g || (g = {})),
                (function (e) {
                    e.MediumKit = 'mediumKit';
                })(p || (p = {}));
            const E = ({ count: e = 0, type: t = g.Default, size: a, isHoverEnabled: n = !0, classNames: s }) =>
                    l().createElement(
                        'div',
                        {
                            className: i()(
                                v.base,
                                v[`base__${a}`],
                                t === g.Premium && v.base__premium,
                                null == s ? void 0 : s.base,
                            ),
                        },
                        l().createElement(
                            'div',
                            { className: v.content },
                            l().createElement('div', {
                                className: i()(v.kit, v[`kit__${t}`], null == s ? void 0 : s.kit),
                            }),
                            n &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', {
                                        className: i()(v.kit, v[`kit__${t}`], v.kit__hoverState),
                                    }),
                                    l().createElement('div', {
                                        className: i()(v.kit, v[`kit__${t}`], v.kit__activeState),
                                    }),
                                ),
                            e > 0 &&
                                l().createElement(
                                    'div',
                                    { className: i()(v.counter, v[`counter__${t}`], null == s ? void 0 : s.counter) },
                                    e > 999
                                        ? l().createElement(
                                              'div',
                                              { className: v.value },
                                              l().createElement('div', null, 999),
                                              l().createElement('div', { className: v.plus }, '+'),
                                          )
                                        : l().createElement('div', { className: v.value }, e),
                                ),
                        ),
                    ),
                w = 'RewardKitEntry_base_34',
                h = 'RewardKitEntry_base__disabled_f4',
                f = 'RewardKitEntry_shine_28',
                N = 'RewardKitEntry_kit_14',
                C = 'RewardKitEntry_premiumKitsCounter_1d',
                y = 'RewardKitEntry_label_f4',
                M = 'RewardKitEntry_label_text_3c',
                x = 'RewardKitEntry_externalLinkIcon_5b',
                k = 'RewardKitEntry_warning_f2',
                S = 'RewardKitEntry_warning_mask_05',
                U = 'RewardKitEntry_warning_mask__empty_fa',
                L = 'RewardKitEntry_warning_back_17',
                K = 'RewardKitEntry_warning_icon_ed',
                A = 'RewardKitEntry_warning__hasKits_d0',
                I = R.strings.ny.rewardKit,
                F = {
                    width: 250,
                    height: 250,
                    frameCount: 38,
                    chunk: { count: 1, rows: 5, columns: 8 },
                    getChunkPath: () => R.images.gui.maps.icons.newYear.loot_box.sequence.blue_shine.sprite(),
                },
                T = (0, _.q)(F),
                O = ({
                    kitsCount: e,
                    hasNew: t,
                    isDisabled: a,
                    isExternal: n,
                    realm: s,
                    onClick: r,
                    emptyKitType: o = g.Default,
                }) => {
                    const c = s === b.r.Cn,
                        _ = e > 0,
                        v = a ? ((e) => (e ? S : U))(_) : '';
                    return l().createElement(
                        'div',
                        { className: i()(w, a && h) },
                        t &&
                            !a &&
                            l().createElement(d.At, {
                                width: F.width,
                                height: F.height,
                                frameCount: F.frameCount,
                                className: f,
                                frameTime: u.s_ / 16.67,
                                getImageSource: T,
                            }),
                        l().createElement(
                            'div',
                            {
                                className: N,
                                onClick: () => {
                                    (0, m.G)('tabb'), r();
                                },
                                onMouseEnter: () => (0, m.G)(R.sounds.gui_lootbox_hangar_icon_rollover()),
                                onMouseLeave: () => (0, m.G)(R.sounds.gui_lootbox_hangar_icon_rollout()),
                            },
                            e > 0
                                ? l().createElement(
                                      'div',
                                      null,
                                      l().createElement(E, {
                                          type: g.Premium,
                                          count: e,
                                          classNames: { counter: C, base: v },
                                      }),
                                  )
                                : l().createElement(
                                      'div',
                                      null,
                                      l().createElement(E, { type: o, classNames: { kit: v } }),
                                      l().createElement(
                                          'div',
                                          { className: y },
                                          l().createElement(
                                              'div',
                                              { className: M },
                                              c ? R.strings.ny.rewardKitMain.entryView.buyLabelCn() : I.upper.toBoxes(),
                                              n && l().createElement('div', { className: x }),
                                          ),
                                      ),
                                  ),
                        ),
                        a &&
                            l().createElement(
                                'div',
                                { className: i()(k, _ && A) },
                                l().createElement('div', { className: L }),
                                l().createElement('div', { className: K }),
                            ),
                    );
                };
            var H = a(545),
                D = a(6844),
                P = a(3215),
                $ = a(3946),
                j = a(9480);
            const z = (0, P.q)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                glade: e.object('gladeModel'),
                                resourceCollector: e.object('gladeModel.resourceCollector'),
                                rewardKit: e.object('gladeModel.rewardKit'),
                                giftMachineModel: e.object('giftMachineModel'),
                                objectLevelUpModel: e.object('gladeModel.customizationLevelUp'),
                                upgradePrice: e.array('gladeModel.customizationLevelUp.price.items'),
                                maxLevelReward: e.object('gladeModel.maxLevelReward'),
                                widgetModel: e.object('mainMenu.widgetLevelProgress'),
                            },
                            a = (0, $.Om)(() =>
                                'Town' === t.glade.get().tabName
                                    ? o.Mi.AllTown
                                    : t.maxLevelReward.get().isVisible
                                      ? o.Mi.MaxLevelReward
                                      : t.glade.get().tabName === D.J$.Resources
                                        ? o.Mi.Resources
                                        : o.Mi.ToySlots,
                            ),
                            n = (0, $.Om)(() => {
                                const e = t.widgetModel.get();
                                return e.level !== e.maxLevel || t.glade.get().isMaxLevelMessageClosed
                                    ? e.currentPoints !== e.maxPoints
                                        ? o.we.DefaultHangar
                                        : o.we.Default
                                    : o.we.MaxLevel;
                            }),
                            l = (0, $.Om)(() => (0, j.mapExists)(t.upgradePrice.get(), (e) => Object.assign({}, e)));
                        return Object.assign({}, t, {
                            computes: {
                                contentState: a,
                                getAllTownState: n,
                                getUpgradePrice: l,
                                isFirstLevel: (0, $.Om)(() => 1 === t.objectLevelUpModel.get().targetLevel),
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        onMoveSpace: e.createCallback((e) => e, 'gladeModel.onMoveSpace'),
                        onMouseOver3dScene: e.createCallback((e) => e, 'gladeModel.onMouseOver3dScene'),
                        collect: e.createCallbackNoArgs('gladeModel.resourceCollector.onCollect'),
                        hideFinishedStatus: e.createCallbackNoArgs('gladeModel.resourceCollector.onHideFinishedStatus'),
                        openKit: e.createCallbackNoArgs('gladeModel.rewardKit.onOpenKit'),
                        upgradeCurrentObject: e.createCallbackNoArgs('gladeModel.customizationLevelUp.onLevelUp'),
                        onUpgradeAnimationEnd: e.createCallbackNoArgs('gladeModel.customizationLevelUp.onAnimationEnd'),
                        acceptMaxLevelReward: e.createCallbackNoArgs('gladeModel.maxLevelReward.onAccept'),
                        onMaxLevelMessageClosed: e.createCallbackNoArgs('gladeModel.onMaxLevelMessageClosed'),
                        updateContentModel: e.createCallbackNoArgs('gladeModel.onUpdateContentModel'),
                    }),
                ),
                G = z[0],
                B = z[1];
            var W = a(5678),
                V = a(3614),
                Y = a(9916);
            const X = 'AllTown_base_5a',
                q = 'Default_base_a7',
                Z = 'Default_title_38',
                Q = 'Default_description_0c',
                J = () =>
                    l().createElement(
                        'div',
                        { className: q },
                        l().createElement('div', { className: Z }, R.strings.ny.allTown.hello()),
                        l().createElement('div', { className: Q }, R.strings.ny.allTown.defaultHangar()),
                    ),
                ee = 'MaxLevel_base_e0',
                te = 'MaxLevel_close_50',
                ae = () => {
                    const e = B().controls;
                    return l().createElement(
                        'div',
                        { className: ee },
                        R.strings.ny.allTown.maxLevel(),
                        l().createElement('div', {
                            className: te,
                            onMouseEnter: m.$.playHighlight,
                            onClick: () => {
                                e.onMaxLevelMessageClosed(), (0, m.G)(R.sounds.cancelcloseno());
                            },
                        }),
                    );
                },
                ne = (0, c.Pi)(({ state: e, className: t }) => {
                    const a = B().model.glade.get().showCustomizationObjectTooltip;
                    return (
                        (0, n.useEffect)(
                            () => () =>
                                (0, Y.c9)(Y.B0.TOOLTIP, {
                                    contentID: R.views.lobby.new_year.tooltips.NyCustomizationObjectTooltip('resId'),
                                    decoratorID: 0,
                                    isMouseEvent: !0,
                                    on: !a,
                                }),
                            [a],
                        ),
                        l().createElement(
                            'div',
                            { className: i()(X, t) },
                            (() => {
                                switch (e) {
                                    case o.we.MaxLevel:
                                        return l().createElement(ae, null);
                                    case o.we.DefaultHangar:
                                        return l().createElement(J, null);
                                    default:
                                        return null;
                                }
                            })(),
                        )
                    );
                }),
                le = 'App_base_8e',
                se = 'App_sceneWrapper_11',
                ie = 'App_slots_b5',
                re = 'App_maxLevelReward_dd',
                oe = 'App_content_14',
                ce = 'App_content__resources_f7',
                de = 'App_content__disabled_d3',
                _e = 'App_rewardKit_39',
                ue = 'App_upgradeWidget_86',
                me = 'App_upgradeWidget__toysBar_5f';
            let be;
            !(function (e) {
                (e.Available = 'available'),
                    (e.AvailableExtra = 'availableExtra'),
                    (e.Collected = 'collected'),
                    (e.Unavailable = 'unavailable'),
                    (e.UnavailableExtra = 'unavailableExtra'),
                    (e.Finished = 'finished'),
                    (e.FinishedHidden = 'finishedHidden');
            })(be || (be = {}));
            var ve = a(3604),
                ge = a(3457),
                pe = a(3415),
                Ee = a(3269),
                we = a(3138);
            const he = 'Buttons_base_2c',
                fe = 'Buttons_button_2b',
                Ne = 'Buttons_button__triggerHintAnimation_4f',
                Ce = 'Buttons_button__withoutAnimation_3a',
                Re = 'Buttons_text_dc',
                ye = R.strings.ny.resourceCollector.button,
                Me = R.strings.ny.resourceCollectorTooltip,
                xe = [be.Collected, be.Unavailable, be.UnavailableExtra],
                ke = {
                    [be.FinishedHidden]: Ee.V.Finished,
                    [be.Finished]: Ee.V.Finished,
                    [be.UnavailableExtra]: Ee.V.Unavailable,
                    [be.Unavailable]: Ee.V.Unavailable,
                    [be.Available]: Ee.V.Available,
                    [be.AvailableExtra]: Ee.V.AvailableExtra,
                    [be.Collected]: Ee.V.Collected,
                },
                Se = (e) =>
                    e === be.Unavailable || e === be.UnavailableExtra
                        ? { body: Me.description.unavailable(), header: Me.title.unavailable() }
                        : {
                              contentId: R.views.lobby.new_year.tooltips.NyResourceCollectorTooltip('resId'),
                              args: { type: ke[e] },
                          },
                Ue = (0, c.Pi)(() => {
                    const e = B(),
                        t = e.controls,
                        a = e.model.resourceCollector.get(),
                        n = a.collectState,
                        s = a.isTriggerHintAnimationShown,
                        r = xe.includes(n),
                        o = we.O.client.graphicsQuality.isLow();
                    return l().createElement(
                        pe.l,
                        { tooltipArgs: Se(n) },
                        l().createElement(
                            'div',
                            { className: he },
                            l().createElement(
                                ge.u5,
                                {
                                    disabled: r,
                                    onClick: t.collect,
                                    mixClass: i()(fe, s && Ne, o && Ce),
                                    soundClick: 'yes',
                                },
                                l().createElement('span', { className: Re }, ye.collect()),
                            ),
                        ),
                    );
                }),
                Le = {
                    base: 'ResourceCollector_base_d9',
                    base__finishedHidden: 'ResourceCollector_base__finishedHidden_50',
                    background: 'ResourceCollector_background_42',
                    buttons: 'ResourceCollector_buttons_29',
                };
            var Ke = a(3032),
                Ae = a(944),
                Ie = a(9766),
                Fe = a(406);
            const Te = {
                    base: 'Status_base_bc',
                    text: 'Status_text_e3',
                    icon: 'Status_icon_eb',
                    icon__availableExtra: 'Status_icon__availableExtra_c5',
                    icon__unavailableExtra: 'Status_icon__unavailableExtra_ff',
                    icon__collected: 'Status_icon__collected_2b',
                    countdownTime: 'Status_countdownTime_03',
                    slideInFadeIn: 'Status_slideInFadeIn_08',
                    fadeOut: 'Status_fadeOut_50',
                    fadeIn: 'Status_fadeIn_77',
                    fadeInWithScale: 'Status_fadeInWithScale_bb',
                    slideUp: 'Status_slideUp_1a',
                    scale: 'Status_scale_05',
                    spin: 'Status_spin_68',
                    blink: 'Status_blink_53',
                    slideInNotification: 'Status_slideInNotification_e3',
                },
                Oe = R.strings.ny.resourceCollector,
                He = (e) => {
                    switch (e) {
                        case be.Unavailable:
                            return Oe.status.available();
                        case be.UnavailableExtra:
                            return Oe.status.availableExtra();
                        default:
                            return Oe.status.$dyn(e);
                    }
                },
                De = (0, c.Pi)(() => {
                    const e = B().model.resourceCollector.get(),
                        t = e.collectState,
                        a = e.cooldown,
                        n = e.baseCollectAmount,
                        s = e.extraCollectAmount,
                        r = e.skippedDays;
                    return l().createElement(
                        'div',
                        { className: i()(Te.base, Te[`base__${t}`]) },
                        l().createElement(Fe.B, {
                            text: He(t),
                            binding: {
                                icon: l().createElement('div', { className: i()(Te.icon, Te[`icon__${t}`]) }),
                                skippedDays: l().createElement(Ie.z, {
                                    text: Oe.$plural('days', r),
                                    binding: { amount: r },
                                }),
                                collectAmount: n,
                                collectAmountExtra: s,
                                timer: l().createElement(Ae.Z, {
                                    duration: a,
                                    icon: Ke.ls.None,
                                    style: Ke.o_.Description,
                                    classNames: { text: Te.countdownTime },
                                }),
                            },
                            className: Te.text,
                        }),
                    );
                }),
                Pe = R.strings.ny.resourceCollector.status,
                $e = (0, c.Pi)(() => {
                    const e = B(),
                        t = e.model,
                        a = e.controls,
                        n = t.resourceCollector.get().collectState,
                        s = n === be.Finished || n === be.FinishedHidden;
                    return l().createElement(
                        'div',
                        { className: i()(Le.base, Le[`base__${n}`]) },
                        l().createElement('div', { className: Le.background }),
                        s
                            ? l().createElement(ve.x, { text: Pe.finished(), onClose: a.hideFinishedStatus })
                            : l().createElement(
                                  l().Fragment,
                                  null,
                                  l().createElement(De, null),
                                  l().createElement('div', { className: Le.buttons }, l().createElement(Ue, null)),
                              ),
                    );
                }),
                je = (0, c.Pi)(() => {
                    const e = B().model.computes;
                    switch (e.contentState()) {
                        case o.Mi.AllTown:
                            return l().createElement(ne, { state: e.getAllTownState() });
                        case o.Mi.Resources:
                            return l().createElement($e, null);
                        default:
                            return l().createElement(
                                W.j,
                                { options: { context: 'model.gladeModel.toySlotsBar' } },
                                l().createElement(V.W, { className: ie, isHidden: e.isFirstLevel() }),
                            );
                    }
                });
            var ze = a(9690),
                Ge = a(3649);
            const Be = 'Congratulations_base_91',
                We = 'Congratulations_title_4c',
                Ve = 'Congratulations_description_e6',
                Ye = R.strings.ny.maxLevelReached,
                Xe = (0, c.Pi)(() => {
                    const e = B().model.maxLevelReward.get(),
                        t = e.objectType,
                        a = e.level,
                        n = e.toysCount,
                        s = (0, Ge.uF)(String(Ye.title.$dyn(t)), { level: (0, ze.HG)(a), toysCount: n });
                    return l().createElement(
                        'div',
                        { className: Be },
                        l().createElement('div', { className: We }, s),
                        l().createElement('div', { className: Ve }, Ye.description()),
                    );
                }),
                qe = 'MaxLevelReward_base_14',
                Ze = 'MaxLevelReward_button_30',
                Qe = R.strings.ny.maxLevelReached,
                Je = (0, c.Pi)(({ className: e }) => {
                    const t = B(),
                        a = t.controls,
                        n = t.model.maxLevelReward.get().objectType;
                    return l().createElement(
                        'div',
                        { className: i()(qe, e) },
                        l().createElement(Xe, null),
                        l().createElement(
                            ge.u5,
                            { size: ge.qE.medium, type: ge.L$.primary, onClick: a.acceptMaxLevelReward, mixClass: Ze },
                            Qe.buttons.accept.$dyn(n),
                        ),
                    );
                });
            var et = a(5959),
                tt = a(5332),
                at = a(3874),
                nt = a(4254);
            const lt = {
                base: 'Upgrade_base_a6',
                base__hide: 'Upgrade_base__hide_01',
                base__levelUp: 'Upgrade_base__levelUp_9d',
                shine: 'Upgrade_shine_cd',
                rotate: 'Upgrade_rotate_7e',
                base__active: 'Upgrade_base__active_ee',
                base__hover: 'Upgrade_base__hover_38',
                background: 'Upgrade_background_1f',
                inner: 'Upgrade_inner_66',
                base__initial: 'Upgrade_base__initial_5d',
                content: 'Upgrade_content_93',
                title: 'Upgrade_title_6d',
                triggerHintAnimation: 'Upgrade_triggerHintAnimation_a4',
                blink: 'Upgrade_blink_d3',
                slide: 'Upgrade_slide_21',
                base__highPreset: 'Upgrade_base__highPreset_b9',
                arrow: 'Upgrade_arrow_36',
                base__triggerHintAnimation: 'Upgrade_base__triggerHintAnimation_e0',
                arrowGlow: 'Upgrade_arrowGlow_2b',
                separator: 'Upgrade_separator_0b',
                priceGroup: 'Upgrade_priceGroup_ea',
                price__notEnough: 'Upgrade_price__notEnough_be',
                price: 'Upgrade_price_c7',
                icon: 'Upgrade_icon_8f',
            };
            let st;
            !(function (e) {
                (e.Initial = 'initial'), (e.Active = 'active'), (e.LevelUp = 'levelUp');
            })(st || (st = {}));
            const it = (0, c.Pi)(({ className: e, isHidden: t = !1 }) => {
                const a = B(),
                    s = a.model,
                    r = a.controls,
                    c = s.objectLevelUpModel.get(),
                    d = c.object,
                    _ = c.targetLevel,
                    u = c.isEnoughToBuy,
                    b = c.isTriggerHintAnimationShown,
                    v = s.computes.getUpgradePrice(),
                    g = s.glade.get(),
                    p = g.isConverterOpened,
                    E = g.animationLevelUpState,
                    w = g.isTabSwitching,
                    h = s.computes.isFirstLevel(),
                    f = (0, n.useState)(st.Initial),
                    N = f[0],
                    C = f[1],
                    y = (0, n.useState)(!1),
                    M = y[0],
                    x = y[1],
                    k = et.graphicsQuality.isHigh(),
                    S = (0, tt.N)(
                        () => {
                            u &&
                                !w &&
                                ((0, m.G)(R.sounds.hangar_newyear_level_post_up()),
                                (0, m.G)(R.sounds.yes()),
                                r.upgradeCurrentObject());
                        },
                        [w, r, u],
                        400,
                        !0,
                    );
                return (
                    (0, n.useEffect)(() => {
                        C(p || h || u ? st.Active : st.Initial);
                    }, [p, u, h]),
                    (0, n.useEffect)(() => {
                        E === o.n.Customization
                            ? C(st.LevelUp)
                            : N === st.LevelUp && E === o.n.Idle && C(u ? st.Active : st.Initial);
                    }, [E, u, N]),
                    l().createElement(
                        'div',
                        {
                            className: i()(
                                lt.base,
                                {
                                    [lt.base__hover]: M,
                                    [lt.base__hide]: t,
                                    [lt.base__highPreset]: k,
                                    [lt.base__triggerHintAnimation]: b && u,
                                },
                                lt[`base__${N}`],
                                e,
                            ),
                            onMouseEnter: () => {
                                x(!0), M || (0, m.G)(R.sounds.hangar_newyear_lvl_up_widget_hover());
                            },
                            onMouseLeave: () => {
                                x(!1);
                            },
                            onClick: S,
                            style: { '--animationDuration': `${at.e[at.f.ShowArrows].duration}ms` },
                        },
                        l().createElement(
                            'div',
                            { className: lt.arrow },
                            k && l().createElement('div', { className: lt.arrowGlow }),
                            b &&
                                u &&
                                k &&
                                l().createElement(
                                    'div',
                                    { className: lt.triggerHintAnimation },
                                    l().createElement('div', { className: lt.blink }),
                                ),
                        ),
                        l().createElement(
                            'div',
                            { className: lt.inner },
                            l().createElement('div', { className: lt.background }),
                            k && l().createElement('div', { className: lt.shine }),
                            l().createElement(
                                'div',
                                { className: lt.content },
                                l().createElement(
                                    'div',
                                    { className: lt.title },
                                    u && d
                                        ? ((e, t) =>
                                              (0, Ge.uF)(R.strings.ny.upgrade.title.$dyn(e.toLowerCase()), {
                                                  level: (0, ze.HG)(t),
                                              }))(d, _)
                                        : R.strings.ny.upgrade.title.notEnough(),
                                ),
                                l().createElement('div', { className: lt.separator }),
                                l().createElement(
                                    'div',
                                    { className: lt.priceGroup },
                                    v.map((e, t) =>
                                        l().createElement(nt._z, {
                                            key: t,
                                            value: e.value,
                                            type: e.currency,
                                            classNames: {
                                                base: lt.price,
                                                value: i()(e.isEnough || lt.price__notEnough),
                                                icon: lt.icon,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    )
                );
            });
            var rt = a(122),
                ot = a(7522),
                ct = a(7030);
            const dt = (0, c.Pi)(({ children: e, classNames: t }) => {
                    const a = B(),
                        s = a.model,
                        r = a.controls,
                        o = s.glade.get().isTabSwitching,
                        c = (0, ct.useSpring)(() => ({
                            config: { duration: 1e3, easing: ot.Z.easeInOutCubic },
                            from: { opacity: 1 },
                        })),
                        d = c[0],
                        _ = c[1];
                    return (
                        (0, n.useEffect)(() => {
                            if (o)
                                return (
                                    _.start({ opacity: 0 }),
                                    (0, rt.F)(() => {
                                        r.updateContentModel();
                                    }, 1e3)
                                );
                            _.start({ opacity: 1 });
                        }, [_, r, o]),
                        l().createElement(
                            ct.animated.div,
                            {
                                style: d,
                                className: i()(null == t ? void 0 : t.base, o && (null == t ? void 0 : t.disabled)),
                            },
                            e,
                        )
                    );
                }),
                _t = (0, c.Pi)(() => {
                    const e = B(),
                        t = e.model,
                        a = e.controls,
                        s = t.glade.get().isShowLevelUp,
                        c = t.maxLevelReward.get().isVisible,
                        d = (0, n.useState)(!1),
                        _ = d[0],
                        u = d[1],
                        m = t.rewardKit.get(),
                        b = m.kitsCount,
                        v = m.hasNew,
                        g = m.isDisabled,
                        p = m.isExternal,
                        E = m.realm,
                        w = t.computes.contentState() === o.Mi.Resources;
                    return (
                        (0, n.useEffect)(() => {
                            c || a.updateContentModel();
                        }, [a, c]),
                        l().createElement(
                            'div',
                            { className: le },
                            l().createElement(
                                'div',
                                { className: se },
                                l().createElement(H.w, {
                                    moveSpace: a.onMoveSpace,
                                    onMouseOver3dScene: a.onMouseOver3dScene,
                                    onDragStateChange: u,
                                }),
                            ),
                            t.computes.contentState() === o.Mi.MaxLevelReward
                                ? l().createElement(Je, { className: re })
                                : l().createElement(
                                      l().Fragment,
                                      null,
                                      l().createElement(
                                          dt,
                                          { classNames: { base: i()(oe, w && ce), disabled: de } },
                                          l().createElement(
                                              'div',
                                              { className: i()(ue, !t.computes.isFirstLevel() && me) },
                                              s && l().createElement(it, { isHidden: _ }),
                                          ),
                                          l().createElement(je, null),
                                      ),
                                      l().createElement(
                                          r.u,
                                          {
                                              contentId:
                                                  R.views.lobby.new_year.tooltips.NyRewardKitsUnavailableTooltip(
                                                      'resId',
                                                  ),
                                              isEnabled: g,
                                          },
                                          l().createElement(
                                              'div',
                                              { className: _e },
                                              l().createElement(O, {
                                                  kitsCount: b,
                                                  hasNew: v,
                                                  realm: E,
                                                  isDisabled: g,
                                                  isExternal: p,
                                                  onClick: a.openKit,
                                              }),
                                          ),
                                      ),
                                  ),
                        )
                    );
                }),
                ut = () => l().createElement(G, null, l().createElement(_t, null));
        },
        3604: (e, t, a) => {
            a.d(t, { x: () => d });
            var n = a(514),
                l = a(6179),
                s = a.n(l),
                i = a(406);
            const r = 'FinishedMessage_base_3a',
                o = 'FinishedMessage_text_01',
                c = 'FinishedMessage_close_07',
                d = ({ onClose: e, text: t }) =>
                    s().createElement(
                        'div',
                        { className: r },
                        s().createElement(i.B, { className: o, text: t }),
                        s().createElement('div', {
                            className: c,
                            onClick: () => {
                                n.hY.sound(R.sounds.cancelcloseno()), e();
                            },
                            onMouseEnter: () => n.hY.sound(R.sounds.highlight()),
                        }),
                    );
        },
        545: (e, t, a) => {
            a.d(t, { w: () => d });
            var n = a(6483),
                l = a.n(n),
                s = a(6179),
                i = a.n(s);
            const r = 'SceneWrapper_base_85',
                o = 'SceneWrapper_base__down_fc',
                c = 'SceneWrapper_base__moveSpaceDisabled_67',
                d = ({
                    children: e,
                    moveSpace: t,
                    onMouseOver3dScene: a,
                    onDragStateChange: n,
                    isMoveSpaceEnabled: d = !0,
                }) => {
                    const _ = (0, s.useState)(!1),
                        u = _[0],
                        m = _[1],
                        b = (0, s.useState)({ x: 0, y: 0 }),
                        v = b[0],
                        g = b[1],
                        p = (0, s.createRef)(),
                        E = (0, s.useCallback)(() => {
                            m(!1), null == n || n(!1);
                        }, [n]);
                    (0, s.useEffect)(
                        () => (window.addEventListener('mouseup', E), () => window.removeEventListener('mouseup', E)),
                        [E],
                    );
                    const w = (0, s.useCallback)(
                            (e) => {
                                if (!p.current) return;
                                const t = p.current.getBoundingClientRect(),
                                    a = t.width,
                                    n = t.height;
                                return !(
                                    0 === e.clientX ||
                                    0 === e.clientY ||
                                    e.clientX >= a - 1 ||
                                    e.clientY >= n - 1
                                );
                            },
                            [p],
                        ),
                        h = (0, s.useCallback)(
                            (e) => {
                                e.preventDefault(),
                                    0 === e.button &&
                                        w(e) &&
                                        d &&
                                        (m(!0), null == n || n(!0), g({ x: e.clientX, y: e.clientY }));
                            },
                            [w, d, n],
                        ),
                        f = (0, s.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), u)) {
                                    if (!w(e)) return;
                                    const a = e.clientX !== v.x ? e.clientX - v.x : 0,
                                        n = e.clientY !== v.y ? e.clientY - v.y : 0;
                                    g({ x: e.clientX, y: e.clientY }), t({ dx: a, dy: n, dz: 0 });
                                }
                            },
                            [w, u, v.x, v.y, t],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                if ((e.preventDefault(), !d || !w(e))) return;
                                const a = e.deltaY < 0;
                                t({ dx: 0, dy: 0, dz: a ? -600 : 600 });
                            },
                            [w, d, t],
                        ),
                        C = (0, s.useCallback)(() => {
                            m(!1), null == n || n(!1);
                        }, [n]),
                        R = (0, s.useCallback)(
                            (e) => {
                                0 === e.buttons && u && (m(!1), null == n || n(!1)), a({ isOver3dScene: !0 });
                            },
                            [n, a, u],
                        ),
                        y = (0, s.useCallback)(() => {
                            a({ isOver3dScene: !1 });
                        }, [a]);
                    return i().createElement(
                        'div',
                        {
                            ref: p,
                            className: l()(r, u && o, !d && c),
                            onMouseDown: h,
                            onMouseMove: f,
                            onMouseUp: C,
                            onWheel: N,
                            onMouseOver: R,
                            onMouseOut: y,
                        },
                        e,
                    );
                };
        },
        5287: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { base: 'FormatText_base_d0' };
        },
    },
]);
