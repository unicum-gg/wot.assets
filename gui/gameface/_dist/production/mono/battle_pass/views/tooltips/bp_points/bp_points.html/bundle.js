import { j as s, t as e, f as t } from '../../../../chunks/vendor.js';
import { i as a, N as i, u as r, b as l, e as o, b_ as n, J as d, U as c, j as h } from '../../../../chunks/lib.js';
import { V as _ } from '../../../../chunks/vehicle_list.js';
import { W as j } from '../../../../chunks/wot_plus_banner.js';
import { P as m, a as x } from '../../../../chunks/per_battle_points_table.js';
import '../../../../chunks/vehicle_info.js';
const [p, b] = a()(
        ({ observableModel: s }) => ({
            ...{
                ...s.primitives(['isWotPlusShown']),
                rewardPoints: s.array('rewardPoints'),
                vehiclesList: s.array('vehiclesList'),
            },
        }),
        i,
    ),
    v = 'Header_a103bd21',
    u = 'Header_icon_eed746ab',
    f = 'Header_labels_f416515f',
    N = 'Header_title_381c9f5b',
    P = 'Header_subtitle_632b6de',
    w = R.strings.battle_pass.tooltips.points,
    g = () =>
        s.jsxs('div', {
            className: v,
            children: [
                s.jsx('div', { className: u }),
                s.jsxs('div', {
                    className: f,
                    children: [
                        s.jsx('div', { className: N, children: w.title() }),
                        s.jsx('div', { className: P, children: w.subtitle() }),
                    ],
                }),
            ],
        }),
    C = 'Points_2d36306a',
    k = 'Points_separator_162767d5',
    W = 'Points_105728d0',
    H = 'Points_table_eac25b11',
    S = e(() => {
        const { model: e } = b(),
            t = e.rewardPoints.get(),
            a = e.isWotPlusShown.get(),
            { breakpoint: i } = r();
        return s.jsxs('div', {
            className: C,
            children: [
                s.jsx('div', { className: k }),
                s.jsx('div', {
                    className: W,
                    children: s.jsx(m, {
                        showSeparator: !1,
                        stretchBg: !0,
                        separatorRows: t.items,
                        mixClass: H,
                        children: s.jsx(x, {
                            tableColumnWidth: i.weight < l.small.weight ? 210 : 230,
                            rewardPoints: t,
                            hasAdditionalPoints: a,
                        }),
                    }),
                }),
            ],
        });
    }),
    L = 'Content_d4d03eba',
    V = 'Content_separator_774f59ff',
    y = 'Content_subtitleRules_2104a67e',
    A = 'Content_subtitleVehicles_ead57094',
    B = 'Content_pointsWrapper_21e79339',
    D = 'Content_footerSeparator_a66c0c84',
    F = 'Content_footer_92eb1524',
    J = 'Content_footer__offset_9202885e',
    M = R.strings.battle_pass.tooltips.points,
    U = e(() => {
        const { model: e } = b(),
            { items: a } = e.vehiclesList.get(),
            i = e.isWotPlusShown.get();
        return s.jsxs('div', {
            className: L,
            children: [
                s.jsx(g, {}),
                s.jsx('div', { className: y, children: M.rules() }),
                s.jsxs('div', {
                    className: B,
                    children: [s.jsx(S, {}), i && s.jsx(j, {}), s.jsx('div', { className: V })],
                }),
                a.length > 0 &&
                    s.jsxs(s.Fragment, {
                        children: [
                            s.jsx('div', { className: A, children: M.specialVehicles() }),
                            s.jsx(_, { vehiclesList: a }),
                            s.jsx('div', { className: D, children: s.jsx('div', { className: V }) }),
                        ],
                    }),
                s.jsx('div', { className: t(F, !a.length && J), children: s.jsx(o, { text: M.footer() }) }),
            ],
        });
    }),
    q = () => s.jsx(n, { children: s.jsx(n.Decorator, { children: s.jsx(U, {}) }) });
h(new d().add(c).addWithProps(p, {}).render(s.jsx(q, {})));
