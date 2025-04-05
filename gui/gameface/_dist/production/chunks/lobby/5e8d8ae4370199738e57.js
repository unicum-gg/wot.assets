'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [231],
    {
        5461: (e, t, o) => {
            o.d(t, { XZ: () => m, yB: () => l.yB, Rh: () => l.Rh });
            var a = o(7363),
                n = o.n(a),
                s = o(6483),
                r = o.n(s),
                i = o(7727);
            let c;
            !(function (e) {
                (e[(e.LEFT = 0)] = 'LEFT'),
                    (e[(e.WHEEL = 1)] = 'WHEEL'),
                    (e[(e.RIGHT = 2)] = 'RIGHT'),
                    (e[(e.FOURTH = 3)] = 'FOURTH'),
                    (e[(e.FIFTH = 4)] = 'FIFTH');
            })(c || (c = {}));
            var l = o(8844);
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
                    (_ = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var o = arguments[t];
                                  for (var a in o) ({}).hasOwnProperty.call(o, a) && (e[a] = o[a]);
                              }
                              return e;
                          }),
                    _.apply(null, arguments)
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
                    h = void 0 === x ? l.yB.medium : x,
                    v = e.type,
                    y = void 0 === v ? l.Rh.primary : v,
                    B = e.soundHover,
                    k = void 0 === B ? 'highlight' : B,
                    C = e.soundClick,
                    f = void 0 === C ? 'play' : C,
                    E = e.onMouseEnter,
                    w = e.onMouseLeave,
                    N = e.onMouseUp,
                    T = e.onMouseDown,
                    A = e.onClick,
                    L = e.onChange,
                    I = e.onFocus,
                    O = e.onBlur,
                    V = e.text,
                    H = e.contentStyles,
                    M = e.children,
                    G = e.alignment,
                    S = (function (e, t) {
                        if (null == e) return {};
                        var o = {};
                        for (var a in e)
                            if ({}.hasOwnProperty.call(e, a)) {
                                if (t.indexOf(a) >= 0) continue;
                                o[a] = e[a];
                            }
                        return o;
                    })(e, d);
                const P = (0, a.useState)(!1),
                    R = P[0],
                    D = P[1],
                    z = (0, a.useState)(!1),
                    F = (z[0], z[1]),
                    U = (0, a.useCallback)(
                        (e) => {
                            b || (L && L(), A && A(e));
                        },
                        [b, L, A],
                    ),
                    Y = (0, a.useCallback)(
                        (e) => {
                            const t = e.button === c.LEFT;
                            b || (t && D(!0), t && T && T(e), f && (0, i.G)(f));
                        },
                        [b, T, f],
                    ),
                    $ = (0, a.useCallback)(
                        (e) => {
                            b || (D(!1), N && N(e));
                        },
                        [b, N],
                    ),
                    q = (0, a.useCallback)(
                        (e) => {
                            b || (E && E(e), k && (0, i.G)(k));
                        },
                        [b, E, k],
                    ),
                    j = (0, a.useCallback)(
                        (e) => {
                            b || (D(!1), w && w(e));
                        },
                        [b, w],
                    ),
                    Q = (0, a.useCallback)(
                        (e) => {
                            b || (F(!0), I && I(e));
                        },
                        [b, I],
                    ),
                    W = (0, a.useCallback)(
                        (e) => {
                            b || (F(!1), O && O(e));
                        },
                        [b, O],
                    ),
                    Z = n().createElement(
                        'div',
                        { className: u.label },
                        n().createElement(
                            'div',
                            { className: r()(u.labelContent, 's-labelContent'), style: H },
                            V || M,
                        ),
                    );
                return n().createElement(
                    'div',
                    _(
                        {
                            id: t,
                            className: r()(u.base, u[`base__${h}`], u[`base__${y}`], {
                                [u.base__checked]: s,
                                [u.base__disabled]: b,
                                [u.base__mouseDown]: R,
                                [u.base__alert]: p,
                                [u.base__center]: G === l.N3.Center,
                                [u.base__bottom]: G === l.N3.Bottom,
                            }),
                            onClick: U,
                            onMouseEnter: q,
                            onMouseLeave: j,
                            onMouseDown: Y,
                            onMouseUp: $,
                            onFocus: Q,
                            onBlur: W,
                        },
                        S,
                    ),
                    n().createElement(
                        'div',
                        { className: u.input },
                        n().createElement('div', { className: u.alertOverlay }),
                        n().createElement('div', { className: u.inputHoverOverlay }),
                        n().createElement('div', { className: u.highlight }),
                    ),
                    n().createElement('div', { className: u.checkmark }),
                    ((V || M) && Z) || null,
                );
            };
        },
        8844: (e, t, o) => {
            let a, n, s;
            o.d(t, { N3: () => s, Rh: () => n, yB: () => a }),
                (function (e) {
                    (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(a || (a = {})),
                (function (e) {
                    (e.primary = 'primary'), (e.main = 'main');
                })(n || (n = {})),
                (function (e) {
                    (e.Center = 'center'), (e.Bottom = 'bottom');
                })(s || (s = {}));
        },
        5998: (e, t, o) => {
            o.r(t), o.d(t, { default: () => $e });
            var a = o(7363),
                n = o.n(a),
                s = o(8958),
                r = o(6483),
                i = o.n(r),
                c = o(5461),
                l = o(8089),
                u = o(122),
                d = o(5959),
                _ = o(514),
                m = o(8526),
                b = o(5415),
                g = o(4489),
                p = o(3403),
                x = o(7030),
                h = o(8821),
                v = o(3597),
                y = o(2984),
                B = o(5149),
                k = o(6974),
                C = o(3727),
                f = o(3720),
                E = o(8455);
            const w = { from: { opacity: 0, transform: 'translateY(-15rem)' }, delay: 100, config: { duration: 250 } },
                N = { from: { opacity: 0, transform: 'translateY(15rem)' }, delay: 100, config: { duration: 250 } },
                T = { to: { opacity: 1, transform: 'translateY(0rem)' } },
                A = (e) => ({ to: { opacity: 0 }, config: { duration: 0 }, onRest: e }),
                L = { to: { opacity: 1 }, config: { duration: 250 } };
            var I = o(3215),
                O = o(9480),
                V = o(9174),
                H = o(3946),
                M = o(3905),
                G = o(1440),
                S = o(7366),
                P = o(9674);
            const R = {
                    videos: {
                        hover: 'hasBoxesView.hover',
                        idle: 'hasBoxesView.idle',
                        background: 'hasBoxesView.background',
                        box: 'hasBoxesView.box',
                    },
                    images: {
                        hover: 'hasBoxesView.hover',
                        idle: 'hasBoxesView.idle',
                        background: 'hasBoxesView.background',
                        box: 'hasBoxesView.box',
                        iconEmpty: 'entry_point.lootboxEmpty',
                        externalLink: 'common.externalLinkOrange',
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
                        guaranteedTitle: 'awardViews.guaranteedTitle.text',
                        guaranteedNextBox: 'awardViews.guaranteedTitle.nextBox',
                        quantityAvailableTitle: 'hasBoxesView.quantityTitle.boxesAvailable',
                        quantityNoBoxesTitle: 'hasBoxesView.quantityTitle.noBoxes',
                        footerPurchaseButtonText: 'hasBoxesView.purchaseButtonText',
                        footerPurchaseButtonTextCn: 'hasBoxesView.purchaseButtonTextCn',
                        openButtonText: 'hasBoxesView.openButtonText',
                        animationCheckbox: 'awardViews.footer.checkbox',
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
                        numberOfBoxesToOpen: 'hasBoxesView.numberOfBoxesToOpen',
                    },
                },
                z = (0, I.q3)()(
                    ({ observableModel: e }) => {
                        const t = {
                                root: e.object(),
                                openingOptions: e.array('openingOptions'),
                                boxesInfo: e.array('boxesInfo'),
                                isBoxHovered: V.LO.box(!1),
                                showAdditionalLayers: V.LO.box(!1),
                            },
                            o = (0, H.Om)(() =>
                                O.sE(t.boxesInfo.get(), (e) => e.boxCategory === t.root.get().selectedBoxOption),
                            ),
                            a = (0, H.Om)(() => (0, S.jh)(R, t.root.get().eventName)),
                            n = (0, H.Om)(() => (0, S.kC)(D, t.root.get().eventName)),
                            s = (0, H.Om)(() => (0, G.i)(t.root.get().eventName, M.N7.HasBoxesView)),
                            r = (0, H.Om)(() => O.U2(t.openingOptions.get(), t.root.get().selectedOpeningOption) || 1);
                        return Object.assign({}, t, {
                            computes: {
                                resources: a,
                                dynamicResources: n,
                                viewConfig: s,
                                openBoxesCount: r,
                                boxInfo: o,
                            },
                        });
                    },
                    ({ externalModel: e, model: t }) => {
                        const o = e.createCallback((e) => ({ count: e }), 'onBoxesOpen'),
                            a = e.createCallback((e) => ({ isAnimationActive: e }), 'onAnimationStateChanged');
                        return {
                            setIsBoxHovered: (0, V.aD)((e) => t.isBoxHovered.set(e)),
                            setShowAdditionalLayers: (0, V.aD)((e) => t.showAdditionalLayers.set(e)),
                            openBoxes: (0, V.aD)(() => {
                                o(t.computes.openBoxesCount());
                            }),
                            setAnimationState: (0, V.aD)((e) => {
                                a(e);
                            }),
                            changeAnimationState: (0, V.aD)(() => {
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
                F = z[0],
                U = z[1];
            var Y = o(1856),
                $ = o(9217),
                q = o(2065),
                j = o(1354),
                Q = o(9182),
                W = o(4707),
                Z = o(8457);
            const X = ({ layer: e, onLoaded: t, sound: o, onVideoEnded: s, playVideo: r, onVideoPlay: i }) => (
                    (0, a.useEffect)(() => {
                        r && _.hY.sound(o);
                    }, [o, r]),
                    n().createElement(W.z, { layer: e, onLoaded: t, onVideoEnded: s, playVideo: r, onVideoPlay: i })
                ),
                J = 'HoverTrigger_base_21',
                K = 'HoverTrigger_hoverTrigger_6c',
                ee = ({ className: e, settings: t, wrapperSize: o, onMouseEnter: a, onMouseLeave: s, onClick: r }) =>
                    n().createElement(
                        'div',
                        { className: i()(J, e), style: o },
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
                ae = 'BoxLayout_glow_35',
                ne = 'BoxLayout_glow__show_14',
                se = 'BoxLayout_idle_2f',
                re = 'BoxLayout_idle__show_63',
                ie = 'BoxLayout_hoverTrigger_7e',
                ce = 'BoxLayout_box_1a',
                le = 'BoxLayout_box__show_fd',
                ue = 'BoxLayout_base__graphicsHigh_49',
                de = 'BoxLayout_vignette_a4',
                _e = { idle: 'idle', background: 'background', box: 'box', hover: 'hover' },
                me = Object.values(_e),
                be = (0, p.Pi)(({ onClick: e, className: t, onLoaded: o }) => {
                    const s = U(),
                        r = s.model,
                        c = s.controls,
                        l = (0, B.t)().model,
                        u = r.root.get().selectedBoxOption,
                        m = r.computes.viewConfig(),
                        b = m.hasIdle,
                        g = m.vignette,
                        p = m.hoverZone,
                        x = m.backgroundColor,
                        h = r.computes.resources(),
                        v = h.images,
                        y = h.videos,
                        k = h.sounds,
                        C = r.computes.dynamicResources(),
                        f = C.dynamicImages,
                        E = C.dynamicVideos,
                        w = r.boxesInfo.get(),
                        N = r.showAdditionalLayers.get(),
                        T = r.isBoxHovered.get(),
                        A = l.subViewIDs.get(),
                        L = (0, Q.Hl)(A),
                        I = d.graphicsQuality.isHigh(),
                        V = (0, j._)(M.p6),
                        H = (0, a.useState)(!1),
                        G = H[0],
                        P = H[1],
                        R = ((e, t) => {
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
                        })(me.length - Number(!b || !I) + 2 * (w.length - 1), () => {
                            P(!0), o();
                        }),
                        D = () => c.setShowAdditionalLayers(!0),
                        z = () => c.setShowAdditionalLayers(!1),
                        F = () => {
                            _.hY.sound(k.boxMouseLeave), c.setIsBoxHovered(!1);
                        },
                        J = (e, t = S.c1) => {
                            const o = (0, q.H)(v[e], f[e].dynOpt(t)),
                                a = I ? (0, q.H)(y[e], E[e].dynOpt(t)) : '';
                            return (0, $.k)(o, a);
                        };
                    return (
                        (0, a.useEffect)(() => {
                            const e = J(_e.box, u);
                            return (0, Y.v)(() => {
                                c.setShowAdditionalLayers(e.type !== Z.U.video);
                            });
                        }, [u]),
                        n().createElement(
                            'div',
                            { className: i()(te, I && ue, t), style: { backgroundColor: x } },
                            n().createElement(W.z, {
                                key: _e.background,
                                className: oe,
                                layer: J(_e.background),
                                loop: !0,
                                onLoaded: R,
                                playVideo: G,
                            }),
                            O.UI(w, (e) => {
                                const t = e.boxCategory,
                                    o = t === u,
                                    a = J(_e.box, t);
                                return n().createElement(
                                    'div',
                                    { className: i()(ce, o && le), key: _e.box + t },
                                    n().createElement(X, {
                                        layer: a,
                                        sound: k.boxAppear,
                                        onLoaded: R,
                                        onVideoEnded: D,
                                        playVideo: G && a.type === Z.U.video && o,
                                        onVideoPlay: z,
                                    }),
                                );
                            }),
                            O.UI(w, (e) => {
                                const t = e.boxCategory,
                                    o = t === u,
                                    a = J(_e.hover, t);
                                return n().createElement(W.z, {
                                    key: _e.hover + t,
                                    className: i()(ae, N && o && T && ne),
                                    layer: a,
                                    onLoaded: R,
                                    playVideo: G && a.type === Z.U.video && o,
                                    loop: !0,
                                });
                            }),
                            b &&
                                I &&
                                n().createElement(W.z, {
                                    key: _e.idle,
                                    className: i()(se, N && re),
                                    playVideo: G,
                                    layer: J(_e.idle),
                                    onLoaded: R,
                                    loop: !0,
                                }),
                            g.isEnabled && n().createElement('div', { className: de, style: { opacity: g.opacity } }),
                            N &&
                                n().createElement(ee, {
                                    className: ie,
                                    settings: p,
                                    wrapperSize: V,
                                    onMouseEnter: () => {
                                        _.hY.sound(k.boxMouseEnter), c.setIsBoxHovered(!0);
                                    },
                                    onMouseLeave: F,
                                    onClick: () => {
                                        L || (F(), _.hY.click(), e());
                                    },
                                }),
                        )
                    );
                });
            var ge = o(3457),
                pe = o(9766),
                xe = o(7727),
                he = o(2106);
            const ve = {
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
                (e.Button = 'button'), (e.Slot = 'slot');
            })(ye || (ye = {}));
            const Be = () => {},
                ke = n().memo(
                    ({
                        active: e = !1,
                        className: t,
                        children: o,
                        toggleType: s = ye.Button,
                        toggleButtonType: r = he.L.secondary,
                        onClick: c,
                        disabled: l,
                        soundClick: u = 'play',
                        soundHover: d = 'highlight',
                        onMouseEnter: _ = Be,
                        onMouseDown: m = Be,
                        onMouseUp: b = Be,
                        onMouseLeave: g = Be,
                    }) => {
                        const p = (0, a.useCallback)(
                                (t) => {
                                    l || ((0, xe.G)(u), c && c(t, e));
                                },
                                [c, l, e, u],
                            ),
                            x = (0, a.useCallback)(
                                (e) => {
                                    l || ((0, xe.G)(d), _ && _(e));
                                },
                                [l, d, _],
                            ),
                            h = (0, a.useCallback)(
                                (e) => {
                                    l ||
                                        ((1 !== e.button && 2 !== e.button) || (null !== u && (0, xe.G)(u)), m && m(e));
                                },
                                [m, l, u],
                            ),
                            v = i()(ve.base, t, ve[`base__${s}`], e && ve.base__active, l && ve.base__disabled);
                        return n().createElement(
                            'div',
                            {
                                className: v,
                                onClick: p,
                                onMouseEnter: x,
                                onMouseUp: l ? Be : b,
                                onMouseDown: h,
                                onMouseLeave: l ? Be : g,
                            },
                            n().createElement('div', { className: ve.content }, o),
                            s === ye.Button &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: i()(ve.background, ve[`background__${r}`]) }),
                                    n().createElement('div', { className: ve.texture }),
                                ),
                            n().createElement('div', { className: ve.overlay }),
                            n().createElement('div', { className: ve.indicator }),
                        );
                    },
                );
            var Ce = o(4598),
                fe = o(5521),
                Ee = o(9221),
                we = o(2333);
            const Ne = 'Content_base_45',
                Te = 'Content_guaranteedTitle_32',
                Ae = 'Content_buttons_af',
                Le = 'Content_button_ca',
                Ie = 'Content_button__withCheckboxes_d4',
                Oe = 'Content_toggleButton_53',
                Ve = 'Content_toggleButton__normal_a7',
                He = 'Content_toggleButton__notFirst_30',
                Me = 'Content_toggleButton__active_a1',
                Ge = (0, p.Pi)(({ openClick: e, className: t }) => {
                    const o = U(),
                        s = o.model,
                        r = o.controls,
                        c = (0, B.t)().model,
                        l = s.computes.resources(),
                        u = l.texts,
                        d = l.images,
                        b = l.sounds,
                        p = s.computes.dynamicResources().dynamicTexts,
                        x = s.computes.viewConfig().accentCount,
                        h = s.computes.boxInfo(),
                        v = h.boxesCount,
                        y = h.boxesCountToGuaranteed,
                        k = h.boxCategory,
                        C = s.openingOptions.get(),
                        f = C.length > 1,
                        E = s.computes.openBoxesCount(),
                        w = s.root.get().eventName,
                        N = c.subViewIDs.get(),
                        T = (0, Q.Hl)(N),
                        A = { boxesToGuaranteed: y, accent: x },
                        L = { title: u.guaranteedTitle, nextBox: u.guaranteedNextBox },
                        I = { glow: d.glowIcon, info: d.infoIcon, strongGlow: d.guaranteedGlowIcon },
                        V = () => {
                            _.hY.sound(b.boxMouseLeave), r.setIsBoxHovered(!1);
                        },
                        H = (0, g.f)(T ? Ce.ZT : e, [T], 1100);
                    (0, m.gd)(fe.n.SPACE, H);
                    return (
                        (0, a.useEffect)(() => {
                            E > v && r.openingOptionChange(0);
                        }, [v, r, E]),
                        n().createElement(
                            'div',
                            { className: i()(Ne, t) },
                            y > 0 &&
                                n().createElement(Ee.r, {
                                    texts: L,
                                    icons: I,
                                    counts: A,
                                    category: k,
                                    className: Te,
                                    eventName: w,
                                }),
                            n().createElement(
                                'div',
                                { className: Ae },
                                f &&
                                    O.UI(C, (e, t) =>
                                        n().createElement(
                                            ke,
                                            {
                                                key: t + e,
                                                toggleType: ye.Slot,
                                                active: e === E,
                                                disabled: e > v,
                                                className: i()(Oe, t > 0 && He, e === E && Me, e <= v && Ve),
                                                onClick: () =>
                                                    ((e) => {
                                                        r.openingOptionChange(e);
                                                    })(t),
                                            },
                                            n().createElement(pe.z, {
                                                text: p.numberOfBoxesToOpen.plural('numberOfBoxesToOpen', e),
                                                binding: { count: e },
                                            }),
                                        ),
                                    ),
                                n().createElement(
                                    ge.u5,
                                    {
                                        size: ge.qE.medium,
                                        type: ge.L$.main,
                                        onClick: () => {
                                            T || (V(), e());
                                        },
                                        soundHover: b.boxMouseEnter,
                                        mixClass: i()(Le, f && Ie),
                                        onMouseEnter: () => r.setIsBoxHovered(!0),
                                        onMouseLeave: V,
                                    },
                                    u.openButtonText,
                                ),
                            ),
                            n().createElement(we.q, {
                                text: v ? u.quantityAvailableTitle : u.quantityNoBoxesTitle,
                                boxesCount: v,
                            }),
                        )
                    );
                }),
                Se = {
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
                Pe = { context: 'model.hasBoxes.statistics' },
                Re = 'initial',
                De = 'prepare',
                ze = 'back',
                Fe = 'wait',
                Ue = 'openView',
                Ye = (0, p.Pi)(() => {
                    var e;
                    const t = U(),
                        o = t.model,
                        s = t.controls,
                        r = (0, B.t)().model,
                        p = o.root.get(),
                        I = p.isAnimationActive,
                        O = p.isError,
                        V = p.useExternal,
                        H = p.eventName,
                        M = p.useStats,
                        G = p.isAwaitingResponse,
                        S = p.selectedBoxOption,
                        P = p.isShopVisible,
                        R = r.overlayClosed.get(),
                        D = o.computes.resources(),
                        z = D.texts,
                        F = D.images,
                        Y = D.sounds,
                        $ = o.computes.dynamicResources().dynamicTexts,
                        q = o.boxesInfo.get(),
                        j = o.computes.viewConfig().tabsGuaranteedCount,
                        Q = null == (e = o.computes.boxInfo()) ? void 0 : e.boxesCount,
                        W = (0, a.useState)(!1),
                        Z = W[0],
                        X = W[1],
                        J = (0, a.useState)(!1),
                        K = J[0],
                        ee = J[1],
                        te = (0, a.useState)(Re),
                        oe = te[0],
                        ae = te[1],
                        ne = (0, b.GS)().mediaSize,
                        se = (0, g.f)(s.openBoxes, [], 1100),
                        re = (0, x.useSpring)(() => w),
                        ie = re[0],
                        ce = re[1],
                        le = (0, x.useSpring)(() => N),
                        ue = le[0],
                        de = le[1],
                        _e = () => {
                            o.isBoxHovered.get() && _.hY.sound(Y.boxMouseLeave), G || K || s.close();
                        };
                    (0, m.I9)(_e);
                    const me = () => {
                            ee(!0), s.setShowAdditionalLayers(!1), ce.start(A()), de.start(A()), ae(Fe);
                        },
                        ge = () => {
                            ce.start(L), de.start(L);
                        };
                    return (
                        (0, a.useEffect)(() => {
                            oe === Fe && (0, u.F)(se, 250);
                        }, [oe, se]),
                        (0, a.useEffect)(() => {
                            K && ee(G);
                        }, [G]),
                        (0, a.useEffect)(() => {
                            O && (ee(!1), ae(ze), ge(), s.resetError());
                        }, [O]),
                        (0, a.useEffect)(() => {
                            R && (ae(ze), ge(), s.setShowAdditionalLayers(!0));
                        }, [R]),
                        (0, a.useEffect)(() => {
                            d.graphicsQuality.isLow() && s.setAnimationState(!1);
                        }, [s]),
                        (0, a.useEffect)(() => {
                            ae(De), ee(!1);
                        }, []),
                        n().createElement(
                            'div',
                            { className: i()(Se.base, Se[`base__${oe}Animation`]) },
                            n().createElement(be, {
                                onClick: me,
                                onLoaded: () => {
                                    ae(Ue), ce.start(T), de.start(T);
                                },
                                className: Se.boxLayout,
                            }),
                            n().createElement(
                                'div',
                                { className: Se.infoButtons },
                                M &&
                                    n().createElement(C.g, {
                                        onClick: () => X(!0),
                                        className: Se.statsButton,
                                        label: z.statsButton,
                                        icon: F.statsIcon,
                                    }),
                                n().createElement(l.A, {
                                    caption: z.infoButton,
                                    type: 'info',
                                    side: 'left',
                                    onClick: () => {
                                        K || s.openInfoPage();
                                    },
                                    classNames: { base: Se.info },
                                }),
                            ),
                            n().createElement(
                                'div',
                                { className: Se.closeButton },
                                n().createElement(l.A, {
                                    caption: z.closeButton,
                                    type: 'close',
                                    side: 'right',
                                    onClick: _e,
                                }),
                            ),
                            n().createElement(
                                x.animated.div,
                                { style: ie, className: Se.header },
                                n().createElement(k.h, { title: $.boxCategory.dynOpt(S) }),
                            ),
                            n().createElement(
                                'div',
                                { className: Se.footer },
                                n().createElement(
                                    x.animated.div,
                                    { style: ue },
                                    n().createElement(Ge, { openClick: me }),
                                ),
                                K && n().createElement(v.a, { className: Se.loader, text: z.loader, img: F.loader }),
                            ),
                            d.graphicsQuality.isHigh() &&
                                n().createElement(h.o, {
                                    isActive: I,
                                    onClick: s.changeAnimationState,
                                    className: Se.checkbox,
                                    text: z.animationCheckbox,
                                    size: ne >= b.cJ.Medium ? c.yB.extraLarge : c.yB.large,
                                }),
                            P &&
                                Q &&
                                Q > 0 &&
                                n().createElement(y.i, {
                                    text: V ? z.footerPurchaseButtonTextCn : z.footerPurchaseButtonText,
                                    image: F.iconEmpty,
                                    sounds: Y,
                                    icon: V ? F.externalLink : void 0,
                                    onClick: s.buyBoxes,
                                    className: Se.purchaseButton,
                                }),
                            q.length > 1 &&
                                n().createElement(
                                    'div',
                                    { className: Se.tabs },
                                    n().createElement(E.mQ, {
                                        tabs: q,
                                        changeTab: (e) => {
                                            K ||
                                                (e !== S &&
                                                    (s.onBoxOptionChanged(e),
                                                    ce.start(A(() => ce.start(L))),
                                                    de.start(A(() => de.start(L)))));
                                        },
                                        active: S,
                                        texts: $.tabText,
                                        sounds: { switch: Y.switch, entryHover: Y.entryHover },
                                        icons: {
                                            slotGlow: F.slotGlow,
                                            numberGlow: F.guaranteedGlowIcon,
                                            glowIcon: F.glowIcon,
                                            guaranteedIco: F.guaranteedIco,
                                        },
                                        tabsGuaranteedCount: j,
                                        startAnimation: oe === Ue,
                                        eventName: H,
                                    }),
                                ),
                            Z &&
                                n().createElement(f.g, {
                                    options: Pe,
                                    onHidden: () => X(!1),
                                    isStatsEnabled: M,
                                    className: Se.popover,
                                }),
                        )
                    );
                }),
                $e = () => n().createElement(F, { options: s.f.HAS_BOXES }, n().createElement(Ye, null));
        },
        9221: (e, t, o) => {
            o.d(t, { r: () => p });
            var a = o(6483),
                n = o.n(a),
                s = o(9766),
                r = o(2056),
                i = o(7363),
                c = o.n(i),
                l = o(7509);
            const u = 'GuaranteedTitle_base_28',
                d = 'GuaranteedTitle_wrapper_36',
                _ = 'GuaranteedTitle_nextGuaranteedBox_31',
                m = 'GuaranteedTitle_countBg_b7',
                b = 'GuaranteedTitle_info_49',
                g = R.views.lobby.lootbox_system,
                p = ({ counts: e, texts: t, icons: o, category: a, eventName: i, className: p }) =>
                    c().createElement(
                        'div',
                        { className: n()(u, p) },
                        c().createElement(
                            r.u,
                            {
                                contentId: g.tooltips.GuaranteedRewardInfoTooltip('resId'),
                                args: { category: a, eventName: i },
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
                                                  glowIcon: o.glow,
                                                  strongGlowIcon: o.strongGlow,
                                                  accentCount: e.accent,
                                              }),
                                          },
                                      })
                                    : c().createElement(
                                          'div',
                                          { className: _ },
                                          c().createElement('div', {
                                              className: m,
                                              style: { backgroundImage: `url(${o.strongGlow})` },
                                          }),
                                          t.nextBox,
                                      ),
                                c().createElement('div', {
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
                i = o.n(r);
            const c = 'QuantityTitle_base_06',
                l = 'QuantityTitle_count_a9',
                u = ({ text: e, boxesCount: t = 0, className: o }) =>
                    i().createElement(
                        'div',
                        { className: n()(c, o) },
                        t > 0
                            ? i().createElement(s.z, {
                                  text: e,
                                  binding: { boxesCount: i().createElement('span', { className: l }, t) },
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
                i = o.n(r);
            const c = 'AnimationCheckbox_base_53',
                l = 'AnimationCheckbox_base__disabled_22',
                u = 'AnimationCheckbox_text_28',
                d = ({ className: e, isActive: t, text: o, size: a = s.yB.large, disable: r = !1, onClick: d }) =>
                    i().createElement(
                        'div',
                        { className: n()(c, r && l, e) },
                        i().createElement(
                            s.XZ,
                            {
                                isDisabled: r,
                                size: a,
                                isChecked: t,
                                onClick: d,
                                type: s.Rh.main,
                                contentStyles: { paddingTop: a === s.yB.extraLarge ? '4rem' : '0' },
                            },
                            i().createElement('span', { className: u }, o),
                        ),
                    );
        },
        3597: (e, t, o) => {
            o.d(t, { a: () => u });
            var a = o(6483),
                n = o.n(a),
                s = o(7363),
                r = o.n(s);
            const i = 'Loader_base_ed',
                c = 'Loader_icon_d2',
                l = 'Loader_text_c4',
                u = ({ img: e, text: t, className: o }) =>
                    r().createElement(
                        'div',
                        { className: n()(i, o) },
                        r().createElement('div', { className: c, style: { backgroundImage: `url(${e})` } }),
                        r().createElement('div', { className: l }, t),
                    );
        },
        2984: (e, t, o) => {
            o.d(t, { i: () => b });
            var a = o(6483),
                n = o.n(a),
                s = o(514),
                r = o(7363),
                i = o.n(r);
            const c = 'PurchaseButton_base_86',
                l = 'PurchaseButton_wrapper_5d',
                u = 'PurchaseButton_image_46',
                d = 'PurchaseButton_textBlock_52',
                _ = 'PurchaseButton_text_56',
                m = 'PurchaseButton_icon_a3',
                b = ({ text: e, image: t, sounds: o, icon: a, onClick: r, className: b }) =>
                    i().createElement(
                        'div',
                        {
                            className: n()(c, b),
                            onClick: () => {
                                s.hY.click(), s.hY.sound(o.purchaseClick), r();
                            },
                        },
                        i().createElement(
                            'div',
                            {
                                className: l,
                                onMouseEnter: () => {
                                    s.hY.sound(o.purchaseHover);
                                },
                            },
                            i().createElement('div', { className: u, style: { backgroundImage: `url(${t})` } }),
                            i().createElement(
                                'div',
                                { className: d },
                                i().createElement('div', { className: _ }, e),
                                a &&
                                    i().createElement('div', { className: m, style: { backgroundImage: `url(${a})` } }),
                            ),
                        ),
                    );
        },
    },
]);
