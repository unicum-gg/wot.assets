'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [86],
    {
        2980: (e, a, t) => {
            t.r(a), t.d(a, { default: () => la });
            var r = t(7363),
                n = t.n(r),
                s = t(8958),
                i = t(295),
                o = t(8526),
                c = t(5521),
                l = t(5834),
                m = t(3403),
                d = t(7030),
                u = t(3597),
                p = t(198),
                _ = t(6328),
                g = t(2914),
                w = t(9744),
                b = t(9210),
                y = t(6486),
                v = t(9480),
                f = t(9605),
                h = t(7672);
            const R = (0, r.createContext)(null),
                E = 'INIT_ROW',
                x = 'CONCURRENT_APPEAR',
                A = 'REWARD',
                C = 'OVERLAY_REWARD',
                N = 'RARE_VIDEO',
                k = 'COMPENSATION',
                T = 'TWITCH',
                O = 'FINISH',
                B = {
                    [E]: { duration: 300 },
                    [x]: { duration: 200 },
                    [A]: { duration: 150 },
                    [C]: { duration: 0, pauseNextSteps: !0 },
                    [N]: { duration: 0, pauseNextSteps: !0 },
                    [T]: { duration: 1e3 },
                    [k]: { duration: 800 },
                    [O]: { name: O, duration: 0, delay: 100 },
                },
                I = (e, a, t) => {
                    switch (e) {
                        case E:
                            return `animation_${a}`;
                        case x:
                            return `animation_${a}_${x}`;
                        default:
                            return `animation_${a}_${t}_${e}`;
                    }
                },
                P = (e, a, t) => Object.assign({}, B[e], { name: I(e, a, t) }),
                V = (e, a) => {
                    const t = [];
                    return (
                        v.u4(
                            e,
                            (e, t, r) => (
                                0 !== r && e.push(P(E, r)),
                                e.push(P(x, r)),
                                v.UI(t, (t, n) => {
                                    const s = (0, h.y)(t),
                                        i = (0, f.C)(a, t.specialAwardName);
                                    s
                                        ? (i ? e.push(P(C, r, n)) : e.push(P(N, r, n)), e.push(P(A, r, n)))
                                        : 0 !== n && e.push(P(A, r, n)),
                                        t.isCompensation && (e.push(P(T, r, n)), e.push(P(k, r, n)));
                                }),
                                e
                            ),
                            t,
                        ),
                        t.push(B.FINISH),
                        t
                    );
                };
            var S = t(4736),
                D = t(3215),
                H = t(4598),
                G = t(9174),
                W = t(3946),
                Z = t(7366),
                $ = t(9674);
            const L = {
                    images: {
                        iconEmpty: 'entry_point.lootboxEmpty',
                        externalLink: 'common.externalLinkOrange',
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
                        quantityAvailableTitle: 'awardViews.quantityTitle.boxesAvailable',
                        quantityNoBoxesTitle: 'awardViews.quantityTitle.noBoxes',
                        checkbox: 'awardViews.footer.checkbox',
                        footerBackButton: 'awardViews.footer.backButton',
                        footerPurchaseButtonText: 'awardViews.footer.purchaseButtonText',
                        footerPurchaseButtonTextCn: 'awardViews.footer.purchaseButtonTextCn',
                        footerOpenNextButton: 'multipleRewardView.footer.openNextButton',
                        loader: 'common.loader',
                        rareOverlayButtonContinue: 'rareRewardOverlay.rewardDescription.button.text',
                        rareOverlayTitle: 'rareRewardOverlay.rewardDescription.title.text',
                        rareOverlayStyleTitle: 'rareRewardOverlay.rewardDescription.style.text',
                        rareOverlayStyleDescription: 'rareRewardOverlay.rewardDescription.style.description.text',
                    },
                    sounds: {
                        multiRewardAppear: $.T.multiRewardAppear,
                        compensationAppear: $.T.compensationAppear,
                        rareAnimation: $.T.rareAnimation,
                        epicAnimation: $.T.epicAnimation,
                        open: $.T.open,
                        openRare: $.T.openRare,
                        purchaseHover: $.T.purchaseHover,
                        purchaseClick: $.T.purchaseClick,
                    },
                },
                K = {
                    dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
                    dynamicTexts: {
                        rewardsPremiumDay: 'infoPage.rewards.premiumDay',
                        boxCategory: 'common.boxCategory.lowerCase',
                    },
                    dynamicImages: { boxesOpening: 'awardViews.openingBox' },
                },
                j = (0, D.q3)()(
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
                                activeRareReward: G.LO.box(null),
                            },
                            t = (0, W.Om)(() => (0, Z.jh)(L, a.info.eventName.get()), { equals: H.jv }),
                            r = (0, W.Om)(() => (0, Z.kC)(K, a.info.eventName.get()), { equals: H.jv }),
                            n = (0, W.Om)(() => a.bonuses.get(), { equals: H.jv }),
                            s = (0, W.Om)(() => v.G(n(), (e) => v.G(e, (e) => (0, h.y)(e))), { equals: H.jv }),
                            i = (0, W.Om)(() => v.u4(a.bonuses.get(), (e, a) => (e > a.length ? e : a.length), 0)),
                            o = (0, W.Om)(() => {
                                const e = a.root.get().boxCategory,
                                    n = `${e}_${S.G.Common}`,
                                    s = `${e}_${S.G.Rare}`,
                                    i = r().dynamicImages.boxesOpening.dynOpt(n, S.G.Common),
                                    o = r().dynamicVideos.boxesOpening.dynOpt(n, S.G.Common),
                                    c = r().dynamicImages.boxesOpening.dynOpt(s, S.G.Rare),
                                    l = r().dynamicVideos.boxesOpening.dynOpt(s, S.G.Rare),
                                    m = t().sounds;
                                return {
                                    [y.e.common]: { video: o, image: i, sound: m.open },
                                    [y.e.rare]: { video: l, image: c, sound: m.openRare },
                                };
                            });
                        return Object.assign({}, a, {
                            computes: {
                                rewardsListByBoxes: n,
                                resources: t,
                                dynamicResources: r,
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
                                r = e.openingCount;
                            return { openCount: Math.min(t.get(), r.get()) };
                        }, 'onOpen'),
                        goBack: e.createCallbackNoArgs('onGoBack'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                        toggleAnimationState: e.createCallback(
                            (e) => ({ isAnimationActive: !e }),
                            'onAnimationStateChanged',
                        ),
                        setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
                        setActiveRareReward: (0, G.aD)((e) => a.activeRareReward.set(e)),
                        clearActiveRareReward: (0, G.aD)(() => a.activeRareReward.set(null)),
                    }),
                ),
                z = j[0],
                X = j[1];
            var q = t(6483),
                M = t.n(q),
                Q = t(8844),
                U = t(9766),
                Y = t(8089),
                F = t(7522),
                J = t(5959),
                ee = t(5415),
                ae = t(8821),
                te = t(6974),
                re = t(3703),
                ne = t(2369),
                se = t(2862),
                ie = t(2056),
                oe = t(7412),
                ce = t(514),
                le = t(3633),
                me = t(4401),
                de = t(5888),
                ue = t(7039),
                pe = t(46);
            const _e = { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
                ge = { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
                we = { opacity: 0, transform: 'scale(1) rotateZ(0deg)', filter: 'brightness(1)' },
                be = () => ({ from: { opacity: 0, transform: 'translateX(-10rem)', filter: 'brightness(1)' } }),
                ye = () => ({
                    to: [
                        { opacity: 1, transform: 'translateX(-8rem)', filter: 'brightness(1.5)' },
                        { opacity: 1, transform: 'translateX(-6rem)', filter: 'brightness(1.5)' },
                        { opacity: 1, transform: 'translateX(-4rem)', filter: 'brightness(1.3)' },
                        { opacity: 1, transform: 'translateX(-2rem)', filter: 'brightness(1.1)' },
                        _e,
                    ],
                    config: { duration: 30, easing: F.Z.easeOutCubic },
                }),
                ve = () => ({ from: { opacity: 0, transform: 'scale(1)', filter: 'brightness(1.5)' } }),
                fe = (e = 400) => ({
                    to: [{ opacity: 1, transform: 'scale(1.06)', filter: 'brightness(1.5)' }, ge],
                    config: { duration: e, easing: F.Z.easeOutCubic },
                }),
                he = () => ({ from: { opacity: 1, filter: 'brightness(1)', transform: 'scale(1)' } }),
                Re = () => ({ from: { opacity: 0 } }),
                Ee = () => ({
                    to: { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
                    config: { duration: 200, easing: F.Z.easeOutCubic },
                });
            var xe = t(114),
                Ae = t(9108);
            const Ce = {
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
                Ne = (0, m.Pi)(({ reward: e, isCompensation: a = !1, className: t = '' }) => {
                    const r = X().model,
                        s = ((e, a) => {
                            const t = e.name,
                                r = e.value,
                                n = e.compensation;
                            return a ? { name: n.name, value: n.value } : { name: t, value: r };
                        })(e, a),
                        i = s.name,
                        o = s.value,
                        c = r.computes.dynamicResources().dynamicTexts,
                        l = i === se.E4.PremiumPlus;
                    return n().createElement(
                        'div',
                        { className: M()(Ce.base, Ce[`base__${i}`], t) },
                        n().createElement(
                            'div',
                            { className: Ce.value },
                            n().createElement(U.z, { text: (0, me.QH)(o) }),
                        ),
                        l &&
                            n().createElement(
                                'span',
                                { className: Ce.pluralText },
                                c.rewardsPremiumDay.plural('premiumDay', Number(o.split(' ').at(-1))),
                            ),
                    );
                }),
                ke = 'Compensation_base_ca',
                Te = 'Compensation_iconWrapper_66',
                Oe = 'Compensation_icon_69',
                Be = (0, m.Pi)(({ reward: e, size: a, icon: t, animationName: s, className: i = '' }) => {
                    const o = X().model.computes.resources().sounds,
                        c = (0, d.useSpring)(ve),
                        l = c[0],
                        m = c[1],
                        u = (0, g.H)(R);
                    return (
                        (0, r.useEffect)(() => {
                            const e = (e) => {
                                e.name === s && (ce.hY.sound(o.compensationAppear), m.start(fe()));
                            };
                            return (
                                u.events.on('change', e),
                                () => {
                                    u.events.off('change', e);
                                }
                            );
                        }),
                        (0, r.useEffect)(() => {
                            const e = () => {
                                m.start(fe(0));
                            };
                            return (
                                u.events.on('skipAll', e),
                                () => {
                                    u.events.off('skipAll', e);
                                }
                            );
                        }),
                        n().createElement(
                            'div',
                            { className: M()(ke, i) },
                            n().createElement(
                                d.animated.div,
                                { style: Object.assign({}, l) },
                                n().createElement(Ae._, {
                                    key: 'compensation_image',
                                    icon: (0, xe.ry)(e, se.h2.Big, e.isCompensation),
                                    sizes: { height: a.rewardHeight, width: a.rewardWidth },
                                }),
                            ),
                            n().createElement(
                                d.animated.div,
                                { style: { opacity: l.opacity }, className: Te },
                                n().createElement(Ae._, {
                                    key: 'compensation_icon',
                                    icon: t,
                                    sizes: { height: a.compensationIconHeight, width: a.compensationIconWidth },
                                    className: Oe,
                                }),
                            ),
                            n().createElement(
                                d.animated.div,
                                { style: { opacity: l.opacity } },
                                n().createElement(Ne, { reward: e, isCompensation: e.isCompensation }),
                            ),
                        )
                    );
                }),
                Ie = ({ reward: e, className: a = '' }) => {
                    const t = e.vehicleShortName;
                    return n().createElement('div', { className: M()(Ce.base, a) }, t);
                },
                Pe = {
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
                Ve = [se.E4.Vehicles, se.E4.TmanToken],
                Se = {
                    rewardHeight: '80rem',
                    rewardWidth: '80rem',
                    countHeight: '18rem',
                    compensationIconWidth: '24rem',
                    compensationIconHeight: '24rem',
                    nameHeight: '20rem',
                    descriptionHeight: '20rem',
                    imageSize: se.h2.Big,
                    premDaysHeight: '65rem',
                    premDaysWidth: '65rem',
                },
                De = { opacity: 0, display: 'none' },
                He = { opacity: 1, display: 'flex' },
                Ge = { to: He, config: { duration: 500, easing: F.Z.easeOutCubic } },
                We = (0, m.Pi)(({ reward: e, rewardIndex: a, rowIndex: t }) => {
                    const s = X(),
                        o = s.model,
                        c = s.controls,
                        l = o.computes.resources(),
                        m = l.images,
                        u = l.texts,
                        _ = l.videos,
                        w = l.sounds,
                        b = o.info.eventName.get(),
                        y = (0, r.useState)(!1),
                        v = y[0],
                        E = y[1],
                        O = e.tooltipContentId,
                        B = e.tooltipId,
                        I = (0, i.v)(p.Kg, (e) => e.value),
                        V = (0, d.useSpring)((0, h.y)(e) ? Re : be),
                        D = V[0],
                        H = V[1],
                        G = (0, d.useSpring)(he),
                        W = G[0],
                        Z = G[1],
                        $ = (0, d.useSpring)(() => ({ from: De })),
                        L = $[0],
                        K = $[1],
                        j = (0, r.useRef)(null);
                    (0, de.L)(j);
                    const z = (0, g.H)(R);
                    return (
                        (0, r.useEffect)(() => {
                            const r = (r) => {
                                switch (r.name) {
                                    case P(x, t).name:
                                        (0, h.y)(e) || 0 !== a || (H.start(ye()), ce.hY.sound(w.multiRewardAppear));
                                        break;
                                    case P(A, t, a).name:
                                        H.start((0, h.y)(e) ? ye() : Ee()), ce.hY.sound(w.multiRewardAppear);
                                        break;
                                    case P(N, t, a).name:
                                        E(!0);
                                        break;
                                    case P(C, t, a).name:
                                        c.setActiveRareReward(e);
                                        break;
                                    case P(T, t, a).name:
                                        Z.start({
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
                                                we,
                                            ],
                                            config: { duration: 125, easing: F.Z.easeInOutCubic },
                                        });
                                }
                            };
                            return (
                                z.events.on('change', r),
                                () => {
                                    z.events.off('change', r);
                                }
                            );
                        }, [z.events, t, a, e, H, c, Z, w]),
                        (0, r.useEffect)(() => {
                            const a = () => {
                                H.start(
                                    (0, h.y)(e) ? Ee() : { to: _e, config: { duration: 0, easing: F.Z.easeOutCubic } },
                                ),
                                    e.isCompensation &&
                                        Z.start({ to: we, config: { duration: 0, easing: F.Z.easeInOutCubic } });
                            };
                            return (
                                z.events.on('skipAll', a),
                                () => {
                                    z.events.off('skipAll', a);
                                }
                            );
                        }),
                        (0, r.useEffect)(() => {
                            switch (I) {
                                case p.B1.skip:
                                    K.set(He);
                                    break;
                                case p.B1.preparation:
                                    K.set(De);
                                    break;
                                case p.B1.page:
                                    K.start(Ge);
                            }
                        }, [I]),
                        n().createElement(
                            ie.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: Number(O),
                                args: { tooltipId: B, boxCategory: e.icon, eventName: b },
                                isEnabled: I === p.B1.initial,
                            },
                            n().createElement(
                                'div',
                                { className: M()(Pe.base, Pe[`base__reward_${t}_${a}`]) },
                                n().createElement(
                                    d.animated.div,
                                    { style: Object.assign({}, D), className: Pe.container },
                                    (0, h.y)(e) &&
                                        n().createElement(oe.n, {
                                            className: M()(Pe.video, Pe.glow),
                                            src: _.rareGlow,
                                            autoplay: !0,
                                            loop: !0,
                                            ref: j,
                                        }),
                                    n().createElement(
                                        d.animated.div,
                                        { style: Object.assign({}, W) },
                                        n().createElement(pe.Q, {
                                            reward: e,
                                            countText: u.multiplier,
                                            sizes: Se,
                                            className: Pe.reward,
                                            currentAnimationState: I,
                                        }),
                                    ),
                                    n().createElement(
                                        d.animated.div,
                                        { style: { opacity: W.opacity }, className: Pe.title },
                                        e.name === se.E4.Vehicles &&
                                            n().createElement(Ie, { reward: e, className: Pe.vehicleTitle }),
                                        !Ve.includes(e.name) && n().createElement(Ne, { reward: e }),
                                    ),
                                    (0, me.XM)(e) &&
                                        !e.isCompensation &&
                                        n().createElement(
                                            d.animated.div,
                                            { style: L, className: Pe.loupeWrapper },
                                            n().createElement(le.k, {
                                                icon: { img: m.previewIcon },
                                                onClick: () =>
                                                    c.goPreview({
                                                        bonusType: e.name,
                                                        bonusId: e.id ? e.id : '',
                                                        styleID: e.styleID,
                                                    }),
                                                className: Pe.loupe,
                                            }),
                                        ),
                                    e.isCompensation &&
                                        n().createElement(Be, {
                                            reward: e,
                                            size: Se,
                                            icon: m.compensationIcon,
                                            animationName: P(k, t, a).name,
                                            className: Pe.compensation,
                                        }),
                                ),
                                (0, h.y)(e) &&
                                    !(0, f.C)(b, e.specialAwardName) &&
                                    n().createElement(ue.s, {
                                        className: Pe.video,
                                        sound: e.rarity === S.G.Rare ? w.rareAnimation : w.epicAnimation,
                                        src: _[e.rarity],
                                        show: v,
                                        timer: { remainder: 0.5, next: z.resume },
                                    }),
                            ),
                        )
                    );
                }),
                Ze = {
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
                $e = (0, m.Pi)(({ order: e, rewards: a, isLast: t }) => {
                    const r = X().model.computes.maxRewardsInLine();
                    return n().createElement(
                        'div',
                        { className: Ze.base, style: { width: ((s = r), 28 + 108 * s) + 'rem' } },
                        n().createElement('div', { className: M()(Ze.number, Ze['number__' + (e - 1)]) }, e),
                        v.UI(a, (a, t) =>
                            n().createElement(We, {
                                reward: a,
                                key: `reward_${e - 1}_${t}_${(0, h.u)()}`,
                                rewardIndex: t,
                                rowIndex: e - 1,
                            }),
                        ),
                        !t && n().createElement('div', { className: M()(Ze.divider, Ze['divider__' + (e - 1)]) }),
                    );
                    var s;
                }),
                Le = 'Content_base_48',
                Ke = 'Content_base__ready_a2',
                je = 'Content_rareOverlay_2f',
                ze = 'Content_headerBlock_4d',
                Xe = 'Content_subtitle_9e',
                qe = 'Content_closeButton_15',
                Me = 'Content_boxes_69',
                Qe = 'Content_footer_04',
                Ue = 'Content_checkbox_8f',
                Ye = { opacity: 0 },
                Fe = { opacity: 1 },
                Je = {
                    to: Fe,
                    config: { duration: 500, easing: F.Z.easeOutCubic },
                    onRest: () => {
                        p.Kg.send({ type: p.QK.toInitial });
                    },
                },
                ea = (0, m.Pi)(() => {
                    const e = X(),
                        a = e.model,
                        t = e.controls,
                        s = a.root.get(),
                        o = s.boxesCount,
                        c = s.boxCategory,
                        m = s.useExternal,
                        u = s.isWindowAccessible,
                        _ = s.isShopVisible,
                        w = a.info.isAnimationActive.get(),
                        b = a.info.eventName.get(),
                        y = a.info.openingCount.get(),
                        h = a.activeRareReward.get(),
                        E = a.computes,
                        x = E.resources,
                        A = E.dynamicResources,
                        C = E.rewardsListByBoxes,
                        N = x(),
                        k = N.texts,
                        T = N.images,
                        O = N.sounds,
                        B = A().dynamicTexts,
                        I = C(),
                        P = (0, ee.GS)().mediaSize,
                        V = (0, i.v)(p.Kg, (e) => e.value),
                        S = (0, d.useSpring)(() => ({ from: Ye })),
                        D = S[0],
                        H = S[1],
                        G = (0, g.H)(R);
                    (0, r.useEffect)(() => {
                        switch ((0, l.P)(V)) {
                            case p.B1.skip:
                                H.set(Fe), G.skipAll();
                                break;
                            case p.B1.preparation:
                                H.set(Ye), G.reset();
                                break;
                            case p.B1.rewards:
                                G.start();
                                break;
                            case p.B1.page:
                                H.start(Je);
                        }
                    }, [V]);
                    return n().createElement(
                        'div',
                        { className: M()(Le, V === p.B1.initial && Ke) },
                        Boolean(h && (0, f.C)(b, null == h ? void 0 : h.specialAwardName)) &&
                            n().createElement(
                                'div',
                                { className: je },
                                n().createElement(ne.H, {
                                    res: (0, f.D)(b, null == h ? void 0 : h.specialAwardName),
                                    rareBonus: h,
                                    texts: k,
                                    controls: {
                                        onClose: () => {
                                            t.setActiveRareReward(null), G.resume();
                                        },
                                        onPlay: () => t.setIsVideoPlaying(!0),
                                        onEnded: () => t.setIsVideoPlaying(!1),
                                    },
                                    minimized: !u,
                                }),
                            ),
                        n().createElement(
                            d.animated.div,
                            { style: D, className: ze },
                            n().createElement(te.h, {
                                title: k.headerTitle,
                                subTitle: c
                                    ? n().createElement(U.z, {
                                          text: k.headerSubtitle,
                                          binding: { name: B.boxCategory.dynOpt(c), boxesCount: I.length },
                                          classMix: Xe,
                                      })
                                    : '',
                            }),
                            n().createElement(
                                'div',
                                { className: qe },
                                n().createElement(Y.A, {
                                    caption: k.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: t.close,
                                }),
                            ),
                        ),
                        n().createElement(
                            'div',
                            { className: Me },
                            v.UI(I, (e, a) =>
                                n().createElement($e, {
                                    key: `rewards_row_${a}`,
                                    order: a + 1,
                                    isLast: a === I.length - 1,
                                    rewards: e,
                                }),
                            ),
                        ),
                        n().createElement(
                            d.animated.div,
                            { style: D, className: Qe },
                            J.graphicsQuality.isHigh() &&
                                n().createElement(ae.o, {
                                    isActive: w,
                                    onClick: () => {
                                        t.toggleAnimationState(w);
                                    },
                                    className: Ue,
                                    text: k.checkbox,
                                    size: P >= ee.cJ.Medium ? Q.yB.extraLarge : Q.yB.large,
                                }),
                            n().createElement(re.Z, {
                                texts: k,
                                images: T,
                                sounds: O,
                                actions: Object.assign({}, t, {
                                    openNext: () => {
                                        p.Kg.send({ type: p.QK.toPreparation });
                                    },
                                }),
                                boxesCount: o,
                                useExternal: m,
                                openingCount: y,
                                isShopVisible: _,
                            }),
                        ),
                    );
                }),
                aa = 'App_base_79',
                ta = 'App_background_02',
                ra = 'App_loader_4a',
                na = 'App_content_62',
                sa = 'App_loaderWrapper_e5',
                ia = (0, m.Pi)(() => {
                    const e = X(),
                        a = e.model,
                        t = e.controls,
                        s = a.computes.resources(),
                        m = s.images,
                        v = s.texts,
                        f = a.root.get().isWindowAccessible,
                        h = a.info.isAnimationActive.get(),
                        E = a.info.isAwaitingResponse.get(),
                        x = a.computes.hasRareReward(),
                        A = a.info.isReopen.get(),
                        C = a.computes.multimediaResource(),
                        N = (0, i.v)(p.Kg, (e) => e.value),
                        k = (0, g.H)(R);
                    (0, r.useEffect)(() => {
                        const e = (e) => {
                            e.name === O && p.Kg.send({ type: p.QK.toPage });
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
                                N === p.B1.initial && t.close();
                            },
                            !0,
                        ),
                        (0, r.useEffect)(
                            () => (
                                p.Kg.start(),
                                () => {
                                    p.Kg.stop();
                                }
                            ),
                            [],
                        ),
                        (0, r.useEffect)(() => {
                            p.Kg.send({ type: p.QK.setAnimationActive, isAnimationActive: h });
                        }, [h]),
                        (0, b.s)(A, E, N);
                    const T = (0, w.H)(N, t.openNext),
                        B = T.loadingStyle,
                        I = T.contentStyle;
                    return n().createElement(
                        'div',
                        { className: aa, ref: k.rootRef },
                        n().createElement(_.F, {
                            activeType: x ? y.e.rare : y.e.common,
                            minimized: !f,
                            res: C,
                            className: ta,
                            onPlay: () => t.setIsVideoPlaying(!0),
                            onEnded: () => t.setIsVideoPlaying(!1),
                        }),
                        (0, l.P)(N) !== p.A_ &&
                            n().createElement(d.animated.div, { style: I, className: na }, n().createElement(ea, null)),
                        N === p.B1.waiting &&
                            n().createElement(
                                d.animated.div,
                                { style: B, className: sa },
                                n().createElement(u.a, { text: v.loader, img: m.loader, className: ra }),
                            ),
                    );
                });
            var oa = t(7051);
            const ca = (0, m.Pi)(({ children: e }) => {
                    const a = X().model,
                        t = a.info.eventName.get(),
                        r = (0, oa.G)({ steps: V(a.computes.rewardsListByBoxes(), t), autoStart: !1 })();
                    return n().createElement(R.Provider, { value: r }, e);
                }),
                la = () =>
                    n().createElement(
                        z,
                        { options: s.f.MULTIPLE_REWARD },
                        n().createElement(ca, null, n().createElement(ia, null)),
                    );
        },
    },
]);
