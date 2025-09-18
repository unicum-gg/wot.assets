import { o as e, m as o, f as t, r as s, j as a, e as n, n as i, h as r, i as c } from './vendor.js';
import { u as l, R as d, H as u, M as p } from './use_cover_size.js';
import { Q as x, L as m, A as b, P as g } from './quantity_title.js';
import { d as _, R as h, S as y, B as f, a as v } from './resource_layer.js';
import { u as B, h as C } from '../views/main/main.html/bundle.js';
import {
    i as w,
    h as A,
    O as j,
    m as k,
    g as N,
    n as L,
    y as I,
    P as T,
    z as O,
    Q as V,
    U as E,
    V as S,
    k as H,
    C as M,
    e as G,
    B as P,
    W as $,
    X as R,
    d as q,
    Y as z,
    T as W,
    Z as Y,
    _ as D,
} from './lib.js';
import { a as U, g as Q, C as X, D as Z, R as F } from './resources.js';
import { g as J } from './getConfig.js';
import { S as K } from './sounds.js';
import { G as ee } from './guaranteed.js';
import './title.js';
import './utils.js';
import './title2.js';
import './getRewardImage.js';
import './scroll_with_lips.js';
import './statistics.js';
const oe = { from: { opacity: 0, transform: 'translateY(-15rem)' }, delay: 100, config: { duration: 250 } },
    te = { from: { opacity: 0, transform: 'translateY(15rem)' }, delay: 100, config: { duration: 250 } },
    se = { to: { opacity: 1, transform: 'translateY(0rem)' } },
    ae = (e) => ({ to: { opacity: 0 }, config: { duration: 0 }, onRest: e }),
    ne = { to: { opacity: 1 }, config: { duration: 250 } },
    ie = {
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
    [de, ue] = w()(
        ({ observableModel: t }) => {
            const s = {
                    root: t.object(),
                    openingOptions: t.arrayClone('openingOptions'),
                    boxesInfo: t.arrayClone('boxesInfo'),
                    isBoxHovered: e.box(!1),
                    showAdditionalLayers: e.box(!1),
                },
                a = o(() => A(s.boxesInfo.get(), (e) => e.boxCategory === s.root.get().selectedBoxOption)),
                n = o(() => U(ie, s.root.get().eventName)),
                i = o(() => Q(re, s.root.get().eventName)),
                r = o(() => J(s.root.get().eventName, X.HasBoxesView)),
                c = o(() => {
                    const e = { [le.idle]: {}, [le.background]: {}, [le.box]: {}, [le.hover]: {} },
                        { dynamicImages: o, dynamicVideos: t } = i(),
                        a = j.isHigh();
                    return (
                        k(s.boxesInfo.get(), (s) => {
                            const n = s.boxCategory;
                            Object.values(le).forEach((s) => {
                                const i = o[s].dynOpt(n),
                                    r = t[s].dynOpt(n),
                                    c = _(i, a ? r : '');
                                c.src.includes(Z) || ((e, o) => e.includes(`${o}/default`))(c.src, s)
                                    ? (e[s][ce] = c)
                                    : (e[s][n] = c);
                            });
                        }),
                        e
                    );
                }),
                l = o((e) => c()[e]),
                d = o((e) => Object.keys(l(e))),
                u = o(() => N(s.openingOptions.get(), s.root.get().selectedOpeningOption) || 1);
            return {
                ...s,
                computes: {
                    resources: n,
                    dynamicResources: i,
                    viewConfig: r,
                    openBoxesCount: u,
                    boxInfo: a,
                    sublayersNames: d,
                    extractSublayers: l,
                },
            };
        },
        ({ externalModel: e, model: o }) => {
            const s = e.createCallback((e) => ({ count: e }), 'onBoxesOpen'),
                a = e.createCallback((e) => ({ isAnimationActive: e }), 'onAnimationStateChanged');
            return {
                setIsBoxHovered: t((e) => o.isBoxHovered.set(e)),
                setShowAdditionalLayers: t((e) => o.showAdditionalLayers.set(e)),
                openBoxes: t(() => {
                    s(o.computes.openBoxesCount());
                }),
                setAnimationState: t((e) => {
                    a(e);
                }),
                changeAnimationState: t(() => {
                    a(!o.root.get().isAnimationActive);
                }),
                openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
                close: e.createCallbackNoArgs('onClose'),
                openingOptionChange: e.createCallback((e) => ({ openingOption: e }), 'onOpeningOptionChanged'),
                buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                resetError: e.createCallbackNoArgs('onResetError'),
                onBoxOptionChanged: e.createCallback((e) => ({ boxOption: e }), 'onBoxOptionChanged'),
            };
        },
    );
function pe({ layer: e, onLoaded: o, sound: t, onVideoEnded: n, playVideo: i, onVideoPlay: r }) {
    return (
        s.useEffect(() => {
            i && L.sound(t);
        }, [t, i]),
        a.jsx(h, { layer: e, onLoaded: o, onVideoEnded: n, playVideo: i, onVideoPlay: r })
    );
}
const xe = { base: 'HoverTrigger_b68c1b59', hoverTrigger: 'HoverTrigger_hoverTrigger_22d0f756' };
function me({ className: e, settings: o, wrapperSize: t, onMouseEnter: s, onMouseLeave: i, onClick: r }) {
    return a.jsx('div', {
        className: n(xe.base, e),
        style: t,
        children: a.jsx('div', {
            className: xe.hoverTrigger,
            style: { width: o.width, height: o.height, top: o.verticalOffset, left: o.horizontalOffset },
            onMouseEnter: s,
            onMouseLeave: i,
            onClick: r,
        }),
    });
}
const be = 'BoxLayout_5663f366',
    ge = 'BoxLayout_layer_2b93ddd9',
    _e = 'BoxLayout_layer__show_935c6fbf',
    he = 'BoxLayout_glow_45e50070',
    ye = 'BoxLayout_glow__show_47d081f',
    fe = 'BoxLayout_idle_4cd3e814',
    ve = 'BoxLayout_idle__show_fbcb8b95',
    Be = 'BoxLayout_hoverTrigger_a86e7877',
    Ce = 'BoxLayout_box_eb7acf12',
    we = 'BoxLayout_box__show_935c6fbf',
    Ae = 'BoxLayout_base__graphicsHigh_9c8a2c10',
    je = 'BoxLayout_vignette_e4d8f8d1';
const ke = i(function ({ onClick: e, className: o, onLoaded: t }) {
        const { model: i, controls: r } = ue(),
            { model: c } = B(),
            { selectedBoxOption: u } = i.root.get(),
            { hasIdle: p, vignette: x, hoverZone: m, backgroundColor: b } = i.computes.viewConfig(),
            { sounds: g } = i.computes.resources(),
            _ = i.showAdditionalLayers.get(),
            y = i.isBoxHovered.get(),
            f = c.subViewIDs.get(),
            v = C(f),
            w = j.isHigh(),
            A = i.computes.sublayersNames(le.background),
            k = i.computes.sublayersNames(le.box),
            N = i.computes.sublayersNames(le.hover),
            T = i.computes.sublayersNames(le.idle),
            O = p && w,
            V = l(F),
            [E, S] = s.useState(!1),
            H = ((e, o) => {
                const [t, a] = s.useState(0),
                    n = s.useCallback(() => {
                        a((e) => e + 1);
                    }, []);
                return (
                    s.useEffect(() => {
                        t === e && o();
                    }, [t, e]),
                    n
                );
            })(A.length + k.length + N.length + Number(O) * T.length, () => {
                (S(!0), t());
            }),
            M = () => r.setShowAdditionalLayers(!0),
            G = () => r.setShowAdditionalLayers(!1),
            P = () => {
                (L.sound(g.boxMouseLeave), r.setIsBoxHovered(!1));
            },
            $ = (e, o) => {
                const t = i.computes.extractSublayers(e);
                return { active: !Boolean(t[u]) || o === u, resource: t[o] };
            };
        return (
            s.useEffect(() => {
                const e = i.computes.extractSublayers(le.box),
                    o = e[u] || e[ce];
                return I(() => {
                    (null == o ? void 0 : o.type) === d.image && r.setShowAdditionalLayers(!0);
                });
            }, [u]),
            a.jsxs('div', {
                className: n(be, w && Ae, o),
                style: { backgroundColor: b },
                children: [
                    A.map((e) => {
                        const { active: o, resource: t } = $(le.background, e);
                        return a.jsx(
                            h,
                            {
                                className: n(ge, o && _e),
                                layer: t,
                                loop: !0,
                                onLoaded: H,
                                playVideo: E && t.type === d.video && o,
                            },
                            `${le.background}_${e}`,
                        );
                    }),
                    k.map((e) => {
                        const { active: o, resource: t } = $(le.box, e);
                        return a.jsx(
                            'div',
                            {
                                className: n(Ce, o && we),
                                children: a.jsx(pe, {
                                    layer: t,
                                    sound: g.boxAppear,
                                    onLoaded: H,
                                    onVideoEnded: M,
                                    playVideo: E && t.type === d.video && o,
                                    onVideoPlay: G,
                                }),
                            },
                            `${le.box}_${e}`,
                        );
                    }),
                    !v &&
                        N.map((e) => {
                            const { active: o, resource: t } = $(le.hover, e);
                            return a.jsx(
                                h,
                                {
                                    className: n(he, _ && o && y && ye),
                                    layer: t,
                                    onLoaded: H,
                                    playVideo: E && t.type === d.video && o,
                                    loop: !0,
                                    shouldCleanUp: !0,
                                },
                                `${le.hover}_${e}`,
                            );
                        }),
                    O &&
                        !v &&
                        T.map((e) => {
                            const { active: o, resource: t } = $(le.idle, e);
                            return a.jsx(
                                h,
                                {
                                    className: n(fe, _ && o && ve),
                                    playVideo: E && t.type === d.video && o,
                                    layer: t,
                                    onLoaded: H,
                                    loop: !0,
                                    shouldCleanUp: !0,
                                },
                                `${le.idle}_${e}`,
                            );
                        }),
                    x.isEnabled && a.jsx('div', { className: je, style: { opacity: x.opacity } }),
                    _ &&
                        a.jsx(me, {
                            className: Be,
                            settings: m,
                            wrapperSize: V,
                            onMouseEnter: () => {
                                (L.sound(g.boxMouseEnter), r.setIsBoxHovered(!0));
                            },
                            onMouseLeave: P,
                            onClick: () => {
                                v || (P(), L.click(), e());
                            },
                        }),
                ],
            })
        );
    }),
    Ne = 'Content_795c83a5',
    Le = 'Content_guaranteedTitle_28baf221',
    Ie = 'Content_buttons_fd2576b4',
    Te = 'Content_button_b94fbe94',
    Oe = 'Content_button__withCheckboxes_306de055',
    Ve = 'Content_toggleButton_eb4e4480',
    Ee = 'Content_toggleButton__normal_da09528a',
    Se = 'Content_toggleButton__notFirst_31d87338',
    He = 'Content_toggleButton__active_22d48900',
    Me = i(({ openClick: e, className: o }) => {
        const { model: t, controls: i } = ue(),
            { model: r } = B(),
            { texts: c, images: l, sounds: d } = t.computes.resources(),
            { dynamicTexts: u } = t.computes.dynamicResources(),
            { accentCount: p } = t.computes.viewConfig(),
            { boxesCount: m, boxesCountToGuaranteed: b, boxCategory: g } = t.computes.boxInfo(),
            _ = t.openingOptions.get(),
            h = _.length > 1,
            y = t.computes.openBoxesCount(),
            { eventName: f } = t.root.get(),
            v = r.subViewIDs.get(),
            w = C(v),
            A = { boxesToGuaranteed: b, accent: p },
            j = { title: c.guaranteedTitle, nextBox: c.guaranteedNextBox },
            N = { glow: l.glowIcon, info: l.infoIcon, strongGlow: l.guaranteedGlowIcon },
            I = () => {
                (L.sound(d.boxMouseLeave), i.setIsBoxHovered(!1));
            },
            O = T(
                () => {
                    w || e();
                },
                [w, e],
                1100,
            );
        V($.SPACE, O);
        return (
            s.useEffect(() => {
                y > m && i.openingOptionChange(0);
            }, [m, i, y, g]),
            a.jsxs('div', {
                className: n(Ne, o),
                children: [
                    b > 0 && a.jsx(ee, { texts: j, icons: N, counts: A, category: g, className: Le, eventName: f }),
                    a.jsxs('div', {
                        className: Ie,
                        children: [
                            h &&
                                k(_, (e, o) =>
                                    a.jsx(
                                        E,
                                        {
                                            toggleType: S.Slot,
                                            active: e === y,
                                            disabled: e > m,
                                            className: n(Ve, o > 0 && Se, e === y && He, e <= m && Ee),
                                            onClick: () =>
                                                ((e) => {
                                                    i.openingOptionChange(e);
                                                })(o),
                                            children: a.jsx(H, {
                                                text: u.numberOfBoxesToOpen.plural('count', e),
                                                binding: { count: e },
                                            }),
                                        },
                                        o + e,
                                    ),
                                ),
                            a.jsx(M, {
                                size: P.medium,
                                type: G.main,
                                onClick: () => {
                                    w || (I(), e());
                                },
                                soundHover: d.boxMouseEnter,
                                mixClass: n(Te, h && Oe),
                                onMouseEnter: () => i.setIsBoxHovered(!0),
                                onMouseLeave: I,
                                children: c.openButtonText,
                            }),
                        ],
                    }),
                    a.jsx(x, { text: m ? c.quantityAvailableTitle : c.quantityNoBoxesTitle, boxesCount: m }),
                ],
            })
        );
    }),
    Ge = {
        root: 'App_root_0',
        base: 'App_43d3732f',
        boxLayout: 'App_boxLayout_22fa7f35',
        base__prepareAnimation: 'App_base__prepareAnimation_0',
        base__openViewAnimation: 'App_base__openViewAnimation_0',
        fadeIn: 'App_fadeIn_0',
        infoButtons: 'App_infoButtons_85e6c981',
        base__waitAnimation: 'App_base__waitAnimation_0',
        fadeOut: 'App_fadeOut_0',
        base__backAnimation: 'App_base__backAnimation_0',
        statsButton: 'App_statsButton_403e9f7b',
        info: 'App_info_9b3576c7',
        closeButton: 'App_closeButton_db0ba81d',
        header: 'App_header_e482d71',
        footer: 'App_footer_2fbd33f6',
        checkbox: 'App_checkbox_194935ee',
        purchaseButton: 'App_purchaseButton_59ab22a9',
        loader: 'App_loader_9754cd35',
        fadeInWait: 'App_fadeInWait_0',
        tabs: 'App_tabs_56765e44',
        popover: 'App_popover_e06fed7f',
        contentWrapper: 'App_contentWrapper_3bce0eb1',
        shiftTop: 'App_shiftTop_0',
        shiftBottom: 'App_shiftBottom_0',
    },
    Pe = { context: 'model.hasBoxes.statistics' },
    $e = 'initial',
    Re = 'prepare',
    qe = 'back',
    ze = 'wait',
    We = 'openView';
const Ye = i(function () {
        var e;
        const { model: o, controls: t } = ue(),
            { model: i } = B(),
            {
                isAnimationActive: l,
                isError: d,
                eventName: p,
                useStats: x,
                selectedBoxOption: _,
                isShopVisible: h,
            } = o.root.get(),
            C = i.overlayClosed.get(),
            w = i.computes.awardViewOpened(),
            { texts: A, images: k, sounds: N } = o.computes.resources(),
            { dynamicTexts: I } = o.computes.dynamicResources(),
            O = o.boxesInfo.get(),
            { tabsGuaranteedCount: V } = o.computes.viewConfig(),
            E = null == (e = o.computes.boxInfo()) ? void 0 : e.boxesCount,
            [S, H] = s.useState(!1),
            [M, G] = s.useState(!1),
            [P, $] = s.useState($e),
            {
                breakpoint: { weight: U },
            } = R(),
            Q = T(() => t.openBoxes(), [t], 1100),
            [X, Z] = r(() => oe),
            [F, J] = r(() => te),
            K = () => {
                (o.isBoxHovered.get() && L.sound(N.boxMouseLeave), M || t.close());
            };
        q(K);
        const ee = () => {
                (G(!0), t.setShowAdditionalLayers(!1), Z.start(ae()), J.start(ae()), $(ze));
            },
            ie = () => {
                (Z.start(ne), J.start(ne));
            };
        return (
            s.useEffect(() => {
                P === ze && z(Q, 250);
            }, [P, Q]),
            s.useEffect(() => {
                d && (G(!1), $(qe), ie(), t.resetError());
            }, [d]),
            s.useEffect(() => {
                C && ($(qe), ie(), t.setShowAdditionalLayers(!0));
            }, [C]),
            s.useEffect(() => {
                w && M && G(!1);
            }, [w]),
            s.useEffect(() => {
                j.isLow() && t.setAnimationState(!1);
            }, [t]),
            s.useEffect(() => {
                ($(Re), G(!1));
            }, []),
            a.jsxs('div', {
                className: n(Ge.base, Ge[`base__${P}Animation`]),
                children: [
                    a.jsx(ke, {
                        onClick: ee,
                        onLoaded: () => {
                            ($(We), Z.start(se), J.start(se));
                        },
                        className: Ge.boxLayout,
                    }),
                    a.jsxs('div', {
                        className: Ge.infoButtons,
                        children: [
                            x &&
                                a.jsx(y, {
                                    onClick: () => H(!0),
                                    className: Ge.statsButton,
                                    label: A.statsButton,
                                    icon: k.statsIcon,
                                }),
                            a.jsx(W, {
                                caption: A.infoButton,
                                type: 'info',
                                side: 'left',
                                onClick: () => {
                                    M || t.openInfoPage();
                                },
                                classNames: { base: Ge.info },
                            }),
                        ],
                    }),
                    a.jsx('div', {
                        className: Ge.closeButton,
                        children: a.jsx(W, { caption: A.closeButton, type: 'close', side: 'right', onClick: K }),
                    }),
                    a.jsx(c.div, {
                        style: X,
                        className: Ge.header,
                        children: a.jsx(u, { title: I.boxCategory.dynOpt(_) }),
                    }),
                    a.jsxs('div', {
                        className: Ge.footer,
                        children: [
                            a.jsx(c.div, { style: F, children: a.jsx(Me, { openClick: ee }) }),
                            M && a.jsx(m, { className: Ge.loader, text: A.loader, img: k.loader }),
                        ],
                    }),
                    j.isHigh() &&
                        a.jsx(b, {
                            isActive: l,
                            onClick: t.changeAnimationState,
                            className: Ge.checkbox,
                            text: A.animationCheckbox,
                            size: U >= D.medium.weight ? Y.extraLarge : Y.large,
                        }),
                    h &&
                        E &&
                        E > 0 &&
                        a.jsx(g, {
                            text: A.footerPurchaseButtonText,
                            image: k.iconEmpty,
                            sounds: N,
                            onClick: t.buyBoxes,
                            className: Ge.purchaseButton,
                        }),
                    O.length > 1 &&
                        a.jsx('div', {
                            className: Ge.tabs,
                            children: a.jsx(f, {
                                tabs: O,
                                changeTab: (e) => {
                                    M ||
                                        (e !== _ &&
                                            (t.onBoxOptionChanged(e),
                                            Z.start(ae(() => Z.start(ne))),
                                            J.start(ae(() => J.start(ne)))));
                                },
                                active: _,
                                texts: I.tabText,
                                sounds: { switch: N.switch, entryHover: N.entryHover },
                                icons: {
                                    slotGlow: k.slotGlow,
                                    numberGlow: k.guaranteedGlowIcon,
                                    glowIcon: k.glowIcon,
                                    guaranteedIco: k.guaranteedIco,
                                },
                                tabsGuaranteedCount: V,
                                startAnimation: P === We,
                                eventName: p,
                            }),
                        }),
                    S && a.jsx(v, { options: Pe, onHidden: () => H(!1), isStatsEnabled: x, className: Ge.popover }),
                ],
            })
        );
    }),
    De = () => a.jsx(de, { options: p.HAS_BOXES, children: a.jsx(Ye, {}) });
export { De as default };
