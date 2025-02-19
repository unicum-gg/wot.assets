'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [554],
    {
        7701: (e, t, s) => {
            s.d(t, { Nm: () => n.Nm, c4: () => r });
            var n = s(7308);
            const a = {
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                },
                r = (0, n.EO)(a);
        },
        7308: (e, t, s) => {
            s.d(t, { EO: () => p, Nm: () => d, he: () => m });
            var n = s(7515),
                a = s(1856),
                r = s(4532),
                o = s(9653),
                l = s(3815),
                c = s(4489),
                i = s(7363),
                u = s(7030);
            let d;
            !(function (e) {
                (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
            })(d || (d = {}));
            const m = {
                    step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                    animationConfig: { tension: 170, friction: 26 },
                },
                p = ({
                    getContainerSize: e,
                    getBounds: t,
                    setScrollPosition: s,
                    getDirection: d,
                    getWrapperSize: p,
                    forceTriggerMouseMove: g,
                }) => {
                    const _ = (e, s) => {
                        const a = t(e),
                            r = a[0],
                            o = a[1];
                        return o <= r ? 0 : (0, n.u)(r, o, s);
                    };
                    return (n = {}) => {
                        const f = n.settings,
                            v = void 0 === f ? m : f,
                            b = (0, i.useRef)(null),
                            h = (0, i.useRef)(null),
                            y = (0, i.useRef)(!1),
                            E = (0, o.q)(),
                            C = (0, c.f)(
                                () => {
                                    g && g();
                                },
                                [],
                                150,
                            ),
                            N = (0, u.useSpring)(() => ({
                                scrollPosition: 0,
                                onChange: (e) => {
                                    const t = b.current;
                                    t && (s(t, e), E.trigger('change', e), g && y.current && C());
                                },
                                onRest: (e) => E.trigger('rest', e),
                                onStart: (e) => E.trigger('start', e),
                                onPause: (e) => E.trigger('pause', e),
                            })),
                            w = N[0],
                            S = N[1],
                            R = (0, i.useCallback)(
                                (e, t, s) => {
                                    var n;
                                    const a = w.scrollPosition.get(),
                                        r = (null != (n = w.scrollPosition.goal) ? n : 0) - a;
                                    return _(e, t * s + r + a);
                                },
                                [w.scrollPosition],
                            ),
                            x = (0, i.useCallback)(
                                (e, { immediate: t = !1, reset: s = !0 } = {}) => {
                                    const n = b.current;
                                    n &&
                                        S.start({
                                            scrollPosition: _(n, e),
                                            immediate: t,
                                            reset: s,
                                            config: v.animationConfig,
                                            from: { scrollPosition: _(n, w.scrollPosition.get()) },
                                        });
                                },
                                [S, v.animationConfig, w.scrollPosition],
                            ),
                            B = (0, i.useCallback)(
                                (e) => {
                                    const t = b.current,
                                        s = h.current;
                                    if (!t || !s) return;
                                    const n = ((e, t) => {
                                            switch (t.type) {
                                                case 'proportional':
                                                    return p(e) / t.factor;
                                                case 'fixed':
                                                    return t.value;
                                            }
                                        })(s, v.step),
                                        a = R(t, e, n);
                                    x(a);
                                },
                                [x, R, v.step],
                            ),
                            P = (0, i.useCallback)(
                                (e) => {
                                    0 !== e.deltaY && B(d(e)),
                                        b.current && E.trigger('mouseWheel', e, w.scrollPosition, t(b.current));
                                },
                                [w.scrollPosition, B, E],
                            ),
                            T = (0, r.M)(
                                () =>
                                    (0, a.v)(() => {
                                        const e = b.current;
                                        e &&
                                            (x(_(e, w.scrollPosition.goal), { immediate: !0 }),
                                            E.trigger('resizeHandled'));
                                    }),
                                [x, w.scrollPosition.goal],
                            ),
                            k = (0, l.z)(() => {
                                const e = b.current;
                                if (!e) return;
                                const t = _(e, w.scrollPosition.goal);
                                t !== w.scrollPosition.goal && x(t, { immediate: !0 }), E.trigger('recalculateContent');
                            });
                        (0, i.useEffect)(
                            () => (
                                window.addEventListener('resize', T),
                                () => {
                                    window.removeEventListener('resize', T);
                                }
                            ),
                            [T],
                        ),
                            (0, i.useEffect)(() => {
                                const e = b.current;
                                if (!e || !g) return;
                                const t = () => {
                                        y.current = !0;
                                    },
                                    s = () => {
                                        y.current = !1;
                                    };
                                return (
                                    e.addEventListener('mouseenter', t),
                                    e.addEventListener('mouseleave', s),
                                    () => {
                                        e.removeEventListener('mouseenter', t), e.removeEventListener('mouseleave', s);
                                    }
                                );
                            }, [b]);
                        return (0, i.useMemo)(
                            () => ({
                                getWrapperSize: () => (h.current ? p(h.current) : void 0),
                                getContainerSize: () => (b.current ? e(b.current) : void 0),
                                getBounds: () =>
                                    b.current
                                        ? t(b.current)
                                        : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                stepTimeout: v.step.clampedArrowStepTimeout,
                                clampPosition: _,
                                handleMouseWheel: P,
                                applyScroll: x,
                                applyStepTo: B,
                                contentRef: b,
                                wrapperRef: h,
                                scrollPosition: S,
                                animationScroll: w,
                                recalculateContent: k,
                                events: { on: E.on, off: E.off },
                            }),
                            [w.scrollPosition, x, B, E.off, E.on, k, P, S, v.step.clampedArrowStepTimeout],
                        );
                    };
                };
        },
        4532: (e, t, s) => {
            s.d(t, { M: () => a });
            var n = s(7363);
            const a = (e, t = []) => {
                const s = (0, n.useRef)(),
                    a = (0, n.useCallback)((...t) => {
                        s.current && s.current(), (s.current = e(...t));
                    }, t);
                return (
                    (0, n.useEffect)(
                        () => () => {
                            s.current && s.current();
                        },
                        [a],
                    ),
                    a
                );
            };
        },
        3815: (e, t, s) => {
            s.d(t, { z: () => r });
            var n = s(7363);
            const a = [];
            function r(e) {
                const t = (0, n.useRef)(e);
                return (
                    (0, n.useLayoutEffect)(() => {
                        t.current = e;
                    }),
                    (0, n.useCallback)((...e) => (0, t.current)(...e), a)
                );
            }
        },
        7509: (e, t, s) => {
            s.d(t, { t: () => m });
            var n = s(6483),
                a = s.n(n),
                r = s(7363),
                o = s.n(r);
            const l = 'GuaranteedNumber_base_73',
                c = 'GuaranteedNumber_countBg_cd',
                i = 'GuaranteedNumber_count_e3',
                u = 'GuaranteedNumber_glow_85',
                d = 'GuaranteedNumber_glow__reverse_7b',
                m = ({
                    boxesCountToGuaranteed: e,
                    glowIcon: t,
                    strongGlowIcon: s,
                    accentCount: n,
                    className: r = '',
                }) =>
                    o().createElement(
                        'div',
                        { className: a()(l, r) },
                        o().createElement('div', { className: c, style: { backgroundImage: `url(${s})` } }),
                        e <= n &&
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement('div', { className: u, style: { backgroundImage: `url(${t})` } }),
                                o().createElement('div', {
                                    className: a()(u, d),
                                    style: { backgroundImage: `url(${t})` },
                                }),
                            ),
                        o().createElement('div', { className: i }, e),
                    );
        },
        4707: (e, t, s) => {
            s.d(t, { z: () => b });
            var n = s(6483),
                a = s.n(n),
                r = s(7363),
                o = s.n(r),
                l = s(8457),
                c = s(4598);
            const i = 'ImageLayer_base_ea',
                u = ({ src: e, className: t, onLoaded: s = c.ZT }) => (
                    ((e, t) => {
                        (0, r.useEffect)(() => {
                            const s = new Image();
                            return (
                                s.addEventListener('load', t),
                                (s.src = e),
                                () => {
                                    s.removeEventListener('load', t);
                                }
                            );
                        }, [e, t]);
                    })(e, s),
                    o().createElement('div', { className: a()(i, t), style: { backgroundImage: `url(${e})` } })
                );
            var d = s(7412);
            var m = s(3905),
                p = s(1354);
            const g = ({
                    src: e,
                    className: t,
                    loop: s = !1,
                    onLoaded: n,
                    onEnded: a,
                    playVideo: l,
                    autoplay: c = !1,
                    onPlay: i,
                }) => {
                    const u = (0, r.useRef)(null),
                        g = (0, p._)(m.p6);
                    (0, r.useEffect)(() => {
                        const e = u.current;
                        e && l && e.goToAndPlay(0);
                    }, [l]);
                    const _ = ((e) => {
                            const t = (0, r.useRef)(0);
                            return (
                                (0, r.useEffect)(() => () => cancelAnimationFrame(t.current), []),
                                [
                                    () => {
                                        const s = () => {
                                            e() && (t.current = requestAnimationFrame(s));
                                        };
                                        s();
                                    },
                                    () => cancelAnimationFrame(t.current),
                                ]
                            );
                        })(() => {
                            var e;
                            const t = null == (e = u.current) ? void 0 : e.getCachedKeyframes();
                            return null == t || !t.length || (null == n || n(), !1);
                        }),
                        f = _[0],
                        v = _[1];
                    return (
                        (0, r.useEffect)(() => (f(), v), []),
                        o().createElement(d.n, {
                            ref: u,
                            className: t,
                            style: g,
                            src: e,
                            autoplay: c,
                            loop: s,
                            onEnded: a,
                            onPlay: i,
                        })
                    );
                },
                _ = 'ResourceLayer_base_fe',
                f = 'ResourceLayer_layer_59',
                v = 'ResourceLayer_layer__video_6a',
                b = ({
                    layer: e,
                    className: t,
                    onLoaded: s,
                    onVideoEnded: n,
                    playVideo: r,
                    loop: c,
                    autoplay: i,
                    onVideoPlay: d,
                }) =>
                    o().createElement(
                        'div',
                        { className: a()(_, t) },
                        e.type === l.U.video &&
                            o().createElement(g, {
                                className: a()(f, v),
                                src: e.src,
                                onLoaded: s,
                                onEnded: n,
                                loop: c,
                                autoplay: i,
                                playVideo: r,
                                onPlay: d,
                            }),
                        e.type === l.U.image && o().createElement(u, { src: e.src, className: f, onLoaded: s }),
                    );
        },
        3727: (e, t, s) => {
            s.d(t, { g: () => d });
            var n = s(6483),
                a = s.n(n),
                r = s(514),
                o = s(7363),
                l = s.n(o);
            const c = 'StatisticsButton_base_30',
                i = 'StatisticsButton_text_34',
                u = 'StatisticsButton_icon_06',
                d = ({ icon: e, label: t, onClick: s, className: n = '' }) =>
                    l().createElement(
                        'div',
                        {
                            className: a()(c, n),
                            onMouseEnter: () => {
                                r.hY.highlight();
                            },
                            onClick: () => {
                                r.hY.yes1(), s();
                            },
                        },
                        l().createElement('div', { className: u, style: { backgroundImage: `url(${e})` } }),
                        l().createElement('div', { className: i }, t),
                    );
        },
        3720: (e, t, s) => {
            s.d(t, { g: () => Me });
            var n = s(7363),
                a = s.n(n),
                r = s(6483),
                o = s.n(r),
                l = s(1856),
                c = s(122),
                i = s(514),
                u = s(9916),
                d = s(3403),
                m = s(3215),
                p = s(4598),
                g = s(3946),
                _ = s(7366),
                f = s(9674);
            const v = {
                    images: {
                        statsIcon: 'statistics.stats',
                        noiseBackground: 'statistics.noise',
                        closeIcon: 'statistics.close_white',
                        infoIcon: 'common.info',
                        scrollLipTop: 'statistics.lipBig',
                    },
                    texts: {
                        header: 'common.statistics.header',
                        emptyHeader: 'common.statistics.emptyHeader',
                        tooltipTitle: 'common.statistics.tooltip.title',
                        tooltipDescription: 'common.statistics.tooltip.body',
                        currency: 'statisticsRewards.count.currency',
                        resetButton: 'statisticsRewards.resetButton.text',
                        resetTooltipDescription: 'statisticsRewards.resetButton.tooltipText',
                    },
                    sounds: { statsClose: f.T.statsClose, statsOpen: f.T.statsOpen },
                },
                b = {
                    dynamicTexts: {
                        boxCategory: 'common.boxCategory.lowerCase',
                        category: 'statisticsRewards.label',
                        defaultCount: 'statisticsRewards.count.default',
                        days: 'statisticsRewards.count.days',
                    },
                },
                h = (0, m.q3)()(
                    ({ observableModel: e }) => {
                        const t = Object.assign(
                                { root: e.object(), categories: e.array('categories') },
                                e.primitives(['eventName', 'openedCount']),
                            ),
                            s = (0, g.Om)(() => (0, _.jh)(v, t.eventName.get()), { equals: p.jv }),
                            n = (0, g.Om)(() => (0, _.kC)(b, t.eventName.get()), { equals: p.jv }),
                            a = (0, g.Om)(() => (0, _.jh)(v, ''), { equals: p.jv }),
                            r = (0, g.Om)(() => t.categories.get(), { equals: p.jv }),
                            o = (0, g.Om)(() => t.eventName.get(), { equals: p.jv });
                        return Object.assign({}, t, {
                            computes: {
                                resources: s,
                                dynamicResources: n,
                                defaultResources: a,
                                categories: r,
                                getEventName: o,
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        reset: e.createCallbackNoArgs('onReset'),
                        updateResetState: e.createCallbackNoArgs('onUpdateResetState'),
                    }),
                ),
                y = h[0],
                E = h[1],
                C = 'Background_base_41',
                N = 'Background_border_ae',
                w = 'Background_noise_95',
                S = ({ className: e = '', background: t }) =>
                    a().createElement(
                        'div',
                        { className: o()(C, e) },
                        a().createElement('div', { className: w, style: { backgroundImage: `url(${t})` } }),
                        a().createElement('div', { className: N }),
                    );
            var x = s(2862),
                B = s(7701),
                P = s(5415),
                T = s(9480),
                k = s(3958),
                L = s(9766),
                I = s(2056);
            const M = ['children'];
            function z() {
                return (
                    (z = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var s = arguments[t];
                                  for (var n in s) ({}).hasOwnProperty.call(s, n) && (e[n] = s[n]);
                              }
                              return e;
                          }),
                    z.apply(null, arguments)
                );
            }
            const O = (e) => {
                    let t = e.children,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var s = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    s[n] = e[n];
                                }
                            return s;
                        })(e, M);
                    return a().createElement(
                        I.u,
                        z(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            s,
                        ),
                        t,
                    );
                },
                W = ['children', 'body', 'header', 'note', 'alert', 'args'];
            function G() {
                return (
                    (G = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var s = arguments[t];
                                  for (var n in s) ({}).hasOwnProperty.call(s, n) && (e[n] = s[n]);
                              }
                              return e;
                          }),
                    G.apply(null, arguments)
                );
            }
            const H = R.views.common.tooltip_window.simple_tooltip_content,
                D = (e) => {
                    let t = e.children,
                        s = e.body,
                        r = e.header,
                        o = e.note,
                        l = e.alert,
                        c = e.args,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var s = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (t.indexOf(n) >= 0) continue;
                                    s[n] = e[n];
                                }
                            return s;
                        })(e, W);
                    const u = (0, n.useMemo)(() => {
                        const e = Object.assign({}, c, { body: s, header: r, note: o, alert: l });
                        for (const t in e) void 0 === e[t] && delete e[t];
                        return e;
                    }, [l, s, r, o, c]);
                    return a().createElement(
                        I.u,
                        G(
                            {
                                contentId:
                                    ((d = null == c ? void 0 : c.hasHtmlContent),
                                    d ? H.SimpleTooltipHtmlContent('resId') : H.SimpleTooltipContent('resId')),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                args: u,
                            },
                            i,
                        ),
                        t,
                    );
                    var d;
                };
            function q() {
                return (
                    (q = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var s = arguments[t];
                                  for (var n in s) ({}).hasOwnProperty.call(s, n) && (e[n] = s[n]);
                              }
                              return e;
                          }),
                    q.apply(null, arguments)
                );
            }
            const $ = ({ children: e, tooltipArgs: t, className: s }) => {
                if (!t) return e;
                const n = a().createElement('div', { className: s }, e);
                if (t.header || t.body) return a().createElement(D, t, n);
                const r = t.contentId;
                return r ? a().createElement(I.u, q({}, t, { contentId: r }), n) : a().createElement(O, t, n);
            };
            let A;
            !(function (e) {
                (e.LootBox = 'lootBox'),
                    (e.Vehicles = 'vehicles'),
                    (e.Style = 'style'),
                    (e.Style3D = 'style_3d'),
                    (e.CrewMember = 'tmanToken'),
                    (e.PremiumPlus = 'premium_plus'),
                    (e.Credits = 'credits'),
                    (e.Gold = 'gold'),
                    (e.Crystal = 'crystal'),
                    (e.FreeXP = 'freeXP'),
                    (e.Customizations = 'customizations'),
                    (e.Attachment = 'attachment'),
                    (e.ExperimentalEquipment = 'experimental_equipment'),
                    (e.Components = 'equipCoin'),
                    (e.ImprovedEquipment = 'improved_equipment'),
                    (e.BountyEquipment = 'trophy_equipment'),
                    (e.StandardEquipment = 'standard_equipment'),
                    (e.Directives = 'battleBooster_gift'),
                    (e.TrainingMaterials = 'training_materials'),
                    (e.Blueprints = 'blueprints'),
                    (e.BattleBonusX5 = 'battle_bonus_x5'),
                    (e.CrewBonusX3 = 'crew_bonus_x3'),
                    (e.PersonalReserves = 'personal_reserves'),
                    (e.Consumables = 'consumables'),
                    (e.Rations = 'rations');
            })(A || (A = {}));
            var X = s(2691),
                V = s(9623);
            const j = {
                    [A.Vehicles]: 'vehicles',
                    [A.Style]: 'style',
                    [A.Style3D]: 'style_3d',
                    [A.CrewMember]: 'tankman',
                    [A.PremiumPlus]: 'premium_plus_universal',
                    [A.Gold]: 'gold',
                    [A.Crystal]: 'crystal',
                    [A.Credits]: 'credits',
                    [A.FreeXP]: 'freeXP',
                    [A.Customizations]: 'customizations',
                    [A.ExperimentalEquipment]: 'expequipments_gift',
                    [A.Components]: 'equipCoin',
                    [A.ImprovedEquipment]: 'deluxe_gift',
                    [A.BountyEquipment]: 'trophy_gift',
                    [A.StandardEquipment]: 'new_device_mi_gift',
                    [A.Directives]: 'battle_booster_gift',
                    [A.TrainingMaterials]: 'training_materials',
                    [A.Blueprints]: 'blueprint_tube',
                    [A.BattleBonusX5]: 'battle_bonus_x5',
                    [A.CrewBonusX3]: 'crew_bonus_x3',
                    [A.PersonalReserves]: 'personal_reserves',
                    [A.Consumables]: 'consumables',
                    [A.Rations]: 'rations',
                },
                Y = [A.Vehicles, A.Style, A.Style3D, A.Attachment],
                F = [
                    A.CrewMember,
                    A.Customizations,
                    A.ExperimentalEquipment,
                    A.ImprovedEquipment,
                    A.BountyEquipment,
                    A.StandardEquipment,
                    A.Directives,
                    A.TrainingMaterials,
                    A.Blueprints,
                    A.PersonalReserves,
                    A.Consumables,
                    A.Rations,
                ],
                U = (e) => e.split('_')[0] === A.LootBox,
                Z = (e) => e.replace(`${A.LootBox}_`, ''),
                Q = (e) => j[e] || e,
                J = (e, t) => {
                    const s = Q(e);
                    return U(e) ? (0, V.Vk)(t, Z(e)) : (0, X.R)(R.images, `gui.maps.icons.quests.bonuses.${t}.${s}`);
                },
                K = R.strings.tooltips.awardItem,
                ee = (e, t) => {
                    if (e.startsWith(A.LootBox)) {
                        const s = e.split('_')[1];
                        return {
                            contentId: R.views.lobby.lootbox_system.tooltips.BoxTooltip('resId'),
                            args: { boxCategory: s, eventName: t },
                        };
                    }
                    if (Y.includes(e) || F.includes(e))
                        return {
                            contentId: R.views.lobby.lootbox_system.tooltips.StatisticsCategoryTooltipView('resId'),
                            args: { bonusesCategory: e, eventName: t },
                        };
                    switch (e) {
                        case A.PremiumPlus:
                            return { header: K.premium_plus.header(), body: K.premium_plus.body() };
                        case A.Credits:
                            return { header: K.credits.header(), body: K.credits.body() };
                        case A.Gold:
                            return { header: K.gold.header(), body: K.gold.body() };
                        case A.Crystal:
                            return { header: K.crystal.header(), body: K.crystal.body() };
                        case A.FreeXP:
                            return { header: K.freeXP.header(), body: K.freeXP.body() };
                        case A.Components:
                            return { header: K.equipCoin.header(), body: K.equipCoin.body() };
                        case A.BattleBonusX5:
                            return {
                                header: R.strings.tooltips.quests.bonuses.token.battle_bonus_x5.header(),
                                body: R.strings.tooltips.quests.bonuses.token.battle_bonus_x5.body(),
                            };
                        case A.CrewBonusX3:
                            return {
                                header: R.strings.tooltips.quests.bonuses.token.crew_bonus_x3.header(),
                                body: R.strings.tooltips.quests.bonuses.token.crew_bonus_x3.body(),
                            };
                        default:
                            return {
                                header: (0, X.R)(R.strings, `${K}.${e}.header`),
                                body: (0, X.R)(R.strings, `${K}.${e}.body`),
                            };
                    }
                };
            var te = s(4401);
            const se = {
                    base: 'RewardsCategory_base_89',
                    base__big: 'RewardsCategory_base__big_9e',
                    icon: 'RewardsCategory_icon_5b',
                    description: 'RewardsCategory_description_19',
                    name: 'RewardsCategory_name_c3',
                    count: 'RewardsCategory_count_91',
                    count__premium_plus: 'RewardsCategory_count__premium_plus_22',
                    count__gold: 'RewardsCategory_count__gold_38',
                    count__credits: 'RewardsCategory_count__credits_ef',
                    count__freeXP: 'RewardsCategory_count__freeXP_3e',
                    count__crystal: 'RewardsCategory_count__crystal_49',
                },
                ne = (0, d.Pi)(({ category: e, imageSize: t, className: s }) => {
                    const n = E().model.computes,
                        r = n.resources().texts,
                        l = n.dynamicResources().dynamicTexts,
                        c = e.type,
                        i = e.count,
                        u = ((e, t, s) => {
                            switch (s.type) {
                                case A.PremiumPlus:
                                    return t.days.plural('days', s.count);
                                case A.Gold:
                                case A.Credits:
                                case A.Crystal:
                                case A.FreeXP:
                                case A.Components:
                                    return e.currency;
                                default:
                                    return t.defaultCount.plural('default', s.count);
                            }
                        })(r, l, e),
                        d = U(c) ? l.boxCategory.dynOpt(Z(c)) : l.category.dyn(Q(c));
                    return a().createElement(
                        $,
                        { tooltipArgs: ee(c, n.getEventName()) },
                        a().createElement(
                            'div',
                            { className: o()(se.base, se[`base__${t}`], s) },
                            a().createElement('div', {
                                className: se.icon,
                                style: { backgroundImage: `url(${J(e.type, t)})` },
                            }),
                            a().createElement(
                                'div',
                                { className: se.description },
                                a().createElement('div', { className: se.name }, d),
                                a().createElement(
                                    'div',
                                    { className: o()(se.count, se[`count__${c}`]) },
                                    a().createElement(L.z, {
                                        text: u,
                                        binding: {
                                            count: i,
                                            currency: a().createElement(L.z, { text: (0, te.QH)(`${i}`) }),
                                        },
                                    }),
                                ),
                            ),
                        ),
                    );
                }),
                ae = 'CategoriesList_base_fb',
                re = 'CategoriesList_empty_90',
                oe = 'CategoriesList_area_76',
                le = 'CategoriesList_base__wide_57',
                ce = 'CategoriesList_scroll_9f',
                ie = 'CategoriesList_scrollContent_43',
                ue = 'CategoriesList_scrollBar_02',
                de = 'CategoriesList_lip_25',
                me = 'CategoriesList_reward_0a',
                pe = 'CategoriesList_reward__odd_1a',
                ge = (0, d.Pi)(({ className: e }) => {
                    const t = E().model.computes,
                        s = t.resources(),
                        n = s.texts,
                        r = s.images,
                        l = t.categories(),
                        c = (0, P.GS)().mediaSize,
                        i = (0, B.c4)();
                    return a().createElement(
                        'div',
                        { className: o()(ae, l.length > 7 && le, e) },
                        a().createElement(
                            k.z,
                            {
                                scrollApi: i,
                                lipImage: r.scrollLipTop,
                                classNames: { base: ce, scrollContent: ie, scrollBar: ue, lip: de },
                            },
                            a().createElement(
                                'div',
                                { className: oe },
                                0 === l.length && a().createElement('div', { className: re }, n.emptyHeader),
                                T.UI(l, (e, t) =>
                                    a().createElement(ne, {
                                        key: t,
                                        category: e,
                                        imageSize: c < P.cJ.Medium ? x.h2.Small : x.h2.Big,
                                        className: o()(me, !(t % 2) && pe),
                                    }),
                                ),
                            ),
                        ),
                    );
                }),
                _e = 'Header_base_e8',
                fe = 'Header_text_6a',
                ve = 'Header_count_5b',
                be = 'Header_icon_50',
                he = (0, d.Pi)(({ className: e = '' }) => {
                    const t = E().model,
                        s = t.computes,
                        n = t.openedCount,
                        r = s.resources(),
                        l = r.texts,
                        c = r.images;
                    return a().createElement(
                        'div',
                        { className: o()(_e, e) },
                        a().createElement(L.z, {
                            text: l.header,
                            binding: { count: a().createElement('span', { className: ve }, n.get()) },
                            classMix: fe,
                        }),
                        a().createElement(
                            D,
                            { header: l.tooltipTitle, body: l.tooltipDescription },
                            a().createElement('div', {
                                className: be,
                                style: { backgroundImage: `url(${c.infoIcon})` },
                            }),
                        ),
                    );
                });
            var ye = s(3457),
                Ee = s(2106);
            const Ce = { base: 'ResetButton_base_d6' },
                Ne = (0, d.Pi)(({ className: e = '' }) => {
                    const t = E(),
                        s = t.model,
                        n = s.computes,
                        r = s.openedCount,
                        l = t.controls,
                        c = n.categories(),
                        i = n.resources().texts;
                    return a().createElement(
                        'div',
                        { className: o()(Ce.base, e) },
                        a().createElement(
                            D,
                            { body: i.resetTooltipDescription },
                            a().createElement(
                                ye.u5,
                                {
                                    type: Ee.L.ghost,
                                    size: ye.qE.medium,
                                    disabled: 0 === c.length && 0 === r.get(),
                                    onClick: l.reset,
                                    mixClass: Ce.button,
                                },
                                i.resetButton,
                            ),
                        ),
                    );
                }),
                we = 'Content_base_5f',
                Se = 'Content_header_2f',
                Re = 'Content_rewards_c0',
                xe = 'Content_reset_e1',
                Be = ({ className: e }) =>
                    a().createElement(
                        'div',
                        { className: o()(we, e) },
                        a().createElement(he, { className: Se }),
                        a().createElement(ge, { className: Re }),
                        a().createElement(Ne, { className: xe }),
                    ),
                Pe = {
                    base: 'Popover_base_6b',
                    base__show: 'Popover_base__show_a5',
                    wrapper: 'Popover_wrapper_20',
                    close: 'Popover_close_2a',
                    background: 'Popover_background_94',
                    content: 'Popover_content_c3',
                    shadow: 'Popover_shadow_f7',
                },
                Te = 'show',
                ke = 'hide',
                Le = (0, d.Pi)(({ onHidden: e, isStatsEnabled: t, className: s }) => {
                    const r = (0, n.useState)(ke),
                        d = r[0],
                        m = r[1],
                        p = E(),
                        g = p.model,
                        _ = g.computes,
                        f = g.root,
                        v = p.controls,
                        b = f.get().isResetCompleted,
                        h = _.resources(),
                        y = h.images,
                        C = h.sounds,
                        N = () => {
                            m(ke), i.hY.sound(C.statsClose);
                        },
                        w = (0, n.useRef)(null);
                    (0, n.useEffect)(() => {
                        const e = w.current;
                        if (e && d === Te) return u.c1.register(e, N), () => u.c1.unregister(e, N);
                    }, [d, w, m]),
                        (0, n.useEffect)(() => {
                            b && (N(), v.updateResetState());
                        }, [b]),
                        (0, n.useEffect)(
                            () =>
                                (0, l.v)(() => {
                                    m(Te), i.hY.sound(C.statsOpen);
                                }),
                            [C, m],
                        ),
                        (0, n.useEffect)(() => {
                            if (d === ke)
                                return (0, c.F)(() => {
                                    e();
                                }, 300);
                        }, [e, d]),
                        (0, n.useEffect)(() => {
                            t || N();
                        }, [t]);
                    return a().createElement(
                        'div',
                        { className: o()(Pe.base, Pe[`base__${d}`], s), ref: w },
                        a().createElement(
                            'div',
                            { className: Pe.wrapper },
                            a().createElement(S, { className: Pe.background, background: `${y.noiseBackground}` }),
                            a().createElement(Be, { className: Pe.content }),
                            a().createElement('div', {
                                className: Pe.close,
                                style: { backgroundImage: `url(${y.closeIcon})` },
                                onClick: () => {
                                    i.hY.yes1(), N();
                                },
                                onMouseEnter: () => {
                                    i.hY.highlight();
                                },
                            }),
                        ),
                        a().createElement('div', { className: Pe.shadow }),
                    );
                }),
                Ie = { context: 'model.hasBoxes.statistics' },
                Me = (e) => a().createElement(y, { options: e.options || Ie }, a().createElement(Le, e));
        },
        8455: (e, t, s) => {
            s.d(t, { mQ: () => O });
            var n = s(6483),
                a = s.n(n),
                r = s(7522),
                o = s(514),
                l = s(4598),
                c = s(9480),
                i = s(7363),
                u = s.n(i),
                d = s(7030),
                m = s(4401),
                p = s(9182),
                g = s(2056),
                _ = s(9766),
                f = s(122),
                v = s(7509);
            const b = 'GuaranteedTip_base_07',
                h = 'GuaranteedTip_base__hover_ed',
                y = 'GuaranteedTip_bg_a1',
                E = 'GuaranteedTip_glow_fd',
                C = 'GuaranteedTip_content_7c',
                N = 'GuaranteedTip_image_86',
                w = 'GuaranteedTip_text_e0',
                S = 'GuaranteedTip_description_21',
                x = 'GuaranteedTip_number_42',
                B = ({
                    icons: e,
                    texts: t,
                    soundHover: s,
                    show: n,
                    boxesCountToGuaranteed: r,
                    setTriggerShown: l,
                    className: c,
                }) => {
                    const d = (0, i.useState)(!1),
                        m = d[0],
                        p = d[1],
                        g = (0, i.useState)(!0),
                        R = g[0],
                        B = g[1],
                        P = m || n,
                        T = !R && P;
                    (0, i.useEffect)(
                        () =>
                            (0, f.F)(() => {
                                B(!1);
                            }, 1050),
                        [],
                    ),
                        (0, i.useEffect)(() => {
                            l(P);
                        }, [P, l]);
                    return u().createElement(
                        'div',
                        {
                            className: a()(b, T && h, c),
                            onMouseEnter: () => {
                                !n && o.hY.sound(s), p(!0);
                            },
                            onMouseLeave: () => p(!1),
                        },
                        u().createElement(
                            'div',
                            { className: C },
                            u().createElement('div', { className: y }),
                            u().createElement('div', {
                                className: N,
                                style: { backgroundImage: `url(${e.guaranteedIco})` },
                            }),
                            u().createElement(
                                'div',
                                { className: w },
                                u().createElement(_.z, {
                                    text: t,
                                    classMix: S,
                                    binding: {
                                        count: u().createElement(v.t, {
                                            boxesCountToGuaranteed: r,
                                            glowIcon: e.glowIcon,
                                            strongGlowIcon: e.numberGlow,
                                            accentCount: 0,
                                            className: x,
                                        }),
                                    },
                                }),
                            ),
                        ),
                        u().createElement('div', { className: E, style: { backgroundImage: `url(${e.slotGlow})` } }),
                    );
                },
                P = {
                    base: 'Tab_base_0c',
                    wrapper: 'Tab_wrapper_11',
                    base__active: 'Tab_base__active_af',
                    base__disable: 'Tab_base__disable_1a',
                    base__default: 'Tab_base__default_7e',
                    shadow: 'Tab_shadow_1b',
                    image: 'Tab_image_4e',
                    image__hovered: 'Tab_image__hovered_08',
                    counter: 'Tab_counter_c4',
                    counter__hovered: 'Tab_counter__hovered_7b',
                    guaranteedTip: 'Tab_guaranteedTip_d9',
                },
                T = R.images.gui.maps.icons.quests.bonuses.s180x135,
                k = ({
                    tab: e,
                    onClick: t,
                    texts: s,
                    soundHover: n,
                    readyTipAnimation: r,
                    tabsGuaranteedCount: l,
                    icons: c,
                    state: d,
                    className: p = '',
                    eventName: _,
                }) => {
                    const f = (0, i.useState)(!1),
                        v = f[0],
                        b = f[1],
                        h = (0, i.useState)(!1),
                        y = h[0],
                        E = h[1],
                        C = r && e.boxesCountToGuaranteed > 0 && e.boxesCountToGuaranteed <= l;
                    (0, i.useEffect)(() => {
                        y || (v && C && o.hY.sound(n));
                    }, [n, v, C, y]);
                    return u().createElement(
                        'div',
                        { className: a()(P.base, P[`base__${d}`], p) },
                        u().createElement(
                            g.u,
                            {
                                ignoreShowDelay: !0,
                                contentId: R.views.lobby.lootbox_system.tooltips.BoxTooltip('resId'),
                                args: { boxCategory: e.boxCategory, eventName: _ },
                                key: e.boxCategory,
                            },
                            u().createElement(
                                'div',
                                {
                                    className: a()(P.wrapper),
                                    onClick: () => {
                                        d !== m.ZM.Disable && t();
                                    },
                                    onMouseEnter: () => {
                                        d === m.ZM.Default && o.hY.highlight(), b(!0);
                                    },
                                    onMouseLeave: () => {
                                        b(!1);
                                    },
                                },
                                v && d === m.ZM.Default && u().createElement('div', { className: P.shadow }),
                                u().createElement('div', {
                                    className: a()(P.image, v && d === m.ZM.Default && P.image__hovered),
                                    style: { backgroundImage: `url(${T.$dyn(`lootBox_${e.boxCategory}`)})` },
                                }),
                                e.boxesCount >= 0 &&
                                    u().createElement(
                                        'div',
                                        { className: a()(P.counter, v && d === m.ZM.Default && P.counter__hovered) },
                                        `×${e.boxesCount}`,
                                    ),
                            ),
                        ),
                        C &&
                            u().createElement(B, {
                                boxesCountToGuaranteed: e.boxesCountToGuaranteed,
                                icons: c,
                                texts: s.plural('tabText', e.boxesCountToGuaranteed),
                                show: v,
                                soundHover: n,
                                setTriggerShown: (e) => E(e),
                                className: P.guaranteedTip,
                            }),
                    );
                },
                L = 'Tabs_base_47',
                I = 'Tabs_tab_73',
                M = 'Tabs_tab__isFirst_d7',
                z = { opacity: 0, transform: 'translateX(-20rem)' },
                O = ({
                    tabs: e,
                    sounds: t,
                    changeTab: s = l.ZT,
                    texts: n,
                    icons: g,
                    tabsGuaranteedCount: _,
                    active: f = '',
                    className: v = '',
                    startAnimation: b = !0,
                    eventName: h,
                }) => {
                    const y = (0, i.useState)(!1),
                        E = y[0],
                        C = y[1],
                        N = ((w = e.length), (S = z), (0, i.useMemo)(() => (0, p.Nj)(w, S), [w, S]));
                    var w, S;
                    const R = (t) => {
                        N[t].start({
                            to: { opacity: 1, transform: 'translateX(0)' },
                            config: { duration: 160, easing: r.Z.easeOutCubic },
                            onRest: () =>
                                ((t) => {
                                    t !== e.length - 1 ? R(t + 1) : C(!0);
                                })(t),
                        });
                    };
                    (0, i.useEffect)(() => {
                        b && R(0);
                    }, [b, e.length]);
                    return u().createElement(
                        'div',
                        { className: a()(L, v) },
                        c.UI(e, (e, r) =>
                            u().createElement(
                                d.animated.div,
                                { style: N[r].springs, className: a()(I, 0 === r && M), key: e.boxCategory },
                                u().createElement(k, {
                                    tab: e,
                                    state: (0, m.y0)(e.boxCategory, f, e.boxesCount),
                                    soundHover: t.entryHover,
                                    onClick: () => {
                                        return (n = e.boxCategory), o.hY.sound(t.switch), void s(n);
                                        var n;
                                    },
                                    texts: n,
                                    icons: g,
                                    readyTipAnimation: E,
                                    tabsGuaranteedCount: _,
                                    eventName: h,
                                }),
                            ),
                        ),
                    );
                };
        },
        8457: (e, t, s) => {
            s.d(t, { U: () => n });
            const n = { image: 'img', video: 'video' };
        },
        3958: (e, t, s) => {
            s.d(t, { z: () => le });
            var n = {};
            s.r(n),
                s.d(n, {
                    Area: () => I,
                    Bar: () => T,
                    DefaultScroll: () => L,
                    Direction: () => _.Nm,
                    defaultSettings: () => _.he,
                    useHorizontalScrollApi: () => v,
                });
            var a = {};
            s.r(a), s.d(a, { Area: () => Q, Bar: () => F, Default: () => Z, useVerticalScrollApi: () => M.c4 });
            var r = s(6483),
                o = s.n(r),
                l = s(1856),
                c = s(7363),
                i = s.n(c),
                u = s(7515),
                d = s(3138),
                m = s(3815);
            function p(e, t, s = []) {
                const n = (0, c.useRef)(0),
                    a = (0, c.useCallback)(() => window.clearInterval(n.current), s || []);
                (0, c.useEffect)(() => a, [a]);
                const r = (null != s ? s : []).concat([t]);
                return [
                    (0, c.useCallback)((s) => {
                        (n.current = window.setInterval(() => e(s, !0), t)), e(s, !1);
                    }, r),
                    a,
                ];
            }
            var g = s(7727),
                _ = s(7308);
            const f = {
                    getBounds: (e) => {
                        var t, s;
                        return [
                            0,
                            e.offsetWidth -
                                (null != (t = null == (s = e.parentElement) ? void 0 : s.offsetWidth) ? t : 0),
                        ];
                    },
                    getContainerSize: (e) => e.offsetWidth,
                    getWrapperSize: (e) => e.offsetWidth,
                    setScrollPosition: (e, t) => {
                        e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? _.Nm.Next : _.Nm.Prev),
                    forceTriggerMouseMove: d.O.view.forceTriggerMouseMove,
                },
                v = (0, _.EO)(f),
                b = 'HorizontalBar_base_49',
                h = 'HorizontalBar_base__nonActive_82',
                y = 'HorizontalBar_leftButton_5f',
                E = 'HorizontalBar_rightButton_03',
                C = 'HorizontalBar_track_0d',
                N = 'HorizontalBar_thumb_fd',
                w = 'HorizontalBar_rail_32',
                S = 'disable',
                R = { pending: !1, offset: 0 },
                x = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                B = () => {},
                P = (e, t) => Math.max(20, e.offsetWidth * t),
                T = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: s = x, onDrag: n = B }) => {
                    const a = (0, c.useRef)(null),
                        r = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        v = (0, c.useRef)(null),
                        T = (0, c.useRef)(null),
                        k = e.stepTimeout || 100,
                        L = (0, c.useState)(R),
                        I = L[0],
                        M = L[1],
                        z = (0, c.useCallback)(
                            (e) => {
                                M(e), T.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: T.current });
                            },
                            [n],
                        ),
                        O = () => {
                            const t = v.current,
                                s = T.current,
                                n = e.getWrapperSize(),
                                a = e.getContainerSize();
                            if (!(n && t && s && a)) return;
                            const o = e.animationScroll.scrollPosition.get(),
                                l = Math.min(1, n / a),
                                c = (0, u.u)(0, 1, o / (a - n)),
                                i = (t.offsetWidth - P(t, l)) * c;
                            (s.style.transform = `translateX(${0 | i}px)`),
                                ((e) => {
                                    if (r.current && f.current && v.current && T.current) {
                                        if (0 === e)
                                            return r.current.classList.add(S), void f.current.classList.remove(S);
                                        if (
                                            ((t = v.current),
                                            (s = T.current),
                                            e - (t.offsetWidth - s.offsetWidth) >= -0.5)
                                        )
                                            return r.current.classList.remove(S), void f.current.classList.add(S);
                                        var t, s;
                                        r.current.classList.remove(S), f.current.classList.remove(S);
                                    }
                                })(i);
                        },
                        W = (0, m.z)(() => {
                            (() => {
                                const t = T.current,
                                    s = v.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(r && t && n && s)) return;
                                const o = Math.min(1, n / r);
                                (t.style.width = `${P(s, o)}px`),
                                    (t.style.display = 'flex'),
                                    a.current && (1 === o ? a.current.classList.add(h) : a.current.classList.remove(h));
                            })(),
                                O();
                        });
                    (0, c.useEffect)(() => (0, l.v)(W)),
                        (0, c.useEffect)(
                            () =>
                                (0, l.v)(() => {
                                    const t = () => {
                                        O();
                                    };
                                    let s = B;
                                    const n = () => {
                                        s(), (s = (0, l.v)(W));
                                    };
                                    return (
                                        e.events.on('recalculateContent', W),
                                        e.events.on('rest', t),
                                        e.events.on('change', t),
                                        e.events.on('resizeHandled', n),
                                        () => {
                                            s(),
                                                e.events.off('recalculateContent', W),
                                                e.events.off('rest', t),
                                                e.events.off('change', t),
                                                e.events.off('resizeHandled', n);
                                        }
                                    );
                                }),
                            [e],
                        ),
                        (0, c.useEffect)(() => {
                            if (!I.pending) return;
                            const t = d.O.client.events.mouse.move(([t, s]) => {
                                    var a;
                                    const r = e.contentRef.current,
                                        o = e.wrapperRef.current;
                                    if (!r || !o) return;
                                    const l = v.current,
                                        c = T.current;
                                    if (!l || !c) return;
                                    if ('inside' === s && t.clientX < 0) return;
                                    const i = t.clientX - I.offset - l.getBoundingClientRect().x,
                                        u = (i / l.offsetWidth) * (null != (a = e.getContainerSize()) ? a : 0);
                                    e.scrollPosition.start({
                                        scrollPosition: e.clampPosition(r, u),
                                        reset: !0,
                                        immediate: !0,
                                        from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                    }),
                                        n({ type: 'dragging', thumb: c, thumbOffset: i, contentOffset: u });
                                }),
                                s = d.O.client.events.mouse.up(() => {
                                    t(), z(R);
                                });
                            return () => {
                                t(), s();
                            };
                        }, [e, I.offset, I.pending, n, z]);
                    const G = p((t) => e.applyStepTo(t), k, [e]),
                        H = G[0],
                        D = G[1];
                    (0, c.useEffect)(
                        () => (
                            document.addEventListener('mouseup', D, !0),
                            () => document.removeEventListener('mouseup', D, !0)
                        ),
                        [D],
                    );
                    const q = (e) => {
                        e.target.classList.contains(S) || (0, g.G)('highlight');
                    };
                    return i().createElement(
                        'div',
                        { className: o()(b, t.base), ref: a, onWheel: e.handleMouseWheel },
                        i().createElement('div', {
                            className: o()(y, t.leftButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(S) || 0 !== e.button || ((0, g.G)('play'), H(_.Nm.Next));
                            },
                            onMouseUp: D,
                            ref: r,
                            onMouseEnter: q,
                        }),
                        i().createElement(
                            'div',
                            {
                                className: o()(C, t.track),
                                onMouseDown: (t) => {
                                    const n = T.current;
                                    if (n && 0 === t.button)
                                        if (((0, g.G)('play'), t.target === n))
                                            z({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                        else {
                                            ((t) => {
                                                const n = T.current,
                                                    a = e.contentRef.current;
                                                if (!n || !a) return;
                                                const r = s(e);
                                                e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                            })(t.screenX > n.getBoundingClientRect().x ? _.Nm.Prev : _.Nm.Next);
                                        }
                                },
                                ref: v,
                                onMouseEnter: q,
                            },
                            i().createElement('div', { ref: T, className: o()(N, t.thumb) }),
                            i().createElement('div', { className: o()(w, t.rail) }),
                        ),
                        i().createElement('div', {
                            className: o()(E, t.rightButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(S) || 0 !== e.button || ((0, g.G)('play'), H(_.Nm.Prev));
                            },
                            onMouseUp: D,
                            ref: f,
                            onMouseEnter: q,
                        }),
                    );
                }),
                k = {
                    base: 'HorizontalScroll_base_29',
                    wrapper: 'HorizontalScroll_wrapper_1e',
                    defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                },
                L = ({
                    children: e,
                    api: t,
                    className: s,
                    barClassNames: n,
                    areaClassName: a,
                    classNames: r,
                    scrollClassName: l,
                    getStepByRailClick: u,
                    onDrag: d,
                }) => {
                    const m = (0, c.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: o()(k.base, e.base) });
                        }, [n]),
                        p = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: o()(k.defaultScroll, s), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(k.defaultScrollArea, a) },
                            i().createElement(I, { className: l, api: p, classNames: r }, e),
                        ),
                        i().createElement(T, { getStepByRailClick: u, api: t, onDrag: d, classNames: m }),
                    );
                },
                I = ({ api: e, className: t, classNames: s, children: n }) => (
                    (0, c.useEffect)(() => (0, l.v)(e.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: o()(k.base, t) },
                        i().createElement(
                            'div',
                            {
                                className: o()(k.wrapper, null == s ? void 0 : s.wrapper),
                                onWheel: e.handleMouseWheel,
                                ref: e.wrapperRef,
                            },
                            i().createElement(
                                'div',
                                { className: o()(k.content, null == s ? void 0 : s.content), ref: e.contentRef },
                                n,
                            ),
                        ),
                    )
                );
            (I.Bar = T), (I.Default = L);
            var M = s(7701);
            const z = 'VerticalBar_base_f3',
                O = 'VerticalBar_base__nonActive_42',
                W = 'VerticalBar_topButton_d7',
                G = 'VerticalBar_bottomButton_06',
                H = 'VerticalBar_track_df',
                D = 'VerticalBar_thumb_32',
                q = 'VerticalBar_rail_43',
                $ = 'disable',
                A = () => {},
                X = { pending: !1, offset: 0 },
                V = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                j = (e, t) => {
                    e.contentRef.current && t(e.contentRef.current);
                },
                Y = (e, t) => Math.max(20, e.offsetHeight * t),
                F = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: s = V, onDrag: n = A }) => {
                    const a = (0, c.useRef)(null),
                        r = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        v = (0, c.useRef)(null),
                        b = e.stepTimeout || 100,
                        h = (0, c.useState)(X),
                        y = h[0],
                        E = h[1],
                        C = (0, c.useCallback)(
                            (e) => {
                                E(e), v.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current });
                            },
                            [n],
                        ),
                        N = (0, m.z)(() => {
                            const t = v.current,
                                s = f.current,
                                n = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(n && r && t && s)) return;
                            const o = Math.min(1, n / r);
                            return (
                                (t.style.height = `${Y(s, o)}px`),
                                (t.style.display = 'flex'),
                                a.current && (1 === o ? a.current.classList.add(O) : a.current.classList.remove(O)),
                                o
                            );
                        }),
                        w = (0, m.z)(() => {
                            const t = f.current,
                                s = v.current,
                                n = e.getWrapperSize(),
                                a = e.getContainerSize();
                            if (!(n && t && s && a)) return;
                            const o = e.animationScroll.scrollPosition.get(),
                                l = Math.min(1, n / a),
                                c = (0, u.u)(0, 1, o / (a - n)),
                                i = (t.offsetHeight - Y(t, l)) * c;
                            (s.style.transform = `translateY(${0 | i}px)`),
                                ((e) => {
                                    if (r.current && _.current && f.current && v.current) {
                                        if (0 === Math.round(e))
                                            return r.current.classList.add($), void _.current.classList.remove($);
                                        if (
                                            ((t = f.current),
                                            (s = v.current),
                                            e - (t.offsetHeight - s.offsetHeight) >= -0.5)
                                        )
                                            return r.current.classList.remove($), void _.current.classList.add($);
                                        var t, s;
                                        r.current.classList.remove($), _.current.classList.remove($);
                                    }
                                })(i);
                        }),
                        S = (0, m.z)(() => {
                            j(e, () => {
                                N(), w();
                            });
                        });
                    (0, c.useEffect)(() => (0, l.v)(S)),
                        (0, c.useEffect)(() => {
                            const t = () => {
                                j(e, () => {
                                    w();
                                });
                            };
                            let s = A;
                            const n = () => {
                                s(), (s = (0, l.v)(S));
                            };
                            return (
                                e.events.on('recalculateContent', S),
                                e.events.on('rest', t),
                                e.events.on('change', t),
                                e.events.on('resizeHandled', n),
                                () => {
                                    s(),
                                        e.events.off('recalculateContent', S),
                                        e.events.off('rest', t),
                                        e.events.off('change', t),
                                        e.events.off('resizeHandled', n);
                                }
                            );
                        }, [e]),
                        (0, c.useEffect)(() => {
                            if (!y.pending) return;
                            const t = d.O.client.events.mouse.up(() => {
                                    C(X);
                                }),
                                s = d.O.client.events.mouse.move(([t]) => {
                                    j(e, (s) => {
                                        const a = f.current,
                                            r = v.current,
                                            o = e.getContainerSize();
                                        if (!a || !r || !o) return;
                                        const l = t.screenY - y.offset - a.getBoundingClientRect().y,
                                            c = (l / a.offsetHeight) * o;
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: s.scrollTop },
                                        }),
                                            n({ type: 'dragging', thumb: r, thumbOffset: l, contentOffset: c });
                                    });
                                });
                            return () => {
                                t(), s();
                            };
                        }, [e, y.offset, y.pending, n, C]);
                    const R = p((t) => e.applyStepTo(t), b, [e]),
                        x = R[0],
                        B = R[1];
                    (0, c.useEffect)(
                        () => (
                            document.addEventListener('mouseup', B, !0),
                            () => document.removeEventListener('mouseup', B, !0)
                        ),
                        [B],
                    );
                    const P = (e) => {
                        e.target.classList.contains($) || (0, g.G)('highlight');
                    };
                    return i().createElement(
                        'div',
                        { className: o()(z, t.base), ref: a, onWheel: e.handleMouseWheel },
                        i().createElement('div', {
                            className: o()(W, t.topButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains($) || 0 !== e.button || ((0, g.G)('play'), x(M.Nm.Next));
                            },
                            ref: r,
                            onMouseEnter: P,
                        }),
                        i().createElement(
                            'div',
                            {
                                className: o()(H, t.track),
                                onMouseDown: (t) => {
                                    const n = v.current;
                                    if (n && 0 === t.button)
                                        if (((0, g.G)('play'), t.target === n))
                                            C({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                        else {
                                            ((t) => {
                                                v.current &&
                                                    j(e, (n) => {
                                                        if (!n) return;
                                                        const a = s(e),
                                                            r = e.clampPosition(n, n.scrollTop + a * t);
                                                        e.applyScroll(r);
                                                    });
                                            })(t.screenY > n.getBoundingClientRect().y ? M.Nm.Prev : M.Nm.Next);
                                        }
                                },
                                ref: f,
                                onMouseEnter: P,
                            },
                            i().createElement('div', { ref: v, className: o()(D, t.thumb) }),
                            i().createElement('div', { className: o()(q, t.rail) }),
                        ),
                        i().createElement('div', {
                            className: o()(G, t.bottomButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains($) || 0 !== e.button || ((0, g.G)('play'), x(M.Nm.Prev));
                            },
                            onMouseUp: B,
                            ref: _,
                            onMouseEnter: P,
                        }),
                    );
                }),
                U = {
                    content: 'VerticalScroll_content_cb',
                    defaultScroll: 'VerticalScroll_defaultScroll_f8',
                    bar: 'VerticalScroll_bar_1e',
                    area: 'VerticalScroll_area_af',
                },
                Z = ({
                    children: e,
                    api: t,
                    className: s,
                    barClassNames: n,
                    areaClassName: a,
                    scrollClassName: r,
                    scrollClassNames: l,
                    getStepByRailClick: u,
                    onDrag: d,
                }) => {
                    const m = (0, c.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: o()(U.base, e.base) });
                        }, [n]),
                        p = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: o()(U.defaultScroll, s), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(U.area, a) },
                            i().createElement(Q, { className: r, classNames: l, api: p }, e),
                        ),
                        i().createElement(F, { getStepByRailClick: u, api: t, onDrag: d, classNames: m }),
                    );
                },
                Q = ({ className: e, classNames: t, children: s, api: n }) => (
                    (0, c.useEffect)(() => (0, l.v)(n.recalculateContent)),
                    i().createElement(
                        'div',
                        { className: o()(U.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(U.content, null == t ? void 0 : t.content), ref: n.contentRef },
                            s,
                        ),
                    )
                );
            Q.Default = Z;
            const J = { Vertical: a, Horizontal: n };
            let K;
            !(function (e) {
                (e[(e.Idle = 0)] = 'Idle'),
                    (e[(e.Start = 1)] = 'Start'),
                    (e[(e.Between = 2)] = 'Between'),
                    (e[(e.End = 3)] = 'End');
            })(K || (K = {}));
            const ee = 'ScrollWithLips_base_25',
                te = 'ScrollWithLips_lip_da',
                se = 'ScrollWithLips_lip__top_34',
                ne = 'ScrollWithLips_lip__bottom_13',
                ae = 'ScrollWithLips_scroll_70',
                re = 'ScrollWithLips_scroll__loaded_12',
                oe = 'ScrollWithLips_scrollContent_1e',
                le = ({ scrollApi: e, classNames: t, children: s, lipImage: n }) => {
                    const a = (0, c.useState)(K.Between),
                        r = a[0],
                        l = a[1],
                        u = r !== K.Idle,
                        d = (0, m.z)(() => {
                            const t = e.getBounds(),
                                s = t[0],
                                n = t[1],
                                a = e.animationScroll.scrollPosition.goal,
                                r = e.getContainerSize(),
                                o = e.getWrapperSize();
                            if (r && o)
                                if (r !== o)
                                    switch (a) {
                                        case s:
                                            l(K.Start);
                                            break;
                                        case n:
                                            l(K.End);
                                            break;
                                        default:
                                            l(K.Between);
                                    }
                                else l(K.Idle);
                        });
                    return (
                        (0, c.useEffect)(
                            () => (
                                e.events.on('change', d),
                                e.events.on('recalculateContent', d),
                                e.events.on('resizeHandled', d),
                                () => {
                                    e.events.off('change', d),
                                        e.events.off('recalculateContent', d),
                                        e.events.off('resizeHandled', d);
                                }
                            ),
                            [e.events, d],
                        ),
                        i().createElement(
                            'div',
                            { className: o()(ee, (null == t ? void 0 : t.base) || '') },
                            r !== K.Start &&
                                r !== K.Idle &&
                                i().createElement('div', {
                                    className: o()(te, se, (null == t ? void 0 : t.lip) || ''),
                                    style: { backgroundImage: `url(${n})` },
                                }),
                            r !== K.End &&
                                r !== K.Idle &&
                                i().createElement('div', {
                                    className: o()(te, ne, (null == t ? void 0 : t.lip) || ''),
                                    style: { backgroundImage: `url(${n})` },
                                }),
                            i().createElement(
                                J.Vertical.Area,
                                { api: e, className: o()(oe, (null == t ? void 0 : t.scrollContent) || '') },
                                s,
                            ),
                            i().createElement(J.Vertical.Bar, {
                                api: e,
                                classNames: { base: o()(ae, u && re, null == t ? void 0 : t.scrollBar) },
                            }),
                        )
                    );
                };
        },
        8043: (e, t, s) => {
            s.d(t, { e: () => n });
            const n = {
                icon: { emptyIconBrightness: 0.3, boxesIconBrightness: 0.3 },
                shine: { opacityCustom: 0.15, opacityCustomNewBox: 0.4, opacityDiff: 0.15, animationDuration: '40s' },
            };
        },
        1717: (e, t, s) => {
            s.d(t, { X: () => n });
            const n = {
                hasIdle: !0,
                vignette: { isEnabled: !0, opacity: 0.4 },
                tabsGuaranteedCount: 10,
                accentCount: 5,
                hoverZone: { width: '38%', height: '39%', horizontalOffset: '30.8%', verticalOffset: '39%' },
                backgroundColor: '#111',
            };
        },
        4201: (e, t, s) => {
            s.d(t, { g: () => l });
            var n = s(8043),
                a = s(1717),
                r = s(5696),
                o = s(5e3);
            const l = { ENTRY_POINT: n.e, HAS_BOXES_VIEW: a.X, INFO_PAGE: r.q, REWARDS: o.O };
        },
        5696: (e, t, s) => {
            s.d(t, { q: () => n });
            const n = { hasDescription: !0 };
        },
        5e3: (e, t, s) => {
            s.d(t, { O: () => n });
            const n = { accentCount: 5 };
        },
        9606: (e, t, s) => {
            s.d(t, { e: () => n });
            const n = { icon: { emptyIconBrightness: 0.2 } };
        },
        2735: (e, t, s) => {
            s.d(t, { X: () => n });
            const n = { hasIdle: !1, tabsGuaranteedCount: 5 };
        },
        5096: (e, t, s) => {
            s.d(t, { j: () => o });
            var n = s(9606),
                a = s(2735),
                r = s(4607);
            const o = { ENTRY_POINT: n.e, HAS_BOXES_VIEW: a.X, INFO_PAGE: r.q };
        },
        4607: (e, t, s) => {
            s.d(t, { q: () => n });
            const n = { hasDescription: !0 };
        },
        3460: (e, t, s) => {
            s.d(t, { v: () => a });
            var n = s(5096);
            const a = { DEFAULT_CONFIG: s(4201).g, anniversaryCN: n.j };
        },
        9217: (e, t, s) => {
            s.d(t, { k: () => a });
            var n = s(2065);
            const a = (e, t) => {
                const s = (0, n.$)(e, t),
                    a = s.split(':')[0];
                return { src: s, type: a };
            };
        },
        1440: (e, t, s) => {
            s.d(t, { i: () => o });
            var n = s(3649),
                a = s(3460),
                r = s(4201);
            const o = (e, t) => {
                const s = a.v[(0, n.TD)(e)];
                return s
                    ? ((e, t) => {
                          const s = (e, t) => {
                              const n = Object.assign({}, e);
                              for (const e in n) {
                                  var a, r;
                                  t &&
                                      e in t &&
                                      ('object' == typeof n[e]
                                          ? (n[e] = s(n[e], null != (a = t[e]) ? a : n[e]))
                                          : (n[e] = null != (r = t[e]) ? r : n[e]));
                              }
                              return n;
                          };
                          return s(e, t);
                      })(r.g[t], s[t])
                    : r.g[t];
            };
        },
        2065: (e, t, s) => {
            s.d(t, { $: () => a, H: () => r });
            var n = s(3905);
            const a = (e, t) => o(e, t),
                r = (e, t) => o(e, t),
                o = (e, t) => {
                    const s = t && !t.includes(n.TP),
                        a = e && !e.includes(n.TP);
                    return s ? t : a ? e : t || e;
                };
        },
    },
]);
