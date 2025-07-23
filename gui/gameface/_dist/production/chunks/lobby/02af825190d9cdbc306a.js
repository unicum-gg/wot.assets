'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [805],
    {
        9390: (e, t, a) => {
            (a.r(t), a.d(t, { default: () => sn }));
            var n = a(7363),
                s = a.n(n),
                r = a(6483),
                o = a.n(r),
                i = a(3415),
                c = a(8432),
                l = a(974),
                m = a(5959),
                _ = a(5415),
                u = a(2039),
                d = a(7727),
                g = a(3649),
                b = a(3403);
            let p, h, v, y, f;
            (!(function (e) {
                ((e.Click = 'click'), (e.Display = 'display'));
            })(p || (p = {})),
                (function (e) {
                    ((e.Hangar = 'hangar'), (e.Catalog = 'catalog'));
                })(h || (h = {})),
                (function (e) {
                    ((e.Mouse = 'mouse'), (e.Esc = 'esc'));
                })(v || (v = {})),
                (function (e) {
                    ((e.AnotherPlayer = 'another_player_click'),
                        (e.TriggerHint = 'trigger_hint'),
                        (e.Close = 'close_button'),
                        (e.Catalog = 'catalog_button'),
                        (e.TankName = 'tank_name_single_achievement'),
                        (e.Breadcrumbs = 'bread_crumb'));
                })(y || (y = {})),
                (function (e) {
                    ((e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning'));
                })(f || (f = {})));
            let S;
            !(function (e) {
                ((e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed'));
            })(S || (S = {}));
            const E = 'metrics',
                x = ({ partnerID: e, item: t, parentScreen: a, itemState: n, info: s }) => ({
                    item: t,
                    partnerID: e || null,
                    parent_screen: a || null,
                    item_state: n || null,
                    additional_info: s || null,
                }),
                N = (e, t) => {
                    const a = (0, n.useCallback)(
                        (a, n = f.Info, s) => {
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
                        const t = N(e, E),
                            a = (0, n.useCallback)(
                                (e) => {
                                    t(e.action, e.logLevel, x(e));
                                },
                                [t],
                            );
                        return (e) => a(e);
                    })('advanced_achievement');
                    return (t, a) =>
                        e({
                            action: p.Click,
                            parentScreen: h.Hangar,
                            item: t,
                            info: JSON.stringify({ posX: a.clientX, posY: a.clientY }),
                        });
                },
                w = {
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
            var C = a(7888);
            let k;
            !(function (e) {
                ((e.Single = 'single'), (e.Cumulative = 'cumulative'), (e.Staged = 'staged'));
            })(k || (k = {}));
            const $ = R.images.gui.maps.icons.advanced_achievements,
                P = { [k.Single]: C.bn.Circular, [k.Staged]: C.bn.Circular, [k.Cumulative]: C.bn.Shield },
                I = {
                    [C.sg.S100x100]: C.Bw.s52x44,
                    [C.sg.S128x128]: C.Bw.s68x56,
                    [C.sg.S180x180]: C.Bw.s94x80,
                    [C.sg.S280x280]: C.Bw.s144x116,
                    [C.sg.S360x360]: C.Bw.s218x176,
                    [C.sg.S420x420]: C.Bw.s218x176,
                    [C.sg.Flexable]: C.Bw.s218x176,
                },
                z = {
                    [C.sg.S100x100]: C.Bw.s54x60,
                    [C.sg.S128x128]: C.Bw.s68x76,
                    [C.sg.S180x180]: C.Bw.s94x108,
                    [C.sg.S280x280]: C.Bw.s148x168,
                    [C.sg.S360x360]: C.Bw.s192x216,
                    [C.sg.S420x420]: C.Bw.s228x256,
                    [C.sg.Flexable]: C.Bw.s228x256,
                },
                O = (e, t, a, n) => {
                    switch (e) {
                        case C.bn.Shield:
                            return { backgroundImage: `url(${$.borders.shield.$dyn(`tier_${n}_${t}`)})` };
                        case C.bn.Circular:
                        default:
                            return {
                                backgroundImage: `url(${$.borders.circular.$dyn(a ? `circular_trophy_${t}` : `circular_${t}`)})`,
                            };
                    }
                },
                G = (e, t, a, n) => {
                    switch (e) {
                        case C.bn.Shield:
                            return { backgroundImage: `url(${$.backgrounds.shield.$dyn(`${n}_${t}`)})` };
                        case C.bn.Circular:
                        default:
                            return {
                                backgroundImage: `url(${$.backgrounds.circular.$dyn(a ? `trophy_${t}` : `${n}_${t}`)})`,
                            };
                    }
                },
                B = (e, t, a, n, s, r) => {
                    const o = a ? '_trophy' : '',
                        i = e === C.bn.Shield ? `_tier_${s}` : '',
                        c = ((e) => (e === l.Em.PersonalMissions ? z : I))(r),
                        m = c[t],
                        _ = ((e, t) => {
                            if (t === C.sg.S360x360 && e === C.Bw.s218x176) return { width: 188, height: 150 };
                            const a = e.substring(1).split('x');
                            return { width: a[0], height: a[1] };
                        })(m, t),
                        u = _.width,
                        d = _.height,
                        g = $.icons.$dyn(`${n}${o}${i}_${m}`);
                    return g
                        ? { backgroundImage: `url(${g})`, width: `${u}rem`, height: `${d}rem` }
                        : { width: `${u}rem`, height: `${d}rem` };
                },
                M = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n = C.sg.S180x180,
                    level: r = 0,
                    stage: i = 0,
                    isTrophy: c = !1,
                    iconPosition: m = l.x_.Center,
                    iconSizeMap: _ = l.Em.Default,
                    classNames: u,
                }) => {
                    const d = P[t] || C.bn.Circular,
                        b = n === C.sg.Flexable ? C.sg.S420x420 : n;
                    return s().createElement(
                        'div',
                        { className: o()(w.base, w[`base__${n}`], w[`base__${d}`], null == u ? void 0 : u.base) },
                        s().createElement('div', {
                            className: o()(w.background, null == u ? void 0 : u.background),
                            style: G(d, b, c, a),
                        }),
                        s().createElement('div', {
                            className: o()(w.border, null == u ? void 0 : u.border),
                            style: O(d, b, c, r),
                        }),
                        s().createElement('div', {
                            className: o()(
                                w.icon,
                                w[`icon__${m}`],
                                w[`icon__${(0, g.TD)(_)}`],
                                null == u ? void 0 : u.icon,
                            ),
                            style: B(d, n, c, e, r, _),
                        }),
                        t === k.Staged &&
                            Boolean(i) &&
                            s().createElement(
                                'div',
                                {
                                    className: o()(w.stage, null == u ? void 0 : u.stage),
                                    lang: R.strings.settings.LANGUAGE_CODE(),
                                },
                                i,
                            ),
                    );
                },
                L = {
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
            let D, F;
            (!(function (e) {
                ((e.S100x100 = 's100x100'),
                    (e.S128x128 = 's128x128'),
                    (e.S180x180 = 's180x180'),
                    (e.S280x280 = 's280x280'),
                    (e.S360x360 = 's360x360'),
                    (e.S420x420 = 's420x420'),
                    (e.Flexable = 'flexable'));
            })(D || (D = {})),
                (function (e) {
                    ((e.s54x68 = 's54x68'),
                        (e.s68x82 = 's68x82'),
                        (e.s100x118 = 's100x118'),
                        (e.s156x182 = 's156x182'),
                        (e.s200x236 = 's200x236'),
                        (e.s250x278 = 's250x278'));
                })(F || (F = {})));
            const T = R.images.gui.maps.icons.advanced_achievements,
                q = {
                    [D.S100x100]: F.s54x68,
                    [D.S128x128]: F.s68x82,
                    [D.S180x180]: F.s100x118,
                    [D.S280x280]: F.s156x182,
                    [D.S360x360]: F.s200x236,
                    [D.S420x420]: F.s250x278,
                },
                j = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = D.S280x280,
                    level: n = 0,
                    isTrophy: r = !1,
                    classNames: i,
                }) => {
                    const c = a === D.Flexable ? D.S420x420 : a;
                    return s().createElement(
                        'div',
                        { className: o()(L.base, L[`base__${a}`], null == i ? void 0 : i.base) },
                        s().createElement('div', {
                            className: o()(L.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${T.backgrounds.category.$dyn(`${t}_${c}`)})` },
                        }),
                        s().createElement('div', {
                            className: o()(L.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${T.borders.category.$dyn(r ? `trophy_${c}` : `tier_${n}_${c}`)})`,
                            },
                        }),
                        s().createElement('div', {
                            className: o()(L.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${T.icons.category.$dyn(`${e}_${n}_${q[c]}`)})` },
                        }),
                    );
                },
                V = {
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
            var U = a(587);
            const X = R.images.gui.maps.icons.advanced_achievements,
                W = {
                    [U.X.S100x100]: U.y.s52x62,
                    [U.X.S128x128]: U.y.s68x72,
                    [U.X.S180x180]: U.y.s94x94,
                    [U.X.S280x280]: U.y.s144x140,
                    [U.X.S360x360]: U.y.s188x176,
                    [U.X.S420x420]: U.y.s218x212,
                    [U.X.S480x480]: U.y.s250x198,
                },
                H = ({
                    keyName: e,
                    backgroundName: t,
                    size: a = U.X.S280x280,
                    level: n = 0,
                    isTrophy: r = !1,
                    classNames: i,
                }) => {
                    const c = a === U.X.Flexable ? U.X.S480x480 : a;
                    return s().createElement(
                        'div',
                        { className: o()(V.base, V[`base__${a}`], null == i ? void 0 : i.base) },
                        s().createElement('div', {
                            className: o()(V.background, null == i ? void 0 : i.background),
                            style: { backgroundImage: `url(${X.backgrounds.subcategory.$dyn(`${t}_${c}`)})` },
                        }),
                        s().createElement('div', {
                            className: o()(V.border, null == i ? void 0 : i.border),
                            style: {
                                backgroundImage: `url(${X.borders.subcategory.$dyn(r ? `trophy_${c}` : `tier_${n}_${c}`)})`,
                            },
                        }),
                        s().createElement('div', {
                            className: o()(V.icon, null == i ? void 0 : i.icon),
                            style: { backgroundImage: `url(${X.icons.subcategory.$dyn(`${e}_${n}_${W[c]}`)})` },
                        }),
                    );
                },
                J = { [l.Cq.Single]: k.Single, [l.Cq.Staged]: k.Staged, [l.Cq.Cumulative]: k.Cumulative },
                K = ({
                    keyName: e,
                    type: t,
                    backgroundName: a,
                    size: n,
                    level: r,
                    stage: o,
                    isTrophy: i,
                    iconPosition: c,
                    iconSizeMap: m,
                    classNames: _,
                }) => {
                    switch (t) {
                        case l.Cq.Category:
                            return s().createElement(j, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: r,
                                isTrophy: i,
                                classNames: _,
                            });
                        case l.Cq.Subcategory:
                            return s().createElement(H, {
                                keyName: e,
                                backgroundName: a,
                                size: n,
                                level: r,
                                isTrophy: i,
                                classNames: _,
                            });
                        case l.Cq.Single:
                        case l.Cq.Staged:
                        case l.Cq.Cumulative:
                            return s().createElement(M, {
                                keyName: e,
                                type: J[t],
                                backgroundName: a,
                                size: n,
                                level: r,
                                stage: o,
                                isTrophy: i,
                                iconPosition: c,
                                iconSizeMap: m,
                                classNames: _,
                            });
                        default:
                            return (console.warn(`Unreachable code for type '${t}' in AchievementResolver.`), null);
                    }
                },
                Q = 'Vignette_base_c8',
                Y = 'Vignette_gradient_9a',
                Z = 'Vignette_gradient__top_f3',
                ee = 'Vignette_gradient__right_d0',
                te = 'Vignette_gradient__bottom_1c',
                ae = 'Vignette_gradient__left_02',
                ne = { top: 0, right: 0, bottom: 0, left: 0 },
                se = { top: 20, right: 20, bottom: 20, left: 20 },
                re = { top: 20, right: 0, bottom: 20, left: 0 },
                oe = { top: 0, right: 20, bottom: 0, left: 20 },
                ie = (e, t, a, n) => {
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
                        c = i.widthGap,
                        l = i.heightGap;
                    return (r > t + l && o > a + c) || n ? se : r > t + l ? re : o > a + c ? oe : ne;
                },
                ce = ({ vignetteConfig: e = ne }) =>
                    s().createElement(
                        'div',
                        { className: Q },
                        s().createElement('div', { className: o()(Y, Z), style: { backgroundSize: `100% ${e.top}%` } }),
                        s().createElement('div', {
                            className: o()(Y, ee),
                            style: { backgroundSize: `${e.right}% 100%` },
                        }),
                        s().createElement('div', {
                            className: o()(Y, te),
                            style: { backgroundSize: `100% ${e.bottom}%` },
                        }),
                        s().createElement('div', {
                            className: o()(Y, ae),
                            style: { backgroundSize: `${e.left}% 100%` },
                        }),
                    );
            var le = a(1645),
                me = a(3215),
                _e = a(4598),
                ue = a(9480),
                de = a(9174),
                ge = a(3946);
            let be;
            !(function (e) {
                ((e.Init = 'init'),
                    (e.Category = 'category'),
                    (e.Score = 'score'),
                    (e.GeneralPercent = 'generalPercent'));
            })(be || (be = {}));
            const pe = (0, me.q3)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                upcomingAchievements: e.array('upcomingAchievements'),
                                subcategories: e.array('subcategories'),
                                trophy: e.object('trophy'),
                                animationState: de.LO.box(be.Init),
                            },
                            a = (0, ge.Om)(() => ue.v(t.upcomingAchievements.get(), (e) => Object.assign({}, e)), {
                                equals: _e.jv,
                            }),
                            n = (0, ge.Om)(
                                (e) => {
                                    const t = ue.U2(a(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected upcoming achievement index: ${e}`);
                                },
                                { equals: _e.jv },
                            ),
                            s = (0, ge.Om)(() => ue.v(t.subcategories.get(), (e) => Object.assign({}, e)), {
                                equals: _e.jv,
                            }),
                            r = (0, ge.Om)(
                                (e) => {
                                    const t = ue.U2(s(), e);
                                    if (t) return t;
                                    throw new Error(`Unexpected subcategory index: ${e}`);
                                },
                                { equals: _e.jv },
                            ),
                            o = (0, ge.Om)(() => {
                                var e;
                                return null !=
                                    (e = (0, ue.kd)(s(), ({ achievementScore: e, prevAchievementScore: t }) => e !== t))
                                    ? e
                                    : 0;
                            });
                        return Object.assign({}, t, {
                            computes: {
                                upcomingLength: (0, ge.Om)(() => a().length),
                                subcategoriesLength: (0, ge.Om)(() => s().length),
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
                        setAnimationState: (0, de.aD)((e) => {
                            t.animationState.set(e);
                        }),
                        achievementHover: e.createCallback(
                            (e, t) => ({ achievementId: e, achievementCategory: t }),
                            'onAchievementHover',
                        ),
                    }),
                ),
                he = pe[0],
                ve = pe[1];
            var ye = a(9766),
                fe = a(7522),
                Se = a(7030),
                Ee = a(44);
            const xe = {
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
                we = 'grade_2',
                Ce = 'grade_3',
                ke = (0, b.Pi)(({ className: e }) => {
                    const t = ve(),
                        a = t.model,
                        r = t.controls,
                        i = a.root.get(),
                        c = i.prevAchievementsScore,
                        l = i.achievementsScore,
                        m = (0, n.useState)(c),
                        _ = m[0],
                        u = m[1],
                        g = (0, n.useState)(!1),
                        b = g[0],
                        p = g[1],
                        h = a.animationState.get(),
                        v = ((e, t) => {
                            const a = e - t;
                            return a >= 500
                                ? { name: Ae, duration: 4e3, sound: R.sounds.ach_cup_score_long() }
                                : a >= 50
                                  ? { name: we, duration: 3e3, sound: R.sounds.ach_cup_score_med() }
                                  : { name: Ce, duration: 2e3, sound: R.sounds.ach_cup_score_short() };
                        })(l, c),
                        y = (0, Ee.uf)(_),
                        f = (0, Se.useSpring)(() => ({
                            progress: 0,
                            onStart: () => {
                                (p(!0), (0, d.G)(v.sound));
                            },
                            onChange: (e) => {
                                u(Math.floor(e.value.progress));
                            },
                            onRest: () => {
                                (p(!1), r.setAnimationState(be.Init), r.animationInProgress(!1), r.allAnimationEnd());
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            l !== c &&
                                0 !== l &&
                                h === be.Score &&
                                f.start({
                                    from: { progress: c },
                                    to: { progress: l },
                                    config: { duration: v.duration, easing: fe.Z.easeInOutCubic },
                                });
                        }, [l, f, v.duration, h, c]),
                        s().createElement(
                            'div',
                            { className: o()(xe.base, b && xe.base__animation, xe[`base__${v.name}`], e) },
                            s().createElement('div', { className: xe.shine }),
                            s().createElement(
                                'div',
                                { className: xe.amount },
                                s().createElement('div', { className: xe.count }, y),
                                s().createElement('div', { className: xe.countGlow }, y),
                                s().createElement('div', { className: o()(xe.count, xe.count__blur) }, y),
                            ),
                            s().createElement(
                                'div',
                                { className: xe.label },
                                s().createElement(
                                    'div',
                                    { className: xe.glowWrapper },
                                    s().createElement('div', { className: xe.glow }),
                                ),
                                s().createElement(ye.z, { text: Ne.title() }),
                            ),
                        )
                    );
                }),
                $e = 'CategoryProgress_base_51',
                Pe = 'CategoryProgress_count_91',
                Ie = 'CategoryProgress_count__symbol_5c',
                Re = (0, b.Pi)(({ className: e }) => {
                    const t = ve(),
                        a = t.model,
                        r = t.controls,
                        i = a.root.get(),
                        c = i.categoryProgress,
                        l = i.prevCategoryProgress,
                        m = (0, n.useState)(l),
                        _ = m[0],
                        u = m[1],
                        d = a.animationState.get(),
                        g = (0, Se.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                u(Math.floor(e.value.progress));
                            },
                            onRest: () => r.setAnimationState(be.Score),
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            d === be.GeneralPercent &&
                                (c === l && r.setAnimationState(be.Score),
                                g.start({ from: { progress: l }, to: { progress: c } }));
                        }, [g, d, c, r, l]),
                        s().createElement(
                            'div',
                            { className: o()($e, e) },
                            s().createElement('div', { className: Pe }, _),
                            s().createElement('div', { className: o()(Pe, Ie) }, R.strings.common.common.percent()),
                        )
                    );
                }),
                ze = {
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
                Oe = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
            function Ge() {
                return (
                    (Ge = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    Ge.apply(null, arguments)
                );
            }
            const Be = (e) => {
                let t = e.size,
                    a = e.value,
                    n = e.isEmpty,
                    r = e.fadeInAnimation,
                    i = e.hide,
                    c = e.maximumNumber,
                    l = e.className,
                    m = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, Oe);
                const _ = n ? null : a,
                    u = 'string' == typeof _;
                if ((_ && !u && _ < 0) || 0 === _) return null;
                const d = _ && !u && _ > c,
                    g = o()(
                        ze.base,
                        ze[`base__${t}`],
                        r && ze.base__animated,
                        i && ze.base__hidden,
                        !_ && ze.base__pattern,
                        n && ze.base__empty,
                        l,
                    );
                return s().createElement(
                    'div',
                    Ge({ className: g }, m),
                    s().createElement('div', { className: ze.bg }),
                    s().createElement('div', { className: ze.pattern }),
                    s().createElement(
                        'div',
                        { className: o()(ze.value, u && ze.value__text) },
                        d ? c : _,
                        d && s().createElement('span', { className: ze.plus }, '+'),
                    ),
                );
            };
            Be.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
            const Me = 1e3,
                Le = 'GlowWithMask_glowBox_e3',
                De = 'GlowWithMask_glowInner_c9',
                Fe = 'GlowWithMask_glow_a5',
                Te = R.images.gui.maps.icons.advanced_achievements.borders,
                qe = ({ currentValue: e, index: t, isTrophy: a, isOtherPlayer: r, isSkipAnimation: o }) => {
                    const i = (0, _.GS)().mediaSize,
                        c = (0, Se.useSpring)(() => ({
                            from: { transform: 'translateX(-106%)' },
                            to: { transform: 'translateX(104%)' },
                            delay: 2e3 * (t + 1),
                            config: { duration: 1500, easing: fe.Z.easeOutQuad },
                            onStart: () => (0, d.G)(R.sounds.ach_sub_glare()),
                        })),
                        l = c[0],
                        m = c[1],
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
                        s().createElement(
                            'div',
                            {
                                className: Le,
                                style: {
                                    maskImage: `url(${a ? Te.category.$dyn(`trophy_${i < _.cJ.Medium || r ? U.X.S100x100 : U.X.S180x180}`) : Te.subcategory.$dyn(`tier_${(0, le.tf)(e)}_${(0, Ee.d5)(i)}`)})`,
                                },
                            },
                            s().createElement(
                                Se.animated.div,
                                { className: De, style: l },
                                s().createElement('div', { className: Fe }),
                            ),
                        )
                    );
                },
                je = 'Trophy_base_28',
                Ve = 'Trophy_icon_60',
                Ue = 'Trophy_base__inactive_71',
                Xe = 'Trophy_icon__otherPlayer_4c',
                We = 'Trophy_content_8c',
                He = 'Trophy_count_cb',
                Je = 'Trophy_label_24',
                Ke = 'Trophy_counter_4c',
                Qe = R.strings.advanced_achievements,
                Ye = (0, b.Pi)(() => {
                    const e = ve(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        r = n.isOtherPlayer,
                        c = n.isSkipAnimation,
                        u = t.trophy.get(),
                        g = u.key,
                        b = u.background,
                        p = u.currentValue,
                        h = u.prevValue,
                        v = u.bubbles,
                        y = (0, _.GS)().mediaSize,
                        f = r || 0 === p;
                    return s().createElement(
                        i.l,
                        {
                            tooltipArgs: {
                                header: Qe.tooltip.title.trophies(),
                                body: Qe.tooltip.description.trophies(),
                            },
                        },
                        s().createElement(
                            'div',
                            { className: o()(je, f && Ue) },
                            s().createElement(
                                'div',
                                {
                                    className: o()(Ve, r && Xe),
                                    onClick: () => {
                                        f || ((0, d.G)(R.sounds.ach_sign()), a.goToTrophies());
                                    },
                                    onMouseEnter: () => {
                                        f || (0, d.G)(R.sounds.ach_hover());
                                    },
                                },
                                s().createElement(K, {
                                    keyName: g,
                                    backgroundName: b,
                                    type: l.Cq.Category,
                                    size: y < _.cJ.Large || r ? D.S100x100 : D.S180x180,
                                    isTrophy: !0,
                                }),
                                Boolean(v) &&
                                    s().createElement(
                                        'div',
                                        { className: Ke },
                                        s().createElement(Be, { value: v, isEmpty: 1 === v }),
                                    ),
                                m.graphicsQuality.isHigh() &&
                                    p !== h &&
                                    s().createElement(qe, {
                                        currentValue: p,
                                        index: t.computes.getLastIndex() + 1,
                                        isTrophy: !0,
                                        isOtherPlayer: r,
                                        isSkipAnimation: c,
                                    }),
                            ),
                            s().createElement(
                                'div',
                                { className: We },
                                s().createElement('div', { className: He }, p),
                                s().createElement(
                                    'div',
                                    { className: Je },
                                    systemLocale.toUpperCase(Qe.name.trophies()),
                                ),
                            ),
                        ),
                    );
                }),
                Ze = (e, t) => {
                    const a = [];
                    for (let n = 0; n < e; n++) a.push(t(n));
                    return a;
                };
            var et = a(6373);
            const tt = (e, t) => window.getComputedStyle(e, null).getPropertyValue(t),
                at = (e, t, a) => {
                    const n = a.getContext('2d');
                    if (!n) return 0;
                    var s;
                    n.font = `${tt((s = t), 'font-weight')} ${tt(s, 'font-size')} ${tt(s, 'font-family')}`;
                    return n.measureText(e).width;
                },
                nt = (e) => {
                    if (e.start >= e.end - 1) return e.start;
                    const t = Math.floor((e.start + e.end) / 2),
                        a = e.words.slice(0, t).join(' '),
                        n = Math.ceil(at(a, e.element, e.canvas) / e.element.getBoundingClientRect().width);
                    return nt(n <= 1 ? Object.assign({}, e, { start: t }) : Object.assign({}, e, { end: t }));
                },
                st = 'MultilineOverflow_base_d9',
                rt = 'MultilineOverflow_base__truncated_a1',
                ot = 'MultilineOverflow_text_ce',
                it = 'MultilineOverflow_truncatedContent_da',
                ct = 'MultilineOverflow_singleLine_bb',
                lt = 'MultilineOverflow_line_51',
                mt = ['text', 'lines', 'className', 'onChange'];
            function _t() {
                return (
                    (_t = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    _t.apply(null, arguments)
                );
            }
            const ut = (0, n.forwardRef)(function (e, t) {
                let a = e.text,
                    r = e.lines,
                    i = e.className,
                    c = e.onChange,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, mt);
                const m = (0, n.useRef)(null),
                    _ = (0, n.useRef)(null),
                    d = (0, n.useState)(!1),
                    g = d[0],
                    b = d[1],
                    p = (0, n.useState)([]),
                    h = p[0],
                    v = p[1],
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
                    A = (0, n.useCallback)(
                        (e) => {
                            const t = N();
                            return e && t ? Math.round(e.scrollHeight / t) : 0;
                        },
                        [N],
                    ),
                    w = (0, n.useCallback)(() => {
                        if (A(m.current) <= r) return b(!1);
                        b(!0);
                        const e = a.split(' '),
                            t = Array.from(new Array(r)).reduce((t, a, n) => {
                                if (!m.current) return t;
                                const s = t.reduce((e, t) => e + t.length, 0),
                                    o = e.slice(s);
                                if (n === r - 1) return (t.push(o), t);
                                const i = nt({ start: 0, end: o.length, words: o, element: m.current, canvas: x });
                                return (t.push(o.slice(0, i)), t);
                            }, []);
                        v(t);
                    }, [x, A, r, a]),
                    C = (0, n.useCallback)(() => {
                        E.run(() => {
                            (S(N() * r), w());
                        });
                    }, [N, r, E, w]);
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
                        null == c || c(g);
                    }, [c, g]),
                    s().createElement(
                        'div',
                        _t({}, l, { ref: t, className: o()(st, i, g && rt) }),
                        s().createElement('div', { ref: m, className: ot, style: { maxHeight: `${f}rem` } }, a),
                        s().createElement(
                            'div',
                            { className: it },
                            h.map((e, t) => s().createElement('div', { key: t, className: lt }, e.join(' '))),
                        ),
                        s().createElement('div', { ref: _, className: ct }, R.strings.common.common.dot()),
                    )
                );
            });
            function dt() {
                return (
                    (dt = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    dt.apply(null, arguments)
                );
            }
            const gt = (0, n.forwardRef)(function (e, t) {
                const a = (0, n.useState)(!1),
                    r = a[0],
                    o = a[1];
                return s().createElement(
                    et.i,
                    { isEnabled: r, body: e.text },
                    s().createElement(ut, dt({}, e, { ref: t, onChange: o })),
                );
            });
            var bt = a(6349);
            let pt;
            !(function (e) {
                ((e.Percentage = 'percentage'), (e.Stepped = 'stepped'));
            })(pt || (pt = {}));
            var ht = a(9690);
            const vt = {
                base: 'ProgressBar_base_45',
                base__small: 'ProgressBar_base__small_df',
                background: 'ProgressBar_background_51',
                background__small: 'ProgressBar_background__small_46',
                lineWrapper: 'ProgressBar_lineWrapper_6a',
            };
            let yt, ft;
            (!(function (e) {
                ((e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium'));
            })(yt || (yt = {})),
                (function (e) {
                    ((e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing'));
                })(ft || (ft = {})));
            const St = ({ size: e = yt.Default }) => {
                const t = o()(vt.background, vt[`background__${e}`]);
                return s().createElement('div', { className: t });
            };
            var Et = a(122);
            let xt, Nt;
            (!(function (e) {
                ((e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End'));
            })(xt || (xt = {})),
                (function (e) {
                    ((e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End'));
                })(Nt || (Nt = {})));
            const At = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                wt = ({ size: e }) => {
                    const t = o()(At.base, At[`base__${e}`]);
                    return s().createElement('div', { className: t });
                },
                Ct = 'ProgressBarDeltaSimple_base_6c',
                kt = 'ProgressBarDeltaSimple_delta_99',
                $t = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: r,
                        size: o,
                        to: i,
                        onEndAnimation: c,
                        onChangeAnimationState: l,
                    }) => {
                        const m = i < r,
                            _ = (0, n.useState)(Nt.Idle),
                            u = _[0],
                            d = _[1],
                            g = u === Nt.In,
                            b = u === Nt.End,
                            p = u === Nt.Idle,
                            h = (0, n.useCallback)(
                                (e) => {
                                    (d(e), l && l(e));
                                },
                                [l],
                            );
                        ((0, n.useEffect)(() => {
                            if (p && !a) {
                                const e = t;
                                return (0, Et.F)(() => {
                                    h(Nt.In);
                                }, e);
                            }
                        }, [h, a, p, t]),
                            (0, n.useEffect)(() => {
                                if (g) {
                                    const a = e + t;
                                    return (0, Et.F)(() => {
                                        (c && c(), h(Nt.End));
                                    }, a);
                                }
                            }, [h, g, c, t, e]));
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
                        return b
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: Ct, style: f },
                                  s().createElement(
                                      'div',
                                      { style: p ? v : y, className: kt },
                                      s().createElement(wt, { size: o }),
                                  ),
                              );
                    },
                ),
                Pt = {
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
                It = (0, n.memo)(
                    ({ size: e, lineRef: t, disabled: a, baseStyles: n, isComplete: r, withoutBounce: i }) => {
                        const c = o()(
                                Pt.base,
                                Pt[`base__${e}`],
                                a && Pt.base__disabled,
                                r && Pt.base__finished,
                                i && Pt.base__withoutBounce,
                            ),
                            l = !a && !r;
                        return s().createElement(
                            'div',
                            { className: c, style: n, ref: t },
                            s().createElement('div', { className: Pt.pattern }),
                            s().createElement('div', { className: Pt.gradient }),
                            l && s().createElement(wt, { size: e }),
                        );
                    },
                ),
                Rt = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
                        disabled: o,
                        isComplete: i,
                        animationSettings: c,
                        onChangeAnimationState: l,
                        onEndAnimation: m,
                    }) => {
                        const _ = (0, n.useMemo)(
                            () => ({
                                width: `${e}%`,
                                transitionDuration: `${c.line.duration}ms`,
                                transitionDelay: `${c.line.delay}ms`,
                            }),
                            [c.line.delay, c.line.duration, e],
                        );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(It, { size: t, lineRef: r, disabled: o, isComplete: i, baseStyles: _ }),
                            a >= 0 &&
                                s().createElement($t, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    freezed: c.freezed,
                                    from: a,
                                    size: t,
                                    to: e,
                                    onChangeAnimationState: l,
                                    onEndAnimation: m,
                                }),
                        );
                    },
                ),
                zt = 'ProgressBarDeltaGrow_base_7e',
                Ot = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                Gt = 'ProgressBarDeltaGrow_glow_68',
                Bt = (e) => (e ? { left: 0 } : { right: 0 }),
                Mt = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                Lt = (e) => ({ transitionDuration: `${e}ms` }),
                Dt = (0, n.memo)(
                    ({
                        transitionDuration: e,
                        transitionDelay: t,
                        freezed: a,
                        from: r,
                        size: i,
                        to: c,
                        onEndAnimation: l,
                        onChangeAnimationState: m,
                        className: _,
                    }) => {
                        const u = c < r,
                            d = (0, n.useState)(xt.Idle),
                            g = d[0],
                            b = d[1],
                            p = g === xt.End,
                            h = g === xt.Idle,
                            v = g === xt.Grow,
                            y = g === xt.Shrink,
                            f = (0, n.useCallback)(
                                (e) => {
                                    (b(e), m && m(e));
                                },
                                [m],
                            ),
                            S = (0, n.useCallback)(
                                (e, t) =>
                                    (0, Et.F)(() => {
                                        f(e);
                                    }, t),
                                [f],
                            );
                        (0, n.useEffect)(() => {
                            if (!a)
                                return h
                                    ? S(xt.Grow, t)
                                    : v
                                      ? S(xt.Shrink, e)
                                      : y
                                        ? S(xt.End, e)
                                        : void (p && l && l());
                        }, [S, a, p, v, h, y, l, t, e]);
                        const E = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Lt(e), Bt(u)), [u, e]),
                            x = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Lt(e), Bt(u)), [u, e]),
                            N = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Mt(u, r), Lt(e)), [r, u, e]),
                            A = (0, n.useMemo)(
                                () => Object.assign({ width: `${Math.abs(c - r)}%` }, Mt(u, r), Lt(e)),
                                [r, u, c, e],
                            );
                        if (p) return null;
                        const w = o()(zt, _, u && 0 === c && Ot);
                        return s().createElement(
                            'div',
                            { style: h ? N : A, className: w },
                            s().createElement(
                                'div',
                                { style: y ? x : E, className: Gt },
                                s().createElement(wt, { size: i }),
                            ),
                        );
                    },
                ),
                Ft = (0, n.memo)(
                    ({
                        to: e,
                        size: t,
                        from: a,
                        lineRef: r,
                        disabled: o,
                        isComplete: i,
                        animationSettings: c,
                        onEndAnimation: l,
                        onChangeAnimationState: m,
                    }) => {
                        const _ = e < a,
                            u = (0, n.useState)(!1),
                            d = u[0],
                            g = u[1],
                            b = (0, n.useCallback)(
                                (e) => {
                                    (e === xt.Shrink && g(!0), m && m(e));
                                },
                                [m],
                            ),
                            p = (0, n.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                            h = (0, n.useMemo)(
                                () => ({ width: `${e}%`, transitionDuration: `${c.line.duration}ms` }),
                                [c.line.duration, e],
                            );
                        return s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(It, {
                                size: t,
                                lineRef: r,
                                disabled: o,
                                isComplete: i,
                                withoutBounce: _ && 0 === e,
                                baseStyles: d ? h : p,
                            }),
                            a >= 0 &&
                                s().createElement(Dt, {
                                    transitionDuration: c.delta.duration,
                                    transitionDelay: c.delta.delay,
                                    onChangeAnimationState: b,
                                    freezed: c.freezed,
                                    onEndAnimation: l,
                                    from: a,
                                    size: t,
                                    to: e,
                                    className: c.delta.className,
                                }),
                        );
                    },
                ),
                Tt = ['onComplete', 'onEndAnimation'];
            function qt() {
                return (
                    (qt = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    qt.apply(null, arguments)
                );
            }
            const jt = (0, n.memo)((e) => {
                    let t = e.onComplete,
                        a = e.onEndAnimation,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var a = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    a[n] = e[n];
                                }
                            return a;
                        })(e, Tt);
                    const o = (0, n.useState)(!1),
                        i = o[0],
                        c = o[1],
                        l = (0, n.useCallback)(() => {
                            const e = 100 === r.to;
                            (e !== i && c(e), e && t && t(), a && a());
                        }, [i, t, a, r.to]);
                    switch (r.animationSettings.type) {
                        case ft.Simple:
                            return s().createElement(Rt, qt({}, r, { onEndAnimation: l, isComplete: i }));
                        case ft.Growing:
                            return s().createElement(Ft, qt({}, r, { onEndAnimation: l, isComplete: i }));
                        default:
                            return null;
                    }
                }),
                Vt = ({ size: e, value: t, lineRef: a, disabled: r, onComplete: o }) => {
                    const i = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                        c = 100 === t;
                    return (
                        (0, n.useEffect)(() => {
                            c && o && o();
                        }, [c, o]),
                        s().createElement(It, { size: e, disabled: r, baseStyles: i, isComplete: c, lineRef: a })
                    );
                },
                Ut = ['onEndAnimation'];
            function Xt() {
                return (
                    (Xt = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    Xt.apply(null, arguments)
                );
            }
            const Wt = (0, n.memo)((e) => {
                let t = e.onEndAnimation,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, Ut);
                const r = (0, n.useRef)({}),
                    o = (0, n.useCallback)(() => {
                        ((r.current.from = void 0), t && t());
                    }, [t]),
                    i = 'number' == typeof r.current.from ? r.current.from : a.from;
                return (
                    (r.current.from = i),
                    s().createElement(
                        jt,
                        Xt({}, a, {
                            onEndAnimation: o,
                            key: `${i}-${a.to}-${null == a ? void 0 : a.additionalKey}`,
                            from: i,
                        }),
                    )
                );
            });
            function Ht() {
                return (
                    (Ht = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    Ht.apply(null, arguments)
                );
            }
            const Jt = (0, n.memo)(
                    ({
                        size: e,
                        value: t,
                        lineRef: a,
                        disabled: n,
                        deltaFrom: r,
                        additionalKey: o,
                        animationSettings: i,
                        onEndAnimation: c,
                        onChangeAnimationState: l,
                        onComplete: m,
                    }) => {
                        if (r === t)
                            return s().createElement(Vt, {
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
                            onEndAnimation: c,
                            onChangeAnimationState: l,
                        };
                        return i.withStack
                            ? s().createElement(Wt, _)
                            : s().createElement(jt, Ht({ key: `${r}-${t}-${o}` }, _));
                    },
                ),
                Kt = (e) => ({
                    '--progress-base': `url(${e.bgImageBase})`,
                    '--progress-line-base': e.line.bgColorBase,
                    '--progress-line-disabled': e.line.bgColorDisabled,
                    '--progress-line-finished': e.line.bgColorFinished,
                    '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                    '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                    '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                    '--progress-glow': `url('${e.glow}')`,
                    '--progress-glow-small': `url('${e.glowSmall}')`,
                    '--progress-delta-color': e.delta.color,
                    '--progress-delta-shadow': e.delta.shadow,
                });
            var Qt = a(7515);
            const Yt = (e, t, a) => {
                    if ('number' == typeof a) {
                        return ((0, Qt.u)(0, t, a) / t) * 100;
                    }
                    return e;
                },
                Zt = {
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
                ea = {
                    freezed: !1,
                    withStack: !1,
                    type: ft.Growing,
                    delta: { duration: 500, delay: 0 },
                    line: { duration: 500, delay: 0 },
                },
                ta = (0, n.memo)(
                    ({
                        maxValue: e = 100,
                        theme: t = Zt,
                        size: a = yt.Default,
                        animationSettings: r = ea,
                        disabled: i = !1,
                        withoutBackground: c = !1,
                        value: l,
                        deltaFrom: m,
                        additionalKey: _,
                        lineRef: u,
                        onChangeAnimationState: d,
                        onEndAnimation: g,
                        onComplete: b,
                    }) => {
                        const p = ((e, t, a) =>
                            (0, n.useMemo)(() => {
                                const n = ((0, Qt.u)(0, t, e) / t) * 100;
                                return { value: n, deltaFrom: Yt(n, t, a) };
                            }, [a, t, e]))(l, e, m);
                        return s().createElement(
                            'div',
                            { className: o()(vt.base, vt[`base__${a}`]), style: Kt(t) },
                            !c && s().createElement(St, { size: a }),
                            s().createElement(Jt, {
                                size: a,
                                lineRef: u,
                                disabled: i,
                                value: p.value,
                                deltaFrom: p.deltaFrom,
                                additionalKey: _,
                                animationSettings: r,
                                onEndAnimation: g,
                                onChangeAnimationState: d,
                                onComplete: b,
                            }),
                        );
                    },
                ),
                aa = 'Progress_base_37',
                na = 'Progress_caption_37',
                sa = 'Progress_steppedText_6a',
                ra = 'Progress_separator_d1',
                oa = 'Progress_accentText_1c',
                ia = ({ progressType: e, currentValue: t, maxValue: a, classNames: n, className: r }) =>
                    s().createElement(
                        'div',
                        { className: o()(aa, r) },
                        s().createElement(ta, { value: t, maxValue: a, size: yt.Small }),
                        s().createElement(
                            'div',
                            { className: o()(na, null == n ? void 0 : n.caption) },
                            e === pt.Stepped
                                ? s().createElement(
                                      'div',
                                      { className: sa },
                                      s().createElement('div', { className: oa }, t),
                                      s().createElement('div', { className: ra }, '/'),
                                      a,
                                  )
                                : s().createElement(
                                      'div',
                                      { className: oa },
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
                la = R.strings.advanced_achievements,
                ma = (0, b.Pi)(({ index: e, size: t, className: a }) => {
                    const n = ve(),
                        r = n.model,
                        i = n.controls,
                        c = r.root.get().isOtherPlayer,
                        l = r.computes.getUpcomingAchievement(e),
                        m = l.key,
                        _ = l.maxValue,
                        u = l.currentValue,
                        b = l.background,
                        p = l.type,
                        h = l.id,
                        v = l.category,
                        y = l.stage,
                        f = l.iconPosition,
                        S = l.iconSizeMap,
                        E = l.specificItemName,
                        x = l.isResearchable,
                        N = l.specificItemLevel,
                        A = x
                            ? (0, g.uF)(R.strings.advanced_achievements.collectVehicle(), { item: E })
                            : (0, g.uF)((0, g.z4)(la.description.$plural(m, _)), { maxValue: _, level: (0, ht.HG)(N) });
                    return s().createElement(
                        'div',
                        {
                            onClick: () => {
                                c || ((0, d.G)(R.sounds.ach_sign()), i.goToDetails(h, v));
                            },
                            onMouseEnter: () => {
                                c || (0, d.G)(R.sounds.ach_hover());
                            },
                            className: o()(ca.base, c && ca.base__otherPlayer, a),
                        },
                        s().createElement(
                            'div',
                            { className: ca.wrapper },
                            s().createElement(K, {
                                keyName: m,
                                backgroundName: b,
                                type: p,
                                level: (0, le.tf)((0, le.bV)(u, _)),
                                size: t,
                                stage: y,
                                iconPosition: f,
                                iconSizeMap: S,
                                classNames: { base: ca.icon, stage: ca.stage },
                            }),
                            !c &&
                                s().createElement(ia, {
                                    progressType: pt.Stepped,
                                    classNames: { caption: ca.progressCaption },
                                    className: ca.progressBar,
                                    currentValue: u,
                                    maxValue: _,
                                }),
                        ),
                        s().createElement(
                            'div',
                            { className: o()(ca.holder, c && ca.base__otherPlayer) },
                            s().createElement(
                                'div',
                                { className: ca.title },
                                s().createElement(bt.l, {
                                    content:
                                        'staged' === p
                                            ? (0, le.Mu)(p, y, la.name.$dyn(m))
                                            : `${(0, g.z4)(la.name.$dyn(m))}`,
                                }),
                            ),
                            s().createElement(gt, { className: ca.description, text: A, lines: 2 }),
                        ),
                    );
                }),
                _a = 'UpcomingList_base_e2',
                ua = 'UpcomingList_label_b6',
                da = 'UpcomingList_base__otherPlayer_8d',
                ga = 'UpcomingList_item_d2',
                ba = 'UpcomingList_base__specificResolution_19',
                pa = R.strings.achievements_page.category,
                ha = (0, b.Pi)(() => {
                    const e = ve().model,
                        t = e.root.get().isOtherPlayer,
                        a = (0, _.GS)(),
                        n = a.mediaSize,
                        r = a.mediaWidth,
                        i = a.mediaHeight,
                        c = n > _.cJ.ExtraSmall && !t ? 2 : 1,
                        l = r === _.fd.ExtraLarge && i === _.Aq.Large && !t;
                    return s().createElement(
                        'div',
                        { className: o()(_a, t && da, l && ba) },
                        s().createElement(
                            'div',
                            { className: ua },
                            s().createElement(ye.z, { text: t ? pa.received.title() : pa.upcoming.title() }),
                        ),
                        Ze(e.computes.upcomingLength(), (e) => {
                            if (!(e > c))
                                return s().createElement(ma, {
                                    className: ga,
                                    index: e,
                                    key: e,
                                    size: (0, Ee.pL)(n, t),
                                });
                        }),
                    );
                }),
                va = 'Footer_base_2b',
                ya = 'Footer_base__leftAlign_ac',
                fa = 'Footer_trophy_b6',
                Sa = 'Footer_upcomingList__otherPlayer_b4',
                Ea = 'Footer_upcomingList_a1',
                xa = (0, b.Pi)(({ className: e }) => {
                    const t = ve().model,
                        a = t.root.get().isOtherPlayer,
                        n = t.computes.upcomingLength,
                        r = (0, _.GS)().mediaSize,
                        i = n() < 2 || (n() < 3 && r > _.cJ.ExtraSmall && !a);
                    return s().createElement(
                        'div',
                        { className: o()(va, i && ya, e) },
                        s().createElement('div', { className: fa }, s().createElement(Ye, null)),
                        Boolean(n()) &&
                            s().createElement('div', { className: o()(Ea, a && Sa) }, s().createElement(ha, null)),
                    );
                }),
                Na = 'SubcategoryAnimationItem_base_b3',
                Aa = 'SubcategoryAnimationItem_particlesAnim_7c',
                wa = 'SubcategoryAnimationItem_oldElement_e1',
                Ca = 'SubcategoryAnimationItem_newElement_26',
                ka = ({ oldElement: e, newElement: t, isStart: a, index: r, onAnimationEnd: o, onPlaySound: i }) => {
                    const l = (0, n.useRef)(null),
                        m = (0, n.useRef)(null),
                        _ = (0, n.useState)(!0),
                        u = _[0],
                        d = _[1],
                        g = (0, n.useRef)(null),
                        b = (0, Se.useSpring)(() => ({
                            progress: 0,
                            onChange: (e) => {
                                if (!m.current || !l.current) return;
                                const t = e.value.progress;
                                ((l.current.style.maskImage = `linear-gradient(237deg, transparent ${t}%, #000 ${t}%)`),
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
                                    b.start({
                                        from: { progress: 0 },
                                        to: { progress: 100 },
                                        delay: e,
                                        config: { duration: Me },
                                    }),
                                    (0, Et.F)(() => {
                                        var e;
                                        (null == (e = g.current) || e.play(), i());
                                    }, e + 150)
                                );
                            }
                        }, [b, r, a, i]),
                        s().createElement(
                            'div',
                            { className: Na },
                            u &&
                                s().createElement(c.n, {
                                    ref: g,
                                    onEnded: () => d(!1),
                                    className: Aa,
                                    src: R.videos.achievements.grade_change_particles(),
                                }),
                            s().createElement('div', { className: wa, ref: l }, e),
                            s().createElement('div', { className: Ca, ref: m }, t),
                        )
                    );
                };
            var $a = a(2372);
            const Pa = 'SubcategoryProgress_amount_0a',
                Ia = 'SubcategoryProgress_quantity_02',
                Ra = 'SubcategoryProgress_quantity__symbol_00',
                za = 'SubcategoryProgress_name_1f',
                Oa = 'SubcategoryProgress_score_5c',
                Ga = 'SubcategoryProgress_scoreIcon_68',
                Ba = 'SubcategoryProgress_scoreCount_fd',
                Ma = 'SubcategoryProgress_progressBar_38',
                La = R.strings.achievements_page,
                Da = R.strings.advanced_achievements,
                Fa = (0, b.Pi)(({ index: e, onAnimationEnd: t }) => {
                    const a = ve().model,
                        r = a.root.get().isOtherPlayer,
                        c = a.computes.getSubcategory(e),
                        l = c.achievementScore,
                        m = c.prevAchievementScore,
                        u = c.prevValue,
                        b = c.currentValue,
                        p = c.key,
                        h = (0, _.GS)().mediaSize,
                        v = (0, n.useState)(u),
                        y = v[0],
                        f = v[1],
                        S = (0, n.useState)(r ? l : m),
                        E = S[0],
                        x = S[1],
                        N = (0, Se.useSpring)(
                            () => ({
                                progress: m,
                                onChange: (e) => {
                                    x(e.value.progress);
                                },
                                onRest: () => {
                                    (A.start({ from: { progress: u }, to: { progress: b } }), t());
                                },
                            }),
                            [b],
                        )[1],
                        A = (0, Se.useSpring)(() => ({
                            progress: 0,
                            onStart: () => (0, d.G)(R.sounds.ach_progress_bar_start()),
                            onChange: (e) => {
                                f(Math.floor(e.value.progress));
                            },
                        }))[1];
                    return (
                        (0, n.useEffect)(() => {
                            r ||
                                N.start({
                                    from: { progress: m },
                                    to: { progress: l },
                                    delay: 1500 * e,
                                    config: { duration: 100 },
                                });
                        }, [l, N, e, r, m]),
                        s().createElement(
                            s().Fragment,
                            null,
                            s().createElement(
                                'div',
                                { className: Pa },
                                s().createElement('div', { className: Ia }, y),
                                s().createElement('div', { className: o()(Ia, Ra) }, R.strings.common.common.percent()),
                            ),
                            s().createElement(
                                'div',
                                { className: za },
                                systemLocale.toUpperCase((0, g.z4)(Da.name.$dyn(p))),
                            ),
                            s().createElement(
                                'div',
                                { className: Ma },
                                s().createElement(ta, {
                                    value: b,
                                    deltaFrom: Math.min(u, b),
                                    size: h < _.cJ.Medium || r ? yt.Small : yt.Medium,
                                    animationSettings: {
                                        freezed: !1,
                                        withStack: !1,
                                        type: ft.Growing,
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
                                            header: La.achievementsPointsTooltip.header(),
                                            body: La.achievementsPointsTooltip.body(),
                                        },
                                    },
                                    s().createElement(
                                        'div',
                                        { className: Oa },
                                        s().createElement('div', { className: Ga }),
                                        s().createElement(
                                            'div',
                                            { className: Ba },
                                            s().createElement($a.A, { value: E, format: 'integral' }),
                                        ),
                                    ),
                                ),
                        )
                    );
                }),
                Ta = 'SubcategoryProgressItem_base_de',
                qa = 'SubcategoryProgressItem_base__otherPlayer_ab',
                ja = 'SubcategoryProgressItem_iconWrapper_7f',
                Va = 'SubcategoryProgressItem_icon_ed',
                Ua = 'SubcategoryProgressItem_icon__oldElement_ba',
                Xa = 'SubcategoryProgressItem_content_cc',
                Wa = 'SubcategoryProgressItem_counter_36',
                Ha = 'SubcategoryProgressItem_counter__animated_5e',
                Ja = R.strings.advanced_achievements,
                Ka = (0, b.Pi)(({ className: e, index: t, onAnimationEnd: a }) => {
                    const r = ve(),
                        c = r.model,
                        u = r.controls,
                        g = c.root.get(),
                        b = g.isOtherPlayer,
                        p = g.isSkipAnimation,
                        h = (0, _.GS)().mediaSize,
                        v = c.computes.getSubcategory(t),
                        y = v.key,
                        f = v.background,
                        S = v.id,
                        E = v.prevAchievementScore,
                        x = v.prevValue,
                        N = v.category,
                        A = v.currentValue,
                        w = v.achievementScore,
                        C = v.bubbles,
                        k = (0, n.useState)(!1),
                        $ = k[0],
                        P = k[1],
                        I = E !== w;
                    return (
                        (0, n.useEffect)(() => {
                            $ && (0, le.tf)(A) === (0, le.tf)(x) && (P(!1), a(t));
                        }, [A, t, $, a, x]),
                        s().createElement(
                            'div',
                            {
                                className: o()(Ta, b && qa, e),
                                onClick: () => {
                                    (((e) => {
                                        b || u.goToDetails(e, N);
                                    })(S),
                                        (0, d.G)(R.sounds.ach_sign()));
                                },
                                onMouseEnter: () => {
                                    b || ((0, d.G)(R.sounds.ach_hover()), u.achievementHover(S, N));
                                },
                            },
                            s().createElement(
                                i.l,
                                {
                                    tooltipArgs: {
                                        header: `${Ja.tooltip.title.$dyn(y)}`,
                                        body: `${Ja.tooltip.description.$dyn(y)}`,
                                    },
                                },
                                b
                                    ? s().createElement(K, {
                                          keyName: y,
                                          backgroundName: f,
                                          type: l.Cq.Subcategory,
                                          level: (0, le.tf)(A),
                                          size: U.X.S180x180,
                                          classNames: { base: Va },
                                      })
                                    : s().createElement(
                                          'div',
                                          { className: ja },
                                          s().createElement(ka, {
                                              oldElement: s().createElement(K, {
                                                  keyName: y,
                                                  backgroundName: f,
                                                  type: l.Cq.Subcategory,
                                                  level: (0, le.tf)(x),
                                                  size: (0, Ee.d5)(h),
                                                  classNames: { base: o()(Va, Ua) },
                                              }),
                                              newElement: s().createElement(
                                                  'div',
                                                  { className: Va },
                                                  s().createElement(K, {
                                                      keyName: y,
                                                      backgroundName: f,
                                                      type: l.Cq.Subcategory,
                                                      level: (0, le.tf)(A),
                                                      size: (0, Ee.d5)(h),
                                                      classNames: { base: Va },
                                                  }),
                                              ),
                                              isStart: $ && (0, le.tf)(A) !== (0, le.tf)(x),
                                              onAnimationEnd: a,
                                              onPlaySound: () => {
                                                  (0, le.tf)(A) !== Ee.z6.Third
                                                      ? (0, d.G)(R.sounds.ach_sub_grade_low())
                                                      : (0, d.G)(R.sounds.ach_sub_grade_high());
                                              },
                                              index: t,
                                          }),
                                          m.graphicsQuality.isHigh() &&
                                              Boolean(C) &&
                                              (0, le.tf)(A) === (0, le.tf)(x) &&
                                              s().createElement(qe, { index: t, currentValue: A, isSkipAnimation: p }),
                                      ),
                            ),
                            s().createElement(
                                'div',
                                { className: Xa },
                                s().createElement(Fa, { index: t, onAnimationEnd: () => P(!0) }),
                            ),
                            Boolean(C) &&
                                s().createElement(
                                    'div',
                                    { className: o()(Wa, I && Ha), style: { animationDelay: Me * t + 1 + 'ms' } },
                                    s().createElement(Be, { value: C, isEmpty: 1 === C }),
                                ),
                        )
                    );
                }),
                Qa = {
                    base: 'SubcategoryList_base_60',
                    item: 'SubcategoryList_item_54',
                    base__specificResolution: 'SubcategoryList_base__specificResolution_17',
                },
                Ya = (0, b.Pi)(() => {
                    const e = ve(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        r = n.isOtherPlayer,
                        i = n.isSkipAnimation,
                        c = t.computes.getLastIndex(),
                        l = (0, _.GS)(),
                        m = l.mediaWidth,
                        u = l.mediaHeight,
                        d = m === _.fd.ExtraLarge && u === _.Aq.Large && !r,
                        g = (e) => {
                            c !== e || i || a.setAnimationState(be.GeneralPercent);
                        };
                    return s().createElement(
                        'div',
                        { className: o()(Qa.base, r && Qa.base__otherPlayer, d && Qa.base__specificResolution) },
                        Ze(t.computes.subcategoriesLength(), (e) =>
                            s().createElement(Ka, { key: e, index: e, className: Qa.item, onAnimationEnd: g }),
                        ),
                    );
                }),
                Za = {
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
                en = R.strings.achievements_page.category,
                tn = (0, n.memo)(function () {
                    return s().createElement(c.n, {
                        src: R.videos.achievements.bg_advanced_achievements(),
                        autoplay: !0,
                        loop: !0,
                        className: Za.video,
                    });
                }),
                an = (0, b.Pi)(() => {
                    const e = ve(),
                        t = e.model,
                        a = e.controls,
                        r = t.root.get(),
                        c = r.achievementsScore,
                        b = r.prevAchievementsScore,
                        p = r.categoryProgress,
                        h = r.maxAchievementsScore,
                        v = r.isOtherPlayer,
                        f = r.categoryName,
                        S = r.categoryBackgroundName,
                        E = r.isSkipAnimation,
                        x = (0, _.GS)(),
                        N = x.mediaSize,
                        w = x.mediaHeight,
                        C = x.mediaWidth,
                        k = (0, n.useState)(!1),
                        $ = k[0],
                        P = k[1],
                        I = t.animationState.get(),
                        z = A(),
                        O = C === _.fd.ExtraLarge && w === _.Aq.Large && !v,
                        G = (0, le.tf)(p);
                    ((0, u.b)(() => {
                        I === be.Init && c !== b && a.setAnimationState(be.Category);
                    }),
                        (0, n.useEffect)(() => {
                            c !== b && (a.setAnimationState(be.Category), a.animationInProgress(!0));
                        }, [c, a, b]),
                        (0, n.useEffect)(() => {
                            E && (a.setAnimationState(be.Init), a.animationInProgress(!1), a.allAnimationEnd());
                        }, [a, E]));
                    const B = ie(N, w, C);
                    return s().createElement(
                        'div',
                        {
                            className: o()(
                                Za.base,
                                v && Za.base__otherPlayer,
                                O && Za.base__specificResolution,
                                m.graphicsQuality.isLow() && Za.base__lowPreset,
                            ),
                            onClick: (e) =>
                                ((e) => {
                                    v && z(y.AnotherPlayer, e);
                                })(e),
                        },
                        s().createElement(
                            'div',
                            { className: Za.wrapper },
                            m.graphicsQuality.isHigh() && !v && s().createElement(tn, null),
                            s().createElement(
                                'div',
                                { className: o()(Za.achievementIcon, Za[`achievementIcon__grade${G}`]) },
                                s().createElement(K, {
                                    keyName: f,
                                    backgroundName: S,
                                    type: l.Cq.Category,
                                    level: G,
                                    size: v ? U.X.S280x280 : U.X.S420x420,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: Za.innerWrapper },
                                s().createElement(
                                    'div',
                                    { className: Za.content },
                                    s().createElement(
                                        'div',
                                        { className: Za.header },
                                        s().createElement(Re, { className: Za.quantity }),
                                        s().createElement('div', { className: Za.name }, en.title()),
                                    ),
                                    s().createElement(Ya, null),
                                    s().createElement(
                                        i.l,
                                        {
                                            className: Za.hoverWrapper,
                                            tooltipArgs: {
                                                header: (0, g.uF)(en.achievementsScore.tooltip.title(), {
                                                    value: c,
                                                    maxValue: h,
                                                }),
                                                body: en.achievementsScore.tooltip.description(),
                                            },
                                        },
                                        s().createElement('div', {
                                            className: Za.hoverArea,
                                            onMouseEnter: () => {
                                                v || (P(!0), (0, d.G)(R.sounds.ach_cup_hover()));
                                            },
                                            onMouseLeave: () => P(!1),
                                            onClick: () => {
                                                v || (a.cupClick(), (0, d.G)(R.sounds.ach_cup_touch()));
                                            },
                                        }),
                                    ),
                                ),
                                s().createElement(xa, { className: Za.footer }),
                                s().createElement(
                                    'div',
                                    { className: o()(Za.cup, $ && Za.cup__hover) },
                                    s().createElement(ke, { className: Za.achievementsScore }),
                                ),
                            ),
                            !v && s().createElement(ce, { vignetteConfig: B }),
                        ),
                    );
                }),
                nn = { context: 'model.achievementsModel' },
                sn = () => s().createElement(he, { options: nn }, s().createElement(an, null));
        },
    },
]);
