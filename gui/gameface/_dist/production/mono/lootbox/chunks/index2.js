import { k as e, j as s, e as o, m as t, r as a } from './vendor.js';
import { S as n, A as r, M as c } from './use_cover_size.js';
import { d as i, P as l, R as u, S as m, B as d, a as x } from './statistics2.js';
import { i as p, P as g, k as b, n as j, a0 as B, d as w, T as h } from './lib.js';
import { a as f, g as C, C as N } from './resources.js';
import { g as v } from './getConfig.js';
import { S as y } from './sounds.js';
import { B as _ } from './big_button.js';
import './title.js';
import './utils.js';
import './title2.js';
import './getRewardImage.js';
import './scroll_with_lips.js';
import './statistics.js';
const k = {
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
            purchaseClick: y.purchaseClick,
            purchaseHover: y.purchaseHover,
            entryHover: y.entryHover,
            switch: y.switch,
        },
    },
    I = { dynamicTexts: { boxName: 'common.boxCategory.upperCase', tabText: 'hasBoxesView.guaranteedTitle.tabText' } },
    [S, A] = p()(
        ({ observableModel: s }) => {
            const o = {
                    ...s.primitives(['eventName', 'useStats', 'isShopVisible']),
                    boxesInfo: s.arrayClone('boxesInfo'),
                },
                t = e(() => f(k, o.eventName.get())),
                a = e(() => C(I, o.eventName.get())),
                n = e(() => v(o.eventName.get(), N.HasBoxesView)),
                r = g.isHigh(),
                c = e(() => {
                    const { images: e, videos: s } = t(),
                        o = r ? s.background : '';
                    return i(e.background, o);
                });
            return { ...o, computes: { resources: t, dynamicResources: a, backgroundData: c, settings: n } };
        },
        ({ externalModel: e }) => ({
            openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
            close: e.createCallbackNoArgs('onClose'),
            buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
        }),
    ),
    H = 'Asset_ebe8cb3e';
const V = 'Content_5b2426e4';
const T = 'Shadow_6b416642';
const G = { base: 'Body_4f642c84' };
function P({ children: e, className: t }) {
    return s.jsx('div', { className: o(G.base, t), children: e });
}
((P.Shadow = function ({ classNames: e = '' }) {
    return s.jsx('div', { className: o(T, e) });
}),
    (P.Asset = function ({ image: e, classNames: t = '' }) {
        return s.jsx('div', { className: o(H, t), style: { backgroundImage: `url(${e})` } });
    }),
    (P.Content = function ({ children: e, classNames: t = '' }) {
        return s.jsx('div', { className: o(V, t), children: e });
    }));
const O = 'Content_da09528a',
    R = 'Content_asset_c686aa08',
    M = 'Content_subTitle_711c70aa',
    D = 'Content_shadow_d31ad2ce';
const E = t(function () {
        const { model: e, controls: o } = A(),
            t = e.isShopVisible.get(),
            { images: a, texts: c, sounds: i } = e.computes.resources();
        return s.jsxs(P, {
            className: O,
            children: [
                s.jsx(P.Shadow, { classNames: D }),
                s.jsxs(P.Content, {
                    children: [
                        a.noBoxes && s.jsx(P.Asset, { image: a.noBoxes, classNames: R }),
                        s.jsx(n, { text: s.jsx(b, { text: c.description }), alignType: r.Center, className: M }),
                        t &&
                            s.jsx('div', {
                                children: s.jsx(_, {
                                    text: c.buyBoxesButtonText,
                                    onClick: () => {
                                        (j.sound(i.purchaseClick), o.buyBoxes());
                                    },
                                    soundHover: i.purchaseHover,
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    z = 'App_43bfa38',
    X = 'App_layer_bb0bfe54',
    $ = 'App_statsButton_403e9f7b',
    q = 'App_popover_e06fed7f',
    F = { context: 'model.noBoxes.statistics' };
const J = t(function () {
        const [e, o] = a.useState(!1),
            { model: t, controls: n } = A(),
            { texts: r, images: c, sounds: i } = t.computes.resources(),
            p = t.boxesInfo.get(),
            g = t.useStats.get(),
            { dynamicTexts: b } = t.computes.dynamicResources(),
            j = t.eventName.get(),
            { tabsGuaranteedCount: f } = t.computes.settings(),
            C = t.computes.backgroundData(),
            { boxCategory: N } = B(p, 0),
            v = p.length > 1,
            y = v ? r.eventName : b.boxName.dynOpt(N);
        return (
            w(n.close),
            s.jsxs(l, {
                className: z,
                children: [
                    s.jsx(u, { className: X, layer: C, loop: !0, autoplay: !0 }),
                    s.jsxs(l.PanelControls, {
                        children: [
                            g &&
                                s.jsx(m, {
                                    onClick: () => o(!0),
                                    className: $,
                                    label: r.statsButton,
                                    icon: c.statsIcon,
                                }),
                            s.jsx(h, { caption: r.infoButton, type: 'info', side: 'left', onClick: n.openInfoPage }),
                        ],
                    }),
                    s.jsx(l.Close, { text: r.closeButton, onClick: n.close }),
                    s.jsx(l.Heading, { text: y }),
                    s.jsx(l.Body, { children: s.jsx(E, {}) }),
                    v &&
                        s.jsx(l.Switcher, {
                            children: s.jsx(d, {
                                tabs: p,
                                texts: b.tabText,
                                sounds: { switch: i.switch, entryHover: i.entryHover },
                                icons: {
                                    slotGlow: c.slotGlow,
                                    numberGlow: c.guaranteedGlowIcon,
                                    glowIcon: c.glowIcon,
                                    guaranteedIco: c.guaranteedIco,
                                },
                                tabsGuaranteedCount: f,
                                eventName: j,
                            }),
                        }),
                    e && s.jsx(x, { options: F, onHidden: () => o(!1), isStatsEnabled: g, className: q }),
                ],
            })
        );
    }),
    K = () => s.jsx(S, { options: c.NO_BOXES, children: s.jsx(J, {}) });
export { K as default };
