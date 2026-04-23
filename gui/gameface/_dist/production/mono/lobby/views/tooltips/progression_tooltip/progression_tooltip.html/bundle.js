import { h as e, E as s, j as t, F as a } from '../../../../chunks/vendor.js';
import {
    a as n,
    c as i,
    m as o,
    e as r,
    h as d,
    g as c,
    a8 as l,
    W as _,
    X as u,
    Y as m,
    Q as g,
    v as p,
    di as x,
    dj as b,
    dk as T,
    a6 as f,
    de as j,
} from '../../../../chunks/lib.js';
import { F as v } from '../../../../chunks/fun_random_progression_state.js';
import { c as N } from '../../../../chunks/readResource.js';
const [I, E] = n()(({ observableModel: s }) => {
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
                    o(t.rewards.get(), (s) => ({
                        name: s.name,
                        image: d(s, e),
                        value: s.value,
                        special: s.overlayType,
                        valueType: r(s.name),
                    })),
                { equals: i },
            ),
            n = e(
                (e) => {
                    const s = c(t.quests.get(), e);
                    if (!s) throw new Error(`Unexpected quest index: ${e}`);
                    return { ...s };
                },
                { equals: i },
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
    L = (e) => {
        const s = `icon_battle_condition_${e}_128x128`;
        return { backgroundImage: `url(${F.$dyn(s) ?? q.$dyn(s)})` };
    },
    y = s(() => {
        const { model: e } = E(),
            { currentPoints: s, maximumPoints: a } = e.currentStage.get(),
            { text: n } = e.condition.get(),
            i = P.progression.$dyn(s > 0 ? 'stepsCurrent' : 'stepsNoProgress'),
            o = 1 === e.quests.get().length ? e.computes.quest(0).questCondition : 'win';
        return t.jsxs('div', {
            className: h,
            children: [
                t.jsx('div', { className: C, children: t.jsx('div', { className: M, style: L(o) }) }),
                t.jsx('div', { className: w, children: n }),
                t.jsxs('div', {
                    className: S,
                    children: [
                        t.jsx('div', { className: A, children: t.jsx(_, { text: i, binding: { done: s, total: a } }) }),
                        t.jsx(u, { size: m.Small, value: s, maxValue: a }),
                    ],
                }),
            ],
        });
    }),
    V = 'Rewards_5d4e74e4',
    k = 'Rewards_title_c6eb21d3',
    $ = 'Rewards_rewardBase_fc0065c2',
    B = 'Rewards_reward_445a79f1',
    D = 'Rewards_reward__small_74754faa',
    Q = R.strings.fun_random.metaProgressionTooltip.reward.header,
    O = s(() => {
        const { model: e } = E(),
            { status: s } = e.progressionState.get(),
            { requiredPoints: n } = e.currentStage.get(),
            i = e.rewards.get().length,
            r = i > 5 ? 4 : 5,
            d = Math.min(i, 5) >= 3,
            c = e.computes.getRewards(d ? g.Small : g.Big),
            l = s === v.ACTIVE_INFINITE_RESETTABLE || s === v.ACTIVE_INFINITE_FINAL,
            _ = o(c, (e) => ({ ...e, image: e.image, className: a(e.className, a(B, d && D)) }));
        return t.jsxs('div', {
            className: V,
            children: [
                t.jsx('div', {
                    className: k,
                    children: t.jsx(p, { text: l ? Q.infinite() : Q.common(), binding: { stagePoints: n } }),
                }),
                t.jsx(x, { rewardItemClassMix: $, size: g.Small, data: _, count: r }),
            ],
        });
    }),
    z = {
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
            { statusTimer: n, status: i } = s.progressionState.get(),
            o = s.isMultipleSubModes.get(),
            r =
                i === v.COMPLETED_RESETTABLE
                    ? R.strings.fun_random.metaProgressionTooltip.timer.untilRelaunch()
                    : R.strings.fun_random.metaProgressionTooltip.timer.untilFinish();
        return t.jsxs('div', {
            className: a(z.base, e && z.base__fullMode),
            children: [
                t.jsx('div', { className: z.background }),
                o && t.jsx('div', { className: a(z.separator, z.separator__top) }),
                t.jsx('div', {
                    className: z.content,
                    children: t.jsx(p, {
                        text: r,
                        classMix: z.description,
                        binding: {
                            time: t.jsx('div', {
                                className: z.countdown,
                                children: t.jsx(b, { duration: n, style: T.Description }),
                            }),
                        },
                    }),
                }),
            ],
        });
    }),
    W = {
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
    X = s(() => {
        const { model: e } = E(),
            s = e.isMultipleSubModes.get(),
            { currentStage: n, maximumStage: i, status: o } = e.progressionState.get(),
            r = e.assetsPointer.get(),
            { dynamicTexts: d } = N('metaProgressionTooltip', { assetsPointer: r }),
            c = [v.ACTIVE_INFINITE_RESETTABLE, v.ACTIVE_INFINITE_FINAL].includes(o);
        return t.jsxs('div', {
            className: a(W.base, W[`base__${o}`]),
            children: [
                t.jsxs('div', {
                    className: W.title,
                    children: [
                        t.jsx(_, { text: d.header.active(), binding: { done: n, total: c ? '' : i } }),
                        c && t.jsx('div', { className: W.infiniteIcon }),
                    ],
                }),
                t.jsx(y, {}),
                t.jsx(O, {}),
                s &&
                    d.reward?.tip &&
                    t.jsxs('div', {
                        className: W.info,
                        children: [
                            t.jsx('div', { className: W.notificationIcon }),
                            t.jsx('div', { className: W.infoDescription, children: d.reward.tip && d.reward.tip() }),
                        ],
                    }),
                t.jsx(U, { fullMode: !0 }),
            ],
        });
    }),
    Y = {
        root: 'CompletedModeContent_root_f3a6d63f',
        base: 'CompletedModeContent_6f4f7052',
        noRewardSubTitle: 'CompletedModeContent_noRewardSubTitle_9917a1cf',
        noRewardTitle: 'CompletedModeContent_noRewardTitle_ae00a2e9',
        base__completedFinal: 'CompletedModeContent_base__completedFinal_f3a6d63f',
    },
    G = s(() => {
        const { model: e } = E(),
            { status: s } = e.progressionState.get(),
            n = e.assetsPointer.get(),
            { staticTexts: i, dynamicTexts: o } = N('metaProgressionTooltip', { assetsPointer: n });
        return t.jsxs('div', {
            className: a(Y.base, Y[`base__${s}`]),
            children: [
                t.jsx('div', { className: Y.noRewardSubTitle, children: o.subheader() }),
                t.jsx('div', { className: Y.noRewardTitle, children: i.header.$dyn(s) }),
                t.jsx(U, {}),
            ],
        });
    }),
    H = s(() => {
        const { model: e } = E(),
            { status: s } = e.progressionState.get();
        switch (s) {
            case v.ACTIVE_FINAL:
            case v.ACTIVE_RESETTABLE:
            case v.ACTIVE_INFINITE_RESETTABLE:
            case v.ACTIVE_INFINITE_FINAL:
                return t.jsx(X, {});
            case v.COMPLETED_FINAL:
            case v.COMPLETED_RESETTABLE:
                return t.jsx(G, {});
            default:
                return (console.error('Unexpected state:', s), null);
        }
    });
f(t.jsx(I, { children: t.jsx(j, { children: t.jsx(H, {}) }) }));
