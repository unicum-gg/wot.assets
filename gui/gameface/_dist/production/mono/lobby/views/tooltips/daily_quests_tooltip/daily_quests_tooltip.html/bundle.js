import { s, j as a, m as e } from '../../../../chunks/vendor.js';
import {
    i as t,
    $ as i,
    E as l,
    D as o,
    m as r,
    A as n,
    aW as d,
    aX as p,
    aY as c,
    aZ as _,
    a_ as m,
    a5 as u,
    a6 as g,
    a7 as y,
    P as j,
    a$ as b,
} from '../../../../chunks/lib.js';
import { g as x, a as D } from '../../../../chunks/utils2.js';
import '../../../../chunks/string-utils.js';
const [Q, v] = t()(({ observableModel: s }) => ({ root: s.object(), rewards: s.array('rewards') }), i),
    A = 'DailyQuestsTooltipApp_4fed0e4d',
    T = 'DailyQuestsTooltipApp_name_45f70d07',
    h = 'DailyQuestsTooltipApp_description_bbbf5b2',
    N = 'DailyQuestsTooltipApp_label_d1b3a5c0',
    f = 'DailyQuestsTooltipApp_progressLabel_5e2b62aa',
    w = 'DailyQuestsTooltipApp_content_4d26e6c0',
    k = 'DailyQuestsTooltipApp_dots_3cffe634',
    C = 'DailyQuestsTooltipApp_rewards_7150b30a',
    S = 'DailyQuestsTooltipApp_reward_19c85da',
    $ = 'DailyQuestsTooltipApp_timerStatus_b010e2f6',
    E = 'DailyQuestsTooltipApp_timerStatus__badge_38721664',
    M = 'DailyQuestsTooltipApp_timer_38721664',
    W = 'DailyQuestsTooltipApp_clockIcon_669ad5af',
    G = s(() => {
        const { model: s } = v(),
            { description: t, isBadge: i, resetTime: j, progress: b, percent: Q } = s.root.get(),
            G = s.rewards.get();
        return a.jsxs('div', {
            className: A,
            children: [
                a.jsx('div', {
                    className: T,
                    children: i
                        ? R.strings.last_stand_lobby.badgeWidget.tooltipHeader()
                        : R.strings.last_stand_lobby.missionWidget.tooltipHeader(),
                }),
                a.jsx('div', { className: h, lang: R.strings.settings.LANGUAGE_CODE(), children: t }),
                i &&
                    a.jsx('div', {
                        className: f,
                        children: a.jsx(l, {
                            text: R.strings.last_stand_tooltips.dailyQuests.progress(),
                            binding: { percentage: Q, value: o(b, 1) },
                        }),
                    }),
                a.jsxs('div', {
                    className: w,
                    children: [
                        a.jsx('div', { className: k }),
                        a.jsx('div', { className: N, children: R.strings.last_stand_tooltips.dailyQuests.rewards() }),
                        a.jsx('div', {
                            className: C,
                            children: r(G, (s, e) =>
                                a.jsx(
                                    u,
                                    {
                                        name: s.name,
                                        value: x(s),
                                        className: S,
                                        size: g.Small,
                                        special: s.overlayType,
                                        image: D(s, g.Small),
                                        valueType: y(s.name),
                                    },
                                    `${s.name}${e}`,
                                ),
                            ),
                        }),
                        a.jsx('div', { className: k }),
                        a.jsx(l, {
                            text: i
                                ? R.strings.last_stand_tooltips.dailyQuests.badgeStatus()
                                : R.strings.last_stand_tooltips.dailyQuests.status(),
                            classMix: e($, i && E),
                            alignContent: n.Center,
                            justifyContent: n.Center,
                            binding: {
                                timer: a.jsx(d, {
                                    className: M,
                                    style: p.Description,
                                    icon: c.None,
                                    duration: j,
                                    refreshRate: 1,
                                }),
                                date: a.jsx(_, { datetime: j, format: m.DayMonthFull }),
                                icon: a.jsx('div', { className: W }),
                            },
                        }),
                    ],
                }),
            ],
        });
    });
j(a.jsx(Q, { children: a.jsx(b, { children: a.jsx(G, {}) }) }));
