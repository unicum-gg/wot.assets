'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [86],
    {
        2980: (e, a, t) => {
            (t.r(a), t.d(a, { default: () => da }));
            var n = t(7363),
                r = t.n(n),
                s = t(8958),
                i = t(295),
                o = t(8526),
                c = t(5521),
                l = t(5834),
                m = t(3403),
                d = t(7030),
                p = t(3597),
                u = t(198),
                _ = t(6328),
                g = t(2914),
                w = t(9744),
                b = t(9210),
                y = t(6486),
                v = t(9480),
                f = t(9605),
                h = t(7672);
            const E = (0, n.createContext)(null),
                A = 'INIT_ROW',
                C = 'CONCURRENT_APPEAR',
                x = 'REWARD',
                N = 'OVERLAY_REWARD',
                k = 'RARE_VIDEO',
                O = 'COMPENSATION',
                T = 'TWITCH',
                B = 'FINISH',
                I = {
                    [A]: { duration: 300 },
                    [C]: { duration: 200 },
                    [x]: { duration: 150 },
                    [N]: { duration: 0, pauseNextSteps: !0 },
                    [k]: { duration: 0, pauseNextSteps: !0 },
                    [T]: { duration: 1e3 },
                    [O]: { duration: 800 },
                    [B]: { name: B, duration: 0, delay: 100 },
                },
                P = (e, a, t) => {
                    switch (e) {
                        case A:
                            return `animation_${a}`;
                        case C:
                            return `animation_${a}_${C}`;
                        default:
                            return `animation_${a}_${t}_${e}`;
                    }
                },
                S = (e, a, t) => Object.assign({}, I[e], { name: P(e, a, t) }),
                V = (e, a) => {
                    const t = [];
                    return (
                        v.u4(
                            e,
                            (e, t, n) => (
                                0 !== n && e.push(S(A, n)),
                                e.push(S(C, n)),
                                v.UI(t, (t, r) => {
                                    const s = (0, h.y)(t),
                                        i = (0, f.C)(a, t.specialAwardName);
                                    (s
                                        ? (i ? e.push(S(N, n, r)) : e.push(S(k, n, r)), e.push(S(x, n, r)))
                                        : 0 !== r && e.push(S(x, n, r)),
                                        t.isCompensation && (e.push(S(T, n, r)), e.push(S(O, n, r))));
                                }),
                                e
                            ),
                            t,
                        ),
                        t.push(I.FINISH),
                        t
                    );
                };
            var $ = t(4736),
                D = t(3215),
                H = t(4598),
                G = t(2691),
                W = t(9174),
                Z = t(3946),
                K = t(7366),
                j = t(9674);
            const z = {
                    multiRewardAppear: j.T.multiRewardAppear,
                    compensationAppear: j.T.compensationAppear,
                    rareAnimation: j.T.rareAnimation,
                    epicAnimation: j.T.epicAnimation,
                    open: j.T.open,
                    openRare: j.T.openRare,
                    purchaseHover: j.T.purchaseHover,
                    purchaseClick: j.T.purchaseClick,
                },
                L = {
                    images: {
                        iconEmpty: 'entry_point.lootboxEmpty',
                        previewIcon: 'awardViews.previewIcon',
                        compensationIcon: 'awardViews.compensationIcon',
                        loader: 'common.waiting',
                    },
                    videos: {
                        compensationGlow: 'awardViews.compensationGlow',
                        rareGlow: 'awardViews.rareGlow',
                        rare: 'awardViews.raritySimpleAnimations.rare_small',
                        epic: 'awardViews.raritySimpleAnimations.epic_small',
                    },
                    texts: {
                        closeButton: 'common.closeButton',
                        multiplier: 'common.rewards.multiplier',
                        headerTitle: 'multipleRewardView.header.title',
                        headerSubtitle: 'multipleRewardView.header.subTitle',
                        quantityAvailableTitle: 'quantityTitle.boxesAvailable',
                        quantityNoBoxesTitle: 'quantityTitle.noBoxes',
                        checkbox: 'common.footer.checkbox',
                        footerBackButton: 'awardViews.footer.backButton',
                        footerPurchaseButtonText: 'common.getButton.upperCase',
                        footerOpenNextButton: 'multipleRewardView.footer.openNextButton',
                        loader: 'common.loader',
                        rareOverlayButtonContinue: 'rareRewardOverlay.rewardDescription.button.text',
                        rareOverlayTitle: 'rareRewardOverlay.rewardDescription.title.text',
                        rareOverlayStyleTitle: 'rareRewardOverlay.rewardDescription.style.text',
                        rareOverlayStyleDescription: 'rareRewardOverlay.rewardDescription.style.description.text',
                    },
                    sounds: z,
                },
                X = {
                    dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
                    dynamicTexts: {
                        rewardsPremiumDay: 'common.rewards.premiumDay',
                        boxCategory: 'common.boxCategory.lowerCase',
                    },
                    dynamicImages: { boxesOpening: 'awardViews.openingBox' },
                },
                q = (0, D.q3)()(
                    ({ observableModel: e }) => {
                        const a = {
                                root: e.object(),
                                bonuses: e.array('bonuses'),
                                info: e.primitives([
                                    'eventName',
                                    'isAnimationActive',
                                    'openingCount',
                                    'boxesCount',
                                    'isAwaitingResponse',
                                    'isReopen',
                                ]),
                                activeRareReward: W.LO.box(null),
                            },
                            t = (0, Z.Om)(() => (0, K.jh)(L, a.info.eventName.get()), { equals: H.jv }),
                            n = (0, Z.Om)(() => (0, K.kC)(X, a.info.eventName.get()), { equals: H.jv }),
                            r = (0, Z.Om)(() => a.bonuses.get(), { equals: H.jv }),
                            s = (0, Z.Om)(() => v.G(r(), (e) => v.G(e, (e) => (0, h.y)(e))), { equals: H.jv }),
                            i = (0, Z.Om)(() => v.u4(a.bonuses.get(), (e, a) => (e > a.length ? e : a.length), 0)),
                            o = (0, Z.Om)(() => {
                                const e = a.root.get().boxCategory,
                                    r = `${e}_${$.G.Common}`,
                                    s = `${e}_${$.G.Rare}`,
                                    i = n().dynamicImages.boxesOpening.dynOpt(r, $.G.Common),
                                    o = n().dynamicVideos.boxesOpening.dynOpt(r, $.G.Common),
                                    c = n().dynamicImages.boxesOpening.dynOpt(s, $.G.Rare),
                                    l = n().dynamicVideos.boxesOpening.dynOpt(s, $.G.Rare),
                                    m = t().sounds,
                                    d = (0, K.UB)(
                                        (0, G.R)(R.sounds, `${z.open}_${a.info.eventName.get()}_${e}`),
                                        m.open,
                                        z.open,
                                    ),
                                    p = (0, K.UB)(
                                        (0, G.R)(R.sounds, `${z.openRare}_${a.info.eventName.get()}_${e}`),
                                        m.openRare,
                                        z.openRare,
                                    );
                                return {
                                    [y.e.common]: { video: o, image: i, sound: d },
                                    [y.e.rare]: { video: l, image: c, sound: p },
                                };
                            });
                        return Object.assign({}, a, {
                            computes: {
                                rewardsListByBoxes: r,
                                resources: t,
                                dynamicResources: n,
                                maxRewardsInLine: i,
                                hasRareReward: s,
                                multimediaResource: o,
                            },
                        });
                    },
                    ({ externalModel: e, model: a }) => ({
                        goPreview: e.createCallback((e) => e, 'onPreview'),
                        openNext: e.createCallback(() => {
                            const e = a.info,
                                t = e.boxesCount,
                                n = e.openingCount;
                            return { openCount: Math.min(t.get(), n.get()) };
                        }, 'onOpen'),
                        goBack: e.createCallbackNoArgs('onGoBack'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                        toggleAnimationState: e.createCallback(
                            (e) => ({ isAnimationActive: !e }),
                            'onAnimationStateChanged',
                        ),
                        setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
                        setActiveRareReward: (0, W.aD)((e) => a.activeRareReward.set(e)),
                        clearActiveRareReward: (0, W.aD)(() => a.activeRareReward.set(null)),
                    }),
                ),
                M = q[0],
                Q = q[1];
            var U = t(6483),
                Y = t.n(U),
                F = t(8844),
                J = t(9766),
                ee = t(8089),
                ae = t(7522),
                te = t(5959),
                ne = t(5415),
                re = t(8821),
                se = t(6974),
                ie = t(3703),
                oe = t(2369),
                ce = t(2862),
                le = t(2056),
                me = t(514),
                de = t(7060),
                pe = t(3633),
                ue = t(4401),
                _e = t(7039),
                ge = t(46);
            const we = { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
                be = { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
                ye = { opacity: 0, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)' },
                ve = () => ({ from: { opacity: 0, transform: 'translateX(-10rem)', filter: 'brightness(1)' } }),
                fe = () => ({
                    to: [
                        { opacity: 1, transform: 'translateX(-8rem)', filter: 'brightness(1.5)' },
                        { opacity: 1, transform: 'translateX(-6rem)', filter: 'brightness(1.5)' },
                        { opacity: 1, transform: 'translateX(-4rem)', filter: 'brightness(1.3)' },
                        { opacity: 1, transform: 'translateX(-2rem)', filter: 'brightness(1.1)' },
                        we,
                    ],
                    config: { duration: 30, easing: ae.Z.easeOutCubic },
                }),
                Re = () => ({ from: { opacity: 0, transform: 'scale(1)', filter: 'brightness(1.5)' } }),
                he = (e = 400) => ({
                    to: [{ opacity: 1, transform: 'scale(1.06)', filter: 'brightness(1.5)' }, be],
                    config: { duration: e, easing: ae.Z.easeOutCubic },
                }),
                Ee = () => ({ from: { opacity: 1, filter: 'brightness(1)', transform: 'scale(1)' } }),
                Ae = () => ({ from: { opacity: 0 } }),
                Ce = () => ({
                    to: { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
                    config: { duration: 200, easing: ae.Z.easeOutCubic },
                });
            var xe = t(114),
                Ne = t(9108);
            const ke = {
                    base: 'RewardTitle_base_e1',
                    base__premium_plus: 'RewardTitle_base__premium_plus_44',
                    value: 'RewardTitle_value_b5',
                    base__credits: 'RewardTitle_base__credits_f6',
                    base__gold: 'RewardTitle_base__gold_19',
                    base__freeXP: 'RewardTitle_base__freeXP_ec',
                    base__bptaler: 'RewardTitle_base__bptaler_f2',
                    base__crystal: 'RewardTitle_base__crystal_75',
                    pluralText: 'RewardTitle_pluralText_11',
                },
                Oe = (0, m.Pi)(({ reward: e, isCompensation: a = !1, className: t = '' }) => {
                    const n = Q().model,
                        s = ((e, a) => {
                            const t = e.name,
                                n = e.value,
                                r = e.compensation;
                            return a ? { name: r.name, value: r.value } : { name: t, value: n };
                        })(e, a),
                        i = s.name,
                        o = s.value,
                        c = n.computes.dynamicResources().dynamicTexts,
                        l = i === ce.E4.PremiumPlus;
                    return r().createElement(
                        'div',
                        { className: Y()(ke.base, ke[`base__${i}`], t) },
                        r().createElement(
                            'div',
                            { className: ke.value },
                            r().createElement(J.z, { text: (0, ue.QH)(o) }),
                        ),
                        l &&
                            r().createElement(
                                'span',
                                { className: ke.pluralText },
                                c.rewardsPremiumDay.plural('premiumDay', Number(o.split(' ').at(-1))),
                            ),
                    );
                }),
                Te = 'Compensation_base_ca',
                Be = 'Compensation_iconWrapper_66',
                Ie = 'Compensation_icon_69',
                Pe = (0, m.Pi)(({ reward: e, size: a, icon: t, animationName: s, className: i = '' }) => {
                    const o = Q().model.computes.resources().sounds,
                        c = (0, d.useSpring)(Re),
                        l = c[0],
                        m = c[1],
                        p = (0, g.H)(E);
                    return (
                        (0, n.useEffect)(() => {
                            const e = (e) => {
                                e.name === s && (me.hY.sound(o.compensationAppear), m.start(he()));
                            };
                            return (
                                p.events.on('change', e),
                                () => {
                                    p.events.off('change', e);
                                }
                            );
                        }),
                        (0, n.useEffect)(() => {
                            const e = () => {
                                m.start(he(0));
                            };
                            return (
                                p.events.on('skipAll', e),
                                () => {
                                    p.events.off('skipAll', e);
                                }
                            );
                        }),
                        r().createElement(
                            'div',
                            { className: Y()(Te, i) },
                            r().createElement(
                                d.animated.div,
                                { style: Object.assign({}, l) },
                                r().createElement(Ne._, {
                                    key: 'compensation_image',
                                    icon: (0, xe.ry)(e, ce.h2.Big, e.isCompensation),
                                    sizes: { height: a.rewardHeight, width: a.rewardWidth },
                                }),
                            ),
                            r().createElement(
                                d.animated.div,
                                { style: { opacity: l.opacity }, className: Be },
                                r().createElement(Ne._, {
                                    key: 'compensation_icon',
                                    icon: t,
                                    sizes: { height: a.compensationIconHeight, width: a.compensationIconWidth },
                                    className: Ie,
                                }),
                            ),
                            r().createElement(
                                d.animated.div,
                                { style: { opacity: l.opacity } },
                                r().createElement(Oe, { reward: e, isCompensation: e.isCompensation }),
                            ),
                        )
                    );
                }),
                Se = ({ reward: e, className: a = '' }) => {
                    const t = e.vehicleShortName;
                    return r().createElement('div', { className: Y()(ke.base, a) }, t);
                },
                Ve = {
                    base: 'AnimatedReward_base_c3',
                    container: 'AnimatedReward_container_c6',
                    reward: 'AnimatedReward_reward_8e',
                    video: 'AnimatedReward_video_3c',
                    glow: 'AnimatedReward_glow_7e',
                    compensation: 'AnimatedReward_compensation_c4',
                    title: 'AnimatedReward_title_3d',
                    vehicleTitle: 'AnimatedReward_vehicleTitle_08',
                    loupeWrapper: 'AnimatedReward_loupeWrapper_a1',
                    loupe: 'AnimatedReward_loupe_22',
                },
                $e = [ce.E4.Vehicles, ce.E4.TmanToken],
                De = {
                    rewardHeight: '80rem',
                    rewardWidth: '80rem',
                    countHeight: '18rem',
                    compensationIconWidth: '24rem',
                    compensationIconHeight: '24rem',
                    nameHeight: '20rem',
                    descriptionHeight: '20rem',
                    imageSize: ce.h2.Big,
                    premDaysHeight: '65rem',
                    premDaysWidth: '65rem',
                },
                He = { opacity: 0, display: 'none' },
                Ge = { opacity: 1, display: 'flex' },
                We = { to: Ge, config: { duration: 500, easing: ae.Z.easeOutCubic } },
                Ze = (0, m.Pi)(({ reward: e, rewardIndex: a, rowIndex: t }) => {
                    const s = Q(),
                        o = s.model,
                        c = s.controls,
                        l = o.computes.resources(),
                        m = l.images,
                        p = l.texts,
                        _ = l.videos,
                        w = l.sounds,
                        b = o.info.eventName.get(),
                        y = (0, n.useState)(!1),
                        v = y[0],
                        R = y[1],
                        A = e.tooltipContentId,
                        B = e.tooltipId,
                        I = (0, i.v)(u.Kg, (e) => e.value),
                        P = (0, d.useSpring)((0, h.y)(e) ? Ae : ve),
                        V = P[0],
                        D = P[1],
                        H = (0, d.useSpring)(Ee),
                        G = H[0],
                        W = H[1],
                        Z = (0, d.useSpring)(() => ({ from: He })),
                        K = Z[0],
                        j = Z[1],
                        z = (0, g.H)(E);
                    return (
                        (0, n.useEffect)(() => {
                            const n = (n) => {
                                switch (n.name) {
                                    case S(C, t).name:
                                        (0, h.y)(e) || 0 !== a || (D.start(fe()), me.hY.sound(w.multiRewardAppear));
                                        break;
                                    case S(x, t, a).name:
                                        (D.start((0, h.y)(e) ? fe() : Ce()), me.hY.sound(w.multiRewardAppear));
                                        break;
                                    case S(k, t, a).name:
                                        R(!0);
                                        break;
                                    case S(N, t, a).name:
                                        c.setActiveRareReward(e);
                                        break;
                                    case S(T, t, a).name:
                                        W.start({
                                            to: [
                                                {
                                                    opacity: 1,
                                                    transform: 'scale(1) rotateZ(0.25deg)',
                                                    filter: 'brightness(1.07)',
                                                },
                                                {
                                                    opacity: 1,
                                                    transform: 'scale(1.01) rotateZ(-0.5deg)',
                                                    filter: 'brightness(1.14)',
                                                },
                                                {
                                                    opacity: 1,
                                                    transform: 'scale(1.02) rotateZ(0.75deg)',
                                                    filter: 'brightness(1.21)',
                                                },
                                                {
                                                    opacity: 1,
                                                    transform: 'scale(1.03) rotateZ(-0.75deg)',
                                                    filter: 'brightness(1.28)',
                                                },
                                                {
                                                    opacity: 1,
                                                    transform: 'scale(1.04) rotateZ(1deg)',
                                                    filter: 'brightness(1.35)',
                                                },
                                                {
                                                    opacity: 1,
                                                    transform: 'scale(1.05) rotateZ(-1deg)',
                                                    filter: 'brightness(1.42)',
                                                },
                                                {
                                                    opacity: 1,
                                                    transform: 'scale(1.06) rotateZ(0deg)',
                                                    filter: 'brightness(1.5)',
                                                },
                                                ye,
                                            ],
                                            config: { duration: 125, easing: ae.Z.easeInOutCubic },
                                        });
                                }
                            };
                            return (
                                z.events.on('change', n),
                                () => {
                                    z.events.off('change', n);
                                }
                            );
                        }, [z.events, t, a, e, D, c, W, w]),
                        (0, n.useEffect)(() => {
                            const a = () => {
                                (D.start(
                                    (0, h.y)(e) ? Ce() : { to: we, config: { duration: 0, easing: ae.Z.easeOutCubic } },
                                ),
                                    e.isCompensation &&
                                        W.start({ to: ye, config: { duration: 0, easing: ae.Z.easeInOutCubic } }));
                            };
                            return (
                                z.events.on('skipAll', a),
                                () => {
                                    z.events.off('skipAll', a);
                                }
                            );
                        }),
                        (0, n.useEffect)(() => {
                            switch (I) {
                                case u.B1.skip:
                                    j.set(Ge);
                                    break;
                                case u.B1.preparation:
                                    j.set(He);
                                    break;
                                case u.B1.page:
                                    j.start(We);
                            }
                        }, [I]),
                        r().createElement(
                            le.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: Number(A),
                                args: { tooltipId: B, boxCategory: e.icon, eventName: b },
                                isEnabled: I === u.B1.initial,
                            },
                            r().createElement(
                                'div',
                                { className: Y()(Ve.base, Ve[`base__reward_${t}_${a}`]) },
                                r().createElement(
                                    d.animated.div,
                                    { style: Object.assign({}, V), className: Ve.container },
                                    (0, h.y)(e) &&
                                        r().createElement(de.o, {
                                            className: Y()(Ve.video, Ve.glow),
                                            src: _.rareGlow,
                                            autoplay: !0,
                                            loop: !0,
                                        }),
                                    r().createElement(
                                        d.animated.div,
                                        { style: Object.assign({}, G) },
                                        r().createElement(ge.Q, {
                                            reward: e,
                                            countText: p.multiplier,
                                            sizes: De,
                                            className: Ve.reward,
                                            currentAnimationState: I,
                                        }),
                                    ),
                                    r().createElement(
                                        d.animated.div,
                                        { style: { opacity: G.opacity }, className: Ve.title },
                                        e.name === ce.E4.Vehicles &&
                                            r().createElement(Se, { reward: e, className: Ve.vehicleTitle }),
                                        !$e.includes(e.name) && r().createElement(Oe, { reward: e }),
                                    ),
                                    (0, ue.XM)(e) &&
                                        !e.isCompensation &&
                                        r().createElement(
                                            d.animated.div,
                                            { style: K, className: Ve.loupeWrapper },
                                            r().createElement(pe.k, {
                                                icon: { img: m.previewIcon },
                                                onClick: () =>
                                                    c.goPreview({
                                                        bonusType: e.name,
                                                        bonusId: e.id ? e.id : '',
                                                        styleID: e.styleID,
                                                    }),
                                                className: Ve.loupe,
                                            }),
                                        ),
                                    e.isCompensation &&
                                        r().createElement(Pe, {
                                            reward: e,
                                            size: De,
                                            icon: m.compensationIcon,
                                            animationName: S(O, t, a).name,
                                            className: Ve.compensation,
                                        }),
                                ),
                                (0, h.y)(e) &&
                                    !(0, f.C)(b, e.specialAwardName) &&
                                    r().createElement(_e.s, {
                                        className: Ve.video,
                                        sound: e.rarity === $.G.Rare ? w.rareAnimation : w.epicAnimation,
                                        src: _[e.rarity],
                                        show: v,
                                        timer: { remainder: 0.5, next: z.resume },
                                    }),
                            ),
                        )
                    );
                }),
                Ke = {
                    base: 'RewardsRow_base_72',
                    number: 'RewardsRow_number_8e',
                    number__0: 'RewardsRow_number__0_d2',
                    number__1: 'RewardsRow_number__1_1b',
                    number__2: 'RewardsRow_number__2_ed',
                    number__3: 'RewardsRow_number__3_66',
                    number__4: 'RewardsRow_number__4_8d',
                    divider: 'RewardsRow_divider_36',
                    divider__0: 'RewardsRow_divider__0_78',
                    divider__1: 'RewardsRow_divider__1_4e',
                    divider__2: 'RewardsRow_divider__2_6b',
                    divider__3: 'RewardsRow_divider__3_3e',
                },
                je = (0, m.Pi)(({ order: e, rewards: a, isLast: t }) => {
                    const n = Q().model.computes.maxRewardsInLine();
                    return r().createElement(
                        'div',
                        { className: Ke.base, style: { width: ((s = n), 28 + 108 * s) + 'rem' } },
                        r().createElement('div', { className: Y()(Ke.number, Ke['number__' + (e - 1)]) }, e),
                        v.UI(a, (a, t) =>
                            r().createElement(Ze, {
                                reward: a,
                                key: `reward_${e - 1}_${t}_${(0, h.u)()}`,
                                rewardIndex: t,
                                rowIndex: e - 1,
                            }),
                        ),
                        !t && r().createElement('div', { className: Y()(Ke.divider, Ke['divider__' + (e - 1)]) }),
                    );
                    var s;
                }),
                ze = 'Content_base_48',
                Le = 'Content_base__ready_a2',
                Xe = 'Content_rareOverlay_2f',
                qe = 'Content_headerBlock_4d',
                Me = 'Content_subtitle_9e',
                Qe = 'Content_closeButton_15',
                Ue = 'Content_boxes_69',
                Ye = 'Content_footer_04',
                Fe = 'Content_checkbox_8f',
                Je = { opacity: 0 },
                ea = { opacity: 1 },
                aa = {
                    to: ea,
                    config: { duration: 500, easing: ae.Z.easeOutCubic },
                    onRest: () => {
                        u.Kg.send({ type: u.QK.toInitial });
                    },
                },
                ta = (0, m.Pi)(() => {
                    const e = Q(),
                        a = e.model,
                        t = e.controls,
                        s = a.root.get(),
                        o = s.boxesCount,
                        c = s.boxCategory,
                        m = s.isWindowAccessible,
                        p = s.isShopVisible,
                        _ = a.info.isAnimationActive.get(),
                        w = a.info.eventName.get(),
                        b = a.info.openingCount.get(),
                        y = a.activeRareReward.get(),
                        R = a.computes,
                        h = R.resources,
                        A = R.dynamicResources,
                        C = R.rewardsListByBoxes,
                        x = h(),
                        N = x.texts,
                        k = x.images,
                        O = x.sounds,
                        T = A().dynamicTexts,
                        B = C(),
                        I = (0, ne.GS)().mediaSize,
                        P = (0, i.v)(u.Kg, (e) => e.value),
                        S = (0, d.useSpring)(() => ({ from: Je })),
                        V = S[0],
                        $ = S[1],
                        D = (0, g.H)(E);
                    (0, n.useEffect)(() => {
                        switch ((0, l.P)(P)) {
                            case u.B1.skip:
                                ($.set(ea), D.skipAll());
                                break;
                            case u.B1.preparation:
                                ($.set(Je), D.reset());
                                break;
                            case u.B1.rewards:
                                D.start();
                                break;
                            case u.B1.page:
                                $.start(aa);
                        }
                    }, [P]);
                    return r().createElement(
                        'div',
                        { className: Y()(ze, P === u.B1.initial && Le) },
                        Boolean(y && (0, f.C)(w, null == y ? void 0 : y.specialAwardName)) &&
                            r().createElement(
                                'div',
                                { className: Xe },
                                r().createElement(oe.H, {
                                    res: (0, f.D)(w, null == y ? void 0 : y.specialAwardName),
                                    rareBonus: y,
                                    texts: N,
                                    controls: {
                                        onClose: () => {
                                            (t.setActiveRareReward(null), D.resume());
                                        },
                                        onPlay: () => t.setIsVideoPlaying(!0),
                                        onEnded: () => t.setIsVideoPlaying(!1),
                                    },
                                    minimized: !m,
                                }),
                            ),
                        r().createElement(
                            d.animated.div,
                            { style: V, className: qe },
                            r().createElement(se.h, {
                                title: N.headerTitle,
                                subTitle: c
                                    ? r().createElement(J.z, {
                                          text: N.headerSubtitle,
                                          binding: { name: T.boxCategory.dynOpt(c), boxesCount: B.length },
                                          classMix: Me,
                                      })
                                    : '',
                            }),
                            r().createElement(
                                'div',
                                { className: Qe },
                                r().createElement(ee.A, {
                                    caption: N.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.close,
                                }),
                            ),
                        ),
                        r().createElement(
                            'div',
                            { className: Ue },
                            v.UI(B, (e, a) =>
                                r().createElement(je, {
                                    key: `rewards_row_${a}`,
                                    order: a + 1,
                                    isLast: a === B.length - 1,
                                    rewards: e,
                                }),
                            ),
                        ),
                        r().createElement(
                            d.animated.div,
                            { style: V, className: Ye },
                            te.graphicsQuality.isHigh() &&
                                r().createElement(re.o, {
                                    isActive: _,
                                    onClick: () => {
                                        t.toggleAnimationState(_);
                                    },
                                    className: Fe,
                                    text: N.checkbox,
                                    size: I >= ne.cJ.Medium ? F.yB.extraLarge : F.yB.large,
                                }),
                            r().createElement(ie.Z, {
                                texts: N,
                                images: k,
                                sounds: O,
                                actions: Object.assign({}, t, {
                                    openNext: () => {
                                        u.Kg.send({ type: u.QK.toPreparation });
                                    },
                                }),
                                boxesCount: o,
                                openingCount: b,
                                isShopVisible: p,
                            }),
                        ),
                    );
                }),
                na = 'App_base_79',
                ra = 'App_background_02',
                sa = 'App_loader_4a',
                ia = 'App_content_62',
                oa = 'App_loaderWrapper_e5',
                ca = (0, m.Pi)(() => {
                    const e = Q(),
                        a = e.model,
                        t = e.controls,
                        s = a.computes.resources(),
                        m = s.images,
                        v = s.texts,
                        f = a.root.get().isWindowAccessible,
                        R = a.info.isAnimationActive.get(),
                        h = a.info.isAwaitingResponse.get(),
                        A = a.computes.hasRareReward(),
                        C = a.info.isReopen.get(),
                        x = a.computes.multimediaResource(),
                        N = (0, i.v)(u.Kg, (e) => e.value),
                        k = (0, g.H)(E);
                    ((0, n.useEffect)(() => {
                        const e = (e) => {
                            e.name === B && u.Kg.send({ type: u.QK.toPage });
                        };
                        return (
                            k.events.on('change', e),
                            () => {
                                k.events.off('change', e);
                            }
                        );
                    }, [k.events]),
                        (0, o.gd)(
                            c.n.ESCAPE,
                            () => {
                                N === u.B1.initial && t.close();
                            },
                            !0,
                        ),
                        (0, n.useEffect)(
                            () => (
                                u.Kg.start(),
                                () => {
                                    u.Kg.stop();
                                }
                            ),
                            [],
                        ),
                        (0, n.useEffect)(() => {
                            u.Kg.send({ type: u.QK.setAnimationActive, isAnimationActive: R });
                        }, [R]),
                        (0, b.s)(C, h, N));
                    const O = (0, w.H)(N, t.openNext),
                        T = O.loadingStyle,
                        I = O.contentStyle;
                    return r().createElement(
                        'div',
                        { className: na, ref: k.rootRef },
                        r().createElement(_.F, {
                            activeType: A ? y.e.rare : y.e.common,
                            minimized: !f,
                            res: x,
                            className: ra,
                            onPlay: () => t.setIsVideoPlaying(!0),
                            onEnded: () => t.setIsVideoPlaying(!1),
                        }),
                        (0, l.P)(N) !== u.A_ &&
                            r().createElement(d.animated.div, { style: I, className: ia }, r().createElement(ta, null)),
                        N === u.B1.waiting &&
                            r().createElement(
                                d.animated.div,
                                { style: T, className: oa },
                                r().createElement(p.a, { text: v.loader, img: m.loader, className: sa }),
                            ),
                    );
                });
            var la = t(7051);
            const ma = (0, m.Pi)(({ children: e }) => {
                    const a = Q().model,
                        t = a.info.eventName.get(),
                        n = (0, la.G)({ steps: V(a.computes.rewardsListByBoxes(), t), autoStart: !1 })();
                    return r().createElement(E.Provider, { value: n }, e);
                }),
                da = () =>
                    r().createElement(
                        M,
                        { options: s.f.MULTIPLE_REWARD },
                        r().createElement(ma, null, r().createElement(ca, null)),
                    );
        },
    },
]);
