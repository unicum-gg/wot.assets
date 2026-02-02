import { y as e, j as s, z as a, r as o } from '../../../chunks/vendor.js';
import {
    a as l,
    m as r,
    d as t,
    e as i,
    h as c,
    I as d,
    R as n,
    w as b,
    n as m,
    u as x,
    aK as _,
    bz as p,
    a3 as w,
    cz as j,
    a2 as h,
    a4 as v,
} from '../../../chunks/lib.js';
import { a as g, g as u } from '../../../chunks/readResource.js';
const [N, y] = l()(
        ({ observableModel: e }) => ({ root: e.object(), lootBoxes: e.array('lootBoxes') }),
        ({ externalModel: e }) => ({ closeWindow: e.createCallbackNoArgs('onClose') }),
    ),
    f = {
        root: 'RewardRow_root_eeac5b76',
        base: 'RewardRow_3c336197',
        base__s232x174: 'RewardRow_base__s232x174_5540c105',
        box: 'RewardRow_box_2a93e9d3',
        boxIcon: 'RewardRow_boxIcon_38f4db21',
        boxLabel: 'RewardRow_boxLabel_b5c1e1f2',
        divider: 'RewardRow_divider_1aa30952',
        items: 'RewardRow_items_250e268f',
        item: 'RewardRow_item_90f1944b',
        label: 'RewardRow_label_45d1bef9',
        percent: 'RewardRow_percent_86c62b10',
    },
    I = e(({ rewards: e, iconKey: o, label: l, showRewardsNames: x }) => {
        const { model: _ } = y(),
            { assetsPointer: p } = _.root.get(),
            w = _.lootBoxes.get().length > 2 ? d.Big : d.S232x174,
            j = ((e, s) =>
                r(e, (e) => ({
                    name: e.name,
                    image: c(e, s),
                    value: e.value,
                    special: e.overlayType,
                    valueType: i(e.name),
                    tooltipArgs: t({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    label: e.label,
                    probability: e.probability,
                })))(e, w),
            h = g(p).progression.bonuses.big;
        return s.jsxs('div', {
            className: a(f.base, f[`base__${w}`]),
            children: [
                s.jsxs('div', {
                    className: f.box,
                    children: [
                        s.jsx('div', { className: f.boxIcon, style: { backgroundImage: `url(${h.$dyn(o)})` } }),
                        s.jsx('div', { className: f.boxLabel, children: l }),
                    ],
                }),
                s.jsx('div', { className: f.divider }),
                s.jsx('div', {
                    className: f.items,
                    children:
                        j.length > 0 &&
                        r(j, (e, a) =>
                            s.jsxs(
                                'div',
                                {
                                    className: f.item,
                                    children: [
                                        s.jsx(n, { ...e, size: w }),
                                        x && e.label && s.jsx(b, { classMix: f.label, text: e.label }),
                                        Boolean(e.probability) &&
                                            s.jsx('div', {
                                                className: f.percent,
                                                children: m(R.strings.common.percentValue(), { value: e.probability }),
                                            }),
                                    ],
                                },
                                a,
                            ),
                        ),
                }),
            ],
        });
    }),
    A = 'RewardList_3134028b',
    k = e(() => {
        const { model: e } = y(),
            a = e.lootBoxes.get();
        return s.jsx('div', {
            className: A,
            children: a.length > 0 && r(a, (e, s) => o.createElement(I, { ...e, key: s })),
        });
    }),
    B = 'App_41da450e',
    L = 'App_background_8bf668c',
    z = 'App_content_c51a1e8f',
    C = 'App_header_6b270f84',
    $ = 'App_title_ed37f891',
    M = 'App_description_8e9e0dbe',
    P = 'App_scroll_ce8f2661',
    T = e(() => {
        const { model: e, controls: a } = y(),
            { assetsPointer: o } = e.root.get(),
            { closeWindow: l } = a;
        x(l);
        const { dynamicTexts: r } = u('tierList', { assetsPointer: o });
        return s.jsxs('div', {
            className: B,
            children: [
                s.jsx('div', { className: L, style: { backgroundImage: `url('${g(o).library.tier_list_bg()}')` } }),
                s.jsx(_, {
                    children: s.jsxs(p, {
                        scrollClassNames: { content: z },
                        className: P,
                        children: [
                            s.jsxs('div', {
                                className: C,
                                children: [
                                    s.jsx('div', { className: $, children: r.title() }),
                                    s.jsx('div', { className: M, children: r.description() }),
                                ],
                            }),
                            s.jsx(k, {}),
                        ],
                    }),
                }),
            ],
        });
    });
w(s.jsx(N, { children: s.jsx(j, { children: s.jsx(h, { children: s.jsx(T, {}) }) }) }), { fullScreen: !0 }).then(() =>
    v(document.getElementById('root')),
);
