'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [984],
    {
        3503: (e, t, o) => {
            o.r(t), o.d(t, { default: () => Z });
            var n = o(7363),
                s = o.n(n),
                a = o(8958),
                c = o(8089),
                r = o(8526),
                l = o(3403),
                i = o(4707),
                u = o(3727),
                m = o(3720),
                d = o(3215),
                x = o(3946),
                g = o(3905),
                p = o(9217),
                B = o(1440),
                b = o(7366),
                v = o(9674);
            const C = {
                    videos: { background: 'noBoxesView.background' },
                    images: {
                        externalLink: 'common.externalLinkWhite',
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
                        descriptionCn: 'noBoxesView.descriptionCn',
                        buyBoxesButtonText: 'noBoxesView.buyBoxesButtonText',
                        buyBoxesButtonTextCn: 'noBoxesView.buyBoxesButtonTextCn',
                        eventName: 'eventName.upperCase',
                    },
                    sounds: {
                        purchaseClick: v.T.purchaseClick,
                        purchaseHover: v.T.purchaseHover,
                        entryHover: v.T.entryHover,
                        switch: v.T.switch,
                    },
                },
                _ = {
                    dynamicTexts: {
                        boxName: 'common.boxCategory.upperCase',
                        tabText: 'hasBoxesView.guaranteedTitle.tabText',
                    },
                },
                N = (0, d.q3)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign(
                                {},
                                e.primitives(['useExternal', 'eventName', 'useStats', 'isShopVisible']),
                                { boxesInfo: e.array('boxesInfo') },
                            ),
                            o = (0, x.Om)(() => (0, b.jh)(C, t.eventName.get())),
                            n = (0, x.Om)(() => (0, b.kC)(_, t.eventName.get())),
                            s = (0, x.Om)(() => (0, B.i)(t.eventName.get(), g.N7.HasBoxesView)),
                            a = (0, x.Om)(() => {
                                const e = o(),
                                    t = e.images,
                                    n = e.videos;
                                return (0, p.k)(t.background, n.background);
                            });
                        return Object.assign({}, t, {
                            computes: { resources: o, dynamicResources: n, backgroundData: a, settings: s },
                        });
                    },
                    ({ externalModel: e }) => ({
                        openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
                        close: e.createCallbackNoArgs('onClose'),
                        buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                    }),
                ),
                w = N[0],
                k = N[1];
            var E = o(9766),
                y = o(514),
                h = o(9480),
                I = o(1579),
                f = o(4037),
                T = o(845),
                H = o(6974),
                V = o(8455);
            const A = 'Content_base_6c',
                G = 'Content_header_81',
                O = 'Content_wrapper_6f',
                S = 'Content_shadow_a1',
                L = 'Content_content_34',
                M = 'Content_noBoxes_b3',
                P = 'Content_tabs_a1',
                j = 'Content_subTitle_23';
            var D = o(6483),
                X = o.n(D);
            const z = 'NoBoxesAsset_base_9a',
                R = ({ images: e, classNames: t = '' }) =>
                    s().createElement('div', { className: X()(z, t), style: { backgroundImage: `url(${e.noBoxes})` } }),
                $ = (0, l.Pi)(() => {
                    const e = k(),
                        t = e.model,
                        o = e.controls,
                        n = t.boxesInfo.get(),
                        a = h.MH(n, 0).boxCategory,
                        c = t.useExternal.get(),
                        r = t.eventName.get(),
                        l = t.isShopVisible.get(),
                        i = t.computes.resources(),
                        u = i.images,
                        m = i.texts,
                        d = i.sounds,
                        x = t.computes.dynamicResources().dynamicTexts,
                        g = t.computes.settings().tabsGuaranteedCount,
                        p = n.length > 1,
                        B = p ? m.eventName : x.boxName.dynOpt(a),
                        b = () => {
                            y.hY.sound(d.purchaseClick), o.buyBoxes();
                        };
                    return s().createElement(
                        'div',
                        { className: A },
                        s().createElement(H.h, { title: B, className: G }),
                        s().createElement(
                            'div',
                            { className: O },
                            s().createElement('div', { className: S }),
                            s().createElement(
                                'div',
                                { className: L },
                                u.noBoxes && s().createElement(R, { images: u, classNames: M }),
                                s().createElement(T.D, {
                                    text: s().createElement(E.z, { text: c ? m.descriptionCn : m.description }),
                                    alignType: T.M.Center,
                                    className: j,
                                }),
                                l &&
                                    (c
                                        ? s().createElement(f.n, {
                                              text: m.buyBoxesButtonTextCn,
                                              icon: u.externalLink,
                                              onClick: b,
                                              soundHover: d.purchaseHover,
                                          })
                                        : s().createElement(
                                              'div',
                                              null,
                                              s().createElement(I.X, {
                                                  text: m.buyBoxesButtonText,
                                                  onClick: b,
                                                  soundHover: d.purchaseHover,
                                              }),
                                          )),
                            ),
                            p &&
                                s().createElement(
                                    'div',
                                    { className: P },
                                    s().createElement(V.mQ, {
                                        tabs: n,
                                        texts: x.tabText,
                                        sounds: { switch: d.switch, entryHover: d.entryHover },
                                        icons: {
                                            slotGlow: u.slotGlow,
                                            numberGlow: u.guaranteedGlowIcon,
                                            glowIcon: u.glowIcon,
                                            guaranteedIco: u.guaranteedIco,
                                        },
                                        tabsGuaranteedCount: g,
                                        eventName: r,
                                    }),
                                ),
                        ),
                    );
                }),
                q = 'App_base_d8',
                Q = 'App_layer_5f',
                W = 'App_infoButtons_24',
                Y = 'App_statsButton_91',
                F = 'App_closeButton_80',
                J = 'App_popover_43',
                K = { context: 'model.noBoxes.statistics' },
                U = (0, l.Pi)(() => {
                    const e = (0, n.useState)(!1),
                        t = e[0],
                        o = e[1],
                        a = k(),
                        l = a.model,
                        d = a.controls,
                        x = l.computes.resources(),
                        g = x.texts,
                        p = x.images,
                        B = l.useStats.get(),
                        b = l.computes.backgroundData();
                    return (
                        (0, r.I9)(d.close),
                        s().createElement(
                            'div',
                            { className: q },
                            s().createElement(i.z, { className: Q, layer: b, loop: !0, autoplay: !0 }),
                            s().createElement(
                                'div',
                                { className: W },
                                B &&
                                    s().createElement(u.g, {
                                        onClick: () => o(!0),
                                        className: Y,
                                        label: g.statsButton,
                                        icon: p.statsIcon,
                                    }),
                                s().createElement(c.A, {
                                    caption: g.infoButton,
                                    type: 'info',
                                    side: 'left',
                                    onClick: d.openInfoPage,
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: F },
                                s().createElement(c.A, {
                                    caption: g.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: d.close,
                                }),
                            ),
                            s().createElement($, null),
                            t &&
                                s().createElement(m.g, {
                                    options: K,
                                    onHidden: () => o(!1),
                                    isStatsEnabled: B,
                                    className: J,
                                }),
                        )
                    );
                }),
                Z = () => s().createElement(w, { options: a.f.NO_BOXES }, s().createElement(U, null));
        },
        4037: (e, t, o) => {
            o.d(t, { n: () => u });
            var n = o(3457),
                s = o(2106),
                a = o(7363),
                c = o.n(a);
            const r = 'BigButtonIco_button_a6',
                l = 'BigButtonIco_text_94',
                i = 'BigButtonIco_icon_10',
                u = ({ text: e, icon: t, onClick: o, soundHover: a = null }) =>
                    c().createElement(
                        n.u5,
                        { type: s.L.main, soundHover: a, onClick: o, mixClass: r },
                        c().createElement(
                            'span',
                            { className: l },
                            e,
                            c().createElement('span', { className: i, style: { backgroundImage: `url(${t})` } }),
                        ),
                    );
        },
        1579: (e, t, o) => {
            o.d(t, { X: () => i });
            var n = o(3457),
                s = o(2106),
                a = o(7363),
                c = o.n(a);
            const r = 'BigButton_button_76',
                l = 'BigButton_text_35',
                i = ({ text: e, onClick: t, soundHover: o = null }) =>
                    c().createElement(
                        n.u5,
                        { type: s.L.main, soundHover: o, onClick: t, mixClass: r },
                        c().createElement('span', { className: l }, e),
                    );
        },
    },
]);
