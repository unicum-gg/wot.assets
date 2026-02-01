import { j as a, f as s } from './vendor.js';
import { cV as e, cW as i, cX as t, cY as o, cv as l } from './lib.js';
var m = ((a) => ((a.Static = 'static'), (a.Claimable = 'claimable'), a))(m || {});
const r = 'CustomReward_197314c4',
    c = 'CustomReward_base__disable_51f6e5f1',
    d = 'CustomReward_animWrapper_f3d190a6',
    n = 'CustomReward_glow_11133e2',
    u = 'CustomReward_glowReverse_48fff15c';
function v({
    claimState: v,
    name: _,
    icon: f,
    rewardSize: p,
    value: C,
    tooltipId: b,
    tooltipContentId: j,
    isDisable: w,
    className: g,
}) {
    const x = v === m.Claimable;
    return a.jsxs('div', {
        className: s(r, w && c, g),
        children: [
            x &&
                a.jsxs('div', {
                    className: d,
                    children: [a.jsx('div', { className: n }), a.jsx('div', { className: u })],
                }),
            a.jsx(e, {
                name: _,
                image: o({ name: _, icon: f }, l.Big),
                size: p,
                value: C.toString(),
                valueType: t(_),
                tooltipArgs: i({ tooltipId: b }, Number(j)),
            }),
        ],
    });
}
export { v as C };
