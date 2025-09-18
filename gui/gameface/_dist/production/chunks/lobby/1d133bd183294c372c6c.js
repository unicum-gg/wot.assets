'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [805],
    {
        9390: (e, t, a) => {
            (a.r(t), a.d(t, { default: () => sn }));
            var n = a(7363),
                r = a.n(n),
                s = a(6483),
                o = a.n(s),
                i = a(3415),
                l = a(8432),
                c = a(974),
                m = a(5959),
                _ = a(5415),
                u = a(2039),
                d = a(7727),
                g = a(3649),
                p = a(3403),
                b = a(4593);
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
                N = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: r }) => ({
                    item: t,
                    partnerID: e || null,
                    parent_screen: a || null,
                    item_state: n || null,
                    additional_info: r || null,
                }),
                w = (e, t) => {
                    const a = (0, n.useCallback)(
                        (a, n = S.Info, r) => {
                            (r || (r = {}),
                                Object.keys(r).length >= 200 ||
                                    window.uiLoggerModel.log({
                                        feature: e,
                                        group: t,
                                        action: a,
                                        logLevel: n,
                                        params: JSON.stringify(r),
                                    }));
                        },
                        [e, t],
                    );
                    return (e, t, n) => a(e, t, n);
                },
                A = () => {
                    const e = ((e) => {
                        const t = w(e, x),
                            a = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, N(e));
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
                G = (e, t, a, n, r, s) => {
                    const o = a ? '_trophy' : '',
                        i = e === k.bn.Shield ? `_tier_${r}` : '',
                        l = ((e) => (e === c.Em.PersonalMissions ? O : z))(s),
                        m = l[t],
                        _ = ((e, t) => {
                            if (t === k.sg.S360x360 && e === k.Bw.s218x176) return { width: 188, height: 150 };
                            const a = e.substring(1).split('x');
                            return { width: a[0], height: a[1] };
                        })(m, t),
                        u = _.width,
                        d = _.height,
                        g = P.icons.$dyn(`${n}${o}${i}_${m}`);
                    return g
                        ? { backgroundImage: `url(${g})`, width: `${u}rem`, height: `${d}rem` }
                        : { width: `${u}rem`, height: `${d}rem` };
                },
                L = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n = k.sg.S180x180,
                    level: s = 0,
                    stage: i = 0,
                    isTrophy: l = !1,
                    iconPosition: m = c.x_.Center,
                    iconSizeMap: _ = c.Em.Default,
                    classNames: u,
                }) => {
                    const d = I[t] || k.bn.Circular,
                        p = n === k.sg.Flexable ? k.sg.S420x420 : n;
                    return r().createElement(
                        'div',
                        { className: o()(C.base, C[`base__${n}`], C[`base__${d}`], null == u ? void 0 : u.base) },
                        r().createElement('div', {
                            className: o()(C.background, null == u ? void 0 : u.background),
                            style: M(d, p, l, a),
                        }),
                        r().createElement('div', {
                            className: o()(C.border, null == u ? void 0 : u.border),
                            style: B(d, p, l, s),
                        }),
                        r().createElement('div', {
                            className: o()(
                                C.icon,
                                C[`icon__${m}`],
                                C[`icon__${(0, g.TD)(_)}`],
                                null == u ? void 0 : u.icon,
                            ),
                            style: G(d, n, l, e, s, _),
                        }),
                        t === $.Staged &&
                            Boolean(i) &&
                            r().createElement(
                                'div',
                                {
                                    className: o()(C.stage, null == u ? void 0 : u.stage),
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
            let F, T;
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
                })(T || (T = {})));
            const j = R.images.gui.maps.icons.advanced_achievements,
                q = {
                    [F.S100x100]: T.s54x68,
                    [F.S128x128]: T.s68x82,
                    [F.S180x180]: T.s100x118,
                    [F.S280x280]: T.s156x182,
                    [F.S360x360]: T.s200x236,
                    [F.S420x420]: T.s250x278,
                },
                V = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = F.S280x280,
                    level: n = 0,
                    isTrophy: s = !1,
                    classNames: i,
                }) => {
                    const l = a === F.Flexable ? F.S420x420 : a;
                    return r().createElement(
                        'div',
                        { className: o()(D.base, D[`base__${a}`], null == i ? void 0 : i.base) },
                        r().createElement('div', {
                            className: o()(D.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${j.backgrounds.category.$dyn(`${t}_${l}`)})` },
                        }),
                        r().createElement('div', {
                            className: o()(D.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${j.borders.category.$dyn(s ? `trophy_${l}` : `tier_${n}_${l}`)})`,
                            },
                        }),
                        r().createElement('div', {
                            className: o()(D.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${j.icons.category.$dyn(`${e}_${n}_${q[l]}`)})` },
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
            var X = a(587);
            const W = R.images.gui.maps.icons.advanced_achievements,
                H = {
                    [X.X.S100x100]: X.y.s52x62,
                    [X.X.S128x128]: X.y.s68x72,
                    [X.X.S180x180]: X.y.s94x94,
                    [X.X.S280x280]: X.y.s144x140,
                    [X.X.S360x360]: X.y.s188x176,
                    [X.X.S420x420]: X.y.s218x212,
                    [X.X.S480x480]: X.y.s250x198,
                },
                J = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = X.X.S280x280,
                    level: n = 0,
                    isTrophy: s = !1,
                    classNames: i,
                }) => {
                    const l = a === X.X.Flexable ? X.X.S480x480 : a;
                    return r().createElement(
                        'div',
                        { className: o()(U.base, U[`base__${a}`], null == i ? void 0 : i.base) },
                        r().createElement('div', {
                            className: o()(U.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${W.backgrounds.subcategory.$dyn(`${t}_${l}`)})` },
                        }),
                        r().createElement('div', {
                            className: o()(U.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${W.borders.subcategory.$dyn(s ? `trophy_${l}` : `tier_${n}_${l}`)})`,
                            },
                        }),
                        r().createElement('div', {
                            className: o()(U.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${W.icons.subcategory.$dyn(`${e}_${n}_${H[l]}`)})` },
                        }),
                    );
                },
                K = { [c.Cq.Single]: $.Single, [c.Cq.Staged]: $.Staged, [c.Cq.Cumulative]: $.Cumulative },
                Q = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n,
                    level: s,
                    stage: o,
                    isTrophy: i,
                    iconPosition: l,
                    iconSizeMap: m,
                    classNames: _,
                }) => {
                    switch (t) {
                        case c.Cq.Category:
                            return r().createElement(V, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: s,
                                isTrophy: i,
                                classNames: _,
                            });
                        case c.Cq.Subcategory:
                            return r().createElement(J, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: s,
                                isTrophy: i,
                                classNames: _,
                            });
                        case c.Cq.Single:
                        case c.Cq.Staged:
                        case c.Cq.Cumulative:
                            return r().createElement(L, {
                                keyName: e,
                                type: K[t],
                                backgroundName: a,
                                size: n,
                                level: s,
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
                re = { top: 0, right: 0, bottom: 0, left: 0 },
                se = { top: 20, right: 20, bottom: 20, left: 20 },
                oe = { top: 20, right: 0, bottom: 20, left: 0 },
                ie = { top: 0, right: 20, bottom: 0, left: 20 },
                le = (e, t, a, n) => {
                    const r = (0, m.getSize)('rem'),
                        s = r.height,
                        o = r.width,
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
                    return (s > t + c && o > a + l) || n ? se : s > t + c ? oe : o > a + l ? ie : re;
                },
                ce = ({ vignetteConfig: e = re }) =>
                    r().createElement(
                        'div',
                        { className: Y },
                        r().createElement('div', {
                            className: o()(Z, ee),
                            style: { backgroundSize: `100% ${e.top}%` },
                        }),
                        r().createElement('div', {
                            className: o()(Z, te),
                            style: { backgroundSize: `${e.right}% 100%` },
                        }),
                        r().createElement('div', {
                            className: o()(Z, ae),
                            style: { backgroundSize: `100% ${e.bottom}%` },
                        }),
                        r().createElement('div', {
                            className: o()(Z, ne),
                            style: { backgroundSize: `${e.left}% 100%` },
                        }),
                    );
            var me = a(1645),
                _e = a(3215),
                ue = a(4598),
                de = a(9480),
                ge = a(9174),
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
                                animationState: ge.LO.box(be.Init),
                            },
                            a = (0, pe.Om)(() => de.v(t.upcomingAchievements.get(), (e) => Object.assign({}, e)), {
                                equals: ue.jv,
                            }),
                            n = (0, pe.Om)(
                                (e) => {
                                    const t = de.U2(a(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected upcoming achievement index: ${e}`);
                                },
                                { equals: ue.jv },
                            ),
                            r = (0, pe.Om)(() => de.v(t.subcategories.get(), (e) => Object.assign({}, e)), {
                                equals: ue.jv,
                            }),
                            s = (0, pe.Om)(
                                (e) => {
                                    const t = de.U2(r(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected subcategory index: ${e}`);
                                },
                                { equals: ue.jv },
                            ),
                            o = (0, pe.Om)(() => {
                                var e;
                                return null !=
                                    (e = (0, de.kd)(r(), ({ achievementScore: e, prevAchievementScore: t }) => e !== t))
                                    ? e
                                    : 0;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                upcomingLength: (0, pe.Om)(() => a().length),
                                subcategoriesLength: (0, pe.Om)(() => r().length),
                                getUpcomingAchievement: n,
                                getSubcategory: s,
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
                        setAnimationState: (0, ge.aD)((e) => {
                            t.animationState.set(e);
                        }),
                        achievementHover: e.createCallback(
                            (e, t) => ({ achievementId: e, achievementCategory: t }),
                            'onAchievementHover',
                        ),
                    }),
                ),
                ve = he[0],
                ye = he[1];
            var fe = a(9766),
                Se = a(7522),
                Ee = a(7030),
                xe = a(44);
            const Ne = {
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
                we = R.strings.achievements_page.category.achievementsScore,
                Ae = 'grade_1',
                Ce = 'grade_2',
                ke = 'grade_3',
                $e = (0, p.Pi)(({ className: e }) => {
                    const t = ye(),
                        a = t.model,
                        s = t.controls,
                        i = a.root.get(),
                        l = i.prevAchievementsScore,
                        c = i.achievementsScore,
                        m = (0, n.useState)(l),
                        _ = m[0],
                        u = m[1],
                        g = (0, n.useState)(!1),
                        p = g[0],
                        b = g[1],
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
                                u(Math.floor(e.value.progress));
                            },
                            onRest: () => {
                                (b(!1), s.setAnimationState(be.Init), s.animationInProgress(!1), s.allAnimationEnd());
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
                        r().createElement(
                            'div',
                            { className: o()(Ne.base, p && Ne.base__animation, Ne[`base__${v.name}`], e) },
                            r().createElement('div', { className: Ne.shine }),
                            r().createElement(
                                'div',
                                { className: Ne.amount },
                                r().createElement('div', { className: Ne.count }, y),
                                r().createElement('div', { className: Ne.countGlow }, y),
                                r().createElement('div', { className: o()(Ne.count, Ne.count__blur) }, y),
                            ),
                            r().createElement(
                                'div',
                                { className: Ne.label },
                                r().createElement(
                                    'div',
                                    { className: Ne.glowWrapper },
                                    r().createElement('div', { className: Ne.glow }),
                                ),
                                r().createElement(fe.z, { text: we.title() }),
                            ),
                        )
                    );
                }),
                Pe = 'CategoryProgress_base_51',
                Ie = 'CategoryProgress_count_91',
                ze = 'CategoryProgress_count__symbol_5c',
                Re = (0, p.Pi)(({ className: e }) => {
                    const t = ye(),
                        a = t.model,
                        s = t.controls,
                        i = a.root.get(),
                        l = i.categoryProgress,
                        c = i.prevCategoryProgress,
                        m = (0, n.useState)(c),
                        _ = m[0],
                        u = m[1],
                        d = a.animationState.get(),
                        g = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                u(Math.floor(e.value.progress));
                            },
                            onRest: () => s.setAnimationState(be.Score),
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            d === be.GeneralPercent &&
                                (l === c && s.setAnimationState(be.Score),
                                g.start({ from: { progress: c }, to: { progress: l } }));
                        }, [g, d, l, s, c]),
                        r().createElement(
                            'div',
                            { className: o()(Pe, e) },
                            r().createElement('div', { className: Ie }, _),
                            r().createElement('div', { className: o()(Ie, ze) }, R.strings.common.common.percent()),
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
                        n = e.className,
                        s = e.size,
                        i = void 0 === s ? 'normal' : s,
                        l = e.fadeInAnimation,
                        c = void 0 !== l && l,
                        m = e.hide,
                        _ = void 0 !== m && m,
                        u = e.maximumNumber,
                        d = void 0 === u ? 99 : u,
                        g = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, Be);
                    const p = a ? null : t,
                        b = 'string' == typeof p;
                    if ((p && !b && p < 0) || 0 === p) return null;
                    const h = p && !b && p > d,
                        v = o()(
                            Oe.base,
                            Oe[`base__${i}`],
                            c && Oe.base__animated,
                            _ && Oe.base__hidden,
                            !p && Oe.base__pattern,
                            a && Oe.base__empty,
                            n,
                        );
                    return r().createElement(
                        'div',
                        Me({ className: v }, g),
                        r().createElement('div', { className: Oe.bg }),
                        r().createElement('div', { className: Oe.pattern }),
                        r().createElement(
                            'div',
                            { className: o()(Oe.value, b && Oe.value__text) },
                            h ? d : p,
                            h && r().createElement('span', { className: Oe.plus }, '+'),
                        ),
                    );
                },
                Le = 1e3,
                De = 'GlowWithMask_glowBox_e3',
                Fe = 'GlowWithMask_glowInner_c9',
                Te = 'GlowWithMask_glow_a5',
                je = R.images.gui.maps.icons.advanced_achievements.borders,
                qe = ({ currentValue: e, index: t, isTrophy: a, isOtherPlayer: s, isSkipAnimation: o }) => {
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
                        u = (0, n.useCallback)(() => {
                            m.start({
                                from: { transform: 'translateX(-106%)' },
                                to: { transform: 'translateX(104%)' },
                                delay: 2e3 * (t + 1),
                            });
                        }, [t, m]);
                    return (
                        (0, n.useEffect)(() => {
                            if (!o) {
                                const e = setInterval(u, 8e3);
                                return () => {
                                    clearInterval(e);
                                };
                            }
                        }, [u, o]),
                        r().createElement(
                            'div',
                            {
                                className: De,
                                style: {
                                    maskImage: `url(${a ? je.category.$dyn(`trophy_${i < _.cJ.Medium || s ? X.X.S100x100 : X.X.S180x180}`) : je.subcategory.$dyn(`tier_${(0, me.tf)(e)}_${(0, xe.d5)(i)}`)})`,
                                },
                            },
                            r().createElement(
                                Ee.animated.div,
                                { className: Fe, style: c },
                                r().createElement('div', { className: Te }),
                            ),
                        )
                    );
                },
                Ve = 'Trophy_base_28',
                Ue = 'Trophy_icon_60',
                Xe = 'Trophy_base__inactive_71',
                We = 'Trophy_icon__otherPlayer_4c',
                He = 'Trophy_content_8c',
                Je = 'Trophy_count_cb',
                Ke = 'Trophy_label_24',
                Qe = 'Trophy_counter_4c',
                Ye = R.strings.advanced_achievements,
                Ze = (0, p.Pi)(() => {
                    const e = ye(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        s = n.isOtherPlayer,
                        l = n.isSkipAnimation,
                        u = t.trophy.get(),
                        g = u.key,
                        p = u.background,
                        b = u.currentValue,
                        h = u.prevValue,
                        v = u.bubbles,
                        y = (0, _.GS)().mediaSize,
                        f = s || 0 === b;
                    return r().createElement(
                        i.l,
                        {
                            tooltipArgs: {
                                header: Ye.tooltip.title.trophies(),
                                body: Ye.tooltip.description.trophies(),
                            },
                        },
                        r().createElement(
                            'div',
                            { className: o()(Ve, f && Xe) },
                            r().createElement(
                                'div',
                                {
                                    className: o()(Ue, s && We),
                                    onClick: () => {
                                        f || ((0, d.G)(R.sounds.ach_sign()), a.goToTrophies());
                                    },
                                    onMouseEnter: () => {
                                        f || (0, d.G)(R.sounds.ach_hover());
                                    },
                                },
                                r().createElement(Q, {
                                    keyName: g,
                                    backgroundName: p,
                                    type: c.Cq.Category,
                                    size: y < _.cJ.Large || s ? F.S100x100 : F.S180x180,
                                    isTrophy: !0,
                                }),
                                Boolean(v) &&
                                    r().createElement(
                                        'div',
                                        { className: Qe },
                                        r().createElement(Ge, { value: v, isEmpty: 1 === v }),
                                    ),
                                m.graphicsQuality.isHigh() &&
                                    b !== h &&
                                    r().createElement(qe, {
                                        currentValue: b,
                                        index: t.computes.getLastIndex() + 1,
                                        isTrophy: !0,
                                        isOtherPlayer: s,
                                        isSkipAnimation: l,
                                    }),
                            ),
                            r().createElement(
                                'div',
                                { className: He },
                                r().createElement('div', { className: Je }, b),
                                r().createElement(
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
                    var r;
                    n.font = `${at((r = t), 'font-weight')} ${at(r, 'font-size')} ${at(r, 'font-family')}`;
                    return n.measureText(e).width;
                },
                rt = (e) => {
                    if (e.start >= e.end - 1) return e.start;
                    const t = Math.floor((e.start + e.end) / 2),
                        a = e.words.slice(0, t).join(' '),
                        n = Math.ceil(nt(a, e.element, e.canvas) / e.element.getBoundingClientRect().width);
                    return rt(n <= 1 ? Object.assign({}, e, { start: t }) : Object.assign({}, e, { end: t }));
                },
                st = 'MultilineOverflow_base_d9',
                ot = 'MultilineOverflow_base__truncated_a1',
                it = 'MultilineOverflow_text_ce',
                lt = 'MultilineOverflow_truncatedContent_da',
                ct = 'MultilineOverflow_singleLine_bb',
                mt = 'MultilineOverflow_line_51',
                _t = ['text', 'lines', 'className', 'onChange'];
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
            const dt = (0, n.forwardRef)(function (e, t) {
                let a = e.text,
                    s = e.lines,
                    i = e.className,
                    l = e.onChange,
                    c = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            r = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                        return r;
                    })(e, _t);
                const m = (0, n.useRef)(null),
                    _ = (0, n.useRef)(null),
                    d = (0, n.useState)(!1),
                    g = d[0],
                    p = d[1],
                    b = (0, n.useState)([]),
                    h = b[0],
                    v = b[1],
                    y = (0, n.useState)(0),
                    f = y[0],
                    S = y[1],
                    E = (function () {
                        const e = (0, n.useRef)(0);
                        return (
                            (0, u.k)(() => {
                                window.cancelAnimationFrame(e.current);
                            }),
                            (0, n.useMemo)(
                                () => ({
                                    run: (t) => {
                                        (window.cancelAnimationFrame(e.current),
                                            (e.current = window.requestAnimationFrame(() => {
                                                e.current = window.requestAnimationFrame(() => {
                                                    (t(), (e.current = 0));
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
                    x = (0, n.useMemo)(() => document.createElement('canvas'), []),
                    N = (0, n.useCallback)(() => (_.current ? _.current.getBoundingClientRect().height : 0), []),
                    w = (0, n.useCallback)(
                        (e) => {
                            const t = N();
                            return e && t ? Math.round(e.scrollHeight / t) : 0;
                        },
                        [N],
                    ),
                    A = (0, n.useCallback)(() => {
                        if (w(m.current) <= s) return p(!1);
                        p(!0);
                        const e = a.split(' '),
                            t = Array.from(new Array(s)).reduce((t, a, n) => {
                                if (!m.current) return t;
                                const r = t.reduce((e, t) => e + t.length, 0),
                                    o = e.slice(r);
                                if (n === s - 1) return (t.push(o), t);
                                const i = rt({ start: 0, end: o.length, words: o, element: m.current, canvas: x });
                                return (t.push(o.slice(0, i)), t);
                            }, []);
                        v(t);
                    }, [x, w, s, a]),
                    C = (0, n.useCallback)(() => {
                        E.run(() => {
                            (S(N() * s), A());
                        });
                    }, [N, s, E, A]);
                var k, $;
                return (
                    (0, n.useEffect)(C, [C]),
                    (k = C),
                    ($ = [C]),
                    (0, n.useEffect)(
                        () => (window.addEventListener('resize', k), () => window.removeEventListener('resize', k)),
                        $,
                    ),
                    (0, n.useEffect)(() => {
                        null == l || l(g);
                    }, [l, g]),
                    r().createElement(
                        'div',
                        ut({}, c, { ref: t, className: o()(st, i, g && ot) }),
                        r().createElement('div', { ref: m, className: it, style: { maxHeight: `${f}rem` } }, a),
                        r().createElement(
                            'div',
                            { className: lt },
                            h.map((e, t) => r().createElement('div', { key: t, className: mt }, e.join(' '))),
                        ),
                        r().createElement('div', { ref: _, className: ct }, R.strings.common.common.dot()),
                    )
                );
            });
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
            const pt = (0, n.forwardRef)(function (e, t) {
                const a = (0, n.useState)(!1),
                    s = a[0],
                    o = a[1];
                return r().createElement(
                    tt.i,
                    { isEnabled: s, body: e.text },
                    r().createElement(dt, gt({}, e, { ref: t, onChange: o })),
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
                    return r().createElement('div', { className: t });
                },
                xt = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                Nt = ({ size: e }) => {
                    const t = o()(xt.base, xt[`base__${e}`]);
                    return r().createElement('div', { className: t });
                },
                wt = {
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
                    ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: s, withoutBounce: i }) => {
                        const l = o()(
                                wt.base,
                                wt[`base__${e}`],
                                a && wt.base__disabled,
                                s && wt.base__finished,
                                i && wt.base__withoutBounce,
                            ),
                            c = !a && !s;
                        return r().createElement(
                            'div',
                            { className: l, style: n, ref: t },
                            r().createElement('div', { className: wt.pattern }),
                            r().createElement('div', { className: wt.gradient }),
                            c && r().createElement(Nt, { size: e }),
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
                zt = 'ProgressBarDeltaGrow_glow_68',
                Rt = (e) => (e ? { left: 0 } : { right: 0 }),
                Ot = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                Bt = (e) => ({ transitionDuration: `${e}ms` }),
                Mt = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: s,
                        size: i,
                        to: l,
                        onEndAnimation: c,
                        onChangeAnimationState: m,
                        className: _,
                    }) => {
                        const u = l < s,
                            d = (0, n.useState)(kt.Idle),
                            g = d[0],
                            p = d[1],
                            b = g === kt.End,
                            h = g === kt.Idle,
                            v = g === kt.Grow,
                            y = g === kt.Shrink,
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
                        const E = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Bt(e), Rt(u)), [u, e]),
                            x = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Bt(e), Rt(u)), [u, e]),
                            N = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ot(u, s), Bt(e)), [s, u, e]),
                            w = (0, n.useMemo)(
                                () => Object.assign({ width: `${Math.abs(l - s)}%` }, Ot(u, s), Bt(e)),
                                [s, u, l, e],
                            );
                        if (b) return null;
                        const A = o()(Pt, _, u && 0 === l && It);
                        return r().createElement(
                            'div',
                            { style: h ? N : w, className: A },
                            r().createElement(
                                'div',
                                { style: y ? x : E, className: zt },
                                r().createElement(Nt, { size: i }),
                            ),
                        );
                    },
                ),
                Gt = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: s,
                        disabled: o,
                        isComplete: i,
                        animationSettings: l,
                        onEndAnimation: c,
                        onChangeAnimationState: m,
                    }) => {
                        const _ = e < a,
                            u = (0, n.useState)(!1),
                            d = u[0],
                            g = u[1],
                            p = (0, n.useCallback)(
                                (e) => {
                                    (e === kt.Shrink && g(!0), m && m(e));
                                },
                                [m],
                            ),
                            b = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            h = (0, n.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                [l.line.duration, e],
                            );
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(At, {
                                size: t,
                                lineRef: s,
                                disabled: o,
                                isComplete: i,
                                withoutBounce: _ && 0 === e,
                                baseStyles: d ? h : b,
                            }),
                            a >= 0 &&
                                r().createElement(Mt, {
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
                        from: s,
                        size: o,
                        to: i,
                        onEndAnimation: l,
                        onChangeAnimationState: c,
                    }) => {
                        const m = i < s,
                            _ = (0, n.useState)($t.Idle),
                            u = _[0],
                            d = _[1],
                            g = u === $t.In,
                            p = u === $t.End,
                            b = u === $t.Idle,
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
                                if (g) {
                                    const a = e + t;
                                    return (0, Ct.F)(() => {
                                        (l && l(), h($t.End));
                                    }, a);
                                }
                            }, [h, g, l, t, e]));
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
                                () => ({ width: `${Math.abs(s - i)}%`, left: `${m ? i : s}%` }),
                                [s, m, i],
                            );
                        return p
                            ? null
                            : r().createElement(
                                  'div',
                                  { className: Lt, style: f },
                                  r().createElement(
                                      'div',
                                      { style: b ? v : y, className: Dt },
                                      r().createElement(Nt, { size: o }),
                                  ),
                              );
                    },
                ),
                Tt = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: s,
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
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(At, { size: t, lineRef: s, disabled: o, isComplete: i, baseStyles: _ }),
                            a >= 0 &&
                                r().createElement(Ft, {
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
                jt = ['onComplete', 'onEndAnimation'];
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
                        s = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                n,
                                r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                            return r;
                        })(e, jt);
                    const o = (0, n.useState)(!1),
                        i = o[0],
                        l = o[1],
                        c = (0, n.useCallback)(() => {
                            const e = 100 === s.to;
                            (e !== i && l(e), e && t && t(), a && a());
                        }, [i, t, a, s.to]);
                    switch (s.animationSettings.type) {
                        case St.Simple:
                            return r().createElement(Tt, qt({}, s, { onEndAnimation: c, isComplete: i }));
                        case St.Growing:
                            return r().createElement(Gt, qt({}, s, { onEndAnimation: c, isComplete: i }));
                        default:
                            return null;
                    }
                }),
                Ut = ({ size: e, value: t, lineRef: a, disabled: s, onComplete: o }) => {
                    const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        l = 100 === t;
                    return (
                        (0, n.useEffect)(() => {
                            l && o && o();
                        }, [l, o]),
                        r().createElement(At, { size: e, disabled: s, baseStyles: i, isComplete: l, lineRef: a })
                    );
                },
                Xt = ['onEndAnimation'];
            function Wt() {
                return (
                    (Wt =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var a = arguments[t];
                                for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
                            }
                            return e;
                        }),
                    Wt.apply(this, arguments)
                );
            }
            const Ht = (0, n.memo)((e) => {
                let t = e.onEndAnimation,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            n,
                            r = {},
                            s = Object.keys(e);
                        for (n = 0; n < s.length; n++) ((a = s[n]), t.indexOf(a) >= 0 || (r[a] = e[a]));
                        return r;
                    })(e, Xt);
                const s = (0, n.useRef)({}),
                    o = (0, n.useCallback)(() => {
                        ((s.current.from = void 0), t && t());
                    }, [t]),
                    i = 'number' == typeof s.current.from ? s.current.from : a.from;
                return (
                    (s.current.from = i),
                    r().createElement(
                        Vt,
                        Wt({}, a, {
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
                        deltaFrom: s,
                        additionalKey: o,
                        animationSettings: i,
                        onEndAnimation: l,
                        onChangeAnimationState: c,
                        onComplete: m,
                    }) => {
                        if (s === t)
                            return r().createElement(Ut, {
                                key: `${s}-${t}-${o}`,
                                size: e,
                                value: t,
                                lineRef: a,
                                disabled: n,
                                onComplete: m,
                            });
                        const _ = {
                            from: s,
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
                            ? r().createElement(Ht, _)
                            : r().createElement(Vt, Jt({ key: `${s}-${t}-${o}` }, _));
                    },
                ),
                Qt = (e) => {
                    var t, a, n, r, s, o, i, l, c, m, _, u, d, g, p, b, h, v, y, f;
                    return {
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-bg-height': null != (t = null == (a = e.bg) ? void 0 : a.height) ? t : '12rem',
                        '--progress-bg-height-small':
                            null != (n = null == (r = e.bg) ? void 0 : r.heightSmall) ? n : '2rem',
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-line-filter': null != (s = e.line.filter) ? s : 'none',
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
                            null != (_ = null == (u = e.glowSettings) ? void 0 : u.width) ? _ : '60rem',
                        '--progress-glow-height':
                            null != (d = null == (g = e.glowSettings) ? void 0 : g.height) ? d : '100rem',
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
                };
            var Yt = a(7515);
            const Zt = (e, t, a) => {
                if ('number' == typeof a) {
                    return ((0, Yt.u)(0, t, a) / t) * 100;
                }
                return e;
            };
            const ea = {
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
                ta = {
                    freezed: !1,
                    withStack: !1,
                    type: St.Growing,
                    delta: { duration: 500, delay: 0 },
                    line: { duration: 500, delay: 0 },
                },
                aa = (0, n.memo)(
                    ({
                        maxValue: e = 100,
                        theme: t = ea,
                        size: a = ft.Default,
                        animationSettings: s = ta,
                        disabled: i = !1,
                        withoutBackground: l = !1,
                        value: c,
                        deltaFrom: m,
                        additionalKey: _,
                        lineRef: u,
                        onChangeAnimationState: d,
                        onEndAnimation: g,
                        onComplete: p,
                        className: b,
                    }) => {
                        const h = (function (e, t, a) {
                            return (0, n.useMemo)(() => {
                                const n = ((0, Yt.u)(0, t, e) / t) * 100;
                                return { value: n, deltaFrom: Zt(n, t, a) };
                            }, [a, t, e]);
                        })(c, e, m);
                        return r().createElement(
                            'div',
                            { className: o()(yt.base, b, yt[`base__${a}`]), style: Qt(t) },
                            !l && r().createElement(Et, { size: a }),
                            r().createElement(Kt, {
                                size: a,
                                lineRef: u,
                                disabled: i,
                                value: h.value,
                                deltaFrom: h.deltaFrom,
                                additionalKey: _,
                                animationSettings: s,
                                onEndAnimation: g,
                                onChangeAnimationState: d,
                                onComplete: p,
                            }),
                        );
                    },
                ),
                na = 'Progress_base_37',
                ra = 'Progress_caption_37',
                sa = 'Progress_steppedText_6a',
                oa = 'Progress_separator_d1',
                ia = 'Progress_accentText_1c',
                la = ({ progressType: e, currentValue: t, maxValue: a, classNames: n, className: s }) =>
                    r().createElement(
                        'div',
                        { className: o()(na, s) },
                        r().createElement(aa, { value: t, maxValue: a, size: ft.Small }),
                        r().createElement(
                            'div',
                            { className: o()(ra, null == n ? void 0 : n.caption) },
                            e === ht.Stepped
                                ? r().createElement(
                                      'div',
                                      { className: sa },
                                      r().createElement('div', { className: ia }, t),
                                      r().createElement('div', { className: oa }, '/'),
                                      a,
                                  )
                                : r().createElement(
                                      'div',
                                      { className: ia },
                                      (0, g.uF)(R.strings.common.percentValue(), { value: t }),
                                  ),
                        ),
                    ),
                ca = {
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
                ma = R.strings.advanced_achievements,
                _a = (0, p.Pi)(({ index: e, size: t, className: a }) => {
                    const n = ye(),
                        s = n.model,
                        i = n.controls,
                        l = s.root.get().isOtherPlayer,
                        c = s.computes.getUpcomingAchievement(e),
                        m = c.key,
                        _ = c.maxValue,
                        u = c.currentValue,
                        p = c.background,
                        b = c.type,
                        h = c.id,
                        v = c.category,
                        y = c.stage,
                        f = c.iconPosition,
                        S = c.iconSizeMap,
                        E = c.specificItemName,
                        x = c.isResearchable,
                        N = c.specificItemLevel,
                        w = x
                            ? (0, g.uF)(R.strings.advanced_achievements.collectVehicle(), { item: E })
                            : (0, g.uF)((0, g.z4)(ma.description.$plural(m, _)), { maxValue: _, level: (0, vt.HG)(N) }),
                        A = (0, me.Ai)(m);
                    return r().createElement(
                        'div',
                        {
                            onClick: () => {
                                l || ((0, d.G)(R.sounds.ach_sign()), i.goToDetails(h, v));
                            },
                            onMouseEnter: () => {
                                l || (0, d.G)(R.sounds.ach_hover());
                            },
                            className: o()(ca.base, l && ca.base__otherPlayer, a),
                        },
                        r().createElement(
                            'div',
                            { className: ca.wrapper },
                            r().createElement(Q, {
                                keyName: m,
                                backgroundName: p,
                                type: b,
                                level: (0, me.tf)((0, me.bV)(u, _)),
                                size: t,
                                stage: y,
                                iconPosition: f,
                                iconSizeMap: S,
                                classNames: { base: ca.icon, stage: ca.stage },
                            }),
                            !l &&
                                r().createElement(la, {
                                    progressType: ht.Stepped,
                                    classNames: { caption: ca.progressCaption },
                                    className: ca.progressBar,
                                    currentValue: u,
                                    maxValue: _,
                                }),
                        ),
                        r().createElement(
                            'div',
                            { className: o()(ca.holder, l && ca.base__otherPlayer) },
                            r().createElement(
                                'div',
                                { className: ca.title },
                                r().createElement(bt.l, {
                                    content: 'staged' === b ? (0, me.Mu)(b, y, A) : `${(0, g.z4)(A)}`,
                                }),
                            ),
                            r().createElement(pt, { className: ca.description, text: w, lines: 2 }),
                        ),
                    );
                }),
                ua = 'UpcomingList_base_e2',
                da = 'UpcomingList_label_b6',
                ga = 'UpcomingList_base__otherPlayer_8d',
                pa = 'UpcomingList_item_d2',
                ba = 'UpcomingList_base__specificResolution_19',
                ha = R.strings.achievements_page.category,
                va = (0, p.Pi)(() => {
                    const e = ye().model,
                        t = e.root.get().isOtherPlayer,
                        a = (0, _.GS)(),
                        n = a.mediaSize,
                        s = a.mediaWidth,
                        i = a.mediaHeight,
                        l = n > _.cJ.ExtraSmall && !t ? 2 : 1,
                        c = s === _.fd.ExtraLarge && i === _.Aq.Large && !t;
                    return r().createElement(
                        'div',
                        { className: o()(ua, t && ga, c && ba) },
                        r().createElement(
                            'div',
                            { className: da },
                            r().createElement(fe.z, { text: t ? ha.received.title() : ha.upcoming.title() }),
                        ),
                        et(e.computes.upcomingLength(), (e) => {
                            if (!(e > l))
                                return r().createElement(_a, {
                                    className: pa,
                                    index: e,
                                    key: e,
                                    size: (0, xe.pL)(n, t),
                                });
                        }),
                    );
                }),
                ya = 'Footer_base_2b',
                fa = 'Footer_base__leftAlign_ac',
                Sa = 'Footer_trophy_b6',
                Ea = 'Footer_upcomingList__otherPlayer_b4',
                xa = 'Footer_upcomingList_a1',
                Na = (0, p.Pi)(({ className: e }) => {
                    const t = ye().model,
                        a = t.root.get().isOtherPlayer,
                        n = t.computes.upcomingLength,
                        s = (0, _.GS)().mediaSize,
                        i = n() < 2 || (n() < 3 && s > _.cJ.ExtraSmall && !a);
                    return r().createElement(
                        'div',
                        { className: o()(ya, i && fa, e) },
                        r().createElement('div', { className: Sa }, r().createElement(Ze, null)),
                        Boolean(n()) &&
                            r().createElement('div', { className: o()(xa, a && Ea) }, r().createElement(va, null)),
                    );
                }),
                wa = 'SubcategoryAnimationItem_base_b3',
                Aa = 'SubcategoryAnimationItem_particlesAnim_7c',
                Ca = 'SubcategoryAnimationItem_oldElement_e1',
                ka = 'SubcategoryAnimationItem_newElement_26',
                $a = ({ oldElement: e, newElement: t, isStart: a, index: s, onAnimationEnd: o, onPlaySound: i }) => {
                    const c = (0, n.useRef)(null),
                        m = (0, n.useRef)(null),
                        _ = (0, n.useState)(!0),
                        u = _[0],
                        d = _[1],
                        g = (0, n.useRef)(null),
                        p = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                if (!m.current || !c.current) return;
                                const t = e.value.progress;
                                ((c.current.style.maskImage = `linear-gradient(237deg, transparent ${t}%, #000 ${t}%)`),
                                    (m.current.style.maskImage = `linear-gradient(237deg, #000 ${t}%, transparent ${t}%)`));
                            },
                            onRest: () => {
                                o(s);
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            if (a) {
                                const e = 400 * s;
                                return (
                                    p.start({
                                        from: { progress: 0 },
                                        to: { progress: 100 },
                                        delay: e,
                                        config: { duration: Le },
                                    }),
                                    (0, Ct.F)(() => {
                                        var e;
                                        (null == (e = g.current) || e.play(), i());
                                    }, e + 150)
                                );
                            }
                        }, [p, s, a, i]),
                        r().createElement(
                            'div',
                            { className: wa },
                            u &&
                                r().createElement(l.n, {
                                    ref: g,
                                    onEnded: () => d(!1),
                                    className: Aa,
                                    src: R.videos.achievements.grade_change_particles(),
                                }),
                            r().createElement('div', { className: Ca, ref: c }, e),
                            r().createElement('div', { className: ka, ref: m }, t),
                        )
                    );
                };
            var Pa = a(2372);
            const Ia = 'SubcategoryProgress_amount_0a',
                za = 'SubcategoryProgress_quantity_02',
                Ra = 'SubcategoryProgress_quantity__symbol_00',
                Oa = 'SubcategoryProgress_name_1f',
                Ba = 'SubcategoryProgress_score_5c',
                Ma = 'SubcategoryProgress_scoreIcon_68',
                Ga = 'SubcategoryProgress_scoreCount_fd',
                La = 'SubcategoryProgress_progressBar_38',
                Da = R.strings.achievements_page,
                Fa = R.strings.advanced_achievements,
                Ta = (0, p.Pi)(({ index: e, onAnimationEnd: t }) => {
                    const a = ye().model,
                        s = a.root.get().isOtherPlayer,
                        l = a.computes.getSubcategory(e),
                        c = l.achievementScore,
                        m = l.prevAchievementScore,
                        u = l.prevValue,
                        p = l.currentValue,
                        b = l.key,
                        h = (0, _.GS)().mediaSize,
                        v = (0, n.useState)(u),
                        y = v[0],
                        f = v[1],
                        S = (0, n.useState)(s ? c : m),
                        E = S[0],
                        x = S[1],
                        N = (0, Ee.useSpring)(
                            () => ({
                                progress: m,
                                onChange: (e) => {
                                    x(e.value.progress);
                                },
                                onRest: () => {
                                    (w.start({ from: { progress: u }, to: { progress: p } }), t());
                                },
                            }),
                            [p],
                        )[1],
                        w = (0, Ee.useSpring)(() => ({
                            progress: 0,
                            onStart: () => (0, d.G)(R.sounds.ach_progress_bar_start()),
                            onChange: (e) => {
                                f(Math.floor(e.value.progress));
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            s ||
                                N.start({
                                    from: { progress: m },
                                    to: { progress: c },
                                    delay: 1500 * e,
                                    config: { duration: 100 },
                                });
                        }, [c, N, e, s, m]),
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                'div',
                                { className: Ia },
                                r().createElement('div', { className: za }, y),
                                r().createElement('div', { className: o()(za, Ra) }, R.strings.common.common.percent()),
                            ),
                            r().createElement(
                                'div',
                                { className: Oa },
                                systemLocale.toUpperCase((0, g.z4)(Fa.name.$dyn(b))),
                            ),
                            r().createElement(
                                'div',
                                { className: La },
                                r().createElement(aa, {
                                    value: p,
                                    deltaFrom: Math.min(u, p),
                                    size: h < _.cJ.Medium || s ? ft.Small : ft.Medium,
                                    animationSettings: {
                                        freezed: !1,
                                        withStack: !1,
                                        type: St.Growing,
                                        delta: { duration: 400, delay: 1500 * e },
                                        line: { duration: 400, delay: 0 },
                                    },
                                }),
                            ),
                            !s &&
                                r().createElement(
                                    i.l,
                                    {
                                        tooltipArgs: {
                                            header: Da.achievementsPointsTooltip.header(),
                                            body: Da.achievementsPointsTooltip.body(),
                                        },
                                    },
                                    r().createElement(
                                        'div',
                                        { className: Ba },
                                        r().createElement('div', { className: Ma }),
                                        r().createElement(
                                            'div',
                                            { className: Ga },
                                            r().createElement(Pa.A, { value: E, format: 'integral' }),
                                        ),
                                    ),
                                ),
                        )
                    );
                }),
                ja = 'SubcategoryProgressItem_base_de',
                qa = 'SubcategoryProgressItem_base__otherPlayer_ab',
                Va = 'SubcategoryProgressItem_iconWrapper_7f',
                Ua = 'SubcategoryProgressItem_icon_ed',
                Xa = 'SubcategoryProgressItem_icon__oldElement_ba',
                Wa = 'SubcategoryProgressItem_content_cc',
                Ha = 'SubcategoryProgressItem_counter_36',
                Ja = 'SubcategoryProgressItem_counter__animated_5e',
                Ka = R.strings.advanced_achievements,
                Qa = (0, p.Pi)(({ className: e, index: t, onAnimationEnd: a }) => {
                    const s = ye(),
                        l = s.model,
                        u = s.controls,
                        g = l.root.get(),
                        p = g.isOtherPlayer,
                        b = g.isSkipAnimation,
                        h = (0, _.GS)().mediaSize,
                        v = l.computes.getSubcategory(t),
                        y = v.key,
                        f = v.background,
                        S = v.id,
                        E = v.prevAchievementScore,
                        x = v.prevValue,
                        N = v.category,
                        w = v.currentValue,
                        A = v.achievementScore,
                        C = v.bubbles,
                        k = (0, n.useState)(!1),
                        $ = k[0],
                        P = k[1],
                        I = E !== A;
                    return (
                        (0, n.useEffect)(() => {
                            $ && (0, me.tf)(w) === (0, me.tf)(x) && (P(!1), a(t));
                        }, [w, t, $, a, x]),
                        r().createElement(
                            'div',
                            {
                                className: o()(ja, p && qa, e),
                                onClick: () => {
                                    (((e) => {
                                        p || u.goToDetails(e, N);
                                    })(S),
                                        (0, d.G)(R.sounds.ach_sign()));
                                },
                                onMouseEnter: () => {
                                    p || ((0, d.G)(R.sounds.ach_hover()), u.achievementHover(S, N));
                                },
                            },
                            r().createElement(
                                i.l,
                                {
                                    tooltipArgs: {
                                        header: `${Ka.tooltip.title.$dyn(y)}`,
                                        body: `${Ka.tooltip.description.$dyn(y)}`,
                                    },
                                },
                                p
                                    ? r().createElement(Q, {
                                          keyName: y,
                                          backgroundName: f,
                                          type: c.Cq.Subcategory,
                                          level: (0, me.tf)(w),
                                          size: X.X.S180x180,
                                          classNames: { base: Ua },
                                      })
                                    : r().createElement(
                                          'div',
                                          { className: Va },
                                          r().createElement($a, {
                                              oldElement: r().createElement(Q, {
                                                  keyName: y,
                                                  backgroundName: f,
                                                  type: c.Cq.Subcategory,
                                                  level: (0, me.tf)(x),
                                                  size: (0, xe.d5)(h),
                                                  classNames: { base: o()(Ua, Xa) },
                                              }),
                                              newElement: r().createElement(
                                                  'div',
                                                  { className: Ua },
                                                  r().createElement(Q, {
                                                      keyName: y,
                                                      backgroundName: f,
                                                      type: c.Cq.Subcategory,
                                                      level: (0, me.tf)(w),
                                                      size: (0, xe.d5)(h),
                                                      classNames: { base: Ua },
                                                  }),
                                              ),
                                              isStart: $ && (0, me.tf)(w) !== (0, me.tf)(x),
                                              onAnimationEnd: a,
                                              onPlaySound: () => {
                                                  (0, me.tf)(w) !== xe.z6.Third
                                                      ? (0, d.G)(R.sounds.ach_sub_grade_low())
                                                      : (0, d.G)(R.sounds.ach_sub_grade_high());
                                              },
                                              index: t,
                                          }),
                                          m.graphicsQuality.isHigh() &&
                                              Boolean(C) &&
                                              (0, me.tf)(w) === (0, me.tf)(x) &&
                                              r().createElement(qe, { index: t, currentValue: w, isSkipAnimation: b }),
                                      ),
                            ),
                            r().createElement(
                                'div',
                                { className: Wa },
                                r().createElement(Ta, { index: t, onAnimationEnd: () => P(!0) }),
                            ),
                            Boolean(C) &&
                                r().createElement(
                                    'div',
                                    { className: o()(Ha, I && Ja), style: { animationDelay: Le * t + 1 + 'ms' } },
                                    r().createElement(Ge, { value: C, isEmpty: 1 === C }),
                                ),
                        )
                    );
                }),
                Ya = {
                    base: 'SubcategoryList_base_60',
                    item: 'SubcategoryList_item_54',
                    base__specificResolution: 'SubcategoryList_base__specificResolution_17',
                },
                Za = (0, p.Pi)(() => {
                    const e = ye(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        s = n.isOtherPlayer,
                        i = n.isSkipAnimation,
                        l = t.computes.getLastIndex(),
                        c = (0, _.GS)(),
                        m = c.mediaWidth,
                        u = c.mediaHeight,
                        d = m === _.fd.ExtraLarge && u === _.Aq.Large && !s,
                        g = (e) => {
                            l !== e || i || a.setAnimationState(be.GeneralPercent);
                        };
                    return r().createElement(
                        'div',
                        { className: o()(Ya.base, s && Ya.base__otherPlayer, d && Ya.base__specificResolution) },
                        et(t.computes.subcategoriesLength(), (e) =>
                            r().createElement(Qa, { key: e, index: e, className: Ya.item, onAnimationEnd: g }),
                        ),
                    );
                }),
                en = {
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
                tn = R.strings.achievements_page.category,
                an = (0, n.memo)(function () {
                    return r().createElement(l.n, {
                        src: R.videos.achievements.bg_advanced_achievements(),
                        autoplay: !0,
                        loop: !0,
                        className: en.video,
                    });
                }),
                nn = (0, p.Pi)(() => {
                    const e = ye(),
                        t = e.model,
                        a = e.controls,
                        s = t.root.get(),
                        l = s.achievementsScore,
                        p = s.prevAchievementsScore,
                        h = s.categoryProgress,
                        v = s.maxAchievementsScore,
                        y = s.isOtherPlayer,
                        S = s.categoryName,
                        E = s.categoryBackgroundName,
                        x = s.isSkipAnimation,
                        N = (0, _.GS)(),
                        w = N.mediaSize,
                        C = N.mediaHeight,
                        k = N.mediaWidth,
                        $ = (0, n.useState)(!1),
                        P = $[0],
                        I = $[1],
                        z = t.animationState.get(),
                        O = (0, b.O)().paddings,
                        B = A(),
                        M = k === _.fd.ExtraLarge && C === _.Aq.Large && !y,
                        G = (0, me.tf)(h);
                    ((0, u.b)(() => {
                        z === be.Init && l !== p && a.setAnimationState(be.Category);
                    }),
                        (0, n.useEffect)(() => {
                            l !== p && (a.setAnimationState(be.Category), a.animationInProgress(!0));
                        }, [l, a, p]),
                        (0, n.useEffect)(() => {
                            x && (a.setAnimationState(be.Init), a.animationInProgress(!1), a.allAnimationEnd());
                        }, [a, x]));
                    const L = le(w, C, k);
                    return r().createElement(
                        'div',
                        {
                            className: o()(
                                en.base,
                                y && en.base__otherPlayer,
                                M && en.base__specificResolution,
                                m.graphicsQuality.isLow() && en.base__lowPreset,
                            ),
                            style: { '--external-paddings-bottom': `${O.bottom}rem` },
                            onClick: (e) =>
                                ((e) => {
                                    y && B(f.AnotherPlayer, e);
                                })(e),
                        },
                        r().createElement(
                            'div',
                            { className: en.wrapper },
                            m.graphicsQuality.isHigh() && !y && r().createElement(an, null),
                            r().createElement(
                                'div',
                                { className: o()(en.achievementIcon, en[`achievementIcon__grade${G}`]) },
                                r().createElement(Q, {
                                    keyName: S,
                                    backgroundName: E,
                                    type: c.Cq.Category,
                                    level: G,
                                    size: y ? X.X.S280x280 : X.X.S420x420,
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: en.innerWrapper },
                                r().createElement(
                                    'div',
                                    { className: en.content },
                                    r().createElement(
                                        'div',
                                        { className: en.header },
                                        r().createElement(Re, { className: en.quantity }),
                                        r().createElement('div', { className: en.name }, tn.title()),
                                    ),
                                    r().createElement(Za, null),
                                    r().createElement(
                                        i.l,
                                        {
                                            className: en.hoverWrapper,
                                            tooltipArgs: {
                                                header: (0, g.uF)(tn.achievementsScore.tooltip.title(), {
                                                    value: l,
                                                    maxValue: v,
                                                }),
                                                body: tn.achievementsScore.tooltip.description(),
                                            },
                                        },
                                        r().createElement('div', {
                                            className: en.hoverArea,
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
                                r().createElement(Na, { className: en.footer }),
                                r().createElement(
                                    'div',
                                    { className: o()(en.cup, P && en.cup__hover) },
                                    r().createElement($e, { className: en.achievementsScore }),
                                ),
                            ),
                            !y && r().createElement(ce, { vignetteConfig: L }),
                        ),
                    );
                }),
                rn = { context: 'model.achievementsModel' },
                sn = () => r().createElement(ve, { options: rn }, r().createElement(nn, null));
        },
    },
]);
