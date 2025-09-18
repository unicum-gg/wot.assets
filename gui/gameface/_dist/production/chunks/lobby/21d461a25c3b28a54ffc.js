'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [410],
    {
        7701: (e, t, s) => {
            s.d(t, { Nm: () => n.Nm, c4: () => a });
            var n = s(7308);
            const r = {
                    getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                    getContainerSize: (e) => e.scrollHeight,
                    getWrapperSize: (e) => e.offsetHeight,
                    setScrollPosition: (e, t) => {
                        e.scrollTop = t.value.scrollPosition;
                    },
                    getDirection: (e) => (e.deltaY > 1 ? n.Nm.Next : n.Nm.Prev),
                },
                a = (0, n.EO)(r);
        },
        7308: (e, t, s) => {
            s.d(t, { EO: () => p, Nm: () => d, he: () => m });
            var n = s(7515),
                r = s(1856),
                a = s(4532),
                o = s(9653),
                c = s(3815),
                l = s(4489),
                i = s(7363),
                u = s(7030);
            let d;
            !(function (e) {
                ((e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev'));
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
                        const r = t(e),
                            a = r[0],
                            o = r[1];
                        return o <= a ? 0 : (0, n.u)(a, o, s);
                    };
                    return (n = {}) => {
                        const f = n.settings,
                            v = void 0 === f ? m : f,
                            b = (0, i.useRef)(null),
                            h = (0, i.useRef)(null),
                            y = (0, i.useRef)(!1),
                            E = (0, o.q)(),
                            C = (0, l.f)(
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
                            x = (0, i.useCallback)(
                                (e, t, s) => {
                                    var n;
                                    const r = w.scrollPosition.get(),
                                        a = (null != (n = w.scrollPosition.goal) ? n : 0) - r;
                                    return _(e, t * s + a + r);
                                },
                                [w.scrollPosition],
                            ),
                            R = (0, i.useCallback)(
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
                                        r = x(t, e, n);
                                    R(r);
                                },
                                [R, x, v.step],
                            ),
                            P = (0, i.useCallback)(
                                (e) => {
                                    (0 !== e.deltaY && B(d(e)),
                                        b.current && E.trigger('mouseWheel', e, w.scrollPosition, t(b.current)));
                                },
                                [w.scrollPosition, B, E],
                            ),
                            T = (0, a.M)(
                                () =>
                                    (0, r.v)(() => {
                                        const e = b.current;
                                        e &&
                                            (R(_(e, w.scrollPosition.goal), { immediate: !0 }),
                                            E.trigger('resizeHandled'));
                                    }),
                                [R, w.scrollPosition.goal],
                            ),
                            k = (0, c.z)(() => {
                                const e = b.current;
                                if (!e) return;
                                const t = _(e, w.scrollPosition.goal);
                                (t !== w.scrollPosition.goal && R(t, { immediate: !0 }),
                                    E.trigger('recalculateContent'));
                            });
                        ((0, i.useEffect)(
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
                                        (e.removeEventListener('mouseenter', t),
                                            e.removeEventListener('mouseleave', s));
                                    }
                                );
                            }, [b]));
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
                                applyScroll: R,
                                applyStepTo: B,
                                contentRef: b,
                                wrapperRef: h,
                                scrollPosition: S,
                                animationScroll: w,
                                recalculateContent: k,
                                events: { on: E.on, off: E.off },
                            }),
                            [w.scrollPosition, R, B, E.off, E.on, k, P, S, v.step.clampedArrowStepTimeout],
                        );
                    };
                };
        },
        4532: (e, t, s) => {
            s.d(t, { M: () => r });
            var n = s(7363);
            const r = (e, t = []) => {
                const s = (0, n.useRef)(),
                    r = (0, n.useCallback)((...t) => {
                        (s.current && s.current(), (s.current = e(...t)));
                    }, t);
                return (
                    (0, n.useEffect)(
                        () => () => {
                            s.current && s.current();
                        },
                        [r],
                    ),
                    r
                );
            };
        },
        3815: (e, t, s) => {
            s.d(t, { z: () => a });
            var n = s(7363);
            const r = [];
            function a(e) {
                const t = (0, n.useRef)(e);
                return (
                    (0, n.useLayoutEffect)(() => {
                        t.current = e;
                    }),
                    (0, n.useCallback)((...e) => (0, t.current)(...e), r)
                );
            }
        },
        7509: (e, t, s) => {
            s.d(t, { t: () => m });
            var n = s(6483),
                r = s.n(n),
                a = s(7363),
                o = s.n(a);
            const c = 'GuaranteedNumber_base_73',
                l = 'GuaranteedNumber_countBg_cd',
                i = 'GuaranteedNumber_count_e3',
                u = 'GuaranteedNumber_glow_85',
                d = 'GuaranteedNumber_glow__reverse_7b',
                m = ({
                    boxesCountToGuaranteed: e,
                    glowIcon: t,
                    strongGlowIcon: s,
                    accentCount: n,
                    className: a = '',
                }) =>
                    o().createElement(
                        'div',
                        { className: r()(c, a) },
                        o().createElement('div', { className: l, style: { backgroundImage: `url(${s})` } }),
                        e <= n &&
                            o().createElement(
                                o().Fragment,
                                null,
                                o().createElement('div', { className: u, style: { backgroundImage: `url(${t})` } }),
                                o().createElement('div', {
                                    className: r()(u, d),
                                    style: { backgroundImage: `url(${t})` },
                                }),
                            ),
                        o().createElement('div', { className: i }, e),
                    );
        },
        4707: (e, t, s) => {
            s.d(t, { z: () => b });
            var n = s(6483),
                r = s.n(n),
                a = s(7363),
                o = s.n(a),
                c = s(8457),
                l = s(4598);
            const i = 'ImageLayer_base_ea',
                u = ({ src: e, className: t, onLoaded: s = l.ZT }) => (
                    ((e, t) => {
                        (0, a.useEffect)(() => {
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
                    o().createElement('div', { className: r()(i, t), style: { backgroundImage: `url(${e})` } })
                );
            var d = s(7412);
            var m = s(3905),
                p = s(1354);
            const g = ({
                    src: e,
                    className: t,
                    loop: s = !1,
                    onLoaded: n,
                    onEnded: r,
                    playVideo: c,
                    autoplay: l = !1,
                    onPlay: i,
                    shouldCleanUp: u = !1,
                }) => {
                    const g = (0, a.useRef)(null),
                        _ = (0, p._)(m.p6);
                    (0, a.useEffect)(() => {
                        const e = g.current;
                        e && c && e.goToAndPlay(0);
                    }, [c]);
                    const f = ((e) => {
                            const t = (0, a.useRef)(0);
                            return (
                                (0, a.useEffect)(() => () => cancelAnimationFrame(t.current), []),
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
                            const t = null == (e = g.current) ? void 0 : e.getCachedKeyframes();
                            return null == t || !t.length || (null == n || n(), !1);
                        }),
                        v = f[0],
                        b = f[1];
                    return (
                        (0, a.useEffect)(() => (v(), b), []),
                        (0, a.useEffect)(() => {
                            if (u) {
                                const e = g.current;
                                return () => {
                                    e && (e.domRef.src = '');
                                };
                            }
                        }, [u, g]),
                        o().createElement(d.n, {
                            ref: g,
                            className: t,
                            style: _,
                            src: e,
                            autoplay: l,
                            loop: s,
                            onEnded: r,
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
                    playVideo: a,
                    loop: l,
                    autoplay: i,
                    onVideoPlay: d,
                    shouldCleanUp: m,
                }) =>
                    o().createElement(
                        'div',
                        { className: r()(_, t) },
                        e.type === c.U.video &&
                            o().createElement(g, {
                                className: r()(f, v),
                                src: e.src,
                                onLoaded: s,
                                onEnded: n,
                                loop: l,
                                autoplay: i,
                                playVideo: a,
                                onPlay: d,
                                shouldCleanUp: m,
                            }),
                        e.type === c.U.image && o().createElement(u, { src: e.src, className: f, onLoaded: s }),
                    );
        },
        3727: (e, t, s) => {
            s.d(t, { g: () => d });
            var n = s(6483),
                r = s.n(n),
                a = s(514),
                o = s(7363),
                c = s.n(o);
            const l = 'StatisticsButton_base_30',
                i = 'StatisticsButton_text_34',
                u = 'StatisticsButton_icon_06',
                d = ({ icon: e, label: t, onClick: s, className: n = '' }) =>
                    c().createElement(
                        'div',
                        {
                            className: r()(l, n),
                            onMouseEnter: () => {
                                a.hY.highlight();
                            },
                            onClick: () => {
                                (a.hY.yes1(), s());
                            },
                        },
                        c().createElement('div', { className: u, style: { backgroundImage: `url(${e})` } }),
                        c().createElement('div', { className: i }, t),
                    );
        },
        3720: (e, t, s) => {
            s.d(t, { g: () => Me });
            var n = s(7363),
                r = s.n(n),
                a = s(6483),
                o = s.n(a),
                c = s(1856),
                l = s(122),
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
                        defaultCount: 'common.rewards.count',
                        rewardsPremiumDay: 'common.rewards.premiumDay',
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
                            r = (0, g.Om)(() => (0, _.jh)(v, ''), { equals: p.jv }),
                            a = (0, g.Om)(() => t.categories.get(), { equals: p.jv }),
                            o = (0, g.Om)(() => t.eventName.get(), { equals: p.jv });
                        return Object.assign({}, t, {
                            computes: {
                                resources: s,
                                dynamicResources: n,
                                defaultResources: r,
                                categories: a,
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
                    r().createElement(
                        'div',
                        { className: o()(C, e) },
                        r().createElement('div', { className: w, style: { backgroundImage: `url(${t})` } }),
                        r().createElement('div', { className: N }),
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
                    (z =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var s = arguments[t];
                                for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
                            }
                            return e;
                        }),
                    z.apply(this, arguments)
                );
            }
            const O = (e) => {
                    let t = e.children,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var s,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]));
                            return r;
                        })(e, M);
                    return r().createElement(
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
                D = ['children', 'body', 'header', 'note', 'alert', 'args'];
            function W() {
                return (
                    (W =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var s = arguments[t];
                                for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
                            }
                            return e;
                        }),
                    W.apply(this, arguments)
                );
            }
            const G = R.views.common.tooltip_window.simple_tooltip_content,
                H = (e) => {
                    let t = e.children,
                        s = e.body,
                        a = e.header,
                        o = e.note,
                        c = e.alert,
                        l = e.args,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var s,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) ((s = a[n]), t.indexOf(s) >= 0 || (r[s] = e[s]));
                            return r;
                        })(e, D);
                    const u = (0, n.useMemo)(() => {
                        const e = Object.assign({}, l, { body: s, header: a, note: o, alert: c });
                        for (const t in e) void 0 === e[t] && delete e[t];
                        return e;
                    }, [c, s, a, o, l]);
                    return r().createElement(
                        I.u,
                        W(
                            {
                                contentId:
                                    ((d = null == l ? void 0 : l.hasHtmlContent),
                                    d ? G.SimpleTooltipHtmlContent('resId') : G.SimpleTooltipContent('resId')),
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
                    (q =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var s = arguments[t];
                                for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
                            }
                            return e;
                        }),
                    q.apply(this, arguments)
                );
            }
            const $ = ({ children: e, tooltipArgs: t, className: s }) => {
                if (!t) return e;
                const n = r().createElement('div', { className: s }, e);
                if (t.header || t.body) return r().createElement(H, t, n);
                const a = t.contentId;
                return a ? r().createElement(I.u, q({}, t, { contentId: a }), n) : r().createElement(O, t, n);
            };
            let A;
            !(function (e) {
                ((e.LootBox = 'lootBox'),
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
                    (e.Rations = 'rations'));
            })(A || (A = {}));
            var X = s(2691),
                j = s(9623);
            const V = {
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
                Q = (e) => V[e] || e,
                J = (e, t) => {
                    const s = Q(e);
                    return U(e) ? (0, j.Vk)(t, Z(e)) : (0, X.R)(R.images, `gui.maps.icons.quests.bonuses.${t}.${s}`);
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
                        a = n.resources().texts,
                        c = n.dynamicResources().dynamicTexts,
                        l = e.type,
                        i = e.count,
                        u = ((e, t, s) => {
                            switch (s.type) {
                                case A.PremiumPlus:
                                    return `${s.count} ${t.rewardsPremiumDay.plural('premiumDay', s.count)}`;
                                case A.Gold:
                                case A.Credits:
                                case A.Crystal:
                                case A.FreeXP:
                                case A.Components:
                                    return e.currency;
                                default:
                                    return t.defaultCount.plural('count', s.count);
                            }
                        })(a, c, e),
                        d = U(l) ? c.boxCategory.dynOpt(Z(l)) : c.category.dyn(Q(l));
                    return r().createElement(
                        $,
                        { tooltipArgs: ee(l, n.getEventName()) },
                        r().createElement(
                            'div',
                            { className: o()(se.base, se[`base__${t}`], s) },
                            r().createElement('div', {
                                className: se.icon,
                                style: { backgroundImage: `url(${J(e.type, t)})` },
                            }),
                            r().createElement(
                                'div',
                                { className: se.description },
                                r().createElement('div', { className: se.name }, d),
                                r().createElement(
                                    'div',
                                    { className: o()(se.count, se[`count__${l}`]) },
                                    r().createElement(L.z, {
                                        text: u,
                                        binding: {
                                            count: i,
                                            currency: r().createElement(L.z, { text: (0, te.QH)(`${i}`) }),
                                        },
                                    }),
                                ),
                            ),
                        ),
                    );
                }),
                re = 'CategoriesList_base_fb',
                ae = 'CategoriesList_empty_90',
                oe = 'CategoriesList_area_76',
                ce = 'CategoriesList_base__wide_57',
                le = 'CategoriesList_scroll_9f',
                ie = 'CategoriesList_scrollContent_43',
                ue = 'CategoriesList_scrollBar_02',
                de = 'CategoriesList_lip_25',
                me = 'CategoriesList_reward_0a',
                pe = 'CategoriesList_reward__odd_1a',
                ge = (0, d.Pi)(({ className: e }) => {
                    const t = E().model.computes,
                        s = t.resources(),
                        n = s.texts,
                        a = s.images,
                        c = t.categories(),
                        l = (0, P.GS)().mediaSize,
                        i = (0, B.c4)();
                    return r().createElement(
                        'div',
                        { className: o()(re, c.length > 7 && ce, e) },
                        r().createElement(
                            k.z,
                            {
                                scrollApi: i,
                                lipImage: a.scrollLipTop,
                                classNames: { base: le, scrollContent: ie, scrollBar: ue, lip: de },
                            },
                            r().createElement(
                                'div',
                                { className: oe },
                                0 === c.length && r().createElement('div', { className: ae }, n.emptyHeader),
                                T.UI(c, (e, t) =>
                                    r().createElement(ne, {
                                        key: t,
                                        category: e,
                                        imageSize: l < P.cJ.Medium ? x.h2.Small : x.h2.Big,
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
                        a = s.resources(),
                        c = a.texts,
                        l = a.images;
                    return r().createElement(
                        'div',
                        { className: o()(_e, e) },
                        r().createElement(L.z, {
                            text: c.header,
                            binding: { count: r().createElement('span', { className: ve }, n.get()) },
                            classMix: fe,
                        }),
                        r().createElement(
                            H,
                            { header: c.tooltipTitle, body: c.tooltipDescription },
                            r().createElement('div', {
                                className: be,
                                style: { backgroundImage: `url(${l.infoIcon})` },
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
                        a = s.openedCount,
                        c = t.controls,
                        l = n.categories(),
                        i = n.resources().texts;
                    return r().createElement(
                        'div',
                        { className: o()(Ce.base, e) },
                        r().createElement(
                            H,
                            { body: i.resetTooltipDescription },
                            r().createElement(
                                ye.u5,
                                {
                                    type: Ee.L.ghost,
                                    size: ye.qE.medium,
                                    disabled: 0 === l.length && 0 === a.get(),
                                    onClick: c.reset,
                                    mixClass: Ce.button,
                                },
                                i.resetButton,
                            ),
                        ),
                    );
                }),
                we = 'Content_base_5f',
                Se = 'Content_header_2f',
                xe = 'Content_rewards_c0',
                Re = 'Content_reset_e1',
                Be = ({ className: e }) =>
                    r().createElement(
                        'div',
                        { className: o()(we, e) },
                        r().createElement(he, { className: Se }),
                        r().createElement(ge, { className: xe }),
                        r().createElement(Ne, { className: Re }),
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
                    const a = (0, n.useState)(ke),
                        d = a[0],
                        m = a[1],
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
                            (m(ke), i.hY.sound(C.statsClose));
                        },
                        w = (0, n.useRef)(null);
                    ((0, n.useEffect)(() => {
                        const e = w.current;
                        if (e && d === Te) return (u.c1.register(e, N), () => u.c1.unregister(e, N));
                    }, [d, w, m]),
                        (0, n.useEffect)(() => {
                            b && (N(), v.updateResetState());
                        }, [b]),
                        (0, n.useEffect)(
                            () =>
                                (0, c.v)(() => {
                                    (m(Te), i.hY.sound(C.statsOpen));
                                }),
                            [C, m],
                        ),
                        (0, n.useEffect)(() => {
                            if (d === ke)
                                return (0, l.F)(() => {
                                    e();
                                }, 300);
                        }, [e, d]),
                        (0, n.useEffect)(() => {
                            t || N();
                        }, [t]));
                    return r().createElement(
                        'div',
                        { className: o()(Pe.base, Pe[`base__${d}`], s), ref: w },
                        r().createElement(
                            'div',
                            { className: Pe.wrapper },
                            r().createElement(S, { className: Pe.background, background: `${y.noiseBackground}` }),
                            r().createElement(Be, { className: Pe.content }),
                            r().createElement('div', {
                                className: Pe.close,
                                style: { backgroundImage: `url(${y.closeIcon})` },
                                onClick: () => {
                                    (i.hY.yes1(), N());
                                },
                                onMouseEnter: () => {
                                    i.hY.highlight();
                                },
                            }),
                        ),
                        r().createElement('div', { className: Pe.shadow }),
                    );
                }),
                Ie = { context: 'model.hasBoxes.statistics' },
                Me = (e) => r().createElement(y, { options: e.options || Ie }, r().createElement(Le, e));
        },
        8455: (e, t, s) => {
            s.d(t, { mQ: () => O });
            var n = s(6483),
                r = s.n(n),
                a = s(7522),
                o = s(514),
                c = s(4598),
                l = s(9480),
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
                    boxesCountToGuaranteed: a,
                    setTriggerShown: c,
                    className: l,
                }) => {
                    const d = (0, i.useState)(!1),
                        m = d[0],
                        p = d[1],
                        g = (0, i.useState)(!0),
                        R = g[0],
                        B = g[1],
                        P = m || n,
                        T = !R && P;
                    ((0, i.useEffect)(
                        () =>
                            (0, f.F)(() => {
                                B(!1);
                            }, 1050),
                        [],
                    ),
                        (0, i.useEffect)(() => {
                            c(P);
                        }, [P, c]));
                    return u().createElement(
                        'div',
                        {
                            className: r()(b, T && h, l),
                            onMouseEnter: () => {
                                (!n && o.hY.sound(s), p(!0));
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
                                            boxesCountToGuaranteed: a,
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
                    readyTipAnimation: a,
                    tabsGuaranteedCount: c,
                    icons: l,
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
                        C = a && e.boxesCountToGuaranteed > 0 && e.boxesCountToGuaranteed <= c;
                    (0, i.useEffect)(() => {
                        y || (v && C && o.hY.sound(n));
                    }, [n, v, C, y]);
                    return u().createElement(
                        'div',
                        { className: r()(P.base, P[`base__${d}`], p) },
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
                                    className: r()(P.wrapper),
                                    onClick: () => {
                                        d !== m.ZM.Disable && t();
                                    },
                                    onMouseEnter: () => {
                                        (d === m.ZM.Default && o.hY.highlight(), b(!0));
                                    },
                                    onMouseLeave: () => {
                                        b(!1);
                                    },
                                },
                                v && d === m.ZM.Default && u().createElement('div', { className: P.shadow }),
                                u().createElement('div', {
                                    className: r()(P.image, v && d === m.ZM.Default && P.image__hovered),
                                    style: { backgroundImage: `url(${T.$dyn(`lootBox_${e.boxCategory}`)})` },
                                }),
                                e.boxesCount >= 0 &&
                                    u().createElement(
                                        'div',
                                        { className: r()(P.counter, v && d === m.ZM.Default && P.counter__hovered) },
                                        `×${e.boxesCount}`,
                                    ),
                            ),
                        ),
                        C &&
                            u().createElement(B, {
                                boxesCountToGuaranteed: e.boxesCountToGuaranteed,
                                icons: l,
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
                    changeTab: s = c.ZT,
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
                    const x = (t) => {
                        N[t].start({
                            to: { opacity: 1, transform: 'translateX(0)' },
                            config: { duration: 160, easing: a.Z.easeOutCubic },
                            onRest: () =>
                                ((t) => {
                                    t !== e.length - 1 ? x(t + 1) : C(!0);
                                })(t),
                        });
                    };
                    (0, i.useEffect)(() => {
                        b && x(0);
                    }, [b, e.length]);
                    return u().createElement(
                        'div',
                        { className: r()(L, v) },
                        l.UI(e, (e, a) =>
                            u().createElement(
                                d.animated.div,
                                { style: N[a].springs, className: r()(I, 0 === a && M), key: e.boxCategory },
                                u().createElement(k, {
                                    tab: e,
                                    state: (0, m.y0)(e.boxCategory, f, e.boxesCount),
                                    soundHover: t.entryHover,
                                    onClick: () => {
                                        return ((n = e.boxCategory), o.hY.sound(t.switch), void s(n));
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
            s.d(t, { z: () => ce });
            var n = {};
            (s.r(n),
                s.d(n, {
                    Area: () => I,
                    Bar: () => T,
                    DefaultScroll: () => L,
                    Direction: () => _.Nm,
                    defaultSettings: () => _.he,
                    useHorizontalScrollApi: () => v,
                }));
            var r = {};
            (s.r(r), s.d(r, { Area: () => Q, Bar: () => F, Default: () => Z, useVerticalScrollApi: () => M.c4 }));
            var a = s(6483),
                o = s.n(a),
                c = s(1856),
                l = s(7363),
                i = s.n(l),
                u = s(7515),
                d = s(3138),
                m = s(3815);
            function p(e, t, s = []) {
                const n = (0, l.useRef)(0),
                    r = (0, l.useCallback)(() => window.clearInterval(n.current), s || []);
                (0, l.useEffect)(() => r, [r]);
                const a = (null != s ? s : []).concat([t]);
                return [
                    (0, l.useCallback)((s) => {
                        ((n.current = window.setInterval(() => e(s, !0), t)), e(s, !1));
                    }, a),
                    r,
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
                h = 'HorizontalBar_base__active_5e',
                y = 'HorizontalBar_leftButton_5f',
                E = 'HorizontalBar_rightButton_03',
                C = 'HorizontalBar_track_0d',
                N = 'HorizontalBar_thumb_fd',
                w = 'HorizontalBar_rail_32',
                S = 'disable',
                x = { pending: !1, offset: 0 },
                R = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                B = () => {},
                P = (e, t) => Math.max(20, e.offsetWidth * t),
                T = (0, l.memo)(({ api: e, classNames: t = {}, getStepByRailClick: s = R, onDrag: n = B }) => {
                    const r = (0, l.useRef)(null),
                        a = (0, l.useRef)(null),
                        f = (0, l.useRef)(null),
                        v = (0, l.useRef)(null),
                        T = (0, l.useRef)(null),
                        k = e.stepTimeout || 100,
                        L = (0, l.useState)(x),
                        I = L[0],
                        M = L[1],
                        z = (0, l.useCallback)(
                            (e) => {
                                (M(e), T.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: T.current }));
                            },
                            [n],
                        ),
                        O = () => {
                            const t = v.current,
                                s = T.current,
                                n = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(n && t && s && r)) return;
                            const o = e.animationScroll.scrollPosition.get(),
                                c = Math.min(1, n / r),
                                l = (0, u.u)(0, 1, o / (r - n)),
                                i = (t.offsetWidth - P(t, c)) * l;
                            ((s.style.transform = `translateX(${0 | i}px)`),
                                ((e) => {
                                    if (a.current && f.current && v.current && T.current) {
                                        if (0 === e)
                                            return (a.current.classList.add(S), void f.current.classList.remove(S));
                                        if (
                                            ((t = v.current),
                                            (s = T.current),
                                            e - (t.offsetWidth - s.offsetWidth) >= -0.5)
                                        )
                                            return (a.current.classList.remove(S), void f.current.classList.add(S));
                                        var t, s;
                                        (a.current.classList.remove(S), f.current.classList.remove(S));
                                    }
                                })(i));
                        },
                        D = (0, m.z)(() => {
                            ((() => {
                                const t = T.current,
                                    s = v.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const o = Math.min(1, n / a);
                                ((t.style.width = `${P(s, o)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 !== o ? r.current.classList.add(h) : r.current.classList.remove(h)));
                            })(),
                                O());
                        });
                    ((0, l.useEffect)(() => (0, c.v)(D)),
                        (0, l.useEffect)(
                            () =>
                                (0, c.v)(() => {
                                    const t = () => {
                                        O();
                                    };
                                    let s = B;
                                    const n = () => {
                                        (s(), (s = (0, c.v)(D)));
                                    };
                                    return (
                                        e.events.on('recalculateContent', D),
                                        e.events.on('rest', t),
                                        e.events.on('change', t),
                                        e.events.on('resizeHandled', n),
                                        () => {
                                            (s(),
                                                e.events.off('recalculateContent', D),
                                                e.events.off('rest', t),
                                                e.events.off('change', t),
                                                e.events.off('resizeHandled', n));
                                        }
                                    );
                                }),
                            [e],
                        ),
                        (0, l.useEffect)(() => {
                            if (!I.pending) return;
                            const t = d.O.client.events.mouse.move(([t, s]) => {
                                    var r;
                                    const a = e.contentRef.current,
                                        o = e.wrapperRef.current;
                                    if (!a || !o) return;
                                    const c = v.current,
                                        l = T.current;
                                    if (!c || !l) return;
                                    if ('inside' === s && t.clientX < 0) return;
                                    const i = t.clientX - I.offset - c.getBoundingClientRect().x,
                                        u = (i / c.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                    (e.scrollPosition.start({
                                        scrollPosition: e.clampPosition(a, u),
                                        reset: !0,
                                        immediate: !0,
                                        from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                    }),
                                        n({ type: 'dragging', thumb: l, thumbOffset: i, contentOffset: u }));
                                }),
                                s = d.O.client.events.mouse.up(() => {
                                    (t(), z(x));
                                });
                            return () => {
                                (t(), s());
                            };
                        }, [e, I.offset, I.pending, n, z]));
                    const W = p((t) => e.applyStepTo(t), k, [e]),
                        G = W[0],
                        H = W[1];
                    (0, l.useEffect)(
                        () => (
                            document.addEventListener('mouseup', H, !0),
                            () => document.removeEventListener('mouseup', H, !0)
                        ),
                        [H],
                    );
                    const q = (e) => {
                        e.target.classList.contains(S) || (0, g.G)('highlight');
                    };
                    return i().createElement(
                        'div',
                        { className: o()(b, t.base), ref: r, onWheel: e.handleMouseWheel },
                        i().createElement('div', {
                            className: o()(y, t.leftButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains(S) || 0 !== e.button || ((0, g.G)('play'), G(_.Nm.Next));
                            },
                            onMouseUp: H,
                            ref: a,
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
                                                    r = e.contentRef.current;
                                                if (!n || !r) return;
                                                const a = s(e);
                                                e.applyScroll(e.animationScroll.scrollPosition.get() + a * t);
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
                                e.target.classList.contains(S) || 0 !== e.button || ((0, g.G)('play'), G(_.Nm.Prev));
                            },
                            onMouseUp: H,
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
                    areaClassName: r,
                    classNames: a,
                    scrollClassName: c,
                    getStepByRailClick: u,
                    onDrag: d,
                }) => {
                    const m = (0, l.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: o()(k.base, e.base) });
                        }, [n]),
                        p = (0, l.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: o()(k.defaultScroll, s), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(k.defaultScrollArea, r) },
                            i().createElement(I, { className: c, api: p, classNames: a }, e),
                        ),
                        i().createElement(T, { getStepByRailClick: u, api: t, onDrag: d, classNames: m }),
                    );
                },
                I = ({ api: e, className: t, classNames: s, children: n }) => (
                    (0, l.useEffect)(() => (0, c.v)(e.recalculateContent)),
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
            ((I.Bar = T), (I.Default = L));
            var M = s(7701);
            const z = 'VerticalBar_base_f3',
                O = 'VerticalBar_base__active_72',
                D = 'VerticalBar_topButton_d7',
                W = 'VerticalBar_bottomButton_06',
                G = 'VerticalBar_track_df',
                H = 'VerticalBar_thumb_32',
                q = 'VerticalBar_rail_43',
                $ = 'disable',
                A = () => {},
                X = { pending: !1, offset: 0 },
                j = (e) => {
                    var t;
                    return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                },
                V = (e, t) => {
                    e.contentRef.current && t(e.contentRef.current);
                },
                Y = (e, t) => Math.max(20, e.offsetHeight * t),
                F = (0, l.memo)(({ api: e, classNames: t = {}, getStepByRailClick: s = j, onDrag: n = A }) => {
                    const r = (0, l.useRef)(null),
                        a = (0, l.useRef)(null),
                        _ = (0, l.useRef)(null),
                        f = (0, l.useRef)(null),
                        v = (0, l.useRef)(null),
                        b = e.stepTimeout || 100,
                        h = (0, l.useState)(X),
                        y = h[0],
                        E = h[1],
                        C = (0, l.useCallback)(
                            (e) => {
                                (E(e), v.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: v.current }));
                            },
                            [n],
                        ),
                        N = (0, m.z)(() => {
                            const t = v.current,
                                s = f.current,
                                n = e.getWrapperSize(),
                                a = e.getContainerSize();
                            if (!(n && a && t && s)) return;
                            const o = Math.min(1, n / a);
                            return (
                                (t.style.height = `${Y(s, o)}px`),
                                (t.style.display = 'flex'),
                                r.current && (1 !== o ? r.current.classList.add(O) : r.current.classList.remove(O)),
                                o
                            );
                        }),
                        w = (0, m.z)(() => {
                            const t = f.current,
                                s = v.current,
                                n = e.getWrapperSize(),
                                r = e.getContainerSize();
                            if (!(n && t && s && r)) return;
                            const o = e.animationScroll.scrollPosition.get(),
                                c = Math.min(1, n / r),
                                l = (0, u.u)(0, 1, o / (r - n)),
                                i = (t.offsetHeight - Y(t, c)) * l;
                            ((s.style.transform = `translateY(${0 | i}px)`),
                                ((e) => {
                                    if (a.current && _.current && f.current && v.current) {
                                        if (0 === Math.round(e))
                                            return (a.current.classList.add($), void _.current.classList.remove($));
                                        if (
                                            ((t = f.current),
                                            (s = v.current),
                                            e - (t.offsetHeight - s.offsetHeight) >= -0.5)
                                        )
                                            return (a.current.classList.remove($), void _.current.classList.add($));
                                        var t, s;
                                        (a.current.classList.remove($), _.current.classList.remove($));
                                    }
                                })(i));
                        }),
                        S = (0, m.z)(() => {
                            V(e, () => {
                                (N(), w());
                            });
                        });
                    ((0, l.useEffect)(() => (0, c.v)(S)),
                        (0, l.useEffect)(() => {
                            const t = () => {
                                V(e, () => {
                                    w();
                                });
                            };
                            let s = A;
                            const n = () => {
                                (s(), (s = (0, c.v)(S)));
                            };
                            return (
                                e.events.on('recalculateContent', S),
                                e.events.on('rest', t),
                                e.events.on('change', t),
                                e.events.on('resizeHandled', n),
                                () => {
                                    (s(),
                                        e.events.off('recalculateContent', S),
                                        e.events.off('rest', t),
                                        e.events.off('change', t),
                                        e.events.off('resizeHandled', n));
                                }
                            );
                        }, [e]),
                        (0, l.useEffect)(() => {
                            if (!y.pending) return;
                            const t = d.O.client.events.mouse.up(() => {
                                    C(X);
                                }),
                                s = d.O.client.events.mouse.move(([t]) => {
                                    V(e, (s) => {
                                        const r = f.current,
                                            a = v.current,
                                            o = e.getContainerSize();
                                        if (!r || !a || !o) return;
                                        const c = t.screenY - y.offset - r.getBoundingClientRect().y,
                                            l = (c / r.offsetHeight) * o;
                                        (e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, l),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: s.scrollTop },
                                        }),
                                            n({ type: 'dragging', thumb: a, thumbOffset: c, contentOffset: l }));
                                    });
                                });
                            return () => {
                                (t(), s());
                            };
                        }, [e, y.offset, y.pending, n, C]));
                    const x = p((t) => e.applyStepTo(t), b, [e]),
                        R = x[0],
                        B = x[1];
                    (0, l.useEffect)(
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
                        { className: o()(z, t.base), ref: r, onWheel: e.handleMouseWheel },
                        i().createElement('div', {
                            className: o()(D, t.topButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains($) || 0 !== e.button || ((0, g.G)('play'), R(M.Nm.Next));
                            },
                            ref: a,
                            onMouseEnter: P,
                        }),
                        i().createElement(
                            'div',
                            {
                                className: o()(G, t.track),
                                onMouseDown: (t) => {
                                    const n = v.current;
                                    if (n && 0 === t.button)
                                        if (((0, g.G)('play'), t.target === n))
                                            C({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                        else {
                                            ((t) => {
                                                v.current &&
                                                    V(e, (n) => {
                                                        if (!n) return;
                                                        const r = s(e),
                                                            a = e.clampPosition(n, n.scrollTop + r * t);
                                                        e.applyScroll(a);
                                                    });
                                            })(t.screenY > n.getBoundingClientRect().y ? M.Nm.Prev : M.Nm.Next);
                                        }
                                },
                                ref: f,
                                onMouseEnter: P,
                            },
                            i().createElement('div', { ref: v, className: o()(H, t.thumb) }),
                            i().createElement('div', { className: o()(q, t.rail) }),
                        ),
                        i().createElement('div', {
                            className: o()(W, t.bottomButton),
                            onMouseDown: (e) => {
                                e.target.classList.contains($) || 0 !== e.button || ((0, g.G)('play'), R(M.Nm.Prev));
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
                    areaClassName: r,
                    scrollClassName: a,
                    scrollClassNames: c,
                    getStepByRailClick: u,
                    onDrag: d,
                }) => {
                    const m = (0, l.useMemo)(() => {
                            const e = n || {};
                            return Object.assign({}, e, { base: o()(U.base, e.base) });
                        }, [n]),
                        p = (0, l.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                    return i().createElement(
                        'div',
                        { className: o()(U.defaultScroll, s), onWheel: t.handleMouseWheel },
                        i().createElement(
                            'div',
                            { className: o()(U.area, r) },
                            i().createElement(Q, { className: a, classNames: c, api: p }, e),
                        ),
                        i().createElement(F, { getStepByRailClick: u, api: t, onDrag: d, classNames: m }),
                    );
                },
                Q = ({ className: e, classNames: t, children: s, api: n }) => (
                    (0, l.useEffect)(() => (0, c.v)(n.recalculateContent)),
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
            const J = { Vertical: r, Horizontal: n };
            let K;
            !(function (e) {
                ((e[(e.Idle = 0)] = 'Idle'),
                    (e[(e.Start = 1)] = 'Start'),
                    (e[(e.Between = 2)] = 'Between'),
                    (e[(e.End = 3)] = 'End'));
            })(K || (K = {}));
            const ee = 'ScrollWithLips_base_25',
                te = 'ScrollWithLips_lip_da',
                se = 'ScrollWithLips_lip__top_34',
                ne = 'ScrollWithLips_lip__bottom_13',
                re = 'ScrollWithLips_scroll_70',
                ae = 'ScrollWithLips_scroll__loaded_12',
                oe = 'ScrollWithLips_scrollContent_1e',
                ce = ({ scrollApi: e, classNames: t, children: s, lipImage: n }) => {
                    const r = (0, l.useState)(K.Between),
                        a = r[0],
                        c = r[1],
                        u = a !== K.Idle,
                        d = (0, m.z)(() => {
                            const t = e.getBounds(),
                                s = t[0],
                                n = t[1],
                                r = e.animationScroll.scrollPosition.goal,
                                a = e.getContainerSize(),
                                o = e.getWrapperSize();
                            if (a && o)
                                if (a !== o)
                                    switch (r) {
                                        case s:
                                            c(K.Start);
                                            break;
                                        case n:
                                            c(K.End);
                                            break;
                                        default:
                                            c(K.Between);
                                    }
                                else c(K.Idle);
                        });
                    return (
                        (0, l.useEffect)(
                            () => (
                                e.events.on('change', d),
                                e.events.on('recalculateContent', d),
                                e.events.on('resizeHandled', d),
                                () => {
                                    (e.events.off('change', d),
                                        e.events.off('recalculateContent', d),
                                        e.events.off('resizeHandled', d));
                                }
                            ),
                            [e.events, d],
                        ),
                        i().createElement(
                            'div',
                            { className: o()(ee, (null == t ? void 0 : t.base) || '') },
                            a !== K.Start &&
                                a !== K.Idle &&
                                i().createElement('div', {
                                    className: o()(te, se, (null == t ? void 0 : t.lip) || ''),
                                    style: { backgroundImage: `url(${n})` },
                                }),
                            a !== K.End &&
                                a !== K.Idle &&
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
                                classNames: { base: o()(re, u && ae, null == t ? void 0 : t.scrollBar) },
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
            s.d(t, { g: () => c });
            var n = s(8043),
                r = s(1717),
                a = s(5696),
                o = s(5e3);
            const c = { ENTRY_POINT: n.e, HAS_BOXES_VIEW: r.X, INFO_PAGE: a.q, REWARDS: o.O };
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
                r = s(2735),
                a = s(4607);
            const o = { ENTRY_POINT: n.e, HAS_BOXES_VIEW: r.X, INFO_PAGE: a.q };
        },
        4607: (e, t, s) => {
            s.d(t, { q: () => n });
            const n = { hasDescription: !0 };
        },
        3460: (e, t, s) => {
            s.d(t, { v: () => r });
            var n = s(5096);
            const r = { DEFAULT_CONFIG: s(4201).g, anniversaryCN: n.j };
        },
        4811: (e, t, s) => {
            s.d(t, { k: () => a });
            var n = s(3905);
            const r = (e, t) => {
                    const s = t && !t.includes(n.TP),
                        r = e && !e.includes(n.TP);
                    return s ? t : r ? e : t || e;
                },
                a = (e, t) => {
                    const s = ((e, t) => r(e, t))(e, t),
                        n = s.split(':')[0];
                    return { src: s, type: n };
                };
        },
        1440: (e, t, s) => {
            s.d(t, { i: () => o });
            var n = s(3649),
                r = s(3460),
                a = s(4201);
            const o = (e, t) => {
                const s = r.v[(0, n.TD)(e)];
                return s
                    ? ((e, t) => {
                          const s = (e, t) => {
                              const n = Object.assign({}, e);
                              for (const e in n) {
                                  var r, a;
                                  t &&
                                      e in t &&
                                      ('object' == typeof n[e]
                                          ? (n[e] = s(n[e], null != (r = t[e]) ? r : n[e]))
                                          : (n[e] = null != (a = t[e]) ? a : n[e]));
                              }
                              return n;
                          };
                          return s(e, t);
                      })(a.g[t], s[t])
                    : a.g[t];
            };
        },
    },
]);
