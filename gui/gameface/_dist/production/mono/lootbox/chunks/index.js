import { r as e, j as o, e as t, o as s, k as a, f as n, m as i, h as r, i as c } from './vendor.js';
import { u as l, R as d, M as u } from './use_cover_size.js';
import { Q as p, L as m, A as x, P as b } from './quantity_title.js';
import { R as g, d as _, P as h, S as f, B as y, a as v } from './statistics2.js';
import {
    n as B,
    i as C,
    j as w,
    P as A,
    m as j,
    g as N,
    z as k,
    Q as O,
    A as S,
    U as I,
    V,
    W as E,
    F as L,
    C as T,
    f as H,
    B as P,
    X as M,
    Y as G,
    e as $,
    Z as R,
    T as q,
    _ as z,
    $ as W,
} from './lib.js';
import { a as Y, g as D, C as U, D as F, R as Q } from './resources.js';
import { u as X, h as Z } from '../views/main/main.html/bundle.js';
import { g as J } from './getConfig.js';
import { S as K } from './sounds.js';
import { G as ee } from './guaranteed.js';
import './title.js';
import './utils.js';
import './title2.js';
import './getRewardImage.js';
import './scroll_with_lips.js';
import './statistics.js';
const oe = 'Hover_55af9f42',
    te = 'Hover_hoverTrigger_82df64e5';
const se = 'Vignette_96c6d4bc';
const ae = { base: 'BoxLayout_5663f366' };
function ne({ children: e, style: s, className: a }) {
    return o.jsx('div', { className: t(ae.base, a), style: s, children: e });
}
((ne.Box = function ({ layer: t, onLoaded: s, sound: a, onVideoEnded: n, playVideo: i, onVideoPlay: r, className: c }) {
    return (
        e.useEffect(() => {
            i && B.sound(a);
        }, [a, i]),
        o.jsx('div', {
            className: c,
            children: o.jsx(g, { layer: t, onLoaded: s, onVideoEnded: n, playVideo: i, onVideoPlay: r }),
        })
    );
}),
    (ne.Hover = function ({ className: e, settings: s, wrapperSize: a, onMouseEnter: n, onMouseLeave: i, onClick: r }) {
        return o.jsx('div', {
            className: t(oe, e),
            style: a,
            children: o.jsx('div', {
                className: te,
                style: { width: s.width, height: s.height, top: s.verticalOffset, left: s.horizontalOffset },
                onMouseEnter: n,
                onMouseLeave: i,
                onClick: r,
            }),
        });
    }),
    (ne.Vignette = function ({ className: e, style: s }) {
        return o.jsx('div', { className: t(se, e), style: s });
    }));
const ie = {
        images: {
            iconEmpty: 'entry_point.lootboxEmpty',
            glowIcon: 'awardViews.glow',
            infoIcon: 'common.info',
            guaranteedGlowIcon: 'awardViews.guaranteedGlow',
            slotGlow: 'hasBoxesView.guaranteed.slotGlow',
            guaranteedIco: 'hasBoxesView.guaranteed.guaranteedIco',
            loader: 'common.waiting',
            statsIcon: 'statistics.stats',
        },
        texts: {
            infoButton: 'common.infoButton',
            closeButton: 'common.closeButton',
            statsButton: 'common.statsButton',
            guaranteedTitle: 'guaranteedTitle.text',
            guaranteedNextBox: 'guaranteedTitle.nextBox',
            quantityAvailableTitle: 'quantityTitle.boxesAvailable',
            quantityNoBoxesTitle: 'quantityTitle.noBoxes',
            footerPurchaseButtonText: 'common.getButton.upperCase',
            openButtonText: 'hasBoxesView.openButtonText',
            animationCheckbox: 'common.footer.checkbox',
            loader: 'common.loader',
        },
        sounds: {
            boxAppear: K.boxAppear,
            boxMouseEnter: K.boxMouseEnter,
            boxMouseLeave: K.boxMouseLeave,
            switch: K.switch,
            entryHover: K.entryHover,
            purchaseHover: K.purchaseHover,
            purchaseClick: K.purchaseClick,
        },
    },
    re = {
        dynamicVideos: {
            box: 'hasBoxesView.layers.box',
            idle: 'hasBoxesView.layers.idle',
            hover: 'hasBoxesView.layers.hover',
            background: 'hasBoxesView.layers.background',
        },
        dynamicImages: {
            box: 'hasBoxesView.layers.box',
            idle: 'hasBoxesView.layers.idle',
            hover: 'hasBoxesView.layers.hover',
            background: 'hasBoxesView.layers.background',
        },
        dynamicTexts: {
            boxCategory: 'common.boxCategory.upperCase',
            tabText: 'hasBoxesView.guaranteedTitle.tabText',
            numberOfBoxesToOpen: 'common.rewards.count',
        },
    },
    ce = 'common_sublayer',
    le = { idle: 'idle', background: 'background', box: 'box', hover: 'hover' },
    [de, ue] = C()(
        ({ observableModel: e }) => {
            const o = {
                    root: e.object(),
                    openingOptions: e.arrayClone('openingOptions'),
                    boxesInfo: e.arrayClone('boxesInfo'),
                    isBoxHovered: s.box(!1),
                    showAdditionalLayers: s.box(!1),
                },
                t = a(() => w(o.boxesInfo.get(), (e) => e.boxCategory === o.root.get().selectedBoxOption)),
                n = a(() => Y(ie, o.root.get().eventName)),
                i = a(() => D(re, o.root.get().eventName)),
                r = a(() => J(o.root.get().eventName, U.HasBoxesView)),
                c = a(() => {
                    const e = { [le.idle]: {}, [le.background]: {}, [le.box]: {}, [le.hover]: {} },
                        { dynamicImages: t, dynamicVideos: s } = i(),
                        a = A.isHigh();
                    return (
                        j(o.boxesInfo.get(), (o) => {
                            const n = o.boxCategory;
                            Object.values(le).forEach((o) => {
                                const i = t[o].dynOpt(n),
                                    r = s[o].dynOpt(n),
                                    c = _(i, a ? r : '');
                                c.src.includes(F) || ((e, o) => e.includes(`${o}/default`))(c.src, o)
                                    ? (e[o][ce] = c)
                                    : (e[o][n] = c);
                            });
                        }),
                        e
                    );
                }),
                l = a((e) => c()[e]),
                d = a((e) => Object.keys(l(e))),
                u = a(() => N(o.openingOptions.get(), o.root.get().selectedOpeningOption) || 1);
            return {
                ...o,
                computes: {
                    resources: n,
                    dynamicResources: i,
                    viewConfig: r,
                    openBoxesCount: u,
                    boxInfo: t,
                    sublayersNames: d,
                    extractSublayers: l,
                },
            };
        },
        ({ externalModel: e, model: o }) => {
            const t = e.createCallback((e) => ({ count: e }), 'onBoxesOpen'),
                s = e.createCallback((e) => ({ isAnimationActive: e }), 'onAnimationStateChanged');
            return {
                setIsBoxHovered: n((e) => o.isBoxHovered.set(e)),
                setShowAdditionalLayers: n((e) => o.showAdditionalLayers.set(e)),
                openBoxes: n(() => {
                    t(o.computes.openBoxesCount());
                }),
                setAnimationState: n((e) => {
                    s(e);
                }),
                changeAnimationState: n(() => {
                    s(!o.root.get().isAnimationActive);
                }),
                openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
                close: e.createCallbackNoArgs('onClose'),
                openingOptionChange: e.createCallback((e) => ({ openingOption: e }), 'onOpeningOptionChanged'),
                buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                resetError: e.createCallbackNoArgs('onResetError'),
                onBoxOptionChanged: e.createCallback((e) => ({ boxOption: e }), 'onBoxOptionChanged'),
            };
        },
    ),
    pe = 'CompositeScene_c16d0a29',
    me = 'CompositeScene_vignette_c16d0a29',
    xe = 'CompositeScene_box_ff78dbca',
    be = 'CompositeScene_idle_abfdd117',
    ge = 'CompositeScene_glow_15c55d55',
    _e = 'CompositeScene_background_88262b79',
    he = 'CompositeScene_background__show_5ad4ed30',
    fe = 'CompositeScene_glow__show_6d031a33',
    ye = 'CompositeScene_idle__show_314703c5',
    ve = 'CompositeScene_hover_63da4085',
    Be = 'CompositeScene_box__show_5ad4ed30',
    Ce = 'CompositeScene_base__graphicsHigh_c16d0a29';
const we = i(function ({ onClick: s, onLoaded: a }) {
        const { model: n, controls: i } = ue(),
            { model: r } = X(),
            { selectedBoxOption: c } = n.root.get(),
            { hasIdle: u, vignette: p, hoverZone: m, backgroundColor: x } = n.computes.viewConfig(),
            { sounds: b } = n.computes.resources(),
            _ = n.showAdditionalLayers.get(),
            h = n.isBoxHovered.get(),
            f = r.subViewIDs.get(),
            y = Z(f),
            v = A.isHigh(),
            C = n.computes.sublayersNames(le.background),
            w = n.computes.sublayersNames(le.box),
            j = n.computes.sublayersNames(le.hover),
            N = n.computes.sublayersNames(le.idle),
            O = u && v,
            S = l(Q),
            [I, V] = e.useState(!1),
            E = ((o, t) => {
                const [s, a] = e.useState(0),
                    n = e.useCallback(() => {
                        a((e) => e + 1);
                    }, []);
                return (
                    e.useEffect(() => {
                        s === o && t();
                    }, [s, o]),
                    n
                );
            })(C.length + w.length + j.length + Number(O) * N.length, () => {
                (V(!0), a());
            }),
            L = () => i.setShowAdditionalLayers(!0),
            T = () => i.setShowAdditionalLayers(!1),
            H = () => {
                (B.sound(b.boxMouseLeave), i.setIsBoxHovered(!1));
            },
            P = (e, o) => {
                const t = n.computes.extractSublayers(e);
                return { active: o === (Boolean(t[c]) ? c : ce), resource: t[o] };
            };
        return (
            e.useEffect(() => {
                const e = n.computes.extractSublayers(le.box),
                    o = e[c] || e[ce];
                return k(() => {
                    (null == o ? void 0 : o.type) === d.image && i.setShowAdditionalLayers(!0);
                });
            }, [c]),
            o.jsxs(ne, {
                className: t(pe, v && Ce),
                style: { backgroundColor: x },
                children: [
                    C.map((e) => {
                        const { active: s, resource: a } = P(le.background, e);
                        return o.jsx(
                            g,
                            {
                                className: t(_e, s && he),
                                layer: a,
                                loop: !0,
                                onLoaded: E,
                                playVideo: I && (null == a ? void 0 : a.type) === d.video && s,
                            },
                            `${le.background}_${e}`,
                        );
                    }),
                    w.map((e) => {
                        const { active: s, resource: a } = P(le.box, e);
                        return o.jsx(
                            ne.Box,
                            {
                                className: t(xe, s && Be),
                                layer: a,
                                sound: b.boxAppear,
                                onLoaded: E,
                                onVideoEnded: L,
                                playVideo: I && (null == a ? void 0 : a.type) === d.video && s,
                                onVideoPlay: T,
                            },
                            `${le.box}_${e}`,
                        );
                    }),
                    !y &&
                        j.map((e) => {
                            const { active: s, resource: a } = P(le.hover, e);
                            return o.jsx(
                                g,
                                {
                                    className: t(ge, _ && s && h && fe),
                                    layer: a,
                                    onLoaded: E,
                                    playVideo: I && (null == a ? void 0 : a.type) === d.video && s,
                                    loop: !0,
                                    shouldCleanUp: !0,
                                },
                                `${le.hover}_${e}`,
                            );
                        }),
                    O &&
                        !y &&
                        N.map((e) => {
                            const { active: s, resource: a } = P(le.idle, e);
                            return o.jsx(
                                g,
                                {
                                    className: t(be, _ && s && ye),
                                    playVideo: I && (null == a ? void 0 : a.type) === d.video && s,
                                    layer: a,
                                    onLoaded: E,
                                    loop: !0,
                                    shouldCleanUp: !0,
                                },
                                `${le.idle}_${e}`,
                            );
                        }),
                    p.isEnabled && o.jsx(ne.Vignette, { className: me, style: { opacity: p.opacity } }),
                    _ &&
                        o.jsx(ne.Hover, {
                            className: ve,
                            settings: m,
                            wrapperSize: S,
                            onMouseEnter: () => {
                                (B.sound(b.boxMouseEnter), i.setIsBoxHovered(!0));
                            },
                            onMouseLeave: H,
                            onClick: () => {
                                y || (H(), B.click(), s());
                            },
                        }),
                ],
            })
        );
    }),
    Ae = { from: { opacity: 0, transform: 'translateY(-15rem)' }, delay: 100, config: { duration: 250 } },
    je = { from: { opacity: 0, transform: 'translateY(15rem)' }, delay: 100, config: { duration: 250 } },
    Ne = { to: { opacity: 1, transform: 'translateY(0rem)' } },
    ke = (e) => ({ to: { opacity: 0 }, config: { duration: 0 }, onRest: e }),
    Oe = { to: { opacity: 1 }, config: { duration: 250 } },
    Se = 'Buttons_82277d53';
const Ie = 'OpenPanel_18940500';
function Ve({ children: e, className: s }) {
    return o.jsx('div', { className: t(Ie, s), children: e });
}
Ve.Buttons = function ({ children: e, className: s }) {
    return o.jsx('div', { className: t(Se, s), children: e });
};
const Ee = 'BoxOpenPanel_1640485f',
    Le = 'BoxOpenPanel_guaranteedTitle_a6536b4f',
    Te = 'BoxOpenPanel_buttons_a6536b4f',
    He = 'BoxOpenPanel_button_68661221',
    Pe = 'BoxOpenPanel_button__withCheckboxes_72d0aea0',
    Me = 'BoxOpenPanel_toggleButton_1d7e74c9',
    Ge = 'BoxOpenPanel_toggleButton__normal_1640485f',
    $e = 'BoxOpenPanel_toggleButton__notFirst_a175f8f',
    Re = 'BoxOpenPanel_toggleButton__active_bc254eb1',
    qe = i(({ openClick: s, className: a }) => {
        const { model: n, controls: i } = ue(),
            { model: r } = X(),
            { texts: c, images: l, sounds: d } = n.computes.resources(),
            { dynamicTexts: u } = n.computes.dynamicResources(),
            { accentCount: m } = n.computes.viewConfig(),
            { boxesCount: x, boxesCountToGuaranteed: b, boxCategory: g } = n.computes.boxInfo(),
            _ = n.openingOptions.get(),
            h = _.length > 1,
            f = n.computes.openBoxesCount(),
            { eventName: y } = n.root.get(),
            v = r.subViewIDs.get(),
            C = Z(v),
            w = { boxesToGuaranteed: b, accent: m },
            A = { title: c.guaranteedTitle, nextBox: c.guaranteedNextBox },
            N = { glow: l.glowIcon, info: l.infoIcon, strongGlow: l.guaranteedGlowIcon },
            k = () => {
                (B.sound(d.boxMouseLeave), i.setIsBoxHovered(!1));
            },
            S = O(
                () => {
                    C || s();
                },
                [C, s],
                1100,
            );
        I(M.SPACE, S);
        return (
            e.useEffect(() => {
                f > x && i.openingOptionChange(0);
            }, [x, i, f, g]),
            o.jsxs(Ve, {
                className: t(Ee, a),
                children: [
                    b > 0 && o.jsx(ee, { texts: A, icons: N, counts: w, category: g, className: Le, eventName: y }),
                    o.jsxs(Ve.Buttons, {
                        className: Te,
                        children: [
                            h &&
                                j(_, (e, s) =>
                                    o.jsx(
                                        V,
                                        {
                                            toggleType: E.Slot,
                                            active: e === f,
                                            disabled: e > x,
                                            className: t(Me, s > 0 && $e, e === f && Re, e <= x && Ge),
                                            onClick: () =>
                                                ((e) => {
                                                    i.openingOptionChange(e);
                                                })(s),
                                            children: o.jsx(L, {
                                                text: u.numberOfBoxesToOpen.plural('count', e),
                                                binding: { count: e },
                                            }),
                                        },
                                        s + e,
                                    ),
                                ),
                            o.jsx(T, {
                                size: P.medium,
                                type: H.main,
                                onClick: () => {
                                    C || (k(), s());
                                },
                                soundHover: d.boxMouseEnter,
                                mixClass: t(He, h && Pe),
                                onMouseEnter: () => i.setIsBoxHovered(!0),
                                onMouseLeave: k,
                                children: c.openButtonText,
                            }),
                        ],
                    }),
                    o.jsx(p, { text: x ? c.quantityAvailableTitle : c.quantityNoBoxesTitle, boxesCount: x }),
                ],
            })
        );
    }),
    ze = {
        root: 'App_root_0',
        base: 'App_f851716e',
        boxLayout: 'App_boxLayout_d3aa6393',
        base__prepareAnimation: 'App_base__prepareAnimation_0',
        base__openViewAnimation: 'App_base__openViewAnimation_0',
        fadeIn: 'App_fadeIn_0',
        panelControls: 'App_panelControls_b1f58b8d',
        base__waitAnimation: 'App_base__waitAnimation_0',
        fadeOut: 'App_fadeOut_0',
        base__backAnimation: 'App_base__backAnimation_0',
        statsButton: 'App_statsButton_403e9f7b',
        info: 'App_info_9b3576c7',
        close: 'App_close_b1f58b8d',
        headerAnimation: 'App_headerAnimation_c3dc2c23',
        footer: 'App_footer_2fbd33f6',
        checkbox: 'App_checkbox_194935ee',
        purchaseButton: 'App_purchaseButton_59ab22a9',
        loader: 'App_loader_9754cd35',
        fadeInWait: 'App_fadeInWait_0',
        tabs: 'App_tabs_7a430c78',
        popover: 'App_popover_e06fed7f',
        contentWrapper: 'App_contentWrapper_3bce0eb1',
        shiftTop: 'App_shiftTop_0',
        shiftBottom: 'App_shiftBottom_0',
    },
    We = { context: 'model.hasBoxes.statistics' },
    Ye = 'initial',
    De = 'prepare',
    Ue = 'back',
    Fe = 'wait',
    Qe = 'openView';
const Xe = i(function () {
        var s;
        const { model: a, controls: n } = ue(),
            { model: i } = X(),
            {
                isAnimationActive: l,
                isError: d,
                eventName: u,
                useStats: p,
                selectedBoxOption: g,
                isShopVisible: _,
            } = a.root.get(),
            C = i.overlayClosed.get(),
            w = i.computes.awardViewOpened(),
            { texts: j, images: N, sounds: k } = a.computes.resources(),
            { dynamicTexts: S } = a.computes.dynamicResources(),
            I = a.boxesInfo.get(),
            { tabsGuaranteedCount: V } = a.computes.viewConfig(),
            E = null == (s = a.computes.boxInfo()) ? void 0 : s.boxesCount,
            [L, T] = e.useState(!1),
            [H, P] = e.useState(!1),
            [M, Y] = e.useState(Ye),
            {
                breakpoint: { weight: D },
            } = G(),
            U = O(() => n.openBoxes(), [n], 1100),
            [F, Q] = r(() => Ae),
            [Z, J] = r(() => je),
            K = () => {
                (a.isBoxHovered.get() && B.sound(k.boxMouseLeave), H || n.close());
            };
        $(K);
        const ee = () => {
                (P(!0), n.setShowAdditionalLayers(!1), Q.start(ke()), J.start(ke()), Y(Fe));
            },
            oe = () => {
                (Q.start(Oe), J.start(Oe));
            };
        return (
            e.useEffect(() => {
                M === Fe && R(U, 250);
            }, [M, U]),
            e.useEffect(() => {
                d && (P(!1), Y(Ue), oe(), n.resetError());
            }, [d]),
            e.useEffect(() => {
                C && (Y(Ue), oe(), n.setShowAdditionalLayers(!0));
            }, [C]),
            e.useEffect(() => {
                w && H && P(!1);
            }, [w]),
            e.useEffect(() => {
                A.isLow() && n.setAnimationState(!1);
            }, [n]),
            e.useEffect(() => {
                (Y(De), P(!1));
            }, []),
            o.jsxs(h, {
                className: t(ze.base, ze[`base__${M}Animation`]),
                children: [
                    o.jsxs(h.PanelControls, {
                        className: ze.panelControls,
                        children: [
                            p &&
                                o.jsx(f, {
                                    onClick: () => T(!0),
                                    className: ze.statsButton,
                                    label: j.statsButton,
                                    icon: N.statsIcon,
                                }),
                            o.jsx(q, {
                                caption: j.infoButton,
                                type: 'info',
                                side: 'left',
                                onClick: () => {
                                    H || n.openInfoPage();
                                },
                                classNames: { base: ze.info },
                            }),
                        ],
                    }),
                    o.jsx(h.Close, { className: ze.close, text: j.closeButton, onClick: K }),
                    o.jsx(c.div, {
                        style: F,
                        className: ze.headerAnimation,
                        children: o.jsx(h.Heading, { text: S.boxCategory.dynOpt(g) }),
                    }),
                    o.jsxs(h.Body, {
                        children: [
                            o.jsx(we, {
                                onClick: ee,
                                onLoaded: () => {
                                    (Y(Qe), Q.start(Ne), J.start(Ne));
                                },
                                className: ze.boxLayout,
                            }),
                            o.jsxs('div', {
                                className: ze.footer,
                                children: [
                                    o.jsx(c.div, { style: Z, children: o.jsx(qe, { openClick: ee }) }),
                                    H && o.jsx(m, { className: ze.loader, text: j.loader, img: N.loader }),
                                ],
                            }),
                            A.isHigh() &&
                                o.jsx(x, {
                                    isActive: l,
                                    onClick: n.changeAnimationState,
                                    className: ze.checkbox,
                                    text: j.animationCheckbox,
                                    size: D >= W.medium.weight ? z.extraLarge : z.large,
                                }),
                            _ &&
                                E &&
                                E > 0 &&
                                o.jsx(b, {
                                    text: j.footerPurchaseButtonText,
                                    image: N.iconEmpty,
                                    sounds: k,
                                    onClick: n.buyBoxes,
                                    className: ze.purchaseButton,
                                }),
                        ],
                    }),
                    I.length > 1 &&
                        o.jsx(h.Switcher, {
                            className: ze.tabs,
                            children: o.jsx(y, {
                                tabs: I,
                                changeTab: (e) => {
                                    H ||
                                        (e !== g &&
                                            (n.onBoxOptionChanged(e),
                                            Q.start(ke(() => Q.start(Oe))),
                                            J.start(ke(() => J.start(Oe)))));
                                },
                                active: g,
                                texts: S.tabText,
                                sounds: { switch: k.switch, entryHover: k.entryHover },
                                icons: {
                                    slotGlow: N.slotGlow,
                                    numberGlow: N.guaranteedGlowIcon,
                                    glowIcon: N.glowIcon,
                                    guaranteedIco: N.guaranteedIco,
                                },
                                tabsGuaranteedCount: V,
                                startAnimation: M === Qe,
                                eventName: u,
                            }),
                        }),
                    L && o.jsx(v, { options: We, onHidden: () => T(!1), isStatsEnabled: p, className: ze.popover }),
                ],
            })
        );
    }),
    Ze = () => o.jsx(de, { options: u.HAS_BOXES, children: o.jsx(Xe, {}) });
export { Ze as default };
