import { r as s, j as e, f as t, t as a } from '../../../../chunks/vendor.js';
import { i, e as n, c4 as r, b_ as d, J as c, U as o, j as l } from '../../../../chunks/lib.js';
const [x, m] = i()(
        ({ observableModel: s }) => ({ root: s.object() }),
        () => ({}),
    ),
    j = 'List_e841c5d7',
    _ = 'List_item_fd6c0009',
    h = 'List_circle_93623194',
    v = ({ children: a, className: i }) => {
        const n = s.Children.toArray(a);
        return e.jsx('div', {
            className: t(j, i),
            children: n.map((s, t) =>
                e.jsxs('div', { className: _, children: [e.jsx('div', { className: h }), s] }, t),
            ),
        });
    },
    b = 'Content_faa5acc0',
    p = 'Content_image_e25fcf8a',
    N = 'Content_title_36b16647',
    u = 'Content_subTitle_e6924907',
    w = 'Content_divider_c4025bde',
    M = 'Content_rewardBase_967dd44a',
    g = 'Content_reward_19ccaf6b',
    C = 'Content_expireTime_ac535d7',
    f = R.strings.battle_pass.tooltips.RandomQuestTooltip,
    T = a(() => {
        const { model: s } = m(),
            { vehicleName: t, expireTime: a, condition: i } = s.root.get(),
            d = new Date(1e3 * a);
        return e.jsxs('div', {
            className: b,
            children: [
                e.jsx('div', { className: p }),
                e.jsx(n, { text: f.title(), binding: { vehicleName: t }, classMix: N }),
                i && e.jsx(n, { text: f.condition(), binding: { condition: i }, classMix: u }),
                e.jsx('div', { className: u, children: f.rewardsTitle() }),
                e.jsx('div', { className: w }),
                e.jsxs(v, {
                    className: M,
                    children: [
                        e.jsx(r, { text: f.rewards.consumables(), classMix: g }),
                        e.jsx(r, { text: f.rewards.directives(), classMix: g }),
                        e.jsx(r, { text: f.rewards.personal_reserves(), classMix: g }),
                        e.jsx(r, { text: f.rewards.premium(), classMix: g }),
                        e.jsx(r, { text: f.rewards.money(), classMix: g }),
                        e.jsx(r, { text: f.rewards.standardEquipment(), classMix: g }),
                    ],
                }),
                e.jsx('div', { className: w }),
                e.jsx(r, {
                    text: f.expireTime(),
                    binding: { day: d.getDate(), month: R.strings.menu.dateTime.months.$num(d.getMonth() + 1) },
                    classMix: C,
                }),
            ],
        });
    }),
    y = () => e.jsx(d, { children: e.jsx(d.Decorator, { children: e.jsx(T, {}) }) });
l(new c().add(o).addWithProps(x, {}).render(e.jsx(y, {})));
