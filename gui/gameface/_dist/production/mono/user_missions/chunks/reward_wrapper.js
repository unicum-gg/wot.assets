import { j as o } from './vendor.js';
import { m as e, ah as t, v as s, w as a, R as r, S as i } from './lib.js';
function n({ bonuses: n, questId: l, size: p, resId: d, ...v }) {
    const u = e(n, (o) => {
            return {
                size: p,
                name: o.name,
                image: a(o, p),
                value: o.value,
                valueType: s(o.name),
                special:
                    'overlayType' in o &&
                    o.overlayType &&
                    ((e = o.overlayType),
                    ('string' == typeof e && Object.values(i).includes(e)) ||
                        (console.warn(`Invalid overlayType value: ${e}`), 0))
                        ? o.overlayType
                        : void 0,
                tooltipArgs: {
                    ...t(
                        { tooltipId: `${l}:${o.tooltipId}` },
                        Number(o.tooltipContentId) ||
                            R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                    ),
                    resId: d,
                },
            };
            var e;
        }),
        m = {
            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
            args: { showFromIndex: v.count, questId: l },
            resId: d,
        };
    return o.jsx(r, { ...v, data: u, boxRewardTooltip: m, size: p });
}
export { n as R };
