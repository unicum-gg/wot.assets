'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [984],
    {
        3503: (e, t, o) => {
            o.r(t), o.d(t, { default: () => Z });
            var s = o(7363),
                a = o.n(s),
                n = o(8958),
                c = o(8089),
                r = o(8526),
                l = o(3403),
                i = o(4707),
                m = o(3727),
                u = o(3720),
                d = o(3215),
                g = o(5959),
                p = o(3946),
                b = o(3905),
                x = o(4811),
                B = o(1440),
                v = o(7366),
                _ = o(9674);
            const N = {
                    videos: { background: 'noBoxesView.background' },
                    images: {
                        background: 'noBoxesView.background',
                        noBoxes: 'noBoxesView.noBoxesArt',
                        guaranteedGlowIcon: 'awardViews.guaranteedGlow',
                        glowIcon: 'awardViews.glow',
                        slotGlow: 'hasBoxesView.guaranteed.slotGlow',
                        guaranteedIco: 'hasBoxesView.guaranteed.guaranteedIco',
                        statsIcon: 'statistics.stats',
                    },
                    texts: {
                        infoButton: 'common.infoButton',
                        closeButton: 'common.closeButton',
                        statsButton: 'common.statsButton',
                        description: 'noBoxesView.description',
                        buyBoxesButtonText: 'common.getButton.lowerCase',
                        eventName: 'eventName.upperCase',
                    },
                    sounds: {
                        purchaseClick: _.T.purchaseClick,
                        purchaseHover: _.T.purchaseHover,
                        entryHover: _.T.entryHover,
                        switch: _.T.switch,
                    },
                },
                w = {
                    dynamicTexts: {
                        boxName: 'common.boxCategory.upperCase',
                        tabText: 'hasBoxesView.guaranteedTitle.tabText',
                    },
                },
                C = (0, d.q3)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign({}, e.primitives(['eventName', 'useStats', 'isShopVisible']), {
                                boxesInfo: e.array('boxesInfo'),
                            }),
                            o = (0, p.Om)(() => (0, v.jh)(N, t.eventName.get())),
                            s = (0, p.Om)(() => (0, v.kC)(w, t.eventName.get())),
                            a = (0, p.Om)(() => (0, B.i)(t.eventName.get(), b.N7.HasBoxesView)),
                            n = g.graphicsQuality.isHigh(),
                            c = (0, p.Om)(() => {
                                const e = o(),
                                    t = e.images,
                                    s = e.videos,
                                    a = n ? s.background : '';
                                return (0, x.k)(t.background, a);
                            });
                        return Object.assign({}, t, {
                            computes: { resources: o, dynamicResources: s, backgroundData: c, settings: a },
                        });
                    },
                    ({ externalModel: e }) => ({
                        openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                    }),
                ),
                E = C[0],
                h = C[1];
            var k = o(9766),
                y = o(514),
                f = o(9480),
                I = o(1579),
                H = o(845),
                T = o(6974),
                A = o(8455);
            const V = 'Content_base_6c',
                G = 'Content_header_81',
                O = 'Content_wrapper_6f',
                S = 'Content_shadow_a1',
                M = 'Content_content_34',
                P = 'Content_noBoxes_b3',
                j = 'Content_tabs_a1',
                D = 'Content_subTitle_23';
            var X = o(6483),
                z = o.n(X);
            const Q = 'NoBoxesAsset_base_9a',
                R = ({ images: e, classNames: t = '' }) =>
                    a().createElement('div', { className: z()(Q, t), style: { backgroundImage: `url(${e.noBoxes})` } }),
                q = (0, l.Pi)(() => {
                    const e = h(),
                        t = e.model,
                        o = e.controls,
                        s = t.boxesInfo.get(),
                        n = f.MH(s, 0).boxCategory,
                        c = t.eventName.get(),
                        r = t.isShopVisible.get(),
                        l = t.computes.resources(),
                        i = l.images,
                        m = l.texts,
                        u = l.sounds,
                        d = t.computes.dynamicResources().dynamicTexts,
                        g = t.computes.settings().tabsGuaranteedCount,
                        p = s.length > 1,
                        b = p ? m.eventName : d.boxName.dynOpt(n);
                    return a().createElement(
                        'div',
                        { className: V },
                        a().createElement(T.h, { title: b, className: G }),
                        a().createElement(
                            'div',
                            { className: O },
                            a().createElement('div', { className: S }),
                            a().createElement(
                                'div',
                                { className: M },
                                i.noBoxes && a().createElement(R, { images: i, classNames: P }),
                                a().createElement(H.D, {
                                    text: a().createElement(k.z, { text: m.description }),
                                    alignType: H.M.Center,
                                    className: D,
                                }),
                                r &&
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(I.X, {
                                            text: m.buyBoxesButtonText,
                                            onClick: () => {
                                                y.hY.sound(u.purchaseClick), o.buyBoxes();
                                            },
                                            soundHover: u.purchaseHover,
                                        }),
                                    ),
                            ),
                            p &&
                                a().createElement(
                                    'div',
                                    { className: j },
                                    a().createElement(A.mQ, {
                                        tabs: s,
                                        texts: d.tabText,
                                        sounds: { switch: u.switch, entryHover: u.entryHover },
                                        icons: {
                                            slotGlow: i.slotGlow,
                                            numberGlow: i.guaranteedGlowIcon,
                                            glowIcon: i.glowIcon,
                                            guaranteedIco: i.guaranteedIco,
                                        },
                                        tabsGuaranteedCount: g,
                                        eventName: c,
                                    }),
                                ),
                        ),
                    );
                }),
                L = 'App_base_d8',
                Y = 'App_layer_5f',
                $ = 'App_infoButtons_24',
                F = 'App_statsButton_91',
                J = 'App_closeButton_80',
                K = 'App_popover_43',
                U = { context: 'model.noBoxes.statistics' },
                W = (0, l.Pi)(() => {
                    const e = (0, s.useState)(!1),
                        t = e[0],
                        o = e[1],
                        n = h(),
                        l = n.model,
                        d = n.controls,
                        g = l.computes.resources(),
                        p = g.texts,
                        b = g.images,
                        x = l.useStats.get(),
                        B = l.computes.backgroundData();
                    return (
                        (0, r.I9)(d.close),
                        a().createElement(
                            'div',
                            { className: L },
                            a().createElement(i.z, { className: Y, layer: B, loop: !0, autoplay: !0 }),
                            a().createElement(
                                'div',
                                { className: $ },
                                x &&
                                    a().createElement(m.g, {
                                        onClick: () => o(!0),
                                        className: F,
                                        label: p.statsButton,
                                        icon: b.statsIcon,
                                    }),
                                a().createElement(c.A, {
                                    caption: p.infoButton,
                                    type: 'info',
                                    side: 'left',
                                    onClick: d.openInfoPage,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: J },
                                a().createElement(c.A, {
                                    caption: p.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: d.close,
                                }),
                            ),
                            a().createElement(q, null),
                            t &&
                                a().createElement(u.g, {
                                    options: U,
                                    onHidden: () => o(!1),
                                    isStatsEnabled: x,
                                    className: K,
                                }),
                        )
                    );
                }),
                Z = () => a().createElement(E, { options: n.f.NO_BOXES }, a().createElement(W, null));
        },
        1579: (e, t, o) => {
            o.d(t, { X: () => i });
            var s = o(3457),
                a = o(2106),
                n = o(7363),
                c = o.n(n);
            const r = 'BigButton_button_76',
                l = 'BigButton_text_35',
                i = ({ text: e, onClick: t, soundHover: o = null }) =>
                    c().createElement(
                        s.u5,
                        { type: a.L.main, soundHover: o, onClick: t, mixClass: r },
                        c().createElement('span', { className: l }, e),
                    );
        },
    },
]);
