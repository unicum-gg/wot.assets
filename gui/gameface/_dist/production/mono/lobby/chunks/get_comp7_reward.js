import { dy as e, eg as r, dL as o, em as n, ag as s } from './lib.js';
const i = [e.Big, e.Small],
    a = [e.S232x174, e.S296x222, e.S400x300, e.S600x450],
    t = R.images.comp7.gui.maps.icons.rewards,
    d = (e, r) => 'styleProgress' === e.name && i.includes(r),
    l = (e, r) => ('progressLevel' in e && d(e, r) ? `progressionStyleUpgraded_${e.progressLevel}` : e.overlayType),
    m = (e) => ('vehicles_rent' === e.name ? e.label : e.value),
    g = ({ reward: e, rank: r, index: n }) => {
        const { tooltipId: s, tooltipContentId: i } = e;
        return o({ tooltipId: s, ...(void 0 !== r && { rank: r }), ...(void 0 !== n && { index: n }) }, Number(i), {
            ignoreShowDelay: !0,
        });
    },
    p = (e, r) => {
        if ('tankman' === e.name) {
            const o = R.images.comp7.gui.maps.icons.crew.$dyn(r)?.$dyn(e.groupName);
            if (o) return `${o}`;
            console.info(`Folder for reward size ${r} was not found for crew with groupName: ${e.groupName}`);
        }
        if (d(e, r)) return `R.images.gui.maps.icons.quests.bonuses.${r}.camouflage`;
        if ('customizations' === e.name && a.includes(r)) {
            const o = t.$dyn(r),
                n = o?.$dyn(`style_${e.styleID}`) || o?.$dyn(e.icon);
            if (n) return `${n}`;
            console.info(`asset with styleID: ${e.styleID}, size:${r} was not found, using common icon`);
        }
        return n(e, r);
    },
    c = ({ reward: o, size: n, rank: s, index: i }) => {
        const a = ((r, o) => {
            if ('dogTagComponents' === r.name) {
                if (o === e.Big) return e.S80x80;
                if (o === e.Small) return e.S48x48;
            }
            return o;
        })(o, n);
        return {
            ...o,
            size: a,
            image: p(o, a),
            value: m(o),
            valueType: r(o.name),
            special: l(o, a),
            tooltipArgs: g({ reward: o, rank: s, index: i }),
            periodicIconTooltipArgs: {
                header: R.strings.tooltips.periodicReward.header(),
                body: R.strings.tooltips.periodicReward.comp7.body(),
            },
        };
    },
    u = ({ rewards: e, size: r, rank: o, index: n }) => s(e, (e) => c({ reward: e, size: r, rank: o, index: n }));
export { c as g, u as m };
