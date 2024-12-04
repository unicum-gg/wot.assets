'use strict';
(self.webpackChunkgameface = self.webpackChunkgameface || []).push([
    [6339],
    {
        6339: (e, r, a) => {
            a.d(r, { G: () => K });
            var s = a(6483),
                o = a.n(s),
                t = a(6179),
                l = a.n(t),
                n = a(2686),
                c = a(126),
                i = a(3415),
                _ = a(3112),
                d = a(7727),
                u = a(3403),
                g = a(3215),
                m = a(3946),
                b = a(6808),
                p = a(9480),
                w = a(8284);
            const v = (0, g.q)()(
                    ({ observableModel: e }) => {
                        const r = {
                                root: e.object(),
                                rewards: e.array('rewards'),
                                pointsForAwards: e.array('pointsForAwards'),
                            },
                            a = (0, m.Om)((e) => b.Wt.get(r.pointsForAwards.get(), e)),
                            s = (e) => {
                                const a = r.root.get(),
                                    s = a.availableRewardsCount,
                                    o = a.receivedRewardsCount;
                                return s >= e + 1 && o < e + 1
                                    ? w.v.Available
                                    : o >= e + 1
                                      ? w.v.Received
                                      : w.v.Disabled;
                            },
                            o = (0, m.Om)(() =>
                                b.Wt.map(r.rewards.get(), (e, r) => Object.assign({}, e, { rewardState: s(r) })),
                            ),
                            t = (0, m.Om)(() =>
                                (0, p.filterMap)(
                                    o(),
                                    (e) => e.rewardState === w.v.Available,
                                    (e) => e,
                                ),
                            ),
                            l = (0, m.Om)(() => t().length);
                        return Object.assign({}, r, {
                            computes: {
                                getRewards: o,
                                getAvailableRewards: t,
                                getAvailableRewardsLength: l,
                                getPointForReward: a,
                            },
                        });
                    },
                    ({ externalModel: e }) => ({
                        getReward: e.createCallbackNoArgs('onGetReward'),
                        openAnimationTrigger: e.createCallbackNoArgs('onOpenAnimationTrigger'),
                        showStylePreview: e.createCallback((e) => ({ intCD: e }), 'onStylePreview'),
                    }),
                ),
                h = v[0],
                P = v[1];
            var E = a(9916),
                f = a(324),
                N = a(7506),
                y = a(7030);
            const x = 'RadialProgressBar_base_53',
                A = 'RadialProgressBar_wrapper_f3',
                k = 'RadialProgressBar_circle_ed',
                B = 'RadialProgressBar_base__fullProgress_a4',
                C = 'RadialProgressBar_light_da',
                F = (e, r) => `-${(e / r) * 4}s`,
                I = ({ prevValue: e, currentValue: r, maxValue: a, isDisabled: s, onAnimationEnd: n }) => {
                    const c = (0, t.useRef)(null),
                        i = (0, t.useRef)(null),
                        _ = r >= a,
                        d = F(r, a),
                        u = s ? { animationDelay: d } : {},
                        g = (0, y.useSpring)(() => ({
                            progress: r,
                            onChange: (e) => {
                                const r = c.current,
                                    s = i.current;
                                if (!r || !s) return;
                                const o = F(e.value.progress, a);
                                (r.style.animationDelay = o), (s.style.animationDelay = o);
                            },
                            onRest: () => {
                                null == n || n();
                            },
                        })),
                        m = g[1];
                    return (
                        (0, t.useEffect)(() => {
                            s || m.start({ from: { progress: e }, to: { progress: r } });
                        }, [m, r, e, s]),
                        l().createElement(
                            'div',
                            { className: o()(x, _ && B) },
                            l().createElement(
                                'div',
                                { className: A },
                                l().createElement('div', { ref: c, className: k, style: u }),
                                l().createElement('div', { ref: i, className: C, style: u }),
                            ),
                        )
                    );
                },
                V = {
                    base: 'ResourceProgression_base_91',
                    background: 'ResourceProgression_background_f3',
                    base__glade: 'ResourceProgression_base__glade_8a',
                    glow: 'ResourceProgression_glow_90',
                    wrapper: 'ResourceProgression_wrapper_d9',
                    base__friends: 'ResourceProgression_base__friends_2d',
                    holder: 'ResourceProgression_holder_9a',
                    holder__1: 'ResourceProgression_holder__1_1f',
                    holder__2: 'ResourceProgression_holder__2_5b',
                    holder__3: 'ResourceProgression_holder__3_03',
                    holder__style: 'ResourceProgression_holder__style_8f',
                    reward: 'ResourceProgression_reward_f6',
                    holder__available: 'ResourceProgression_holder__available_35',
                    holder__received: 'ResourceProgression_holder__received_a7',
                    loupe: 'ResourceProgression_loupe_07',
                    receivedIcon: 'ResourceProgression_receivedIcon_d1',
                    counter: 'ResourceProgression_counter_19',
                    counter__done: 'ResourceProgression_counter__done_56',
                    check: 'ResourceProgression_check_4d',
                    indicator: 'ResourceProgression_indicator_c7',
                    quantity: 'ResourceProgression_quantity_49',
                    label: 'ResourceProgression_label_9a',
                    slideInFadeIn: 'ResourceProgression_slideInFadeIn_9a',
                    fadeOut: 'ResourceProgression_fadeOut_d3',
                    fadeIn: 'ResourceProgression_fadeIn_20',
                    fadeInWithScale: 'ResourceProgression_fadeInWithScale_11',
                    slideUp: 'ResourceProgression_slideUp_4f',
                    scale: 'ResourceProgression_scale_82',
                    spin: 'ResourceProgression_spin_09',
                    blink: 'ResourceProgression_blink_d6',
                    slideInNotification: 'ResourceProgression_slideInNotification_d7',
                },
                $ = R.strings.ny.resourceProgression,
                S = (0, u.Pi)(({ widgetType: e = w.t.Friends }) => {
                    const r = P(),
                        a = r.model,
                        s = r.controls,
                        n = a.root.get(),
                        c = n.maxProgressValue,
                        i = n.currentProgressValue,
                        _ = n.isOpenAnimationTriggered,
                        u = n.savedProgressValue,
                        g = i >= c,
                        m = g ? c : u,
                        p = (0, t.useState)(m),
                        R = p[0],
                        v = p[1],
                        h = a.computes.getAvailableRewardsLength() && g,
                        E = (0, t.useMemo)(() => i > c || R >= c || _, [i, _, c, R]);
                    return l().createElement(
                        'div',
                        { className: o()(V.base, V[`base__${e}`]) },
                        l().createElement('div', { className: V.background }),
                        l().createElement('div', { className: V.glow }),
                        l().createElement(
                            'div',
                            { className: V.wrapper },
                            l().createElement(I, { isDisabled: E, prevValue: R, currentValue: i, maxValue: c }),
                            b.Wt.map(a.computes.getRewards(), (e, r) => {
                                const t = e.icon,
                                    n = e.name,
                                    c = e.intCD,
                                    i = e.rewardState,
                                    _ = 'style' === t;
                                return l().createElement(
                                    'div',
                                    {
                                        key: `${n}_${r}`,
                                        className: o()(
                                            V.holder,
                                            V[`holder__${r + 1}`],
                                            V[`holder__${i}`],
                                            V[`holder__${t}`],
                                        ),
                                        onClick: () =>
                                            ((e) => {
                                                e && (d.$.playClick(), s.showStylePreview(e));
                                            })(c),
                                        onMouseEnter: () => {
                                            _ && d.$.playHighlight();
                                        },
                                    },
                                    l().createElement(
                                        'div',
                                        { className: V.reward },
                                        l().createElement(N.Q, { bonusModel: e, isFlexable: !0 }),
                                    ),
                                    l().createElement('div', { className: V.receivedIcon }),
                                    _ && l().createElement('div', { className: V.loupe }),
                                    l().createElement(
                                        'div',
                                        { className: V.quantity },
                                        a.computes.getPointForReward(r),
                                    ),
                                    l().createElement('div', { className: V.indicator }),
                                );
                            }),
                            l().createElement(
                                'div',
                                { className: o()(V.counter, g && V.counter__done) },
                                g
                                    ? l().createElement('div', { className: V.check })
                                    : l().createElement(f.Z, {
                                          valueFrom: R,
                                          valueTo: i,
                                          isDisabled: E,
                                          onAnimationComplete: () => {
                                              R !== i && v(i);
                                          },
                                      }),
                            ),
                            l().createElement(
                                'div',
                                { className: V.label },
                                h ? $.collectLabel() : g ? $.finalLabel() : $.label(),
                            ),
                        ),
                    );
                }),
                D = 'ResourceBoxPopover_base_d8',
                O = 'ResourceBoxPopover_closeBtn_04',
                T = (0, u.Pi)(({ root: e, onClose: r }) => {
                    (0, t.useEffect)(() => {
                        const a = e.current;
                        if (a) return E.c1.register(a, r), () => E.c1.unregister(a, r);
                    }, [e, r]);
                    return l().createElement(
                        'div',
                        { className: D },
                        l().createElement(S, null),
                        l().createElement('div', {
                            className: O,
                            onClick: () => {
                                (0, d.G)(R.sounds.cancelcloseno()), r();
                            },
                            onMouseEnter: d.$.playHighlight,
                        }),
                    );
                });
            var L = a(2372),
                W = a(9766),
                G = a(3601);
            const M = 'Counter_base_0c',
                q = (0, u.Pi)(() => {
                    const e = P().model.root.get(),
                        r = e.maxProgressValue,
                        a = e.currentProgressValue,
                        s = (0, t.useState)(!1),
                        o = s[0],
                        n = s[1],
                        c = (0, G.n)(a, o, r),
                        i = c[0],
                        _ = i.countFrom,
                        d = i.countTo,
                        u = c[1].handleAnimationEnd,
                        g = (0, t.useCallback)(() => n(!1), []);
                    return (
                        (0, t.useEffect)(() => {
                            _ !== d && u();
                        }, [_, d, u]),
                        l().createElement(
                            'div',
                            { className: M },
                            l().createElement(W.z, {
                                text: R.strings.ny.progress.default(),
                                binding: {
                                    value: l().createElement(f.Z, {
                                        valueFrom: _,
                                        valueTo: d,
                                        isDisabled: _ >= r,
                                        onAnimationComplete: g,
                                    }),
                                    maxValue: l().createElement(L.A, { value: r }),
                                },
                            }),
                        )
                    );
                }),
                j = {
                    base: 'ResourceBox_base_7c',
                    glow: 'ResourceBox_glow_62',
                    glow__scale: 'ResourceBox_glow__scale_b5',
                    base__hasRewards: 'ResourceBox_base__hasRewards_0d',
                    wrapper: 'ResourceBox_wrapper_a4',
                    base__glade: 'ResourceBox_base__glade_7d',
                    icon: 'ResourceBox_icon_a4',
                    base__completed: 'ResourceBox_base__completed_25',
                    completed: 'ResourceBox_completed_91',
                    rewards: 'ResourceBox_rewards_63',
                    counter: 'ResourceBox_counter_a8',
                    text: 'ResourceBox_text_3a',
                },
                U = {
                    base: 'RewardNotification_base_39',
                    base__1: 'RewardNotification_base__1_b2',
                    base__2: 'RewardNotification_base__2_ad',
                    base__3: 'RewardNotification_base__3_1f',
                    reward: 'RewardNotification_reward_bd',
                },
                H = (0, u.Pi)(() => {
                    const e = P().model,
                        r = e.computes.getAvailableRewardsLength();
                    return l().createElement(
                        'div',
                        { className: o()(U.base, U[`base__${r}`]) },
                        b.Wt.map(e.computes.getAvailableRewards(), (e, r) =>
                            l().createElement(
                                'div',
                                { className: U.reward, key: `${e.name}_${r}` },
                                l().createElement(N.Q, { bonusModel: e, isFlexable: !0 }),
                            ),
                        ),
                    );
                }),
                Q = {
                    width: 250,
                    height: 250,
                    frameCount: 75,
                    chunk: { count: 1, columns: 11, rows: 7 },
                    getChunkPath: (0, c.V)('R.images.gui.maps.icons.newYear.resourceBox.blue_glow.sprite_glow_'),
                },
                Z = R.strings.ny.resourceBox,
                z = (0, c.q)(Q),
                Y = (0, u.Pi)(({ type: e = w.t.Friends }) => {
                    const r = P(),
                        a = r.model,
                        s = r.controls,
                        c = a.root.get(),
                        u = c.maxProgressValue,
                        g = c.currentProgressValue,
                        m = c.isOpenAnimationTriggered,
                        b = (0, t.useRef)(null),
                        p = (0, t.useState)(!1),
                        v = p[0],
                        h = p[1],
                        E = (0, _.V)(),
                        f = a.computes.getAvailableRewardsLength() > 0,
                        N = a.computes.getAvailableRewardsLength() > 1,
                        y = 0 === a.computes.getAvailableRewardsLength() && g >= u,
                        x = N ? Z.label.multiple() : Z.label.single(),
                        A = y
                            ? { body: Z.tooltip.completed.body() }
                            : {
                                  contentId: R.views.lobby.new_year.tooltips.NyResourceBoxTooltip('resId'),
                                  isEnabled: !f,
                                  args: { isFriendsList: e === w.t.Friends },
                              };
                    return l().createElement(
                        'div',
                        {
                            className: o()(j.base, j[`base__${e}`], f && j.base__hasRewards, y && j.base__completed),
                            ref: b,
                        },
                        f &&
                            l().createElement(n.At, {
                                width: Q.width,
                                height: Q.height,
                                frameCount: Q.frameCount,
                                getImageSource: z,
                                className: o()(j.glow, 2 === E && j.glow__scale),
                            }),
                        l().createElement(
                            i.l,
                            { tooltipArgs: A, className: j.wrapper },
                            l().createElement(
                                l().Fragment,
                                null,
                                l().createElement('div', {
                                    className: j.icon,
                                    onClick: () => {
                                        if (((0, d.G)(R.sounds.hangar_newyear_friends_progress()), f))
                                            return h(!1), void s.getReward();
                                        if (e === w.t.Friends) {
                                            const e = !v;
                                            h(e), !m && e && s.openAnimationTrigger();
                                        }
                                    },
                                }),
                                f && l().createElement('div', { className: j.text }, x),
                                e === w.t.Friends &&
                                    (f
                                        ? l().createElement('div', { className: j.rewards }, l().createElement(H, null))
                                        : !y &&
                                          l().createElement(
                                              'div',
                                              { className: j.counter },
                                              l().createElement(q, null),
                                          )),
                                y && l().createElement('div', { className: j.completed }),
                            ),
                        ),
                        v && l().createElement(T, { root: b, onClose: () => h(!1) }),
                    );
                }),
                J = {
                    base: 'WidgetResourceBox_base_c5',
                    wrapper: 'WidgetResourceBox_wrapper_de',
                    wrapper__glade: 'WidgetResourceBox_wrapper__glade_23',
                },
                K = l().memo(({ options: e, mode: r, mocks: a, widgetType: s = w.t.Friends }) =>
                    l().createElement(
                        h,
                        { mode: r, options: e, mocks: a },
                        l().createElement(
                            'div',
                            { className: J.base, lang: R.strings.settings.LANGUAGE_CODE() },
                            l().createElement(
                                'div',
                                { className: o()(J.wrapper, J[`wrapper__${s}`]) },
                                l().createElement(Y, { type: s }),
                            ),
                            s === w.t.Glade && l().createElement(S, { widgetType: s }),
                        ),
                    ),
                );
        },
        8284: (e, r, a) => {
            let s, o;
            a.d(r, { t: () => o, v: () => s }),
                (function (e) {
                    (e.Available = 'available'), (e.Received = 'received'), (e.Disabled = 'disabled');
                })(s || (s = {})),
                (function (e) {
                    (e.Friends = 'friends'), (e.Glade = 'glade');
                })(o || (o = {}));
        },
    },
]);
