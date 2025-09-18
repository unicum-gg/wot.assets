import { b as o, m as t, M as e, I as i, cO as a, cP as s, cQ as n } from './lib.js';
import './vendor.js';
const p = (o) => ('overlayType' in o ? o.overlayType : void 0);
function l(l, r) {
    const d = ((o, t) => t || (o >= e.Medium ? i.Big : i.Small))(o().mediaSize, r);
    return {
        parsedRewards: t(l, ({ ...o }) => ({
            ...o,
            special: p(o),
            image: n(o, d),
            size: d,
            valueType: s(o.name),
            tooltipArgs: a(
                { tooltipId: o.tooltipId, tooltipContentId: o.tooltipContentId },
                Number(o.tooltipContentId),
            ),
        })),
        imageSize: d,
    };
}
export { l as u };
