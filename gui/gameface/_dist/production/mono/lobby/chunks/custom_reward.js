import { j as a, f as s } from './vendor.js';
import { cx as e, cW as i, cX as t, cY as o, cw as l } from './lib.js';
var m = ((a) => ((a.Static = 'static'), (a.Claimable = 'claimable'), a))(m || {});
const r = 'CustomReward_197314c4',
    c = 'CustomReward_base__disable_51f6e5f1',
    d = 'CustomReward_animWrapper_f3d190a6',
    n = 'CustomReward_glow_11133e2',
    u = 'CustomReward_glowReverse_48fff15c';
function _({
    claimState: _,
    name: f,
    icon: p,
    rewardSize: v,
    value: w,
    tooltipId: C,
    tooltipContentId: b,
    isDisable: j,
    className: x,
}) {
    const g = _ === m.Claimable;
    return a.jsxs('div', {
        className: s(r, j && c, x),
        children: [
            g &&
                a.jsxs('div', {
                    className: d,
                    children: [a.jsx('div', { className: n }), a.jsx('div', { className: u })],
                }),
            a.jsx(e, {
                name: f,
                image: o({ name: f, icon: p }, l.Big),
                size: v,
                value: w.toString(),
                valueType: t(f),
                tooltipArgs: i({ tooltipId: C }, Number(b)),
            }),
        ],
    });
}
export { _ as C };
