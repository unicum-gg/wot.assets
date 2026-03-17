import { j as a, f as e } from './vendor.js';
import { c$ as s, d0 as i, d1 as t, d2 as o, c_ as l } from './lib.js';
var r = ((a) => ((a.Static = 'static'), (a.Claimable = 'claimable'), a))(r || {});
const m = 'CustomReward_197314c4',
    c = 'CustomReward_base__disable_51f6e5f1',
    d = 'CustomReward_animWrapper_f3d190a6',
    n = 'CustomReward_glow_11133e2',
    p = 'CustomReward_glowReverse_48fff15c';
function _({
    claimState: _,
    name: u,
    icon: v,
    rewardSize: f,
    value: C,
    tooltipId: b,
    tooltipContentId: j,
    isDisable: w,
    className: g,
    overlayType: x,
}) {
    const N = _ === r.Claimable;
    return a.jsxs('div', {
        className: e(m, w && c, g),
        children: [
            N &&
                a.jsxs('div', {
                    className: d,
                    children: [a.jsx('div', { className: n }), a.jsx('div', { className: p })],
                }),
            a.jsx(s, {
                name: u,
                image: o({ name: u, icon: v }, l.Big),
                size: f,
                value: C.toString(),
                valueType: t(u),
                tooltipArgs: i({ tooltipId: b }, Number(j)),
                special: x,
            }),
        ],
    });
}
export { _ as C };
