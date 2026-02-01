import { j as e, z as a, x as s, y as d, r, X as i } from '../../../chunks/vendor.js';
import {
    y as n,
    cO as t,
    z as l,
    cP as _,
    a as o,
    c,
    g as m,
    cQ as w,
    cR as u,
    d as b,
    e as x,
    h as p,
    I as f,
    R as g,
    bh as h,
    p as j,
    a6 as v,
    u as N,
    n as y,
    cS as M,
    a3 as A,
    a2 as I,
} from '../../../chunks/lib.js';
import { a as S, g as C } from '../../../chunks/readResource.js';
const $ = 'Footer_f09fca09',
    z = 'Footer_buttonContainer_cc670971',
    P = (e) => (e >= l.Medium ? _.medium : _.small),
    k = ({ onClick: s, className: d }) => {
        const { mediaSize: r } = n();
        return e.jsx('div', {
            className: a($, d),
            children: e.jsx('div', {
                className: z,
                children: e.jsx(t, {
                    size: P(r),
                    onClick: s,
                    children: R.strings.fun_random.rewardsView.footer.acceptButton(),
                }),
            }),
        });
    },
    E = 'Header_edfdfa4a',
    U = 'Header_title_bef229bc',
    H = 'Header_status_faf7f728',
    O = 'Header_subtitle_1008328a',
    V = ({ title: a, status: s, subtitle: d }) =>
        e.jsxs('div', {
            className: E,
            children: [
                e.jsx('div', { className: U, children: a }),
                e.jsx('div', { className: H, children: s }),
                d && e.jsx('div', { className: O, children: d }),
            ],
        }),
    [T, W] = o()(
        ({ observableModel: e }) => {
            const a = {
                    root: e.object(),
                    mainRewards: e.array('mainRewards'),
                    additionalRewards: e.array('additionalRewards'),
                },
                d = s(
                    (e) => {
                        const s = m(a.mainRewards.get(), e);
                        if (!s) throw new Error(`mainReward with index ${e} was not found`);
                        return { ...s };
                    },
                    { equals: c },
                ),
                r = s(
                    (e) => {
                        const s = m(a.additionalRewards.get(), e);
                        if (!s) throw new Error(`additionalReward with index ${e} was not found`);
                        return { ...s };
                    },
                    { equals: c },
                );
            return { ...a, computes: { mainReward: d, additionalReward: r } };
        },
        ({ externalModel: e }) => ({ closeWindow: e.createCallbackNoArgs('onClose') }),
    ),
    q = [w.Gold, w.Credits],
    B = [1, 2, 3, 7, 14, 30, 90, 180, 360],
    G = (e, a, s) => {
        var d;
        const { name: r, icon: i, value: n } = a;
        if ('' !== e && r === w.Vehicles) {
            const a = null == (d = S(e)) ? void 0 : d.rewards,
                r = null == a ? void 0 : a.$dyn(`vehicle_${i.toLowerCase()}_${s}`);
            return r || R.images.fun_random.gui.maps.icons.feature.rewards.bonuses.$dyn(`vehicle_default_${s}`);
        }
        return r !== w.PremiumPlus || B.includes(Number(n))
            ? p(a, s)
            : `R.images.gui.maps.icons.quests.bonuses.${s}.premium_plus_1`;
    },
    L = (e, a, s = !0, d = '', r = !0) => {
        const { name: i, value: n, label: t } = e,
            l = i === w.PremiumPlus && !B.includes(Number(n)),
            _ = l ? u.PremiumUniversal : i;
        return {
            name: l ? u.PremiumUniversal : i || e.item,
            image: G(d, e, a),
            value: !r && q.includes(i) ? void 0 : n,
            special: e.overlayType,
            valueType: x(_),
            tooltipArgs: s ? b({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)) : { isEnabled: !1 },
            label: r || !q.includes(i) ? t : n,
            isCompensation: e.isCompensation,
        };
    },
    F = (e, a = 0) => ({ appear: a + 400 + 200 * e, enter: 600 }),
    D = (e) => 1300 + 400 * e,
    Q = d(({ index: a, className: s, mainRewardsEnabled: d = !1 }) => {
        const { model: r } = W(),
            i = d ? r.computes.mainReward(a) : r.computes.additionalReward(a),
            { mediaSize: t } = n(),
            _ = t >= l.Medium ? f.Big : f.Small,
            o = L(i, _);
        return e.jsx(g, { ...o, size: _, className: s });
    }),
    X = 'AdditionalRewards_8af994f7',
    J = 'AdditionalRewards_title_dd32b80a',
    K = 'AdditionalRewards_rewardsList_532db93b',
    Y = 'AdditionalRewards_reward_79ca4edb',
    Z = R.strings.fun_random.rewardsView,
    ee = d(({ className: s }) => {
        const { model: d } = W(),
            i = d.additionalRewards.get().length,
            { run: n, clear: t } = h();
        return (
            r.useEffect(
                () => (
                    n(() => {
                        j.sound('gui_random_reward_icon');
                    }, D(d.mainRewards.get().length)),
                    () => {
                        t();
                    }
                ),
                [t, d.mainRewards, n],
            ),
            e.jsxs('div', {
                className: a(X, s),
                style: { '--baseDelay': `${D(d.mainRewards.get().length)}ms` },
                children: [
                    e.jsx('div', { className: J, children: Z.additionalRewards.title() }),
                    e.jsxs('div', {
                        className: K,
                        children: [
                            v(
                                d.mainRewards.get().length,
                                (a) => a >= 4 && e.jsx(Q, { index: a, className: Y, mainRewardsEnabled: !0 }, a + i),
                            ),
                            v(i, (a) => e.jsx(Q, { index: a, className: Y }, a)),
                        ],
                    }),
                ],
            })
        );
    }),
    ae = 'Glow_ae7a850f',
    se = 'Glow_cc887482',
    de = ({ className: s }) => e.jsx('div', { className: a(ae, s), children: e.jsx('div', { className: se }) }),
    re = {
        root: 'Reward_root_21f091ec',
        base: 'Reward_e66ededb',
        base__entering: 'Reward_base__entering_6bfb0d31',
        base__entered: 'Reward_base__entered_94f89de0',
        title: 'Reward_title_7067a6fb',
        base__credits: 'Reward_base__credits_21f091ec',
        base__gold: 'Reward_base__gold_21f091ec',
        base__crystal: 'Reward_base__crystal_21f091ec',
        base__s232x174: 'Reward_base__s232x174_21f091ec',
        base__s296x222: 'Reward_base__s296x222_21f091ec',
        base__s400x300: 'Reward_base__s400x300_21f091ec',
        base__s600x450: 'Reward_base__s600x450_21f091ec',
        compensationIcon: 'Reward_compensationIcon_4b973261',
        reward: 'Reward_2c975b95',
        info__multi: 'Reward_info__multi_25475128',
        fadeIn: 'Reward_fadeIn_21f091ec',
        fadeOut: 'Reward_fadeOut_21f091ec',
        fadeInC: 'Reward_fadeInC_21f091ec',
        slideUp: 'Reward_slideUp_21f091ec',
        raysAppearance: 'Reward_raysAppearance_21f091ec',
        rotate: 'Reward_rotate_21f091ec',
    },
    ie = d(({ rewardSize: s, rewardIndex: d }) => {
        const { model: n } = W(),
            { assetsPointer: t } = n.root.get(),
            l = n.computes.mainReward(d),
            { name: _, isCompensation: o } = l,
            [c, m] = r.useState(!0),
            w = L(l, s, !c, t, !1),
            { label: u, valueType: b } = w;
        return e.jsx(i, {
            appear: !0,
            in: !0,
            timeout: F(d, 1300),
            onEntered: () => {
                (j.sound('gui_random_reward_appear'), m(!1));
            },
            children: (d) =>
                e.jsxs('div', {
                    className: a(re.base, re[`base__${d}`], re[`base__${_}`], re[`base__${s}`]),
                    children: [
                        e.jsx(g, {
                            ...w,
                            size: s,
                            className: re.reward,
                            classNames: { info: a(re.info, re[`info__${b}`]) },
                        }),
                        o && e.jsx('div', { className: re.compensationIcon }),
                        e.jsx('div', { className: re.title, children: u }),
                    ],
                }),
        });
    }),
    ne = 'Rewards_1a8854f',
    te = d(({ rewardSize: a }) => {
        const { model: s } = W();
        return e.jsx('div', {
            className: ne,
            children: v(
                s.mainRewards.get().length,
                (s) => s < 4 && e.jsx(ie, { rewardIndex: s, rewardSize: a }, `reward-${s}`),
            ),
        });
    }),
    le = {
        root: 'MainRewards_root_56da68ed',
        base: 'MainRewards_c825d49e',
        rays: 'MainRewards_rays_3a5b0ae5',
        glow: 'MainRewards_glow_53ec5a2',
        base__s296x222: 'MainRewards_base__s296x222_56da68ed',
        base__s400x300: 'MainRewards_base__s400x300_56da68ed',
        base__s600x450: 'MainRewards_base__s600x450_56da68ed',
        raysAppearance: 'MainRewards_raysAppearance_56da68ed',
        rotate: 'MainRewards_rotate_56da68ed',
        ribbon: 'MainRewards_ribbon_cec2e16b',
        slideUp: 'MainRewards_slideUp_56da68ed',
        fadeIn: 'MainRewards_fadeIn_56da68ed',
        fadeOut: 'MainRewards_fadeOut_56da68ed',
        fadeInC: 'MainRewards_fadeInC_56da68ed',
    },
    _e = d(() => {
        const { model: s } = W(),
            { mediaSize: d } = n(),
            r = ((e, a) =>
                a >= l.Large
                    ? e < 3
                        ? f.S600x450
                        : f.S400x300
                    : 1 === e && a === l.Medium
                      ? f.S600x450
                      : a >= l.Small
                        ? e <= 3
                            ? f.S400x300
                            : f.S296x222
                        : e <= 3
                          ? f.S296x222
                          : f.S232x174)(Math.min(s.mainRewards.get().length, 4), d);
        return e.jsxs('div', {
            className: a(le.base, le[`base__${r}`]),
            children: [
                e.jsx(de, { className: le.glow }),
                e.jsx('div', { className: le.ribbon }),
                e.jsx('div', { className: le.rays }),
                e.jsx(te, { rewardSize: r }),
            ],
        });
    }),
    oe = 'App_ab56c836',
    ce = 'App_overlay_ce1d3259',
    me = 'App_main_7dac19b1',
    we = 'App_close_110976dc',
    ue = 'App_content_d2251eca',
    be = 'App_header_c3dc2c23',
    Re = 'App_rewards_26dd76c',
    xe = 'App_additionalRewards_c1b35d06',
    pe = 'App_additionalRewards__largeReward_566b91c4',
    fe = 'App_footer_4c3bf70d',
    ge = R.strings.fun_random,
    he = d(() => {
        const { model: s, controls: d } = W(),
            { assetsPointer: r } = s.root.get(),
            i = s.mainRewards.get().length,
            n = s.additionalRewards.get().length > 0 || i > 4,
            t = 1 === i;
        N(d.closeWindow);
        const { dynamicTexts: l } = C(null, { assetsPointer: r }),
            _ = {
                title: y(ge.rewardsView.subheader(), { subModeName: l.capsUserName() }),
                subtitle: l.rewardsView.header(),
            },
            o = S(r).library.prime_times_bg();
        return e.jsxs('div', {
            className: oe,
            style: { backgroundImage: `url('${o}')` },
            children: [
                e.jsx('div', { className: ce }),
                e.jsxs('div', {
                    className: me,
                    children: [
                        e.jsx('div', {
                            className: we,
                            children: e.jsx(M, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: d.closeWindow,
                            }),
                        }),
                        e.jsxs('div', {
                            className: ue,
                            children: [
                                e.jsx('div', {
                                    className: be,
                                    children: e.jsx(V, { title: _.title, status: _.subtitle }),
                                }),
                                e.jsxs('div', {
                                    className: a(Re),
                                    children: [e.jsx(_e, {}), n && e.jsx(ee, { className: a(xe, t && pe) })],
                                }),
                            ],
                        }),
                        e.jsx(k, { onClick: d.closeWindow, className: fe }),
                    ],
                }),
            ],
        });
    });
A(e.jsx(T, { children: e.jsx(I, { children: e.jsx(he, {}) }) }));
