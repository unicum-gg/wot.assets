import { i as e, j as s, f as t, a1 as i, a3 as r } from '../../../../chunks/vendor.js';
import {
    i as a,
    aG as n,
    ad as c,
    cp as o,
    cq as d,
    es as u,
    cu as l,
    cj as x,
    cx as _,
    m,
    cz as p,
    cC as w,
    ca as j,
    et as b,
    d2 as g,
} from '../../../../chunks/lib.js';
import { Q as v } from '../../../../chunks/weekly_quests_model.js';
/* empty css                        */ const [h, N] = a()(({ observableModel: s }) => {
    const t = {
            root: s.object(),
            bonuses: s.array('bonuses'),
            questNumbersToRewards: s.array('questNumbersToRewards'),
        },
        i = e((e) => {
            const s = n(t.questNumbersToRewards.get(), e);
            if (!s) throw new Error(`qualification battle with index ${e} was not found`);
            return s;
        });
    return { ...t, computes: { questRewardsNumber: i } };
});
var f = ((e) => ((e.Active = 'active'), (e.Waiting = 'waiting'), (e.Reward = 'reward'), e))(f || {});
const M = 'Divider_7a72bfaf',
    T = 'Divider_71fcbede',
    W = ({ className: e }) => s.jsx('div', { className: t(M, e), children: s.jsx('div', { className: T }) });
function Q({ bonuses: e, size: t, ...i }) {
    const r = c(e, (e) => ({ size: t, name: e.name, image: d(e, t), value: e.value, valueType: o(e.name) }));
    return s.jsx(u, { ...i, data: r, size: t });
}
const q = {
        header: 'ActiveQuestCard_header_e228dbe8',
        description: 'ActiveQuestCard_description_bad0b037',
        description__dark: 'ActiveQuestCard_description__dark_e8f90930',
        divider: 'ActiveQuestCard_divider_bc8f698f',
        rewardsText: 'ActiveQuestCard_rewardsText_539c9121',
        counter: 'ActiveQuestCard_counter_e00c67cc',
        counter__current: 'ActiveQuestCard_counter__current_5abd8ace',
    },
    k = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
    C = i(() => {
        const { model: e } = N(),
            { description: t, questsPassed: i, totalQuests: a } = e.root.get(),
            n = e.bonuses.get(),
            c = e.questNumbersToRewards.get().length - 1;
        return s.jsxs('div', {
            className: q.base,
            children: [
                s.jsx(l, { text: k.header(), classMix: q.header }),
                s.jsx(l, { text: t, classMix: q.description }),
                s.jsx(W, { className: q.divider }),
                s.jsx('div', { className: q.rewardsText, children: k.rewards(n.length) }),
                s.jsx(Q, { bonuses: n, size: x.Small, count: 3 }),
                s.jsx(W, { className: q.divider }),
                s.jsx(l, {
                    text: k.missionsCounter(),
                    classMix: r(q.counter, q.counter__current),
                    binding: {
                        counter: s.jsx(l, {
                            text: k.counter(),
                            classMix: q.counter,
                            binding: {
                                current: s.jsx('span', { className: q.counter__current, children: i }),
                                total: a,
                            },
                        }),
                    },
                }),
                s.jsx(_, {
                    text: k.description(),
                    classMix: r(q.description, q.description__dark),
                    binding: {
                        questsList: m(c, (s) => e.computes.questRewardsNumber(s)).join(
                            R.strings.comp7_ext.listSeparator(),
                        ),
                        lastQuest: e.computes.questRewardsNumber(c),
                    },
                }),
            ],
        });
    }),
    D = {
        header: 'Reward_header_fe1c875b',
        description: 'Reward_description_901b8d14',
        divider: 'Reward_divider_ea66945c',
        rewardsText: 'Reward_rewardsText_ef59fc7c',
        reward: 'Reward_e744e1e2',
    },
    y = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
    A = {
        header: 'Waiting_header_3d83166b',
        counterContainer: 'Waiting_counterContainer_440beb40',
        counter: 'Waiting_counter_da0557a8',
        counter__current: 'Waiting_counter__current_115914f0',
        timerBlock: 'Waiting_timerBlock_df0e9a3f',
        description: 'Waiting_description_cdde7d73',
        divider: 'Waiting_divider_f2e77895',
        newMissionsDescriptionWrapper: 'Waiting_newMissionsDescriptionWrapper_9c86e45a',
        newMissionsDescription: 'Waiting_newMissionsDescription_3b697f7',
        newMissionsTimer: 'Waiting_newMissionsTimer_6bf867a3',
    },
    z = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
    B = i(() => {
        const { model: e } = N(),
            { timeToNewQuests: t, questsPassed: i, totalQuests: r } = e.root.get(),
            a = e.questNumbersToRewards.get().length - 1;
        return s.jsxs('div', {
            className: A.base,
            children: [
                s.jsx(l, { text: z.header(), classMix: A.header }),
                s.jsx(l, {
                    text: z.missionsCounter(),
                    classMix: A.counterContainer,
                    binding: {
                        counter: s.jsx(l, {
                            text: z.counter(),
                            classMix: A.counter,
                            binding: {
                                current: s.jsx('span', { className: A.counter__current, children: i }),
                                total: r,
                            },
                        }),
                    },
                }),
                s.jsx(_, {
                    text: z.description(),
                    classMix: A.description,
                    binding: {
                        questsList: m(a, (s) => e.computes.questRewardsNumber(s)).join(
                            R.strings.comp7_ext.listSeparator(),
                        ),
                        lastQuest: e.computes.questRewardsNumber(a),
                    },
                }),
                s.jsxs('div', {
                    className: A.timerBlock,
                    children: [
                        s.jsx(W, { className: A.divider }),
                        s.jsxs('div', {
                            className: A.newMissionsDescriptionWrapper,
                            children: [
                                s.jsx(p, {
                                    classMix: A.newMissionsDescription,
                                    content: w(z.newMissions(v), { value: v }),
                                }),
                                s.jsx(j, { start: t, className: A.newMissionsTimer }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    S = 'WeeklyQuestWidgetTooltip_20195207',
    L = {
        [f.Active]: C,
        [f.Waiting]: B,
        [f.Reward]: () =>
            s.jsxs('div', {
                className: D.base,
                children: [
                    s.jsx(l, { text: y.completed(), classMix: D.header }),
                    s.jsx(l, { text: y.completedDescription(), classMix: D.description }),
                    s.jsx(W, { className: D.divider }),
                    s.jsx('div', { className: D.rewardsText, children: y.rewards() }),
                    s.jsx('div', { className: D.reward }),
                ],
            }),
    },
    P = i(() => {
        const { model: e } = N(),
            t = L[e.root.get().state];
        return t
            ? s.jsx(b, {
                  children: s.jsx(b.Decorator, { children: s.jsx('div', { className: S, children: s.jsx(t, {}) }) }),
              })
            : (console.error('Unreachable code: WeeklyQuestTooltip'), null);
    });
g(s.jsx(h, { children: s.jsx(P, {}) }));
