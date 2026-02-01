import { o as e, l as i, m as r, e as o, r as a, R as n, j as t, n as s, p as l } from '../../../chunks/vendor.js';
import {
    i as c,
    c as d,
    a as h,
    r as _,
    u as m,
    b as u,
    d as g,
    e as b,
    g as p,
    t as v,
    B as f,
    s as N,
    m as x,
    F as y,
    f as T,
    h as w,
    j,
    k as S,
    l as P,
    M,
    U as V,
} from '../../../chunks/lib.js';
var R = ((e) => (
        (e.China = 'china'),
        (e.Czechoslovakia = 'czech'),
        (e.France = 'france'),
        (e.Germany = 'germany'),
        (e.Italy = 'italy'),
        (e.Japan = 'japan'),
        (e.Poland = 'poland'),
        (e.Sweden = 'sweden'),
        (e.UK = 'uk'),
        (e.Usa = 'usa'),
        (e.Ussr = 'ussr'),
        e
    ))(R || {}),
    C = ((e) => (
        (e.LightTank = 'lightTank'),
        (e.ATSPG = 'AT-SPG'),
        (e.MediumTank = 'mediumTank'),
        (e.SPG = 'SPG'),
        (e.HeavyTank = 'heavyTank'),
        e
    ))(C || {}),
    I = ((e) => (
        (e.Unresearched = 'Unresearched'),
        (e.ReadyForResearch = 'ReadyForResearch'),
        (e.Researched = 'Researched'),
        (e.ReadyForPurchase = 'ReadyForPurchase'),
        (e.Owned = 'Owned'),
        (e.ReadyForTradeIn = 'ReadyForTradeIn'),
        (e.ReadyForRecovery = 'ReadyForRecovery'),
        (e.Rented = 'Rented'),
        (e.RentedRecoverable = 'RentedRecoverable'),
        e
    ))(I || {}),
    D = ((e) => ((e.Credits = 'credits'), (e.Gold = 'gold'), e))(D || {});
const k = (e) => {
    return 'object' == typeof e && null !== e && 'type' in e && ((i = e.type), Object.values(C).includes(i));
    var i;
};
var B = ((e) => ((e.None = 'None'), (e.Unresearched = 'Unresearched'), (e.Researched = 'Researched'), e))(B || {});
const A = ['Researched', 'Unresearched', 'None'];
function O({ state: e = 'Unresearched' }) {
    return 'Unresearched' !== e;
}
const E = {
        isResearched: !1,
        readyForResearch: !1,
        hasEnoughXp: !1,
        requiredXp: 0,
        isDiscountedXp: !1,
        earnedXp: 0,
        isElite: !1,
        isInInventory: !1,
        hasEnoughCurrency: !1,
        highlightedForPurchase: !1,
        priceAmount: 0,
        orderPriority: 0,
        isDiscountedPrice: !1,
        readyForRecovery: !1,
        isRented: !1,
        readyForTradeIn: !1,
        readyForComparison: !1,
    },
    L = ({ id: e = '-1', level: i = 1, priceCurrency: r, ...o }, a) => {
        const n = {
            id: isNaN(a) ? Number(e) : a,
            name: '',
            techName: '',
            type: C.LightTank,
            tier: i,
            isPremium: !1,
            isHighlighted: !1,
            state: I.Unresearched,
            childIds: [],
            parentIds: [],
            childBranchOrders: [],
            priceCurrency: r,
            ...E,
            ...o,
            nation: o.nation,
        };
        return (
            (n.state = (({
                isInInventory: e = !1,
                readyForResearch: i = !1,
                isResearched: r = !1,
                readyForRecovery: o = !1,
                readyForTradeIn: a = !1,
                highlightedForPurchase: n = !1,
                isRented: t = !1,
            }) =>
                t
                    ? o
                        ? I.RentedRecoverable
                        : I.Rented
                    : e
                      ? I.Owned
                      : n
                        ? I.ReadyForPurchase
                        : i
                          ? I.ReadyForResearch
                          : a
                            ? I.ReadyForTradeIn
                            : o
                              ? I.ReadyForRecovery
                              : r
                                ? I.Researched
                                : I.Unresearched)(n)),
            n
        );
    };
function H(e) {
    return JSON.parse(e);
}
const [z, F] = c()(
        ({ observableModel: o, cleanup: a }) => {
            const n = {
                    ...o.primitives(['firstHighlightedLevel', 'collectableVehiclesAvailable', 'showWelcomeAnimation']),
                    selectedNation: e.box(R.Czechoslovakia),
                    techTreeNodes: e.box({}),
                    premiumNodesByTier: e.box({}),
                    maxCombinedTier: e.box(0),
                },
                t = o.arrayClone('availableNations'),
                s = d.shallow(() => t.get());
            return (
                a(
                    i(() => {
                        const e = o.dict('techTreeNodes'),
                            i = o.dict('nodeOverrides');
                        let a = 0;
                        const t = {},
                            s = {};
                        (e.entries().forEach(([e, r]) => {
                            const o = H(r.get()),
                                n = null == i ? void 0 : i.get(e),
                                l = n ? H(n) : {},
                                c = L(Object.assign(o, l), Number(e));
                            ((a = Math.max(a, c.tier)),
                                c.isPremium ? ((s[c.tier] = s[c.tier] || []), s[c.tier].push(c)) : (t[e] = c));
                        }),
                            Object.values(s).forEach((e) => e.sort((e, i) => e.orderPriority - i.orderPriority)),
                            r(() => {
                                (n.selectedNation.set(o.primitives(['selectedNation']).selectedNation.get()),
                                    n.techTreeNodes.set(t),
                                    n.premiumNodesByTier.set(s),
                                    n.maxCombinedTier.set(a));
                            }));
                    }),
                ),
                { ...n, computes: { getAvailableNations: s } }
            );
        },
        ({ externalModel: e, model: i }) => ({
            onAddToCompare: e.createCallback((e) => ({ vehCD: e }), 'onAddToCompare'),
            onOpenAboutVehicle: e.createCallback((e, i) => ({ vehCD: e, route: i }), 'onOpenAboutVehicle'),
            onOpenCollectableVehicles: e.createCallback((e) => ({ nation: e }), 'onOpenCollectableVehicles'),
            onOpenPremiumShop: e.createCallback(
                (e) => ({ nation: i.selectedNation.get(), level: e }),
                'onOpenPremiumShop',
            ),
        }),
    ),
    W = {
        increaseAmount: h('tabs'),
        decreaseAmount: h('tabs'),
        'vehicle-hover': h('highlight'),
        'vehicle-click': h('yes1'),
        'nation-hover': h('highlightx'),
        'nation-click': h('tabs'),
        'scroll-hover': h('highlight'),
        'scroll-click': h('play'),
        'tier-paging-hover': h('highlight'),
        'tier-paging-click': h('arrow'),
        'vehicle-right-click': h('tabb'),
        'collector-vehicles-hover': h('highlight'),
        'collector-vehicles-click': h('play'),
        'premium-vehicles-mouse-over': h('researches_premium_panel_slide_in'),
        'premium-vehicles-mouse-out': h('researches_premium_panel_slide_out'),
        'vehicle-highlighted-tier-appear': h('gui_tech_tree_top_tier_anim'),
    },
    X = (e, i, r, o) => {
        const a = e.nodeMap[i.parentIds[0]],
            n = e.nodeMap[r.parentIds[0]],
            t = !!a && a.tier === i.tier,
            s = !!n && n.tier === r.tier;
        return (Number(t) - Number(s)) * (o ? 1 : -1);
    };
function U(e, i) {
    return (r, o) => (r[i] < o[i] ? ('desc' === e ? 1 : -1) : r[i] > o[i] ? ('desc' === e ? -1 : 1) : 0);
}
const $ = { asc: U('asc', 'tier'), desc: U('desc', 'tier') },
    G = !0;
function Y(e, i, r) {
    const o = 'asc' === i ? G : !G;
    (e.nodes.sort((r, a) => $[i](r, a) + X(e, r, a, o) / 10),
        e.nodes.forEach((e, i, o) => {
            r(e, i, o);
        }));
}
function K(e) {
    const i = new Set();
    return (
        e.rootNodes.forEach((r) => {
            ((r.isMainLine = !0), i.add(r.position[1]));
            q(r, e).forEach((e) => {
                e.isMainLine = !0;
            });
        }),
        Array.from(i)
    );
}
function q(e, i) {
    const r = e.directChildId && i.nodeMap[e.directChildId];
    return r ? [r, ...q(r, i)] : [];
}
function J(e, i) {
    const r = A.indexOf(e),
        o = A.indexOf(i);
    return A[Math.min(r, o)];
}
function Q(e, i) {
    if (!e) {
        if (!i) throw (console.error('Cannot combine zero nodes'), new Error('Cannot combine zero nodes'));
        return i;
    }
    if (!i) return e;
    const r = [e, i].filter(k);
    if (r.length > 1)
        throw (
            console.error('Cannot combine two or more vehicleNodes', e, i),
            new Error('Cannot combine two or more vehicleNodes')
        );
    var o, a;
    return {
        ...e,
        ...i,
        ...(r[0] || {}),
        lineSegments:
            ((o = e.lineSegments),
            (a = i.lineSegments),
            { up: J(o.up, a.up), right: J(o.right, a.right), down: J(o.down, a.down), left: J(o.left, a.left) }),
    };
}
function Z(e, i) {
    return e ? (i ? B.Researched : B.Unresearched) : B.None;
}
function ee(e, i) {
    return e.reduce((e, r) => {
        const o = i.nodeMap[r];
        return e + 1 + (o.subTreeNodesAbove ?? 0) + (o.subTreeNodesBelow ?? 0);
    }, 0);
}
function ie(e, i, r, o, a) {
    const n = r[1] - i[1],
        t = r[0] - i[0];
    if (0 === n && 0 === t) return void console.warn('Skipping line between', i, 'and', r);
    const s = Math.abs(n) + 1,
        l = Math.abs(t) + 1,
        c = Math.min(i[1], r[1]),
        d = Math.max(i[1], r[1]),
        h = Math.min(i[0], r[0]),
        _ = 0 === n,
        m = _ ? l : s;
    if (_ || 0 === t) {
        for (let i = 0; i < m; i++) {
            const r = _ ? [h + i, d] : [h, c + i],
                a = i !== m - 1,
                n = Z(0 !== i, o),
                t = Z(a, o),
                s = {
                    type: 'line',
                    lineSegments: _
                        ? { left: n, right: t, up: B.None, down: B.None }
                        : { left: B.None, right: B.None, up: n, down: t },
                    position: r,
                },
                l = r.join('x'),
                u = e.gridPositionMap[l],
                g = u ? Q(s, u) : s;
            (e.gridItems.push(g), (e.gridPositionMap[l] = g));
        }
        return;
    }
    const u = a ? [r[0], i[1]] : [i[0], r[1]];
    (ie(e, [i[0], i[1]], u, o, a), ie(e, u, [r[0], r[1]], o, a));
}
function re(e) {
    let i = 0;
    function r(r, o) {
        const a = k(r) ? r.subTreeNodesBelow : 0;
        ((i = Math.max(i, o[1] + a)), (r.position = o));
        const n = r.position[0] + 'x' + r.position[1];
        ((e.gridPositionMap[n] = r), e.gridItems.push(r));
        const t = r.parentIds[0],
            s = [],
            l = t ? e.nodeMap[t] : void 0;
        (l && s.push(l),
            (r.secondaryParentIds ?? []).forEach((i) => {
                const r = e.nodeMap[i];
                r && s.push(r);
            }),
            s.forEach((i) => {
                var o;
                if (!i.position || !r.position)
                    return void console.error('parent.position or nodeOrLine.position is undefined', i, r);
                const a = O(i),
                    n = O(r),
                    t = a && n,
                    s = Boolean(null == (o = i.secondaryChildIds) ? void 0 : o.includes(r.id));
                ie(e, [i.position[0], i.position[1]], [r.position[0], r.position[1]], t, s);
            }));
    }
    Y(e, 'asc', (o) => {
        if (0 === o.parentIds.length) {
            const a = o.childIds.reduce(
                (i, r) => {
                    const o = e.nodeMap[r];
                    return (
                        (i.subTreeNodesAbove = i.subTreeNodesAbove + 1 + o.subTreeNodesAbove),
                        (i.subTreeNodesBelow = i.subTreeNodesBelow + 1 + o.subTreeNodesBelow),
                        i
                    );
                },
                { subTreeNodesAbove: 0, subTreeNodesBelow: 0 },
            );
            return (
                (o.subTreeNodesBelow = a.subTreeNodesBelow),
                (o.subTreeNodesAbove = a.subTreeNodesAbove),
                void r(o, [o.tier - 1, i + o.subTreeNodesAbove])
            );
        }
        const a = e.nodeMap[o.parentIds[0]],
            n = o.tier - a.tier;
        if (a.directChildId !== o.id)
            if (a.childIdsAbove.includes(o.id)) {
                const i = a.childIdsAbove.indexOf(o.id),
                    t = a.childIdsAbove.slice(0, i).reduce((i, r) => {
                        const o = e.nodeMap[r];
                        return i + 1 + o.subTreeNodesBelow + o.subTreeNodesAbove;
                    }, 0),
                    s = e.nodeMap[a.directChildId],
                    l = 1 + t + o.subTreeNodesBelow + s.subTreeNodesAbove;
                r(o, [a.position[0] + n, a.position[1] - l]);
            } else if (a.childIdsBelow.includes(o.id)) {
                const i = a.childIdsBelow.indexOf(o.id),
                    t = a.childIdsBelow.slice(0, i).reduce((i, r) => {
                        const o = e.nodeMap[r];
                        return i + 1 + o.subTreeNodesBelow + o.subTreeNodesAbove;
                    }, 0),
                    s = e.nodeMap[a.directChildId],
                    l = 1 + t + o.subTreeNodesAbove + s.subTreeNodesBelow;
                r(o, [a.position[0] + n, a.position[1] + l]);
            } else;
        else r(o, [a.position[0] + n, a.position[1]]);
    });
}
function oe(e) {
    const i = e.nodes.find((e) => 11777 === e.id);
    if (!i) return;
    const r = Math.max(
            ...Object.values(e.gridPositionMap).map((e) => {
                var i;
                return (null == (i = e.position) ? void 0 : i[0]) ?? -1 / 0;
            }),
        ),
        [o, a] = i.position,
        n = r - (o + 2),
        t = Array.from({ length: n }, (e, i) => [o + 3 + i, a - 2]),
        s = o + 3,
        l = [...t, ...Array.from({ length: s }, (e, i) => [o + 2 - i, a - 1])];
    if (
        !l.every((i) => {
            return (
                !e.gridPositionMap[i.join('x')] ||
                ((r = e.gridPositionMap[i.join('x')]),
                (null == (o = r.lineSegments) ? void 0 : o.up) !== B.None &&
                    (null == (a = r.lineSegments) ? void 0 : a.down) !== B.None &&
                    (null == (n = r.lineSegments) ? void 0 : n.left) === B.None &&
                    (null == (t = r.lineSegments) ? void 0 : t.right) === B.None)
            );
            var r, o, a, n, t;
        })
    )
        return void console.error(
            'Configuration does not match the KV-2 exception. Please update the exception or remove handleKv2Exception.',
        );
    const c = Math.max(
        ...Object.values(e.gridPositionMap).map((e) => {
            var i;
            return (null == (i = e.position) ? void 0 : i[1]) ?? -1 / 0;
        }),
    );
    l.forEach((i) => {
        const [r, o] = i,
            a = c - o;
        for (let n = 0; n < a; n++) {
            const i = [r, o + 1 + n].join('x'),
                a = e.gridPositionMap[i],
                t = [r, o + n].join('x');
            if (a) {
                const i = k(a) ? a.id : void 0;
                (i && (e.nodeMap[i].position = [r, o + n]), (a.position = [r, o + n]), (e.gridPositionMap[t] = a));
            }
        }
    });
}
function ae(e) {
    const i = { nodes: [], gridItems: [], rootNodes: [], leafNodes: [], nodeMap: {}, gridPositionMap: {} };
    ((i.nodes = Object.values(e).map(({ childIds: e = [], parentIds: r = [], childBranchOrders: o = [], ...a }) => {
        const n = {
            secondaryChildIds: [],
            secondaryParentIds: [],
            branchingOrder: 0,
            position: [0, 0],
            isMainLine: !1,
            directChildId: void 0,
            childIdsAbove: [],
            childIdsBelow: [],
            subTreeNodesAbove: 0,
            subTreeNodesBelow: 0,
            lineSegments: { up: B.None, right: B.None, down: B.None, left: B.None },
            childIds: [...e],
            parentIds: [...r],
            childBranchOrders: [...o],
            ...a,
        };
        return ((i.nodeMap[a.id] = n), n);
    })),
        i.nodes.forEach((e) => {
            e.childIds.forEach((r) => {
                const o = e.childIds.indexOf(r),
                    a = i.nodeMap[r];
                if (!a)
                    return (
                        console.error(`Child with id ${r} not found in node with id ${e.id}, removing relationship.`),
                        void (e.childIds = e.childIds.filter((e) => e !== r))
                    );
                (a.parentIds.push(e.id), (a.branchingOrder = i.nodeMap[e.id].childBranchOrders[o] ?? 0));
            });
        }),
        (function (e) {
            e.nodes.forEach((i) => {
                if (i.parentIds.length > 1) {
                    const r = i.parentIds.slice(1);
                    ((i.secondaryParentIds = r),
                        r.forEach((r) => {
                            const o = e.nodeMap[r];
                            ((o.childIds = o.childIds.filter((e) => e !== i.id)), o.secondaryChildIds.push(i.id));
                        }),
                        (i.parentIds = [i.parentIds[0]]));
                }
                return i;
            });
        })(i),
        (function (e) {
            e.nodes.forEach((i) => {
                (0 === i.parentIds.length && e.rootNodes.push(i), 0 === i.childIds.length && e.leafNodes.push(i));
            });
        })(i),
        (function (e) {
            Y(e, 'desc', (i) => {
                const r = [...i.childIds].sort((i, r) => e.nodeMap[i].branchingOrder - e.nodeMap[r].branchingOrder);
                let o,
                    a = 1 / 0,
                    n = -1;
                for (let c = 0; c < r.length; c++) {
                    const i = r[c],
                        t = e.nodeMap[i];
                    Math.abs(t.branchingOrder) < Math.abs(a) && ((a = t.branchingOrder), (n = c), (o = r[c]));
                }
                ((i.directChildId = o),
                    (i.childIdsAbove = r.slice(0, n).reverse()),
                    (i.childIdsBelow = r.slice(n + 1)));
                const t = i.directChildId ? e.nodeMap[i.directChildId] : null,
                    s = (null == t ? void 0 : t.subTreeNodesAbove) ?? 0,
                    l = (null == t ? void 0 : t.subTreeNodesBelow) ?? 0;
                ((i.subTreeNodesAbove = s + ee(i.childIdsAbove, e)),
                    (i.subTreeNodesBelow = l + ee(i.childIdsBelow, e)));
            });
        })(i),
        re(i),
        oe(i),
        (function (e) {
            let i = 1 / 0,
                r = 1 / 0;
            (Object.values(e.gridPositionMap).forEach((e) => {
                ((i = Math.min(i, e.position[1])), (r = Math.min(r, e.position[0])));
            }),
                (0 === r && 0 === i) ||
                    Object.values(e.gridPositionMap).forEach((e) => {
                        ((e.position[0] -= r), (e.position[1] -= i));
                    }));
        })(i));
    const { rows: r, maxColumnIndex: o } = (function (e) {
        const i = Math.max(
                ...Object.values(e.gridPositionMap).map((e) => {
                    var i;
                    return (null == (i = e.position) ? void 0 : i[0]) ?? -1 / 0;
                }),
            ),
            r = Math.max(
                ...Object.values(e.gridPositionMap).map((e) => {
                    var i;
                    return (null == (i = e.position) ? void 0 : i[1]) ?? -1 / 0;
                }),
            ),
            o = Array.from({ length: r + 1 }, () => Array.from({ length: i + 1 }, () => null)),
            a = Object.values(e.gridPositionMap).reduce((e, i) => {
                const r = i.position[1],
                    o = i.position[0];
                return ((e[r][o] = i), e);
            }, o);
        return { maxColumnIndex: i, rows: a };
    })(i);
    return { maxColumnIndex: o, mainLineRowIndexes: K(i), rows: r };
}
const ne = 'ScrollArea_container_3fed0135',
    te = 'ScrollArea_overflow_ddc994b6',
    se = 'ScrollArea_content_cb204ae5',
    le = 'ScrollArea_content__dragging_7fce95db',
    ce = 'ScrollArea_draggable_3a0e372e',
    de = 'ScrollArea_draggable__dragging_a4e4410f';
var he = ((e) => (
    (e[(e.SetOptions = 0)] = 'SetOptions'),
    (e[(e.SetSizes = 1)] = 'SetSizes'),
    (e[(e.SetIsMouseDown = 2)] = 'SetIsMouseDown'),
    (e[(e.SetIsDragging = 3)] = 'SetIsDragging'),
    (e[(e.SetThumbDragging = 4)] = 'SetThumbDragging'),
    (e[(e.MoveScrollPosition = 5)] = 'MoveScrollPosition'),
    e
))(he || {});
const _e = (e) => {
        const i = ((e) => {
                const { containerWidth: i, contentWidth: r, initialScrollRight: o, isHorizontalBarVisible: a } = e;
                return a ? (o ? r - i : Math.max(0, Math.min(r - i, e.horizontalScrollPosition))) : 0;
            })(e),
            r = ((e) => {
                const { containerHeight: i, contentHeight: r, initialVerticalCenter: o, isVerticalBarVisible: a } = e;
                return a ? (o ? Math.floor((r - i) / 2) : Math.max(0, Math.min(r - i, e.verticalScrollPosition))) : 0;
            })(e);
        return i !== e.horizontalScrollPosition || r !== e.verticalScrollPosition
            ? { ...e, horizontalScrollPosition: i, verticalScrollPosition: r }
            : e;
    },
    me = (e) => {
        const {
                isMouseDown: i,
                isDragging: r,
                thumbDragging: a,
                isHorizontalBarVisible: n,
                isVerticalBarVisible: t,
            } = e,
            s = i && r,
            l = s || null !== a,
            c = o((n || t) && ce, l && de);
        return { ...e, isDragging: s, isAnyDragging: l, draggableClassName: c };
    };
function ue(e, i) {
    if (0 === i.type) return _e({ ...e, ...i.payload });
    if (1 === i.type) {
        const { containerWidth: r, containerHeight: o, contentWidth: a, contentHeight: n } = i.payload,
            t = a > r,
            s = n > o;
        return _e(me({ ...e, ...i.payload, isHorizontalBarVisible: t, isVerticalBarVisible: s }));
    }
    if (2 === i.type) {
        const r = i.payload,
            o = { ...e, isMouseDown: r };
        return (r || ((o.isDragging = !1), (o.thumbDragging = null)), o);
    }
    if (3 === i.type) return me({ ...e, isDragging: i.payload });
    if (4 === i.type) return me({ ...e, thumbDragging: i.payload });
    if (5 === i.type) {
        const { offsetX: r, offsetY: o, byPassMaxDragOffsetDelta: a } = i.payload,
            { maxDragOffsetDelta: n } = e;
        if (!a && (Math.abs(r) > n || Math.abs(o) > n)) return e;
        const t = Math.max(0, Math.min(e.contentWidth - e.containerWidth, e.horizontalScrollPosition + r)),
            s = Math.max(0, Math.min(e.contentHeight - e.containerHeight, e.verticalScrollPosition + o));
        return { ...e, horizontalScrollPosition: t, verticalScrollPosition: s };
    }
    return e;
}
const ge = () => ({
        maxDragOffsetDelta: 200,
        containerWidth: 0,
        containerHeight: 0,
        contentWidth: 0,
        contentHeight: 0,
        isMouseDown: !1,
        isDragging: !1,
        thumbDragging: null,
        isHorizontalBarVisible: !1,
        isVerticalBarVisible: !1,
        horizontalScrollPosition: 0,
        verticalScrollPosition: 0,
        isAnyDragging: !1,
        initialScrollRight: !1,
        initialVerticalCenter: !1,
        draggableClassName: void 0,
    }),
    be = a.createContext(void 0),
    pe = () => {
        const e = a.useContext(be);
        if (!e) throw new Error('useScrollAreaContext must be used within a ScrollAreaProvider');
        return e;
    },
    ve = ({ children: e, maxDragOffsetDelta: i = 200, initialScrollRight: r = !1, initialVerticalCenter: o = !1 }) => {
        const [s, l] = n.useReducer(ue, void 0, ge);
        a.useEffect(() => {
            l({
                type: he.SetOptions,
                payload: { maxDragOffsetDelta: i, initialScrollRight: r, initialVerticalCenter: o },
            });
        }, [i, r, o]);
        const c = {
            setSizes: a.useCallback((e) => {
                l({ type: he.SetSizes, payload: e });
            }, []),
            setIsMouseDown: a.useCallback((e) => {
                l({ type: he.SetIsMouseDown, payload: e });
            }, []),
            setIsDragging: a.useCallback((e) => {
                l({ type: he.SetIsDragging, payload: e });
            }, []),
            setIsVerticalThumbDragging: a.useCallback((e) => {
                l({ type: he.SetThumbDragging, payload: e ? 'vertical' : null });
            }, []),
            setIsHorizontalThumbDragging: a.useCallback((e) => {
                l({ type: he.SetThumbDragging, payload: e ? 'horizontal' : null });
            }, []),
            moveScrollPosition: a.useCallback((e = 0, i = 0, r = !1) => {
                l({ type: he.MoveScrollPosition, payload: { offsetX: e, offsetY: i, byPassMaxDragOffsetDelta: r } });
            }, []),
        };
        return t.jsx(be.Provider, { value: { ...s, ...c }, children: e });
    },
    fe = 'Nations_db5e6f50',
    Ne = 'Nations_nation_c0adf454',
    xe = 'Nations_nation__selected_e9b0b5e7',
    ye = 'Nations_nation_flag_6c91fa37',
    Te = 'Nations_nation_glow_3d65e334',
    we = _.resolve('strings'),
    je = _.resolve('images'),
    Se = ({ nation: e, onSelect: i, isSelected: r }) => {
        const o = m().play,
            a = u({ body: we.readOrEmpty(`tech_tree.nationTooltip.${e}`) });
        return t.jsxs('div', {
            className: s(Ne, r && xe),
            'data-test-id': 'nation-' + e,
            ...a,
            onMouseEnter: (e) => {
                (a.onMouseEnter(e), o('nation-hover', { target: Se.name, original: e }));
            },
            onClick: (r) => {
                (o('nation-click', { target: Se.name, original: r }), i(e), a.onClick());
            },
            children: [
                t.jsx('img', { className: ye, src: je.readOrEmpty(`tech_tree.nations.${e}`) }),
                t.jsx('div', { className: Te }),
            ],
        });
    };
function Pe(e) {
    const { className: i, onSelectNation: r, availableNations: o, selectedNation: a, children: n, ...l } = e;
    return t.jsxs('div', {
        className: s(fe, i),
        ...l,
        children: [o.map((e) => t.jsx(Se, { nation: e, isSelected: e === a, onSelect: r }, e)), n],
    });
}
const Me = {
        base: 'TreeLine_bf1e6ad1',
        segment: 'TreeLine_segment_6341a113',
        segment__researched: 'TreeLine_segment__researched_d1b0e541',
        segment__vertical: 'TreeLine_segment__vertical_d1bdfe3d',
        segment__horizontal: 'TreeLine_segment__horizontal_bd9aed74',
        segment__up: 'TreeLine_segment__up_b5816a42',
        segment__right: 'TreeLine_segment__right_f6210ed1',
        segment__down: 'TreeLine_segment__down_9bba7845',
        segment__left: 'TreeLine_segment__left_9a382ef4',
        segment__bend: 'TreeLine_segment__bend_e1266f0',
        segment__bendUp: 'TreeLine_segment__bendUp_739475b4',
        segment__bendLeft: 'TreeLine_segment__bendLeft_ba58a683',
        segment__bendRight: 'TreeLine_segment__bendRight_7be3a40e',
        segment__bendDown: 'TreeLine_segment__bendDown_225b1f70',
    },
    Ve = { up: Me.segment__up, right: Me.segment__right, down: Me.segment__down, left: Me.segment__left },
    Re = {
        up: Me.segment__bendUp,
        right: Me.segment__bendRight,
        down: Me.segment__bendDown,
        left: Me.segment__bendLeft,
    },
    Ce = { [B.Unresearched]: void 0, [B.Researched]: Me.segment__researched },
    Ie = (e, i, r, o) => o.includes(e) && o.includes(i) && r[e] === r[i],
    De = (e) => {
        let i = Object.keys(e).filter((i) => e[i] !== B.None);
        const r = [];
        if (
            (((e, i) => i.includes('left') && i.includes('right') && e.left === e.right)(e, i) &&
                ((i = i.filter((e) => 'left' !== e && 'right' !== e)),
                r.push(
                    t.jsx('div', { className: o(Me.segment, Me.segment__horizontal, Ce[e.left]) }, 'bend-horizontal'),
                )),
            ((e, i) => i.includes('up') && i.includes('down') && e.up === e.down)(e, i) &&
                ((i = i.filter((e) => 'up' !== e && 'down' !== e)),
                r.push(t.jsx('div', { className: o(Me.segment, Me.segment__vertical, Ce[e.up]) }, 'bend-vertical'))),
            ((e, i) =>
                2 === i.length &&
                !!(
                    Ie('up', 'right', e, i) ||
                    Ie('up', 'left', e, i) ||
                    Ie('down', 'right', e, i) ||
                    Ie('down', 'left', e, i)
                ))(e, i))
        )
            return (
                r.push(
                    t.jsx(
                        'div',
                        { className: o(Me.segment, Me.segment__bend, Ce[e[i[0]]], ...i.map((e) => Re[e])) },
                        'bend-' + i.join('-'),
                    ),
                ),
                (i = []),
                r
            );
        for (const a of i) r.push(t.jsx('div', { className: o(Me.segment, Ve[a], Ce[e[a]]) }, a));
        return r;
    },
    ke = ({ lineSegments: e, isMainLine: i = !1, className: r, ...a }) => {
        if (!e) return null;
        const n = De(e);
        return t.jsx('div', { className: o(Me.base, r, i && Me.base__mainLine), ...a, children: n });
    },
    Be = { base: 'Discount_744a9b2a', base__xp: 'Discount_base__xp_621a6178' };
function Ae({ type: e, className: i }) {
    return t.jsx('div', { className: o(Be.base, i, 'xp' === e && Be.base__xp) });
}
const Oe = {
        base: 'Price_3f023563',
        amountWrapper: 'Price_amountWrapper_b6b117e2',
        base__amountHidden: 'Price_base__amountHidden_29f8d762',
        vehicle: 'Price_vehicle_29f8d762',
        base__credits: 'Price_base__credits_29f8d762',
        base__hasEnough: 'Price_base__hasEnough_29f8d762',
        base__gold: 'Price_base__gold_29f8d762',
        base__xp: 'Price_base__xp_29f8d762',
        base__combatXp: 'Price_base__combatXp_29f8d762',
        amount: 'Price_amount_24f18a58',
        discount: 'Price_discount_5f22dc90',
        icon: 'Price_icon_83ab23b8',
    },
    Ee = { [D.Credits]: Oe.base__credits, [D.Gold]: Oe.base__gold, xp: Oe.base__xp, combatXp: Oe.base__combatXp },
    Le = _.resolve('intl');
function He({
    type: e,
    amount: i,
    isDiscountedXp: r = !1,
    isDiscountedPrice: a = !1,
    isAmountHidden: n,
    hasEnough: s,
    className: l,
}) {
    const c = ((e, i, r) => ('xp' === r && e ? 'xp' : i ? 'price' : void 0))(r, a, e);
    return t.jsxs('div', {
        className: o(
            Oe.base,
            l,
            Ee[e],
            (r || a) && Oe.base__discounted,
            n && Oe.base__amountHidden,
            s && Oe.base__hasEnough,
        ),
        children: [
            t.jsxs('div', {
                className: Oe.amountWrapper,
                children: [
                    t.jsx('div', { className: Oe.amount, children: Le.formatNumber('integral', i) }),
                    t.jsx('div', { className: Oe.icon }),
                ],
            }),
            c && t.jsx(Ae, { type: c, className: Oe.discount }),
        ],
    });
}
const ze = 'TopTierReleaseHighlight_6eda7632',
    Fe = 'TopTierReleaseHighlight_fire_ad0fa0b',
    We = 'TopTierReleaseHighlight_fire_mask_fa609d6',
    Xe = 'TopTierReleaseHighlight_fire__1_abb5023d',
    Ue = 'TopTierReleaseHighlight_fire__2_107c868c',
    $e = 'TopTierReleaseHighlight_particles_e8af8c7b',
    Ge = 'TopTierReleaseHighlight_particles_mask_3d3d8c03',
    Ye = 'TopTierReleaseHighlight_particles__1_9f7d6b1a',
    Ke = 'TopTierReleaseHighlight_particles__2_7f499670',
    qe = a.memo(function ({ className: e, animationDelay: i }) {
        return t.jsxs('div', {
            className: o(ze, e),
            style: { '--animationDelay': i },
            children: [
                t.jsxs('div', {
                    className: We,
                    children: [t.jsx('div', { className: o(Fe, Xe) }), t.jsx('div', { className: o(Fe, Ue) })],
                }),
                t.jsxs('div', {
                    className: Ge,
                    children: [t.jsx('div', { className: o($e, Ye) }), t.jsx('div', { className: o($e, Ke) })],
                }),
            ],
        });
    }),
    Je = 'TopTierSoftHighlight_4fc28aec',
    Qe = a.memo(function ({ className: e, animationDelay: i }) {
        return t.jsx('div', { className: o(Je, e), style: { '--animationDelay': i } });
    }),
    Ze = {
        base: 'VehicleNode_3dce40e1',
        container: 'VehicleNode_container_eae43526',
        base__mainLine: 'VehicleNode_base__mainLine_88e59920',
        hover: 'VehicleNode_hover_83b9caaa',
        base__premium: 'VehicleNode_base__premium_88e59920',
        image: 'VehicleNode_image_90d33006',
        base__unaffordable: 'VehicleNode_base__unaffordable_88e59920',
        base__unresearched: 'VehicleNode_base__unresearched_88e59920',
        base__topTier: 'VehicleNode_base__topTier_88e59920',
        base__welcomeAnimation: 'VehicleNode_base__welcomeAnimation_88e59920',
        content: 'VehicleNode_content_9fc925e8',
        combatXp: 'VehicleNode_combatXp_7d8cb4e2',
        base__elite: 'VehicleNode_base__elite_88e59920',
        rightBlockBelowLine: 'VehicleNode_rightBlockBelowLine_2a459374',
        name: 'VehicleNode_name_e071e788',
        name_wrapper: 'VehicleNode_name_wrapper_79689375',
        price: 'VehicleNode_price_d57175c5',
        ownedIcon: 'VehicleNode_ownedIcon_2fd09d02',
        rentedIcon: 'VehicleNode_rentedIcon_b1b3e333',
        recover: 'VehicleNode_recover_9ce976da',
        tier: 'VehicleNode_tier_b2eed51d',
        base__heavyTank: 'VehicleNode_base__heavyTank_88e59920',
        base__mediumTank: 'VehicleNode_base__mediumTank_88e59920',
        base__lightTank: 'VehicleNode_base__lightTank_88e59920',
        base__atSpg: 'VehicleNode_base__atSpg_88e59920',
        base__spg: 'VehicleNode_base__spg_88e59920',
        toggleComparison: 'VehicleNode_toggleComparison_9e04de0',
        toggleComparison__disabled: 'VehicleNode_toggleComparison__disabled_49f825c3',
        comparisonIcon: 'VehicleNode_comparisonIcon_c086ad25',
        line: 'VehicleNode_line_a14569bf',
        tradeInIcon: 'VehicleNode_tradeInIcon_ac1ebfea',
        topTierReleaseHighlight: 'VehicleNode_topTierReleaseHighlight_4843ca8c',
        topTierSoftHighlight: 'VehicleNode_topTierSoftHighlight_62c01848',
    },
    ei = _.resolve('strings'),
    ii = _.resolve('images'),
    ri = {
        [I.Unresearched]: Ze.base__unresearched,
        [I.ReadyForResearch]: Ze.base__readyForResearch,
        [I.Researched]: Ze.base__researched,
        [I.ReadyForPurchase]: Ze.base__readyForPurchase,
        [I.Owned]: Ze.base__owned,
        [I.ReadyForTradeIn]: Ze.base__readyForTradeIn,
        [I.ReadyForRecovery]: Ze.base__readyForRecovery,
        [I.RentedRecoverable]: o(Ze.base__readyForRecovery, Ze.base__rented),
        [I.Rented]: Ze.base__rented,
    },
    oi = {
        [C.ATSPG]: Ze.base__atSpg,
        [C.HeavyTank]: Ze.base__heavyTank,
        [C.LightTank]: Ze.base__lightTank,
        [C.MediumTank]: Ze.base__mediumTank,
        [C.SPG]: Ze.base__spg,
    },
    ai = [I.Unresearched, I.ReadyForResearch, I.ReadyForPurchase],
    ni = a.memo(function e(i) {
        const {
                name: r,
                techName: n,
                id: s,
                state: l = I.Unresearched,
                hasEnoughXp: c,
                isDiscountedXp: d,
                requiredXp: h,
                hasEnoughCurrency: _,
                isDiscountedPrice: N,
                priceCurrency: x,
                priceAmount: y,
                earnedXp: T,
                isPremium: w,
                isElite: j,
                isSelected: S,
                isTopTier: P,
                isHighlighted: M,
                readyForComparison: V,
                onAddToCompare: R,
                isMainLine: C = !1,
                style: D,
                className: k,
                tier: B,
                type: A,
                showWelcomeAnimation: O,
                animationDelay: E,
            } = i,
            { controls: L } = F(),
            H = m().play,
            z = g({ args: a.useMemo(() => ({ vehCD: s, tooltipId: 'techtreeVehicle' }), [s]) }),
            W = u({ body: ei.readOrEmpty('tech_tree.comparisonTooltip') }),
            X = g({ args: a.useMemo(() => ({ vehCD: s, tooltipId: 'tradeIn' }), [s]) }),
            U = !w && (l === I.Unresearched || l === I.ReadyForResearch),
            $ = !w && l === I.Unresearched,
            G = l === I.Researched || l === I.ReadyForPurchase || l === I.ReadyForTradeIn || l === I.Rented,
            Y = !w && l === I.Researched,
            K = T > 0 && !j,
            q = (l === I.ReadyForResearch && !c) || (l === I.ReadyForPurchase && !_),
            J = b(
                'researchVehicle',
                a.useMemo(() => ({ vehCD: s }), [s]),
                a.useMemo(() => ({ disabled: !1 }), []),
            ),
            Q = (i) => {
                (H('vehicle-click', { target: e.name, original: i }), L.onOpenAboutVehicle(s, ''));
            },
            Z = (i) => {
                i &&
                    'button' in i &&
                    2 === i.button &&
                    (H('vehicle-right-click', { target: e.name, original: i }), J.onMouseDown(i));
            },
            ee = p(n),
            ie = 'vehicle.x120x96',
            re = `${ie}.${ee}`,
            oe = ii.readOr(re, () => ii.readOrEmpty(`${ie}.tank_empty`)),
            ae = P && O,
            ne = P && !O && ai.includes(l);
        return t.jsxs('div', {
            className: o(
                Ze.base,
                Oe.vehicle,
                oi[A],
                j && Ze.base__elite,
                w && Ze.base__premium,
                S && Ze.base__selected,
                O && Ze.base__welcomeAnimation,
                M && Ze.base__highlighted,
                P && Ze.base__topTier,
                C && Ze.base__mainLine,
                q && Ze.base__unaffordable,
                ri[l],
                k,
            ),
            style: { ...D, '--animationDelay': E },
            'data-test-state': l,
            children: [
                t.jsxs('div', {
                    className: Ze.container,
                    style: { animationDelay: E },
                    onMouseEnter: (i) => {
                        H('vehicle-hover', { target: e.name, original: i });
                    },
                    children: [
                        t.jsx('div', { className: Ze.hover }),
                        t.jsx('div', {
                            className: Ze.image,
                            ...J,
                            'data-test-id': s + '-image',
                            onClick: Q,
                            onMouseDown: Z,
                            style: { backgroundImage: `url('${oe}')` },
                        }),
                        t.jsxs('div', {
                            className: Ze.content,
                            ...z,
                            ...J,
                            'data-test-id': s + '-content',
                            onClick: (e) => {
                                (Q(e), z.onClick());
                            },
                            onMouseDown: Z,
                            children: [
                                K && t.jsx(He, { amount: T, className: Ze.combatXp, type: 'combatXp' }),
                                t.jsxs('div', {
                                    className: Ze.rightBlockBelowLine,
                                    children: [
                                        t.jsxs('div', {
                                            className: Ze.name,
                                            children: [
                                                t.jsx('div', { className: Ze.name_wrapper, children: r }),
                                                l === I.ReadyForTradeIn &&
                                                    t.jsx('div', { ...X, className: Ze.tradeInIcon }),
                                                (l === I.Rented || l === I.RentedRecoverable) &&
                                                    t.jsx('div', { className: Ze.rentedIcon }),
                                                l === I.Owned && t.jsx('div', { className: Ze.ownedIcon }),
                                            ],
                                        }),
                                        U &&
                                            t.jsx(He, {
                                                type: 'xp',
                                                amount: h,
                                                className: Ze.price,
                                                isDiscountedXp: d,
                                                isDiscountedPrice: N,
                                                isAmountHidden: $,
                                                hasEnough: c,
                                            }),
                                        G &&
                                            t.jsx(He, {
                                                type: x,
                                                amount: y,
                                                className: Ze.price,
                                                isDiscountedXp: d,
                                                isDiscountedPrice: N,
                                                isAmountHidden: Y,
                                                hasEnough: _,
                                            }),
                                        (l === I.ReadyForRecovery || l === I.RentedRecoverable) &&
                                            t.jsx('div', {
                                                className: Ze.recover,
                                                children: ei.readOrEmpty('tech_tree.vehicle.recover'),
                                            }),
                                    ],
                                }),
                                t.jsx('div', { className: Ze.tier, children: v(B) }),
                            ],
                        }),
                        t.jsx(f, {
                            size: 'small',
                            theme: 'custom',
                            'data-test-id': s + '-add-to-comparison',
                            disabled: !V,
                            className: o(Ze.toggleComparison, !V && Ze.toggleComparison__disabled),
                            ...W,
                            onClick: () => {
                                V && (R(i.id), W.onClick());
                            },
                            children: t.jsx('div', { className: Ze.comparisonIcon }),
                        }),
                        ae && t.jsx(qe, { className: Ze.topTierReleaseHighlight, animationDelay: E }),
                        ne && t.jsx(Qe, { className: Ze.topTierSoftHighlight, animationDelay: E }),
                    ],
                }),
                t.jsx(ke, {
                    className: Ze.line,
                    lineSegments: i.lineSegments,
                    isMainLine: C,
                    style: { animationDelay: E },
                }),
            ],
        });
    }),
    ti = 'ScrollBar_87455c97',
    si = 'ScrollBar_base__hidden_47c6bd22',
    li = 'ScrollBar_base__vertical_ccc162d5',
    ci = 'ScrollBar_base__horizontal_2d8f67c3',
    di = 'ScrollBar_arrow_182cfca2',
    hi = 'ScrollBar_arrow__end_80774b27',
    _i = 'ScrollBar_arrow__start_2c4e1a03',
    mi = 'ScrollBar_track_b216f0bd',
    ui = 'ScrollBar_rail_bcfdaef9',
    gi = 'ScrollBar_rail__start_e300a356',
    bi = 'ScrollBar_rail__end_6b3e6c68',
    pi = 'ScrollBar_rail_target_2110f62',
    vi = 'ScrollBar_thumb_89853eb4',
    fi = 'ScrollBar_thumb_background_f48a5061',
    Ni = 'ScrollBar_thumb_icon_a83ea3f3',
    xi = 'ScrollBar_thumb_innerBorder_106d8a38',
    yi = 'ScrollBar_thumb_border_183c86c5';
function Ti({ className: e, orientation: i = 'vertical', arrowClickStep: r = 50, ...n }) {
    const {
            containerWidth: s,
            containerHeight: l,
            contentWidth: c,
            contentHeight: d,
            horizontalScrollPosition: h,
            verticalScrollPosition: _,
            thumbDragging: u,
            setIsHorizontalThumbDragging: g,
            setIsVerticalThumbDragging: b,
            moveScrollPosition: p,
        } = pe(),
        v = m().play,
        f = () => v('scroll-hover', { target: Ti.name }),
        N = () => v('scroll-click', { target: Ti.name }),
        x = 'vertical' === i,
        y = x ? b : g,
        T = u === i,
        w = a.useRef({ x: 0, y: 0 }),
        j = x ? (l / d) * 100 : (s / c) * 100,
        S = x ? (_ / (d - l)) * (100 - j) : (h / (c - s)) * (100 - j),
        P = x ? d > l : c > s,
        M = `${Math.floor(Math.max(j, 5))}%`,
        V = `${Math.ceil(Math.max(S, 0))}%`,
        R = !0;
    return (
        a.useEffect(() => {
            const e = (e) => {
                    const i = e.screenX - w.current.x,
                        r = e.screenY - w.current.y;
                    ((w.current = { x: w.current.x + i, y: w.current.y + r }), p(x ? 0 : i, x ? r : 0));
                },
                i = () => {
                    y(!1);
                };
            return (
                T && (window.addEventListener('mousemove', e), window.addEventListener('mouseup', i)),
                () => {
                    (window.removeEventListener('mousemove', e), window.removeEventListener('mouseup', i));
                }
            );
        }, [T, p, y, x]),
        l && s && d && c
            ? t.jsxs('div', {
                  ...n,
                  className: o(ti, e, x ? li : ci, !P && si),
                  style: { '--thumbSize': M, '--thumbPosition': V },
                  children: [
                      t.jsx('div', {
                          className: o(di, _i),
                          onMouseEnter: f,
                          onClick: (e) => {
                              (N(), e.preventDefault(), e.stopPropagation(), p(x ? 0 : -r, x ? -r : 0, R));
                          },
                      }),
                      t.jsxs('div', {
                          className: mi,
                          children: [
                              t.jsx('div', {
                                  className: o(ui, gi),
                                  children: t.jsx('div', {
                                      className: pi,
                                      onMouseEnter: f,
                                      onClick: (e) => {
                                          (N(), e.preventDefault(), e.stopPropagation(), p(x ? 0 : -r, x ? -r : 0, R));
                                      },
                                  }),
                              }),
                              t.jsxs('div', {
                                  className: vi,
                                  onMouseDown: (e) => {
                                      (e.preventDefault(),
                                          e.stopPropagation(),
                                          N(),
                                          y(!0),
                                          (w.current = { x: e.screenX, y: e.screenY }));
                                  },
                                  onMouseEnter: f,
                                  children: [
                                      t.jsx('div', { className: fi }),
                                      t.jsx('div', { className: yi }),
                                      t.jsx('div', { className: xi }),
                                      t.jsx('div', { className: Ni }),
                                  ],
                              }),
                              t.jsx('div', {
                                  className: o(ui, bi),
                                  children: t.jsx('div', {
                                      className: pi,
                                      onMouseEnter: f,
                                      onClick: (e) => {
                                          (N(), e.preventDefault(), e.stopPropagation(), p(x ? 0 : r, x ? r : 0, R));
                                      },
                                  }),
                              }),
                          ],
                      }),
                      t.jsx('div', {
                          className: o(di, hi),
                          onMouseEnter: f,
                          onClick: (e) => {
                              (N(), e.preventDefault(), e.stopPropagation(), p(x ? 0 : r, x ? r : 0, R));
                          },
                      }),
                  ],
              })
            : null
    );
}
const wi = ({
        children: e,
        scrollBarOffsetTop: i = 0,
        scrollBarOffsetLeft: r = 0,
        scrollBarOffsetRight: n = 0,
        scrollBarOffsetBottom: s = 0,
        HorizontalScrollBar: l = Ti,
        VerticalScrollBar: c = Ti,
        mouseWheelOrientation: d,
        classNames: h,
        dragLimit: _ = 5,
        ...m
    }) => {
        const u = a.useRef(null),
            g = a.useRef(null),
            {
                isMouseDown: b,
                isDragging: p,
                thumbDragging: v,
                horizontalScrollPosition: f,
                verticalScrollPosition: x,
                containerHeight: y,
                containerWidth: T,
                draggableClassName: w,
                isHorizontalBarVisible: j,
                isVerticalBarVisible: S,
                setSizes: P,
                setIsMouseDown: M,
                moveScrollPosition: V,
                setIsDragging: R,
            } = pe(),
            C = null !== v,
            I = a.useRef({ x: 0, y: 0 });
        a.useEffect(() => {
            const e = u.current,
                i = g.current;
            if (!e || !i) return;
            const r = new ResizeObserver(() => {
                P({
                    containerHeight: e.offsetHeight,
                    containerWidth: e.offsetWidth,
                    contentHeight: i.offsetHeight,
                    contentWidth: i.offsetWidth,
                });
            });
            return (
                r.observe(e),
                r.observe(i),
                () => {
                    (r.unobserve(e), r.unobserve(i));
                }
            );
        }, [P]);
        (a.useEffect(() => {
            const e = (e) => {
                    const i = e.screenX - I.current.x,
                        r = e.screenY - I.current.y,
                        o = Math.abs(i) < 5 && Math.abs(r) < 5,
                        a = 0 === e.button,
                        n = 1 === e.button;
                    if (!(a || n)) return (R(!1), void M(!1));
                    b && !o && (R(!0), (I.current = { x: I.current.x + i, y: I.current.y + r }), V(-i, -r));
                },
                i = () => {
                    (R(!1), M(!1));
                };
            return (
                b && (window.addEventListener('mousemove', e), window.addEventListener('mouseup', i)),
                () => {
                    (window.removeEventListener('mousemove', e), window.removeEventListener('mouseup', i));
                }
            );
        }, [b, R, M, V]),
            a.useEffect(() => {
                const e = () => {
                    M(!1);
                };
                return (
                    document.body.addEventListener('mouseleave', e),
                    () => {
                        document.body.removeEventListener('mouseleave', e);
                    }
                );
            }, [M]),
            a.useEffect(() => {
                (N.tooltip.hide(0, 0), N.contextMenu.hide(0, 0));
            }, [x, f]));
        return t.jsxs('div', {
            ...m,
            ref: u,
            className: o(ne, w, m.className),
            onMouseDown: (e) => {
                const i = 0 === e.button,
                    r = 1 === e.button;
                (i || r) && !C && (j || S) && (M(!0), (I.current = { x: e.screenX, y: e.screenY }));
            },
            onWheel: (e) => {
                'horizontal' === d && j ? V(10 * -e.deltaX, 0, !0) : 'vertical' === d && S && V(0, 10 * -e.deltaY, !0);
            },
            style: {
                ...m.style,
                '--ScrollArea-offsetX': `${f}px`,
                '--ScrollArea-offsetY': `${x}px`,
                '--ScrollArea-containerHeight': `${y}px`,
                '--ScrollArea-containerWidth': `${T}px`,
                '--ScrollArea-scrollBarOffsetTop': `${i}rem`,
                '--ScrollArea-scrollBarOffsetLeft': `${r}rem`,
                '--ScrollArea-scrollBarOffsetRight': `${n}rem`,
                '--ScrollArea-scrollBarOffsetBottom': `${s}rem`,
            },
            children: [
                t.jsx('div', {
                    className: te,
                    children: t.jsx('div', {
                        ref: g,
                        className: o(se, (p || C) && le, null == h ? void 0 : h.content),
                        style: { top: -x, left: -f },
                        children: e,
                    }),
                }),
                t.jsx(c, { orientation: 'vertical' }),
                t.jsx(l, { orientation: 'horizontal' }),
            ],
        });
    },
    ji = 'PremiumVehicles_b00872',
    Si = 'PremiumVehicles_base__empty_3543548f',
    Pi = 'PremiumVehicles_base__enabled_1d7ebd1',
    Mi = 'PremiumVehicles_base__keepOpen_4f37b78e',
    Vi = 'PremiumVehicles_base__locallyDragging_1d7ebd1',
    Ri = 'PremiumVehicles_header_34347d67',
    Ci = 'PremiumVehicles_header_title_a0941b8f',
    Ii = 'PremiumVehicles_header_glow_c912503',
    Di = 'PremiumVehicles_columnsMask_999f5c65',
    ki = 'PremiumVehicles_columns_7fbaae3d',
    Bi = 'PremiumVehicles_column_1f7baf80',
    Ai = 'PremiumVehicles_column_texture_1631537a',
    Oi = 'PremiumVehicles_column_more_83e52a45',
    Ei = 'PremiumVehicles_column_more_buttonContent_6f68a138',
    Li = 'PremiumVehicles_column_more_amount_693e3431',
    Hi = 'PremiumVehicles_vehicle_9465d6ef',
    zi = 'PremiumVehicles_backgroundShadow_6a11087a',
    Fi = 'PremiumVehicles_shadow_21360769',
    Wi = _.resolve('strings'),
    Xi = _.resolve('intl'),
    Ui = l(function e({ isContentVisible: i = !0 }) {
        const { model: r, controls: n } = F(),
            {
                horizontalScrollPosition: s,
                isDragging: l,
                isHorizontalThumbDragging: c,
                isVerticalThumbDragging: d,
                draggableClassName: h,
                isHorizontalBarVisible: _,
                isMouseDown: u,
                setIsMouseDown: g,
            } = pe(),
            [b, p] = a.useState(!1),
            [v, N] = a.useState(!1),
            T = r.premiumNodesByTier.get(),
            w = T ? Object.values(T).reduce((e, i) => Math.max(e, i.length), 0) : 0,
            j = r.maxCombinedTier.get(),
            S = m().play,
            P = !l && !(d || c),
            M = b && l,
            V = M || v,
            R = a.useRef(0);
        return (
            a.useEffect(() => {
                u || p(!1);
            }, [u]),
            a.useEffect(() => {
                const e = () => {
                        viewEnv.isWindowShownByViewEvent(4) || N(!1);
                    },
                    i = document.getElementById('techTreeNormalView');
                return (
                    i && i.addEventListener('mouseup', e),
                    () => {
                        i && i.removeEventListener('mouseup', e);
                    }
                );
            }, [N]),
            t.jsxs('div', {
                'data-test-id': 'premium-vehicles',
                className: o(ji, 0 === w && Si, P && Pi, _ && h, V && Mi, M && Vi),
                onMouseDown: (e) => {
                    if (2 === e.button) return void N(!0);
                    const i = 0 === e.button,
                        r = 1 === e.button;
                    (i || r) && _ && (g(!0), p(!0), (R.current = e.screenX));
                },
                onMouseEnter: () => S('premium-vehicles-mouse-over', { target: e.name }),
                onMouseLeave: () => S('premium-vehicles-mouse-out', { target: e.name }),
                children: [
                    t.jsx('div', { className: zi }),
                    t.jsx('div', {
                        className: Ri,
                        children: t.jsxs('div', {
                            className: Ci,
                            children: [
                                Xi.toUpperCase(Wi.readOrEmpty('tech_tree.premiumVehicles.title')),
                                t.jsx('div', { className: Ii }),
                            ],
                        }),
                    }),
                    t.jsx('div', {
                        className: Di,
                        children: t.jsx('div', {
                            className: ki,
                            style: { transform: `translateX(-${s}px)`, visibility: i ? 'visible' : 'hidden' },
                            children: x(j, (e) => {
                                const i = T[e + 1] ?? [],
                                    r = i.length > 4 ? i.length - 4 + 1 : 0,
                                    o = r ? i.slice(0, i.length - r) : i;
                                return t.jsxs(
                                    'div',
                                    {
                                        className: Bi,
                                        children: [
                                            t.jsx('div', { className: Ai }),
                                            o.map((e) =>
                                                t.jsx(
                                                    ni,
                                                    {
                                                        ...e,
                                                        className: Hi,
                                                        isSelected: !1,
                                                        onAddToCompare: n.onAddToCompare,
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            r > 0 &&
                                                t.jsx('div', {
                                                    className: Oi,
                                                    children: t.jsx(f, {
                                                        theme: 'secondary',
                                                        size: 'small',
                                                        onClick: () => n.onOpenPremiumShop(e + 1),
                                                        children: t.jsx('span', {
                                                            className: Ei,
                                                            children: t.jsx(y, {
                                                                text: Wi.readOrEmpty('tech_tree.premiumVehicles.more'),
                                                                params: {
                                                                    amount: t.jsx('span', {
                                                                        className: Li,
                                                                        children: r,
                                                                    }),
                                                                },
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                        ],
                                    },
                                    e,
                                );
                            }),
                        }),
                    }),
                    t.jsx('div', { className: Fi }),
                ],
            })
        );
    }),
    $i = {
        base: 'TierPaging_47475918',
        base__hidden: 'TierPaging_base__hidden_e6a3f596',
        arrow: 'TierPaging_arrow_e55a1dbb',
        arrow__start: 'TierPaging_arrow__start_f6b082f5',
        arrow__disabled: 'TierPaging_arrow__disabled_a58a039b',
    };
function Gi({ className: e, orientation: i = 'vertical', arrowClickStep: r, ...a }) {
    const { horizontalScrollPosition: n, containerWidth: s, contentWidth: l, moveScrollPosition: c } = pe(),
        d = l > s,
        h = d ? l - s : 0,
        _ = n < 10,
        u = n > h - 10,
        g = m().play,
        b = () => g('tier-paging-hover', { target: Gi.name }),
        p = () => g('tier-paging-click', { target: Gi.name });
    return t.jsxs('div', {
        ...a,
        className: o($i.base, e, !d && $i.base__hidden),
        children: [
            t.jsx('div', {
                className: o($i.arrow, $i.arrow__start, _ && $i.arrow__disabled),
                onMouseEnter: b,
                onClick: (e) => {
                    (p(), e.preventDefault(), e.stopPropagation(), c(-h, 0, true));
                },
            }),
            t.jsx('div', {
                className: o($i.arrow, $i.arrow__end, u && $i.arrow__disabled),
                onMouseEnter: b,
                onClick: (e) => {
                    (p(), e.preventDefault(), e.stopPropagation(), c(h, 0, true));
                },
            }),
        ],
    });
}
const Yi = 'DoubleScrollWrapper_hidden_81d74f4d';
function Ki({ isContentVisible: e = !0, ...i }) {
    return t.jsxs(t.Fragment, {
        children: [
            t.jsx(wi, {
                ...i,
                mouseWheelOrientation: 'vertical',
                HorizontalScrollBar: Gi,
                classNames: { content: e ? void 0 : Yi },
            }),
            t.jsx(Ui, { isContentVisible: e }),
        ],
    });
}
const qi = {
        base: 'TechTreeNormalView_37f334c7',
        background: 'TechTreeNormalView_background_c76beb2c',
        sidebar: 'TechTreeNormalView_sidebar_19f40f2f',
        nations: 'TechTreeNormalView_nations_5169e3fd',
        title: 'TechTreeNormalView_title_5d096b4b',
        collectorVehiclesLink: 'TechTreeNormalView_collectorVehiclesLink_abd7b0a4',
        collectorVehiclesLink__hidden: 'TechTreeNormalView_collectorVehiclesLink__hidden_1f410e4e',
        tableWrapper: 'TechTreeNormalView_tableWrapper_cb5fb82c',
        tableWrapper__withPremium: 'TechTreeNormalView_tableWrapper__withPremium_27a93d91',
        table: 'TechTreeNormalView_table_77c9a5bc',
        table_header: 'TechTreeNormalView_table_header_92b362ca',
        table_header_column: 'TechTreeNormalView_table_header_column_9ee471fa',
        table_header_column_ruler: 'TechTreeNormalView_table_header_column_ruler_4fb95a16',
        base__welcomeAnimation: 'TechTreeNormalView_base__welcomeAnimation_3890db25',
        table_header_column__topTier: 'TechTreeNormalView_table_header_column__topTier_3890db25',
        table_header_column_description: 'TechTreeNormalView_table_header_column_description_8fa80837',
        table_header_column_description_text: 'TechTreeNormalView_table_header_column_description_text_ee35c63f',
        grid: 'TechTreeNormalView_grid_c8faea0a',
        grid_rows: 'TechTreeNormalView_grid_rows_ebc0ed3',
        grid_row: 'TechTreeNormalView_grid_row_72f015fa',
        grid_row__mainLine: 'TechTreeNormalView_grid_row__mainLine_3890db25',
        grid_cell: 'TechTreeNormalView_grid_cell_2f7658f7',
        grid_tierHighlight: 'TechTreeNormalView_grid_tierHighlight_f3b67982',
    },
    Ji = _.resolve('strings'),
    Qi = _.resolve('intl'),
    Zi = { args: { tooltipId: 'vehicleCollectorInfo' } },
    er = l(function e() {
        const { model: i, controls: r } = F(),
            s = T(),
            l = m().play,
            c = i.selectedNation.get(),
            d = i.showWelcomeAnimation.get(),
            [h, _] = n.useState(!1),
            u = i.collectableVehiclesAvailable.get(),
            b = i.computes.getAvailableNations(),
            p = i.techTreeNodes.get(),
            f = i.firstHighlightedLevel.get(),
            N = i.maxCombinedTier.get(),
            y = i.premiumNodesByTier.get(),
            P = Object.keys(y).length > 0,
            M = d ? Math.max(N - f + 1, 0) : 0,
            V = x(M, (e) => f - 1 + e),
            R =
                d ||
                Object.values(p).some((e) => e.tier >= 5 && e.state !== I.Unresearched) ||
                Object.values(y)
                    .flat()
                    .some((e) => e.tier >= 3 && e.state !== I.Researched),
            C = a.useCallback(
                (e, i = 0) => {
                    if (!(e >= f - 1)) return 0;
                    if (!d) return 3e3 + 1e3 * i;
                    return 150 * i;
                },
                [f, d],
            );
        a.useEffect(() => {
            const i = [];
            return (
                Array.from({ length: N }, (r, o) => {
                    const a = C(o);
                    if (o >= f - 1 && d) {
                        const r = 'vehicle-highlighted-tier-appear',
                            o = setTimeout(() => {
                                l(r, { target: e.name });
                            }, a);
                        i.push(o);
                    }
                }),
                () => {
                    i.forEach((e) => clearTimeout(e));
                }
            );
        }, [c, N, l, d, f, C]);
        const D = (e) => {
            s.push(s.location, { nation: e });
        };
        w(S.ESCAPE, () => {
            s.goBack();
        });
        const k = b.indexOf(c);
        (w(S.ARROW_UP, (i) => {
            const r = b[k - 1];
            r && (l('increaseAmount', { target: e.name, original: i }), D(r));
        }),
            w(S.ARROW_DOWN, (i) => {
                const r = b[k + 1];
                r && (l('decreaseAmount', { target: e.name, original: i }), D(r));
            }));
        const { mainLineRowIndexes: B, rows: A } = ae(p),
            O = 100 / N,
            E = g(Zi),
            L = n.useRef(null),
            H = n.useRef(null),
            z = L.current,
            W = [N, A.length, P ? 'premium' : '_', R ? 'right' : 'left'].join('-');
        return (
            z !== W &&
                ((L.current = W),
                _(!1),
                H.current && clearTimeout(H.current),
                (H.current = setTimeout(() => {
                    (_(!0), j(!0));
                }, 150))),
            t.jsxs('div', {
                id: 'techTreeNormalView',
                className: o(qi.base, d && qi.base__welcomeAnimation),
                style: { '--nodeWidth': Math.floor(100 * O) / 100 + '%', '--columnCount': N },
                children: [
                    t.jsx('div', { className: qi.background }),
                    t.jsxs('div', {
                        className: qi.title,
                        children: [
                            Qi.toUpperCase(Ji.readOrEmpty(`tech_tree.nation.${c}`)),
                            t.jsx('div', {
                                'data-test-id': u ? 'collector-vehicles' : 'no-collector-vehicles',
                                ...E,
                                onMouseEnter: (i) => {
                                    (E.onMouseEnter(i),
                                        u && l('collector-vehicles-hover', { target: e.name, original: i }));
                                },
                                onClick: (i) => {
                                    (l('collector-vehicles-click', { target: e.name, original: i }),
                                        r.onOpenCollectableVehicles(c),
                                        E.onClick());
                                },
                                className: o(qi.collectorVehiclesLink, !u && qi.collectorVehiclesLink__hidden),
                            }),
                        ],
                    }),
                    t.jsx('div', {
                        className: qi.sidebar,
                        children: t.jsx(Pe, {
                            className: qi.nations,
                            availableNations: b,
                            selectedNation: c,
                            onSelectNation: D,
                        }),
                    }),
                    t.jsx('div', {
                        className: o(qi.tableWrapper, P && qi.tableWrapper__withPremium),
                        children: t.jsx(ve, {
                            initialVerticalCenter: !0,
                            initialScrollRight: R,
                            children: t.jsx(
                                Ki,
                                {
                                    scrollBarOffsetTop: 30,
                                    scrollBarOffsetBottom: 10,
                                    scrollBarOffsetRight: -15,
                                    isContentVisible: h,
                                    children: t.jsxs('div', {
                                        className: qi.table,
                                        children: [
                                            t.jsx(
                                                'div',
                                                {
                                                    className: qi.table_header,
                                                    children: Array.from({ length: N }, (e, i) => {
                                                        const r = i + 1,
                                                            a = r >= f,
                                                            n = `${C(i)}ms`;
                                                        return t.jsxs(
                                                            'div',
                                                            {
                                                                className: o(
                                                                    qi.table_header_column,
                                                                    a && qi.table_header_column__topTier,
                                                                ),
                                                                style: { animationDelay: n },
                                                                children: [
                                                                    v(r),
                                                                    t.jsx('div', {
                                                                        className: qi.table_header_column_ruler,
                                                                    }),
                                                                    a &&
                                                                        d &&
                                                                        t.jsx('div', {
                                                                            className:
                                                                                qi.table_header_column_description,
                                                                            children: t.jsx('div', {
                                                                                className:
                                                                                    qi.table_header_column_description_text,
                                                                                children: Qi.toUpperCase(
                                                                                    Ji.readOrEmpty(
                                                                                        'tech_tree.highlightedTierLabel',
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            i,
                                                        );
                                                    }),
                                                },
                                                c + '-table_header',
                                            ),
                                            t.jsxs('div', {
                                                className: o(qi.grid),
                                                style: { '--rowCount': A.length },
                                                children: [
                                                    t.jsx('div', {
                                                        className: qi.grid_rows,
                                                        children: A.map((e, i) =>
                                                            t.jsx(
                                                                'div',
                                                                {
                                                                    className: o(
                                                                        qi.grid_row,
                                                                        B.includes(i) && qi.grid_row__mainLine,
                                                                    ),
                                                                    children: e.map((e, a) => {
                                                                        const n = a + 1 >= f,
                                                                            s = o(
                                                                                qi.grid_cell,
                                                                                !e && qi.grid_cell__empty,
                                                                                qi.grid_cell__node,
                                                                                n && qi.grid_cell__topTier,
                                                                            ),
                                                                            l =
                                                                                c +
                                                                                '-' +
                                                                                i +
                                                                                '-' +
                                                                                a +
                                                                                '-' +
                                                                                (e ? e.type : 'empty') +
                                                                                Math.random();
                                                                        return e
                                                                            ? ((h = e),
                                                                              Boolean(
                                                                                  h &&
                                                                                  'object' == typeof h &&
                                                                                  'type' in h &&
                                                                                  'line' === h.type,
                                                                              )
                                                                                  ? t.jsx(
                                                                                        ke,
                                                                                        {
                                                                                            lineSegments: {
                                                                                                ...e.lineSegments,
                                                                                            },
                                                                                            className: s,
                                                                                        },
                                                                                        l,
                                                                                    )
                                                                                  : t.jsx(
                                                                                        ni,
                                                                                        {
                                                                                            ...e,
                                                                                            className: s,
                                                                                            isSelected: !1,
                                                                                            isTopTier: n,
                                                                                            showWelcomeAnimation: d,
                                                                                            onAddToCompare: () =>
                                                                                                r.onAddToCompare(e.id),
                                                                                            animationDelay: `${C(a, i)}ms`,
                                                                                        },
                                                                                        e.id,
                                                                                    ))
                                                                            : t.jsx('div', { className: s }, l);
                                                                        var h;
                                                                    }),
                                                                },
                                                                c + '-' + i,
                                                            ),
                                                        ),
                                                    }),
                                                    V.map((e) =>
                                                        t.jsx(
                                                            'div',
                                                            {
                                                                className: qi.grid_tierHighlight,
                                                                style: {
                                                                    '--columnIndex': e,
                                                                    animationDelay: `${C(e)}ms`,
                                                                },
                                                            },
                                                            c + '-highlightedTier-' + e,
                                                        ),
                                                    ),
                                                ],
                                            }),
                                        ],
                                    }),
                                },
                                c + '-doubleScrollWrapper',
                            ),
                        }),
                    }),
                ],
            })
        );
    }),
    ir = 'App_e7ddee44';
function rr() {
    const e = T();
    return (w(S.ESCAPE, e.goBack), t.jsx('div', { className: ir, children: t.jsx(er, {}) }));
}
P(
    t.jsx(M, {
        context: 'model.router',
        children: t.jsx(z, { children: t.jsx(V, { soundsOverrides: W, children: t.jsx(rr, {}) }) }),
    }),
    { fullScreen: !0 },
).then(() => j(!1));
