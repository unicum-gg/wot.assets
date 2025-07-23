'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [231],
    {
        5461: (e, t, o) => {
            o.d(t, { XZ: () => m, yB: () => i.yB, Rh: () => i.Rh });
            var a = o(7363),
                n = o.n(a),
                s = o(6483),
                r = o.n(s),
                c = o(7727);
            let l;
            !(function (e) {
                ((e[(e.LEFT = 0)] = 'LEFT'),
                    (e[(e.WHEEL = 1)] = 'WHEEL'),
                    (e[(e.RIGHT = 2)] = 'RIGHT'),
                    (e[(e.FOURTH = 3)] = 'FOURTH'),
                    (e[(e.FIFTH = 4)] = 'FIFTH'));
            })(l || (l = {}));
            var i = o(8844);
            const u = {
                    base: 'Checkbox_base_36',
                    base__disabled: 'Checkbox_base__disabled_08',
                    base__center: 'Checkbox_base__center_52',
                    base__bottom: 'Checkbox_base__bottom_28',
                    input: 'Checkbox_input_37',
                    base__mouseDown: 'Checkbox_base__mouseDown_45',
                    base__small: 'Checkbox_base__small_18',
                    base__medium: 'Checkbox_base__medium_12',
                    base__large: 'Checkbox_base__large_f7',
                    base__extraLarge: 'Checkbox_base__extraLarge_c9',
                    alertOverlay: 'Checkbox_alertOverlay_52',
                    base__alert: 'Checkbox_base__alert_b7',
                    blink: 'Checkbox_blink_5e',
                    base__checked: 'Checkbox_base__checked_a2',
                    inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                    highlight: 'Checkbox_highlight_b8',
                    base__main: 'Checkbox_base__main_3a',
                    base__primary: 'Checkbox_base__primary_ab',
                    checkmark: 'Checkbox_checkmark_60',
                    fadeIn: 'Checkbox_fadeIn_1a',
                    label: 'Checkbox_label_bc',
                    labelContent: 'Checkbox_labelContent_64',
                },
                d = [
                    'id',
                    'isChecked',
                    'isDisabled',
                    'isAlert',
                    'size',
                    'type',
                    'soundHover',
                    'soundClick',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseUp',
                    'onMouseDown',
                    'onClick',
                    'onChange',
                    'onFocus',
                    'onBlur',
                    'text',
                    'contentStyles',
                    'children',
                    'alignment',
                ];
            function _() {
                return (
                    (_ =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var o = arguments[t];
                                for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
                            }
                            return e;
                        }),
                    _.apply(this, arguments)
                );
            }
            const m = (e) => {
                let t = e.id,
                    o = e.isChecked,
                    s = void 0 !== o && o,
                    m = e.isDisabled,
                    b = void 0 !== m && m,
                    g = e.isAlert,
                    p = void 0 !== g && g,
                    x = e.size,
                    h = void 0 === x ? i.yB.medium : x,
                    y = e.type,
                    v = void 0 === y ? i.Rh.primary : y,
                    k = e.soundHover,
                    C = void 0 === k ? 'highlight' : k,
                    B = e.soundClick,
                    E = void 0 === B ? 'play' : B,
                    f = e.onMouseEnter,
                    N = e.onMouseLeave,
                    w = e.onMouseUp,
                    T = e.onMouseDown,
                    A = e.onClick,
                    L = e.onChange,
                    I = e.onFocus,
                    O = e.onBlur,
                    H = e.text,
                    M = e.contentStyles,
                    S = e.children,
                    G = e.alignment,
                    V = (function (e, t) {
                        if (null == e) return {};
                        var o,
                            a,
                            n = {},
                            s = Object.keys(e);
                        for (a = 0; a < s.length; a++) ((o = s[a]), t.indexOf(o) >= 0 || (n[o] = e[o]));
                        return n;
                    })(e, d);
                const $ = (0, a.useState)(!1),
                    P = $[0],
                    R = $[1],
                    D = (0, a.useState)(!1),
                    z = (D[0], D[1]),
                    U = (0, a.useCallback)(
                        (e) => {
                            b || (L && L(), A && A(e));
                        },
                        [b, L, A],
                    ),
                    F = (0, a.useCallback)(
                        (e) => {
                            const t = e.button === l.LEFT;
                            b || (t && R(!0), t && T && T(e), E && (0, c.G)(E));
                        },
                        [b, T, E],
                    ),
                    Y = (0, a.useCallback)(
                        (e) => {
                            b || (R(!1), w && w(e));
                        },
                        [b, w],
                    ),
                    q = (0, a.useCallback)(
                        (e) => {
                            b || (f && f(e), C && (0, c.G)(C));
                        },
                        [b, f, C],
                    ),
                    j = (0, a.useCallback)(
                        (e) => {
                            b || (R(!1), N && N(e));
                        },
                        [b, N],
                    ),
                    Q = (0, a.useCallback)(
                        (e) => {
                            b || (z(!0), I && I(e));
                        },
                        [b, I],
                    ),
                    W = (0, a.useCallback)(
                        (e) => {
                            b || (z(!1), O && O(e));
                        },
                        [b, O],
                    ),
                    Z = n().createElement(
                        'div',
                        { className: u.label },
                        n().createElement(
                            'div',
                            { className: r()(u.labelContent, 's-labelContent'), style: M },
                            H || S,
                        ),
                    );
                return n().createElement(
                    'div',
                    _(
                        {
                            id: t,
                            className: r()(u.base, u[`base__${h}`], u[`base__${v}`], {
                                [u.base__checked]: s,
                                [u.base__disabled]: b,
                                [u.base__mouseDown]: P,
                                [u.base__alert]: p,
                                [u.base__center]: G === i.N3.Center,
                                [u.base__bottom]: G === i.N3.Bottom,
                            }),
                            onClick: U,
                            onMouseEnter: q,
                            onMouseLeave: j,
                            onMouseDown: F,
                            onMouseUp: Y,
                            onFocus: Q,
                            onBlur: W,
                        },
                        V,
                    ),
                    n().createElement(
                        'div',
                        { className: u.input },
                        n().createElement('div', { className: u.alertOverlay }),
                        n().createElement('div', { className: u.inputHoverOverlay }),
                        n().createElement('div', { className: u.highlight }),
                    ),
                    n().createElement('div', { className: u.checkmark }),
                    ((H || S) && Z) || null,
                );
            };
        },
        8844: (e, t, o) => {
            let a, n, s;
            (o.d(t, { N3: () => s, Rh: () => n, yB: () => a }),
                (function (e) {
                    ((e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge'));
                })(a || (a = {})),
                (function (e) {
                    ((e.primary = 'primary'), (e.main = 'main'));
                })(n || (n = {})),
                (function (e) {
                    ((e.Center = 'center'), (e.Bottom = 'bottom'));
                })(s || (s = {})));
        },
        5998: (e, t, o) => {
            (o.r(t), o.d(t, { default: () => Fe }));
            var a = o(7363),
                n = o.n(a),
                s = o(8958),
                r = o(6483),
                c = o.n(r),
                l = o(5461),
                i = o(8089),
                u = o(122),
                d = o(5959),
                _ = o(514),
                m = o(8526),
                b = o(5415),
                g = o(4489),
                p = o(3403),
                x = o(7030),
                h = o(8821),
                y = o(3597),
                v = o(2984),
                k = o(5149),
                C = o(6974),
                B = o(3727),
                E = o(3720),
                f = o(8455);
            const N = { from: { opacity: 0, transform: 'translateY(-15rem)' }, delay: 100, config: { duration: 250 } },
                w = { from: { opacity: 0, transform: 'translateY(15rem)' }, delay: 100, config: { duration: 250 } },
                T = { to: { opacity: 1, transform: 'translateY(0rem)' } },
                A = (e) => ({ to: { opacity: 0 }, config: { duration: 0 }, onRest: e }),
                L = { to: { opacity: 1 }, config: { duration: 250 } };
            var I = o(3215),
                O = o(9480),
                H = o(9174),
                M = o(3946),
                S = o(3905),
                G = o(4811),
                V = o(1440),
                $ = o(7366),
                P = o(9674);
            const R = {
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
                        boxAppear: P.T.boxAppear,
                        boxMouseEnter: P.T.boxMouseEnter,
                        boxMouseLeave: P.T.boxMouseLeave,
                        switch: P.T.switch,
                        entryHover: P.T.entryHover,
                        purchaseHover: P.T.purchaseHover,
                        purchaseClick: P.T.purchaseClick,
                    },
                },
                D = {
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
                z = { idle: 'idle', background: 'background', box: 'box', hover: 'hover' },
                U = (0, I.q3)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                openingOptions: e.array('openingOptions'),
                                boxesInfo: e.array('boxesInfo'),
                                isBoxHovered: H.LO.box(!1),
                                showAdditionalLayers: H.LO.box(!1),
                            },
                            o = (0, M.Om)(() =>
                                O.sE(t.boxesInfo.get(), (e) => e.boxCategory === t.root.get().selectedBoxOption),
                            ),
                            a = (0, M.Om)(() => (0, $.jh)(R, t.root.get().eventName)),
                            n = (0, M.Om)(() => (0, $.kC)(D, t.root.get().eventName)),
                            s = (0, M.Om)(() => (0, V.i)(t.root.get().eventName, S.N7.HasBoxesView)),
                            r = (0, M.Om)(() => {
                                const e = { [z.idle]: {}, [z.background]: {}, [z.box]: {}, [z.hover]: {} },
                                    o = n(),
                                    a = o.dynamicImages,
                                    s = o.dynamicVideos,
                                    r = d.graphicsQuality.isHigh();
                                return (
                                    O.UI(t.boxesInfo.get(), (t) => {
                                        const o = t.boxCategory;
                                        Object.values(z).forEach((t) => {
                                            const n = a[t].dynOpt(o),
                                                c = s[t].dynOpt(o),
                                                l = (0, G.k)(n, r ? c : '');
                                            l.src.includes(S.TP) || ((e, t) => e.includes(`${t}/default`))(l.src, t)
                                                ? (e[t].common_sublayer = l)
                                                : (e[t][o] = l);
                                        });
                                    }),
                                    e
                                );
                            }),
                            c = (0, M.Om)((e) => r()[e]),
                            l = (0, M.Om)((e) => Object.keys(c(e))),
                            i = (0, M.Om)(() => O.U2(t.openingOptions.get(), t.root.get().selectedOpeningOption) || 1);
                        return Object.assign({}, t, {
                            computes: {
                                resources: a,
                                dynamicResources: n,
                                viewConfig: s,
                                openBoxesCount: i,
                                boxInfo: o,
                                sublayersNames: l,
                                extractSublayers: c,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => {
                        const o = e.createCallback((e) => ({ count: e }), 'onBoxesOpen'),
                            a = e.createCallback((e) => ({ isAnimationActive: e }), 'onAnimationStateChanged');
                        return {
                            setIsBoxHovered: (0, H.aD)((e) => t.isBoxHovered.set(e)),
                            setShowAdditionalLayers: (0, H.aD)((e) => t.showAdditionalLayers.set(e)),
                            openBoxes: (0, H.aD)(() => {
                                o(t.computes.openBoxesCount());
                            }),
                            setAnimationState: (0, H.aD)((e) => {
                                a(e);
                            }),
                            changeAnimationState: (0, H.aD)(() => {
                                a(!t.root.get().isAnimationActive);
                            }),
                            openInfoPage: e.createCallbackNoArgs('onInfoOpen'),
                            close: e.createCallbackNoArgs('onClose'),
                            openingOptionChange: e.createCallback(
                                (e) => ({ openingOption: e }),
                                'onOpeningOptionChanged',
                            ),
                            buyBoxes: e.createCallbackNoArgs('onBuyBoxes'),
                            resetError: e.createCallbackNoArgs('onResetError'),
                            onBoxOptionChanged: e.createCallback((e) => ({ boxOption: e }), 'onBoxOptionChanged'),
                        };
                    },
                ),
                F = U[0],
                Y = U[1];
            var q = o(1856),
                j = o(1354),
                Q = o(9182),
                W = o(4707),
                Z = o(8457);
            const X = ({ layer: e, onLoaded: t, sound: o, onVideoEnded: s, playVideo: r, onVideoPlay: c }) => (
                    (0, a.useEffect)(() => {
                        r && _.hY.sound(o);
                    }, [o, r]),
                    n().createElement(W.z, { layer: e, onLoaded: t, onVideoEnded: s, playVideo: r, onVideoPlay: c })
                ),
                J = 'HoverTrigger_base_21',
                K = 'HoverTrigger_hoverTrigger_6c',
                ee = ({ className: e, settings: t, wrapperSize: o, onMouseEnter: a, onMouseLeave: s, onClick: r }) =>
                    n().createElement(
                        'div',
                        { className: c()(J, e), style: o },
                        n().createElement('div', {
                            className: K,
                            style: {
                                width: t.width,
                                height: t.height,
                                top: t.verticalOffset,
                                left: t.horizontalOffset,
                            },
                            onMouseEnter: a,
                            onMouseLeave: s,
                            onClick: r,
                        }),
                    ),
                te = 'BoxLayout_base_40',
                oe = 'BoxLayout_layer_11',
                ae = 'BoxLayout_layer__show_a9',
                ne = 'BoxLayout_glow_35',
                se = 'BoxLayout_glow__show_14',
                re = 'BoxLayout_idle_2f',
                ce = 'BoxLayout_idle__show_63',
                le = 'BoxLayout_hoverTrigger_7e',
                ie = 'BoxLayout_box_1a',
                ue = 'BoxLayout_box__show_fd',
                de = 'BoxLayout_base__graphicsHigh_49',
                _e = 'BoxLayout_vignette_a4',
                me = (0, p.Pi)(({ onClick: e, className: t, onLoaded: o }) => {
                    const s = Y(),
                        r = s.model,
                        l = s.controls,
                        i = (0, k.t)().model,
                        u = r.root.get().selectedBoxOption,
                        m = r.computes.viewConfig(),
                        b = m.hasIdle,
                        g = m.vignette,
                        p = m.hoverZone,
                        x = m.backgroundColor,
                        h = r.computes.resources().sounds,
                        y = r.showAdditionalLayers.get(),
                        v = r.isBoxHovered.get(),
                        C = i.subViewIDs.get(),
                        B = (0, Q.Hl)(C),
                        E = d.graphicsQuality.isHigh(),
                        f = r.computes.sublayersNames(z.background),
                        N = r.computes.sublayersNames(z.box),
                        w = r.computes.sublayersNames(z.hover),
                        T = r.computes.sublayersNames(z.idle),
                        A = b && E,
                        L = (0, j._)(S.p6),
                        I = (0, a.useState)(!1),
                        O = I[0],
                        H = I[1],
                        M = ((e, t) => {
                            const o = (0, a.useState)(0),
                                n = o[0],
                                s = o[1],
                                r = (0, a.useCallback)(() => {
                                    s((e) => e + 1);
                                }, []);
                            return (
                                (0, a.useEffect)(() => {
                                    n === e && t();
                                }, [n, e]),
                                r
                            );
                        })(f.length + N.length + w.length + Number(A) * T.length, () => {
                            (H(!0), o());
                        }),
                        G = () => l.setShowAdditionalLayers(!0),
                        V = () => l.setShowAdditionalLayers(!1),
                        $ = () => {
                            (_.hY.sound(h.boxMouseLeave), l.setIsBoxHovered(!1));
                        },
                        P = (e, t) => {
                            const o = r.computes.extractSublayers(e);
                            return { active: !Boolean(o[u]) || t === u, resource: o[t] };
                        };
                    return (
                        (0, a.useEffect)(() => {
                            const e = r.computes.extractSublayers(z.box),
                                t = e[u] || e.common_sublayer;
                            return (0, q.v)(() => {
                                l.setShowAdditionalLayers(t.type !== Z.U.video);
                            });
                        }, [u]),
                        n().createElement(
                            'div',
                            { className: c()(te, E && de, t), style: { backgroundColor: x } },
                            f.map((e) => {
                                const t = P(z.background, e),
                                    o = t.active,
                                    a = t.resource;
                                return n().createElement(W.z, {
                                    key: `${z.background}_${e}`,
                                    className: c()(oe, o && ae),
                                    layer: a,
                                    loop: !0,
                                    onLoaded: M,
                                    playVideo: O && a.type === Z.U.video && o,
                                });
                            }),
                            N.map((e) => {
                                const t = P(z.box, e),
                                    o = t.active,
                                    a = t.resource;
                                return n().createElement(
                                    'div',
                                    { className: c()(ie, o && ue), key: `${z.box}_${e}` },
                                    n().createElement(X, {
                                        layer: a,
                                        sound: h.boxAppear,
                                        onLoaded: M,
                                        onVideoEnded: G,
                                        playVideo: O && a.type === Z.U.video && o,
                                        onVideoPlay: V,
                                    }),
                                );
                            }),
                            !B &&
                                w.map((e) => {
                                    const t = P(z.hover, e),
                                        o = t.active,
                                        a = t.resource;
                                    return n().createElement(W.z, {
                                        key: `${z.hover}_${e}`,
                                        className: c()(ne, y && o && v && se),
                                        layer: a,
                                        onLoaded: M,
                                        playVideo: O && a.type === Z.U.video && o,
                                        loop: !0,
                                        shouldCleanUp: !0,
                                    });
                                }),
                            A &&
                                !B &&
                                T.map((e) => {
                                    const t = P(z.idle, e),
                                        o = t.active,
                                        a = t.resource;
                                    return n().createElement(W.z, {
                                        key: `${z.idle}_${e}`,
                                        className: c()(re, y && o && ce),
                                        playVideo: O && a.type === Z.U.video && o,
                                        layer: a,
                                        onLoaded: M,
                                        loop: !0,
                                        shouldCleanUp: !0,
                                    });
                                }),
                            g.isEnabled && n().createElement('div', { className: _e, style: { opacity: g.opacity } }),
                            y &&
                                n().createElement(ee, {
                                    className: le,
                                    settings: p,
                                    wrapperSize: L,
                                    onMouseEnter: () => {
                                        (_.hY.sound(h.boxMouseEnter), l.setIsBoxHovered(!0));
                                    },
                                    onMouseLeave: $,
                                    onClick: () => {
                                        B || ($(), _.hY.click(), e());
                                    },
                                }),
                        )
                    );
                });
            var be = o(3457),
                ge = o(9766),
                pe = o(7727),
                xe = o(2106);
            const he = {
                base: 'ToggleButton_base_2c',
                base__button: 'ToggleButton_base__button_cb',
                base__active: 'ToggleButton_base__active_a6',
                base__slot: 'ToggleButton_base__slot_98',
                base__disabled: 'ToggleButton_base__disabled_19',
                texture: 'ToggleButton_texture_f1',
                background: 'ToggleButton_background_ef',
                background__main: 'ToggleButton_background__main_68',
                background__primary: 'ToggleButton_background__primary_a9',
                background__primaryGreen: 'ToggleButton_background__primaryGreen_4f',
                background__primaryRed: 'ToggleButton_background__primaryRed_ca',
                background__secondary: 'ToggleButton_background__secondary_b2',
                background__ghost: 'ToggleButton_background__ghost_d6',
                content: 'ToggleButton_content_63',
                overlay: 'ToggleButton_overlay_23',
                indicator: 'ToggleButton_indicator_a7',
            };
            let ye;
            !(function (e) {
                ((e.Button = 'button'), (e.Slot = 'slot'));
            })(ye || (ye = {}));
            const ve = () => {},
                ke = n().memo(
                    ({
                        active: e = !1,
                        className: t,
                        children: o,
                        toggleType: s = ye.Button,
                        toggleButtonType: r = xe.L.secondary,
                        onClick: l,
                        disabled: i,
                        soundClick: u = 'play',
                        soundHover: d = 'highlight',
                        onMouseEnter: _ = ve,
                        onMouseDown: m = ve,
                        onMouseUp: b = ve,
                        onMouseLeave: g = ve,
                    }) => {
                        const p = (0, a.useCallback)(
                                (t) => {
                                    i || ((0, pe.G)(u), l && l(t, e));
                                },
                                [l, i, e, u],
                            ),
                            x = (0, a.useCallback)(
                                (e) => {
                                    i || ((0, pe.G)(d), _ && _(e));
                                },
                                [i, d, _],
                            ),
                            h = (0, a.useCallback)(
                                (e) => {
                                    i ||
                                        ((1 !== e.button && 2 !== e.button) || (null !== u && (0, pe.G)(u)), m && m(e));
                                },
                                [m, i, u],
                            ),
                            y = c()(he.base, t, he[`base__${s}`], e && he.base__active, i && he.base__disabled);
                        return n().createElement(
                            'div',
                            {
                                className: y,
                                onClick: p,
                                onMouseEnter: x,
                                onMouseUp: i ? ve : b,
                                onMouseDown: h,
                                onMouseLeave: i ? ve : g,
                            },
                            n().createElement('div', { className: he.content }, o),
                            s === ye.Button &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: c()(he.background, he[`background__${r}`]) }),
                                    n().createElement('div', { className: he.texture }),
                                ),
                            n().createElement('div', { className: he.overlay }),
                            n().createElement('div', { className: he.indicator }),
                        );
                    },
                );
            var Ce = o(4598),
                Be = o(5521),
                Ee = o(9221),
                fe = o(2333);
            const Ne = 'Content_base_45',
                we = 'Content_guaranteedTitle_32',
                Te = 'Content_buttons_af',
                Ae = 'Content_button_ca',
                Le = 'Content_button__withCheckboxes_d4',
                Ie = 'Content_toggleButton_53',
                Oe = 'Content_toggleButton__normal_a7',
                He = 'Content_toggleButton__notFirst_30',
                Me = 'Content_toggleButton__active_a1',
                Se = (0, p.Pi)(({ openClick: e, className: t }) => {
                    const o = Y(),
                        s = o.model,
                        r = o.controls,
                        l = (0, k.t)().model,
                        i = s.computes.resources(),
                        u = i.texts,
                        d = i.images,
                        b = i.sounds,
                        p = s.computes.dynamicResources().dynamicTexts,
                        x = s.computes.viewConfig().accentCount,
                        h = s.computes.boxInfo(),
                        y = h.boxesCount,
                        v = h.boxesCountToGuaranteed,
                        C = h.boxCategory,
                        B = s.openingOptions.get(),
                        E = B.length > 1,
                        f = s.computes.openBoxesCount(),
                        N = s.root.get().eventName,
                        w = l.subViewIDs.get(),
                        T = (0, Q.Hl)(w),
                        A = { boxesToGuaranteed: v, accent: x },
                        L = { title: u.guaranteedTitle, nextBox: u.guaranteedNextBox },
                        I = { glow: d.glowIcon, info: d.infoIcon, strongGlow: d.guaranteedGlowIcon },
                        H = () => {
                            (_.hY.sound(b.boxMouseLeave), r.setIsBoxHovered(!1));
                        },
                        M = (0, g.f)(T ? Ce.ZT : e, [T], 1100);
                    (0, m.gd)(Be.n.SPACE, M);
                    return (
                        (0, a.useEffect)(() => {
                            f > y && r.openingOptionChange(0);
                        }, [y, r, f]),
                        n().createElement(
                            'div',
                            { className: c()(Ne, t) },
                            v > 0 &&
                                n().createElement(Ee.r, {
                                    texts: L,
                                    icons: I,
                                    counts: A,
                                    category: C,
                                    className: we,
                                    eventName: N,
                                }),
                            n().createElement(
                                'div',
                                { className: Te },
                                E &&
                                    O.UI(B, (e, t) =>
                                        n().createElement(
                                            ke,
                                            {
                                                key: t + e,
                                                toggleType: ye.Slot,
                                                active: e === f,
                                                disabled: e > y,
                                                className: c()(Ie, t > 0 && He, e === f && Me, e <= y && Oe),
                                                onClick: () =>
                                                    ((e) => {
                                                        r.openingOptionChange(e);
                                                    })(t),
                                            },
                                            n().createElement(ge.z, {
                                                text: p.numberOfBoxesToOpen.plural('count', e),
                                                binding: { count: e },
                                            }),
                                        ),
                                    ),
                                n().createElement(
                                    be.u5,
                                    {
                                        size: be.qE.medium,
                                        type: be.L$.main,
                                        onClick: () => {
                                            T || (H(), e());
                                        },
                                        soundHover: b.boxMouseEnter,
                                        mixClass: c()(Ae, E && Le),
                                        onMouseEnter: () => r.setIsBoxHovered(!0),
                                        onMouseLeave: H,
                                    },
                                    u.openButtonText,
                                ),
                            ),
                            n().createElement(fe.q, {
                                text: y ? u.quantityAvailableTitle : u.quantityNoBoxesTitle,
                                boxesCount: y,
                            }),
                        )
                    );
                }),
                Ge = {
                    base: 'App_base_f3',
                    boxLayout: 'App_boxLayout_73',
                    base__prepareAnimation: 'App_base__prepareAnimation_d3',
                    base__openViewAnimation: 'App_base__openViewAnimation_67',
                    fadeIn: 'App_fadeIn_bc',
                    infoButtons: 'App_infoButtons_25',
                    base__waitAnimation: 'App_base__waitAnimation_9f',
                    fadeOut: 'App_fadeOut_f5',
                    base__backAnimation: 'App_base__backAnimation_47',
                    statsButton: 'App_statsButton_e3',
                    info: 'App_info_79',
                    closeButton: 'App_closeButton_2b',
                    header: 'App_header_20',
                    footer: 'App_footer_78',
                    checkbox: 'App_checkbox_7b',
                    purchaseButton: 'App_purchaseButton_79',
                    loader: 'App_loader_16',
                    fadeInWait: 'App_fadeInWait_27',
                    tabs: 'App_tabs_9c',
                    popover: 'App_popover_43',
                    contentWrapper: 'App_contentWrapper_11',
                    shiftTop: 'App_shiftTop_3a',
                    shiftBottom: 'App_shiftBottom_ff',
                },
                Ve = { context: 'model.hasBoxes.statistics' },
                $e = 'initial',
                Pe = 'prepare',
                Re = 'back',
                De = 'wait',
                ze = 'openView',
                Ue = (0, p.Pi)(() => {
                    var e;
                    const t = Y(),
                        o = t.model,
                        s = t.controls,
                        r = (0, k.t)().model,
                        p = o.root.get(),
                        I = p.isAnimationActive,
                        O = p.isError,
                        H = p.eventName,
                        M = p.useStats,
                        S = p.isAwaitingResponse,
                        G = p.selectedBoxOption,
                        V = p.isShopVisible,
                        $ = r.overlayClosed.get(),
                        P = o.computes.resources(),
                        R = P.texts,
                        D = P.images,
                        z = P.sounds,
                        U = o.computes.dynamicResources().dynamicTexts,
                        F = o.boxesInfo.get(),
                        q = o.computes.viewConfig().tabsGuaranteedCount,
                        j = null == (e = o.computes.boxInfo()) ? void 0 : e.boxesCount,
                        Q = (0, a.useState)(!1),
                        W = Q[0],
                        Z = Q[1],
                        X = (0, a.useState)(!1),
                        J = X[0],
                        K = X[1],
                        ee = (0, a.useState)($e),
                        te = ee[0],
                        oe = ee[1],
                        ae = (0, b.GS)().mediaSize,
                        ne = (0, g.f)(s.openBoxes, [], 1100),
                        se = (0, x.useSpring)(() => N),
                        re = se[0],
                        ce = se[1],
                        le = (0, x.useSpring)(() => w),
                        ie = le[0],
                        ue = le[1],
                        de = () => {
                            (o.isBoxHovered.get() && _.hY.sound(z.boxMouseLeave), S || J || s.close());
                        };
                    (0, m.I9)(de);
                    const _e = () => {
                            (K(!0), s.setShowAdditionalLayers(!1), ce.start(A()), ue.start(A()), oe(De));
                        },
                        be = () => {
                            (ce.start(L), ue.start(L));
                        };
                    return (
                        (0, a.useEffect)(() => {
                            te === De && (0, u.F)(ne, 250);
                        }, [te, ne]),
                        (0, a.useEffect)(() => {
                            J && K(S);
                        }, [S]),
                        (0, a.useEffect)(() => {
                            O && (K(!1), oe(Re), be(), s.resetError());
                        }, [O]),
                        (0, a.useEffect)(() => {
                            $ && (oe(Re), be(), s.setShowAdditionalLayers(!0));
                        }, [$]),
                        (0, a.useEffect)(() => {
                            d.graphicsQuality.isLow() && s.setAnimationState(!1);
                        }, [s]),
                        (0, a.useEffect)(() => {
                            (oe(Pe), K(!1));
                        }, []),
                        n().createElement(
                            'div',
                            { className: c()(Ge.base, Ge[`base__${te}Animation`]) },
                            n().createElement(me, {
                                onClick: _e,
                                onLoaded: () => {
                                    (oe(ze), ce.start(T), ue.start(T));
                                },
                                className: Ge.boxLayout,
                            }),
                            n().createElement(
                                'div',
                                { className: Ge.infoButtons },
                                M &&
                                    n().createElement(B.g, {
                                        onClick: () => Z(!0),
                                        className: Ge.statsButton,
                                        label: R.statsButton,
                                        icon: D.statsIcon,
                                    }),
                                n().createElement(i.A, {
                                    caption: R.infoButton,
                                    type: 'info',
                                    side: 'left',
                                    onClick: () => {
                                        J || s.openInfoPage();
                                    },
                                    classNames: { base: Ge.info },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: Ge.closeButton },
                                n().createElement(i.A, {
                                    caption: R.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: de,
                                }),
                            ),
                            n().createElement(
                                x.animated.div,
                                { style: re, className: Ge.header },
                                n().createElement(C.h, { title: U.boxCategory.dynOpt(G) }),
                            ),
                            n().createElement(
                                'div',
                                { className: Ge.footer },
                                n().createElement(
                                    x.animated.div,
                                    { style: ie },
                                    n().createElement(Se, { openClick: _e }),
                                ),
                                J && n().createElement(y.a, { className: Ge.loader, text: R.loader, img: D.loader }),
                            ),
                            d.graphicsQuality.isHigh() &&
                                n().createElement(h.o, {
                                    isActive: I,
                                    onClick: s.changeAnimationState,
                                    className: Ge.checkbox,
                                    text: R.animationCheckbox,
                                    size: ae >= b.cJ.Medium ? l.yB.extraLarge : l.yB.large,
                                }),
                            V &&
                                j &&
                                j > 0 &&
                                n().createElement(v.i, {
                                    text: R.footerPurchaseButtonText,
                                    image: D.iconEmpty,
                                    sounds: z,
                                    onClick: s.buyBoxes,
                                    className: Ge.purchaseButton,
                                }),
                            F.length > 1 &&
                                n().createElement(
                                    'div',
                                    { className: Ge.tabs },
                                    n().createElement(f.mQ, {
                                        tabs: F,
                                        changeTab: (e) => {
                                            J ||
                                                (e !== G &&
                                                    (s.onBoxOptionChanged(e),
                                                    ce.start(A(() => ce.start(L))),
                                                    ue.start(A(() => ue.start(L)))));
                                        },
                                        active: G,
                                        texts: U.tabText,
                                        sounds: { switch: z.switch, entryHover: z.entryHover },
                                        icons: {
                                            slotGlow: D.slotGlow,
                                            numberGlow: D.guaranteedGlowIcon,
                                            glowIcon: D.glowIcon,
                                            guaranteedIco: D.guaranteedIco,
                                        },
                                        tabsGuaranteedCount: q,
                                        startAnimation: te === ze,
                                        eventName: H,
                                    }),
                                ),
                            W &&
                                n().createElement(E.g, {
                                    options: Ve,
                                    onHidden: () => Z(!1),
                                    isStatsEnabled: M,
                                    className: Ge.popover,
                                }),
                        )
                    );
                }),
                Fe = () => n().createElement(F, { options: s.f.HAS_BOXES }, n().createElement(Ue, null));
        },
        9221: (e, t, o) => {
            o.d(t, { r: () => p });
            var a = o(6483),
                n = o.n(a),
                s = o(9766),
                r = o(2056),
                c = o(7363),
                l = o.n(c),
                i = o(7509);
            const u = 'GuaranteedTitle_base_28',
                d = 'GuaranteedTitle_wrapper_36',
                _ = 'GuaranteedTitle_nextGuaranteedBox_31',
                m = 'GuaranteedTitle_countBg_b7',
                b = 'GuaranteedTitle_info_49',
                g = R.views.lobby.lootbox_system,
                p = ({ counts: e, texts: t, icons: o, category: a, eventName: c, className: p }) =>
                    l().createElement(
                        'div',
                        { className: n()(u, p) },
                        l().createElement(
                            r.u,
                            {
                                contentId: g.tooltips.GuaranteedRewardInfoTooltip('resId'),
                                args: { category: a, eventName: c },
                            },
                            l().createElement(
                                'div',
                                { className: d },
                                e.boxesToGuaranteed > 1
                                    ? l().createElement(s.z, {
                                          text: t.title,
                                          binding: {
                                              count: l().createElement(i.t, {
                                                  boxesCountToGuaranteed: e.boxesToGuaranteed,
                                                  glowIcon: o.glow,
                                                  strongGlowIcon: o.strongGlow,
                                                  accentCount: e.accent,
                                              }),
                                          },
                                      })
                                    : l().createElement(
                                          'div',
                                          { className: _ },
                                          l().createElement('div', {
                                              className: m,
                                              style: { backgroundImage: `url(${o.strongGlow})` },
                                          }),
                                          t.nextBox,
                                      ),
                                l().createElement('div', {
                                    className: b,
                                    style: { backgroundImage: `url(${o.info})` },
                                }),
                            ),
                        ),
                    );
        },
        2333: (e, t, o) => {
            o.d(t, { q: () => u });
            var a = o(6483),
                n = o.n(a),
                s = o(9766),
                r = o(7363),
                c = o.n(r);
            const l = 'QuantityTitle_base_06',
                i = 'QuantityTitle_count_a9',
                u = ({ text: e, boxesCount: t = 0, className: o }) =>
                    c().createElement(
                        'div',
                        { className: n()(l, o) },
                        t > 0
                            ? c().createElement(s.z, {
                                  text: e,
                                  binding: { boxesCount: c().createElement('span', { className: i }, t) },
                              })
                            : e,
                    );
        },
        8821: (e, t, o) => {
            o.d(t, { o: () => d });
            var a = o(6483),
                n = o.n(a),
                s = o(5461),
                r = o(7363),
                c = o.n(r);
            const l = 'AnimationCheckbox_base_53',
                i = 'AnimationCheckbox_base__disabled_22',
                u = 'AnimationCheckbox_text_28',
                d = ({ className: e, isActive: t, text: o, size: a = s.yB.large, disable: r = !1, onClick: d }) =>
                    c().createElement(
                        'div',
                        { className: n()(l, r && i, e) },
                        c().createElement(
                            s.XZ,
                            {
                                isDisabled: r,
                                size: a,
                                isChecked: t,
                                onClick: d,
                                type: s.Rh.main,
                                contentStyles: { paddingTop: a === s.yB.extraLarge ? '4rem' : '0' },
                            },
                            c().createElement('span', { className: u }, o),
                        ),
                    );
        },
        3597: (e, t, o) => {
            o.d(t, { a: () => u });
            var a = o(6483),
                n = o.n(a),
                s = o(7363),
                r = o.n(s);
            const c = 'Loader_base_ed',
                l = 'Loader_icon_d2',
                i = 'Loader_text_c4',
                u = ({ img: e, text: t, className: o }) =>
                    r().createElement(
                        'div',
                        { className: n()(c, o) },
                        r().createElement('div', { className: l, style: { backgroundImage: `url(${e})` } }),
                        r().createElement('div', { className: i }, t),
                    );
        },
        2984: (e, t, o) => {
            o.d(t, { i: () => b });
            var a = o(6483),
                n = o.n(a),
                s = o(514),
                r = o(7363),
                c = o.n(r);
            const l = 'PurchaseButton_base_86',
                i = 'PurchaseButton_wrapper_5d',
                u = 'PurchaseButton_image_46',
                d = 'PurchaseButton_textBlock_52',
                _ = 'PurchaseButton_text_56',
                m = 'PurchaseButton_icon_a3',
                b = ({ text: e, image: t, sounds: o, icon: a, onClick: r, className: b }) =>
                    c().createElement(
                        'div',
                        {
                            className: n()(l, b),
                            onClick: () => {
                                (s.hY.click(), s.hY.sound(o.purchaseClick), r());
                            },
                        },
                        c().createElement(
                            'div',
                            {
                                className: i,
                                onMouseEnter: () => {
                                    s.hY.sound(o.purchaseHover);
                                },
                            },
                            c().createElement('div', { className: u, style: { backgroundImage: `url(${t})` } }),
                            c().createElement(
                                'div',
                                { className: d },
                                c().createElement('div', { className: _ }, e),
                                a &&
                                    c().createElement('div', { className: m, style: { backgroundImage: `url(${a})` } }),
                            ),
                        ),
                    );
        },
    },
]);
