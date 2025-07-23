'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [86],
    {
        2980: (e, t, a) => {
            (a.r(t), a.d(t, { default: () => lt }));
            var r = a(7363),
                n = a.n(r),
                s = a(8958),
                i = a(295),
                o = a(8526),
                c = a(5521),
                l = a(5834),
                m = a(3403),
                d = a(7030),
                u = a(3597),
                p = a(198),
                _ = a(6328),
                g = a(2914),
                w = a(9744),
                b = a(9210),
                y = a(6486),
                v = a(9480),
                f = a(9605),
                R = a(7672);
            const h = (0, r.createContext)(null),
                E = 'INIT_ROW',
                A = 'CONCURRENT_APPEAR',
                C = 'REWARD',
                x = 'OVERLAY_REWARD',
                N = 'RARE_VIDEO',
                k = 'COMPENSATION',
                O = 'TWITCH',
                T = 'FINISH',
                I = {
                    [E]: { duration: 300 },
                    [A]: { duration: 200 },
                    [C]: { duration: 150 },
                    [x]: { duration: 0, pauseNextSteps: !0 },
                    [N]: { duration: 0, pauseNextSteps: !0 },
                    [O]: { duration: 1e3 },
                    [k]: { duration: 800 },
                    [T]: { name: T, duration: 0, delay: 100 },
                },
                B = (e, t, a) => {
                    switch (e) {
                        case E:
                            return `animation_${t}`;
                        case A:
                            return `animation_${t}_${A}`;
                        default:
                            return `animation_${t}_${a}_${e}`;
                    }
                },
                P = (e, t, a) => Object.assign({}, I[e], { name: B(e, t, a) }),
                S = (e, t) => {
                    const a = [];
                    return (
                        v.u4(
                            e,
                            (e, a, r) => (
                                0 !== r && e.push(P(E, r)),
                                e.push(P(A, r)),
                                v.UI(a, (a, n) => {
                                    const s = (0, R.y)(a),
                                        i = (0, f.C)(t, a.specialAwardName);
                                    (s
                                        ? (i ? e.push(P(x, r, n)) : e.push(P(N, r, n)), e.push(P(C, r, n)))
                                        : 0 !== n && e.push(P(C, r, n)),
                                        a.isCompensation && (e.push(P(O, r, n)), e.push(P(k, r, n))));
                                }),
                                e
                            ),
                            a,
                        ),
                        a.push(I.FINISH),
                        a
                    );
                };
            var V = a(4736),
                D = a(3215),
                H = a(4598),
                G = a(9174),
                W = a(3946),
                Z = a(7366),
                $ = a(9674);
            const K = {
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
                L = {
                    dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
                    dynamicTexts: {
                        rewardsPremiumDay: 'common.rewards.premiumDay',
                        boxCategory: 'common.boxCategory.lowerCase',
                    },
                    dynamicImages: { boxesOpening: 'awardViews.openingBox' },
                },
                j = (0, D.q3)()(
                    ({ observableModel: e }) => {
                        const t = {
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
                            a = (0, W.Om)(() => (0, Z.jh)(K, t.info.eventName.get()), { equals: H.jv }),
                            r = (0, W.Om)(() => (0, Z.kC)(L, t.info.eventName.get()), { equals: H.jv }),
                            n = (0, W.Om)(() => t.bonuses.get(), { equals: H.jv }),
                            s = (0, W.Om)(() => v.G(n(), (e) => v.G(e, (e) => (0, R.y)(e))), { equals: H.jv }),
                            i = (0, W.Om)(() => v.u4(t.bonuses.get(), (e, t) => (e > t.length ? e : t.length), 0)),
                            o = (0, W.Om)(() => {
                                const e = t.root.get().boxCategory,
                                    n = `${e}_${V.G.Common}`,
                                    s = `${e}_${V.G.Rare}`,
                                    i = r().dynamicImages.boxesOpening.dynOpt(n, V.G.Common),
                                    o = r().dynamicVideos.boxesOpening.dynOpt(n, V.G.Common),
                                    c = r().dynamicImages.boxesOpening.dynOpt(s, V.G.Rare),
                                    l = r().dynamicVideos.boxesOpening.dynOpt(s, V.G.Rare),
                                    m = a().sounds;
                                return {
                                    [y.e.common]: { video: o, image: i, sound: m.open },
                                    [y.e.rare]: { video: l, image: c, sound: m.openRare },
                                };
                            });
                        return Object.assign({}, t, {
                            computes: {
                                rewardsListByBoxes: n,
                                resources: a,
                                dynamicResources: r,
                                maxRewardsInLine: i,
                                hasRareReward: s,
                                multimediaResource: o,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => ({
                        goPreview: e.createCallback((e) => e, 'onPreview'),
                        openNext: e.createCallback(() => {
                            const e = t.info,
                                a = e.boxesCount,
                                r = e.openingCount;
                            return { openCount: Math.min(a.get(), r.get()) };
                        }, 'onOpen'),
                        goBack: e.createCallbackNoArgs('onGoBack'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                        toggleAnimationState: e.createCallback(
                            (e) => ({ isAnimationActive: !e }),
                            'onAnimationStateChanged',
                        ),
                        setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
                        setActiveRareReward: (0, G.aD)((e) => t.activeRareReward.set(e)),
                        clearActiveRareReward: (0, G.aD)(() => t.activeRareReward.set(null)),
                    }),
                ),
                z = j[0],
                X = j[1];
            var q = a(6483),
                M = a.n(q),
                Q = a(8844),
                U = a(9766),
                Y = a(8089),
                F = a(7522),
                J = a(5959),
                ee = a(5415),
                te = a(8821),
                ae = a(6974),
                re = a(3703),
                ne = a(2369),
                se = a(2862),
                ie = a(2056),
                oe = a(7412),
                ce = a(514),
                le = a(3633),
                me = a(4401),
                de = a(5888),
                ue = a(7039),
                pe = a(46);
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
                Re = () => ({ from: { opacity: 1, filter: 'brightness(1)', transform: 'scale(1)' } }),
                he = () => ({ from: { opacity: 0 } }),
                Ee = () => ({
                    to: { opacity: 1, transform: 'translateX(0rem)', filter: 'brightness(1)' },
                    config: { duration: 200, easing: F.Z.easeOutCubic },
                });
            var Ae = a(114),
                Ce = a(9108);
            const xe = {
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
                Ne = (0, m.Pi)(({ reward: e, isCompensation: t = !1, className: a = '' }) => {
                    const r = X().model,
                        s = ((e, t) => {
                            const a = e.name,
                                r = e.value,
                                n = e.compensation;
                            return t ? { name: n.name, value: n.value } : { name: a, value: r };
                        })(e, t),
                        i = s.name,
                        o = s.value,
                        c = r.computes.dynamicResources().dynamicTexts,
                        l = i === se.E4.PremiumPlus;
                    return n().createElement(
                        'div',
                        { className: M()(xe.base, xe[`base__${i}`], a) },
                        n().createElement(
                            'div',
                            { className: xe.value },
                            n().createElement(U.z, { text: (0, me.QH)(o) }),
                        ),
                        l &&
                            n().createElement(
                                'span',
                                { className: xe.pluralText },
                                c.rewardsPremiumDay.plural('premiumDay', Number(o.split(' ').at(-1))),
                            ),
                    );
                }),
                ke = 'Compensation_base_ca',
                Oe = 'Compensation_iconWrapper_66',
                Te = 'Compensation_icon_69',
                Ie = (0, m.Pi)(({ reward: e, size: t, icon: a, animationName: s, className: i = '' }) => {
                    const o = X().model.computes.resources().sounds,
                        c = (0, d.useSpring)(ve),
                        l = c[0],
                        m = c[1],
                        u = (0, g.H)(h);
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
                                n().createElement(Ce._, {
                                    key: 'compensation_image',
                                    icon: (0, Ae.ry)(e, se.h2.Big, e.isCompensation),
                                    sizes: { height: t.rewardHeight, width: t.rewardWidth },
                                }),
                            ),
                            n().createElement(
                                d.animated.div,
                                { style: { opacity: l.opacity }, className: Oe },
                                n().createElement(Ce._, {
                                    key: 'compensation_icon',
                                    icon: a,
                                    sizes: { height: t.compensationIconHeight, width: t.compensationIconWidth },
                                    className: Te,
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
                Be = ({ reward: e, className: t = '' }) => {
                    const a = e.vehicleShortName;
                    return n().createElement('div', { className: M()(xe.base, t) }, a);
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
                Se = [se.E4.Vehicles, se.E4.TmanToken],
                Ve = {
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
                We = (0, m.Pi)(({ reward: e, rewardIndex: t, rowIndex: a }) => {
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
                        T = e.tooltipContentId,
                        I = e.tooltipId,
                        B = (0, i.v)(p.Kg, (e) => e.value),
                        S = (0, d.useSpring)((0, R.y)(e) ? he : be),
                        D = S[0],
                        H = S[1],
                        G = (0, d.useSpring)(Re),
                        W = G[0],
                        Z = G[1],
                        $ = (0, d.useSpring)(() => ({ from: De })),
                        K = $[0],
                        L = $[1],
                        j = (0, r.useRef)(null);
                    (0, de.L)(j);
                    const z = (0, g.H)(h);
                    return (
                        (0, r.useEffect)(() => {
                            const r = (r) => {
                                switch (r.name) {
                                    case P(A, a).name:
                                        (0, R.y)(e) || 0 !== t || (H.start(ye()), ce.hY.sound(w.multiRewardAppear));
                                        break;
                                    case P(C, a, t).name:
                                        (H.start((0, R.y)(e) ? ye() : Ee()), ce.hY.sound(w.multiRewardAppear));
                                        break;
                                    case P(N, a, t).name:
                                        E(!0);
                                        break;
                                    case P(x, a, t).name:
                                        c.setActiveRareReward(e);
                                        break;
                                    case P(O, a, t).name:
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
                        }, [z.events, a, t, e, H, c, Z, w]),
                        (0, r.useEffect)(() => {
                            const t = () => {
                                (H.start(
                                    (0, R.y)(e) ? Ee() : { to: _e, config: { duration: 0, easing: F.Z.easeOutCubic } },
                                ),
                                    e.isCompensation &&
                                        Z.start({ to: we, config: { duration: 0, easing: F.Z.easeInOutCubic } }));
                            };
                            return (
                                z.events.on('skipAll', t),
                                () => {
                                    z.events.off('skipAll', t);
                                }
                            );
                        }),
                        (0, r.useEffect)(() => {
                            switch (B) {
                                case p.B1.skip:
                                    L.set(He);
                                    break;
                                case p.B1.preparation:
                                    L.set(De);
                                    break;
                                case p.B1.page:
                                    L.start(Ge);
                            }
                        }, [B]),
                        n().createElement(
                            ie.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: Number(T),
                                args: { tooltipId: I, boxCategory: e.icon, eventName: b },
                                isEnabled: B === p.B1.initial,
                            },
                            n().createElement(
                                'div',
                                { className: M()(Pe.base, Pe[`base__reward_${a}_${t}`]) },
                                n().createElement(
                                    d.animated.div,
                                    { style: Object.assign({}, D), className: Pe.container },
                                    (0, R.y)(e) &&
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
                                            sizes: Ve,
                                            className: Pe.reward,
                                            currentAnimationState: B,
                                        }),
                                    ),
                                    n().createElement(
                                        d.animated.div,
                                        { style: { opacity: W.opacity }, className: Pe.title },
                                        e.name === se.E4.Vehicles &&
                                            n().createElement(Be, { reward: e, className: Pe.vehicleTitle }),
                                        !Se.includes(e.name) && n().createElement(Ne, { reward: e }),
                                    ),
                                    (0, me.XM)(e) &&
                                        !e.isCompensation &&
                                        n().createElement(
                                            d.animated.div,
                                            { style: K, className: Pe.loupeWrapper },
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
                                        n().createElement(Ie, {
                                            reward: e,
                                            size: Ve,
                                            icon: m.compensationIcon,
                                            animationName: P(k, a, t).name,
                                            className: Pe.compensation,
                                        }),
                                ),
                                (0, R.y)(e) &&
                                    !(0, f.C)(b, e.specialAwardName) &&
                                    n().createElement(ue.s, {
                                        className: Pe.video,
                                        sound: e.rarity === V.G.Rare ? w.rareAnimation : w.epicAnimation,
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
                $e = (0, m.Pi)(({ order: e, rewards: t, isLast: a }) => {
                    const r = X().model.computes.maxRewardsInLine();
                    return n().createElement(
                        'div',
                        { className: Ze.base, style: { width: ((s = r), 28 + 108 * s) + 'rem' } },
                        n().createElement('div', { className: M()(Ze.number, Ze['number__' + (e - 1)]) }, e),
                        v.UI(t, (t, a) =>
                            n().createElement(We, {
                                reward: t,
                                key: `reward_${e - 1}_${a}_${(0, R.u)()}`,
                                rewardIndex: a,
                                rowIndex: e - 1,
                            }),
                        ),
                        !a && n().createElement('div', { className: M()(Ze.divider, Ze['divider__' + (e - 1)]) }),
                    );
                    var s;
                }),
                Ke = 'Content_base_48',
                Le = 'Content_base__ready_a2',
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
                et = (0, m.Pi)(() => {
                    const e = X(),
                        t = e.model,
                        a = e.controls,
                        s = t.root.get(),
                        o = s.boxesCount,
                        c = s.boxCategory,
                        m = s.isWindowAccessible,
                        u = s.isShopVisible,
                        _ = t.info.isAnimationActive.get(),
                        w = t.info.eventName.get(),
                        b = t.info.openingCount.get(),
                        y = t.activeRareReward.get(),
                        R = t.computes,
                        E = R.resources,
                        A = R.dynamicResources,
                        C = R.rewardsListByBoxes,
                        x = E(),
                        N = x.texts,
                        k = x.images,
                        O = x.sounds,
                        T = A().dynamicTexts,
                        I = C(),
                        B = (0, ee.GS)().mediaSize,
                        P = (0, i.v)(p.Kg, (e) => e.value),
                        S = (0, d.useSpring)(() => ({ from: Ye })),
                        V = S[0],
                        D = S[1],
                        H = (0, g.H)(h);
                    (0, r.useEffect)(() => {
                        switch ((0, l.P)(P)) {
                            case p.B1.skip:
                                (D.set(Fe), H.skipAll());
                                break;
                            case p.B1.preparation:
                                (D.set(Ye), H.reset());
                                break;
                            case p.B1.rewards:
                                H.start();
                                break;
                            case p.B1.page:
                                D.start(Je);
                        }
                    }, [P]);
                    return n().createElement(
                        'div',
                        { className: M()(Ke, P === p.B1.initial && Le) },
                        Boolean(y && (0, f.C)(w, null == y ? void 0 : y.specialAwardName)) &&
                            n().createElement(
                                'div',
                                { className: je },
                                n().createElement(ne.H, {
                                    res: (0, f.D)(w, null == y ? void 0 : y.specialAwardName),
                                    rareBonus: y,
                                    texts: N,
                                    controls: {
                                        onClose: () => {
                                            (a.setActiveRareReward(null), H.resume());
                                        },
                                        onPlay: () => a.setIsVideoPlaying(!0),
                                        onEnded: () => a.setIsVideoPlaying(!1),
                                    },
                                    minimized: !m,
                                }),
                            ),
                        n().createElement(
                            d.animated.div,
                            { style: V, className: ze },
                            n().createElement(ae.h, {
                                title: N.headerTitle,
                                subTitle: c
                                    ? n().createElement(U.z, {
                                          text: N.headerSubtitle,
                                          binding: { name: T.boxCategory.dynOpt(c), boxesCount: I.length },
                                          classMix: Xe,
                                      })
                                    : '',
                            }),
                            n().createElement(
                                'div',
                                { className: qe },
                                n().createElement(Y.A, {
                                    caption: N.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: a.close,
                                }),
                            ),
                        ),
                        n().createElement(
                            'div',
                            { className: Me },
                            v.UI(I, (e, t) =>
                                n().createElement($e, {
                                    key: `rewards_row_${t}`,
                                    order: t + 1,
                                    isLast: t === I.length - 1,
                                    rewards: e,
                                }),
                            ),
                        ),
                        n().createElement(
                            d.animated.div,
                            { style: V, className: Qe },
                            J.graphicsQuality.isHigh() &&
                                n().createElement(te.o, {
                                    isActive: _,
                                    onClick: () => {
                                        a.toggleAnimationState(_);
                                    },
                                    className: Ue,
                                    text: N.checkbox,
                                    size: B >= ee.cJ.Medium ? Q.yB.extraLarge : Q.yB.large,
                                }),
                            n().createElement(re.Z, {
                                texts: N,
                                images: k,
                                sounds: O,
                                actions: Object.assign({}, a, {
                                    openNext: () => {
                                        p.Kg.send({ type: p.QK.toPreparation });
                                    },
                                }),
                                boxesCount: o,
                                openingCount: b,
                                isShopVisible: u,
                            }),
                        ),
                    );
                }),
                tt = 'App_base_79',
                at = 'App_background_02',
                rt = 'App_loader_4a',
                nt = 'App_content_62',
                st = 'App_loaderWrapper_e5',
                it = (0, m.Pi)(() => {
                    const e = X(),
                        t = e.model,
                        a = e.controls,
                        s = t.computes.resources(),
                        m = s.images,
                        v = s.texts,
                        f = t.root.get().isWindowAccessible,
                        R = t.info.isAnimationActive.get(),
                        E = t.info.isAwaitingResponse.get(),
                        A = t.computes.hasRareReward(),
                        C = t.info.isReopen.get(),
                        x = t.computes.multimediaResource(),
                        N = (0, i.v)(p.Kg, (e) => e.value),
                        k = (0, g.H)(h);
                    ((0, r.useEffect)(() => {
                        const e = (e) => {
                            e.name === T && p.Kg.send({ type: p.QK.toPage });
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
                                N === p.B1.initial && a.close();
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
                            p.Kg.send({ type: p.QK.setAnimationActive, isAnimationActive: R });
                        }, [R]),
                        (0, b.s)(C, E, N));
                    const O = (0, w.H)(N, a.openNext),
                        I = O.loadingStyle,
                        B = O.contentStyle;
                    return n().createElement(
                        'div',
                        { className: tt, ref: k.rootRef },
                        n().createElement(_.F, {
                            activeType: A ? y.e.rare : y.e.common,
                            minimized: !f,
                            res: x,
                            className: at,
                            onPlay: () => a.setIsVideoPlaying(!0),
                            onEnded: () => a.setIsVideoPlaying(!1),
                        }),
                        (0, l.P)(N) !== p.A_ &&
                            n().createElement(d.animated.div, { style: B, className: nt }, n().createElement(et, null)),
                        N === p.B1.waiting &&
                            n().createElement(
                                d.animated.div,
                                { style: I, className: st },
                                n().createElement(u.a, { text: v.loader, img: m.loader, className: rt }),
                            ),
                    );
                });
            var ot = a(7051);
            const ct = (0, m.Pi)(({ children: e }) => {
                    const t = X().model,
                        a = t.info.eventName.get(),
                        r = (0, ot.G)({ steps: S(t.computes.rewardsListByBoxes(), a), autoStart: !1 })();
                    return n().createElement(h.Provider, { value: r }, e);
                }),
                lt = () =>
                    n().createElement(
                        z,
                        { options: s.f.MULTIPLE_REWARD },
                        n().createElement(ct, null, n().createElement(it, null)),
                    );
        },
    },
]);
