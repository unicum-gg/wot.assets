import { x as e, j as s, f as t, y as i, w as r } from '../../../../chunks/vendor.js';
import {
    i as a,
    b as n,
    m as c,
    dc as d,
    dd as o,
    dY as u,
    q as l,
    d7 as x,
    n as _,
    e as m,
    ak as p,
    o as w,
    c$ as b,
    dZ as j,
    aA as g,
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
    const r = c(e, (e) => ({ size: t, name: e.name, image: o(e, t), value: e.value, valueType: d(e.name) }));
    return s.jsx(u, { ...i, data: r, size: t });
}
const k = {
        header: 'ActiveQuestCard_header_e228dbe8',
        description: 'ActiveQuestCard_description_bad0b037',
        description__dark: 'ActiveQuestCard_description__dark_e8f90930',
        divider: 'ActiveQuestCard_divider_bc8f698f',
        rewardsText: 'ActiveQuestCard_rewardsText_539c9121',
        counter: 'ActiveQuestCard_counter_e00c67cc',
        counter__current: 'ActiveQuestCard_counter__current_5abd8ace',
    },
    q = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
    C = i(() => {
        const { model: e } = N(),
            { description: t, questsPassed: i, totalQuests: a } = e.root.get(),
            n = e.bonuses.get(),
            c = e.questNumbersToRewards.get().length - 1;
        return s.jsxs('div', {
            className: k.base,
            children: [
                s.jsx(l, { text: q.header(), classMix: k.header }),
                s.jsx(l, { text: t, classMix: k.description }),
                s.jsx(W, { className: k.divider }),
                s.jsx('div', { className: k.rewardsText, children: q.rewards(n.length) }),
                s.jsx(Q, { bonuses: n, size: x.Small, count: 3 }),
                s.jsx(W, { className: k.divider }),
                s.jsx(l, {
                    text: q.missionsCounter(),
                    classMix: r(k.counter, k.counter__current),
                    binding: {
                        counter: s.jsx(l, {
                            text: q.counter(),
                            classMix: k.counter,
                            binding: {
                                current: s.jsx('span', { className: k.counter__current, children: i }),
                                total: a,
                            },
                        }),
                    },
                }),
                s.jsx(_, {
                    text: q.description(),
                    classMix: r(k.description, k.description__dark),
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
    y = {
        header: 'Reward_header_fe1c875b',
        description: 'Reward_description_901b8d14',
        divider: 'Reward_divider_ea66945c',
        rewardsText: 'Reward_rewardsText_ef59fc7c',
        reward: 'Reward_e744e1e2',
    },
    A = R.strings.comp7_ext.weeklyQuestWidgetTooltip,
    D = {
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
            className: D.base,
            children: [
                s.jsx(l, { text: z.header(), classMix: D.header }),
                s.jsx(l, {
                    text: z.missionsCounter(),
                    classMix: D.counterContainer,
                    binding: {
                        counter: s.jsx(l, {
                            text: z.counter(),
                            classMix: D.counter,
                            binding: {
                                current: s.jsx('span', { className: D.counter__current, children: i }),
                                total: r,
                            },
                        }),
                    },
                }),
                s.jsx(_, {
                    text: z.description(),
                    classMix: D.description,
                    binding: {
                        questsList: m(a, (s) => e.computes.questRewardsNumber(s)).join(
                            R.strings.comp7_ext.listSeparator(),
                        ),
                        lastQuest: e.computes.questRewardsNumber(a),
                    },
                }),
                s.jsxs('div', {
                    className: D.timerBlock,
                    children: [
                        s.jsx(W, { className: D.divider }),
                        s.jsxs('div', {
                            className: D.newMissionsDescriptionWrapper,
                            children: [
                                s.jsx(p, {
                                    classMix: D.newMissionsDescription,
                                    content: w(z.newMissions(v), { value: v }),
                                }),
                                s.jsx(b, { start: t, className: D.newMissionsTimer }),
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
                className: y.base,
                children: [
                    s.jsx(l, { text: A.completed(), classMix: y.header }),
                    s.jsx(l, { text: A.completedDescription(), classMix: y.description }),
                    s.jsx(W, { className: y.divider }),
                    s.jsx('div', { className: y.rewardsText, children: A.rewards() }),
                    s.jsx('div', { className: y.reward }),
                ],
            }),
    },
    P = i(() => {
        const { model: e } = N(),
            t = L[e.root.get().state];
        return t
            ? s.jsx(j, {
                  children: s.jsx(j.Decorator, { children: s.jsx('div', { className: S, children: s.jsx(t, {}) }) }),
              })
            : (console.error('Unreachable code: WeeklyQuestTooltip'), null);
    });
g(s.jsx(h, { children: s.jsx(P, {}) }));
