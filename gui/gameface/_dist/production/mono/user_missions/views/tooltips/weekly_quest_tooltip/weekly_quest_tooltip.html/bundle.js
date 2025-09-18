import { q as s, j as e } from '../../../../chunks/vendor.js';
import { i as o, m as i, D as t, E as a, p as r, n, b as l, d, R as m, r as c } from '../../../../chunks/lib.js';
import { D as p } from '../../../../chunks/divider.js';
import { E as u } from '../../../../chunks/extended_tooltip_decorator.js';
import { S as _ } from '../../../../chunks/spec_conditions.js';
import { t as j } from '../../../../chunks/helpers.js';
const [k, h] = o()(
        ({ observableModel: s }) => ({
            ...s.primitives(['commonConditionId']),
            specConditions: s.transform((s) => j(s), 'specialConditionIds'),
            rewards: s.transform(
                (s) =>
                    i(s, (s) => ({
                        size: r.Small,
                        name: s.name,
                        image: a(s, r.Small),
                        value: s.value,
                        valueType: t(s.name),
                    })),
                'bonuses',
            ),
        }),
        n,
    ),
    f = 'WeeklyQuestTooltip_specConditions_dc19d553',
    y = 'WeeklyQuestTooltip_divider_18712a6c',
    v = 'WeeklyQuestTooltip_blockTitle_31eb440a',
    x = 'WeeklyQuestTooltip_rewards_b03f0c37',
    b = 'WeeklyQuestTooltip_rewardItem_e6e09bf9',
    C = l.resolve('strings'),
    w = s(function () {
        const { model: s } = h(),
            o = s.specConditions.get();
        return e.jsxs(u, {
            header: C.readOrEmpty('user_missions.tooltip.weekly_mission'),
            description: C.readOrEmpty(`weekly_quests.condition.common.c_${s.commonConditionId.get()}`),
            invertedColors: !0,
            children: [
                o.length > 0 && e.jsx(_, { specConditions: o, className: f }),
                e.jsx(p, { className: y }),
                e.jsx(d, { path: 'user_missions.tooltip.daily_quests.rewards', className: v }),
                e.jsx(m, { data: s.rewards.get(), size: r.Small, classMix: x, rewardItemClassMix: b }),
            ],
        });
    });
c(e.jsx(k, { children: e.jsx(w, {}) }));
