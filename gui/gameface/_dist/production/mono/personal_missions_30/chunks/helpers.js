import { as as o, z as t, A as a, C as e, r as i } from './lib.js';
const s = 'tooltipId';
var r = ((o) => (
    (o.VEHICLE_PART = 'vehiclePart'),
    (o.OPERATION_WITH_HONORS = 'operationWithHonors'),
    (o.CAMPAIGN_WITH_HONORS = 'campaignWithHonors'),
    (o.OPERATION = 'operation'),
    o
))(r || {});
const n = (t, a) => {
        const e = o.find((o) => o.name === a);
        return !!e && t < e.weight;
    },
    p = (o, r) => ({
        ...o,
        size: r,
        image: e(o, r),
        valueType: a(o.name),
        special: 'overlayType' in o ? o.overlayType : void 0,
        tooltipArgs: t(
            { [s]: o.tooltipId },
            i
                .resolve('views')
                .read((o) => o.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
        ),
    });
export { s as A, r as R, p as b, n as s };
