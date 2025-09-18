import { m as e, j as s, e as o, n as t, r as a } from './vendor.js';
import { H as n, S as c, A as r, M as i } from './use_cover_size.js';
import { d as l, B as u, R as m, S as d, a as x } from './resource_layer.js';
import { i as p, O as g, $ as b, k as j, n as B, d as v, T as w } from './lib.js';
import { a as _, g as N, C as f } from './resources.js';
import { g as h } from './getConfig.js';
import { S as C } from './sounds.js';
import { B as y } from './big_button.js';
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
            purchaseClick: C.purchaseClick,
            purchaseHover: C.purchaseHover,
            entryHover: C.entryHover,
            switch: C.switch,
        },
    },
    I = { dynamicTexts: { boxName: 'common.boxCategory.upperCase', tabText: 'hasBoxesView.guaranteedTitle.tabText' } },
    [A, H] = p()(
        ({ observableModel: s }) => {
            const o = {
                    ...s.primitives(['eventName', 'useStats', 'isShopVisible']),
                    boxesInfo: s.arrayClone('boxesInfo'),
                },
                t = e(() => _(k, o.eventName.get())),
                a = e(() => N(I, o.eventName.get())),
                n = e(() => h(o.eventName.get(), f.HasBoxesView)),
                c = g.isHigh(),
                r = e(() => {
                    const { images: e, videos: s } = t(),
                        o = c ? s.background : '';
                    return l(e.background, o);
                });
            return { ...o, computes: { resources: t, dynamicResources: a, backgroundData: r, settings: n } };
        },
        ({ externalModel: e }) => ({
            openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
            close: e.createCallbackNoArgs('onClose'),
            buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
        }),
    ),
    V = { base: 'NoBoxesAsset_c59c6303' };
function T({ images: e, classNames: t = '' }) {
    return s.jsx('div', { className: o(V.base, t), style: { backgroundImage: `url(${e.noBoxes})` } });
}
const G = 'Content_6bc5ecbd',
    S = 'Content_header_4cb94446',
    O = 'Content_wrapper_85b923bd',
    R = 'Content_shadow_1fb6909c',
    M = 'Content_5b2426e4',
    D = 'Content_noBoxes_c686aa08',
    E = 'Content_tabs_73a43acc',
    P = 'Content_subTitle_711c70aa';
const $ = t(function () {
        const { model: e, controls: o } = H(),
            t = e.boxesInfo.get(),
            { boxCategory: a } = b(t, 0),
            i = e.eventName.get(),
            l = e.isShopVisible.get(),
            { images: m, texts: d, sounds: x } = e.computes.resources(),
            { dynamicTexts: p } = e.computes.dynamicResources(),
            { tabsGuaranteedCount: g } = e.computes.settings(),
            v = t.length > 1,
            w = v ? d.eventName : p.boxName.dynOpt(a);
        return s.jsxs('div', {
            className: G,
            children: [
                s.jsx(n, { title: w, className: S }),
                s.jsxs('div', {
                    className: O,
                    children: [
                        s.jsx('div', { className: R }),
                        s.jsxs('div', {
                            className: M,
                            children: [
                                m.noBoxes && s.jsx(T, { images: m, classNames: D }),
                                s.jsx(c, {
                                    text: s.jsx(j, { text: d.description }),
                                    alignType: r.Center,
                                    className: P,
                                }),
                                l &&
                                    s.jsx('div', {
                                        children: s.jsx(y, {
                                            text: d.buyBoxesButtonText,
                                            onClick: () => {
                                                (B.sound(x.purchaseClick), o.buyBoxes());
                                            },
                                            soundHover: x.purchaseHover,
                                        }),
                                    }),
                            ],
                        }),
                        v &&
                            s.jsx('div', {
                                className: E,
                                children: s.jsx(u, {
                                    tabs: t,
                                    texts: p.tabText,
                                    sounds: { switch: x.switch, entryHover: x.entryHover },
                                    icons: {
                                        slotGlow: m.slotGlow,
                                        numberGlow: m.guaranteedGlowIcon,
                                        glowIcon: m.glowIcon,
                                        guaranteedIco: m.guaranteedIco,
                                    },
                                    tabsGuaranteedCount: g,
                                    eventName: i,
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    z = 'App_6780b142',
    X = 'App_layer_bb0bfe54',
    q = 'App_infoButtons_64e9db92',
    F = 'App_statsButton_403e9f7b',
    J = 'App_closeButton_96e37994',
    K = 'App_popover_e06fed7f',
    L = { context: 'model.noBoxes.statistics' };
const Q = t(function () {
        const [e, o] = a.useState(!1),
            { model: t, controls: n } = H(),
            { texts: c, images: r } = t.computes.resources(),
            i = t.useStats.get(),
            l = t.computes.backgroundData();
        return (
            v(n.close),
            s.jsxs('div', {
                className: z,
                children: [
                    s.jsx(m, { className: X, layer: l, loop: !0, autoplay: !0 }),
                    s.jsxs('div', {
                        className: q,
                        children: [
                            i &&
                                s.jsx(d, {
                                    onClick: () => o(!0),
                                    className: F,
                                    label: c.statsButton,
                                    icon: r.statsIcon,
                                }),
                            s.jsx(w, { caption: c.infoButton, type: 'info', side: 'left', onClick: n.openInfoPage }),
                        ],
                    }),
                    s.jsx('div', {
                        className: J,
                        children: s.jsx(w, { caption: c.closeButton, type: 'close', side: 'right', onClick: n.close }),
                    }),
                    s.jsx($, {}),
                    e && s.jsx(x, { options: L, onHidden: () => o(!1), isStatsEnabled: i, className: K }),
                ],
            })
        );
    }),
    U = () => s.jsx(A, { options: i.NO_BOXES, children: s.jsx(Q, {}) });
export { U as default };
