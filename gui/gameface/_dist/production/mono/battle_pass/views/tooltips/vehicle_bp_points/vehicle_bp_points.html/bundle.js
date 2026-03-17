import { j as e, t as s, f as t } from '../../../../chunks/vendor.js';
import { i, N as a, c5 as o, b_ as l, J as r, U as n, d as c } from '../../../../chunks/lib.js';
import { V as d } from '../../../../chunks/vehicle_info.js';
import { B as p } from '../../../../chunks/types.js';
import { P as _, a as m } from '../../../../chunks/per_battle_points_table.js';
import { W as h } from '../../../../chunks/wot_plus_banner.js';
const j = 'BlockCompleted_separator_83511b0d',
    b = 'BlockCompleted_whiteBg_a08ae6b3',
    v = 'BlockCompleted_whiteBgLine_8eb9ddee',
    x = 'BlockCompleted_whiteBgIcon_94f12276',
    N = 'BlockCompleted_description_13a24155',
    P = ({ label: s, description: t }) =>
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: j }),
                e.jsx('div', {
                    className: b,
                    children: e.jsxs('div', { className: v, children: [e.jsx('div', { className: x }), s] }),
                }),
                t &&
                    e.jsxs(e.Fragment, {
                        children: [e.jsx('div', { className: j }), e.jsx('div', { className: N, children: t })],
                    }),
            ],
        }),
    [g, C] = i()(({ observableModel: e }) => ({ root: e.object(), rewardPoints: e.array('rewardPoints') }), a),
    u = 'Footer_rewards_776b4a2d',
    w = 'Footer_description_c49306d9',
    f = 'Footer_perBattlePointsTable_bf277a7f',
    T = 'Footer_awardImage_cecbbe76',
    k = 'Footer_awardPoints_d704d9c6',
    B = R.strings.battle_pass.tooltips.vehiclePoints,
    L = [p.COMP7, p.COMP7_LIGHT],
    y = s(() => {
        const { model: s } = C(),
            { pointsReward: t, isSpecialVehicle: i, battleType: a, isWotPlusShown: o } = s.root.get(),
            l = s.rewardPoints.get();
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', { className: w, children: i ? B.special.descr() : B.$dyn(a) || B.descr() }),
                e.jsx(_, {
                    separatorRows: l.items,
                    mixClass: f,
                    children: e.jsx(m, {
                        rewardPoints: l,
                        hasAdditionalPoints: o,
                        topPlace:
                            R.strings.battle_pass.tooltips[L.includes(a) ? 'prestigePoints' : 'pointsTable'].topPlace(),
                        battleType: a,
                    }),
                }),
                o && e.jsx(h, {}),
                e.jsxs('div', {
                    className: u,
                    children: [
                        B.award(),
                        e.jsx('div', { className: T, children: e.jsx('div', { className: k, children: t }) }),
                    ],
                }),
            ],
        });
    }),
    F = 'Points_4c36b52e',
    I = 'Points_pointsSplitter_a76cd1d',
    E = 'Points_pointsCurrentLabel_e046ee39',
    G = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
    O = s(({ isCompleted: s = !1 }) => {
        const { model: t } = C(),
            { pointsCurrent: i, pointsTotal: a } = t.root.get();
        return e.jsxs('div', {
            className: F,
            children: [
                e.jsx('div', { className: s ? '' : E, children: o(i, G.INTEGRAL) }),
                e.jsx('div', { className: I, children: '/' }),
                o(a, G.INTEGRAL),
            ],
        });
    }),
    S = 'Content_9914692a',
    A = 'Content_separator_73a6536a',
    M = 'Content_base__big_983f301e',
    V = 'Content_base__small_5ddeabe7',
    W = 'Content_title_6a70595e',
    D = 'Content_titleLabel_e593300',
    z = s(() => {
        const { model: s } = C(),
            {
                vehicleLevel: i,
                vehicleName: a,
                vehicleType: o,
                pointsCurrent: l,
                pointsTotal: r,
                isSpecialVehicle: n,
                isElite: c,
            } = s.root.get(),
            p = l === r;
        return e.jsx('div', {
            className: t(S, p ? V : M),
            children: e.jsxs('div', {
                className: W,
                children: [
                    e.jsx('div', { className: D, children: R.strings.battle_pass.tooltips.vehiclePoints.title() }),
                    e.jsx(d, { isSpecial: n, vehicleLevel: i, vehicleName: a, vehicleType: o, isElite: c }),
                    e.jsx('div', { className: A }),
                    e.jsx(O, { isCompleted: p }),
                    p
                        ? e.jsx(P, {
                              label: R.strings.battle_pass.tooltips.vehiclePoints.pointsObtained(),
                              description: R.strings.battle_pass.tooltips.vehiclePoints.continuePlaying(),
                          })
                        : e.jsx(y, {}),
                ],
            }),
        });
    }),
    H = () => e.jsx(l, { children: e.jsx(l.Decorator, { children: e.jsx(z, {}) }) });
c(new r().add(n).addWithProps(g, {}).render(e.jsx(H, {})));
