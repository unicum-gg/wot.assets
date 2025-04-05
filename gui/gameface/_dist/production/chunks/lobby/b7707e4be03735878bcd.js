'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [261],
    {
        8314: (e, t, a) => {
            a.r(t), a.d(t, { default: () => gt });
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
                g = a(198),
                p = a(6328),
                _ = a(2914),
                b = a(9744),
                y = a(9210),
                w = a(6486),
                h = a(9480),
                v = a(9605),
                x = a(7672);
            const E = (0, r.createContext)(null),
                f = 'REWARD_IN',
                N = 'REWARD_OUT',
                S = 'OVERLAY_REWARD',
                R = 'RARE_REWARD',
                T = 'TWITCH',
                I = 'COMPENSATION',
                C = 'FINISH',
                A = {
                    [S]: { duration: 0, pauseNextSteps: !0 },
                    [R]: { duration: 0, pauseNextSteps: !0 },
                    [f]: { duration: 200 },
                    [N]: { duration: 400 },
                    [T]: { duration: 840 },
                    [I]: { duration: 1e3, delay: 50 },
                    [C]: { name: C, duration: 0, delay: 500 },
                },
                B = (e, t) => Object.assign({}, A[e], { name: `animation_${t}_${e}` }),
                k = (e, t) => {
                    const a = [];
                    return (
                        h.UI(e, (e, r) => {
                            const n = (0, x.y)(e),
                                s = (0, v.C)(t, e.specialAwardName);
                            if (n) {
                                if (s) return a.push(B(S, r)), void a.push(B(N, r));
                                a.push(B(R, r));
                            }
                            a.push(B(f, r)), a.push(B(N, r)), e.isCompensation && (a.push(B(T, r)), a.push(B(I, r)));
                        }),
                        a.push(A.FINISH),
                        a
                    );
                };
            var G = a(4736),
                O = a(3215),
                H = a(4598),
                z = a(9174),
                V = a(3946),
                P = a(3905),
                D = a(1440),
                W = a(7366),
                $ = a(9674);
            const j = {
                    images: {
                        iconEmpty: 'entry_point.lootboxEmpty',
                        previewIcon: 'awardViews.previewIcon',
                        compensationIcon: 'awardViews.compensationIcon',
                        glowIcon: 'awardViews.glow',
                        infoIcon: 'common.info',
                        guaranteedGlowIcon: 'awardViews.guaranteedGlow',
                        loader: 'common.waiting',
                    },
                    videos: {
                        compensationGlow: 'awardViews.compensationGlow',
                        rareGlow: 'awardViews.rareGlow',
                        rare: 'awardViews.raritySimpleAnimations.rare',
                        epic: 'awardViews.raritySimpleAnimations.epic',
                    },
                    texts: {
                        closeButton: 'common.closeButton',
                        multiplier: 'common.rewards.multiplier',
                        headerTitle: 'singleRewardView.header.title',
                        headerSubtitle: 'singleRewardView.header.subTitle',
                        guaranteedTitle: 'guaranteedTitle.text',
                        guaranteedNextBox: 'guaranteedTitle.nextBox',
                        quantityAvailableTitle: 'quantityTitle.boxesAvailable',
                        quantityNoBoxesTitle: 'quantityTitle.noBoxes',
                        extraRewardText: 'singleRewardView.extraReward.text',
                        uniqueTankmanText: 'singleRewardView.uniqueTankman',
                        footerOpenNextButton: 'singleRewardView.footer.openNextButton',
                        footerBackButton: 'awardViews.footer.backButton',
                        footerPurchaseButtonText: 'common.getButton.upperCase',
                        checkbox: 'common.footer.checkbox',
                        loader: 'common.loader',
                        rareOverlayButtonContinue: 'rareRewardOverlay.rewardDescription.button.text',
                        rareOverlayTitle: 'rareRewardOverlay.rewardDescription.title.text',
                        rareOverlayStyleTitle: 'rareRewardOverlay.rewardDescription.style.text',
                        rareOverlayStyleDescription: 'rareRewardOverlay.rewardDescription.style.description.text',
                    },
                    sounds: {
                        rewardAppear: $.T.rewardAppear,
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
                        rewardsPremiumDay: 'common.rewards.premiumDay',
                        boxCategory: 'common.boxCategory.lowerCase',
                        attachmentRarity: 'bonuses.customization.rarity',
                    },
                    dynamicImages: { boxesOpening: 'awardViews.openingBox' },
                },
                q = (0, O.q3)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign(
                                { root: e.object() },
                                e.primitives(['eventName', 'isAnimationActive', 'isAwaitingResponse', 'isReopen']),
                                {
                                    bonuses: e.array('bonuses.items'),
                                    extraBonuses: e.array('extraBonuses.items'),
                                    activeRareReward: z.LO.box(null),
                                },
                            ),
                            a = (0, V.Om)(() => (0, W.jh)(j, t.root.get().eventName), { equals: H.jv }),
                            r = (0, V.Om)(() => (0, W.kC)(K, t.root.get().eventName), { equals: H.jv }),
                            n = (0, V.Om)(() => (0, D.i)(t.root.get().eventName, P.N7.Rewards), { equals: H.jv }),
                            s = (0, V.Om)(() => h.G(t.bonuses.get(), (e) => (0, x.y)(e)), { equals: H.jv }),
                            i = (0, V.Om)(() => {
                                const e = t.root.get().boxCategory,
                                    n = `${e}_${G.G.Common}`,
                                    s = `${e}_${G.G.Rare}`,
                                    i = r().dynamicVideos.boxesOpening.dynOpt(n, G.G.Common),
                                    o = r().dynamicVideos.boxesOpening.dynOpt(s, G.G.Rare),
                                    c = r().dynamicImages.boxesOpening.dynOpt(n, G.G.Common),
                                    l = r().dynamicImages.boxesOpening.dynOpt(s, G.G.Rare),
                                    m = a().sounds;
                                return {
                                    [w.e.common]: { video: i, image: c, sound: m.open },
                                    [w.e.rare]: { video: o, image: l, sound: m.openRare },
                                };
                            });
                        return Object.assign({}, t, {
                            computes: {
                                resources: a,
                                dynamicResources: r,
                                settings: n,
                                hasRareReward: s,
                                multimediaResource: i,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => ({
                        goPreview: e.createCallback((e) => e, 'onPreview'),
                        openNext: e.createCallbackNoArgs('onOpen'),
                        goBack: e.createCallbackNoArgs('onGoBack'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                        toggleAnimationState: e.createCallback(
                            (e) => ({ isAnimationActive: !e }),
                            'onAnimationStateChanged',
                        ),
                        setIsVideoPlaying: e.createCallback((e) => ({ isPlaying: e }), 'onVideoPlaying'),
                        setActiveRareReward: (0, z.aD)((e) => t.activeRareReward.set(e)),
                        clearActiveRareReward: (0, z.aD)(() => t.activeRareReward.set(null)),
                    }),
                ),
                Z = q[0],
                J = q[1];
            var M = a(6483),
                L = a.n(M),
                Q = a(8844),
                X = a(9766),
                F = a(8089),
                U = a(7522),
                Y = a(5959),
                ee = a(5415),
                te = a(8821),
                ae = a(9221),
                re = a(6974),
                ne = a(3703),
                se = a(2369),
                ie = a(2862),
                oe = a(2056),
                ce = a(114);
            const le = 'ExtraRewards_base_9b',
                me = 'ExtraRewards_extraRewardsWrapper_a2',
                de = 'ExtraRewards_text_f5',
                ue = 'ExtraRewards_extraIcon_2e',
                ge = { opacity: 0, filter: 'brightness(2)' },
                pe = { opacity: 1, filter: 'brightness(1)' },
                _e = {
                    to: [{ opacity: 1, filter: 'brightness(2)' }, pe],
                    config: { duration: 600, easing: U.Z.easeInOutCubic },
                    onRest: () => {
                        g.Kg.send({ type: g.QK.toPage });
                    },
                },
                be = (0, m.Pi)(({ className: e }) => {
                    const t = J().model,
                        a = (0, ee.GS)().mediaSize,
                        s = (0, i.v)(g.Kg, (e) => e.value),
                        o = t.computes.resources().texts,
                        c = t.extraBonuses.get(),
                        l = (0, d.useSpring)(() => ({ from: ge })),
                        m = l[0],
                        u = l[1];
                    return (
                        (0, r.useEffect)(() => {
                            switch (s) {
                                case g.B1.skip:
                                    u.set(pe);
                                    break;
                                case g.B1.preparation:
                                    u.set(ge);
                                    break;
                                case g.B1.extra:
                                    u.start(_e);
                            }
                        }, [s, u]),
                        n().createElement(
                            d.animated.div,
                            { style: m, className: L()(le, e) },
                            n().createElement('div', { className: de }, o.extraRewardText),
                            n().createElement(
                                'div',
                                { className: me },
                                h.UI(c, (e, t) =>
                                    n().createElement(
                                        oe.u,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: Number(e.tooltipContentId),
                                            args: { tooltipId: e.tooltipId },
                                            key: t + e.name,
                                        },
                                        n().createElement('div', {
                                            className: ue,
                                            style: {
                                                backgroundImage: `url(${(0, ce.ry)(e, a >= ee.cJ.Medium ? ie.h2.Big : ie.h2.Small)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        )
                    );
                });
            var ye = a(514),
                we = a(7412),
                he = a(3633),
                ve = a(6845),
                xe = a(4401),
                Ee = a(7039),
                fe = a(46),
                Ne = a(9108);
            const Se = { opacity: 0, transform: 'scale(0.96)', filter: 'brightness(1.5)', immediate: !0 },
                Re = {
                    opacity: 1,
                    transform: 'scale(1.06) rotateZ(0deg)',
                    filter: 'brightness(1.5)',
                    visibility: 'hidden',
                },
                Te = {
                    opacity: 1,
                    transform: 'scale(1) rotateZ(0deg)',
                    filter: 'brightness(1)',
                    visibility: 'visible',
                },
                Ie = { opacity: 0, display: 'flex' },
                Ce = { display: 'none' },
                Ae = { display: 'flex' },
                Be = () => ({
                    to: { opacity: 1, transform: 'scale(1.02)', filter: 'brightness(1.5)' },
                    config: { duration: 200, easing: U.Z.easeOutCubic },
                }),
                ke = (e = 400) => ({
                    to: { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
                    config: { duration: e, easing: U.Z.easeInOutCubic },
                }),
                Ge = (e = 500) => ({
                    to: [
                        {
                            opacity: 1,
                            transform: 'scale(1.06) rotateZ(0deg)',
                            filter: 'brightness(1.5)',
                            visibility: 'visible',
                        },
                        Te,
                    ],
                    config: { duration: e },
                }),
                Oe = {
                    extraLarge: {
                        rewardWidth: '600rem',
                        rewardHeight: '450rem',
                        compensationIconWidth: '36rem',
                        compensationIconHeight: '36rem',
                        countHeight: '36rem',
                        nameHeight: '22rem',
                        descriptionHeight: '20rem',
                        glowSize: '780rem',
                        imageSize: ie.h2.S600x450,
                        rareGlowSize: '780rem',
                        rareVideoSize: '512rem',
                    },
                    large: {
                        rewardWidth: '400rem',
                        rewardHeight: '300rem',
                        compensationIconWidth: '36rem',
                        compensationIconHeight: '36rem',
                        countHeight: '28rem',
                        nameHeight: '18rem',
                        descriptionHeight: '16rem',
                        glowSize: '520rem',
                        imageSize: ie.h2.S600x450,
                        rareGlowSize: '520rem',
                        rareVideoSize: '512rem',
                    },
                    medium: {
                        rewardWidth: '296rem',
                        rewardHeight: '222rem',
                        compensationIconWidth: '36rem',
                        compensationIconHeight: '36rem',
                        countHeight: '24rem',
                        nameHeight: '18rem',
                        descriptionHeight: '16rem',
                        glowSize: '386rem',
                        imageSize: ie.h2.S600x450,
                        rareGlowSize: '386rem',
                        rareVideoSize: '440rem',
                    },
                    small: {
                        rewardWidth: '232rem',
                        rewardHeight: '174rem',
                        compensationIconWidth: '24rem',
                        compensationIconHeight: '24rem',
                        countHeight: '22rem',
                        nameHeight: '15rem',
                        descriptionHeight: '14rem',
                        glowSize: '302rem',
                        imageSize: ie.h2.S600x450,
                        rareGlowSize: '302rem',
                        rareVideoSize: '384rem',
                    },
                    extraSmall: {
                        rewardWidth: '180rem',
                        rewardHeight: '135rem',
                        compensationIconWidth: '24rem',
                        compensationIconHeight: '24rem',
                        countHeight: '18rem',
                        nameHeight: '15rem',
                        descriptionHeight: '14rem',
                        glowSize: '238rem',
                        imageSize: ie.h2.S600x450,
                        rareGlowSize: '238rem',
                        rareVideoSize: '256rem',
                    },
                },
                He = (e, t) => {
                    switch (!0) {
                        case (e >= 3 && 1 === t) || (e >= 4 && [1, e - 2].includes(t)):
                            return -40;
                        case (5 === e && 2 === t) || (6 === e && [2, e - 3].includes(t)):
                            return -80;
                        default:
                            return 0;
                    }
                },
                ze = {
                    base: 'CompensationTitle_base_34',
                    name: 'CompensationTitle_name_1a',
                    base__lootBox: 'CompensationTitle_base__lootBox_c8',
                    label: 'CompensationTitle_label_47',
                    base__credits: 'CompensationTitle_base__credits_c8',
                    base__gold: 'CompensationTitle_base__gold_b4',
                    base__premium_plus: 'CompensationTitle_base__premium_plus_b8',
                    base__crystal: 'CompensationTitle_base__crystal_1d',
                    pluralText: 'CompensationTitle_pluralText_cf',
                },
                Ve = ({ reward: e, style: t, className: a = '' }) => {
                    const r = e.name,
                        s = e.label,
                        i = e.value;
                    return n().createElement(
                        'div',
                        { className: L()(ze.base, ze[`base__${r}`], a) },
                        n().createElement('div', { className: ze.name, style: { fontSize: t.nameHeight } }, s),
                        n().createElement(
                            'div',
                            { className: ze.label, style: { fontSize: t.descriptionHeight } },
                            n().createElement(X.z, { text: (0, xe.QH)(i) }),
                        ),
                    );
                },
                Pe = {
                    base: 'Title_base_cc',
                    description: 'Title_description_4e',
                    name: 'Title_name_5d',
                    base__credits: 'Title_base__credits_13',
                    base__gold: 'Title_base__gold_8c',
                    base__premium_plus: 'Title_base__premium_plus_a6',
                    base__freeXP: 'Title_base__freeXP_75',
                    base__bptaler: 'Title_base__bptaler_a8',
                    base__crystal: 'Title_base__crystal_07',
                    pluralText: 'Title_pluralText_81',
                    text: 'Title_text_7f',
                },
                De = (0, m.Pi)(({ reward: e, style: t, className: a }) => {
                    const r = J().model,
                        s = r.computes.dynamicResources().dynamicTexts,
                        i = r.computes.resources().texts,
                        o = e.name,
                        c = e.value,
                        l = e.label,
                        m = e.description,
                        d = o === ce.tB.premiumPlus,
                        u = (() => {
                            switch (!0) {
                                case Boolean(c):
                                    return o === ce.tB.tmanToken ? i.uniqueTankmanText : l;
                                case o === ce.tB.attachment:
                                    return `${s.attachmentRarity.dyn(e.overlayType)} ${m}`;
                                default:
                                    return m;
                            }
                        })(),
                        g = !0 === Boolean(c) ? (o === ce.tB.tmanToken ? l : (0, xe.QH)(c)) : l;
                    return n().createElement(
                        'div',
                        { className: L()(Pe.base, Pe[`base__${o}`], a) },
                        u.length > 0 &&
                            n().createElement(
                                'div',
                                { className: Pe.description, style: { fontSize: t.descriptionHeight } },
                                n().createElement(X.z, { text: u, classMix: Pe.text }),
                            ),
                        n().createElement(
                            'div',
                            { className: Pe.name, style: { fontSize: t.nameHeight } },
                            n().createElement(X.z, { text: g, classMix: Pe.text }),
                            d &&
                                n().createElement(
                                    'span',
                                    { className: Pe.pluralText, style: { fontSize: t.nameHeight } },
                                    s.rewardsPremiumDay.plural('premiumDay', Number(c.split(' ').at(-1))),
                                ),
                        ),
                    );
                }),
                We = {
                    base: 'SingleReward_base_b9',
                    compensationReward: 'SingleReward_compensationReward_cd',
                    compensationIcon: 'SingleReward_compensationIcon_f4',
                    loupe: 'SingleReward_loupe_dd',
                    loupe__ready: 'SingleReward_loupe__ready_c4',
                    rareVideo: 'SingleReward_rareVideo_46',
                    video: 'SingleReward_video_5f',
                    rareGlow: 'SingleReward_rareGlow_fc',
                },
                $e = (0, m.Pi)(({ reward: e, index: t }) => {
                    const a = J(),
                        s = a.model,
                        o = a.controls,
                        c = s.bonuses.get(),
                        l = s.eventName.get(),
                        m = c.length,
                        u = s.computes.resources(),
                        p = u.images,
                        b = u.videos,
                        y = u.texts,
                        w = u.sounds,
                        h = (0, r.useState)(!1),
                        v = h[0],
                        C = h[1],
                        A = (0, ee.GS)().mediaSize,
                        k = A === ee.cJ.ExtraSmall && m > 4,
                        O = ((e, t) => {
                            switch (!0) {
                                case e === ee.cJ.ExtraLarge && t < 4:
                                    return Oe.extraLarge;
                                case (e === ee.cJ.ExtraLarge && t > 3) ||
                                    (e === ee.cJ.Medium && t < 4) ||
                                    (e === ee.cJ.Large && t < 5):
                                    return Oe.large;
                                case (e === ee.cJ.Large && t > 4) ||
                                    (e === ee.cJ.Medium && t < 6 && t > 3) ||
                                    ((e === ee.cJ.Small || e === ee.cJ.ExtraSmall) && t < 4):
                                    return Oe.medium;
                                case (e === ee.cJ.Medium && 6 === t) ||
                                    (e === ee.cJ.Small && t < 6 && t > 3) ||
                                    (e === ee.cJ.ExtraSmall && 4 === t):
                                    return Oe.small;
                                default:
                                    return Oe.extraSmall;
                            }
                        })(A, m),
                        H = (0, i.v)(g.Kg, (e) => e.value),
                        z = (0, d.useSpring)(() => Se),
                        V = z[0],
                        P = z[1],
                        D = (0, d.useSpring)(() => Se),
                        W = D[0],
                        $ = D[1],
                        j = (0, d.useSpring)(() => Ie),
                        K = j[0],
                        q = j[1],
                        Z = (0, d.useSpring)(() => Re),
                        M = Z[0],
                        Q = Z[1],
                        X = (0, d.useSpring)(() => Ce),
                        F = X[0],
                        U = X[1],
                        Y = e.tooltipId,
                        te = e.tooltipContentId,
                        ae = e.name === ie.E4.Vehicles,
                        re = (0, _.H)(E);
                    return (
                        (0, r.useEffect)(() => {
                            const a = (a) => {
                                switch (a.name) {
                                    case B(S, t).name:
                                        o.setActiveRareReward(e);
                                        break;
                                    case B(R, t).name:
                                        C(!0);
                                        break;
                                    case B(f, t).name:
                                        P.start(Be()), $.start(Be()), ye.hY.sound(w.rewardAppear);
                                        break;
                                    case B(N, t).name:
                                        P.start(ke()), $.start(ke());
                                        break;
                                    case B(T, t).name:
                                        P.start({
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
                                            ],
                                            config: { duration: 120 },
                                        }),
                                            q.start({
                                                to: [
                                                    { opacity: 0.6, display: 'flex' },
                                                    { opacity: 0, display: 'flex' },
                                                    { opacity: 0, display: 'none' },
                                                ],
                                                config: { duration: 1e3 },
                                            });
                                        break;
                                    case B(I, t).name:
                                        P.start({
                                            to: {
                                                opacity: 0,
                                                transform: 'scale(1) rotateZ(0deg)',
                                                filter: 'brightness(1)',
                                            },
                                            config: { duration: 0 },
                                        }),
                                            $.start({ from: { opacity: 0 }, config: { duration: 0 } }),
                                            U.start(Ae),
                                            Q.start(Ge()),
                                            ye.hY.sound(w.compensationAppear);
                                }
                            };
                            return (
                                re.events.on('change', a),
                                () => {
                                    re.events.off('change', a);
                                }
                            );
                        }, [w, re.events, o, t]),
                        (0, r.useEffect)(() => {
                            const t = () => {
                                e.isCompensation
                                    ? (U.start({ from: { display: 'flex' }, config: { duration: 0 } }), Q.start(Ge(0)))
                                    : (P.start(ke(0)), $.start(ke(0)));
                            };
                            return (
                                re.events.on('skipAll', t),
                                () => {
                                    re.events.off('skipAll', t);
                                }
                            );
                        }, [re.events]),
                        n().createElement(
                            'div',
                            {
                                style: { marginTop: k ? 0 : `${He(m, t)}rem` },
                                className: L()(We.base, We[`base__reward_${t}`]),
                            },
                            n().createElement(
                                oe.u,
                                {
                                    ignoreShowDelay: !0,
                                    contentId: Number(te),
                                    args: { tooltipId: Y, boxCategory: e.icon, eventName: l },
                                    isEnabled: H === g.B1.initial,
                                },
                                n().createElement(
                                    'div',
                                    null,
                                    e.isCompensation &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: We.compensationReward,
                                                style: { width: O.rewardWidth, height: O.rewardHeight },
                                            },
                                            n().createElement(
                                                d.animated.div,
                                                { style: Object.assign({}, K), className: We.video },
                                                n().createElement(we.n, {
                                                    style: { width: O.glowSize, height: O.glowSize },
                                                    src: b.compensationGlow,
                                                    autoplay: !0,
                                                    loop: !0,
                                                }),
                                            ),
                                            n().createElement(
                                                d.animated.div,
                                                { style: Object.assign({}, M, { visibility: M.visibility }) },
                                                n().createElement(Ne._, {
                                                    icon: (0, ce.ry)(e, ie.h2.S600x450, e.isCompensation),
                                                    sizes: { height: O.rewardHeight, width: O.rewardWidth },
                                                }),
                                            ),
                                            n().createElement(
                                                d.animated.div,
                                                { style: Object.assign({}, F) },
                                                n().createElement(Ve, { reward: e.compensation, style: O }),
                                                n().createElement(Ne._, {
                                                    className: We.compensationIcon,
                                                    icon: p.compensationIcon,
                                                    sizes: {
                                                        height: O.compensationIconHeight,
                                                        width: O.compensationIconWidth,
                                                    },
                                                }),
                                            ),
                                        ),
                                    (0, x.y)(e) &&
                                        n().createElement(
                                            d.animated.div,
                                            {
                                                style: {
                                                    opacity: V.opacity,
                                                    width: O.rareGlowSize,
                                                    height: O.rareGlowSize,
                                                },
                                                className: We.video,
                                            },
                                            n().createElement(we.n, {
                                                className: We.rareGlow,
                                                src: b.rareGlow,
                                                autoplay: !0,
                                                loop: !0,
                                            }),
                                        ),
                                    n().createElement(
                                        d.animated.div,
                                        { style: Object.assign({}, V), className: We.reward },
                                        n().createElement(fe.Q, {
                                            reward: e,
                                            sizes: O,
                                            countText: y.multiplier,
                                            currentAnimationState: H,
                                        }),
                                    ),
                                    n().createElement(
                                        d.animated.div,
                                        { style: Object.assign({}, W) },
                                        ae
                                            ? n().createElement(ve.U, { reward: e, style: O })
                                            : n().createElement(De, { reward: e, style: O }),
                                    ),
                                    (0, xe.XM)(e) &&
                                        !e.isCompensation &&
                                        n().createElement(
                                            d.animated.div,
                                            {
                                                className: L()(We.loupe, H === g.B1.initial && We.loupe__ready),
                                                style: Object.assign({}, W),
                                            },
                                            n().createElement(he.k, {
                                                icon: { img: p.previewIcon },
                                                onClick: () =>
                                                    o.goPreview({
                                                        bonusType: e.name,
                                                        bonusId: e.id ? e.id : '',
                                                        styleID: e.styleID,
                                                    }),
                                            }),
                                        ),
                                    (0, x.y)(e) &&
                                        n().createElement(Ee.s, {
                                            className: We.rareVideo,
                                            style: { width: O.rareVideoSize, height: O.rareVideoSize },
                                            sound: e.rarity === G.G.Rare ? w.rareAnimation : w.epicAnimation,
                                            src: b[e.rarity],
                                            show: v,
                                            timer: { remainder: 0.4, next: re.resume },
                                            onEnded: () => C(!1),
                                        }),
                                ),
                            ),
                        )
                    );
                }),
                je = 'Rewards_base_b8',
                Ke = 'Rewards_base__small_69',
                qe = (e) => e + 1,
                Ze = (0, m.Pi)(({ className: e, resume: t }) => {
                    const a = J(),
                        s = a.model,
                        o = a.controls,
                        c = s.computes.resources().sounds,
                        m = (0, ee.GS)().mediaSize,
                        d = s.bonuses.get(),
                        u = d.length,
                        p = s.extraBonuses.get().length,
                        b = m === ee.cJ.ExtraSmall && u > 4,
                        y = (0, r.useState)(0),
                        w = y[0],
                        v = y[1],
                        x = (0, i.v)(g.Kg, (e) => e.value),
                        f = (0, _.H)(E);
                    return (
                        (0, r.useEffect)(() => {
                            const e = (e) => {
                                if (e.name === C) g.Kg.send({ type: p > 0 ? g.QK.toExtra : g.QK.toPage });
                            };
                            return (
                                f.events.on('change', e),
                                () => {
                                    f.events.off('change', e);
                                }
                            );
                        }, [f.events, o, p]),
                        (0, r.useEffect)(() => {
                            switch ((0, l.P)(x)) {
                                case g.B1.skip:
                                    f.skipAll();
                                    break;
                                case g.B1.preparation:
                                    f.reset(), v(qe);
                                    break;
                                case g.B1.rewards:
                                    f.start();
                            }
                        }, [x]),
                        (0, r.useEffect)(() => {
                            t.active && (ye.hY.sound(c.rewardAppear), t.reset());
                        }, [c, t]),
                        n().createElement(
                            'div',
                            { className: L()(je, b && Ke, e), key: w },
                            h.UI(d, (e, t) =>
                                n().createElement($e, { reward: e, index: t, key: `reward_${e.name}_${t}` }),
                            ),
                        )
                    );
                }),
                Je = 'Content_base_8b',
                Me = 'Content_rareOverlay_58',
                Le = 'Content_headerBlock_97',
                Qe = 'Content_closeButton_77',
                Xe = 'Content_header_e9',
                Fe = 'Content_rewardsPosition_f3',
                Ue = 'Content_extraRewards_79',
                Ye = 'Content_footer_17',
                et = 'Content_checkbox_ca',
                tt = { opacity: 0, display: 'none' },
                at = { opacity: 1, display: 'flex' },
                rt = {
                    to: at,
                    config: { duration: 500, easing: U.Z.easeOutCubic },
                    onRest: () => {
                        g.Kg.send({ type: g.QK.toInitial });
                    },
                },
                nt = (0, m.Pi)(() => {
                    const e = J(),
                        t = e.model,
                        a = e.controls,
                        s = t.root.get(),
                        o = s.boxCategory,
                        c = s.boxesCount,
                        m = s.boxesCountToGuaranteed,
                        u = s.isWindowAccessible,
                        p = s.isShopVisible,
                        b = t.isAnimationActive.get(),
                        y = t.computes.settings().accentCount,
                        w = t.computes.resources(),
                        h = w.texts,
                        x = w.images,
                        f = w.sounds,
                        N = t.computes.dynamicResources().dynamicTexts,
                        S = t.extraBonuses.get().length,
                        R = t.activeRareReward.get(),
                        T = t.eventName.get(),
                        I = (0, r.useState)(!1),
                        C = I[0],
                        A = I[1],
                        B = (0, ee.GS)().mediaSize,
                        k = (0, i.v)(g.Kg, (e) => e.value),
                        G = (0, d.useSpring)(() => ({ from: tt })),
                        O = G[0],
                        H = G[1],
                        z = { boxesToGuaranteed: m, accent: y },
                        V = { title: h.guaranteedTitle, nextBox: h.guaranteedNextBox },
                        P = { glow: x.glowIcon, info: x.infoIcon, strongGlow: x.guaranteedGlowIcon };
                    (0, r.useEffect)(() => {
                        switch ((0, l.P)(k)) {
                            case g.mB:
                                H.set(tt);
                                break;
                            case g.B1.skip:
                                H.set(at);
                                break;
                            case g.B1.page:
                                H.start(rt);
                        }
                    }, [k]);
                    const D = { active: C, reset: (0, r.useCallback)(() => A(!1), []) },
                        W = (0, _.H)(E),
                        $ = (0, r.useCallback)(() => {
                            a.clearActiveRareReward(), A(!0), W.resume();
                        }, [W, a]);
                    return n().createElement(
                        'div',
                        { className: Je },
                        Boolean(R) &&
                            (0, v.C)(T, null == R ? void 0 : R.specialAwardName) &&
                            n().createElement(
                                'div',
                                { className: Me },
                                n().createElement(se.H, {
                                    res: (0, v.D)(T, null == R ? void 0 : R.specialAwardName),
                                    rareBonus: R,
                                    texts: h,
                                    controls: {
                                        onClose: $,
                                        onPlay: () => a.setIsVideoPlaying(!0),
                                        onEnded: () => a.setIsVideoPlaying(!1),
                                    },
                                    minimized: !u,
                                }),
                            ),
                        n().createElement(
                            d.animated.div,
                            { style: O, className: Le },
                            n().createElement(re.h, {
                                title: h.headerTitle,
                                subTitle:
                                    o &&
                                    n().createElement(X.z, {
                                        text: h.headerSubtitle,
                                        binding: { name: N.boxCategory.dynOpt(o) },
                                    }),
                                className: Xe,
                            }),
                            n().createElement(
                                'div',
                                { className: Qe },
                                n().createElement(F.A, {
                                    caption: h.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: a.close,
                                }),
                            ),
                        ),
                        n().createElement(Ze, { resume: D, className: L()(S > 0 && Fe) }),
                        S > 0 && n().createElement(be, { className: Ue }),
                        n().createElement(
                            d.animated.div,
                            { style: O, className: Ye },
                            m > 0 &&
                                n().createElement(ae.r, { counts: z, texts: V, icons: P, category: o, eventName: T }),
                            Y.graphicsQuality.isHigh() &&
                                n().createElement(te.o, {
                                    isActive: b,
                                    onClick: () => {
                                        a.toggleAnimationState(b);
                                    },
                                    className: et,
                                    text: h.checkbox,
                                    size: B >= ee.cJ.Medium ? Q.yB.extraLarge : Q.yB.large,
                                }),
                            n().createElement(ne.Z, {
                                texts: h,
                                images: x,
                                actions: Object.assign({}, a, {
                                    openNext: () => {
                                        g.Kg.send({ type: g.QK.toPreparation });
                                    },
                                }),
                                sounds: f,
                                boxesCount: c,
                                isShopVisible: p,
                            }),
                        ),
                    );
                }),
                st = 'App_base_ae',
                it = 'App_background_53',
                ot = 'App_loader_e0',
                ct = 'App_content_0d',
                lt = 'App_loaderWrapper_34',
                mt = (0, m.Pi)(() => {
                    const e = J(),
                        t = e.model,
                        a = e.controls,
                        s = t.computes.resources(),
                        m = s.images,
                        h = s.texts,
                        v = t.root.get().isWindowAccessible,
                        x = t.isAnimationActive.get(),
                        f = t.isAwaitingResponse.get(),
                        N = t.computes.hasRareReward(),
                        S = t.computes.multimediaResource(),
                        R = t.isReopen.get(),
                        T = (0, i.v)(g.Kg, (e) => e.value),
                        I = (0, _.H)(E);
                    (0, o.gd)(
                        c.n.ESCAPE,
                        () => {
                            T === g.B1.initial && a.close();
                        },
                        !0,
                    ),
                        (0, r.useEffect)(
                            () => (
                                g.Kg.start(),
                                () => {
                                    g.Kg.stop();
                                }
                            ),
                            [],
                        ),
                        (0, r.useEffect)(() => {
                            g.Kg.send({ type: g.QK.setAnimationActive, isAnimationActive: x });
                        }, [x]),
                        (0, y.s)(R, f, T);
                    const C = (0, b.H)(T, a.openNext),
                        A = C.loadingStyle,
                        B = C.contentStyle;
                    return n().createElement(
                        'div',
                        { className: st, ref: I.rootRef },
                        n().createElement(p.F, {
                            activeType: N ? w.e.rare : w.e.common,
                            minimized: !v,
                            res: S,
                            className: it,
                            onPlay: () => a.setIsVideoPlaying(!0),
                            onEnded: () => a.setIsVideoPlaying(!1),
                        }),
                        (0, l.P)(T) !== g.A_ &&
                            n().createElement(d.animated.div, { style: B, className: ct }, n().createElement(nt, null)),
                        T === g.B1.waiting &&
                            n().createElement(
                                d.animated.div,
                                { style: A, className: lt },
                                n().createElement(u.a, { text: h.loader, img: m.loader, className: ot }),
                            ),
                    );
                });
            var dt = a(7051);
            const ut = (0, m.Pi)(({ children: e }) => {
                    const t = J().model,
                        a = t.eventName.get(),
                        r = (0, dt.G)({ steps: k(t.bonuses.get(), a), autoStart: !1 })();
                    return n().createElement(E.Provider, { value: r }, e);
                }),
                gt = () =>
                    n().createElement(
                        Z,
                        { options: s.f.SINGLE_REWARD },
                        n().createElement(ut, null, n().createElement(mt, null)),
                    );
        },
        7509: (e, t, a) => {
            a.d(t, { t: () => u });
            var r = a(6483),
                n = a.n(r),
                s = a(7363),
                i = a.n(s);
            const o = 'GuaranteedNumber_base_73',
                c = 'GuaranteedNumber_countBg_cd',
                l = 'GuaranteedNumber_count_e3',
                m = 'GuaranteedNumber_glow_85',
                d = 'GuaranteedNumber_glow__reverse_7b',
                u = ({
                    boxesCountToGuaranteed: e,
                    glowIcon: t,
                    strongGlowIcon: a,
                    accentCount: r,
                    className: s = '',
                }) =>
                    i().createElement(
                        'div',
                        { className: n()(o, s) },
                        i().createElement('div', { className: c, style: { backgroundImage: `url(${a})` } }),
                        e <= r &&
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: m, style: { backgroundImage: `url(${t})` } }),
                                i().createElement('div', {
                                    className: n()(m, d),
                                    style: { backgroundImage: `url(${t})` },
                                }),
                            ),
                        i().createElement('div', { className: l }, e),
                    );
        },
        9221: (e, t, a) => {
            a.d(t, { r: () => b });
            var r = a(6483),
                n = a.n(r),
                s = a(9766),
                i = a(2056),
                o = a(7363),
                c = a.n(o),
                l = a(7509);
            const m = 'GuaranteedTitle_base_28',
                d = 'GuaranteedTitle_wrapper_36',
                u = 'GuaranteedTitle_nextGuaranteedBox_31',
                g = 'GuaranteedTitle_countBg_b7',
                p = 'GuaranteedTitle_info_49',
                _ = R.views.lobby.lootbox_system,
                b = ({ counts: e, texts: t, icons: a, category: r, eventName: o, className: b }) =>
                    c().createElement(
                        'div',
                        { className: n()(m, b) },
                        c().createElement(
                            i.u,
                            {
                                contentId: _.tooltips.GuaranteedRewardInfoTooltip('resId'),
                                args: { category: r, eventName: o },
                            },
                            c().createElement(
                                'div',
                                { className: d },
                                e.boxesToGuaranteed > 1
                                    ? c().createElement(s.z, {
                                          text: t.title,
                                          binding: {
                                              count: c().createElement(l.t, {
                                                  boxesCountToGuaranteed: e.boxesToGuaranteed,
                                                  glowIcon: a.glow,
                                                  strongGlowIcon: a.strongGlow,
                                                  accentCount: e.accent,
                                              }),
                                          },
                                      })
                                    : c().createElement(
                                          'div',
                                          { className: u },
                                          c().createElement('div', {
                                              className: g,
                                              style: { backgroundImage: `url(${a.strongGlow})` },
                                          }),
                                          t.nextBox,
                                      ),
                                c().createElement('div', {
                                    className: p,
                                    style: { backgroundImage: `url(${a.info})` },
                                }),
                            ),
                        ),
                    );
        },
        6845: (e, t, a) => {
            a.d(t, { U: () => u });
            var r = a(6483),
                n = a.n(r),
                s = a(5415),
                i = a(9690),
                o = a(7363),
                c = a.n(o),
                l = a(3905);
            const m = { base: 'TankName_base_14', type: 'TankName_type_49' },
                d = (e, t, a) => ({
                    backgroundImage: `url(${`R.images.gui.maps.icons.vehicleTypes.${a ? 'c_48x48' : 'c_24x24'}.${`${e.replace('-', '_')}${t ? '_elite' : ''}`}`})`,
                }),
                u = ({ reward: e, style: t, className: a = '', usagePlace: r }) => {
                    const o = (0, s.GS)().mediaSize,
                        u = e.label,
                        g = e.level,
                        p = e.type,
                        _ = e.isElite,
                        b = e.vehicleShortName;
                    return c().createElement(
                        'div',
                        { className: n()(m.base, a), style: { fontSize: t.nameHeight } },
                        void 0 !== g && c().createElement('div', { className: m.level }, (0, i.HG)(g)),
                        void 0 !== p &&
                            void 0 !== _ &&
                            c().createElement('div', { className: m.type, style: d(p, _, o >= s.cJ.Medium) }),
                        c().createElement('div', null, r === l.qA.InfoPage ? b : u),
                    );
                };
        },
        8043: (e, t, a) => {
            a.d(t, { e: () => r });
            const r = {
                icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
                shine: { opacityCustom: 0.15, opacityCustomNewBox: 0.4, opacityDiff: 0.15, animationDuration: '40s' },
            };
        },
        1717: (e, t, a) => {
            a.d(t, { X: () => r });
            const r = {
                hasIdle: !0,
                vignette: { isEnabled: !0, opacity: 0.4 },
                tabsGuaranteedCount: 10,
                accentCount: 5,
                hoverZone: { width: '38%', height: '39%', horizontalOffset: '30.8%', verticalOffset: '39%' },
                backgroundColor: '#111',
            };
        },
        4201: (e, t, a) => {
            a.d(t, { g: () => o });
            var r = a(8043),
                n = a(1717),
                s = a(5696),
                i = a(5e3);
            const o = { ENTRY_POINT: r.e, HAS_BOXES_VIEW: n.X, INFO_PAGE: s.q, REWARDS: i.O };
        },
        5696: (e, t, a) => {
            a.d(t, { q: () => r });
            const r = { hasDescription: !0 };
        },
        5e3: (e, t, a) => {
            a.d(t, { O: () => r });
            const r = { accentCount: 5 };
        },
        9606: (e, t, a) => {
            a.d(t, { e: () => r });
            const r = { icon: { emptyIconBrightness: 0.2 } };
        },
        2735: (e, t, a) => {
            a.d(t, { X: () => r });
            const r = { hasIdle: !1, tabsGuaranteedCount: 5 };
        },
        5096: (e, t, a) => {
            a.d(t, { j: () => i });
            var r = a(9606),
                n = a(2735),
                s = a(4607);
            const i = { ENTRY_POINT: r.e, HAS_BOXES_VIEW: n.X, INFO_PAGE: s.q };
        },
        4607: (e, t, a) => {
            a.d(t, { q: () => r });
            const r = { hasDescription: !0 };
        },
        3460: (e, t, a) => {
            a.d(t, { v: () => n });
            var r = a(5096);
            const n = { DEFAULT_CONFIG: a(4201).g, anniversaryCN: r.j };
        },
        1440: (e, t, a) => {
            a.d(t, { i: () => i });
            var r = a(3649),
                n = a(3460),
                s = a(4201);
            const i = (e, t) => {
                const a = n.v[(0, r.TD)(e)];
                return a
                    ? ((e, t) => {
                          const a = (e, t) => {
                              const r = Object.assign({}, e);
                              for (const e in r) {
                                  var n, s;
                                  t &&
                                      e in t &&
                                      ('object' == typeof r[e]
                                          ? (r[e] = a(r[e], null != (n = t[e]) ? n : r[e]))
                                          : (r[e] = null != (s = t[e]) ? s : r[e]));
                              }
                              return r;
                          };
                          return a(e, t);
                      })(s.g[t], a[t])
                    : s.g[t];
            };
        },
    },
]);
