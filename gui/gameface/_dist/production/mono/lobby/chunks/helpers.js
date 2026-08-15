import { _ as o, ap as e, ao as t, Z as n, r as i, aq as s, ah as a, L as r, W as d, ar as l } from './lib.js';
import { x as p, G as c, y as u } from './vendor.js';
const m = 'vehicles',
    g = 'jm_lock_token';
var h = ((o) => (
    (o.Start = 'start'),
    (o.Small = 'small'),
    (o.Medium = 'medium'),
    (o.Large = 'large'),
    (o.Locked = 'locked'),
    o
))(h || {});
const f = {
        idle: 'idle',
        initial: 'initial',
        mapDragging: 'mapDragging',
        nodeSelected: 'nodeSelected',
        scrollingToSelectedNode: 'scrollingToSelectedNode',
        nodePopoverOpened: 'nodePopoverOpened',
        receivingAnimation: 'receivingAnimation',
    },
    T = c(
        p({
            id: 'mapViewStateMachine',
            initial: f.idle,
            context: { selectedNodeId: null, scrollToNodeRequired: !1 },
            states: {
                [f.idle]: {
                    on: {
                        MAP_DRAG_START: f.mapDragging,
                        NODE_SELECT: {
                            target: f.nodeSelected,
                            actions: u({
                                selectedNodeId: (o, e) => e.nodeId,
                                scrollToNodeRequired: (o, e) => e.scrollToNodeRequired,
                            }),
                        },
                        RECEIVE_ANIMATION: f.receivingAnimation,
                    },
                },
                [f.mapDragging]: { on: { MAP_DRAG_STOP: f.idle } },
                [f.receivingAnimation]: { on: { RECEIVE_ANIMATION_END: f.idle } },
                [f.nodeSelected]: {
                    initial: f.initial,
                    states: {
                        [f.initial]: {
                            always: [
                                { target: f.scrollingToSelectedNode, cond: (o) => o.scrollToNodeRequired },
                                { target: f.nodePopoverOpened },
                            ],
                        },
                        [f.scrollingToSelectedNode]: {
                            on: { SCROLL_TO_NODE_FINISHED: { target: f.nodePopoverOpened } },
                        },
                        [f.nodePopoverOpened]: {
                            on: {
                                NODE_UNSELECT: {
                                    cond: (o, e) => e.nodeId === o.selectedNodeId,
                                    target: `#mapViewStateMachine.${f.idle}`,
                                    actions: u((o) => ({ ...o, selectedNodeId: null })),
                                },
                                NODE_SELECT: {
                                    cond: (o, e) => e.nodeId !== o.selectedNodeId,
                                    target: `#mapViewStateMachine.${f.nodeSelected}`,
                                    actions: u({
                                        selectedNodeId: (o, e) => e.nodeId,
                                        scrollToNodeRequired: (o, e) => e.scrollToNodeRequired,
                                    }),
                                },
                            },
                        },
                    },
                },
            },
        }),
    ),
    S = { enough: 'enough', notEnough: 'notEnough' },
    v = 'explored',
    E = 'unexplored',
    N = 'locked',
    x = 'top',
    y = 'right',
    O = 'bottom',
    I = 'left',
    _ = 999999,
    P = (o) => {
        switch (!0) {
            case o.isExplored:
                return v;
            case o.nodeType === h.Locked:
                return N;
            default:
                return E;
        }
    },
    M = (o, e, t) => {
        const n = o.indexOf(e),
            i = o.indexOf(t);
        return -1 !== n && -1 !== i;
    },
    w = (o, e) => {
        if (e.posX > o.posX) return y;
        if (e.posX < o.posX) return I;
        if (e.posY > o.posY) return O;
        if (e.posY < o.posY) return x;
        throw new Error(`Two nodes with ids ${o.id} and ${e.id} are on the same position`);
    },
    b = new Set([I, y]);
function A(o, e) {
    let t = -1;
    for (let n = 0; n < o.length && !1 !== e(o[n], n, o); n++) t = n;
    return t;
}
function X(a, r = o.Small) {
    return {
        ...a,
        size: r,
        image: n(a, r),
        valueType: t(a.name),
        special:
            'overlayType' in a &&
            a.overlayType &&
            ((d = a.overlayType),
            ('string' == typeof d && Object.values(s).includes(d)) ||
                (console.warn(`Invalid overlayType value: ${d}`), 0))
                ? a.overlayType
                : void 0,
        tooltipArgs: e(
            { tooltipId: a.tooltipId },
            i
                .resolve('views')
                .read((o) => o.common.tooltip_window.backport_tooltip_content.BackportTooltipContent('resId')),
        ),
    };
    var d;
}
function Y(o, e, t) {
    const n = o.getWrapperSizes();
    n &&
        o.applyScroll(
            { x: a(e.posX) - n.width / 2, y: a(e.posY) - n.height / 2 },
            {
                onResolve: () => {
                    (T.send('SCROLL_TO_NODE_FINISHED'), t?.());
                },
                duration: 1e3,
                easing: r.easeOutQuad,
            },
        );
}
const D = { top: 0, right: 0, bottom: 0, left: 0 };
function R(o, e, t = D) {
    const n = o.getWrapperSizes();
    if (!n) return !1;
    const i = o.animationScroll.scrollPositionX.get(),
        s = o.animationScroll.scrollPositionY.get(),
        a = d(i) + t.left,
        r = d(s) + t.top,
        l = d(i + n.width) - t.right,
        p = d(s + n.height) - t.bottom;
    return e.posX < a || e.posY < r || l < e.posX || p < e.posY;
}
function L() {
    let o, e;
    return {
        promise: new Promise((t, n) => {
            ((o = t), (e = n));
        }),
        resolve: o,
        reject: e,
    };
}
const k = 'left',
    C = 'right',
    q = 'top',
    j = 'bottom',
    V = 18,
    $ = (o) => o.name === g,
    z = (o) => o.name.includes(l.PremiumPlus),
    F = (o) => o.name === l.Crystal,
    G = (o) => o.name === l.TmanToken,
    W = (o) => o.name === l.Customizations,
    B = (o) => o.name === l.BattlaPassFinalAchievement,
    H = (o) => 'rarity' in o,
    Q = (o) => 'vehicleLvl' in o && 'vehicleType' in o && 'vehicleShortName' in o;
function U(o, e, t) {
    return Math.max(o, Math.min(t, e));
}
function Z(o, e, t) {
    const n = { [k]: [], [C]: [], [q]: [], [j]: [] };
    return (
        o.forEach((o) => {
            (function (o, e) {
                return o.posX < e.left || o.posX > e.right || o.posY < e.top || o.posY > e.bottom;
            })(o, e) &&
                n[
                    (function (o, e) {
                        const t = e.left - o.posX,
                            n = o.posX - e.right,
                            i = e.top - o.posY,
                            s = o.posY - e.bottom,
                            a = Math.max(t, n),
                            r = Math.max(i, s);
                        return a <= 0 && r <= 0 ? j : a >= r ? (t > n ? k : C) : i > s ? q : j;
                    })(o, t)
                ].push(o);
        }),
        n
    );
}
function J(o, e) {
    return o.position !== e.position ? o.position - e.position : o.node.id < e.node.id ? -1 : 1;
}
function K({ hints: o, positionSum: e }) {
    return e / o.length;
}
function oo(o, e) {
    return { hints: [...o.hints, ...e.hints], positionSum: o.positionSum + e.positionSum };
}
function eo(o, e, t) {
    const n = K(o);
    return o.hints.map((o, i) => ({ ...o, position: n + (t + i) * e }));
}
function to(o, e) {
    return o
        .reduce(
            (o, t, n) =>
                (function (o, e) {
                    const t = [...o];
                    let n = e,
                        i = t[t.length - 1];
                    for (; i && K(i) > K(n);) ((n = oo(i, n)), t.pop(), (i = t[t.length - 1]));
                    return [...t, n];
                })(o, { hints: [t], positionSum: t.position - n * e }),
            [],
        )
        .reduce((o, t) => [...o, ...eo(t, e, o.length)], []);
}
function no(o, e, t, n) {
    return Math.atan2(o.posY - (t + n), o.posX - (e + n)) * (180 / Math.PI);
}
function io(o, e, t, n, i) {
    const s = {
            left: t.left + V,
            top: t.top + V,
            right: Math.max(t.left + V, t.right - n - V),
            bottom: Math.max(t.top + V, t.bottom - n - V),
        },
        a = Z(o, e, s),
        r = a.left.length ? s.left + i : s.left,
        d = Math.max(r, a.right.length ? s.right - i : s.right),
        l = [];
    return (
        [
            {
                edge: k,
                min: s.top,
                max: s.bottom,
                nodePositionOnEdge: (o) => o.posY,
                pointTo: (o) => ({ x: s.left, y: o }),
            },
            {
                edge: C,
                min: s.top,
                max: s.bottom,
                nodePositionOnEdge: (o) => o.posY,
                pointTo: (o) => ({ x: s.right, y: o }),
            },
            { edge: q, min: r, max: d, nodePositionOnEdge: (o) => o.posX, pointTo: (o) => ({ x: o, y: s.top }) },
            { edge: j, min: r, max: d, nodePositionOnEdge: (o) => o.posX, pointTo: (o) => ({ x: o, y: s.bottom }) },
        ].forEach(({ edge: o, min: e, max: t, nodePositionOnEdge: s, pointTo: r }) => {
            (function (o, e, t, n) {
                const i = to(
                        o.map((o) => ({ ...o, position: U(t, n, o.position) })),
                        e,
                    ),
                    s = i[0]?.position,
                    a = i[i.length - 1]?.position;
                if (void 0 === s || void 0 === a) return i;
                if (a - s > n - t) {
                    const o = i.length > 1 ? (n - t) / (i.length - 1) : 0;
                    return i.map((e, n) => ({ ...e, position: t + n * o }));
                }
                const r = (function (o, e, t, n) {
                    return o < t ? t - o : e > n ? n - e : 0;
                })(s, a, t, n);
                return i.map((o) => ({ ...o, position: o.position + r }));
            })(a[o].map((o) => ({ node: o, position: s(o) })).sort(J), i, e, t).forEach(({ node: o, position: e }) => {
                const { x: t, y: i } = r(e);
                l.push({ id: o.id, rotation: no(o, t, i, n / 2), x: t, y: i });
            });
        }),
        l
    );
}
export {
    _ as M,
    h as N,
    g as T,
    m as V,
    M as a,
    $ as b,
    H as c,
    io as d,
    T as e,
    A as f,
    w as g,
    S as h,
    Q as i,
    L as j,
    z as k,
    X as l,
    R as m,
    f as n,
    P as o,
    b as p,
    F as q,
    G as r,
    Y as s,
    W as t,
    B as u,
};
