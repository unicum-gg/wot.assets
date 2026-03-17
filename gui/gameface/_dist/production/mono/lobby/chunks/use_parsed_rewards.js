import { bl as t, u as e, m as o, M as a, I as n, bm as i, bn as s, bo as r } from './lib.js';
import './vendor.js';
const m = new t(window),
    l = (t, e) => {
        const { name: o } = t,
            a = r(t, e);
        if (!m.has(a))
            switch (o) {
                case 'attachment':
                    return r({ name: o, icon: 'attachment' }, e);
                case 'customizations':
                    return r({ name: o, icon: 'style' }, e);
            }
        return a;
    },
    p = (t) => ('overlayType' in t ? t.overlayType : void 0);
function c(t, r) {
    const m = ((t, e) => e || (t >= a.Medium ? n.Big : n.Small))(e().mediaSize, r);
    return {
        parsedRewards: o(t, ({ ...t }) => ({
            ...t,
            special: p(t),
            image: l(t, m),
            size: m,
            valueType: s(t.name),
            tooltipArgs: i(
                { tooltipId: t.tooltipId, tooltipContentId: t.tooltipContentId },
                Number(t.tooltipContentId),
            ),
        })),
        imageSize: m,
    };
}
export { c as u };
