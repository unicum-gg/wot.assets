'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [261],
    {
        8314: (e, t, a) => {
            (a.r(t), a.d(t, { default: () => bt }));
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
                T = 'RARE_REWARD',
                I = 'TWITCH',
                C = 'COMPENSATION',
                A = 'FINISH',
                B = {
                    [S]: { duration: 0, pauseNextSteps: !0 },
                    [T]: { duration: 0, pauseNextSteps: !0 },
                    [f]: { duration: 200 },
                    [N]: { duration: 400 },
                    [I]: { duration: 840 },
                    [C]: { duration: 1e3, delay: 50 },
                    [A]: { name: A, duration: 0, delay: 500 },
                },
                k = (e, t) => Object.assign({}, B[e], { name: `animation_${t}_${e}` }),
                G = (e, t) => {
                    const a = [];
                    return (
                        h.UI(e, (e, r) => {
                            const n = (0, x.y)(e),
                                s = (0, v.C)(t, e.specialAwardName);
                            if (n) {
                                if (s) return (a.push(k(S, r)), void a.push(k(N, r)));
                                a.push(k(T, r));
                            }
                            (a.push(k(f, r)), a.push(k(N, r)), e.isCompensation && (a.push(k(I, r)), a.push(k(C, r))));
                        }),
                        a.push(B.FINISH),
                        a
                    );
                };
            var O = a(4736),
                H = a(3215),
                z = a(4598),
                V = a(2691),
                P = a(9174),
                $ = a(3946),
                D = a(3905),
                W = a(1440),
                j = a(7366),
                K = a(9674);
            const q = {
                    rewardAppear: K.T.rewardAppear,
                    compensationAppear: K.T.compensationAppear,
                    rareAnimation: K.T.rareAnimation,
                    epicAnimation: K.T.epicAnimation,
                    open: K.T.open,
                    openRare: K.T.openRare,
                    purchaseHover: K.T.purchaseHover,
                    purchaseClick: K.T.purchaseClick,
                },
                Z = {
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
                    sounds: q,
                },
                J = {
                    dynamicVideos: { boxesOpening: 'awardViews.openingBoxVideo' },
                    dynamicTexts: {
                        rewardsPremiumDay: 'common.rewards.premiumDay',
                        boxCategory: 'common.boxCategory.lowerCase',
                        attachmentRarity: 'bonuses.customization.rarity',
                    },
                    dynamicImages: { boxesOpening: 'awardViews.openingBox' },
                },
                M = (0, H.q3)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign(
                                { root: e.object() },
                                e.primitives(['eventName', 'isAnimationActive', 'isAwaitingResponse', 'isReopen']),
                                {
                                    bonuses: e.array('bonuses.items'),
                                    extraBonuses: e.array('extraBonuses.items'),
                                    activeRareReward: P.LO.box(null),
                                },
                            ),
                            a = (0, $.Om)(() => (0, j.jh)(Z, t.root.get().eventName), { equals: z.jv }),
                            r = (0, $.Om)(() => (0, j.kC)(J, t.root.get().eventName), { equals: z.jv }),
                            n = (0, $.Om)(() => (0, W.i)(t.root.get().eventName, D.N7.Rewards), { equals: z.jv }),
                            s = (0, $.Om)(() => h.G(t.bonuses.get(), (e) => (0, x.y)(e)), { equals: z.jv }),
                            i = (0, $.Om)(() => {
                                const e = t.root.get().boxCategory,
                                    n = `${e}_${O.G.Common}`,
                                    s = `${e}_${O.G.Rare}`,
                                    i = r().dynamicVideos.boxesOpening.dynOpt(n, O.G.Common),
                                    o = r().dynamicVideos.boxesOpening.dynOpt(s, O.G.Rare),
                                    c = r().dynamicImages.boxesOpening.dynOpt(n, O.G.Common),
                                    l = r().dynamicImages.boxesOpening.dynOpt(s, O.G.Rare),
                                    m = a().sounds,
                                    d = (0, j.UB)(
                                        (0, V.R)(R.sounds, `${q.open}_${t.root.get().eventName}_${e}`),
                                        m.open,
                                        q.open,
                                    ),
                                    u = (0, j.UB)(
                                        (0, V.R)(R.sounds, `${q.openRare}_${t.root.get().eventName}_${e}`),
                                        m.openRare,
                                        q.openRare,
                                    );
                                return {
                                    [w.e.common]: { video: i, image: c, sound: d },
                                    [w.e.rare]: { video: o, image: l, sound: u },
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
                        setActiveRareReward: (0, P.aD)((e) => t.activeRareReward.set(e)),
                        clearActiveRareReward: (0, P.aD)(() => t.activeRareReward.set(null)),
                    }),
                ),
                L = M[0],
                Q = M[1];
            var U = a(6483),
                X = a.n(U),
                F = a(8844),
                Y = a(9766),
                ee = a(8089),
                te = a(7522),
                ae = a(5959),
                re = a(5415),
                ne = a(8821),
                se = a(9221),
                ie = a(6974),
                oe = a(3703),
                ce = a(2369),
                le = a(2862),
                me = a(2056),
                de = a(114);
            const ue = 'ExtraRewards_base_9b',
                ge = 'ExtraRewards_extraRewardsWrapper_a2',
                pe = 'ExtraRewards_text_f5',
                _e = 'ExtraRewards_extraIcon_2e',
                be = { opacity: 0, filter: 'brightness(2)' },
                ye = { opacity: 1, filter: 'brightness(1)' },
                we = {
                    to: [{ opacity: 1, filter: 'brightness(2)' }, ye],
                    config: { duration: 600, easing: te.Z.easeInOutCubic },
                    onRest: () => {
                        g.Kg.send({ type: g.QK.toPage });
                    },
                },
                he = (0, m.Pi)(({ className: e }) => {
                    const t = Q().model,
                        a = (0, re.GS)().mediaSize,
                        s = (0, i.v)(g.Kg, (e) => e.value),
                        o = t.computes.resources().texts,
                        c = t.extraBonuses.get(),
                        l = (0, d.useSpring)(() => ({ from: be })),
                        m = l[0],
                        u = l[1];
                    return (
                        (0, r.useEffect)(() => {
                            switch (s) {
                                case g.B1.skip:
                                    u.set(ye);
                                    break;
                                case g.B1.preparation:
                                    u.set(be);
                                    break;
                                case g.B1.extra:
                                    u.start(we);
                            }
                        }, [s, u]),
                        n().createElement(
                            d.animated.div,
                            { style: m, className: X()(ue, e) },
                            n().createElement('div', { className: pe }, o.extraRewardText),
                            n().createElement(
                                'div',
                                { className: ge },
                                h.UI(c, (e, t) =>
                                    n().createElement(
                                        me.u,
                                        {
                                            ignoreShowDelay: !0,
                                            contentId: Number(e.tooltipContentId),
                                            args: { tooltipId: e.tooltipId },
                                            key: t + e.name,
                                        },
                                        n().createElement('div', {
                                            className: _e,
                                            style: {
                                                backgroundImage: `url(${(0, de.ry)(e, a >= re.cJ.Medium ? le.h2.Big : le.h2.Small)})`,
                                            },
                                        }),
                                    ),
                                ),
                            ),
                        )
                    );
                });
            var ve = a(514),
                xe = a(7060),
                Ee = a(3633),
                fe = a(6845),
                Ne = a(4401),
                Se = a(7039),
                Re = a(46),
                Te = a(9108);
            const Ie = { opacity: 0, transform: 'scale(0.96)', filter: 'brightness(1.5)', immediate: !0 },
                Ce = {
                    opacity: 1,
                    transform: 'scale(1.06) rotateZ(0deg)',
                    filter: 'brightness(1.5)',
                    visibility: 'hidden',
                },
                Ae = {
                    opacity: 1,
                    transform: 'scale(1) rotateZ(0deg)',
                    filter: 'brightness(1)',
                    visibility: 'visible',
                },
                Be = { opacity: 0, display: 'flex' },
                ke = { display: 'none' },
                Ge = { display: 'flex' },
                Oe = () => ({
                    to: { opacity: 1, transform: 'scale(1.02)', filter: 'brightness(1.5)' },
                    config: { duration: 200, easing: te.Z.easeOutCubic },
                }),
                He = (e = 400) => ({
                    to: { opacity: 1, transform: 'scale(1)', filter: 'brightness(1)' },
                    config: { duration: e, easing: te.Z.easeInOutCubic },
                }),
                ze = (e = 500) => ({
                    to: [
                        {
                            opacity: 1,
                            transform: 'scale(1.06) rotateZ(0deg)',
                            filter: 'brightness(1.5)',
                            visibility: 'visible',
                        },
                        Ae,
                    ],
                    config: { duration: e },
                }),
                Ve = {
                    extraLarge: {
                        rewardWidth: '600rem',
                        rewardHeight: '450rem',
                        compensationIconWidth: '36rem',
                        compensationIconHeight: '36rem',
                        countHeight: '36rem',
                        nameHeight: '22rem',
                        descriptionHeight: '20rem',
                        glowSize: '780rem',
                        imageSize: le.h2.S600x450,
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
                        imageSize: le.h2.S600x450,
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
                        imageSize: le.h2.S600x450,
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
                        imageSize: le.h2.S600x450,
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
                        imageSize: le.h2.S600x450,
                        rareGlowSize: '238rem',
                        rareVideoSize: '256rem',
                    },
                },
                Pe = (e, t) => {
                    switch (!0) {
                        case (e >= 3 && 1 === t) || (e >= 4 && [1, e - 2].includes(t)):
                            return -40;
                        case (5 === e && 2 === t) || (6 === e && [2, e - 3].includes(t)):
                            return -80;
                        default:
                            return 0;
                    }
                },
                $e = {
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
                De = ({ reward: e, style: t, className: a = '' }) => {
                    const r = e.name,
                        s = e.label,
                        i = e.value;
                    return n().createElement(
                        'div',
                        { className: X()($e.base, $e[`base__${r}`], a) },
                        n().createElement('div', { className: $e.name, style: { fontSize: t.nameHeight } }, s),
                        n().createElement(
                            'div',
                            { className: $e.label, style: { fontSize: t.descriptionHeight } },
                            n().createElement(Y.z, { text: (0, Ne.QH)(i) }),
                        ),
                    );
                },
                We = {
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
                je = (0, m.Pi)(({ reward: e, style: t, className: a }) => {
                    const r = Q().model,
                        s = r.computes.dynamicResources().dynamicTexts,
                        i = r.computes.resources().texts,
                        o = e.name,
                        c = e.value,
                        l = e.label,
                        m = e.description,
                        d = o === de.tB.premiumPlus,
                        u = (() => {
                            switch (!0) {
                                case Boolean(c):
                                    return o === de.tB.tmanToken ? i.uniqueTankmanText : l;
                                case o === de.tB.attachment:
                                    return `${s.attachmentRarity.dyn(e.overlayType)} ${m}`;
                                default:
                                    return m;
                            }
                        })(),
                        g = !0 === Boolean(c) ? (o === de.tB.tmanToken ? l : (0, Ne.QH)(c)) : l;
                    return n().createElement(
                        'div',
                        { className: X()(We.base, We[`base__${o}`], a) },
                        u.length > 0 &&
                            n().createElement(
                                'div',
                                { className: We.description, style: { fontSize: t.descriptionHeight } },
                                n().createElement(Y.z, { text: u, classMix: We.text }),
                            ),
                        n().createElement(
                            'div',
                            { className: We.name, style: { fontSize: t.nameHeight } },
                            n().createElement(Y.z, { text: g, classMix: We.text }),
                            d &&
                                n().createElement(
                                    'span',
                                    { className: We.pluralText, style: { fontSize: t.nameHeight } },
                                    s.rewardsPremiumDay.plural('premiumDay', Number(c.split(' ').at(-1))),
                                ),
                        ),
                    );
                }),
                Ke = {
                    base: 'SingleReward_base_b9',
                    compensationReward: 'SingleReward_compensationReward_cd',
                    compensationIcon: 'SingleReward_compensationIcon_f4',
                    loupe: 'SingleReward_loupe_dd',
                    loupe__ready: 'SingleReward_loupe__ready_c4',
                    rareVideo: 'SingleReward_rareVideo_46',
                    video: 'SingleReward_video_5f',
                    rareGlow: 'SingleReward_rareGlow_fc',
                },
                qe = (0, m.Pi)(({ reward: e, index: t }) => {
                    const a = Q(),
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
                        R = h[1],
                        A = (0, re.GS)().mediaSize,
                        B = A === re.cJ.ExtraSmall && m > 4,
                        G = ((e, t) => {
                            switch (!0) {
                                case e === re.cJ.ExtraLarge && t < 4:
                                    return Ve.extraLarge;
                                case (e === re.cJ.ExtraLarge && t > 3) ||
                                    (e === re.cJ.Medium && t < 4) ||
                                    (e === re.cJ.Large && t < 5):
                                    return Ve.large;
                                case (e === re.cJ.Large && t > 4) ||
                                    (e === re.cJ.Medium && t < 6 && t > 3) ||
                                    ((e === re.cJ.Small || e === re.cJ.ExtraSmall) && t < 4):
                                    return Ve.medium;
                                case (e === re.cJ.Medium && 6 === t) ||
                                    (e === re.cJ.Small && t < 6 && t > 3) ||
                                    (e === re.cJ.ExtraSmall && 4 === t):
                                    return Ve.small;
                                default:
                                    return Ve.extraSmall;
                            }
                        })(A, m),
                        H = (0, i.v)(g.Kg, (e) => e.value),
                        z = (0, d.useSpring)(() => Ie),
                        V = z[0],
                        P = z[1],
                        $ = (0, d.useSpring)(() => Ie),
                        D = $[0],
                        W = $[1],
                        j = (0, d.useSpring)(() => Be),
                        K = j[0],
                        q = j[1],
                        Z = (0, d.useSpring)(() => Ce),
                        J = Z[0],
                        M = Z[1],
                        L = (0, d.useSpring)(() => ke),
                        U = L[0],
                        F = L[1],
                        Y = e.tooltipId,
                        ee = e.tooltipContentId,
                        te = e.name === le.E4.Vehicles,
                        ae = (0, _.H)(E);
                    return (
                        (0, r.useEffect)(() => {
                            const a = (a) => {
                                switch (a.name) {
                                    case k(S, t).name:
                                        o.setActiveRareReward(e);
                                        break;
                                    case k(T, t).name:
                                        R(!0);
                                        break;
                                    case k(f, t).name:
                                        (P.start(Oe()), W.start(Oe()), ve.hY.sound(w.rewardAppear));
                                        break;
                                    case k(N, t).name:
                                        (P.start(He()), W.start(He()));
                                        break;
                                    case k(I, t).name:
                                        (P.start({
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
                                            }));
                                        break;
                                    case k(C, t).name:
                                        (P.start({
                                            to: {
                                                opacity: 0,
                                                transform: 'scale(1) rotateZ(0deg)',
                                                filter: 'brightness(1)',
                                            },
                                            config: { duration: 0 },
                                        }),
                                            W.start({ from: { opacity: 0 }, config: { duration: 0 } }),
                                            F.start(Ge),
                                            M.start(ze()),
                                            ve.hY.sound(w.compensationAppear));
                                }
                            };
                            return (
                                ae.events.on('change', a),
                                () => {
                                    ae.events.off('change', a);
                                }
                            );
                        }, [w, ae.events, o, t]),
                        (0, r.useEffect)(() => {
                            const t = () => {
                                e.isCompensation
                                    ? (F.start({ from: { display: 'flex' }, config: { duration: 0 } }), M.start(ze(0)))
                                    : (P.start(He(0)), W.start(He(0)));
                            };
                            return (
                                ae.events.on('skipAll', t),
                                () => {
                                    ae.events.off('skipAll', t);
                                }
                            );
                        }, [ae.events]),
                        n().createElement(
                            'div',
                            {
                                style: { marginTop: B ? 0 : `${Pe(m, t)}rem` },
                                className: X()(Ke.base, Ke[`base__reward_${t}`]),
                            },
                            n().createElement(
                                me.u,
                                {
                                    ignoreShowDelay: !0,
                                    contentId: Number(ee),
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
                                                className: Ke.compensationReward,
                                                style: { width: G.rewardWidth, height: G.rewardHeight },
                                            },
                                            n().createElement(
                                                d.animated.div,
                                                { style: Object.assign({}, K), className: Ke.video },
                                                n().createElement(xe.o, {
                                                    style: { width: G.glowSize, height: G.glowSize },
                                                    src: b.compensationGlow,
                                                    autoplay: !0,
                                                    loop: !0,
                                                }),
                                            ),
                                            n().createElement(
                                                d.animated.div,
                                                { style: Object.assign({}, J, { visibility: J.visibility }) },
                                                n().createElement(Te._, {
                                                    icon: (0, de.ry)(e, le.h2.S600x450, e.isCompensation),
                                                    sizes: { height: G.rewardHeight, width: G.rewardWidth },
                                                }),
                                            ),
                                            n().createElement(
                                                d.animated.div,
                                                { style: Object.assign({}, U) },
                                                n().createElement(De, { reward: e.compensation, style: G }),
                                                n().createElement(Te._, {
                                                    className: Ke.compensationIcon,
                                                    icon: p.compensationIcon,
                                                    sizes: {
                                                        height: G.compensationIconHeight,
                                                        width: G.compensationIconWidth,
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
                                                    width: G.rareGlowSize,
                                                    height: G.rareGlowSize,
                                                },
                                                className: Ke.video,
                                            },
                                            n().createElement(xe.o, {
                                                className: Ke.rareGlow,
                                                src: b.rareGlow,
                                                autoplay: !0,
                                                loop: !0,
                                            }),
                                        ),
                                    n().createElement(
                                        d.animated.div,
                                        { style: Object.assign({}, V), className: Ke.reward },
                                        n().createElement(Re.Q, {
                                            reward: e,
                                            sizes: G,
                                            countText: y.multiplier,
                                            currentAnimationState: H,
                                        }),
                                    ),
                                    n().createElement(
                                        d.animated.div,
                                        { style: Object.assign({}, D) },
                                        te
                                            ? n().createElement(fe.U, { reward: e, style: G })
                                            : n().createElement(je, { reward: e, style: G }),
                                    ),
                                    (0, Ne.XM)(e) &&
                                        !e.isCompensation &&
                                        n().createElement(
                                            d.animated.div,
                                            {
                                                className: X()(Ke.loupe, H === g.B1.initial && Ke.loupe__ready),
                                                style: Object.assign({}, D),
                                            },
                                            n().createElement(Ee.k, {
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
                                        n().createElement(Se.s, {
                                            className: Ke.rareVideo,
                                            style: { width: G.rareVideoSize, height: G.rareVideoSize },
                                            sound: e.rarity === O.G.Rare ? w.rareAnimation : w.epicAnimation,
                                            src: b[e.rarity],
                                            show: v,
                                            timer: { remainder: 0.4, next: ae.resume },
                                            onEnded: () => R(!1),
                                        }),
                                ),
                            ),
                        )
                    );
                }),
                Ze = 'Rewards_base_b8',
                Je = 'Rewards_base__small_69',
                Me = (e) => e + 1,
                Le = (0, m.Pi)(({ className: e, resume: t }) => {
                    const a = Q(),
                        s = a.model,
                        o = a.controls,
                        c = s.computes.resources().sounds,
                        m = (0, re.GS)().mediaSize,
                        d = s.bonuses.get(),
                        u = d.length,
                        p = s.extraBonuses.get().length,
                        b = m === re.cJ.ExtraSmall && u > 4,
                        y = (0, r.useState)(0),
                        w = y[0],
                        v = y[1],
                        x = (0, i.v)(g.Kg, (e) => e.value),
                        f = (0, _.H)(E);
                    return (
                        (0, r.useEffect)(() => {
                            const e = (e) => {
                                if (e.name === A) g.Kg.send({ type: p > 0 ? g.QK.toExtra : g.QK.toPage });
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
                                    (f.reset(), v(Me));
                                    break;
                                case g.B1.rewards:
                                    f.start();
                            }
                        }, [x]),
                        (0, r.useEffect)(() => {
                            t.active && (ve.hY.sound(c.rewardAppear), t.reset());
                        }, [c, t]),
                        n().createElement(
                            'div',
                            { className: X()(Ze, b && Je, e), key: w },
                            h.UI(d, (e, t) =>
                                n().createElement(qe, { reward: e, index: t, key: `reward_${e.name}_${t}` }),
                            ),
                        )
                    );
                }),
                Qe = 'Content_base_8b',
                Ue = 'Content_rareOverlay_58',
                Xe = 'Content_headerBlock_97',
                Fe = 'Content_closeButton_77',
                Ye = 'Content_header_e9',
                et = 'Content_rewardsPosition_f3',
                tt = 'Content_extraRewards_79',
                at = 'Content_footer_17',
                rt = 'Content_checkbox_ca',
                nt = { opacity: 0, display: 'none' },
                st = { opacity: 1, display: 'flex' },
                it = {
                    to: st,
                    config: { duration: 500, easing: te.Z.easeOutCubic },
                    onRest: () => {
                        g.Kg.send({ type: g.QK.toInitial });
                    },
                },
                ot = (0, m.Pi)(() => {
                    const e = Q(),
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
                        B = (0, re.GS)().mediaSize,
                        k = (0, i.v)(g.Kg, (e) => e.value),
                        G = (0, d.useSpring)(() => ({ from: nt })),
                        O = G[0],
                        H = G[1],
                        z = { boxesToGuaranteed: m, accent: y },
                        V = { title: h.guaranteedTitle, nextBox: h.guaranteedNextBox },
                        P = { glow: x.glowIcon, info: x.infoIcon, strongGlow: x.guaranteedGlowIcon };
                    (0, r.useEffect)(() => {
                        switch ((0, l.P)(k)) {
                            case g.mB:
                                H.set(nt);
                                break;
                            case g.B1.skip:
                                H.set(st);
                                break;
                            case g.B1.page:
                                H.start(it);
                        }
                    }, [k]);
                    const $ = { active: C, reset: (0, r.useCallback)(() => A(!1), []) },
                        D = (0, _.H)(E),
                        W = (0, r.useCallback)(() => {
                            (a.clearActiveRareReward(), A(!0), D.resume());
                        }, [D, a]);
                    return n().createElement(
                        'div',
                        { className: Qe },
                        Boolean(R) &&
                            (0, v.C)(T, null == R ? void 0 : R.specialAwardName) &&
                            n().createElement(
                                'div',
                                { className: Ue },
                                n().createElement(ce.H, {
                                    res: (0, v.D)(T, null == R ? void 0 : R.specialAwardName),
                                    rareBonus: R,
                                    texts: h,
                                    controls: {
                                        onClose: W,
                                        onPlay: () => a.setIsVideoPlaying(!0),
                                        onEnded: () => a.setIsVideoPlaying(!1),
                                    },
                                    minimized: !u,
                                }),
                            ),
                        n().createElement(
                            d.animated.div,
                            { style: O, className: Xe },
                            n().createElement(ie.h, {
                                title: h.headerTitle,
                                subTitle:
                                    o &&
                                    n().createElement(Y.z, {
                                        text: h.headerSubtitle,
                                        binding: { name: N.boxCategory.dynOpt(o) },
                                    }),
                                className: Ye,
                            }),
                            n().createElement(
                                'div',
                                { className: Fe },
                                n().createElement(ee.A, {
                                    caption: h.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: a.close,
                                }),
                            ),
                        ),
                        n().createElement(Le, { resume: $, className: X()(S > 0 && et) }),
                        S > 0 && n().createElement(he, { className: tt }),
                        n().createElement(
                            d.animated.div,
                            { style: O, className: at },
                            m > 0 &&
                                n().createElement(se.r, { counts: z, texts: V, icons: P, category: o, eventName: T }),
                            ae.graphicsQuality.isHigh() &&
                                n().createElement(ne.o, {
                                    isActive: b,
                                    onClick: () => {
                                        a.toggleAnimationState(b);
                                    },
                                    className: rt,
                                    text: h.checkbox,
                                    size: B >= re.cJ.Medium ? F.yB.extraLarge : F.yB.large,
                                }),
                            n().createElement(oe.Z, {
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
                ct = 'App_base_ae',
                lt = 'App_background_53',
                mt = 'App_loader_e0',
                dt = 'App_content_0d',
                ut = 'App_loaderWrapper_34',
                gt = (0, m.Pi)(() => {
                    const e = Q(),
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
                    ((0, o.gd)(
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
                        (0, y.s)(R, f, T));
                    const C = (0, b.H)(T, a.openNext),
                        A = C.loadingStyle,
                        B = C.contentStyle;
                    return n().createElement(
                        'div',
                        { className: ct, ref: I.rootRef },
                        n().createElement(p.F, {
                            activeType: N ? w.e.rare : w.e.common,
                            minimized: !v,
                            res: S,
                            className: lt,
                            onPlay: () => a.setIsVideoPlaying(!0),
                            onEnded: () => a.setIsVideoPlaying(!1),
                        }),
                        (0, l.P)(T) !== g.A_ &&
                            n().createElement(d.animated.div, { style: B, className: dt }, n().createElement(ot, null)),
                        T === g.B1.waiting &&
                            n().createElement(
                                d.animated.div,
                                { style: A, className: ut },
                                n().createElement(u.a, { text: h.loader, img: m.loader, className: mt }),
                            ),
                    );
                });
            var pt = a(7051);
            const _t = (0, m.Pi)(({ children: e }) => {
                    const t = Q().model,
                        a = t.eventName.get(),
                        r = (0, pt.G)({ steps: G(t.bonuses.get(), a), autoStart: !1 })();
                    return n().createElement(E.Provider, { value: r }, e);
                }),
                bt = () =>
                    n().createElement(
                        L,
                        { options: s.f.SINGLE_REWARD },
                        n().createElement(_t, null, n().createElement(gt, null)),
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
