import { cW as e, dk as o, d8 as r, dq as n, aO as i } from './lib.js';
import './vendor.js';
const s = [e.Big, e.Small],
    a = [e.S232x174, e.S296x222, e.S400x300, e.S600x450],
    t = R.images.comp7.gui.maps.icons.rewards,
    d = (e, o) => 'styleProgress' === e.name && s.includes(o),
    l = (e, o) => ('progressLevel' in e && d(e, o) ? `progressionStyleUpgraded_${e.progressLevel}` : e.overlayType),
    m = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
    u = ({ reward: e, rank: o, index: n }) => {
        const { tooltipId: i, tooltipContentId: s } = e;
        return r({ tooltipId: i, ...(void 0 !== o && { rank: o }), ...(void 0 !== n && { index: n }) }, Number(s), {
            ignoreShowDelay: !0,
        });
    },
    p = (e, o) => {
        var r;
        if ('tankman' === e.name) {
            const n = null == (r = R.images.comp7.gui.maps.icons.crew.$dyn(o)) ? void 0 : r.$dyn(e.groupName);
            if (n) return `${n}`;
            console.info(`Folder for reward size ${o} was not found for crew with groupName: ${e.groupName}`);
        }
        if (d(e, o)) return `R.images.gui.maps.icons.quests.bonuses.${o}.camouflage`;
        if ('customizations' === e.name && a.includes(o)) {
            const r = t.$dyn(o),
                n = (null == r ? void 0 : r.$dyn(`style_${e.styleID}`)) || (null == r ? void 0 : r.$dyn(e.icon));
            if (n) return `${n}`;
            console.info(`asset with styleID: ${e.styleID}, size:${o} was not found, using common icon`);
        }
        return n(e, o);
    },
    c = ({ reward: r, size: n, rank: i, index: s }) => {
        const a = ((o, r) => {
            if ('dogTagComponents' === o.name) {
                if (r === e.Big) return e.S80x80;
                if (r === e.Small) return e.S48x48;
            }
            return r;
        })(r, n);
        return {
            ...r,
            size: a,
            image: p(r, a),
            value: m(r),
            valueType: o(r.name),
            special: l(r, a),
            tooltipArgs: u({ reward: r, rank: i, index: s }),
            periodicIconTooltipArgs: {
                header: R.strings.tooltips.periodicReward.header(),
                body: R.strings.tooltips.periodicReward.comp7.body(),
            },
        };
    },
    g = ({ rewards: e, size: o, rank: r, index: n }) => i(e, (e) => c({ reward: e, size: o, rank: r, index: n }));
export { c as g, g as m };
