import { x as e, y as a, j as r, z as s } from '../../../../chunks/vendor.js';
import {
    a as o,
    c as t,
    g as d,
    d as l,
    e as n,
    h as i,
    a5 as c,
    d3 as p,
    R as _,
    I as m,
    w as x,
    n as u,
    a6 as w,
    a3 as h,
    cY as b,
} from '../../../../chunks/lib.js';
import { a as j } from '../../../../chunks/readResource.js';
const [f, v] = o()(({ observableModel: a }) => {
        const r = { root: a.object(), rewards: a.array('rewards') },
            s = e(() => r.rewards.get().length),
            o = e(
                (e) => {
                    const a = d(r.rewards.get(), e);
                    if (!a) throw Error(`No reward found with index: ${e}`);
                    return {
                        ...a,
                        image: i(a),
                        special: a.overlayType,
                        valueType: n(a.name),
                        tooltipArgs: l({ tooltipId: a.tooltipId }, Number(a.tooltipContentId)),
                    };
                },
                { equals: t },
            );
        return { ...r, computes: { length: s, reward: o } };
    }, c),
    g = {
        base: 'LootBoxReward_f540ffff',
        item: 'LootBoxReward_item_d6bd5e44',
        item__separator: 'LootBoxReward_item__separator_c33af3ef',
        rewardWrapper: 'LootBoxReward_rewardWrapper_991c8919',
        reward__withCurrency: 'LootBoxReward_reward__withCurrency_11a0d30b',
        label: 'LootBoxReward_label_82449d16',
        percent: 'LootBoxReward_percent_7dd115ee',
        separator: 'LootBoxReward_separator_6fa555ac',
    },
    N = a(({ index: e }) => {
        const { model: a } = v(),
            o = a.computes.length(),
            t = a.computes.reward(e),
            { probability: d, label: l, valueType: n } = t,
            i = o > 5 ? e > 1 : e > 0,
            c = n === p.CURRENCY;
        return r.jsxs('div', {
            className: g.base,
            children: [
                i && r.jsx('div', { className: g.separator }),
                r.jsxs('div', {
                    className: s(g.item, i && g.item__separator),
                    children: [
                        r.jsx('div', {
                            className: g.rewardWrapper,
                            children: r.jsx(_, {
                                ...t,
                                className: s(g.reward, c && g.reward__withCurrency),
                                size: m.Small,
                            }),
                        }),
                        r.jsx('div', { className: g.label, children: l }),
                        Boolean(d) &&
                            r.jsx('div', {
                                className: g.percent,
                                children: r.jsx(x, {
                                    text: R.strings.fun_random.lootboxTooltip.chance(),
                                    binding: { percent: u(R.strings.common.percentValue(), { value: d }) },
                                }),
                            }),
                    ],
                }),
            ],
        });
    }),
    y = 'App_4a184ace',
    B = 'App_base__double_e27f4c21',
    A = 'App_header_7b99070f',
    L = 'App_icon_1f44f417',
    C = 'App_title_711c3638',
    I = 'App_description_975d9f61',
    T = 'App_content_a6dab835',
    k = a(() => {
        const { model: e } = v(),
            { iconKey: a, label: o, assetsPointer: t } = e.root.get(),
            d = e.computes.length(),
            l = d > 5,
            n = j(t).progression.bonuses.small;
        return r.jsxs('div', {
            className: s(y, l && B),
            children: [
                r.jsxs('div', {
                    className: A,
                    children: [
                        r.jsx('div', { className: L, style: { backgroundImage: `url(${n.$dyn(a)})` } }),
                        r.jsx('div', { className: C, children: o }),
                        r.jsx('div', { className: I, children: R.strings.fun_random.lootboxTooltip.description() }),
                    ],
                }),
                r.jsx('div', { className: T, children: d > 0 && w(d, (e) => r.jsx(N, { index: e }, e)) }),
            ],
        });
    });
h(r.jsx(f, { children: r.jsx(b, { children: r.jsx(k, {}) }) }));
