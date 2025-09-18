import { n as e, p as a, r as d, j as r, T as s, f as i } from '../../../chunks/vendor.js';
import {
    a as _,
    a3 as n,
    ab as t,
    a5 as h,
    e as o,
    ac as l,
    a0 as c,
    $ as w,
    p,
    ad as m,
    ae as b,
    I as f,
    B as u,
    u as g,
    y as x,
    z as j,
    U as A,
    A as N,
    E as M,
} from '../../../chunks/lib.js';
import { f as y } from '../../../chunks/string-utils.js';
import { f as v, a as S, R as I, b as C, M as k, c as L, d as $, e as E, g as O } from '../../../chunks/utils.js';
const [z, U] = _()(
        ({ observableModel: a }) => {
            const d = { root: a.object() },
                r = e(
                    () => {
                        const e = a.array('mainRewards');
                        return t(e.get(), (e) => ({ ...e }));
                    },
                    { equals: n },
                ),
                s = e(
                    () => {
                        const e = a.array('additionalRewards');
                        return t(e.get(), (e) => ({ ...e }));
                    },
                    { equals: n },
                );
            return {
                ...d,
                computes: {
                    mainReward: e(
                        (e) => {
                            const a = h(r(), e);
                            if (!a) throw new Error(`mainReward with index ${e} was not found`);
                            return { ...a };
                        },
                        { equals: n },
                    ),
                    additionalReward: e(
                        (e) => {
                            const a = h(s(), e);
                            if (!a) throw new Error(`additionalReward with index ${e} was not found`);
                            return { ...a };
                        },
                        { equals: n },
                    ),
                    mainRewardsLength: e(() => r().length),
                    additionalRewardsLength: e(() => s().length),
                },
            };
        },
        ({ externalModel: e }) => ({ closeWindow: e.createCallbackNoArgs('onClose') }),
    ),
    T = {
        root: 'AdditionalRewards_root_3afa6e1a',
        'header-h80': 'AdditionalRewards_header-h80_4fa90f9f',
        'header-h56': 'AdditionalRewards_header-h56_636a14e1',
        'header-h40': 'AdditionalRewards_header-h40_f661863d',
        'header-h32': 'AdditionalRewards_header-h32_b50eb2af',
        'header-h28': 'AdditionalRewards_header-h28_da1fd03a',
        'header-h26': 'AdditionalRewards_header-h26_eeba5417',
        'header-h24': 'AdditionalRewards_header-h24_b907cc2e',
        'header-h22': 'AdditionalRewards_header-h22_c7b585e3',
        'header-h20': 'AdditionalRewards_header-h20_74800bc4',
        'header-h18': 'AdditionalRewards_header-h18_576724ae',
        'header-h16': 'AdditionalRewards_header-h16_5beb81c9',
        'paragraph-p20': 'AdditionalRewards_paragraph-p20_cec6d621',
        'paragraph-p18': 'AdditionalRewards_paragraph-p18_576724ae',
        'paragraph-p16': 'AdditionalRewards_paragraph-p16_5beb81c9',
        base: 'AdditionalRewards_c7f66cac',
        title: 'AdditionalRewards_title_f20d1549',
        fadeInC: 'AdditionalRewards_fadeInC_3afa6e1a',
        rewardsList: 'AdditionalRewards_rewardsList_532db93b',
        reward: 'AdditionalRewards_reward_8b03db2e',
        reward__entering: 'AdditionalRewards_reward__entering_f3e590b0',
        reward__entered: 'AdditionalRewards_reward__entered_dd61e94d',
        fadeIn: 'AdditionalRewards_fadeIn_3afa6e1a',
        fadeOut: 'AdditionalRewards_fadeOut_3afa6e1a',
        slideUp: 'AdditionalRewards_slideUp_3afa6e1a',
        raysAppearance: 'AdditionalRewards_raysAppearance_3afa6e1a',
        rotate: 'AdditionalRewards_rotate_3afa6e1a',
    },
    V = a(
        ({
            index: e,
            className: a,
            animationOrder: _ = e,
            animationDelay: n = 0,
            mainRewardsEnabled: t = !1,
            allRewardsCount: h,
        }) => {
            const { model: R } = U(),
                m = t ? R.computes.mainReward(e) : R.computes.additionalReward(e),
                { breakpoint: b } = o(),
                [f, u] = d.useState(!0),
                g = b.weight >= l.medium.weight ? c.Big : c.Small,
                x = v(m, g, !f);
            return null === x.image
                ? null
                : r.jsx(s, {
                      appear: !0,
                      in: !0,
                      timeout: S(_, n),
                      onEntered: () => {
                          (p.sound('gui_random_reward_icon'),
                              h - 1 === e && setTimeout(() => p.sound('gui_random_reward_end'), I),
                              u(!1));
                      },
                      children: (e) =>
                          'string' == typeof x.image
                              ? r.jsx(w, { ...x, image: x.image, size: g, className: i(a, T[`reward__${e}`]) })
                              : null,
                  });
        },
    ),
    q = R.strings.white_tiger_lobby.rewardsView,
    B = a(({ className: e }) => {
        const { model: a } = U(),
            s = a.computes.additionalRewardsLength(),
            { run: _, clear: n } = m(),
            t = a.computes.mainRewardsLength(),
            h = Math.max(0, t - k),
            o = d.useMemo(
                () => [...b(h, (e) => ({ index: e + k, mainRewardsEnabled: !0 })), ...b(s, (e) => ({ index: e }))],
                [h, s],
            ),
            l = C(4);
        return r.jsxs('div', {
            className: i(T.base, e),
            style: { '--baseDelay': `${l}ms` },
            children: [
                r.jsx('div', { className: T.title, children: q.additionalRewards.title() }),
                r.jsx('div', {
                    className: T.rewardsList,
                    children: o.map((e, a) =>
                        r.jsx(
                            V,
                            {
                                animationOrder: a,
                                animationDelay: l,
                                ...e,
                                className: T.reward,
                                allRewardsCount: o.length,
                            },
                            a,
                        ),
                    ),
                }),
            ],
        });
    }),
    H = 'Footer_f09fca09',
    W = 'Footer_buttonContainer_cc670971',
    D = ({ onClick: e, className: a }) => {
        const d = f.resolve('strings');
        return r.jsx('div', {
            className: i(H, a),
            children: r.jsx('div', {
                className: W,
                children: r.jsx(u, {
                    theme: u.themes.primary,
                    onClick: e,
                    size: u.sizes.small,
                    children: d.readOrEmpty('white_tiger_lobby.rewardsView.footer.acceptButton'),
                }),
            }),
        });
    },
    P = 'Header_edfdfa4a',
    F = 'Header_title_13fcfd6b',
    G = 'Header_status_479bc390',
    J = 'Header_subtitle_64b34d8f',
    K = ({ title: e, status: a, subtitle: d }) =>
        r.jsxs('div', {
            className: P,
            children: [
                r.jsx('div', { className: F, children: e }),
                r.jsx('div', { className: G, children: a }),
                d && r.jsx('div', { className: J, children: d }),
            ],
        }),
    Q = 'Glow_ae7a850f',
    X = 'Glow_f68d5728',
    Y = ({ className: e }) => r.jsx('div', { className: i(Q, e), children: r.jsx('div', { className: X }) }),
    Z = {
        root: 'Reward_root_21f091ec',
        'header-h80': 'Reward_header-h80_fc9aa830',
        'header-h56': 'Reward_header-h56_3e410970',
        'header-h40': 'Reward_header-h40_f247c56e',
        'header-h32': 'Reward_header-h32_29c0cc99',
        'header-h28': 'Reward_header-h28_6f231f3f',
        'header-h26': 'Reward_header-h26_5c89e689',
        'header-h24': 'Reward_header-h24_d55a4e4',
        'header-h22': 'Reward_header-h22_a5ff4892',
        'header-h20': 'Reward_header-h20_a202400f',
        'header-h18': 'Reward_header-h18_fb3cc1a4',
        'header-h16': 'Reward_header-h16_435636d4',
        'paragraph-p20': 'Reward_paragraph-p20_597c3426',
        'paragraph-p18': 'Reward_paragraph-p18_fb3cc1a4',
        'paragraph-p16': 'Reward_paragraph-p16_435636d4',
        base: 'Reward_ccb82758',
        base__entering: 'Reward_base__entering_6bfb0d31',
        base__entered: 'Reward_base__entered_94f89de0',
        title: 'Reward_title_66dd3551',
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
    ee = a(({ rewardSize: e, rewardIndex: a }) => {
        const { model: _ } = U(),
            { assetsPointer: n } = _.root.get(),
            t = _.computes.mainReward(a),
            { name: h, isCompensation: o } = t,
            [l, c] = d.useState(!0),
            R = v(t, e, !l, n, !0),
            { label: m, valueType: b } = R,
            f = _.computes.mainRewardsLength(),
            u = _.computes.additionalRewardsLength() > 0 || f > k;
        return r.jsx(s, {
            appear: !0,
            in: !0,
            timeout: S(a, L),
            onEntered: () => {
                (setTimeout(() => p.sound('gui_random_reward_appear'), $),
                    u || f - 1 !== a || setTimeout(() => p.sound('gui_random_reward_end'), I),
                    c(!1));
            },
            children: (a) =>
                r.jsxs('div', {
                    className: i(Z.base, Z[`base__${a}`], Z[`base__${h}`], Z[`base__${e}`]),
                    children: [
                        r.jsx(w, {
                            ...R,
                            size: e,
                            className: Z.reward,
                            classNames: { info: i(Z.info, Z[`info__${b}`]) },
                        }),
                        o && r.jsx('div', { className: Z.compensationIcon }),
                        r.jsx('div', { className: Z.title, children: m }),
                    ],
                }),
        });
    }),
    ae = 'Rewards_1a8854f',
    de = a(({ rewardSize: e }) => {
        const { model: a } = U();
        return r.jsx('div', {
            className: ae,
            children: b(
                a.computes.mainRewardsLength(),
                (a) => a < k && r.jsx(ee, { rewardIndex: a, rewardSize: e }, `reward-${a}`),
            ),
        });
    }),
    re = {
        root: 'MainRewards_root_56da68ed',
        'header-h80': 'MainRewards_header-h80_9d0753d',
        'header-h56': 'MainRewards_header-h56_b83bab8b',
        'header-h40': 'MainRewards_header-h40_fe5a50e6',
        'header-h32': 'MainRewards_header-h32_6f4a4b47',
        'header-h28': 'MainRewards_header-h28_884af210',
        'header-h26': 'MainRewards_header-h26_f1753c60',
        'header-h24': 'MainRewards_header-h24_ae8aa7d9',
        'header-h22': 'MainRewards_header-h22_bc33db62',
        'header-h20': 'MainRewards_header-h20_f1cf32',
        'header-h18': 'MainRewards_header-h18_a6ce7a99',
        'header-h16': 'MainRewards_header-h16_9beb23a8',
        'paragraph-p20': 'MainRewards_paragraph-p20_4400100b',
        'paragraph-p18': 'MainRewards_paragraph-p18_a6ce7a99',
        'paragraph-p16': 'MainRewards_paragraph-p16_9beb23a8',
        base: 'MainRewards_c825d49e',
        rays: 'MainRewards_rays_3bab8c51',
        glow: 'MainRewards_glow_53ec5a2',
        base__s296x222: 'MainRewards_base__s296x222_56da68ed',
        base__s400x300: 'MainRewards_base__s400x300_56da68ed',
        base__s600x450: 'MainRewards_base__s600x450_56da68ed',
        raysAppearance: 'MainRewards_raysAppearance_56da68ed',
        rotate: 'MainRewards_rotate_56da68ed',
        ribbon: 'MainRewards_ribbon_2d5fa4f7',
        slideUp: 'MainRewards_slideUp_56da68ed',
        fadeIn: 'MainRewards_fadeIn_56da68ed',
        fadeOut: 'MainRewards_fadeOut_56da68ed',
        fadeInC: 'MainRewards_fadeInC_56da68ed',
    },
    se = a(() => {
        const { model: e } = U(),
            { breakpoint: a } = o(),
            s = ((e, a) =>
                a.weight >= l.large.weight
                    ? e < 3
                        ? c.S600x450
                        : c.S400x300
                    : 1 === e && a.weight === l.medium.weight
                      ? c.S600x450
                      : a.weight >= l.small.weight && e <= 3
                        ? c.S400x300
                        : c.S296x222)(Math.min(e.computes.mainRewardsLength(), k), a);
        return (
            d.useEffect(() => {
                setTimeout(() => p.sound('gui_random_reward_red_ribbon_appear'), E);
            }, []),
            r.jsxs('div', {
                className: i(re.base, re[`base__${s}`]),
                children: [
                    r.jsx(Y, { className: re.glow }),
                    r.jsx('div', { className: re.ribbon }),
                    r.jsx('div', { className: re.rays }),
                    r.jsx(de, { rewardSize: s }),
                ],
            })
        );
    }),
    ie = 'RewardScreenApp_5758c14e',
    _e = 'RewardScreenApp_overlay_ac0c9fb2',
    ne = 'RewardScreenApp_main_cb02d339',
    te = 'RewardScreenApp_close_2c41e26e',
    he = 'RewardScreenApp_content_eaaf71',
    oe = 'RewardScreenApp_header_baec490e',
    le = 'RewardScreenApp_rewards_ed3be20f',
    ce = 'RewardScreenApp_additionalRewards_3d7c56e2',
    we = 'RewardScreenApp_additionalRewards__largeReward_513d3648',
    pe = 'RewardScreenApp_footer_b0d0387e',
    Re = a(() => {
        const { model: e, controls: a } = U(),
            { assetsPointer: d, hasCompleted: s } = e.root.get(),
            _ = f.resolve('strings'),
            n = e.computes.mainRewardsLength(),
            t = e.computes.additionalRewardsLength() > 0 || n > k,
            h = 1 === n;
        g(a.closeWindow);
        const { dynamicTexts: o } = O(null, { assetsPointer: d }),
            l = {
                title: y(_.readOrEmpty('white_tiger_lobby.rewardsView.subheader'), { subModeName: o.capsUserName() }),
                subtitle: s ? o.rewardsView.completed.header() : o.rewardsView.stage.header(),
            },
            c = R.images.white_tiger.gui.maps.icons.asset_packs.library.battle_results_bg();
        return r.jsxs('div', {
            className: ie,
            style: { backgroundImage: `url('${c}')` },
            children: [
                r.jsx('div', { className: _e }),
                r.jsxs('div', {
                    className: ne,
                    children: [
                        r.jsx('div', {
                            className: te,
                            children: r.jsx(x, { caption: '', type: 'close', side: 'right', onClick: a.closeWindow }),
                        }),
                        r.jsxs('div', {
                            className: he,
                            children: [
                                r.jsx('div', {
                                    className: oe,
                                    children: r.jsx(K, { title: l.title, status: l.subtitle }),
                                }),
                                r.jsxs('div', {
                                    className: i(le),
                                    children: [r.jsx(se, {}), t && r.jsx(B, { className: i(ce, h && we) })],
                                }),
                            ],
                        }),
                        r.jsx(D, { onClick: a.closeWindow, className: pe }),
                    ],
                }),
            ],
        });
    });
j(r.jsx(z, { children: r.jsx(A, { children: r.jsx(Re, {}) }) }))
    .then(() => N(document.getElementById('root')))
    .then(() => M());
