import { j as o } from './vendor.js';
import { m as e, ac as t, D as s, E as a, R as i, ao as n } from './lib.js';
const r = (o, e) =>
    'overlayType' in o &&
    (!('string' != typeof e || !Object.values(n).includes(e)) || (console.warn(`Invalid overlayType value: ${e}`), !1));
function l({ bonuses: n, questId: l, size: p, resId: d, ...v }) {
    const c = e(n, (o) => ({
            size: p,
            name: o.name,
            image: a(o, p),
            value: o.value,
            valueType: s(o.name),
            special: 'overlayType' in o && r(o, o.overlayType) ? o.overlayType : void 0,
            tooltipArgs: {
                ...t(
                    { tooltipId: `${l}:${o.tooltipId}` },
                    Number(o.tooltipContentId) ||
                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId'),
                ),
                resId: d,
            },
        })),
        m = {
            contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
            args: { showFromIndex: v.count, questId: l },
            resId: d,
        };
    return o.jsx(i, { ...v, data: c, boxRewardTooltip: m, size: p });
}
export { l as R };
