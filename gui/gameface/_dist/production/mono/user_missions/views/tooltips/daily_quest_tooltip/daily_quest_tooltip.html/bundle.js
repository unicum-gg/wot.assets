import { j as s } from '../../../../chunks/vendor.js';
import { i as e, n as i, b as r, o, p as t, r as a } from '../../../../chunks/lib.js';
import { R as d } from '../../../../chunks/reward_wrapper.js';
import { D as n } from '../../../../chunks/divider.js';
import { E as l } from '../../../../chunks/extended_tooltip_decorator.js';
const m = 'daily',
    u = 'premium_daily',
    p = 'bonus',
    [_, c] = e()(
        ({ observableModel: s }) => ({
            ...s.primitives([
                'countdown',
                'missionType',
                'id',
                'icon',
                'description',
                'currentProgress',
                'totalProgress',
                'earned',
                'isCompleted',
                'animateCompletion',
            ]),
            bonuses: s.arrayClone('bonuses'),
        }),
        i,
    ),
    y = 'DailyQuestTooltip_rewardsText_e3c9f036',
    b = 'DailyQuestTooltip_divider_e2b4b1fd',
    j = 'DailyQuestTooltip_rewardItem_9acd3b8a',
    h = 'DailyQuestTooltip_rewards_bf27319f',
    x = r.resolve('strings'),
    f = r.resolve('aliases'),
    g = {
        [m]: x.readOrEmpty('user_missions.tooltip.daily_quests.daily_mission'),
        [u]: x.readOrEmpty('user_missions.tooltip.daily_quests.premium_daily_mission'),
        [p]: x.readOrEmpty('user_missions.tooltip.daily_quests.bonus_mission'),
    },
    v = () => {
        const { model: e } = c(),
            i = e.bonuses.get(),
            r = e.missionType.get(),
            a = e.countdown.get();
        return s.jsxs(l, {
            header: g[r],
            description: o(e.description.get()),
            invertedColors: !0,
            timerPath: 'user_missions.tooltip.daily_quests.expires',
            timerTimeLeft: a,
            children: [
                s.jsx(n, { className: b }),
                s.jsx('div', { className: y, children: x.read('user_missions.tooltip.daily_quests.rewards') }),
                s.jsx(d, {
                    bonuses: i,
                    questId: e.id.get(),
                    resId: f.read((s) => s.user_missions.hangarWidget.Quests('resId')),
                    size: t.Small,
                    rewardItemClassMix: j,
                    classMix: h,
                }),
            ],
        });
    };
a(s.jsx(_, { children: s.jsx(v, {}) }));
