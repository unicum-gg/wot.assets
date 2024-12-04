'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [8629],
    {
        3457: (e, t, a) => {
            a.d(t, { L$: () => c.L, qE: () => c.q, u5: () => m });
            var n = a(6483),
                o = a.n(n),
                s = a(7727),
                r = a(6179),
                l = a.n(r),
                i = a(6880),
                c = a(2106);
            const _ = ({
                children: e,
                size: t,
                isFocused: a,
                type: n,
                disabled: _,
                mixClass: m,
                soundHover: u,
                soundClick: d,
                onMouseEnter: p,
                onMouseMove: g,
                onMouseDown: b,
                onMouseUp: C,
                onMouseLeave: v,
                onClick: h,
            }) => {
                const f = (0, r.useRef)(null),
                    E = (0, r.useState)(a),
                    y = E[0],
                    B = E[1],
                    N = (0, r.useState)(!1),
                    x = N[0],
                    k = N[1];
                return (
                    (0, r.useEffect)(() => {
                        function e(e) {
                            y && null !== f.current && !f.current.contains(e.target) && B(!1);
                        }
                        return (
                            document.addEventListener('mousedown', e),
                            () => {
                                document.removeEventListener('mousedown', e);
                            }
                        );
                    }, [y]),
                    (0, r.useEffect)(() => {
                        B(a);
                    }, [a]),
                    l().createElement(
                        'div',
                        {
                            ref: f,
                            className: o()(
                                i.Z.base,
                                i.Z[`base__${n}`],
                                _ && i.Z.base__disabled,
                                t && i.Z[`base__${t}`],
                                y && i.Z.base__focus,
                                x && i.Z.base__highlightActive,
                                m,
                            ),
                            onMouseEnter: function (e) {
                                _ || (null !== u && (0, s.G)(u), p && p(e));
                            },
                            onMouseMove: function (e) {
                                g && g(e);
                            },
                            onMouseUp: function (e) {
                                _ || (C && C(e), k(!1));
                            },
                            onMouseDown: function (e) {
                                _ ||
                                    (null !== d && (0, s.G)(d),
                                    b && b(e),
                                    a && (_ || (f.current && (f.current.focus(), B(!0)))),
                                    k(!0));
                            },
                            onMouseLeave: function (e) {
                                _ || (v && v(e), k(!1));
                            },
                            onClick: function (e) {
                                _ || (h && h(e));
                            },
                        },
                        n !== c.L.ghost &&
                            l().createElement(
                                l().Fragment,
                                null,
                                l().createElement('div', { className: i.Z.back }),
                                l().createElement('span', { className: i.Z.texture }),
                            ),
                        l().createElement(
                            'span',
                            { className: o()(i.Z.state, i.Z.state__default) },
                            l().createElement('span', { className: i.Z.stateDisabled }),
                            l().createElement('span', { className: i.Z.stateHighlightHover }),
                            l().createElement('span', { className: i.Z.stateHighlightActive }),
                        ),
                        l().createElement(
                            'span',
                            { className: i.Z.content, lang: R.strings.settings.LANGUAGE_CODE() },
                            e,
                        ),
                    )
                );
            };
            _.defaultProps = { type: c.L.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
            const m = _;
        },
        2106: (e, t, a) => {
            let n, o;
            a.d(t, { L: () => n, q: () => o }),
                (function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(n || (n = {})),
                (function (e) {
                    (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                })(o || (o = {}));
        },
        280: (e, t, a) => {
            a.d(t, { z: () => c });
            var n = a(6483),
                o = a.n(n),
                s = a(3649),
                r = a(6179),
                l = a.n(r),
                i = a(5287);
            const c = ({ binding: e, text: t = '', classMix: a, alignment: n = s.v2.left, formatWithBrackets: c }) => {
                if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                const _ = c && e ? (0, s.WU)(t, e) : t;
                return l().createElement(
                    r.Fragment,
                    null,
                    _.split('\n').map((t, c) =>
                        l().createElement(
                            'div',
                            { className: o()(i.Z.base, a), key: `${t}-${c}` },
                            (0, s.Uw)(t, n, e).map((e, t) => l().createElement(r.Fragment, { key: `${t}-${e}` }, e)),
                        ),
                    ),
                );
            };
        },
        9766: (e, t, a) => {
            a.d(t, { z: () => n.z });
            var n = a(280);
            a(8082);
        },
        8082: (e, t, a) => {
            a(3649);
        },
        8629: (e, t, a) => {
            a.r(t), a.d(t, { default: () => j });
            var n = a(6179),
                o = a.n(n),
                s = a(6483),
                r = a.n(s),
                l = a(3457),
                i = a(9916),
                c = a(3403),
                _ = a(406);
            const m = (0, a(3215).q)()(
                    ({ observableModel: e }) => ({ root: e.object(), region: e.object('region') }),
                    ({ externalModel: e }) => ({
                        playVideo: e.createCallbackNoArgs('videoCover.onClick'),
                        showAboutEvent: e.createCallbackNoArgs('onShowAboutEvent'),
                        showRewardKitBuyWindow: e.createCallbackNoArgs('onShowRewardKitBuyWindow'),
                    }),
                ),
                u = m[0],
                d = m[1];
            var p = a(4827),
                g = a(9766),
                b = a(1458);
            const C = 'DescriptionBlock_base_ab',
                v = 'DescriptionBlock_infoBlock_14',
                h = 'DescriptionBlock_icon_cd',
                f = 'DescriptionBlock_title_68',
                E = 'DescriptionBlock_description_f5',
                y = R.strings.ny.infoPage.descriptions,
                B = ({ type: e, descriptionType: t, classNames: a }) => {
                    const n = (0, b.Iw)();
                    return o().createElement(
                        'div',
                        { className: r()(C, null == a ? void 0 : a.base) },
                        !n &&
                            o().createElement('div', {
                                className: h,
                                style: {
                                    backgroundImage: `url('R.images.gui.maps.icons.newYear.info.descriptions.${e}')`,
                                },
                            }),
                        o().createElement(
                            'div',
                            { className: v },
                            o().createElement(
                                'div',
                                { className: f },
                                o().createElement(g.z, { text: y.title.$dyn(e) }),
                            ),
                            o().createElement(
                                'div',
                                { className: E },
                                o().createElement(g.z, { text: y.body.$dyn(t) }),
                            ),
                        ),
                    );
                };
            var N = a(7727),
                x = a(3649);
            const k = 'VideoCover_base_34',
                w = 'VideoCover_cover_41',
                A = 'VideoCover_playButton_03',
                T = R.images.gui.maps.icons.newYear.info.video_cover,
                M = (e, t) =>
                    T.$dyn((0, x.BN)(e)) ||
                    ((e) => {
                        switch (e) {
                            case p.B.China:
                                return T.cn();
                            case p.B.Ru:
                                return T.ru();
                            default:
                                return T.en();
                        }
                    })(t),
                F = (0, n.memo)(({ realm: e, language: t, onVideoClicked: a, className: n, onMouseEnter: s }) => {
                    const l = { backgroundImage: `url('${M(t, e)}')` };
                    return o().createElement(
                        'div',
                        {
                            className: r()(k, n),
                            onClick: a,
                            onMouseEnter: () => {
                                N.$.playHighlight(), null == s || s();
                            },
                        },
                        o().createElement('div', { className: w, style: l }),
                        o().createElement('div', { className: A }),
                    );
                }),
                Z = 'App_base_85',
                D = 'App_content_2a',
                $ = 'App_videoContent_3d',
                W = 'App_description_44',
                H = 'App_descriptionInner_18',
                L = 'App_descriptionContent_56',
                O = 'App_descriptionBlockInner_55',
                S = 'App_descriptionBlockInner__stretch_03',
                z = 'App_portalButton_a2',
                G = 'App_buyButton_a0',
                I = 'App_button_af',
                K = 'App_linkIcon_0f',
                P = R.strings.ny.infoPage;
            let V;
            !(function (e) {
                (e.Resource = 'resource'), (e.Mining = 'mining'), (e.Kit = 'kit'), (e.KitCN = 'kitCN');
            })(V || (V = {}));
            const q = [V.Resource, V.Mining, V.Kit],
                U = (0, c.Pi)(() => {
                    const e = d(),
                        t = e.model,
                        a = e.controls,
                        n = t.root.get(),
                        s = n.eventStartDate,
                        c = n.eventEndDate,
                        m = n.isExternalBuy,
                        u = t.region.get(),
                        g = u.realm,
                        b = u.language;
                    return o().createElement(
                        'div',
                        { className: Z },
                        o().createElement(
                            'div',
                            { className: D },
                            o().createElement(
                                'div',
                                { className: $ },
                                o().createElement(F, { realm: g, language: b, onVideoClicked: a.playVideo }),
                                o().createElement(
                                    'div',
                                    { className: W },
                                    o().createElement(_.B, {
                                        text: P.description(),
                                        className: H,
                                        binding: {
                                            fromDate: i.Z5.getDateFormat(s, i.kH.LONG_FORMAT),
                                            toDate: i.Z5.getDateFormat(c, i.kH.LONG_FORMAT),
                                        },
                                    }),
                                ),
                                o().createElement(
                                    'div',
                                    { className: z },
                                    o().createElement(
                                        l.u5,
                                        {
                                            type: l.L$.primary,
                                            size: l.qE.medium,
                                            mixClass: I,
                                            onClick: a.showAboutEvent,
                                        },
                                        P.toPortal(),
                                        o().createElement('div', { className: K }),
                                    ),
                                ),
                            ),
                            o().createElement(
                                'div',
                                { className: L },
                                q.map((e, t) => {
                                    const a = g === p.B.China && 2 === t ? V.KitCN : e;
                                    return o().createElement(B, {
                                        key: t,
                                        type: e,
                                        descriptionType: a,
                                        classNames: { base: r()(O, 1 === t && S) },
                                    });
                                }),
                                o().createElement(
                                    'div',
                                    { className: G },
                                    o().createElement(
                                        l.u5,
                                        {
                                            type: l.L$.primary,
                                            size: l.qE.medium,
                                            mixClass: I,
                                            onClick: a.showRewardKitBuyWindow,
                                        },
                                        P.toBuy(),
                                        m && o().createElement('div', { className: K }),
                                    ),
                                ),
                            ),
                        ),
                    );
                }),
                j = () => o().createElement(u, { options: { context: 'model.infoModel' } }, o().createElement(U, null));
        },
        4827: (e, t, a) => {
            let n;
            a.d(t, { B: () => n }),
                (function (e) {
                    (e.China = 'CN'), (e.Ru = 'RU');
                })(n || (n = {}));
        },
        406: (e, t, a) => {
            a.d(t, { B: () => c });
            var n = a(280),
                o = a(6179),
                s = a.n(o);
            const r = {
                    creamColor: 'FormatTextWithColorTags_creamColor_8f',
                    brownColor: 'FormatTextWithColorTags_brownColor_90',
                    credColor: 'FormatTextWithColorTags_credColor_a7',
                    blueColor: 'FormatTextWithColorTags_blueColor_73',
                    lightBlueColor: 'FormatTextWithColorTags_lightBlueColor_fa',
                    goldColor: 'FormatTextWithColorTags_goldColor_d6',
                    grayColor: 'FormatTextWithColorTags_grayColor_8b',
                    whiteSpanish: 'FormatTextWithColorTags_whiteSpanish_4b',
                    bondColor: 'FormatTextWithColorTags_bondColor_53',
                    yellowColor: 'FormatTextWithColorTags_yellowColor_84',
                },
                l = ['text', 'binding', 'className'];
            function i() {
                return (
                    (i = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var a = arguments[t];
                                  for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                              }
                              return e;
                          }),
                    i.apply(null, arguments)
                );
            }
            const c = (0, o.memo)((e) => {
                let t = e.text,
                    a = e.binding,
                    o = e.className,
                    c = (function (e, t) {
                        if (null == e) return {};
                        var a = {};
                        for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                a[n] = e[n];
                            }
                        return a;
                    })(e, l);
                const _ = ((e, t) => {
                        const a =
                                /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                            o = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                            l = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                            i = t ? Object.assign({}, t) : {};
                        let c = a.exec(e),
                            _ = e,
                            m = 0;
                        for (; c; ) {
                            const d = c[0],
                                p = o.exec(d),
                                g = l.exec(d),
                                b = c[1];
                            if (p && g) {
                                const e = p[0],
                                    a = e + m++ + g[0].replaceAll(')', '') + e;
                                (_ = _.replace(d, `%(${a})`)),
                                    (i[a] = r[e]
                                        ? s().createElement(
                                              'span',
                                              { className: r[e] },
                                              s().createElement(n.z, { text: b, binding: t }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: ((u = e), { color: `#${u}` }) },
                                              s().createElement(n.z, { text: b, binding: t }),
                                          ));
                            }
                            c = a.exec(e);
                        }
                        var u;
                        return [_, i];
                    })(t, a),
                    m = _[0],
                    u = _[1];
                return s().createElement(n.z, i({ text: m, classMix: o, binding: u }, c));
            });
        },
        6880: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = {
                base: 'CButton_base_40',
                base__main: 'CButton_base__main_42',
                base__primary: 'CButton_base__primary_7f',
                base__primaryGreen: 'CButton_base__primaryGreen_6f',
                base__primaryRed: 'CButton_base__primaryRed_ec',
                base__secondary: 'CButton_base__secondary_50',
                base__ghost: 'CButton_base__ghost_ed',
                base__extraSmall: 'CButton_base__extraSmall_27',
                base__small: 'CButton_base__small_df',
                base__medium: 'CButton_base__medium_74',
                base__large: 'CButton_base__large_5c',
                base__disabled: 'CButton_base__disabled_d9',
                back: 'CButton_back_e5',
                texture: 'CButton_texture_fe',
                state: 'CButton_state_11',
                base__focus: 'CButton_base__focus_83',
                stateHighlightHover: 'CButton_stateHighlightHover_ff',
                stateHighlightActive: 'CButton_stateHighlightActive_35',
                stateDisabled: 'CButton_stateDisabled_54',
                base__highlightActive: 'CButton_base__highlightActive_b2',
                content: 'CButton_content_cc',
            };
        },
        5287: (e, t, a) => {
            a.d(t, { Z: () => n });
            const n = { base: 'FormatText_base_d0' };
        },
    },
]);
