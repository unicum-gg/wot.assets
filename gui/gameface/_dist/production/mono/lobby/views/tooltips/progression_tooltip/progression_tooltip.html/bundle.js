import { x as e, y as s, j as t, z as a } from '../../../../chunks/vendor.js';
import {
    a as n,
    c as o,
    m as i,
    e as r,
    h as d,
    g as c,
    ac as l,
    q as _,
    P as u,
    v as m,
    I as g,
    w as p,
    d1 as x,
    d2 as b,
    d3 as T,
    a3 as f,
    cY as j,
} from '../../../../chunks/lib.js';
import { F as v } from '../../../../chunks/fun_random_progression_state.js';
import { g as I } from '../../../../chunks/readResource.js';
const [N, E] = n()(({ observableModel: s }) => {
        const t = {
                progressionState: s.object('state'),
                currentStage: s.object('currentStage'),
                condition: s.object('condition'),
                quests: s.array('condition.conditions', []),
                rewards: s.array('currentStage.rewards', []),
                assetsPointer: s.object('assetsPointer'),
                isMultipleSubModes: s.object('isMultipleSubModes'),
            },
            a = e(
                (e) =>
                    i(t.rewards.get(), (s) => ({
                        name: s.name,
                        image: d(s, e),
                        value: s.value,
                        special: s.overlayType,
                        valueType: r(s.name),
                    })),
                { equals: o },
            ),
            n = e(
                (e) => {
                    const s = c(t.quests.get(), e);
                    if (!s) throw new Error(`Unexpected quest index: ${e}`);
                    return { ...s };
                },
                { equals: o },
            );
        return { ...t, computes: { getRewards: a, quest: n } };
    }, l),
    h = 'Quest_bb7f8da9',
    C = 'Quest_questIcons_bd5d5b3e',
    M = 'Quest_questIcon_59d83c2b',
    w = 'Quest_title_31edee2d',
    S = 'Quest_progress_64eb1432',
    A = 'Quest_progressValue_8ad74795',
    P = R.strings.fun_random,
    F = R.images.gui.maps.icons.quests.battleCondition.c_128_decor,
    q = R.images.gui.maps.icons.quests.battleCondition.c_128,
    y = (e) => {
        const s = `icon_battle_condition_${e}_128x128`;
        return { backgroundImage: `url(${F.$dyn(s) ?? q.$dyn(s)})` };
    },
    L = s(() => {
        const { model: e } = E(),
            { currentPoints: s, maximumPoints: a } = e.currentStage.get(),
            { text: n } = e.condition.get(),
            o = P.progression.$dyn(s > 0 ? 'stepsCurrent' : 'stepsNoProgress'),
            i = 1 === e.quests.get().length ? e.computes.quest(0).questCondition : 'win';
        return t.jsxs('div', {
            className: h,
            children: [
                t.jsx('div', { className: C, children: t.jsx('div', { className: M, style: y(i) }) }),
                t.jsx('div', { className: w, children: n }),
                t.jsxs('div', {
                    className: S,
                    children: [
                        t.jsx('div', { className: A, children: t.jsx(_, { text: o, binding: { done: s, total: a } }) }),
                        t.jsx(u, { size: m.Small, value: s, maxValue: a }),
                    ],
                }),
            ],
        });
    }),
    V = 'Rewards_5d4e74e4',
    $ = 'Rewards_title_c6eb21d3',
    k = 'Rewards_rewardBase_fc0065c2',
    B = 'Rewards_reward_445a79f1',
    D = 'Rewards_reward__small_74754faa',
    Q = R.strings.fun_random.metaProgressionTooltip.reward.header,
    z = s(() => {
        const { model: e } = E(),
            { status: s } = e.progressionState.get(),
            { requiredPoints: n } = e.currentStage.get(),
            o = e.rewards.get().length,
            r = o > 5 ? 4 : 5,
            d = Math.min(o, 5) >= 3,
            c = e.computes.getRewards(d ? g.Small : g.Big),
            l = s === v.ACTIVE_INFINITE_RESETTABLE || s === v.ACTIVE_INFINITE_FINAL,
            _ = i(c, (e) => ({ ...e, image: e.image, className: a(e.className, a(B, d && D)) }));
        return t.jsxs('div', {
            className: V,
            children: [
                t.jsx('div', {
                    className: $,
                    children: t.jsx(p, { text: l ? Q.infinite() : Q.common(), binding: { stagePoints: n } }),
                }),
                t.jsx(x, { rewardItemClassMix: k, size: g.Small, data: _, count: r }),
            ],
        });
    }),
    O = {
        base: 'Timer_fc03975',
        background: 'Timer_background_18432129',
        content: 'Timer_content_d795ba69',
        base__fullMode: 'Timer_base__fullMode_6ee5dd6c',
        countdown: 'Timer_countdown_a77e928',
        description: 'Timer_description_c3de44f',
        separator: 'Timer_separator_5f443465',
    },
    U = s(({ fullMode: e }) => {
        const { model: s } = E(),
            { statusTimer: n, status: o } = s.progressionState.get(),
            i = s.isMultipleSubModes.get(),
            r =
                o === v.COMPLETED_RESETTABLE
                    ? R.strings.fun_random.metaProgressionTooltip.timer.untilRelaunch()
                    : R.strings.fun_random.metaProgressionTooltip.timer.untilFinish();
        return t.jsxs('div', {
            className: a(O.base, e && O.base__fullMode),
            children: [
                t.jsx('div', { className: O.background }),
                i && t.jsx('div', { className: a(O.separator, O.separator__top) }),
                t.jsx('div', {
                    className: O.content,
                    children: t.jsx(p, {
                        text: r,
                        classMix: O.description,
                        binding: {
                            time: t.jsx('div', {
                                className: O.countdown,
                                children: t.jsx(b, { duration: n, style: T.Description }),
                            }),
                        },
                    }),
                }),
            ],
        });
    }),
    Y = {
        root: 'ActiveModeContent_root_684b70dc',
        base: 'ActiveModeContent_9a83f24b',
        title: 'ActiveModeContent_title_c8fece42',
        description: 'ActiveModeContent_description_3ea6effe',
        info: 'ActiveModeContent_info_feb5d1c9',
        base__activeFinal: 'ActiveModeContent_base__activeFinal_684b70dc',
        infoDescription: 'ActiveModeContent_infoDescription_d7ccd1a0',
        notificationIcon: 'ActiveModeContent_notificationIcon_821a9fa',
        infiniteIcon: 'ActiveModeContent_infiniteIcon_6e6d7165',
    },
    G = s(() => {
        var e;
        const { model: s } = E(),
            n = s.isMultipleSubModes.get(),
            { currentStage: o, maximumStage: i, status: r } = s.progressionState.get(),
            d = s.assetsPointer.get(),
            { dynamicTexts: c } = I('metaProgressionTooltip', { assetsPointer: d }),
            l = [v.ACTIVE_INFINITE_RESETTABLE, v.ACTIVE_INFINITE_FINAL].includes(r);
        return t.jsxs('div', {
            className: a(Y.base, Y[`base__${r}`]),
            children: [
                t.jsxs('div', {
                    className: Y.title,
                    children: [
                        t.jsx(_, { text: c.header.active(), binding: { done: o, total: l ? '' : i } }),
                        l && t.jsx('div', { className: Y.infiniteIcon }),
                    ],
                }),
                t.jsx(L, {}),
                t.jsx(z, {}),
                n &&
                    (null == (e = c.reward) ? void 0 : e.tip) &&
                    t.jsxs('div', {
                        className: Y.info,
                        children: [
                            t.jsx('div', { className: Y.notificationIcon }),
                            t.jsx('div', { className: Y.infoDescription, children: c.reward.tip && c.reward.tip() }),
                        ],
                    }),
                t.jsx(U, { fullMode: !0 }),
            ],
        });
    }),
    H = {
        root: 'CompletedModeContent_root_f3a6d63f',
        base: 'CompletedModeContent_6f4f7052',
        noRewardSubTitle: 'CompletedModeContent_noRewardSubTitle_9917a1cf',
        noRewardTitle: 'CompletedModeContent_noRewardTitle_ae00a2e9',
        base__completedFinal: 'CompletedModeContent_base__completedFinal_f3a6d63f',
    },
    J = s(() => {
        const { model: e } = E(),
            { status: s } = e.progressionState.get(),
            n = e.assetsPointer.get(),
            { staticTexts: o, dynamicTexts: i } = I('metaProgressionTooltip', { assetsPointer: n });
        return t.jsxs('div', {
            className: a(H.base, H[`base__${s}`]),
            children: [
                t.jsx('div', { className: H.noRewardSubTitle, children: i.subheader() }),
                t.jsx('div', { className: H.noRewardTitle, children: o.header.$dyn(s) }),
                t.jsx(U, {}),
            ],
        });
    }),
    K = s(() => {
        const { model: e } = E(),
            { status: s } = e.progressionState.get();
        switch (s) {
            case v.ACTIVE_FINAL:
            case v.ACTIVE_RESETTABLE:
            case v.ACTIVE_INFINITE_RESETTABLE:
            case v.ACTIVE_INFINITE_FINAL:
                return t.jsx(G, {});
            case v.COMPLETED_FINAL:
            case v.COMPLETED_RESETTABLE:
                return t.jsx(J, {});
            default:
                return (console.error('Unexpected state:', s), null);
        }
    });
f(t.jsx(N, { children: t.jsx(j, { children: t.jsx(K, {}) }) }));
