import { b as o, m as t, M as e, I as i, dl as a, dm as s, dn as n } from './lib.js';
import './vendor.js';
const d = (o) => ('overlayType' in o ? o.overlayType : void 0);
function l(l, p) {
    const r = ((o, t) => t || (o >= e.Medium ? i.Big : i.Small))(o().mediaSize, p);
    return {
        parsedRewards: t(l, ({ ...o }) => ({
            ...o,
            special: d(o),
            image: n(o, r),
            size: r,
            valueType: s(o.name),
            tooltipArgs: a(
                { tooltipId: o.tooltipId, tooltipContentId: o.tooltipContentId },
                Number(o.tooltipContentId),
            ),
        })),
        imageSize: r,
    };
}
export { l as u };
