import { j as e, R as s } from '../../../../chunks/vendor.js';
import {
    $ as a,
    d2 as r,
    d3 as c,
    d4 as i,
    d5 as o,
    d6 as t,
    r as l,
    d1 as n,
    F as d,
    b as p,
} from '../../../../chunks/lib.js';
import { D as _ } from '../../../../chunks/divider.js';
var x = ((e) => ((e.Firesupport = 'firesupport'), (e.Reconnaissance = 'reconnaissance'), (e.Tactics = 'tactics'), e))(
    x || {},
);
const m = {
    base: 'CategoryIcon_ab8abcc7',
    categoryIcon: 'CategoryIcon_categoryIcon_1f02424f',
    arrow: 'CategoryIcon_arrow_a1c14258',
};
function h({ category: s, showArrow: a }) {
    return e.jsxs('div', {
        className: m.base,
        children: [
            e.jsx('div', {
                className: m.categoryIcon,
                style: {
                    backgroundImage: `url(${R.images.frontline.gui.maps.icons.loadout.categories.c_24x24.$dyn(s)})`,
                },
            }),
            a && e.jsx('div', { className: m.arrow }),
        ],
    });
}
const j = {
        base: 'Item_39579287',
        vehicleIconWrapper: 'Item_vehicleIconWrapper_9cbf60dd',
        vehicleIcon: 'Item_vehicleIcon_95c02596',
        categories: 'Item_categories_4b12882e',
    },
    v = {
        [t]: 'light_tank_x48x48',
        [o]: 'medium_tank_x48x48',
        [i]: 'heavy_tank_x48x48',
        [c]: 'spg_x48x48',
        [r]: 'tank_destroyer_x48x48',
    };
function g({ vehicleType: r, categories: c }) {
    return e.jsxs('div', {
        className: j.base,
        children: [
            e.jsx('div', {
                className: j.vehicleIconWrapper,
                children: e.jsx(a, { className: j.vehicleIcon, path: `ui_kit.vehicle_type.x48x48.${v[r]}` }),
            }),
            e.jsx('div', {
                className: j.categories,
                children: c.map((a, r) =>
                    e.jsx(s.Fragment, { children: e.jsx(h, { category: a, showArrow: r < c.length - 1 }) }, a),
                ),
            }),
        ],
    });
}
const u = 'SkillOrderTooltip_f3653ea',
    b = 'SkillOrderTooltip_header_9ae5d7b9',
    k = 'SkillOrderTooltip_title_d1916d0b',
    y = 'SkillOrderTooltip_body_852ba1c',
    T = 'SkillOrderTooltip_container_49c73b81',
    f = 'SkillOrderTooltip_items_b8016673',
    I = 'SkillOrderTooltip_infoText_52a8e30b',
    N = l.resolve('strings'),
    O = [
        [t, [x.Reconnaissance, x.Tactics, x.Firesupport]],
        [o, [x.Tactics, x.Firesupport, x.Reconnaissance]],
        [i, [x.Firesupport, x.Tactics, x.Reconnaissance]],
        [c, [x.Firesupport, x.Reconnaissance, x.Tactics]],
        [r, [x.Reconnaissance, x.Firesupport, x.Tactics]],
    ];
function F() {
    return e.jsx(n, {
        children: e.jsx(n.Decorator, {
            children: e.jsxs('div', {
                className: u,
                children: [
                    e.jsxs('div', {
                        className: b,
                        children: [
                            e.jsx('div', {
                                className: k,
                                children: N.readOrEmpty('fl_tooltips.skillOrderTooltip.header'),
                            }),
                            e.jsx('div', {
                                className: y,
                                children: N.readOrEmpty('fl_tooltips.skillOrderTooltip.body'),
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: T,
                        children: [
                            e.jsx(_, {}),
                            e.jsx('div', {
                                className: f,
                                children: O.map(([s, a]) => e.jsx(g, { vehicleType: s, categories: a }, s)),
                            }),
                            e.jsx(_, {}),
                        ],
                    }),
                    e.jsx(d, { path: 'fl_tooltips.skillOrderTooltip.info', className: I, split: !0 }),
                ],
            }),
        }),
    });
}
p(e.jsx(F, {}));
