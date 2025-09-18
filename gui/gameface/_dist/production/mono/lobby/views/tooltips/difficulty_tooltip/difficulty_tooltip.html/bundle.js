import { n as e, R as s, j as a, m as i, s as d } from '../../../../chunks/vendor.js';
import {
    i as t,
    ad as c,
    g as l,
    c as r,
    m as o,
    Y as _,
    Z as n,
    ab as p,
    ah as f,
    P as m,
    a$ as u,
} from '../../../../chunks/lib.js';
import { f as h } from '../../../../chunks/string-utils.js';
import { g as x, a as v } from '../../../../chunks/utils2.js';
const [y, j] = t()(({ observableModel: s }) => {
        const a = { root: s.object(), rewardsByWave: s.array('rewardsByWave') },
            i = e(
                (e) => {
                    const s = l(a.rewardsByWave.get(), e);
                    if (!s) throw Error(`No rewards found for index: ${a.rewardsByWave.get()}`);
                    return s;
                },
                { equals: r },
            );
        return { ...a, computes: { getRewardsByWaveIndex: i } };
    }, c),
    b = 'Shield_fdadec95',
    w = 'Shield_content_e83a128',
    g = 'Shield_content__completed_7e44316c',
    D = 'Shield_check_c7a26a19',
    N = 'Shield_index_3ff5314e',
    k = s.memo(function ({ completed: e, index: s = -1, className: d }) {
        const t = s >= 0;
        return a.jsx('div', {
            className: i(b, d),
            children:
                t && e
                    ? a.jsx('div', { className: D })
                    : a.jsx('div', {
                          className: i(w, e && g),
                          children: t && a.jsx('div', { className: N, children: s }),
                      }),
        });
    }),
    T = 'Rewards_9ead941e',
    A = 'Rewards_base__last_653802ba',
    $ = 'Rewards_shield_57f47719',
    B = 'Rewards_reward_7511df10',
    H = 'Rewards_reward__received_62b5a47f',
    W = 'Rewards_container_4b1e77a4',
    S = d(function ({ wave: e, isLast: s }) {
        const { model: d } = j(),
            { isReceived: t, rewards: c } = d.computes.getRewardsByWaveIndex(e);
        return a.jsx('div', {
            className: i(T, s && A),
            children: a.jsxs('div', {
                className: W,
                children: [
                    a.jsx(k, { index: e + 1, completed: t, className: $ }),
                    o(c, (e, s) =>
                        a.jsx(
                            _,
                            {
                                name: e.name,
                                value: x(e),
                                className: i(B, t && H),
                                size: n.Small,
                                special: e.overlayType,
                                image: v(e, n.Small),
                                valueType: p(e.name),
                            },
                            `${e.name}${s}`,
                        ),
                    ),
                ],
            }),
        });
    }),
    I = {
        root: 'DifficultyTooltipApp_root_a69bf6a6',
        base: 'DifficultyTooltipApp_c7e64ad',
        header: 'DifficultyTooltipApp_header_40d06e88',
        subHeader: 'DifficultyTooltipApp_subHeader_5f21df5d',
        subHeader__high: 'DifficultyTooltipApp_subHeader__high_e55163ba',
        container: 'DifficultyTooltipApp_container_379ae0b1',
        rewards: 'DifficultyTooltipApp_rewards_c1ee7fc1',
        rewardsDescr: 'DifficultyTooltipApp_rewardsDescr_a7b89ec6',
        icon: 'DifficultyTooltipApp_icon_86db8e7a',
        description: 'DifficultyTooltipApp_description_858e0f5c',
        dots: 'DifficultyTooltipApp_dots_e7474852',
        dots__text: 'DifficultyTooltipApp_dots__text_c4f6d968',
        state: 'DifficultyTooltipApp_state_5dc34117',
        state__locked: 'DifficultyTooltipApp_state__locked_7fc6407c',
        state__selected: 'DifficultyTooltipApp_state__selected_98d59d2e',
        lock: 'DifficultyTooltipApp_lock_89078d64',
        lockDescr: 'DifficultyTooltipApp_lockDescr_a41a7031',
    },
    L = R.strings.last_stand_lobby.difficult.tooltip,
    F = 'R.images.last_stand.gui.maps.icons.difficulties',
    M = d(() => {
        const { model: e } = j(),
            s = f(),
            { level: d, state: t, isLocked: c, isHangar: l, maxCompletedMissions: r } = e.root.get(),
            _ = `level${d}`,
            n = 1 === s ? `${F}.icon_lock_small` : `${F}.icon_lock_big`;
        return a.jsxs('div', {
            className: I.base,
            children: [
                a.jsx('div', { className: I.header, children: L.header.$dyn(_) }),
                a.jsxs('span', {
                    children: [
                        a.jsx(k, { completed: r > 0 }),
                        a.jsx('div', {
                            className: i(I.subHeader, !l && I.subHeader__high),
                            children: h(L.subHeader(), { count: r }),
                        }),
                    ],
                }),
                l &&
                    a.jsxs(a.Fragment, {
                        children: [
                            a.jsx('div', {
                                className: I.container,
                                children: a.jsx('div', {
                                    className: I.icon,
                                    style: { backgroundImage: `url('${F}.c_112x112.diff_${d}')` },
                                }),
                            }),
                            a.jsx('div', { className: I.description, children: L.description.$dyn(_) }),
                        ],
                    }),
                a.jsx('div', { className: I.dots }),
                a.jsx('div', { className: I.rewardsDescr, children: L.description.reward() }),
                a.jsx('div', {
                    className: I.rewards,
                    children: o(e.rewardsByWave.get(), (s, i) =>
                        a.jsx(S, { wave: i, isLast: l && i == e.rewardsByWave.get().length - 1 }),
                    ),
                }),
                l &&
                    a.jsxs(a.Fragment, {
                        children: [
                            a.jsx('div', { className: i(I.dots, I.dots__text) }),
                            a.jsxs('div', {
                                className: i(I.state, c && I.state__locked, I[`state__${t}`]),
                                children: [
                                    c && a.jsx('div', { className: I.lock, style: { backgroundImage: `url('${n}')` } }),
                                    c ? L.locked() : L.state.$dyn(t),
                                ],
                            }),
                            c && d > 1 && a.jsx('div', { className: I.lockDescr, children: L.lockedDescr.$dyn(_) }),
                        ],
                    }),
            ],
        });
    });
m(a.jsx(y, { children: a.jsx(u, { children: a.jsx(M, {}) }) }));
