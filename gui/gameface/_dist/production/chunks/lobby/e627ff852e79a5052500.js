'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [805],
    {
        9390: (e, t, a) => {
            (a.r(t), a.d(t, { default: () => on }));
            var n = a(7363),
                s = a.n(n),
                r = a(6483),
                o = a.n(r),
                i = a(3415),
                l = a(8432),
                c = a(974),
                m = a(5959),
                _ = a(5415),
                g = a(2039),
                d = a(7727),
                u = a(3649),
                p = a(4593),
                b = a(3403);
            let h, v, y, f, S;
            (!(function (e) {
                ((e.Click = 'click'), (e.Display = 'display'));
            })(h || (h = {})),
                (function (e) {
                    ((e.Hangar = 'hangar'), (e.Catalog = 'catalog'));
                })(v || (v = {})),
                (function (e) {
                    ((e.Mouse = 'mouse'), (e.Esc = 'esc'));
                })(y || (y = {})),
                (function (e) {
                    ((e.AnotherPlayer = 'another_player_click'),
                        (e.TriggerHint = 'trigger_hint'),
                        (e.Close = 'close_button'),
                        (e.Catalog = 'catalog_button'),
                        (e.TankName = 'tank_name_single_achievement'),
                        (e.Breadcrumbs = 'bread_crumb'));
                })(f || (f = {})),
                (function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(S || (S = {})));
            let E;
            !(function (e) {
                ((e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed'));
            })(E || (E = {}));
            const x = 'metrics',
                w = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: s }) => ({
                    item: t,
                    partnerID: e || null,
                    parent_screen: a || null,
                    item_state: n || null,
                    additional_info: s || null,
                }),
                N = (e, t) => {
                    const a = (0, n.useCallback)(
                        (a, n = S.Info, s) => {
                            (s || (s = {}),
                                Object.keys(s).length >= 200 ||
                                    window.uiLoggerModel.log({
                                        feature: e,
                                        group: t,
                                        action: a,
                                        logLevel: n,
                                        params: JSON.stringify(s),
                                    }));
                        },
                        [e, t],
                    );
                    return (e, t, n) => a(e, t, n);
                },
                A = () => {
                    const e = ((e) => {
                        const t = N(e, x),
                            a = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, w(e));
                                },
                                [t],
                            );
                        return (e) => a(e);
                    })('advanced_achievement');
                    return (t, a) =>
                        e({
                            action: h.Click,
                            parentScreen: v.Hangar,
                            item: t,
                            info: JSON.stringify({ posX: a.clientX, posY: a.clientY }),
                        });
                },
                C = {
                    base: 'AdvancedAchievement_base_03',
                    base__s100x100: 'AdvancedAchievement_base__s100x100_52',
                    base__s128x128: 'AdvancedAchievement_base__s128x128_d3',
                    base__s180x180: 'AdvancedAchievement_base__s180x180_10',
                    base__s280x280: 'AdvancedAchievement_base__s280x280_ac',
                    base__s360x360: 'AdvancedAchievement_base__s360x360_c6',
                    base__s420x420: 'AdvancedAchievement_base__s420x420_8a',
                    base__flexable: 'AdvancedAchievement_base__flexable_4f',
                    background: 'AdvancedAchievement_background_cf',
                    border: 'AdvancedAchievement_border_5d',
                    icon: 'AdvancedAchievement_icon_bb',
                    base__shield: 'AdvancedAchievement_base__shield_68',
                    icon__bottom: 'AdvancedAchievement_icon__bottom_57',
                    base__circular: 'AdvancedAchievement_base__circular_2d',
                    icon__top: 'AdvancedAchievement_icon__top_2d',
                    stage: 'AdvancedAchievement_stage_fa',
                };
            var k = a(7888);
            let $;
            !(function (e) {
                ((e.Single = 'single'), (e.Cumulative = 'cumulative'), (e.Staged = 'staged'));
            })($ || ($ = {}));
            const P = R.images.gui.maps.icons.advanced_achievements,
                I = { [$.Single]: k.bn.Circular, [$.Staged]: k.bn.Circular, [$.Cumulative]: k.bn.Shield },
                z = {
                    [k.sg.S100x100]: k.Bw.s52x44,
                    [k.sg.S128x128]: k.Bw.s68x56,
                    [k.sg.S180x180]: k.Bw.s94x80,
                    [k.sg.S280x280]: k.Bw.s144x116,
                    [k.sg.S360x360]: k.Bw.s218x176,
                    [k.sg.S420x420]: k.Bw.s218x176,
                    [k.sg.Flexable]: k.Bw.s218x176,
                },
                O = {
                    [k.sg.S100x100]: k.Bw.s54x60,
                    [k.sg.S128x128]: k.Bw.s68x76,
                    [k.sg.S180x180]: k.Bw.s94x108,
                    [k.sg.S280x280]: k.Bw.s148x168,
                    [k.sg.S360x360]: k.Bw.s192x216,
                    [k.sg.S420x420]: k.Bw.s228x256,
                    [k.sg.Flexable]: k.Bw.s228x256,
                },
                B = (e, t, a, n) => {
                    switch (e) {
                        case k.bn.Shield:
                            return { backgroundImage: `url(${P.borders.shield.$dyn(`tier_${n}_${t}`)})` };
                        case k.bn.Circular:
                        default:
                            return {
                                backgroundImage: `url(${P.borders.circular.$dyn(a ? `circular_trophy_${t}` : `circular_${t}`)})`,
                            };
                    }
                },
                M = (e, t, a, n) => {
                    switch (e) {
                        case k.bn.Shield:
                            return { backgroundImage: `url(${P.backgrounds.shield.$dyn(`${n}_${t}`)})` };
                        case k.bn.Circular:
                        default:
                            return {
                                backgroundImage: `url(${P.backgrounds.circular.$dyn(a ? `trophy_${t}` : `${n}_${t}`)})`,
                            };
                    }
                },
                G = (e, t, a, n, s, r) => {
                    const o = a ? '_trophy' : '',
                        i = e === k.bn.Shield ? `_tier_${s}` : '',
                        l = ((e) => (e === c.Em.PersonalMissions ? O : z))(r),
                        m = l[t],
                        _ = ((e, t) => {
                            if (t === k.sg.S360x360 && e === k.Bw.s218x176) return { width: 188, height: 150 };
                            const a = e.substring(1).split('x');
                            return { width: a[0], height: a[1] };
                        })(m, t),
                        g = _.width,
                        d = _.height,
                        u = P.icons.$dyn(`${n}${o}${i}_${m}`);
                    return u
                        ? { backgroundImage: `url(${u})`, width: `${g}rem`, height: `${d}rem` }
                        : { width: `${g}rem`, height: `${d}rem` };
                },
                L = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n = k.sg.S180x180,
                    level: r = 0,
                    stage: i = 0,
                    isTrophy: l = !1,
                    iconPosition: m = c.x_.Center,
                    iconSizeMap: _ = c.Em.Default,
                    classNames: g,
                }) => {
                    const d = I[t] || k.bn.Circular,
                        p = n === k.sg.Flexable ? k.sg.S420x420 : n;
                    return s().createElement(
                        'div',
                        { className: o()(C.base, C[`base__${n}`], C[`base__${d}`], null == g ? void 0 : g.base) },
                        s().createElement('div', {
                            className: o()(C.background, null == g ? void 0 : g.background),
                            style: M(d, p, l, a),
                        }),
                        s().createElement('div', {
                            className: o()(C.border, null == g ? void 0 : g.border),
                            style: B(d, p, l, r),
                        }),
                        s().createElement('div', {
                            className: o()(
                                C.icon,
                                C[`icon__${m}`],
                                C[`icon__${(0, u.TD)(_)}`],
                                null == g ? void 0 : g.icon,
                            ),
                            style: G(d, n, l, e, r, _),
                        }),
                        t === $.Staged &&
                            Boolean(i) &&
                            s().createElement(
                                'div',
                                {
                                    className: o()(C.stage, null == g ? void 0 : g.stage),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                i,
                            ),
                    );
                },
                D = {
                    base: 'Category_base_94',
                    base__s100x100: 'Category_base__s100x100_92',
                    base__s128x128: 'Category_base__s128x128_d0',
                    base__s180x180: 'Category_base__s180x180_c5',
                    base__s280x280: 'Category_base__s280x280_36',
                    base__s360x360: 'Category_base__s360x360_a7',
                    base__s420x420: 'Category_base__s420x420_bd',
                    base__flexable: 'Category_base__flexable_b6',
                    background: 'Category_background_16',
                    border: 'Category_border_14',
                    icon: 'Category_icon_69',
                };
            let F, j;
            (!(function (e) {
                ((e.S100x100 = 's100x100'),
                    (e.S128x128 = 's128x128'),
                    (e.S180x180 = 's180x180'),
                    (e.S280x280 = 's280x280'),
                    (e.S360x360 = 's360x360'),
                    (e.S420x420 = 's420x420'),
                    (e.Flexable = 'flexable'));
            })(F || (F = {})),
                (function (e) {
                    ((e.s54x68 = 's54x68'),
                        (e.s68x82 = 's68x82'),
                        (e.s100x118 = 's100x118'),
                        (e.s156x182 = 's156x182'),
                        (e.s200x236 = 's200x236'),
                        (e.s250x278 = 's250x278'));
                })(j || (j = {})));
            const T = R.images.gui.maps.icons.advanced_achievements,
                q = {
                    [F.S100x100]: j.s54x68,
                    [F.S128x128]: j.s68x82,
                    [F.S180x180]: j.s100x118,
                    [F.S280x280]: j.s156x182,
                    [F.S360x360]: j.s200x236,
                    [F.S420x420]: j.s250x278,
                },
                V = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = F.S280x280,
                    level: n = 0,
                    isTrophy: r = !1,
                    classNames: i,
                }) => {
                    const l = a === F.Flexable ? F.S420x420 : a;
                    return s().createElement(
                        'div',
                        { className: o()(D.base, D[`base__${a}`], null == i ? void 0 : i.base) },
                        s().createElement('div', {
                            className: o()(D.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${T.backgrounds.category.$dyn(`${t}_${l}`)})` },
                        }),
                        s().createElement('div', {
                            className: o()(D.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${T.borders.category.$dyn(r ? `trophy_${l}` : `tier_${n}_${l}`)})`,
                            },
                        }),
                        s().createElement('div', {
                            className: o()(D.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${T.icons.category.$dyn(`${e}_${n}_${q[l]}`)})` },
                        }),
                    );
                },
                U = {
                    base: 'Subcategory_base_7c',
                    base__s100x100: 'Subcategory_base__s100x100_23',
                    base__s128x128: 'Subcategory_base__s128x128_f2',
                    base__s180x180: 'Subcategory_base__s180x180_84',
                    base__s280x280: 'Subcategory_base__s280x280_eb',
                    base__s360x360: 'Subcategory_base__s360x360_dc',
                    base__s420x420: 'Subcategory_base__s420x420_1e',
                    base__s480x480: 'Subcategory_base__s480x480_2a',
                    base__flexable: 'Subcategory_base__flexable_06',
                    background: 'Subcategory_background_68',
                    border: 'Subcategory_border_74',
                    icon: 'Subcategory_icon_17',
                };
            var W = a(587);
            const X = R.images.gui.maps.icons.advanced_achievements,
                H = {
                    [W.X.S100x100]: W.y.s52x62,
                    [W.X.S128x128]: W.y.s68x72,
                    [W.X.S180x180]: W.y.s94x94,
                    [W.X.S280x280]: W.y.s144x140,
                    [W.X.S360x360]: W.y.s188x176,
                    [W.X.S420x420]: W.y.s218x212,
                    [W.X.S480x480]: W.y.s250x198,
                },
                J = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = W.X.S280x280,
                    level: n = 0,
                    isTrophy: r = !1,
                    classNames: i,
                }) => {
                    const l = a === W.X.Flexable ? W.X.S480x480 : a;
                    return s().createElement(
                        'div',
                        { className: o()(U.base, U[`base__${a}`], null == i ? void 0 : i.base) },
                        s().createElement('div', {
                            className: o()(U.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${X.backgrounds.subcategory.$dyn(`${t}_${l}`)})` },
                        }),
                        s().createElement('div', {
                            className: o()(U.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${X.borders.subcategory.$dyn(r ? `trophy_${l}` : `tier_${n}_${l}`)})`,
                            },
                        }),
                        s().createElement('div', {
                            className: o()(U.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${X.icons.subcategory.$dyn(`${e}_${n}_${H[l]}`)})` },
                        }),
                    );
                },
                K = { [c.Cq.Single]: $.Single, [c.Cq.Staged]: $.Staged, [c.Cq.Cumulative]: $.Cumulative },
                Q = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n,
                    level: r,
                    stage: o,
                    isTrophy: i,
                    iconPosition: l,
                    iconSizeMap: m,
                    classNames: _,
                }) => {
                    switch (t) {
                        case c.Cq.Category:
                            return s().createElement(V, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: r,
                                isTrophy: i,
                                classNames: _,
                            });
                        case c.Cq.Subcategory:
                            return s().createElement(J, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: r,
                                isTrophy: i,
                                classNames: _,
                            });
                        case c.Cq.Single:
                        case c.Cq.Staged:
                        case c.Cq.Cumulative:
                            return s().createElement(L, {
                                keyName: e,
                                type: K[t],
                                backgroundName: a,
                                size: n,
                                level: r,
                                stage: o,
                                isTrophy: i,
                                iconPosition: l,
                                iconSizeMap: m,
                                classNames: _,
                            });
                        default:
                            return (console.warn(`Unreachable code for type '${t}' in AchievementResolver.`), null);
                    }
                },
                Y = 'Vignette_base_c8',
                Z = 'Vignette_gradient_9a',
                ee = 'Vignette_gradient__top_f3',
                te = 'Vignette_gradient__right_d0',
                ae = 'Vignette_gradient__bottom_1c',
                ne = 'Vignette_gradient__left_02',
                se = { top: 0, right: 0, bottom: 0, left: 0 },
                re = { top: 20, right: 20, bottom: 20, left: 20 },
                oe = { top: 20, right: 0, bottom: 20, left: 0 },
                ie = { top: 0, right: 20, bottom: 0, left: 20 },
                le = (e, t, a, n) => {
                    const s = (0, m.getSize)('rem'),
                        r = s.height,
                        o = s.width,
                        i = ((e, t, a) => {
                            switch (e) {
                                case _.cJ.ExtraLarge:
                                    return { heightGap: t === _.Aq.ExtraLarge ? 300 : 0, widthGap: 0 };
                                case _.cJ.Large:
                                    return {
                                        heightGap: t === _.Aq.Large ? 300 : 0,
                                        widthGap: a === _.fd.Large ? 320 : 0,
                                    };
                                case _.cJ.Medium:
                                    return {
                                        heightGap: t === _.Aq.Medium ? 150 : 0,
                                        widthGap: a === _.fd.Medium ? 320 : 0,
                                    };
                                case _.cJ.Small:
                                    return {
                                        heightGap: t === _.Aq.Small ? 130 : 0,
                                        widthGap: a === _.fd.Small ? 234 : 0,
                                    };
                                case _.cJ.ExtraSmall:
                                default:
                                    return {
                                        heightGap: t === _.Aq.ExtraSmall ? 100 : 0,
                                        widthGap: a === _.fd.ExtraSmall ? 342 : 0,
                                    };
                            }
                        })(e, t, a),
                        l = i.widthGap,
                        c = i.heightGap;
                    return (r > t + c && o > a + l) || n ? re : r > t + c ? oe : o > a + l ? ie : se;
                },
                ce = ({ vignetteConfig: e = se }) =>
                    s().createElement(
                        'div',
                        { className: Y },
                        s().createElement('div', {
                            className: o()(Z, ee),
                            style: { backgroundSize: `100% ${e.top}%` },
                        }),
                        s().createElement('div', {
                            className: o()(Z, te),
                            style: { backgroundSize: `${e.right}% 100%` },
                        }),
                        s().createElement('div', {
                            className: o()(Z, ae),
                            style: { backgroundSize: `100% ${e.bottom}%` },
                        }),
                        s().createElement('div', {
                            className: o()(Z, ne),
                            style: { backgroundSize: `${e.left}% 100%` },
                        }),
                    );
            var me = a(1645),
                _e = a(3215),
                ge = a(4598),
                de = a(9480),
                ue = a(9174),
                pe = a(3946);
            let be;
            !(function (e) {
                ((e.Init = 'init'),
                    (e.Category = 'category'),
                    (e.Score = 'score'),
                    (e.GeneralPercent = 'generalPercent'));
            })(be || (be = {}));
            const he = (0, _e.q3)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                upcomingAchievements: e.array('upcomingAchievements'),
                                subcategories: e.array('subcategories'),
                                trophy: e.object('trophy'),
                                animationState: ue.LO.box(be.Init),
                                isInCustomizationMode: ue.LO.box(!1),
                            },
                            a = (0, pe.Om)(() => de.v(t.upcomingAchievements.get(), (e) => Object.assign({}, e)), {
                                equals: ge.jv,
                            }),
                            n = (0, pe.Om)(
                                (e) => {
                                    const t = de.U2(a(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected upcoming achievement index: ${e}`);
                                },
                                { equals: ge.jv },
                            ),
                            s = (0, pe.Om)(() => de.v(t.subcategories.get(), (e) => Object.assign({}, e)), {
                                equals: ge.jv,
                            }),
                            r = (0, pe.Om)(
                                (e) => {
                                    const t = de.U2(s(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected subcategory index: ${e}`);
                                },
                                { equals: ge.jv },
                            ),
                            o = (0, pe.Om)(() => {
                                var e;
                                return null !=
                                    (e = (0, de.kd)(s(), ({ achievementScore: e, prevAchievementScore: t }) => e !== t))
                                    ? e
                                    : 0;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                upcomingLength: (0, pe.Om)(() => a().length),
                                subcategoriesLength: (0, pe.Om)(() => s().length),
                                getUpcomingAchievement: n,
                                getSubcategory: r,
                                getLastIndex: o,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => ({
                        goToTrophies: e.createCallbackNoArgs('onOpenTrophies'),
                        goToDetails: e.createCallback(
                            (e, t) => ({ achievementId: e, achievementCategory: t }),
                            'onOpenDetails',
                        ),
                        cupClick: e.createCallbackNoArgs('onCupClick'),
                        allAnimationEnd: e.createCallbackNoArgs('onAllAnimationEnd'),
                        animationInProgress: e.createCallback(
                            (e) => ({ isAnimationInProgress: e }),
                            'onAnimationInProgress',
                        ),
                        screenClick: e.createCallback((e, t) => ({ posX: e, posY: t }), 'onScreenClick'),
                        setAnimationState: (0, ue.aD)((e) => {
                            t.animationState.set(e);
                        }),
                        achievementHover: e.createCallback(
                            (e, t) => ({ achievementId: e, achievementCategory: t }),
                            'onAchievementHover',
                        ),
                        setIsInCustomizationMode: (0, ue.aD)((e) => t.isInCustomizationMode.set(e)),
                    }),
                ),
                ve = he[0],
                ye = he[1];
            var fe = a(9766),
                Se = a(7522),
                Ee = a(7030),
                xe = a(44);
            const we = {
                    base: 'AchievementsScore_base_a4',
                    amount: 'AchievementsScore_amount_68',
                    count: 'AchievementsScore_count_26',
                    count__blur: 'AchievementsScore_count__blur_be',
                    countGlow: 'AchievementsScore_countGlow_5f',
                    base__animation: 'AchievementsScore_base__animation_34',
                    base__grade_1: 'AchievementsScore_base__grade_1_aa',
                    base__grade_2: 'AchievementsScore_base__grade_2_b6',
                    base__grade_3: 'AchievementsScore_base__grade_3_ac',
                    shine: 'AchievementsScore_shine_60',
                    label: 'AchievementsScore_label_5c',
                    glowWrapper: 'AchievementsScore_glowWrapper_e3',
                    glow: 'AchievementsScore_glow_6c',
                    pulse: 'AchievementsScore_pulse_59',
                },
                Ne = R.strings.achievements_page.category.achievementsScore,
                Ae = 'grade_1',
                Ce = 'grade_2',
                ke = 'grade_3',
                $e = (0, b.Pi)(({ className: e }) => {
                    const t = ye(),
                        a = t.model,
                        r = t.controls,
                        i = a.root.get(),
                        l = i.prevAchievementsScore,
                        c = i.achievementsScore,
                        m = (0, n.useState)(l),
                        _ = m[0],
                        g = m[1],
                        u = (0, n.useState)(!1),
                        p = u[0],
                        b = u[1],
                        h = a.animationState.get(),
                        v = ((e, t) => {
                            const a = e - t;
                            return a >= 500
                                ? { name: Ae, duration: 4e3, sound: R.sounds.ach_cup_score_long() }
                                : a >= 50
                                  ? { name: Ce, duration: 3e3, sound: R.sounds.ach_cup_score_med() }
                                  : { name: ke, duration: 2e3, sound: R.sounds.ach_cup_score_short() };
                        })(c, l),
                        y = (0, xe.uf)(_),
                        f = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onStart: () => {
                                (b(!0), (0, d.G)(v.sound));
                            },
                            onChange: (e) => {
                                g(Math.floor(e.value.progress));
                            },
                            onRest: () => {
                                (b(!1), r.setAnimationState(be.Init), r.animationInProgress(!1), r.allAnimationEnd());
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            c !== l &&
                                0 !== c &&
                                h === be.Score &&
                                f.start({
                                    from: { progress: l },
                                    to: { progress: c },
                                    config: { duration: v.duration, easing: Se.Z.easeInOutCubic },
                                });
                        }, [c, f, v.duration, h, l]),
                        s().createElement(
                            'div',
                            { className: o()(we.base, p && we.base__animation, we[`base__${v.name}`], e) },
                            s().createElement('div', { className: we.shine }),
                            s().createElement(
                                'div',
                                { className: we.amount },
                                s().createElement('div', { className: we.count }, y),
                                s().createElement('div', { className: we.countGlow }, y),
                                s().createElement('div', { className: o()(we.count, we.count__blur) }, y),
                            ),
                            s().createElement(
                                'div',
                                { className: we.label },
                                s().createElement(
                                    'div',
                                    { className: we.glowWrapper },
                                    s().createElement('div', { className: we.glow }),
                                ),
                                s().createElement(fe.z, { text: Ne.title() }),
                            ),
                        )
                    );
                }),
                Pe = 'CategoryProgress_base_51',
                Ie = 'CategoryProgress_count_91',
                Re = 'CategoryProgress_count__symbol_5c',
                ze = (0, b.Pi)(({ className: e }) => {
                    const t = ye(),
                        a = t.model,
                        r = t.controls,
                        i = a.root.get(),
                        l = i.categoryProgress,
                        c = i.prevCategoryProgress,
                        m = (0, n.useState)(c),
                        _ = m[0],
                        g = m[1],
                        d = a.animationState.get(),
                        u = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                g(Math.floor(e.value.progress));
                            },
                            onRest: () => r.setAnimationState(be.Score),
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            d === be.GeneralPercent &&
                                (l === c && r.setAnimationState(be.Score),
                                u.start({ from: { progress: c }, to: { progress: l } }));
                        }, [u, d, l, r, c]),
                        s().createElement(
                            'div',
                            { className: o()(Pe, e) },
                            s().createElement('div', { className: Ie }, _),
                            s().createElement('div', { className: o()(Ie, Re) }, R.strings.common.common.percent()),
                        )
                    );
                }),
                Oe = {
                    base: 'Counter_base_9e',
                    show: 'Counter_show_be',
                    base__big: 'Counter_base__big_19',
                    base__small: 'Counter_base__small_3b',
                    base__empty: 'Counter_base__empty_98',
                    base__animated: 'Counter_base__animated_40',
                    base__hidden: 'Counter_base__hidden_56',
                    hide: 'Counter_hide_b6',
                    bg: 'Counter_bg_74',
                    value: 'Counter_value_3e',
                    value__text: 'Counter_value__text_d6',
                    base__pattern: 'Counter_base__pattern_71',
                    plus: 'Counter_plus_15',
                    pattern: 'Counter_pattern_83',
                },
                Be = ['value', 'isEmpty', 'className', 'size', 'fadeInAnimation', 'hide', 'maximumNumber'];
            function Me() {
                return (
                    (Me =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Me.apply(this, arguments)
                );
            }
            const Ge = (e) => {
                    let t = e.value,
                        a = e.isEmpty,
                        n = void 0 !== a && a,
                        r = e.className,
                        i = e.size,
                        l = void 0 === i ? 'normal' : i,
                        c = e.fadeInAnimation,
                        m = void 0 !== c && c,
                        _ = e.hide,
                        g = void 0 !== _ && _,
                        d = e.maximumNumber,
                        u = void 0 === d ? 99 : d,
                        p = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, Be);
                    const b = n ? null : t,
                        h = 'string' == typeof b;
                    if ((b && !h && b < 0) || 0 === b) return null;
                    const v = b && !h && b > u,
                        y = o()(
                            Oe.base,
                            Oe[`base__${l}`],
                            m && Oe.base__animated,
                            g && Oe.base__hidden,
                            !b && Oe.base__pattern,
                            n && Oe.base__empty,
                            r,
                        );
                    return s().createElement(
                        'div',
                        Me({ className: y }, p),
                        s().createElement('div', { className: Oe.bg }),
                        s().createElement('div', { className: Oe.pattern }),
                        s().createElement(
                            'div',
                            { className: o()(Oe.value, h && Oe.value__text) },
                            v ? u : b,
                            v && s().createElement('span', { className: Oe.plus }, '+'),
                        ),
                    );
                },
                Le = 1e3,
                De = 'GlowWithMask_glowBox_e3',
                Fe = 'GlowWithMask_glowInner_c9',
                je = 'GlowWithMask_glow_a5',
                Te = R.images.gui.maps.icons.advanced_achievements.borders,
                qe = ({ currentValue: e, index: t, isTrophy: a, isOtherPlayer: r, isSkipAnimation: o }) => {
                    const i = (0, _.GS)().mediaSize,
                        l = (0, Ee.useSpring)(() => ({
                            from: { transform: 'translateX(-106%)' },
                            to: { transform: 'translateX(104%)' },
                            delay: 2e3 * (t + 1),
                            config: { duration: 1500, easing: Se.Z.easeOutQuad },
                            onStart: () => (0, d.G)(R.sounds.ach_sub_glare()),
                        })),
                        c = l[0],
                        m = l[1],
                        g = (0, n.useCallback)(() => {
                            m.start({
                                from: { transform: 'translateX(-106%)' },
                                to: { transform: 'translateX(104%)' },
                                delay: 2e3 * (t + 1),
                            });
                        }, [t, m]);
                    return (
                        (0, n.useEffect)(() => {
                            if (!o) {
                                const e = setInterval(g, 8e3);
                                return () => {
                                    clearInterval(e);
                                };
                            }
                        }, [g, o]),
                        s().createElement(
                            'div',
                            {
                                className: De,
                                style: {
                                    maskImage: `url(${a ? Te.category.$dyn(`trophy_${i < _.cJ.Medium || r ? W.X.S100x100 : W.X.S180x180}`) : Te.subcategory.$dyn(`tier_${(0, me.tf)(e)}_${(0, xe.d5)(i)}`)})`,
                                },
                            },
                            s().createElement(
                                Ee.animated.div,
                                { className: Fe, style: c },
                                s().createElement('div', { className: je }),
                            ),
                        )
                    );
                },
                Ve = 'Trophy_base_28',
                Ue = 'Trophy_icon_60',
                We = 'Trophy_base__inactive_71',
                Xe = 'Trophy_icon__otherPlayer_4c',
                He = 'Trophy_content_8c',
                Je = 'Trophy_count_cb',
                Ke = 'Trophy_label_24',
                Qe = 'Trophy_counter_4c',
                Ye = R.strings.advanced_achievements,
                Ze = (0, b.Pi)(() => {
                    const e = ye(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        r = n.isOtherPlayer,
                        l = n.isSkipAnimation,
                        g = t.trophy.get(),
                        u = g.key,
                        p = g.background,
                        b = g.currentValue,
                        h = g.prevValue,
                        v = g.bubbles,
                        y = (0, _.GS)().mediaSize,
                        f = r || 0 === b;
                    return s().createElement(
                        i.l,
                        {
                            tooltipArgs: {
                                header: Ye.tooltip.title.trophies(),
                                body: Ye.tooltip.description.trophies(),
                            },
                        },
                        s().createElement(
                            'div',
                            { className: o()(Ve, f && We) },
                            s().createElement(
                                'div',
                                {
                                    className: o()(Ue, r && Xe),
                                    onClick: () => {
                                        f || ((0, d.G)(R.sounds.ach_sign()), a.goToTrophies());
                                    },
                                    onMouseEnter: () => {
                                        f || (0, d.G)(R.sounds.ach_hover());
                                    },
                                },
                                s().createElement(Q, {
                                    keyName: u,
                                    backgroundName: p,
                                    type: c.Cq.Category,
                                    size: y < _.cJ.Large || r ? F.S100x100 : F.S180x180,
                                    isTrophy: !0,
                                }),
                                Boolean(v) &&
                                    s().createElement(
                                        'div',
                                        { className: Qe },
                                        s().createElement(Ge, { value: v, isEmpty: 1 === v }),
                                    ),
                                m.graphicsQuality.isHigh() &&
                                    b !== h &&
                                    s().createElement(qe, {
                                        currentValue: b,
                                        index: t.computes.getLastIndex() + 1,
                                        isTrophy: !0,
                                        isOtherPlayer: r,
                                        isSkipAnimation: l,
                                    }),
                            ),
                            s().createElement(
                                'div',
                                { className: He },
                                s().createElement('div', { className: Je }, b),
                                s().createElement(
                                    'div',
                                    { className: Ke },
                                    systemLocale.toUpperCase(Ye.name.trophies()),
                                ),
                            ),
                        ),
                    );
                }),
                et = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
            var tt = a(6373);
            const at = (e, t) => window.getComputedStyle(e, null).getPropertyValue(t),
                nt = (e, t, a) => {
                    const n = a.getContext('2d');
                    if (!n) return 0;
                    var s;
                    n.font = `${at((s = t), 'font-weight')} ${at(s, 'font-size')} ${at(s, 'font-family')}`;
                    return n.measureText(e).width;
                },
                st = (e) => {
                    if (e.start >= e.end - 1) return e.start;
                    const t = Math.floor((e.start + e.end) / 2),
                        a = e.words.slice(0, t).join(' '),
                        n = Math.ceil(nt(a, e.element, e.canvas) / e.element.getBoundingClientRect().width);
                    return st(n <= 1 ? Object.assign({}, e, { start: t }) : Object.assign({}, e, { end: t }));
                },
                rt = 'MultilineOverflow_base_d9',
                ot = 'MultilineOverflow_base__truncated_a1',
                it = 'MultilineOverflow_text_ce',
                lt = 'MultilineOverflow_truncatedContent_da',
                ct = 'MultilineOverflow_singleLine_bb',
                mt = 'MultilineOverflow_line_51',
                _t = ['text', 'lines', 'className', 'classNames', 'onChange'];
            function gt() {
                return (
                    (gt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    gt.apply(this, arguments)
                );
            }
            const dt = (0, n.forwardRef)(function (e, t) {
                let a = e.text,
                    r = e.lines,
                    i = e.className,
                    l = e.classNames,
                    c = e.onChange,
                    m = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            s = {},
                            r = Object.keys(e);
                        for (n = 0; n < r.length; n++) ((a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                        return s;
                    })(e, _t);
                const _ = (0, n.useRef)(null),
                    d = (0, n.useRef)(null),
                    u = (0, n.useState)(!1),
                    p = u[0],
                    b = u[1],
                    h = (0, n.useState)([]),
                    v = h[0],
                    y = h[1],
                    f = (0, n.useState)(0),
                    S = f[0],
                    E = f[1],
                    x = (function () {
                        const e = (0, n.useRef)(0);
                        return (
                            (0, g.k)(() => {
                                window.cancelAnimationFrame(e.current);
                            }),
                            (0, n.useMemo)(
                                () => ({
                                    run: (t) => {
                                        (window.cancelAnimationFrame(e.current),
                                            (e.current = window.requestAnimationFrame(() => {
                                                e.current = window.requestAnimationFrame(() => {
                                                    ((e.current = 0), t());
                                                });
                                            })));
                                    },
                                    clear: () => {
                                        (window.cancelAnimationFrame(e.current), (e.current = 0));
                                    },
                                    get isRunning() {
                                        return 0 !== e.current;
                                    },
                                }),
                                [],
                            )
                        );
                    })(),
                    w = (0, n.useMemo)(() => document.createElement('canvas'), []),
                    N = (0, n.useCallback)(() => (d.current ? d.current.getBoundingClientRect().height : 0), []),
                    A = (0, n.useCallback)(
                        (e) => {
                            const t = N();
                            return e && t ? Math.round(e.scrollHeight / t) : 0;
                        },
                        [N],
                    ),
                    C = (0, n.useCallback)(() => {
                        if (A(_.current) <= r) return b(!1);
                        b(!0);
                        const e = a.split(' '),
                            t = Array.from(new Array(r)).reduce((t, a, n) => {
                                if (!_.current) return t;
                                const s = t.reduce((e, t) => e + t.length, 0),
                                    o = e.slice(s);
                                if (n === r - 1) return (t.push(o), t);
                                const i = st({ start: 0, end: o.length, words: o, element: _.current, canvas: w });
                                return (t.push(o.slice(0, i)), t);
                            }, []);
                        y(t);
                    }, [w, A, r, a]),
                    k = (0, n.useCallback)(() => {
                        x.run(() => {
                            (E(N() * r), C());
                        });
                    }, [N, r, x, C]);
                var $, P;
                return (
                    (0, n.useEffect)(k, [k]),
                    ($ = k),
                    (P = [k]),
                    (0, n.useEffect)(
                        () => (window.addEventListener('resize', $), () => window.removeEventListener('resize', $)),
                        P,
                    ),
                    (0, n.useEffect)(() => {
                        null == c || c(p);
                    }, [c, p]),
                    s().createElement(
                        'div',
                        gt({}, m, { ref: t, className: o()(rt, i, p && ot) }),
                        s().createElement('div', { ref: _, className: it, style: { maxHeight: `${S}rem` } }, a),
                        s().createElement(
                            'div',
                            { className: lt },
                            v.map((e, t) =>
                                s().createElement(
                                    'div',
                                    { key: t, className: o()(mt, null == l ? void 0 : l.line) },
                                    e.join(' '),
                                ),
                            ),
                        ),
                        s().createElement('div', { ref: d, className: ct }, R.strings.common.common.dot()),
                    )
                );
            });
            function ut() {
                return (
                    (ut =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    ut.apply(this, arguments)
                );
            }
            const pt = (0, n.forwardRef)(function (e, t) {
                const a = (0, n.useState)(!1),
                    r = a[0],
                    o = a[1];
                return s().createElement(
                    tt.i,
                    { isEnabled: r, body: e.text },
                    s().createElement(dt, ut({}, e, { ref: t, onChange: o })),
                );
            });
            var bt = a(6349);
            let ht;
            !(function (e) {
                ((e.Percentage = 'percentage'), (e.Stepped = 'stepped'));
            })(ht || (ht = {}));
            var vt = a(9690);
            const yt = {
                base: 'ProgressBar_base_45',
                base__small: 'ProgressBar_base__small_df',
                background: 'ProgressBar_background_51',
                background__small: 'ProgressBar_background__small_46',
                lineWrapper: 'ProgressBar_lineWrapper_6a',
            };
            let ft, St;
            (!(function (e) {
                ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
            })(ft || (ft = {})),
                (function (e) {
                    ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                })(St || (St = {})));
            const Et = ({ size: e = ft.Default }) => {
                    const t = o()(yt.background, yt[`background__${e}`]);
                    return s().createElement('div', { className: t });
                },
                xt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                wt = ({ size: e }) => {
                    const t = o()(xt.base, xt[`base__${e}`]);
                    return s().createElement('div', { className: t });
                },
                Nt = {
                    base: 'ProgressLineImpose_base_80',
                    base__disabled: 'ProgressLineImpose_base__disabled_cc',
                    base__finished: 'ProgressLineImpose_base__finished_d4',
                    base__withoutBounce: 'ProgressLineImpose_base__withoutBounce_56',
                    pattern: 'ProgressLineImpose_pattern_1c',
                    base__small: 'ProgressLineImpose_base__small_55',
                    gradient: 'ProgressLineImpose_gradient_35',
                    glow: 'ProgressLineImpose_glow_a5',
                    glow__left: 'ProgressLineImpose_glow__left_d8',
                },
                At = (0, n.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                        const l = o()(
                                Nt.base,
                                Nt[`base__${e}`],
                                a && Nt.base__disabled,
                                r && Nt.base__finished,
                                i && Nt.base__withoutBounce,
                            ),
                            c = !a && !r;
                        return s().createElement(
                            'div',
                            { className: l, style: n, ref: t },
                            s().createElement('div', { className: Nt.pattern }),
                            s().createElement('div', { className: Nt.gradient }),
                            c && s().createElement(wt, { size: e }),
                        );
                    },
                );
            var Ct = a(122);
            let kt, $t;
            (!(function (e) {
                ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
            })(kt || (kt = {})),
                (function (e) {
                    ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                })($t || ($t = {})));
            const Pt = 'ProgressBarDeltaGrow_base_7e',
                It = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                Rt = 'ProgressBarDeltaGrow_glow_68',
                zt = (e) => (e ? { left: 0 } : { right: 0 }),
                Ot = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                Bt = (e) => ({ transitionDuration: `${e}ms` }),
                Mt = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: r,
                        size: i,
                        to: l,
                        onEndAnimation: c,
                        onChangeAnimationState: m,
                        className: _,
                    }) => {
                        const g = l < r,
                            d = (0, n.useState)(kt.Idle),
                            u = d[0],
                            p = d[1],
                            b = u === kt.End,
                            h = u === kt.Idle,
                            v = u === kt.Grow,
                            y = u === kt.Shrink,
                            f = (0, n.useCallback)(
                                (e) => {
                                    (p(e), m && m(e));
                                },
                                [m],
                            ),
                            S = (0, n.useCallback)(
                                (e, t) =>
                                    (0, Ct.F)(() => {
                                        f(e);
                                    }, t),
                                [f],
                            );
                        (0, n.useEffect)(() => {
                            if (!a)
                                return h
                                    ? S(kt.Grow, t)
                                    : v
                                      ? S(kt.Shrink, e)
                                      : y
                                        ? S(kt.End, e)
                                        : void (b && c && c());
                        }, [S, a, b, v, h, y, c, t, e]);
                        const E = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Bt(e), zt(g)), [g, e]),
                            x = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Bt(e), zt(g)), [g, e]),
                            w = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ot(g, r), Bt(e)), [r, g, e]),
                            N = (0, n.useMemo)(
                                () => Object.assign({ width: `${Math.abs(l - r)}%` }, Ot(g, r), Bt(e)),
                                [r, g, l, e],
                            );
                        if (b) return null;
                        const A = o()(Pt, _, g && 0 === l && It);
                        return s().createElement(
                            'div',
                            { style: h ? w : N, className: A },
                            s().createElement(
                                'div',
                                { style: y ? x : E, className: Rt },
                                s().createElement(wt, { size: i }),
                            ),
                        );
                    },
                ),
                Gt = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
                        disabled: o,
                        isComplete: i,
                        animationSettings: l,
                        onEndAnimation: c,
                        onChangeAnimationState: m,
                    }) => {
                        const _ = e < a,
                            g = (0, n.useState)(!1),
                            d = g[0],
                            u = g[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    (e === kt.Shrink && u(!0), m && m(e));
                                },
                                [m],
                            ),
                            b = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            h = (0, n.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                [l.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(At, {
                                size: t,
                                lineRef: r,
                                disabled: o,
                                isComplete: i,
                                withoutBounce: _ && 0 === e,
                                baseStyles: d ? h : b,
                            }),
                            a >= 0 &&
                                s().createElement(Mt, {
                                    transitionDuration: l.delta.duration,
                                    transitionDelay: l.delta.delay,
                                    onChangeAnimationState: p,
                                    freezed: l.freezed,
                                    onEndAnimation: c,
                                    from: a,
                                    size: t,
                                    to: e,
                                    className: l.delta.className,
                                }),
                        );
                    },
                ),
                Lt = 'ProgressBarDeltaSimple_base_6c',
                Dt = 'ProgressBarDeltaSimple_delta_99',
                Ft = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: r,
                        size: o,
                        to: i,
                        onEndAnimation: l,
                        onChangeAnimationState: c,
                    }) => {
                        const m = i < r,
                            _ = (0, n.useState)($t.Idle),
                            g = _[0],
                            d = _[1],
                            u = g === $t.In,
                            p = g === $t.End,
                            b = g === $t.Idle,
                            h = (0, n.useCallback)(
                                (e) => {
                                    (d(e), c && c(e));
                                },
                                [c],
                            );
                        ((0, n.useEffect)(() => {
                            if (b && !a) {
                                const e = t;
                                return (0, Ct.F)(() => {
                                    h($t.In);
                                }, e);
                            }
                        }, [h, a, b, t]),
                            (0, n.useEffect)(() => {
                                if (u) {
                                    const a = e + t;
                                    return (0, Ct.F)(() => {
                                        (l && l(), h($t.End));
                                    }, a);
                                }
                            }, [h, u, l, t, e]));
                        const v = (0, n.useMemo)(
                                () => ({
                                    width: '100%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, t, e],
                            ),
                            y = (0, n.useMemo)(
                                () => ({
                                    width: '0%',
                                    transitionDuration: `${e}ms`,
                                    transitionDelay: `${t}ms`,
                                    [m ? 'left' : 'right']: '0',
                                }),
                                [m, t, e],
                            ),
                            f = (0, n.useMemo)(
                                () => ({ width: `${Math.abs(r - i)}%`, left: `${m ? i : r}%` }),
                                [r, m, i],
                            );
                        return p
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: Lt, style: f },
                                  s().createElement(
                                      'div',
                                      { style: b ? v : y, className: Dt },
                                      s().createElement(wt, { size: o }),
                                  ),
                              );
                    },
                ),
                jt = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
                        disabled: o,
                        isComplete: i,
                        animationSettings: l,
                        onChangeAnimationState: c,
                        onEndAnimation: m,
                    }) => {
                        const _ = (0, n.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${l.line.duration}ms`,
                                transitionDelay: `${l.line.delay}ms`,
                            }),
                            [l.line.delay, l.line.duration, e],
                        );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(At, { size: t, lineRef: r, disabled: o, isComplete: i, baseStyles: _ }),
                            a >= 0 &&
                                s().createElement(Ft, {
                                    transitionDuration: l.delta.duration,
                                    transitionDelay: l.delta.delay,
                                    freezed: l.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: c,
                                    onEndAnimation: m,
                                }),
                        );
                    },
                ),
                Tt = ['onComplete', 'onEndAnimation'];
            function qt() {
                return (
                    (qt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    qt.apply(this, arguments)
                );
            }
            const Vt = (0, n.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                s = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) ((a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                            return s;
                        })(e, Tt);
                    const o = (0, n.useState)(!1),
                        i = o[0],
                        l = o[1],
                        c = (0, n.useCallback)(() => {
                            const e = 100 === r.to;
                            (e !== i && l(e), e && t && t(), a && a());
                        }, [i, t, a, r.to]);
                    switch (r.animationSettings.type) {
                        case St.Simple:
                            return s().createElement(jt, qt({}, r, { onEndAnimation: c, isComplete: i }));
                        case St.Growing:
                            return s().createElement(Gt, qt({}, r, { onEndAnimation: c, isComplete: i }));
                        default:
                            return null;
                    }
                }),
                Ut = ({ size: e, value: t, lineRef: a, disabled: r, onComplete: o }) => {
                    const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, n.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        s().createElement(At, { size: e, disabled: r, baseStyles: i, isComplete: l, lineRef: a })
                    );
                },
                Wt = ['onEndAnimation'];
            function Xt() {
                return (
                    (Xt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Xt.apply(this, arguments)
                );
            }
            const Ht = (0, n.memo)((e) => {
                let t = e.onEndAnimation,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            s = {},
                            r = Object.keys(e);
                        for (n = 0; n < r.length; n++) ((a = r[n]), t.indexOf(a) >= 0 || (s[a] = e[a]));
                        return s;
                    })(e, Wt);
                const r = (0, n.useRef)({}),
                    o = (0, n.useCallback)(() => {
                        ((r.current.from = void 0), t && t());
                    }, [t]),
                    i = 'number' == typeof r.current.from ? r.current.from : a.from;
                return (
                    (r.current.from = i),
                    s().createElement(
                        Vt,
                        Xt({}, a, {
                            onEndAnimation: o,
                            key: `${i}-${a.to}-${null == a ? void 0 : a.additionalKey}`,
                            from: i,
                        }),
                    )
                );
            });
            function Jt() {
                return (
                    (Jt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Jt.apply(this, arguments)
                );
            }
            const Kt = (0, n.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: n,
                        deltaFrom: r,
                        additionalKey: o,
                        animationSettings: i,
                        onEndAnimation: l,
                        onChangeAnimationState: c,
                        onComplete: m,
                    }) => {
                        if (r === t)
                            return s().createElement(Ut, {
                                key: `${r}-${t}-${o}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: n,
                                onComplete: m,
                            });
                        const _ = {
                            from: r,
                            to: t,
                            size: e,
                            additionalKey: o,
                            lineRef: a,
                            disabled: n,
                            animationSettings: i,
                            onComplete: m,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        };
                        return i.withStack
                            ? s().createElement(Ht, _)
                            : s().createElement(Vt, Jt({ key: `${r}-${t}-${o}` }, _));
                    },
                ),
                Qt = (e) => {
                    var t, a, n, s, r, o, i, l, c, m, _, g, d, u, p, b, h, v, y, f;
                    return {
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-bg-height': null != (t = null == (a = e.bg) ? void 0 : a.height) ? t : '12rem',
                        '--progress-bg-height-small':
                            null != (n = null == (s = e.bg) ? void 0 : s.heightSmall) ? n : '2rem',
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-line-filter': null != (r = e.line.filter) ? r : 'none',
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-pattern-size': null != (o = e.pattern.size) ? o : '3rem 10rem',
                        '--progress-pattern-border-size': null != (i = e.pattern.borderSize) ? i : '1rem',
                        '--progress-pattern-gradient':
                            null != (l = e.pattern.gradient)
                                ? l
                                : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75))',
                        '--progress-pattern-gradient-finished':
                            null != (c = e.pattern.gradientFinished)
                                ? c
                                : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0.5))',
                        '--progress-pattern-gradient-mixBlendMode':
                            null != (m = e.pattern.mixBlendMode) ? m : 'overlay',
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-width':
                            null != (_ = null == (g = e.glowSettings) ? void 0 : g.width) ? _ : '60rem',
                        '--progress-glow-height':
                            null != (d = null == (u = e.glowSettings) ? void 0 : u.height) ? d : '100rem',
                        '--progress-glow-small-width':
                            null != (p = null == (b = e.glowSettings) ? void 0 : b.smallWidth) ? p : '44rem',
                        '--progress-glow-small-height':
                            null != (h = null == (v = e.glowSettings) ? void 0 : v.smallHeight) ? h : '43rem',
                        '--progress-glow-mixBlendMode':
                            null != (y = null == (f = e.glowSettings) ? void 0 : f.mixBlendMode) ? y : 'lighten',
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    };
                },
                Yt = {
                    bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_bg_base',
                    bg: { height: '22rem', heightSmall: '4rem' },
                    glowSettings: {
                        width: '34rem',
                        height: '54rem',
                        mixBlendMode: 'normal',
                        smallWidth: '34rem',
                        smallHeight: '36rem',
                    },
                    line: {
                        bgColorBase: 'rgba(191, 232, 255, 0.6)',
                        bgColorDisabled: 'transparent',
                        bgColorFinished: 'rgba(191, 232, 255, 0.6)',
                        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.08)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.16)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.24))',
                    },
                    pattern: {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_disabled',
                        bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern_base',
                        size: '4rem 22rem',
                        borderSize: '0',
                        gradient: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                        gradientFinished: 'url(R.images.gui.maps.icons.components.progress_bar.blue_noise_pattern)',
                        mixBlendMode: 'normal',
                    },
                    glow: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow',
                    glowSmall: 'R.images.gui.maps.icons.components.progress_bar.blue_noise_glow_small',
                    delta: {
                        color: '#fff',
                        shadow: ' 0 0 4px 1px rgba(120, 180, 255, 0.4), 0 0 9px 1px rgba(100, 160, 255, 0.4), 0 0 12px 2px rgba(80, 140, 255, 0.4), 0 0 12px 4px rgba(60, 120, 255, 0.4)',
                    },
                };
            Object.assign({}, Yt, {
                bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_bg_base',
                line: Object.assign({}, Yt.line, { bgColorBase: '#83C6A5', bgColorFinished: 'rgba(10, 230, 72, 0.6)' }),
                pattern: Object.assign({}, Yt.pattern, {
                    bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                    bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_disabled',
                    bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.green_noise_pattern_base',
                }),
            });
            var Zt = a(7515);
            const ea = (e, t, a) => {
                if ('number' == typeof a) {
                    return ((0, Zt.u)(0, t, a) / t) * 100;
                }
                return e;
            };
            const ta = {
                    bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                    line: { bgColorBase: '#f50', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                    pattern: {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_orange',
                        bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                        bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                    },
                    glow: 'R.images.gui.maps.icons.components.progress_bar.glow',
                    glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small',
                    delta: {
                        color: '#ffc',
                        shadow: '0 0 4px 1px #ffaa0066, 0 0 9px 1px #ffaa0066, 0 0 12px 2px #ff550066, 0 0 12px 4px #ff000066',
                    },
                },
                aa = {
                    freezed: !1,
                    withStack: !1,
                    type: St.Growing,
                    delta: { duration: 500, delay: 0 },
                    line: { duration: 500, delay: 0 },
                },
                na = (0, n.memo)(
                    ({
                        maxValue: e = 100,
                        theme: t = ta,
                        size: a = ft.Default,
                        animationSettings: r = aa,
                        disabled: i = !1,
                        withoutBackground: l = !1,
                        value: c,
                        deltaFrom: m,
                        additionalKey: _,
                        lineRef: g,
                        onChangeAnimationState: d,
                        onEndAnimation: u,
                        onComplete: p,
                        className: b,
                    }) => {
                        const h = (function (e, t, a) {
                            return (0, n.useMemo)(() => {
                                const n = ((0, Zt.u)(0, t, e) / t) * 100;
                                return { value: n, deltaFrom: ea(n, t, a) };
                            }, [a, t, e]);
                        })(c, e, m);
                        return s().createElement(
                            'div',
                            { className: o()(yt.base, b, yt[`base__${a}`]), style: Qt(t) },
                            !l && s().createElement(Et, { size: a }),
                            s().createElement(Kt, {
                                size: a,
                                lineRef: g,
                                disabled: i,
                                value: h.value,
                                deltaFrom: h.deltaFrom,
                                additionalKey: _,
                                animationSettings: r,
                                onEndAnimation: u,
                                onChangeAnimationState: d,
                                onComplete: p,
                            }),
                        );
                    },
                ),
                sa = 'Progress_base_37',
                ra = 'Progress_caption_37',
                oa = 'Progress_steppedText_6a',
                ia = 'Progress_separator_d1',
                la = 'Progress_accentText_1c',
                ca = ({ progressType: e, currentValue: t, maxValue: a, classNames: n, className: r }) =>
                    s().createElement(
                        'div',
                        { className: o()(sa, r) },
                        s().createElement(na, { value: t, maxValue: a, size: ft.Small }),
                        s().createElement(
                            'div',
                            { className: o()(ra, null == n ? void 0 : n.caption) },
                            e === ht.Stepped
                                ? s().createElement(
                                      'div',
                                      { className: oa },
                                      s().createElement('div', { className: la }, t),
                                      s().createElement('div', { className: ia }, '/'),
                                      a,
                                  )
                                : s().createElement(
                                      'div',
                                      { className: la },
                                      (0, u.uF)(R.strings.common.percentValue(), { value: t }),
                                  ),
                        ),
                    ),
                ma = {
                    base: 'UpcomingItem_base_40',
                    base__otherPlayer: 'UpcomingItem_base__otherPlayer_57',
                    icon: 'UpcomingItem_icon_90',
                    wrapper: 'UpcomingItem_wrapper_43',
                    progressBar: 'UpcomingItem_progressBar_7c',
                    progressCaption: 'UpcomingItem_progressCaption_b9',
                    holder: 'UpcomingItem_holder_67',
                    title: 'UpcomingItem_title_69',
                    description: 'UpcomingItem_description_d0',
                },
                _a = R.strings.advanced_achievements,
                ga = (0, b.Pi)(({ index: e, size: t, className: a }) => {
                    const n = ye(),
                        r = n.model,
                        i = n.controls,
                        l = r.root.get().isOtherPlayer,
                        c = r.computes.getUpcomingAchievement(e),
                        m = c.key,
                        _ = c.maxValue,
                        g = c.currentValue,
                        p = c.background,
                        b = c.type,
                        h = c.id,
                        v = c.category,
                        y = c.stage,
                        f = c.iconPosition,
                        S = c.iconSizeMap,
                        E = c.specificItemName,
                        x = c.isResearchable,
                        w = c.specificItemLevel,
                        N = x
                            ? (0, u.uF)(R.strings.advanced_achievements.collectVehicle(), { item: E })
                            : (0, u.uF)((0, u.z4)(_a.description.$plural(m, _)), { maxValue: _, level: (0, vt.HG)(w) }),
                        A = (0, me.Ai)(m);
                    return s().createElement(
                        'div',
                        {
                            onClick: () => {
                                l || ((0, d.G)(R.sounds.ach_sign()), i.goToDetails(h, v));
                            },
                            onMouseEnter: () => {
                                l || (0, d.G)(R.sounds.ach_hover());
                            },
                            className: o()(ma.base, l && ma.base__otherPlayer, a),
                        },
                        s().createElement(
                            'div',
                            { className: ma.wrapper },
                            s().createElement(Q, {
                                keyName: m,
                                backgroundName: p,
                                type: b,
                                level: (0, me.tf)((0, me.bV)(g, _)),
                                size: t,
                                stage: y,
                                iconPosition: f,
                                iconSizeMap: S,
                                classNames: { base: ma.icon, stage: ma.stage },
                            }),
                            !l &&
                                s().createElement(ca, {
                                    progressType: ht.Stepped,
                                    classNames: { caption: ma.progressCaption },
                                    className: ma.progressBar,
                                    currentValue: g,
                                    maxValue: _,
                                }),
                        ),
                        s().createElement(
                            'div',
                            { className: o()(ma.holder, l && ma.base__otherPlayer) },
                            s().createElement(
                                'div',
                                { className: ma.title },
                                s().createElement(bt.l, {
                                    content: 'staged' === b ? (0, me.Mu)(b, y, A) : `${(0, u.z4)(A)}`,
                                }),
                            ),
                            s().createElement(pt, { className: ma.description, text: N, lines: 2 }),
                        ),
                    );
                }),
                da = 'UpcomingList_base_e2',
                ua = 'UpcomingList_label_b6',
                pa = 'UpcomingList_base__otherPlayer_8d',
                ba = 'UpcomingList_item_d2',
                ha = 'UpcomingList_base__specificResolution_19',
                va = R.strings.achievements_page.category,
                ya = (0, b.Pi)(() => {
                    const e = ye().model,
                        t = e.root.get().isOtherPlayer,
                        a = (0, _.GS)(),
                        n = a.mediaSize,
                        r = a.mediaWidth,
                        i = a.mediaHeight,
                        l = n > _.cJ.ExtraSmall && !t ? 2 : 1,
                        c = r === _.fd.ExtraLarge && i === _.Aq.Large && !t;
                    return s().createElement(
                        'div',
                        { className: o()(da, t && pa, c && ha) },
                        s().createElement(
                            'div',
                            { className: ua },
                            s().createElement(fe.z, { text: t ? va.received.title() : va.upcoming.title() }),
                        ),
                        et(e.computes.upcomingLength(), (e) => {
                            if (!(e > l))
                                return s().createElement(ga, {
                                    className: ba,
                                    index: e,
                                    key: e,
                                    size: (0, xe.pL)(n, t),
                                });
                        }),
                    );
                }),
                fa = 'Footer_base_2b',
                Sa = 'Footer_base__leftAlign_ac',
                Ea = 'Footer_trophy_b6',
                xa = 'Footer_upcomingList__otherPlayer_b4',
                wa = 'Footer_upcomingList_a1',
                Na = (0, b.Pi)(({ className: e }) => {
                    const t = ye().model,
                        a = t.root.get().isOtherPlayer,
                        n = t.computes.upcomingLength,
                        r = (0, _.GS)().mediaSize,
                        i = n() < 2 || (n() < 3 && r > _.cJ.ExtraSmall && !a);
                    return s().createElement(
                        'div',
                        { className: o()(fa, i && Sa, e) },
                        s().createElement('div', { className: Ea }, s().createElement(Ze, null)),
                        Boolean(n()) &&
                            s().createElement('div', { className: o()(wa, a && xa) }, s().createElement(ya, null)),
                    );
                }),
                Aa = 'SubcategoryAnimationItem_base_b3',
                Ca = 'SubcategoryAnimationItem_particlesAnim_7c',
                ka = 'SubcategoryAnimationItem_oldElement_e1',
                $a = 'SubcategoryAnimationItem_newElement_26',
                Pa = ({ oldElement: e, newElement: t, isStart: a, index: r, onAnimationEnd: o, onPlaySound: i }) => {
                    const c = (0, n.useRef)(null),
                        m = (0, n.useRef)(null),
                        _ = (0, n.useState)(!0),
                        g = _[0],
                        d = _[1],
                        u = (0, n.useRef)(null),
                        p = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                if (!m.current || !c.current) return;
                                const t = e.value.progress;
                                ((c.current.style.maskImage = `linear-gradient(237deg, transparent ${t}%, #000 ${t}%)`),
                                    (m.current.style.maskImage = `linear-gradient(237deg, #000 ${t}%, transparent ${t}%)`));
                            },
                            onRest: () => {
                                o(r);
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            if (a) {
                                const e = 400 * r;
                                return (
                                    p.start({
                                        from: { progress: 0 },
                                        to: { progress: 100 },
                                        delay: e,
                                        config: { duration: Le },
                                    }),
                                    (0, Ct.F)(() => {
                                        var e;
                                        (null == (e = u.current) || e.play(), i());
                                    }, e + 150)
                                );
                            }
                        }, [p, r, a, i]),
                        s().createElement(
                            'div',
                            { className: Aa },
                            g &&
                                s().createElement(l.n, {
                                    ref: u,
                                    onEnded: () => d(!1),
                                    className: Ca,
                                    src: R.videos.achievements.grade_change_particles(),
                                }),
                            s().createElement('div', { className: ka, ref: c }, e),
                            s().createElement('div', { className: $a, ref: m }, t),
                        )
                    );
                };
            var Ia = a(2372);
            const Ra = 'SubcategoryProgress_amount_0a',
                za = 'SubcategoryProgress_quantity_02',
                Oa = 'SubcategoryProgress_quantity__symbol_00',
                Ba = 'SubcategoryProgress_name_1f',
                Ma = 'SubcategoryProgress_score_5c',
                Ga = 'SubcategoryProgress_scoreIcon_68',
                La = 'SubcategoryProgress_scoreCount_fd',
                Da = 'SubcategoryProgress_progressBar_38',
                Fa = R.strings.achievements_page,
                ja = R.strings.advanced_achievements,
                Ta = (0, b.Pi)(({ index: e, onAnimationEnd: t }) => {
                    const a = ye().model,
                        r = a.root.get().isOtherPlayer,
                        l = a.computes.getSubcategory(e),
                        c = l.achievementScore,
                        m = l.prevAchievementScore,
                        g = l.prevValue,
                        p = l.currentValue,
                        b = l.key,
                        h = (0, _.GS)().mediaSize,
                        v = (0, n.useState)(g),
                        y = v[0],
                        f = v[1],
                        S = (0, n.useState)(r ? c : m),
                        E = S[0],
                        x = S[1],
                        w = (0, Ee.useSpring)(
                            () => ({
                                progress: m,
                                onChange: (e) => {
                                    x(e.value.progress);
                                },
                                onRest: () => {
                                    (N.start({ from: { progress: g }, to: { progress: p } }), t());
                                },
                            }),
                            [p],
                        )[1],
                        N = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onStart: () => (0, d.G)(R.sounds.ach_progress_bar_start()),
                            onChange: (e) => {
                                f(Math.floor(e.value.progress));
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            r ||
                                w.start({
                                    from: { progress: m },
                                    to: { progress: c },
                                    delay: 1500 * e,
                                    config: { duration: 100 },
                                });
                        }, [c, w, e, r, m]),
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: Ra },
                                s().createElement('div', { className: za }, y),
                                s().createElement('div', { className: o()(za, Oa) }, R.strings.common.common.percent()),
                            ),
                            s().createElement(
                                'div',
                                { className: Ba },
                                systemLocale.toUpperCase((0, u.z4)(ja.name.$dyn(b))),
                            ),
                            s().createElement(
                                'div',
                                { className: Da },
                                s().createElement(na, {
                                    value: p,
                                    deltaFrom: Math.min(g, p),
                                    size: h < _.cJ.Medium || r ? ft.Small : ft.Medium,
                                    animationSettings: {
                                        freezed: !1,
                                        withStack: !1,
                                        type: St.Growing,
                                        delta: { duration: 400, delay: 1500 * e },
                                        line: { duration: 400, delay: 0 },
                                    },
                                }),
                            ),
                            !r &&
                                s().createElement(
                                    i.l,
                                    {
                                        tooltipArgs: {
                                            header: Fa.achievementsPointsTooltip.header(),
                                            body: Fa.achievementsPointsTooltip.body(),
                                        },
                                    },
                                    s().createElement(
                                        'div',
                                        { className: Ma },
                                        s().createElement('div', { className: Ga }),
                                        s().createElement(
                                            'div',
                                            { className: La },
                                            s().createElement(Ia.A, { value: E, format: 'integral' }),
                                        ),
                                    ),
                                ),
                        )
                    );
                }),
                qa = 'SubcategoryProgressItem_base_de',
                Va = 'SubcategoryProgressItem_base__otherPlayer_ab',
                Ua = 'SubcategoryProgressItem_iconWrapper_7f',
                Wa = 'SubcategoryProgressItem_icon_ed',
                Xa = 'SubcategoryProgressItem_icon__oldElement_ba',
                Ha = 'SubcategoryProgressItem_content_cc',
                Ja = 'SubcategoryProgressItem_counter_36',
                Ka = 'SubcategoryProgressItem_counter__animated_5e',
                Qa = R.strings.advanced_achievements,
                Ya = (0, b.Pi)(({ className: e, index: t, onAnimationEnd: a }) => {
                    const r = ye(),
                        l = r.model,
                        g = r.controls,
                        u = l.root.get(),
                        p = u.isOtherPlayer,
                        b = u.isSkipAnimation,
                        h = (0, _.GS)().mediaSize,
                        v = l.computes.getSubcategory(t),
                        y = v.key,
                        f = v.background,
                        S = v.id,
                        E = v.prevAchievementScore,
                        x = v.prevValue,
                        w = v.category,
                        N = v.currentValue,
                        A = v.achievementScore,
                        C = v.bubbles,
                        k = (0, n.useState)(!1),
                        $ = k[0],
                        P = k[1],
                        I = E !== A;
                    return (
                        (0, n.useEffect)(() => {
                            $ && (0, me.tf)(N) === (0, me.tf)(x) && (P(!1), a(t));
                        }, [N, t, $, a, x]),
                        s().createElement(
                            'div',
                            {
                                className: o()(qa, p && Va, e),
                                onClick: () => {
                                    (((e) => {
                                        p || g.goToDetails(e, w);
                                    })(S),
                                        (0, d.G)(R.sounds.ach_sign()));
                                },
                                onMouseEnter: () => {
                                    p || ((0, d.G)(R.sounds.ach_hover()), g.achievementHover(S, w));
                                },
                            },
                            s().createElement(
                                i.l,
                                {
                                    tooltipArgs: {
                                        header: `${Qa.tooltip.title.$dyn(y)}`,
                                        body: `${Qa.tooltip.description.$dyn(y)}`,
                                    },
                                },
                                p
                                    ? s().createElement(Q, {
                                          keyName: y,
                                          backgroundName: f,
                                          type: c.Cq.Subcategory,
                                          level: (0, me.tf)(N),
                                          size: W.X.S180x180,
                                          classNames: { base: Wa },
                                      })
                                    : s().createElement(
                                          'div',
                                          { className: Ua },
                                          s().createElement(Pa, {
                                              oldElement: s().createElement(Q, {
                                                  keyName: y,
                                                  backgroundName: f,
                                                  type: c.Cq.Subcategory,
                                                  level: (0, me.tf)(x),
                                                  size: (0, xe.d5)(h),
                                                  classNames: { base: o()(Wa, Xa) },
                                              }),
                                              newElement: s().createElement(
                                                  'div',
                                                  { className: Wa },
                                                  s().createElement(Q, {
                                                      keyName: y,
                                                      backgroundName: f,
                                                      type: c.Cq.Subcategory,
                                                      level: (0, me.tf)(N),
                                                      size: (0, xe.d5)(h),
                                                      classNames: { base: Wa },
                                                  }),
                                              ),
                                              isStart: $ && (0, me.tf)(N) !== (0, me.tf)(x),
                                              onAnimationEnd: a,
                                              onPlaySound: () => {
                                                  (0, me.tf)(N) !== xe.z6.Third
                                                      ? (0, d.G)(R.sounds.ach_sub_grade_low())
                                                      : (0, d.G)(R.sounds.ach_sub_grade_high());
                                              },
                                              index: t,
                                          }),
                                          m.graphicsQuality.isHigh() &&
                                              Boolean(C) &&
                                              (0, me.tf)(N) === (0, me.tf)(x) &&
                                              s().createElement(qe, { index: t, currentValue: N, isSkipAnimation: b }),
                                      ),
                            ),
                            s().createElement(
                                'div',
                                { className: Ha },
                                s().createElement(Ta, { index: t, onAnimationEnd: () => P(!0) }),
                            ),
                            Boolean(C) &&
                                s().createElement(
                                    'div',
                                    { className: o()(Ja, I && Ka), style: { animationDelay: Le * t + 1 + 'ms' } },
                                    s().createElement(Ge, { value: C, isEmpty: 1 === C }),
                                ),
                        )
                    );
                }),
                Za = {
                    base: 'SubcategoryList_base_60',
                    item: 'SubcategoryList_item_54',
                    base__specificResolution: 'SubcategoryList_base__specificResolution_17',
                },
                en = (0, b.Pi)(() => {
                    const e = ye(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        r = n.isOtherPlayer,
                        i = n.isSkipAnimation,
                        l = t.computes.getLastIndex(),
                        c = (0, _.GS)(),
                        m = c.mediaWidth,
                        g = c.mediaHeight,
                        d = m === _.fd.ExtraLarge && g === _.Aq.Large && !r,
                        u = (e) => {
                            l !== e || i || a.setAnimationState(be.GeneralPercent);
                        };
                    return s().createElement(
                        'div',
                        { className: o()(Za.base, r && Za.base__otherPlayer, d && Za.base__specificResolution) },
                        et(t.computes.subcategoriesLength(), (e) =>
                            s().createElement(Ya, { key: e, index: e, className: Za.item, onAnimationEnd: u }),
                        ),
                    );
                }),
                tn = {
                    base: 'App_base_4c',
                    wrapper: 'App_wrapper_be',
                    base__otherPlayer: 'App_base__otherPlayer_97',
                    base__lowPreset: 'App_base__lowPreset_f6',
                    innerWrapper: 'App_innerWrapper_26',
                    video: 'App_video_95',
                    header: 'App_header_82',
                    content: 'App_content_c9',
                    quantity: 'App_quantity_ad',
                    name: 'App_name_6e',
                    achievementIcon: 'App_achievementIcon_20',
                    achievementIcon__grade0: 'App_achievementIcon__grade0_c4',
                    footer: 'App_footer_85',
                    cup: 'App_cup_f7',
                    cup__hover: 'App_cup__hover_bf',
                    base__specificResolution: 'App_base__specificResolution_65',
                    hoverWrapper: 'App_hoverWrapper_f2',
                    hoverArea: 'App_hoverArea_57',
                    achievementsScore: 'App_achievementsScore_de',
                },
                an = R.strings.achievements_page.category,
                nn = (0, n.memo)(function () {
                    return s().createElement(l.n, {
                        src: R.videos.achievements.bg_advanced_achievements(),
                        autoplay: !0,
                        loop: !0,
                        className: tn.video,
                    });
                }),
                sn = (0, b.Pi)(() => {
                    const e = ye(),
                        t = e.model,
                        a = e.controls,
                        r = t.root.get(),
                        l = r.achievementsScore,
                        b = r.prevAchievementsScore,
                        h = r.categoryProgress,
                        v = r.maxAchievementsScore,
                        y = r.isOtherPlayer,
                        S = r.categoryName,
                        E = r.categoryBackgroundName,
                        x = r.isSkipAnimation,
                        w = (0, _.GS)(),
                        N = w.mediaSize,
                        C = w.mediaHeight,
                        k = w.mediaWidth,
                        $ = (0, n.useState)(!1),
                        P = $[0],
                        I = $[1],
                        z = t.animationState.get(),
                        O = (0, p.O)().paddings,
                        B = A(),
                        M = k === _.fd.ExtraLarge && C === _.Aq.Large && !y,
                        G = (0, me.tf)(h);
                    ((0, g.b)(() => {
                        z === be.Init && l !== b && a.setAnimationState(be.Category);
                    }),
                        (0, n.useEffect)(() => {
                            l !== b && (a.setAnimationState(be.Category), a.animationInProgress(!0));
                        }, [l, a, b]),
                        (0, n.useEffect)(() => {
                            x && (a.setAnimationState(be.Init), a.animationInProgress(!1), a.allAnimationEnd());
                        }, [a, x]));
                    const L = le(N, C, k);
                    return s().createElement(
                        'div',
                        {
                            className: o()(
                                tn.base,
                                y && tn.base__otherPlayer,
                                M && tn.base__specificResolution,
                                m.graphicsQuality.isLow() && tn.base__lowPreset,
                            ),
                            style: { '--external-paddings-bottom': `${O.bottom}rem` },
                            onClick: (e) =>
                                ((e) => {
                                    y && B(f.AnotherPlayer, e);
                                })(e),
                        },
                        s().createElement(
                            'div',
                            { className: tn.wrapper },
                            m.graphicsQuality.isHigh() && !y && s().createElement(nn, null),
                            s().createElement(
                                'div',
                                { className: o()(tn.achievementIcon, tn[`achievementIcon__grade${G}`]) },
                                s().createElement(Q, {
                                    keyName: S,
                                    backgroundName: E,
                                    type: c.Cq.Category,
                                    level: G,
                                    size: y ? W.X.S280x280 : W.X.S420x420,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: tn.innerWrapper },
                                s().createElement(
                                    'div',
                                    { className: tn.content },
                                    s().createElement(
                                        'div',
                                        { className: tn.header },
                                        s().createElement(ze, { className: tn.quantity }),
                                        s().createElement('div', { className: tn.name }, an.title()),
                                    ),
                                    s().createElement(en, null),
                                    s().createElement(
                                        i.l,
                                        {
                                            className: tn.hoverWrapper,
                                            tooltipArgs: {
                                                header: (0, u.uF)(an.achievementsScore.tooltip.title(), {
                                                    value: l,
                                                    maxValue: v,
                                                }),
                                                body: an.achievementsScore.tooltip.description(),
                                            },
                                        },
                                        s().createElement('div', {
                                            className: tn.hoverArea,
                                            onMouseEnter: () => {
                                                y || (I(!0), (0, d.G)(R.sounds.ach_cup_hover()));
                                            },
                                            onMouseLeave: () => I(!1),
                                            onClick: () => {
                                                y || (a.cupClick(), (0, d.G)(R.sounds.ach_cup_touch()));
                                            },
                                        }),
                                    ),
                                ),
                                s().createElement(Na, { className: tn.footer }),
                                s().createElement(
                                    'div',
                                    { className: o()(tn.cup, P && tn.cup__hover) },
                                    s().createElement($e, { className: tn.achievementsScore }),
                                ),
                            ),
                            !y && s().createElement(ce, { vignetteConfig: L }),
                        ),
                    );
                }),
                rn = { context: 'model.achievementsModel' },
                on = () => s().createElement(ve, { options: rn }, s().createElement(sn, null));
        },
    },
]);
