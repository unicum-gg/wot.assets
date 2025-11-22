import { j as e, x as s } from '../../../../chunks/vendor.js';
import {
    m as o,
    dd as t,
    c8 as r,
    c9 as i,
    de as a,
    df as n,
    i as d,
    L as l,
    c3 as c,
    c2 as p,
    r as u,
} from '../../../../chunks/lib.js';
import { E as m, D as v } from '../../../../chunks/extended_tooltip_decorator.js';
/* empty css                        */ function I({ bonuses: s, questId: d, size: l, resId: c, ...p }) {
    const u = o(s, (e) => {
            return {
                size: l,
                name: e.name,
                image: i(e, l),
                value: e.value,
                valueType: r(e.name),
                special:
                    'overlayType' in e &&
                    e.overlayType &&
                    ((s = e.overlayType),
                    ('string' == typeof s && Object.values(n).includes(s)) ||
                        (console.warn(`Invalid overlayType value: ${s}`), 0))
                        ? e.overlayType
                        : void 0,
                tooltipArgs: {
                    ...t(
                        { tooltipId: `${d}:${e.tooltipId}` },
                        Number(e.tooltipContentId) ||
                            R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                    ),
                    resId: c,
                },
            };
            var s;
        }),
        m = {
            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
            args: { showFromIndex: p.count, questId: d },
            resId: c,
        };
    return e.jsx(a, { ...p, data: u, boxRewardTooltip: m, size: l });
}
const [T, b] = d()(({ observableModel: e }) => ({
        ...e.primitives([
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
        bonuses: e.arrayClone('bonuses'),
    })),
    x = 'BattleQuestTooltip_rewardsText_54d69d4c',
    g = 'BattleQuestTooltip_divider_31b2f465',
    w = 'BattleQuestTooltip_rewardItem_462d39e4',
    y = 'BattleQuestTooltip_rewards_863df0c8',
    _ = l.resolve('aliases'),
    h = R.strings.comp7_light.battleQuestTooltips,
    j = s(function () {
        const { model: s } = b(),
            o = s.bonuses.get(),
            t = s.countdown.get();
        return e.jsxs(m, {
            header: h.mission(),
            description: c(s.description.get()),
            invertedColors: !0,
            timerText: h.expiresIn(),
            timerTimeLeft: t,
            children: [
                e.jsx(v, { className: g }),
                e.jsx('div', { className: x, children: h.rewards(o.length) }),
                e.jsx(I, {
                    bonuses: o,
                    questId: s.id.get(),
                    resId: _.read((e) => e.comp7_light.shared.Quests('resId')),
                    size: p.Small,
                    rewardItemClassMix: w,
                    count: 3,
                    classMix: y,
                }),
            ],
        });
    });
u(e.jsx(T, { children: e.jsx(j, {}) }));
