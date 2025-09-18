import { j as e, y as s } from '../../../../chunks/vendor.js';
import {
    m as o,
    c$ as t,
    bT as i,
    bU as r,
    d0 as a,
    d1 as n,
    i as l,
    A as d,
    bO as c,
    bN as p,
    r as u,
} from '../../../../chunks/lib.js';
import { E as m, D as b } from '../../../../chunks/extended_tooltip_decorator.js';
/* empty css                        */ const v = (e, s) =>
    'overlayType' in e &&
    (!('string' != typeof s || !Object.values(n).includes(s)) || (console.warn(`Invalid overlayType value: ${s}`), !1));
function I({ bonuses: s, questId: n, size: l, resId: d, ...c }) {
    const p = o(s, (e) => ({
            size: l,
            name: e.name,
            image: r(e, l),
            value: e.value,
            valueType: i(e.name),
            special: 'overlayType' in e && v(e, e.overlayType) ? e.overlayType : void 0,
            tooltipArgs: {
                ...t(
                    { tooltipId: `${n}:${e.tooltipId}` },
                    Number(e.tooltipContentId) ||
                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                ),
                resId: d,
            },
        })),
        u = {
            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
            args: { showFromIndex: c.count, questId: n },
            resId: d,
        };
    return e.jsx(a, { ...c, data: p, boxRewardTooltip: u, size: l });
}
const [T, y] = l()(({ observableModel: e }) => ({
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
    g = 'BattleQuestTooltip_rewardsText_54d69d4c',
    w = 'BattleQuestTooltip_divider_31b2f465',
    x = 'BattleQuestTooltip_rewardItem_462d39e4',
    _ = 'BattleQuestTooltip_rewards_863df0c8',
    h = d.resolve('aliases'),
    j = R.strings.comp7_light.battleQuestTooltips,
    f = s(function () {
        const { model: s } = y(),
            o = s.bonuses.get(),
            t = s.countdown.get();
        return e.jsxs(m, {
            header: j.mission(),
            description: c(s.description.get()),
            invertedColors: !0,
            timerText: j.expiresIn(),
            timerTimeLeft: t,
            children: [
                e.jsx(b, { className: w }),
                e.jsx('div', { className: g, children: j.rewards(o.length) }),
                e.jsx(I, {
                    bonuses: o,
                    questId: s.id.get(),
                    resId: h.read((e) => e.comp7_light.shared.Quests('resId')),
                    size: p.Small,
                    rewardItemClassMix: x,
                    count: 3,
                    classMix: _,
                }),
            ],
        });
    });
u(e.jsx(T, { children: e.jsx(f, {}) }));
